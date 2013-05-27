function animate() {

  TWEEN.update();
  updateCamera();

  render();
  requestAnimationFrame( animate );

}

function render() {
  renderer.render( scene, camera );
}

function updateCamera() {

  cameraLat.rotation.z = controls.lat/180*Math.PI;
  cameraLon.rotation.y = (180 + controls.lon) / 180 * Math.PI;
  cameraTilt.rotation.z = (90 - controls.tilt) / 180 * Math.PI;
  cameraDolly.rotation.x = controls.dolly / 180 * Math.PI;
  camera.position.x = -EARTH_RADIUS * Math.pow(controls.zoom, 8) * 4;

  var scale = 1-Math.max(controls.zoom-0.5,0)/100;
  globe.scale.set(scale, scale, scale);

  // cameraLat.updateMatrix();
  cameraLat.updateMatrixWorld();
  // cameraLon.updateMatrix();
  cameraLon.updateMatrixWorld();
  // cameraTilt.updateMatrix();
  // cameraTilt.updateMatrixWorld();
  // cameraDolly.updateMatrix();
  // cameraDolly.updateMatrixWorld();
  // camera.updateMatrix();
  camera.updateMatrixWorld();

  backdrop.lookAt( new THREE.Vector3().getPositionFromMatrix(camera.matrixWorld) );

  scene.updateMatrixWorld();
  scene.traverse(function ( object ) {
    if ( object instanceof THREE.LOD ) {
      object.update( camera );
      for (var i in object.children) {

        if (object.children[i].material.uniforms.day){

          object.children[i].material.uniforms.day.value = controls.day;
          object.children[i].material.uniforms.dayRange.value = controls.dayRange;
          object.children[i].material.uniforms.dayFadeIn.value = controls.dayFadeIn;
          object.children[i].material.uniforms.dayFadeOut.value = controls.dayFadeOut;
          object.children[i].material.uniforms.hour.value = controls.hour;
          object.children[i].material.uniforms.hourRange.value = controls.hourRange;
          object.children[i].material.uniforms.hourFadeIn.value = controls.hourFadeIn;
          object.children[i].material.uniforms.hourFadeOut.value = controls.hourFadeOut;

          object.children[i].material.uniforms.sunday.value = controls.sunday;
          object.children[i].material.uniforms.monday.value = controls.monday;
          object.children[i].material.uniforms.tuesday.value = controls.tuesday;
          object.children[i].material.uniforms.wednesday.value = controls.wednesday;
          object.children[i].material.uniforms.thursday.value = controls.thursday;
          object.children[i].material.uniforms.friday.value = controls.friday;
          object.children[i].material.uniforms.saturday.value = controls.saturday;

        }

      }
    }
  });

}

var animation;
var animationGui;

function initSequence() {

  var animations = {
    'SanFrancisco': animateSanFrancisco,
    'Belgrade': animateBelgrade,
    'Savannah': animateSavannah,
    'Orlando': animateOrlando,
    'HongKong': animateHongKong,
    'NewYork': animateNewYork,
    'WashingtonDC': animateWashingtonDC,
    'Baltimore': animateBaltimore,
    'Chicago': animateChicago,
    'LosAngeles': animateLosAngeles,
    'LasVegas': animateLasVegas,
    'VancouverBC': animateVancouverBC,
    'Amsterdam': animateAmsterdam,
    'Lima': animateLima,
    'SaoPaulo': animateSaoPaulo,
    'Mammoth': animateMammoth,
    'Tahoe': animateTahoe
  };

  var animationsGui = new dat.GUI();
  animationsGui.add( animations, 'SanFrancisco');
  animationsGui.add( animations, 'Belgrade');
  animationsGui.add( animations, 'Savannah');
  animationsGui.add( animations, 'Orlando');
  animationsGui.add( animations, 'HongKong');
  animationsGui.add( animations, 'NewYork');
  animationsGui.add( animations, 'WashingtonDC');
  animationsGui.add( animations, 'Baltimore');
  animationsGui.add( animations, 'Chicago');
  animationsGui.add( animations, 'LosAngeles');
  animationsGui.add( animations, 'LasVegas');
  animationsGui.add( animations, 'Amsterdam');
  animationsGui.add( animations, 'VancouverBC');
  animationsGui.add( animations, 'Lima');
  animationsGui.add( animations, 'SaoPaulo');
  animationsGui.add( animations, 'Mammoth');
  animationsGui.add( animations, 'Tahoe');

  animationsGui.domElement.style.float = 'left';

}

function animateSanFrancisco() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.4, lat: -37.786326034612294, lon: -122.40810152577501 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start().onComplete(function(){

    new TWEEN.Tween( controls )
    .to( { dolly: 360 }, 51000 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .start();

    new TWEEN.Tween( controls )
    .to( { tilt: 35, zoom: 0.38, lat: -37.786326034612294, lon: -122.40810152577501 }, 25500 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .start().onComplete(function(){

      new TWEEN.Tween( controls )
      .to( { tilt: 60, zoom: 0.4, lat: -37.787474061909585, lon: -122.42242633375469 }, 25500 )
      .easing( TWEEN.Easing.Cubic.InOut )
      .start();

    });

    new TWEEN.Tween( controls )
    .to( { hour: 0, hourRange: 1, hourFadeIn: 0, hourFadeOut:1, dayRange: lastDay, day:0 }, 500 )
    .start().onComplete(function(){

      new TWEEN.Tween( controls )
      .to( { hour: 24, hourRange: 1 }, 5000 )
      .repeat( 5 )
      .start().onComplete(function(){

        new TWEEN.Tween( controls )
        .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0 }, 500 )
        .start();

        new TWEEN.Tween( controls )
        .to( { dayRange: lastDay/5 }, 500 )
        .start().onComplete(function(){

          new TWEEN.Tween( controls )
          .to( { dayRange: lastDay }, 25000 )
          .start();

        });

      });

    });

  });

}

