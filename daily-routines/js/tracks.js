/**
 * Created by PyCharm.
 * User: akira
 * Date: 12/31/12
 * Time: 7:29 PM
 * To change this template use File | Settings | File Templates.
 */

function Track(filename,date){
  this.fileName = filename;
  this.date = date;
  this.points = [];
}

var xhttp = new XMLHttpRequest();
xhttp.overrideMimeType('text/xml');

var counter, totalPoints = 0;
var tracks = [], trackList;
var lines = [];
var firstDay = 0, lastDay = 0;
var masterMaterial;

function createMaterial() {

  var vertexShader = ''+
  'attribute vec3 color;'+
  'varying vec3 vColor;'+
  'void main() {'+
  '  vColor = color;'+
  '  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );'+
  '}';

  var fragmentShader = ''+
  'varying vec3 vColor;'+
  'uniform float lod;'+
  'uniform float day;'+
  'uniform float dayRange;'+
  'uniform float dayFadeIn;'+
  'uniform float dayFadeOut;'+
  'uniform float hour;'+
  'uniform float hourRange;'+
  'uniform float hourFadeIn;'+
  'uniform float hourFadeOut;'+
  'uniform bool sunday;'+
  'uniform bool monday;'+
  'uniform bool tuesday;'+
  'uniform bool wednesday;'+
  'uniform bool thursday;'+
  'uniform bool friday;'+
  'uniform bool saturday;'+
  'void main() {'+
  '  float visibility = 1.0;'+

  '  float speed = vColor.r / 25.0;'+
  '  float time = vColor.g;'+

  '  float dayOffset = time - day;'+
  '  float dayIn = ( ( dayOffset - dayRange ) / dayFadeIn );'+
  '  dayIn = min( 1.0 - max( dayIn, 0.0 ), 1.0 );'+
  '  float dayOut = ( ( dayOffset + dayRange ) / dayFadeOut );'+
  '  dayOut = min( 1.0 - max( -dayOut, 0.0 ), 1.0 );'+

  '  visibility = max( min( dayIn, dayOut ), 0.0 );'+

  '  float hourOffset = mod(fract( time ) * 24.0 - hour, 24.0);'+
  '  float hourIn = ( ( hourOffset - hourRange ) / hourFadeIn );'+
  '  hourIn = min( 1.0 - max( hourIn, 0.0 ), 1.0 );'+
  '  float hourOut = ( ( hourOffset + hourRange ) / hourFadeOut );'+
  '  hourOut = min( 1.0 - max( -hourOut, 0.0 ), 1.0 );'+

  '  visibility = max( min( min( hourIn, hourOut ), visibility ), 0.0 );'+

  '  if ( vColor.b == 0.0 && !sunday ) visibility = 0.0;'+
  '  if ( vColor.b == 1.0 && !monday ) visibility = 0.0;'+
  '  if ( vColor.b == 2.0 && !tuesday ) visibility = 0.0;'+
  '  if ( vColor.b == 3.0 && !wednesday ) visibility = 0.0;'+
  '  if ( vColor.b == 4.0 && !thursday ) visibility = 0.0;'+
  '  if ( vColor.b == 5.0 && !friday ) visibility = 0.0;'+
  '  if ( vColor.b == 6.0 && !saturday ) visibility = 0.0;'+

  '  vec3 green = vec3( 0.1, 1.0, 0.4 );'+
  '  vec3 blue = vec3( 0.1, 0.5, 1.0 );'+
  '  vec3 white = vec3( 1.0, 1.0, 1.0 );'+
  '  vec3 black = vec3( 0.0, 0.0, 0.0 );'+

  '  vec3 color = mix( mix( blue, green, speed ), black, lod/5.0 );'+

  '  visibility *= 0.3 + lod/10.0 ;'+

  '  gl_FragColor = vec4( mix( white, color, visibility ), 1.0 );'+
  '}';

  uniforms = {
    lod:         { type: "f", value: 0 },
    day:         { type: "f", value: 0 },
    dayRange:    { type: "f", value: 0 },
    dayFadeIn:   { type: "f", value: 0 },
    dayFadeOut:  { type: "f", value: 0 },
    hour:        { type: "f", value: 0 },
    hourRange:   { type: "f", value: 0 },
    hourFadeIn:  { type: "f", value: 0 },
    hourFadeOut: { type: "f", value: 0 },
    sunday:      { type: "i", value: true },
    monday:      { type: "i", value: true },
    tuesday:     { type: "i", value: true },
    wednesday:   { type: "i", value: true },
    thursday:    { type: "i", value: true },
    friday:      { type: "i", value: true },
    saturday:    { type: "i", value: true }
  };

  masterMaterial = new THREE.ShaderMaterial( {
    uniforms:       uniforms,
    vertexShader:   vertexShader,
    fragmentShader: fragmentShader,
    blending:       THREE.MultiplyBlending,
    depthWrite:     false, 
    depthTest:      true,
    transparent:    true
  });
  masterMaterial.linewidth = 1;

}

