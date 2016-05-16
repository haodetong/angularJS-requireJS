define(['apiModule'],function(api){
    return api.factory('testData', ['Restangular', function(Restangular) {
        
        var restAngular = Restangular.withConfig(function(Configurer) { 
                Configurer.setBaseUrl('/php/');
                
        });
        
        var _messageService = restAngular.all('test.php');
        return {
            getMessages: function() {
                
                var obj = _messageService.getList().$object;
                return obj;
                //$scope.projects = Restangular.all("projects").getList().$object;
                //return('this is test data by testData api of homeApi.js ');
            }
        }; 
    }]);
})
