// JavaScript Document
$(document).ready(function(){
	/**
	 * 添加商户
	 */
	$(document).on("click",".mer_add",function(){
		layer.open({
			type: 2,
			area: ['600px','65%'],
			title: '添加商户',
			shade: 0.6,
			shadeClose:true,
			shift: 1,
			maxmin:true,
			content: '/admin/agentcentre/merAdd'
		});
	})

	/**
	 * 修改登录密码
	 */
	$(document).on("click",".mer_add_sub",function(){
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
			url:"/admin/agentcentre/merAdd",
			data:data,
			type:"POST",
			dataType:"json",
			timeout:15000,
			beforeSend:function(){
				layer.load(1);
			},
			success:function(msg){
				if(msg==1){
					var alertstr = '添加成功';
				}else{
					var alertstr = msg;
				}
				layer.msg(alertstr, {time:1500},function(){
					if(msg==1){
						// layer.closeAll();
						parent.window.top.location.reload();
					}
				});
			},
			complete: function () {
				layer.closeAll("loading");
			}
		});
	})

	/**
	 * 编辑商户
	 */
	$(document).on("click",".mer_edit_sub",function(){
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
			url:"/admin/agentcentre/merEdit",
			data:data,
			type:"POST",
			dataType:"json",
			timeout:15000,
			beforeSend:function(){
				layer.load(1);
			},
			success:function(msg){
				if(msg==1){
					var alertstr = '保存成功';
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
function mer_edit(obj, id){
	layer.open({
		type: 2,
		area: ['700px','45%'],
		title: '编辑商户',
		shade: 0.6,
		shadeClose:true,
		shift: 1,
		maxmin:true,
		content: '/admin/agentcentre/merEdit?id='+id
	});
}
function mer_look(obj, id){
	layer.open({
		type: 2,
		area: ['500px','70%'],
		title: '查看商户',
		shade: 0.6,
		shadeClose:true,
		shift: 1,
		maxmin:true,
		content: '/admin/agentcentre/merLook?id='+id
	});
}