function initTracks() {

  xhttp.open('GET', 'json/gpxFiles.json', false);
  xhttp.send(null);

  var tracksDoc = JSON.parse(xhttp.responseText);
  trackList = tracksDoc.tracks;

  counter = document.getElementById("counter");
  counter.innerHTML = "Loading... 1/"+trackList.length;

  createMaterial();
  loadTrack(0);

}

function loadTrack(index) {

  counter.innerHTML = "Loading... "+parseFloat(index+1)+"/"+trackList.length;

  var file = trackList[index];
  xhttp.open('GET', 'json/' + file + '.json', false);
  xhttp.send(null);

  var data = JSON.parse(xhttp.responseText);
  var points = data.points;
  var date = points[0][0];

  tracks.push(points);

  if ( index < trackList.length - 1 ){

    setTimeout( function(){ loadTrack(index+1) }, 10);

  } else {

    createLine(0);

  }

}

function createFlightLine(pos, posOld, speed, timeDay, timeDayOld, weekDay, geometry) {

  var segments = 30;
  var segmentStart, segmentEnd;
  var posStart = new THREE.Vector3(0,0,0);
  var posEnd = new THREE.Vector3(0,0,0);

  for ( var i = 0; i < segments-1; i++ ){
    
    segmentStart = i/segments;
    segmentEnd = (i+1)/segments;

    posStart.copy(posOld).lerp(pos,segmentStart).normalize().multiplyScalar(EARTH_RADIUS+( Math.min(i/segments, 1-i/segments)*400 ));
    posEnd.copy(posOld).lerp(pos,segmentEnd).normalize().multiplyScalar(EARTH_RADIUS+( Math.min((i+1)/segments, 1-(i+1)/segments)*400 ));

    geometry.vertices.push( posStart.clone() );
    geometry.vertices.push( posEnd.clone() );
    geometry.colors.push( new THREE.Color().setRGB( speed, timeDay, weekDay ) );
    geometry.colors.push( new THREE.Color().setRGB( speed, timeDay, weekDay ) );

  }

}

var lat, lon, ele, distance, speed;

