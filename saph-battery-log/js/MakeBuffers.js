function MakeBuffers(array, BUFFER_LENGHT) {

  var i;
  var j;
  var time;
  var ci;

  var timeBuffer = new Float32Array(array.length - 2);
  var levelBuffer = new Float32Array(array.length - 2);
  var tempBuffer = new Float32Array(array.length - 2);
  var voltBuffer = new Float32Array(array.length - 2);
  var statusBuffer = new Array(array.length - 2);
  var dateBuffer = new Array(array.length - 2);

  var minTime = (new Date(array[1][0]).getTime()) / 1000;

  for(i = 0; i < array.length - 2; i++) {
    timeBuffer[i] = (new Date(array[i][0]).getTime() / 1000) - minTime;
    levelBuffer[i] = (array[i + 1][1]) / 200;
    tempBuffer[i] = (array[i + 1][2]) / 30;
    voltBuffer[i] = (array[i + 1][3] - 3000) / 1200;
    statusBuffer[i] = array[i + 1][4];
    dateBuffer[i] = array[i][0];
  }

  var maxTime = timeBuffer[timeBuffer.length - 1];

  ci = 0;

  var buffers = {
    minTime: minTime,
    time: new Float32Array(BUFFER_LENGHT),
    level: new Float32Array(BUFFER_LENGHT),
    level_down: new Float32Array(BUFFER_LENGHT),
    level_up: new Float32Array(BUFFER_LENGHT),
    temp: new Float32Array(BUFFER_LENGHT),
    volt: new Float32Array(BUFFER_LENGHT),
    volt_up: new Float32Array(BUFFER_LENGHT),
    volt_down: new Float32Array(BUFFER_LENGHT),
    status: new Array(BUFFER_LENGHT),
    date: new Array(BUFFER_LENGHT),
  }

  for (i = 0; i < BUFFER_LENGHT; i++) {
    time = maxTime * (i / BUFFER_LENGHT);
    buffers.time[i] = i / BUFFER_LENGHT;
    for (j = ci; j < timeBuffer.length; j++) {
      if (timeBuffer[j] > time) {
        ci = j - 1;
        cc = (time - timeBuffer[ci]) / (timeBuffer[j] - timeBuffer[ci]);

        buffers.level[i] = levelBuffer[ci] * (1 - cc) + levelBuffer[ci + 1] * (cc);
        buffers.level_down[i] = Math.min(Math.max((buffers.level[i-1] - buffers.level[i]) * 200, 0), 1);
        buffers.level_up[i] = Math.min(Math.max((buffers.level[i] - buffers.level[i-1]) * 100, 0), 1);

        buffers.temp[i] = Math.pow(Math.min(Math.max((tempBuffer[ci] * (1 - cc) + tempBuffer[ci + 1] * (cc)) * 1.5 - 1, 0 ), 1), 5);

        buffers.volt[i] = Math.max( (voltBuffer[ci] * (1 - cc) + voltBuffer[ci + 1] * (cc) - buffers.level[i]) * 2 - 0.65, 0);
        buffers.volt_down[i] = Math.min(Math.max((buffers.volt[i] - buffers.volt[i-1]) * 8, 0), 1);
        buffers.volt_up[i] = Math.min(Math.max((buffers.volt[i-1] - buffers.volt[i]) * 8, 0), 1);

        buffers.status[i] = statusBuffer[ci];
        buffers.date[i] = dateBuffer[ci];

        break;
      }
    }
  }

  return buffers;

}
