function BaseEntity(config){
    this.type = config.type;
    this.isBeingDragged = false;
    this.status = config.status;
    this.name = config.name;
    this.receiveShadow = true;
    this.castShadow = true;
    Physijs.BoxMesh.call(this, config.geometry, config.material, config.mass);
    this.afterObjectCreated();
}

BaseEntity.prototype = Object.create(Physijs.BoxMesh.prototype);

BaseEntity.prototype.setIsBeingDragged = function(isBeingDragged){
    this.isBeingDragged = isBeingDragged;
}
BaseEntity.prototype.afterObjectCreated = function(){
    this.addEventListener( 'collision', this.onCollision);
}
BaseEntity.prototype.freezeObject = function(){
    var v = new THREE.Vector3( 0, 0, 0 );//_vector.set( 0, 0, 0 );
    this._changeVelocityAndFactors( v );
}
BaseEntity.prototype.resumeObjectMovement = function(){
    var v = new THREE.Vector3( 1, 1, 1 );//_vector.set( 0, 0, 0 );
    this._changeVelocityAndFactors( v );
}
BaseEntity.prototype._changeVelocityAndFactors = function(v){
    this.setAngularFactor( v );
    this.setAngularVelocity( v );
    this.setLinearFactor( v );
    this.setLinearVelocity( v );
}


BaseEntity.prototype.onCollision = function(other_object, relative_velocity, relative_rotation, contact_normal){


    if(this.isBeingDragged && Math.abs(this.position.y-other_object.position.y)>0.05 ){
        other_object.freezeObject(  );
        this.resumeObjectMovement( );
        this.position.set( this.position.x, other_object.position.y+VM.prototype.height+0.1, this.position.z );
        this.__dirtyPosition = true;
        this.freezeObject( );
    }

        //this.
}
