(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{486:function(e,t,n){},543:function(e,t,n){"use strict";n(486)},614:function(e,t,n){"use strict";n.r(t);n(38),n(10),n(50);var o={name:"CandidateSearch",props:{items:{type:Array,required:!1,default:function(){return[]}},isAsync:{type:Boolean,required:!1,default:!1}},data:function(){return{isOpen:!1,results:[],search:"",isLoading:!1,arrowCounter:-1,errormsg:!1,imagename:null,showlist:!1,success_message:!1,companySlug:null,debouncedSearch:"",timeout:null,loading:!1,close:!1}},watch:{items:function(e,t){e.length!==t.length&&(this.results=e,this.isLoading=!1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)},methods:{setResult:function(e){this.email=e.name,this.imagename=e.decoded_image,this.showlist=!0,this.isOpen=!1},filterResults:function(){var e=this;this.showlist=!0,this.results=this.items.filter((function(t){return t.email.toLowerCase().indexOf(e.email.toLowerCase())>-1})),this.results.length<0&&(this.errormsg=!0)},checking:function(){var e=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){if(e.debouncedInput=e.email,e.success_message=null,e.errormsg=null,null==e.debouncedInput||""==e.debouncedInput)return e.close=!1,e.imagename=null,e.showlist=!1,e.isOpen=!1,e.errormsg=null,e.success_message=!1,e.results=[],void(e.email=null);/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e.debouncedInput)?(e.loading=!0,e.$axios.get("https://robob.credotree.com/api/search_email/"+e.debouncedInput).then((function(t){e.results=t.data,e.results.length>0?(e.loading=!1,e.close=!0,e.showlist=!0,e.isOpen=!0,e.success_message=!0,e.errormsg=null):(e.loading=!1,e.close=!1,e.imagename=null,e.errormsg="user not found")})).catch((function(e){}))):e.errormsg="Please enter valid email"}),1e3)},onChange:function(){this.$emit("input",this.email),this.isAsync?this.isLoading=!0:this.checking()},handleClickOutside:function(e){this.$el.contains(e.target)||(this.isOpen=!1,this.arrowCounter=-1)},onArrowDown:function(){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},onEnter:function(){this.email=this.results[this.arrowCounter].name,this.imagename=this.results[this.arrowCounter].decoded_image,this.isOpen=!1,this.arrowCounter=-1},clear:function(){this.close=!1,this.imagename=null,this.showlist=!1,this.isOpen=!1,this.errormsg=null,this.success_message=!1,this.results=[],this.email=null},inviteUser:function(){var e=this;this.$store.commit("startLoading"),this.companySlug=this.$route.params.slug,this.$axios.post("https://robob.credotree.com/api/invite-user-for-schedule",{companySlug:this.companySlug,email:this.email}).then((function(t){"success"==t.data.status&&(e.errormsg=null,e.success_message=e.email+" has been sent invitation"),e.clear(),e.$store.commit("stopLoading")})).catch((function(e){this.$store.commit("stopLoading")}))}}},r=(n(543),n(24)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"autocomplete"},[o("div",{staticClass:"inputBox",staticStyle:{border:"1px solid #DDD"}},[e.imagename?[o("span",{staticClass:"infoImg"},[o("img",{attrs:{src:"data:image/jpeg;base64,"+e.imagename,width:"20px",height:"20px",alt:""}})])]:e._e(),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticStyle:{border:"none"},attrs:{type:"text"},domProps:{value:e.email},on:{input:[function(t){t.target.composing||(e.email=t.target.value)},e.onChange],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onArrowDown.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onArrowUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter.apply(null,arguments)}]}}),e._v(" "),e.close?o("span",{staticStyle:{display:"block",float:"right"}},[o("a",{on:{click:e.clear}},[o("img",{attrs:{src:n(309),alt:"",width:"20px",height:"20px"}})])]):e._e(),e._v(" "),e.loading?o("span",{staticStyle:{display:"block",float:"right"}},[e.loading?o("div",{staticClass:"loader small"}):e._e()]):e._e(),e._v(" "),o("div",{staticStyle:{display:"block",float:"right"}},["user not found"==e.errormsg?o("span",{staticClass:"text-success"},[o("a",{on:{click:e.inviteUser}},[e._v("Invite?")])]):e._e()])],2),e._v(" "),"Please enter valid email"==e.errormsg?o("div",{staticClass:"text-danger"},[e._v(e._s(e.errormsg))]):e.showlist?o("div",[o("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results",attrs:{id:"autocomplete-results"}},[e.isLoading?o("li",{staticClass:"loading"},[e._v("\n        Loading results...\n      ")]):e._l(e.results,(function(t,i){return o("li",{key:i,staticClass:"autocomplete-result",class:{"is-active":i===e.arrowCounter},on:{click:function(n){return e.setResult(t)}}},[o("img",{attrs:{src:"data:image/jpeg;base64,"+t.decoded_image,width:"20px",height:"20px",alt:""}}),e._v("\n        "+e._s(t.name)+"\n      \n      ")])}))],2)]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);