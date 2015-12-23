'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SideBarCtrl($rootScope) {
    $rootScope.$on('$toggleSideBar', function(scope, next, current){
        $rootScope.slideout = !$rootScope.slideout;
    });
}
controllersModule.controller('SideBarCtrl', SideBarCtrl);