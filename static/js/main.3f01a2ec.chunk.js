(this.webpackJsonpnews_redux=this.webpackJsonpnews_redux||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),s=n.n(c),u=n(8),o=n(17),i=n(2),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEWS":return t.payload;default:return e}},p=Object(i.c)({news:l}),f=n(5),h=n(6),b=n(9),d=n(7),m=n(10),v=n(14),w=n.n(v),j=n(18),O=function(e){function t(e){return Object(f.a)(this,t),Object(b.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.articles,n=e.innerText;console.log(n);var r=n?t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):t;return r?a.a.createElement("div",null,r.map((function(e,t){return a.a.createElement("p",null,e.title)}))):a.a.createElement("p",null,"Loading")}}]),t}(r.Component),E=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(d.a)(t).call(this,e))).InputStore=function(e){n.setState({innerText:e.target.value})},n.state={innerText:""},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchNews()}},{key:"render",value:function(){var e=this.props.news.articles,t=this.state.innerText;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("input",{type:"text",className:"search",onChange:this.InputStore}),a.a.createElement(O,{articles:e,innerText:t}))}}]),t}(a.a.Component),x=Object(u.b)((function(e){return{news:e.news}}),{fetchNews:function(){return function(){var e=Object(j.a)(w.a.mark((function e(t){var n,r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"212b3ff89c2f46dba79a92bd866e1658",n="https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat("212b3ff89c2f46dba79a92bd866e1658"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,t({type:"FETCH_NEWS",payload:a});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(E),y=function(){return a.a.createElement("h1",null,a.a.createElement(x,null))},g=Object(i.d)(p,Object(i.a)(o.a));s.a.render(a.a.createElement(u.a,{store:g},a.a.createElement(y,null)),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3f01a2ec.chunk.js.map