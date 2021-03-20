(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{154:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return p})),n.d(e,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(188)),o={id:"getting_started",title:"Getting Started"},c={id:"version-5.1.1/auth/getting_started",title:"Getting Started",description:"Auth-Methods",source:"@site/versioned_docs/version-5.1.1/auth/getting_started.md",permalink:"/SpotifyAPI-NET/docs/auth/getting_started",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/getting_started.md",version:"5.1.1",lastUpdatedBy:"Ibrahim Jaber",lastUpdatedAt:1616258189,sidebar:"version-5.1.1/someSidebar",previous:{title:"Utilities",permalink:"/SpotifyAPI-NET/docs/web/utilities"},next:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/auth/implicit_grant"}},p=[{value:"Auth-Methods",id:"auth-methods",children:[]}],l={rightToc:p};function b(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"auth-methods"},"Auth-Methods"),Object(i.b)("p",null,"Before you can use the Web API's full functionality, you need the user to authenticate your Application.\nIf you want to know more, you can read to the whole auth-process ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/authorization-guide/"}),"here"),"."),Object(i.b)("p",null,"Before you start, install ",Object(i.b)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," and create an application at Spotify: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/my-applications/#!/applications"}),"Your Applications")),Object(i.b)("p",null,"After you have created your Application, you will have following important values:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Client_Id")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This is your client_id, you don't have to hide it"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Client_Secret")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Never use this in one of your client-side apps! Keep it secret!"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Redirect URIs")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Some of auth flows require that you set the correct redirect URI"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,"Now you can start with the user-authentication. Spotify provides 3 ways (4 if you consider different implementations):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/auth/implicit_grant"}),"ImplicitGrantAuth"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/auth/authorization_code"}),"AutorizationCodeAuth"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/auth/client_credentials"}),"ClientCredentialsAuth"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/auth/token_swap"}),"TokenSwapAuth")))),Object(i.b)("p",null,"Overview:\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"http://i.imgur.com/uf3ahTl.png",alt:"Overview"}))))}b.isMDXComponent=!0},188:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),b=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},u=function(t){var e=b(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),u=b(n),d=r,O=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(O,c({ref:e},l,{components:n})):a.a.createElement(O,c({ref:e},l))}));function O(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);