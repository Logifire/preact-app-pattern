/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./typescript/demo-app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,r,o={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,r,o=arguments,f={};for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return v(n,f,i,t,null)}function v(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m)}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,T(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?d(t):r,t.__h),j(u,t),t.__e!=r&&_(t)))})}function b(n,l,u,i,t,r,e,c,s,a){var h,p,_,k,m,b,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}T(n,k,_=_||o,t,r,e,c,s,a),m=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||m,k)),null!=m?(null==b&&(b=m),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,m,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=b,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)I(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function A(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||C(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?H:$,r):n.removeEventListener(l,r?H:$,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function T(l,u,i,t,r,o,f,e,s){var a,v,h,d,_,k,m,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?m=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),m&&(v.__E=v.__=null),v.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=z(i.__e,u,i,t,r,o,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=o)&&(u.__e=e,u.__h=!!s,o[o.indexOf(e)]=null),n.__e(l,u,i)}}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function z(n,l,u,i,t,r,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=r)for(;k<r.length;k++)if((a=r[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,r[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(r=r&&f.slice.call(n.childNodes),v=(p=u.props||o).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,b(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,r,e,n.firstChild,c),null!=r)for(k=r.length;k--;)null!=r[k]&&s(r[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(o=0;o<t.length;o++)t[o]&&L(t[o],u,i);null!=r&&s(r)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,r,e;n.__&&n.__(l,u),r=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],T(u,l=(!t&&i||u).__k=a(y,null,[l]),r||o,o,void 0!==u.ownerSVGElement,!t&&i?[i]:r?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:r?r.__e:u.firstChild,t),j(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,r,o=arguments,f=c({},n.props);for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./typescript/demo-app.tsx":
/*!*********************************!*\
  !*** ./typescript/demo-app.tsx ***!
  \*********************************/
/*! exports provided: DemoAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAppState", function() { return DemoAppState; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _demo_app_input_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-app/input-message */ "./typescript/demo-app/input-message.tsx");
/* harmony import */ var _demo_app_function_as_child_input_message_function_mirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-app/function-as-child/input-message-function-mirror */ "./typescript/demo-app/function-as-child/input-message-function-mirror.tsx");
/* harmony import */ var _demo_app_no_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-app/no-state */ "./typescript/demo-app/no-state.tsx");
/* harmony import */ var _demo_app_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-app/provider */ "./typescript/demo-app/provider.tsx");
/* harmony import */ var _demo_app_save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-app/save */ "./typescript/demo-app/save.tsx");
/* harmony import */ var _demo_app_property_input_message_property_mirror__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-app/property/input-message-property-mirror */ "./typescript/demo-app/property/input-message-property-mirror.tsx");







// Data model representing the application state.
class DemoAppState {
    constructor() {
        this.message = '';
    }
}
/**
 * Quote: The main value proposition of the unknown type: TypeScript won't let us perform arbitrary operations on
 * values of type unknown. Instead, we have to perform some sort of type checking first to narrow the type of the value
 * we're working with.
 *
 * @link https://mariusschulz.com/blog/the-unknown-type-in-typescript
 */
class DemoApp extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_demo_app_provider__WEBPACK_IMPORTED_MODULE_4__["DemoAppProvider"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_demo_app_input_message__WEBPACK_IMPORTED_MODULE_1__["InputMessage"], null),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_demo_app_function_as_child_input_message_function_mirror__WEBPACK_IMPORTED_MODULE_2__["InputMessageFunctionMirror"], null),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_demo_app_property_input_message_property_mirror__WEBPACK_IMPORTED_MODULE_6__["InputMessagePropertyMirror"], null),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_demo_app_no_state__WEBPACK_IMPORTED_MODULE_3__["NoState"], null),
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_demo_app_save__WEBPACK_IMPORTED_MODULE_5__["Save"], null)));
    }
}
const parent = document.getElementById('demo-app');
const replace = parent.querySelector('div');
Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(DemoApp, null), parent, replace);


/***/ }),

/***/ "./typescript/demo-app/function-as-child/input-message-function-mirror.tsx":
/*!*********************************************************************************!*\
  !*** ./typescript/demo-app/function-as-child/input-message-function-mirror.tsx ***!
  \*********************************************************************************/
/*! exports provided: InputMessageFunctionMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMessageFunctionMirror", function() { return InputMessageFunctionMirror; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _input_message_mirror_child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-message-mirror-child */ "./typescript/demo-app/function-as-child/input-message-mirror-child.tsx");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ "./typescript/demo-app/provider.tsx");



class InputMessageFunctionMirror extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        console.log('Render InputMessageFunctionMirror');
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_provider__WEBPACK_IMPORTED_MODULE_2__["Consumer"], null, 
        /**
         * Function as child pattern.
         *
         * @link https://reactjs.org/docs/render-props.html#using-props-other-than-render
         */
        ({ message }) => {
            console.log('Re-render InputMessageFunctionMirror');
            return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null,
                    "(Function as child) Entered message: ",
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("em", null, message ? message : 'Empty')),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_input_message_mirror_child__WEBPACK_IMPORTED_MODULE_1__["InputMessageMirrorChild"], null)));
        }));
    }
}


