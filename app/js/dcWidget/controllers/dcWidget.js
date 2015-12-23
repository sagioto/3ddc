'use strict';

var controllersModule = require('./_index');
require('../factories/dcWidget');
/**
 * @ngInject
 */
function dcWidgetCtrl($scope,parallaxHelper,$matificGoodyService, $dcWidgetFactory) {

  // ViewModel
  $scope.imageParallax = parallaxHelper.createAnimator(-0.3);
  $scope.bulletParallax = parallaxHelper.createAnimator(0.3);
  $scope.goodies = $dcWidgetFactory.getGoodies();
  $scope.bullets = $dcWidgetFactory.getBullets();
  //$scope.videos = [1,2,3];//$matificGoodyService.getVideos();

}

controllersModule.controller('dcWidgetCtrl', dcWidgetCtrl);