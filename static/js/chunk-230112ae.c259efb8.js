(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-230112ae"],{"01c5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SetBox"},[i("van-nav-bar",{attrs:{title:"设置备注名","left-text":"取消","right-text":"完成",border:!1},on:{"click-left":t.onClickCancel,"click-right":t.onClickConfirm}}),i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("备注名")]),i("van-field",{attrs:{placeholder:"添加备注名"},model:{value:t.remarkNames,callback:function(e){t.remarkNames=e},expression:"remarkNames"}})],1)],1)},s=[],a={name:"Remark",components:{},props:{friendId:{type:Number,default:0},remarkName:{type:String,default:""}},data(){return{remarkNames:this.remarkName}},computed:{},watch:{},created(){},mounted(){},activated(){},destroyed(){},methods:{onClickCancel(){this.$emit("triggerPopup")},onClickConfirm(){this.$MiModel.SetFriendsInfo({id:this.friendId,memo_name:this.remarkNames},t=>{this.$MiModel.FriendsList(""),this.$emit("triggerPopup")})}}},r=a,o=i("2877"),l=Object(o["a"])(r,n,s,!1,null,null,null);e["a"]=l.exports},"3f5c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Main Background"},[i("van-nav-bar",{staticClass:"NavBar",attrs:{title:"详细信息",border:!1},on:{"click-left":t.onClickBack,"click-right":function(e){t.showMenu=!0}}},[i("img",{staticClass:"icon-left",attrs:{slot:"left",src:"https://cdn.jsdelivr.net/gh/Lateststorage/dist@main/static/miliao/icon/icon-back.svg"},slot:"left"})]),i("div",{ref:"Scroll",staticClass:"Scroll-Wrap"},[i("div",{staticClass:"Scroll-Con"},[i("div",{staticClass:"Box UserCenter"},[i("van-cell",{staticClass:"Info",class:{haveMark:t.friendInfo.memo_name},attrs:{border:!1,size:"large"}},[i("div",{staticClass:"head-img",attrs:{slot:"icon"},slot:"icon"},[t.friendInfo.header?i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Lateststorage/dist@main/static/miliao/images/headimg/"+t.friendInfo.header,width:"100%"}}):i("b",[t._v(t._s(t.friendInfo.nickname.slice(0,2)))])]),i("template",{slot:"title"},[i("span",[t._v(t._s(t.friendInfo.memo_name?t.friendInfo.memo_name:t.friendInfo.nickname))]),i("div",{staticClass:"van-cell__label"},[t._v(" 密聊号："+t._s(t.friendInfo.mid)+" "),t.friendInfo.memo_name?i("p",[t._v("昵称："+t._s(t.friendInfo.nickname))]):t._e()])])],2),t.isMsg&&t.msgList.length>0?i("div",{staticClass:"ValidateMsg"},[i("div",{staticStyle:{"max-height":"95px","margin-bottom":"5px",overflow:"hidden"}},[i("ul",{attrs:{id:"ReplyList"}},t._l(t.msgList,(function(e,n){return i("li",{key:n},[t._v(t._s(0==e.is_send?e.title?e.title:"昵称未设置":"我")+"："+t._s(e.content))])})),0)]),i("van-button",{attrs:{size:"small"},on:{click:function(e){t.showReply=!0}}},[t._v("回复")])],1):t._e(),1==t.friendInfo.is_friends||t.friendId&&1==t.friendInfo.state?i("van-cell",{staticClass:"mt20",attrs:{title:"设置备注",size:"large","is-link":""},on:{click:function(e){t.showPopup=!0,t.popupType="remark"}}}):t._e(),i("van-cell",{staticClass:"mt20",attrs:{title:"性别",value:t.friendInfo.sex?t.friendInfo.sex:"保密",size:"large"}}),i("van-cell",{attrs:{title:"地区",value:t.friendInfo.area?t.friendInfo.area:"未设置",size:"large"}}),t.friendInfo.autograph?i("van-cell",{staticClass:"Autograph",attrs:{title:"个性签名",label:t.friendInfo.autograph}}):t._e(),t.friendId?i("div",[3==t.friendInfo.state&&2==t.friendInfo.new_type?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"primary"},on:{click:function(e){return t.setFriendValidate(3)}}},[t._v("通过验证")]):t._e(),3==t.friendInfo.state&&2==t.friendInfo.new_type?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"default"},on:{click:function(e){return t.setFriendValidate(4)}}},[t._v("拒绝好友")]):t._e(),1==t.friendInfo.new_type||5==t.friendInfo.new_type||6==t.friendInfo.new_type||7==t.friendInfo.new_type?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"primary"},on:{click:function(e){t.showPopup=!0,t.popupType="validate"}}},[t._v("请求加为好友")]):t._e(),3!=t.friendInfo.state&&4!=t.friendInfo.state&&7!=t.friendInfo.new_type?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"primary"},on:{click:function(e){return t.sendMsg(t.friendInfo.id)}}},[t._v("发送消息")]):t._e(),1==t.friendInfo.state||8==t.friendInfo.new_type?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"danger"},on:{click:t.deleteFriend}},[t._v("删除好友")]):t._e()],1):i("div",[1==t.friendInfo.is_friends?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"primary"},on:{click:function(e){return t.sendMsg(t.friendInfo.id)}}},[t._v("发送消息")]):i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"primary"},on:{click:function(e){t.showPopup=!0,t.popupType="validate"}}},[t._v("请求加为好友")]),1==t.friendInfo.is_friends?i("van-button",{staticClass:"PrimaryBtn",attrs:{type:"danger"},on:{click:t.deleteFriend}},[t._v("删除好友")]):t._e()],1)],1)])]),i("van-popup",{staticClass:"SetPopup",attrs:{position:"bottom",overlay:!1},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},["validate"==t.popupType?i("SendValidate",{attrs:{friendMid:t.friendInfo.mid},on:{triggerPopup:t.triggerPopup}}):i("SetRemark",{attrs:{friendId:t.friendInfo.id,remarkName:t.friendInfo.memo_name?t.friendInfo.memo_name:t.friendInfo.nickname},on:{triggerPopup:t.triggerPopup}})],1),i("van-dialog",{attrs:{"class-name":"D-confirm",title:"回复","show-cancel-button":"","close-on-click-overlay":""},on:{cancel:function(e){t.replyCon=""},confirm:t.sendReply},model:{value:t.showReply,callback:function(e){t.showReply=e},expression:"showReply"}},[i("van-field",{staticClass:"Border",attrs:{type:"textarea",rows:"2"},model:{value:t.replyCon,callback:function(e){t.replyCon=e},expression:"replyCon"}})],1)],1)},s=[],a=i("b80c"),r=a["a"],o=i("2877"),l=Object(o["a"])(r,n,s,!1,null,null,null);e["default"]=l.exports},b80c:function(t,e,i){"use strict";(function(t){var n=i("c856"),s=i("01c5");e["a"]={name:"FriendInfo",components:{SendValidate:n["a"],SetRemark:s["a"]},props:{},data(){return{friendInfo:{nickname:""},showPopup:!1,popupType:"validate",showMenu:!1,friendMid:this.$route.query.mid,friendId:this.$route.query.id,isMsg:this.$route.query.msg||!1,msgList:[],replyCon:"",showReply:!1}},computed:{},watch:{},created(){this.friendId?this.getFriendsInfo():this.getSoMi(),this.isMsg&&this.$MiModel.GetRecordList({id:this.friendId,chat_type:3},t=>{1==t.code&&(this.msgList=this.$MiUtil.SortBy(t.list,"id"),this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el)}))})},mounted(){this.$MiInitial.InitScrollWrap(this.$el),this.ScrollWrap=new this.$MiBScroll(this.$refs.Scroll,{click:!0})},activated(){},destroyed(){},methods:{onClickBack(){localStorage["MiLogin"]?this.$router.go(-1):this.$router.push("/"),this.$route.params.isBack=!0},getFriendsInfo(){this.$MiModel.GetFriendsInfo(this.friendId,t=>{this.friendInfo=t.info,this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el)})})},getSoMi(){this.$MiModel.SoMi(this.friendMid,t=>{1==t.code&&(this.friendInfo=t.info,this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el)}))})},triggerPopup(){this.showPopup=!1,this.friendId?this.getFriendsInfo():this.getSoMi()},deleteFriend(){this.$MiDialog.Confirm("确定要删除该好友吗？",()=>{this.setFriendValidate(5)})},setFriendValidate(t){this.$MiModel.SetFriendsInfo({id:this.friendInfo.id,state:t},e=>{5==t?(localStorage["Home_Active"]="contact",this.$router.replace("/miliao")):this.getFriendsInfo()})},sendReply(){this.$MiModel.SendRecord({id:this.friendId,chat_type:3,content:this.replyCon},e=>{1==e.code?(t("#ReplyList").append("<li>我："+this.replyCon+"</li>"),this.$nextTick(()=>{this.$MiInitial.InitScroll(this.$el)})):this.$toast({message:e.code_dec,position:"bottom"}),this.replyCon=""})},sendMsg(t){this.$router.push({name:"sendMsg",query:{id:t,chat_type:1}})}}}}).call(this,i("1157"))},c856:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SetBox"},[i("van-nav-bar",{attrs:{title:"朋友验证","left-text":"取消","right-text":"发送",border:!1},on:{"click-left":t.onClickCancel,"click-right":t.onClickConfirm}}),i("div",{staticClass:"FormBox"},[i("div",{staticClass:"title"},[t._v("你需要发送验证申请，等对方通过")]),i("van-field",{attrs:{placeholder:"请输入验证申请内容"},model:{value:t.validateCon,callback:function(e){t.validateCon=e},expression:"validateCon"}})],1)],1)},s=[],a={name:"Validate",components:{},props:{validateType:{type:String,default:""},friendMid:{type:String,default:""}},data(){return{validateCon:"我是 "+localStorage["userNickName"]}},computed:{},watch:{},created(){},mounted(){},activated(){},destroyed(){},methods:{onClickCancel(){this.$emit("triggerPopup")},onClickConfirm(){this.$MiModel.AddFriends(this.friendMid,this.validateCon,t=>{1==t.code?(this.$emit("triggerPopup"),this.$MiDialog.Confirm(t.code_dec,()=>{this.$router.push({name:"sendMsg",query:{id:t.id,chat_type:1}})},"回复")):(this.$emit("triggerPopup"),this.$MiDialog.Alert(t.code_dec))})}}},r=a,o=i("2877"),l=Object(o["a"])(r,n,s,!1,null,null,null);e["a"]=l.exports}}]);