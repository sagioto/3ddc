function InventoryBuilder(config){

}

InventoryBuilder.buildWorld = function(config){
    /*inventory.datacenters.forEach(function(datcenter){

    });*/
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
        var deltaX=0;
        var numOfvms = server.vms.length;
        var vmStartX = currServer.position.x;
        var vmStartY = Server.prototype.height;
        var vmStartZ = currServer.position.z;
        server.vms.forEach(function(vm,index){
            var width =  (index % 2) * VM.prototype.width;
            var vm = new VM({name:vm.name});
            vm.position.x = vmStartX + width;
            vm.position.y = vmStartY + VM.prototype.height;
            vm.position.z = vmStartZ + width;
            deltaX+=vm.geometry.parameters.width +1;
            scene.add(vm);
            config.vms.push(vm);
        });

    });

};

