"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[2405],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"example_cli_persistent_config",title:"CLI - Persistent Config"},c=void 0,p={unversionedId:"example_cli_persistent_config",id:"example_cli_persistent_config",title:"CLI - Persistent Config",description:"Description",source:"@site/docs/example_cli_persistent_config.md",sourceDirName:".",slug:"/example_cli_persistent_config",permalink:"/SpotifyAPI-NET/docs/example_cli_persistent_config",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/example_cli_persistent_config.md",tags:[],version:"current",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1668772755,formattedLastUpdatedAt:"11/18/2022",frontMatter:{id:"example_cli_persistent_config",title:"CLI - Persistent Config"},sidebar:"docs",previous:{title:"CLI - Custom HTML",permalink:"/SpotifyAPI-NET/docs/example_cli_custom_html"},next:{title:"Token Swap",permalink:"/SpotifyAPI-NET/docs/example_token_swap"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Run it",id:"run-it",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"An example to show how an obtained access and refresh token can be stored persistently and re-used across application restarts. This results in fewer requests to spotifys authentication endpoints and a faster experience for the user. The example uses ",(0,i.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/pkce"},"PKCE")," in combination with the ",(0,i.kt)("inlineCode",{parentName:"p"},"PKCEAuthenticator"),", which automatically refreshes expired tokens."),(0,i.kt)("p",null,"The access and refresh token is saved in a ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials.json")," file of the current working directory."),(0,i.kt)("h2",{id:"run-it"},"Run it"),(0,i.kt)("p",null,"Before running it, make sure you created an app in your ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard/"},"spotify dashboard")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:5000")," is a redirect uri of it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Assumes linux and current working directory is the cloned repository\ncd SpotifyAPI.Web.Examples/Example.CLI.PersistentConfig\ndotnet restore\n\nSPOTIFY_CLIENT_ID=YourClientId dotnet run\n# A browser window should appear\n# Restarting the process should NOT open a new authentication window\n# Instead, the local `crendentials.json` file is used\nSPOTIFY_CLIENT_ID=YourClientId dotnet run\n")))}f.isMDXComponent=!0}}]);