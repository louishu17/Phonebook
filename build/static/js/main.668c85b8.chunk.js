(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(15),o=t.n(c),r=t(6),a=t(3),u=t(1),s=t(0),l=function(e){var n=e.person,t=e.deletePerson;return Object(s.jsxs)("li",{children:[n.name," ",n.number," ",Object(s.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},i=function(e){var n=e.persons,t=e.allPersons,c=e.deletePerson;return console.log(n.length),0===n.length?Object(s.jsx)("ul",{children:t.map((function(e,n){return Object(s.jsx)(l,{person:e,deletePerson:c},n)}))}):Object(s.jsx)("ul",{children:n.map((function(e,n){return Object(s.jsx)(l,{person:e,deletePerson:c},n)}))})},d=function(e){var n=e.onChange,t=e.value;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{onChange:n,value:t})]})},b={color:"green",background:"lightgrey",font_size:"20",border_style:"solid",border_radius:5,border_color:"green",padding:10,margin_bottom:10},j={color:"red",background:"lightgrey",font_size:20,border_style:"solid",border_radius:5,padding:10,margin_bottom:10},f=function(e){var n=e.message;return null==n?null:n.includes("ERROR")?Object(s.jsx)("div",{style:j,className:"error",children:n}):Object(s.jsx)("div",{style:b,className:"error",children:n})},h=function(e){var n=e.addName,t=e.newName,c=e.handleNameChange,o=e.newNumber,r=e.handleNumberChange;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:o,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},m=t(4),O=t.n(m),g="/api/persons",p=function(){return O.a.get(g).then((function(e){return e.data}))},v=function(e){return O.a.post(g,e).then((function(e){return e.data}))},x=function(e,n){return O.a.put("".concat(g,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return O.a.delete("".concat(g,"/").concat(e)).then((function(e){return e.data}))},y=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(u.useState)(""),l=Object(a.a)(o,2),b=l[0],j=l[1],m=Object(u.useState)(""),O=Object(a.a)(m,2),g=O[0],y=O[1],N=Object(u.useState)(null),C=Object(a.a)(N,2),k=C[0],R=C[1],_=Object(u.useState)(""),P=Object(a.a)(_,2),S=P[0],E=P[1],T=Object(u.useState)(t),z=Object(a.a)(T,2),A=z[0],D=z[1];Object(u.useEffect)((function(){console.log("effect"),p().then((function(e){c(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(f,{message:k}),Object(s.jsx)(d,{onChange:function(e){console.log(e.target.value),E(e.target.value),D(t.filter((function(n){return-1!==n.name.toLowerCase().indexOf(e.target.value.toLowerCase())})))},value:S}),Object(s.jsx)("h3",{children:"Add a new"}),Object(s.jsx)(h,{addName:function(e){e.preventDefault();var n=A.filter((function(e){return e.name===b})),t=n[0],c=Object(r.a)(Object(r.a)({},t),{},{number:g});0!==n.length?window.confirm("".concat(t.name," is already added to the phonebook, replace the old number with a new one?"))&&x(c.id,c).then((function(e){console.log("".concat(e.name," successfully updated")),D(A.map((function(n){return n.id!==t.id?n:e}))),j(""),y(""),R("".concat(c.name," was successfully updated")),setTimeout((function(){R(null)}),5e3)})).catch((function(e){console.log(e),D(A.filter((function(e){return e.id!==c.id}))),j(""),y(""),R("[ERROR] ".concat(c.name," was already deleted from server")),setTimeout((function(){R(null)}),5e3)})):v({name:b,number:g}).then((function(e){D(A.concat(e)),j(""),y(""),R("Added ".concat(e.name)),setTimeout((function(){R(null)}),5e3)})).catch((function(e){R("[ERROR] ".concat(e.response.data.error)),setTimeout((function(){R(null)}),5e3),console.log(e.response.data)}))},newName:b,handleNameChange:function(e){console.log(e.target.value),j(e.target.value)},newNumber:g,handleNumberChange:function(e){y(e.target.value)}}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(i,{persons:t,allPersons:A,deletePerson:function(e){var n=A.filter((function(n){return n.id===e})),t=n[0].name,c=n[0].id;window.confirm("Delete ".concat(t))&&(w(c),console.log("".concat(t," successfully deleted")),R("".concat(t," was successfully deleted")),D(A.filter((function(e){return e.id!==c}))),setTimeout((function(){R(null)}),5e3))}})]})};o.a.render(Object(s.jsx)(y,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.668c85b8.chunk.js.map