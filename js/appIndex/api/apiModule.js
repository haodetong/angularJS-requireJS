//声明一个叫作app.apiModule的模块，app.js里的模块rabbit，依赖于这个模块，并调用这个模块下的所有方法
define(['angular','Restangular'], function (angular) {
    'use strict';
    return angular.module('app.apiModule', ['restangular']);
 });
 