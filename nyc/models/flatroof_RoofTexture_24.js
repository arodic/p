// Converted from: ./flatroof_RoofTexture_24.obj
//  vertices: 158
//  faces: 46
//  normals: 0
//  colors: 0
//  uvs: 184
//  materials: 0
//  edges: 0
//
//  Generated with OBJ -> Three.js converter
//  http://github.com/alteredq/three.js/blob/master/utils/exporters/convert_obj_three.py


var model = {

    "version" : 2,
    
    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "default"
	}],

    "vertices": [],
    
    "morphTargets": [],

    "morphColors": [],

    "normals": [],

    "colors": [],

    "uvs": [[0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0.9984,0,0.0013,0.0088,0,1,1,1,0.9985,0,0.0013,0,1,0.1144,0.0741,0,0,1,0.9734,1,0.9655,0,0.0046,0,0,1,1,1,0.9655,0,0.0046,0,0,1,1,1,0.9655,0,0.0046,0,0,1,1,1,0.9655,0,0.0046,0,0,1,1,1,0.9655,0,0.0046,0,0,1,1,1,0.0002,1,1,1,0.9988,0.00089997,0,0,0.0002,1,1,1,0.9987,0,0,0,0.0002,1,1,1,0.9987,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0.9817,0,0.0161,0.00040001,0,1,0.9824,1,0.1952,0.0163,0.018,0,0,1,0.9824,1,0.1952,0.0163,0.018,0,0,1,0.9824,1,0.1952,0.0163,0.018,0,0,1,0.0239,0.0515,0.125,0,0.0864,0.0061,0.0515,0.0239,1,0.875,1,0.125,0.9939,0.0864,0,0.875,1,0.875,0,0.875,0.0061,0.9136,0.9939,0.9136,0.9939,0.9136,0.0061,0.9136,0.0239,0.9485,0.9761,0.9485,0.9761,0.9485,0.0239,0.9485,0.0515,0.9761,0.9485,0.9761,0.9485,0.9761,0.0515,0.9761,0.0864,0.9939,0.9136,0.9939,0.9136,0.9939,0.0864,0.9939,0.125,1,0.875,1,0,0.875,0.9939,0.0864,0.9761,0.0515,0.9485,0.0239,0,0.875,0.9485,0.0239,0.9136,0.0061,0,0.125,0,0.125,0.9136,0.0061,0.875,0,0.0061,0.0864,0.0061,0.0864,0.875,0,0.125,0,0.0239,0.0515,0.6527,0.0163,0.1952,0.0163,0.9824,1,1,0.0368,0.6527,0.0163,0.1952,0.0163,0.9824,1,1,0.0368,0.6527,0.0163,0.1952,0.0163,0.9824,1,1,0.0368]],

    "faces": [],

    "edges" : []

};

var req = new XMLHttpRequest();
req.open('GET', "flatroof_RoofTexture_24.txt", false);
req.send(null);
if (req.status == 200 || req.status == 0) {
  var numVertices = 474;
  var numMorphTargets = model.morphTargets.length;
  var scale = 1.99503421875;
  model.vertices = new Float32Array(numVertices);
  for (var j = 0; j < numMorphTargets; ++j) {
    model.morphTargets[j].vertices = new Float32Array(numVertices);
  }

  var untransposed = new Int16Array(numVertices);
  var transposeOffset = numVertices / 3;
  var prevX = 0, prevY = 0, prevZ = 0;
  for (var i = 0; i < transposeOffset; ++i) {
    var x = req.responseText.charCodeAt(i);
    x = (x >> 1) ^ (-(x & 1));
    prevX += x;
    untransposed[3*i] = prevX;
    var y = req.responseText.charCodeAt(transposeOffset + i);
    y = (y >> 1) ^ (-(y & 1));
    prevY += y;
    untransposed[3*i + 1] = prevY;
    var z = req.responseText.charCodeAt(2*transposeOffset + i);
    z = (z >> 1) ^ (-(z & 1));
    prevZ += z;
    untransposed[3*i + 2] = prevZ;
  }

  for (var i = 0; i < numVertices; ++i) {
    var word = untransposed[i];
    model.vertices[i] = scale * word;

    var prev = word;
    for (var j = 0; j < numMorphTargets; ++j) {
      var offset = (j + 1) * numVertices;
      var delta = req.responseText.charCodeAt(offset + i);
      delta = (delta >> 1) ^ (-(delta & 1));
      prev += delta;
      model.morphTargets[j].vertices[i] = scale * prev;
    }
  }
  var faceOffset = numVertices * (numMorphTargets + 1);
  var numFaces = 460;
  model.faces = new Uint16Array(numFaces);
  for (var i = 0; i < numFaces; ++i) {
    model.faces[i] = req.responseText.charCodeAt(faceOffset + i);
  }
}

postMessage( model );
close();
