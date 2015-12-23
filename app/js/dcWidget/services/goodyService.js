'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function goodyService() {

    var visitors = [];

    var registerVisitor = function (visitor) {
        visitors.push(visitor);
    }

    var notifyAll = function() {
        for (var index = 0; index < visitors.length; ++index)
            visitors[index].visit();
    }

    var goodies = [];
    var hoveredGoody = {};

    var setData = function (newData) {
        goodies = newData;
        notifyAll();
    }

    var getData = function () {
        return goodies;
    }

    var addGoody = function(goody){
        goody.rank = goodies.length;
        if(!goodies.length)
            hoveredGoody = goody;
        goodies.push(goody);
        notifyAll();
    }
    var setHoveredGoody= function(goody){
        if(hoveredGoody.rank>=0){
            var tempGoodyRank = hoveredGoody.rank;
            hoveredGoody.rank = goody.rank;
        }else{//first Time
            for(var i=0;i<goodies.length;i++){
                if(goody.rank>goodies[i].rank){
                    goodies[i].rank++;
                }
            }
        }
        goody.rank = 0;
        hoveredGoody = goody;
        //notifyAll();
    }
    var getHoveredGoody = function(){
        return hoveredGoody;
    }

    return {
        registerVisitor: registerVisitor,
        setData: setData,
        addGoody: addGoody,
        getHoveredGoody: getHoveredGoody,
        setHoveredGoody:setHoveredGoody,
        getData: getData
    };
}

servicesModule.service('$goodyService', goodyService);
