'use strict';

define(['ctlModule','jquery'],function(ctl,$){
    return ctl.controller('homeCtl',function($scope,person,serGetTitle,testData){
        $scope.name = person.name;
        $scope.email = person.email;
        $scope.title = serGetTitle.title;
        $scope.projects = testData.getMessages();
        $scope.$on('$viewContentLoaded', function(event){ 
            //console.log('loaded'); 
        });
    })
})
