/**
 * Created by PyCharm.
 * User: akira
 * Date: 12/22/12
 * Time: 2:45 PM
 * To change this template use File | Settings | File Templates.
 */
function Ball(tex, rad, x, y, z){

  this.oscSpeed = Math.random();
  this.height = y;

  var ballGeo = new THREE.SphereGeometry( rad, 32, 32 );
  var ballMat = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture( tex ) } );
  ballMat.shininess = 24;
  ballMat.specular = new THREE.Color( 0x666666 );
  this.mesh = new THREE.Mesh( ballGeo, ballMat );

  this.mesh.castShadow = true;
  this.mesh.receiveShadow = true;

  this.mesh.position.x = x;
  this.mesh.position.z = z;
  this.mesh.position.y = this.height+rad;

  this.mesh.rotation.y = Math.random()*Math.PI*2;

  this.update = function(){
    this.mesh.rotation.y += 0.01;
    this.mesh.position.y = this.height+rad+Math.sin(this.oscSpeed*time/1000)+1;
  }
  
}