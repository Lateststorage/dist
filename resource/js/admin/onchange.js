

//是省份选择
function province_change(text){
	var text = text;
	var tab = 'province';
	$.post("/index/change",{
		text:text,
		table:tab
	},function(msg){
		$("#pid").html(msg);
	});
}

//城市选择
function city_change(text){
	var text = text;
	var tab = 'city';
	$.post("/index/change",{
		text:text,
		table:tab
	},function(msg){
		$("#cid").html(msg);
	});
}