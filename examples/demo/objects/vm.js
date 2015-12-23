function VM(config){
    var geometry = new THREE.BoxGeometry( VM.prototype.width, VM.prototype.height, VM.prototype.depth );

    var x = document.createElement("canvas");
    var xc = x.getContext("2d");
    x.width = x.height = 128;
    xc.shadowColor = "#000";
    xc.fillStyle = config.status == 'online' ? 'green' : 'red';
    xc.fillRect(0, 0, 128, 128);
    xc.fillStyle = "black";
    xc.font = "30pt arial bold";
    xc.fillText(config.name, 10, 64);
    var xm = new THREE.MeshLambertMaterial({ map: new THREE.Texture(x), transparent: false });
    xm.map.needsUpdate = true;

    var material =  Physijs.createMaterial(
        xm,
        .9, // medium friction
        .9 // medium restitution
    );

    config.geometry = geometry;
    config.material = material;
    //config.mass = 0;
    config.doubleSided = true;

    BaseEntity.call(this, config);
}

VM.prototype = Object.create(BaseEntity.prototype);
VM.prototype.width = 2;
VM.prototype.depth = 2;
VM.prototype.height = 2;
VM.prototype.afterObjectCreated = function(){
    BaseEntity.prototype.afterObjectCreated.call(this);
    var v = new THREE.Vector3( 0, 0, 0 );//_vector.set( 0, 0, 0 );
    this.setAngularFactor( v );
    this.setAngularVelocity( v );
    this.setLinearFactor( v );
    this.setLinearVelocity( v );
}
