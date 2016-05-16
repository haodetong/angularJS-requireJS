
'use strict';

define(['dirModule','jquery'],function(dir,$){
    return dir.directive('rabbitFooter', function(notesFactory) {
        return {
            restrict: 'AE',
            scope: {},
            link: function(scope, elem, attrs) {
                scope.text = "this footer section";
            },
            templateUrl: '../../../template/tplIndex/rabbitFooter.html'
        }
    }).factory('notesFactory', function() {
        return {
            
        };
    });
    
})