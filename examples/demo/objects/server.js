Server.prototype = Object.create(BaseEntity.prototype);
Server.prototype.width = 4;
Server.prototype.depth = 4;
Server.prototype.height = 2;

function Server(config){
    var geometry = new THREE.BoxGeometry(Server.prototype.width, Server.prototype.height, Server.prototype.depth );
    var xm = this.createText(config);

    var material =  Physijs.createMaterial(
        xm,
        .4, // medium friction
        .4 // medium restitution
    );

    config.geometry = geometry;
    config.material = material;
    config.mass = 0;
    BaseEntity.call(this, config);
}

