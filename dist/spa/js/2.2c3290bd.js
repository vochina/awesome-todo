(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"076f":function(t,e,s){"use strict";s("119d")},"0891":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",[s("modal-header",[t._v("添加任务")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[s("q-card-section",{staticClass:"q-pt-none"},[s("modal-task-name",{ref:"modalTaskName",attrs:{name:t.taskToSubmit.name},on:{"update:name":function(e){return t.$set(t.taskToSubmit,"name",e)}}}),s("modal-due-date",{attrs:{dueDate:t.taskToSubmit.dueDate},on:{"update:dueDate":function(e){return t.$set(t.taskToSubmit,"dueDate",e)},"update:due-date":function(e){return t.$set(t.taskToSubmit,"dueDate",e)}}}),t.taskToSubmit.dueDate?s("modal-due-time",{attrs:{dueTime:t.taskToSubmit.dueTime},on:{"update:dueTime":function(e){return t.$set(t.taskToSubmit,"dueTime",e)},"update:due-time":function(e){return t.$set(t.taskToSubmit,"dueTime",e)}}}):t._e()],1),s("modal-buttons")],1)],1)},n=[],o=s("ded3"),i=s.n(o),r=s("2f62"),l=s("a8f3"),c={mixins:[l["a"]],data(){return{taskToSubmit:{name:"",dueDate:"",dueTime:"",completed:!1}}},methods:i()(i()({},Object(r["b"])("tasks",["addTask"])),{},{submitTask(){this.addTask(this.taskToSubmit),this.$emit("close")}})},u=c,d=s("2877"),m=s("f09f"),p=s("a370"),f=s("eebe"),b=s.n(f),k=Object(d["a"])(u,a,n,!1,null,null,null);e["default"]=k.exports;b()(k,"components",{QCard:m["a"],QCardSection:p["a"]})},"101b":function(t,e,s){},"10d0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"q-pa-md absolute full-width full-height column"},[t.tasksDownloaded?[s("div",{staticClass:"row q-mb-lg"},[s("search"),s("sort")],1),!t.search||Object.keys(t.tasksTodo).length||Object.keys(t.tasksCompleted).length?t._e():s("p",[t._v("\n        没有搜索结果.\n      ")]),s("q-scroll-area",{staticClass:"q-scroll-area-tasks"},[Object.keys(t.tasksTodo).length||t.search||t.settings.showTasksInOneList?t._e():s("no-tasks"),Object.keys(t.tasksTodo).length?s("tasks-todo",{attrs:{tasksTodo:t.tasksTodo}}):t._e(),Object.keys(t.tasksCompleted).length?s("tasks-completed",{staticClass:"q-mb-xl",attrs:{tasksCompleted:t.tasksCompleted}}):t._e()],1),s("div",{staticClass:"absolute-bottom text-center q-mb-lg no-pointer-events"},[s("q-btn",{staticClass:"all-pointer-events",attrs:{round:"",color:"primary",size:"24px",icon:"add"},on:{click:function(e){t.showAddTask=!0}}})],1)]:[s("span",{staticClass:"absolute-center"},[s("q-spinner",{attrs:{color:"primary",size:"3em"}})],1)]],2),s("q-dialog",{model:{value:t.showAddTask,callback:function(e){t.showAddTask=e},expression:"showAddTask"}},[s("add-task",{on:{close:function(e){t.showAddTask=!1}}})],1)],1)},n=[],o=s("ded3"),i=s.n(o),r=s("2f62"),l={data(){return{showAddTask:!1}},computed:i()(i()(i()({},Object(r["c"])("tasks",["tasksTodo","tasksCompleted"])),Object(r["c"])("settings",["settings"])),Object(r["d"])("tasks",["search","tasksDownloaded"])),mounted(){this.$root.$on("showAddTask",(()=>{this.showAddTask=!0}))},components:{"add-task":s("0891").default,"tasks-todo":s("1f87").default,"tasks-completed":s("1f0c").default,"no-tasks":s("734f").default,search:s("227f").default,sort:s("e6ab").default}},c=l,u=(s("d531"),s("2877")),d=s("9989"),m=s("4983"),p=s("9c40"),f=s("0d59"),b=s("24e8"),k=s("eebe"),h=s.n(k),v=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=v.exports;h()(v,"components",{QPage:d["a"],QScrollArea:m["a"],QBtn:p["a"],QSpinner:f["a"],QDialog:b["a"]})},"119d":function(t,e,s){},"13e4":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a={inserted(t){let e=t.querySelector(".q-field__native");e.addEventListener("focus",(()=>{e.value.length&&e.select()}))}}},1730:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-item",{directives:[{name:"touch-hold",rawName:"v-touch-hold:1000.mouse",value:t.showEditTaskModal,expression:"showEditTaskModal",arg:"1000",modifiers:{mouse:!0}},{name:"ripple",rawName:"v-ripple"}],class:t.task.completed?"bg-green-1":"bg-orange-1",attrs:{clickable:""},on:{click:function(e){return t.updateTask({id:t.id,updates:{completed:!t.task.completed}})}}},[s("q-item-section",{attrs:{side:"",top:""}},[s("q-checkbox",{model:{value:t.task.completed,callback:function(e){t.$set(t.task,"completed",e)},expression:"task.completed"}})],1),s("q-item-section",[s("q-item-label",{class:{"text-strike":t.task.completed},domProps:{innerHTML:t._s(t.$options.filters.searchHighlight(t.task.name,t.search))}})],1),t.task.dueDate?s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"column justify-center"},[s("q-icon",{staticClass:"q-mr-xs",attrs:{size:"18px",name:"event"}})],1),s("div",{staticClass:"column"},[s("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[t._v("\n          "+t._s(t._f("niceDate")(t.task.dueDate))+"\n        ")]),s("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[s("small",[t._v(t._s(t.taskDueTime))])])],1)])]):t._e(),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"row"},[s("q-btn",{attrs:{flat:"",round:"",dense:"",color:"primary",icon:"edit"},on:{click:function(e){return e.stopPropagation(),t.showEditTaskModal(e)}}}),s("q-btn",{attrs:{flat:"",round:"",dense:"",color:"red",icon:"delete"},on:{click:function(e){return e.stopPropagation(),t.promptToDelete(t.id)}}})],1)]),s("q-dialog",{model:{value:t.showEditTask,callback:function(e){t.showEditTask=e},expression:"showEditTask"}},[s("edit-task",{attrs:{task:t.task,id:t.id},on:{close:function(e){t.showEditTask=!1}}})],1)],1)},n=[],o=(s("5319"),s("ded3")),i=s.n(o),r=s("2f62"),l=s("bd4c"),c={props:["task","id"],data(){return{showEditTask:!1}},computed:i()(i()(i()({},Object(r["d"])("tasks",["search"])),Object(r["c"])("settings",["settings"])),{},{taskDueTime(){return this.settings.show12HourTimeFormat?l["b"].formatDate(this.task.dueDate+" "+this.task.dueTime,"h:mmA"):this.task.dueTime}}),methods:i()(i()({},Object(r["b"])("tasks",["updateTask","deleteTask"])),{},{promptToDelete(t){this.$q.dialog({title:"确认",message:"是否确认删除?",cancel:!0,persistent:!0}).onOk((()=>{this.deleteTask(t)}))},showEditTaskModal(){this.showEditTask=!0}}),filters:{niceDate(t){return l["b"].formatDate(t,"MMM D")},searchHighlight(t,e){if(e){let s=new RegExp(e,"ig");return t.replace(s,(t=>'<span class="bg-yellow-6">'+t+"</span>"))}return t}},components:{"edit-task":s("21de").default}},u=c,d=s("2877"),m=s("66e5"),p=s("4074"),f=s("8f8e"),b=s("0170"),k=s("0016"),h=s("9c40"),v=s("24e8"),T=s("f449"),q=s("714f"),_=s("eebe"),g=s.n(_),C=Object(d["a"])(u,a,n,!1,null,null,null);e["default"]=C.exports;g()(C,"components",{QItem:m["a"],QItemSection:p["a"],QCheckbox:f["a"],QItemLabel:b["a"],QIcon:k["a"],QBtn:h["a"],QDialog:v["a"]}),g()(C,"directives",{TouchHold:T["a"],Ripple:q["a"]})},"1c83":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row q-mb-sm"},[s("q-input",{staticClass:"col",attrs:{outlined:"",clearable:"",value:t.dueTime,label:"完成时间"},on:{input:function(e){return t.$emit("update:dueTime",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[s("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-time",{attrs:{value:t.dueTime},on:{input:function(e){return t.$emit("update:dueTime",e)}}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}])})],1)},n=[],o={props:["dueTime"]},i=o,r=s("2877"),l=s("27f9"),c=s("0016"),u=s("7cbe"),d=s("ca78"),m=s("9c40"),p=s("7f67"),f=s("eebe"),b=s.n(f),k=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=k.exports;b()(k,"components",{QInput:l["a"],QIcon:c["a"],QPopupProxy:u["a"],QTime:d["a"],QBtn:m["a"]}),b()(k,"directives",{ClosePopup:p["a"]})},"1cd5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{attrs:{flat:"",label:"保存",color:"primary",type:"submit"}})],1)},n=[],o={},i=o,r=s("2877"),l=s("4b7e"),c=s("9c40"),u=s("eebe"),d=s.n(u),m=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=m.exports;d()(m,"components",{QCardActions:l["a"],QBtn:c["a"]})},"1f0c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[s("div",{class:{"q-mt-lg":!t.settings.showTasksInOneList}},[t.settings.showTasksInOneList?t._e():s("list-header",{attrs:{bgColor:"bg-green-4"}},[t._v("已完成\n    ")]),s("q-list",{attrs:{separator:"",bordered:""}},t._l(t.tasksCompleted,(function(t,e){return s("task",{key:e,attrs:{task:t,id:e}})})),1)],1)])},n=[],o=s("ded3"),i=s.n(o),r=s("2f62"),l={props:["tasksCompleted"],computed:i()({},Object(r["c"])("settings",["settings"])),components:{task:s("1730").default,"list-header":s("2831").default}},c=l,u=s("2877"),d=s("1c1c"),m=s("eebe"),p=s.n(m),f=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=f.exports;p()(f,"components",{QList:d["a"]})},"1f87":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut absolute-top"}},[s("div",[t.settings.showTasksInOneList?t._e():s("list-header",{attrs:{bgColor:"bg-orange-4"}},[t._v("待办事项\n    ")]),s("q-list",{attrs:{separator:"",bordered:""}},t._l(t.tasksTodo,(function(t,e){return s("task",{key:e,attrs:{task:t,id:e}})})),1)],1)])},n=[],o=s("ded3"),i=s.n(o),r=s("2f62"),l={props:["tasksTodo"],computed:i()({},Object(r["c"])("settings",["settings"])),components:{task:s("1730").default,"list-header":s("2831").default}},c=l,u=s("2877"),d=s("1c1c"),m=s("eebe"),p=s.n(m),f=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=f.exports;p()(f,"components",{QList:d["a"]})},2154:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row q-mb-sm"},[s("q-input",{attrs:{clearable:"",outlined:"",value:t.dueDate,label:"完成日期"},on:{input:function(e){return t.$emit("update:dueDate",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{attrs:{value:t.dueDate},on:{input:function(e){return t.$emit("update:dueDate",e)}}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}])})],1)},n=[],o={props:["dueDate"]},i=o,r=s("2877"),l=s("27f9"),c=s("0016"),u=s("7cbe"),d=s("52ee"),m=s("9c40"),p=s("7f67"),f=s("eebe"),b=s.n(f),k=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=k.exports;b()(k,"components",{QInput:l["a"],QIcon:c["a"],QPopupProxy:u["a"],QDate:d["a"],QBtn:m["a"]}),b()(k,"directives",{ClosePopup:p["a"]})},"21de":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",[s("modal-header",[t._v("编辑任务")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[s("q-card-section",{staticClass:"q-pt-none"},[s("modal-task-name",{ref:"modalTaskName",attrs:{name:t.taskToSubmit.name},on:{"update:name":function(e){return t.$set(t.taskToSubmit,"name",e)}}}),s("modal-due-date",{attrs:{dueDate:t.taskToSubmit.dueDate},on:{"update:dueDate":function(e){return t.$set(t.taskToSubmit,"dueDate",e)},"update:due-date":function(e){return t.$set(t.taskToSubmit,"dueDate",e)}}}),t.taskToSubmit.dueDate?s("modal-due-time",{attrs:{dueTime:t.taskToSubmit.dueTime},on:{"update:dueTime":function(e){return t.$set(t.taskToSubmit,"dueTime",e)},"update:due-time":function(e){return t.$set(t.taskToSubmit,"dueTime",e)}}}):t._e()],1),s("modal-buttons")],1)],1)},n=[],o=s("ded3"),i=s.n(o),r=s("2f62"),l=s("a8f3"),c={mixins:[l["a"]],props:["task","id"],data(){return{taskToSubmit:{}}},methods:i()(i()({},Object(r["b"])("tasks",["updateTask"])),{},{submitTask(){this.updateTask({id:this.id,updates:this.taskToSubmit}),this.$emit("close")}}),mounted(){this.taskToSubmit=Object.assign({},this.task)}},u=c,d=s("2877"),m=s("f09f"),p=s("a370"),f=s("eebe"),b=s.n(f),k=Object(d["a"])(u,a,n,!1,null,null,null);e["default"]=k.exports;b()(k,"components",{QCard:m["a"],QCardSection:p["a"]})},"227f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-input",{directives:[{name:"select-all",rawName:"v-select-all"}],staticClass:"col",attrs:{outlined:"",label:"搜索"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.searchField=""}},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.searchField?s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){t.searchField=""}}}):t._e(),s("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchField,callback:function(e){t.searchField=e},expression:"searchField"}})},n=[],o=s("ded3"),i=s.n(o),r=s("2f62"),l=s("13e4"),c={computed:i()(i()({},Object(r["d"])("tasks",["search"])),{},{searchField:{get(){return this.search},set(t){this.setSearch(t)}}}),methods:i()({},Object(r["b"])("tasks",["setSearch"])),directives:{selectAll:l["a"]}},u=c,d=s("2877"),m=s("27f9"),p=s("0016"),f=s("eebe"),b=s.n(f),k=Object(d["a"])(u,a,n,!1,null,"68689730",null);e["default"]=k.exports;b()(k,"components",{QInput:m["a"],QIcon:p["a"]})},2831:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-banner",{staticClass:"list-header text-white text-center",class:t.bgColor,attrs:{dense:"","inline-actions":""}},[s("span",{staticClass:"text-bold text-subtitle1"},[t._t("default")],2)])},n=[],o={props:["bgColor"]},i=o,r=(s("90d3"),s("2877")),l=s("54e1"),c=s("eebe"),u=s.n(c),d=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=d.exports;u()(d,"components",{QBanner:l["a"]})},"64c0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row q-mb-sm"},[s("q-input",{directives:[{name:"select-all",rawName:"v-select-all"}],ref:"name",staticClass:"col",attrs:{outlined:"",value:t.name,rules:[function(t){return!!t||"任务名称不能为空 "}],autofocus:"",clearable:"",label:"任务名称"},on:{input:function(e){return t.$emit("update:name",e)}}})],1)},n=[],o=s("13e4"),i={props:["name"],directives:{selectAll:o["a"]}},r=i,l=s("2877"),c=s("27f9"),u=s("eebe"),d=s.n(u),m=Object(l["a"])(r,a,n,!1,null,null,null);e["default"]=m.exports;d()(m,"components",{QInput:c["a"]})},"734f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut absolute-top"}},[s("q-banner",{staticClass:"bg-grey-3",scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"check",color:"primary"}})]},proxy:!0},{key:"action",fn:function(){return[s("q-btn",{attrs:{flat:"",color:"primary",label:"添加任务"},on:{click:function(e){return t.$root.$emit("showAddTask")}}})]},proxy:!0}])},[t._v("\n    今日没有待办事项！\n    ")])],1)},n=[],o={name:"NoTasks"},i=o,r=s("2877"),l=s("54e1"),c=s("0016"),u=s("9c40"),d=s("eebe"),m=s.n(d),p=Object(r["a"])(i,a,n,!1,null,"4b4f38c4",null);e["default"]=p.exports;m()(p,"components",{QBanner:l["a"],QIcon:c["a"],QBtn:u["a"]})},"89e3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card-section",{staticClass:"row"},[s("div",{staticClass:"text-h6"},[t._t("default")],2),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)},n=[],o={},i=o,r=s("2877"),l=s("a370"),c=s("2c91"),u=s("9c40"),d=s("7f67"),m=s("eebe"),p=s.n(m),f=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=f.exports;p()(f,"components",{QCardSection:l["a"],QSpace:c["a"],QBtn:u["a"]}),p()(f,"directives",{ClosePopup:d["a"]})},"90d3":function(t,e,s){"use strict";s("101b")},"9bf7":function(t,e,s){},a8f3:function(t,e,s){"use strict";e["a"]={methods:{submitForm(){this.$refs.modalTaskName.$refs.name.validate(),this.$refs.modalTaskName.$refs.name.hasError||this.submitTask()}},components:{"modal-header":s("89e3").default,"modal-task-name":s("64c0").default,"modal-due-date":s("2154").default,"modal-due-time":s("1c83").default,"modal-buttons":s("1cd5").default}}},d531:function(t,e,s){"use strict";s("9bf7")},e6ab:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-select",{staticClass:"col q-ml-sm",attrs:{filled:"",options:t.options,"emit-value":"","map-options":"",label:"排序","stack-label":""},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}})},n=[],o=(s("4e82"),s("ded3")),i=s.n(o),r=s("2f62"),l={data(){return{options:[{label:"名称",value:"name"},{label:"日期",value:"dueDate"}]}},computed:i()(i()({},Object(r["d"])("tasks",["sort"])),{},{sortBy:{get(){return this.sort},set(t){this.setSort(t)}}}),methods:i()({},Object(r["b"])("tasks",["setSort"]))},c=l,u=(s("076f"),s("2877")),d=s("ddd8"),m=s("eebe"),p=s.n(m),f=Object(u["a"])(c,a,n,!1,null,"ddd3fd34",null);e["default"]=f.exports;p()(f,"components",{QSelect:d["a"]})}}]);