(function(t){function e(e){for(var n,l,o=e[0],s=e[1],u=e[2],d=0,m=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),i=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("HomePage")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"items-per-page":5}})],1)},u=[],c={name:"Home",mounted:function(){var t=this;this.$http.get("/findAll").then((function(e){for(var a in console.log(e.data.data),e.data.data)t.desserts.push(e.data.data[a])})).catch((function(){}))},data:function(){return{headers:[{text:"Id",value:"id"},{text:"Nomor",value:"nomor"},{text:"Isi",value:"isi"},{text:"Provider",value:"jenis_provider"},{text:"Judul",value:"judul"},{text:"Jumlah",value:"jumlah"},{text:"Kategori",value:"kategori"},{text:"Nama Pengirim",value:"nama_pengirim"},{text:"Tanggal",value:"tanggal"}],desserts:[]}},components:{}},d=c,m=a("2877"),f=a("6544"),p=a.n(f),v=a("8fea"),g=Object(m["a"])(d,s,u,!1,null,null,null),h=g.exports;p()(g,{VDataTable:v["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{counter:13,label:"Nomor ",required:""},model:{value:t.nomor,callback:function(e){t.nomor=e},expression:"nomor"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Isi",required:""},model:{value:t.isi,callback:function(e){t.isi=e},expression:"isi"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{items:t.providers,rules:[function(t){return!!t||"Item is required"}],label:"Provider",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Judul",required:""},model:{value:t.judul,callback:function(e){t.judul=e},expression:"judul"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{type:"number",label:"Jumlah",min:"0",required:""},model:{value:t.jumlah,callback:function(e){t.jumlah=e},expression:"jumlah"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{items:t.kategori,rules:[function(t){return!!t||"Item is required"}],label:"Kategori",required:""},model:{value:t.kategori_select,callback:function(e){t.kategori_select=e},expression:"kategori_select"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Nama Pengirim",required:""},model:{value:t.nama_pengirim,callback:function(e){t.nama_pengirim=e},expression:"nama_pengirim"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{type:"date",label:"Tanggal",required:""},model:{value:t.tanggal,callback:function(e){t.tanggal=e},expression:"tanggal"}})],1)],1),a("v-btn",{staticClass:"mr-4",staticStyle:{color:"white",alignment:"right"},attrs:{color:"#1976D2",align:"right"},on:{click:t.submit}},[t._v(" submit ")])],1)],1)],1)},x=[],_={name:"FormSpam",data:function(){return{select:"",providers:["Telkomsel","XL Axiata ","AXIS","Indosat Ooredoo","smartfren","3","Net1 Indonesia","BOLT"],valid:!1,nomor:"",nama:"",isi:"",judul:"",jumlah:0,kategori_select:"",kategori:["Finansial","Iklan","Kesehatan dan Obat-obatan","Gratisan","Kartu kredit","Edukasi","Tipuan negara","Berhubungan dengan TI"],nama_pengirim:"",tanggal:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},methods:{submit:function(){console.log(this.nomor),this.validate()},clear:function(){},validate:function(){this.nomor&&this.isi&&this.select&&this.judul&&0!=this.jumlah&&this.kategori_select&&this.nama_pengirim&&this.tanggal?this.store():alert("Semua Field Harus diisi")},store:function(){this.$http.post("/store",{judul:this.judul,tanggal:this.tanggal,isi:this.isi,nomor:this.nomor,kategori:this.kategori_select,id_pengirim:"1",nama_pengirim:this.nama_pengirim,jenis_provider:this.select,jumlah:this.jumlah}).then((function(t){alert("Store Data Sukses")})).catch((function(t){alert(t)}))}}},k=_,j=a("8336"),y=a("62ad"),w=a("a523"),O=a("4bd4"),V=a("0fd9"),S=a("b974"),T=a("8654"),F=Object(m["a"])(k,b,x,!1,null,"33eab8bc",null),P=F.exports;p()(F,{VBtn:j["a"],VCol:y["a"],VContainer:w["a"],VForm:O["a"],VRow:V["a"],VSelect:S["a"],VTextField:T["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("div",{staticClass:"container"},[a("h5",[t._v("Spam Data Collector TA-07")])])],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}})],1),a("br"),a("v-main",{staticClass:"container"},[a("v-card-title",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn-toggle",{attrs:{rounded:"","background-color":"#FFFFFF"}},[a("v-btn",{class:t.login?"black--text":"white--text",attrs:{color:t.login?"#ffffff":"#1976d2"},on:{click:function(e){t.login=!1}}},[t._v(" Lihat Data ")]),a("v-btn",{class:t.login?"white--text":"black--text",attrs:{color:t.login?"#1976d2":"#ffffff"},on:{click:function(e){t.login=!0}}},[t._v(" Tambah Data ")])],1)],1)],1),a("br"),t.login?a("div",[a("FormSpam")],1):a("div",[a("Home")],1)],1)],1)},C=[],I={name:"HomePage",mounted:function(){},components:{FormSpam:P,Home:h},data:function(){return{login:!1}}},$=I,E=a("7496"),A=a("40dc"),H=a("a609"),N=a("99d9"),B=a("adda"),D=a("f6c4"),J=a("2fa4"),L=Object(m["a"])($,q,C,!1,null,null,null),M=L.exports;p()(L,{VApp:E["a"],VAppBar:A["a"],VBtn:j["a"],VBtnToggle:H["a"],VCardTitle:N["a"],VImg:B["a"],VMain:D["a"],VRow:V["a"],VSpacer:J["a"]});var R={name:"App",mounted:function(){},components:{HomePage:M,FormSpam:P,Home:h},data:function(){return{login:!1}}},K=R,X=Object(m["a"])(K,l,o,!1,null,null,null),G=X.exports;p()(X,{VApp:E["a"]});a("d3b7");var U=a("8c4f");a("f820");n["default"].use(U["a"]);var z=new U["a"]({mode:"history"}),Q=z,W=a("f309");n["default"].use(W["a"]);var Y=new W["a"]({}),Z=a("5f5b");a("5f21");n["default"].use(Z["a"]),n["default"].config.productionTip=!1,n["default"].prototype.$http=i.a.create({baseURL:"https://www.portal-desa.web.id/public/api"}),new n["default"]({router:Q,vuetify:Y,render:function(t){return t(G)}}).$mount("#app")},"5f21":function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],i=a("2877"),l={},o=Object(i["a"])(l,n,r,!1,null,null,null);e["default"]=o.exports}});
//# sourceMappingURL=app.822fda68.js.map