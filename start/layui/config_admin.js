
var ENV = 'PROD'; // TEST 测试  PROD 正式

// 系统配置
var config = (function(){
    var PARAM = {
        TEST:{
            url:'http://wxdev.hongyancloud.com/',
            HREF_URL:'http://localhost:63342/hyadmin/'
        },
        PROD:{
            url:'http://wx.hongyancloud.com/',
            HREF_URL:'http://wx.hongyancloud.com/hyadmin/'
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

//合成链接
function aLink(linkName,linkAction) {
    return config.PARAM.HREF_URL + linkName;
}


