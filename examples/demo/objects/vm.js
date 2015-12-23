function VM(config){
    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var material =  Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: loader.load( 'images/vm.jpg' )}),
        .4, // medium friction
        .4 // medium restitution
    );
    material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
    material.map.repeat.set( 1, .5 );


    config.geometry = new THREE.BoxGeometry( 2, 2, 2 );
    config.material = material;

    BaseEntity.call(this, config);
}

VM.prototype = Object.create(BaseEntity.prototype);
