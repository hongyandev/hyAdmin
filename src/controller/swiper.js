layui.use(['jquery','form','upload'], function(){
    var $ = layui.$,
        form = layui.form;
    var  upload = layui.upload;
    //上传图片
    upload.render({
        elem: '#uploadImg',
        url: 'http://wxdev.hongyancloud.com/wxDev/ueditor/saveHomeImage',
        method:'post',
        filed:'file',
        size:600,
        data:{"id": function(){
                return $('#imgId').val();
            }},
        before: function(obj){ //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
            layer.msg('图片上传中...', {
                icon: 16,
                shade: 0.01
            })
        },
        done: function(res, index, upload){
            if(res.code==00000){
                console.info(res);
                layer.close(layer.msg('上传成功！'));
                $(".imgview").attr("src",res.data.fileRealPath+'?v='+Math.random());
                $("#imgId").val(res.data.id)
            }

        },
        error: function(index, upload){
            layer.closeAll('loading'); //关闭loading
        }
    });
    //提交
    form.on('submit(test)', function(data){
        // console.log(data)
        var title = data.field.title,
            imgid = data.field.imgid;
        content = UE.getEditor('editor').getContent(),
            active = data.field.state,
            order = parseInt(data.field.interest);
        if(content==""){
            layer.msg('编辑器内容不能为空...')
            return;
        }
        $.ajax({
            type:"post",
            url:"http://wxdev.hongyancloud.com/wxDev/ueditor/saveHomeContent",
            data:{
                "id":imgid,
                "title":title,
                "content":content,
                "active":active,
                "order":order
            },
            //contentType: "application/json",
            dataType: "json",
            success: function(res) {
                if(res.code == "00000") {
                    window.location.href="http://localhost:63342/hyadmin/src/views/pic/swiper.html"

                }
            }, error: function(XMLHttpRequest, textStatus, errorThrown) {

            }
        });
        return false;
    });

    $("#goBack").click(function () {
        window.history.go(-1);
    });
});