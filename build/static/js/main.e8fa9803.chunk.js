(this.webpackJsonpegamz=this.webpackJsonpegamz||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(21),i=c.n(a),r=(c(32),c(33),c(4)),l=c(2),o=c(0),j=c(27),d=(c.p,function(e,t){return e.location.pathname===t?"active":""}),h=Object(l.g)((function(e){Object(l.f)();var t=Object(s.useState)({isGameHover:!1}),c=Object(j.a)(t,2);c[0],c[1];return Object(o.jsx)("header",{className:"site-header home-one",id:"masthead",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"site-branding col-xs-12 col-sm-3",children:Object(o.jsx)("span",{children:"SpinTheWheel"})}),Object(o.jsxs)("nav",{className:"main-navigation navbar navbar-default",id:"site-navigation",children:[Object(o.jsx)("div",{className:"navbar-header",children:Object(o.jsxs)("button",{"data-target":".navbar-ex1-collapse","data-toggle":"collapse",className:"navbar-toggle",type:"button",children:[Object(o.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(o.jsx)("span",{className:"icon-bar"}),Object(o.jsx)("span",{className:"icon-bar"}),Object(o.jsx)("span",{className:"icon-bar"})]})}),Object(o.jsx)("div",{className:"collapse navbar-collapse navbar-ex1-collapse",children:Object(o.jsxs)("ul",{className:"nav navbar-nav",children:[Object(o.jsx)("li",{className:d(e,"/"),children:Object(o.jsx)(r.b,{to:"/",children:"Game"})}),Object(o.jsx)("li",{className:d(e,"/score-board"),children:Object(o.jsx)(r.b,{to:"/daily-score",children:"Daily Score"})}),Object(o.jsx)("li",{className:d(e,"/monthly-board"),children:Object(o.jsx)(r.b,{to:"/monthly-score",children:"Monthly Score"})}),Object(o.jsx)("li",{className:d(e,"/all-board"),children:Object(o.jsx)(r.b,{to:"/all-score",children:"All Score"})})]})})]})]})})})})),b=function(){return Object(o.jsx)("footer",{className:"site-footer",id:"colophon",children:Object(o.jsx)("div",{className:"footer-bottom",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"copyright"})})})})})},m=function(e){var t=e.children;e.title;return Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(h,{}),t,Object(o.jsx)(b,{})]})},O=function(){return Object(o.jsx)(m,{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"page-spacer clearfix",children:Object(o.jsx)("div",{id:"primary",children:Object(o.jsx)("main",{id:"main",className:"site-main",children:Object(o.jsx)("section",{className:"error-404 not-found",children:Object(o.jsxs)("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center",children:[Object(o.jsxs)("span",{className:"font-large",children:["404 ",Object(o.jsx)("strong",{children:"page not found"})]}),Object(o.jsx)("h2",{className:"text-center head-border-default",children:"Something Is Wrong"}),Object(o.jsxs)("div",{className:"page-content",children:[Object(o.jsx)("h4",{children:"The page you are looking for was moved, removed, renamed or might never exist."}),Object(o.jsx)(r.b,{to:"/",className:"btn btn-normal btn-medium",children:"Go Home"})]})]})})})})})})})},x=c(24),u=c(8),p=c(9),v=c(15),f=c(10),N=c(11),g=c(19),y=c.n(g),S=(c(41),function(e){Object(f.a)(c,e);var t=Object(N.a)(c);function c(e){var s;return Object(u.a)(this,c),(s=t.call(this,e)).state={selectedItem:null,name:""},s.selectItem=s.selectItem.bind(Object(v.a)(s)),s}return Object(p.a)(c,[{key:"selectItem",value:function(){var e=Object(x.a)(y.a.mark((function e(){var t,c,s,n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.state.selectedItem){e.next=18;break}return t=Math.floor(Math.random()*this.props.items.length),console.log("name========",this.state.name),console.log("wheel",this.props),c=this.props.items,s="",c.forEach((function(e,c){c===t&&(s=e)})),this.props.onSelectItem&&this.props.onSelectItem(t),this.setState({selectedItem:t}),e.next=11,fetch("https://formula.itnfd.com/api/postscore",{body:JSON.stringify({name:this.state.name,selectedItem:t,foodItem:s}),headers:{"Content-Type":"application/json"},method:"POST"});case 11:return n=e.sent,e.next=14,n.json();case 14:a=e.sent,console.log("DATA==========",a),e.next=20;break;case 18:this.setState({selectedItem:null}),setTimeout(this.selectItem,500);case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;console.log("=this.state=",this.state);var t=this.state.selectedItem,c=this.props.items,s={"--nb-item":c.length,"--selected-item":t},n=null!==t?"spinning":"";return console.log("===selectedItem==",t),console.log("==",s),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:Object(o.jsx)("strong",{children:"Enter Player Name: "})}),Object(o.jsx)("input",{type:"text",id:"input",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},className:""==this.state.name?"borderRed":"",placeholder:"Please add name before spin"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"wheel-container",children:Object(o.jsx)("div",{className:"wheel ".concat(n),style:s,onClick:this.selectItem,children:c.map((function(e,t){return Object(o.jsx)("div",{className:"wheel-item",style:{"--item-nb":t},children:e},t)}))})})]})}}]),c}(n.a.Component)),I=function(e){return Object(o.jsx)(m,{children:Object(o.jsx)("div",{class:"container",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"What should you eat today?"}),Object(o.jsx)("span",{className:"spnTxt",children:"Enter Player name is mandetory"}),Object(o.jsx)(S,{items:["Pizzas","Sandwiches","Salads","Soup","Chinese food","Pastas","Chicken"]})]})})})},w=function(e){Object(f.a)(c,e);var t=Object(N.a)(c);function c(e){var s;return Object(u.a)(this,c),(s=t.call(this,e)).state={items:[],DataisLoaded:!1},s}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://formula.itnfd.com/api/getdaily").then((function(e){return e.json()})).then((function(t){var c=JSON.stringify(t),s=JSON.parse(c),n=JSON.parse(s).map((function(e){return e}));e.setState({items:n,DataisLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.DataisLoaded,c=e.items;return t?Object(o.jsx)(m,{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"span5",children:Object(o.jsxs)("table",{className:"table table-striped table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Food Item "}),Object(o.jsx)("th",{children:"Date"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.item}),Object(o.jsx)("td",{children:e.doe})]},e.id)}))})]})})})})})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Pleses wait some time.... "})," "]})}}]),c}(n.a.Component),D=function(e){Object(f.a)(c,e);var t=Object(N.a)(c);function c(e){var s;return Object(u.a)(this,c),(s=t.call(this,e)).state={items:[],DataisLoaded:!1},s}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://formula.itnfd.com/api/getmonthlyscore").then((function(e){return e.json()})).then((function(t){var c=JSON.stringify(t),s=JSON.parse(c),n=JSON.parse(s).map((function(e){return e}));e.setState({items:n,DataisLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.DataisLoaded,c=e.items;return t?Object(o.jsx)(m,{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"span5",children:Object(o.jsxs)("table",{className:"table table-striped table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Food Item "}),Object(o.jsx)("th",{children:"Date"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.item}),Object(o.jsx)("td",{children:e.doe})]},e.id)}))})]})})})})})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Pleses wait some time.... "})," "]})}}]),c}(n.a.Component),k=function(e){Object(f.a)(c,e);var t=Object(N.a)(c);function c(e){var s;return Object(u.a)(this,c),(s=t.call(this,e)).state={items:[],DataisLoaded:!1},s}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://formula.itnfd.com/api/getscore").then((function(e){return e.json()})).then((function(t){var c=JSON.stringify(t),s=JSON.parse(c),n=JSON.parse(s).map((function(e){return e}));e.setState({items:n,DataisLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.DataisLoaded,c=e.items;return t?Object(o.jsx)(m,{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"span5",children:Object(o.jsxs)("table",{className:"table table-striped table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Food Item "}),Object(o.jsx)("th",{children:"Date"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.item}),Object(o.jsx)("td",{children:e.doe})]},e.id)}))})]})})})})})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Pleses wait some time.... "})," "]})}}]),c}(n.a.Component);var C=function(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(o.jsx)(l.a,{exact:!0,path:"/daily-score",component:w}),Object(o.jsx)(l.a,{exact:!0,path:"/monthly-score",component:D}),Object(o.jsx)(l.a,{exact:!0,path:"/all-score",component:k}),Object(o.jsx)(l.a,{component:O})]})})},J=c(26),F=c.n(J);var L=function(){var e=new F.a;return Object(s.useEffect)((function(){e.init()}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(C,{})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root")),P()}},[[42,1,2]]]);
//# sourceMappingURL=main.e8fa9803.chunk.js.map