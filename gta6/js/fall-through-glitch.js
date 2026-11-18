import * as THREE from 'three/webgpu';

// Mod: "Blue Hell". A moment after you start driving, the taxi clips through the street and falls under the map while
// its physics keep running: it carries its momentum, tumbles, and keeps falling with the whole city hanging overhead,
// seen from below (post-processing.js draws the glowing street seam and the void). Deep enough down, the game "rescues"
// you back onto the street... and it happens again. G drops you through the street right away.

const ARM_DELAY = 1.2; // seconds on the street before it gives way
const CLIP_TIME = 0.32; // the car jitters and sinks into the asphalt
const GRAVITY = 9.81;
const DRAG = 0.016; // quadratic air drag (1/m): a terminal speed of about 25 m/s (55 mph), so the view lingers
const RESPAWN_DEPTH = 320; // metres under the street
const RESPAWN_TIME = 16; // seconds of falling

function smoothstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

// Static meshes resting on the ground have bottom faces (building boxes, sidewalk slabs, the island's seawall slab at
// -2.35 m...) that no one above the street ever sees. From below they would hide the city, so drop the triangles that
// face down and sit at street level. Geometry shared between meshes or instances keeps a triangle unless every use of
// it qualifies; double-sided, displaced or dynamically drawn geometry is left as it is.
function stripGroundUndersides(roots, maxY = 0.75) {
  const started = performance.now();
  const users = new Map();
  for (const root of roots) {
    root.updateMatrixWorld(true);
    root.traverse((o) => {
      if (!o.isMesh || o.isSkinnedMesh || o.isBatchedMesh || !o.geometry?.attributes?.position) return;
      let list = users.get(o.geometry);
      if (!list) users.set(o.geometry, (list = []));
      list.push(o);
    });
  }

  const matrix = new THREE.Matrix4();
  let removed = 0;
  let geometries = 0;
  for (const [geometry, meshes] of users) {
    const position = geometry.attributes.position;
    if (position.isInterleavedBufferAttribute || position.itemSize !== 3) continue;
    if (geometry.drawRange.start !== 0 || geometry.drawRange.count !== Infinity || geometry.morphAttributes.position) continue;
    const materials = meshes.flatMap((m) => (Array.isArray(m.material) ? m.material : [m.material]));
    if (materials.some((m) => !m || m.side !== THREE.FrontSide || m.positionNode || m.vertexNode)) continue;

    // World transforms of every use: [elements, sign of the determinant (mirrored transforms flip the front face)]
    const transforms = [];
    let usable = true;
    for (const m of meshes) {
      if (m.isInstancedMesh) {
        if (m.instanceMatrix.usage !== THREE.StaticDrawUsage || m.count !== m.instanceMatrix.count) usable = false;
        for (let i = 0; i < m.count && usable; i++) {
          m.getMatrixAt(i, matrix);
          matrix.premultiply(m.matrixWorld);
          transforms.push(matrix.elements.slice());
        }
      } else {
        transforms.push(m.matrixWorld.elements.slice());
      }
    }
    const index = geometry.index;
    const corners = index ? index.count : position.count;
    if (!usable || !transforms.length || transforms.length * corners > 6e7) continue;
    const signs = transforms.map((e) => Math.sign(new THREE.Matrix4().fromArray(e).determinant()) || 1);

    const p = position.array;
    const ix = index ? index.array : null;
    const keep = new Uint8Array(corners / 3);
    let dropped = 0;
    for (let t = 0; t < corners / 3; t++) {
      const a = (ix ? ix[t * 3] : t * 3) * 3;
      const b = (ix ? ix[t * 3 + 1] : t * 3 + 1) * 3;
      const c = (ix ? ix[t * 3 + 2] : t * 3 + 2) * 3;
      let strip = true;
      for (let k = 0; k < transforms.length && strip; k++) {
        const e = transforms[k];
        const ax = e[0] * p[a] + e[4] * p[a + 1] + e[8] * p[a + 2] + e[12];
        const ay = e[1] * p[a] + e[5] * p[a + 1] + e[9] * p[a + 2] + e[13];
        const az = e[2] * p[a] + e[6] * p[a + 1] + e[10] * p[a + 2] + e[14];
        const bx = e[0] * p[b] + e[4] * p[b + 1] + e[8] * p[b + 2] + e[12];
        const by = e[1] * p[b] + e[5] * p[b + 1] + e[9] * p[b + 2] + e[13];
        const bz = e[2] * p[b] + e[6] * p[b + 1] + e[10] * p[b + 2] + e[14];
        const cx = e[0] * p[c] + e[4] * p[c + 1] + e[8] * p[c + 2] + e[12];
        const cy = e[1] * p[c] + e[5] * p[c + 1] + e[9] * p[c + 2] + e[13];
        const cz = e[2] * p[c] + e[6] * p[c + 1] + e[10] * p[c + 2] + e[14];
        if (Math.max(ay, by, cy) > maxY) { strip = false; break; }
        const ux = bx - ax, uy = by - ay, uz = bz - az;
        const vx = cx - ax, vy = cy - ay, vz = cz - az;
        const nx = uy * vz - uz * vy;
        const ny = (uz * vx - ux * vz) * signs[k];
        const nz = ux * vy - uy * vx;
        const len = Math.hypot(nx, ny, nz);
        if (!(len > 0) || ny > -0.7 * len) strip = false;
      }
      if (strip) dropped++;
      else keep[t] = 1;
    }
    if (!dropped) continue;

    // Rebuild the index (and the groups, which address it) without the dropped triangles
    const vertexCount = position.count;
    const out = vertexCount > 65535 ? new Uint32Array((corners / 3 - dropped) * 3) : new Uint16Array((corners / 3 - dropped) * 3);
    const groups = geometry.groups.length ? geometry.groups : [{ start: 0, count: corners, materialIndex: 0 }];
    const newGroups = [];
    let n = 0;
    for (const g of groups) {
      const start = n;
      const end = Math.min(corners, g.start + g.count);
      for (let i = g.start; i < end; i += 3) {
        if (!keep[i / 3]) continue;
        out[n++] = ix ? ix[i] : i;
        out[n++] = ix ? ix[i + 1] : i + 1;
        out[n++] = ix ? ix[i + 2] : i + 2;
      }
      newGroups.push({ start, count: n - start, materialIndex: g.materialIndex });
    }
    geometry.setIndex(new THREE.BufferAttribute(n === out.length ? out : out.slice(0, n), 1));
    if (geometry.groups.length) {
      geometry.clearGroups();
      for (const g of newGroups) geometry.addGroup(g.start, g.count, g.materialIndex);
    }
    removed += dropped;
    geometries++;
  }
  console.log(`[mod] under-the-map: dropped ${removed} ground-level undersides from ${geometries} geometries in ${Math.round(performance.now() - started)}ms`);
}

