(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebbb1b7e"],{"25f0":function(t,n,e){"use strict";var r=e("6eeb"),a=e("825a"),i=e("d039"),o=e("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(l||d)&&r(RegExp.prototype,c,(function(){var t=a(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in s)?o.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},2909:function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("25f0"),e("3ca3"),e("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return r(t)||a(t)||i()}e.d(n,"a",(function(){return o}))},"3ca3":function(t,n,e){"use strict";var r=e("6547").charAt,a=e("69f3"),i=e("7dd0"),o="String Iterator",c=a.set,s=a.getterFor(o);i(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,n=s(this),e=n.string,a=n.index;return a>=e.length?{value:void 0,done:!0}:(t=r(e,a),n.index+=t.length,{value:t,done:!1})}))},4344:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{on:{swipeleft:t.onSwipeLeft}},[e("div",{staticClass:"header"},[e("swiper",{key:t.datalist.length,attrs:{obj:{loop:!0}}},t._l(t.datalist,(function(t){return e("div",{key:t.bannerId,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.imgUrl,alt:""}})])})),0)],1),e("tapbar"),e("router-view")],1)},a=[],i=(e("99af"),e("2909")),o=e("5530"),c=e("2b0e"),s=e("ca95"),u=e.n(s),l=e("8419"),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"tabs-bar"},[e("ul",{staticClass:"tabs-nav"},[t._l(t.datalist,(function(n){return e("router-link",{key:n.url,attrs:{to:n.url,tag:"li",activeClass:"active"}},[e("span",{on:{click:function(e){return t.handleClick(e,n.name)}}},[t._v(t._s(n.name))])])})),t._m(0)],2)])])},f=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"line"},[e("span")])}],v={data:function(){return{datalist:[{url:"/films/nowplaying",name:"正在热映"},{url:"/films/comingsoon",name:"即将上映"}]}},methods:{handleClick:function(t,n){var e=document.querySelector(".line");e.style.width="正在热映"===n?"50%":"150%"}}},p=v,b=(e("8e40"),e("2877")),g=Object(b["a"])(p,d,f,!1,null,"3d27c444",null),h=g.exports,m=e("751a"),y=e("2f62");c["a"].use(u.a,{name:"v-touch"});var w={components:{tapbar:h,swiper:l["a"]},data:function(){return{datalist:[]}},computed:Object(o["a"])({},Object(y["d"])("cityN",["cityId"])),mounted:function(){var t=this;m["a"].request({url:"/gateway?type=2&cityId=".concat(this.cityId,"&k=5499032"),headers:{"X-Host":" mall.cfg.common-banner"}}).then((function(n){if(n.data.data){var e={imgUrl:"https://pic.maizuo.com/usr/movie/f046c5d6b2c397a8194ab14dc439d7dd.jpg?x-oss-process=image/quality,Q_70",bannerId:"qwemnn"};t.datalist=[].concat(Object(i["a"])(n.data.data),[e])}}))},methods:{onSwipeLeft:function(){this.$router.push("/cinemas")}}},S=w,A=(e("7d85"),Object(b["a"])(S,r,a,!1,null,"9660fa00",null));n["default"]=A.exports},"4df4":function(t,n,e){"use strict";var r=e("0366"),a=e("7b0b"),i=e("9bdd"),o=e("e95a"),c=e("50c4"),s=e("8418"),u=e("35a1");t.exports=function(t){var n,e,l,d,f,v,p=a(t),b="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,m=void 0!==h,y=u(p),w=0;if(m&&(h=r(h,g>2?arguments[2]:void 0,2)),void 0==y||b==Array&&o(y))for(n=c(p.length),e=new b(n);n>w;w++)v=m?h(p[w],w):p[w],s(e,w,v);else for(d=y.call(p),f=d.next,e=new b;!(l=f.call(d)).done;w++)v=m?i(d,h,[l.value,w],!0):l.value,s(e,w,v);return e.length=w,e}},6547:function(t,n,e){var r=e("a691"),a=e("1d80"),i=function(t){return function(n,e){var i,o,c=String(a(n)),s=r(e),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):i:t?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"7d85":function(t,n,e){"use strict";var r=e("bd4e"),a=e.n(r);a.a},"8e40":function(t,n,e){"use strict";var r=e("e583"),a=e.n(r);a.a},"99af":function(t,n,e){"use strict";var r=e("23e7"),a=e("d039"),i=e("e8b5"),o=e("861d"),c=e("7b0b"),s=e("50c4"),u=e("8418"),l=e("65f0"),d=e("1dde"),f=e("b622"),v=e("2d00"),p=f("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",h=v>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=d("concat"),y=function(t){if(!o(t))return!1;var n=t[p];return void 0!==n?!!n:i(t)},w=!h||!m;r({target:"Array",proto:!0,forced:w},{concat:function(t){var n,e,r,a,i,o=c(this),d=l(o,0),f=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?o:arguments[n],y(i)){if(a=s(i.length),f+a>b)throw TypeError(g);for(e=0;e<a;e++,f++)e in i&&u(d,f,i[e])}else{if(f>=b)throw TypeError(g);u(d,f++,i)}return d.length=f,d}})},a630:function(t,n,e){var r=e("23e7"),a=e("4df4"),i=e("1c7e"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},bd4e:function(t,n,e){},d28b:function(t,n,e){var r=e("746f");r("iterator")},ddb0:function(t,n,e){var r=e("da84"),a=e("fdbc"),i=e("e260"),o=e("9112"),c=e("b622"),s=c("iterator"),u=c("toStringTag"),l=i.values;for(var d in a){var f=r[d],v=f&&f.prototype;if(v){if(v[s]!==l)try{o(v,s,l)}catch(b){v[s]=l}if(v[u]||o(v,u,d),a[d])for(var p in i)if(v[p]!==i[p])try{o(v,p,i[p])}catch(b){v[p]=i[p]}}}},e01a:function(t,n,e){"use strict";var r=e("23e7"),a=e("83ab"),i=e("da84"),o=e("5135"),c=e("861d"),s=e("9bf2").f,u=e("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[n]=!0),n};u(f,l);var v=f.prototype=l.prototype;v.constructor=f;var p=v.toString,b="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=p.call(t);if(o(d,t))return"";var e=b?n.slice(7,-1):n.replace(g,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:f})}},e583:function(t,n,e){}}]);
//# sourceMappingURL=chunk-ebbb1b7e.68c006f6.js.map