function Server(config){
    var geometry = new THREE.BoxGeometry(Server.prototype.width, Server.prototype.height, Server.prototype.depth );
    var x = document.createElement("canvas");
    var xc = x.getContext("2d");
    x.width = x.height = 128;
    xc.shadowColor = "#000";
    xc.fillStyle = config.status == 'online' ? 'green' : 'red';
    xc.fillRect(0, 0, 128, 128);
    xc.fillStyle = "black";
    xc.font = "30pt arial bold";
    xc.fillText(config.name, 5, 64, 128 - 10);
    var xm = new THREE.MeshLambertMaterial({ map: new THREE.Texture(x), transparent: false });
    xm.map.needsUpdate = true;

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

Server.prototype = Object.create(BaseEntity.prototype);
Server.prototype.width = 4;
Server.prototype.depth = 4;
Server.prototype.height = 2;
