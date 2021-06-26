// JavaScript Document
layui.use(['layer', 'element', 'form', 'upload', 'table'], function(){
    var $    = layui.$
    ,element = layui.element
    ,layer   = layui.layer
    ,form    = layui.form
    ,upload  = layui.upload
    ,table   = layui.table;

	form.render();
	// layer设置
    layer.config({
        skin: 'layui-layer-molv',
        closeBtn: 1,
        shade: 0.3,
        shadeClose: true,
        maxmin: true,
        resize: true
    });

	form.on('select(isUser)', function(data){
		if (data.value == 2) {
			$(".select_types").css('display','inline-block');
			form.render('select');
		} else {
			$(".select_types").css('display','none');
			form.render('select');
		}
	});

    // 团队锁定
    form.on('switch(lockTeam)', function(obj){
        var val = obj.elem.checked ? 2 : 1;
        $.ajax({
            url: "/jdwlkj/report/lockTeam",
            data: {
                id: this.value,
                value: val
            },
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr);
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
    });
});