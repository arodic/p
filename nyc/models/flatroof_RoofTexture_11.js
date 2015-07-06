// Converted from: ./flatroof_RoofTexture_11.obj
//  vertices: 281
//  faces: 78
//  normals: 0
//  colors: 0
//  uvs: 305
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

    "uvs": [[0,1,0.1009,0.00029999,0,0,0,1,1,1,0.9919,0,0,0,0,1,1,1,0.9919,0,0,0,0,1,1,1,0.9919,0,0,0,0,1,1,1,0.9919,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0.0004,1,1,1,0.9989,0.00080001,0,0,0.0003,1,1,1,0.999,0,0,0,0.0003,1,1,1,0.999,0,0,0,0.0003,1,1,1,0.999,0,0,0,0.0003,1,1,1,0.999,0,0,0,0.0003,1,1,1,0.999,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0.0003,1,1,1,0.9968,0,0,0.0153,0.771,0,0,0.7211,0.0639,1,1,1,0.1512,0,1,0.2814,0.7122,0,0.1512,0,1,0.2814,0.7122,0,0.1512,0,1,0.2814,0.7122,0,0.1512,0,1,0.2814,0.7122,0,0.1512,0,1,0.2814,0.7121,0,0.9918,0.0153,1,1,0.9997,0.0154,0,1,1,1,0.9997,0,0.0015,0,0,1,1,1,0.9997,0,0.0015,0,0,1,1,1,0.9997,0,0.0015,0,0,1,1,1,0.9997,0,0.0015,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0.0061,0.1251,0,0.1811,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0.6099,1,1,0,0.3901,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0.0594,0.0044,0,0,1,0.9986,1,0.9965,0,0,0,0.0007,1,1,1,0.9965,0,0,0,0.0007,1,1,1,1,1,1,0.1811,0.9485,0.0346,0.9136,0.0089,0.9485,0.0346,1,0.1811,0.9939,0.1251,0.9761,0.0746,1,1,0.9136,0.0089,0.875,0,0.125,0,1,1,0.125,0,0.0864,0.0089,0.0515,0.0346,1,1,0.0515,0.0346,0.0239,0.0746,0.0061,0.1251,0,1,1,1,0.9918,0.0153,0.0014,0,0,1,0.8915,1,1,0.2814,0.1512,0,0,1,0.8915,1,1,0.2814,0.1512,0,0,1,0.8915,1,1,0.2814,0.1512,0,0,1,0.8915,1,1,0.2814,0.1512,0,0,1,0.8915,1,1,0.2814,0.1512,0,0,1,1,1,0.9916,0,0.1009,0.00029999]],

    "faces": [],

    "edges" : []

};

var req = new XMLHttpRequest();
req.open('GET', "flatroof_RoofTexture_11.txt", false);
req.send(null);
if (req.status == 200 || req.status == 0) {
  var numVertices = 843;
  var numMorphTargets = model.morphTargets.length;
  var scale = 1.88354873633;
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
  var numFaces = 766;
  model.faces = new Uint16Array(numFaces);
  for (var i = 0; i < numFaces; ++i) {
    model.faces[i] = req.responseText.charCodeAt(faceOffset + i);
  }
}

postMessage( model );
close();
