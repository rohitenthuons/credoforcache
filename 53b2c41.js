(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{416:function(t,e,o){t.exports=o.p+"img/error.2dc37a0.svg"},417:function(t,e,o){t.exports=o.p+"img/verify.3ec6fed.svg"},431:function(t,e,o){t.exports=o.p+"img/edit.8faff52.svg"},546:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-2 col-md-3 pl-1"},[o("div",{staticClass:"profileLftSB"},[o("p",[t._v("\n            A good company page can help the candidates to understand your business needs and helps to fill the gaps.\n            ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2",attrs:{id:"ach"}},[o("span",[t._v("Business Profile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aleartImg"},[e("img",{attrs:{src:o(416),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aleartText faild"},[o("span",[t._v("Sorry,")]),t._v("  it seems error/s, please fix it.\n              ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progressBox addCompanyProgress"},[o("div",{staticClass:"progressBar done"},[o("small",[t._v("1")])]),t._v(" "),o("div",{staticClass:"progressBar"},[o("small",[t._v("2")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"edit"},[e("img",{attrs:{src:o(431),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-2 col-md-3 pl-1"},[o("div",{staticClass:"profileLftSB"},[o("p",[t._v("\n              A good company page can help the candidates to understand your business needs and helps to fill the gaps.\n            ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title2",attrs:{id:"ach"}},[o("span",[t._v("Business Profile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aleartImg"},[e("img",{attrs:{src:o(416),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aleartText faild"},[o("span",[t._v("Sorry,")]),t._v("  it seems error/s, please fix it.\n              ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progressBox addCompanyProgress mb-0"},[o("div",{staticClass:"progressBar done"},[o("small",[t._v("1")])]),t._v(" "),o("div",{staticClass:"progressBar done"},[o("small",[t._v("2")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-2 col-md-3 pl-1"},[o("div",{staticClass:"profileLftSB"},[o("p",[t._v("\n              Start creating your business profile to enter next level of word\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"invitationsImg"},[e("img",{attrs:{src:o(417),alt:""}})])}],n=(o(33),o(56),o(64),o(111),o(25),o(32),{layout:"afterlogin",middleware:["auth","checkLoggedIn"],data:function(){return{step1:!0,step2:!1,count:0,image:null,success:null,image_error:null,url:null,company_name:null,companySlug:null,company_name_error:null,website:null,website_error:null,industry:"",industryOption:["Accounting","Airlines/Aviation","Alternative Dispute Resolution","Alternative Medicine","Animation","Apparel & Fashion","Architecture & Planning","Arts and Crafts","Automotive","Aviation & Aerospace","Banking","Biotechnology","Broadcast Media","Building Materials","Business Supplies and Equipment","Capital Markets","Chemicals","Civic & Social Organization","Civil Engineering","Commercial Real Estate","Computer & Network Security","Computer Games","Computer Hardware","Computer Networking","Computer Software","Construction","Consumer Electronics","Consumer Goods","Consumer Services","Cosmetics","Dairy","Defense & Space","Design","Education Management","E-Learning","Electrical/Electronic Manufacturing","Entertainment","Environmental Services","Events Services","Executive Office","Facilities Services","Farming","Financial Services","Fine Art","Fishery","Food & Beverages","Food Production","Fund-Raising","Furniture","Gambling & Casinos","Glass, Ceramics & Concrete","Government Administration","Government Relations","Graphic Design","Health, Wellness and Fitness","Higher Education","Hospital & Health Care","Hospitality","Human Resources","Import and Export","Individual & Family Services","Industrial Automation","Information Services","Information Technology and Services","Insurance","International Affairs","International Trade and Development","Internet","Investment Banking","Investment Management","Judiciary","Law Enforcement","Law Practice","Legal Services","Legislative Office","Leisure, Travel & Tourism","Libraries","Logistics and Supply Chain","Luxury Goods & Jewelry","Machinery","Management Consulting","Maritime","Market Research","Marketing and Advertising","Mechanical or Industrial Engineering","Media Production","Medical Devices","Medical Practice","Mental Health Care","Military","Mining & Metals","Mobile Games","Motion Pictures and Film","Museums and Institutions","Music","Nanotechnology","Newspapers","Non-Profit Organization Management","Oil & Energy","Online Media","Outsourcing/Offshoring","Package/Freight Delivery","Packaging and Containers","Paper & Forest Products","Performing Arts","Pharmaceuticals","Philanthropy","Photography","Plastics","Political Organization","Primary/Secondary Education","Printing","Professional Training & Coaching","Program Development","Public Policy","Public Relations and Communications","Public Safety","Publishing","Railroad Manufacture","Ranching","Real Estate","Recreational Facilities and Services","Religious Institutions","Renewables & Environment","Research","Restaurants","Retail","Security and Investigations","Semiconductors","Shipbuilding","Sporting Goods","Sports","Staffing and Recruiting","Supermarkets","Telecommunications","Textiles","Think Tanks","Tobacco","Translation and Localization","Transportation/Trucking/Railroad","Utilities","Venture Capital & Private Equity","Veterinary","Warehousing","Wholesale","Wine and Spirits","Wireless","Writing and Editing"],industry_error:null,company_size:"",company_size_error:null,company_type:"",company_type_error:null,company_email:null,company_email_error:null,company_mobile:null,company_mobile_error:null,address:null,next_step:!1,address_error:null,city:null,city_error:null,country:null,country_error:null,show:!1,params:{token:"123456798",name:"avatar"},headers:{smail:"*_~"}}},methods:{customFormatter:function(t){return o(71)(t).format("YYYY-MM-DD")},toggleShow:function(){this.show=!this.show},cropSuccess:function(t,e){var o=this;this.url=t,fetch(this.url).then((function(t){return t.blob()})).then((function(t){o.image=new File([t],"File name",{type:"image/png"})}))},cropUploadSuccess:function(t,e){},cropUploadFail:function(t,e){},closeRightSuccess:function(){this.successLeft=null,this.success=null},onFileChange:function(t){try{this.image=t.target.files[0],this.url=URL.createObjectURL(this.image)}catch(t){}},clearErrorFields:function(){this.image_error=null,this.company_name_error=null,this.website_error=null,this.industry_error=null,this.company_size_error=null,this.company_type_error=null,this.company_email_error=null,this.company_mobile_error=null,this.address_error=null,this.city_error=null,this.country_error=null,this.count=0,this.success=null},saveAndNext:function(){if(this.clearErrorFields(),null==this.image&&(this.image_error="Please select image",this.count+=1),this.testEmpty(this.company_name)<=0&&(this.company_name_error="Please enter company name",this.count+=1),this.testEmpty(this.industry)<=0&&(this.industry_error="Please select industry",this.count+=1),this.testEmpty(this.company_size)<=0&&(this.company_size_error="Please select company size",this.count+=1),this.testEmpty(this.company_type)<=0&&(this.company_type_error="Please select company type",this.count+=1),this.count>0)return this.success=!1,void this.scroll();this.step1=!1,this.step2=!0},scroll:function(){$(document).on("click",'a[href^="#"]',(function(t){var e=$(this).attr("href"),o=$(e);if(0!==o.length){t.preventDefault();var r=o.offset().top;return $("body, html").animate({scrollTop:r}),!1}}))},goBack:function(){this.step2=!1,this.step1=!0},testEmpty:function(t){return null==t?0:t=(t=(t=t.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")},submit:function(){var t=this;if(this.$store.commit("startLoading"),this.clearErrorFields(),this.testEmpty(this.company_email)<=0&&(this.company_email_error="Please enter company email",this.count+=1),this.testEmpty(this.company_mobile)<=0&&(this.company_mobile_error="Please enter company mobile",this.count+=1),this.testEmpty(this.address)<=0&&(this.address_error="Please enter address",this.count+=1),this.address&&this.address.length>5e3&&(this.address_error="Address cannot be more than 5000 characters",this.count+=1),this.testEmpty(this.city)<=0&&(this.city_error="Please enter city",this.count+=1),this.testEmpty(this.country)<=0&&(this.country_error="Please select country",this.count+=1),this.count>0)return this.$store.commit("stopLoading"),this.success=!1,void this.scroll();var data=new FormData;data.append("company_image",this.image),data.append("company_name",this.company_name),data.append("website",this.website),data.append("industry",this.industry),data.append("company_size",this.company_size),data.append("company_type",this.company_type),data.append("company_email",this.company_email),data.append("company_mobile",this.company_mobile),data.append("company_address",this.address),data.append("city",this.city),data.append("country",this.country),this.$store.commit("startLoading"),this.$axios.post("https://robob.credotree.com/api/company-register",data,{headers:{"content-type":"multipart/form-data"}}).then((function(e){try{t.image_error=e.data.response.company_image[0],t.$store.commit("stopLoading"),t.step2=!1,t.step1=!0}catch(t){}try{t.company_name_error=e.data.response.company_name[0],t.$store.commit("stopLoading"),t.step2=!1,t.step1=!0}catch(t){}try{t.website_error=e.data.response.website[0],t.$store.commit("stopLoading"),t.step2=!1,t.step1=!0}catch(t){}try{t.industry_error=e.data.response.industry[0],t.$store.commit("stopLoading"),t.step2=!1,t.step1=!0}catch(t){}try{t.company_size_error=e.data.response.company_size[0],t.$store.commit("stopLoading"),t.step2=!1,t.step1=!0}catch(t){}try{t.company_type_error=e.data.response.company_type[0],t.$store.commit("stopLoading"),t.step2=!1,t.step1=!0}catch(t){}try{t.company_email_error=e.data.response.company_email[0],t.$store.commit("stopLoading"),t.step2=!0,t.step1=!1}catch(t){}try{t.company_mobile_error=e.data.response.company_mobile[0],t.$store.commit("stopLoading"),t.step2=!0,t.step1=!1}catch(t){}try{t.address_error=e.data.response.company_address[0],t.$store.commit("stopLoading"),t.step2=!0,t.step1=!1}catch(t){}try{t.city_error=e.data.response.city[0],t.$store.commit("stopLoading"),t.step2=!0,t.step1=!1}catch(t){}try{t.country_error=e.data.response.country[0],t.$store.commit("stopLoading"),t.step2=!0,t.step1=!1}catch(t){}t.$store.commit("stopLoading"),"success"==e.data.status&&(localStorage.setItem("credoActiveCompanySlug",e.data.slug),t.companySlug=e.data.slug,localStorage.setItem("credoActiveCompanyImage",e.data.company_image),localStorage.setItem("credoActiveCompanyName",e.data.company_name),localStorage.setItem("credoActiveCompanyRole",e.data.role),t.$store.commit("stopLoading"),t.step2=!1,t.next_step=!0),t.$store.commit("stopLoading")})).catch((function(t){this.$store.commit("stopLoading")}))}}}),c=o(24),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.step1?r("section",{staticClass:"mainSection"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-lg-7 col-md-6"},[r("div",{staticClass:"profileBox"},[t._m(1),t._v(" "),0==t.success?[r("div",{staticClass:"aleartBox error"},[r("span",{staticClass:"close",on:{click:t.closeRightSuccess}},[r("img",{attrs:{src:o(309),alt:""}})]),t._v(" "),t._m(2),t._v(" "),t._m(3)])]:t._e(),t._v(" "),t._m(4),t._v(" "),r("client-only",[r("my-upload",{attrs:{langType:"en",field:"img",noSquare:!0,width:300,height:300,params:t.params,headers:t.headers,"img-format":"png"},on:{"crop-success":t.cropSuccess,"crop-upload-success":t.cropUploadSuccess,"crop-upload-fail":t.cropUploadFail},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),t._v(" "),r("div",{staticClass:"userProfile"},[r("h6",{},[t._v("Your Company Logo")]),t._v(" "),r("label",{staticClass:"profileImg"},[r("input",{on:{click:t.toggleShow}}),t._v(" "),t.url?r("img",{attrs:{src:t.url}}):r("img",{attrs:{src:o(198),id:"output",alt:""}}),t._v(" "),t._m(5)]),t._v(" "),r("p",[t._v("(For Better result image size should 150x150)")]),t._v(" "),t.image_error?r("div",{staticClass:"errorText"},[t._v("\n                "+t._s(t.image_error)+"\n              ")]):t._e()]),t._v(" "),r("div",{staticClass:"profileForm"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.company_name,expression:"company_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Company Name"},domProps:{value:t.company_name},on:{input:function(e){e.target.composing||(t.company_name=e.target.value)}}}),t._v(" "),t.company_name_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.company_name_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Website")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.website,expression:"website"}],staticClass:"form-control",attrs:{type:"text",placeholder:"abcxycompany.com"},domProps:{value:t.website},on:{input:function(e){e.target.composing||(t.website=e.target.value)}}}),t._v(" "),t.website_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.website_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Industry")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.industry,expression:"industry"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.industry=e.target.multiple?o:o[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[t._v("\n                        Please select\n                      ")]),t._v(" "),t._l(t.industryOption,(function(e){return[r("option",{key:e,domProps:{value:e}},[t._v("\n                          "+t._s(e)+"\n                        ")])]}))],2),t._v(" "),t.industry_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.industry_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Company Size")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.company_size,expression:"company_size"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.company_size=e.target.multiple?o:o[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[t._v("\n                        Please select\n                      ")]),t._v(" "),r("option",{attrs:{value:"02-10 Employee"}},[t._v("02-10 Employee")]),t._v(" "),r("option",{attrs:{value:"10-25 Employee"}},[t._v("10-25 Employee")]),t._v(" "),r("option",{attrs:{value:"25-50 Employee"}},[t._v("25-50 Employee")]),t._v(" "),r("option",{attrs:{value:"50-250 Employee"}},[t._v("50-250 Employee")]),t._v(" "),r("option",{attrs:{value:"250-1000 Employee"}},[t._v("250-1000 Employee")]),t._v(" "),r("option",{attrs:{value:"1000-5000 Employee"}},[t._v("1000-5000 Employee")]),t._v(" "),r("option",{attrs:{value:"5000+ Employee"}},[t._v("5000+ Employee")])]),t._v(" "),t.company_size_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.company_size_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Company Type")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.company_type,expression:"company_type"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.company_type=e.target.multiple?o:o[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[t._v("\n                        Please select\n                      ")]),t._v(" "),r("option",{attrs:{value:"Product"}},[t._v("Product")]),t._v(" "),r("option",{attrs:{value:"Service"}},[t._v("Service")]),t._v(" "),r("option",{attrs:{value:"Product and Service"}},[t._v("\n                        Product and Service\n                      ")])]),t._v(" "),t.company_type_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.company_type_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-12"},[r("div",{staticClass:"formBtnBox text-right"},[r("a",{staticClass:"btn w-auto",attrs:{href:"#ach"},on:{click:t.saveAndNext}},[t._v("\n                      Save and Next\n                    ")])])])])])],2)]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-3"})])])]):t._e(),t._v(" "),t.step2?r("section",{staticClass:"mainSection"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(6),t._v(" "),r("div",{staticClass:"col-lg-7 col-md-6"},[r("div",{staticClass:"profileBox"},[t._m(7),t._v(" "),0==t.success?[r("div",{staticClass:"aleartBox error"},[r("span",{staticClass:"close",on:{click:t.closeRightSuccess}},[r("img",{attrs:{src:o(309),alt:""}})]),t._v(" "),t._m(8),t._v(" "),t._m(9)])]:t._e(),t._v(" "),t._m(10),t._v(" "),r("div",{staticClass:"profileForm"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Company Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.company_email,expression:"company_email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"abcxycompany@info.com"},domProps:{value:t.company_email},on:{input:function(e){e.target.composing||(t.company_email=e.target.value)}}}),t._v(" "),t.company_email_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.company_email_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Company Mobile")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.company_mobile,expression:"company_mobile"}],staticClass:"form-control",attrs:{type:"text",placeholder:"123 456 7890"},domProps:{value:t.company_mobile},on:{input:function(e){e.target.composing||(t.company_mobile=e.target.value)}}}),t._v(" "),t.company_mobile_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.company_mobile_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Headquater Address")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),t.address_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.address_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Headquater City")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),t._v(" "),t.city_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.city_error)+"\n                    ")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"form-group formBox"},[r("label",[t._v("Headquater Country")]),t._v(" "),r("client-only",[r("country-select",{staticClass:"form-control",attrs:{country:t.country,autocomplete:!0,countryName:!0,topCountry:"US"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),t._v(" "),t.country_error?r("div",{staticClass:"errorText"},[t._v("\n                      "+t._s(t.country_error)+"\n                    ")]):t._e()],1)]),t._v(" "),r("div",{staticClass:"col-12"},[r("div",{staticClass:"formBtnBox text-right"},[r("a",{staticClass:"btn w-auto outline",on:{click:t.goBack}},[t._v("Back")]),t._v(" "),r("a",{staticClass:"btn w-auto",attrs:{href:"#ach"},on:{click:t.submit}},[t._v("Save")])])])])])],2)]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-3"})])])]):t._e(),t._v(" "),1==t.next_step?r("section",{staticClass:"mainSection"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(11),t._v(" "),r("div",{staticClass:"col-lg-7 col-md-6"},[r("div",{staticClass:"updateBox"},[r("div",{staticClass:"updateContent"},[r("div",{staticClass:"invitationsBox success"},[t._m(12),t._v(" "),r("p",[t._v("Company profile has been created successfully")]),t._v(" "),r("div",{staticClass:"formBtnBox"},[r("NuxtLink",{attrs:{to:"/company/"+t.companySlug+"/basicinfo"}},[r("a",{staticClass:"btn w-auto"},[t._v("View Company Profile")])])],1)])])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-3"})])])]):t._e()])}),r,!1,null,null,null);e.default=component.exports}}]);