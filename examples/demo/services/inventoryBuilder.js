function InventoryBuilder(config){

}

InventoryBuilder.buildWorld = function(config){
    var scene = config.scene;

    var dc = inventory.datacenters[0];
    var numOfServers = dc.servers.length;
    var totalWidth = (numOfServers * 2 - 1) *( Server.prototype.width);
    var startX = (totalWidth / -2) + Server.prototype.width;
    dc.servers.forEach(function(server, index){
        var currServer = new Server({name: server.name, status: server.status});
        currServer.position.x = startX + (index * Server.prototype.width * 2);
        currServer.position.y = 2;
        scene.add(currServer);
        var edges = new THREE.EdgesHelper( currServer, 0x000000 );
        scene.add( edges );
        var vmStartX = currServer.position.x;
        var vmStartY = Server.prototype.height;
        var vmStartZ = currServer.position.z;
        server.vms.forEach(function(vm,index){
            var currVm = new VM({name: vm.name, status: vm.status});
            currVm.position.x = vmStartX + ((index % 2) * VM.prototype.width) + (VM.prototype.width / -2);
            currVm.position.y = vmStartY + (VM.prototype.height * (1 + Math.floor(index / 4)));
            currVm.position.z = vmStartZ + (Math.floor((index % 4) / 2) * VM.prototype.depth) + (VM.prototype.depth / -2);
            scene.add(currVm);
            var edges = new THREE.EdgesHelper( currVm, 0x000000 );
            scene.add( edges );
            config.vms.push(currVm);
        });

    });

};

