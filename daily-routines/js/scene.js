/**
 * Created by PyCharm.
 * User: akira
 * Date: 12/31/12
 * Time: 7:25 PM
 * To change this template use File | Settings | File Templates.
 */

var EARTH_RADIUS = 6371;

var camera, cameraLon, cameraLat, scene, globe, marker, cameraTarget = [0,0];

function initScene(){
  scene = new THREE.Scene();

  cameraLon = new THREE.Object3D();
  cameraLat = new THREE.Object3D();
  cameraTilt = new THREE.Object3D();
  cameraDolly = new THREE.Object3D();
  cameraDolly.position.x = -EARTH_RADIUS;

  camera = new THREE.PerspectiveCamera( 25 , window.innerWidth / window.innerHeight, 0.1, 100000 );
  camera.rotation.y = -Math.PI/2;

  cameraLon.add(cameraLat);
  cameraLat.add(cameraDolly);
  cameraDolly.add(cameraTilt);
  cameraTilt.add(camera);

  scene.add(cameraLon);

  globe = new THREE.Mesh(
    new THREE.SphereGeometry( EARTH_RADIUS, 256, 256 ),
    new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( "./images/world2k.jpg" )} )
  );
  scene.add( globe );

  backdrop = new THREE.Mesh(
    new THREE.PlaneGeometry( EARTH_RADIUS*4, EARTH_RADIUS*4, 1, 1 ),
    new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( "./images/backdrop.jpg" )} )
  );
  scene.add( backdrop );

}