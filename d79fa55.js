(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{446:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCI+CiAgPGltYWdlIGlkPSJMYXllcl8xNCIgZGF0YS1uYW1lPSJMYXllciAxNCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQVNDQVlBQUFDRW5vUVBBQUFBQVhOU1IwSUFyczRjNlFBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQUQ2QURBQVFBQUFBQkFBQUFFZ0FBQUFDOGpxb0FBQUFCVjBsRVFWUTRFWldUdnk5RFVSVEgreG9STVRCWXhFSTd0VGFKaWNtdjhBK1FtRHAwTkVuTVJIU1RHQm1hbUEwR2lZMmtrUmdrL2dCaWFGbG9PbERGL255KzhzNXpjU3Z2bmVUVGM4K1A3N3ZuM2R1WENjTXc0eU9YSzA3QUNVejc2c29GK2pITDU4ZjdXVS9DQ3F4WkhsK0ZJN2h1Tkc0K0xCL282UVFETUFpak1BVGRyRTNoQVY3aFhlTHZyY21rc1N6Tnoya0VUbTliNHFUV292RUE0a21UaW84NXFHR0VqKzVPU2NSYkNKZTVpVDJFRlFqc0FUMjJpUHcyWHVQdFIzRVo0U0hDWGVMMUtCYzc3ZXp1M2tlejNtc2VTcEd3eEhvRGZsdWdxOUtkNlk3TmFvam1GTERqR081ZWE0KzlhV3hkbFN1ZVJYUkxiZ0Yyb0p0MU5QS3BwMW9nZHdlcm5wcWx6alcyL281UDBHdlpoSDRreS90cGJCMVFHbHRFMS93NmFSYVhLS2RBby81bmRZb3o5SitwS2I0bUVsZkVSZGlFRjNDdFExQ0JBbjBYVnZqeFBWdVMwOWJwbDJFSmFsQkY5T2NEK2dTd1hZYXk4SXc5R2dBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KPC9zdmc+Cg=="},573:function(t,e,o){"use strict";o.r(e);var c=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:o(446),alt:""}})])}],r={layout:"mobile",data:function(){return{email:this.$route.query.email?this.$route.query.email:null,verification_code:"",verification_code_error:null}},methods:{verify:function(){var t=this;this.$store.commit("startLoading"),this.verification_code_error=null,this.$axios.post("https://robob.credotree.com/api/verify-registration",{email:this.email,verification_code:this.verification_code}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.$router.push("/login?message=Your account has been created successfully. Please login here.")),"failure"==e.data.status&&(t.$store.commit("stopLoading"),t.verification_code_error="Please enter correct verification code")})).catch((function(t){}))}}},n=o(24),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"loginSection"},[c("div",{staticClass:"loginHead"},[c("NuxtLink",{attrs:{to:"/"}},[c("img",{attrs:{src:o(311),alt:""}})])],1),t._v(" "),c("div",{staticClass:"loginBox"},[c("h2",[t._v("Please enter verification code sent to "+t._s(t.email))]),t._v(" "),c("div",{staticClass:"loinInput"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.verification_code,expression:"verification_code"}],attrs:{type:"text",placeholder:"Verification Code"},domProps:{value:t.verification_code},on:{input:function(e){e.target.composing||(t.verification_code=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),t.verification_code_error?c("div",{staticClass:"errorText"},[t._v("\n            "+t._s(t.verification_code_error)+"\n      ")]):t._e()]),t._v(" "),c("div",{staticClass:"loginBtn"},[c("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.verify.apply(null,arguments)}}},[t._v("Verify")])])])])}),c,!1,null,null,null);e.default=component.exports}}]);