(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(67)},67:function(t,e,n){"use strict";n.r(e);var r,o,a,i,c,l,u,s,f,h,p,d=n(1),m=n.n(d),v=n(13),g=n.n(v),y=n(5),b=n(12),x=n(2),E=n(8),w=n(3),j=n(14),O=n(4),L=n(27);function k(){k=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==e&&n.call(v,o)&&(d=v);var g=p.prototype=f.prototype=Object.create(d);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(l.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var C=O.c.div(r||(r=Object(y.a)(["\n  padding: 0 20px;\n  max-width: 480px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n"]))),_=O.c.header(o||(o=Object(y.a)(["\n  position: relative;\n  margin-top: 30px;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-item: center;\n"]))),S=O.c.h1(a||(a=Object(y.a)(["\n  padding: 10px;\n  font-size: 48px;\n  text-align: center;\n  color: ",";\n"])),function(t){return t.theme.accentColor}),F=O.c.div(i||(i=Object(y.a)(["\n  position: absolute;\n  left: 10px;\n  top: 15px;\n  width: 50px;\n  height: 50px;\n  color: ",";\n"])),function(t){return t.theme.desColor}),P=O.c.div(c||(c=Object(y.a)(["\n  text-align: center;\n  font-size: 40px;\n  color: ",";\n"])),function(t){return t.theme.tabColor}),I=O.c.div(l||(l=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  color: ",";\n  padding: 15px 20px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n"])),function(t){return t.theme.tabColor},function(t){return t.theme.textColor}),z=O.c.div(u||(u=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),N=O.c.p(s||(s=Object(y.a)(["\n  color: ",";\n  margin-bottom: 25px;\n  font-size: 18px;\n  line-height: 1.5;\n"])),function(t){return t.theme.desColor}),G=(O.c.img(f||(f=Object(y.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),O.c.div(h||(h=Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"])))),T=O.c.span(p||(p=Object(y.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),function(t){return t.theme.tabColor},function(t){return t.isActive?t.theme.accentColor:t.theme.textColor});var q=function(){var t=Object(w.j)().coinId,e=Object(w.f)().state,n=Object(w.g)("/:coinId/price"),r=Object(w.g)("/:coinId/chart"),o=Object(d.useState)(!0),a=Object(x.a)(o,2),i=a[0],c=a[1],l=Object(d.useState)(),u=Object(x.a)(l,2),s=u[0],f=u[1],h=Object(d.useState)(),p=Object(x.a)(h,2),v=p[0],g=p[1];return Object(d.useEffect)(function(){Object(b.a)(k().mark(function e(){var n,r;return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coinpaprika.com/v1/coins/".concat(t));case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.next=7,fetch("https://api.coinpaprika.com/v1/tickers/".concat(t));case 7:return e.next=9,e.sent.json();case 9:r=e.sent,f(n),g(r),c(!1);case 13:case"end":return e.stop()}},e)}))()},[]),m.a.createElement(C,null,m.a.createElement(j.a,null,m.a.createElement("title",null,e?e.name:i?m.a.createElement(P,null,'"Loading..."'):s?s.name:null)),m.a.createElement(_,null,m.a.createElement(E.b,{to:"/"},m.a.createElement(F,null,m.a.createElement(L.a,{size:"20"}))),m.a.createElement(S,null,e?e.name:i?"Loading...":s?s.name:null)),i?m.a.createElement(P,null,"Loading..."):m.a.createElement(m.a.Fragment,null,m.a.createElement(N,null,s?s.description:null),m.a.createElement(I,null,m.a.createElement(z,null,m.a.createElement("span",null,"Rank: "),m.a.createElement("span",null,s?s.rank:"")),m.a.createElement(z,null,m.a.createElement("span",null,"Symbol: "),m.a.createElement("span",null,s?s.symbol:"not found")),m.a.createElement(z,null,m.a.createElement("span",null,"Price: "),m.a.createElement("span",null,v?v.quotes.USD.price.toFixed(2):null))),m.a.createElement(I,null,m.a.createElement(z,null,m.a.createElement("span",null,"Circulating Supply: "),m.a.createElement("span",null,v?v.circulating_supply:"not found")),m.a.createElement(z,null,m.a.createElement("span",null,"Max Supply: "),m.a.createElement("span",null,v?v.max_supply:"not found")),m.a.createElement(z,null,m.a.createElement("span",null,"Open Source: "),m.a.createElement("span",null,s?s.open_source?"Yes":"No":null)))),m.a.createElement(G,null,m.a.createElement(T,{isActive:null!==r},m.a.createElement(E.b,{to:"/".concat(t,"/chart")},"Chart")),m.a.createElement(T,{isActive:null!==n},m.a.createElement(E.b,{to:"/".concat(t,"/price")},"Price"))),m.a.createElement(w.a,{context:{coinId:t}}))},A=n(11),D="https://api.coinpaprika.com/v1",B="https://ohlcv-api.nomadcoders.workers.dev";function Q(){return fetch("".concat(D,"/coins")).then(function(t){return t.json()})}function M(t){return fetch("".concat("".concat(B,"?coinId=").concat(t))).then(function(t){return t.json()})}var U,Y,H,$,J,R,V,K,W,X=n(9),Z=n(10),tt=O.c.div(U||(U=Object(y.a)(["\n  padding: 0 20px;\n  max-width: 480px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n"]))),et=O.c.header(Y||(Y=Object(y.a)(["\n  margin-top: 30px;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-item: center;\n"]))),nt=O.c.ul(H||(H=Object(y.a)([""]))),rt=O.c.li($||($=Object(y.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    transition: color 0.2s ease-in;\n    padding: 20px;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),function(t){return t.theme.tabColor},function(t){return t.theme.textColor},function(t){return t.theme.accentColor}),ot=O.c.h1(J||(J=Object(y.a)(["\n  font-size: 48px;\n  color: ",";\n"])),function(t){return t.theme.accentColor}),at=O.c.div(R||(R=Object(y.a)(["\n  text-align: center;\n  font-size: 40px;\n  color: ",";\n"])),function(t){return t.theme.tabColor}),it=O.c.img(V||(V=Object(y.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),ct=O.c.div(K||(K=Object(y.a)(["\n  position: fixed;\n  top: 30px;\n  left: 30px;\n"]))),lt=O.c.div(W||(W=Object(y.a)(["\n  width: 50px;\n  height: 50px;\n"])));var ut,st,ft=function(){var t=Object(A.useQuery)(["allCoins"],Q),e=t.isLoading,n=t.data,r=Object(X.c)(Lt),o=Object(X.d)(Lt),a=function(){return o(function(t){return!t})};return m.a.createElement(tt,null,m.a.createElement(j.a,null,m.a.createElement("title",null,"Coins")),m.a.createElement(et,null,m.a.createElement(ot,null,"Coins")),m.a.createElement(ct,null,r?m.a.createElement(lt,{onClick:a},m.a.createElement(E.b,{to:"/"},m.a.createElement(Z.c,{size:"30px",color:"#1C1A27"}))):m.a.createElement(lt,{onClick:a},m.a.createElement(E.b,{to:"/"},m.a.createElement(Z.b,{size:"30px",color:"#ffcb00"})))),e?m.a.createElement(at,null,'"Loading..."'):m.a.createElement(nt,null,!n||n.slice(0,100).map(function(t){return m.a.createElement(rt,{key:t.id},m.a.createElement(E.b,{to:"/".concat(t.id),state:{name:t.name}},m.a.createElement(it,{src:"https://coinicons-api.vercel.app/api/icon/".concat(t.symbol.toLowerCase())}),t.name," \u2192"))})))},ht=n(28),pt=n.n(ht);function dt(){dt=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==e&&n.call(v,o)&&(d=v);var g=p.prototype=f.prototype=Object.create(d);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(l.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var mt=O.c.div(ut||(ut=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  color: ",";\n  font-size: 18px;\n"])),function(t){return t.theme.desColor}),vt=O.c.div(st||(st=Object(y.a)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  padding-left: 25px;\n  align-items: center;\n"])));function gt(){var t=Object(w.i)().coinId,e=Object(A.useQuery)(["ohlcv",t],function(){return M(t)},{refetchInterval:1e4}),n=e.isLoading,r=e.data;return m.a.createElement("div",null,n?"Loading chart...":m.a.createElement(pt.a,{type:"candlestick",series:[{name:"Price",data:r.map(function(t){return{x:new Date(1e3*t.time_open),y:[parseFloat(t.open),parseFloat(t.high),parseFloat(t.low),parseFloat(t.close)]}})}],options:{chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},yaxis:{show:!1},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1},type:"datetime"},plotOptions:{candlestick:{colors:{upward:"#EB1D36",downward:"#3330E4"}}},tooltip:{y:{formatter:function(t){return"$".concat(t.toFixed(2))}}}}}))}function yt(){var t=Object(w.i)().coinId,e=Object(A.useQuery)(["ohlcv",t],function(){return M(t)},{refetchInterval:1e4}),n=e.isLoading,r=(e.data,Object(d.useState)()),o=Object(x.a)(r,2),a=o[0],i=o[1];return Object(d.useEffect)(function(){Object(b.a)(dt().mark(function e(){var n;return dt().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coinpaprika.com/v1/tickers/".concat(t));case 2:return e.next=4,e.sent.json();case 4:n=e.sent,i(n);case 6:case"end":return e.stop()}},e)}))()},[]),m.a.createElement("div",null,n?"Loading Price...":m.a.createElement(m.a.Fragment,null,m.a.createElement(mt,null,m.a.createElement(vt,null,m.a.createElement(Z.a,{size:"20",color:"#ffcb00"}),"All Time High Price : $"," ",a?a.quotes.USD.ath_price.toFixed(3):null),m.a.createElement(vt,null,m.a.createElement(Z.a,{size:"20",color:"#ffcb00"}),"Market Cap : $"," ",a?a.quotes.USD.market_cap:null),m.a.createElement(vt,null,m.a.createElement(Z.a,{size:"20",color:"#ffcb00"}),"Percent from ATH Price :"," ",a?a.quotes.USD.percent_from_price_ath:null," %"),m.a.createElement(vt,null,m.a.createElement(Z.a,{size:"20",color:"#ffcb00"}),"Volume(24h) :"," ",a?a.quotes.USD.volume_24h.toFixed(3):null))))}var bt,xt=function(){return m.a.createElement(E.a,{basename:"/coin-tracker"},m.a.createElement(w.d,null,m.a.createElement(w.b,{path:"/",element:m.a.createElement(ft,null)}),m.a.createElement(w.b,{path:"/:coinId",element:m.a.createElement(q,null)},m.a.createElement(w.b,{path:"chart",element:m.a.createElement(gt,null)}),m.a.createElement(w.b,{path:"price",element:m.a.createElement(yt,null)}))))},Et=n(29),wt={bgColor:"#1C1A27",textColor:"#222",accentColor:"#D50022",desColor:"#FCE2DB",tabColor:"#fff"},jt={bgColor:"#fff",textColor:"#222",accentColor:"#D50022",desColor:"#BFA5A3",tabColor:"#FCE2DB"},Ot=Object(O.b)(bt||(bt=Object(y.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n  html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color:",";\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),function(t){return t.theme.bgColor},function(t){return t.theme.textColor}),Lt=Object(X.b)({key:"isLight",default:!1});var kt=function(){var t=Object(X.c)(Lt);return m.a.createElement(m.a.Fragment,null,m.a.createElement(O.a,{theme:t?jt:wt},m.a.createElement(Ot,null),m.a.createElement(xt,null),m.a.createElement(Et.ReactQueryDevtools,{initialIsOpen:!0})))},Ct=new A.QueryClient;g.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(X.a,null,m.a.createElement(A.QueryClientProvider,{client:Ct},m.a.createElement(kt,null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c05e5552.chunk.js.map