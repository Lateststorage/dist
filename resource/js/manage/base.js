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

    $(".layui-upload-list img").on("mouseover", function(){
    	var src = $(this).attr("src");
    	console.log(src);
    	layer.tips('<img src="'+src+'" style="width: 300px;">', this, {tips: 2, time: 0, area: '330px', shade: 0});
    });
    $(".layui-upload-list img").on("mouseout", function(){
    	layer.closeAll('tips');
    });

    // 合同公章
	var seal_img_upload = upload.render({
		elem: '#seal_img'
		,url: '/jdwlkj/base/upload'
		,data: {
			fileName: "seal_img",
            targetFolder: "resource"
		}
		,accept: 'images'
		,acceptMime: 'image/*'
		,exts: 'jpg|png|gif|bmp|jpeg'
		,before: function(obj){
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result){
				$('#seal_img_image').attr('src', result); //图片链接（base64）
			});
		}
		,done: function(res){
			//如果上传失败
			if(res.code == 0){
				return layer.msg(res.success);
			}
			//上传成功
			$("input[name='seal_img']").val(res.success);
			return layer.msg('上传成功');
		}
		,error: function(){
			//演示失败状态，并实现重传
			var demoText = $('#seal_img_text');
			demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
			demoText.find('.demo-reload').on('click', function(){
				seal_img_upload.upload();
			});
		}
	});

	// 微信公众号
	var wechat_official_upload = upload.render({
		elem: '#wechat_official'
		,url: '/jdwlkj/base/upload'
		,data: {
			fileName: "wechat_official",
            targetFolder: "resource"
		}
		,accept: 'images'
		,acceptMime: 'image/*'
		,exts: 'jpg|png|gif|bmp|jpeg'
		,before: function(obj){
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result){
				$('#wechat_official_image').attr('src', result); //图片链接（base64）
			});
		}
		,done: function(res){
			//如果上传失败
			if(res.code == 0){
				return layer.msg(res.success);
			}
			//上传成功
			$("input[name='WeChat_official']").val(res.success);
			return layer.msg('上传成功');
		}
		,error: function(){
			//演示失败状态，并实现重传
			var demoText = $('#wechat_official_text');
			demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
			demoText.find('.demo-reload').on('click', function(){
				wechat_official_upload.upload();
			});
		}
	});

    // 手机客户端
    var seal_img_upload = upload.render({
        elem: '#mobile_client'
        ,url: '/jdwlkj/base/upload'
        ,data: {
            fileName: "mobile_client",
            targetFolder: "resource"
        }
        ,accept: 'images'
        ,acceptMime: 'image/*'
        ,exts: 'jpg|png|gif|bmp|jpeg'
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#mobile_client_image').attr('src', result); //图片链接（base64）
            });
        }
        ,done: function(res){
            //如果上传失败
            if(res.code == 0){
                return layer.msg(res.success);
            }
            //上传成功
            $("input[name='Mobile_client']").val(res.success);
            return layer.msg('上传成功');
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = $('#mobile_client_text');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                seal_img_upload.upload();
            });
        }
    });

	// 手机客户端
	// upload.render({
	// 	elem: '#mobile_client'
	// 	,url: '/jdwlkj/base/upload'
	// 	,data: {
	// 		"fileName": "mobile_client"
	// 	}
	// 	,accept: 'file'
	// 	,acceptMime: 'file/*'
	// 	,auto: false
	// 	,bindAction: '#mobile_client_submit'
	// 	,done: function(res){
	// 		//如果上传失败
	// 		if(res.code == 0){
	// 			return layer.msg(res.success);
	// 		}
	// 		//上传成功
	// 		$("input[name='Mobile_client']").val(res.success);
	// 		return layer.msg('上传成功');
	// 	}
	// });

    // 公告缩略图
    var cover_img_upload = upload.render({
        elem: '.cover_img'
        ,url: '/jdwlkj/base/upload'
        ,data: {
            fileName: "cover_img",
            targetFolder: "resource"
        }
        ,size: 5120 //限制文件大小，单位 KB
        ,accept: 'images'
        ,acceptMime: 'image/*'
        ,exts: 'jpg|png|gif|bmp|jpeg'
        ,done: function(res, index, upload){
            //如果上传失败
            if(res.code == 0){
                return layer.msg(res.success);
            }
            //上传成功
            this.item.children('div').removeClass('layui-hide').find('img').attr('src', res.success);
            this.item.parent(".layui-form-item").find("input[type='hidden']").val(res.success);
            return layer.msg('上传成功');
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = this.item.children('div').find('p');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                cover_img_upload.upload();
            });
        }
    });

    // 幻灯片上传
    var slideUpdate = upload.render({
        elem: '#slide-update'
        ,url: '/jdwlkj/base/upload' //改成您自己的上传接口
        ,data: {
            targetFolder: "resource"
        }
        ,accept: 'images'
        ,acceptMime: 'image/*'
        ,size: 10240
        ,multiple: true
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#slide-preview').append('<img src="'+result+'" alt="'+file.name+'" class="layui-upload-img" style="height: 100px;">')
            });
        }
        ,done: function(res){
            //如果上传失败
            if(res.code == 0){
                return layer.msg(res.success);
            }
            //上传完毕
            this.elem.parents(".layui-form-item").append('<input type="hidden" name="img_path[]" value="'+res.success+'">');
        }
    });

    // 基本设置
    form.on('submit(settingedit)', function(data){
        $.ajax({
            url: "/jdwlkj/base/setting_edit",
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
    // 添加公告
    form.on('submit(notice_add)', function(data){
        $.ajax({
            url: "/jdwlkj/base/notice_add",
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
                        parent.layui.table.reload('notice');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });
    // 添加公告分类
    form.on('submit(groupadd)', function(data){
        $.ajax({
            url: "/jdwlkj/base/groupAdd",
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
                        parent.layui.table.reload('groupList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });
    // 编辑公告分类
    form.on('submit(groupedit)', function(data){
        $.ajax({
            url: "/jdwlkj/base/groupEdit",
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
                        parent.layui.table.reload('groupList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });
    // 添加IP
    form.on('submit(ip_white_add)', function(data){
        $.ajax({
            url: "/jdwlkj/base/ip_white_add",
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
                        parent.layui.table.reload('ip_white');
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
    table.on('toolbar(ip_white)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
					type: 2,
					area: ['30%', '25%'],
					title: 'IP白名单添加',
					content: '/jdwlkj/base/ip_white_add'
				});
                break;
        };
    });

    // 监听工具条
    table.on('tool(ip_white)', function(obj){
        switch (obj.event) {
            case 'del':
                layer.confirm('确定删除该IP？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/base/ip_white_delete",
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
                                    layui.table.reload('ip_white');
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

	// 头部左侧工具栏事件
    table.on('toolbar(notice)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
					type: 2,
					area: ['80%', '80%'],
					title: '添加公告',
					content: '/jdwlkj/base/notice_add'
				});
                break;

            case 'noticeGroup':
                layer.open({
					type: 2,
					area: ['70%','80%'],
					title: '公告分类',
					content: '/jdwlkj/base/groupList'
				});
                break;
        };
    });

    // 监听工具条
    table.on('tool(notice)', function(obj){
        switch (obj.event) {
            case 'edit':
                layer.open({
					type: 2,
					area: ['80%', '80%'],
					title: '编辑公告',
					content: '/jdwlkj/base/notice_edit?id='+obj.data.id
				});
                break;

            case 'del':
                layer.confirm('确定删除该公告？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/base/notice_delete",
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
                                    layui.table.reload('notice');
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

    // 头部左侧工具栏事件
    table.on('toolbar(groupList)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
					type: 2,
					area: ['35%', '35%'],
					title: '添加分类',
					content: '/jdwlkj/base/groupAdd'
				});
                break;
        };
    });

    // 监听工具条
    table.on('tool(groupList)', function(obj){
        switch (obj.event) {
            case 'edit':
                layer.open({
					type: 2,
					area: ['35%', '35%'],
					title: '编辑分类',
					content: '/jdwlkj/base/groupEdit?id='+obj.data.id
				});
                break;

            case 'del':
                layer.confirm('确定删除该公告分类？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/base/groupDel",
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
                                    layui.table.reload('groupList');
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

    // 头部左侧工具栏事件
    table.on('toolbar(slideList)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
                    type: 2,
                    area: ['50%', '50%'],
                    title: '添加幻灯片',
                    content: '/jdwlkj/base/slideAdd'
                });
                break;
        };
    });

    // 监听工具条
    table.on('tool(slideList)', function(obj){
        switch (obj.event) {
            case 'del':
                layer.confirm('确定删除该图片？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/base/slideDel",
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
                                    layui.table.reload('slideList');
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

    // 幻灯片添加
    form.on('submit(slideList)', function(data){
        $.ajax({
            url: "/jdwlkj/base/"+data.elem.dataset.suburi,
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
                        parent.layui.table.reload('slideList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 幻灯片开关
    form.on('switch(banner-status)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/base/slideStatus",
            data: {
                id: this.value,
                field: 'status',
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