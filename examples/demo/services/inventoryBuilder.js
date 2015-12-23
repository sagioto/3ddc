function InventoryBuilder(config){

}

InventoryBuilder.buildWorld = function(config){
    var scene = config.scene;

    var dc = inventory.datacenters[0];
    var numOfServers = dc.servers.length;
    var totalWidth = (numOfServers * 2 - 1) *( Server.prototype.width);
    var startX = (totalWidth / -2) + Server.prototype.width;
    dc.servers.forEach(function(server, index){
        var currServer = new Server({name:server.name});
        currServer.position.x = startX + (index * Server.prototype.width * 2);
        currServer.position.y = 2;
        scene.add(currServer);
        var vmStartX = currServer.position.x;
        var vmStartY = Server.prototype.height;
        var vmStartZ = currServer.position.z;
        server.vms.forEach(function(vm,index){
            var currVm = new VM({name: vm.name});
            currVm.position.x = vmStartX + ((index % 2) * VM.prototype.width) + (VM.prototype.width / -2);
            currVm.position.y = vmStartY + VM.prototype.height;
            currVm.position.z = vmStartZ + (Math.floor(index / 2) * VM.prototype.depth) + (VM.prototype.depth / -2);
            scene.add(currVm);
            config.vms.push(currVm);
        });

    });

};

