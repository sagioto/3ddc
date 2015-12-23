function BaseEntity(config){
    this.type = config.type;
    this.status = config.status;
    this.name = config.name;
    this.receiveShadow = true;
    this.castShadow = true;
    Physijs.BoxMesh.call(this, config.geometry, config.material, config.mass);
    this.afterObjectCreated();
}

BaseEntity.prototype = Object.create(Physijs.BoxMesh.prototype);

BaseEntity.prototype.afterObjectCreated = function(){
    this.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
        // `this` has collided with `other_object` with an impact speed of `relative_velocity` and a rotational force of `relative_rotation` and at normal `contact_normal`
        var v = new THREE.Vector3( 0, 0, 0 );//_vector.set( 0, 0, 0 );
        other_object.setAngularFactor( v );
        other_object.setAngularVelocity( v );
        other_object.setLinearFactor( v );
        other_object.setLinearVelocity( v );
        //this.
    });
}
