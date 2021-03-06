function VM(config){
    var geometry = new THREE.BoxGeometry( VM.prototype.width, VM.prototype.height, VM.prototype.depth );

    var xm = this.createText(config);
    var material =  Physijs.createMaterial(
        xm,
        .9, // medium friction
        .9 // medium restitution
    );

    config.geometry = geometry;
    config.material = material;
    config.mass = 400;
    config.doubleSided = true;
    this.server = config.server;
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
