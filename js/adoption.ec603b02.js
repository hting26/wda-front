(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adoption"],{"04a8":function(t,e,r){"use strict";r("7198")},5178:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"donate"}},[r("h3",{staticClass:"pageTitle"},[t._v("領養")]),r("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],attrs:{icon:"caret-down",variant:"accent"}}),r("b-collapse",{attrs:{id:"collapse-3",visible:""}},[r("div",{staticClass:"pageText"},[t._v("瑪莉愛狗協會是非營利的救援組織，已經救援了數千隻狗找到幸福的家!"),r("br"),t._v("而且也更努力要救更多的流浪狗!不僅為了替他們找到可以遮風避雨的家，也要它們過更好的生活!"),r("br"),t._v("然而，要持續又長期的救援， 需要一連串的費用與龐大的醫療支出。"),r("br"),t._v("我們需要大眾的援助，也需要募集每個月所需要的飼料，蚤不到與犬心寶等等狗兒專用的物品,來維持協會的正常運作，做更多的救援。我們竭誠歡迎也期盼您們都夠即時捐出善款，來幫助我們所需要的醫療與每月的物品清單!"),r("br"),t._v("請大家能夠幫忙宣揚，投入我們的行列，也期待更多的人可以共襄盛舉來完成這浩大工程，感謝您!")])]),r("b-row",{staticClass:"mt-5"},t._l(t.dogs,(function(t){return r("b-col",{key:t._id,staticClass:"my-2",attrs:{cols:"12",xl:"6"}},[r("DogCard",{attrs:{dog:t}})],1)})),1)],1)},i=[],o=r("1da1"),a=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"dogCard",attrs:{"img-top":"","img-src":t.dog.image}},[r("b-card-body",[r("b-card-title",[t._v(t._s(t.dog.name))]),r("b-card-text",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.dog.description))]),r("b-btn",{on:{click:t.apply}},[t._v("申請領養")])],1),r("b-modal",{attrs:{title:"申請領養",id:"modal-apply"+t.dog._id,"ok-disabled":t.modalSubmitting,"cancel-disabled":t.modalSubmitting},on:{ok:t.submitApply,hidden:t.resetForm}},[r("div",{staticClass:"my-3"},[r("img",{staticClass:"mx-auto img-fluid d-block mb-3",staticStyle:{width:"230px"},attrs:{src:t.dog.image}}),r("h6",{staticClass:"text-center"},[t._v(t._s(t.dog.name))])]),r("b-form-group",{attrs:{label:"申請人姓名","label-for":"input-name",description:"必填欄位","invalid-feedback":"申請人姓名必填",state:t.state.name}},[r("b-form-input",{attrs:{id:"input-name",type:"text",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"連絡電話","label-for":"input-phone",description:"必填欄位","invalid-feedback":"連絡電話必填",state:t.state.phone}},[r("b-form-input",{attrs:{id:"input-phone",type:"text",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),r("b-form-group",{attrs:{label:"詳細說明","label-for":"input-description",description:"必填欄位","invalid-feedback":"詳細說明必填",state:t.state.description}},[r("b-form-textarea",{attrs:{id:"input-description",rows:"6",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)}),s=[],c=(r("b0c0"),r("a4d3"),r("e01a"),r("f90c")),l=r.n(c),d={data:function(){return{form:{name:"",phone:"",description:"",dog:"",status:"已送出"},modalSubmitting:!1}},props:{dog:{type:Object,required:!0}},computed:{state:function(){return{name:0!==this.form.name.length||null,phone:0===this.form.phone?null:l.a.isNumeric(this.form.phone),description:0!==this.form.description.length||null}}},methods:{submitApply:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.preventDefault(),e.state.name&&e.state.phone&&e.state.description){r.next=4;break}return e.$swal({icon:"error",title:"錯誤",text:"缺少必填欄位"}),r.abrupt("return");case 4:return e.modalSubmitting=!0,r.prev=5,r.next=8,e.api.post("/adoptions",e.form,{headers:{authorization:"Bearer "+e.user.token}});case 8:e.$swal({icon:"success",title:"成功",text:"申請已送出"}),e.form={name:"",phone:"",description:"",dog:""},e.$bvModal.hide("modal-apply"+e.dog._id),e.modalSubmitting=!1,r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](5),e.$swal({icon:"error",title:"失敗",text:"申請送出失敗"});case 17:case"end":return r.stop()}}),r,null,[[5,14]])})))()},apply:function(){this.$bvModal.show("modal-apply"+this.dog._id),this.form.dog=this.dog._id},resetForm:function(t){this.modalSubmitting?t.preventDefault():this.form={name:"",phone:"",description:"",dog:""}}}},u=d,p=(r("04a8"),r("2877")),m=Object(p["a"])(u,a,s,!1,null,null,null),b=m.exports,f={components:{DogCard:b},data:function(){return{dogs:[]}},methods:{showMsgOk:function(){var t=this.$createElement,e=t("div",{domProps:{innerHTML:"Title from <i>HTML<i> string"}}),r=t("div",{class:["foobar"]},[t("p",{class:["text-center"]},[" Flashy ",t("strong","msgBoxOk")," message "]),t("b-img",{props:{src:"https://picsum.photos/id/20/250/250",thumbnail:!0,center:!0,fluid:!0,rounded:"circle"}})]);this.$bvModal.msgBoxOk([r],{title:[e],buttonSize:"sm",centered:!0,size:"sm"})}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/dogs");case 3:r=e.sent,n=r.data,t.dogs=n.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},g=f,h=(r("699c"),Object(p["a"])(g,n,i,!1,null,null,null));e["default"]=h.exports},"699c":function(t,e,r){"use strict";r("e578")},7198:function(t,e,r){},b0c0:function(t,e,r){var n=r("83ab"),i=r("5e77").EXISTS,o=r("e330"),a=r("9bf2").f,s=Function.prototype,c=o(s.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(l.exec),u="name";n&&!i&&a(s,u,{configurable:!0,get:function(){try{return d(l,c(this))[1]}catch(t){return""}}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("e330"),s=r("1a2d"),c=r("1626"),l=r("3a9b"),d=r("577e"),u=r("9bf2").f,p=r("e893"),m=o.Symbol,b=m&&m.prototype;if(i&&c(m)&&(!("description"in b)||void 0!==m().description)){var f={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=l(b,this)?new m(t):void 0===t?m():m(t);return""===t&&(f[e]=!0),e};p(g,m),g.prototype=b,b.constructor=g;var h="Symbol(test)"==String(m("test")),v=a(b.toString),x=a(b.valueOf),w=/^Symbol\((.*)\)[^)]+$/,y=a("".replace),_=a("".slice);u(b,"description",{configurable:!0,get:function(){var t=x(this),e=v(t);if(s(f,t))return"";var r=h?_(e,7,-1):y(e,w,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:g})}},e578:function(t,e,r){}}]);
//# sourceMappingURL=adoption.ec603b02.js.map