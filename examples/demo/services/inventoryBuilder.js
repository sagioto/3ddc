function InventoryBuilder(config){

}

InventoryBuilder.buildWorld = function(config){
    /*inventory.datacenters.forEach(function(datcenter){

    });*/
    var scene = config.scene;

    var dc = inventory.datacenters[0];

    dc.servers.forEach(function(server, index){
        var currServer = new Server({name:server.name});
        currServer.position.x = index * currServer.geometry.parameters.width * 2;
        //currServer.position.x =  2;
        currServer.position.y = 2;
        //currServer.position.y = index * 2;
        //currServer.position.z = index * 2;
        scene.add(currServer);
    });

};