class FallThroughGlitch {
  constructor({ scene, controllerManager, cameraSystem, colorGrade }) {
    this.controllers = controllerManager;
    // Between the street (0 m) and the harbour (-2.2 m) the camera would see the water's top side
    this.water = scene.getObjectByName('HarborWater');
    this._forward = new THREE.Vector3();
    this.cameraSystem = cameraSystem;
    this.colorGrade = colorGrade;
    this.ready = false; // set once the loading screen is gone

    this.phase = 'armed'; // 'armed' -> 'clipping' -> 'falling' -> (respawn) 'armed'
    this.timer = 0;
    this.velocity = new THREE.Vector3();
    this.spin = new THREE.Vector3(); // tumble rates: pitch, yaw, roll (rad/s)
    this.tumble = new THREE.Euler(0, 0, 0, 'YXZ');
    this.wheelSpin = 0;
    this.fallFrom = { x: 0, z: 0, heading: 0 };
    this.under = 0; // how far under the map the camera is, 0..1
    this.pulse = 0;
    this.time = 0;

    const car = this.controllers.entities.car;
    car.mesh.rotation.order = 'YXZ';
    // The contact shadow would hang under a car with no ground beneath it
    this.carShadow = null;
    car.mesh.traverse((o) => {
      if (o.isMesh && o.renderOrder === 998) this.carShadow = o;
    });

    // Teleporting (presets, the map, the rescue below) lands the car back on the street, at rest
    const teleport = controllerManager.teleportActiveTo.bind(controllerManager);
    controllerManager.teleportActiveTo = (...args) => {
      if (this.falling) this.respawn();
      return teleport(...args);
    };

    window.addEventListener('keydown', (e) => {
      if (e.code !== 'KeyG' || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      if (this.controllers.activeMode !== 'car') return;
      if (this.phase === 'armed') this.startClip();
    });
  }

  get falling() {
    return this.phase === 'clipping' || this.phase === 'falling';
  }

  startClip() {
    const car = this.controllers.entities.car;
    this.phase = 'clipping';
    this.timer = 0;
    this.fallFrom = { x: car.position.x, z: car.position.z, heading: car.heading };
    // Momentum carries on: heading speed plus any sideways slide
    const sin = Math.sin(car.heading), cos = Math.cos(car.heading);
    this.velocity.set(sin * car.speed + car.vx, 0, cos * car.speed + car.vz);
    const forward = car.speed;
    this.spin.set(
      0.25 + Math.min(0.6, Math.abs(forward) * 0.025) * Math.sign(forward || 1) + Math.random() * 0.15,
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.9
    );
    this.tumble.set(car.chassisPivot.rotation.x, 0, car.chassisPivot.rotation.z);
    this.wheelSpin = car.wheelSpin || 0;
    car.fallThrough = true;
    car.vx = car.vz = car.angularVel = 0;
    if (this.carShadow) this.carShadow.visible = false;
  }

  respawn() {
    const car = this.controllers.entities.car;
    car.fallThrough = false;
    this.phase = 'armed';
    this.timer = 0;
    this.tumble.set(0, 0, 0);
    car.mesh.rotation.set(0, car.heading, 0);
    if (this.carShadow) this.carShadow.visible = true;
    this.cameraSystem.minHeight = 0.55;
    this.cameraSystem.followYRate = 8.5;
  }

  // Back on the street where you fell, at rest (unless you were teleported somewhere else meanwhile)
  rescue() {
    const { x, z, heading } = this.fallFrom;
    this.respawn();
    if (this.controllers.activeMode === 'car') {
      this.controllers.teleportActiveTo(x, z, heading);
      this.cameraSystem.resetForTeleport();
    } else {
      const car = this.controllers.entities.car;
      car.position.set(x, this.controllers.getGroundHeight(x, z, 'car'), z);
      car.speed = 0;
    }
  }

  // Physics, before the controllers update (they copy the position onto the mesh)
  update(dt, elapsed) {
    this.time = elapsed;
    const controllers = this.controllers;
    const car = controllers.entities.car;

    if (this.phase === 'armed') {
      if (this.ready && controllers.activeMode === 'car') {
        this.timer += dt;
        if (this.timer >= ARM_DELAY) this.startClip();
      }
      this.pulse = Math.max(0, this.pulse - dt * 4);
      return;
    }

    // Leaving the taxi mid-fall puts it back on the street
    if (controllers.activeMode !== 'car') {
      this.rescue();
      return;
    }

    this.timer += dt;
    const keys = controllers.keys;
    const steer = (+keys.left || 0) - (+keys.right || 0);
    const throttle = (+keys.forward || 0) - (+keys.backward || 0);

    if (this.phase === 'clipping') {
      // The collision resolves the wrong way: the car shudders, then sinks into the asphalt
      const t = this.timer / CLIP_TIME;
      const ground = controllers.getGroundHeight(car.position.x, car.position.z, 'car');
      car.position.x += this.velocity.x * dt;
      car.position.z += this.velocity.z * dt;
      car.position.y = ground - t * t * 0.9 + (Math.random() - 0.5) * 0.12 * (1 - t);
      this.tumble.x += (Math.random() - 0.5) * 0.08;
      this.tumble.z += (Math.random() - 0.5) * 0.1;
      this.pulse = Math.min(1, 0.4 + t);
      if (this.timer >= CLIP_TIME) {
        this.phase = 'falling';
        this.timer = 0;
        this.velocity.y = -2.2;
      }
    } else {
      // Free fall with quadratic drag; the simulation keeps running as if nothing were wrong
      const v = this.velocity;
      const speed = v.length();
      v.y -= GRAVITY * dt;
      v.multiplyScalar(1 / (1 + DRAG * speed * dt));
      car.position.addScaledVector(v, dt);
      // Tumbling builds up slowly; steering still yaws the car, the throttle still spins the wheels
      this.spin.x += (Math.random() - 0.5) * 0.4 * dt;
      this.spin.z += (Math.random() - 0.5) * 0.4 * dt;
      this.spin.y += steer * 1.6 * dt;
      this.tumble.x += this.spin.x * dt;
      this.tumble.y += this.spin.y * dt;
      this.tumble.z += this.spin.z * dt;
      this.pulse = Math.max(0, this.pulse - dt * 2.5);
      const depth = -car.position.y;
      if (depth > RESPAWN_DEPTH || this.timer > RESPAWN_TIME) {
        this.rescue();
        return;
      }
    }

    this.wheelSpin = (this.wheelSpin + (Math.abs(car.speed) * 0.04 + throttle * 0.6) * dt * 20) % (Math.PI * 2);
    car.speed = this.velocity.length() * Math.sign(car.speed || 1);
    car.prevX = car.position.x;
    car.prevZ = car.position.z;
  }

  // Pose the car once the controllers have placed it (they set the mesh's position and heading)
  poseCar() {
    if (!this.falling) return;
    const car = this.controllers.entities.car;
    const m = car.mesh;
    m.rotation.set(this.tumble.x, car.heading + this.tumble.y, this.tumble.z, 'YXZ');
    // Tumble about the body's centre rather than the wheels' contact patch
    const lift = 0.72;
    const q = m.quaternion;
    const up = new THREE.Vector3(0, lift, 0).applyQuaternion(q);
    m.position.set(car.position.x, car.position.y + lift - up.y, car.position.z);
    m.position.x -= up.x;
    m.position.z -= up.z;
    car.wheelSpin = this.wheelSpin;
    for (const w of car.wheels) w.tire.rotation.x = this.wheelSpin + (w.isFront ? 0 : 0.55);
  }

  // After the camera system: let the follow cameras dive with the car, tilt toward the city overhead, and feed the
  // post-processing how far under the map the view is
  updateCamera(dt) {
    const cs = this.cameraSystem;
    const camera = cs.camera;
    const car = this.controllers.entities.car;
    const falling = this.falling && this.controllers.activeMode === 'car';
    cs.minHeight = falling ? -Infinity : 0.55;
    cs.followYRate = falling ? 26 : 8.5;

    const depth = Math.max(0, -camera.position.y);
    const target = smoothstep(0.1, 1.6, depth);
    this.under += (target - this.under) * (1 - Math.exp(-dt * 10));
    if (this.under < 1e-3 && target === 0) this.under = 0;

    if (this.water) this.water.visible = !falling;

    if (falling && cs.getActivePreset().category === 'follow') {
      const carDepth = Math.max(0, -car.position.y);
      // The chase camera drops toward the car's level unless the player is orbiting it
      if (!cs.isDragging && cs.userOrbitTimer <= 0) cs.orbitPitchOffset += (-0.12 - cs.orbitPitchOffset) * (1 - Math.exp(-dt * 2));
      // Look a little above the horizon, keeping the glowing seam in frame, and further up at the receding city the
      // deeper the fall; the view sways with it
      const forward = camera.getWorldDirection(this._forward);
      const elevation = Math.asin(Math.max(-1, Math.min(1, forward.y)));
      const want = 0.05 + 0.13 * smoothstep(15, 220, carDepth);
      camera.rotateX((want - elevation) * this.under);
      camera.rotateZ(Math.sin(this.time * 0.9) * 0.045 * this.under);
      if (this.phase === 'clipping') {
        camera.position.x += (Math.random() - 0.5) * 0.12;
        camera.position.y += (Math.random() - 0.5) * 0.12;
      }
      camera.updateMatrixWorld();
    }

    this.colorGrade.setUnderground(this.under, this.time, this.pulse);
  }
}

export { FallThroughGlitch, stripGroundUndersides };
