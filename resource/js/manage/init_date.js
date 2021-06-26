// JavaScript Document
layui.use(['laydate'], function(){
	var $    = layui.$
	,laydate = layui.laydate;

	/**
	 * 时间插件初始化
	 */
	laydate.render({
		elem: "input[name='datetime']",
		type: 'datetime',
		theme: 'molv',
	});

	/**
	 * 时间插件初始化
	 */
	laydate.render({
		elem: "input[name='datetime_range']",
		type: 'datetime',
		range: true,
		theme: 'molv',
	});

	/**
	 * 时间插件初始化
	 */
	laydate.render({
		elem: "input[name='date']",
		type: 'date',
		theme: 'molv',
	});

	/**
	 * 时间插件初始化
	 */
	laydate.render({
		elem: "input[name='date_range']",
		type: 'date',
		range: true,
		theme: 'molv',
	});
});