function createLine(index) {

  var x, y, z, day;
  var date, time, timeOld, timeDay, timeDayOld, weekDay;

  var track = tracks[index];

  totalPoints += track.length;
  counter.innerHTML = "Processing... "+parseFloat(index+1)+"/"+trackList.length+'<br />'+totalPoints+' points';

  var segments = track.length;

  var pos = new THREE.Vector3(0,0,0);
  var posOld = new THREE.Vector3(0,0,0);


  var geometry = new THREE.Geometry();
  var material = masterMaterial.clone();

  material.linewidth = 1;

  var DISTANCE_LIMIT = 150; // m
  var TIME_LIMIT = 50; // sec
  var SPEED_LIMIT = 155; // m/sec ~ 200 km/h

  for (var i = 0; i < track.length; i++) {

    date = new Date(track[i][0]);
    time = date.getTime() / 1000; // sec

    day = time / 60 / 60 / 24;
    day = Math.floor( day );
    if (!firstDay) firstDay = day;
    day = day - firstDay;
    lastDay = day+1;

    lat = track[i][1] * Math.PI / 180;
    lon = (track[i][2] - 180) * Math.PI / 180;
    ele = track[i][3] / 1000;

    x = -(EARTH_RADIUS + ele) * Math.cos(lat) * Math.cos(lon);
    y = (EARTH_RADIUS + ele) * Math.sin(lat);
    z = (EARTH_RADIUS + ele) * Math.cos(lat) * Math.sin(lon);

    pos.set(x,y,z); // km
  
    distance = pos.clone().sub(posOld).length() * 1000; // m
    speed = distance / (time - timeOld); // m/sec

    timeDay = day +( date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 3600 ) / 86400;
    weekDay = date.getDay();

    if ( distance > 200000 && speed < 400 ) {
      createFlightLine(pos, posOld, speed, timeDay, timeDayOld, weekDay, geometry);
    }

    if (distance < DISTANCE_LIMIT && (time-timeOld) < TIME_LIMIT && speed < SPEED_LIMIT){
      geometry.vertices.push( posOld.clone() );
      geometry.vertices.push( pos.clone() );
      geometry.colors.push( new THREE.Color().setRGB( speed, timeDay, weekDay ) );
      geometry.colors.push( new THREE.Color().setRGB( speed, timeDay, weekDay ) );
    }

    posOld.copy(pos);
    timeDayOld = timeDay;
    timeOld = time;

  }
  
  lines.push( new THREE.Line(geometry, material, THREE.LinePieces) );

  lat = -parseFloat(lat * 180 / Math.PI);
  lon = parseFloat(lon * 180 / Math.PI + 180);

  if ( index < trackList.length - 1 ){

    setTimeout( function(){ createLine(index+1) }, 10);

  } else {

    tracks.splice(0, tracks.length);

    createLod(0);

  }

}

function createLod(index) {

  counter.innerHTML = "Generating LOD... "+parseFloat(index+1)+"/"+lines.length;

  var lodLine = new THREE.LOD();

  lodLine.addLevel( lines[index], 0 );

  var levels = {
    1: [0.1, EARTH_RADIUS+50],
    // 2: [1.0, EARTH_RADIUS+200],
    3: [2.0, EARTH_RADIUS+400],
    // 4: [4.0, EARTH_RADIUS+800],
    5: [8.0, EARTH_RADIUS+1600],
    // 6: [16.0, EARTH_RADIUS+2200],
    6: [32.0, EARTH_RADIUS+4400]
  }

  for ( var i in levels ){

    var geometry = new THREE.Geometry();
    var material = masterMaterial.clone();
    material.uniforms.lod.value = i;
    material.linewidth = 1;


    var gap = false;
    var distance = 0;
    var previousVertex = lines[index].geometry.vertices[0];
    var previousColor = lines[index].geometry.vertices[0];

    for ( var j = 2; j < lines[index].geometry.vertices.length - 2; j = j + 2 ) {

      gap = !lines[index].geometry.vertices[j].equals(lines[index].geometry.vertices[j-1]);
      distance = previousVertex.distanceTo(lines[index].geometry.vertices[j]);

      if ( ( distance > levels[i][0] && !gap ) || ( gap && distance > levels[i][0]/2 )) {

        geometry.vertices.push( previousVertex );
        geometry.vertices.push( lines[index].geometry.vertices[j-1] );
        geometry.colors.push( previousColor );
        geometry.colors.push( lines[index].geometry.colors[j-1] );

        previousVertex = lines[index].geometry.vertices[j];
        previousColor = lines[index].geometry.colors[j];

      }

    }

    lodLine.addLevel( new THREE.Line(geometry, material, THREE.LinePieces), levels[i][1] );

  }

  scene.add(lodLine);

  if ( index < lines.length - 1 ){

    setTimeout( function(){ createLod(index+1) }, 10);

  } else {

    counter.innerHTML = "Uploading to GPU. Please wait... ";
    setTimeout( startAnimation, 10);

  }

}

function startAnimation() {

    $("#modal").hide();

    initControls();

    // controls.day.max = lastDay;
    // controls.dayRange.value = lastDay;
    // controls.dayRange.max = lastDay;
    // controls.dayFadeIn.max = lastDay;
    // controls.dayFadeOut.max = lastDay;
    
    initSequence();
    animate();

}