/***/ }),

/***/ "./typescript/demo-app/function-as-child/input-message-mirror-child.tsx":
/*!******************************************************************************!*\
  !*** ./typescript/demo-app/function-as-child/input-message-mirror-child.tsx ***!
  \******************************************************************************/
/*! exports provided: InputMessageMirrorChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMessageMirrorChild", function() { return InputMessageMirrorChild; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

class InputMessageMirrorChild extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        console.log('Render InputMessageMirrorChild');
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null,
            "Children of consumers are also updated (Rendered ",
            InputMessageMirrorChild.countUpdate++,
            " times)"));
    }
}
/**
 * This is only to visualize preacts rendering mechanism and avoid dispatching a render event. Do not do this.
 */
InputMessageMirrorChild.countUpdate = 0;


/***/ }),

/***/ "./typescript/demo-app/input-message.tsx":
/*!***********************************************!*\
  !*** ./typescript/demo-app/input-message.tsx ***!
  \***********************************************/
/*! exports provided: InputMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMessage", function() { return InputMessage; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./typescript/demo-app/provider.tsx");


class InputMessage extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        console.log('Render InputMessage');
        return (
        /* Note: Every component which consumes the context will be rerendered on application state changes. */
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_provider__WEBPACK_IMPORTED_MODULE_1__["Consumer"], null, 
        /* @link https://reactjs.org/docs/context.html#updating-context-from-a-nested-component */
        ({ updateState }) => {
            console.log('Re-render InputMessage');
            return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", null,
                    "Message:",
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "Enter message here", onKeyUp: (e) => { updateState({ message: e.currentTarget.value }); } }))));
        }));
    }
}


/***/ }),

/***/ "./typescript/demo-app/no-state.tsx":
/*!******************************************!*\
  !*** ./typescript/demo-app/no-state.tsx ***!
  \******************************************/
/*! exports provided: NoState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoState", function() { return NoState; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

/**
 * Note: This component does not subscribe to the context, and will not re-render on state change.
 */
class NoState extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        console.log('Render NoState');
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "No updates to components without consumer interaction (NoState)"));
    }
}


/***/ }),

/***/ "./typescript/demo-app/property/input-message-property-mirror.tsx":
/*!************************************************************************!*\
  !*** ./typescript/demo-app/property/input-message-property-mirror.tsx ***!
  \************************************************************************/
/*! exports provided: InputMessagePropertyMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMessagePropertyMirror", function() { return InputMessagePropertyMirror; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider */ "./typescript/demo-app/provider.tsx");


class InputMessagePropertyMirror extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        console.log('Render InputMessagePropertyMirror');
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null,
                "(Property: contextType) Entered message: ",
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("em", null, this.context.message ? this.context.message : 'Empty'))));
    }
}
/**
 * Using this property lets you consume the nearest current value of that Context type using this.context.
 * Note: You can only subscribe to a single context using this API. If you need to read more than one,
 * use function as child.
 *
 * @link https://reactjs.org/docs/context.html#classcontexttype
 */
InputMessagePropertyMirror.contextType = _provider__WEBPACK_IMPORTED_MODULE_1__["DemoAppContext"];


/***/ }),

/***/ "./typescript/demo-app/provider.tsx":
/*!******************************************!*\
  !*** ./typescript/demo-app/provider.tsx ***!
  \******************************************/
/*! exports provided: DemoAppContext, Provider, Consumer, DemoAppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAppContext", function() { return DemoAppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAppProvider", function() { return DemoAppProvider; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _demo_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demo-app */ "./typescript/demo-app.tsx");


/* @link https://preactjs.com/guide/v10/context#createcontext */
const DemoAppContext = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const { Provider, Consumer } = DemoAppContext;
class DemoAppProvider extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.updateState = (newState) => {
            this.setState(newState);
        };
        this.state = new _demo_app__WEBPACK_IMPORTED_MODULE_1__["DemoAppState"]();
    }
    render() {
        return (
        /**
         * All consumers that are descendants of a Provider will re-render whenever
         * the Provider’s value prop changes.
         *
         * @link https://reactjs.org/docs/context.html#contextprovider
         */
        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Provider, { value: { ...this.state, updateState: this.updateState } }, this.props.children));
    }
}


/***/ }),

/***/ "./typescript/demo-app/save.tsx":
/*!**************************************!*\
  !*** ./typescript/demo-app/save.tsx ***!
  \**************************************/
/*! exports provided: Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./typescript/demo-app/provider.tsx");


class Save extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    saveDemoApp(state) {
        // Send state to the server.
        console.log('Saving DemoAppSate: ', JSON.stringify(state));
    }
    render() {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_provider__WEBPACK_IMPORTED_MODULE_1__["Consumer"], null, (demoAppState) => (Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: e => this.saveDemoApp(demoAppState) }, "Save"))));
    }
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map