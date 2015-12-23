var directiveModule = require('./_index');
require('../services/_index');

directiveModule
    .service('$matificGoodyService', function($rootScope){
        this.goodyVideos =[];
        this.hoveredGoody = {goody:{}};
        this.addVideo = function(video){
            this.goodyVideos.push(video);
        }
        this.getVideos =  function(){
            return this.goodyVideos;
        }
        this.getHoveredGoody = function(){
            return this.hoveredGoody;
        }
        this.shiftVideoToTop = function(goody){
            var videoIdx = this.getVideoIndex(goody);
            var video = this.goodyVideos[videoIdx];
            this.goodyVideos.splice(videoIdx,1);
            this.goodyVideos.unshift(video);
        }
        this.setVideos=function(videos){
            this.goodyVideos = videos;
        }
        this.setHoveredGoody = function(hoveredGoody){
            this.hoveredGoody.goody = hoveredGoody;
            $rootScope.$broadcast('GoodyHovered', this.hoveredGoody.goody);
        }
        this.getVideoIndex = function(goody){
            var idx = -1;
            this.goodyVideos.forEach(function(video, index){
                if(video.goodyID === goody.goodyID)
                    idx = index;
            });
            return idx;

        }

    })
    .directive('matificGoodyVideo', function($goodyService,$matificGoodyService,$timeout) {
        return {
            restrict: 'E',
            controller: function($scope) {

                $goodyService.registerVisitor(this);
                this.visit = function () {
                     $scope.videos = $goodyService.getData();
                    //$scope.hoveredGoody = $goodyService.getHoveredGoody();
                    //$scope.$apply();
                    //$timeout(function(){$scope.$apply()},10);
                }

            },
            templateUrl: 'dcWidget/matificGoodyVideo.html'
        };
    })
    .directive('matificGoody', function($goodyService,$matificGoodyService) {
        return {
            restrict: 'E',
            scope: {
                goody: '='
            },
            link: function(scope, element, attrs) {
                $goodyService.addGoody(scope.goody);
                scope.goodyMouseOver= function(){
                    $goodyService.setHoveredGoody(scope.goody);
                    scope.onGoodyHover = 'onGoodyHover';
                }

                scope.goodyMouseOut= function(){
                    scope.onGoodyHover = '';
                }

            },
            templateUrl: 'dcWidget/matificGoody.html'
        };
    }
);
