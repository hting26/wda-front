(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["donate"],{"374c":function(t,e,r){"use strict";r("b019")},8125:function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"donate"}},[r("h3",{staticClass:"pageTitle"},[t._v("物資募集")]),r("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],attrs:{icon:"caret-down",variant:"accent"}}),r("b-collapse",{attrs:{id:"collapse-3",visible:""}},[r("div",{staticClass:"pageText"},[t._v("瑪莉愛狗協會是非營利的救援組織，已經救援了數千隻狗找到幸福的家。"),r("br"),t._v("而且也努力要救更多的流浪狗，不僅為了替牠們找到可以遮風避雨的家，也要牠們過更好的生活!"),r("br"),t._v("然而，要持續又長期的救援， 需要一連串的費用與龐大的醫療支出。"),r("br"),t._v("我們需要大眾的援助，也需要募集每個月所需要的飼料、蚤不到與犬心寶等等狗兒專用的物品，來維持協會的正常運作，做更多的救援。我們竭誠歡迎也期盼您們都夠即時捐出善款，來幫助我們所需要的醫療與每月的物品清單!"),r("br"),t._v("請大家能夠幫忙宣揚，投入我們的行列，也期待更多的人可以共襄盛舉來完成這浩大工程，感謝您!")])]),r("b-row",{staticClass:"mt-5"},t._l(t.products,(function(t){return r("b-col",{key:t._id,staticClass:"my-2",attrs:{cols:"12",sm:"6",lg:"3"}},[r("ProductCard",{attrs:{product:t}})],1)})),1)],1)},a=[],s=r("1da1"),n=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"card-product",attrs:{"img-top":"","img-src":t.product.image}},[r("b-card-body",[r("b-card-title",[t._v(t._s(t.product.name))]),r("b-card-sub-title",{staticClass:"mb-2"},[t._v(t._s("$"+t.product.price))]),r("b-card-text",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.product.description))]),r("b-btn",{on:{click:t.addCart}},[t._v("加入物資籃"),r("b-icon",{staticClass:"ml-1",staticStyle:{width:"14px"},attrs:{icon:"heart"}})],1)],1)],1)}),i=[],o={props:{product:{type:Object,required:!0}},methods:{addCart:function(){this.$store.dispatch("user/addCart",{product:this.product._id,quantity:1})}}},d=o,u=(r("b22e"),r("2877")),l=Object(u["a"])(d,n,i,!1,null,null,null),p=l.exports,b={components:{ProductCard:p},data:function(){return{products:[]}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products");case 3:r=e.sent,c=r.data,t.products=c.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"商品取得失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},v=b,_=(r("374c"),Object(u["a"])(v,c,a,!1,null,null,null));e["default"]=_.exports},b019:function(t,e,r){},b22e:function(t,e,r){"use strict";r("bd43")},bd43:function(t,e,r){}}]);
//# sourceMappingURL=donate.470ab8a0.js.map