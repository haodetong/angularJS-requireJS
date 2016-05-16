'use strict';

define(['dirModule','jquery'],function(dir,$){
    return dir.directive('demoDirective', function(notesFactory) {
        return {
            restrict: 'AE',
            scope: {},
            link: function(scope, elem, attrs) {
                
                scope.restore = function() {
                    scope.editMode = false;
                    scope.index = -1;
                    scope.noteText = "";
                };

                var editor = elem.find('#editor');
                scope.restore();
                scope.notes = notesFactory.getAll();

            },
            templateUrl: '../../../template/tplIndex/demoDirective.html'
        }
    }).factory('notesFactory', function() {
        return {
            getAll: function() {
                var notes = [];
                for (var i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i).indexOf('note') !== -1) {
                        var note = localStorage.getItem(localStorage.key(i));
                        notes.push(JSON.parse(note));
                    }
                }
                return notes;
            }
        };
    });
    
})