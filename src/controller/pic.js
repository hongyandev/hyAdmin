layui.use(['jquery'], function(){
    var $ = layui.$;
    $.ajax({
        type:"post",
        url:"http://wx.hongyancloud.com/wxDev/ueditor/getHomeImageList",
        dataType: "json",
        success: function(res) {
            if(res.code == "00000") {
                console.info(111);
                var str="";
                $.each(res.data,function (i,o) {
                    str+="<div class=\"layui-col-xs4\">\n" +
                        "       <div class=\"layui-card\">\n" +
                        "            <div class=\"layui-card-header layTitle\">"+o.title+"</div>\n" +
                        "                 <div class=\"layui-card-body\">\n" +
                        "                       <img src="+o.fileRealPath+"/>\n" +
                        "                   </div>\n" +
                        "         </div>\n" +
                        "</div>"
                });

            }
        }, error: function(XMLHttpRequest, textStatus, errorThrown) {

        }
    });
})