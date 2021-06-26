// JavaScript Document
layui.use(['layer', 'element', 'form', 'upload', 'table', 'laydate'], function(){
    var $    = layui.$
    ,element = layui.element
    ,layer   = layui.layer
    ,form    = layui.form
    ,upload  = layui.upload
    ,table   = layui.table
    ,laydate = layui.laydate;

	form.render();
	// layer设置
    layer.config({
        skin: 'layui-layer-molv',
        closeBtn: 1,
        shade: 0.3,
        shadeClose: true,
        maxmin: true,
        resize: true
    });
    //同时绑定多个
    // lay("input[name='end_time']").each(function(){});
    laydate.render({
        elem: "input[name='end_time']"
        ,type: 'date'
        ,theme: 'molv'
    });

    /**
     * 文件上传
     */
    // 审核样例多文件列表
    var taskExamineView = $('#demoList')
    ,taskExamineDemo = upload.render({
        elem: '.examine_demo'
        ,url: '/jdwlkj/base/upload' //改成您自己的上传接口
        ,data: {
            targetFolder: "image"
        }
        ,accept: 'file'
        ,multiple: true
        ,auto: false
        ,bindAction: '#examine-demo-btn'
        ,choose: function(obj){
            var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
            //读取本地文件
            obj.preview(function(index, file, result){
                var tr = $(['<tr id="upload-'+ index +'">'
                ,'<td>'+ file.name +'<input type="hidden" name="examine_demo[]" value="" class="layui-input"></td>'
                ,'<td>'+ (file.size/1024/1024).toFixed(1) +'Mb</td>'
                ,'<td class="">等待上传</td>'
                ,'<td>'
                ,'<button class="layui-btn layui-btn-xs demo-reload layui-hide">重传</button>'
                ,'<button class="layui-btn layui-btn-xs layui-btn-danger demo-delete">删除</button>'
                ,'</td>'
                ,'</tr>'].join(''));

                //单个重传
                tr.find('.demo-reload').on('click', function(){
                    obj.upload(index, file);
                });

                //删除
                tr.find('.demo-delete').on('click', function(){
                delete files[index]; //删除对应的文件
                    tr.remove();
                    taskExamineDemo.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                });

                taskExamineView.append(tr);
            });
        }
        ,done: function(res, index, upload){
            if(res.code == 1){ //上传成功
                var tr = taskExamineView.find('tr#upload-'+ index)
                ,tds = tr.children();
                tds.eq(0).find("input[type='hidden']").val(res.success);
                tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
                tds.eq(3).html(''); //清空操作
                return delete this.files[index]; //删除文件队列已经上传成功的文件
            }
            this.error(index, upload);
        }
        ,error: function(index, upload){
            var tr = taskExamineView.find('tr#upload-'+ index)
            ,tds = tr.children();
            tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
            tds.eq(3).find('.demo-reload').removeClass('layui-hide'); //显示重传
        }
        // ,progress: function(n, elem){
        //     var percent = n + '%' //获取进度百分比
        //     element.progress('demo', percent); //可配合 layui 进度条元素使用
        //     html = '';
        //     html += '<div class="layui-progress layui-progress-big" lay-showpercent="true" lay-filter="demo">';
        //     html += '<div class="layui-progress-bar layui-bg-red" lay-percent="0%"></div>';
        //     html += '</div>';

        //     var active = {
        //         setPercent: function(){
        //             //设置50%进度
        //             element.progress('demo', '50%')
        //         }
        //         ,loading: function(othis){
        //             var DISABLED = 'layui-btn-disabled';
        //             if(othis.hasClass(DISABLED)) return;

        //             //模拟loading
        //             var n = 0, timer = setInterval(function(){
        //                 n = n + Math.random()*10|0;
        //                 if(n>100){
        //                     n = 100;
        //                     clearInterval(timer);
        //                     othis.removeClass(DISABLED);
        //                 }
        //                 element.progress('demo', n+'%');
        //             }, 300+Math.random()*1000);

        //             othis.addClass(DISABLED);
        //         }
        //     };

        //     //以下系 layui 2.5.6 新增
        //     console.log(elem); //得到当前触发的元素 DOM 对象。可通过该元素定义的属性值匹配到对应的进度条。
        // }
    });
    // 任务类型图标
    var pj_type_icon = upload.render({
        elem: '.pj-type-icon'
        ,url: '/jdwlkj/base/upload'
        ,data: {
            targetFolder: "resource"
        }
        ,size: 5120 //限制文件大小，单位 KB
        ,accept: 'images'
        ,acceptMime: 'image/*'
        ,exts: 'jpg|png|gif|bmp|jpeg'
        ,done: function(res, index, upload){
            //如果上传失败
            if(res.code == 0){
                return layer.msg(res.success);
            }
            //上传成功
            this.item.children('div').removeClass('layui-hide').find('img').attr('src', res.success);
            this.item.parent(".layui-form-item").find("input[type='hidden']").val(res.success);
            return layer.msg('上传成功');
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = this.item.children('div').find('p');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                pj_type_icon.upload();
            });
        }
    });
    // 任务步骤
    var task_step = upload.render({
        elem: '.task-step'
        ,url: '/jdwlkj/base/upload'
        ,data: {
            targetFolder: "image"
        }
        ,size: 5120 //限制文件大小，单位 KB
        ,accept: 'images'
        ,acceptMime: 'image/*'
        ,exts: 'jpg|png|gif|bmp|jpeg'
        ,done: function(res, index, upload){
            //如果上传失败
            if(res.code == 0){
                return layer.msg(res.success);
            }
            //上传成功
            this.item.children('div').removeClass('layui-hide').find('img').attr('src', res.success);
            this.item.parent(".layui-input-block").find("input[type='hidden']").val(res.success);
            return layer.msg('上传成功');
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = this.item.children('div').find('p');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                task_step.upload();
            });
        }
    });
    /**
     * 任务列表
     */
    // 头部左侧工具栏事件
    table.on('toolbar(taskList)', function(obj){
        switch(obj.event){
            case 'add':
                layer.open({
					type: 2,
					title: "添加任务",
					area: ['95%','95%'],
					content: "/jdwlkj/bet/taskAdd"
				});
                break;

            case 'del':
                var data = table.checkStatus('taskList').data;
                if (data.length == 0) {
                    layer.msg('请选择要删除的任务');
                    return false;
                }
                layer.confirm('确认操作？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bet/taskDel",
                        data: {
                            data: data
                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 15000,
                        beforeSend: function(){
                            layer.load(1);
                        },
                        success: function(msg){
                            var alertStr = (msg == 1) ? '操作成功' : msg;
                            layer.msg(alertStr, {time: 2000}, function(){
                                if(msg==1){
                                    layer.closeAll();
                                    layui.table.reload('taskList');
                                }
                            });
                        },
                        complete: function(){
                            layer.closeAll("loading");
                        }
                    });
                }, function(){
                    layer.msg('取消操作', {
                        time: 2000, //2s后自动关闭
                    });
                });
                break;

            case 'task-class':
                layer.open({
					type: 2,
					title: "项目类型",
					area: ['90%','90%'],
					content: "/jdwlkj/bet/TaskClass"
				});
                break;
        };
    });

    /**
     * 用户任务列表
     */
    // 头部左侧工具栏事件
    table.on('toolbar(userTaskList)', function(obj){
        var val = $(this).data('status');
        switch(obj.event){
            case 'finish':
            case 'fail':
            case 'reset':
            case 'spite':
                var data = table.checkStatus('userTaskList').data;
                if (data.length == 0) {
                    layer.msg('请选择要操作的任务');
                    return false;
                }
                layer.confirm('确认操作？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bet/userTaskAudit",
                        data: {
                            data: data,
                            status: val
                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 15000,
                        beforeSend: function(){
                            layer.load(1);
                        },
                        success: function(msg){
                            var alertStr = (msg == 1) ? '操作成功' : msg;
                            layer.msg(alertStr, {time: 2000}, function(){
                                if(msg==1){
                                    layer.closeAll();
                                    layui.table.reload('userTaskList');
                                }
                            });
                        },
                        complete: function(){
                            layer.closeAll("loading");
                        }
                    });
                }, function(){
                    layer.msg('取消操作', {
                        time: 2000, //2s后自动关闭
                    });
                });
                break;
        };
    });
    // 用户任务
    form.on('submit(userTaskAction)', function(data){
        var uri = data.elem.dataset.type;
        $.ajax({
            url: "/jdwlkj/bet/"+uri,
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
                        parent.layui.table.reload('userTaskList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 监听工具条
    table.on('tool(taskList)', function(obj){
        switch (obj.event) {
            case 'audit':
                layer.open({
                    type: 2,
                    area: ['90%', '90%'],
                    title: '审核任务',
                    content: '/jdwlkj/bet/taskAudit?id='+obj.data.id
                });
                break;

            case 'edit':
                layer.open({
					type: 2,
					area: ['95%', '95%'],
					title: '编辑任务',
					content: '/jdwlkj/bet/taskEdit?id='+obj.data.id
				});
                break;

            case 'del':
                layer.confirm('确定删除 '+obj.data.title+' ？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bet/taskDel",
                        data: {
                            id: obj.data.id
                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 15000,
                        beforeSend: function(){
                            layer.load(1);
                        },
                        success: function(msg){
                            var alertStr = (msg == 1) ? '操作成功' : msg;
                            layer.msg(alertStr, {time: 2000}, function(){
                                if(msg==1){
                                    layer.closeAll();
                                    layui.table.reload('taskList');
                                }
                            });
                        },
                        complete: function(){
                            layer.closeAll("loading");
                        }
                    });
                }, function(){
                    layer.msg('取消操作', {
                        time: 2000, //2s后自动关闭
                    });
                });
                break;
        }
    });
	
	//通过分类选择对应的模板
	form.on('select(task_mb)', function(data){
		var mid = parseInt(data.value);
		var arr = JSON.parse($('#taskMb').val());
		for(var i=0; i<arr.length; i++) {
			if (arr[i]['id'] == mid) {
				console.log(arr[i]['title']);
				//任务分类
				var selCls = document.getElementById('taskClass');
				for (var k = 0; k < selCls.options.length; k++) {
					if (selCls.options[k].value == arr[i]['task_class']) {
						selCls.options[k].selected = true;
					}
				}
				//语言
				var selLang = document.getElementById('lang');
				for (var k = 0; k < selLang.options.length; k++) {
					if (selLang.options[k].value == arr[i]['lang']) {
						selLang.options[k].selected = true;
					}
				}
				$('input[name=repeat_num]').val(arr[i]['repeat_num']);
				$('input[name=title]').val(arr[i]['title']);
				$('textarea[name=content]').val(arr[i]['content']);
				$('input[name=reward_price]').val(arr[i]['reward_price']);
				$('input[name=total_number]').val(arr[i]['total_number']);
				$('input[name=person_time]').val(arr[i]['person_time']);
				$('input[name=total_price]').val(arr[i]['total_price']);
				//任务类型
				var rdType = $('input[name=task_type]');
				for(var t=0; t<rdType.length; t++) {
					if(rdType[t].value == arr[i]['task_type']) {
						rdType[t].checked = true;
					}
					//form.render();
				}
				$('input[name=link_info]').val(arr[i]['link_info']);
				//任务级别
				var rdLevel = $('input[name=task_level]');
				for(var r=0; r<rdLevel.length; r++) {
					if(rdLevel[r].value == arr[i]['task_level']) {
						rdLevel[r].checked = true;
					}
				}
				//日期
				var date = new Date(arr[i]['end_time'] * 1000);
				var d = date.getFullYear()+'-'+(date.getMonth()+1<10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)+'-'+date.getDate();
				$('input[name=end_time]').val(d);
				//完成条件
				var chb = $(':checkbox');
				chb.prop('checked', false);
				form.render('checkbox');
				var fcArr = JSON.parse(arr[i]['finish_condition']);
				for(var c=0; c<chb.length; c++) {
					for(var j=0; j<fcArr.length; j++) {
						if(chb[c].value == fcArr[j]) {
							chb[c].checked = true;
						}
					}
					form.render('checkbox');
				}
				//重新渲染
				form.render();
				//
				$('textarea[name=requirement]').val(arr[i]['requirement']);
				//
				var stepArr = JSON.parse(arr[i]['task_step']);
				var html = '<label class="layui-form-label">任务步骤</label>';
				for(var a = 0; a < stepArr.length; a++) {
					var cl = '';
					if (stepArr[a]['img']=='') {
						cl = 'class="layui-hide"';
					}
					html += '<div class="layui-input-block" style="border: 1px solid #d2d2d2;border-radius: 3px;padding: 12px;display: flex;margin-bottom: 10px;align-items: flex-start;">'
						+ '<h4 style="background-color: #FFB800;width: 40px;height: 40px;border-radius: 20px;line-height: 40px;font-size: 16px;margin-right: 10px;text-align: center;margin-top: 50px;">'+a+'</h4>'
						+ '<div class="layui-upload-drag task-step" id="task-step-1" style="width: 10%;margin-right: 10px;">'
							+ '<i class="layui-icon layui-icon-upload"></i>'
							+ '<p>点击上传，或将文件拖拽到此处</p>'
							+ '<div '+cl+'>'
								+ '<hr>'
								+ '<img src="'+stepArr[a]['img']+'" alt="上传成功后渲染" style="max-width: 150px">'
								+ '<p></p>'
							+ '</div>'
						+ '</div>'
						+ '<input type="hidden" name="task_step['+a+'][img]" value="'+stepArr[a]['img']+'" class="layui-input">'
						+ '<textarea name="task_step['+a+'][describe]" placeholder="请输入步骤描述" class="layui-textarea" style="width: 70%;display: inline-block;height: 250px;">'+stepArr[a]['describe']+'</textarea>'
					+ '</div>';
				}
				$('.step-holder').html(html);
			}
		}
		console.log(arr);
	})
	
    // 计算总价
    $(document).on('change',"input[name='reward_price']", function(){
        var reward_price = $(this).val();
        var total_number = $("input[name='total_number']").val();
        var total_price = Number(reward_price) * Number(total_number);
        $("input[name='total_price']").val(total_price);
    })
    $(document).on('change',"input[name='total_number']", function(){
        var total_number = $(this).val();
        var reward_price = $("input[name='reward_price']").val();
        var total_price = Number(reward_price) * Number(total_number);
        $("input[name='total_price']").val(total_price);
    })
    // 添加步骤
    $(document).on('click', '.step-holder-add', function(){
        var obj = $('.step-holder');
        var sort = obj.find('h4').text();
        var len = obj.children().length - 1;
        ++len;
        if (len > 10) {
            layer.msg('不能再多啦');
            return false;
        }
        var html = '';
        html += '<div class="layui-input-block" style="border: 1px solid #d2d2d2;border-radius: 3px;padding: 12px;display: flex;margin-bottom: 10px;align-items: flex-start;">';
        html += '<h4 style="background-color: #FFB800;width: 40px;height: 40px;border-radius: 20px;line-height: 40px;font-size: 16px;margin-right: 10px;text-align: center;margin-top: 50px;">'+len+'</h4>';
        html += '<div class="layui-upload-drag task-step" id="task-step-'+len+'" style="width: 10%;margin-right: 10px;">';
        html += '<i class="layui-icon layui-icon-upload"></i>';
        html += '<p>点击上传，或将文件拖拽到此处</p>';
        html += '<div class="layui-hide">';
        html += '<hr>';
        html += '<img src="" alt="上传成功后渲染" style="max-width: 150px">';
        html += '<p></p>';
        html += '</div>';
        html += '</div>';
        html += '<input type="hidden" name="task_step['+len+'][img]" value="" class="layui-input">';
        html += '<textarea name="task_step['+len+'][describe]" placeholder="请输入步骤描述" class="layui-textarea" style="width: 70%;display: inline-block;height: 250px;"></textarea>';
        html += '</div>';

        obj.append(html);
        form.render();
        // 任务步骤
        var task_step = upload.render({
            elem: '#task-step-'+len
            ,url: '/jdwlkj/base/upload'
            ,data: {

            }
            ,accept: 'images'
            ,acceptMime: 'image/*'
            ,exts: 'jpg|png|gif|bmp|jpeg'
            ,done: function(res){
                //如果上传失败
                if(res.code == 0){
                    return layer.msg(res.success);
                }
                //上传成功
                this.item.children('div').removeClass('layui-hide').find('img').attr('src', res.success);
                this.item.parent(".layui-input-block").find("input[type='hidden']").val(res.success);
                return layer.msg('上传成功');
            }
            ,error: function(){
                //演示失败状态，并实现重传
                var demoText = this.item.children('div').find('p');
                demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                demoText.find('.demo-reload').on('click', function(){
                    task_step.upload();
                });
            }
        });
    })
    // 移除步骤
    $(document).on('click', '.step-holder-del', function(){
        var obj = $('.step-holder');
        var sort = obj.find('h4').text();
        var len = obj.children();
        if (len.length - 1 == 1) {
            layer.msg('不能再少啦');
            return false;
        }

        obj.children("div:last-child").remove();
        form.render();
    })

	// 提交任务
    form.on('submit(project_sub)', function(data){
        var uri = data.elem.dataset.type;
        $.ajax({
            url: "/jdwlkj/bet/"+uri,
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
						parent.layui.table.reload('taskList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 监听工具条
    table.on('tool(financial)', function(obj){
        switch (obj.event) {
            case 'details':
                layer.open({
                    type:2,
                    btn: ['确定', '关闭'],
                    title: "流水详情",
                    area: ['50%', '40%'],
                    content:"/jdwlkj/bet/financial_dateils?id="+obj.data.id
                });
                break;
        }
    });

    // 监听工具条
    table.on('tool(investList)', function(obj){
        switch (obj.event) {
            case 'contract':
                layer.open({
                    type: 2,
                    area: ['90%', '90%'],
                    title: '上传合同',
                    content: '/jdwlkj/bet/investPact?id='+obj.data.id
                });
                break;
        }
    });

    // 头部左侧工具栏事件
    table.on('toolbar(projectType)', function(obj){
        switch(obj.event){
            case 'add':
				layer.open({
					type: 2,
					area: ['80%', '90%'],
					title: '添加分类',
					content: '/jdwlkj/bet/TaskClassAdd'
				});
                break;
        };
    });

    // 监听工具条
    table.on('tool(projectType)', function(obj){
        switch (obj.event) {
            case 'edit':
                layer.open({
					type: 2,
					area: ['80%', '90%'],
					title: '编辑分类',
					content: '/jdwlkj/bet/TaskClassEdit?id='+obj.data.id
				});
                break;

            case 'del':
                layer.confirm('确定删除该项目分类？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bet/TaskClassDel",
                        data: {
                            id: obj.data.id
                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 15000,
                        beforeSend: function(){
                            layer.load(1);
                        },
                        success: function(msg){
                            var alertStr = (msg == 1) ? '操作成功' : msg;
                            layer.msg(alertStr, {time: 2000}, function(){
                                if(msg==1){
                                    layer.closeAll();
                                    layui.table.reload('projectType');
                                }
                            });
                        },
                        complete: function(){
                            layer.closeAll("loading");
                        }
                    });
                }, function(){
                    layer.msg('取消操作', {
                        time: 2000, //2s后自动关闭
                    });
                });
                break;
        }
    });

    // 添加分类
    form.on('submit(TaskClassAdd)', function(data){
        $.ajax({
            url: "/jdwlkj/bet/TaskClassAdd",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
						parent.layui.table.reload('projectType');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 编辑分类
    form.on('submit(TaskClassEdit)', function(data){
        $.ajax({
            url: "/jdwlkj/bet/TaskClassEdit",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
						parent.layui.table.reload('projectType');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 头部左侧工具栏事件
    table.on('toolbar(returnType)', function(obj){
        switch(obj.event){
            case 'add':
				layer.open({
					type: 2,
					area: ['80%', '90%'],
					title: '添加方式',
					content: '/jdwlkj/bet/returnTypeAdd'
				});
                break;
        };
    });

    // 监听工具条
    table.on('tool(returnType)', function(obj){
        switch (obj.event) {
            case 'edit':
                layer.open({
					type: 2,
					area: ['80%', '90%'],
					title: '编辑方式',
					content: '/jdwlkj/bet/returnTypeEdit?id='+obj.data.id
				});
                break;

            case 'del':
                layer.confirm('确定删除该项目方式？', {
                    btn: ['确定','取消'] //按钮
                }, function(){
                    $.ajax({
                        url: "/jdwlkj/bet/returnTypeDel",
                        data: {
                            id: obj.data.id
                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 15000,
                        beforeSend: function(){
                            layer.load(1);
                        },
                        success: function(msg){
                            var alertStr = (msg == 1) ? '操作成功' : msg;
                            layer.msg(alertStr, {time: 2000}, function(){
                                if(msg==1){
                                    layer.closeAll();
                                    layui.table.reload('returnType');
                                }
                            });
                        },
                        complete: function(){
                            layer.closeAll("loading");
                        }
                    });
                }, function(){
                    layer.msg('取消操作', {
                        time: 2000, //2s后自动关闭
                    });
                });
                break;
        }
    });

	// 添加方式
    form.on('submit(return_type_add)', function(data){
        $.ajax({
            url: "/jdwlkj/bet/returnTypeAdd",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
						parent.layui.table.reload('returnType');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 编辑方式
    form.on('submit(return_type_edit)', function(data){
        $.ajax({
            url: "/jdwlkj/bet/returnTypeEdit",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
						parent.layui.table.reload('returnType');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

    // 上传合同
    form.on('submit(invest_pact)', function(data){
        $.ajax({
            url: "/jdwlkj/bet/investPact",
            data: data.field,
            type: "POST",
            dataType: "json",
            timeout: 15000,
            beforeSend: function(){
                layer.load(1);
            },
            success: function(msg){
                var alertStr = (msg == 1) ? '操作成功' : msg;
                layer.msg(alertStr, {time: 2000}, function(){
                    if(msg==1){
                        parent.layer.closeAll();
						parent.layui.table.reload('investList');
                    }
                });
            },
            complete: function(){
                layer.closeAll("loading");
            }
        });
        return false;
    });

	/**
	 * 导出报表
	 */
	window.exportData = function(exporttype){
		layer.open({
			type: 2,
			title: "导出报表",
			area: ['600px','400px'],
			content: "/jdwlkj/bet/exportData?exporttype="+exporttype
		});
	}
});