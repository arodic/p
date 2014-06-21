Polymer({

  __doc__: {
    element: 'three-attribute-editor',
    description: 'Attribute editor for three.js objects.',
    status: 'alpha',
    url: 'https://github.com/arodic/three-attribute-editor/',
    demo: 'http://arodic.github.com/three-attribute-editor/',
    attributes: [
      { name: 'model', type: 'object', description: 'Model to explore.' },
      { name: 'settings', type: 'object', description: 'Settings for inputs.' },
      { name: 'width', type: 'number' },
      { name: 'labelWidth', type: 'number' }
    ],
    properties: [],
    methods: [],
    events: [
      { name: 'three-setmodel', description: 'Fires when three-attribute label is clicked' },
      { name: 'three-attribute-changed', description: 'three-attribute-changed' },
    ]
  },

  model: undefined,

  settings: {
    "name": {},
    "position": { step: "0.1" },
    "rotation": { step: "0.1", toDeg: true },
    "scale": { min: "0", step: "0.01", linkable: true },
    "visible": {},
    "width": {},
    "height": {},
    "depth": {},
    "near": { min: 0.001 },
    "far": { min: 0.001 },
    "fov": { min: 0, max: 180 },
    "aspect": { min: 0, step: 0.01},
    "keystone": {},
    "offset": {},
    "map": {},
    "color": {},
    "groundColor": {},
    "ambient": {},
    "emissive": {},
    "intensity": {},
    "distance": {},
    "texture": {},
    "opacity": {},
    "reflectivity": {},
    "transparent": {},
    "exponent": {},
    "widthSegments": {},
    "heightSegments": {},
    "depthSegment": {},
    "radialSegments": {},
    "tubularSegments": {},
    "radius": {},
    "radiusTop": {},
    "radiusBottom": {},
    "phiStart": {},
    "phiLength": {},
    "thetaStart": {},
    "thetaLength": {},
    "tube": {},
    "arc": {},
    "detail": {},
    "p": {},
    "q": {},
    "heightScale": {},
    "openEnded": {},
    "side": {},
    "shading": {},
    "wireframe": {},
    "blending": {},
    "blendSrc": {},
    "blendDst": {},
    "blendEquation": {},
    "depthTest": {},
    "depthWrite": {},
    "parent": {},
    "children": {},
    "material": {},
    "geometry": {}
  },
  width: 320,
  labelWidth: 90,
  primaryAttributtes: [],
  secondaryAttributtes: [],
  previousModels: [],
  ready: function() {
    var scope = this;
    this.addEventListener('three-model-changed', function(event) {
      scope.model = event.detail.model;
    });
    this.addEventListener('contextmenu', function() {
      event.preventDefault();
    });
    this.$.backBtn.addEventListener('click', function() {
      event.preventDefault();
      if (scope.previousModels.length) {
        scope.model = scope.previousModels[scope.previousModels.length-1];
      }
    });
    this.widthChanged();
  },
  widthChanged: function() {
    if (this.width === 0)  this.style.width = 'auto';
    else this.style.width = this.width + 'px';
  },
  modelChanged: function(previousModel) {
    this.primaryAttributtes.length = 0;
    this.secondaryAttributtes.length = 0;

    if (this.model == this.previousModels[this.previousModels.length-1]) {
      this.previousModels.pop();
    } else if (previousModel) {
      this.previousModels.push(previousModel);
    }

    this.$.backBtn.classList.toggle('visible', this.previousModels.length);

    for ( var attrib in this.model ) {
      if (this.model.hasOwnProperty(attrib)) {
        if (this.settings[ attrib ]) {
          this.primaryAttributtes.push({
            model: this.model,
            attribute: attrib,
            settings: this.settings[ attrib ]
          });
        } else {
          this.secondaryAttributtes.push({
            model: this.model,
            attribute: attrib
          });
        }
      }
    }
  }
});