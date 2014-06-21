Polymer({
  model: undefined,
  attribute: undefined,
  linked: false,
  settings: {},
  width: 320,
  labelWidth: 80,
  ready: function() {
    var scope = this;
    this.addEventListener('input-changed', function(event) {
      event.stopPropagation();
      scope.fire('three-attribute-changed', { object: scope.model, attribute: scope.attribute, value: event.detail.input.value });
    });
  },
  labelWidthChanged: function() {
    this.widthChanged();
  },
  widthChanged: function() {
    this.style.width = this.width + 'px';
    this.$.label.style.width = this.labelWidth + 'px';
    this.$.attribute.style.width = this.width - this.labelWidth + 'px';
    if (this.inputElem) this.inputElem.width = this.width - this.labelWidth;
  },
  modelChanged: function() {
    var scope = this;

    var value = this.model[this.attribute];
    var type;

    if (typeof value == "boolean") type = "input-boolean";
    else if (typeof value == "number") type = "input-number";
    else if (typeof value == "string") type = "input-string";

    var isVecArray = function ( object, length ) {
      if ((object instanceof Float32Array || object instanceof Array) && object.length == length ) {
        for (var i = object.length; i--;) {
          if (typeof object[i] !== "number") {
            return false;
          }
        }
        return true;
      }
      return false;
    };

    // TODO: make THREE-agnotic 
    if (window.THREE !== undefined && type === undefined) {
      if ( value instanceof THREE.Vector2 ) type = 'input-vector2';
      else if ( value instanceof THREE.Vector3 ) type = 'input-vector3';
      else if ( value instanceof THREE.Euler ) type = 'input-vector3';
      else if ( value instanceof THREE.Color ) type = 'input-vector3';
      else if ( value instanceof THREE.Vector4 ) type = 'input-vector4';
      else if ( value instanceof THREE.Quaternion ) type = 'input-vector4';
      else if ( value instanceof THREE.Matrix3 ) type = 'input-matrix3';
      else if ( value instanceof THREE.Matrix4 ) type = 'input-matrix4';
      else if ( value instanceof THREE.Texture ) type = 'input-texture';
    }

    if (type === undefined) {
      if ( isVecArray(value, 2) ) type = 'input-vector2';
      else if ( isVecArray(value, 3) ) type = 'input-vector3';
      else if ( isVecArray(value, 4) ) type = 'input-vector4';
    }

    if (type !== undefined) {
      this.inputElem = document.createElement(type);
      this.inputElem.bindProperty('value', new PathObserver(this.model, this.attribute));

      for (var setting in this.settings) {
        this.inputElem.bindProperty(setting, new PathObserver(this.settings, setting));
      }
     
      if (this.settings.linkable) {

        this.$.label.classList.toggle('linkable', true);
        this.inputElem.bindProperty('linked', new PathObserver(this, 'linked'));
        this.$.label.onclick = function() {
          scope.linked = !scope.linked;
          scope.$.label.classList.toggle('linked', scope.linked);
        };

      }

      this.$.attribute.appendChild(this.inputElem);
    } else {
      if ( scope.model[scope.attribute] ) {
        this.$.label.classList.toggle('linked', true);
        this.$.label.onclick = function() {
          scope.fire('three-model-changed', { model: scope.model[scope.attribute] } );
        };
      }
    }

    this.widthChanged();

  }
});