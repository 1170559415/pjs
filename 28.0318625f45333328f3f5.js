webpackJsonp([28],{"++tE":function(e,t,s){"use strict";var n=s("3cXf"),a=s.n(n),i=s("rVsN"),r=s.n(i),o=s("lC5x"),c=s.n(o),u=s("J0Oq"),d=s.n(u),m=s("xZa2"),l=s("rMyF"),_=s("+iF8"),p=s("jMmt"),v=s("jFiy");t.a={data:function(){return{activityId:this.$route.params.id,mode:this.$route.params.mode,way:this.$route.params.way,mode_id:this.$route.params.mid,exam:{minutes:0,myInfo:{},opponent:{}},beginExam:"",question:null,answer:{single:"",multi:[],judge:""},questionId:"",timer:null,timeArr:[],loading:!1,pageLoading:!1,codeShow:!1,confirm:null,isGoingNext:!1,correctAnswers:[],errorAnswers:[],shortSubmit:!1}},computed:{questionIndex:function(){var e=this;return this.exam?this.exam.questionIds.findIndex(function(t){return t===e.questionId}):-1},answerResult:{get:function(){return this.question.category.isSingle?[this.answer.single]:this.question.category.isMulti?this.answer.multi:[this.answer.judge]},set:function(e){e&&(this.question.category.isSingle?this.$set(this.answer,"single",e.toString()):this.question.category.isMulti?this.$set(this.answer,"multi",e):this.$set(this.answer,"judge",e.toString()))}},mediaContentType:function(){var e={img:!1,video:!1};return this.question.mediaLocation?(e.img=Object(v.m)(this.question.mediaLocation),e.video=Object(v.p)(this.question.mediaLocation),e):e}},created:function(){var e=this;return d()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(m.b)(),e.$store.commit("client/setIsShowExam",!0),window.localStorage.removeItem("alreadyCode"),!localStorage.getItem("token")){t.next=13;break}return t.prev=4,t.next=7,e.getData();case 7:e.countDown(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0);case 13:case"end":return t.stop()}},t,e,[[4,10]])}))()},methods:{goBack:function(){this.$router.back()},countDown:function(){var e=this;this.timer=new p.b;var t=this.exam.startDateTime+60*this.exam.minutes*1e3,s=Math.floor((t-this.exam.serverDateTime)/1e3);s=s>0?s:0,this.timer.countStart(s,function(t){var s=t.hours,n=t.mins,a=t.sec;e.timeArr=Object(p.f)({hours:s,mins:n,sec:a}),0===s&&0===n&&0===a&&e.$alert("考试时间已结束，请交卷","提示",{confirmButtonText:"确定",type:"warning",showClose:!1}).then(d()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.codeShow=!1,t.next=3,e.submitConfirm();case 3:case"end":return t.stop()}},t,e)}))).catch(function(){})})},handleBeginExam:function(){this.beginExam=!0},examInfo:function(){var e=this;return d()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new r.a(function(){var t=d()(c.a.mark(function t(s,n){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.k)({activity_id:e.activityId,mode_id:e.mode_id,way:e.way});case 2:0===(a=t.sent).code?s(a):4401===a.code?e.$router.replace({path:"/client/result/"+e.activityId+"/"+e.mode_id}):2205===a.code||4805===a.code||2204===a.code||4808===a.code?(e.$message.error(e.$CLIENT_EXAM_ERROR[a.code]),e.$router.replace({path:"/client/detail/"+e.activityId})):4832===a.code?e.$router.replace({path:"/client/detail/"+e.activityId}):n(a.code);case 4:case"end":return t.stop()}},t,e)}));return function(e,s){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t,e)}))()},getData:function(){var e=this;return d()(c.a.mark(function t(){var s,n,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.pageLoading=!0,t.next=4,e.examInfo();case 4:if(s=t.sent,n=e.$store.getters.currentActivity.type,e.exam=new _.a(s,n),e.exam.answers.length!==e.exam.questionIds.length){t.next=13;break}return t.next=10,e.submitConfirm();case 10:return t.abrupt("return");case 13:e.questionId=e.exam.questionIds[e.exam.answers.length];case 14:return 2===parseInt(e.mode)||3===parseInt(e.mode)||4===parseInt(e.mode)?(e.beginExam=!1,e.pageLoading=!1):e.beginExam=!0,e.exam.answers&&e.$store.commit("client/setExamAnswerList",{content:e.exam.answers}),t.next=18,e.getQuestionData();case 18:t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),a=e.$CLIENT_EXAM_ERROR[t.t0]||t.t0,e.$message.error(a);case 24:return t.prev=24,e.pageLoading=!1,t.finish(24);case 27:case"end":return t.stop()}},t,e,[[0,20,24,27]])}))()},getQuestionData:function(){var e=this;return d()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new r.a(function(){var t=d()(c.a.mark(function t(s,n){var a,i,r,o,u;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={mode_id:e.mode_id,activity_id:e.activityId,question_id:e.questionId,way:e.way},t.next=3,Object(l.l)(a);case 3:if(i=t.sent,e.correctAnswers=[],e.errorAnswers=[],e.answer={single:"",multi:[],judge:""},0!==i.code){t.next=21;break}if(r=i.data.media_location&&i.data.media_location.replace("https://univs-sishi-1256833609.cos.ap-beijing.myqcloud.com","https://univs-sishi-1256833609.file.myqcloud.com"),i.data.media_location=r,!r||!Object(v.p)(r)){t.next=17;break}return o="_sd",u=""+r.substring(0,r.lastIndexOf("."))+o+".mp4",t.next=15,Object(v.e)(u);case 15:if(!t.sent){t.next=17;break}i.data.media_location=u;case 17:e.question=new _.b(i.data),s(),t.next=23;break;case 21:e.$message.error(e.$CLIENT_EXAM_ERROR[i.code]),n(i.code);case 23:case"end":return t.stop()}},t,e)}));return function(e,s){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t,e)}))()},goNext:function(){var e=this;return d()(c.a.mark(function t(){var s,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.pageLoading=!0,e.isGoingNext=!0,t.next=5,e.submitAnswer();case 5:if(!t.sent){t.next=10;break}return t.next=9,e.submitConfirm();case 9:return t.abrupt("return");case 10:return(s=e.questionIndex+1)<=e.exam.questionIds.length-1&&(e.questionId=e.exam.questionIds[s]),e.pageLoading=!0,t.next=15,e.getQuestionData();case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),n=e.$CLIENT_EXAM_ERROR[t.t0]||t.t0,e.$message.error(n);case 21:return t.prev=21,e.pageLoading=!1,e.isGoingNext=!1,t.finish(21);case 25:case"end":return t.stop()}},t,e,[[0,17,21,25]])}))()},submitAnswer:function(){var e=this;return d()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new r.a(function(){var t=d()(c.a.mark(function t(s,n){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.x)({activityId:e.activityId,questionId:e.questionId,answer:e.answerResult,mode_id:e.mode_id,way:e.way});case 2:0===(a=t.sent).code?(a.data.correct&&!e.exam.answerIds.includes(e.questionId)&&e.exam.answerIds.push(e.questionId),!a.data.correct&&a.data.correct_ids&&a.data.correct_ids.length?(e.pageLoading=!1,e.correctAnswers=a.data.correct_ids,e.errorAnswers=e.answerResult.filter(function(t){return!e.correctAnswers.includes(t)}),setTimeout(function(){s(a.data.finished)},2e3)):s(a.data.finished)):n(a.code);case 4:case"end":return t.stop()}},t,e)}));return function(e,s){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t,e)}))()},submitExam:function(){var e=this;return d()(c.a.mark(function t(){var s,n,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isGoingNext=!0,s=e,t.prev=2,n=0,!e.answerResult[0]){t.next=19;break}return t.prev=5,e.pageLoading=!0,t.next=9,e.submitAnswer();case 9:t.next=16;break;case 11:if(t.prev=11,t.t0=t.catch(5),4811===(n=t.t0)){t.next=16;break}throw new Error(""+n);case 16:return t.prev=16,e.pageLoading=!1,t.finish(16);case 19:return t.next=21,s.submitConfirm();case 21:t.next=27;break;case 23:t.prev=23,t.t1=t.catch(2),a=e.$CLIENT_EXAM_ERROR[t.t1]||t.t1,e.$message.error(a);case 27:return t.prev=27,e.isGoingNext=!1,t.finish(27);case 30:case"end":return t.stop()}},t,e,[[2,23,27,30],[5,11,16,19]])}))()},submitConfirm:function(){var e=this;return d()(c.a.mark(function t(){var s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.pageLoading=!0,t.next=4,Object(l.w)(e.exam.examCode);case 4:0===(s=t.sent).code?(e.timer&&e.timer.countStop(),localStorage.setItem("examResult",a()(s.data)),e.$router.replace({path:"/client/result/"+e.activityId})):4831===s.code?(e.shortSubmit=!0,setTimeout(function(){e.shortSubmit=!1},1e3)):e.$message.error(e.$CLIENT_EXAM_ERROR[s.code]);case 6:return t.prev=6,e.pageLoading=!1,t.finish(6);case 9:case"end":return t.stop()}},t,e,[[0,,6,9]])}))()},checkNeedCode:function(e){if(!(this.codeShow||!this.answerResult[0]&&"goNext"===e||this.isGoingNext||this.shortSubmit))if(localStorage.getItem("alreadyCode")||0===this.questionIndex)this[e]();else{var t=10;this.exam.questionIds.length<10&&(t=this.exam.questionIds.length);var s=Math.random();(t===this.questionIndex+1||s>.7)&&this.questionIndex+1<=t?(this.confirm=this[e].bind(this),this.codeShow=!0):this[e]()}}},beforeDestroy:function(){this.timer&&this.timer.countStop(),this.$store.commit("client/setIsShowExam",!1),Object(m.a)()}}},EMDB:function(e,t){},cYIr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{show1:!1,show2:!1,show3:!1,start:!1}},props:{examMode:{type:Number,default:2},examInfo:{type:Object,default:function(){return{minutes:0,myInfo:{},opponent:{}}}}},watch:{examInfo:{immediate:!0,handler:function(e){e&&this.startAnimation()}}},mounted:function(){},methods:{startAnimation:function(){var e=this;this.start||(this.start=!0,setTimeout(function(){e.show1=!0},100),setTimeout(function(){e.show2=!0},1e3),setTimeout(function(){e.show3=!0},1500),setTimeout(function(){e.show1=!1,e.show2=!1,e.show3=!1},3e3),setTimeout(function(){e.$emit("handleBeginExam")},3600))}}},a=s("W5g0");var i=function(e){s("n3Lq")},r=Object(a.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.start?s("div",{staticClass:"wrapper"},[s("div",{staticClass:"title-wrapper",class:{finished:e.show3}},[2==e.examMode?s("img",{attrs:{src:"/public/pc3/pk_limit.png",alt:""}}):3==e.examMode?s("img",{attrs:{src:"/public/pc3/pk_rush.png",alt:""}}):4==e.examMode?s("img",{attrs:{src:"/public/pc3/pk_race.png",alt:""}}):e._e(),e._v(" "),s("span",{staticClass:"total-time"},[s("span",[e._v(e._s(e.examInfo&&e.examInfo.minutes))])])]),e._v(" "),s("div",{staticClass:"bg-wrapper"},[s("img",{staticClass:"pk-blue",class:{finished:e.show1},attrs:{src:"/public/pc3/pk_blue.png",alt:""}}),e._v(" "),s("img",{staticClass:"pk-red",class:{finished:e.show1},attrs:{src:"/public/pc3/pk_red.png",alt:""}})]),e._v(" "),s("div",{staticClass:"center-wrapper"},[s("div",{staticClass:"left-desc__wrapper",class:{finished:e.show3}},[s("p",{staticClass:"title"},[e._v(e._s(e.examInfo.myInfo&&e.examInfo.myInfo.univ_name))]),e._v(" "),s("p",{staticClass:"name"},[e._v(e._s(e.examInfo.myInfo&&e.examInfo.myInfo.name))])]),e._v(" "),s("div",{staticClass:"right-desc__wrapper",class:{finished:e.show3}},[s("p",{staticClass:"title"},[e._v(e._s(e.examInfo.opponent&&e.examInfo.opponent.univ_name))]),e._v(" "),s("p",{staticClass:"name"},[e._v(e._s(e.examInfo.opponent&&e.examInfo.opponent.name))])]),e._v(" "),s("div",{staticClass:"vs-wrapper",class:{finished:e.show2}})])]):e._e()},[],!1,i,"data-v-5c4444f4",null).exports,o=s("++tE"),c=s("/cUq"),u={name:"codeContainer",components:{imageCode:s("CJhk").a},mixins:[c.a]};var d=function(e){s("EMDB")},m=Object(a.a)(u,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{visible:e.codeShow,width:"420PX","show-close":!1,top:"35vh","close-on-click-modal":!1},on:{"update:visible":function(t){e.codeShow=t}}},[s("div",{},[s("div",{staticClass:"common_dialog",staticStyle:{width:"420px"}},[s("div",{staticClass:"common_dialog_title"},[s("span",{staticClass:"title"},[e._t("title",[e._v("\n        验证码\n      ")])],2),e._v(" "),s("span",{staticClass:"my-icon my-icon-close"})]),e._v(" "),s("div",{staticClass:"common_dialog_content"},[e._t("content",[s("div",{staticClass:"code_input text_center"},[s("el-input",{staticClass:"input-width",attrs:{maxlength:4,placeholder:"验证码",size:"small"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSubmit(t)}},model:{value:e.inputCode,callback:function(t){e.inputCode=t},expression:"inputCode"}}),e._v(" "),s("image-code",{attrs:{identifyCode:e.currentCode,contentWidth:150,contentHeight:40,fontSizeMin:25}}),e._v(" "),s("span",{staticClass:"code_change_text",on:{click:e.createCode}},[e._v("看不清，换一张")])],1),e._v(" "),s("div",{staticClass:"mt20 text_right"},[s("button",{staticClass:"common_btn2 btn_red",on:{click:e.submit}},[e._v("确 认")])])])],2)])])])},[],!1,d,"data-v-54587dc8",null).exports,l={name:"Exam",mixins:[o.a],components:{pk:r,codeContainer:m},data:function(){return{beginExam:!0,currentExam:{way:"",mode:"",modeName:"",wayName:""},examMode:{1:{label:"普通模式",key:"normal"},2:{label:"限时pk",key:"time"},3:{label:"抢十赛",key:"ten"},4:{label:"竞赛模式",key:"race"}},examWay:{1:{label:"对垒个人",key:"person"},2:{label:"对垒团队",key:"team"}}}},computed:{},created:function(){this.currentExam.modeName=this.examMode[this.mode].label,this.currentExam.mode=this.examMode[this.mode].key,this.currentExam.wayName=this.examWay[this.way].label,this.currentExam.way=this.examWay[this.way].key},methods:{}};var _=function(e){s("kVXx")},p=Object(a.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"exam-container"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}]},[e.beginExam?s("div",{staticClass:"exam_wrap"},[e.question&&e.exam?s("div",[s("div",{staticClass:"exam_wrap_leftcol"},[s("div",{staticClass:"exam_title"},[s("span",{staticClass:"my-icon my-icon new_exam_box fontsize18",class:"new_exam_box_"+e.currentExam.mode},[e._v("\n              "+e._s(e.exam.modeTitle)+"\n            ")]),e._v(" "),s("span",{staticClass:"fontsize18 ml5",staticStyle:{"font-weight":"600"}},[e._v("网上重走长征路知识竞答")]),e._v(" "),"normal"!=e.currentExam.mode?s("div",{staticClass:"new_exam_info"},[s("div",{staticClass:"new_exam_info_title"},[e._v("当前"+e._s(e.currentExam.wayName))]),e._v(" "),s("div",{staticClass:"new_exam_info_student"},[e._v(e._s(e.exam.opponent.name))])]):e._e()]),e._v(" "),s("div",{staticClass:"exam_content"},[s("div",{staticClass:"exam_questions"},[s("div",{staticClass:"exam_questions_title"},[s("div",{staticClass:"exam_questions_cid"},[e._v(e._s(e.questionIndex+1))]),e._v(" "),s("div",{staticClass:"exam_question_content"},[e.question.category.isSingle?s("span",[e._v("【单选题】")]):e._e(),e._v(" "),e.question.category.isMulti?s("span",[e._v("【多选题】")]):e._e(),e._v(" "),e.question.category.isJudge?s("span",[e._v("【判断题】")]):e._e(),e._v(" "),s("span",{domProps:{innerHTML:e._s(e.question.title)}})]),e._v(" "),e.question.source?s("div",{staticClass:"exam_question_from fontsize14"},[e._v(e._s("[题目来源："+e.question.source+"]"))]):e._e(),e._v(" "),e.question.mediaLocation?s("div",{staticClass:"exam_questions_media"},[e.mediaContentType.img?s("el-image",{staticClass:"media",attrs:{src:e.question.mediaLocation,"preview-src-list":[e.question.mediaLocation]}}):e._e(),e._v(" "),e.mediaContentType.video?s("video",{staticClass:"media",attrs:{src:e.question.mediaLocation,controls:""}}):e._e()],1):e._e()]),e._v(" "),s("div",{staticClass:"exam_questions_options"},[e.question.category.isSingle?[s("el-radio-group",{model:{value:e.answer.single,callback:function(t){e.$set(e.answer,"single",t)},expression:"answer.single"}},e._l(e.question.options,function(t){return s("el-radio",{key:t.id,class:{answer_correct:e.correctAnswers.includes(t.id),answer_error:e.errorAnswers.includes(t.id)},attrs:{label:t.id,disabled:e.isGoingNext}},[s("span",{domProps:{innerHTML:e._s(t.title)}})])}),1)]:e._e(),e._v(" "),e.question.category.isMulti?[s("el-checkbox-group",{model:{value:e.answer.multi,callback:function(t){e.$set(e.answer,"multi",t)},expression:"answer.multi"}},e._l(e.question.options,function(t){return s("el-checkbox",{key:t.id,class:{answer_correct:e.correctAnswers.includes(t.id),answer_error:e.errorAnswers.includes(t.id)},attrs:{label:t.id,disabled:e.isGoingNext}},[s("span",{domProps:{innerHTML:e._s(t.title)}})])}),1)]:e._e(),e._v(" "),e.question.category.isJudge?[s("el-radio-group",{model:{value:e.answer.judge,callback:function(t){e.$set(e.answer,"judge",t)},expression:"answer.judge"}},e._l(e.question.options,function(t){return s("el-radio",{key:t.id,class:{answer_correct:e.correctAnswers.includes(t.id),answer_error:e.errorAnswers.includes(t.id)},attrs:{label:t.id,disabled:e.isGoingNext}},[s("span",{domProps:{innerHTML:e._s(t.title)}})])}),1)]:e._e()],2)]),e._v(" "),s("div",{staticClass:"exam_questions_btns"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.questionIndex+1!==e.exam.questionIds.length,expression:"questionIndex+1 !== exam.questionIds.length"}],staticClass:"question_btn ml5",on:{click:function(t){return e.checkNeedCode("goNext")}}},[e._v("下一题")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questionIndex+1==e.exam.questionIds.length,expression:"questionIndex+1 == exam.questionIds.length"}],staticClass:"question_btn ml5",on:{click:function(t){return e.checkNeedCode("submitExam")}}},[e._v("提交")])])])]),e._v(" "),s("div",{staticClass:"exam_wrap_rightcol"},[s("div",{staticClass:"fontsize18 color_deepgrey pv20 text_center"},[e._v("\n            倒计时\n          ")]),e._v(" "),s("div",{staticClass:"time_clock clear ml20"},[s("div",{staticClass:"time_clock_item"},[e._v(e._s(e.timeArr[0]))]),e._v(" "),s("div",{staticClass:"time_clock_item"},[e._v(e._s(e.timeArr[1]))]),e._v(" "),s("span",{staticClass:"fl mr5 color_mediumgrey"},[e._v(":")]),e._v(" "),s("div",{staticClass:"time_clock_item"},[e._v(e._s(e.timeArr[2]))]),e._v(" "),s("div",{staticClass:"time_clock_item"},[e._v(e._s(e.timeArr[3]))]),e._v(" "),s("span",{staticClass:"fl mr5 color_mediumgrey "},[e._v(":")]),e._v(" "),s("div",{staticClass:"time_clock_item"},[e._v(e._s(e.timeArr[4]))]),e._v(" "),s("div",{staticClass:"time_clock_item"},[e._v(e._s(e.timeArr[5]))])]),e._v(" "),s("p",{staticClass:"text_center exam_time fontsize14"},[e._v("答题时间为"),s("span",{staticClass:"color_orange text_bold"},[e._v(e._s(e.exam.minutes)+"分钟")]),e._v("，请把握时间")]),e._v(" "),s("ul",{staticClass:"question_list clear"},e._l(e.exam.questionIds,function(t,n){return s("li",{key:t,staticClass:"question_list_item",class:{mr0:(n+1)%6==0,ing:e.questionIndex===n,right:e.exam.answerIds.includes(t),wrong:!e.exam.answerIds.includes(t)&&n<e.questionIndex}},[e._v(e._s(n+1))])}),0),e._v(" "),s("div",{staticClass:"exam_result fontsize14"},[s("span",[e._v("当前答对:"),s("span",{staticClass:"exam_result_number"},[e._v(e._s(e.exam.answerIds.length)+"/"+e._s(e.exam.questionIds.length))])])])])]):e._e()]):e._e(),e._v(" "),!1===e.beginExam?s("pk",{attrs:{examInfo:e.exam,examMode:e.mode},on:{handleBeginExam:e.handleBeginExam,"update:examInfo":function(t){e.exam=t},"update:exam-info":function(t){e.exam=t},"update:examMode":function(t){e.mode=t},"update:exam-mode":function(t){e.mode=t}}}):e._e(),e._v(" "),s("code-container",{attrs:{codeShow:e.codeShow,confirm:e.confirm},on:{"update:codeShow":function(t){e.codeShow=t},"update:code-show":function(t){e.codeShow=t}}})],1)])},[],!1,_,"data-v-8d2fde6e",null);t.default=p.exports},kVXx:function(e,t){},n3Lq:function(e,t){}});