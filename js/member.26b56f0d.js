(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member"],{"0f84":function(e,t,r){"use strict";r("5667")},"12cc":function(e,t,r){},"166d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"memberData"}},[r("b-container",[r("b-row",[r("b-table-simple",[r("b-tr",[e._v("帳號"),r("b-td",[e._v("帳號")])],1),r("b-tr",[e._v("帳號"),r("b-td",[e._v("帳號")])],1),r("b-tr",[e._v("帳號"),r("b-td",[e._v("帳號")])],1)],1)],1)],1)],1)},n=[],s=(r("0f84"),r("2877")),c={},i=Object(s["a"])(c,a,n,!1,null,null,null);t["default"]=i.exports},1973:function(e,t,r){"use strict";r("b8ea")},5314:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"orders"}},[r("b-table",{staticClass:"text-center",attrs:{items:e.orders,fields:e.fields,striped:"",borderless:""},scopedSlots:e._u([{key:"cell(date)",fn:function(t){return[e._v(e._s(new Date(t.item.date).toLocaleString("zh-tw")))]}},{key:"cell(products)",fn:function(t){return[r("ul",e._l(t.item.products,(function(t){return r("li",{key:t._id},[e._v(e._s(t.product.name)+" x "+e._s(t.quantity))])})),0)]}}])})],1)},n=[],s=r("1da1"),c=(r("96cf"),{data:function(){return{orders:[],fields:[{key:"_id",label:"單號"},{key:"date",label:"日期"},{key:"products",label:"商品"}]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/orders/me",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,a=r.data,e.orders=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),i=c,o=r("2877"),l=Object(o["a"])(i,a,n,!1,null,null,null);t["default"]=l.exports},5667:function(e,t,r){},"621f":function(e,t,r){"use strict";r("12cc")},"80d2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Member"}},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-nav",{attrs:{justified:"",align:"center"}},[r("b-nav-item",{attrs:{to:"/member/data",exact:"","exact-active-class":"active"}},[e._v("會員資料")]),r("b-nav-item",{attrs:{to:"/member/orders",exact:"","exact-active-class":"active"}},[e._v("訂單資料")]),r("b-nav-item",{attrs:{to:"/member/adoption",exact:"","exact-active-class":"active"}},[e._v("領養資料")])],1)],1),r("b-col",{attrs:{cols:"12"}},[r("router-view",{staticClass:"router"})],1)],1)],1)],1)},n=[],s=(r("621f"),r("2877")),c={},i=Object(s["a"])(c,a,n,!1,null,null,null);t["default"]=i.exports},b8ea:function(e,t,r){},dfcc:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"memberAdoptions"}},[r("b-table",{staticClass:"text-center",attrs:{items:e.adoptions,fields:e.fields,striped:"",borderless:""},scopedSlots:e._u([{key:"cell(date)",fn:function(t){return[e._v(e._s(new Date(t.item.date).toLocaleString("zh-tw")))]}}])})],1)},n=[],s=r("1da1"),c=(r("96cf"),{data:function(){return{adoptions:[],fields:[{key:"dog.name",label:"領養犬名"},{key:"date",label:"申請日期"},{key:"_id",label:"申請編號"}]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/adoptions/me",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,a=r.data,e.adoptions=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),i=c,o=(r("1973"),r("2877")),l=Object(o["a"])(i,a,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=member.26b56f0d.js.map