function animateBelgrade() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.5, lat: -44.78106145398466, lon: 20.47566584856355 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start().onComplete(function(){

    new TWEEN.Tween( controls )
    .to( { dolly: 360 }, 51000 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .start();

    new TWEEN.Tween( controls )
    .to( { tilt: 25, zoom: 0.4, lat: -44.78128367074013, lon: 20.45255895273428 }, 25500 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .start();

    new TWEEN.Tween( controls )
    .to( { hour: 0, hourRange: 1, hourFadeIn: 0, hourFadeOut:1, dayRange: lastDay, day:0 }, 500 )
    .start().onComplete(function(){

      new TWEEN.Tween( controls )
      .to( { hour: 24, hourRange: 1 }, 5000 )
      .repeat( 5 )
      .start().onComplete(function(){

        new TWEEN.Tween( controls )
        .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0 }, 500 )
        .start();

        new TWEEN.Tween( controls )
        .to( { dayRange: 0 }, 500 )
        .start().onComplete(function(){

          new TWEEN.Tween( controls )
          .to( { dayRange: lastDay }, 10000 )
          .start();

        });

      });

    });

  });

}

function animateSavannah() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.4, lat: -32.07880142332068, lon: -81.0908889732392 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start().onComplete(function(){

    new TWEEN.Tween( controls )
    .to( { lat: -32.04890778759929, lon: -81.10509299997835 }, 25500 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .start();

    new TWEEN.Tween( controls )
    .to( { hour: 0, hourRange: 1, hourFadeIn: 0, hourFadeOut:1, dayRange: lastDay, day:0 }, 500 )
    .start().onComplete(function(){

      new TWEEN.Tween( controls )
      .to( { hour: 24, hourRange: 1 }, 5000 )
      .repeat( 5 )
      .start().onComplete(function(){

        new TWEEN.Tween( controls )
        .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0 }, 100 )
        .start();

        new TWEEN.Tween( controls )
        .to( { dayRange: 0 }, 500 )
        .start().onComplete(function(){

          new TWEEN.Tween( controls )
          .to( { dayRange: lastDay }, 5000 )
          .start();

          new TWEEN.Tween( controls )
          .to( { zoom: 0.4, lat: -32.064862990236335, lon: -81.09397562186854 }, 5000 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .start();

        });

      });

    });

  });

}

function animateOrlando() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.5, lat: -28.615156791852876, lon: -81.31972750445107 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start().onComplete(function(){

    new TWEEN.Tween( controls )
    .to( { dolly: 360 }, 51000 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .start();

    new TWEEN.Tween( controls )
    .to( { tilt: 25, zoom: 0.4, lat: -28.635275451202872, lon: -81.3970193429966 }, 25500 )
    .easing( TWEEN.Easing.Cubic.InOut )
    .start();

    new TWEEN.Tween( controls )
    .to( { hour: 0, hourRange: 1, hourFadeIn: 0, hourFadeOut:1, dayRange: lastDay, day:0 }, 500 )
    .start().onComplete(function(){

      new TWEEN.Tween( controls )
      .to( { hour: 24, hourRange: 1 }, 5000 )
      .repeat( 5 )
      .start().onComplete(function(){

        new TWEEN.Tween( controls )
        .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0 }, 500 )
        .start();

        new TWEEN.Tween( controls )
        .to( { dayRange: 0 }, 500 )
        .start().onComplete(function(){

          new TWEEN.Tween( controls )
          .to( { dayRange: lastDay }, 10000 )
          .start();

        });

      });

    });

  });

}

function animateHongKong() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.45, lat: -22.32806364695722, lon: 114.12289777763641 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateNewYork() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.45, lat: -40.74252753573671, lon: -73.91163782670736 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateWashingtonDC() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.4, lat: -38.90187152095167, lon: -77.02400605743759 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateBaltimore() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.45, lat: -39.10827034496437, lon: -76.81831605056658 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateChicago() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.45, lat: -41.889956182020235, lon: -87.62433707186528 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateLosAngeles() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.5, lat: -34.05900130027708, lon: -118.34688154504477 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateLasVegas() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.37, lat: -36.12438817003849, lon: -115.16747537009235 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateAmsterdam() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.35, lat: -52.370448733377906, lon: 4.89243039246864 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateVancouverBC() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.35, lat: -49.28840572022065, lon: -123.12982917190783 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateLima() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.45, lat: 12.08428764885248, lon: -77.03920878412168 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateSaoPaulo() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.55, lat: 23.687018189203144, lon: -46.482976015370895 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateMammoth() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.37, lat: -37.63921579883438, lon: -119.02054361476257 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}

function animateTahoe() {

  TWEEN.removeAll();

  new TWEEN.Tween( controls )
  .to( { tilt: 90, zoom: 0.6, lat: -39.021174127749546, lon: -119.99689873215783 }, 250 )
  .easing( TWEEN.Easing.Cubic.InOut )
  .start();

  new TWEEN.Tween( controls )
  .to( { hour: 0, hourRange: 24, hourFadeIn: 0, hourFadeOut:0, }, 250 )
  .start();

  new TWEEN.Tween( controls )
  .to( { day: 0, dayRange: lastDay, dayFadeIn: 0, dayFadeOut:0, }, 250 )
  .start();

}