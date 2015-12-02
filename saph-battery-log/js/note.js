function Note(audioCtx, path) {

  var scope = this;

  var request = new XMLHttpRequest();
  request.open('GET', path, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;
    audioCtx.decodeAudioData(audioData, function(buffer) {
      scope.buffer = buffer;
    });
  };
  request.send();

  this.play = function() {
    if (scope.sampleSource) {
      scope.sampleSource.disconnect(audioCtx.destination);
      delete scope.sampleSource.buffer;
      delete scope.sampleSource;
    }
    if (scope.buffer) {
      scope.sampleSource = audioCtx.createBufferSource();
      scope.sampleSource.buffer = scope.buffer;
      scope.sampleSource.connect(audioCtx.destination);
      scope.sampleSource.start(0);
    }
  };

}
