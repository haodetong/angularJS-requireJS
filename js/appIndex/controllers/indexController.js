'use strict';

define(['ctlModule','jquery'],function(ctl,$){
    return ctl.controller('indexCtl',function($scope){
        $scope.welcome = 'hello world';
    })
})
