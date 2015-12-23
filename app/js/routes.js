'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/home',
    controller: 'dcWidgetCtrl',
    templateUrl: 'dcWidget/dcWidget.html',
    title: 'Home'
  })
      .state('/', {
        url: '/home',
        controller: 'dcWidgetCtrl',
        templateUrl: 'dcWidget/dcWidget.html',
        title: 'Home'
      })
      .state('dcWidget', {
        url: '/dcWidget',
       // controller: 'ParentsCtrl',
        template: '<div>3ddc</div>',
        title: '3ddc'
      });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;