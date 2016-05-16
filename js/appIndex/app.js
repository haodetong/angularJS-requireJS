"use strict";

//定义匿名模块:依赖的mainController和mainDirective主要是用来加载angular的控制器和指令
define(["angular",'mainController','mainDirective','mainService','mainApi'],function(angular){
	//ui.router:一个基于ngRoute开发的第三方路由
	//无论做为哪种路由，作为框架额外的附加功能，它们都将以模块依赖的形式被引入
	//简而言之就是在引入源文件后，你的代码应该这样写（以ui.router为例）	
    return angular.module("rabbit",['ui.router','app.ctlModule','app.dirModule','app.serModule','app.apiModule']);//rabbit为自定义的模块名，依赖第三方路由模块ui.router,以及自定义的控制器模块，自定义的指令模块
	//这样做的目的是：在程序启动(bootstrap)的时候，加载依赖模块(如：ui.router)，将所有挂载在该模块的服务(provider)，指令(directive)，过滤器(filter)等都进行注册，那么在后面的程序中便可以调用了。
})









