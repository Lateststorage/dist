// JavaScript Document
$(document).ready(function(){
	/**
	 * 商户提现
	 */
	$(document).on("click",".withdraw_sub",function(){
		var data = [];
		$(this).parent("td").find("input").each(function(index,element){
			var names = $(element).attr("name");
			var value = $(element).val();
			if(names && value){
				var obj = {};
				obj.name = names;
				obj.value = value;
				data.push(obj);
			}
		});
		$(this).parent("td").find("select").each(function(index,element){
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
			url:"/admin/withdraw/withdrawSub",
			data:data,
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

})