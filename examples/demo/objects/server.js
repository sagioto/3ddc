function Server(config){
    var geometry = new THREE.BoxGeometry( 8, 1, 8 );
    var material =  Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: loader.load( 'images/server.jpg' )}),
        .4, // medium friction
        .4 // medium restitution
    );
    material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
    material.map.repeat.set( 1, .5 );


    config.geometry = geometry;
    config.material = material;
    BaseEntity.call(this, config);
}

Server.prototype = Object.create(BaseEntity.prototype);
