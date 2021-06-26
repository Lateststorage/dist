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
			url:"/admin/baseinfo/bindPhone",
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
			content: '/admin/baseinfo/bindBankcard'
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
			url:"/admin/baseinfo/bindBankcard",
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
			content: '/admin/baseinfo/editPwd'
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
			url:"/admin/baseinfo/editPwd",
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
			content: '/admin/baseinfo/setPayPwd'
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
				url:"/admin/baseinfo/setPayPwd",
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
	 * 费率修改
	 */
	$(document).on("click",".fee_edit",function(){
		var data = [];
		$(this).parents("tbody").find("input").each(function(index,element){
			var names = $(element).attr("name");
			var value = $(element).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$.ajax({
			url:"/admin/baseinfo/feeEdit",
			data:data,
			type:"POST",
			dataType:"json",
			timeout:15000,
			beforeSend:function(){
				layer.load(1);
			},
			success:function(msg){
				if(msg==1){
					var alertstr = '调整成功';
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
})

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
		content: '/admin/baseinfo/'+func
	});
}

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