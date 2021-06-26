// JavaScript Document
$(document).ready(function(){

})

function detailed(obj, id){
	layer.open({
		type: 2,
		area: ['500px','70%'],
		title: '查看详情',
		shade: 0.6,
		shadeClose:true,
		shift: 1,
		maxmin:true,
		content: '/admin/order/orderDetailed?id='+id
	});
}

function loadQrcode(obj, id){
	layer.tips('<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571995943765&di=e2351e2944b16c8b0ad2f749c2b9e375&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fgame%2F2013%2F11%2F26%2F20131126143638f53f4.png" alt="">', obj, {
		tips: 1,
		area: ['285px', '300px'],
		fixed: false,
		shadeClose: true,
		time: 10000
	});
}

function call_back(obj, id){
	$.ajax({
		url:"/admin/order/callBack",
		data:{"id":id},
		type:"POST",
		dataType:"json",
		timeout:15000,
		beforeSend:function(){
			layer.load(1);
		},
		success:function(msg){
			layer.msg('已发送', {time:2000});
		},
		complete: function () {
			layer.closeAll("loading");
		}
	});
}