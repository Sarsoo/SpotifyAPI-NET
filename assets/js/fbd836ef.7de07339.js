"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[9098],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(n),d=a,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"iplayableitem",title:"IPlayableItem"},s=void 0,p={unversionedId:"iplayableitem",id:"iplayableitem",title:"IPlayableItem",description:"When working with playlists or the current playing context, you will encounter the IPlayableItem type, which only contains a Type property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types: tracks and episodes. To reflect this in our models, we introduced IPlayableItem.",source:"@site/docs/iplayableitem.md",sourceDirName:".",slug:"/iplayableitem",permalink:"/SpotifyAPI-NET/docs/iplayableitem",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/iplayableitem.md",tags:[],version:"current",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1668772755,formattedLastUpdatedAt:"11/18/2022",frontMatter:{id:"iplayableitem",title:"IPlayableItem"},sidebar:"docs",previous:{title:"Retry Handling",permalink:"/SpotifyAPI-NET/docs/retry_handling"},next:{title:"Unit Testing",permalink:"/SpotifyAPI-NET/docs/unit_testing"}},c={},u=[{value:"Fields",id:"fields",level:2}],y={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When working with playlists or the current playing context, you will encounter the ",(0,i.kt)("inlineCode",{parentName:"p"},"IPlayableItem")," type, which only contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types: tracks and episodes. To reflect this in our models, we introduced ",(0,i.kt)("inlineCode",{parentName:"p"},"IPlayableItem"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var spotify = new SpotifyClient("YourAccessToken");\n\nvar playlist = await spotify.Playlists.Get("37i9dQZEVXbMDoHDwVN2tF");\nforeach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  // When was it added\n  Console.WriteLine(item.AddedAt);\n  // The only propety on item is item.Type, it\'s a IPlayableItem\n  Console.WriteLine(item.Track.Type);\n}\n')),(0,i.kt)("p",null,"Now, this type per se is probably useless to you. You're interested in the name, uri or artist of the episode/track. To get that info, you have to type cast the ",(0,i.kt)("inlineCode",{parentName:"p"},"IPlayableItem")," to the respective type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"foreach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  if (item.Track is FullTrack track)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(track.Name);\n  }\n  if (item.Track is FullEpisode episode)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(episode.Name);\n  }\n}\n")),(0,i.kt)("p",null,"To this day, ",(0,i.kt)("inlineCode",{parentName:"p"},"IPlayableItem")," can only be ",(0,i.kt)("inlineCode",{parentName:"p"},"FullTrack")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"FullEpisode"),"."),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("p",null,"When requesting just a subset of fields using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," query parameter, the call might fail with an exception similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Received unknown playlist element type"),". For example, the following call fails:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var playlistGetItemsRequest = new PlaylistGetItemsRequest();\nplaylistGetItemsRequest.Fields.Add("items(track(name))");\nvar playlistItems = await spotify.Playlists.GetItems("YourPlaylistId", playlistGetItemsRequest);\n')),(0,i.kt)("p",null,"By requesting just the track name from the items, we don't have any kind of type information of the item itself. Thus, we're unable to cast it to the correct model. To fix this, include the type in the fields as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'playlistGetItemsRequest.Fields.Add("items(track(name,type))");\n')))}d.isMDXComponent=!0}}]);