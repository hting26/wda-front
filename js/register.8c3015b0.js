(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0a6d":function(t,e,a){t.exports=a.p+"img/loginImg.b594e1f1.png"},"73cf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"register"}},[r("b-container",[r("b-row",[r("div",{attrs:{id:"regForm"}},[r("b-col",{attrs:{cols:"12",md:"6"}},[r("h3",{staticClass:"text-center mb-4 text-accent"},[t._v("註冊 Register")]),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"帳號 account","label-for":"input-account",description:"帳號長度為 4 到 20 個字",state:t.state.account,"invalid-feedback":"帳號格式不正確"}},[r("b-form-input",{attrs:{id:"input-account",required:"",placeholder:"請輸入帳號",type:"text",state:t.state.account},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),r("b-form-group",{attrs:{label:"密碼 password","label-for":"input-password",description:"密碼長度為 4 到 20 個字",state:t.state.password,"invalid-feedback":"密碼格式不正確"}},[r("b-form-input",{attrs:{id:"input-password",required:"",placeholder:"請輸入密碼",type:"password",state:t.state.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-group",{attrs:{label:"信箱 email","label-for":"input-email",description:"請輸入有效的信箱",state:t.state.email,"invalid-feedback":"信箱格式不正確"}},[r("b-form-input",{attrs:{id:"input-email",required:"",placeholder:"請輸入信箱",type:"text",state:t.state.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("div",{staticClass:"text-center"},[r("b-btn",{staticClass:"regbtn mx-1",attrs:{type:"submit"}},[t._v("註冊")])],1)],1)],1)],1)])],1),r("b-img",{staticClass:"loginImg",attrs:{src:a("0a6d")}}),r("b-img",{staticClass:"loginSm",attrs:{src:a("bbeb")}})],1)},s=[],n=a("1da1"),o=(a("96cf"),a("f90c")),i=a.n(o),c={data:function(){return{form:{account:"",password:"",email:""}}},computed:{state:function(){return{account:0===this.form.account.length?null:this.form.account.length>=4&&this.form.account.length<=20,password:0===this.form.password.length?null:this.form.password.length>=4&&this.form.password.length<=20,email:0===this.form.email.length?null:i.a.isEmail(this.form.email)}}},methods:{register:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.post("/users",t.form);case 3:t.$swal({icon:"success",title:"成功",text:"註冊成功"}),t.$router.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},l=c,u=(a("a894"),a("2877")),p=Object(u["a"])(l,r,s,!1,null,null,null);e["default"]=p.exports},a894:function(t,e,a){"use strict";a("db38")},bbeb:function(t,e,a){t.exports=a.p+"img/loginSm.2084f9dc.jpg"},db38:function(t,e,a){}}]);
//# sourceMappingURL=register.8c3015b0.js.map