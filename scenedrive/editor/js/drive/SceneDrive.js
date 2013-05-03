var objectLoader = new THREE.ObjectLoader();
var sceneExporter = new THREE.ObjectExporter();

var sceneDrive = sceneDrive || {};
sceneDrive.APP_ID = 459393168228;
sceneDrive.CLIENT_ID = '459393168228.apps.googleusercontent.com';

sceneDrive.doc = {}

sceneDrive.AUTH_BUTTON_ID = 'sceneDriveAuthorize';
sceneDrive.SAVE_BUTTON_ID = 'sceneDriveSave';
sceneDrive.OPEN_BUTTON_ID = 'sceneDriveOpen';
sceneDrive.SHARE_BUTTON_ID = 'sceneDriveShare';

sceneDrive.DEFAULT_TITLE = 'Untitled';


sceneDrive.setUuids = function( scene ) {

  function guid() {
    function s4() {
      return Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString( 16 ).substring( 1 );
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  scene.traverse( function( object ) {
    if ( object.uuid == undefined || object.uuid == '' ) object.uuid = guid();
    if ( object.geometry)
      if( object.geometry.uuid == undefined || object.geometry.uuid == '' ) object.geometry.uuid = guid();
    if ( object.material ) 
      if ( object.material.uuid == undefined || object.material.uuid == '' ) object.material.uuid = guid();
  } );

};

sceneDrive.listToModel = function( list, model ) {

  if ( list && model ) {
    for ( var i in list ) {
      if ( list[ i ].uuid )
        model.set( list[ i ].uuid, JSON.stringify( list[ i ] ) );
    }
  }

  return model;

};

sceneDrive.modelToList = function( model ) {

  var keys = model.keys();
  var list = [];

  for ( var id in keys ) {
    list.push( JSON.parse( model.get( keys[ id ] ) ) );
  } 

  return list;

};

sceneDrive.remapToUUids = function( objects, targets, key ) {

  for ( var i in objects ) {
    if ( objects[ i ][ key ] !== undefined ) {
      if ( targets[ objects[ i ][ key ] ]) {
        var uuid = targets[ objects[ i ][ key ] ].uuid;
        objects[ i ][ key ] = uuid;
      }
    }
  }

};

sceneDrive.flattenObjects = function( list ) {

  list = ( list instanceof Array ) ? list : [ list ];

  function iterateChildren( list, parent ) {

    var output = [];

    for ( var i in list ) {

      if ( parent ) list[ i ].parent = parent;
      output.push( list[ i ] );

      if ( list[ i ].children !== undefined ) {
        output = output.concat( iterateChildren( list[ i ].children, list[ i ].uuid ) );
        delete list[ i ].children; 
      }

    }

    return output;

  }

  return iterateChildren( list );

};

sceneDrive.initializeModel = function( model ) {

  model.getRoot().set( 'geometries', model.createMap() );
  model.getRoot().set( 'materials', model.createMap() );
  model.getRoot().set( 'objects', model.createMap() );

  sceneDrive.getModels( model.getRoot() );
  sceneDrive.saveJSON( JSON.parse( localStorage.threejsEditor ) );

};

sceneDrive.saveJSON = function( json ) {

  if ( json.object.type == 'Scene' ) {
    json.object = sceneDrive.flattenObjects( json.object.children );
  } else {
    json.object = sceneDrive.flattenObjects( json.object );
  }

  sceneDrive.remapToUUids( json.object, json.geometries, 'geometry' );
  sceneDrive.remapToUUids( json.object, json.materials, 'material' );
  
  sceneDrive.listToModel( json.geometries, sceneDrive.doc.geometries );
  sceneDrive.listToModel( json.materials, sceneDrive.doc.materials );
  sceneDrive.listToModel( json.object, sceneDrive.doc.objects );

};

sceneDrive.getModels = function( doc ) {

  sceneDrive.doc.geometries = doc.get( 'geometries' );
  sceneDrive.doc.materials = doc.get( 'materials' );
  sceneDrive.doc.objects = doc.get( 'objects' );

};


sceneDrive.onFileLoaded = function( file ) {

  sceneDrive.getModels( file.getModel().getRoot() );

  sceneDrive.addToSceneDriveMap( sceneDrive.scene );

  sceneDrive.loadScene();

  sceneDrive.connectRealtime();

  document.getElementById( sceneDrive.SHARE_BUTTON_ID ).style.display = 'block';

};

sceneDrive.loadScene = function() {

  sceneDrive.loadGeometries();
  sceneDrive.loadMaterials();
  sceneDrive.loadObjects();

  signals.sceneChanged.dispatch( sceneDrive.scene );

};

sceneDrive.loadGeometries = function() {

  var list = sceneDrive.modelToList( sceneDrive.doc.geometries );
  var geometries = objectLoader.parseGeometries( list );

  for ( var i in geometries ) {
    var uuid = geometries[ i ].uuid;
    if ( sceneDrive.scene.__sceneDrive.geometries[ uuid ]) {
      // TODO: update geometry
    } else {
      sceneDrive.scene.__sceneDrive.geometries[ uuid ] = geometries[ i ];
    }
  }

};

sceneDrive.loadMaterials = function( ) {

  var list = sceneDrive.modelToList( sceneDrive.doc.materials ); 
  var materials = objectLoader.parseMaterials( list );

  for ( var i in materials ) {
    var uuid = materials[ i ].uuid;
    if ( sceneDrive.scene.__sceneDrive.materials[ uuid ]) {
      sceneDrive.copyObject( sceneDrive.scene.__sceneDrive.materials[ uuid ], materials[ i ] );
      delete materials[ i ];
    } else {
      sceneDrive.scene.__sceneDrive.materials[ uuid ] = materials[ i ];
    }
  }

};

sceneDrive.loadObjects = function( ) {

  var list = sceneDrive.modelToList( sceneDrive.doc.objects );

  for ( var i in list ) {

    var object = objectLoader.parseObject( list[ i ], sceneDrive.scene.__sceneDrive.geometries, sceneDrive.scene.__sceneDrive.materials );
    var uuid = list[ i ].uuid;

    if ( sceneDrive.scene.__sceneDrive.objects[ uuid ] ) {
      sceneDrive.copyObject( sceneDrive.scene.__sceneDrive.objects[ uuid ], object );
      delete object;
      signals.sceneChanged.dispatch( sceneDrive.scene );
      console.log('object changed');
    } else {
      sceneDrive.scene.__sceneDrive.objects[ uuid ] = object;
      signals.objectAdded.dispatch( sceneDrive.scene.__sceneDrive.objects[ uuid ] );
      console.log('object added');
    }
  
  }

  for ( var i in list ) {
    
    var uuid = list[ i ].uuid;
    var object = sceneDrive.scene.__sceneDrive.objects[ uuid ];

    var model = JSON.parse( sceneDrive.doc.objects.get( uuid ) );
    var parentUuid = model.parent;
    var parent = parentUuid ? sceneDrive.scene.__sceneDrive.objects[ parentUuid ] : sceneDrive.scene;

    parent.remove( object );
    parent.add( object );
  
  }

};

sceneDrive.copyObject = function ( target, source ) {
  
  for (i in source) {

    var type = typeof target[ i ];

    if ( type == "function" ) {

      return;

    } else if ( type == "boolean" || type == "string" || type == "number" ) {

      if ( target.hasOwnProperty(i) ) target[ i ] = source[ i ];

    } else if ( i == 'userData' ) {

      target[ i ] = JSON.parse( JSON.stringify( source[ i ] ) );

    } else {

      try
      {
        target[ i ].copy( source[ i ]);
      }
      catch( err )
      {
        //console.log( err, i, type, source[ i ]);
      }

    }

  }

};

sceneDrive.realTimeOptions = {
  appId: sceneDrive.APP_ID,
  clientId: sceneDrive.CLIENT_ID,
  authButtonElementId: sceneDrive.AUTH_BUTTON_ID,
  autoCreate: false,
  initializeModel: sceneDrive.initializeModel,
  onFileLoaded: sceneDrive.onFileLoaded,
  defaultTitle: sceneDrive.DEFAULT_TITLE
};


sceneDrive.connectRealtime = function() {

  sceneDrive.doc.geometries.addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, sceneDrive.loadGeometries );
  sceneDrive.doc.materials.addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, sceneDrive.loadMaterials );
  sceneDrive.doc.objects.addEventListener( gapi.drive.realtime.EventType.VALUE_CHANGED, sceneDrive.loadObjects );

};


