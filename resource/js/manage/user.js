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

    //指定允许上传的文件类型
    upload.render({
        elem: '#artificialAction'
        ,url: '/jdwlkj/user/getExcelData' //改成您自己的上传接口
        ,accept: 'file' //普通文件
        ,exts: 'xls|xlsx|csv'
        ,done: function(res){
            layer.msg(res.exp);
        }
    });

    // 头部左侧工具栏事件
    table.on('toolbar(userList)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
                    type: 2,
                    area: ['500px','400px'],
                    title: '添加账户',
                    content: '/jdwlkj/user/add'
                });
                break;
            case 'creditAssess':
                layer.confirm('确定评估上周信用？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/user/creditAssess",
                        data: {

                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 15000,
                        beforeSend: function(){
                            layer.load(1);
                        },
                        success: function(msg){
                            var alertStr = (msg == 1) ? '操作完成' : msg;
                            layer.msg(alertStr, {time: 2000}, function(){
                                if(msg==1){
                                    layer.closeAll();
                                    layui.table.reload('userList');
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
        };
    });

    // 监听工具条
    table.on('tool(userList)', function(obj){
        switch (obj.event) {
            case 'capital':
                layer.open({
                    type: 2,
                    area: ['45%', '55%'],
                    title: '用户资金 - ID：'+obj.data.id+' 账号：'+obj.data.username,
                    content: '/jdwlkj/user/capital?id='+obj.data.id
                });
                break;

            case 'edit':
                layer.open({
                    type: 2,
                    area: ['90%', '90%'],
                    title: '用户编辑 - ID：'+obj.data.id+' 账号：'+obj.data.username,
                    content: '/jdwlkj/user/edit?id='+obj.data.id
                });
                break;

            case 'del':
                layer.confirm('确定删除'+obj.data.username+'？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/user/del",
                        data: {
                            table: 'Users',
                            id: id,
                            name: obj.data.username,
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
                                    layui.table.reload('userList');
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

	// 添加用户
    form.on('submit(useradd)', function(data){
        $.ajax({
            url: "/jdwlkj/user/add",
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
                        parent.layui.table.reload('userList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 用户编辑
    form.on('submit(useredit)', function(data){
        $.ajax({
            url: "/jdwlkj/user/edit",
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
                        parent.layui.table.reload('userList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 用户资金
    form.on('submit(usercapital)', function(data){
        $.ajax({
            url: "/jdwlkj/user/capital",
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
                        parent.layui.table.reload('userList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 码商开关
    form.on('switch(is_admin)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/user/isAdmin",
            data: {
                uid: this.value,
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

    // 风险账号开关
    form.on('switch(userAction)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        var uri = obj.elem.dataset.suburi;
        $.ajax({
            url: "/jdwlkj/user/"+uri,
            data: {
                uid: this.value,
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

	// 代理迁移操作
    form.on('submit(teammovebtn)', function(data){
        $.ajax({
            url: "/jdwlkj/user/team_move",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000},function(){
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
        return false;
    });

    // 头部左侧工具栏事件
    table.on('toolbar(user-level)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
                    type: 2,
                    area: ['40%','450px'],
                    title: '添加等级',
                    content: '/jdwlkj/user/userLevelAdd'
                });
                break;
        };
    });

    // 监听工具条
    table.on('tool(user-level)', function(obj){
        switch (obj.event) {
            case 'edit':
                layer.open({
                    type: 2,
                    area: ['40%', '450px'],
                    title: '编辑等级',
                    content: '/jdwlkj/user/userLevelEdit?id='+obj.data.id
                });
                break;

            case 'del':
                layer.confirm('确定删除该等级？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/user/userLevelDel",
                        data: {
                            table: 'UserGrade',
                            id: obj.data.id,
                            name: '等级'+obj.data.grade,
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
                                    layui.table.reload('user-level');
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

    // 添加用户等级
    form.on('submit(user-level-add)', function(data){
        $.ajax({
            url: "/jdwlkj/user/userLevelAdd",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend:function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
                        parent.layui.table.reload('user-level');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 编辑用户等级
    form.on('submit(user-level-edit)', function(data){
        $.ajax({
            url: "/jdwlkj/user/userLevelEdit",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000},function(){
                    if(msg==1){
                        parent.layer.closeAll();
                        parent.layui.table.reload('user-level');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 监听工具条
    table.on('tool(user-bank)', function(obj){
        switch (obj.event) {
            case 'del':
                layer.confirm('确定删除账户'+obj.data.username+'的银行账号'+obj.data.card_no+'？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/user/del",
                        data: {
                            table: 'UserBank',
                            id: obj.data.id,
                            name: '账户'+obj.data.username+'的银行账号'+obj.data.card_no,
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
                                    layui.table.reload('user-bank');
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

    // 单人存提
    form.on('submit(artificial-action)', function(data){
        $.ajax({
            url: "/jdwlkj/user/artificialAction",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000},function(){
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
        return false;
    });
    // 批量存提
    form.on('submit(artificial-batch)', function(data){
        $.ajax({
            url: "/jdwlkj/user/artificialBatch",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000},function(){
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
        return false;
    });
});