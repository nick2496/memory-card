(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{23:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e.n(c),a=e(11),o=e.n(a),s=e(15),m=e(7),u=e(2),d=e(3);function b(){var n=Object(u.a)(["\n  border: 4px solid black;\n  border-radius: 10px;\n  height: 210px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin: 5px;\n"]);return b=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: none;\n  border: 2px solid black;\n  padding: 5px;\n"]);return p=function(){return n},n}var g=d.b.div(p()),l=d.b.div(b()),f=function(n){return Object(r.jsx)(g,{id:"parent",children:[{img:"https://oyster.ignimgs.com/wordpress/stg.ign.com/2016/02/v4_floki_05252015_jh_04412.jpg",name:"Fl\xf3ki Vilger\xf0arson",birth:"763 AD"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXB5cjetyQFUh0B-mKKsnmUyd_fWQM9_g6_A&usqp=CAU",name:'Bj\xf6rn "Ironside" Ragnarsson',birth:"781 AD"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_we-Plilll136BYLHk8bGVHs34fMEYkygw&usqp=CAU",name:"Ragnar Sigurdsson",birth:"763 AD"},{img:"https://i.pinimg.com/originals/30/87/ca/3087ca8227ba8e3ad7540ea74740d3ab.jpg",name:"Lagertha",birth:"763 AD"},{img:"https://pbs.twimg.com/profile_images/1252127837567492096/gzzQH89p.jpg",name:'\xcdvarr "Boneless" Ragnarsson',birth:"800 AD"},{img:"https://i.pinimg.com/736x/26/67/e0/2667e0b34f250afa0b2704c4308f8067.jpg",name:"Ubbe Ragnarsson",birth:"795 AD"},{img:"https://pbs.twimg.com/media/EYDMrNzXsAAtd6Q.jpg",name:"Hvitserk Ragnarsson",birth:"797 AD"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqr_Koc0uyfrNUIs-ZgTprjAan8DbOB2gNw&usqp=CAU",name:"Rollo of Normandy",birth:"762 AD"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ck6hEOPhzgu6PV6_dUgjw8u8DgMof6FsKg&usqp=CAU",name:"Athelstan",birth:"780 AD"}].map((function(t){return Object(r.jsxs)(l,{onClick:n.computeScore,className:"cards",children:[Object(r.jsx)("img",{src:t.img,width:"180px",height:"150px",alt:t.name}),Object(r.jsxs)("p",{children:[" Name: ",t.name," ",Object(r.jsx)("br",{}),"Born: ",t.birth]})]},t.name)}))})};function h(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  border: 2px solid black;\n  padding: 5px;\n  font-size: 15px;\n"]);return h=function(){return n},n}function j(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  grid-template-rows: none;\n  font-family: monospace;\n  justify-content: center;\n  align-items: center;\n  width: 80vw;\n  height: 700px;\n  margin: 30px auto;\n"]);return j=function(){return n},n}function x(){var n=Object(u.a)(["\n  body {\n    background: #8B6220;\n  }\n"]);return x=function(){return n},n}var O=Object(d.a)(x()),v=d.b.div(j()),y=d.b.div(h()),A=function(){var n=Object(c.useState)(0),t=Object(m.a)(n,2),e=t[0],i=t[1],a=Object(c.useState)(0),o=Object(m.a)(a,2),u=o[0],d=o[1],b=Object(c.useState)([]),p=Object(m.a)(b,2),g=p[0],l=p[1];return Object(c.useEffect)((function(){var n=function(){var n=Array.from(e);n.forEach((function(n){return t.removeChild(n)})),function(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),r=[n[e],n[t]];n[t]=r[0],n[e]=r[1]}}(n),n.forEach((function(n){return t.appendChild(n)}))},t=document.querySelector("#parent"),e=t.querySelectorAll(".cards");return e.forEach((function(t){return t.addEventListener("click",n)})),function(){e.forEach((function(t){return t.removeEventListener("click",n)}))}}),[]),Object(r.jsxs)(v,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(f,{computeScore:function(n){var t=n.currentTarget;g.includes(t)?(d((function(n){return e>u?e:u})),i(0),l([])):(l((function(n){return[].concat(Object(s.a)(n),[t])})),i(e+1))}}),Object(r.jsxs)(y,{children:[Object(r.jsx)("h2",{children:" memory-card "}),Object(r.jsxs)("p",{children:[" Current Score: ",e," "]}),Object(r.jsxs)("p",{children:[" Best Score: ",u," "]})]})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.caa40b2c.chunk.js.map