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

	//添加分类
	$(document).on("click",".classify_add",function(){
		layer.open({
			type: 2,
			area: ['450px','300px'],
			title: '添加分类',
			content: '/jdwlkj/game/classify_add'
		});
	})
		//游戏分类添加
	$(document).on("click",".classify_add_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/classify_add",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	//编辑游戏分类
	$(document).on("click",".classify_edit_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/classify_edit",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	//彩种添加
	$(document).on("click",".lottery_add_do",function(){
		var data = [];
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			var obj = {};
			obj.name = names;
			obj.value = value;
			data.push(obj);
		});

		$("select").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			var obj = {};
			obj.name = names;
			obj.value = value;
			data.push(obj);
		});
		var obj = {};
		obj.name = "explain";
		obj.value = $("textarea[name='explain']").val();
		data.push(obj);

		var obj = {};
		obj.name = "introduction";
		obj.value = UE.getEditor('editor').getContent();
		data.push(obj);

		$.ajax({
			url:"/jdwlkj/game/lottery_add",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	//彩种编辑
	$(document).on("click",".lottery_edit_do",function(){
		var data = [];
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			var obj = {};
			obj.name = names;
			obj.value = value;
			data.push(obj);
		});

		$("select").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			var obj = {};
			obj.name = names;
			obj.value = value;
			data.push(obj);
		});
		var obj = {};
		obj.name = "explain";
		obj.value = $("textarea[name='explain']").val();
		data.push(obj);

		var obj = {};
		obj.name = "introduction";
		obj.value = UE.getEditor('editor').getContent();
		data.push(obj);

		$.ajax({
			url:"/jdwlkj/game/lottery_edit",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	//游戏玩法添加
	$(document).on("click",".play_add_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		$("select").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		if(error>2){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/play_add",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	//游戏玩法修改
	$(document).on("click",".play_edit_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		$("select").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		if(error>2){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/play_edit",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	//生成系统时间
	$(document).on("click",".generate_set_time_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error>5){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/generate_set_time",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})


	//添加系统时间
	$(document).on("click",".set_time_add_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error>1){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/set_time_add",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	//编辑系统时间
	$(document).on("click",".set_time_edit_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error>1){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/set_time_edit",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	//编辑彩种时间
	$(document).on("click",".no_edit_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error>1){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/no_edit",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	//手动开奖
	$(document).on("click",".no_manual_open_code_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error>0){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/no_manual_open_code",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	//修复开奖
	$(document).on("click",".no_beforehand_open_code_do",function(){
		var data = [];
		var error = 0;
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}else{
				error+=1;
			}
		});
		if(error>0){
			layer.msg('请确认各项填写无误后再提交', {time:500},function(){
				if(msg==1){
					layer.closeAll();
					window.location.reload();
					$(".layui-layer-close").click(function(){
						layer.closeAll();
						window.location.reload();
					});
				}
			});
			return;
		}
		$.ajax({
			url:"/jdwlkj/game/no_beforehand_open_code",
			data:data,
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
						parent.window.location.reload();

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							parent.window.location.reload();
						});
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	//热门排序
	$(document).on("click",".hotsort_do",function(){
		var data = [];
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$.ajax({
			url:"/jdwlkj/game/hotSort",
			data:data,
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
	})

	//手动生成每日时间
	$(document).on("click",".createtime",function(){
		var data = [];
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$.ajax({
			url:"/jdwlkj/game/createTime",
			data:data,
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
						parent.window.location.reload();
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	/**
	 * 批量开奖提交
	 */
	$(document).on("click",".openManySub",function(){
		var data = [];
		$(".layerdivfive input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		var obj = {};
		obj.name = 'lottery';
		obj.value = $("input[name='lottery']").val();
		data.push(obj);
		$.ajax({
			url:"/jdwlkj/game/openMany",
			data:data,
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
						parent.window.location.reload();
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	/**
	 * PK10随机号码
	 */
	$(document).on("click",".rand_opencode",function(){
		$.ajax({
			url:"/jdwlkj/game/rankOpenCode",
			data:[],
			type:"POST",
			dataType:"json",
			timeout:15000,
			beforeSend:function(){
				layer.load(1);
			},
			success:function(msg){
				$("input[name='opencode']").val(msg);
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
};

/**
 * 批量开奖
 */
function openMany(lottery){
	layer.open({
		type: 2,
		area: ['900px','460px'],
		title: '批量开奖',
		content: '/jdwlkj/game/openMany?lottery='+lottery
	});
}

//编辑分类
function classify_edit(id){
	layer.open({
		type: 2,
		area: ['450px','300px'],
		title: '编辑分类',
		content: '/jdwlkj/game/classify_edit?id='+id
	});
}

/**
 * 热门排序
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function hot_sort(){
	layer.open({
		type: 2,
		area: ['450px','600px'],
		title: '热门排序',
		content: '/jdwlkj/game/hotSort'
	});
}


function play_add(id, clas){
	layer.open({
		type: 2,
		area: ['450px','500px'],
		title: '添加玩法',
		content: '/jdwlkj/game/play_add?id='+id+'&class='+clas
	});
}
//添加彩种
function lottery_add(types){
	layer.open({
		type: 2,
		area: ['1000px','550px'],
		title: '添加彩种',
		content: '/jdwlkj/game/lottery_add?types='+types
	});
}
//编辑彩种
function lottery_edit(id){
	layer.open({
		type: 2,
		area: ['1000px','550px'],
		title: '编辑彩种',
		content: '/jdwlkj/game/lottery_edit?id='+id
	});
}

//编辑玩法
function edit_child(id,modelName){
	layer.open({
		type: 2,
		area: ['450px','600px'],
		title: '编辑玩法',
		content: '/jdwlkj/game/play_edit?id='+id+'&modelName='+modelName
	});
}
//玩法开关
function play_on_off(id,state,table){

	if(state==2){
		var idstr = '关闭';
	}else{
		var idstr = '开启';
	}

	layer.confirm('是否'+idstr+'？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/play_on_off",
			data:{
				"id":id,
				"state":state,
				"table":table,
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

//玩法默认
function play_defaults(id,state,table){

	if(state==2){
		var idstr = '关闭';
	}else{
		var idstr = '开启';
	}

	layer.confirm('是否'+idstr+'默认？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/play_defaults",
			data:{
				"id":id,
				"state":state,
				"table":table,
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
//删除玩法
function delete_child(id, modelName){
	layer.confirm('是否删除玩法？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/play_delete",
			data:{
				"id":id,
				"modelName":modelName,
			},
			type:"POST",
			dataType:"json",
			timeout:15000,
			beforeSend:function(){
				layer.load(1);
			},
			success:function(msg){
				if(msg==1){
					var alertstr = '删除成功';
				}else{
					var alertstr = '删除失败';
				}
				layer.msg(alertstr, {time:500},function(){
					if(msg==1){
						// layer.closeAll();
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

//删除彩种
function lottery_delete(id){
	layer.confirm('是否删除彩种？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/lottery_delete",
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

//删除彩种
function classify_delete(id){
	layer.confirm('是否删除分类？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/classify_delete",
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

/**
 * 修改单字段值
 * @param  {[type]} id        [description]
 * @param  {[type]} field     [description]
 * @param  {[type]} value     [description]
 * @param  {[type]} func      [description]
 * @param  {String} modelName [description]
 * @return {[type]}           [description]
 */
function setfieldvalue(id, field, value, func, modelName=''){
	if (value==1) {
		var name = '开启';
	} else {
		var name = '关闭';
	}

	layer.confirm("确认"+name+"？", {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/"+func,
			data:{
				"id":id,
				"field":field,
				"value":value,
				"modelName":modelName,
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

//生成彩种系统时间
function generate_set_time(id){
	layer.open({
		type: 2,
		area: ['500px','430px'],
		title: '生成系统时间',
		content: '/jdwlkj/game/generate_set_time?id='+id
	});
}
function set_time_add(lottery){
	layer.open({
		type: 2,
		area: ['500px','400px'],
		title: '添加系统时间',
		content: '/jdwlkj/game/set_time_add?lottery='+lottery
	});
}
function set_time_edit(id){
	layer.open({
		type: 2,
		area: ['500px','400px'],
		title: '修改系统时间',
		content: '/jdwlkj/game/set_time_edit?id='+id
	});
}
//删除系统时间
function set_time_delete(id){
	layer.confirm('是否删除系统期号？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/set_time_delete",
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

//系统期号购买开关
function set_no_buy(id,state){

	if(state==2){
		var idstr = '关闭';
	}else{
		var idstr = '开启';
	}

	layer.confirm('是否'+idstr+'？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/set_no_buy",
			data:{
				"id":id,
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

//彩票期号购买开关
function no_buy(lottery,id,state){

	if(state==2){
		var idstr = '关闭';
	}else{
		var idstr = '开启';
	}

	layer.confirm('是否'+idstr+'？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/no_buy",
			data:{
				"lottery":lottery,
				"id":id,
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

//编辑彩种期号
function no_edit(lottery,id){
	layer.open({
		type: 2,
		area: ['500px','450px'],
		title: '编辑彩种期号',
		content: '/jdwlkj/game/no_edit?id='+id+'&lottery='+lottery
	});
}

//期号采集开关
function no_collect(lottery,id,state){

	if(state==1){
		var idstr = '关闭';
	}else{
		var idstr = '开启';
	}

	layer.confirm('是否'+idstr+'自动开奖？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/no_manual_open_code",
			data:{
				"lottery":lottery,
				"id":id,
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

//手动开奖
function no_manual_open_code(lottery,no){
	layer.open({
		type: 2,
		area: ['500px','300px'],
		title: '手动开奖',
		content: '/jdwlkj/game/no_manual_open_code?no='+no+'&lottery='+lottery
	});
}
//修复
function no_repair_open_code(lottery,no){
	layer.confirm('是否修复开奖？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/game/no_repair_open_code",
			data:{
				"lottery":lottery,
				"no":no,
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
//预先开奖
function no_beforehand_open_code(lottery,no){
	layer.open({
		type: 2,
		area: ['500px','300px'],
		title: '预先开奖',
		content: '/jdwlkj/game/no_beforehand_open_code?no='+no+'&lottery='+lottery
	});
}

/**
 * 快三快捷选项
 */
function getKjOpenCode(lottery, size, eao, no){
	$.ajax({
		url:"/jdwlkj/game/getKjOpenCode",
		data:{
			"lottery":lottery,
			"size":size,
			"eao":eao
		},
		type:"POST",
		dataType:"json",
		timeout:15000,
		beforeSend:function(){
			layer.load(1);
		},
		success:function(msg){
			$("input[name='manual_code_"+no+"']").val(msg);
		},
		complete: function () {
			layer.closeAll("loading");
		}
	});
}
/**
 * 快捷选项提交
 */
function quickSub(lottery, no){
	var opencode = $("input[name='manual_code_"+no+"']").val();
	$.ajax({
		url:"/jdwlkj/game/no_beforehand_open_code",
		data:{
			"lottery":lottery,
			"no":no,
			"opencode":opencode
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
			layer.msg(alertstr, {time:500});
		},
		complete: function () {
			layer.closeAll("loading");
		}
	});
}

/**
 * 生成彩种当天时间
 */
function createTodayTime(lottery){
	$.ajax({
		url:"/create/create/index",
		data:{
			"lottery":lottery,
		},
		type:"GET",
		dataType:"text",
		timeout:15000,
		beforeSend:function(){
			layer.load(1);
		},
		success:function(msg){
			layer.msg(msg);
		},
		complete: function () {
			layer.closeAll("loading");
		}
	});
}

/**
 * 生成彩种基本时间
 */
function createBaseTime(lottery){
	$.ajax({
		url:"/create/create/baseTime",
		data:{
			"lottery":lottery,
		},
		type:"GET",
		dataType:"text",
		timeout:15000,
		beforeSend:function(){
			layer.load(1);
		},
		success:function(msg){
			if(msg == 1){
				var alertstr = '操作成功';
			}else{
				var alertstr = msg;
			}
			layer.msg(alertstr);
		},
		complete: function () {
			layer.closeAll("loading");
		}
	});
}

/**
 * 六合彩每日时间生成
 */
function createtime(lottery){
	layer.open({
		type: 2,
		area: ['550px','400px'],
		title: '期号信息生成',
		content: '/jdwlkj/game/createTime?lottery='+lottery
	});
}