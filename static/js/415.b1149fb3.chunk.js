"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{7154:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7689),a=t(1087),c=t(7391),i=t(184),o=function(e){var n=e.movie,t=(0,r.TH)(),o=c;return n.poster_path&&(o="https://image.tmdb.org/t/p/w500".concat(n.poster_path)),(0,i.jsxs)("li",{children:[(0,i.jsx)(a.Link,{to:"/movies/".concat(n.id),state:{from:t},children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("img",{src:o,width:"50px",height:"50px",alt:"preview"})})}),n.title&&(0,i.jsx)(a.NavLink,{to:"/movies/".concat(n.id),state:{from:t},children:(0,i.jsx)("span",{children:n.title})}),n.name&&(0,i.jsx)(a.NavLink,{to:"/movies/".concat(n.id),state:{from:t},children:(0,i.jsx)("span",{children:n.name})})]})},u=function(e){var n=e.movies;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:n.map((function(e){return(0,i.jsx)(o,{movie:e},e.id)}))})})}},5373:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.text;return(0,r.jsx)("p",{children:n})}},5415:function(e,n,t){t.r(n);var r=t(9439),a=t(7154),c=t(5373),i=t(2791),o=t(9086),u=t(184);n.default=function(){var e=(0,i.useState)(null),n=(0,r.Z)(e,2),t=n[0],s=n[1],A=(0,i.useState)(null),f=(0,r.Z)(A,2),v=f[0],p=f[1];return(0,i.useEffect)((function(){(0,o.Df)().then((function(e){s(e.results)})).catch((function(e){return p(e)}))}),[]),(0,u.jsx)("main",{children:(0,u.jsxs)("section",{children:[v&&(0,u.jsx)("p",{children:v}),(0,u.jsx)(c.Z,{text:"Trending Movies"}),t&&(0,u.jsx)(a.Z,{movies:t})]})})}},9086:function(e,n,t){t.d(n,{Df:function(){return u},Pg:function(){return s},d_:function(){return f},gH:function(){return A},kX:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),i="f8717161caaf1418c951ed37d4ef3a4b",o="https://api.themoviedb.org/",u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"3/movie/popular?api_key=").concat(i,"&page=1"),e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"3/movie/").concat(n,"?api_key=").concat(i,"&page=1"),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),A=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o,"3/search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=").concat(t,"&api_key=").concat(i),e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"3/movie/").concat(n,"/credits?language=en-US&api_key=").concat(i),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"3/movie/").concat(n,"/reviews?language=en-US&api_key=").concat(i,"&page=1"),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},7391:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=415.b1149fb3.chunk.js.map