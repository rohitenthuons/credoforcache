(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{416:function(t,e,r){t.exports=r.p+"img/error.2dc37a0.svg"},417:function(t,e,r){t.exports=r.p+"img/verify.3ec6fed.svg"},462:function(t,e,r){},504:function(t,e,r){"use strict";r(462)},575:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title2",attrs:{id:"ach"}},[r("span",[t._v("Verify Address")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aleartImg"},[e("img",{attrs:{src:r(416),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aleartText faild"},[r("span",[t._v("Sorry,")]),t._v(" it seems error/s, please fix it.\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"invitationsImg"},[e("img",{attrs:{src:r(417),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"educationView"},[r("div",{staticClass:"contentLoader"},[r("div",{staticClass:"text-line"}),t._v(" "),r("h4",{staticClass:"text-line"}),t._v(" "),r("p",{staticClass:"text-line"})]),t._v(" "),r("div",{staticClass:"contentLoader"},[r("div",{staticClass:"text-line"}),t._v(" "),r("h4",{staticClass:"text-line"}),t._v(" "),r("p",{staticClass:"text-line"})]),t._v(" "),r("div",{staticClass:"contentLoader"},[r("div",{staticClass:"text-line"}),t._v(" "),r("h4",{staticClass:"text-line"}),t._v(" "),r("p",{staticClass:"text-line"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title2"},[r("span",[t._v("Verify Address")])])}],o=(r(25),r(32),{layout:"maindashboard",middleware:["auth","maindashboard","checkLoggedIn"],data:function(){return{sameAsCur:!1,permanent_addresses:[],current_addresses:[],permanent_address:null,permanent_city:null,permanent_country:null,permanent_zip:"",current_address:null,permanent_state:null,current_state:null,current_city:null,current_country:null,current_zip:"",permanent_address_error:null,permanent_city_error:null,permanent_country_error:null,permanent_zip_error:null,permanent_state_error:null,current_state_error:null,current_address_error:null,current_city_error:null,current_country_error:null,current_zip_error:null,count:0,next_step:!1,same_current:null,same_country:null,step1:!1,step2:!1,otp1:null,otp2:null,otp3:null,otp4:null,otp5:null,otp6:null,verification_code:null,verify_id:null,success:null,mobile:null,newloaded:!1,cchannel:null}},mounted:function(){document.getElementsByClassName("afterLogin").length>0||(document.body.className+=" afterLogin "),this.newloaded=!0,this.step1=!0,this.mobile=this.$auth.user.mobile},methods:{closeRightSuccess:function(){this.success=null},scroll:function(){$(document).on("click",'a[href^="#"]',(function(t){var e=$(this).attr("href"),r=$(e);if(0!==r.length){t.preventDefault();var n=r.offset().top;return $("body, html").animate({scrollTop:n}),!1}}))},gobacktoprofile:function(){this.next_step=!1,this.$router.push("/verify-profile")},showConfirm:function(){if(this.permanent_address_error=null,this.permanent_city_error=null,this.permanent_country_error=null,this.permanent_zip_error=null,this.permanent_state_error=null,this.current_state_error=null,this.current_address_error=null,this.current_city_error=null,this.current_country_error=null,this.current_zip_error=null,this.success=null,this.count=0,this.testEmpty(this.current_address)<=0&&(this.current_address_error="This field is required",this.count+=1),this.testEmpty(this.current_city)<=0&&(this.current_city_error="This field is required",this.count+=1),this.testEmpty(this.current_zip)<=0&&(this.current_zip_error="This field is required",this.count+=1),this.testEmpty(this.current_state)<=0&&(this.current_state_error="This field is required",this.count+=1),null==this.current_country&&(this.current_country_error="This field is required",this.count+=1),0==this.sameAsCur&&(this.testEmpty(this.permanent_address)<=0&&(this.permanent_address_error="This field is required",this.count+=1),this.testEmpty(this.permanent_city)<=0&&(this.permanent_city_error="This field is required",this.count+=1),this.testEmpty(this.permanent_zip)<=0&&(this.permanent_zip_error="This field is required",this.count+=1),this.testEmpty(this.permanent_state)<=0&&(this.permanent_state_error="This field is required",this.count+=1),null==this.permanent_country&&(this.permanent_country_error="This field is required",this.count+=1)),this.count>0)return this.$store.commit("stopLoading"),this.success=!1,void this.scroll();this.$bvModal.show("editModal")},clickAction:function(){0==this.sameAsCur?(this.permanent_address=this.current_address,this.permanent_city=this.current_city,this.permanent_zip=this.current_zip,this.permanent_state=this.current_state,this.same_country=this.current_country,this.same_current=1,this.permanent_address_error=null,this.permanent_city_error=null,this.permanent_state_error=null,this.permanent_country_error=null,this.permanent_zip_error=null):(this.permanent_address=null,this.permanent_city=null,this.permanent_zip=null,this.permanent_country=null,this.permanent_state=null,this.same_current=null)},checkZIP:function(t){this.current_zip=this.current_zip.replace(/[^0-9]/g,""),this.permanent_zip=this.permanent_zip.replace(/[^0-9]/g,"")},getaddress:function(){var t=this;this.$store.commit("startLoading"),this.permanent_address_error=null,this.permanent_city_error=null,this.permanent_country_error=null,this.permanent_zip_error=null,this.permanent_state_error=null,this.current_state_error=null,this.current_address_error=null,this.current_city_error=null,this.current_country_error=null,this.current_zip_error=null,this.count=0,this.testEmpty(this.current_address)<=0&&(this.current_address_error="This field is required",this.count+=1),this.testEmpty(this.current_city)<=0&&(this.current_city_error="This field is required",this.count+=1),this.testEmpty(this.current_zip)<=0&&(this.current_zip_error="This field is required",this.count+=1),null==this.current_country&&(this.current_country_error="This field is required",this.count+=1),null==this.current_state&&(this.current_state_error="This field is required",this.count+=1),0==this.sameAsCur&&(this.testEmpty(this.permanent_address)<=0&&(this.permanent_address_error="This field is required",this.count+=1),this.testEmpty(this.permanent_city)<=0&&(this.permanent_city_error="This field is required",this.count+=1),this.testEmpty(this.permanent_zip)<=0&&(this.permanent_zip_error="This field is required",this.count+=1),null==this.permanent_state&&(this.permanent_state_error="This field is required",this.count+=1),null==this.permanent_country&&(this.permanent_country_error="This field is required",this.count+=1)),this.count>0?this.$store.commit("stopLoading"):this.$axios.post("https://robob.credotree.com/api/add-user-address",{current_address:this.current_address,current_zip:this.current_zip,current_country:this.current_country,current_city:this.current_city,current_state:this.current_state,sameAsCur:this.sameAsCur,same_current:this.same_current,permanent_address:0==this.sameAsCur?this.permanent_address:this.current_address,permanent_city:0==this.sameAsCur?this.permanent_city:this.current_city,permanent_country:0==this.sameAsCur?this.permanent_country:this.current_country,permanent_zip:0==this.sameAsCur?this.permanent_zip:this.current_zip,permanent_state:0==this.sameAsCur?this.permanent_state:this.current_state}).then((function(e){t.$store.commit("rightReload");try{"success"==e.data.status&&(t.$bvModal.hide("editModal"),t.permanent_city=null,t.permanent_country=null,t.permanent_zip=null,t.permanent_address=null,t.permanent_state=null,t.current_state=null,t.current_city=null,t.current_country=null,t.current_zip="",t.current_address=null,t.step1=!1,t.next_step=!0,t.$store.commit("stopLoading"))}catch(t){}})).catch((function(t){this.$store.commit("stopLoading")}))},confirm:function(){var t=this;this.$store.commit("startLoading"),null!=this.otp1||null!=this.otp2||null!=this.otp3||null!=this.otp4||null!=this.otp5||null!=this.otp6?(this.verification_code=this.otp1+""+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6,this.$axios.post("https://robob.credotree.com/api/verify-address-of-user",{verification_code:this.verification_code,id:this.verify_id}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.details=e.data.data,t.step2=!1,t.step1=!1,t.otp1=null,t.otp2=null,t.otp3=null,t.otp4=null,t.otp5=null,t.otp6=null,t.$router.push("/verify-profile"))})).catch((function(t){}))):this.$store.commit("stopLoading")},testEmpty:function(t){return null==t?0:t=(t=(t=t.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")}}}),c=(r(504),r(24)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7 col-md-6 mb-3 mb-md-0"},[1==t.step1?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent verifyMobile"},[t._m(0),t._v(" "),0==t.success?[n("div",{staticClass:"aleartBox error"},[n("span",{staticClass:"close",on:{click:t.closeRightSuccess}},[n("img",{attrs:{src:r(309),alt:""}})]),t._v(" "),t._m(1),t._v(" "),t._m(2)])]:t._e(),t._v(" "),n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group formBox"},[n("label",[t._v("Current Address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.current_address,expression:"current_address"}],staticClass:"form-control",attrs:{type:"text",placeholder:"eg. H.No.302, street no. 9, near alpha tower"},domProps:{value:t.current_address},on:{input:function(e){e.target.composing||(t.current_address=e.target.value)}}}),t._v(" "),t.current_address_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.current_address_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.current_city,expression:"current_city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.current_city},on:{input:function(e){e.target.composing||(t.current_city=e.target.value)}}}),t._v(" "),t.current_city_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.current_city_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.current_zip,expression:"current_zip"}],staticClass:"form-control",attrs:{type:"text",maxlength:"6",placeholder:"Zip Code"},domProps:{value:t.current_zip},on:{input:[function(e){e.target.composing||(t.current_zip=e.target.value)},t.checkZIP]}}),t._v(" "),t.current_zip_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.current_zip_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.current_state,expression:"current_state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"State"},domProps:{value:t.current_state},on:{input:function(e){e.target.composing||(t.current_state=e.target.value)}}}),t._v(" "),t.current_state_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.current_state_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("client-only",[n("country-select",{staticClass:"form-control",attrs:{autocomplete:!0,countryName:!0,topCountry:"US"},model:{value:t.current_country,callback:function(e){t.current_country=e},expression:"current_country"}})],1)],1),t._v(" "),t.current_country_error?n("div",{staticClass:"errorText"},[t._v("\n              "+t._s(t.current_country_error)+"\n            ")]):t._e()])]),t._v(" "),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sameAsCur,expression:"sameAsCur"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.sameAsCur)?t._i(t.sameAsCur,null)>-1:t.sameAsCur},on:{click:t.clickAction,change:function(e){var r=t.sameAsCur,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&(t.sameAsCur=r.concat([null])):c>-1&&(t.sameAsCur=r.slice(0,c).concat(r.slice(c+1)))}else t.sameAsCur=o}}}),t._v(" "),n("label",[t._v("Permanent address as same as current address")]),n("br")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group formBox"},[n("label",[t._v("Permanent Address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.permanent_address,expression:"permanent_address"}],staticClass:"form-control",attrs:{disabled:t.sameAsCur,type:"text",placeholder:"eg. H.No.302, street no. 9, near alpha tower"},domProps:{value:t.permanent_address},on:{input:function(e){e.target.composing||(t.permanent_address=e.target.value)}}}),t._v(" "),t.permanent_address_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.permanent_address_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.permanent_city,expression:"permanent_city"}],staticClass:"form-control",attrs:{disabled:t.sameAsCur,type:"text",placeholder:"City"},domProps:{value:t.permanent_city},on:{input:function(e){e.target.composing||(t.permanent_city=e.target.value)}}}),t._v(" "),t.permanent_city_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.permanent_city_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.permanent_zip,expression:"permanent_zip"}],staticClass:"form-control",attrs:{disabled:t.sameAsCur,type:"text",placeholder:"Zip Code"},domProps:{value:t.permanent_zip},on:{input:[function(e){e.target.composing||(t.permanent_zip=e.target.value)},t.checkZIP]}}),t._v(" "),t.permanent_zip_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.permanent_zip_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.permanent_state,expression:"permanent_state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"State",disabled:t.sameAsCur},domProps:{value:t.permanent_state},on:{input:function(e){e.target.composing||(t.permanent_state=e.target.value)}}}),t._v(" "),t.permanent_state_error?n("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.permanent_state_error)+"\n              ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("client-only",[n("country-select",{staticClass:"form-control",attrs:{autocomplete:!0,countryName:!0,topCountry:"US",disabled:t.sameAsCur},model:{value:t.permanent_country,callback:function(e){t.permanent_country=e},expression:"permanent_country"}})],1)],1),t._v(" "),t.permanent_country_error?n("div",{staticClass:"errorText"},[t._v("\n              "+t._s(t.permanent_country_error)+"\n            ")]):t._e()]),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"formBtnBox"},[n("NuxtLink",{attrs:{to:"/verify-profile"}},[n("a",{staticClass:"btn w-auto outline",attrs:{href:"/verify-profile"}},[t._v("Back")])]),t._v(" "),n("a",{staticClass:"btn w-auto",attrs:{href:"#"},on:{click:t.showConfirm}},[t._v("Submit")])],1)])])])],2)]):t._e(),t._v(" "),n("b-modal",{ref:"confirmModal",attrs:{centered:"",id:"editModal","hide-footer":"","hide-header":"",title:"Using Component Methods"}},[n("div",{staticClass:"d-block"},[n("div",[n("label",[t._v("We will send a verification code via post on provoded address to\n          verify. Are you sure provided address is correct?")]),t._v(" "),n("div",{staticClass:"formBtnBox"},[n("b-button",{staticClass:"mt-2 ml-2 btn w-auto outline",on:{click:function(e){return t.$bvModal.hide("editModal")}}},[t._v("No")]),t._v(" "),n("b-button",{staticClass:"mt-2 mr-2 btn w-auto",on:{click:t.getaddress}},[t._v("Yes")])],1)])])]),t._v(" "),1==t.next_step?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent"},[n("div",{staticClass:"invitationsBox success"},[t._m(3),t._v(" "),n("p",[t._v("Thanks for providing your address information")]),t._v(" "),n("p",[t._v("\n          We will send a verification code on your provided address soon. You\n          need to enter that code for verify address.\n        ")]),t._v(" "),n("div",{staticClass:"formBtnBox"},[n("button",{staticClass:"btn w-auto outline",on:{click:function(e){return e.preventDefault(),t.gobacktoprofile.apply(null,arguments)}}},[t._v("\n            Back\n          ")])])])])]):t._e(),t._v(" "),0==t.newloaded?n("div",[t._m(4)]):t._e(),t._v(" "),1==t.step2?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent verifyMobile"},[t._m(5),t._v(" "),n("div",{staticClass:"veryfyMobile"},[n("h4",[t._v("OTP")]),t._v(" "),n("p",[t._v("\n          OTP send on your mobile number "),n("span",[t._v("+91"+t._s(t.mobile))])]),t._v(" "),n("div",{staticClass:"otpInput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp1,expression:"otp1"}],attrs:{type:"text",placeholder:"-"},domProps:{value:t.otp1},on:{input:function(e){e.target.composing||(t.otp1=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp2,expression:"otp2"}],attrs:{type:"text",placeholder:"-"},domProps:{value:t.otp2},on:{input:function(e){e.target.composing||(t.otp2=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp3,expression:"otp3"}],attrs:{type:"text",placeholder:"-"},domProps:{value:t.otp3},on:{input:function(e){e.target.composing||(t.otp3=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp4,expression:"otp4"}],attrs:{type:"text",placeholder:"-"},domProps:{value:t.otp4},on:{input:function(e){e.target.composing||(t.otp4=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp5,expression:"otp5"}],attrs:{type:"text",placeholder:"-"},domProps:{value:t.otp5},on:{input:function(e){e.target.composing||(t.otp5=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp6,expression:"otp6"}],attrs:{type:"text",placeholder:"-"},domProps:{value:t.otp6},on:{input:function(e){e.target.composing||(t.otp6=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"formBtnBox"},[n("button",{staticClass:"btn w-auto",on:{click:t.confirm}},[t._v("Confirm OTP")])])])])]):t._e()],1)}),n,!1,null,"79a2d5a3",null);e.default=component.exports}}]);