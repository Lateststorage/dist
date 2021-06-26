// JavaScript Document
$(document).ready(function(){
	/**
	 * 补单
	 */
	$(document).on("click", ".repair_edit_do", function(){
		var orderid = $("input[name='orderid']").val();
		var id = $("input[name='id']").val();
		var oactualamount = $("input[name='oactualamount']").val();
		if(oactualamount == ''){
			layer.msg('请填写正确的补单金额', {
				time: 500, //2s后自动关闭
			});
			return false;
		}
		layer.confirm('补单金额：'+oactualamount, {
			btn: ['确定','取消'] //按钮
		}, function(index){
			$.ajax({
				url:"/admin/team/repairorder",
				data:{
					"id": id,
					"oactualamount": oactualamount,
					"orderid": orderid
				},
				type:"POST",
				dataType:"json",
				timeout:15000,
				beforeSend:function(){
					layer.load(1);
				},
				success:function(msg){
					if(msg==1){
						layer.msg('补单成功',function(){
							layer.closeAll();
							window.parent.location.reload();
						});
					}else{
						layer.msg(msg,function(){
							layer.close(index);
						});
					}
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
})

/**
 * 补单
 */
function repairorder(id,order_number){
	layer.open({
		type: 2,
		area: ['500px','50%'],
		title: '补单：'+order_number,
		shade: 0.6,
		maxmin: true,
		moveType: 1,
		shift: 1,
		content: '/admin/team/repairorder?id='+id
	});
}

// 二维码图片弹出
function laytipsimg(obj,content){
	// layer.tips('<img src="'+content+'" style="width:300px;">', obj, {
	// 	area:'330px',
	// 	time:10000,
	// 	shadeClose:true
	// });
	layer.open({
		type: 1,
		title: '用户二维码',
		content: '<img src="'+content+'" style="width:300px;">',
		offset: 'auto',
		area: '330px',
		btn: ['确定','关闭'],
		shade: 0.6,
		shadeClose: true,
		anim: 5,
		maxmin: true,
	});
}

/**
 * 公用开关
 */
function onOff(obj, func, id, value, tips){
	layer.confirm('是否'+tips+'？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/admin/team/"+func,
			data:{
				"id":id,
				"value":value
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
				layer.msg(alertstr,function(){
					window.location.reload();
					var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
					parent.layer.close(index);
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});	
	}, function(){
		layer.msg('取消删除', {
			time: 500, //2s后自动关闭
		});
	});
}

/**
 * 公用提示层
 */
function pubTips(obj, func, id, tips){
	layer.confirm('是否'+tips+'？', {
		btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:"/admin/team/"+func,
			data:{
				"id":id
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
				layer.msg(alertstr,function(){
					window.location.reload();
					var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
					parent.layer.close(index);
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});	
	}, function(){
		layer.msg('取消删除', {
			time: 500, //2s后自动关闭
		});
	});
}