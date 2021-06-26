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
			content: '/jdwlkj/base/merchantRoleAdd'
		});
	})

	// 添加权限
    form.on('submit(role_add_do)', function(data){
        $.ajax({
            url:"/jdwlkj/base/merchantRoleAdd",
            data:data.field,
            type:"POST",
            dataType:"json",
            timeout:15000,
            beforeSend:function(){
                layer.load(1);
            },
            success:function(msg){
                if(msg==1){
                    var alertstr = '操作成功';
                }else{
                    var alertstr = msg;
                }
                layer.msg(alertstr, {time:1000},function(){
                    if(msg==1){
                        // layer.closeAll();
                        parent.window.location.reload();
                    }
                });
            },
            complete: function () {
                layer.closeAll("loading");
            }
        });
        return false;
    });
    // 编辑权限
    form.on('submit(role_edit_do)', function(data){
        $.ajax({
            url:"/jdwlkj/base/merchantRoleEdit",
            data:data.field,
            type:"POST",
            dataType:"json",
            timeout:15000,
            beforeSend:function(){
                layer.load(1);
            },
            success:function(msg){
                if(msg==1){
                    var alertstr = '操作成功';
                }else{
                    var alertstr = msg;
                }
                layer.msg(alertstr, {time:1000},function(){
                    if(msg==1){
                        // layer.closeAll();
                        parent.window.location.reload();
                    }
                });
            },
            complete: function () {
                layer.closeAll("loading");
            }
        });
        return false;
    });

    window.in_array = function(search,array){
	    for(var i in array){
	        if(array[i]==search){
	            return true;
	        }
	    }
	    return false;
	}
	window.add_child = function(id){
		layer.open({
			type: 2,
			area: ['550px','300px'],
			title: '添加权限',
			content: '/jdwlkj/base/merchantRoleAdd?id='+id
		});
	}

	//修改权限
	window.edit_child = function(id){
		layer.open({
			type: 2,
			area: ['550px','300px'],
			title: '修改权限',
			content: '/jdwlkj/base/merchantRoleEdit?id='+id
		});
	}
	window.delete_child = function(id){
		layer.confirm('是否删除？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$.ajax({
				url:"/jdwlkj/base/merchantRoleDel",
				data:{
					"id":id,
				},
				type:"POST",
				dataType:"json",
				timeout:15000,
				beforeSend:function(){
					layer.load(1);
				},
				success:function(msg){
					if(msg==1){
						var alertstr = '操作成功';
					}else{
						var alertstr = msg;
					}
					layer.msg(alertstr, {time:500},function(){
						if(msg==1){
							layer.closeAll();
							window.location.reload();
						}
					});
				},
				complete: function () {
					layer.closeAll("loading");
				}
			});
		}, function(){
			layer.msg('取消操作', {
				time: 500, //2s后自动关闭
			});
		});
	}

	//开关选项
	window.off_on = function(id,types,state){

		if(state == 2){
			var idstr = '关闭';
		}else{
			var idstr = '开启';
		}
		if (arguments[3]) {
			var idstr = arguments[3];
		}

		layer.confirm('是否'+idstr+'？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			$.ajax({
				url:"/jdwlkj/base/setMerchantRole",
				data:{
					"id":id,
					"types":types,
					"state":state,
				},
				type:"POST",
				dataType:"json",
				timeout:15000,
				beforeSend:function(){
					layer.load(1);
				},
				success:function(msg){
					if(msg==1){
						var alertstr = idstr+'成功';
					}else{
						var alertstr = idstr+'失败';
					}
					layer.msg(alertstr, {time:500},function(){
						if(msg==1){
							layer.closeAll();
							window.location.reload();
						}
					});
				},
				complete: function () {
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