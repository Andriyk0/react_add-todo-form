(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=(a(13),a(7)),r=a(3),c=a(4),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),d=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],m=(a(15),a(0)),u=function(e){var t=e.todosPrepared;return Object(m.jsx)("div",{className:"todoBox",children:t.map((function(e){return Object(m.jsx)("div",{className:"todoBox__todo",children:e.user&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("strong",{children:"Name:"}),e.user.name,e.user.username]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Title:"}),e.title]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Status:"}),e.completed?"Complated":"Not complated"]})]})},e.id)}))})},h=function(){var e=Object(o.useState)(Object(r.a)(d)),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),h=Object(c.a)(i,2),b=h[0],p=h[1],j=Object(o.useState)(""),g=Object(c.a)(j,2),y=g[0],x=g[1],O=Object(o.useState)(!1),f=Object(c.a)(O,2),v=f[0],S=f[1],w=Object(r.a)(a).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:Object(r.a)(l).find((function(t){return t.id===e.userId}))||null})}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:"Add todo form"}),Object(m.jsxs)("form",{className:"App__form",onSubmit:function(e){e.preventDefault(),n([].concat(Object(r.a)(a),[{userId:Number(y),id:a.length+1,title:b,completed:v}])),p(""),S(!1),x("")},children:[Object(m.jsxs)("div",{className:"App__inputBox",children:[Object(m.jsxs)("select",{className:"select is-primary",required:!0,value:y,onChange:function(e){x(e.target.value)},children:[Object(m.jsx)("option",{children:"Choose User"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(m.jsxs)("div",{className:"App__input",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title"}),Object(m.jsx)("input",{className:"input is-primary",required:!0,type:"text",name:"title",value:b,onChange:function(e){p(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"checkbox",name:"completed",checked:v,onChange:function(){return S(!v)}}),Object(m.jsx)("label",{htmlFor:"completed",children:"Check if completed"})]})]}),Object(m.jsx)("button",{className:"button is-link",type:"submit",children:"Add"})]}),Object(m.jsx)(u,{todosPrepared:w})]})};i.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f3ce861f.chunk.js.map