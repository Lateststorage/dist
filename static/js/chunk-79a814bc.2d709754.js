(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79a814bc"],{"0235":function(t,e,i){"use strict";(function(t){e["a"]={name:"RemoveMember",components:{},props:{gid:{type:Number,default:0}},data(){return{memberList:"",searchList:[],searchVal:"",checkList:[]}},computed:{},watch:{},created(){this.$MiModel.GroupsMember(this.gid,e=>{this.memberList=e.list?e.list.filter(t=>t.fid!=localStorage["userUid"]&&1!=t.user_type):[],this.searchList=this.memberList,this.$nextTick(()=>{this.$MiInitial.InitScrollWrap(this.$el,t(".SearchFriend").outerHeight(!0))})})},mounted(){this.ScrollWrap=new this.$MiBScroll(this.$refs.Scroll,{click:!0})},activated(){},destroyed(){},methods:{onClickCancel(){this.$emit("triggerPopup")},onClickConfirm(){this.checkList.length?this.$MiModel.SetGroupsInfo({gid:this.gid,remove_groups:this.checkList.join()},t=>{this.$emit("triggerPopup",!0)}):this.$MiDialog.Alert("请选择成员")},onSearch(){this.searchList=[],this.memberList.forEach(t=>{t.nickname.indexOf(this.searchVal)>-1&&(this.searchList.push(t),this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el)}))})},toggleCheckbox(t){this.$refs.checkboxes[t].toggle()}}}}).call(this,i("1157"))},"08e9":function(t,e,i){},"09a0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Main Background"},[i("transition",{attrs:{name:t.animateType},on:{"after-enter":t.afterEnter}},[t.showSet?i("GroupSetting",{attrs:{gid:t.groupId,setType:t.setType},on:{onCloseSet:t.onCloseSet}}):i("div",{staticClass:"Animate"},[i("van-nav-bar",{staticClass:"NavBar",attrs:{title:"群聊设置",border:!1},on:{"click-left":t.onClickBack,"click-right":function(e){t.showMenu=!0}}},[i("img",{staticClass:"icon-left",attrs:{slot:"left",src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/icon/icon-back.svg"},slot:"left"})]),i("div",{ref:"Scroll",staticClass:"Scroll-Wrap"},[i("div",{staticClass:"Scroll-Con"},[i("div",{staticClass:"Box UserCenter"},[i("van-cell",{staticClass:"Info",attrs:{border:!1,size:"large"},on:{click:function(e){return t.$MiUtil.CopyText("IosCopy","AppCopy",1)}}},[i("div",{staticClass:"head-img",attrs:{slot:"icon"},slot:"icon"},[t.groupInfo.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+t.groupInfo.header,width:"100%"}}):i("b",[t._v(t._s(t.groupInfo.group_name.slice(0,2)))])]),i("template",{slot:"title"},[i("span",[t._v(t._s(t.groupInfo.group_name))]),i("div",{staticClass:"van-cell__label"},[t._v(" 密群号："+t._s(t.groupInfo.gid)+" ")])])],2),t.isRoom?t._e():i("div",{staticClass:"GroupMember"},[i("ul",[t._l(t.groupMember,(function(e){return i("li",{key:e.id,on:{click:function(i){return t.openFriendInfo(e.mid,e.fid)}}},[1==e.user_type?i("van-tag",{attrs:{round:"",type:"danger"}},[t._v("群主")]):4==e.user_type?i("van-tag",{attrs:{round:"",type:"success"}},[t._v("管理")]):t._e(),i("div",{staticClass:"head"},[e.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+e.header,width:"100%"}}):i("b",[t._v(t._s(e.nickname?e.nickname.slice(0,2):"昵称"))])]),i("p",[t._v(t._s(e.nickname?e.nickname:"昵称未设置"))])],1)})),1==t.groupInfo.is_g_d||1==t.groupInfo.user_type||4==t.groupInfo.user_type?i("li",[i("a",{staticClass:"add",attrs:{href:"javascript:;"},on:{click:function(e){t.showPopup=!0,t.popupType="invite"}}},[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/icon/icon-add-black.svg",width:"30"}})])]):t._e(),1==t.groupInfo.user_type||4==t.groupInfo.user_type?i("li",[i("a",{staticClass:"sub",attrs:{href:"javascript:;"},on:{click:function(e){t.showPopup=!0,t.popupType="remove"}}},[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/icon/icon-sub-black.svg",width:"30"}})])]):t._e(),t.memberList.length>22?i("li",["all"!=t.showBtn?i("a",{attrs:{href:"javascript::"},on:{click:function(e){return t.showMember("all")}}},[t._v("全部...")]):i("a",{attrs:{href:"javascript::"},on:{click:function(e){return t.showMember("part")}}},[t._v("收起...")])]):t._e()],2)]),i("van-cell-group",{staticClass:"mt20"},[1==t.groupInfo.user_type||4==t.groupInfo.user_type?i("van-cell",{attrs:{title:"群管理",size:"large","is-link":""},on:{click:function(e){t.showSet=!0,t.setType="manage",t.animateType="open"}}}):t._e(),i("van-cell",{staticClass:"Autograph",attrs:{title:"群公告",label:t.groupInfo.notice?t.groupInfo.notice:"暂无群公告",size:"large","is-link":""},on:{click:function(e){return t.openGroupInfo("notice")}}}),i("van-cell",{staticClass:"Autograph",attrs:{title:"群介绍",label:t.groupInfo.introduce?t.groupInfo.introduce:"暂无群介绍",size:"large","is-link":""},on:{click:function(e){return t.openGroupInfo("introduce")}}})],1),i("van-cell-group",{staticClass:"mt20"},[i("van-cell",{attrs:{title:"我在本群的昵称",value:t.groupInfo.nickname,size:"large","is-link":""},on:{click:function(e){t.showPopup=!0,t.popupType="nickname"}}}),i("van-switch-cell",{attrs:{title:"消息免打扰",size:"26px","active-color":"#44db5e"},on:{change:function(e){return t.onChangeSwitch("voice")}},model:{value:t.isVoice,callback:function(e){t.isVoice=e},expression:"isVoice"}}),i("van-switch-cell",{attrs:{title:"置顶聊天",size:"26px","active-color":"#44db5e"},on:{change:function(e){return t.onChangeSwitch("top")}},model:{value:t.isTop,callback:function(e){t.isTop=e},expression:"isTop"}})],1),i("van-cell-group",{staticClass:"mt20"},[1==t.groupInfo.user_type||4==t.groupInfo.user_type?i("van-cell",{attrs:{title:"清空聊天记录",size:"large","is-link":""},on:{click:t.clearChat}}):t._e()],1),1!=t.isRoom?i("div",[1==t.groupInfo.user_type?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"danger"},on:{click:function(e){return t.groupState("disband")}}},[t._v("解散该群")]):i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"danger"},on:{click:function(e){return t.groupState("quit")}}},[t._v("退出该群")])],1):t._e()],1)])])],1)],1),i("van-popup",{staticClass:"SetPopup",attrs:{position:"bottom",overlay:!1,"lock-scroll":!1},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},["invite"==t.popupType?i("InviteMember",{attrs:{gid:t.groupId},on:{triggerPopup:t.triggerPopup}}):"remove"==t.popupType?i("RemoveMember",{attrs:{gid:t.groupId},on:{triggerPopup:t.triggerPopup}}):i("SetInfo",{attrs:{gid:t.groupInfo.id,popupType:t.popupType},on:{triggerPopup:t.triggerPopup}})],1),i("input",{attrs:{type:"text",id:"AppCopy",readonly:""},domProps:{value:t.groupInfo.gid}}),i("span",{attrs:{id:"IosCopy"}},[t._v(t._s(t.groupInfo.gid))])],1)},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SetBox"},[i("van-nav-bar",{attrs:{title:"邀请进群","left-text":"取消","right-text":"完成"+(t.groupArr.length?"("+t.groupArr.length+")":""),border:!1},on:{"click-left":t.onClickCancel,"click-right":t.onClickConfirm}}),i("van-search",{staticClass:"SearchFriend mb10",attrs:{placeholder:"搜索"},on:{input:t.onSearch},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),i("div",{ref:"Scroll",staticClass:"Scroll-Wrap"},[i("div",{staticClass:"Scroll-Con"},[i("van-checkbox-group",{staticClass:"FriendList",on:{change:t.changeCheckbox},model:{value:t.newcheckList,callback:function(e){t.newcheckList=e},expression:"newcheckList"}},t._l(t.searchList,(function(e,s){return i("van-cell",{key:s,attrs:{clickable:"",title:e.fname?e.fname:"昵称未设置"},on:{click:function(e){return t.toggleCheckbox(s)}}},[i("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"mr15",attrs:{slot:"icon",name:e.fid,"checked-color":"#06bf04",disabled:t.checkList.indexOf(e.fid)>-1},slot:"icon"}),i("div",{staticClass:"head",attrs:{slot:"icon"},slot:"icon"},[e.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+e.header}}):i("b",[t._v(t._s(e.fname?e.fname.slice(0,2):"昵称"))])])],1)})),1),t.friendList&&!t.friendList.length?i("MiNoContent",{attrs:{msg:["你没有任何好友可以选择","快去添加好友吧"]}}):t._e()],1)])],1)},r=[],n=i("490a"),c=n["a"],l=i("2877"),p=Object(l["a"])(c,a,r,!1,null,null,null),h=p.exports,u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SetBox"},[i("van-nav-bar",{attrs:{title:"移除成员","left-text":"取消","right-text":"完成"+(t.checkList.length?"("+t.checkList.length+")":""),border:!1},on:{"click-left":t.onClickCancel,"click-right":t.onClickConfirm}}),i("van-search",{staticClass:"SearchFriend mb10",attrs:{placeholder:"搜索"},on:{input:t.onSearch},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),i("div",{ref:"Scroll",staticClass:"Scroll-Wrap"},[i("div",{staticClass:"Scroll-Con"},[i("van-checkbox-group",{staticClass:"FriendList",model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.searchList,(function(e,s){return i("van-cell",{key:s,attrs:{clickable:"",title:e.nickname?e.nickname:"昵称未设置"},on:{click:function(e){return t.toggleCheckbox(s)}}},[i("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"mr15",attrs:{slot:"icon",name:e.fid,"checked-color":"#06bf04"},slot:"icon"}),i("div",{staticClass:"head",attrs:{slot:"icon"},slot:"icon"},[e.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+e.header}}):i("b",[t._v(t._s(e.nickname?e.nickname.slice(0,2):"昵称"))])])],1)})),1),t.memberList&&!t.memberList.length?i("MiNoContent",{attrs:{msg:["你没有任何好友可以选择","快去添加好友吧"]}}):t._e()],1)])],1)},d=[],g=i("0235"),m=g["a"],f=Object(l["a"])(m,u,d,!1,null,null,null),v=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Animate Background"},[i("van-nav-bar",{staticClass:"NavBar",attrs:{title:"qrcode"==t.setType?"群二维码名片":"manage"==t.setType?"群管理":"promote"==t.setType?"群推广链接":"隐私设置",border:!1},on:{"click-left":t.onClickBack}},[i("img",{staticClass:"icon-left",attrs:{slot:"left",src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/icon/icon-back.svg"},slot:"left"})]),"qrcode"==t.setType?i("div",{staticClass:"UserQRcode"},[i("van-cell",{staticClass:"Info",attrs:{title:t.GroupInfo.group_name,label:"密群号："+t.GroupInfo.gid,border:!1,size:"large"}},[i("div",{staticClass:"head-img",attrs:{slot:"icon"},slot:"icon"},[t.GroupInfo.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+t.GroupInfo.header,width:"100%"}}):i("b",[t._v(t._s(t.GroupInfo.group_name.slice(0,2)))])])]),i("div",{staticClass:"Code"},[i("img",{attrs:{src:t.GroupInfo.code_url,width:"100%"}}),t._m(0)])],1):t._e(),"promote"==t.setType?i("div",{staticClass:"UserQRcode"},[i("van-cell",{staticClass:"Info",attrs:{title:t.GroupInfo.group_name,label:"密群号："+t.GroupInfo.gid,border:!1,size:"large"}},[i("div",{staticClass:"head-img",attrs:{slot:"icon"},slot:"icon"},[t.GroupInfo.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+t.GroupInfo.header,width:"100%"}}):i("b",[t._v(t._s(t.GroupInfo.group_name.slice(0,2)))])])]),i("div",{staticClass:"Code",staticStyle:{"text-align":"left",position:"relative"}},[i("p",[t._v("链接地址")]),i("input",{staticStyle:{width:"100%",border:"0",color:"#333","font-size":"12px"},attrs:{id:"AppUrl",type:"text",readonly:""},domProps:{value:t.$ApiUrl+"/#/miliao/sendMsg?id="+t.GroupInfo.id+"&chat_type=2"}}),i("span",{staticStyle:{position:"absolute",opacity:"0"},attrs:{id:"IosUrl"}},[t._v(t._s(t.$ApiUrl+"/#/miliao/sendMsg?id="+t.GroupInfo.id+"&chat_type=2"))]),i("p",{staticStyle:{"text-align":"center","margin-top":"20px"}},[i("van-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(e){return t.$MiUtil.CopyText("IosUrl","AppUrl",2)}}},[t._v("复制地址")])],1)])],1):"manage"==t.setType?i("div",{staticClass:"Box UserInfo"},[i("van-cell",{staticClass:"Head",attrs:{title:"头像",size:"large","is-link":""},on:{click:function(e){t.showPopup=!0,t.popupType="header"}}},[i("div",{staticClass:"head-img"},[t.GroupInfo.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+t.GroupInfo.header,width:"100%"}}):i("b",[t._v(t._s(t.GroupInfo.group_name.slice(0,2)))])])]),i("van-cell",{attrs:{title:"群名称",value:t.GroupInfo.group_name,size:"large","is-link":""},on:{click:function(e){t.showPopup=!0,t.popupType="name"}}}),i("van-cell",{attrs:{title:"密群号",value:t.GroupInfo.gid,size:"large"}},[i("van-icon",{staticClass:"van-cell__right-icon",attrs:{slot:"right-icon",name:"none"},slot:"right-icon"})],1),1==t.GroupInfo.user_type?i("van-cell",{staticClass:"mt20",attrs:{title:"管理员",size:"large","is-link":""},on:{click:function(e){t.showPopup=!0,t.popupType="manage"}}}):t._e(),i("van-cell",{attrs:{title:"成员禁言",size:"large","is-link":""},on:{click:function(e){t.showPopup=!0,t.popupType="notsay"}}})],1):"privacy"==t.setType?i("div",{staticClass:"UserInfo"},[i("van-cell-group",[i("van-switch-cell",{attrs:{title:"加群需要验证",size:"26px","active-color":"#44db5e"},on:{change:function(e){return t.onChangeSwitch("validate")}},model:{value:t.isValidate,callback:function(e){t.isValidate=e},expression:"isValidate"}}),i("van-switch-cell",{attrs:{title:"允许发送名片",size:"26px","active-color":"#44db5e"},on:{change:function(e){return t.onChangeSwitch("card")}},model:{value:t.isCard,callback:function(e){t.isCard=e},expression:"isCard"}}),i("van-switch-cell",{attrs:{title:"允许通过群号找到群",size:"26px","active-color":"#44db5e"},on:{change:function(e){return t.onChangeSwitch("gid")}},model:{value:t.isGid,callback:function(e){t.isGid=e},expression:"isGid"}}),i("van-switch-cell",{attrs:{title:"允许成员邀请好友加群",size:"26px","active-color":"#44db5e"},on:{change:function(e){return t.onChangeSwitch("invite")}},model:{value:t.isInvite,callback:function(e){t.isInvite=e},expression:"isInvite"}}),i("van-switch-cell",{attrs:{title:"允许查看群成员信息",size:"26px","active-color":"#44db5e"},on:{change:function(e){return t.onChangeSwitch("info")}},model:{value:t.isInfo,callback:function(e){t.isInfo=e},expression:"isInfo"}})],1)],1):t._e(),i("van-popup",{staticClass:"SetPopup",attrs:{position:"bottom",overlay:!1,"lock-scroll":!1},on:{opened:t.initPopup},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[t.popupType?i("SetInfo",{ref:"SetInfo",attrs:{gid:t.GroupInfo.id,popupType:t.popupType},on:{triggerPopup:t.triggerPopup}}):t._e()],1)],1)},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("使用密聊扫一扫功能"),i("br"),t._v("扫描上面的二维码图案，加入密群")])}],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SetBox"},[i("van-nav-bar",{attrs:{title:"设置"+("pass"==t.popupType?"群密码":"header"==t.popupType?"群头像":"name"==t.popupType?"群名称":"manage"==t.popupType?"群管理员":"notsay"==t.popupType?"成员禁言":"notice"==t.popupType?"群公告":"introduce"==t.popupType?"群介绍":"我在本群的昵称"),"left-text":"取消","right-text":"完成"+(t.checkList.length?"("+t.checkList.length+")":""),border:!1},on:{"click-left":t.onClickCancel,"click-right":t.onClickConfirm}}),"header"==t.popupType?i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("选择头像")]),i("div",{ref:"Scroll",staticClass:"Scroll-Wrap"},[i("div",{staticClass:"Scroll-Con"},[i("van-radio-group",{staticClass:"HeadList",model:{value:t.groupInfo.header,callback:function(e){t.$set(t.groupInfo,"header",e)},expression:"groupInfo.header"}},t._l(t.headData,(function(e){return i("van-cell",{key:e,attrs:{border:!1,clickable:""},on:{click:function(i){t.groupInfo.header=e}}},[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+e}}),i("van-radio",{attrs:{name:e}})],1)})),1)],1)])]):"pass"==t.popupType?i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("群密码")]),i("van-password-input",{attrs:{value:t.groupPass,info:"请输入群密码 6 位数字"},on:{focus:function(e){t.showKeyboard=!0}}}),i("van-number-keyboard",{attrs:{show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1):"name"==t.popupType?i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("新群名称")]),i("van-field",{attrs:{placeholder:"请输入群名称"},model:{value:t.groupInfo.group_name,callback:function(e){t.$set(t.groupInfo,"group_name",e)},expression:"groupInfo.group_name"}})],1):"manage"==t.popupType||"notsay"==t.popupType?i("div",{staticClass:"SetBox"},[i("van-search",{staticClass:"SearchFriend",attrs:{placeholder:"搜索"},on:{input:t.onSearch},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),i("van-cell-group",{staticClass:"AllMember mb10"},["notsay"==t.popupType?i("van-switch-cell",{attrs:{title:"全员禁言",size:"26px","active-color":"#44db5e"},on:{change:t.onChangeSwitch},model:{value:t.isNotSay,callback:function(e){t.isNotSay=e},expression:"isNotSay"}}):t._e()],1),i("div",{ref:"Scroll",staticClass:"Scroll-Wrap"},[i("div",{staticClass:"Scroll-Con"},[i("van-checkbox-group",{staticClass:"FriendList",model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.searchList,(function(e,s){return i("van-cell",{key:s,attrs:{clickable:"",title:e.nickname?e.nickname:"昵称未设置"},on:{click:function(e){return t.toggleCheckbox(s)}}},[i("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"mr15",attrs:{slot:"icon",name:e.id,"checked-color":"#06bf04"},slot:"icon"}),i("div",{staticClass:"head",attrs:{slot:"icon"},slot:"icon"},[e.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/miliao/images/headimg/"+e.header}}):i("b",[t._v(t._s(e.nickname?e.nickname.slice(0,2):"昵称"))])])],1)})),1),t.memberList&&!t.memberList.length?i("MiNoContent",{attrs:{msg:["你没有任何成员可以选择"]}}):t._e()],1)])],1):"notice"==t.popupType?i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("群公告")]),i("van-field",{attrs:{type:"textarea",placeholder:"请输入群公告",rows:"5",autosize:{maxHeight:220},size:"large"},model:{value:t.groupInfo.notice,callback:function(e){t.$set(t.groupInfo,"notice",e)},expression:"groupInfo.notice"}})],1):"introduce"==t.popupType?i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("群介绍")]),i("van-field",{attrs:{type:"textarea",placeholder:"请输入群介绍",rows:"5",autosize:{maxHeight:220},size:"large"},model:{value:t.groupInfo.introduce,callback:function(e){t.$set(t.groupInfo,"introduce",e)},expression:"groupInfo.introduce"}})],1):"nickname"==t.popupType?i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("我在本群的昵称")]),i("van-field",{attrs:{placeholder:"请输入你在本群的昵称"},model:{value:t.groupInfo.nickname,callback:function(e){t.$set(t.groupInfo,"nickname",e)},expression:"groupInfo.nickname"}})],1):t._e()],1)},C=[],_=i("9bf4"),y=_["a"],S=Object(l["a"])(y,I,C,!1,null,null,null),$=S.exports,w={name:"GroupSetting",components:{SetInfo:$},props:{setType:{type:String,default:""},gid:{type:Number,default:0}},data(){return{showPopup:!1,popupType:"",isValidate:!1,isCard:!1,isGid:!1,isInvite:!1,isInfo:!1}},computed:{},watch:{},created(){this.isValidate=!!this.GroupInfo.is_f_d,this.isCard=!!this.GroupInfo.is_h_d,this.isGid=!!this.GroupInfo.is_q_d,this.isInvite=!!this.GroupInfo.is_g_d,this.isInfo=!!this.GroupInfo.is_s_d},mounted(){},activated(){},destroyed(){},methods:{saveCode(){Html2Canvas(document.getElementById("QRCode")).then(t=>{if(window.plus){var e=0,i=t=>{e+=1;var i=new plus.nativeObj.Bitmap;i.loadBase64Data(t,()=>{i.save("_doc/密群推广二维码"+e+".jpg",{overwrite:!0,format:"jpg"},t=>{plus.gallery.save(t.target,t=>{this.$MiDialog.Toast("保存二维码成功")},t=>{this.$MiDialog.Toast("保存二维码失败")})},t=>{this.$MiDialog.Toast("保存二维码失败")}),setTimeout((function(){i.recycle()}),1e3)},t=>{this.$MiDialog.Toast("保存海报失败")})};this.$MiDialog.Alert("保存二维码到手机<br>如不成功请多试几次或截屏保存",()=>{i(t.toDataURL().replace("data:image/png;base64,",""))})}else this.downCanvas(t.toDataURL())})},downCanvas(t){var e=document.createElement("a"),i=new MouseEvent("click");e.download="密群推广二维码",e.href=t,e.dispatchEvent(i)},onClickBack(){this.$emit("onCloseSet")},triggerPopup(t){this.showPopup=!1,this.popupType="",t&&this.$MiModel.GetGroupsInfo(this.gid)},initPopup(){"header"==this.popupType&&this.$refs.SetInfo.initScrollWrap()},onChangeSwitch(t){var e={gid:this.GroupInfo.id};"validate"==t&&(e.is_f_d=this.isValidate?1:0),"card"==t&&(e.is_h_d=this.isCard?1:0),"gid"==t&&(e.is_q_d=this.isGid?1:0),"invite"==t&&(e.is_g_d=this.isInvite?1:0),"info"==t&&(e.is_s_d=this.isInfo?1:0),this.$MiModel.SetGroupsInfo(e,e=>{e||("validate"==t&&(this.isValidate=!!this.GroupInfo.is_f_d),"card"==t&&(this.isCard=!!this.GroupInfo.is_h_d),"gid"==t&&(this.isGid=!!this.GroupInfo.is_q_d),"invite"==t&&(this.isInvite=!!this.GroupInfo.is_g_d),"info"==t&&(this.isInfo=!!this.GroupInfo.is_s_d))})}}},x=w,T=(i("7947"),Object(l["a"])(x,b,k,!1,null,"054b6937",null)),L=T.exports,M={name:"GroupChatSet",components:{InviteMember:h,RemoveMember:v,GroupSetting:L,SetInfo:$},props:{},data(){return{isRoom:Number(localStorage["isRoom"]),groupInfo:{group_name:""},memberList:"",groupMember:"",groupId:Number(this.$route.query.id),isVoice:!1,isTop:!1,showPopup:!1,popupType:"",showSet:!1,setType:"",animateType:"open",showBtn:"all"}},computed:{},watch:{},created(){this.$MiModel.GetGroupsInfo(this.groupId,t=>{this.groupInfo=t.info,this.isVoice=!!t.info.is_v_d,this.isTop=!!t.info.is_z_d,this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el),this.ScrollWrap.refresh()})}),this.getGroupsMember()},mounted(){this.$MiInitial.InitScrollWrap(this.$el),this.ScrollWrap=new this.$MiBScroll(this.$refs.Scroll,{click:!0})},activated(){},destroyed(){},methods:{onClickBack(){this.$router.go(-1),this.$route.params.isBack=!0},onChangeSwitch(t){var e={gid:this.groupInfo.id};"voice"==t&&(e.is_v_d=this.isVoice?1:0),"top"==t&&(e.is_z_d=this.isTop?1:0),this.$MiModel.SetGroupsInfo(e,e=>{e||("voice"==t&&(this.isVoice=!!this.FriendInfo.is_v_d),"top"==t&&(this.isTop=!!this.FriendInfo.is_z_d))})},clearChat(){this.$MiDialog.Confirm("确认清空聊天记录？",()=>{this.$MiModel.SetGroupsInfo({state:14,gid:this.groupInfo.id})})},showMember(t){this.showBtn=t,this.groupMember="all"==t?this.memberList:this.memberList.slice(0,21)},getGroupsMember(){this.$MiModel.GroupsMember(this.groupId,t=>{this.memberList=t.list||[],this.memberList.length>22?this.groupMember=this.memberList.slice(0,21):this.groupMember=this.memberList,this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el),this.ScrollWrap.refresh()})})},triggerPopup(t){this.showPopup=!1,t&&("invite"==this.popupType||"remove"==this.popupType?this.getGroupsMember():this.$MiModel.GetGroupsInfo(this.groupId,t=>{this.groupInfo=t.info})),this.popupType=""},onCloseSet(){this.animateType="close",this.showSet=!1,"manage"==this.setType&&(this.groupInfo=this.GroupInfo,this.getGroupsMember()),this.setType=""},afterEnter(t){"close"==this.animateType&&(this.$MiInitial.InitScrollWrap(this.$el),this.ScrollWrap=new this.$MiBScroll(this.$refs.Scroll,{click:!0}))},openFriendInfo(t,e){1!=this.groupInfo.user_type&&4!=this.groupInfo.user_type||e==localStorage["userUid"]||this.$router.push({name:"friendInfo",query:{mid:t}}),this.groupInfo.is_s_d&&e!=localStorage["userUid"]&&this.$router.push({name:"friendInfo",query:{mid:t}})},openGroupInfo(t){1!=this.groupInfo.user_type&&4!=this.groupInfo.user_type||(this.showPopup=!0,this.popupType=t)},groupState(t){var e={gid:this.groupInfo.id},i="";"disband"==t&&(i="确定要解散该密群？",e.disbanded_groups=1),"quit"==t&&(i="退出后不会再接收此群的消息",e.quit_groups=1),this.$MiDialog.Confirm(i,()=>{this.$MiModel.SetGroupsInfo(e,t=>{t&&(localStorage["Home_Active"]="group",this.$router.replace("/miliao"))})},"温馨提示")}}},G=M,j=Object(l["a"])(G,s,o,!1,null,null,null);e["default"]=j.exports},"490a":function(t,e,i){"use strict";(function(t){e["a"]={name:"InviteMember",components:{},props:{gid:{type:Number,default:0}},data(){return{friendList:"",searchList:[],searchVal:"",groupArr:[],checkList:[],newcheckList:[]}},computed:{},watch:{},created(){this.$MiModel.FriendsList({gid:this.gid},e=>{var i=e.list||[];this.friendList=[],i.forEach(t=>{1==t.is_g_d&&this.friendList.push(t),1==t.is_g_d&&1==t.is_groups&&(this.checkList.push(t.fid),this.newcheckList.push(t.fid))}),this.searchList=this.friendList,this.$nextTick(()=>{this.$MiInitial.InitScrollWrap(this.$el,t(".SearchFriend").outerHeight(!0))})})},mounted(){this.ScrollWrap=new this.$MiBScroll(this.$refs.Scroll,{click:!0})},activated(){},destroyed(){},methods:{onClickCancel(){this.$emit("triggerPopup")},onClickConfirm(){this.groupArr.length?this.$MiModel.InvitationJoinGroups(this.gid,this.groupArr.join(),t=>{this.$emit("triggerPopup",!0)}):this.$MiDialog.Alert("请选择好友")},onSearch(){this.searchList=[],this.friendList.forEach(t=>{t.fname.indexOf(this.searchVal)>-1&&(this.searchList.push(t),this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el)}))})},toggleCheckbox(t){this.$refs.checkboxes[t].disabled||this.$refs.checkboxes[t].toggle()},changeCheckbox(){this.groupArr=[],this.newcheckList.forEach(t=>{this.checkList.indexOf(t)<0&&this.groupArr.push(t)})}}}}).call(this,i("1157"))},7947:function(t,e,i){"use strict";var s=i("08e9"),o=i.n(s);o.a},"9bf4":function(t,e,i){"use strict";(function(t){e["a"]={name:"SetInfo",components:{},props:{popupType:{type:String,default:""},gid:{type:Number,default:0}},data(){return{groupPass:"",showKeyboard:!1,groupInfo:JSON.parse(localStorage["GroupInfo"]),headData:["0A472675E5E5AF50.jpg","5C5A53823438F2CD.jpg","6a177290f93a82c9.jpg","6f1e9c6698d41c02.jpg","7debbc56b4b1e837.jpg","9A9C9E1A719CE536.jpg","072ad9cd79456bcf.jpg","81e8ebc3eedde4e1.jpg","775f5994a0568972.jpg","831CA133362DE10D.jpg","1362fa92410f5466.jpg","367498B6A748D910.jpg","a6e6f42b144b2954.jpg","af43698834aecd89.jpg","b6a3d95c75208113.jpg","be83d242f47468f2.jpg","C7BB5088540C8040.jpg","C6021F3486D2B2DB.jpg","EED50A5799E76E58.jpg","F0E57CF931E45118.jpg","1B6A214FF62BD91F.jpg","1EF6FC3ACCBCD762.jpg","02c5f9ba752fdfcf.jpg","2ccae7bb8c67d793.jpg","4da6df95555c869a.jpg","4eda6ad3f56b4f17.jpg","6F1A99A3D02A6DEC.jpg","08cbc7e637921f36.jpg","9f42ce18775ccc25.jpg","82c23ac3f9aacda5.jpg","779d89d0bf5536a7.jpg","3154a95056dea33d.jpg","3578E1EB410B49C7.jpg","84238fb2538d1899.jpg","274692371a941235.jpg","b1f0c081f76388a5.jpg","C707188A6E10AED4.jpg","d86c69601267c45a.jpg","d9452aa12dee4037.jpg","f9276d61473ac65d.jpg"],memberList:"",searchList:[],searchVal:"",checkList:[],isNotSay:!1}},computed:{},watch:{},created(){"manage"!=this.popupType&&"notsay"!=this.popupType||this.$MiModel.GroupsMember(this.gid,e=>{"manage"==this.popupType&&(this.memberList=e.list?e.list.filter(t=>1!=t.user_type):[],this.memberList.forEach(t=>{4==t.user_type&&this.checkList.push(t.id)})),"notsay"==this.popupType&&(this.memberList=e.list?e.list.filter(t=>1!=t.user_type&&4!=t.user_type):[],this.memberList.forEach(t=>{6==t.state&&this.checkList.push(t.id)})),this.searchList=this.memberList,this.$nextTick(()=>{this.$MiInitial.InitScrollWrap(this.$el,t(".SearchFriend").outerHeight(!0)+(t(".AllMember").outerHeight(!0)||0))})})},mounted(){"manage"!=this.popupType&&"notsay"!=this.popupType||(this.ScrollWrap=new this.$MiBScroll(this.$refs.Scroll,{click:!0}))},activated(){},destroyed(){},methods:{onClickCancel(){this.$emit("triggerPopup"),this.groupInfo=JSON.parse(localStorage["GroupInfo"]),this.groupPass=""},onClickConfirm(){var t="";switch(this.popupType){case"pass":if(this.groupPass.length<6)return void this.$toast("群密码最少6位数字");t=this.groupPass?{password:this.groupPass}:"";break;case"header":t=this.groupInfo.header?{header:this.groupInfo.header}:"";break;case"name":t=this.groupInfo.group_name?{group_name:this.groupInfo.group_name}:"";break;case"manage":t={setGroupAdmin:this.checkList.length?this.checkList.join():"none"};break;case"notsay":t={notsay_arr:this.isNotSay?"all":this.checkList.length?this.checkList.join():"none"};break;case"notice":t=this.groupInfo.notice?{notice:this.groupInfo.notice}:"";break;case"introduce":t=this.groupInfo.introduce?{introduce:this.groupInfo.introduce}:"";break;case"nickname":t=this.groupInfo.nickname?{nickname:this.groupInfo.nickname}:"";break}t?(t.gid=this.gid,this.$MiModel.SetGroupsInfo(t,t=>{"manage"==this.popupType||"notsay"==this.popupType?this.$emit("triggerPopup"):"pass"==this.popupType?(this.groupPass="",this.$emit("triggerPopup")):this.$emit("triggerPopup",!0)})):this.$emit("triggerPopup")},onSearch(){this.searchList=[],this.memberList.forEach(t=>{t.nickname.indexOf(this.searchVal)>-1&&this.searchList.push(t)}),this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el)})},toggleCheckbox(t){this.$refs.checkboxes[t].toggle(),this.checkList.length<this.memberList.length&&(this.isNotSay=!1),this.checkList.length==this.memberList.length&&(this.isNotSay=!0)},onChangeSwitch(t){t?(this.searchVal="",this.onSearch(),this.searchList.forEach(t=>{this.checkList.push(t.id)})):this.checkList=[]},initScrollWrap(){this.$MiInitial.InitScrollWrap(this.$el,t(".FormBox .title").outerHeight()),this.ScrollWrap=new this.$MiBScroll(this.$refs.Scroll,{click:!0})},onInput(t){this.groupPass=(this.groupPass+t).slice(0,6),6==this.groupPass.length&&(this.showKeyboard=!1)},onDelete(){this.groupPass=this.groupPass.slice(0,this.groupPass.length-1)}}}}).call(this,i("1157"))}}]);