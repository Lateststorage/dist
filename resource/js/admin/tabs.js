var tabsfun={
	
	//手动打开选修卡
	open:function(name,url)
	{
		var frame = $("#mainframe");
		//frame
		// frame.find('iframe').hide();
		// var frame_obj = frame.find("iframe[data-url='"+url+"']");
		// if(frame_obj.length){
		// 	frame_obj.remove();
		// 	frame.append('<iframe border="0" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="auto" width="100%" height="'+parseInt($("#mainframe").attr('data-height'))+'" src="'+url+'" data-url="'+url+'"></iframe>');
		// }else{
		// 	frame.append('<iframe border="0" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="auto" width="100%" height="'+parseInt($("#mainframe").attr('data-height'))+'" src="'+url+'" data-url="'+url+'"></iframe>');
		// }
		frame.html('<iframe border="0" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="auto" width="100%" height="'+frame.data('height')+'" src="'+url+'" data-url="'+url+'"></iframe>')
	},
	
	//手动关闭选项卡
	close:function(url)
	{
		var tabs = $("#tabs");
		var frame = $("#mainframe");
		var tabs_obj = tabs.find("div[data-url='"+url+"']");
		if(tabs_obj.length) tabs_obj.remove();
		var frame_obj = frame.find("iframe[data-url='"+url+"']");
		if(frame_obj.length) frame_obj.remove();
	},
	
};