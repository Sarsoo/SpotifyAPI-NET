"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5249],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6961:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(4996),s=["components"],p={id:"implicit_grant",title:"Implicit Grant"},l=void 0,c={unversionedId:"implicit_grant",id:"implicit_grant",title:"Implicit Grant",description:"Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in RFC-6749.",source:"@site/docs/implicit_grant.md",sourceDirName:".",slug:"/implicit_grant",permalink:"/SpotifyAPI-NET/docs/implicit_grant",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/implicit_grant.md",tags:[],version:"current",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1685219311,formattedLastUpdatedAt:"May 27, 2023",frontMatter:{id:"implicit_grant",title:"Implicit Grant"},sidebar:"docs",previous:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/client_credentials"},next:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/authorization_code"}},u={},d=[{value:"Existing Web-Server",id:"existing-web-server",level:2},{value:"Using custom Protocols",id:"using-custom-protocols",level:2}],m={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner\u2019s browser. You do not need any server-side code to use it. Rate limits for requests are improved but there is no refresh token provided. This flow is described in ",(0,o.kt)("a",{parentName:"p",href:"http://tools.ietf.org/html/rfc6749#section-4.2"},"RFC-6749"),".")),(0,o.kt)("p",null,"This flow is useful for getting a user access token for a short timespan."),(0,o.kt)("h2",{id:"existing-web-server"},"Existing Web-Server"),(0,o.kt)("p",null,"If you are already in control of a Web-Server (like ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET"),"), you can start the flow by generating a login uri:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Make sure "http://localhost:5543" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5543"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server\n')),(0,o.kt)("p",null,"When the user is redirected to the generated uri, they will have to login with their Spotify account and confirm that your application wants to access their user data. Once confirmed, they will be redirected to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5543")," and the fragment identifier (",(0,o.kt)("inlineCode",{parentName:"p"},"#")," part of URI) will contain an access token."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Note, this parameter is not sent to the server! You need JavaScript to access it.")),(0,o.kt)("h2",{id:"using-custom-protocols"},"Using custom Protocols"),(0,o.kt)("p",null,"This flow can also be used with custom protocols instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"http"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"https"),". This is especially interesting for ",(0,o.kt)("inlineCode",{parentName:"p"},"UWP")," apps, since your able to register custom protocol handlers quite easily."),(0,o.kt)("img",{alt:"protocol handlers",src:(0,a.Z)("img/auth_protocol_handlers.png")}),(0,o.kt)("p",null,"The process is very similar, you generate a uri and open it for the user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Make sure "spotifyapi.web.oauth://token" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("spotifyapi.web.oauth://token"),\n  "ClientId",\n  LoginRequest.ResponseType.Token\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n\n// This call requires Spotify.Web.Auth\nBrowserUtil.Open(uri);\n')),(0,o.kt)("p",null,"After the user has logged in and consented your app, your ",(0,o.kt)("inlineCode",{parentName:"p"},"UWP")," app will receive a callback:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"protected override void OnActivated(IActivatedEventArgs args)\n{\n  if (args.Kind == ActivationKind.Protocol)\n  {\n    ProtocolActivatedEventArgs eventArgs = args as ProtocolActivatedEventArgs;\n    var publisher = Mvx.IoCProvider.Resolve<ITokenPublisherService>();\n\n    // This Uri contains your access token in the Fragment part\n    Console.WriteLine(eventArgs.Uri);\n  }\n}\n")),(0,o.kt)("p",null,"For a real example, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.UWP"},"Example.UWP"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASP"},"Example.ASP")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASPBlazor"},"Example.ASPBlazor")),(0,o.kt)("h1",{id:"using-spotifywebauth"},"Using Spotify.Web.Auth"),(0,o.kt)("p",null,"For cross-platform CLI and desktop apps (non ",(0,o.kt)("inlineCode",{parentName:"p"},"UWP")," apps), custom protocol handlers are sometimes not an option. The fallback here is a small cross-platform embedded web server running on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5543")," serving JavaScript. The JavaScript will parse the fragment part of the URI and sends a request to the web server in the background. The web server then notifies your appliciation via an event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'private static EmbedIOAuthServer _server;\n\npublic static async Task Main()\n{\n  // Make sure "http://localhost:5543/callback" is in your spotify application as redirect uri!\n  _server = new EmbedIOAuthServer(new Uri("http://localhost:5543/callback"), 5543);\n  await _server.Start();\n\n  _server.ImplictGrantReceived += OnImplicitGrantReceived;\n  _server.ErrorReceived += OnErrorReceived;\n\n  var request = new LoginRequest(_server.BaseUri, "ClientId", LoginRequest.ResponseType.Token)\n  {\n    Scope = new List<string> { Scopes.UserReadEmail }\n  };\n  BrowserUtil.Open(request.ToUri());\n}\n\nprivate static async Task OnImplicitGrantReceived(object sender, ImplictGrantResponse response)\n{\n  await _server.Stop();\n  var spotify = new SpotifyClient(response.AccessToken);\n  // do calls with Spotify\n}\n\nprivate static async Task OnErrorReceived(object sender, string error, string state)\n{\n  Console.WriteLine($"Aborting authorization, error received: {error}");\n  await _server.Stop();\n}\n')),(0,o.kt)("p",null,"For real examples, have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.PersistentConfig"},"Example.CLI.PersistentConfig")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.CustomHTML"},"Example.CLI.CustomHTML")))}f.isMDXComponent=!0}}]);