'use strict';
var _ = require('lodash');
function team(TeamService) {

    var directive = {
        restrict: 'EA',
        templateUrl: 'components/team/directives/team.html',
        scope: {},
        link: link
    };
            
    /**
     * directive view model
     */
    function link($scope, element, attrs, ctrl, transclude) {
        TeamService.getAll().then(function(result){
            $scope.team = _.filter(result.data);
        });
    }

    return directive;
}

module.exports = team;