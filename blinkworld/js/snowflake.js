//*******************************************************************************************
// PAHULJA ----------------------------------------------------------------------------------
function Snowflake(){
	var rad=1;
	this.oscSpeed = Math.random()+1;
	this.x;
	this.z;

	var ballGeo = new THREE.SphereGeometry( 0.1, 2, 2 );
	var ballMat = new THREE.MeshBasicMaterial( {color: 0xffffff, opacity: 1 } );
	this.mesh = new THREE.Mesh( ballGeo, ballMat );

	// Bez senki
	this.mesh.castShadow = false;
	this.mesh.receiveShadow = false;


	// Po�etna pozicija --------------------------------------------------------------------------------
	this.resetPosition = function() {
		this.x = this.mesh.position.x = Math.random()*50-25;
		this.mesh.position.y = Math.random()*SNOWFLAKE_HEIGHT;
		this.z = this.mesh.position.z = Math.random()*50-25;
	}



	// Animiranje --------------------------------------------------------------------------------------
	this.update = function() {
		// Padanje
		if(this.mesh.position.y<0) {
			this.resetPosition();}
		else {
			this.mesh.position.y -= 0.01;}

		// Lelujanje
		this.mesh.position.x = this.x + Math.sin(this.oscSpeed*time/1000);
		this.mesh.position.z = this.z + Math.cos(this.oscSpeed*time/1000);
	}
}