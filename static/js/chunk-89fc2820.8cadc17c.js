(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89fc2820"],{"962e":function(t,e,n){},"978d":function(t,e,n){"use strict";var i=n("962e"),r=n.n(i);r.a},e2f8:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Site PageBox"},[n("van-nav-bar",{attrs:{fixed:"",border:!1,title:t.$t("serviceCenter[0]"),"left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("div",{staticClass:"ScrollBox"},[n("van-cell",{staticClass:"VipService",attrs:{title:t.$t("serviceCenter[1]"),label:t.$t("serviceCenter[2]")},on:{click:function(e){return t.openKefu(t.InitData.setting.service_url)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/icon/msg.png",width:"50"}})]},proxy:!0}])}),t.InitData.serviceList&&t.InitData.serviceList.length?n("van-cell-group",{attrs:{title:t.$t("serviceCenter[3]")}},[n("van-grid",{attrs:{"column-num":3,gutter:15,border:!1,"icon-size":"36"}},t._l(t.InitData.serviceList,(function(e){return n("van-grid-item",{key:e.id,attrs:{text:e.title},on:{click:function(n){return t.openService(e.url)}}})})),1)],1):t._e(),t.InitData.helpList&&t.InitData.helpList.length?n("van-cell-group",{attrs:{title:t.$t("help[0]")}},t._l(t.InitData.helpList,(function(t){return n("van-cell",{key:t.id,attrs:{title:t.title,"is-link":"",to:"/article/help/"+t.id}})})),1):t._e()],1)],1)},r=[],a={name:"ServiceCenter",components:{},props:[],data(){return{}},computed:{},watch:{},created(){},mounted(){},activated(){},destroyed(){},methods:{openService(t){const e=t.split(",");this.$Util.OpenUrl(e[this.getRandom(e.length)])},getRandom(t){return Math.floor(Math.random()*t+0)},openKefu(t){window.location.href=t}}},c=a,s=(n("978d"),n("2877")),o=Object(s["a"])(c,i,r,!1,null,"c8d75fe6",null);e["default"]=o.exports}}]);