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

    //添加权限弹出窗
	$(document).on("click",".role_add",function(){
		layer.open({
			type: 2,
			area: ['550px','300px'],
			title: '添加权限',
			content: '/jdwlkj/base/role_add'
		});
	})

	// 添加权限
    form.on('submit(role_add_do)', function(data){
        $.ajax({
            url: "/jdwlkj/base/role_add",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.window.location.reload();
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });
    // 编辑权限
    form.on('submit(role_edit_do)', function(data){
        $.ajax({
            url: "/jdwlkj/base/role_edit",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time:1000}, function(){
                    if(msg==1){
                        parent.window.location.reload();
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	window.add_child = function(id){
		layer.open({
			type: 2,
			area: ['550px','300px'],
			title: '添加权限',
			content: '/jdwlkj/base/role_add?id='+id
		});
	}

	//修改权限
	window.edit_child = function(id){
		layer.open({
			type: 2,
			area: ['550px','300px'],
			title: '修改权限',
			content: '/jdwlkj/base/role_edit?id='+id
		});
	}
	window.delete_child = function(id){
		layer.confirm('是否删除？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$.ajax({
				url: "/jdwlkj/base/role_delete",
				data: {
					"id":id,
				},
				type: "POST",
				dataType: "json",
				timeout: 15000,
				beforeSend: function(){
					layer.load(1);
				},
				success: function(msg){
					var alertStr = (msg == 1) ? '操作成功' : msg;
					layer.msg(alertStr, {time: 2000}, function(){
						if(msg==1){
							layer.closeAll();
							window.location.reload();
						}
					});
				},
				complete: function(){
					layer.closeAll("loading");
				}
			});
		}, function(){
			layer.msg('取消操作', {
				time: 2000, //2s后自动关闭
			});
		});
	}
});