(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{574:function(t,e,o){"use strict";o.r(e);var n={name:"Timer",layout:"maindashboard",middleware:["auth","maindashboard","checkLoggedIn"],data:function(){return{mobile:this.$auth.user.mobile,mobile_error:null,step1:!0,step2:!1,exist_error:null,wrong_otp:null,resend:null,start_time:null,end_time:null,id:null,otp1:null,otp2:null,otp3:null,otp4:null}},methods:{nextfield:function(){document.getElementsByClassName("otpInput")[0].onkeyup=function(t){var e=t.srcElement||t.target,o=parseInt(e.attributes.maxlength.value,10),n=e.value.length;if(n>=o){for(var r=e;(r=r.nextElementSibling)&&null!=r;)if("input"===r.tagName.toLowerCase()){r.focus();break}}else if(0===n)for(var l=e;(l=l.previousElementSibling)&&null!=l;)if("input"===l.tagName.toLowerCase()){l.focus();break}}},endCallBack:function(){this.resend=!0},sendOtp:function(){var t=this;if(this.$store.commit("startLoading"),this.message=null,this.exist_error=null,this.resend=!1,""==this.mobile)return this.exist_error="Please enter number",void this.$store.commit("stopLoading");if(this.mobile.length<10)return this.exist_error="Please enter correct number",void this.$store.commit("stopLoading");var e="91"+this.mobile;this.$axios.post("https://robob.credotree.com/api/send-mobile-otp",{contact_no:this.mobile,mobile_no:e}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.step1=!1,t.step2=!0,t.start_time=new Date,t.end_time=new Date(t.start_time.getTime()+12e4)),"exist"==e.data.status&&(t.$store.commit("stopLoading"),t.exist_error="Number already taken")})).catch((function(t){this.$store.commit("stopLoading")}))},resendOtp:function(){var t=this;if(this.$store.commit("startLoading"),this.message=null,this.exist_error=null,this.resend=!1,""==this.mobile)return this.exist_error="Please enter number",void this.$store.commit("stopLoading");if(this.mobile.length<10)return this.exist_error="Please enter correct number",void this.$store.commit("stopLoading");var e="91"+this.mobile;this.$axios.post("https://robob.credotree.com/api/resend-mobile-otp",{contact_no:this.mobile,mobile_no:e}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.step1=!1,t.step2=!0,t.start_time=new Date,t.end_time=new Date(t.start_time.getTime()+12e4)),"exist"==e.data.status&&(t.$store.commit("stopLoading"),t.exist_error="Number already taken")})).catch((function(t){this.$store.commit("stopLoading")}))},editMobile:function(){this.step2=!1},returnback:function(){this.step2=!1,this.step1=!0},confirm:function(){var t=this;if(this.$store.commit("startLoading"),this.wrong_otp=null,null==this.otp1&&null==this.otp2&&null==this.otp3&&null==this.otp4)return this.wrong_otp="Please enter otp",void this.$store.commit("stopLoading");this.verification_code=this.otp1+""+this.otp2+this.otp3+this.otp4,this.$axios.post("https://robob.credotree.com/api/verify-mobile-otp",{mobile:this.mobile,verification_code:this.verification_code}).then((function(e){"success"==e.data.status&&(t.$store.commit("rightReload"),t.$store.commit("stopLoading"),localStorage.setItem("successmobileleft",1),t.$router.push("/verify-profile")),"wrong"==e.data.status&&(t.$store.commit("stopLoading"),t.otp1=null,t.otp2=null,t.otp3=null,t.otp4=null,t.wrong_otp="Try again ! otp did not match")})).catch((function(t){this.$store.commit("stopLoading")}))}}},r=o(24),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-7 col-md-6 mb-3 mb-md-0"},[1==t.step1?o("div",{staticClass:"updateBox"},[o("div",{staticClass:"updateContent verifyMobile"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"veryfyMobile"},[o("h4",[t._v("Mobile Number")]),t._v(" "),o("div",{staticClass:"number otpInput"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",maxlength:"10",placeholder:"Mobile Number"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),t._v(" "),t.exist_error?o("div",{staticClass:"errorText"},[t._v("\n          "+t._s(t.exist_error)+"\n        ")]):t._e(),t._v(" "),o("div",{staticClass:"formBtnBox"},[o("NuxtLink",{attrs:{to:"/verify-profile"}},[o("a",{staticClass:"btn w-auto outline",attrs:{href:"/verify-profile"}},[t._v("Back")])]),t._v(" "),o("button",{staticClass:"btn w-auto",on:{click:t.sendOtp}},[t._v("Send OTP")])],1)])])]):t._e(),t._v(" "),1==t.step2?o("div",{staticClass:"updateBox"},[o("div",{staticClass:"updateContent verifyMobile"},[t._m(2),t._v(" "),t._m(3),t._v(" "),o("div",{staticClass:"veryfyMobile"},[o("h4",[t._v("OTP")]),t._v(" "),o("p",[t._v("\n          OTP send on your mobile number "),o("span",[t._v("+91 "+t._s(t.mobile))])]),t._v(" "),o("div",{staticClass:"otpInput"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.otp1,expression:"otp1"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp1},on:{input:[function(e){e.target.composing||(t.otp1=e.target.value)},t.nextfield]}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.otp2,expression:"otp2"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp2},on:{input:[function(e){e.target.composing||(t.otp2=e.target.value)},t.nextfield]}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.otp3,expression:"otp3"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp3},on:{input:[function(e){e.target.composing||(t.otp3=e.target.value)},t.nextfield]}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.otp4,expression:"otp4"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp4},on:{input:[function(e){e.target.composing||(t.otp4=e.target.value)},t.nextfield]}})]),t._v(" "),o("client-only",[o("vue-countdown-timer",{attrs:{"start-time":t.start_time,"end-time":t.end_time,interval:1e3,"label-position":"begin","end-text":"Time over! click on resend otp ","seconds-txt":" seconds"},on:{end_callback:function(e){return t.endCallBack()}},scopedSlots:t._u([{key:"countdown",fn:function(e){return[o("span",[t._v(t._s(e.props.minutes))]),o("i",[t._v(t._s(e.props.minutesTxt))]),t._v(" "),o("span",[t._v(t._s(e.props.seconds))]),o("i",[t._v(t._s(e.props.secondsTxt))])]}}],null,!1,243522474)})],1),t._v(" "),t.wrong_otp?o("div",{staticClass:"errorText"},[t._v("\n          "+t._s(t.wrong_otp)+"\n        ")]):t._e(),t._v(" "),o("div",{staticClass:"formBtnBox"},[1==t.resend?o("button",{staticClass:"btn w-auto",on:{click:t.resendOtp}},[t._v("Resend OTP")]):t._e(),t._v(" "),o("button",{staticClass:"btn w-auto outline",on:{click:t.returnback}},[t._v("Back")]),t._v(" "),o("button",{staticClass:"btn w-auto",on:{click:t.confirm}},[t._v("Confirm OTP")])])],1)])]):t._e()])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2"},[o("span",[t._v("Verify Mobile Number")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progressBox"},[o("div",{staticClass:"progressBar done"},[o("small",[t._v("1")])]),t._v(" "),o("div",{staticClass:"progressBar"},[o("small",[t._v("2")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2"},[o("span",[t._v("Verify Mobile Number")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progressBox"},[o("div",{staticClass:"progressBar done"},[o("small",[t._v("1")])]),t._v(" "),o("div",{staticClass:"progressBar done"},[o("small",[t._v("2")])])])}],!1,null,null,null);e.default=component.exports}}]);