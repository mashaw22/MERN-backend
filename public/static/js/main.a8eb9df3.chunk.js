(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),l=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},,,,function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(37);t.a=function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}},function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(4),r=n.n(c);n(35);t.a=function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,,,,function(e,t,n){e.exports=n(38)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(4),r=n.n(c),u=(n(26),n(1)),o=n(5),i=n(8);n(27);function m(e){return l.a.createElement("header",{className:"main-header"},e.children)}var s=n(9);n(28);function E(e){var t=Object(a.useContext)(s.a);return l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(o.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(o.c,{to:"/".concat(t.userId,"/places")},"MY PLACES")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(o.c,{to:"/places/new"},"NEW PLACE")),!t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(o.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&l.a.createElement("li",null,l.a.createElement("button",{onClick:t.logout},"LOGOUT")))}var d,f=n(40),g=(n(34),function(e){var t=l.a.createElement(f.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return r.a.createPortal(t,document.getElementById("drawer-hook"))}),b=n(14),v=(n(36),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],u=function(){r(!1)};return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(b.a,{onClick:u}),l.a.createElement(g,{show:c,onClick:u},l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(E,null))),l.a.createElement(m,null,l.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",{className:"main-navigation__title"},l.a.createElement(o.b,{to:"/"},"YourPlaces")),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(E,null))))}),p=n(13),h=l.a.lazy((function(){return n.e(7).then(n.bind(null,69))})),k=l.a.lazy((function(){return n.e(4).then(n.bind(null,66))})),I=l.a.lazy((function(){return n.e(6).then(n.bind(null,70))})),O=l.a.lazy((function(){return n.e(5).then(n.bind(null,67))})),N=l.a.lazy((function(){return n.e(3).then(n.bind(null,68))})),w=function(){var e,t=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(),r=Object(i.a)(c,2),u=r[0],o=r[1],m=Object(a.useState)(!1),s=Object(i.a)(m,2),E=s[0],f=s[1],g=Object(a.useCallback)((function(e,t,n){l(t),f(e);var a=n||new Date((new Date).getTime()+36e5);o(a),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:a.toISOString()}))}),[]),b=Object(a.useCallback)((function(){l(null),o(null),f(null),localStorage.removeItem("userData")}),[]);return Object(a.useEffect)((function(){if(n&&u){var e=u.getTime()-(new Date).getTime();d=setTimeout(b,e)}else clearTimeout(d)}),[n,b,u]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&g(e.userId,e.token,new Date(e.expiration))}),[g]),{token:n,login:g,logout:b,userId:E}}(),n=t.token,c=t.login,r=t.logout,m=t.userId;return e=n?l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/"},l.a.createElement(h,null)),l.a.createElement(u.b,{exact:!0,path:"/:userId/places"},l.a.createElement(I,null)),l.a.createElement(u.b,{exact:!0,path:"/places/new"},l.a.createElement(k,null)),l.a.createElement(u.b,{exact:!0,path:"/places/:placeId"},l.a.createElement(O,null)),l.a.createElement(u.a,{to:"/"})):l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/"},l.a.createElement(h,null)),l.a.createElement(u.b,{exact:!0,path:"/:userId/places"},l.a.createElement(I,null)),l.a.createElement(u.b,{exact:!0,path:"/auth"},l.a.createElement(N,null)),l.a.createElement(u.a,{to:"/auth"})),l.a.createElement(s.a.Provider,{value:{isLoggedIn:!!n,token:n,userId:m,login:c,logout:r}},l.a.createElement(o.a,null,l.a.createElement(v,null),l.a.createElement("main",null,l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",{className:"center"},l.a.createElement(p.a,null))},e))))};r.a.render(l.a.createElement(w,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a8eb9df3.chunk.js.map