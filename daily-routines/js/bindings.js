function bindTouch(pointers, callback, event){
  bindEvent(pointers, event, callback);
}

function bindTouchStart(pointers, callback, event){
  event = platform.mobile() ? 'touchstart' : 'mousedown';
  bindEvent(pointers, event, callback);
}

function bindTouchMove(pointers, callback, event){
  event = platform.mobile() ? 'touchmove' : 'mousemove';
  bindEvent(pointers, event, callback);
}

function bindTouchEnd(pointers, callback, event){
  event = platform.mobile() ? 'touchend' : 'mouseup';
  bindEvent(pointers, event, callback);
}

function bindScroll(pointers, callback, event){
  event = platform.Firefox() ? 'DOMMouseScroll' : 'mousewheel';
  bindEvent(pointers, event, callback);
}


function getTouch(event){
  if (event.touches)
    return event.touches[0];
  else
    return event;
}

function bindEvent(pointers, event, handler) {
  pointers = pointers.split(',');
  for (var i in pointers){
    pointer = pointers[i].trim();
    if (pointer[0] == '#'){
      var element = document.getElementById(pointer.replace('#',''));
      addListener(element, event, handler);
    } else if (pointer[0] == '.') {
      var elements = document.getElementsByClassName(pointer.replace('.',''));
      for (var j in elements){
        if ( typeof(elements[j]) == 'object' ){
          addListener(elements[j], event, handler);
        }
      }
    }
  }
}

function addListener(element, event, handler){
  if(element.addEventListener) {
     element.addEventListener(event, handler, false);
  } else {
     element.attachEvent('on'+event, handler);
  }
}

var platform = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    mobile: function() {
        return (platform.Android() || platform.BlackBerry() || platform.iOS() || platform.Windows());
    },
    Firefox: function() {
        return navigator.userAgent.match(/Firefox/i) ? true : false;
    },
};