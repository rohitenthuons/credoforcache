(window.webpackJsonp=window.webpackJsonp||[]).push([[18,7],{416:function(e,t,r){e.exports=r.p+"img/error.2dc37a0.svg"},417:function(e,t,r){e.exports=r.p+"img/verify.3ec6fed.svg"},420:function(e,t,r){},421:function(e,t,r){"use strict";r.r(t);r(154),r(85),r(56);var o={name:"VueStars",props:{max:{type:Number,required:!1,default:5},value:{type:Number,required:!1,default:0},name:{type:String,required:!1,default:"rating"},char:{type:String,required:!1,default:"★"},inactiveChar:{type:String,required:!1,default:null},readonly:{type:Boolean,required:!1,default:!1},activeColor:{type:String,required:!1,default:null},inactiveColor:{type:String,required:!1,default:null},shadowColor:{type:String,required:!1,default:null},hoverColor:{type:String,required:!1,default:null}},computed:{ratingChars:function(){return Array.from(this.char)},inactiveRatingChars:function(){return this.inactiveChar?Array.from(this.inactiveChar):this.ratingChars},notouch:function(){return"undefined"!=typeof document&&!("ontouchstart"in document.documentElement)},mapCssProps:function(){var e={};return this.activeColor&&(e["--active-color"]=this.activeColor),this.inactiveColor&&(e["--inactive-color"]=this.inactiveColor),this.shadowColor&&(e["--shadow-color"]=this.shadowColor),this.hoverColor&&(e["--hover-color"]=this.hoverColor),e}},methods:{updateInput:function(e){this.$emit("input",parseInt(e,10))},getActiveLabel:function(e){var s=this.ratingChars;return s[Math.min(s.length-1,e-1)]},getInactiveLabel:function(e){var s=this.inactiveRatingChars;return s[Math.min(s.length-1,e-1)]}}},n=(r(424),r(24)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"ratingEl",staticClass:"vue-stars",class:{readonly:e.readonly,notouch:e.notouch},style:e.mapCssProps},[r("input",{attrs:{id:e.name+"0",name:e.name,type:"radio",value:"0"},domProps:{checked:0===e.value}}),e._v(" "),e._l(e.max,(function(t){return[r("label",{key:"l"+t,attrs:{for:e.name+t}},[r("span",{staticClass:"active"},[e._t("activeLabel",(function(){return[e._v(e._s(e.getActiveLabel(t)))]}))],2),e._v(" "),r("span",{staticClass:"inactive"},[e._t("inactiveLabel",(function(){return[e._v(e._s(e.getInactiveLabel(t)))]}))],2)]),e._v(" "),r("input",{key:"i"+t,attrs:{id:e.name+t,name:e.name,disabled:e.readonly,type:"radio"},domProps:{checked:e.value===t,value:t},on:{change:function(t){return e.updateInput(t.target.value)}}})]}))],2)}),[],!1,null,null,null);t.default=component.exports},424:function(e,t,r){"use strict";r(420)},598:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title2"},[r("span",[e._v("Company Review")]),e._v(" "),r("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"aleartImg"},[t("img",{attrs:{src:r(416),alt:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"aleartText faild"},[r("span",[e._v("Sorry,")]),e._v(" it seems error/s, please fix it.\n              ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"invitationsImg"},[t("img",{attrs:{src:r(417),alt:""}})])}],n=(r(25),r(44),r(32),r(10),r(50),{components:{VueStars:r(421).default},layout:"companyreviewlayout",middleware:["auth","checkLoggedIn"],data:function(){return{assetUrl:"https://robob.credotree.com/",cchannel:null,company_slug:null,company_review_message:null,review_message:null,userSlug:null==this.$auth.user.slug?"":this.$auth.user.slug,culture:0,salary:0,success:null,oppurtunity:0,worklife:0,security:0,count:0,words:0,review:null,date_error:null,field_error:null,review_error:null,user_review_id:null,link_id:null,step1:!0,next_step:!1,company_id:null,user_id:null,companyinfo:[],relieving_date:null,functionUse:"",leave_today:null,todayDate:(new Date).toISOString().split("T")[0]}},filters:{formatfilter:function(e,t,r,o,n){return(e+t+r+o+n)/5}},computed:{maxtodaydate:function(){var e=new Date(this.todayDate.replace(/-/g,"/")),t=e.getDate(),r=e.getMonth(),o=e.getFullYear();return new Date(o,r,t)}},mounted:function(){var e=this;document.getElementsByClassName("afterLogin").length>0||(document.body.className+=" afterLogin "),this.$store.commit("startLoading"),this.company_id=localStorage.getItem("getcompanyidfromnotification"),this.user_id=localStorage.getItem("getuseridfromnotification"),this.link_id=localStorage.getItem("getlinkidforcompany"),this.user_review_id=localStorage.getItem("user_review_id"),this.functionUse=localStorage.getItem("leaveOrNotification"),this.link_id&&this.$axios.post("https://robob.credotree.com/api/get-company-review-info",{link_id:this.link_id}).then((function(t){e.companyinfo=t.data,e.$store.commit("stopLoading")})).catch((function(e){this.$store.commit("stopLoading")})),this.$store.commit("stopLoading")},methods:{scroll:function(){$(document).on("click",'a[href^="#"]',(function(e){var t=$(this).attr("href"),r=$(t);if(0!==r.length){e.preventDefault();var o=r.offset().top;return $("body, html").animate({scrollTop:o}),!1}}))},testEmpty:function(e){return null==e?0:e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")},goback:function(){this.$router.push("/employment")},closeRightSuccess:function(){this.success=null},showModal:function(){if(this.count=0,this.date_error=null,this.success=null,this.field_error=null,this.review_error=null,this.$store.commit("stopLoading"),0==this.culture&&(this.field_error="Please provide review in all category",this.count+=1),0==this.security&&(this.field_error="Please provide review in all category",this.count+=1),0==this.oppurtunity&&(this.field_error="Please provide review in all category",this.count+=1),0==this.salary&&(this.field_error="Please provide review in all category",this.count+=1),0==this.worklife&&(this.field_error="Please provide review in all category",this.count+=1),this.testEmpty(this.review)<=0&&(this.review_error="Please fill this field",this.count+=1),"leave"==this.functionUse&&null==this.relieving_date&&(this.date_error="Please fill this field",this.count+=1),"leave"==this.functionUse&&this.relieving_date&&this.convertDate(this.relieving_date)==this.convertDate(new Date)&&(this.date_error="You can give a company review after leaving the company not on the same day of relieving",this.count+=1),this.review&&this.review.length>5e3&&(this.review_error="Review cannot be more than 5000 characters",this.count+=1),this.review&&this.words<50&&(this.review_error="Please provide minimum 50 words",this.count+=1),this.count>0)return this.$store.commit("stopLoading"),this.success=!1,void this.scroll();this.$bvModal.show("editModal")},wordCount:function(){var s=this.review;s=(s=(s=s.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n"),this.words=s.split(" ").filter((function(e){return""!=e})).length},convertDate:function(e){return r(71)(e).format("YYYY-MM-DD")},shows:function(){var e=this.maxtodaydate.getMonth(),t=this.maxtodaydate.getFullYear();setTimeout((function(){$(".p-datepicker-month").each((function(){$(this).children("option").show()})),t==$(".p-datepicker-year").val()&&$(".p-datepicker-month > option").each((function(){e<$(this).val()&&$(this).remove()}))}),100)},submit:function(){var e=this,t=new Date,r=t.getDate(),o=t.getMonth()+1,n=t.getFullYear();if(this.leave_today=n+"-"+o+"-"+r,"leave"==this.functionUse)this.$axios.post("https://robob.credotree.com/api/write-company-review",{company_id:this.company_id,culture:this.culture,salary:this.salary,worklife:this.worklife,oppurtunity:this.oppurtunity,review:this.review,security:this.security,user_review_id:this.user_review_id,link_id:this.link_id,relieving_date:this.convertDate(this.relieving_date),user_id:this.user_id}).then((function(t){"success"==t.data.status&&(e.$bvModal.hide("editModal"),1==t.data.review?e.company_review_message=!0:e.review_message=!0,e.$axios.post("https://robob.credotree.com/api/employee-leave",{link_id:e.link_id,company_name:e.company_id,todaydate:e.leave_today}).then((function(t){e.$store.commit("rightReload")})).catch((function(e){this.$store.commit("stopLoading")})),e.culture=0,e.salary=0,e.review=null,e.worklife=0,e.oppurtunity=0,e.security=0,e.step1=!1,e.next_step=!0,e.link_id=null,localStorage.removeItem("getcompanyidfromnotification"),localStorage.removeItem("getuseridfromnotification"),localStorage.removeItem("getlinkidforcompany"),localStorage.removeItem("user_review_id"),localStorage.removeItem("leaveOrNotification"),e.$store.commit("rightReload"),e.$store.commit("stopLoading")),e.$store.commit("stopLoading")})).catch((function(e){this.$store.commit("stopLoading")}));else if("givereview"==this.functionUse){var l=localStorage.getItem("getreviewfromemployment");this.$axios.post("https://robob.credotree.com/api/write-review-for-company-employment",{company_id:this.company_id,culture:this.culture,salary:this.salary,worklife:this.worklife,oppurtunity:this.oppurtunity,review:this.review,security:this.security,link_id:this.link_id,user_id:this.user_id,reviewtype:l,relieving_date:this.convertDate(this.relieving_date)}).then((function(t){"success"==t.data.status&&(e.$bvModal.hide("editModal"),1==t.data.review?e.company_review_message=!0:e.review_message=!0,e.culture=0,e.salary=0,e.review=null,e.worklife=0,e.oppurtunity=0,e.security=0,e.step1=!1,e.next_step=!0,e.link_id=null,localStorage.removeItem("getcompanyidfromnotification"),localStorage.removeItem("getuseridfromnotification"),localStorage.removeItem("getlinkidforcompany"),localStorage.removeItem("user_review_id"),localStorage.removeItem("leaveOrNotification"),e.$store.commit("rightReload"),e.$store.commit("stopLoading")),e.$store.commit("stopLoading")})).catch((function(e){this.$store.commit("stopLoading")}))}else this.$axios.post("https://robob.credotree.com/api/write-review-for-company",{company_id:this.company_id,culture:this.culture,salary:this.salary,worklife:this.worklife,oppurtunity:this.oppurtunity,review:this.review,security:this.security,user_review_id:this.user_review_id,link_id:this.link_id,user_id:this.user_id,relieving_date:this.convertDate(this.relieving_date)}).then((function(t){"success"==t.data.status&&(e.$bvModal.hide("editModal"),1==t.data.review?e.company_review_message=!0:e.review_message=!0,e.culture=0,e.salary=0,e.review=null,e.worklife=0,e.oppurtunity=0,e.security=0,e.step1=!1,e.next_step=!0,e.link_id=null,localStorage.removeItem("getcompanyidfromnotification"),localStorage.removeItem("getuseridfromnotification"),localStorage.removeItem("getlinkidforcompany"),localStorage.removeItem("user_review_id"),localStorage.removeItem("leaveOrNotification"),e.$store.commit("rightReload"),e.$store.commit("stopLoading")),e.$store.commit("stopLoading")})).catch((function(e){this.$store.commit("stopLoading")}))}}}),l=r(24),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-lg-7 col-md-6 mb-3 mb-md-0"},[1==e.step1?o("div",{staticClass:"updateBox"},[o("div",{staticClass:"updateContent"},[e._m(0),e._v(" "),0==e.success?[o("div",{staticClass:"aleartBox error",attrs:{id:"ach"}},[o("span",{staticClass:"close",on:{click:e.closeRightSuccess}},[o("img",{attrs:{src:r(309),alt:""}})]),e._v(" "),e._m(1),e._v(" "),e._m(2)])]:e._e(),e._v(" "),e.companyinfo.length>0?o("div",{staticClass:"empDtl"},[e._l(e.companyinfo,(function(data,t){return[o("span",{key:t},[o("div",{staticClass:"profileImg"},[o("img",{attrs:{src:e.assetUrl+"companyimage/"+data.company_image,alt:"User Image"}})])]),e._v(" "),o("span",{staticClass:"empDtlText"},[data.company_name?o("h4",[e._v("\n              "+e._s(data.company_name)+"\n            ")]):e._e(),e._v(" "),o("p",[e._v(e._s(data.city+", "+data.country))]),e._v(" "),o("div",{staticClass:"viewCV"},[o("NuxtLink",{attrs:{to:"/company/"+data.slug}},[o("a",{attrs:{href:"/company/"+data.slug}},[e._v("View Profile"),o("img",{attrs:{src:r(197),alt:""}})])])],1)])]}))],2):e._e(),e._v(" "),o("div",{staticClass:"feedbackRating"},["leave"==e.functionUse?[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"form-group formBox"},[o("label",[e._v("Relieving date")]),o("br"),e._v(" "),o("client-only",[o("Datepicker",{attrs:{"selection-mode":"single",dateFormat:"dd/mm/yy",maxDate:e.maxtodaydate,monthNavigator:!0,yearNavigator:!0,isDarkTheme:!1,hideOnDateTimeSelect:!0,placeholder:"Enter a Date",showIcon:!0},on:{"year-change":e.shows,"month-change":e.shows,show:e.shows},model:{value:e.relieving_date,callback:function(t){e.relieving_date=t},expression:"relieving_date"}})],1),e._v(" "),e.date_error?o("div",{staticClass:"errorText"},[e._v("\n                "+e._s(e.date_error)+"\n              ")]):e._e()],1)])])]:e._e(),e._v(" "),o("div",{staticClass:"ratingBox"},[o("span",{staticClass:"ratingNm"},[e._v("Work Culture")]),e._v(" "),o("VueStars",{attrs:{name:"Test1"},model:{value:e.culture,callback:function(t){e.culture=t},expression:"culture"}}),e._v(" "),0==e.culture?o("span"):o("span",[e._v(e._s(e.culture)+"/5")])],1),e._v(" "),o("div",{staticClass:"ratingBox"},[o("span",{staticClass:"ratingNm"},[e._v("Work life Balance")]),e._v(" "),o("VueStars",{attrs:{name:"Test2"},model:{value:e.worklife,callback:function(t){e.worklife=t},expression:"worklife"}}),e._v(" "),0==e.worklife?o("span"):o("span",[e._v(e._s(e.worklife)+"/5")])],1),e._v(" "),o("div",{staticClass:"ratingBox"},[o("span",{staticClass:"ratingNm"},[e._v("Salary on time")]),e._v(" "),o("VueStars",{attrs:{name:"Test3"},model:{value:e.salary,callback:function(t){e.salary=t},expression:"salary"}}),e._v(" "),0==e.salary?o("span"):o("span",[e._v(e._s(e.salary)+"/5")])],1),e._v(" "),o("div",{staticClass:"ratingBox"},[o("span",{staticClass:"ratingNm"},[e._v("learning Oppurtunity")]),e._v(" "),o("VueStars",{attrs:{name:"Test4"},model:{value:e.oppurtunity,callback:function(t){e.oppurtunity=t},expression:"oppurtunity"}}),e._v(" "),0==e.oppurtunity?o("span"):o("span",[e._v(e._s(e.oppurtunity)+"/5")])],1),e._v(" "),o("div",{staticClass:"ratingBox"},[o("span",{staticClass:"ratingNm"},[e._v("Job Advancement & Security")]),e._v(" "),o("VueStars",{attrs:{name:"Test5"},model:{value:e.security,callback:function(t){e.security=t},expression:"security"}}),e._v(" "),0==e.security?o("span"):o("span",[e._v(e._s(e.security)+"/5")])],1),e._v(" "),o("div",{staticClass:"ratingBox"},[0==e.culture&&0==e.worklife&&0==e.salary&&0==e.oppurtunity&&0==e.security?o("span",[e._v("\n            Total : "+e._s(e.culture)+"/5\n          ")]):o("span",[e._v("\n            Total :\n            "+e._s(e._f("formatfilter")(e.culture,e.worklife,e.salary,e.oppurtunity,e.security))+"/5\n          ")])]),e._v(" "),e.field_error?o("div",{staticClass:"errorText"},[e._v("\n          "+e._s(e.field_error)+"\n        ")]):e._e()],2),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"form-group formBox"},[o("label",[e._v("Write a Review")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],staticClass:"form-control",attrs:{id:"countWords",placeholder:"Minimum 50 words"},domProps:{value:e.review},on:{keyup:e.wordCount,input:function(t){t.target.composing||(e.review=t.target.value)}}}),e._v(" "),o("label",[e._v("Please don't use any abusive language. Otherwise your review\n              will be removed right away and you will not be allowed to give\n              more review\n            ")]),e._v(" "),o("label",[o("br"),e._v("\n              Word Count:\n              "),o("span",[e._v(e._s(e.words))])]),e._v(" "),e.review_error?o("div",{staticClass:"errorText"},[e._v("\n              "+e._s(e.review_error)+"\n            ")]):e._e()])]),e._v(" "),o("div",{staticClass:"col-12 text-right"},[o("div",{staticClass:"formBtnBox"},[o("a",{staticClass:"btn w-auto ml-2",attrs:{href:"#ach"},on:{click:e.showModal}},[e._v("Submit")])])])])],2)]):e._e(),e._v(" "),o("b-modal",{ref:"confirmModal",attrs:{centered:"",id:"editModal","hide-footer":"","hide-header":"",title:"Using Component Methods"}},[o("div",{staticClass:"d-block"},[o("div",[o("label",[e._v("You will not be able to update or delete your review in future, are\n          you sure you want to submit this review.")]),e._v(" "),o("div",{staticClass:"formBtnBox"},[o("b-button",{staticClass:"mt-2 ml-2 btn w-auto outline",on:{click:function(t){return e.$bvModal.hide("editModal")}}},[e._v("No")]),e._v(" "),o("b-button",{staticClass:"mt-2 mr-2 btn w-auto",on:{click:e.submit}},[e._v("Yes")])],1)])])]),e._v(" "),1==e.next_step?o("div",{staticClass:"updateBox"},[o("div",{staticClass:"updateContent"},[o("div",{staticClass:"invitationsBox success"},[e._m(3),e._v(" "),o("p",[e._v("Thanks for your Response")]),e._v(" "),1==e.company_review_message?o("p",[e._v("\n          Your review is successfully submitted. You can "),o("br"),e._v("\n          view your review now\n        ")]):e._e(),e._v(" "),1==e.review_message?o("p",[e._v("\n          Your review is successfully submitted. You review "),o("br"),e._v("will be\n          public after you get a review from company"),o("br")]):e._e(),e._v(" "),o("div",{staticClass:"formBtnBox"},[1==e.review_message?o("button",{staticClass:"btn w-auto",on:{click:e.goback}},[e._v("Go Back")]):e._e(),e._v(" "),o("NuxtLink",{attrs:{to:"/"+e.userSlug+"/reviews"}},[1==e.company_review_message?o("a",{staticClass:"btn w-auto"},[e._v("View Review")]):e._e()])],1)])])]):e._e()],1)}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{VueStars:r(421).default})}}]);