(function() {

  'use strict';

  // shared variables

  var vector = new THREE.Vector3();
  var matrix = new THREE.Matrix3();

  var EPS = 0.5 + 0.000001;
  var theta;
  var phi;
  var radius;
  var distance;
  var fovFactor;
  var cw;
  var ch;
  var aspect;

  REE.LockedOrbitControl = function(parameters) {

    REE.Control.call(this, parameters);

    var scope = this;

    this.onTrackend = function(event) {
      scope.domElement.requestPointerLock = scope.domElement.requestPointerLock ||
        scope.domElement.mozRequestPointerLock ||
        scope.domElement.webkitRequestPointerLock;
      scope.domElement.requestPointerLock();
      scope.domElement.addEventListener('click', function () {
        if (scope.domElement.requestFullscreen) {
          document.body.requestFullscreen();
        } else if (scope.domElement.msRequestFullscreen) {
          document.body.msRequestFullscreen();
        } else if (scope.domElement.mozRequestFullScreen) {
          document.body.mozRequestFullScreen();
        } else if (scope.domElement.webkitRequestFullscreen) {
          document.body.webkitRequestFullscreen();
        }
      });
    };

    this.onHover = function(event, pointers) {
      var pointer = new THREE.Vector2(event.movementX / 1000, - event.movementY / 1000);
      scope.rotate(pointer);
    };

    this.onTrack = function(event, pointers) {
      scope.rotate(pointers[0].delta);
    };

    this.onMousewheel = function(event, delta) {
      scope.zoom(new THREE.Vector2(0, delta / 1000));
    };
  };

  REE.LockedOrbitControl.prototype = Object.create(REE.Control.prototype);
  REE.LockedOrbitControl.prototype.constructor = REE.LockedOrbitControl;

  REE.LockedOrbitControl.prototype.rotate = function(delta) {

    this.camera._target = this.camera._target || new THREE.Vector3();

    vector.copy(this.camera.position).sub(this.camera._target);

    theta = Math.atan2(vector.x, vector.z);
    phi = Math.atan2(Math.sqrt(vector.x * vector.x + vector.z * vector.z), vector.y);

    theta -= delta.x * 3;
    phi -= -delta.y * 3;

    phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));

    radius = vector.length();

    vector.x = radius * Math.sin(phi) * Math.sin(theta);
    vector.y = radius * Math.cos(phi);
    vector.z = radius * Math.sin(phi) * Math.cos(theta);

    this.camera.position.copy(this.camera._target).add(vector);

    this.camera.lookAt(this.camera._target);

    this.dispatchEvent({type: 'render', bubble: true});

  };

  REE.LockedOrbitControl.prototype.zoom = function(delta) {

    this.camera._target = this.camera._target || new THREE.Vector3();

    if (this.camera instanceof THREE.PerspectiveCamera) {

      var distance = this.camera.position.distanceTo(this.camera._target);

      vector.set(0, 0, delta.y);

      vector.multiplyScalar(distance);

      if (vector.length() > distance) {
        return;
      }

      vector.applyMatrix3(matrix.getNormalMatrix(this.camera.matrix));

      this.camera.position.add(vector);

    } else if (this.camera instanceof THREE.OrthographicCamera) {

      this.camera.top *= 1 + delta.y;
      this.camera.right *= 1 + delta.y;
      this.camera.bottom *= 1 + delta.y;
      this.camera.left *= 1 + delta.y;

    }

    this.dispatchEvent({type: 'render', bubble: true});

  };

}());
