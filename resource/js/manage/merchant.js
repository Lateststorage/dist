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

	/**
	 * 添加用户弹出窗
	 */
	$(document).on("click",".useradd_btn",function(){
		layer.open({
			type: 2,
			area: ['500px','600px'],
			title: '添加账户',
			content: '/jdwlkj/merchant/add'
		});
	})
	/**
	 * 添加用户操作
	 */
	$(document).on("click",".useradd",function(){
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
		$.ajax({
			url:"/jdwlkj/merchant/add",
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
						// layer.closeAll();
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
	 * 用户编辑
	 */
	$(document).on("click",".useredit",function(){
		var data = [];
		var unfilter = new Array('bonus1','bonus2','bonus3','bonus4','bonus5','bonus6');
		$("input").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(in_array(names,unfilter) || (names && value)){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
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
		$.ajax({
			url:"/jdwlkj/merchant/edit",
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
						// layer.closeAll();
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
	 * 用户资金
	 */
	$(document).on("click",".usercapital",function(){
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
		$("textarea").each(function(){
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
			url:"/jdwlkj/merchant/merchantCapital",
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
						// layer.closeAll();
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
	 * 用户解锁
	 */
	$(document).on("click",".userunlock",function(){
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
		layer.confirm("确定为该用户解锁？", {
			btn: ['确定','取消'] //按钮
		}, function(){
			$.ajax({
				url:"/jdwlkj/merchant/locking",
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
							// layer.closeAll();
							parent.window.location.reload();
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
	})
	/**
	 * 用户工资设置
	 */
	$(document).on("click",".userwage",function(){
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
			url:"/jdwlkj/merchant/set_wages",
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
						// layer.closeAll();
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
	 * 用户分红设置
	 */
	$(document).on("click",".userbonus",function(){
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
			url:"/jdwlkj/merchant/set_bonus",
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
						// layer.closeAll();
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
	 * 风控审核
	 */
	$(document).on("click",".controlaudit",function(){
		var data = [];
		$("input[type='text']").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$("input[type='radio']:checked").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$("textarea").each(function(){
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
			url:"/jdwlkj/merchant/controlAudit",
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
						// layer.closeAll();
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
	 * 财务处理
	 */
	$(document).on("click",".financialaudit",function(){
		var data = [];
		$("input[type='text']").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$("input[type='radio']:checked").each(function(){
			var names = $(this).attr("name");
			var value = $(this).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$("textarea").each(function(){
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
			url:"/jdwlkj/merchant/financialAudit",
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
						// layer.closeAll();
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
	 * 代理迁移输入框监听
	 */
	// $("input[name='bqusername']").blur(function(){
	// 	var value = $(this).val();
	// 	if(value){
	// 		var obj = $($(this));
	// 		$.post("/jdwlkj/merchant/verifyUsername",{username:value},function(data){
	// 			if(data==1){
	// 				$(obj).attr('name','');
	// 				$(obj).parent('div').children('span').text('用户不存在');
	// 				$(obj).parent('div').children('span').css('color','#F00');
	// 				$(obj).css('border','solid 1px #F00');
	// 			}else{
	// 				$(obj).attr('name','bqusername');
	// 				$(obj).parent('div').children('span').text('√');
	// 				$(obj).parent('div').children('span').css('color','#090');
	// 				$(obj).css('border','solid 1px #CCC');
	// 			}
	// 		})
	// 	}else{
	// 		$(obj).attr('name','');
	// 		$(obj).parent('div').children('span').text('请输入用户名');
	// 		$(obj).parent('div').children('span').css('color','#F00');
	// 		$(obj).css('border','solid 1px #F00');
	// 	}
	// })
	/**
	 * 用户名输入框实时监听
	 */
	// $("input[name='qusername']").blur(function(){
	// 	var value = $(this).val();
	// 	if(value){
	// 		var obj = $($(this));
	// 		$.post("/jdwlkj/merchant/verifyUsername",{username:value},function(data){
	// 			if(data==1){
	// 				$(obj).attr('name','');
	// 				$(obj).parent('div').children('span').text('用户不存在');
	// 				$(obj).parent('div').children('span').css('color','#F00');
	// 				$(obj).css('border','solid 1px #F00');
	// 			}else{
	// 				$(obj).attr('name','qusername');
	// 				$(obj).parent('div').children('span').text('√');
	// 				$(obj).parent('div').children('span').css('color','#090');
	// 				$(obj).css('border','solid 1px #CCC');
	// 			}
	// 		})
	// 	}else{
	// 		$(obj).attr('name','');
	// 		$(obj).parent('div').children('span').text('请输入用户名');
	// 		$(obj).parent('div').children('span').css('color','#F00');
	// 		$(obj).css('border','solid 1px #F00');
	// 	}
	// })
	/**
	 * 代理迁移操作
	 */
	$(document).on("click",".teammovebtn",function(){
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
			url:"/jdwlkj/merchant/team_move",
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
						// layer.closeAll();
						window.location.reload();
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	/**
	 * 关系树展开
	 */
	$(document).on("click",".tree .relation_open",function(){
		var obj = $(this);
		var uid = $(this).attr("id");
		$.ajax({
			url:"/jdwlkj/merchant/relation",
			data:{
				"uid":uid,
			},
			type:"POST",
			dataType:"json",
			timeout:15000,
			beforeSend:function(){
				layer.load(1);
			},
			success:function(msg){
				if(typeof msg=='string'){
					layer.msg(msg, {time:500});
					return false;
				}
				$(obj).attr("class","relation_close");
				$(obj).children("span").html('&nbsp;-&nbsp;');
				var isafter = true;
				var string = '<div style="margin-left:60px;">';
				for (var i = 0; i < msg.length; i++) {
					var isexist = $("#"+msg[i].id).attr("id");
					if(!isexist){
						if(msg[i].isDown){
							string += '<div><p class="relation_open" id="'+msg[i].id+'"><span>&nbsp;+&nbsp;</span>'+msg[i].username+'</p></div>';
						}else{
							string += '<div><p class="relation_open" id="'+msg[i].id+'"><span></span>'+msg[i].username+'</p></div>';
						}
					}else{
						isafter = false;
					}
				};
				string += '</div>';
				if(isafter){
					$(obj).after(string);
				}
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
	/**
	 * 关系树关闭
	 */
	$(document).on("click",".relation_close",function(){
		$(this).parent().children("div").remove();
		$(this).attr("class","relation_open");
		$(this).children("span").html('&nbsp;+&nbsp;');
	})

	/**
	 * 开户规则添加
	 */
	$(document).on("click",".ruleadd_btn",function(){
		layer.open({
			type: 2,
			area: ['27%','45%'],
			title: '开户规则添加',
			content: '/jdwlkj/merchant/ruleAdd'
		});
	})
	/**
	 * 开户规则添加提交
	 */
	$(document).on("click",".ruleadd",function(){
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
		$.ajax({
			url:"/jdwlkj/merchant/ruleAdd",
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
						// layer.closeAll();
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
	 * 开户规则编辑提交
	 */
	$(document).on("click",".ruleedit",function(){
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
		$.ajax({
			url:"/jdwlkj/merchant/ruleEdit",
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
						// layer.closeAll();
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
	 * 人工存提提交（单人）
	 */
	$(document).on("click",".artificial_action",function(){
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
		$.ajax({
			url:"/jdwlkj/merchant/artificialAction",
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
						// layer.closeAll();
						window.location.reload();
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	/**
	 * 人工存提提交（批量）
	 */
	$(document).on("click",".batch_action",function(){
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
		$.ajax({
			url:"/jdwlkj/merchant/artificialBatch",
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
				layer.alert(alertstr, function(index){
					location.href='/jdwlkj/merchant/artificialAction';
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	/**
	 * 子账号信息编辑
	 */
	$(document).on("click",".edit_user_retain",function(){
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
		$("textarea").each(function(){
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
			url:"/jdwlkj/merchant/editUserRetain",
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
						// layer.closeAll();
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
	 * 资质认证
	 */
	$(document).on("click",".verify_mer",function(){
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
		$("textarea").each(function(){
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
			url:"/jdwlkj/merchant/verifyMer",
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
						// layer.closeAll();
						parent.window.location.reload();
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})
});



/**
 * 开关按钮
 */
function on_off(obj,uid,field,value,username,func){
	var confirmstr = '确定操作？';
	if(func=='locking'){
		var question = arguments[5] ? arguments[5] : '';
		switch (value) {
			case 1:
				confirmstr = '确定要将 '+username+' 的银行资料锁定吗？锁定后不能再修改资料，而解锁时需要验证密保。';
				break;
			case 2:
				if(question){
					layer.open({
						type: 2,
						area: ['40%','50%'],
						title: '用户解锁 ID:'+uid+' 用户:'+username,
						content: '/jdwlkj/merchant/locking?uid='+uid+'&value='+value+'&username='+username
					});
					return false;
				}
				confirmstr = '['+username+'] 没有绑定安全资料，确定要为该会员解锁吗？';
				break;
		}
	}
	layer.confirm(confirmstr, {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/merchant/"+func,
			data:{
				"field":field,
				"value":value,
				"uid":uid,
				"username":username,
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
 * 删除操作
 */
function pubdel(obj,table,id,name){
	layer.confirm("确认删除"+name+"？", {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/jdwlkj/merchant/del",
			data:{
				"table":table,
				"id":id,
				"name":name,
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

						$(".layui-layer-close").click(function(){
							layer.closeAll();
							window.location.reload();
						});
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
 * 编辑
 */
function pubedit(obj,id,func,title,w='30%',h='80%'){
	var iframeId = window.self.frameElement.getAttribute('id');
	var time = localStorage[iframeId+'Time'];
	parent.clearReload();
	layer.open({
		type: 2,
		area: [w,h],
		title: title,
		content: '/jdwlkj/merchant/'+func+'?id='+id
		end: function(){
			parent.updateHtml(iframeId,time);
		}
	});
}

/**
 * 会员操作
 */
function actions(obj,func,uid,title,w,h){
	layer.open({
		type: 2,
		area: [w,h],
		title: title,
		content: '/jdwlkj/merchant/'+func+'?id='+uid
	});
}

function in_array(search,array){
    for(var i in array){
        if(array[i]==search){
            return true;
        }
    }
    return false;
}