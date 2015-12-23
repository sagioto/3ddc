function BaseEntity(config){
    this.type = config.type;
    this.status = config.status;
    this.name = config.name;
    this.receiveShadow = true;
    this.castShadow = true;
    Physijs.BoxMesh.call(this, config.geometry, config.material, config.mass);
}
BaseEntity.prototype = Object.create(Physijs.BoxMesh.prototype);
