(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(9),s=n.n(i),r=(n(21),n(5)),o=n(3),l=n(1),j=Object(c.forwardRef)((function(e,t){var n=15e5,a=Object(c.useState)(n),i=Object(r.a)(a,2),s=i[0],j=i[1],u=Object(c.useState)(""),O=Object(r.a)(u,2),b=O[0],d=O[1],f=Object(c.useState)(""),h=Object(r.a)(f,2),p=h[0],x=h[1],m=Object(o.c)((function(e){return e.todoList})),v=Object(o.c)((function(e){return e.isRunning})),g=Object(o.b)(),E=Object(c.useRef)(null),L=Object(c.useRef)(null);Object(c.useImperativeHandle)(t,(function(){return{resetTimer:I}}));var T=function(e){g({type:"REVISE_ISRUNNING",payload:{boolean:e}})},D=function(e){var t=e.toString();return 1===t.length?"0"+t:t},I=function(e){0!==m.length&&(clearInterval(E.current),j(n),T(!1),e||(g({type:"ADD_DONELIST"}),g({type:"DELETE_TODOLIST",payload:{index:0}})))},S=Object(c.useMemo)((function(){return m[0]&&m[0].title||null}),[m]),y=Object(c.useMemo)((function(){return s<3e5}),[s]),N=Object(c.useMemo)((function(){var e=y?"green":"orange",t=v?"pause":"play";return"".concat(".","/images/icon-").concat(t,"--").concat(e,".svg")}),[y,v]);return Object(c.useEffect)((function(){return L.current=setInterval((function(){d((new Date).toLocaleDateString()),x((new Date).toLocaleTimeString())}),400),function(){clearInterval(E.current),clearInterval(L.current)}}),[]),Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"time_zone",children:[Object(l.jsx)("span",{children:b}),Object(l.jsx)("span",{children:p})]}),Object(l.jsxs)("h1",{className:"time",children:["Time:",function(e){var t=Math.floor(e/6e4),n=Math.floor((e-60*t*1e3)/1e3);return"".concat(D(t),":").concat(D(n))}(s)]}),Object(l.jsxs)("h2",{children:["\u7576\u524d\u4efb\u52d9\uff1a",S||"\u5c1a\u672a\u65b0\u589e\u5f85\u8fa6\u4e8b\u9805"]}),y?Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{children:"\u4f11\u606f\uff0c"}),"\u662f\u70ba\u4e86\u4e0b\u4e00\u6b21\u7684\u52aa\u529b\u3002"]}):null,Object(l.jsxs)("div",{className:"btn_list",children:[Object(l.jsx)("button",{className:"start",onClick:function(){if(v)T(!1),clearInterval(E.current);else{if(!S)return void alert("\u8acb\u5148\u65b0\u589e\u5f85\u8fa6\u4e8b\u9805!");T(!0),function(){var e=(new Date).getTime();E.current=setInterval((function(){var t=(new Date).getTime(),n=s-(t-e);j(n),n<=0&&I()}),400)}()}},children:Object(l.jsx)("img",{src:N,alt:""})}),S?Object(l.jsx)("button",{onClick:function(e,t){I(t)},children:Object(l.jsx)("i",{className:"fas fa-times"})}):null]}),Object(l.jsx)("img",{className:"tomato",src:"".concat(".","/images/tomato--").concat(y?"green":"orange",".svg")})]})})),u=(n(28),n(11)),O=n(2),b=n(7),d="ADD_TODOLIST",f="DELETE_TODOLIST",h="REVISE_TODOLIST",p="REVISEDONE_TODOLIST",x="ADD_DONELIST",m="REVISE_ISRUNNING",v={todoList:[],doneList:[],isRunning:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=Object(b.a)(e.todoList);return n.push({title:t.payload.title,isEdit:!1}),Object(O.a)(Object(O.a)({},e),{},{todoList:n});case f:var c=Object(b.a)(e.todoList);return c.splice(t.payload.index,1),Object(O.a)(Object(O.a)({},e),{},{todoList:c});case h:var a=Object(b.a)(e.todoList);return a.forEach((function(e,t){a[t].isEdit=!1})),a[t.payload.index].isEdit=!0,Object(O.a)(Object(O.a)({},e),{},{todoList:a});case p:var i=Object(b.a)(e.todoList);return i[t.payload.index].title=t.payload.name,i[t.payload.index].isEdit=!1,Object(O.a)(Object(O.a)({},e),{},{todoList:i});case x:var s=Object(b.a)(e.doneList);return s.push(e.todoList[0].title),Object(O.a)(Object(O.a)({},e),{},{doneList:s});case m:var r=t.payload.boolean;return Object(O.a)(Object(O.a)({},e),{},{isRunning:r});default:return e}},E=function(e){var t=Object(o.c)((function(e){return e.todoList})),n=Object(o.c)((function(e){return e.doneList})),a=Object(o.c)((function(e){return e.isRunning})),i=Object(c.useState)(""),s=Object(r.a)(i,2),j=s[0],u=s[1],O=Object(c.useState)(""),b=Object(r.a)(O,2),d=b[0],f=b[1],h=Object(c.useState)(!0),p=Object(r.a)(h,2),x=p[0],m=p[1],v=Object(o.b)(),g=function(){v({type:"ADD_TODOLIST",payload:{title:j}}),u("")},E=function(){m(!x)};return Object(l.jsxs)("aside",{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h2",{children:"\u5f85\u8fa6\u6e05\u55ae"}),Object(l.jsxs)("div",{className:"tab",children:[Object(l.jsx)("span",{className:x?"active":"",onClick:E,children:"\u672a\u5b8c\u6210"}),Object(l.jsx)("span",{className:x?"":"active",onClick:E,children:"\u5df2\u5b8c\u6210"})]})]}),Object(l.jsxs)("div",{className:"title_box",children:[Object(l.jsx)("input",{type:"text",value:j,onKeyPress:function(e){13===e.charCode&&g()},onChange:function(e){return u(e.target.value)}}),Object(l.jsx)("button",{className:"add_btn",onClick:g,children:Object(l.jsx)("i",{className:"fas fa-plus"})})]}),Object(l.jsx)("ul",{children:x?t.map((function(n,c){return Object(l.jsxs)("li",{children:[n.isEdit?null:Object(l.jsxs)("span",{children:[n.title," ",a&&0===c?Object(l.jsx)("span",{className:"ing",children:"(\u9032\u884c\u4e2d)"}):null]}),n.isEdit?Object(l.jsx)("input",{type:"text",value:d,onChange:function(e){return f(e.target.value)}}):null,Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{src:"./images/icon-edit.svg",onClick:function(){var e;t[e=c].isEdit?v({type:"REVISEDONE_TODOLIST",payload:{index:e,name:d}}):(v({type:"REVISE_TODOLIST",payload:{index:e}}),f(t[e].title))},alt:""}),Object(l.jsx)("img",{src:"./images/icon-delete.svg",onClick:function(){return v({type:"DELETE_TODOLIST",payload:{index:t=c}}),void(0===t&&e.setReset());var t},alt:""})]})]},c)})):n.map((function(e,t){return Object(l.jsx)("li",{className:"done_item",children:e},t)}))})]})},L=Object(u.b)(g);var T=function(){var e=Object(c.useRef)(null);return Object(l.jsx)(o.a,{store:L,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(E,{setReset:function(){console.log("mainRef.current",e.current),e.current.resetTimer(!0)}}),Object(l.jsx)(j,{ref:e})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),D()}},[[29,1,2]]]);
//# sourceMappingURL=main.11030378.chunk.js.map