sceneDrive.popupOpen = function() {

  var token = gapi.auth.getToken().access_token;
  var view = new google.picker.View( google.picker.ViewId.DOCS );
  view.setMimeTypes( 'application/vnd.google-apps.drive-sdk.' + sceneDrive.realTimeOptions.appId );
  var picker = new google.picker.PickerBuilder()
  .enableFeature( google.picker.Feature.NAV_HIDDEN )
  .setAppId( sceneDrive.realTimeOptions.appId )
  .setOAuthToken( token )
  .addView( view)
  .addView(new google.picker.DocsUploadView() )
  .setCallback( sceneDrive.openFromDrive)
  .build();
  picker.setVisible( true);

};

sceneDrive.addToSceneDriveMap = function( object ) {

  object.traverse( function( object ) {

    if ( object.uuid != '' ) {
      sceneDrive.scene.__sceneDrive.objects[ object.uuid ] = object;
      if ( object.geometry && object.geometry.uuid != '' ) {
        sceneDrive.scene.__sceneDrive.geometries[ object.geometry.uuid ] = object.geometry;
      }
      if ( object.material && object.material.uuid != '' ) {
        sceneDrive.scene.__sceneDrive.materials[ object.material.uuid ] = object.material;
      }
    }

  });

}

sceneDrive.saveToDrive = function( object ) {

  object = object ? object : sceneDrive.scene;

  sceneDrive.addToSceneDriveMap( object );

  if ( !(rtclient.params['fileId']) ) {

    localStorage.threejsEditor = JSON.stringify( sceneExporter.parse( sceneDrive.scene ) );
    sceneDrive.realTimeOptions.defaultTitle = prompt( "Scene Title", "Untitled" );
    sceneDrive.realTimeLoader = new rtclient.RealtimeLoader( sceneDrive.realTimeOptions );
    sceneDrive.realTimeLoader.createNewFileAndRedirect();

  } else {

    sceneDrive.saveJSON( sceneExporter.parse( object ) );
    
  }

};

