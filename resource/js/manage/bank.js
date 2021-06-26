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
    //同时绑定多个
    lay(".bank-cq-time").each(function(){
        layui.laydate.render({
            elem: this
            ,type: 'time'
            ,theme: 'molv'
        });
    });

    // 收款二维码
    var cover_img_upload = upload.render({
        elem: '#qrcode'
        ,url: '/jdwlkj/bank/qrcodeUpload'
        ,data: {
            "fileName": "qrcode"
        }
        ,accept: 'images'
        ,acceptMime: 'image/*'
        ,exts: 'jpg|png|gif|bmp|jpeg'
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#qrcode_image').attr('src', result); //图片链接（base64）
            });
        }
        ,done: function(res){
            //如果上传失败
            if(res.code == 0){
                return layer.msg(res.success);
            }
            //上传成功
            $("input[name='qrcode']").val(res.success);
            return layer.msg('上传成功');
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = $('#qrcode_image_text');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                cover_img_upload.upload();
            });
        }
    });

    // 收款账户开关
    form.on('switch(receivablesState)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/bank/receivables_on_off",
            data: {
                id: this.value,
                field: "state",
                val: val
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
        return false;
    });

	/**
	 * 充值渠道添加
	 */
	$(document).on("click",".rechargeadd_btn",function(){
		layer.open({
			type: 2,
			area: ['600px', '600px'],
			title: '添加充值渠道',
			content: '/jdwlkj/bank/recharge_channel_add'
		});
	})

    /**
     * 充值渠道添加
     */
	form.on('submit(rechargeadd)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/recharge_channel_add",
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

    /**
     * 充值渠道编辑
     */
    form.on('submit(rechargeedit)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/recharge_channel_edit",
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

    // 充值渠道开关
    form.on('switch(recharge-type-status)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/bank/recharge_channel_on_off",
            data: {
                id: this.value,
                field: 'state',
                val: val
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
        return false;
    });

	/**
	 * 充值处理
	 */
	form.on('submit(rechargedispose)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/rechargeDispose",
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
                        parent.layui.table.reload('recharge_record');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	/**
	 * 风控审核
	 */
	form.on('submit(controlaudit)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/controlAudit",
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
                        parent.layui.table.reload('present_record');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	/**
	 * 财务处理
	 */
	form.on('submit(financialaudit)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/financialAudit",
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
                        parent.layui.table.reload('present_record');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	/**
	 * 添加收款账号
	 */
	form.on('submit(receivables_add)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/receivables_add",
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
                        parent.layui.table.reload('receivables');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	/**
	 * 编辑收款账号
	 */
	form.on('submit(receivables_edit)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/receivables_edit",
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
                        parent.layui.table.reload('receivables');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	/**
	 * 收款二维码添加
	 */
	form.on('submit(receivables_qrcode_add)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/receivablesQrcodeAdd",
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
                        parent.layui.table.reload('receivables');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	/**
	 * 收款二维码编辑
	 */
	form.on('submit(receivables_qrcode_edit)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/receivablesQrcodeEdit",
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
                        parent.layui.table.reload('receivables');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    /**
     * 开放等级
     */
    form.on('checkbox(open-level)', function(data){
        var id    = $(this).data("openlevelid");
        var state = data.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/bank/openLevel",
            data: {
                id: id,
                state: state,
                value: data.value
            },
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000});
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 充值银行存取开关
    form.on('switch(rechargeBankStatus)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/bank/bank_on_off",
            data: {
                id: this.value,
                field: obj.elem.dataset.field,
                val: val
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
        return false;
    });
    /**
     * 充值渠道添加
     */
    form.on('submit(bank-action)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/"+data.elem.dataset.suburi,
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

    /**
     * 出款设置
     */
    form.on('submit(setPayment-paid)', function(data){
        $.ajax({
            url: "/jdwlkj/bank/set_out_money",
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
                        layer.closeAll();
                        location.reload();
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    /**
     * 出款设置
     */
    // 头部左侧工具栏事件
    table.on('toolbar(set_out_money)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
                    type: 2,
                    title: "添加出款商户",
                    area: ['600px', '600px'],
                    content: "/jdwlkj/bank/paymentAdd"
                });
                break;

            case 'del':
                var data = table.checkStatus('set_out_money').data;
                if (data.length == 0) {
                    layer.msg('请选择要删除的出款商户');
                    return false;
                }
                layer.confirm('确认操作？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bank/paymentDel",
                        data: {
                            data: data
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
                                    layui.table.reload('set_out_money');
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
    table.on('tool(set_out_money)', function(obj){
        switch (obj.event) {
            case 'edit':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '编辑出款商户',
                    content: '/jdwlkj/bank/paymentEdit?id='+obj.data.id
                });
                break;

            case 'del':
                layer.confirm('确定删除 '+obj.data.file_name+' ？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bank/paymentDel",
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
                                    layui.table.reload('set_out_money');
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
    // 出款商户开关
    form.on('switch(paymentSwitch)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/bank/paymentSwitch",
            data: {
                id: this.value,
                field: obj.elem.dataset.field,
                val: val
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
                        layui.table.reload('set_out_money');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });
    // 提交出款商户
    form.on('submit(payment-action)', function(data){
        var suburi = data.elem.dataset.suburi;
        $.ajax({
            url: "/jdwlkj/bank/"+suburi,
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
                        parent.layui.table.reload('set_out_money');
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
    table.on('tool(recharge_record)', function(obj){
        switch (obj.event) {
            case 'rechargeDispose':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '充值处理',
                    content: '/jdwlkj/bank/rechargeDispose?id='+obj.data.id
                });
                break;

            case 'rechargeDetail':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '充值订单详情',
                    content: '/jdwlkj/bank/rechargeDetail?id='+obj.data.id
                });
                break;
        }
    });

    // 头部左侧工具栏事件
    table.on('toolbar(receivables)', function(obj){
        switch(obj.event){
            case 'receivablesAdd':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '添加收款账号',
                    content: '/jdwlkj/bank/receivables_add'
                });
                break;

            case 'receivablesQrcodeAdd':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '添加收款二维码',
                    content: '/jdwlkj/bank/receivablesQrcodeAdd'
                });
                break;
        };
    });

    // 监听工具条
    table.on('tool(receivables)', function(obj){
        switch (obj.event) {
            case 'receivablesQrcodeEdit':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '编辑收款二维码',
                    content: '/jdwlkj/bank/receivablesQrcodeEdit?id='+obj.data.id
                });
                break;

            case 'receivablesEdit':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '编辑收款账号',
                    content: '/jdwlkj/bank/receivables_edit?id='+obj.data.id
                });
                break;

            case 'receivablesDelete':
                layer.confirm('确定删除该收款账号？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bank/receivables_delete",
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
                                    layui.table.reload('receivables');
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

    // 监听工具条
    table.on('tool(present_record)', function(obj){
        switch (obj.event) {
            case 'controlAudit':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '风控审核',
                    content: '/jdwlkj/bank/controlAudit?id='+obj.data.id
                });
                break;

            case 'playmoney':
                layer.confirm('确定为当前提现订单出款？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bank/withdrawalsPayment",
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
                            var alertStr = (msg == 1) ? '提交成功' : msg;
                            layer.msg(alertStr, {time: 2000}, function(){
                                if(msg==1){
                                    layer.closeAll();
                                    layui.table.reload('present_record');
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

            case 'financialAudit':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '风控审核',
                    content: '/jdwlkj/bank/financialAudit?id='+obj.data.id
                });
                break;

            case 'withdrawalsDetails':
                layer.open({
                    type: 2,
                    area: ['600px', '600px'],
                    title: '详情',
                    content: '/jdwlkj/bank/withdrawalsDetails?id='+obj.data.id
                });
                break;
        }
    });

    /**
     * 添加充值渠道下属银行
     */
    window.bankAdd = function(obj,rid){
        layer.open({
            type: 2,
            area: ['600px', '600px'],
            title: '添加银行',
            maxmin: true,
            content: '/jdwlkj/bank/add?rid='+rid
        });
    }


    /**
     * 编辑
     */
    window.pubedit = function(obj,id,func,title,w='50%',h='50%'){
        layer.open({
            type: 2,
            area: [w,h],
            title: title,
            content: '/jdwlkj/bank/'+func+'?id='+id
        });
    }

    /**
     * 删除操作
     */
    window.pubdel = function(obj,id,func){
        layer.confirm('确定删除？', {
            btn: ['确定','取消'] //按钮
        }, function(){
            $.ajax({
                url: "/jdwlkj/bank/"+func,
                data: {
                    "id":id
                },
                type: "POST",
                dataType: "json",
                timeout: 15000,
                beforeSend: function(){
                    layer.load(1);
                },
                success: function(msg){
                    if(msg==1){
                        var alertstr = '操作成功';
                    }else{
                        var alertstr = msg;
                    }
                    layer.msg(alertstr, {time: 2000}, function(){
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

    /**
     * 导出报表
     */
    window.exportData = function(exporttype){
        layer.open({
            type:2,
            title:"导出报表",
            area:['600px','400px'],
            content:"/jdwlkj/bet/exportData?exporttype="+exporttype
        });
    }
});