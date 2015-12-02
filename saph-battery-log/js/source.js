function Source(audioCtx, speed, path, signal, time) {

  var scope = this;

  this.mesh = MakeLine(time, signal);

  this.gain = audioCtx.createGain();
  this.gain.gain.value = 0;
  this.gain.connect(audioCtx.destination);

  this.sampleSource = audioCtx.createBufferSource();
  this.sampleSource.loop = true;
  this.sampleSource.connect(this.gain);
  this.sampleSource.start(0);

  this.signalSource = audioCtx.createBufferSource();
  this.signalSource.playbackRate.value = speed || 1;
  this.signalSource.loop = true;
  this.signalSource.connect(this.gain.gain);
  this.signalSource.start(0);

  var signalBuffer = audioCtx.createBuffer(1, signal.length, 44100);
  var nowBuffering = signalBuffer.getChannelData(0);
  for (var i = 0; i < signal.length; i++) {
    nowBuffering[i] = signal[i];
  }
  this.signalSource.buffer = signalBuffer;

  var request = new XMLHttpRequest();
  request.open('GET', path, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;
    audioCtx.decodeAudioData(audioData, function(buffer) {
      scope.sampleSource.buffer = buffer;
    });
  }
  request.send();
}
