var lastTouchTime = new Date().getTime();

var touch = new THREE.Vector2();
var dragging = false;
var coord, coordOld;

var controls;
var controlsGui;

initControls = function(){

  controls = {
    lat: 0,
    lon: 0,
    tilt: 90,
    dolly: 0,
    zoom: 1,
    day: 0,
    dayRange: lastDay,
    dayFadeIn: 0,
    dayFadeOut: 0,
    hour: 0,
    hourRange: 24,
    hourFadeIn: 0,
    hourFadeOut: 0,
    sunday: true,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true
  };

  controlsGui = new dat.GUI();
  controlsGui.add( controls, 'lat', -90, 90 ).listen();
  controlsGui.add( controls, 'lon', -90, 90 ).listen();
  controlsGui.add( controls, 'tilt', 0, 90 ).listen();
  controlsGui.add( controls, 'dolly', -180, 180 ).listen();
  controlsGui.add( controls, 'zoom', 0, 1 ).listen();

  controlsGui.add( controls, 'day', 0, lastDay ).listen();
  controlsGui.add( controls, 'dayRange', 0, lastDay ).listen();
  controlsGui.add( controls, 'dayFadeIn', 0, lastDay ).listen();
  controlsGui.add( controls, 'dayFadeOut', 0, lastDay ).listen();

  controlsGui.add( controls, 'hour', 0, 24 ).listen();
  controlsGui.add( controls, 'hourRange', 0, 24 ).listen();
  controlsGui.add( controls, 'hourFadeIn', 0, 1 ).listen();
  controlsGui.add( controls, 'hourFadeOut', 0, 1 ).listen();

  controlsGui.add( controls, 'sunday' ).listen();
  controlsGui.add( controls, 'monday' ).listen();
  controlsGui.add( controls, 'tuesday' ).listen();
  controlsGui.add( controls, 'wednesday' ).listen();
  controlsGui.add( controls, 'thursday' ).listen();
  controlsGui.add( controls, 'friday' ).listen();
  controlsGui.add( controls, 'saturday' ).listen();

  controlsGui.domElement.style.float = 'right';

  controlsGui.close();

  projector = new THREE.Projector();
  
  bindTouchStart("#canvas", function(event){
    touchStart(event);
  });
  bindTouchMove("#canvas", function(event){
    event.preventDefault();
    touchMove(event);
  });
  bindTouchEnd("#canvas", function(event){
    event.preventDefault();
    touchEnd(event);
  });
  bindScroll("#canvas", function(event){
    event.preventDefault();
    scrollMove(event);
  });


}

function scrollMove(event) {

  var delta = 0;

  if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

    delta = event.wheelDelta;

  } else if ( event.detail ) { // Firefox

    delta = - event.detail;

  }

  if ( delta > 0 ) {

      controls.zoom = Math.min((controls.zoom * 1.025), 1);

    } else {

      controls.zoom = Math.max((controls.zoom * 0.975), 0.3);

    }

}

function touchMove(event) {
  e = getTouch(event);
  touch = new THREE.Vector2(
    (e.pageX / window.innerWidth) * 2 - 1,
    - (e.pageY / window.innerHeight) * 2 + 1);

  //console.log('12');

  if (dragging) {
    
    var hit = getIntersections();

    if (hit) {
      
      coord = getLatLon(hit);

      controls.lon += coordOld.x - coord.x;
      controls.lat += coordOld.y - coord.y;

      controls.lat = Math.max(Math.min(controls.lat, 90), -90);
      controls.lon = ((controls.lon+180) % 360) - 180;
      controls.lon = ((controls.lon-180) % 360) + 180;

      updateCamera();

      hit = getIntersections();
      coordOld = getLatLon(hit);

    }
    // coordOld = coord.clone();

  }

}

function touchStart(event){
  dragging = true;
  var hit = getIntersections();

  if (hit) {
    coord = getLatLon(hit);
    coordOld = coord.clone();
  }

}

function touchEnd(event){
  dragging = false;
  var timeNow = new Date().getTime();

  if ((timeNow-lastTouchTime) < 300) {
    var hit = getIntersections();
    var coord = getLatLon(hit);

    new TWEEN.Tween( controls ).to( { lat: coord.y, lon: coord.x, zoom: controls.zoom*0.68 }, 2000 ).easing( TWEEN.Easing.Quadratic.InOut ).start();

  }

  lastTouchTime = timeNow;

}

function getIntersections(){
  var vector = new THREE.Vector3( touch.x, touch.y, 1 );
  projector.unprojectVector( vector, camera );
  var cameraPos = new THREE.Vector3(camera.matrixWorld.elements[12],camera.matrixWorld.elements[13],camera.matrixWorld.elements[14]);
  raycaster = new THREE.Raycaster( cameraPos, vector.sub( cameraPos ).normalize() );
  var intersects = raycaster.intersectObjects( [globe] );
  var hit = false;
  var l = intersects.length;
  if ( l ) {
      hit = intersects[0].point;
    }
  return hit;
}

function getLatLon(vec){
  
  var vecNorm = vec.clone().normalize();
  var a = Math.sqrt( Math.pow(-vecNorm.z,2) + Math.pow(vecNorm.x,2) );
  var b = Math.sqrt( 1 - Math.pow(a, 2) );
  b = (vecNorm.y < 0) ? -b : b;
        
  return new THREE.Vector2(
    Math.atan2(-vecNorm.z, vecNorm.x) * 180 / Math.PI,
    Math.atan2(a, b) * 180 / Math.PI - 90);
}

