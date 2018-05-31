
var ENV = 'TEST'; // TEST 测试  PROD 正式

// 系统配置
var config = (function(){
    var PARAM = {
        TEST:{
            url:'http://wxdev.hongyancloud.com/',
        },
        PROD:{
            url:'http://wx.hongyancloud.com/',
        }
    };
    return {
        PARAM:PARAM[ENV]
    }
})();

// 合成api
function genAPI(apiName,apiAction){
    return config.PARAM.url + apiName;
}


/*
$.ajax({
    url:genAPI('getData'),
    success:function(){

    }
});
*/
