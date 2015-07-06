// Converted from: ./flatroof_RoofTexture_12.obj
//  vertices: 186
//  faces: 55
//  normals: 0
//  colors: 0
//  uvs: 218
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

    "uvs": [[0.5039,0.0038,1,1,0.9841,0,0.0037,1,1,1,0.9855,0,0,0,1,1,1,0,0,0,0,1,0.0515,0.9659,0,0.8214,0.0061,0.8766,0.0239,0.9264,0.0341,0.0515,0.1786,0,0.1234,0.0061,0.0736,0.0239,0,0,0,1,1,1,1,0,0,1,0.8395,0,0.1605,0,0,0.2219,0,1,0.7597,0,0.2403,0,0,0.3493,1,1,0.1605,0,0,0.237,0,1,1,1,0.2403,0,0,0.3493,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0.4078,0,0,1,1,1,0.1036,0,0,1,0.9653,1,1,0.6652,0.1036,0,0,1,0.9653,1,1,0.6652,0.1036,0,0,1,0.9653,1,1,0.6652,0.1036,0,0,1,0.9653,1,1,0.6652,0,1,1,1,1,0,0,0,1,1,0.125,0,0,0.1864,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0.0014,0.0007,0,0,1,1,1,0.9989,0,0,0,0.0004,1,1,1,0.9989,0,0,0,0.0004,1,1,1,0.9989,0,0,0,0.0004,1,1,1,0.9989,0,0,0,0.0004,1,1,1,0.9989,0,0,0,0.0004,1,1,1,1,1,1,0.1864,0.875,0,0.125,0,1,0.3493,0.7597,0,0.2403,0,1,1,0.8395,0,0.1605,0,1,1,1,0.237,0,1,1,1,1,0.3493,0.7597,0,0,1,1,1,1,0.2219,0.8395,0,1,0,0.1786,0,0.0341,0.0515,0.0087,0.0864,1,0,0.0087,0.0864,0,0.125,1,1,1,1,0,0.125,0,0.875,0.1786,1,0.1786,1,0,0.875,0.0087,0.9136,0.1234,0.9939,0.1234,0.9939,0.0087,0.9136,0.0341,0.9485,0.0736,0.9761,0,0,0,0.8214,0.0515,0.9659,0.0864,0.9913,0,0,0.0864,0.9913,0.125,1,1,0,1,0,0.125,1,0.875,1,1,0.8214,1,0.8214,0.875,1,0.9136,0.9913,0.9939,0.8766,0.9939,0.8766,0.9136,0.9913,0.9485,0.9659,0.9761,0.9264,0.004,1,1,1,0.5039,0.0038,0,0.0039]],

    "faces": [],

    "edges" : []

};

var req = new XMLHttpRequest();
req.open('GET', "flatroof_RoofTexture_12.txt", false);
req.send(null);
if (req.status == 200 || req.status == 0) {
  var numVertices = 558;
  var numMorphTargets = model.morphTargets.length;
  var scale = 1.63496875781;
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
  var numFaces = 546;
  model.faces = new Uint16Array(numFaces);
  for (var i = 0; i < numFaces; ++i) {
    model.faces[i] = req.responseText.charCodeAt(faceOffset + i);
  }
}

postMessage( model );
close();
