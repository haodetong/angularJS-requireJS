'use strict';

require.config({
    baseUrl:'js',
    paths:{
        jquery:'../lib/jquery/jquery-1.9.1',
        angular:'../lib/angular/angular',
        angularUiRouter:'../lib/angular/angular-ui-router',
        Restangular:'../lib/angular/restangular-1.5.2',
        lodash:'../lib/angular/lodash-1.8.3',
        app:'appIndex/app',
        router:'appIndex/router',
        mainController:'appIndex/controllers/mainController',
        ctlModule:'appIndex/controllers/ctlModule',
        indexController:'appIndex/controllers/indexController',
        homeController:'appIndex/controllers/homeController',
        mainDirective:'appIndex/directives/mainDirective',
        dirModule:'appIndex/directives/dirModule',
        demoDirective:'appIndex/directives/demoDirective',
        headerDirective:'appIndex/directives/headerDirective',
        footerDirective:'appIndex/directives/footerDirective',
        mainService:'appIndex/services/mainService',
        serModule:'appIndex/services/serModule',
        homeService:'appIndex/services/homeService',
        mainApi:'appIndex/api/mainApi',
        apiModule:'appIndex/api/apiModule',
        homeApi:'appIndex/api/homeApi',
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angularUiRouter':{
            deps: ['angular'],
            exports:'angularUiRouter'
        },
        'lodash':{
            exports:'lodash'
        },
        'Restangular':{
            deps: ['angular','lodash'],
            exports:'Restangular'
        }
    },
    urlArgs:"bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

require([
    'jquery',
    'angular',
    'angularUiRouter',
    'app',
    'router'
], function ($,angular,angularUiRouter,app,router) {
   $(document).ready(function(){
        //采用手动启动angularjs应用，所以这里不用为首页添加ng-app=’rabbit’
        angular.bootstrap(document, ['rabbit']); 
    });
});