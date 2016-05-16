
'use strict';

define(['dirModule','jquery'],function(dir,$){
    return dir.directive('rabbitHeader', function(notesFactory) {
        return {
            restrict: 'AE',
            scope: {},
            link: function(scope, elem, attrs) {
                scope.text = "this header section";
            },
            templateUrl: '../../../template/tplIndex/rabbitHeader.html'
        }
    }).factory('notesFactory', function() {
        return {
            
        };
    });
    
})