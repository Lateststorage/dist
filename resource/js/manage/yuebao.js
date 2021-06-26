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

	// 活动封面图
	var cover_img_upload = upload.render({
		elem: '#cover_img'
		,url: '/jdwlkj/activity/coverUpload'
		,data: {
			fileName: "cover_img"
		}
		,accept: 'images'
		,acceptMime: 'image/*'
		,exts: 'jpg|png|gif|bmp|jpeg'
		,before: function(obj){
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result){
				$('#cover_img_image').attr('src', result); //图片链接（base64）
			});
		}
		,done: function(res){
			//如果上传失败
			if(res.code == 0){
				return layer.msg(res.success);
			}
			//上传成功
			$("input[name='cover_img']").val(res.success);
			return layer.msg('上传成功');
		}
		,error: function(){
			//演示失败状态，并实现重传
			var demoText = $('#cover_img_text');
			demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
			demoText.find('.demo-reload').on('click', function(){
				cover_img_upload.upload();
			});
		}
	});

	// 添加活动
	form.on('submit(yuebaolist_add)', function(data){
		$.ajax({
			url: "/jdwlkj/yuebao/add",
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
					if (msg==1) {
						parent.layer.closeAll();
						parent.layui.table.reload('yuebaoList');
					}
				});
			},
			complete: function(){
				layer.closeAll("loading");
			}
		});
		return false;
	});

	// 活动开关
    form.on('switch(yuebaoState)', function(obj){
        var val = obj.elem.checked ? 1 : 2;
        $.ajax({
            url: "/jdwlkj/yuebao/yuebaoOnoff",
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

	// 头部左侧工具栏事件
	table.on('toolbar(yuebaoList)', function(obj){
		switch(obj.event){
			case 'add':
				layer.open({
					type: 2,
					area: ['80%', '80%'],
					title: '添加余额宝',
					content: '/jdwlkj/yuebao/add'
				});
				break;
		};
	});

    // 监听工具条
	table.on('tool(yuebaoList)', function(obj){
		switch (obj.event) {
			case 'edit':
				layer.open({
					type: 2,
					area: ['80%', '80%'],
					title: '编辑活动',
					content: '/jdwlkj/yuebao/edit?id='+obj.data.id
				});
				break;

			case 'del':
				layer.confirm('确认删除该活动？', {
					btn: ['确定','取消'] //按钮
				}, function(){
					$.ajax({
						url: "/jdwlkj/yuebao/delete",
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
									layui.table.reload('yuebaoList');
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