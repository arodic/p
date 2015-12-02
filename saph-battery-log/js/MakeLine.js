function MakeLine(timeBuffer, signalBuffer) {

  var geometry = new THREE.BufferGeometry();
  var material = new THREE.RawShaderMaterial( {
    uniforms: {
      currentTime: { type: "f", value: 0.0 },
      color: { type: "c", value: new THREE.Color('white') }
    },
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent
  });

  geometry.addAttribute('position', new THREE.BufferAttribute(new Uint32Array(timeBuffer.length * 3), 3));
  geometry.addAttribute('time', new THREE.BufferAttribute(timeBuffer, 1));
  geometry.addAttribute('signal', new THREE.BufferAttribute(signalBuffer, 1));

  var mesh = new THREE.Line(geometry, material);
  mesh.frustumCulled = false;

  return mesh;
}
