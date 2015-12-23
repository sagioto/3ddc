function Server(config){
    var geometry = new THREE.BoxGeometry(Server.prototype.width, Server.prototype.height, Server.prototype.depth );
    var material =  Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: loader.load( 'images/server.jpg' )}),
        .4, // medium friction
        .4 // medium restitution
    );
    material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
    material.map.repeat.set( 1, .5 );


    config.geometry = geometry;
    config.material = material;
    config.mass = 0;
    BaseEntity.call(this, config);
}

Server.prototype = Object.create(BaseEntity.prototype);
Server.prototype.width = 4;
Server.prototype.depth = 4;
Server.prototype.height = 2;
