(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{416:function(t,e,o){t.exports=o.p+"img/error.2dc37a0.svg"},417:function(t,e,o){t.exports=o.p+"img/verify.3ec6fed.svg"},482:function(t,e,o){},524:function(t,e,o){"use strict";o(482)},610:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"educationView"},[o("div",{staticClass:"contentLoader"},[o("div",{staticClass:"text-line"}),t._v(" "),o("h4",{staticClass:"text-line"}),t._v(" "),o("p",{staticClass:"text-line"})]),t._v(" "),o("div",{staticClass:"contentLoader"},[o("div",{staticClass:"text-line"}),t._v(" "),o("h4",{staticClass:"text-line"}),t._v(" "),o("p",{staticClass:"text-line"})]),t._v(" "),o("div",{staticClass:"contentLoader"},[o("div",{staticClass:"text-line"}),t._v(" "),o("h4",{staticClass:"text-line"}),t._v(" "),o("p",{staticClass:"text-line"})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2",attrs:{id:"ach"}},[o("span",[t._v("Verify Company Profile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aleartImg"},[e("img",{attrs:{src:o(310),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aleartText"},[o("span",[t._v("Success!,")]),t._v("Your document successfully updated we will verify it. This may take upto 48 hours.\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aleartImg"},[e("img",{attrs:{src:o(416),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aleartText faild"},[o("span",[t._v("Sorry,")]),t._v(" it seems error/s, please fix it.\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aleartImg"},[e("img",{attrs:{src:o(310),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aleartText"},[o("span",[t._v("Success!,")]),t._v("Your mobile is successfully verified.\n              ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2"},[o("span",[t._v("Add Headoffice Address")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2"},[o("span",[t._v("Verify Mobile Number")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progressBox"},[o("div",{staticClass:"progressBar done"},[o("small",[t._v("1")])]),t._v(" "),o("div",{staticClass:"progressBar"},[o("small",[t._v("2")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"invitationsImg"},[e("img",{attrs:{src:o(417),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2"},[o("span",[t._v("Verify Office Mobile")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progressBox"},[o("div",{staticClass:"progressBar done"},[o("small",[t._v("1")])]),t._v(" "),o("div",{staticClass:"progressBar done"},[o("small",[t._v("2")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2"},[o("span",[t._v("Verify Address")])])}],l=(o(33),o(56),o(64),o(111),o(25),o(32),{middleware:["auth","checkLoggedIn"],layout:"companymaindashboard",data:function(){return{details:null,mobile:null,mobile_error:null,loaded:!1,step1:!1,step2:!1,step3:!1,sendmobileotp:null,verifyMobile:null,companyAddress:null,otp1:null,otp2:null,otp3:null,otp4:null,otp5:null,otp6:null,success:null,address:null,city:null,country:null,zip:"",count:0,successLeft:null,showMessage:null,file_error:null,successmobileLeft:null,file:null,landmark_error:null,landmark:null,state_error:null,state:null,address_error:null,city_error:null,country_error:null,zip_error:null,exist_error:null,wrong_otp:null,mobile_otp1:null,mobile_otp2:null,mobile_otp3:null,mobile_otp4:null,resend:null,next_step:null,start_time:null,end_time:null,verification_code:null,verify_id:null,currentotp:null,permanentotp:null,companySlug:null}},mounted:function(){var t=this;document.getElementsByClassName("afterLogin").length>0||(document.body.className+=" afterLogin "),this.companySlug=this.$route.params.slug,this.$axios.post("https://robob.credotree.com/api/get-company-verification-details",{companySlug:this.companySlug}).then((function(e){t.details=e.data.details,t.details.ComGt&&(t.showMessage=!0),t.loaded=!0,t.step1=!0})).catch((function(t){}))},methods:{scroll:function(){$(document).on("click",'a[href^="#"]',(function(t){var e=$(this).attr("href"),o=$(e);if(0!==o.length){t.preventDefault();var n=o.offset().top;return $("body, html").animate({scrollTop:n}),!1}}))},nextfield:function(){document.getElementsByClassName("otpInput")[0].onkeyup=function(t){var e=t.srcElement||t.target,o=parseInt(e.attributes.maxlength.value,10),n=e.value.length;if(n>=o){for(var l=e;(l=l.nextElementSibling)&&null!=l;)if("input"===l.tagName.toLowerCase()){l.focus();break}}else if(0===n)for(var r=e;(r=r.previousElementSibling)&&null!=r;)if("input"===r.tagName.toLowerCase()){r.focus();break}}},download:function(t,e,o){this.$axios.get("https://robob.credotree.com/api/GstFile/"+e+t,{responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data],{type:"application/pdf"})),n=document.createElement("a");n.href=e,n.setAttribute("download",o),document.body.appendChild(n),n.click()})).catch((function(t){}))},endCallBack:function(){this.resend=!0},backtoprofile:function(){this.step3=!1,this.step1=!0},mobileotp:function(t){this.mobile=t,this.step1=!1,this.sendmobileotp=!0},verify:function(){this.step2=!1,this.step1=!0},sendAddressOtp:function(){var t=this;this.$store.commit("startLoading"),this.step1=!1,this.resend=!1,this.$axios.post("https://robob.credotree.com/api/send-company-address-otp",{companySlug:this.companySlug}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.details=e.data.details,t.step3=!0,t.start_time=new Date,t.end_time=new Date(t.start_time.getTime()+12e4))})).catch((function(t){this.$store.commit("stopLoading")}))},checkZIP:function(t){this.zip=this.zip.replace(/[^0-9]/g,"")},addressback:function(){this.step1=!0,this.companyAddress=!1},submit:function(t){this.address=t.ComAd,this.city=t.city,this.country=t.country,t.pincode&&(this.zip=t.pincode),t.landmark&&(this.landmark=t.landmark),this.step1=!1,this.companyAddress=!0},gobacktoprofile:function(){this.next_step=!1,this.step1=!0},testEmpty:function(t){return null==t?0:t=(t=(t=t.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")},showConfirm:function(){if(this.address_error=null,this.city_error=null,this.country_error=null,this.zip_error=null,this.state_error=null,this.success=null,this.count=0,this.testEmpty(this.address)<=0&&(this.address_error="This field is required",this.count+=1),this.testEmpty(this.landmark)<=0&&(this.landmark_error="This field is required",this.count+=1),this.testEmpty(this.city)<=0&&(this.city_error="This field is required",this.count+=1),this.testEmpty(this.state)<=0&&(this.state_error="This field is required",this.count+=1),this.testEmpty(this.zip)<=0&&(this.zip_error="This field is required",this.count+=1),null==this.country&&(this.country_error="This field is required",this.count+=1),this.count>0)return this.$store.commit("stopLoading"),this.success=!1,void this.scroll();this.$bvModal.show("editModal")},UpdateCompanyAddress:function(){var t=this;this.$store.commit("startLoading"),this.$bvModal.hide("editModal"),this.$axios.post("https://robob.credotree.com/api/add-company-address",{address:this.address,landmark:this.landmark,zip:this.zip,country:this.country,state:this.state,city:this.city,companySlug:this.companySlug}).then((function(e){t.$store.commit("rightReload");try{"success"==e.data.status&&(t.details=e.data.details,t.$axios.post("https://robob.credotree.com/api/send-company-address-otp",{companySlug:t.companySlug}).then((function(e){"success"==e.data.status&&(t.details=e.data.details)})).catch((function(t){})),t.city=null,t.country=null,t.zip="",t.landmark=null,t.state=null,t.address=null,t.next_step=!0,t.companyAddress=!1,t.$store.commit("stopLoading"))}catch(t){}})).catch((function(t){this.$store.commit("stopLoading")}))},getback:function(){this.step1=!0,this.step2=!1,this.step3=!1,this.sendmobileotp=!1,this.verifyMobile=!1},sendMobileOtp:function(){var t=this;if(this.$store.commit("startLoading"),this.message=null,this.exist_error=null,this.resend=!1,""==this.mobile)return this.exist_error="Please enter number",void this.$store.commit("stopLoading");if(this.mobile.length<10)return this.exist_error="Please enter correct number",void this.$store.commit("stopLoading");var e="91"+this.mobile;this.$axios.post("https://robob.credotree.com/api/send-company-mobile-otp",{contact_no:this.mobile,mobile_no:e,companySlug:this.companySlug}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.sendmobileotp=!1,t.verifyMobile=!0,t.start_time=new Date,t.end_time=new Date(t.start_time.getTime()+12e4)),"exist"==e.data.status&&(t.$store.commit("stopLoading"),t.exist_error="Number already taken")})).catch((function(t){this.$store.commit("stopLoading")}))},resendMobileOtp:function(){var t=this;if(this.$store.commit("startLoading"),this.message=null,this.exist_error=null,this.resend=!1,""==this.mobile)return this.exist_error="Please enter number",void this.$store.commit("stopLoading");if(this.mobile.length<10)return this.exist_error="Please enter correct number",void this.$store.commit("stopLoading");var e="91"+this.mobile;this.$axios.post("https://robob.credotree.com/api/resend-company-mobile-otp",{contact_no:this.mobile,mobile_no:e,companySlug:this.companySlug}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.sendmobileotp=!1,t.verifyMobile=!0,t.start_time=new Date,t.end_time=new Date(t.start_time.getTime()+12e4)),"exist"==e.data.status&&(t.$store.commit("stopLoading"),t.exist_error="Number already taken")})).catch((function(t){this.$store.commit("stopLoading")}))},addGstFile:function(){var t=this;if(this.$store.commit("startLoading"),this.file_error=null,this.success=null,this.count=0,null==this.file&&(this.file_error="Please select file",this.count+=1),this.count>0)return this.$store.commit("stopLoading"),this.success=!1,void this.scroll();var data=new FormData;data.append("file",this.file),data.append("companySlug",this.companySlug),this.$axios.post("https://robob.credotree.com/api/add-company-gst-file",data,{headers:{"content-type":"multipart/form-data"}}).then((function(e){"success"==e.data.status&&(t.details=e.data.details,t.successLeft=!0,t.scroll(),t.$store.commit("stopLoading"))})).catch((function(t){this.$store.commit("stopLoading")}))},closeRightSuccess:function(){this.success=null,this.successLeft=null,this.showMessage=!0},closemobileRightSuccess:function(){this.successmobileLeft=null},mobileback:function(){this.sendmobileotp=!0,this.verifyMobile=!1},confirmMobile:function(){var t=this;if(this.$store.commit("startLoading"),this.wrong_otp=null,null==this.mobile_otp1&&null==this.mobile_otp2&&null==this.mobile_otp3&&null==this.mobile_otp4)return this.wrong_otp="Please enter otp",void this.$store.commit("stopLoading");this.verification_code=this.mobile_otp1+""+this.mobile_otp2+this.mobile_otp3+this.mobile_otp4,this.$axios.post("https://robob.credotree.com/api/verify-company-mobile-otp",{mobile:this.mobile,verification_code:this.verification_code,companySlug:this.companySlug}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.verifyMobile=!1,t.details=e.data.details,t.successmobileLeft=!0,t.step1=!0),"wrong"==e.data.status&&(t.$store.commit("stopLoading"),t.mobile_otp1=null,t.mobile_otp2=null,t.mobile_otp3=null,t.mobile_otp4=null,t.wrong_otp="Try again ! otp did not match")})).catch((function(t){this.$store.commit("stopLoading")}))},confirm:function(){var t=this;this.$store.commit("startLoading"),null!=this.otp1||null!=this.otp2||null!=this.otp3||null!=this.otp4||null!=this.otp5||null!=this.otp6?(this.verification_code=this.otp1+""+this.otp2+this.otp3+this.otp4+this.otp5+this.otp6,this.$axios.post("https://robob.credotree.com/api/verify-address-of-company",{verification_code:this.verification_code,companySlug:this.companySlug}).then((function(e){"success"==e.data.status&&(t.$store.commit("stopLoading"),t.details=e.data.data,t.step2=!1,t.step3=!1,t.step1=!0,t.otp1=null,t.otp2=null,t.otp3=null,t.otp4=null,t.otp5=null,t.otp6=null)})).catch((function(t){}))):this.$store.commit("stopLoading")}}}),r=(o(524),o(24)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7 col-md-6 mb-3 mb-md-0"},[0==t.loaded?n("div",[t._m(0)]):t._e(),t._v(" "),1==t.step1?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent verifyMobile"},[t._m(1),t._v(" "),1==t.successLeft?[n("div",{staticClass:"aleartBox success"},[n("span",{staticClass:"close",on:{click:t.closeRightSuccess}},[n("img",{attrs:{src:o(309),alt:""}})]),t._v(" "),t._m(2),t._v(" "),t._m(3)])]:t._e(),t._v(" "),0==t.success?[n("div",{staticClass:"aleartBox error"},[n("span",{staticClass:"close",on:{click:t.closeRightSuccess}},[n("img",{attrs:{src:o(309),alt:""}})]),t._v(" "),t._m(4),t._v(" "),t._m(5)])]:t._e(),t._v(" "),1==t.successmobileLeft?[n("div",{staticClass:"aleartBox success"},[n("span",{staticClass:"close",on:{click:t.closemobileRightSuccess}},[n("img",{attrs:{src:o(309),alt:""}})]),t._v(" "),t._m(6),t._v(" "),t._m(7)])]:t._e(),t._v(" "),n("div",{staticClass:"verifyProfileBox"},[n("div",{staticClass:"verifyProfile"},[n("h4",[t._v("\n            Upload Gst Certificate\n            "),1==t.showMessage&&"Pending"==t.details.ComFv?[n("span",{staticClass:"sentVeryfy"},[t._v("(Verify document is under process)")])]:t._e()],2),t._v(" "),null==t.details.ComGt?n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group formBox"},[n("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"only PDF files allowed","drop-placeholder":"Drop file here...",accept:".pdf","browse-text":"select"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),t.file_error?n("div",{staticClass:"errorText"},[t._v("\n                    "+t._s(t.file_error)+"\n                  ")]):t._e()],1)]):t._e(),t._v(" "),null==t.details.ComGt?n("div",{staticClass:"formBtnBox"},[n("a",{staticClass:"btn w-auto",attrs:{href:"#ach"},on:{click:t.addGstFile}},[t._v("Upload File ")])]):t._e(),t._v(" "),t.details.ComGt?n("div",{staticClass:"interviewDtlBox"},[n("p",[t._v("\n                "+t._s(t.details.ComOf)+"\n                "),n("a",{staticStyle:{"text-decoration":"none",color:"#77c01e"},on:{click:function(e){return t.download(t.details.id,t.details.ComGt,t.details.ComOf)}}},[t._v("\n                  Download")])])]):t._e()]),t._v(" "),n("div",{staticClass:"verifyProfile"},[n("h4",[t._v(" Headoffice Address\n            "),t.details&&t.details.ComAp&&null==t.details.ComAv&&t.details.ComAw<3?[n("span",{staticClass:"sentVeryfy"},[t._v("(Verification code sent)")])]:t._e(),t._v(" "),t.details&&1==t.details.ComAv?[n("span",{staticClass:"veryfy"},[t._v("Verified")])]:t._e(),t._v(" "),t.details&&3==t.details.ComAw?[n("span",{staticClass:"nVeryfy"},[t._v("Verify after 24 hours")])]:t._e()],2),t._v(" "),t.details?[t.details.ComAd?n("div",[n("h3",[t._v("Address")]),t._v(" "),n("p",[t._v(t._s(t.details.ComAd))])]):t._e(),t._v(" "),t.details.landmark?n("div",[n("h3",[t._v("Landmark")]),t._v(" "),n("p",[t._v(t._s(t.details.landmark))])]):t._e(),t._v(" "),t.details.pincode?n("div",[n("h3",[t._v("Pincode")]),t._v(" "),n("p",[t._v(t._s(t.details.pincode))])]):t._e(),t._v(" "),t.details.ComAd?n("div",[n("h3",[t._v("City")]),t._v(" "),n("p",[t._v(t._s(t.details.city))])]):t._e(),t._v(" "),t.details.state?n("div",[n("h3",[t._v("State")]),t._v(" "),n("p",[t._v(t._s(t.details.state))])]):t._e(),t._v(" "),t.details.ComAd?n("div",[n("h3",[t._v("Country")]),t._v(" "),n("p",[t._v(t._s(t.details.country))])]):t._e(),t._v(" "),n("div",{staticClass:"formBtnBox"},[t.details.ComAp&&null==t.details.ComAv?n("a",{staticClass:"btn w-auto",on:{click:t.sendAddressOtp}},[t._v("Enter Verifiction code")]):t._e(),t._v(" "),null==t.details.ComAp&&null==t.details.ComAv?n("a",{staticClass:"btn w-auto",on:{click:function(e){return t.submit(t.details)}}},[t._v("Verify address")]):t._e()])]:[n("p",[t._v("Headoffice address not added yet")])]],2),t._v(" "),n("div",{staticClass:"verifyProfile"},[n("h4",[t._v("\n            Office Mobile\n            "),t.details&&null==t.details.mobV?[n("span",{staticClass:"nVeryfy"},[t._v("(Not Verified)")])]:t._e(),t._v(" "),t.details&&1==t.details.mobV?[n("span",{staticClass:"veryfy"},[t._v("(Verified)")])]:t._e()],2),t._v(" "),n("p",[t._v("+91 "+t._s(t.details.ComMb))]),t._v(" "),n("div",{staticClass:"formBtnBox"},[t.details&&null==t.details.mobV?[n("a",{staticClass:"btn w-auto",on:{click:function(e){return t.mobileotp(t.details.ComMb)}}},[t._v("Verify Now")])]:t._e()],2)])])],2)]):t._e(),t._v(" "),1==t.companyAddress?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent verifyMobile"},[t._m(8),t._v(" "),n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group formBox"},[n("label",[t._v("Headoffice Address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text",placeholder:"eg. H.No.302, street no. 9, near alpha tower"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),t.address_error?n("div",{staticClass:"errorText"},[t._v("\n                                              "+t._s(t.address_error)+"\n                                          ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("label",[t._v("Landmark")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.landmark,expression:"landmark"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Landmark"},domProps:{value:t.landmark},on:{input:function(e){e.target.composing||(t.landmark=e.target.value)}}}),t._v(" "),t.landmark_error?n("div",{staticClass:"errorText"},[t._v("\n                                          "+t._s(t.landmark_error)+"\n                                        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("label",[t._v("City")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),t._v(" "),t.city_error?n("div",{staticClass:"errorText"},[t._v("\n                                          "+t._s(t.city_error)+"\n                                        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("label",[t._v("Pincode")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.zip,expression:"zip"}],staticClass:"form-control",attrs:{type:"text",maxlength:"6",placeholder:"PinCode"},domProps:{value:t.zip},on:{input:[function(e){e.target.composing||(t.zip=e.target.value)},t.checkZIP]}}),t._v(" "),t.zip_error?n("div",{staticClass:"errorText"},[t._v("\n                                            "+t._s(t.zip_error)+"\n                                          ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group formBox"},[n("label",[t._v("State")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"State"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}}),t._v(" "),t.state_error?n("div",{staticClass:"errorText"},[t._v("\n                                          "+t._s(t.state_error)+"\n                                        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("label",[t._v("Country")]),t._v(" "),n("client-only",[n("country-select",{staticClass:"form-control",attrs:{autocomplete:!0,country:t.country,countryName:!0,topCountry:"US"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),t._v(" "),t.country_error?n("div",{staticClass:"errorText"},[t._v("\n                                      "+t._s(t.country_error)+"\n                                    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"col-12 text-right"},[n("div",{staticClass:"formBtnBox"},[n("a",{staticClass:"btn w-auto outline",on:{click:t.addressback}},[t._v("Back")]),t._v(" "),n("a",{staticClass:"btn w-auto",attrs:{href:"#ach"},on:{click:t.showConfirm}},[t._v("Add Address")])])])])])])]):t._e(),t._v(" "),1==t.sendmobileotp?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent verifyMobile"},[t._m(9),t._v(" "),t._m(10),t._v(" "),n("div",{staticClass:"veryfyMobile"},[n("h4",[t._v("Mobile Number")]),t._v(" "),n("div",{staticClass:"number otpInput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",maxlength:"10",placeholder:"Mobile Number"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),t._v(" "),t.exist_error?n("div",{staticClass:"errorText"},[t._v("\n          "+t._s(t.exist_error)+"\n        ")]):t._e(),t._v(" "),n("div",{staticClass:"formBtnBox"},[n("a",{staticClass:"btn w-auto outline",on:{click:t.getback}},[t._v("Back")]),t._v(" "),n("button",{staticClass:"btn w-auto",on:{click:t.sendMobileOtp}},[t._v("Send OTP")])])])])]):t._e(),t._v(" "),n("b-modal",{ref:"confirmModal",attrs:{centered:"",id:"editModal","hide-footer":"","hide-header":"",title:"Using Component Methods"}},[n("div",{staticClass:"d-block"},[n("div",[n("label",[t._v("We will send a verification code via post on provoded address to\n          verify. Are you sure provided address is correct?")]),t._v(" "),n("div",{staticClass:"formBtnBox"},[n("b-button",{staticClass:"mt-2 ml-2 btn w-auto outline",on:{click:function(e){return t.$bvModal.hide("editModal")}}},[t._v("No")]),t._v(" "),n("b-button",{staticClass:"mt-2 mr-2 btn w-auto",on:{click:t.UpdateCompanyAddress}},[t._v("Yes")])],1)])])]),t._v(" "),1==t.next_step?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent"},[n("div",{staticClass:"invitationsBox success"},[t._m(11),t._v(" "),n("p",[t._v("Thanks for providing your address information")]),t._v(" "),n("p",[t._v("\n          We will send a verification code on your provided address soon. You\n          need to enter that code for verify address.\n        ")]),t._v(" "),n("div",{staticClass:"formBtnBox"},[n("button",{staticClass:"btn w-auto",on:{click:function(e){return e.preventDefault(),t.gobacktoprofile.apply(null,arguments)}}},[t._v("\n            back\n          ")])])])])]):t._e(),t._v(" "),1==t.verifyMobile?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent verifyMobile"},[t._m(12),t._v(" "),t._m(13),t._v(" "),n("div",{staticClass:"veryfyMobile"},[n("h4",[t._v("OTP")]),t._v(" "),t.details?n("p",[t._v("\n          OTP send on your mobile number "),n("span",[t._v("+91 "+t._s(t.mobile))])]):t._e(),t._v(" "),n("div",{staticClass:"otpInput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile_otp1,expression:"mobile_otp1"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.mobile_otp1},on:{input:[function(e){e.target.composing||(t.mobile_otp1=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile_otp2,expression:"mobile_otp2"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.mobile_otp2},on:{input:[function(e){e.target.composing||(t.mobile_otp2=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile_otp3,expression:"mobile_otp3"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.mobile_otp3},on:{input:[function(e){e.target.composing||(t.mobile_otp3=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile_otp4,expression:"mobile_otp4"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.mobile_otp4},on:{input:[function(e){e.target.composing||(t.mobile_otp4=e.target.value)},t.nextfield]}})]),t._v(" "),n("client-only",[n("vue-countdown-timer",{attrs:{"start-time":t.start_time,"end-time":t.end_time,interval:1e3,"label-position":"begin","end-text":"Time over! click on resend otp ","seconds-txt":" seconds"},on:{end_callback:function(e){return t.endCallBack()}},scopedSlots:t._u([{key:"countdown",fn:function(e){return[n("span",[t._v(t._s(e.props.minutes))]),n("i",[t._v(t._s(e.props.minutesTxt))]),t._v(" "),n("span",[t._v(t._s(e.props.seconds))]),n("i",[t._v(t._s(e.props.secondsTxt))])]}}],null,!1,243522474)})],1),t._v(" "),t.wrong_otp?n("div",{staticClass:"errorText"},[t._v("\n          "+t._s(t.wrong_otp)+"\n        ")]):t._e(),t._v(" "),n("div",{staticClass:"formBtnBox"},[1==t.resend?n("button",{staticClass:"btn w-auto",on:{click:t.resendMobileOtp}},[t._v("Resend OTP")]):t._e(),t._v(" "),n("button",{staticClass:"btn w-auto outline",on:{click:t.mobileback}},[t._v("back")]),t._v(" "),n("button",{staticClass:"btn w-auto",on:{click:t.confirmMobile}},[t._v("Confirm OTP")])])],1)])]):t._e(),t._v(" "),1==t.step3?n("div",{staticClass:"updateBox"},[n("div",{staticClass:"col-lg-7 col-md-6"},[n("div",{staticClass:"updateBox"},[n("div",{staticClass:"updateContent verifyMobile"},[t._m(14),t._v(" "),n("div",{staticClass:"veryfyMobile"},[n("h4",[t._v("Verification Code")]),t._v(" "),n("p",[t._v("\n              You got a six digit code from post. Please enter that code\n              below:\n            ")]),t._v(" "),n("div",{staticClass:"otpInput"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp1,expression:"otp1"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp1},on:{input:[function(e){e.target.composing||(t.otp1=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp2,expression:"otp2"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp2},on:{input:[function(e){e.target.composing||(t.otp2=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp3,expression:"otp3"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp3},on:{input:[function(e){e.target.composing||(t.otp3=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp4,expression:"otp4"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp4},on:{input:[function(e){e.target.composing||(t.otp4=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp5,expression:"otp5"}],attrs:{type:"text",maxlength:"1",placeholder:"-"},domProps:{value:t.otp5},on:{input:[function(e){e.target.composing||(t.otp5=e.target.value)},t.nextfield]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.otp6,expression:"otp6"}],attrs:{type:"text",maxlength:"1",input:"nextfield",placeholder:"-"},domProps:{value:t.otp6},on:{input:function(e){e.target.composing||(t.otp6=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"formBtnBox"},[n("button",{staticClass:"btn w-auto outline",on:{click:t.backtoprofile}},[t._v("\n                back\n              ")]),t._v(" "),n("button",{staticClass:"btn w-auto",on:{click:t.confirm}},[t._v("\n                Confirm OTP\n              ")])])])])])])]):t._e()],1)}),n,!1,null,null,null);e.default=component.exports}}]);