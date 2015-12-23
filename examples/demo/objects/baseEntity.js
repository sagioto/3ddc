function BaseEntity(config){
    this.type = config.type;
    this.status = config.status;
    this.name = config.name;
    Physijs.BoxMesh.call(this,config.geometry, config.material);
}
BaseEntity.prototype = Object.create(Physijs.BoxMesh.prototype);
