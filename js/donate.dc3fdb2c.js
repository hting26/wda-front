(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["donate"],{"374c":function(t,e,r){"use strict";r("b019")},8125:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{id:"donate"}},[s("h3",{staticClass:"pageTitle"},[t._v("物資募集 Donate")]),s("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],attrs:{icon:"caret-down",variant:"accent"}}),s("b-collapse",{attrs:{id:"collapse-3",visible:""}},[s("div",{staticClass:"pageText"},[t._v("瑪莉愛狗協會是非營利的救援組織，已經救援了數千隻狗找到幸福的家。"),s("br"),t._v("而且也努力要救更多的流浪狗，不僅為了替牠們找到可以遮風避雨的家，也要牠們過更好的生活!"),s("br"),t._v("然而，要持續又長期的救援， 需要一連串的費用與龐大的醫療支出。"),s("br"),t._v("我們需要大眾的援助，也需要募集每個月所需要的飼料、蚤不到與犬心寶等等狗兒專用的物品，來維持協會的正常運作，做更多的救援。我們竭誠歡迎也期盼您們都夠即時捐出善款，來幫助我們所需要的醫療與每月的物品清單!"),s("br"),t._v("請大家能夠幫忙宣揚，投入我們的行列，也期待更多的人可以共襄盛舉來完成這浩大工程，感謝您!")])]),s("b-row",{staticClass:"mt-5"},t._l(t.products,(function(t){return s("b-col",{key:t._id,staticClass:"my-2",attrs:{cols:"12",sm:"6",lg:"3"}},[s("ProductCard",{attrs:{product:t}})],1)})),1),[s("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{attrs:{src:r("ba9a")}})]),s("swiper-slide",[s("img",{attrs:{src:r("efd1")}})]),s("swiper-slide",[s("img",{attrs:{src:r("ea61")}})]),s("swiper-slide",[s("img",{attrs:{src:r("9a03")}})]),s("swiper-slide",[s("img",{attrs:{src:r("f2fc")}})]),s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),s("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)]],2)},i=[],a=r("1da1"),n=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"card-product",attrs:{"img-top":"","img-src":t.product.image}},[r("b-card-body",[r("b-card-title",[t._v(t._s(t.product.name))]),r("b-card-sub-title",{staticClass:"mb-2"},[t._v(t._s("$"+t.product.price))]),r("b-card-text",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.product.description))]),r("b-btn",{on:{click:t.addCart}},[t._v("加入物資籃"),r("b-icon",{staticClass:"ml-1",staticStyle:{width:"14px"},attrs:{icon:"heart"}})],1)],1)],1)}),c=[],o={props:{product:{type:Object,required:!0}},methods:{addCart:function(){this.$store.dispatch("user/addCart",{product:this.product._id,quantity:1})}}},p=o,l=(r("b22e"),r("2877")),d=Object(l["a"])(p,n,c,!1,null,null,null),u=d.exports,b=r("7212"),v=(r("a7a3"),{components:{ProductCard:u,Swiper:b["Swiper"],SwiperSlide:b["SwiperSlide"]},directives:{swiper:b["directive"]},data:function(){return{products:[],swiperOption:{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},loop:!0,autoplay:{delay:4e3,disableOninteraction:!1},breakpoints:{1200:{slidesPerView:3},768:{slidesPerView:2}}}}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products");case 3:r=e.sent,s=r.data,t.products=s.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"商品取得失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),w=v,f=(r("374c"),Object(l["a"])(w,s,i,!1,null,null,null));e["default"]=f.exports},"9a03":function(t,e,r){t.exports=r.p+"img/vo4.34924993.png"},b019:function(t,e,r){},b22e:function(t,e,r){"use strict";r("bd43")},ba9a:function(t,e,r){t.exports=r.p+"img/vo1.1c9f8992.png"},bd43:function(t,e,r){},ea61:function(t,e,r){t.exports=r.p+"img/vo3.01b79333.png"},efd1:function(t,e,r){t.exports=r.p+"img/vo2.7083d689.png"},f2fc:function(t,e,r){t.exports=r.p+"img/vo5.a4b8cfb5.png"}}]);
//# sourceMappingURL=donate.dc3fdb2c.js.map