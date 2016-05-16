define(['serModule','jquery'],function(ser,$){
    return ser.service('serGetTitle', function () {
       var data = {'title':'test service'};
       return  data;
    });
    
})
