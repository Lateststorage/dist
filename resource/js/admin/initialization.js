// JavaScript Document

/**
 * 该JS文件用于对某些插件进行初始化，以便统一管理
 */
$(document).ready(function(){
	/**
	 * 时间插件初始化
	 */
	laydate.render({
		elem: "input[name='datetime']",
		type:'datetime',
		range:true,
		theme:'#2F73BA',
	});

	/**
	 * 时间插件初始化
	 */
	laydate.render({
		elem: "input[name='date_range']",
		type:'date',
		range:true,
		theme:'#2F73BA',
	});

	/**
	 * 时间插件初始化
	 */
	laydate.render({
		elem: "input[name='date']",
		type:'date',
		theme:'#2F73BA',
	});
});
