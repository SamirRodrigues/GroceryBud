(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),i=(a(14),a(8)),s=a(5),o=a(1),m=a(4),u=function(e){var t=e.items,a=e.removeItem,n=e.editItem;return c.a.createElement("div",{className:"grocery-list"},t.map((function(e){var t=e.id,r=e.title,l=e.description,i=e.price;return c.a.createElement("article",{key:t,className:"grocery-item"},c.a.createElement("div",null,c.a.createElement("p",{className:"title"},r),c.a.createElement("p",{className:"description"},l),c.a.createElement("p",{className:"title"},"R$ ",i)),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"button",className:"edit-btn",onClick:function(){return n(t)}},c.a.createElement(m.a,null)),c.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return a(t)}},c.a.createElement(m.b,null))))})))},d=function(e){var t=e.type,a=e.msg,r=e.removeAlert,l=e.list;return Object(n.useEffect)((function(){var e=setTimeout((function(){r()}),3e3);return function(){return clearTimeout(e)}}),[l]),c.a.createElement("p",{className:"alert alert-".concat(t)},a)};var p=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),p=m[0],b=m[1],f=Object(n.useState)(0),g=Object(o.a)(f,2),v=g[0],E=g[1],N=Object(n.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),O=Object(o.a)(N,2),j=O[0],y=O[1],h=Object(n.useState)(!1),S=Object(o.a)(h,2),I=S[0],C=S[1],k=Object(n.useState)(null),w=Object(o.a)(k,2),J=w[0],x=w[1],T=Object(n.useState)({show:!1,msg:"",type:""}),A=Object(o.a)(T,2),D=A[0],B=A[1],M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";B({show:e,type:t,msg:a})};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(j))}),[j]),c.a.createElement("section",{className:"section-center"},c.a.createElement("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),a)if(a&&I)y(j.map((function(e){return e.id===J?Object(s.a)(Object(s.a)({},e),{},{title:a,description:p,price:v}):e}))),r(""),b(""),E(0),x(null),C(!1),M(!0,"success","value changed");else{M(!0,"success","item added to the list");var t={id:(new Date).getTime().toString(),title:a,description:p,price:v};y([].concat(Object(i.a)(j),[t])),r(""),b(""),E(0)}else M(!0,"danger","please enter value")}},D.show&&c.a.createElement(d,Object.assign({},D,{removeAlert:M})),c.a.createElement("h3",null,"Products"),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"grocery",placeholder:"title",value:a,onChange:function(e){return r(e.target.value)}})),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"grocery",placeholder:"description",value:p,onChange:function(e){return b(e.target.value)}})),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"number",className:"grocery",placeholder:"price",value:v,onChange:function(e){return E(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"submit-btn"},I?"edit":"submit")),j.length>0&&c.a.createElement("div",{className:"grocery-container"},c.a.createElement(u,{items:j,removeItem:function(e){M(!0,"danger","item removed"),y(j.filter((function(t){return t.id!==e})))},list:j,editItem:function(e){var t=j.find((function(t){return t.id===e}));C(!0),x(e),r(t.title),b(t.description),E(t.price)}}),c.a.createElement("button",{className:"clear-btn",onClick:function(){M(!0,"danger","empty list"),y([])}},"Clear Items")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.fe3f8730.chunk.js.map