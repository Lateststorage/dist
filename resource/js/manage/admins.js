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

	// 添加管理员
    form.on('submit(admins_add_do)', function(data){
        $.ajax({
            url: "/jdwlkj/base/admins_add",
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
                        parent.layer.closeAll();
                        parent.layui.table.reload('admins');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 编辑管理员
    form.on('submit(admins_edit_do)', function(data){
        $.ajax({
            url: "/jdwlkj/base/admins_edit",
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
                        parent.layer.closeAll();
                        parent.layui.table.reload('admins');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 管理员权限开关
    form.on('switch(manage-role-status)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/base/admins_set_role",
            data: {
                id: this.value,
                state: val
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
                        window.location.reload();
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 头部左侧工具栏事件
    table.on('toolbar(admins)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
					type: 2,
					area: ['550px','300px'],
					title: '添加管理员',
					content: '/jdwlkj/base/admins_add'
				});
                break;
        };
    });

    // 监听工具条
    table.on('tool(admins)', function(obj){
        switch (obj.event) {
            case 'edit':
                layer.open({
					type: 2,
					area: ['550px','300px'],
					title: '修改管理员',
					content: '/jdwlkj/base/admins_edit?id='+obj.data.id
				});
                break;

            case 'del':
                layer.confirm('确定删除该管理员？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/base/admins_delete",
                        data: {
                            id: obj.data.id
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
                                    layui.table.reload('admins');
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
                break;
        }
    });
});