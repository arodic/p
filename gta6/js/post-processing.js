import * as THREE from 'three/webgpu';
import {
  Fn,
  uniform,
  float,
  vec2,
  vec3,
  vec4,
  dot,
  mix,
  min,
  max,
  pow,
  smoothstep,
  length,
  screenUV,
  screenSize,
  abs,
  exp,
  sin,
  floor,
  fract,
  step,
  normalize,
  getViewPosition
} from 'three/tsl';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';

// Scene-linear color grading and lens bloom, composed in the existing final render pass.

// Exposure and white balance belong to the camera, independently of the physical lighting presets.
// Keep exposure restrained for ACES; stronger bloom stays selective so midtones retain their contrast.
const LOOKS = {
  golden:   { exposure: 1.04, contrast: 1.12, saturation: 1.08, balance: [1.045, 1.00, 0.955], bloom: 0.24, threshold: 1.20 },
  midday:   { exposure: 1.00, contrast: 1.10, saturation: 1.06, balance: [1.015, 1.00, 0.985], bloom: 0.18, threshold: 1.35 },
  twilight: { exposure: 1.06, contrast: 1.10, saturation: 1.08, balance: [1.025, 0.995, 1.015], bloom: 0.28, threshold: 1.05 },
  midnight: { exposure: 1.04, contrast: 1.08, saturation: 1.06, balance: [0.985, 1.00, 1.035], bloom: 0.30, threshold: 1.00 }
};

const hash3 = (p) => fract(sin(vec3(
  dot(p, vec3(127.1, 311.7, 74.7)),
  dot(p, vec3(269.5, 183.3, 246.1)),
  dot(p, vec3(113.5, 271.9, 124.6))
)).mul(43758.5453));

// Under the map ("Blue Hell"): the look of the city once the camera has fallen through the street. Every surface is
// one-sided, so from below the street is see-through and the city hangs overhead; the street plane itself, seen edge
// on, is a white-hot seam at the horizon over a dark navy void with embers in it. Scene-linear HDR, before bloom, so
// the seam and the overexposed city glow.
function underTheMap(sceneHDR, dir, isSky, distance, under, time) {
  const e = dir.y; // sine of the view ray's elevation: 0 on the horizon, where the street plane is seen edge on
  const below = smoothstep(0.004, -0.004, e);
  const far = smoothstep(25.0, 70.0, distance); // nearby things (the car) hide the seam

  // The void below the street: deep navy, lifting a little toward the horizon
  const voidColor = mix(vec3(0.004, 0.006, 0.016), vec3(0.02, 0.026, 0.056), exp(e.mul(22.0)));
  // The sky seen through the street from below dims and warms, so the lit city reads against it
  const dimSky = sceneHDR.mul(vec3(0.36, 0.28, 0.21));
  // The city overhead: warm and hot (the car close by keeps its own colours)
  const city = mix(sceneHDR, sceneHDR.mul(vec3(1.2, 1.03, 0.84)), far);
  const base = mix(city, mix(dimSky, voidColor, below), isSky);

  // The seam: a thin white-hot core and a warm halo, shimmering along the horizon
  const ae = abs(e);
  const shimmer = sin(dir.x.mul(83.0).add(time.mul(1.7))).mul(sin(dir.z.mul(61.0).sub(time.mul(1.3)))).mul(0.3).add(0.85);
  const above = step(0.0, e);
  const seam = vec3(1.0, 0.95, 0.86).mul(exp(ae.mul(-540.0)).mul(15.0))
    // the glow spills up into the city and barely into the void
    .add(vec3(1.0, 0.76, 0.46).mul(exp(ae.mul(mix(-140.0, -48.0, above))).mul(mix(0.3, 1.0, above))))
    .add(vec3(1.0, 0.62, 0.32).mul(exp(max(e, 0.0).mul(-9.0)).mul(above).mul(0.14)))
    .mul(shimmer);
  // A fainter orange seam just under it (the underside of the curb line), wavering slightly
  const lowE = float(-0.021).add(sin(dir.x.mul(23.0).add(dir.z.mul(17.0)).add(time.mul(0.8))).mul(0.0015));
  const lowSeam = vec3(1.0, 0.42, 0.1).mul(exp(abs(e.sub(lowE)).mul(-1100.0)).mul(3.2));

  // Embers: world-stable specks in the void just under the seam, densest at the street plane
  const p = dir.mul(130.0);
  const h = hash3(floor(p));
  const offset = hash3(floor(p).add(17.0)).mul(0.6).add(0.2);
  const speck = smoothstep(0.26, 0.04, length(fract(p).sub(offset)));
  const density = exp(min(e, 0.0).mul(55.0)).mul(0.6).mul(below);
  const twinkle = sin(time.mul(5.0).add(h.y.mul(40.0))).mul(0.4).add(0.6);
  const embers = vec3(1.0, 0.36, 0.05).mul(speck.mul(step(h.x, density)).mul(twinkle).mul(7.0));

  const glow = seam.add(lowSeam).add(embers).mul(far);
  return mix(sceneHDR, base.add(glow), under);
}

