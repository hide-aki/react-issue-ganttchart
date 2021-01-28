(this["webpackJsonpreact-issue-ganttchart"]=this["webpackJsonpreact-issue-ganttchart"]||[]).push([[0],{23:function(t,e,n){t.exports=n(53)},28:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(21),i=n.n(r),c=(n(28),n(4)),s=n(5),u=n(7),l=n(6),d=n(8),h=n(1),g=(n(29),n(11)),m=n.n(g),p=n(22),f=n(9),k=n.n(f),b=n(10),v=n.n(b),_=function(t){var e=t.match(/start_date: \d{4}\/\d{1,2}\/\d{1,2}/);return null==e?null:(e=e[0].match(/\d{4}\/\d{1,2}\/\d{1,2}/)[0],new Date(e))},w=function(t){var e=t.match(/due_date: \d{4}\/\d{1,2}\/\d{1,2}/);return null==e?null:(e=e[0].match(/\d{4}\/\d{1,2}\/\d{1,2}/)[0],new Date(e))},y=function(t){var e=t.match(/progress: \d{1}\.\d{1}/);return null==e?null:(e=e[0].match(/\d{1}\.\d{1}/)[0],parseFloat(e))},C=function(){var t=Object(p.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="https://api.github.com/repos/lamact/react-issue-ganttchart/issues",k.a.get(n).then((function(t){t.data.map((function(t){return k.a.get(n+"/"+t.number).then((function(n){var a,o,r=_(n.data.body),i=w(n.data.body),c=null;if(null!=r&&null!=i){var s=v()(r),u=v()(i);a=r.toLocaleDateString("ja-JP"),o=u.diff(s,"days")+1,c=!1}else a=new Date(t.created_at).toLocaleDateString("ja-JP"),o=1,c=!0;var l=y(n.data.body);null==l&&(l=.1);var d={id:t.number,text:t.title,start_date:a,duration:o,progress:l,unscheduled:c},h=[];h.push(d),h={data:h,links:[]},e.parse(h),e.sort("start_date",!1)})),null}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t,e,n,a){var o="https://api.github.com/repos/lamact/react-issue-ganttchart/issues/"+e.id,r=new Date(e.start_date),i=r.toLocaleDateString("ja-JP"),c=v()(r).add(e.duration-1,"d").toDate().toLocaleDateString("ja-JP");return k.a.get(o).then((function(t){var r=t.data.body;r=function(t,e){return null!=_(t)?t.replace(/start_date: \d{4}\/\d{1,2}\/\d{1,2}/,"start_date: "+e):"start_date: "+e+"\n"+t}(r=function(t,e){return null!=w(t)?t.replace(/due_date: \d{4}\/\d{1,2}\/\d{1,2}/,"due_date: "+e):"due_date: "+e+"\n"+t}(r=function(t,e){var n=y(t),a=Math.round(10*e)/10;return null!=n?t.replace(/progress: \d{1}\.\d{1}/,"progress: "+a):"progress: "+a+"\n"+t}(r,e.progress),c),i),k.a.post(o,{body:r},{headers:{Authorization:"token ".concat(n)}}).then((function(t){console.log("success update issue")})).catch((function(t){alert("failed update issue"),C(a)}))})),null},D=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).dataProcessor=null,n.initZoom(),n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"initZoom",value:function(){h.gantt.ext.zoom.init({levels:[{name:"Days",scale_height:60,min_column_width:70,scales:[{unit:"week",step:1,format:"%M, %d week"},{unit:"day",step:1,format:"%d %M"}]},{name:"Months",scale_height:60,min_column_width:70,scales:[{unit:"month",step:1,format:"%Y %F"},{unit:"week",step:1,format:"%M, %d week"}]}]})}},{key:"setZoom",value:function(t){h.gantt.ext.zoom.setLevel(t)}},{key:"initGanttDataProcessor",value:function(){var t=this.props.onDataUpdated;this.dataProcessor=h.gantt.createDataProcessor((function(e,n,a,o){return new Promise((function(r,i){return t&&t(e,n,a,o),r()}))}))}},{key:"shouldComponentUpdate",value:function(t){return this.props.zoom!==t.zoom}},{key:"componentDidMount",value:function(){var t=this;h.gantt.config.xml_date="%Y/%m/%d %H:%i",h.gantt.config.order_branch=!0,h.gantt.config.order_branch_free=!0,h.gantt.config.keep_grid_width=!0,h.gantt.config.grid_resize=!0,h.gantt.config.show_unscheduled=!0,h.gantt.config.sort=!0,h.gantt.attachEvent("onTaskDblClick",(function(t,e){!function(t,e){window.open("https://github.com/lamact/react-issue-ganttchart/issues/"+t,"_blank")}(t)})),h.gantt.attachEvent("onTaskCreated",(function(t,e){!function(t,e){var n="";n+="start_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%0D%0A",n+="due_date:%20"+(new Date).toLocaleDateString("ja-JP")+"%0D%0A",n+="progress:%200.1%0D%0A",window.open("https://github.com/lamact/react-issue-ganttchart/issues/new?assignees=&labels=&title=&body="+n,"_blank"),console.log(e)}(0,e)})),h.gantt.attachEvent("onAfterTaskUpdate",(function(e,n){j(0,n,t.props.token,h.gantt)})),h.gantt.init(this.ganttContainer),this.initGanttDataProcessor(),C(h.gantt)}},{key:"componentWillUnmount",value:function(){this.dataProcessor&&(this.dataProcessor.destructor(),this.dataProcessor=null)}},{key:"render",value:function(){var t=this,e=this.props.zoom;return this.setZoom(e),o.a.createElement("div",{ref:function(e){t.ganttContainer=e},style:{width:"100%",height:"100%"}})}}]),e}(a.Component),O=(n(50),D),Z=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).handleZoomChange=function(t){n.props.onZoomChange&&n.props.onZoomChange(t.target.value)},n.handleTokenChange=function(t){n.props.onTokenChange&&n.props.onTokenChange(t.target.value)},n.handleGitURLChange=function(t){n.props.onGitURLChange&&n.props.onGitURLChange(t.target.value)},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=["Days","Months"].map((function(e){var n=t.props.zoom===e;return o.a.createElement("label",{key:e,className:"radio-label ".concat(n?"radio-label-active":"")},o.a.createElement("input",{type:"radio",checked:n,onChange:t.handleZoomChange,value:e}),e)}));return o.a.createElement("div",{className:"tool-bar"},o.a.createElement("b",null,"URL: "),o.a.createElement("input",{type:"text",value:this.props.url,onChange:this.handleGitURLChange,className:"text-input-label"}),o.a.createElement("b",null,"Token: "),o.a.createElement("input",{type:"password",value:this.props.token,onChange:this.handleTokenChange,className:"text-input-label"}),o.a.createElement("b",null,"Zoom: "),e)}}]),e}(a.Component),E=(n(51),Z),L=n(3),P=(n(52),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={currentZoom:"Months",messages:[],git_url:"https://github.com/",token:""},n.handleZoomChange=function(t){n.setState({currentZoom:t}),Object(L.bake_cookie)("currentZoom",t)},n.handleTokenChange=function(t){n.setState({token:t}),Object(L.bake_cookie)("token",t)},n.handleGitURLChange=function(t){Object(L.bake_cookie)("git_url",t)},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({token:Object(L.read_cookie)("token")}),this.setState({git_url:Object(L.read_cookie)("git_url")}),"Days"!==Object(L.read_cookie)("currentZoom")&&"Months"!==Object(L.read_cookie)("currentZoom")||this.setState({currentZoom:Object(L.read_cookie)("currentZoom")})}},{key:"render",value:function(){var t=this.state,e=t.currentZoom,n=t.git_url,a=t.token;return o.a.createElement("div",null,o.a.createElement("div",{className:"zoom-bar"},o.a.createElement(E,{zoom:e,onZoomChange:this.handleZoomChange,git_url:n,onGitURLChange:this.handleGitURLChange,token:a,onTokenChange:this.handleTokenChange})),o.a.createElement("div",{className:"gantt-container"},o.a.createElement(O,{zoom:e,git_url:n,token:a,onDataUpdated:this.logDataUpdate})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.256e63d3.chunk.js.map