/**
 * almond 0.1.2 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

(function(){var e,t,n;(function(r){function c(e,t){var n=t&&t.split("/"),r=o.map,i=r&&r["*"]||{},s,u,a,f,l,c,h,p,d,v;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(p=0;v=e[p];p++)if(v===".")e.splice(p,1),p-=1;else if(v===".."){if(p===1&&(e[2]===".."||e[0]===".."))return!0;p>0&&(e.splice(p-1,2),p-=2)}e=e.join("/")}if((n||i)&&r){s=e.split("/");for(p=s.length;p>0;p-=1){u=s.slice(0,p).join("/");if(n)for(d=n.length;d>0;d-=1){a=r[n.slice(0,d).join("/")];if(a){a=a[u];if(a){f=a,l=p;break}}}if(f)break;!c&&i&&i[u]&&(c=i[u],h=p)}!f&&c&&(f=c,l=h),f&&(s.splice(0,l,f),e=s.join("/"))}return e}function h(e,t){return function(){return l.apply(r,a.call(arguments,0).concat([e,t]))}}function p(e){return function(t){return c(t,e)}}function d(e){return function(t){i[e]=t}}function v(e){if(s.hasOwnProperty(e)){var t=s[e];delete s[e],u[e]=!0,f.apply(r,t)}if(!i.hasOwnProperty(e))throw new Error("No "+e);return i[e]}function m(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=c(e.slice(0,i),t),e=e.slice(i+1),r=v(n),r&&r.normalize?e=r.normalize(e,p(t)):e=c(e,t)):e=c(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function g(e){return function(){return o&&o.config&&o.config[e]||{}}}var i={},s={},o={},u={},a=[].slice,f,l;f=function(e,t,n,o){var a=[],f,l,c,p,y,b;o=o||e;if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(b=0;b<t.length;b++){y=m(t[b],o),c=y.f;if(c==="require")a[b]=h(e);else if(c==="exports")a[b]=i[e]={},f=!0;else if(c==="module")l=a[b]={id:e,uri:"",exports:i[e],config:g(e)};else if(i.hasOwnProperty(c)||s.hasOwnProperty(c))a[b]=v(c);else if(y.p)y.p.load(y.n,h(o,!0),d(c),{}),a[b]=i[c];else if(!u[c])throw new Error(e+" missing "+c)}p=n.apply(i[e],a);if(e)if(l&&l.exports!==r&&l.exports!==i[e])i[e]=l.exports;else if(p!==r||!f)i[e]=p}else e&&(i[e]=n)},e=t=l=function(e,t,n,i){return typeof e=="string"?v(m(e,t).f):(e.splice||(o=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},i?f(r,e,t,n):setTimeout(function(){f(r,e,t,n)},15),l)},l.config=function(e){return o=e,l},n=function(e,t,n){t.splice||(n=t,t=[]),s[e]=[e,t,n]},n.amd={jQuery:!0}})(),n("../vendor/almond/almond.js",function(){}),n("amd-utils/lang/kindOf",[],function(){function r(r){return r===null?"Null":r===n?"Undefined":e.exec(t.call(r))[1]}var e=/^\[object (.*)\]$/,t=Object.prototype.toString,n;return r}),n("amd-utils/lang/isKind",["./kindOf"],function(e){function t(t,n){return e(t)===n}return t}),n("amd-utils/lang/isFunction",["./isKind"],function(e){function t(t){return e(t,"Function")}return t}),n("common/printWarning",["amd-utils/lang/isFunction"],function(e){function t(t){typeof console!="undefined"&&e(console.warn)&&console.warn(t)}return t}),n("common/hasDefineProperty",["amd-utils/lang/isFunction"],function(e){function t(){if(!e(Object.defineProperty))return!1;try{Object.defineProperty({},"x",{})}catch(t){return!1}return!0}return t()}),n("common/obfuscateProperty",["./hasDefineProperty"],function(e){function t(t,n,r,i,s){e?Object.defineProperty(t,n,{value:r,configurable:s||!1,writable:i||!1,enumerable:!1}):t[n]=r}return t}),n("amd-utils/lang/isNumber",["./isKind"],function(e){function t(t){return e(t,"Number")}return t}),n("amd-utils/lang/isString",["./isKind"],function(e){function t(t){return e(t,"String")}return t}),n("amd-utils/lang/isBoolean",["./isKind"],function(e){function t(t){return e(t,"Boolean")}return t}),n("common/isImmutable",["amd-utils/lang/isNumber","amd-utils/lang/isString","amd-utils/lang/isBoolean"],function(e,t,n){function r(r){return r==null||n(r)||e(r)||t(r)}return r}),n("amd-utils/object/hasOwn",[],function(){function e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}return e}),n("common/isPlainObject",["amd-utils/lang/isFunction","amd-utils/object/hasOwn"],function(e,t){function r(e){var r="__proto__",i;if(e.nodeType||e===e.window)return!1;try{r=n?Object.getPrototypeOf(e):e[r];if(r&&r!==Object.prototype)return!1;if(e.constructor&&!t(e,"constructor")&&!t(e.constructor.prototype,"isPrototypeOf"))return!1}catch(s){return!1}for(i in e);return i===undefined||t(e,i)}var n=e(Object.getPrototypeOf);return r}),n("amd-utils/lang/isObject",["./isKind"],function(e){function t(t){return e(t,"Object")}return t}),n("amd-utils/lang/isArray",["./isKind"],function(e){var t=Array.isArray||function(t){return e(t,"Array")};return t}),n("amd-utils/lang/isDate",["./isKind"],function(e){function t(t){return e(t,"Date")}return t}),n("amd-utils/lang/isRegExp",["./isKind"],function(e){function t(t){return e(t,"RegExp")}return t}),n("amd-utils/object/forOwn",["./hasOwn"],function(e){function r(){n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],t=!0;for(var e in{toString:null})t=!1}function i(e,i,o){var u,a=0;if(typeof e!="object")throw new TypeError("forOwn called on a non-object");t==null&&r();for(u in e)s(i,e,u,o);if(t)while(u=n[a++])s(i,e,u,o)}function s(t,n,r,i){e(n,r)&&t.call(i,n[r],r,n)}var t,n;return i}),n("amd-utils/object/mixIn",["./forOwn"],function(e){function t(t,r){var i=1,s;while(s=arguments[i++])e(s,n,t);return t}function n(e,t){this[t]=e}return t}),n("amd-utils/lang/createObject",["../object/mixIn"],function(e){function t(t,n){function r(){}return r.prototype=t,e(new r,n)}return t}),n("amd-utils/array/indexOf",[],function(){function e(e,t,n){n=n||0;var r=e.length>>>0,i=n<0?r+n:n;while(i<r){if(i in e&&e[i]===t)return i;i+=1}return-1}return e}),n("amd-utils/array/combine",["./indexOf"],function(e){function t(t,n){var r,i=n.length;for(r=0;r<i;r++)e(t,n[r])===-1&&t.push(n[r]);return t}return t}),n("amd-utils/array/contains",["./indexOf"],function(e){function t(t,n){return e(t,n)!==-1}return t}),n("common/mixIn",[],function(){function e(e,t){var n,r=arguments.length,i,s;for(n=1;n<r;n+=1){s=arguments[n];for(i in arguments[n])e[i]=s[i]}return e}return e}),n("amd-utils/array/append",[],function(){function e(e,t){var n=e.length,r=-1,i=t.length;while(++r<i)e[n+r]=t[r];return e}return e}),n("amd-utils/lang/bind",[],function(){function e(e,t){return Array.prototype.slice.call(e,t||0)}function t(t,n,r){var i=e(arguments,2);return function(){return t.apply(n,i.concat(e(arguments)))}}return t}),n("amd-utils/lang/toArray",[],function(){function t(t){var n,r;if(t==null)n=[];else if(typeof t=="object"&&t!==e&&"length"in t){n=[],r=t.length;while(r--)n[r]=t[r]}else n=[t];return n}var e=this;return t}),n("amd-utils/lang/clone",["../object/forOwn","./kindOf"],function(e,t){function n(e){var n;switch(t(e)){case"Object":n=r(e);break;case"Array":n=u(e);break;case"RegExp":n=s(e);break;case"Date":n=o(e);break;default:n=e}return n}function r(t){var n={};return e(t,i,n),n}function i(e,t){this[t]=n(e)}function s(e){var t="";return t+=e.multiline?"m":"",t+=e.global?"g":"",t+=e.ignoreCase?"i":"",new RegExp(e.source,t)}function o(e){return new Date(e.getTime())}function u(e){var t=[],r=-1,i=e.length,s;while(++r<i)t[r]=n(e[r]);return t}return n}),n("amd-utils/array/forEach",[],function(){function e(e,t,n){var r=-1,i=e.length>>>0;while(++r<i)r in e&&t.call(n,e[r],r,e)}return e}),n("amd-utils/array/filter",["./forEach"],function(e){function t(t,n,r){var i=[];return e(t,function(e,t,s){n.call(r,e,t,s)&&i.push(e)}),i}return t}),n("amd-utils/array/unique",["./indexOf","./filter"],function(e,t){function n(e){return t(e,r)}function r(t,n,r){return e(r,t,n+1)===-1}return n}),n("amd-utils/array/some",["require"],function(e){function t(e,t,n){var r=!1,i=-1,s=e.length>>>0;while(++i<s)if(i in e&&t.call(n,e[i],i,e)){r=!0;break}return r}return t}),n("amd-utils/array/difference",["./unique","./filter","./some","./contains"],function(e,t,n,r){function i(i){var s=Array.prototype.slice.call(arguments,1),o=t(e(i),function(e){return!n(s,function(t){return r(t,e)})});return o}return i}),n("amd-utils/array/insert",["./difference","../lang/toArray"],function(e,t){function n(n,r){var i=e(t(arguments).slice(1),n);return i.length&&Array.prototype.push.apply(n,i),n.length}return n}),n("Class",["./common/printWarning","./common/obfuscateProperty","./common/isImmutable","./common/isPlainObject","amd-utils/lang/isFunction","amd-utils/lang/isObject","amd-utils/lang/isArray","amd-utils/lang/isDate","amd-utils/lang/isRegExp","amd-utils/lang/createObject","amd-utils/object/hasOwn","amd-utils/array/combine","amd-utils/array/contains","./common/mixIn","amd-utils/array/append","amd-utils/lang/bind","amd-utils/lang/toArray","amd-utils/lang/clone","amd-utils/array/insert"],function(t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b){function C(e){return o(e)?i(e)?d({},e):l(e):y(e)}function k(e,t,r){if(t[E].efficient)return e;var i,s=!!e[T];s&&(e=e[T]);if(!r){if(!s&&e.toString().indexOf("$self")===-1)return e;i=function(){var n=this.$self,r;return this.$self=t,r=e.apply(this,arguments),this.$self=n,r}}else i=function(){var n=this.$super,i=this.$self,s;return this.$super=r,this.$self=t,s=e.apply(this,arguments),this.$super=n,this.$self=i,s};return n(i,T,e),i}function L(e){if(c(e.prototype,"$borrows")){var t,n,i,u,a=g(e.prototype.$borrows),f=a.length;for(f-=1;f>=0;f-=1){t=o(a[f])?w(d({},a[f])).prototype:a[f].prototype;for(i in t)u=t[i],e.prototype[i]===undefined&&(s(u)&&!u[E]&&!u[S]?(e.prototype[i]=k(u,e,e.$parent?e.$parent.prototype[i]:null),u[x]&&b(e[E].binds,i)):(e.prototype[i]=u,r(u)||b(e[E].properties,i)));for(n=t.$static[E].staticMethods.length-1;n>=0;n-=1)i=t.$static[E].staticMethods[n],e[i]===undefined&&(b(e[E].staticMethods,i),e[i]=t.$static[i]);for(i in t.$static[E].staticProperties)u=t.$static[E].staticProperties[i],e[i]===undefined&&(e[E].staticProperties[i]=u,e[i]=C(u));h(e[E].binds,t.$static[E].binds)}delete e.prototype.$borrows}}function A(e,t){e=g(e);var n,r=e.length,i;for(r-=1;r>=0;r-=1){n=e[r];if(!p(t[E].interfaces,n)){for(i=n[S].constants.length-1;i>=0;i-=1)t[n[S].constants[i]]=n[n[S].constants[i]],t[E].staticProperties[n[S].constants[i]]=n[n[S].constants[i]];t[E].interfaces.push(n)}}}function O(e,t,n){var i,o,u={};if(c(e,"$statics")){for(i in e.$statics)o=e.$statics[i],s(o)&&!o[E]&&!o[S]?(b(t[E].staticMethods,i),t[i]=k(o,t,t.$parent?t.$parent[i]:null)):(t[E].staticProperties[i]=o,t[i]=o);delete e.$statics}c(e,"$borrows")&&(u.$borrows=e.$borrows,delete e.$borrows),c(e,"$implements")&&(u.$implements=e.$implements,delete e.$implements),c(e,"$abstracts")&&(u.$abstracts=e.$abstracts,delete e.$abstracts);for(i in e)o=e[i],s(o)&&!o[E]&&!o[S]?(t.prototype[i]=o.$inherited?o:k(o,t,t.$parent?t.$parent.prototype[i]:null),o[x]&&(b(t[E].binds,i),delete o[x])):(t.prototype[i]=o,r(o)||b(t[E].properties,i));d(e,u)}function M(e,t){var n,r,i={},s={};c(e,"$constants")&&(i.$constants=e.$constants,s.$constants=!0,delete e.$constants),c(e,"$finals")&&(i.$finals=e.$finals,s.$finals=!0,delete e.$finals),O(e,t);if(s.$constants)for(n in i.$constants)r=i.$constants[n],t[E].staticProperties[n]=r,t[n]=r;s.$finals&&O(i.$finals,t,!0)}function _(e,t){var n,r;for(n=e.length-1;n>=0;n-=1)r=t[e[n]],t[e[n]]=m(r,t)}function D(e){var t=function(){var t,r;r=this.$static[E];for(t=r.properties.length-1;t>=0;t-=1)this[r.properties[t]]=C(this[r.properties[t]]);r.efficient||(n(this,"$super",null,!0),n(this,"$self",null,!0)),r.binds.length&&_(r.binds,this,this),this.initialize.apply(this,arguments)};return t[E]={staticMethods:[],staticProperties:{},properties:[],interfaces:[],binds:[]},t}function P(e){var t=g(arguments),n;return t.splice(1,0,this),n=m.apply(e,t),n=k(n,this.$self||this.$static),n}function H(e,t){var n,r=t[E].binds,i,s;for(n=r.length-1;n>=0;n-=1)r[n].substr(0,2)!=="__"&&e[E].binds.push(r[n]);v(e[E].properties,t[E].properties),v(e[E].staticMethods,t[E].staticMethods);for(n=t[E].staticMethods.length-1;n>=0;n-=1)t[E].staticMethods[n].substr(0,2)!=="__"&&(e[t[E].staticMethods[n]]=t[t[E].staticMethods[n]]);for(i in t[E].staticProperties)s=t[E].staticProperties[i],i.substr(0,2)!=="__"&&(e[E].staticProperties[i]=s,e[i]=C(s));e[E].interfaces=[].concat(t[E].interfaces)}function B(e){return w.create(this,e)}var w,E="$class",S="$interface",x="$bound_dejavu",T="$wrapped_dejavu",N;return w=function(t,r,i){var s,o;return c(t,"$extends")?(o=t.$extends,delete t.$extends,t.initialize=t.initialize||t._initialize||t.__initialize,t.initialize||delete t.initialize,s=r||D(),s.$parent=o,s[E].id=o[E].id,s.prototype=l(o.prototype),H(s,o)):(t.initialize=t.initialize||t._initialize||t.__initialize||function(){},s=r||D(),s.prototype=t),s[E].efficient=!!r,delete t._initialize,delete t.__initialize,M(t,s),n(s.prototype,"$static",s),n(s,"$static",s),n(s,"$self",s,!0),n(s,"$bind",P),n(s,"$super",null,!0),s.$parent||n(s.prototype,"$bind",P),L(s),c(t,"$implements")&&(A(t.$implements,s),delete s.prototype.$implements),c(t,"$abstracts")&&delete t.$abstracts,s.extend=B,s},w.create=function(e,t){var n,r,i=s(this)?this:w,o;if(e&&t){if(!s(e)||!e[E])throw new Error("Expected first argument to be a class.");s(t)?(o=D(),r=t(e.prototype,o,e)):r=t;if(r.$extends)throw new Error("Object cannot contain an $extends property.");r.$extends=e,n=i(r,o)}else s(e)?(o=D(),r=t(e.prototype,n),n=i(r,o)):n=i(e);return n},Function.prototype.$bound&&(t("Function.prototype.$bound is already defined and will be overwritten."),Object.getOwnPropertyDescriptor&&(N=Object.getOwnPropertyDescriptor(Function.prototype,"$bound"),(!N.writable||!N.configurable)&&t("Could not overwrite Function.prototype.$bound."))),n(Function.prototype,"$bound",function(e){return this[x]=!0,this}),Function.prototype.$bind&&(t("Function.prototype.$bind is already defined and will be overwritten."),Object.getOwnPropertyDescriptor&&(N=Object.getOwnPropertyDescriptor(Function.prototype,"$bind"),(!N.writable||!N.configurable)&&t("Could not overwrite Function.prototype.$bind."))),n(Function.prototype,"$bind",function(e){if(!arguments.length)return this[x]=!0,this;var t=g(arguments);return t.splice(0,1,this),P.apply(e,t)}),w}),n("AbstractClass",["amd-utils/object/hasOwn","amd-utils/array/insert","./Class"],function(t,n,r){function u(e,u){var a,f,l,c;t(e,"$abstracts")&&(f=e.$abstracts,delete e.$abstracts),a=r(e,u),a[i]=!0;if(f)for(l in f)c=f[l],c[o]&&n(a[s].binds,l);return a}var i="$abstract",s="$class",o="$bound_dejavu";return u.create=function(e,t){return r.create.call(u,e,t)},u}),n("Interface",["amd-utils/lang/isFunction","amd-utils/object/hasOwn","amd-utils/lang/toArray"],function(t,n,r){function s(e){return e.$extends=this,o(e)}function o(e){delete e.$name;var t,o,u,a,f=function(){};f[i]={parents:[],constants:[]};if(n(e,"$extends")){t=r(e.$extends),o=t.length;for(o-=1;o>=0;o-=1){a=t[o];for(u=a[i].constants.length-1;u>=0;u-=1)f[a[i].constants[u]]=a[a[i].constants[u]];f[i].parents.push(a)}delete e.$extends}if(n(e,"$constants"))for(o in e.$constants)f[o]=e.$constants[o],f[i].constants.push(o);return f.extend=s,f}var i="$interface";return o.create=function(e){return o(t(e)?e():e)},o}),n("FinalClass",["./Class"],function(t){function n(e){var n=t(e);return n}return n.create=function(e,r){return t.create.call(n,e,r)},n}),n("instanceOf",[],function(){function r(e,t){var i,s=e[n].parents;for(i=s.length-1;i>=0;i-=1){if(s[i]===t)return!0;if(r(e,s[i]))return!0}return!1}function i(e,n){var i,s=e.$static[t].interfaces;for(i=s.length-1;i>=0;i-=1)if(s[i]===n||r(s[i],n))return!0;return!1}function s(e,r){return e instanceof r?!0:e&&e.$static&&e.$static[t]&&r&&r[n]?i(e,r):!1}var t="$class",n="$interface";return s}),n("dejavu",["./Class","./AbstractClass","./Interface","./FinalClass","instanceOf"],function(e,t,n,r,i){var s={},o;s.Class=e,s.AbstractClass=t,s.Interface=n,s.FinalClass=r,s.instanceOf=i;if(typeof module!="undefined"&&typeof exports!="undefined"&&module.exports)module.exports=s;else{o=typeof window!="undefined"&&window.navigator&&window.document?window:global;if(!o)throw new Error("Could not grab global object.");o.dejavu=s}}),t("dejavu")})()