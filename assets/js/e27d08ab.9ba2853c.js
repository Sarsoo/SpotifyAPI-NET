"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[4393],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=m(a),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2153:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i={id:"albums",title:"Albums",sidebar_label:"Albums"},o=void 0,p={unversionedId:"web/albums",id:"version-5.1.1/web/albums",isDocsHomePage:!1,title:"Albums",description:"GetAlbumTracks",source:"@site/versioned_docs/version-5.1.1/web/albums.md",sourceDirName:"web",slug:"/web/albums",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/albums",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/albums.md",version:"5.1.1",lastUpdatedBy:"svr333",lastUpdatedAt:1652933249,formattedLastUpdatedAt:"5/19/2022",frontMatter:{id:"albums",title:"Albums",sidebar_label:"Albums"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/getting_started"},next:{title:"Artists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/artists"}},m=[{value:"GetAlbumTracks",id:"getalbumtracks",children:[]},{value:"GetAlbum",id:"getalbum",children:[]},{value:"GetSeveralAlbums",id:"getseveralalbums",children:[]}],u={toc:m};function s(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getalbumtracks"},"GetAlbumTracks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information about an album's tracks. Optional parameters can be used to limit the number of tracks returned.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The Spotify ID for the album."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"5O7V8l4SeXTymVp3IesT9C"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[limit]"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"20"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},"The index of the first track to return. Default: 0 (the first object)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#track-object-simplified"},"SimpleTrack")," wrapped inside a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#paging-object"},"Paging-object")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'Paging<SimpleTrack> tracks = _spotify.GetAlbumTracks("5O7V8l4SeXTymVp3IesT9C");\ntracks.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Track-Names (max 20)\nConsole.WriteLine(tracks.Total.ToString()) //Display total album track count\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getalbum"},"GetAlbum"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information for a single album.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The Spotify ID for the album."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5O7V8l4SeXTymVp3IesT9C"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#album-object-full"},"FullAlbum")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'FullAlbum album = _spotify.GetAlbum("5O7V8l4SeXTymVp3IesT9C");\nConsole.WriteLine(album.Name + "| Popularity: " + album.Popularity); //Display name and Popularity\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getseveralalbums"},"GetSeveralAlbums"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information for multiple albums identified by their Spotify IDs.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs for the albums. Maximum: 20 IDs."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String>() { "5O7V8l4SeXTymVp3IesT9C" }'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"SeveralAlbums"),' which Property "Albums" contains a list of ',(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#album-object-full"},"FullAlbum")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'SeveralAlbums albums = _spotify.GetSeveralAlbums(new List<String>() { "5O7V8l4SeXTymVp3IesT9C" });\nConsole.WriteLine(albums.Albums[0].Name);\n')),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);