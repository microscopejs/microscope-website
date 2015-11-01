'use strict';

function NgOnLoad() {

    var directive = {

        restrict: 'A',
        scope: {
            callback: "&ngOnLoad"
        },
        link: link
    };
            
    /**
     * directive view model
     */
    function link($scope, element, attrs) {

        var location = element.length > 0 && element[0].contentWindow ?
            element[0].contentWindow.location : undefined;

        // hooking up the onload event - calling the callback on load event
        // element.on("load",() => scope.callback({
        //     contentLocation: location
        // }));

        element.on("load", function () {
            $scope.callback({
                contentLocation: location
            });
        });


    }

    return directive;

}


module.exports = NgOnLoad;