function createPostProcessing(renderer, sceneColor, reflections, { camera = null, depth = null } = {}) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // Exposure is applied before bloom so its threshold follows the image's exposed brightness.
  // RenderPipeline performs ACES and the output color-space conversion exactly once, after this graph.
  renderer.toneMappingExposure = 1.0;

  const exposure = uniform(1.0);
  const contrast = uniform(1.0);
  const saturation = uniform(1.0);
  const balance = uniform(new THREE.Vector3(1, 1, 1));

  // Under the map (fall-through-glitch.js): 0 at street level .. 1 once the camera is below the street
  const under = uniform(0);
  const glitchTime = uniform(0);
  const glitchPulse = uniform(0); // the moment the street gives way: tearing and fringing
  let sceneHDR = sceneColor.rgb;
  let underground = null;
  let belowHorizon = float(0);
  if (camera && depth) {
    // Rows tear sideways while the street gives way; RGB fringes once under the map
    const row = floor(screenUV.y.mul(42.0));
    const tear = hash3(vec3(row, floor(glitchTime.mul(24.0)), 3.0)).x.sub(0.5).mul(glitchPulse).mul(0.07);
    const uv0 = vec2(screenUV.x.add(tear), screenUV.y);
    const fringe = uv0.sub(0.5).mul(under.mul(0.0065).add(glitchPulse.mul(0.02)));
    sceneHDR = vec3(sceneColor.sample(uv0.add(fringe)).r, sceneColor.sample(uv0).g, sceneColor.sample(uv0.sub(fringe)).b);

    const projectionInverse = uniform(camera.projectionMatrixInverse);
    const cameraWorld = uniform(camera.matrixWorld);
    const sceneDepth = depth.sample(uv0).r;
    // Any depth unprojects onto the pixel's view ray; the scene depth gives its distance as well
    const viewDir = getViewPosition(screenUV, float(0.5), projectionInverse);
    const dir = normalize(cameraWorld.mul(vec4(viewDir, 0.0)).xyz);
    const distance = getViewPosition(uv0, sceneDepth, projectionInverse).z.negate();
    const isSky = renderer.reversedDepthBuffer ? step(sceneDepth, 0.0) : step(1.0, sceneDepth);
    underground = (hdr) => underTheMap(hdr, dir, isSky, distance, under, glitchTime);
    belowHorizon = smoothstep(0.006, -0.05, dir.y).mul(smoothstep(25.0, 70.0, distance)).mul(under);
  }

  let exposed = max(sceneHDR.add(reflections.rgb), vec3(0)).mul(exposure).mul(balance);
  if (underground) exposed = underground(exposed);

  // Limit only bloom's peak radiance, scaling RGB together to retain neon and lamp colors.
  // The original HDR image keeps its full range for the tone mapper's highlight shoulder.
  const peak = max(max(exposed.r, exposed.g), exposed.b);
  const bloomInput = vec4(exposed.mul(float(8.0).div(max(peak, 8.0))), 1.0);
  const bloomPass = bloom(bloomInput, 0.24, 0.40, 1.20);
  bloomPass.smoothWidth.value = 0.30;
  bloomPass.setResolutionScale(0.35);

  const outputNode = Fn(() => {
    const color = exposed.add(bloomPass.rgb).toVar();
    // The void stays navy under the seam's warm bloom
    color.mulAssign(mix(vec3(1), vec3(0.62, 0.74, 1.18), belowHorizon));
    const luma = dot(color, vec3(0.2126, 0.7152, 0.0722)).toVar();

    // Gentle cool shadow / warm highlight separation; multiply rather than lifting the black level.
    const shadows = mix(vec3(0.965, 1.005, 1.045), vec3(1), smoothstep(0.02, 0.60, luma));
    const highlights = mix(vec3(1), vec3(1.035, 1.005, 0.965), smoothstep(0.60, 3.0, luma));
    color.mulAssign(shadows.mul(highlights));

    // Contrast pivots around middle gray and scales RGB together, avoiding per-channel gamma shifts.
    color.mulAssign(pow(max(luma, 0.0001).div(0.18), contrast.sub(1.0)));
    const gray = dot(color, vec3(0.2126, 0.7152, 0.0722));
    const chroma = max(max(color.r, color.g), color.b).sub(min(min(color.r, color.g), color.b));
    const vibrance = float(0.10).mul(float(1).sub(chroma.div(max(max(max(color.r, color.g), color.b), 0.0001))));
    color.assign(max(mix(vec3(gray), color, saturation.add(vibrance)), vec3(0)));

    // Normalize by the corner radius so the lens falloff remains subtle in portrait and landscape.
    const aspect = screenSize.x.div(screenSize.y);
    const radius = length(screenUV.sub(0.5).mul(vec2(aspect, 1))).div(length(vec2(aspect, 1).mul(0.5)));
    // Under the map the lens closes in: a heavy, slightly cool vignette
    const vignette = float(1).sub(smoothstep(mix(0.35, 0.2, under), 1.0, radius).mul(mix(0.12, 0.62, under)));
    color.mulAssign(mix(vec3(1), vec3(0.92, 0.95, 1.08), smoothstep(0.4, 1.0, radius).mul(under)));
    return vec4(color.mul(vignette), 1.0);
  })();

  let look = LOOKS.golden;
  let underAmount = 0;

  function applyLook() {
    const u = underAmount;
    exposure.value = look.exposure * (1 + 0.08 * u);
    contrast.value = look.contrast + 0.14 * u;
    saturation.value = look.saturation;
    balance.value.set(...look.balance);
    // Under the map everything bright blooms: lower threshold, stronger and wider glow
    bloomPass.strength.value = look.bloom + (0.62 - look.bloom) * u;
    bloomPass.threshold.value = look.threshold + (0.85 - look.threshold) * u;
    bloomPass.radius.value = 0.40 + 0.15 * u;
  }

  function applyPreset(id) {
    look = LOOKS[id] || LOOKS.golden;
    applyLook();
  }

  // amount: 0 at street level .. 1 under the map; pulse: 0..1 while the street gives way
  function setUnderground(amount, time, pulse) {
    under.value = amount;
    glitchTime.value = time;
    glitchPulse.value = pulse;
    if (amount !== underAmount) {
      underAmount = amount;
      applyLook();
    }
  }

  applyPreset('golden');
  return { outputNode, applyPreset, setUnderground };
}

export { createPostProcessing };
