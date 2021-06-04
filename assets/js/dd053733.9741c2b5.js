(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(124)),b={id:"browse",title:"Browse",sidebar_label:"Browse"},o={unversionedId:"web/browse",id:"version-5.1.1/web/browse",isDocsHomePage:!1,title:"Browse",description:"GetFeaturedPlaylists",source:"@site/versioned_docs/version-5.1.1/web/browse.md",slug:"/web/browse",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/browse",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/browse.md",version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1622836139,formattedLastUpdatedAt:"6/4/2021",sidebar_label:"Browse",sidebar:"version-5.1.1/someSidebar",previous:{title:"Artists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/artists"},next:{title:"Follow",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/follow"}},i=[{value:"GetFeaturedPlaylists",id:"getfeaturedplaylists",children:[]},{value:"GetNewAlbumReleases",id:"getnewalbumreleases",children:[]},{value:"GetCategories",id:"getcategories",children:[]},{value:"GetCategory",id:"getcategory",children:[]},{value:"GetCategoryPlaylists",id:"getcategoryplaylists",children:[]}],c={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"getfeaturedplaylists"},"GetFeaturedPlaylists"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get a list of Spotify featured playlists (shown, for example, on a Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[locale]"),Object(l.b)("td",{parentName:"tr",align:null},"The desired language, consisting of a lowercase ISO 639 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"de_DE" //Germany'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[country]"),Object(l.b)("td",{parentName:"tr",align:null},"A country: an ISO 3166-1 alpha-2 country code."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[timestamp]"),Object(l.b)("td",{parentName:"tr",align:null},"A timestamp in ISO 8601 format"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"DateTime.Now"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[limit]"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"20"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[offset]"),Object(l.b)("td",{parentName:"tr",align:null},"The index of the first item to return. Default: 0"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"FeaturedPlaylists")," object, which has 2 properties. ",Object(l.b)("inlineCode",{parentName:"p"},"String Message")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Paging<SimplePlaylist> Playlists")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},"FeaturedPlaylists playlists = _spotify.GetFeaturedPlaylists();\nConsole.WriteLine(playlists.Message);\nplaylists.Playlists.Items.ForEach(playlist => Console.WriteLine(playlist.Name));\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getnewalbumreleases"},"GetNewAlbumReleases"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[country]"),Object(l.b)("td",{parentName:"tr",align:null},"A country: an ISO 3166-1 alpha-2 country code."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[limit]"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"20"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[offset]"),Object(l.b)("td",{parentName:"tr",align:null},"The index of the first item to return. Default: 0"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"NewAlbumReleases")," object, which has the property ",Object(l.b)("inlineCode",{parentName:"p"},"Paging<SimpleAlbum> Albums"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},"NewAlbumReleases newAlbums = _spotify.GetNewAlbumReleases();\nnewAlbums.Albums.Items.ForEach(album => Console.WriteLine(album.Name));\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getcategories"},"GetCategories"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get a list of categories used to tag items in Spotify (on, for example, the Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[country]"),Object(l.b)("td",{parentName:"tr",align:null},"A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[locale]"),Object(l.b)("td",{parentName:"tr",align:null},"The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"de_DE"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[limit]"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum number of categories to return. Default: 20. Minimum: 1. Maximum: 50."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"20"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[offset]"),Object(l.b)("td",{parentName:"tr",align:null},"The index of the first item to return. Default: 0 (the first object)."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"CategoryList")," object, which has the property ",Object(l.b)("inlineCode",{parentName:"p"},"Paging<Category> Categories"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},"CategoryList categoryList = _spotify.GetCategories();\ncategoryList.Categories.Items.ForEach(category => Console.WriteLine(category.Name));\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getcategory"},"GetCategory"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get a single category used to tag items in Spotify (on, for example, the Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"categoryId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify category ID for the category."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"party"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[country]"),Object(l.b)("td",{parentName:"tr",align:null},"A country: an ISO 3166-1 alpha-2 country code. Provide this parameter to ensure that the category exists for a particular country."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[locale]"),Object(l.b)("td",{parentName:"tr",align:null},"The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"de_DE"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#category-object"},"Category")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'Category cat = _spotify.GetCategory("party");\nConsole.WriteLine(cat.Name);\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getcategoryplaylists"},"GetCategoryPlaylists"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get a list of Spotify playlists tagged with a particular category.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"categoryId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify category ID for the category."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"party"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[country]"),Object(l.b)("td",{parentName:"tr",align:null},"A country: an ISO 3166-1 alpha-2 country code."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[limit]"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"20"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[offset]"),Object(l.b)("td",{parentName:"tr",align:null},"The index of the first item to return. Default: 0"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"CategoryPlaylist")," object, which has the property ",Object(l.b)("inlineCode",{parentName:"p"},"Paging<SimplePlaylist> Playlists")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'CategoryPlaylist playlists = _spotify.GetCategoryPlaylists("party");\nplaylists.Playlists.Items.ForEach(playlist => Console.WriteLine(playlist.Name));\n')),Object(l.b)("hr",null))}p.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(b,".").concat(u)]||m[u]||s[u]||l;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);