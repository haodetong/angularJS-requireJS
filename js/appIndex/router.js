define(['app'],function(app){
        return app.run(['$rootScope', '$log', function($rootScope, $log){
                        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                            $log.debug('successfully changed states') ;
                        });
                    }])
                  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider){
                        //用于改变state时跳至顶部
                        $uiViewScrollProvider.useAnchorScroll();
                        // 默认进入重定向
                        //$urlRouterProvider.otherwise('/index');
                        $stateProvider.state('index',{
                            url: '/index',
                            templateUrl:'../../template/tplIndex/index.html',
                            controller:'indexCtl'
                        }).state('home',{
                            url: '/home',
                            templateUrl:'../../template/tplIndex/home.html',
                            controller:'homeCtl',
                            resolve: {
                                //这个函数的值会被直接返回，因为它不是数据保证      
                                person: function() {
                                    return {
                                        name: "Ari",
                                        email: "ari@fullstack.io"
                                    }
                                }
                            }
                        })                       
                })
});

