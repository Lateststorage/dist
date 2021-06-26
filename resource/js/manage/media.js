// JavaScript Document
layui.use(['layer', 'element', 'form', 'table'], function(){
	var $    = layui.$
	,element = layui.element
	,layer   = layui.layer
	,form    = layui.form
	,table   = layui.table;

    form.render();
	/**
     * 定时刷新
     */
	window.updateHtml = function(elem, time){
		if (typeof reloadTime != 'undefined') clearInterval(reloadTime);
		if(Number(time)){
			reloadTime = setInterval(function(){
				table.reload(elem, {
                    page: {
                        curr: 1 //重新从第 1 页开始
                    }
                });
                var tableData = table.cache[elem];
                for (var i = 0; i < tableData.length; i++) {
                	if (tableData[i].statusStr == '处理中' || tableData[i].statusStr == '审核中' || tableData[i].statusStr == 'Reviewing') {
                		$("#myaudio")[0].play();
                		// return false;
                	}
                }
			}, time*1000);
		}
	}

    var type = $(".recharge-withdraw-reload").attr('data-reloadType');
    var time = localStorage[type+'Reload'] || '0';

    $(".recharge-withdraw-reload option").each(function(){
		if($(this).val()==time){
			$(this).prop("selected",true);
			form.render();
			return false;
		}
    });

    form.on('select(recharge-withdraw-reload)', function(data){
    	var type = data.elem.getAttribute('data-reloadType');
    	localStorage[type+'Reload'] = data.value;
    	updateHtml(type, data.value);
    	// return false;
    });

    updateHtml(type, time);
});