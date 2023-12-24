(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(8),s=a.n(c),n=a(4),r=a(2),o=(a(14),a(15),a(7)),l=a.n(o),i=a(0),d=function(e){var t=e.todos,a=e.currentTodoId,c=e.onCurrentTodoChange;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:l()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("far",{"fa-eye-slash":a===e.id,"fa-eye":a!==e.id})})})})})]},e.id)}))})]})},j={all:"All",active:"Active",completed:"Completed"},u=function(e){var t=e.searchQuery,a=e.filter,c=e.onFilterChange,s=e.onSearchQueryChange;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsx)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return c(e.target.value)},children:Object.values(j).map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},b=(a(17),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function h(e){var t,a="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(a)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,a=e.onClose,c=Object(r.useState)(null),s=Object(n.a)(c,2),o=s[0],l=s[1],d=Object(r.useState)(!0),j=Object(n.a)(d,2),u=j[0],O=j[1];return Object(r.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then(l).finally((function(){return O(!1)}))}),[t]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),u?Object(i.jsx)(b,{}):Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:a})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),o&&Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]})]})},m=a(1),f=a(9),x=function(e){var t=e.initialTodos,a=e.searchQuery,c=e.filter,s=Object(f.a)(t),n=a.trim().toLocaleLowerCase();switch(n&&(s=s.filter((function(e){return e.title.toLowerCase().includes(n)}))),c){case j.completed:return s.filter((function(e){return e.completed}));case j.active:return s.filter((function(e){return!e.completed}));default:return s}},p=function(e,t){switch(t.type){case"setInitialTodos":return Object(m.a)(Object(m.a)({},e),{},{initialTodos:t.payload,todos:t.payload});case"setTodos":return Object(m.a)(Object(m.a)({},e),{},{todos:t.payload});case"setLoading":return Object(m.a)(Object(m.a)({},e),{},{isLoading:t.payload});case"setSearchQuery":return Object(m.a)(Object(m.a)({},e),{},{searchQuery:t.payload,todos:x(Object(m.a)(Object(m.a)({},e),{},{searchQuery:t.payload}))});case"setFilter":return Object(m.a)(Object(m.a)({},e),{},{filter:t.payload,todos:x(Object(m.a)(Object(m.a)({},e),{},{filter:t.payload}))});case"setCurrentTodo":return Object(m.a)(Object(m.a)({},e),{},{currentTodo:t.payload});default:return e}},y={initialTodos:[],todos:[],isLoading:!1,searchQuery:"",filter:"all",currentTodo:null},N=function(){var e=Object(r.useReducer)(p,y),t=Object(n.a)(e,2),a=t[0],c=a.todos,s=a.isLoading,o=a.filter,l=a.searchQuery,j=a.currentTodo,m=t[1];return Object(r.useEffect)((function(){m({type:"setLoading",payload:!0}),h("/todos").then((function(e){return m({type:"setInitialTodos",payload:e})})).finally((function(){return m({type:"setLoading",payload:!1})}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(u,{searchQuery:l,filter:o,onSearchQueryChange:function(e){return m({type:"setSearchQuery",payload:e})},onFilterChange:function(e){return m({type:"setFilter",payload:e})}})}),Object(i.jsxs)("div",{className:"block",children:[s&&Object(i.jsx)(b,{}),Object(i.jsx)(d,{todos:c,currentTodoId:null===j||void 0===j?void 0:j.id,onCurrentTodoChange:function(e){return m({type:"setCurrentTodo",payload:e})}})]})]})})}),j&&Object(i.jsx)(O,{todo:j,onClose:function(){return m({type:"setCurrentTodo",payload:null})}})]})};s.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b4a6b9f6.chunk.js.map