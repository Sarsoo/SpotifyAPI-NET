"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5643],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=l,N=d["".concat(p,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(N,o(o({ref:t},m),{},{components:n})):r.createElement(N,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={id:"follow",title:"Follow",sidebar_label:"Follow"},p=void 0,s={unversionedId:"web/follow",id:"version-5.1.1/web/follow",title:"Follow",description:"Follow",source:"@site/versioned_docs/version-5.1.1/web/follow.md",sourceDirName:"web",slug:"/web/follow",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/follow",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/follow.md",tags:[],version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1668772755,formattedLastUpdatedAt:"11/18/2022",frontMatter:{id:"follow",title:"Follow",sidebar_label:"Follow"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Browse",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/browse"},next:{title:"Library",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/library"}},m={},u=[{value:"Follow",id:"follow",level:2},{value:"Unfollow",id:"unfollow",level:2},{value:"IsFollowing",id:"isfollowing",level:2},{value:"FollowPlaylist",id:"followplaylist",level:2},{value:"UnfollowPlaylist",id:"unfollowplaylist",level:2},{value:"IsFollowingPlaylist",id:"isfollowingplaylist",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"follow"},"Follow"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add the current user as a follower of one or more artists or other Spotify users.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"followType"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID type: either artist or user."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FollowType.Artist"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ids or id"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,a.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.Follow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Follow(FollowType.User, "1122095781");\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"unfollow"},"Unfollow"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remove the current user as a follower of one or more artists or other Spotify users.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"followType"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID type: either artist or user."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FollowType.Artist"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ids or id"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,a.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.Unfollow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Unfollow(FollowType.User, "1122095781");\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"isfollowing"},"IsFollowing"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Check to see if the current user is following one or more artists or other Spotify users.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"followType"),(0,a.kt)("td",{parentName:"tr",align:null},"The ID type: either artist or user."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FollowType.Artist"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ids or id"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListResponse<Boolean>")," which contains the property ",(0,a.kt)("inlineCode",{parentName:"p"},"List<Boolean> List")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'//Are you one of my Followers? :P\nListResponse<Boolean> response = _spotify.IsFollowing(FollowType.User, "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"followplaylist"},"FollowPlaylist"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add the current user as a follower of a playlist.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerId"),(0,a.kt)("td",{parentName:"tr",align:null},"The Spotify user ID of the person who owns the playlist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"maxloermans"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"playlistId"),(0,a.kt)("td",{parentName:"tr",align:null},"The Spotify ID of the playlist. Any playlist can be followed, regardless of its public/private status, as long as you know its playlist ID."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[showPublic]"),(0,a.kt)("td",{parentName:"tr",align:null},"If true the playlist will be included in user's public playlists, if false it will remain  private."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,a.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.FollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"unfollowplaylist"},"UnfollowPlaylist"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remove the current user as a follower of a playlist.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerId"),(0,a.kt)("td",{parentName:"tr",align:null},"The Spotify user ID of the person who owns the playlist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"maxloermans"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"playlistId"),(0,a.kt)("td",{parentName:"tr",align:null},"The Spotify ID of the playlist that is to be no longer followed."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))))),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,a.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.UnfollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"isfollowingplaylist"},"IsFollowingPlaylist"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Check to see if one or more Spotify users are following a specified playlist.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerId"),(0,a.kt)("td",{parentName:"tr",align:null},"The Spotify user ID of the person who owns the playlist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"maxloermans"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"playlistId"),(0,a.kt)("td",{parentName:"tr",align:null},"The Spotify ID of the playlist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ids or id"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"ListResponse<Boolean>")," which contains the property ",(0,a.kt)("inlineCode",{parentName:"p"},"List<Boolean> List")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'//Am I following the playlist?\nListResponse<Boolean> response = _spotify.IsFollowing("maxloermans", "3SIp2VAsKI03mReF0dFBmI", "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n')),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);