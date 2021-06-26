/** layuiAdmin.std-v1.0.0 LPPL License By http://www.layui.com/admin/ */ ;
layui.define(function(e) {
	layui.use("layer", function() {	
		var $  = layui.$
		,layer = layui.layer;

		layui.admin.events.logout = function(){
            $.ajax({
                url:"/jdwlkj/index/logout",
                data:{},
                type:"POST",
                dataType:"json",
                timeout:15000,
                beforeSend:function(){
                    layer.load(1);
                },
                success:function(msg){
                    var alertstr = (msg == 1) ? "已退出" : msg;
                    layer.msg(alertstr, {time:1000},function(){
                        if (msg==1) top.location.reload();
                    });
                },
                complete: function () {
                    layer.closeAll("loading");
                }
            });
        }
	}), e("common", {})
});