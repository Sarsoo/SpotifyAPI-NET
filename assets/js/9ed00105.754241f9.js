"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[9004],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},970:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a={id:"configuration",title:"Configuration"},c=void 0,l={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"To configure the Spotify client functionality, the SpotifyClientConfig class exists.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/SpotifyAPI-NET/docs/configuration",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/configuration.md",version:"current",lastUpdatedBy:"svr333",lastUpdatedAt:1652933249,formattedLastUpdatedAt:"5/19/2022",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Error Handling",permalink:"/SpotifyAPI-NET/docs/error_handling"},next:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/logging"}},p=[{value:"HTTPClient Notes",id:"httpclient-notes",children:[]}],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To configure the Spotify client functionality, the ",(0,i.kt)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," class exists."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var config = SpotifyClientConfig.CreateDefault("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\n// is the same as\n\nvar spotify = new SpotifyClient("YourAccessToken");\n')),(0,i.kt)("p",null,"We won't cover every possible configuration in this part, head over to the specific guides for that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"httpclient-notes"},"HTTPClient Notes"),(0,i.kt)("p",null,"One important part of the configuration is the used HTTPClient. By default, every time a ",(0,i.kt)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," is instantiated, a new ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPClient")," is created in the background. For Web Applications that require a lot of different configs due to user based access tokens, it is ",(0,i.kt)("strong",{parentName:"p"},"not")," advised to create a new config from scratch with every HTTP call. Instead, a default (static) config should be used to create a new config with a new access token."),(0,i.kt)("p",null,"Consider the following HTTP Endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public HttpResult Get()\n{\n  var config = SpotifyClientConfig.CreateDefault("YourAccessToken")\n  var spotify = new SpotifyClient(config);\n}\n')),(0,i.kt)("p",null,"This creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPClient")," every time a request is made, which can be quite bad for the performance. Instead, we should use a base config and use ",(0,i.kt)("inlineCode",{parentName:"p"},"WithToken"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// somewhere global/static\npublic static SpotifyClientConfig DefaultConfig = SpotifyClientConfig.CreateDefault();\n\npublic HttpResult Get()\n{\n  var config = DefaultConfig.WithToken("YourAccessToken");\n  var spotify = new SpotifyClient(config);\n}\n')),(0,i.kt)("p",null,"This way, a single ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPClient")," will be used. For a real example, checkout the ",(0,i.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/example_asp"},"ASP.NET Example"),"."))}f.isMDXComponent=!0}}]);