sceneDrive.openFromDrive = function(data) {

  if (data.action == google.picker.Action.PICKED ) {
    var fileId = data.docs[0].id;
    delete localStorage.threejsEditor;
    rtclient.redirectTo( fileId, sceneDrive.realTimeLoader.authorizer.userId );
  }

};

sceneDrive.popupShare = function() {

  var shareClient = new gapi.drive.share.ShareClient( sceneDrive.realTimeOptions.appId );
  shareClient.setItemIds([rtclient.params['fileId'] ]);
  shareClient.showSettingsDialog();

};

sceneDrive.connectUi = function() {

  document.getElementById( sceneDrive.SAVE_BUTTON_ID ).onclick = function() {
    sceneDrive.saveToDrive();
  };
  document.getElementById( sceneDrive.OPEN_BUTTON_ID ).onclick = function() {
    sceneDrive.popupOpen()
  };
  document.getElementById( sceneDrive.SHARE_BUTTON_ID ).onclick = function() {
    sceneDrive.popupShare()
  };

};

sceneDrive.afterAuth = function() {

  document.getElementById( sceneDrive.OPEN_BUTTON_ID ).style.display = 'block';
  document.getElementById( sceneDrive.AUTH_BUTTON_ID ).style.display = 'none';

};

sceneDrive.init = function( scene ) {

  sceneDrive.scene = scene;
  sceneDrive.scene.__sceneDrive = {};
  sceneDrive.scene.__sceneDrive.geometries = {}; 
  sceneDrive.scene.__sceneDrive.materials = {}; 
  sceneDrive.scene.__sceneDrive.objects = {};

  sceneDrive.realTimeLoader = new rtclient.RealtimeLoader( sceneDrive.realTimeOptions );

  sceneDrive.connectUi();
  sceneDrive.realTimeLoader.start( sceneDrive.afterAuth );

  signals.objectChanged.add( function( object ) {

    if ( rtclient.params['fileId'] ) {

      sceneDrive.saveToDrive( object );
      sceneDrive.saveToDrive( object );

    }

  } );

  signals.objectAdded.add( function( object ) {

    if ( rtclient.params['fileId'] ) {

      sceneDrive.setUuids( object );
      sceneDrive.saveToDrive( object );

    }

  } );

  rtclient.onFileLoaded = function(resp){

      if (resp.code == 403) alert('Error 403: Authorization required');
      if (resp.code == 404) alert('Error 404: File does not exist or access denied');
      if (resp.editable !== undefined && resp.editable == false)
        document.getElementById( sceneDrive.SAVE_BUTTON_ID ).style.display = 'none';
      else
        document.getElementById( sceneDrive.SAVE_BUTTON_ID ).style.display = 'block';

  }

};

google.load( 'picker', '1' );