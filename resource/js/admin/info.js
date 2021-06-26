// JavaScript Document
$(document).ready(function(){
	/**
	 * 绑定联系电话
	 */
	$(document).on("click",".bind_phone",function(){
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
			url:"/admin/info/bindPhone",
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
				layer.msg(alertstr, {time:1500},function(){
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
	 * 绑定联系电话
	 */
	$(document).on("click",".bind_mail",function(){
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
			url:"/admin/info/bindMail",
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
				layer.msg(alertstr, {time:1500},function(){
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
	 * 生成APIKEY
	 */
	$(document).on("click",".set_apikey",function(){
		// 发送验证码
		$.post("/admin/common/sendSMSCode",function(result){
			if (result != 1) {
				layer.msg(result, {time:2000});
				return false;
			}
			// 验证码输入框
	        layer.prompt({
				formType: 0,
				value: '',
				title: '短信验证码',
				}, function(value, index, elem){
					// 验证码验证
					$.ajax({
						url:"/admin/common/checkSMSCode",
						data:{"code":value},
						type:"POST",
						dataType:"json",
						timeout:15000,
						beforeSend:function(){
							layer.load(1);
						},
						success:function(result2){
							if (result2 != 1) {
								layer.msg(result2, {time:2000});
								return false;
							}
							$.post("/admin/info/setApiKey",{"code":value},function(result3){
								if(result3 == 1){									
									var alertstr = '生成成功';
								}else{
									var alertstr = result3;
								}
								layer.msg(alertstr, {time:2000},function(){
									// layer.closeAll();
									// top.location.reload();
									window.location.reload();
								});
							}, 'json');
						},
						complete: function () {
							layer.closeAll("loading");
						}
					});
			});
	    }, 'json');
	})

	/**
	 * 查看APIKEY
	 */
	$(document).on("click",".look_apikey",function(){
		// 发送验证码
		$.post("/admin/common/sendSMSCode",function(result){
			if (result != 1) {
				layer.msg(result, {time:2000});
				return false;
			}
			// 验证码输入框
	        layer.prompt({
				formType: 0,
				value: '',
				title: '短信验证码',
				shadeClose: true,
				}, function(value, index, elem){
					// 验证码验证
					$.ajax({
						url:"/admin/common/checkSMSCode",
						data:{"code":value},
						type:"POST",
						dataType:"json",
						timeout:15000,
						beforeSend:function(){
							layer.load(1);
						},
						success:function(result2){
							if (result2 != 1) {
								layer.msg(result2, {time:2000});
								return false;
							}
							$.post("/admin/info/lookApiKey",function(result3){
								layer.close(index);
								layer.alert(result3, {
									title: 'APIKey',
									shadeClose: true,
								}); 
							}, 'json');
						},
						complete: function () {
							layer.closeAll("loading");
						}
					});
			});
	    }, 'json');
	})

	/**
	 * 修改登录密码
	 */
	$(document).on("click",".edit_pwd",function(){
		layer.open({
			type: 2,
			area: ['500px','45%'],
			title: '修改密码',
			shade: 0.6,
			shadeClose:true,
			shift: 1,
			maxmin:true,
			content: '/admin/info/editPwd'
		});
	})

	/**
	 * 修改登录密码
	 */
	$(document).on("click",".edit_pwd_sub",function(){
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
			url:"/admin/info/editPwd",
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
				layer.msg(alertstr, {time:1500},function(){
					if(msg==1){
						// layer.closeAll();
						window.top.location.reload();
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	/**
	 * 设置交易密码
	 */
	$(document).on("click",".set_pay_pwd",function(){
		layer.open({
			type: 2,
			area: ['500px','45%'],
			title: '设置交易密码',
			shade: 0.6,
			shift: 1,
			maxmin:true,
			content: '/admin/info/setPayPwd'
		});
	})

	/**
	 * 设置交易密码
	 */
	$(document).on("click",".set_pay_pwd_sub",function(){
		// 发送验证码
		var code = $("input[name='sms_code']").val();
		$.post("/admin/common/checkSMSCode",{"code":code},function(result){
			if (result != 1) {
				layer.msg(result, {time:2000});
				return false;
			}
			var data = [];
			$("input").each(function(){
				var names = $(this).attr("name");
				var value = $(this).val();
				if(names && names != 'sms_code' && value){
					var obj = {};
					obj.name = names;
					obj.value = value;
					data.push(obj);
				}
			});
			$.ajax({
				url:"/admin/info/setPayPwd",
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
					layer.msg(alertstr, {time:1500},function(){
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
	    }, 'json');
	})

	/**
	 * 绑定银行卡
	 */
	$(document).on("click",".bind_bankcard",function(){
		layer.open({
			type: 2,
			area: ['500px','45%'],
			title: '绑定账号',
			shade: 0.6,
			shadeClose:true,
			shift: 1,
			maxmin:true,
			content: '/admin/info/bindBankcard'
		});
	})

	/**
	 * 绑定银行卡
	 */
	$(document).on("click",".bind_bankcard_sub",function(){
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
			url:"/admin/info/bindBankcard",
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
				layer.msg(alertstr, {time:1500},function(){
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
	 * 资质提交                                                                                                                                                                 [description]
	 */
	$(document).on("click",".verify_syb",function(){
		$.ajax({
			url:"/admin/info/verifySub",
			type:"POST",
			dataType:"json",
			timeout:15000,
			beforeSend:function(){
				layer.load(1);
			},
			success:function(msg){
				if(msg==1){
					var alertstr = '提交成功';
				}else{
					var alertstr = msg;
				}
				layer.msg(alertstr, {time:1500},function(){
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
	 * 查看资料                                                                                                                                                                 [description]
	 */
	$(document).on("click",".look_me",function(){
		layer.open({
			type: 2,
			area: ['700px','70%'],
			btn: ['我知道了','关闭'],
			title: '我的信息',
			shade: 0.6,
			shift: 1,
			maxmin:true,
			content: '/admin/info/lookMe'
		});
	})

	/**
	 * 绑定银行卡
	 */
	$(document).on("click",".look_me_sub",function(){
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
			url:"/admin/info/lookMe",
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
				layer.msg(alertstr, {time:1500},function(){
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
})

var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendMessage() {		
	//向后台发送处理数据
	$.post("/admin/common/sendSMSCode",function(result){
		if (result != 1) {
			layer.msg(result, {time:2000});
			return false;
		} else {
			layer.msg('验证码已发送，请注意查收！', {time:2000});

			curCount = count;
			//设置button效果，开始计时
			$("#btnSendCode").prop("disabled",true);
			$("#btnSendCode").css("background","#999");
			$("#btnSendCode").text(curCount + "s 后再获取");
			InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
			return false;
		}		
	},'json');
}
//timer处理函数
function SetRemainTime() {
	if (curCount == 0) {                
		window.clearInterval(InterValObj);//停止计时器
		$("#btnSendCode").prop("disabled",false);//启用按钮
		$("#btnSendCode").css("background","#1e9fff");
		$("#btnSendCode").text("获取验证码");
		code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
	}
	else {
		curCount--;
		$("#btnSendCode").text(curCount + "s 后再获取");
	}
}


function bind_info(func){
	switch(func){
		case 'bindPhone':
			var title = '绑定联系电话';
			break;
		case 'bindMail':
			var title = '绑定邮箱';
			break;
		default:
			var title = '';
			break;
	}
	layer.open({
		type: 2,
		area: ['500px','35%'],
		title: title,
		shade: 0.6,
		shadeClose:true,
		shift: 1,
		maxmin:true,
		content: '/admin/info/'+func
	});
}