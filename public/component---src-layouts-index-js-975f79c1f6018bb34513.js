webpackJsonp([0x67ef26645b2a,60335399758886],{88:function(e,t){e.exports={layoutContext:{}}},183:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),i=n(192),l=r(i),c=n(88),s=r(c);t.default=function(e){return u.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},266:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=u.call(e),t=u.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=i(e),d=i(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var u=Array.prototype.slice,i=n(268),l=n(267),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},267:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},268:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},275:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},89:function(e,t,n){(function(e){!function(n,r){var o=r();"object"==typeof e&&e&&e.exports&&(t=e.exports=o),t.randomColor=o}(this,function(){function e(e){var t=a(e.hue),n=l(t);return n<0&&(n=360+n),n}function t(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return l([0,100]);var n=u(e),r=n[0],o=n[1];switch(t.luminosity){case"bright":r=55;break;case"dark":r=o-10;break;case"light":o=55}return l([r,o])}function n(e,t,n){var r=o(e,t),a=100;switch(n.luminosity){case"dark":a=r+20;break;case"light":r=(a+r)/2;break;case"random":r=0,a=100}return l([r,a])}function r(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return T(e);case"hsl":var n=T(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=T(e),o=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+o+")";case"rgbArray":return d(e);case"rgb":var a=d(e);return"rgb("+a.join(", ")+")";case"rgba":var u=d(e),o=t.alpha||Math.random();return"rgba("+u.join(", ")+", "+o+")";default:return c(e)}}function o(e,t){for(var n=i(e).lowerBounds,r=0;r<n.length-1;r++){var o=n[r][0],a=n[r][1],u=n[r+1][0],l=n[r+1][1];if(t>=o&&t<=u){var c=(l-a)/(u-o),s=a-c*o;return c*t+s}}return 0}function a(e){if("number"==typeof parseInt(e)){var t=parseInt(e);if(t<360&&t>0)return[t,t]}if("string"==typeof e)if(m[e]){var n=m[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var r=p(e)[0];return[r,r]}return[0,360]}function u(e){return i(e).saturationRange}function i(e){e>=334&&e<=360&&(e-=360);for(var t in m){var n=m[t];if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return m[t]}return"Color not found"}function l(e){if(null===E)return Math.floor(e[0]+Math.random()*(e[1]+1-e[0]));var t=e[1]||1,n=e[0]||0;E=(9301*E+49297)%233280;var r=E/233280;return Math.floor(n+r*(t-n))}function c(e){function t(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var n=d(e),r="#"+t(n[0])+t(n[1])+t(n[2]);return r}function s(e,t,n){var r=n[0][0],o=n[n.length-1][0],a=n[n.length-1][1],u=n[0][1];m[e]={hueRange:t,lowerBounds:n,saturationRange:[r,o],brightnessRange:[a,u]}}function f(){s("monochrome",null,[[0,0],[100,0]]),s("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),s("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),s("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),s("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),s("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),s("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),s("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function d(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,o=Math.floor(6*t),a=6*t-o,u=r*(1-n),i=r*(1-a*n),l=r*(1-(1-a)*n),c=256,s=256,f=256;switch(o){case 0:c=r,s=l,f=u;break;case 1:c=i,s=r,f=u;break;case 2:c=u,s=r,f=l;break;case 3:c=u,s=i,f=r;break;case 4:c=l,s=u,f=r;break;case 5:c=r,s=u,f=i}var d=[Math.floor(255*c),Math.floor(255*s),Math.floor(255*f)];return d}function p(e){e=e.replace(/^#/,""),e=3===e.length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,o=Math.max(t,n,r),a=o-Math.min(t,n,r),u=o?a/o:0;switch(o){case t:return[60*((n-r)/a%6)||0,u,o];case n:return[60*((r-t)/a+2)||0,u,o];case r:return[60*((t-n)/a+4)||0,u,o]}}function T(e){var t=e[0],n=e[1]/100,r=e[2]/100,o=(2-n)*r;return[t,Math.round(n*r/(o<1?o:2-o)*1e4)/100,o/2*100]}function h(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}var E=null,m={};f();var y=function(o){if(o=o||{},void 0!==o.seed&&null!==o.seed&&o.seed===parseInt(o.seed,10))E=o.seed;else if("string"==typeof o.seed)E=h(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");E=null}var a,u,i;if(null!==o.count&&void 0!==o.count){var l=o.count,c=[];for(o.count=null;l>c.length;)E&&o.seed&&(o.seed+=1),c.push(y(o));return o.count=l,c}return a=e(o),u=t(a,o),i=n(a,u,o),r([a,u,i],o)};return y})}).call(t,n(111)(e))},375:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=r(s),d=n(7),p=r(d),T=n(397),h=r(T),E=n(266),m=r(E),y=n(376),A=n(169),b=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),u(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=u,t.titleAttributes=l({},a),t));case A.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case A.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,u=a.children,i=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,u),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:u});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:u})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},_=(0,h.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(v),S=b(_);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},169:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},376:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(2),i=r(u),l=n(5),c=r(l),s=n(169),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,s.TAG_NAMES.TITLE),n=m(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],u=a.toLowerCase();if(e.indexOf(u)!==-1&&n[u])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),u=0;u<a.length;u++){var i=a[u],l=i.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(i)===-1||i!==s.TAG_PROPERTIES.INNER_HTML&&i!==s.TAG_PROPERTIES.CSS_TEXT&&i!==s.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),u=0;u<a.length;u++){var i=a[u],l=(0,c.default)({},r[i],o[i]);r[i]=l}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:h([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:m(e,s.HELMET_PROPS.DEFER),encode:m(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),b=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,M=function(e){g&&_(g),e.defer?g=v(function(){O(e,function(){g=null})}):(O(e),g=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,u=e.metaTags,i=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(s.TAG_NAMES.BODY,r),R(s.TAG_NAMES.HTML,o),P(d,p);var T={baseTag:w(s.TAG_NAMES.BASE,n),linkTags:w(s.TAG_NAMES.LINK,a),metaTags:w(s.TAG_NAMES.META,u),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,i),scriptTags:w(s.TAG_NAMES.SCRIPT,c),styleTags:w(s.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),l(e,h,E)},C=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=C(e)),R(s.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),u=Object.keys(t),i=0;i<u.length;i++){var l=u[i],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==u.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,u.join(","))}},w=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],u=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return u=t,n.isEqualNode(e)})?o.splice(u,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),a=C(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",u=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(u?"/>":">"+a+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=j(n,o);return[i.default.createElement(s.TAG_NAMES.TITLE,a,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),i.default.createElement(e,o)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},q=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,u=e.metaTags,i=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,o,r),link:x(s.TAG_NAMES.LINK,a,r),meta:x(s.TAG_NAMES.META,u,r),noscript:x(s.TAG_NAMES.NOSCRIPT,i,r),script:x(s.TAG_NAMES.SCRIPT,l,r),style:x(s.TAG_NAMES.STYLE,c,r),title:x(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=k,t.handleClientStateChange=M,t.mapStateOnServer=q,t.reducePropsToState=y,t.requestAnimationFrame=v,t.warn=S}).call(t,function(){return this}())},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(2),i=r(u),l=n(7),c=r(l),s=function(e,t){var n=e.children,r=e.color,u=e.size,l=e.style,c=e.width,s=e.height,f=o(e,["children","color","size","style","width","height"]),d=t.reactIconBase,p=void 0===d?{}:d,T=u||p.size||"1em";return i.default.createElement("svg",a({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:s||T,width:c||T},p,f,{style:a({verticalAlign:"middle",color:r||p.color},p.style||{},l)}))};s.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number]),height:c.default.oneOfType([c.default.string,c.default.number]),style:c.default.object},s.contextTypes={reactIconBase:c.default.shape(s.propTypes)},t.default=s,e.exports=t.default},377:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),i=n(106),l=r(i),c=function(e){return u.default.createElement(l.default,o({viewBox:"0 0 40 40"},e),u.default.createElement("g",null,u.default.createElement("path",{d:"m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z"})))};t.default=c,e.exports=t.default},378:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),i=n(106),l=r(i),c=function(e){return u.default.createElement(l.default,o({viewBox:"0 0 40 40"},e),u.default.createElement("g",null,u.default.createElement("path",{d:"m10.8 13.9v22.2h-7.4v-22.1h7.4z m0.5-6.8q0 1.7-1.2 2.7t-3 1.1h0q-1.9 0-3-1.1t-1.1-2.7q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7z m26 16.3v12.7h-7.4v-11.9q0-2.3-0.9-3.6t-2.8-1.4q-1.4 0-2.3 0.8t-1.5 1.9q-0.2 0.7-0.2 1.8v12.4h-7.3q0-8.9 0-14.5t0-6.6l0-1h7.3v3.2h-0.1q0.5-0.7 1-1.3t1.2-1.1 2-1 2.5-0.4q3.8 0 6.2 2.6t2.3 7.4z"})))};t.default=c,e.exports=t.default},379:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),i=n(106),l=r(i),c=function(e){return u.default.createElement(l.default,o({viewBox:"0 0 40 40"},e),u.default.createElement("g",null,u.default.createElement("path",{d:"m29.1 20q1.1 0 1.8-0.7t0.7-1.8-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.8 1.7 0.7z m-5-6.6q1.1 0 1.8-0.8t0.7-1.7-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.7 1.7 0.8z m-8.2 0q1 0 1.7-0.8t0.8-1.7-0.8-1.8-1.7-0.7-1.8 0.7-0.7 1.8 0.7 1.7 1.8 0.8z m-5 6.6q1 0 1.7-0.7t0.8-1.8-0.8-1.8-1.7-0.7-1.8 0.7-0.7 1.8 0.7 1.8 1.8 0.7z m9.1-15q6.2 0 10.6 3.9t4.4 9.5q0 3.4-2.5 5.8t-5.9 2.4h-2.8q-1.1 0-1.8 0.8t-0.7 1.7q0 0.9 0.6 1.7t0.6 1.7q0 1.1-0.7 1.8t-1.8 0.7q-6.2 0-10.6-4.4t-4.4-10.6 4.4-10.6 10.6-4.4z"})))};t.default=c,e.exports=t.default},397:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),l=r(i),c=n(275),s=r(c),f=n(412),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(p.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return l.default.createElement(c,this.props)},t}(i.Component);return h.displayName="SideEffect("+r(c)+")",h.canUseDOM=s.default.canUseDOM,h}}},412:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),u=Object.keys(t);if(a.length!==u.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!i(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},111:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},186:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),l=r(i),c=n(377),s=r(c),f=n(378),d=r(f),p=n(379),T=r(p),h=n(89),E=r(h),m=function(e){function t(){var n,r,u;o(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=r=a(this,e.call.apply(e,[this].concat(l))),r.state={buttonIsActive:!1,isMobile:!1},r.handleMouseEnter=function(){r.setState({buttonIsActive:!0})},r.handleMouseLeave=function(){r.setState({buttonIsActive:!1})},r.handleButtonClick=function(){r.state.buttonIsActive===!1?r.setState({buttonIsActive:!0}):r.setState({buttonIsActive:!1})},u=n,a(r,u)}return u(t,e),t.prototype.componentDidMount=function(){var e=window.innerWidth;e<=500?this.setState({isMobile:!0}):this.setState({isMobile:!1});var t=(0,E.default)({luminosity:"dark"});this.setState({randomColor:t})},t.prototype.render=function(){var e="",t="";return this.state.isMobile?this.state.buttonIsActive?(e=l.default.createElement("button",{className:"main-button-active",onClick:this.handleButtonClick,style:{color:""+this.state.randomColor,borderColor:""+this.state.randomColor}},l.default.createElement("span",null,"Info")),t=l.default.createElement("div",{className:"main-button-menu"},l.default.createElement("span",{style:{padding:"5%"},onClick:this.handleHomeClick},"Home"),l.default.createElement("span",{style:{padding:"5%"},onClick:this.handleAboutClick},"About"),l.default.createElement("span",{style:{padding:"5%"},onClick:this.handleProjectsClick},"Projects"))):(e=l.default.createElement("button",{className:"main-button",onClick:this.handleButtonClick,style:{backgroundColor:""+this.state.randomColor,color:""+this.state.randomColor}},l.default.createElement("span",null,"Info")),t=""):this.state.isMobile||(this.state.buttonIsActive===!1?(e=l.default.createElement("button",{className:"main-button",onMouseEnter:this.handleMouseEnter,style:{backgroundColor:""+this.state.randomColor,color:""+this.state.randomColor}},l.default.createElement("span",null,"Info")),t=""):this.state.buttonIsActive===!0&&(e=l.default.createElement("button",{className:"main-button-active",onMouseEnter:this.handleMouseEnter,style:{color:""+this.state.randomColor,borderColor:""+this.state.randomColor}},l.default.createElement("span",null,"Info")),t=l.default.createElement("div",{className:"main-button-menu",onMouseLeave:this.handleMouseLeave,style:{backgroundColor:""+this.state.randomColor,borderColor:""+this.state.randomColor}},l.default.createElement("span",{style:{padding:"5%"},onClick:this.handleHomeClick},"Home"),l.default.createElement("span",{style:{padding:"5%"},onClick:this.handleAboutClick},"About"),l.default.createElement("span",{style:{padding:"5%"},onClick:this.handleProjectsClick},"Projects")))),l.default.createElement("div",null,l.default.createElement("div",{className:"drop-down"},e,t),l.default.createElement("div",{className:"side-links"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"https://www.linkedin.com/in/cole-shapiro-54646b9/",
style:{color:""+this.state.randomColor}},l.default.createElement(d.default,null))),l.default.createElement("li",null,l.default.createElement("a",{href:"https://github.com/colesayer",target:"_blank",style:{color:""+this.state.randomColor}},l.default.createElement(s.default,null))),l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.jttnyc.com/6953,6954,6964",target:"_blank",style:{color:""+this.state.randomColor}},l.default.createElement(T.default,null))))))},t}(i.Component);t.default=m,e.exports=t.default},276:function(e,t){},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),u=n(7),i=r(u),l=n(375),c=r(l);n(276);var s=n(186),f=r(s),d=function(e){var t=e.children;return a.default.createElement("div",null,a.default.createElement(c.default,{title:"Gatsby Default Starter",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),a.default.createElement(f.default,null),a.default.createElement("div",{style:{maxWidth:"100%",maxHeight:"100vh",padding:0,paddingTop:0,display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",overflow:"scroll"}},t()))};d.propTypes={children:i.default.func},t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-975f79c1f6018bb34513.js.map