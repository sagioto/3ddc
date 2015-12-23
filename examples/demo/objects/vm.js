function VM(config){
    var geometry = new THREE.BoxGeometry( VM.prototype.width, VM.prototype.height, VM.prototype.depth );
    var material =  Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: loader.load( 'images/vm.jpg' )}),
        1, // medium friction
        .9 // medium restitution
    );
    material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
    material.map.repeat.set( 1, .5 );


    config.geometry = geometry;
    config.material = material;
    config.mass = 200;

    BaseEntity.call(this, config);
}

VM.prototype = Object.create(BaseEntity.prototype);
VM.prototype.width = 2;
VM.prototype.depth = 2;
VM.prototype.height = 2;
