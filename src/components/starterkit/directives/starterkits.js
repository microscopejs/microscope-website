'use strict';
var _ = require('lodash');
function starterkits(StarterkitService) {

    var directive = {
        restrict: 'EA',
        templateUrl: 'components/starterkit/directives/starterkits.html',
        scope: {
            category: "@"
        },
        link: link
    };
            
    /**
     * directive view model
     */
    function link($scope, element, attrs, ctrl, transclude) {
        
        StarterkitService.getAll().then(function(result){
            $scope.starters = _.filter(result.data, {'category':$scope.category});
        });
        
    }

    return directive;
}

module.exports = starterkits;