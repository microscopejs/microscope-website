'use strict';

function Preview($sce) {

    var directive = {

        restrict: 'EA',
        transclude: true,
        templateUrl:'components/preview/directives/preview.html',
        scope: {
            iframeUrl: "=",
            device:'='
        },
        link: link
    };
            
    /**
     * directive view model
     */
    function link($scope, element, attrs,ctrl,transclude) {
        
        transclude($scope, function(clone, scope) {
            element.append(clone);
        });
      
        $scope.isLoading = true;
        $scope.$watch('device',function(){
               $scope.iframeClass = 'iframe-'+$scope.device;
               $scope.deviceClass = 'device-'+$scope.device;
        });
     
        
        $scope.cleanUrl = $sce.trustAsResourceUrl($scope.iframeUrl);
        
        $scope.iframeLoaded = function(){ 
		  $scope.isLoading = false;
		  $scope.$apply();
        };
    }

    return directive;
}


module.exports = Preview;