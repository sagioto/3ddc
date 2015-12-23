
var controllersModule = require('./_index');


function NavBarCtrl($scope, $rootScope, $translate) {
    $scope.options = {
        language: ["English", "Hebrew"]
    };
    $scope.language = "English";
    $scope.$watch('language', function(newValue, oldValue) {
        switch(newValue){
            case "English":{
                $translate.use('en');
                $rootScope.isRTL = false;
                $rootScope.txtDirection = 'rtl';

                break;
            }
            case "Hebrew":{
                $translate.use('heb');
                $rootScope.isRTL = true;
                $rootScope.txtDirection = 'rtl';
                break;
            }
        }
    });
}
controllersModule.controller('NavBarCtrl', NavBarCtrl);