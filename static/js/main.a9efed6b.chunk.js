(this["webpackJsonpwobble-transition"]=this["webpackJsonpwobble-transition"]||[]).push([[0],{64:function(e,t,a){e.exports=a(77)},68:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(27),c=a.n(o),l=a(9);a(68);function i(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-inner"},r.a.createElement("div",{className:"logo"},"CHAIR."),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"discover")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"products")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"solutions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"reach")),r.a.createElement("li",{className:"btn"},r.a.createElement("a",{href:"/"},"order"))))))}var s=a(60),m=a(10),u=a(49),h=a.n(u),p={sections:3,pages:3,zoom:1,top:Object(n.createRef)()},d=Object(n.createContext)(0);function f(e){var t=e.children,a=e.offset,o=e.factor,c=Object(s.a)(e,["children","offset","factor"]),l=function(){var e=p.sections,t=p.pages,a=p.zoom,r=Object(m.g)(),o=r.size,c=r.viewport,l=Object(n.useContext)(d),i=c.width,s=c.height,u=i/a,h=s/a,f=o.width<700,E=u*(f?.2:.1),g=u*(f?.8:.6),v=h*((t-1)/(e-1));return{aspect:o.height/s,viewport:c,offset:l,viewportWidth:i,viewportHeight:s,canvasWidth:u,canvasHeight:h,mobile:f,margin:E,contentMaxWidth:g,sectionHeight:v}}(),i=l.offset,u=l.sectionHeight,f=l.aspect,E=Object(n.useRef)();return a=void 0!==a?a:i,Object(m.e)((function(){var e=E.current.position.y,t=p.top.current/f;E.current.position.y=h()(e,t/p.zoom*o,.1)})),r.a.createElement(d.Provider,{value:a},r.a.createElement("group",Object.assign({},c,{position:[0,-u*a*o,0]}),r.a.createElement("group",{ref:E},t)))}var E=a(41),g=a(21),v=a(59);function b(e){var t=e.url,a=Object(E.b)(t,!0);return r.a.createElement("primitive",{object:a.scene,dispose:null})}var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ambientLight",{intensity:.3}),r.a.createElement("directionalLight",{position:[10,10,5],intensity:1}),r.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),r.a.createElement("spotLight",{intensity:1,position:[1e3,0,0],castShadow:!0}))},j=function(e){var t=e.domContent,a=e.children,o=e.bgColor,c=e.modelPath,i=e.position,s=Object(n.useRef)();Object(m.e)((function(){return s.current.rotation.y+=.01}));var u=Object(v.a)({threshold:0}),h=Object(l.a)(u,2),p=h[0],d=h[1];return Object(n.useEffect)((function(){d&&(document.body.style.background=o)}),[d]),r.a.createElement(f,{factor:1.5,offset:1},r.a.createElement("group",{position:[0,i,0]},r.a.createElement("mesh",{ref:s,position:[0,-35,0]},r.a.createElement(b,{url:c})),r.a.createElement(E.a,{fullscreen:!0,portal:t},r.a.createElement("div",{ref:p,className:"container"},r.a.createElement("h1",{className:"title"},a)))))};function y(){var e=Object(E.c)(),t=e.active,a=e.progress;return Object(g.useTransition)(t,{from:{opacity:1,progress:0},leave:{opacity:0},update:{progress:a}})((function(e,t){var a=e.progress,n=e.opacity;return t&&r.a.createElement(g.a.div,{className:"loading",style:{opacity:n}},r.a.createElement("div",{className:"loading-bar-container"},r.a.createElement(g.a.div,{className:"loading-bar",style:{width:a}})))}))}function O(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=(t[1],Object(n.useRef)()),c=Object(n.useRef)(),s=function(e){return p.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){s({target:c.current})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(m.a,{concurrent:!0,colorManagement:!0,camera:{position:[0,0,120],fov:70}},r.a.createElement(w,null),r.a.createElement(n.Suspense,{fallback:null},r.a.createElement(j,{domContent:o,bgColor:"#f15946",modelPath:"/armchairYellow.gltf",position:250},r.a.createElement("span",null,"Meet the new "),r.a.createElement("span",null,"shopping experience "),r.a.createElement("span",null,"for online chairs")),r.a.createElement(j,{domContent:o,bgColor:"#571ec1",modelPath:"/armchairGreen.gltf",position:0},r.a.createElement("span",null,"Shit... we even"),r.a.createElement("span",null,"got different colors")),r.a.createElement(j,{domContent:o,bgColor:"#636567",modelPath:"/armchairGray.gltf",position:-250},r.a.createElement("span",null,"And yes"),r.a.createElement("span",null,"we even got"),r.a.createElement("span",null,"monochrome!")))),r.a.createElement(y,null),r.a.createElement("div",Object.assign({className:"scrollArea",ref:c,onScroll:s},a),r.a.createElement("div",{style:{position:"sticky",top:0},ref:o}),r.a.createElement("div",{style:{height:"".concat(100*p.pages,"vh")}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.a9efed6b.chunk.js.map