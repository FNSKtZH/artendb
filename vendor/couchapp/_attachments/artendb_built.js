(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*!
 * typeahead.js 0.9.3
 * http://twitter.github.io/typeahead.js/
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

!function(a){var b="0.9.3",c={isMsie:function(){var a=/(msie) ([\w.]+)/i.exec(navigator.userAgent);return a?parseInt(a[2],10):!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},bind:a.proxy,bindAll:function(b){var c;for(var d in b)a.isFunction(c=b[d])&&(b[d]=a.proxy(c,b))},indexOf:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},each:a.each,map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,getUniqueId:function(){var a=0;return function(){return a++}}(),defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},tokenizeQuery:function(b){return a.trim(b).toLowerCase().split(/[\s]+/)},tokenizeText:function(b){return a.trim(b).toLowerCase().split(/[\s\-_]+/)},getProtocol:function(){return location.protocol},noop:function(){}},d=function(){var a=/\s+/;return{on:function(b,c){var d;if(!c)return this;for(this._callbacks=this._callbacks||{},b=b.split(a);d=b.shift();)this._callbacks[d]=this._callbacks[d]||[],this._callbacks[d].push(c);return this},trigger:function(b,c){var d,e;if(!this._callbacks)return this;for(b=b.split(a);d=b.shift();)if(e=this._callbacks[d])for(var f=0;f<e.length;f+=1)e[f].call(this,{type:d,data:c});return this}}}(),e=function(){function b(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d="typeahead:";return c.mixin(b.prototype,{trigger:function(a){var b=[].slice.call(arguments,1);this.$el.trigger(d+a,b)}}),b}(),f=function(){function a(a){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+this.prefix)}function b(){return(new Date).getTime()}function d(a){return JSON.stringify(c.isUndefined(a)?null:a)}function e(a){return JSON.parse(a)}var f,g;try{f=window.localStorage,f.setItem("~~~","!"),f.removeItem("~~~")}catch(h){f=null}return g=f&&window.JSON?{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},get:function(a){return this.isExpired(a)&&this.remove(a),e(f.getItem(this._prefix(a)))},set:function(a,e,g){return c.isNumber(g)?f.setItem(this._ttlKey(a),d(b()+g)):f.removeItem(this._ttlKey(a)),f.setItem(this._prefix(a),d(e))},remove:function(a){return f.removeItem(this._ttlKey(a)),f.removeItem(this._prefix(a)),this},clear:function(){var a,b,c=[],d=f.length;for(a=0;d>a;a++)(b=f.key(a)).match(this.keyMatcher)&&c.push(b.replace(this.keyMatcher,""));for(a=c.length;a--;)this.remove(c[a]);return this},isExpired:function(a){var d=e(f.getItem(this._ttlKey(a)));return c.isNumber(d)&&b()>d?!0:!1}}:{get:c.noop,set:c.noop,remove:c.noop,clear:c.noop,isExpired:c.noop},c.mixin(a.prototype,g),a}(),g=function(){function a(a){c.bindAll(this),a=a||{},this.sizeLimit=a.sizeLimit||10,this.cache={},this.cachedKeysByAge=[]}return c.mixin(a.prototype,{get:function(a){return this.cache[a]},set:function(a,b){var c;this.cachedKeysByAge.length===this.sizeLimit&&(c=this.cachedKeysByAge.shift(),delete this.cache[c]),this.cache[a]=b,this.cachedKeysByAge.push(a)}}),a}(),h=function(){function b(a){c.bindAll(this),a=c.isString(a)?{url:a}:a,i=i||new g,h=c.isNumber(a.maxParallelRequests)?a.maxParallelRequests:h||6,this.url=a.url,this.wildcard=a.wildcard||"%QUERY",this.filter=a.filter,this.replace=a.replace,this.ajaxSettings={type:"get",cache:a.cache,timeout:a.timeout,dataType:a.dataType||"json",beforeSend:a.beforeSend},this._get=(/^throttle$/i.test(a.rateLimitFn)?c.throttle:c.debounce)(this._get,a.rateLimitWait||300)}function d(){j++}function e(){j--}function f(){return h>j}var h,i,j=0,k={};return c.mixin(b.prototype,{_get:function(a,b){function c(c){var e=d.filter?d.filter(c):c;b&&b(e),i.set(a,c)}var d=this;f()?this._sendRequest(a).done(c):this.onDeckRequestArgs=[].slice.call(arguments,0)},_sendRequest:function(b){function c(){e(),k[b]=null,f.onDeckRequestArgs&&(f._get.apply(f,f.onDeckRequestArgs),f.onDeckRequestArgs=null)}var f=this,g=k[b];return g||(d(),g=k[b]=a.ajax(b,this.ajaxSettings).always(c)),g},get:function(a,b){var d,e,f=this,g=encodeURIComponent(a||"");return b=b||c.noop,d=this.replace?this.replace(this.url,g):this.url.replace(this.wildcard,g),(e=i.get(d))?c.defer(function(){b(f.filter?f.filter(e):e)}):this._get(d,b),!!e}}),b}(),i=function(){function d(b){c.bindAll(this),c.isString(b.template)&&!b.engine&&a.error("no template engine specified"),b.local||b.prefetch||b.remote||a.error("one of local, prefetch, or remote is required"),this.name=b.name||c.getUniqueId(),this.limit=b.limit||5,this.minLength=b.minLength||1,this.header=b.header,this.footer=b.footer,this.valueKey=b.valueKey||"value",this.template=e(b.template,b.engine,this.valueKey),this.local=b.local,this.prefetch=b.prefetch,this.remote=b.remote,this.itemHash={},this.adjacencyList={},this.storage=b.name?new f(b.name):null}function e(a,b,d){var e,f;return c.isFunction(a)?e=a:c.isString(a)?(f=b.compile(a),e=c.bind(f.render,f)):e=function(a){return"<p>"+a[d]+"</p>"},e}var g={thumbprint:"thumbprint",protocol:"protocol",itemHash:"itemHash",adjacencyList:"adjacencyList"};return c.mixin(d.prototype,{_processLocalData:function(a){this._mergeProcessedData(this._processData(a))},_loadPrefetchData:function(d){function e(a){var b=d.filter?d.filter(a):a,e=m._processData(b),f=e.itemHash,h=e.adjacencyList;m.storage&&(m.storage.set(g.itemHash,f,d.ttl),m.storage.set(g.adjacencyList,h,d.ttl),m.storage.set(g.thumbprint,n,d.ttl),m.storage.set(g.protocol,c.getProtocol(),d.ttl)),m._mergeProcessedData(e)}var f,h,i,j,k,l,m=this,n=b+(d.thumbprint||"");return this.storage&&(f=this.storage.get(g.thumbprint),h=this.storage.get(g.protocol),i=this.storage.get(g.itemHash),j=this.storage.get(g.adjacencyList)),k=f!==n||h!==c.getProtocol(),d=c.isString(d)?{url:d}:d,d.ttl=c.isNumber(d.ttl)?d.ttl:864e5,i&&j&&!k?(this._mergeProcessedData({itemHash:i,adjacencyList:j}),l=a.Deferred().resolve()):l=a.getJSON(d.url).done(e),l},_transformDatum:function(a){var b=c.isString(a)?a:a[this.valueKey],d=a.tokens||c.tokenizeText(b),e={value:b,tokens:d};return c.isString(a)?(e.datum={},e.datum[this.valueKey]=a):e.datum=a,e.tokens=c.filter(e.tokens,function(a){return!c.isBlankString(a)}),e.tokens=c.map(e.tokens,function(a){return a.toLowerCase()}),e},_processData:function(a){var b=this,d={},e={};return c.each(a,function(a,f){var g=b._transformDatum(f),h=c.getUniqueId(g.value);d[h]=g,c.each(g.tokens,function(a,b){var d=b.charAt(0),f=e[d]||(e[d]=[h]);!~c.indexOf(f,h)&&f.push(h)})}),{itemHash:d,adjacencyList:e}},_mergeProcessedData:function(a){var b=this;c.mixin(this.itemHash,a.itemHash),c.each(a.adjacencyList,function(a,c){var d=b.adjacencyList[a];b.adjacencyList[a]=d?d.concat(c):c})},_getLocalSuggestions:function(a){var b,d=this,e=[],f=[],g=[];return c.each(a,function(a,b){var d=b.charAt(0);!~c.indexOf(e,d)&&e.push(d)}),c.each(e,function(a,c){var e=d.adjacencyList[c];return e?(f.push(e),(!b||e.length<b.length)&&(b=e),void 0):!1}),f.length<e.length?[]:(c.each(b,function(b,e){var h,i,j=d.itemHash[e];h=c.every(f,function(a){return~c.indexOf(a,e)}),i=h&&c.every(a,function(a){return c.some(j.tokens,function(b){return 0===b.indexOf(a)})}),i&&g.push(j)}),g)},initialize:function(){var b;return this.local&&this._processLocalData(this.local),this.transport=this.remote?new h(this.remote):null,b=this.prefetch?this._loadPrefetchData(this.prefetch):a.Deferred().resolve(),this.local=this.prefetch=this.remote=null,this.initialize=function(){return b},b},getSuggestions:function(a,b){function d(a){f=f.slice(0),c.each(a,function(a,b){var d,e=g._transformDatum(b);return d=c.some(f,function(a){return e.value===a.value}),!d&&f.push(e),f.length<g.limit}),b&&b(f)}var e,f,g=this,h=!1;a.length<this.minLength||(e=c.tokenizeQuery(a),f=this._getLocalSuggestions(e).slice(0,this.limit),f.length<this.limit&&this.transport&&(h=this.transport.get(a,d)),!h&&b&&b(f))}}),d}(),j=function(){function b(b){var d=this;c.bindAll(this),this.specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},this.$hint=a(b.hint),this.$input=a(b.input).on("blur.tt",this._handleBlur).on("focus.tt",this._handleFocus).on("keydown.tt",this._handleSpecialKeyEvent),c.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){d.specialKeyCodeMap[a.which||a.keyCode]||c.defer(d._compareQueryToInputValue)}):this.$input.on("input.tt",this._compareQueryToInputValue),this.query=this.$input.val(),this.$overflowHelper=e(this.$input)}function e(b){return a("<span></span>").css({position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function f(a,b){return a=(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," "),b=(b||"").replace(/^\s*/g,"").replace(/\s{2,}/g," "),a===b}return c.mixin(b.prototype,d,{_handleFocus:function(){this.trigger("focused")},_handleBlur:function(){this.trigger("blured")},_handleSpecialKeyEvent:function(a){var b=this.specialKeyCodeMap[a.which||a.keyCode];b&&this.trigger(b+"Keyed",a)},_compareQueryToInputValue:function(){var a=this.getInputValue(),b=f(this.query,a),c=b?this.query.length!==a.length:!1;c?this.trigger("whitespaceChanged",{value:this.query}):b||this.trigger("queryChanged",{value:this.query=a})},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){this.$input.val(a),!b&&this._compareQueryToInputValue()},getHintValue:function(){return this.$hint.val()},setHintValue:function(a){this.$hint.val(a)},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},isOverflow:function(){return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>this.$input.width()},isCursorAtEnd:function(){var a,b=this.$input.val().length,d=this.$input[0].selectionStart;return c.isNumber(d)?d===b:document.selection?(a=document.selection.createRange(),a.moveStart("character",-b),b===a.text.length):!0}}),b}(),k=function(){function b(b){c.bindAll(this),this.isOpen=!1,this.isEmpty=!0,this.isMouseOverDropdown=!1,this.$menu=a(b.menu).on("mouseenter.tt",this._handleMouseenter).on("mouseleave.tt",this._handleMouseleave).on("click.tt",".tt-suggestion",this._handleSelection).on("mouseover.tt",".tt-suggestion",this._handleMouseover)}function e(a){return a.data("suggestion")}var f={suggestionsList:'<span class="tt-suggestions"></span>'},g={suggestionsList:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"}};return c.mixin(b.prototype,d,{_handleMouseenter:function(){this.isMouseOverDropdown=!0},_handleMouseleave:function(){this.isMouseOverDropdown=!1},_handleMouseover:function(b){var c=a(b.currentTarget);this._getSuggestions().removeClass("tt-is-under-cursor"),c.addClass("tt-is-under-cursor")},_handleSelection:function(b){var c=a(b.currentTarget);this.trigger("suggestionSelected",e(c))},_show:function(){this.$menu.css("display","block")},_hide:function(){this.$menu.hide()},_moveCursor:function(a){var b,c,d,f;if(this.isVisible()){if(b=this._getSuggestions(),c=b.filter(".tt-is-under-cursor"),c.removeClass("tt-is-under-cursor"),d=b.index(c)+a,d=(d+1)%(b.length+1)-1,-1===d)return this.trigger("cursorRemoved"),void 0;-1>d&&(d=b.length-1),f=b.eq(d).addClass("tt-is-under-cursor"),this._ensureVisibility(f),this.trigger("cursorMoved",e(f))}},_getSuggestions:function(){return this.$menu.find(".tt-suggestions > .tt-suggestion")},_ensureVisibility:function(a){var b=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),c=this.$menu.scrollTop(),d=a.position().top,e=d+a.outerHeight(!0);0>d?this.$menu.scrollTop(c+d):e>b&&this.$menu.scrollTop(c+(e-b))},destroy:function(){this.$menu.off(".tt"),this.$menu=null},isVisible:function(){return this.isOpen&&!this.isEmpty},closeUnlessMouseIsOverDropdown:function(){this.isMouseOverDropdown||this.close()},close:function(){this.isOpen&&(this.isOpen=!1,this.isMouseOverDropdown=!1,this._hide(),this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(a){var b={left:"0",right:"auto"},c={left:"auto",right:" 0"};"ltr"===a?this.$menu.css(b):this.$menu.css(c)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getSuggestionUnderCursor:function(){var a=this._getSuggestions().filter(".tt-is-under-cursor").first();return a.length>0?e(a):null},getFirstSuggestion:function(){var a=this._getSuggestions().first();return a.length>0?e(a):null},renderSuggestions:function(b,d){var e,h,i,j,k,l="tt-dataset-"+b.name,m='<div class="tt-suggestion">%body</div>',n=this.$menu.find("."+l);0===n.length&&(h=a(f.suggestionsList).css(g.suggestionsList),n=a("<div></div>").addClass(l).append(b.header).append(h).append(b.footer).appendTo(this.$menu)),d.length>0?(this.isEmpty=!1,this.isOpen&&this._show(),i=document.createElement("div"),j=document.createDocumentFragment(),c.each(d,function(c,d){d.dataset=b.name,e=b.template(d.datum),i.innerHTML=m.replace("%body",e),k=a(i.firstChild).css(g.suggestion).data("suggestion",d),k.children().each(function(){a(this).css(g.suggestionChild)}),j.appendChild(k[0])}),n.show().find(".tt-suggestions").html(j)):this.clearSuggestions(b.name),this.trigger("suggestionsRendered")},clearSuggestions:function(a){var b=a?this.$menu.find(".tt-dataset-"+a):this.$menu.find('[class^="tt-dataset-"]'),c=b.find(".tt-suggestions");b.hide(),c.empty(),0===this._getSuggestions().length&&(this.isEmpty=!0,this._hide())}}),b}(),l=function(){function b(a){var b,d,f;c.bindAll(this),this.$node=e(a.input),this.datasets=a.datasets,this.dir=null,this.eventBus=a.eventBus,b=this.$node.find(".tt-dropdown-menu"),d=this.$node.find(".tt-query"),f=this.$node.find(".tt-hint"),this.dropdownView=new k({menu:b}).on("suggestionSelected",this._handleSelection).on("cursorMoved",this._clearHint).on("cursorMoved",this._setInputValueToSuggestionUnderCursor).on("cursorRemoved",this._setInputValueToQuery).on("cursorRemoved",this._updateHint).on("suggestionsRendered",this._updateHint).on("opened",this._updateHint).on("closed",this._clearHint).on("opened closed",this._propagateEvent),this.inputView=new j({input:d,hint:f}).on("focused",this._openDropdown).on("blured",this._closeDropdown).on("blured",this._setInputValueToQuery).on("enterKeyed tabKeyed",this._handleSelection).on("queryChanged",this._clearHint).on("queryChanged",this._clearSuggestions).on("queryChanged",this._getSuggestions).on("whitespaceChanged",this._updateHint).on("queryChanged whitespaceChanged",this._openDropdown).on("queryChanged whitespaceChanged",this._setLanguageDirection).on("escKeyed",this._closeDropdown).on("escKeyed",this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed",this._managePreventDefault).on("upKeyed downKeyed",this._moveDropdownCursor).on("upKeyed downKeyed",this._openDropdown).on("tabKeyed leftKeyed rightKeyed",this._autocomplete)}function e(b){var c=a(g.wrapper),d=a(g.dropdown),e=a(b),f=a(g.hint);c=c.css(h.wrapper),d=d.css(h.dropdown),f.css(h.hint).css({backgroundAttachment:e.css("background-attachment"),backgroundClip:e.css("background-clip"),backgroundColor:e.css("background-color"),backgroundImage:e.css("background-image"),backgroundOrigin:e.css("background-origin"),backgroundPosition:e.css("background-position"),backgroundRepeat:e.css("background-repeat"),backgroundSize:e.css("background-size")}),e.data("ttAttrs",{dir:e.attr("dir"),autocomplete:e.attr("autocomplete"),spellcheck:e.attr("spellcheck"),style:e.attr("style")}),e.addClass("tt-query").attr({autocomplete:"off",spellcheck:!1}).css(h.query);try{!e.attr("dir")&&e.attr("dir","auto")}catch(i){}return e.wrap(c).parent().prepend(f).append(d)}function f(a){var b=a.find(".tt-query");c.each(b.data("ttAttrs"),function(a,d){c.isUndefined(d)?b.removeAttr(a):b.attr(a,d)}),b.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(a),a.remove()}var g={wrapper:'<span class="twitter-typeahead"></span>',hint:'<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',dropdown:'<span class="tt-dropdown-menu"></span>'},h={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},query:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"}};return c.isMsie()&&c.mixin(h.query,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),c.isMsie()&&c.isMsie()<=7&&(c.mixin(h.wrapper,{display:"inline",zoom:"1"}),c.mixin(h.query,{marginTop:"-1px"})),c.mixin(b.prototype,d,{_managePreventDefault:function(a){var b,c,d=a.data,e=!1;switch(a.type){case"tabKeyed":b=this.inputView.getHintValue(),c=this.inputView.getInputValue(),e=b&&b!==c;break;case"upKeyed":case"downKeyed":e=!d.shiftKey&&!d.ctrlKey&&!d.metaKey}e&&d.preventDefault()},_setLanguageDirection:function(){var a=this.inputView.getLanguageDirection();a!==this.dir&&(this.dir=a,this.$node.css("direction",a),this.dropdownView.setLanguageDirection(a))},_updateHint:function(){var a,b,d,e,f,g=this.dropdownView.getFirstSuggestion(),h=g?g.value:null,i=this.dropdownView.isVisible(),j=this.inputView.isOverflow();h&&i&&!j&&(a=this.inputView.getInputValue(),b=a.replace(/\s{2,}/g," ").replace(/^\s+/g,""),d=c.escapeRegExChars(b),e=new RegExp("^(?:"+d+")(.*$)","i"),f=e.exec(h),this.inputView.setHintValue(a+(f?f[1]:"")))},_clearHint:function(){this.inputView.setHintValue("")},_clearSuggestions:function(){this.dropdownView.clearSuggestions()},_setInputValueToQuery:function(){this.inputView.setInputValue(this.inputView.getQuery())},_setInputValueToSuggestionUnderCursor:function(a){var b=a.data;this.inputView.setInputValue(b.value,!0)},_openDropdown:function(){this.dropdownView.open()},_closeDropdown:function(a){this.dropdownView["blured"===a.type?"closeUnlessMouseIsOverDropdown":"close"]()},_moveDropdownCursor:function(a){var b=a.data;b.shiftKey||b.ctrlKey||b.metaKey||this.dropdownView["upKeyed"===a.type?"moveCursorUp":"moveCursorDown"]()},_handleSelection:function(a){var b="suggestionSelected"===a.type,d=b?a.data:this.dropdownView.getSuggestionUnderCursor();d&&(this.inputView.setInputValue(d.value),b?this.inputView.focus():a.data.preventDefault(),b&&c.isMsie()?c.defer(this.dropdownView.close):this.dropdownView.close(),this.eventBus.trigger("selected",d.datum,d.dataset))},_getSuggestions:function(){var a=this,b=this.inputView.getQuery();c.isBlankString(b)||c.each(this.datasets,function(c,d){d.getSuggestions(b,function(c){b===a.inputView.getQuery()&&a.dropdownView.renderSuggestions(d,c)})})},_autocomplete:function(a){var b,c,d,e,f;("rightKeyed"!==a.type&&"leftKeyed"!==a.type||(b=this.inputView.isCursorAtEnd(),c="ltr"===this.inputView.getLanguageDirection()?"leftKeyed"===a.type:"rightKeyed"===a.type,b&&!c))&&(d=this.inputView.getQuery(),e=this.inputView.getHintValue(),""!==e&&d!==e&&(f=this.dropdownView.getFirstSuggestion(),this.inputView.setInputValue(f.value),this.eventBus.trigger("autocompleted",f.datum,f.dataset)))},_propagateEvent:function(a){this.eventBus.trigger(a.type)},destroy:function(){this.inputView.destroy(),this.dropdownView.destroy(),f(this.$node),this.$node=null},setQuery:function(a){this.inputView.setQuery(a),this.inputView.setInputValue(a),this._clearHint(),this._clearSuggestions(),this._getSuggestions()}}),b}();!function(){var b,d={},f="ttView";b={initialize:function(b){function g(){var b,d=a(this),g=new e({el:d});b=c.map(h,function(a){return a.initialize()}),d.data(f,new l({input:d,eventBus:g=new e({el:d}),datasets:h})),a.when.apply(a,b).always(function(){c.defer(function(){g.trigger("initialized")})})}var h;return b=c.isArray(b)?b:[b],0===b.length&&a.error("no datasets provided"),h=c.map(b,function(a){var b=d[a.name]?d[a.name]:new i(a);return a.name&&(d[a.name]=b),b}),this.each(g)},destroy:function(){function b(){var b=a(this),c=b.data(f);c&&(c.destroy(),b.removeData(f))}return this.each(b)},setQuery:function(b){function c(){var c=a(this).data(f);c&&c.setQuery(b)}return this.each(c)}},jQuery.fn.typeahead=function(a){return b[a]?b[a].apply(this,[].slice.call(arguments,1)):b.initialize.apply(this,arguments)}}()}(window.jQuery);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function decode(s) {
		if (config.raw) {
			return s;
		}
		try {
			// If we can't decode the cookie, ignore it, it's unusable.
			return decodeURIComponent(s.replace(pluses, ' '));
		} catch(e) {}
	}

	function decodeAndParse(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		s = decode(s);

		try {
			// If we can't parse the cookie, ignore it, it's unusable.
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	var config = $.cookie = function (key, value, options) {

		// Write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				result = decodeAndParse(cookie);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = decodeAndParse(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function(jQuery){
	
	jQuery.hotkeys = {
		version: "0.8",

		specialKeys: {
			8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
			20: "capslock", 27: "esc", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 38: "up", 40: "down", 45: "insert", 46: "del", 
			96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
			104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
			112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 
			120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
		},

		/*specialKeys: {
			8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
			20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
			37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 
			96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
			104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
			112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 
			120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
		},*/
	
		shiftNums: {
			"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", 
			"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<", 
			".": ">",  "/": "?",  "\\": "|"
		}
	};

	function keyHandler( handleObj ) {
		// Only care when a possible input has been specified
		if ( typeof handleObj.data !== "string" ) {
			return;
		}
		
		var origHandler = handleObj.handler,
			keys = handleObj.data.toLowerCase().split(" ");
	
		handleObj.handler = function( event ) {
			// Don't fire in text-accepting inputs that we didn't directly bind to
			if ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||
				 event.target.type === "text") ) {
				return;
			}
			
			// Keypress represents characters, not special keys
			var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[ event.which ],
				character = String.fromCharCode( event.which ).toLowerCase(),
				key, modif = "", possible = {};

			// check combinations (alt|ctrl|shift+anything)
			if ( event.altKey && special !== "alt" ) {
				modif += "alt+";
			}

			if ( event.ctrlKey && special !== "ctrl" ) {
				modif += "ctrl+";
			}
			
			// TODO: Need to make sure this works consistently across platforms
			if ( event.metaKey && !event.ctrlKey && special !== "meta" ) {
				modif += "meta+";
			}

			if ( event.shiftKey && special !== "shift" ) {
				modif += "shift+";
			}

			if ( special ) {
				possible[ modif + special ] = true;

			} else {
				possible[ modif + character ] = true;
				possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;

				// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
				if ( modif === "shift+" ) {
					possible[ jQuery.hotkeys.shiftNums[ character ] ] = true;
				}
			}

			for ( var i = 0, l = keys.length; i < l; i++ ) {
				if ( possible[ keys[i] ] ) {
					return origHandler.apply( this, arguments );
				}
			}
		};
	}

	jQuery.each([ "keydown", "keyup", "keypress" ], function() {
		jQuery.event.special[ this ] = { add: keyHandler };
	});

})( jQuery );
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

(function($) {
  $.couch = $.couch || {};

  function encodeDocId(docID) {
    var parts = docID.split("/");
    if (parts[0] == "_design") {
      parts.shift();
      return "_design/" + encodeURIComponent(parts.join('/'));
    }
    return encodeURIComponent(docID);
  };

  var uuidCache = [];

  $.extend($.couch, {
    urlPrefix: '',
    activeTasks: function(options) {
      ajax(
        {url: this.urlPrefix + "/_active_tasks"},
        options,
        "Active task status could not be retrieved"
      );
    },

    allDbs: function(options) {
      ajax(
        {url: this.urlPrefix + "/_all_dbs"},
        options,
        "An error occurred retrieving the list of all databases"
      );
    },

    config: function(options, section, option, value) {
      var req = {url: this.urlPrefix + "/_config/"};
      if (section) {
        req.url += encodeURIComponent(section) + "/";
        if (option) {
          req.url += encodeURIComponent(option);
        }
      }
      if (value === null) {
        req.type = "DELETE";        
      } else if (value !== undefined) {
        req.type = "PUT";
        req.data = toJSON(value);
        req.contentType = "application/json";
        req.processData = false
      }

      ajax(req, options,
        "An error occurred retrieving/updating the server configuration"
      );
    },
    
    session: function(options) {
      options = options || {};
      $.ajax({
        type: "GET", url: this.urlPrefix + "/_session",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
        },
        complete: function(req) {
          var resp = httpData(req, "json");
          if (req.status == 200) {
            if (options.success) options.success(resp);
          } else if (options.error) {
            options.error(req.status, resp.error, resp.reason);
          } else {
            alert("An error occurred getting session info: " + resp.reason);
          }
        }
      });
    },

    userDb : function(callback) {
      $.couch.session({
        success : function(resp) {
          var userDb = $.couch.db(resp.info.authentication_db);
          callback(userDb);
        }
      });
    },

    signup: function(user_doc, password, options) {      
      options = options || {};
      // prepare user doc based on name and password
      user_doc = this.prepareUserDoc(user_doc, password);
      $.couch.userDb(function(db) {
        db.saveDoc(user_doc, options);
      });
    },

    prepareUserDoc: function(user_doc, new_password) {
      if (typeof hex_sha1 == "undefined") {
        alert("creating a user doc requires sha1.js to be loaded in the page");
        return;
      }
      var user_prefix = "org.couchdb.user:";
      user_doc._id = user_doc._id || user_prefix + user_doc.name;
      if (new_password) {
        // handle the password crypto
        user_doc.salt = $.couch.newUUID();
        user_doc.password_sha = hex_sha1(new_password + user_doc.salt);
      }
      user_doc.type = "user";
      if (!user_doc.roles) {
        user_doc.roles = [];
      }
      return user_doc;
    },

    login: function(options) {
      options = options || {};
      $.ajax({
        type: "POST", url: this.urlPrefix + "/_session", dataType: "json",
        data: {name: options.name, password: options.password},
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
        },
        complete: function(req) {
          var resp = httpData(req, "json");
          if (req.status == 200) {
            if (options.success) options.success(resp);
          } else if (options.error) {
            options.error(req.status, resp.error, resp.reason);
          } else {
            alert("An error occurred logging in: " + resp.reason);
          }
        }
      });
    },
    logout: function(options) {
      options = options || {};
      $.ajax({
        type: "DELETE", url: this.urlPrefix + "/_session", dataType: "json",
        username : "_", password : "_",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
        },
        complete: function(req) {
          var resp = httpData(req, "json");
          if (req.status == 200) {
            if (options.success) options.success(resp);
          } else if (options.error) {
            options.error(req.status, resp.error, resp.reason);
          } else {
            alert("An error occurred logging out: " + resp.reason);
          }
        }
      });
    },

    db: function(name, db_opts) {
      db_opts = db_opts || {};
      var rawDocs = {};
      function maybeApplyVersion(doc) {
        if (doc._id && doc._rev && rawDocs[doc._id] && rawDocs[doc._id].rev == doc._rev) {
          // todo: can we use commonjs require here?
          if (typeof Base64 == "undefined") {
            alert("please include /_utils/script/base64.js in the page for base64 support");
            return false;
          } else {
            doc._attachments = doc._attachments || {};
            doc._attachments["rev-"+doc._rev.split("-")[0]] = {
              content_type :"application/json",
              data : Base64.encode(rawDocs[doc._id].raw)
            };
            return true;
          }
        }
      };
      return {
        name: name,
        uri: this.urlPrefix + "/" + encodeURIComponent(name) + "/",

        compact: function(options) {
          $.extend(options, {successStatus: 202});
          ajax({
              type: "POST", url: this.uri + "_compact",
              data: "", processData: false
            },
            options,
            "The database could not be compacted"
          );
        },
        viewCleanup: function(options) {
          $.extend(options, {successStatus: 202});
          ajax({
              type: "POST", url: this.uri + "_view_cleanup",
              data: "", processData: false
            },
            options,
            "The views could not be cleaned up"
          );
        },
        compactView: function(groupname, options) {
          $.extend(options, {successStatus: 202});
          ajax({
              type: "POST", url: this.uri + "_compact/" + groupname,
              data: "", processData: false
            },
            options,
            "The view could not be compacted"
          );
        },
        create: function(options) {
          $.extend(options, {successStatus: 201});
          ajax({
              type: "PUT", url: this.uri, contentType: "application/json",
              data: "", processData: false
            },
            options,
            "The database could not be created"
          );
        },
        drop: function(options) {
          ajax(
            {type: "DELETE", url: this.uri},
            options,
            "The database could not be deleted"
          );
        },
        info: function(options) {
          ajax(
            {url: this.uri},
            options,
            "Database information could not be retrieved"
          );
        },
        changes: function(since, options) {
          options = options || {};
          // set up the promise object within a closure for this handler
          var timeout = 100, db = this, active = true,
            listeners = [],
            promise = {
            onChange : function(fun) {
              listeners.push(fun);
            },
            stop : function() {
              active = false;
            }
          };
          // call each listener when there is a change
          function triggerListeners(resp) {
            $.each(listeners, function() {
              this(resp);
            });
          };
          // when there is a change, call any listeners, then check for another change
          options.success = function(resp) {
            timeout = 100;
            if (active) {
              since = resp.last_seq;
              triggerListeners(resp);
              getChangesSince();
            };
          };
          options.error = function() {
            if (active) {
              setTimeout(getChangesSince, timeout);
              timeout = timeout * 2;
            }
          };
          // actually make the changes request
          function getChangesSince() {
            var opts = $.extend({heartbeat : 10 * 1000}, options, {
              feed : "longpoll",
              since : since
            });
            ajax(
              {url: db.uri + "_changes"+encodeOptions(opts)},
              options,
              "Error connecting to "+db.uri+"/_changes."
            );
          }
          // start the first request
          if (since) {
            getChangesSince();
          } else {
            db.info({
              success : function(info) {
                since = info.update_seq;
                getChangesSince();
              }
            });
          }
          return promise;
        },
        allDocs: function(options) {
          var type = "GET";
          var data = null;
          if (options["keys"]) {
            type = "POST";
            var keys = options["keys"];
            delete options["keys"];
            data = toJSON({ "keys": keys });
          }
          ajax({
              type: type,
              data: data,
              url: this.uri + "_all_docs" + encodeOptions(options)
            },
            options,
            "An error occurred retrieving a list of all documents"
          );
        },
        allDesignDocs: function(options) {
          this.allDocs($.extend({startkey:"_design", endkey:"_design0"}, options));
        },
        allApps: function(options) {
          options = options || {};
          var self = this;
          if (options.eachApp) {
            this.allDesignDocs({
              success: function(resp) {
                $.each(resp.rows, function() {
                  self.openDoc(this.id, {
                    success: function(ddoc) {
                      var index, appPath, appName = ddoc._id.split('/');
                      appName.shift();
                      appName = appName.join('/');
                      index = ddoc.couchapp && ddoc.couchapp.index;
                      if (index) {
                        appPath = ['', name, ddoc._id, index].join('/');
                      } else if (ddoc._attachments && ddoc._attachments["index.html"]) {
                        appPath = ['', name, ddoc._id, "index.html"].join('/');
                      }
                      if (appPath) options.eachApp(appName, appPath, ddoc);
                    }
                  });
                });
              }
            });
          } else {
            alert("Please provide an eachApp function for allApps()");
          }
        },
        openDoc: function(docId, options, ajaxOptions) {
          options = options || {};
          if (db_opts.attachPrevRev || options.attachPrevRev) {
            $.extend(options, {
              beforeSuccess : function(req, doc) {
                rawDocs[doc._id] = {
                  rev : doc._rev,
                  raw : req.responseText
                };
              }
            });
          } else {
            $.extend(options, {
              beforeSuccess : function(req, doc) {
                if (doc["jquery.couch.attachPrevRev"]) {
                  rawDocs[doc._id] = {
                    rev : doc._rev,
                    raw : req.responseText
                  };
                }
              }
            });
          }
          ajax({url: this.uri + encodeDocId(docId) + encodeOptions(options)},
            options,
            "The document could not be retrieved",
            ajaxOptions
          );
        },
        saveDoc: function(doc, options) {
          options = options || {};
          var db = this;
          var beforeSend = fullCommit(options);
          if (doc._id === undefined) {
            var method = "POST";
            var uri = this.uri;
          } else {
            var method = "PUT";
            var uri = this.uri + encodeDocId(doc._id);
          }
          var versioned = maybeApplyVersion(doc);
          $.ajax({
            type: method, url: uri + encodeOptions(options),
            contentType: "application/json",
            dataType: "json", data: toJSON(doc),
            beforeSend : beforeSend,
            complete: function(req) {
              var resp = httpData(req, "json");
              if (req.status == 200 || req.status == 201 || req.status == 202) {
                doc._id = resp.id;
                doc._rev = resp.rev;
                if (versioned) {
                  db.openDoc(doc._id, {
                    attachPrevRev : true,
                    success : function(d) {
                      doc._attachments = d._attachments;
                      if (options.success) options.success(resp);
                    }
                  });
                } else {
                  if (options.success) options.success(resp);
                }
              } else if (options.error) {
                options.error(req.status, resp.error, resp.reason);
              } else {
                alert("The document could not be saved: " + resp.reason);
              }
            }
          });
        },
        bulkSave: function(docs, options) {
          var beforeSend = fullCommit(options);
          $.extend(options, {successStatus: 201, beforeSend : beforeSend});
          ajax({
              type: "POST",
              url: this.uri + "_bulk_docs" + encodeOptions(options),
              contentType: "application/json", data: toJSON(docs)
            },
            options,
            "The documents could not be saved"
          );
        },
        removeDoc: function(doc, options) {
          ajax({
              type: "DELETE",
              url: this.uri +
                   encodeDocId(doc._id) +
                   encodeOptions({rev: doc._rev})
            },
            options,
            "The document could not be deleted"
          );
        },
        bulkRemove: function(docs, options){
          docs.docs = $.each(
            docs.docs, function(i, doc){
              doc._deleted = true;
            }
          );
          $.extend(options, {successStatus: 201});
          ajax({
              type: "POST",
              url: this.uri + "_bulk_docs" + encodeOptions(options),
              data: toJSON(docs)
            },
            options,
            "The documents could not be deleted"
          );
        },
        copyDoc: function(docId, options, ajaxOptions) {
          ajaxOptions = $.extend(ajaxOptions, {
            complete: function(req) {
              var resp = httpData(req, "json");
              if (req.status == 201) {
                if (options.success) options.success(resp);
              } else if (options.error) {
                options.error(req.status, resp.error, resp.reason);
              } else {
                alert("The document could not be copied: " + resp.reason);
              }
            }
          });
          ajax({
              type: "COPY",
              url: this.uri + encodeDocId(docId)
            },
            options,
            "The document could not be copied",
            ajaxOptions
          );
        },
        query: function(mapFun, reduceFun, language, options) {
          language = language || "javascript";
          if (typeof(mapFun) !== "string") {
            mapFun = mapFun.toSource ? mapFun.toSource() : "(" + mapFun.toString() + ")";
          }
          var body = {language: language, map: mapFun};
          if (reduceFun != null) {
            if (typeof(reduceFun) !== "string")
              reduceFun = reduceFun.toSource ? reduceFun.toSource() : "(" + reduceFun.toString() + ")";
            body.reduce = reduceFun;
          }
          ajax({
              type: "POST",
              url: this.uri + "_temp_view" + encodeOptions(options),
              contentType: "application/json", data: toJSON(body)
            },
            options,
            "An error occurred querying the database"
          );
        },
        list: function(list, view, options) {
          var list = list.split('/');
          var options = options || {};
          var type = 'GET';
          var data = null;
          if (options['keys']) {
            type = 'POST';
            var keys = options['keys'];
            delete options['keys'];
            data = toJSON({'keys': keys });
          }
          ajax({
              type: type,
              data: data,
              url: this.uri + '_design/' + list[0] +
                   '/_list/' + list[1] + '/' + view + encodeOptions(options)
              },
              options, 'An error occured accessing the list'
          );
        },
        view: function(name, options) {
          var name = name.split('/');
          var options = options || {};
          var type = "GET";
          var data= null;
          if (options["keys"]) {
            type = "POST";
            var keys = options["keys"];
            delete options["keys"];
            data = toJSON({ "keys": keys });
          }
          ajax({
              type: type,
              //contentType: "application/json; charset=utf-8",
              data: data,
              url: this.uri + "_design/" + name[0] +
                   "/_view/" + name[1] + encodeOptions(options)
            },
            options, "An error occurred accessing the view"
          );
        },
        getDbProperty: function(propName, options, ajaxOptions) {
          ajax({url: this.uri + propName + encodeOptions(options)},
            options,
            "The property could not be retrieved",
            ajaxOptions
          );
        },

        setDbProperty: function(propName, propValue, options, ajaxOptions) {
          ajax({
            type: "PUT", 
            url: this.uri + propName + encodeOptions(options),
            data : JSON.stringify(propValue)
          },
            options,
            "The property could not be updated",
            ajaxOptions
          );
        }
      };
    },

    encodeDocId: encodeDocId, 

    info: function(options) {
      ajax(
        {url: this.urlPrefix + "/"},
        options,
        "Server information could not be retrieved"
      );
    },

    replicate: function(source, target, ajaxOptions, repOpts) {
      repOpts = $.extend({source: source, target: target}, repOpts);
      if (repOpts.continuous && !repOpts.cancel) {
        ajaxOptions.successStatus = 202;
      }
      ajax({
          type: "POST", url: this.urlPrefix + "/_replicate",
          data: JSON.stringify(repOpts),
          contentType: "application/json"
        },
        ajaxOptions,
        "Replication failed"
      );
    },

    newUUID: function(cacheNum) {
      if (cacheNum === undefined) {
        cacheNum = 1;
      }
      if (!uuidCache.length) {
        ajax({url: this.urlPrefix + "/_uuids", data: {count: cacheNum}, async: false}, {
            success: function(resp) {
              uuidCache = resp.uuids;
            }
          },
          "Failed to retrieve UUID batch."
        );
      }
      return uuidCache.shift();
    }
  });

  var httpData = $.httpData || function( xhr, type, s ) { // lifted from jq1.4.4
    var ct = xhr.getResponseHeader("content-type") || "",
      xml = type === "xml" || !type && ct.indexOf("xml") >= 0,
      data = xml ? xhr.responseXML : xhr.responseText;

    if ( xml && data.documentElement.nodeName === "parsererror" ) {
      $.error( "parsererror" );
    }
    if ( s && s.dataFilter ) {
      data = s.dataFilter( data, type );
    }
    if ( typeof data === "string" ) {
      if ( type === "json" || !type && ct.indexOf("json") >= 0 ) {
        data = $.parseJSON( data );
      } else if ( type === "script" || !type && ct.indexOf("javascript") >= 0 ) {
        $.globalEval( data );
      }
    }
    return data;
  };

  function ajax(obj, options, errorMessage, ajaxOptions) {

    var defaultAjaxOpts = {
      contentType: "application/json",
      headers:{"Accept": "application/json"}
    };

    options = $.extend({successStatus: 200}, options);
    ajaxOptions = $.extend(defaultAjaxOpts, ajaxOptions);
    errorMessage = errorMessage || "Unknown error";
    $.ajax($.extend($.extend({
      // aus msie false gemacht, damit mit modernen jquery kompatibel
      type: "GET", dataType: "json", cache : false,
      //type: "GET", dataType: "json", cache : !$.browser.msie,
      beforeSend: function(xhr){
        if(ajaxOptions && ajaxOptions.headers){
          for (var header in ajaxOptions.headers){
            xhr.setRequestHeader(header, ajaxOptions.headers[header]);
          }
        }
      },
      complete: function(req) {
        try {
          var resp = httpData(req, "json");
        } catch(e) {
          if (options.error) {
            options.error(req.status, req, e);
          } else {
            alert(errorMessage + ": " + e);
          }
          return;
        }
        if (options.ajaxStart) {
          options.ajaxStart(resp);
        }
        if (req.status == options.successStatus) {
          if (options.beforeSuccess) options.beforeSuccess(req, resp);
          if (options.success) options.success(resp);
        } else if (options.error) {
          options.error(req.status, resp && resp.error || errorMessage, resp && resp.reason || "no response");
        } else {
          alert(errorMessage + ": " + resp.reason);
        }
      }
    }, obj), ajaxOptions));
  }

  function fullCommit(options) {
    var options = options || {};
    if (typeof options.ensure_full_commit !== "undefined") {
      var commit = options.ensure_full_commit;
      delete options.ensure_full_commit;
      return function(xhr) {
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader("X-Couch-Full-Commit", commit.toString());
      };
    }
  };

  // Convert a options object to an url query string.
  // ex: {key:'value',key2:'value2'} becomes '?key="value"&key2="value2"'
  function encodeOptions(options) {
    var buf = [];
    if (typeof(options) === "object" && options !== null) {
      for (var name in options) {
        if ($.inArray(name, ["error", "success", "beforeSuccess", "ajaxStart"]) >= 0)
          continue;
        var value = options[name];
        if ($.inArray(name, ["key", "startkey", "endkey"]) >= 0) {
          value = toJSON(value);
        }
        buf.push(encodeURIComponent(name) + "=" + encodeURIComponent(value));
      }
    }
    return buf.length ? "?" + buf.join("&") : "";
  }

  function toJSON(obj) {
    return obj !== null ? JSON.stringify(obj) : null;
  }

})(jQuery);


RegExp.escape=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');};(function($){'use strict'
$.csv={defaults:{separator:',',delimiter:'"',headers:true},hooks:{castToScalar:function(value,state){var hasDot=/\./;if(isNaN(value)){return value;}else{if(hasDot.test(value)){return parseFloat(value);}else{var integer=parseInt(value);if(isNaN(integer)){return null;}else{return integer;}}}}},parsers:{parse:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1;}
if(!options.state.colNum){options.state.colNum=1;}
var data=[];var entry=[];var state=0;var value=''
var exit=false;function endOfEntry(){state=0;value='';if(options.start&&options.state.rowNum<options.start){entry=[];options.state.rowNum++;options.state.colNum=1;return;}
if(options.onParseEntry===undefined){data.push(entry);}else{var hookVal=options.onParseEntry(entry,options.state);if(hookVal!==false){data.push(hookVal);}}
entry=[];if(options.end&&options.state.rowNum>=options.end){exit=true;}
options.state.rowNum++;options.state.colNum=1;}
function endOfValue(){if(options.onParseValue===undefined){entry.push(value);}else{var hook=options.onParseValue(value,options.state);if(hook!==false){entry.push(hook);}}
value='';state=0;options.state.colNum++;}
var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);match=RegExp(matchSrc,'gm');csv.replace(match,function(m0){if(exit){return;}
switch(state){case 0:if(m0===separator){value+='';endOfValue();break;}
if(m0===delimiter){state=1;break;}
if(m0==='\n'){endOfValue();endOfEntry();break;}
if(/^\r$/.test(m0)){break;}
value+=m0;state=3;break;case 1:if(m0===delimiter){state=2;break;}
value+=m0;state=1;break;case 2:if(m0===delimiter){value+=m0;state=1;break;}
if(m0===separator){endOfValue();break;}
if(m0==='\n'){endOfValue();endOfEntry();break;}
if(/^\r$/.test(m0)){break;}
throw new Error('CSVDataError: Illegal State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');case 3:if(m0===separator){endOfValue();break;}
if(m0==='\n'){endOfValue();endOfEntry();break;}
if(/^\r$/.test(m0)){break;}
if(m0===delimiter){throw new Error('CSVDataError: Illegal Quote [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}
throw new Error('CSVDataError: Illegal Data [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');default:throw new Error('CSVDataError: Unknown State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}});if(entry.length!==0){endOfValue();endOfEntry();}
return data;},splitLines:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1;}
var entries=[];var state=0;var entry='';var exit=false;function endOfLine(){state=0;if(options.start&&options.state.rowNum<options.start){entry='';options.state.rowNum++;return;}
if(options.onParseEntry===undefined){entries.push(entry);}else{var hookVal=options.onParseEntry(entry,options.state);if(hookVal!==false){entries.push(hookVal);}}
entry='';if(options.end&&options.state.rowNum>=options.end){exit=true;}
options.state.rowNum++;}
var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);match=RegExp(matchSrc,'gm');csv.replace(match,function(m0){if(exit){return;}
switch(state){case 0:if(m0===separator){entry+=m0;state=0;break;}
if(m0===delimiter){entry+=m0;state=1;break;}
if(m0==='\n'){endOfLine();break;}
if(/^\r$/.test(m0)){break;}
entry+=m0;state=3;break;case 1:if(m0===delimiter){entry+=m0;state=2;break;}
entry+=m0;state=1;break;case 2:var prevChar=entry.substr(entry.length-1);if(m0===delimiter&&prevChar===delimiter){entry+=m0;state=1;break;}
if(m0===separator){entry+=m0;state=0;break;}
if(m0==='\n'){endOfLine();break;}
if(m0==='\r'){break;}
throw new Error('CSVDataError: Illegal state [Row:'+options.state.rowNum+']');case 3:if(m0===separator){entry+=m0;state=0;break;}
if(m0==='\n'){endOfLine();break;}
if(m0==='\r'){break;}
if(m0===delimiter){throw new Error('CSVDataError: Illegal quote [Row:'+options.state.rowNum+']');}
throw new Error('CSVDataError: Illegal state [Row:'+options.state.rowNum+']');default:throw new Error('CSVDataError: Unknown state [Row:'+options.state.rowNum+']');}});if(entry!==''){endOfLine();}
return entries;},parseEntry:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1;}
if(!options.state.colNum){options.state.colNum=1;}
var entry=[];var state=0;var value='';function endOfValue(){if(options.onParseValue===undefined){entry.push(value);}else{var hook=options.onParseValue(value,options.state);if(hook!==false){entry.push(hook);}}
value='';state=0;options.state.colNum++;}
if(!options.match){var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);options.match=RegExp(matchSrc,'gm');}
csv.replace(options.match,function(m0){switch(state){case 0:if(m0===separator){value+='';endOfValue();break;}
if(m0===delimiter){state=1;break;}
if(m0==='\n'||m0==='\r'){break;}
value+=m0;state=3;break;case 1:if(m0===delimiter){state=2;break;}
value+=m0;state=1;break;case 2:if(m0===delimiter){value+=m0;state=1;break;}
if(m0===separator){endOfValue();break;}
if(m0==='\n'||m0==='\r'){break;}
throw new Error('CSVDataError: Illegal State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');case 3:if(m0===separator){endOfValue();break;}
if(m0==='\n'||m0==='\r'){break;}
if(m0===delimiter){throw new Error('CSVDataError: Illegal Quote [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}
throw new Error('CSVDataError: Illegal Data [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');default:throw new Error('CSVDataError: Unknown State [Row:'+options.state.rowNum+'][Col:'+options.state.colNum+']');}});endOfValue();return entry;}},toArray:function(csv,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;var state=(options.state!==undefined?options.state:{});var options={delimiter:config.delimiter,separator:config.separator,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,state:state}
var entry=$.csv.parsers.parseEntry(csv,options);if(!config.callback){return entry;}else{config.callback('',entry);}},toArrays:function(csv,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;var data=[];var options={delimiter:config.delimiter,separator:config.separator,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,start:options.start,end:options.end,state:{rowNum:1,colNum:1}};data=$.csv.parsers.parse(csv,options);if(!config.callback){return data;}else{config.callback('',data);}},toObjects:function(csv,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;config.headers='headers'in options?options.headers:$.csv.defaults.headers;options.start='start'in options?options.start:1;if(config.headers){options.start++;}
if(options.end&&config.headers){options.end++;}
var lines=[];var data=[];var options={delimiter:config.delimiter,separator:config.separator,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,start:options.start,end:options.end,state:{rowNum:1,colNum:1},match:false};var headerOptions={delimiter:config.delimiter,separator:config.separator,start:1,end:1,state:{rowNum:1,colNum:1}}
var headerLine=$.csv.parsers.splitLines(csv,headerOptions);var headers=$.csv.toArray(headerLine[0],options);var lines=$.csv.parsers.splitLines(csv,options);options.state.colNum=1;if(headers){options.state.rowNum=2;}else{options.state.rowNum=1;}
for(var i=0,len=lines.length;i<len;i++){var entry=$.csv.toArray(lines[i],options);var object={};for(var j in headers){object[headers[j]]=entry[j];}
data.push(object);options.state.rowNum++;}
if(!config.callback){return data;}else{config.callback('',data);}},fromArrays:function(arrays,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;config.escaper='escaper'in options?options.escaper:$.csv.defaults.escaper;config.experimental='experimental'in options?options.experimental:false;if(!config.experimental){throw new Error('not implemented');}
var output=[];for(i in arrays){output.push(arrays[i]);}
if(!config.callback){return output;}else{config.callback('',output);}},fromObjects2CSV:function(objects,options,callback){var options=(options!==undefined?options:{});var config={};config.callback=((callback!==undefined&&typeof(callback)==='function')?callback:false);config.separator='separator'in options?options.separator:$.csv.defaults.separator;config.delimiter='delimiter'in options?options.delimiter:$.csv.defaults.delimiter;config.experimental='experimental'in options?options.experimental:false;if(!config.experimental){throw new Error('not implemented');}
var output=[];for(i in objects){output.push(arrays[i]);}
if(!config.callback){return output;}else{config.callback('',output);}}};$.csvEntry2Array=$.csv.toArray;$.csv2Array=$.csv.toArrays;$.csv2Dictionary=$.csv.toObjects;})(jQuery);
/*! jsUri v1.1.1 | https://github.com/derek-watson/jsUri */
var Query=function(a){"use strict";var b=function(a){var b=[],c,d,e,f;if(typeof a=="undefined"||a===null||a==="")return b;a.indexOf("?")===0&&(a=a.substring(1)),d=a.toString().split(/[&;]/);for(c=0;c<d.length;c++)e=d[c],f=e.split("="),b.push([f[0],f[1]]);return b},c=b(a),d=function(){var a="",b,d;for(b=0;b<c.length;b++)d=c[b],a.length>0&&(a+="&"),a+=d.join("=");return a.length>0?"?"+a:a},e=function(a){a=decodeURIComponent(a),a=a.replace("+"," ");return a},f=function(a){var b,d;for(d=0;d<c.length;d++){b=c[d];if(e(a)===e(b[0]))return b[1]}},g=function(a){var b=[],d,f;for(d=0;d<c.length;d++)f=c[d],e(a)===e(f[0])&&b.push(f[1]);return b},h=function(a,b){var d=[],f,g,h,i;for(f=0;f<c.length;f++)g=c[f],h=e(g[0])===e(a),i=e(g[1])===e(b),(arguments.length===1&&!h||arguments.length===2&&!h&&!i)&&d.push(g);c=d;return this},i=function(a,b,d){arguments.length===3&&d!==-1?(d=Math.min(d,c.length),c.splice(d,0,[a,b])):arguments.length>0&&c.push([a,b]);return this},j=function(a,b,d){var f=-1,g,j;if(arguments.length===3){for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)&&decodeURIComponent(j[1])===e(d)){f=g;break}}h(a,d).addParam(a,b,f)}else{for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)){f=g;break}}h(a),i(a,b,f)}return this};return{getParamValue:f,getParamValues:g,deleteParam:h,addParam:i,replaceParam:j,toString:d}},Uri=function(a){"use strict";var b=!1,c=function(a){var c={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],e={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},f=c[b?"strict":"loose"].exec(a),g={},h=14;while(h--)g[d[h]]=f[h]||"";g[e.name]={},g[d[12]].replace(e.parser,function(a,b,c){b&&(g[e.name][b]=c)});return g},d=c(a||""),e=new Query(d.query),f=function(a){typeof a!="undefined"&&(d.protocol=a);return d.protocol},g=null,h=function(a){typeof a!="undefined"&&(g=a);return g===null?d.source.indexOf("//")!==-1:g},i=function(a){typeof a!="undefined"&&(d.userInfo=a);return d.userInfo},j=function(a){typeof a!="undefined"&&(d.host=a);return d.host},k=function(a){typeof a!="undefined"&&(d.port=a);return d.port},l=function(a){typeof a!="undefined"&&(d.path=a);return d.path},m=function(a){typeof a!="undefined"&&(e=new Query(a));return e},n=function(a){typeof a!="undefined"&&(d.anchor=a);return d.anchor},o=function(a){f(a);return this},p=function(a){h(a);return this},q=function(a){i(a);return this},r=function(a){j(a);return this},s=function(a){k(a);return this},t=function(a){l(a);return this},u=function(a){m(a);return this},v=function(a){n(a);return this},w=function(a){return m().getParamValue(a)},x=function(a){return m().getParamValues(a)},y=function(a,b){arguments.length===2?m().deleteParam(a,b):m().deleteParam(a);return this},z=function(a,b,c){arguments.length===3?m().addParam(a,b,c):m().addParam(a,b);return this},A=function(a,b,c){arguments.length===3?m().replaceParam(a,b,c):m().replaceParam(a,b);return this},B=function(){var a="",b=function(a){return a!==null&&a!==""};b(f())?(a+=f(),f().indexOf(":")!==f().length-1&&(a+=":"),a+="//"):h()&&b(j())&&(a+="//"),b(i())&&b(j())&&(a+=i(),i().indexOf("@")!==i().length-1&&(a+="@")),b(j())&&(a+=j(),b(k())&&(a+=":"+k())),b(l())?a+=l():b(j())&&(b(m().toString())||b(n()))&&(a+="/"),b(m().toString())&&(m().toString().indexOf("?")!==0&&(a+="?"),a+=m().toString()),b(n())&&(n().indexOf("#")!==0&&(a+="#"),a+=n());return a},C=function(){return new Uri(B())};return{protocol:f,hasAuthorityPrefix:h,userInfo:i,host:j,port:k,path:l,query:m,anchor:n,setProtocol:o,setHasAuthorityPrefix:p,setUserInfo:q,setHost:r,setPort:s,setPath:t,setQuery:u,setAnchor:v,getQueryParamValue:w,getQueryParamValues:x,deleteQueryParam:y,addQueryParam:z,replaceQueryParam:A,toString:B,clone:C}},jsUri=Uri;
/*! FileSaver.js
 *  A saveAs() FileSaver implementation.
 *  2014-01-24
 *
 *  By Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
  // IE 10+ (native saveAs)
  || (typeof navigator !== "undefined" &&
      navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  // Everyone else
  || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" &&
	    /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, URL = view.URL || view.webkitURL || view
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = !view.externalHost && "download" in save_link
		, click = function(node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") { // file is an object URL
					URL.revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			}
			deletion_queue.length = 0; // clear queue
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, FileSaver = function(blob, name) {
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, get_object_url = function() {
					var object_url = get_URL().createObjectURL(blob);
					deletion_queue.push(object_url);
					return object_url;
				}
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_object_url(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						window.open(object_url, "_blank");
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				// FF for Android has a nasty garbage collection mechanism
				// that turns all objects that are not pure javascript into 'deadObject'
				// this means `doc` and `save_link` are unusable and need to be recreated
				// `view` is usable though:
				doc = view.document;
				save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a");
				save_link.href = object_url;
				save_link.download = name;
				var event = doc.createEvent("MouseEvents");
				event.initMouseEvent(
					"click", true, false, view, 0, 0, 0, 0, 0
					, false, false, false, false, 0, null
				);
				save_link.dispatchEvent(event);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									deletion_queue.push(file);
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		}
	;
	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	view.addEventListener("unload", process_deletion_queue, false);
	saveAs.unload = function() {
		process_deletion_queue();
		view.removeEventListener("unload", process_deletion_queue, false);
	};
	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined") module.exports = saveAs;

if(typeof Object.create!=="function"){
Object.create=function(o){
function F(){
};
F.prototype=o;
return new F();
};
}
var ua={toString:function(){
return navigator.userAgent;
},test:function(s){
return this.toString().toLowerCase().indexOf(s.toLowerCase())>-1;
}};
ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1];
ua.webkit=ua.test("webkit");
ua.gecko=ua.test("gecko")&&!ua.webkit;
ua.opera=ua.test("opera");
ua.ie=ua.test("msie")&&!ua.opera;
ua.ie6=ua.ie&&document.compatMode&&typeof document.documentElement.style.maxHeight==="undefined";
ua.ie7=ua.ie&&document.documentElement&&typeof document.documentElement.style.maxHeight!=="undefined"&&typeof XDomainRequest==="undefined";
ua.ie8=ua.ie&&typeof XDomainRequest!=="undefined";
var domReady=function(){
var _1=[];
var _2=function(){
if(!arguments.callee.done){
arguments.callee.done=true;
for(var i=0;i<_1.length;i++){
_1[i]();
}
}
};
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",_2,false);
}
if(ua.ie){
(function(){
try{
document.documentElement.doScroll("left");
}
catch(e){
setTimeout(arguments.callee,50);
return;
}
_2();
})();
document.onreadystatechange=function(){
if(document.readyState==="complete"){
document.onreadystatechange=null;
_2();
}
};
}
if(ua.webkit&&document.readyState){
(function(){
if(document.readyState!=="loading"){
_2();
}else{
setTimeout(arguments.callee,10);
}
})();
}
window.onload=_2;
return function(fn){
if(typeof fn==="function"){
_1[_1.length]=fn;
}
return fn;
};
}();
var cssHelper=function(){
var _3={BLOCKS:/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,BLOCKS_INSIDE:/[^\s{][^{]*\{[^{}]*\}/g,DECLARATIONS:/[a-zA-Z\-]+[^;]*:[^;]+;/g,RELATIVE_URLS:/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,REDUNDANT_COMPONENTS:/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,REDUNDANT_WHITESPACE:/\s*(,|:|;|\{|\})\s*/g,MORE_WHITESPACE:/\s{2,}/g,FINAL_SEMICOLONS:/;\}/g,NOT_WHITESPACE:/\S+/g};
var _4,_5=false;
var _6=[];
var _7=function(fn){
if(typeof fn==="function"){
_6[_6.length]=fn;
}
};
var _8=function(){
for(var i=0;i<_6.length;i++){
_6[i](_4);
}
};
var _9={};
var _a=function(n,v){
if(_9[n]){
var _b=_9[n].listeners;
if(_b){
for(var i=0;i<_b.length;i++){
_b[i](v);
}
}
}
};
var _c=function(_d,_e,_f){
if(ua.ie&&!window.XMLHttpRequest){
window.XMLHttpRequest=function(){
return new ActiveXObject("Microsoft.XMLHTTP");
};
}
if(!XMLHttpRequest){
return "";
}
var r=new XMLHttpRequest();
try{
r.open("get",_d,true);
r.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest");
}
catch(e){
_f();
return;
}
var _10=false;
setTimeout(function(){
_10=true;
},5000);
document.documentElement.style.cursor="progress";
r.onreadystatechange=function(){
if(r.readyState===4&&!_10){
if(!r.status&&location.protocol==="file:"||(r.status>=200&&r.status<300)||r.status===304||navigator.userAgent.indexOf("Safari")>-1&&typeof r.status==="undefined"){
_e(r.responseText);
}else{
_f();
}
document.documentElement.style.cursor="";
r=null;
}
};
r.send("");
};
var _11=function(_12){
_12=_12.replace(_3.REDUNDANT_COMPONENTS,"");
_12=_12.replace(_3.REDUNDANT_WHITESPACE,"$1");
_12=_12.replace(_3.MORE_WHITESPACE," ");
_12=_12.replace(_3.FINAL_SEMICOLONS,"}");
return _12;
};
var _13={mediaQueryList:function(s){
var o={};
var idx=s.indexOf("{");
var lt=s.substring(0,idx);
s=s.substring(idx+1,s.length-1);
var mqs=[],rs=[];
var qts=lt.toLowerCase().substring(7).split(",");
for(var i=0;i<qts.length;i++){
mqs[mqs.length]=_13.mediaQuery(qts[i],o);
}
var rts=s.match(_3.BLOCKS_INSIDE);
if(rts!==null){
for(i=0;i<rts.length;i++){
rs[rs.length]=_13.rule(rts[i],o);
}
}
o.getMediaQueries=function(){
return mqs;
};
o.getRules=function(){
return rs;
};
o.getListText=function(){
return lt;
};
o.getCssText=function(){
return s;
};
return o;
},mediaQuery:function(s,mql){
s=s||"";
var not=false,_14;
var exp=[];
var _15=true;
var _16=s.match(_3.NOT_WHITESPACE);
for(var i=0;i<_16.length;i++){
var _17=_16[i];
if(!_14&&(_17==="not"||_17==="only")){
if(_17==="not"){
not=true;
}
}else{
if(!_14){
_14=_17;
}else{
if(_17.charAt(0)==="("){
var _18=_17.substring(1,_17.length-1).split(":");
exp[exp.length]={mediaFeature:_18[0],value:_18[1]||null};
}
}
}
}
return {getList:function(){
return mql||null;
},getValid:function(){
return _15;
},getNot:function(){
return not;
},getMediaType:function(){
return _14;
},getExpressions:function(){
return exp;
}};
},rule:function(s,mql){
var o={};
var idx=s.indexOf("{");
var st=s.substring(0,idx);
var ss=st.split(",");
var ds=[];
var dts=s.substring(idx+1,s.length-1).split(";");
for(var i=0;i<dts.length;i++){
ds[ds.length]=_13.declaration(dts[i],o);
}
o.getMediaQueryList=function(){
return mql||null;
};
o.getSelectors=function(){
return ss;
};
o.getSelectorText=function(){
return st;
};
o.getDeclarations=function(){
return ds;
};
o.getPropertyValue=function(n){
for(var i=0;i<ds.length;i++){
if(ds[i].getProperty()===n){
return ds[i].getValue();
}
}
return null;
};
return o;
},declaration:function(s,r){
var idx=s.indexOf(":");
var p=s.substring(0,idx);
var v=s.substring(idx+1);
return {getRule:function(){
return r||null;
},getProperty:function(){
return p;
},getValue:function(){
return v;
}};
}};
var _19=function(el){
if(typeof el.cssHelperText!=="string"){
return;
}
var o={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}};
var _1a=o.mediaQueryLists;
var ors=o.rules;
var _1b=el.cssHelperText.match(_3.BLOCKS);
if(_1b!==null){
for(var i=0;i<_1b.length;i++){
if(_1b[i].substring(0,7)==="@media "){
_1a[_1a.length]=_13.mediaQueryList(_1b[i]);
ors=o.rules=ors.concat(_1a[_1a.length-1].getRules());
}else{
ors[ors.length]=_13.rule(_1b[i]);
}
}
}
var oss=o.selectors;
var _1c=function(r){
var ss=r.getSelectors();
for(var i=0;i<ss.length;i++){
var n=ss[i];
if(!oss[n]){
oss[n]=[];
}
oss[n][oss[n].length]=r;
}
};
for(i=0;i<ors.length;i++){
_1c(ors[i]);
}
var ods=o.declarations;
for(i=0;i<ors.length;i++){
ods=o.declarations=ods.concat(ors[i].getDeclarations());
}
var ops=o.properties;
for(i=0;i<ods.length;i++){
var n=ods[i].getProperty();
if(!ops[n]){
ops[n]=[];
}
ops[n][ops[n].length]=ods[i];
}
el.cssHelperParsed=o;
_4[_4.length]=el;
return o;
};
var _1d=function(el,s){
el.cssHelperText=_11(s||el.innerHTML);
return _19(el);
};
var _1e=function(){
_5=true;
_4=[];
var _1f=[];
var _20=function(){
for(var i=0;i<_1f.length;i++){
_19(_1f[i]);
}
var _21=document.getElementsByTagName("style");
for(i=0;i<_21.length;i++){
_1d(_21[i]);
}
_5=false;
_8();
};
var _22=document.getElementsByTagName("link");
for(var i=0;i<_22.length;i++){
var _23=_22[i];
if(_23.getAttribute("rel").indexOf("style")>-1&&_23.href&&_23.href.length!==0&&!_23.disabled){
_1f[_1f.length]=_23;
}
}
if(_1f.length>0){
var c=0;
var _24=function(){
c++;
if(c===_1f.length){
_20();
}
};
var _25=function(_26){
var _27=_26.href;
_c(_27,function(_28){
_28=_11(_28).replace(_3.RELATIVE_URLS,"url("+_27.substring(0,_27.lastIndexOf("/"))+"/$1)");
_26.cssHelperText=_28;
_24();
},_24);
};
for(i=0;i<_1f.length;i++){
_25(_1f[i]);
}
}else{
_20();
}
};
var _29={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"};
var _2a={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null};
var _2b=function(_2c,v){
if(_2a[_2c]!==null){
if(_29[_2c]==="array"){
return (_2a[_2c]=_2a[_2c].concat(v));
}else{
var c=_2a[_2c];
for(var n in v){
if(v.hasOwnProperty(n)){
if(!c[n]){
c[n]=v[n];
}else{
c[n]=c[n].concat(v[n]);
}
}
}
return c;
}
}
};
var _2d=function(_2e){
_2a[_2e]=(_29[_2e]==="array")?[]:{};
for(var i=0;i<_4.length;i++){
_2b(_2e,_4[i].cssHelperParsed[_2e]);
}
return _2a[_2e];
};
domReady(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
els[i].checkedByCssHelper=true;
}
if(document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent){
document.body.addEventListener("DOMNodeInserted",function(e){
var el=e.target;
if(el.nodeType===1){
_a("DOMElementInserted",el);
el.checkedByCssHelper=true;
}
},false);
}else{
setInterval(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
if(!els[i].checkedByCssHelper){
_a("DOMElementInserted",els[i]);
els[i].checkedByCssHelper=true;
}
}
},1000);
}
});
var _2f=function(d){
if(typeof window.innerWidth!="undefined"){
return window["inner"+d];
}else{
if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){
return document.documentElement["client"+d];
}
}
};
return {addStyle:function(s,_30){
var el=document.createElement("style");
el.setAttribute("type","text/css");
document.getElementsByTagName("head")[0].appendChild(el);
if(el.styleSheet){
el.styleSheet.cssText=s;
}else{
el.appendChild(document.createTextNode(s));
}
el.addedWithCssHelper=true;
if(typeof _30==="undefined"||_30===true){
cssHelper.parsed(function(_31){
var o=_1d(el,s);
for(var n in o){
if(o.hasOwnProperty(n)){
_2b(n,o[n]);
}
}
_a("newStyleParsed",el);
});
}else{
el.parsingDisallowed=true;
}
return el;
},removeStyle:function(el){
return el.parentNode.removeChild(el);
},parsed:function(fn){
if(_5){
_7(fn);
}else{
if(typeof _4!=="undefined"){
if(typeof fn==="function"){
fn(_4);
}
}else{
_7(fn);
_1e();
}
}
},mediaQueryLists:function(fn){
cssHelper.parsed(function(_32){
fn(_2a.mediaQueryLists||_2d("mediaQueryLists"));
});
},rules:function(fn){
cssHelper.parsed(function(_33){
fn(_2a.rules||_2d("rules"));
});
},selectors:function(fn){
cssHelper.parsed(function(_34){
fn(_2a.selectors||_2d("selectors"));
});
},declarations:function(fn){
cssHelper.parsed(function(_35){
fn(_2a.declarations||_2d("declarations"));
});
},properties:function(fn){
cssHelper.parsed(function(_36){
fn(_2a.properties||_2d("properties"));
});
},broadcast:_a,addListener:function(n,fn){
if(typeof fn==="function"){
if(!_9[n]){
_9[n]={listeners:[]};
}
_9[n].listeners[_9[n].listeners.length]=fn;
}
},removeListener:function(n,fn){
if(typeof fn==="function"&&_9[n]){
var ls=_9[n].listeners;
for(var i=0;i<ls.length;i++){
if(ls[i]===fn){
ls.splice(i,1);
i-=1;
}
}
}
},getViewportWidth:function(){
return _2f("Width");
},getViewportHeight:function(){
return _2f("Height");
}};
}();
domReady(function enableCssMediaQueries(){
var _37;
var _38={LENGTH_UNIT:/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,RESOLUTION_UNIT:/[0-9]+(dpi|dpcm)$/,ASPECT_RATIO:/^[0-9]+\/[0-9]+$/,ABSOLUTE_VALUE:/^[0-9]*(\.[0-9]+)*$/};
var _39=[];
var _3a=function(){
var id="css3-mediaqueries-test";
var el=document.createElement("div");
el.id=id;
var _3b=cssHelper.addStyle("@media all and (width) { #"+id+" { width: 1px !important; } }",false);
document.body.appendChild(el);
var ret=el.offsetWidth===1;
_3b.parentNode.removeChild(_3b);
el.parentNode.removeChild(el);
_3a=function(){
return ret;
};
return ret;
};
var _3c=function(){
_37=document.createElement("div");
_37.style.cssText="position:absolute;top:-9999em;left:-9999em;"+"margin:0;border:none;padding:0;width:1em;font-size:1em;";
document.body.appendChild(_37);
if(_37.offsetWidth!==16){
_37.style.fontSize=16/_37.offsetWidth+"em";
}
_37.style.width="";
};
var _3d=function(_3e){
_37.style.width=_3e;
var _3f=_37.offsetWidth;
_37.style.width="";
return _3f;
};
var _40=function(_41,_42){
var l=_41.length;
var min=(_41.substring(0,4)==="min-");
var max=(!min&&_41.substring(0,4)==="max-");
if(_42!==null){
var _43;
var _44;
if(_38.LENGTH_UNIT.exec(_42)){
_43="length";
_44=_3d(_42);
}else{
if(_38.RESOLUTION_UNIT.exec(_42)){
_43="resolution";
_44=parseInt(_42,10);
var _45=_42.substring((_44+"").length);
}else{
if(_38.ASPECT_RATIO.exec(_42)){
_43="aspect-ratio";
_44=_42.split("/");
}else{
if(_38.ABSOLUTE_VALUE){
_43="absolute";
_44=_42;
}else{
_43="unknown";
}
}
}
}
}
var _46,_47;
if("device-width"===_41.substring(l-12,l)){
_46=screen.width;
if(_42!==null){
if(_43==="length"){
return ((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("device-height"===_41.substring(l-13,l)){
_47=screen.height;
if(_42!==null){
if(_43==="length"){
return ((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("width"===_41.substring(l-5,l)){
_46=document.documentElement.clientWidth||document.body.clientWidth;
if(_42!==null){
if(_43==="length"){
return ((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("height"===_41.substring(l-6,l)){
_47=document.documentElement.clientHeight||document.body.clientHeight;
if(_42!==null){
if(_43==="length"){
return ((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("device-aspect-ratio"===_41.substring(l-19,l)){
return _43==="aspect-ratio"&&screen.width*_44[1]===screen.height*_44[0];
}else{
if("color-index"===_41.substring(l-11,l)){
var _48=Math.pow(2,screen.colorDepth);
if(_42!==null){
if(_43==="absolute"){
return ((min&&_48>=_44)||(max&&_48<_44)||(!min&&!max&&_48===_44));
}else{
return false;
}
}else{
return _48>0;
}
}else{
if("color"===_41.substring(l-5,l)){
var _49=screen.colorDepth;
if(_42!==null){
if(_43==="absolute"){
return ((min&&_49>=_44)||(max&&_49<_44)||(!min&&!max&&_49===_44));
}else{
return false;
}
}else{
return _49>0;
}
}else{
if("resolution"===_41.substring(l-10,l)){
var res;
if(_45==="dpcm"){
res=_3d("1cm");
}else{
res=_3d("1in");
}
if(_42!==null){
if(_43==="resolution"){
return ((min&&res>=_44)||(max&&res<_44)||(!min&&!max&&res===_44));
}else{
return false;
}
}else{
return res>0;
}
}else{
return false;
}
}
}
}
}
}
}
}
};
var _4a=function(mq){
var _4b=mq.getValid();
var _4c=mq.getExpressions();
var l=_4c.length;
if(l>0){
for(var i=0;i<l&&_4b;i++){
_4b=_40(_4c[i].mediaFeature,_4c[i].value);
}
var not=mq.getNot();
return (_4b&&!not||not&&!_4b);
}
};
var _4d=function(mql){
var mqs=mql.getMediaQueries();
var t={};
for(var i=0;i<mqs.length;i++){
if(_4a(mqs[i])){
t[mqs[i].getMediaType()]=true;
}
}
var s=[],c=0;
for(var n in t){
if(t.hasOwnProperty(n)){
if(c>0){
s[c++]=",";
}
s[c++]=n;
}
}
if(s.length>0){
_39[_39.length]=cssHelper.addStyle("@media "+s.join("")+"{"+mql.getCssText()+"}",false);
}
};
var _4e=function(_4f){
for(var i=0;i<_4f.length;i++){
_4d(_4f[i]);
}
if(ua.ie){
document.documentElement.style.display="block";
setTimeout(function(){
document.documentElement.style.display="";
},0);
setTimeout(function(){
cssHelper.broadcast("cssMediaQueriesTested");
},100);
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
};
var _50=function(){
for(var i=0;i<_39.length;i++){
cssHelper.removeStyle(_39[i]);
}
_39=[];
cssHelper.mediaQueryLists(_4e);
};
var _51=0;
var _52=function(){
var _53=cssHelper.getViewportWidth();
var _54=cssHelper.getViewportHeight();
if(ua.ie){
var el=document.createElement("div");
el.style.position="absolute";
el.style.top="-9999em";
el.style.overflow="scroll";
document.body.appendChild(el);
_51=el.offsetWidth-el.clientWidth;
document.body.removeChild(el);
}
var _55;
var _56=function(){
var vpw=cssHelper.getViewportWidth();
var vph=cssHelper.getViewportHeight();
if(Math.abs(vpw-_53)>_51||Math.abs(vph-_54)>_51){
_53=vpw;
_54=vph;
clearTimeout(_55);
_55=setTimeout(function(){
if(!_3a()){
_50();
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
},500);
}
};
window.onresize=function(){
var x=window.onresize||function(){
};
return function(){
x();
_56();
};
}();
};
var _57=document.documentElement;
_57.style.marginLeft="-32767px";
setTimeout(function(){
_57.style.marginTop="";
},20000);
return function(){
if(!_3a()){
cssHelper.addListener("newStyleParsed",function(el){
_4e(el.cssHelperParsed.mediaQueryLists);
});
cssHelper.addListener("cssMediaQueriesTested",function(){
if(ua.ie){
_57.style.width="1px";
}
setTimeout(function(){
_57.style.width="";
_57.style.marginLeft="";
},0);
cssHelper.removeListener("cssMediaQueriesTested",arguments.callee);
});
_3c();
_50();
}else{
_57.style.marginLeft="";
}
_52();
};
}());
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}


/*
 * history API JavaScript Library v3.2.6
 *
 * Support: IE6+, FF3+, Opera 9+, Safari, Chrome, Firefox and other
 *
 * Copyright 2011-2013, Dmitrii Pakhtinov ( spb.piksel@gmail.com )
 *
 * http://spb-piksel.ru/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Update: 26-04-2013
 */
(function(d,w,r,j,V){function C(a,b,h,e){var c=Q(),d=k().a,g=h&&k(h),h=g?g.a:d;e&&c[d]&&delete c[d];if((!m||$)&&I&&a)c[h]=a,Q(c),a=j;W&&X?e?X.call(n,a,b,h):W.call(n,a,b,h):g&&g.d!=k().d&&(R=1,e?f.replace("#"+g.e):f.hash=g.e)}function J(a,b,h){var e=2===a?d.onhashchange:d.onpopstate,c=2===a?"hashchange":"popstate",o=p.createEvent?p.createEvent("Events"):p.createEventObject(),a={},g=x[c],f;for(f in o)a[f]="function"===typeof o[f]?function(){}:o[f];a.target=a.currentTarget=a.srcElement=d;a.type=c;a.state=
n.state;a.oldURL=b;a.newURL=h;e&&e.call(d,a);b=0;for(h=g.length;b<h;b++)g[b].call(d,a)}function Q(a){return I?a?I.setItem("__hitoryapi__",K(a)):S(I.getItem("__hitoryapi__"))||{}:{}}function T(a,b,h){var e=a,c,f=r;if(D||E)for(c in b){if(F.call(b,c))if(E)b[c].get&&E.call(a,c,b[c].get),b[c].set&&aa.call(a,c,b[c].set);else if(D)try{D(a,c,b[c])}catch(g){if(h)return r;f=w;break}}else f=w;if(f&&y){h="StaticClass"+ba+y++;e=["Class "+h];"execVB"in d||execScript("Function execVB(c) ExecuteGlobal(c) End Function",
"VBScript");"VBCVal"in d||execScript("Function VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function","VBScript");for(c in a)e[e.length]="Public ["+c+"]";F.call(a,"toString")&&(a.propertyIsEnumerable("toString")||(e[e.length]="Public [toString]"),b["(toString)"]={get:function(){return this.toString.call(this)}});for(c in b)if(F.call(b,c)&&(b[c].get&&(a["get "+c]=b[c].get,e.push("Public [get "+c+"]","Public "+("(toString)"===c?"Default ":"")+"Property Get ["+c+"]","Call VBCVal(me.[get "+
c+"].call(me),["+c+"])","End Property")),b[c].set))a["set "+c]=b[c].set,e.push("Public [set "+c+"]","Public Property Let ["+c+"](v)","Call me.[set "+c+"].call(me,v)","End Property","Public Property Set ["+c+"](v)","Call me.[set "+c+"].call(me,v)","End Property");e.push("End Class","Function "+h+"Factory()","Set "+h+"Factory=New "+h,"End Function");d.execVB(e.join("\n"));e=d[h+"Factory"]();for(c in a)e[c]=a[c];F.call(a,"toString")&&(e.toString=a.toString)}return e}var p=d.document,L=p.documentElement,
s=d.history||{},f=d.location,m=!!s.pushState,$=m&&s.state===V,u=f.href,v=d.JSON||{},D=Object.defineProperty,E=Object.prototype.__defineGetter__,aa=Object.prototype.__defineSetter__,W=s.pushState,X=s.replaceState,I=d.sessionStorage,F=Object.prototype.hasOwnProperty,ca=Object.prototype.toString,M=+((d.eval&&eval("/*@cc_on 1;@*/")&&/msie (\d+)/i.exec(navigator.userAgent)||[])[1]||0),ba=(new Date).getTime(),y=(D||E)&&(!M||8<M)?0:1,i=8>M?p.createElement("iframe"):r,z,G,H,A="",B=(z="addEventListener",d[z])||
(z="attachEvent",A="on",d[z]),da=(G="removeEventListener",d[G])||(G="detachEvent",d[G]),ea=(H="dispatchEvent",d[H])||(H="fireEvent",d[H]),N=[],Y=[],R=0,x={onpopstate:N,popstate:N,onhashchange:Y,hashchange:Y},q=function(){var a,b,d,e={basepath:"/",redirect:0,type:"/"};d=p.getElementsByTagName("SCRIPT");for(a=0;d[a];a++)if(b=/(.*)\/(?:history|spike)(?:\.iegte8)?(?:-\d\.\d(?:\.\d)?\w?)?(?:\.min)?.js\?(.*)$/i.exec(d[a].src)||a===d.length-1&&2===(b=d[a].src.split("?")).length&&(b[2]=b[1])&&b){a=0;for(d=
b[2].split("&");d[a];)b=d[a++].split("="),e[b[0]]="true"==b[1]?w:"false"==b[1]?r:b[1]||"";e.basepath=e.basepath||"/";break}return e}(),k=function(a){var b,d,e,c,o,g,t;return function(l,fa){var ga=RegExp("^"+q.basepath,"i");if(l){if(!m||M)var O=k(),i=O.f,j=O.i,l=/^(?:[\w0-9]+\:)?\/\//.test(l)?0===l.indexOf("/")?j+l:l:j+"//"+O.h+(0===l.indexOf("/")?l:0===l.indexOf("?")?i+l:0===l.indexOf("#")?i+O.g+l:i.replace(/[^\/]+$/g,"")+l)}else if(l=f.href,!m||fa)l=f.protocol+"//"+f.host+q.basepath+(l.replace(/^[^#]*/,
"")||"#").replace(RegExp("^#[/]?(?:"+q.type+")?"),"");if(b!==l){a.href=b=l;g=a.port;o=a.host;t=a.pathname;if("http:"===a.protocol&&80==g||"https:"===a.protocol&&443==g)o=a.hostname,g="";t=0===t.indexOf("/")?t:"/"+t;d=t+a.search+a.hash;c=t.replace(ga,q.type)+a.search;e=c+a.hash}return{a:a.protocol+"//"+o+d,i:a.protocol,h:o,j:a.hostname||f.hostname,k:g||f.port,f:t,g:a.search,b:a.hash,d:d,c:c,e:e}}}(p.createElement("a")),n=!y?s:{back:s.back,forward:s.forward,go:s.go,pushState:j,replaceState:j,emulate:!m,
toString:function(){return"[object History]"}},P={state:{get:function(){return i&&i.storage||Q()[n.location.href]||j}},length:{get:function(){return s.length}},location:{set:function(a){d.location=a},get:function(){return m?f:U}}},U={assign:function(a){f.assign(m||0!==a.indexOf("#")?a:"#"+k().c+a)},reload:f.reload,replace:function(a){f.replace(m||0!==a.indexOf("#")?a:"#"+k().c+a)},toString:function(){return this.href}},ha={href:{set:function(a){f.href=a},get:function(){return k().a}},protocol:{set:function(a){f.protocol=
a},get:function(){return f.protocol}},host:{set:function(a){f.host=a},get:function(){return f.host}},hostname:{set:function(a){f.hostname=a},get:function(){return f.hostname}},port:{set:function(a){f.port=a},get:function(){return f.port}},pathname:{set:function(a){f.pathname=a},get:function(){return k().f}},search:{set:function(a){f.search=a},get:function(){return k().g}},hash:{set:function(a){var a=0===a.indexOf("#")?a:"#"+a,b=k();i?a!=b.b&&(n.pushState(j,j,b.c+a),Z({oldURL:b.a})):f.hash="#"+b.c+
a},get:function(){return k().b}}},K=v.stringify||function(a){function b(e){var c,f,g;c=(typeof e).charCodeAt(2);if(114===c)e=d(e);else if(109===c)e=isFinite(e)?""+e:"null";else if(111===c||108===c)e=""+e;else if(106===c)if(e){f=(c="[object Array]"===ca.apply(e))?"[":"{";if(c)for(g=0;g<e.length;g++)f+=(0==g?"":",")+b(e[g]);else for(g in e)F.call(e,g)&&e[g]!==a&&(f+=(1==f.length?"":",")+d(g)+":"+b(e[g]));e=f+(c?"]":"}")}else e="null";else e=a;return e}function d(a){var b=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
f={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var b=f[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}return b}(),S=function(){var a=v.parse;return function(b){return b?a?a(b):(new Function("return "+b))():j}}(),Z=function(){function a(a){var b=k();if(R)return i=b.a,R=0;var d=a.oldURL||i,a=i=a.newURL||b.a,b=d.replace(/^.*?(#|$)/,""),e=a.replace(/^.*?(#|$)/,
"");d!=a&&!c&&J();u=c=0;b!=e&&J(2,d,a)}function b(){if(u&&!(u=0)&&g.d!==q.basepath)clearInterval(o),setTimeout(J,10)}var h=d.onpopstate||j,e=d.onhashchange||j,c=0,o=j,g=k(),i=g.a;B(A+"hashchange",a,r);B(A+"popstate",function(){if(u===f.href)return u=0;u=0;J(c=1)},r);n.redirect=function(a,b){q.type=a==j?q.type:a;q.basepath=b=b==j?q.basepath:b;if(d.top==d.self){var c=k(j,w).d,e=f.search,g=f.pathname;m?(c!=b&&RegExp("^"+b+"$","i").test(g)&&(f.href=c),RegExp("^"+b+"$","i").test(g+"/"))?f.href=b:RegExp("^"+
b,"i").test(g)||(f.href=g.replace(/^\//,b)+e):g!=b&&(f.href=b+"#"+g.replace(RegExp("^"+b,"i"),q.type)+e+f.hash)}};n=T(n,y?P:s.state===V?{state:P.state,location:P.location}:{location:P.location});U=T(U,ha);d[z]=function(a,d,c){x[a]?(x[a].push(d),!m&&N===x[a]&&b()):3<arguments.length?B(a,d,c,arguments[3]):B(a,d,c)};d[G]=function(a,b,d){var c=x[a];if(c)for(a=c.length;--a;){if(c[a]===b){c.splice(a,1);break}}else da(a,b,d)};d[H]=function(a,b){var c=x[a],e=c===N?d.onpopstate:d.onhashchange;if(c){b=b||("string"==
typeof a?d.event:a);try{b&&(b.target=d)}catch(f){try{b.srcElement=d}catch(g){}}e&&e.call(d,b);for(var e=0,h=c.length;e<h;e++)c[e].call(d,b);return w}return ea(a,b)};y&&execScript("Public history, onhashchange","VBScript");if((!D&&!E||!T(d,{onhashchange:{get:function(){return e},set:function(a){e=a||j}},onpopstate:{get:function(){return h},set:function(a){(h=a||j)&&!m&&b()}}},1))&&!m)o=setInterval(function(){d.onpopstate&&b()},100);q.redirect&&n.redirect();if(m)B(A+"load",function(){setTimeout(function(){u=
0},0)},r);else p[z](A+"click",function(a){var b=a||d.event,c=b.target||b.srcElement,a="defaultPrevented"in b?b.defaultPrevented:b.returnValue===r;if(c&&"A"===c.nodeName&&!a&&(a=k(c.getAttribute("href",2),w),a.b&&"#"!==a.b&&a.b===a.a.replace(k().a.split("#").shift(),""))){history.location.hash=a.b;a=a.b.replace(/^#/,"");if((c=p.getElementById(a))&&c.id===a&&"A"===c.nodeName)c=c.getBoundingClientRect(),d.scrollTo(L.scrollLeft||0,c.top+(L.scrollTop||0)-(L.clientTop||0));b.preventDefault?b.preventDefault():
b.returnValue=!1}},r);return a}();n.replaceState=function(a,b,d){C(a,b,d,1)};y?(d.history=n,function(a,b){if(i){var h,e=function(){var a=k().a;b!=a&&Z({oldURL:b,newURL:b=a})};h=setInterval(e,100);i.src="javascript:true;";i=L.firstChild.appendChild(i).contentWindow;C=function(a,c,d,l,j){var m=i.document,n=["<script>","lfirst=1;",,"storage="+K(a)+";","<\/script>"];if(d=d&&k(d)){j||clearInterval(h);if(l)i.lfirst?(history.back(),C(a,c,d.a,0,1)):(i.storage=a,f.replace("#"+d.e));else if(d.a!=b||j)i.lfirst||
(i.lfirst=1,C(i.storage,c,b,0,1)),n[2]='parent.location.hash="'+d.e.replace(/"/g,'\\"')+'";',m.open(),m.write(n.join("")),m.close();j||(b=k().a,h=setInterval(e,100))}else i.storage=a};B(A+"unload",function(){if(i.storage){var a={};a[k().a]=i.storage;p.cookie="_historyAPI="+escape(K(a))}clearInterval(h)},r);if(1<a.length){a=unescape(a.pop().split(";").shift());try{i.storage=S(a)[k().a]}catch(c){}}!v.parse&&!v.stringify&&(v.parse=S,v.stringify=K,d.JSON=v)}}(p.cookie.split("_historyAPI="),k().a)):d.history.emulate=
!m;n.pushState=C})(window,!0,!1,null);

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = "="; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length * chrsz));}
function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length * chrsz));}
function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length * chrsz));}
function hex_hmac_sha1(key, data){ return binb2hex(core_hmac_sha1(key, data));}
function b64_hmac_sha1(key, data){ return binb2b64(core_hmac_sha1(key, data));}
function str_hmac_sha1(key, data){ return binb2str(core_hmac_sha1(key, data));}

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha1_vm_test()
{
  return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function core_sha1(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);

}

/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}

/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function core_hmac_sha1(key, data)
{
  var bkey = str2binb(key);
  if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
  return core_sha1(opad.concat(hash), 512 + 160);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i%32);
  return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (32 - chrsz - i%32)) & mask);
  return str;
}

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
function binb2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./vendor/couchapp/_attachments/artendb.js":[function(require,module,exports){
window.adb = window.adb || {};

window.adb.erstelleTree = function() {
	'use strict';
	var level,
		gruppe,
		filter,
		id,
		jstree_erstellt = $.Deferred();
	$("#tree" + window.adb.Gruppe).jstree({
		"json_data": {
			ajax: {
				type: 'GET',
				url: function(node) {
					if (node == -1) {
						return window.adb.holeDatenUrlFürTreeOberstesLevel();
					} else {
						level = parseInt(node.attr('level'), 10) + 1;
						gruppe = node.attr('gruppe');
						if (node.attr('filter')) {
							filter = node.attr('filter').split(",");
							id = "";
						} else {
							filter = "";
							id = node.attr('id');
						}
						return window.adb.holeDatenUrlFürTreeUntereLevel(level, filter, gruppe, id);
					}
				},
				success: function(data) {
					//console.log("erstelleTree meldet: ajax success");
					return data;
				},
				error: function(data) {
					//console.log("erstelleTree meldet: ajax failure");
				}
			}
		},
		"ui": {
			"select_limit": 1,	// nur ein Datensatz kann aufs mal gewählt werden
			"selected_parent_open": true,	// wenn Code einen node wählt, werden alle parents geöffnet
			"select_prev_on_delete": true
		},
		"core": {
			"open_parents": true,	// wird ein node programmatisch geöffnet, öffnen sich alle parents
			"strings": {
				"loading": "hole Daten..."
			}
		},
		"sort": function(a, b) {
			return this.get_text(a) > this.get_text(b) ? 1 : -1;
		},
		"themes": {
			"icons": false
		},
		"plugins" : ["ui", "themes", "json_data", "sort"]
	})
	.bind("select_node.jstree", function(e, data) {
        'use strict';
		var node = data.rslt.obj;
		$.jstree._reference(node).open_node(node);
		if (node.attr("id")) {
			// verhindern, dass bereits offene Seiten nochmals geöffnet werden
			if (!$("#art").is(':visible') || localStorage.art_id !== node.attr("id")) {
				localStorage.art_id = node.attr("id");
				// Anzeige im Formular initiieren. ID und Datensammlung übergeben
				window.adb.initiiere_art(node.attr("id"));
			}
		}
	})
	.bind("loaded.jstree", function() {
        'use strict';
		jstree_erstellt.resolve();
		$("#suchen"+window.adb.Gruppe).css("display", "table");
		$("#treeMitteilung").hide();
		$("#tree" + window.adb.Gruppe).show();
		$("#tree" + window.adb.Gruppe + "Beschriftung").show();
		window.adb.setzeTreehöhe();
		window.adb.initiiereSuchfeld();
	})
	.bind("after_open.jstree", function() {
		window.adb.setzeTreehöhe();
	})
	.bind("after_close.jstree", function() {
		window.adb.setzeTreehöhe();
	});
	return jstree_erstellt.promise();
};

window.adb.holeDatenUrlFürTreeOberstesLevel = function() {
	'use strict';
	var gruppe,
        url;
	// wie sicherstellen, dass nicht dieselben nodes mehrmals angehängt werden?
	switch (window.adb.Gruppe) {
    case "Fauna":
        gruppe = "fauna";
        break;
    case "Flora":
        gruppe = "flora";
        break;
    case "Moose":
        gruppe = "moose";
        break;
    case "Macromycetes":
        gruppe = "macromycetes";
        break;
    case "Lebensräume":
        gruppe = "lr";
        break;
	}
	if (window.adb.Gruppe === "Lebensräume") {
		url = $(location).attr("protocol") + '//' + $(location).attr("host") + "/artendb/_design/artendb/_list/baum_lr/baum_lr?startkey=[1]&endkey=[1,{},{},{},{},{}]&group_level=6";
	} else {
		url = $(location).attr("protocol") + '//' + $(location).attr("host") + "/artendb/_design/artendb/_list/baum_"+gruppe+"/baum_"+gruppe+"?group_level=1";
	}
	return url;
};

window.adb.holeDatenUrlFürTreeUntereLevel = function(level, filter, gruppe, id) {
	'use strict';
	var startkey,
		// flag, um mitzuliefern, ob die id angezeigt werden soll
		id2 = false,
		endkey = [],
        a,
        url;
	if (filter) {
		// bei lr gibt es keinen filter und das erzeugt einen fehler
		startkey = filter.slice();
		endkey = filter.slice();
	}
	switch (gruppe) {
    case "fauna":
        if (level > 4) {
            return null;
        }
        for (a=5; a>=level; a--) {
            endkey.push({});
        }
        // im untersten level einen level mehr anzeigen, damit id vorhanden ist
        if (level === 4) {
            // das ist die Art-Ebene
            // hier soll die id angezeigt werden
            // dazu muss der nächste level abgerufen werden
            // damit die list den zu hohen level korrigieren kann, id mitgeben
            id2 = true;
            level++;
        }
        break;
    case "flora":
        if (level > 3) {
            return null;
        }
        for (a=4; a>=level; a--) {
            endkey.push({});
        }
        // im untersten level einen level mehr anzeigen, damit id vorhanden ist
        if (level === 3) {
            id2 = true;
            level++;
        }
        break;
    case "moose":
        if (level > 4) {
            return null;
        }
        for (a=5; a>=level; a--) {
            endkey.push({});
        }
        // im untersten level einen level mehr anzeigen, damit id vorhanden ist
        if (level === 4) {
            id2 = true;
            level++;
        }
        break;
    case "macromycetes":
        if (level > 2) {
            return null;
        }
        for (a=3; a>=level; a--) {
            endkey.push({});
        }
        // im untersten level einen level mehr anzeigen, damit id vorhanden ist
        if (level === 2) {
            id2 = true;
            level++;
        }
        break;
	}
	if (gruppe === "lr") {
		url = $(location).attr("protocol") + '//' + $(location).attr("host") + '/artendb/_design/artendb/_list/baum_lr/baum_lr?startkey=['+level+', "'+id+'"]&endkey=['+level+', "'+id+'",{},{},{},{}]&group_level=6';
	} else {
		url = $(location).attr("protocol") + '//' + $(location).attr("host") + "/artendb/_design/artendb/_list/baum_"+gruppe+"/baum_"+gruppe+"?startkey="+JSON.stringify(startkey)+"&endkey="+JSON.stringify(endkey)+"&group_level="+level;
	}
	if (id2) {
		url = url + "&id=true";
	}
	return url;
};

window.adb.initiiereSuchfeld = function() {
	'use strict';
	// zuerst mal die benötigten Daten holen
	var $db = $.couch.db("artendb");
	if (window.adb.Gruppe && window.adb.Gruppe === "Lebensräume") {
		if (window.adb.filtere_lr) {
			window.adb.initiiereSuchfeld_2();
		} else {
			var startkey = encodeURIComponent('["'+window.adb.Gruppe+'"]'),
				endkey = encodeURIComponent('["'+window.adb.Gruppe+'",{},{},{}]'),
				url = 'artendb/filtere_lr?startkey='+startkey+'&endkey=' + endkey;
			$db.view(url, {
				success: function(data) {
					window.adb.filtere_lr = data;
					window.adb.initiiereSuchfeld_2();
				}
			});
		}
	} else if (window.adb.Gruppe) {
		if (window.adb["filtere_art_" + window.adb.Gruppe.toLowerCase()]) {
			window.adb.initiiereSuchfeld_2();
		} else {
			$db.view('artendb/filtere_art?startkey=["'+window.adb.Gruppe+'"]&endkey=["'+window.adb.Gruppe+'",{}]', {
				success: function(data) {
					window.adb["filtere_art_" + window.adb.Gruppe.toLowerCase()] = data;
					window.adb.initiiereSuchfeld_2();
				}
			});
		}
	}
};

window.adb.initiiereSuchfeld_2 = function() {
	'use strict';
	var such_objekte;
	if (window.adb.Gruppe && window.adb.Gruppe === "Lebensräume") {
		such_objekte = window.adb.filtere_lr.rows;
	} else if (window.adb.Gruppe) {
		such_objekte = window.adb["filtere_art_" + window.adb.Gruppe.toLowerCase()].rows;
	}
	such_objekte = _.map(such_objekte, function(objekt) {
		return objekt.value;
	});

	$('#suchfeld' + window.adb.Gruppe).typeahead({
		name: window.adb.Gruppe,
		valueKey: 'Name',
		local: such_objekte,
		limit: 20
	})
	.on('typeahead:selected', function(e, datum) {
		window.adb.öffneBaumZuId(datum.id);
	});
	$("#suchfeld"+window.adb.Gruppe).focus();
};

// baut die Auswahlliste auf, mit der ein Parent ausgewählt werden soll
// bekommt die id des LR, von dem aus ein neuer LR erstellt werden soll
// In der Auswahlliste sollen nur LR aus derselben Taxonomie gewählt werden können
// plus man soll auch einen neue Taxonomie beginnen können
window.adb.initiiereLrParentAuswahlliste = function(taxonomie_name) {
	'use strict';
	// lr holen
	var $db = $.couch.db("artendb");
	$db.view('artendb/lr?include_docs=true', {
		success: function(lr) {
			var taxonomie_objekte, 
				object,
				neue_taxonomie,
				object_html,
				html = "",
				i;
			// reduzieren auf die LR der Taxonomie
			taxonomie_objekte = _.filter(lr.rows, function(row) {
				return row.doc.Taxonomie.Name === taxonomie_name;
			});
			// einen Array von Objekten schaffen mit id und Name
			taxonomie_objekte = _.map(taxonomie_objekte, function(row) {
				object = {};
				object.id = row.doc._id;
				if (row.doc.Taxonomie.Eigenschaften && row.doc.Taxonomie.Eigenschaften.Einheit) {
					if (row.doc.Taxonomie.Eigenschaften.Label) {
						object.Name = row.doc.Taxonomie.Eigenschaften.Label + ": " + row.doc.Taxonomie.Eigenschaften.Einheit;
					} else {
						object.Name = row.doc.Taxonomie.Eigenschaften.Einheit;
					}
					if (row.doc.Taxonomie.Eigenschaften.Hierarchie && row.doc.Taxonomie.Eigenschaften.Hierarchie.length === 1) {
						// das ist das oberste Objekt, soll auch zuoberst einsortiert werden
						// oft hat es als einziges keinen label und würde daher zuunterst sortiert!
						object.Sortier = "0";
					} else {
						// mittels Array sortieren
						object.Sortier = object.Name;
					}
				}
				return object;
			});
			// jetzt nach Name sortieren
			taxonomie_objekte = _.sortBy(taxonomie_objekte, function(objekt) {
				return objekt.Sortier;
			});
			neue_taxonomie = {};
			neue_taxonomie.id = 0;
			neue_taxonomie.Name = "Neue Taxonomie beginnen";
			// neueTaxonomie als erstes Objekt in den Array einfügen
			taxonomie_objekte.unshift(neue_taxonomie);

			// jetzt die Optionenliste für $("#lr_parent_waehlen_optionen") aufbauen
			for (i=0; i<taxonomie_objekte.length; i++) {
				object_html = '';
				if (i === 1) {
					object_html += '<p>...oder den hierarchisch übergeordneten Lebensraum wählen:</p>';
				}
				object_html += '<div class="radio"><label>';
				object_html += '<input type="radio" name="parent_optionen" id="';
				object_html += taxonomie_objekte[i].id;
				object_html += '" value="';
				object_html += taxonomie_objekte[i].Name;
				object_html += '">';
				object_html += taxonomie_objekte[i].Name;
				object_html += '</label></div>';
				html += object_html;
			}
			$("#lr_parent_waehlen_optionen").html(html);
			// jetzt das modal aufrufen
			// höhe Anpassen funktioniert leider nicht über css mit calc
			$('#lr_parent_waehlen').modal();
			$('#lr_parent_waehlen_optionen').css('max-height', $(window).height()-100);
		}
	});
};

window.adb.öffneBaumZuId = function(id) {
	'use strict';
	// Hierarchie der id holen
	var $db = $.couch.db("artendb");
	$db.openDoc(id, {
		success: function(objekt) {
            var $filter_klasse = $("[filter='" + objekt.Taxonomie.Eigenschaften.Klasse + "']"),
                $art_anmelden = $("#art_anmelden");
			switch (objekt.Gruppe) {
            case "Fauna":
                // von oben nach unten die jeweils richtigen nodes öffnen, zuletzt selektieren
                // oberste Ebene aufbauen nicht nötig, die gibt es schon
                $.jstree._reference("#treeFauna").open_node($filter_klasse, function() {
                    $.jstree._reference("#treeFauna").open_node($("[filter='" + objekt.Taxonomie.Eigenschaften.Klasse + "," + objekt.Taxonomie.Eigenschaften.Ordnung + "']"), function() {
                        $.jstree._reference("#treeFauna").open_node($("[filter='" + objekt.Taxonomie.Eigenschaften.Klasse + "," + objekt.Taxonomie.Eigenschaften.Ordnung + ","+objekt.Taxonomie.Eigenschaften.Familie+"']"), function() {
                            $.jstree._reference("#treeFauna").select_node($("#" + objekt._id), function() {}, false);
                        }, true);
                    }, true);
                }, true);
                // Anmeldung verstecken, wenn nicht Lebensräume
                $art_anmelden.hide();
                break;
            case "Flora":
                // von oben nach unten die jeweils richtigen nodes öffnen, zuletzt selektieren
                // oberste Ebene aufbauen nicht nötig, die gibt es schon
                $.jstree._reference("#treeFlora").open_node($("[filter='" + objekt.Taxonomie.Eigenschaften.Familie + "']"), function() {
                    $.jstree._reference("#treeFlora").open_node($("[filter='" + objekt.Taxonomie.Eigenschaften.Familie + "," + objekt.Taxonomie.Eigenschaften.Gattung + "']"), function() {
                        $.jstree._reference("#treeFlora").select_node($("#" + objekt._id), function() {}, false);
                    }, true);
                }, true);
                // Anmeldung verstecken, wenn nicht Lebensräume
                $art_anmelden.hide();
                break;
            case "Moose":
                // von oben nach unten die jeweils richtigen nodes öffnen, zuletzt selektieren
                // oberste Ebene aufbauen nicht nötig, die gibt es schon
                $.jstree._reference("#treeMoose").open_node($filter_klasse, function() {
                    $.jstree._reference("#treeMoose").open_node($("[filter='"+objekt.Taxonomie.Eigenschaften.Klasse+","+objekt.Taxonomie.Eigenschaften.Familie+"']"), function() {
                        $.jstree._reference("#treeMoose").open_node($("[filter='"+objekt.Taxonomie.Eigenschaften.Klasse+","+objekt.Taxonomie.Eigenschaften.Familie+","+objekt.Taxonomie.Eigenschaften.Gattung+"']"), function() {
                            $.jstree._reference("#treeMoose").select_node($("#"+objekt._id), function() {}, false);
                        }, true);
                    }, true);
                }, true);
                // Anmeldung verstecken, wenn nicht Lebensräume
                $art_anmelden.hide();
                break;
            case "Macromycetes":
                // von oben nach unten die jeweils richtigen nodes öffnen, zuletzt selektieren
                // oberste Ebene aufbauen nicht nötig, die gibt es schon
                $.jstree._reference("#treeMacromycetes").open_node($("[filter='"+objekt.Taxonomie.Eigenschaften.Gattung+"']"), function() {
                    $.jstree._reference("#treeMacromycetes").select_node($("#"+objekt._id), function() {}, false);
                }, true);
                // Anmeldung verstecken, wenn nicht Lebensräume
                $art_anmelden.hide();
                break;
            case "Lebensräume":
                var id_array = [];
                for (var i=0; i<objekt.Taxonomie.Eigenschaften.Hierarchie.length; i++) {
                    id_array.push(objekt.Taxonomie.Eigenschaften.Hierarchie[i].GUID);
                }
                window.adb.oeffneNodeNachIdArray(id_array);
                break;
			}
		}
	});
};

// läuft von oben nach unten durch die Hierarchie der Lebensräume
// ruft sich selber wieder auf, wenn ein tieferer level existiert
// erwartet idArray: einen Array der GUID's aus der Hierarchie des Objekts
window.adb.oeffneNodeNachIdArray = function(idArray) {
	'use strict';
	if (idArray.length > 1) {
		$.jstree._reference("#tree" + window.adb.Gruppe).open_node($("#"+idArray[0]), function() {
			idArray.splice(0,1);
			window.adb.oeffneNodeNachIdArray(idArray);
		}, false);
	} else if (idArray.length === 1) {
		$.jstree._reference("#tree" + window.adb.Gruppe).select_node($("#"+idArray[0]),function() {}, true);
	}
};

window.adb.initiiere_art = function(id) {
	'use strict';
	var $db = $.couch.db("artendb");
	$db.openDoc(id, {
		success: function(art) {
			var html_art,
				art_eigenschaftensammlungen = art.Eigenschaftensammlungen,
				art_beziehungssammlungen = [],
				taxonomische_beziehungssammlungen = [],
				len,
				guids_von_synonymen = [],
				eigenschaftensammlungen_von_synonymen = [],
				beziehungssammlungen_von_synonymen = [],
				a, f, h, i, k, x,
				ds_namen = [],
				bez_namen = [];
			// panel beginnen
			html_art = '<h4>Taxonomie:</h4>';
			// zuerst alle Datensammlungen auflisten, damit danach sortiert werden kann
			// gleichzeitig die Taxonomie suchen und gleich erstellen lassen
			html_art += window.adb.erstelleHtmlFürDatensammlung("Taxonomie", art, art.Taxonomie);
			// Datensammlungen muss nicht gepusht werden
			// aber Beziehungssammlungen aufteilen
			if (art.Beziehungssammlungen.length > 0) {
                _.each(art.Beziehungssammlungen, function(beziehungssammlung) {
                    if (typeof beziehungssammlung.Typ === "undefined") {
                        art_beziehungssammlungen.push(beziehungssammlung);
                        // bezNamen auflisten, um später zu vergleichen, ob diese DS schon dargestellt wird
                        bez_namen.push(beziehungssammlung.Name);
                    } else if (beziehungssammlung.Typ === "taxonomisch") {
                        taxonomische_beziehungssammlungen.push(beziehungssammlung);
                        // bezNamen auflisten, um später zu vergleichen, ob diese DS schon dargestellt wird
                        bez_namen.push(beziehungssammlung.Name);
                    }
                });
			}
			// taxonomische Beziehungen in gewollter Reihenfolge hinzufügen
			if (taxonomische_beziehungssammlungen.length > 0) {
				// Titel hinzufügen, falls Datensammlungen existieren
				html_art += "<h4>Taxonomische Beziehungen:</h4>";
                _.each(taxonomische_beziehungssammlungen, function(beziehungssammlung) {
                    // HTML für Datensammlung erstellen lassen und hinzufügen
                    html_art += window.adb.erstelleHtmlFürBeziehungssammlung(art, beziehungssammlung, "");
                    if (beziehungssammlung["Art der Beziehungen"] && beziehungssammlung["Art der Beziehungen"] === "synonym" && beziehungssammlung.Beziehungen) {
                        _.each(beziehungssammlung.Beziehungen, function(beziehung) {
                            if (beziehung.Beziehungspartner) {
                                _.each(beziehung.Beziehungspartner, function(beziehungspartner) {
                                    if (beziehungspartner.GUID) {
                                        guids_von_synonymen.push(beziehungspartner.GUID);
                                    }
                                });
                            }
                        });
                    }
                });
			}
			// Datensammlungen in gewollter Reihenfolge hinzufügen
			if (art_eigenschaftensammlungen.length > 0) {
				// Datensammlungen nach Name sortieren
				/*ausgeschaltet, um Tempo zu gewinnen, Daten sind eh sortiert
				Datensammlungen = window.adb.sortiereObjektarrayNachName(Datensammlungen);*/
				// Titel hinzufügen
				html_art += "<h4>Eigenschaften:</h4>";
                _.each(art_eigenschaftensammlungen, function(datensammlung) {
                    // HTML für Datensammlung erstellen lassen und hinzufügen
                    html_art += window.adb.erstelleHtmlFürDatensammlung("Datensammlung", art, datensammlung);
                    // dsNamen auflisten, um später zu vergleichen, ob sie schon dargestellt wird
                    ds_namen.push(datensammlung.Name);
                });
			}
			// Beziehungen hinzufügen
			if (art_beziehungssammlungen.length > 0) {
				// Titel hinzufügen
				html_art += "<h4>Beziehungen:</h4>";
                _.each(art_beziehungssammlungen, function(beziehungssammlung) {
                    // HTML für Datensammlung erstellen lassen und hinzufügen
                    html_art += window.adb.erstelleHtmlFürBeziehungssammlung(art, beziehungssammlung, "");
                });
			}
			// Beziehungssammlungen von synonymen Arten
			if (guids_von_synonymen.length > 0) {
				$db = $.couch.db("artendb");
				$db.view('artendb/all_docs?keys=' + encodeURI(JSON.stringify(guids_von_synonymen)) + '&include_docs=true', {
					success: function(data) {
						var synonyme_art;
                        _.each(data.rows, function(data_row) {
                            synonyme_art = data_row.doc;
                            if (synonyme_art.Eigenschaftensammlungen && synonyme_art.Eigenschaftensammlungen.length > 0) {
                                _.each(synonyme_art.Eigenschaftensammlungen, function(eigenschaftensammlungen) {
                                    if (ds_namen.indexOf(eigenschaftensammlungen.Name) === -1) {
                                        // diese Datensammlung wird noch nicht dargestellt
                                        eigenschaftensammlungen_von_synonymen.push(eigenschaftensammlungen);
                                        // auch in dsNamen pushen, damit beim nächsten Vergleich mit berücksichtigt
                                        ds_namen.push(eigenschaftensammlungen.Name);
                                        // auch in Datensammlungen ergänzen, weil die Darstellung davon abhängt, ob eine DS existiert
                                        art_eigenschaftensammlungen.push(eigenschaftensammlungen);
                                    }
                                });
                            }
                            if (synonyme_art.Beziehungssammlungen && synonyme_art.Beziehungssammlungen.length > 0) {
                                _.each(synonyme_art.Beziehungssammlungen, function(beziehungssammlung) {
                                    if (bez_namen.indexOf(beziehungssammlung.Name) === -1 && beziehungssammlung["Art der Beziehungen"] !== "synonym" && beziehungssammlung.Typ !== "taxonomisch") {
                                        // diese Beziehungssammlung wird noch nicht dargestellt
                                        // und sie ist nicht taxonomisch
                                        beziehungssammlungen_von_synonymen.push(beziehungssammlung);
                                        // auch in bezNamen pushen, damit beim nächsten Vergleich mit berücksichtigt
                                        bez_namen.push(beziehungssammlung.Name);
                                        // auch in Beziehungssammlungen ergänzen, weil die Darstellung davon abhängt, ob eine DS existiert
                                        art_beziehungssammlungen.push(beziehungssammlung);
                                    } else if (beziehungssammlung["Art der Beziehungen"] !== "synonym" && beziehungssammlung.Typ !== "taxonomisch") {
                                        // diese Beziehungssammlung wird schon dargestellt
                                        // kann aber sein, dass beim Synonym Beziehungen existieren, welche noch nicht dargestellt werden
                                        var bs_der_synonymen_art = beziehungssammlung,
                                            bs_der_originalart = _.find(art.Beziehungssammlungen, function(beziehungssammlung) {
                                                return beziehungssammlung.Name === bs_der_synonymen_art.Name;
                                            });

                                        if (bs_der_synonymen_art.Beziehungen && bs_der_synonymen_art.Beziehungen.length > 0 && bs_der_originalart && bs_der_originalart.Beziehungen && bs_der_originalart.Beziehungen.length > 0) {
                                            // Beide Arten haben in derselben Beziehungssammlung Beziehungen
                                            // in der Originalart vorhandene Beziehungen aus dem Synonym entfernen
                                            bs_der_synonymen_art.Beziehungen = _.reject(bs_der_synonymen_art.Beziehungen, function(beziehung_des_synonyms) {
                                                // suche in Beziehungen der Originalart eine mit denselben Beziehungspartnern
                                                var beziehung_der_originalart = _.find(bs_der_originalart.Beziehungen, function(beziehung_origart) {
                                                    //return _.isEqual(beziehung_des_synonyms, beziehung_origart);  Wieso funktioniert das nicht?
                                                    if (beziehung_des_synonyms.Beziehungspartner.length > 0 && beziehung_origart.Beziehungspartner.length > 0) {
                                                        return beziehung_des_synonyms.Beziehungspartner[0].GUID === beziehung_origart.Beziehungspartner[0].GUID;
                                                    } else {
                                                        return false;
                                                    }
                                                });
                                                return !!beziehung_der_originalart;
                                            });
                                        }
                                        if (bs_der_synonymen_art.Beziehungen.length > 0) {
                                            // falls noch darzustellende Beziehungen verbleiben, die DS pushen
                                            beziehungssammlungen_von_synonymen.push(bs_der_synonymen_art);
                                        }
                                    }
                                });
                            }
                        });
						// BS von Synonymen darstellen
						if (eigenschaftensammlungen_von_synonymen.length > 0) {
							// DatensammlungenVonSynonymen nach Name sortieren
							eigenschaftensammlungen_von_synonymen = window.adb.sortiereObjektarrayNachName(eigenschaftensammlungen_von_synonymen);
							// Titel hinzufügen
							html_art += "<h4>Eigenschaften von Synonymen:</h4>";
                            _.each(eigenschaftensammlungen_von_synonymen, function(datesammlung) {
                                // HTML für Datensammlung erstellen lassen und hinzufügen
                                html_art += window.adb.erstelleHtmlFürDatensammlung("Datensammlung", art, datesammlung);
                            });
						}
						// bez von Synonymen darstellen
						if (beziehungssammlungen_von_synonymen.length > 0) {
							// BeziehungssammlungenVonSynonymen sortieren
							beziehungssammlungen_von_synonymen = window.adb.sortiereObjektarrayNachName(beziehungssammlungen_von_synonymen);
							// Titel hinzufügen
							html_art += "<h4>Beziehungen von Synonymen:</h4>";
                            _.each(beziehungssammlungen_von_synonymen, function(beziehungssammlung) {
                                // HTML für Beziehung erstellen lassen und hinzufügen. Dritten Parameter mitgeben, damit die DS in der UI nicht gleich heisst
                                html_art += window.adb.erstelleHtmlFürBeziehungssammlung(art, beziehungssammlung, "2");
                            });
						}
						window.adb.initiiere_art_2(html_art, art);
					}
				});
			} else {
				window.adb.initiiere_art_2(html_art, art);
			}
		},
		error: function() {
			//melde("Fehler: Art konnte nicht geöffnet werden");
		}
	});
};

window.adb.initiiere_art_2 = function(html_art, art) {
	'use strict';
	// panel beenden
	$("#art_inhalt").html(html_art);
	// richtiges Formular anzeigen
	window.adb.zeigeFormular("art");
	// Anmeldung soll nur kurzfristig sichtbar sein, wenn eine Anmeldung erfolgen soll
	$("#art_anmelden").hide();
	// Wenn nur eine Datensammlung (die Taxonomie) existiert, diese öffnen
	if (art.Eigenschaftensammlungen.length === 0 && art.Beziehungssammlungen.length === 0) {
		$('.panel-collapse.Taxonomie').each(function() {
			$(this).collapse('show');
		});
	}
	// jetzt die Links im Menu setzen
	// wird zwar in zeigeFormular schon gemacht
    // trotzdem nötig, weil dort erst mal leere links gesetzt werden
    // hier wird die url angefügt
	window.adb.setzteLinksZuBilderUndWikipedia(art);
	// und die URL anpassen
	history.pushState(null, null, "index.html?id=" + art._id);
};

// erstellt die HTML für eine Beziehung
// benötigt von der art bzw. den lr die entsprechende Beziehungssammlung
// altName ist für Beziehungssammlungen von Synonymen: Hier kann dieselbe DS zwei mal vorkommen und sollte nicht gleich heissen, sonst geht nur die erste auf
window.adb.erstelleHtmlFürBeziehungssammlung = function(art, beziehungssammlung, alt_name) {
	'use strict';
	var html,
		name,
		bs_name = window.adb.ersetzeUngültigeZeichenInIdNamen(beziehungssammlung.Name) + alt_name;

	// Accordion-Gruppe und -heading anfügen
	html = '<div class="panel panel-default"><div class="panel-heading panel-heading-gradient"><h4 class="panel-title">';
	// die id der Gruppe wird mit dem Namen der Datensammlung gebildet. Hier müssen aber leerzeichen entfernt werden
	html += '<a class="Datensammlung accordion-toggle" data-toggle="collapse" data-parent="#panel_art" href="#collapse' + bs_name + '">';
	// Titel für die Datensammlung einfügen
	html += beziehungssammlung.Name + " (" + beziehungssammlung.Beziehungen.length + ")";
	// header abschliessen
	html += '</a></h4></div>';
	// body beginnen
	html += '<div id="collapse' + bs_name + '" class="panel-collapse collapse"><div class="panel-body">';

	// Datensammlung beschreiben
    html += window.adb.erstelleHtmlFürDatensammlungBeschreibung(beziehungssammlung);

	// die Beziehungen sortieren
	beziehungssammlung.Beziehungen = window.adb.sortiereBeziehungenNachName(beziehungssammlung.Beziehungen);

	// jetzt für alle Beziehungen die Felder hinzufügen
    _.each(beziehungssammlung.Beziehungen, function(beziehung, index) {
        if (beziehung.Beziehungspartner && beziehung.Beziehungspartner.length > 0) {
            _.each(beziehung.Beziehungspartner, function(beziehungspartner) {
                if (beziehungspartner.Taxonomie) {
                    name = beziehungspartner.Gruppe + ": " + beziehungspartner.Taxonomie + " > " + beziehungspartner.Name;
                } else {
                    name = beziehungspartner.Gruppe + ": " + beziehungspartner.Name;
                }
                // Partner darstellen
                if (beziehungspartner.Rolle) {
                    // Feld soll mit der Rolle beschriftet werden
                    html += window.adb.generiereHtmlFürObjektlink(beziehungspartner.Rolle, name, $(location).attr("protocol") + '//' + $(location).attr("host") + $(location).attr("pathname") + '?id=' + beziehungspartner.GUID);
                } else {
                    html += window.adb.generiereHtmlFürObjektlink("Beziehungspartner", name, $(location).attr("protocol") + '//' + $(location).attr("host") + $(location).attr("pathname") + '?id=' + beziehungspartner.GUID);
                }
            });
        }
        // Die Felder anzeigen
        _.each(beziehung, function(feldwert, feldname) {
            if (feldname !== "Beziehungspartner") {
                html += window.adb.erstelleHtmlFürFeld(feldname, feldwert, "Beziehungssammlung", beziehungssammlung.Name.replace(/"/g, "'"));
            }
        });
        // Am Schluss eine Linie, nicht aber bei der letzten Beziehung
        if (index < (beziehungssammlung.Beziehungen.length-1)) {
            html += "<hr>";
        }
    });
	// body und Accordion-Gruppe abschliessen
	html += '</div></div></div>';
	return html;
};

// erstellt die HTML für eine Datensammlung
// benötigt von der art bzw. den lr die entsprechende Datensammlung
window.adb.erstelleHtmlFürDatensammlung = function(ds_typ, art, datensammlung) {
	'use strict';
	var html_datensammlung,
		hierarchie_string,
		array_string,
		ds_name;
	ds_name = window.adb.ersetzeUngültigeZeichenInIdNamen(datensammlung.Name);
	// Accordion-Gruppe und -heading anfügen
	html_datensammlung = '<div class="panel panel-default"><div class="panel-heading panel-heading-gradient">';
	// bei LR: Symbolleiste einfügen
	if (art.Gruppe === "Lebensräume" && ds_typ === "Taxonomie") {
		html_datensammlung += '<div class="btn-toolbar bearb_toolbar"><div class="btn-group btn-group-sm"><button type="button" class="btn btn-default lr_bearb lr_bearb_bearb" data-toggle="tooltip" title="bearbeiten"><i class="glyphicon glyphicon-pencil"></i></button><button type="button" class="btn btn-default lr_bearb lr_bearb_schuetzen disabled" title="schützen"><i class="glyphicon glyphicon-ban-circle"></i></button><button type="button" class="btn btn-default lr_bearb lr_bearb_neu disabled" title="neuer Lebensraum"><i class="glyphicon glyphicon-plus"></i></button><button type="button" data-toggle="modal" data-target="#rueckfrage_lr_loeschen" class="btn btn-default lr_bearb lr_bearb_loeschen disabled" title="Lebensraum löschen"><i class="glyphicon glyphicon-trash"></i></button></div></div>';
	}
	// die id der Gruppe wird mit dem Namen der Datensammlung gebildet. Hier müssen aber leerzeichen entfernt werden
	html_datensammlung += '<h4 class="panel-title"><a class="Datensammlung accordion-toggle" data-toggle="collapse" data-parent="#panel_art" href="#collapse' + ds_name + '">';
	// Titel für die Datensammlung einfügen
	html_datensammlung += datensammlung.Name;
	// header abschliessen
	html_datensammlung += '</a></h4></div>';
	// body beginnen
	html_datensammlung += '<div id="collapse' + ds_name + '" class="panel-collapse collapse ' + art.Gruppe + ' ' + ds_typ + '"><div class="panel-body">';
	// Datensammlung beschreiben
    html_datensammlung += window.adb.erstelleHtmlFürDatensammlungBeschreibung(datensammlung);
	// Felder anzeigen
	// zuerst die GUID, aber nur bei der Taxonomie
	if (ds_typ === "Taxonomie") {
		html_datensammlung += window.adb.erstelleHtmlFürFeld("GUID", art._id, ds_typ, "Taxonomie");
	}
    _.each(datensammlung.Eigenschaften, function(feldwert, feldname) {
        if (feldname === "GUID") {
            // dieses Feld nicht anzeigen. Es wird _id verwendet
            // dieses Feld wird künftig nicht mehr importiert
        } else if (((feldname === "Offizielle Art" || feldname === "Eingeschlossen in" || feldname === "Synonym von") && art.Gruppe === "Flora") || (feldname === "Akzeptierte Referenz" && art.Gruppe === "Moose")) {
            // dann den Link aufbauen lassen
            html_datensammlung += window.adb.generiereHtmlFürLinkZuGleicherGruppe(feldname, art._id, feldwert.Name);
        } else if ((feldname === "Gültige Namen" || feldname === "Eingeschlossene Arten" || feldname === "Synonyme") && art.Gruppe === "Flora") {
            // das ist ein Array von Objekten
            html_datensammlung += window.adb.generiereHtmlFürLinksZuGleicherGruppe(feldname, feldwert);
        } else if ((feldname === "Artname" && art.Gruppe === "Flora") || (feldname === "Parent" && art.Gruppe === "Lebensräume")) {
            // dieses Feld nicht anzeigen
        } else if (feldname === "Hierarchie" && art.Gruppe === "Lebensräume" && _.isArray(feldwert)) {
            // Namen kommagetrennt anzeigen
            hierarchie_string = window.adb.erstelleHierarchieFürFeldAusHierarchieobjekteArray(feldwert);
            html_datensammlung += window.adb.generiereHtmlFürTextarea(feldname, hierarchie_string, ds_typ, datensammlung.Name.replace(/"/g, "'"));
        } else if (_.isArray(feldwert)) {
            // dieses Feld enthält einen Array von Werten
            array_string = feldwert.toString();
            html_datensammlung += window.adb.generiereHtmlFürTextarea(feldname, array_string, ds_typ, datensammlung.Name.replace(/"/g, "'"));
        } else {
            html_datensammlung += window.adb.erstelleHtmlFürFeld(feldname, feldwert, ds_typ, datensammlung.Name.replace(/"/g, "'"));
        }
    });
	// body und Accordion-Gruppe abschliessen
	html_datensammlung += '</div></div></div>';
	return html_datensammlung;
};

window.adb.erstelleHtmlFürDatensammlungBeschreibung = function(es_oder_bs) {
	'use strict';
    var html = '<div class="Datensammlung BeschreibungDatensammlung">';
    if (es_oder_bs.Beschreibung) {
        html += es_oder_bs.Beschreibung;
    }
    // wenn weitere Infos kommen: diese können wahlweise eingeblendet werden
    if (es_oder_bs.Datenstand || es_oder_bs.Link || (es_oder_bs.zusammenfassend && es_oder_bs.Ursprungsdatensammlung)) {
        // wenn keine Beschreibung existiert, andere Option einblenden
        if (es_oder_bs.Beschreibung) {
            html += ' <a href="#" class="show_next_hidden">...mehr</a>';
        } else {
            // wenn keine Beschreibung existiert, andere Option einblenden
            html += '<a href="#" class="show_next_hidden">Beschreibung der Datensammlung anzeigen</a>';
        }
        html += '<div class="adb-hidden">';
        if (es_oder_bs.Datenstand) {
            html += '<div class="ds_beschreibung_zeile">';
            html += '<div>Stand: </div>';
            html += '<div>' + es_oder_bs.Datenstand + '</div>';
            html += '</div>';
        }
        if (es_oder_bs.Link) {
            html += '<div class="ds_beschreibung_zeile">';
            html += '<div>Link: </div>';
            html += '<div>' + Autolinker.link(es_oder_bs.Link) + '</div>';
            html += '</div>';
        }
        if (es_oder_bs["importiert von"]) {
            html += '<div class="ds_beschreibung_zeile">';
            html += '<div>Importiert von: </div>';
            html += '<div>' + Autolinker.link(es_oder_bs["importiert von"]) + '</div>';
            html += '</div>';
        }
        if (es_oder_bs.zusammenfassend && es_oder_bs.Ursprungsdatensammlung) {
            html += '<div class="ds_beschreibung_zeile">';
            html += '<div>Zus.-fassend:</div>';
            html += '<div>Diese Datensammlung fasst die Daten mehrerer Eigenschaftensammlungen in einer zusammen.<br>Die angezeigten Informationen stammen aus der Eigenschaftensammlung "' + es_oder_bs.Ursprungsdatensammlung + '"</div>';
            html += '</div>';
        } else if (es_oder_bs.zusammenfassend && !es_oder_bs.Ursprungsdatensammlung) {
            html += '<div class="ds_beschreibung_zeile">';
            html += '<div>Zus.-fassend:</div>';
            html += '<div>Diese Datensammlung fasst die Daten mehrerer Eigenschaftensammlungen in einer zusammen.<br>Bei den angezeigten Informationen ist die Ursprungs-Eigenschaftensammlung leider nicht beschrieben</div>';
            html += '</div>';
        }
        // zusätzliche Infos abschliessen
        html += '</div>';
    }
    // Beschreibung der Datensammlung abschliessen
    html += '</div>';
    return html;
};

window.adb.erstelleHierarchieFürFeldAusHierarchieobjekteArray = function(hierarchie_array) {
	'use strict';
	if (!_.isArray(hierarchie_array)) {
		return "";
	}
	// Namen kommagetrennt anzeigen
	var hierarchie_string = "";
    _.each(hierarchie_array, function(hierarchie_objekt, index) {
        if (index > 0) {
            hierarchie_string += "\n";
        }
        hierarchie_string += hierarchie_objekt.Name;
    });
	return hierarchie_string;
};

// übernimmt Feldname und Feldwert
// generiert daraus und retourniert html für die Darstellung im passenden Feld
window.adb.erstelleHtmlFürFeld = function(feldname, feldwert, ds_typ, ds_name) {
	'use strict';
	var html_datensammlung = "";
	if ((typeof feldwert === "string" && feldwert.slice(0, 7) === "http://") || (typeof feldwert === "string" && feldwert.slice(0, 8) === "https://") || (typeof feldwert === "string" && feldwert.slice(0, 2) === "//")) {
		// www-Links als Link darstellen
		html_datensammlung += window.adb.generiereHtmlFürWwwLink(feldname, feldwert, ds_typ, ds_name);
	} else if (typeof feldwert === "string" && feldwert.length < 45) {
		html_datensammlung += window.adb.generiereHtmlFürTextinput(feldname, feldwert, "text", ds_typ, ds_name);
	} else if (typeof feldwert === "string" && feldwert.length >= 45) {
		html_datensammlung += window.adb.generiereHtmlFürTextarea(feldname, feldwert, ds_typ);
	} else if (typeof feldwert === "number") {
		html_datensammlung += window.adb.generiereHtmlFürTextinput(feldname, feldwert, "number", ds_typ, ds_name);
	} else if (typeof feldwert === "boolean") {
		html_datensammlung += window.adb.generiereHtmlFürBoolean(feldname, feldwert, ds_typ, ds_name);
	} else {
		html_datensammlung += window.adb.generiereHtmlFürTextinput(feldname, feldwert, "text", ds_typ, ds_name);
	}
	return html_datensammlung;
};

// managt die Links zu Google Bilder und Wikipedia
// erwartet das Objekt mit der Art
window.adb.setzteLinksZuBilderUndWikipedia = function(art) {
	'use strict';
	// jetzt die Links im Menu setzen
	if (art) {
		var google_bilder_link = "",
            wikipedia_link = "";
		switch (art.Gruppe) {
		case "Flora":
			google_bilder_link = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Taxonomie.Eigenschaften.Artname + '"';
			if (art.Taxonomie.Eigenschaften['Name Deutsch']) {
				google_bilder_link += '+OR+"' + art.Taxonomie.Eigenschaften['Name Deutsch'] + '"';
			}
			if (art.Taxonomie.Eigenschaften['Name Französisch']) {
				google_bilder_link += '+OR+"' + art.Taxonomie.Eigenschaften['Name Französisch'] + '"';
			}
			if (art.Taxonomie.Eigenschaften['Name Italienisch']) {
				google_bilder_link += '+OR+"' + art.Taxonomie.Eigenschaften['Name Italienisch'] + '"';
			}
			if (art.Taxonomie.Eigenschaften['Name Deutsch']) {
				wikipedia_link = '//de.wikipedia.org/wiki/' + art.Taxonomie.Eigenschaften['Name Deutsch'];
			} else {
				wikipedia_link = '//de.wikipedia.org/wiki/' + art.Taxonomie.Eigenschaften.Artname;
			}
			break;
		case "Fauna":
			google_bilder_link = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Taxonomie.Eigenschaften.Artname + '"';
			if (art.Taxonomie.Eigenschaften["Name Deutsch"]) {
				google_bilder_link += '+OR+"' + art.Taxonomie.Eigenschaften['Name Deutsch'] + '"';
			}
			if (art.Taxonomie.Eigenschaften['Name Französisch']) {
				google_bilder_link += '+OR+"' + art.Taxonomie.Eigenschaften['Name Französisch'] + '"';
			}
			if (art.Taxonomie.Eigenschaften['Name Italienisch']) {
				google_bilder_link += '+OR"' + art.Taxonomie.Eigenschaften['Name Italienisch'] + '"';
			}
			wikipedia_link = '//de.wikipedia.org/wiki/' + art.Taxonomie.Eigenschaften.Gattung + '_' + art.Taxonomie.Eigenschaften.Art;
			break;
		case 'Moose':
			google_bilder_link = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Taxonomie.Eigenschaften.Gattung + ' ' + art.Taxonomie.Eigenschaften.Art + '"';
			wikipedia_link = '//de.wikipedia.org/wiki/' + art.Taxonomie.Eigenschaften.Gattung + '_' + art.Taxonomie.Eigenschaften.Art;
			break;
		case 'Macromycetes':
			google_bilder_link = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Taxonomie.Eigenschaften.Name + '"';
			if (art.Taxonomie.Eigenschaften['Name Deutsch']) {
				google_bilder_link += '+OR+"' + art.Taxonomie.Eigenschaften['Name Deutsch'] + '"';
			}
			wikipedia_link = '//de.wikipedia.org/wiki/' + art.Taxonomie.Eigenschaften.Name;
			break;
		case 'Lebensräume':
			google_bilder_link = 'https://www.google.ch/search?num=10&hl=de&site=imghp&tbm=isch&source=hp&bih=824&q="' + art.Taxonomie.Eigenschaften.Einheit;
			wikipedia_link = '//de.wikipedia.org/wiki/' + art.Taxonomie.Eigenschaften.Einheit;
			break;
		}
		// mit replace Hochkommata ' ersetzen, sonst klappt url nicht
		$("#GoogleBilderLink").attr("href", encodeURI(google_bilder_link).replace("&#39;", "%20"));
		$("#GoogleBilderLink_li").removeClass("disabled");
		$("#WikipediaLink").attr("href", wikipedia_link);
		$("#WikipediaLink_li").removeClass("disabled");
	} else {
		$("#WikipediaLink").attr("href", "#");
		$("#WikipediaLink_li").addClass("disabled");
		$("#GoogleBilderLink").attr("href", "#");
		$("#GoogleBilderLink_li").addClass("disabled");
	}
};

// generiert den html-Inhalt für einzelne Links in Flora
window.adb.generiereHtmlFürLinkZuGleicherGruppe = function(feld_name, id, artname) {
	'use strict';
	var html_container;
	html_container = '<div class="form-group"><label class="control-label">';
	html_container += feld_name;
	html_container += ':</label><p class="form-control-static controls feldtext"><a href="#" class="LinkZuArtGleicherGruppe" ArtId="';
	html_container += id;
	html_container += '">';
	html_container += artname;
	html_container += '</a></p></div>';
	return html_container;
};

// generiert den html-Inhalt für Serien von Links in Flora
window.adb.generiereHtmlFürLinksZuGleicherGruppe = function(feldname, objekt_liste) {
	'use strict';
	var html_container;
	html_container = '<div class="form-group"><label class="control-label">';
	html_container += feldname;
	html_container += ':</label><span class="feldtext controls">';
    _.each(objekt_liste, function(objekt, index) {
        if (index > 0) {
            html_container += ', ';
        }
        html_container += '<p class="form-control-static controls"><a href="#" class="LinkZuArtGleicherGruppe" ArtId="';
        html_container += objekt.GUID;
        html_container += '">';
        html_container += objekt.Name;
        html_container += '</a></p>';
    });
	html_container += '</span></div>';
	return html_container;
};

// generiert den html-Inhalt für einzelne Links in Flora
window.adb.generiereHtmlFürWwwLink = function(feldname, feldwert, ds_typ, ds_name) {
	'use strict';
	var html_container;
	html_container = '<div class="form-group">\n\t<label class="control-label" for="';
	html_container += feldname;
	html_container += '">';
	html_container += feldname;
	html_container += ':</label>\n\t';
	// jetzt Link beginnen, damit das Feld klickbar wird
	html_container += '<p><a href="';
	html_container += feldwert;
	html_container += '"><input class="controls form-control input-sm" dsTyp="'+ds_typ+'" dsName="'+ds_name+'" id="';
	html_container += feldname;
	html_container += '" name="';
	html_container += feldname;
	html_container += '" type="text" value="';
	html_container += feldwert;
	html_container += '" readonly="readonly" style="cursor:pointer;">';
	// Link abschliessen
	html_container += '</a></p>';
	html_container += '\n</div>';
	return html_container;
};

// generiert den html-Inhalt für einzelne Links in Flora
window.adb.generiereHtmlFürObjektlink = function(feldname, feldwert, url) {
	'use strict';
	var html_container;
	html_container = '<div class="form-group"><label class="control-label">';
	html_container += feldname;
	html_container += ':';
	html_container += '</label>';
	html_container += '<p class="form-control-static feldtext controls"><a href="';
	html_container += url;
	html_container += '" target="_blank">';
	html_container += feldwert;
	html_container += '</a></p></div>';
	return html_container;
};

// generiert den html-Inhalt für Textinputs
window.adb.generiereHtmlFürTextinput = function(feldname, feldwert, input_typ, ds_typ, ds_name) {
	'use strict';
	var html_container;
	html_container = '<div class="form-group">\n\t<label class="control-label" for="';
	html_container += feldname;
	html_container += '">';
	html_container += feldname;
	html_container += ':</label>\n\t<input class="controls form-control input-sm" id="';
	html_container += feldname;
	html_container += '" name="';
	html_container += feldname;
	html_container += '" type="';
	html_container += input_typ;
	html_container += '" value="';
	html_container += feldwert;
	html_container += '" readonly="readonly" dsTyp="'+ds_typ+'" dsName="'+ds_name+'">\n</div>';
	return html_container;
};

// generiert den html-Inhalt für Textarea
window.adb.generiereHtmlFürTextarea = function(feldname, feldwert, ds_typ, ds_name) {
	'use strict';
	var html_container;
	html_container = '<div class="form-group"><label class="control-label" for="';
	html_container += feldname;
	html_container += '">';
	html_container += feldname;
	html_container += ':</label><textarea class="controls form-control" id="';
	html_container += feldname;
	html_container += '" name="';
	html_container += feldname;
	html_container += '" readonly="readonly" dsTyp="'+ds_typ+'" dsName="'+ds_name+'">';
	html_container += feldwert;
	html_container += '</textarea></div>';
	return html_container;
};

// generiert den html-Inhalt für ja/nein-Felder
window.adb.generiereHtmlFürBoolean = function(feldname, feldwert, ds_typ, ds_name) {
	'use strict';
	var html_container;
	html_container = '<div class="form-group"><label class="control-label" for="';
	html_container += feldname;
	html_container += '">';
	html_container += feldname;
	html_container += ':</label><input type="checkbox" id="';
	html_container += feldname;
	html_container += '" name="';
	html_container += feldname;
	html_container += '"';
	if (feldwert === true) {
		html_container += ' checked="true"';
	}
	html_container += '" readonly="readonly" disabled="disabled" dsTyp="'+ds_typ+'" dsName="'+ds_name+'"></div>';
	return html_container;
};

// begrenzt die maximale Höhe des Baums auf die Seitenhöhe, wenn nötig
window.adb.setzeTreehöhe = function() {
	'use strict';
	var window_height = $(window).height();
	if ($(window).width() > 1000 && !$("body").hasClass("force-mobile")) {
		$(".baum").css("max-height", window_height - 161);
	} else {
		// Spalten sind untereinander. Baum 91px weniger hoch, damit Formulare zum raufschieben immer erreicht werden können
		$(".baum").css("max-height", window_height - 252);
	}
};

// setzt die Höhe von textareas so, dass der Text genau rein passt
window.adb.fitTextareaToContent = function(id, max_height) {
	'use strict';
	var text = id && id.style ? id : document.getElementById(id);
	max_height = max_height || document.documentElement.clientHeight;
	if (!text) {
		return;
	}

	/* Accounts for rows being deleted, pixel value may need adjusting */
	if (text.clientHeight == text.scrollHeight) {
		text.style.height = "30px";
	}

	var adjustedHeight = text.clientHeight;
	if (!max_height || max_height > adjustedHeight) {
		adjustedHeight = Math.max(text.scrollHeight, adjustedHeight);
	}
	if (max_height) {
		adjustedHeight = Math.min(max_height, adjustedHeight);
	}
	if (adjustedHeight > text.clientHeight) {
		text.style.height = adjustedHeight + "px";
	}
};

// managed die Sichtbarkeit von Formularen
// wird von allen initiiere_-Funktionen verwendet
// wird ein Formularname übergeben, wird dieses Formular gezeigt
// und alle anderen ausgeblendet
// zusätzlich wird die Höhe von textinput-Feldern an den Textinhalt angepasst
window.adb.zeigeFormular = function(formularname) {
	'use strict';
	var formular_angezeigt = $.Deferred(),
        $form = $('form');
	// zuerst alle Formulare ausblenden
	$("#forms").hide();
    $form.each(function() {
		$(this).hide();
	});

	if (formularname) {
		if (formularname !== "art") {
			// Spuren des letzten Objekts entfernen
			// IE8 kann nicht deleten
			try {
				delete localStorage.art_id;
			}
			catch (e) {
				localStorage.art_id = undefined;
			}
			// URL anpassen, damit kein Objekt angezeigt wird
			// TODO: DIESER BEFEHL LÖST IN IE11 EINFÜGEN VON :/// AUS!!!!
			history.pushState(null, null, "index.html");
			// alle Bäume ausblenden, suchfeld, Baumtitel
			$(".suchen").hide();
			$(".baum").hide();
			$(".treeBeschriftung").hide();
			// Gruppe Schaltfläche deaktivieren
			$('#Gruppe').find('.active').removeClass('active');
		}
		$form.each(function() {
			var that = $(this);
			if (that.attr("id") === formularname) {
				$("#forms").show();
				that.show();
			}
		});
		$(window).scrollTop(0);
		// jetzt die Links im Menu (de)aktivieren
		window.adb.setzteLinksZuBilderUndWikipedia();
		formular_angezeigt.resolve();
	}
	return formular_angezeigt.promise();
};

// kontrollieren, ob die erforderlichen Felder etwas enthalten
// wenn ja wird true retourniert, sonst false
window.adb.validiereSignup = function(woher) {
	'use strict';
	var email,
        passwort,
        passwort2;
	// zunächst alle Hinweise ausblenden (falls einer von einer früheren Prüfung her noch eingeblendet wäre)
	$(".hinweis").hide();
	// erfasste Werte holen
	email = $("#Email_"+woher).val();
	passwort = $("#Passwort_"+woher).val();
	passwort2 = $("#Passwort2_"+woher).val();
	// prüfen
	if (!email) {
		$("#Emailhinweis_"+woher).show();
		setTimeout(function() {
			$("#Email_"+woher).focus();
		}, 50);  // need to use a timer so that .blur() can finish before you do .focus()
		return false;
	} else if (!passwort) {
		$("#Passworthinweis_"+woher).show();
		setTimeout(function() {
			$("#Passwort_"+woher).focus();
		}, 50);  // need to use a timer so that .blur() can finish before you do .focus()
		return false;
	} else if (!passwort2) {
		$("#Passwort2hinweis_"+woher).show();
		setTimeout(function() {
			$("#Passwort2_"+woher).focus();
		}, 50);  // need to use a timer so that .blur() can finish before you do .focus()
		return false;
	} else if (passwort !== passwort2) {
		$("#Passwort2hinweisFalsch_"+woher).show();
		setTimeout(function() {
			$("#Passwort2_"+woher).focus();
		}, 50);  // need to use a timer so that .blur() can finish before you do .focus()
		return false;
	}
	return true;
};

window.adb.erstelleKonto = function(woher) {
	'use strict';
	// User in _user eintragen
	$.couch.signup({
		name: $('#Email_'+woher).val()
	},
	$('#Passwort_'+woher).val(), {
		success : function() {
			localStorage.Email = $('#Email_'+woher).val();
			if (woher === "art") {
				window.adb.bearbeiteLrTaxonomie();
			}
			window.adb.passeUiFürAngemeldetenUserAn(woher);
			// Werte aus Feldern entfernen
			$("#Email_"+woher).val("");
			$("#Passwort_"+woher).val("");
			$("#Passwort2_"+woher).val("");
		},
		error : function() {
			var praefix = "importieren_";
			if (woher === "art") {
				praefix = "";
			}
			$("#"+praefix+woher+"_anmelden_fehler_text").html("Fehler: Das Konto wurde nicht erstellt");
			$("#"+praefix+woher+"_anmelden_fehler")
                .alert()
                .show();
		}
	});
};

window.adb.meldeUserAn = function(woher) {
	'use strict';
	var email = $('#Email_'+woher).val(),
		passwort = $('#Passwort_'+woher).val();
	if (window.adb.validiereUserAnmeldung(woher)) {
		$.couch.login({
			name : email,
			password : passwort,
			success : function(r) {
				localStorage.Email = $('#Email_'+woher).val();
				if (woher === "art") {
					window.adb.bearbeiteLrTaxonomie();
				}
				window.adb.passeUiFürAngemeldetenUserAn(woher);
				// Werte aus Feldern entfernen
				$("#Email_"+woher).val("");
				$("#Passwort_"+woher).val("");
				$("#art_anmelden").show();
				// admin-Funktionen
				if (r.roles.indexOf("_admin") !== -1) {
					// das ist ein admin
					console.log("hallo admin");
					localStorage.admin = true;
				} else {
					delete localStorage.admin;
				}
				window.adb.blendeMenus();
			},
			error: function() {
				var präfix = "importieren_";
				if (woher === "art") {
					präfix = "";
				}
				// zuerst allfällige bestehende Hinweise ausblenden
				$(".hinweis").hide();
				$("#"+präfix+woher+"_anmelden_fehler_text")
                    .html("Anmeldung gescheitert.<br>Sie müssen ev. ein Konto erstellen?")
                    .alert()
				    .show();
			}
		});
	}
};

window.adb.blendeMenus = function() {
	'use strict';
	if (localStorage.admin) {
		$("#menu_btn")
            .find(".admin")
            .show();
	} else {
		$("#menu_btn")
            .find(".admin")
            .hide();
	}
};

window.adb.meldeUserAb = function() {
	'use strict';
	// IE8 kann nicht deleten
	try {
		delete localStorage.Email;
	}
	catch (e) {
		localStorage.Email = undefined;
	}
	$(".art_anmelden_titel").text("Anmelden");
	$(".importieren_anmelden_titel").text("1. Anmelden");
	$(".alert").hide();
	$(".hinweis").hide();
	$(".well.anmelden").show();
	$(".Email").show();
	$(".Passwort").show();
	$(".anmelden_btn").show();
	$(".abmelden_btn").hide();
	// ausschalten, soll später bei Organisation möglich werden
	// $(".konto_erstellen_btn").show();
	$(".konto_speichern_btn").hide();
	$("#art_anmelden").hide();
	window.adb.schützeLrTaxonomie();
    // falls dieser User admin war: vergessen
    delete localStorage.admin;
    // für diesen Nutzer passende Menus anzeigen
    window.adb.blendeMenus();
};

window.adb.passeUiFürAngemeldetenUserAn = function(woher) {
	'use strict';
	var präfix = "importieren_";
	if (woher === "art") {
		präfix = "";
	}
	$("#art_anmelden_titel").text(localStorage.Email + " ist angemeldet");
	$(".importieren_anmelden_titel").text("1. " + localStorage.Email + " ist angemeldet");
	if (woher !== "art") {
		$("#" + präfix + woher + "_anmelden_collapse").collapse('hide');
		$("#importieren_" + woher + "_ds_beschreiben_collapse").collapse('show');
	}
	$(".alert").hide();
	$(".hinweis").hide();
	$(".well.anmelden").hide();
	$(".Email").hide();
	$(".Passwort").hide();
	$(".anmelden_btn").hide();
	$(".abmelden_btn").show();
	$(".konto_erstellen_btn").hide();
	$(".konto_speichern_btn").hide();
	// in LR soll Anmelde-Accordion nicht sichtbar sein
	$("#art_anmelden").hide();
};

// prüft, ob der Benutzer angemeldet ist
// ja: retourniert true
// nein: retourniert false und öffnet die Anmeldung
// welche anmeldung hängt ab, woher die Prüfung angefordert wurde
// darum erwartet die Funktion den parameter woher
window.adb.prüfeAnmeldung = function(woher) {
	'use strict';
	if (!localStorage.Email) {
		setTimeout(function() {
			window.adb.zurückZurAnmeldung(woher);
		}, 600);
		return false;
	}
	return true;
};

window.adb.zurückZurAnmeldung = function(woher) {
	'use strict';
	var präfix = "importieren_";

	// Bei LR muss der Anmeldungsabschnitt eingeblendet werden
	if (woher === "art") {
		präfix = "";
		$("#art_anmelden").show();
	}

	// Mitteilen, dass Anmeldung nötig ist
	$("#"+präfix+woher+"_anmelden_hinweis")
        .alert()
        .show();
	$("#"+präfix+woher+"_anmelden_hinweis_text").html("Um Daten zu bearbeiten, müssen Sie angemeldet sein");
	$("#"+präfix+woher+"_anmelden_collapse").collapse('show');
	$(".anmelden_btn").show();
	$(".abmelden_btn").hide();
	// ausschalten, soll später bei Organisationen möglich werden
	//$(".konto_erstellen_btn").show();
	$(".konto_speichern_btn").hide();
	$("#Email_"+woher).focus();
};

window.adb.validiereUserAnmeldung = function(woher) {
	'use strict';
	var email = $('#Email_'+woher).val(),
		passwort = $('#Passwort_'+woher).val();
	if (!email) {
		setTimeout(function() {
			$('#Email_'+woher).focus();
		}, 50);  // need to use a timer so that .blur() can finish before you do .focus()
		$("#Emailhinweis_"+woher).show();
		return false;
	} else if (!passwort) {
		setTimeout(function() {
			$('#Passwort_'+woher).focus();
		}, 50);  // need to use a timer so that .blur() can finish before you do .focus()
		$("#Passworthinweis_"+woher).show();
		return false;
	}
	return true;
};

// wenn BsName geändert wird
// suchen, ob schon eine Datensammlung mit diesem Namen existiert
// und sie von jemand anderem importiert wurde
// und sie nicht zusammenfassend ist
window.adb.handleBsNameChange = function() {
	'use strict';
	var that = this,
		bs_key = _.find(window.adb.ds_namen_eindeutig, function(key) {
			return key[0] === that.value && key[2] !== localStorage.Email && !key[1];
		});
	if (bs_key) {
		$("#importieren_bs_ds_beschreiben_hinweis2")
            .alert()
            .removeClass("alert-success")
            .removeClass("alert-danger")
            .addClass("alert-info")
            .show();
		$("#importieren_bs_ds_beschreiben_hinweis_text2").html('Es existiert schon eine gleich heissende und nicht zusammenfassende Beziehungssammlung.<br>Sie wurde von jemand anderem importiert. Daher müssen Sie einen anderen Namen verwenden.');
		setTimeout(function() {
			$("#importieren_bs_ds_beschreiben_hinweis2")
                .alert()
                .hide();
		}, 30000);
		$("#BsName")
            .val("")
		    .focus();
	} else {
		$("#importieren_bs_ds_beschreiben_hinweis2")
            .alert()
            .hide();
	}
};

// Wenn DsImportiertVon geändert wird
// kontrollieren, dass es die email der angemeldeten Person ist
window.adb.handleDsImportiertVonChange = function() {
	'use strict';
    var $importieren_ds_ds_beschreiben_hinweis2 = $("#importieren_ds_ds_beschreiben_hinweis2");
	$("#DsImportiertVon").val(localStorage.Email);
	$importieren_ds_ds_beschreiben_hinweis2
        .alert()
        .show()
	    .html('"importiert von" ist immer die email-Adresse der angemeldeten Person');
	setTimeout(function() {
		$importieren_ds_ds_beschreiben_hinweis2
            .alert()
            .hide();
	}, 10000);
};

// Wenn BsImportiertVon geändert wird
// Kontrollieren, dass es die email der angemeldeten Person ist
window.adb.handleBsImportiertVonChange = function() {
	'use strict';
	$("#BsImportiertVon").val(localStorage.Email);
	$("#importieren_bs_ds_beschreiben_hinweis2")
        .alert()
        .removeClass("alert-success")
        .removeClass("alert-danger")
        .addClass("alert-info")
        .show();
	$("#importieren_bs_ds_beschreiben_hinweis_text2").html('"importiert von" ist immer die email-Adresse der angemeldeten Person');
	setTimeout(function() {
		$("#importieren_bs_ds_beschreiben_hinweis2")
            .alert()
            .hide();
	}, 10000);
};

// wenn BsZusammenfassend geändert wird
// BsUrsprungsBs_div zeigen oder verstecken
window.adb.handleBsZusammenfassendChange = function() {
	'use strict';
	if ($(this).prop('checked')) {
		$("#BsUrsprungsBs_div").show();
	} else {
		$("#BsUrsprungsBs_div").hide();
	}
};

// wenn DsZusammenfassend geändert wird
// DsUrsprungsDs zeigen oder verstecken
window.adb.handleDsZusammenfassendChange = function() {
	'use strict';
	if ($(this).prop('checked')) {
		$("#DsUrsprungsDs_div").show();
	} else {
		$("#DsUrsprungsDs_div").hide();
	}
};

// Wenn BsWählen geändert wird
window.adb.handleBsWählenChange = function() {
	'use strict';
	var bs_name = this.value,
		wählbar = false,
        $BsAnzDs = $("#BsAnzDs"),
        $BsAnzDs_label = $("#BsAnzDs_label"),
        $BsName = $("#BsName"),
        $importieren_bs_ds_beschreiben_hinweis2 = $("#importieren_bs_ds_beschreiben_hinweis2");
    // allfälligen Alert schliessen
    $importieren_bs_ds_beschreiben_hinweis2
        .alert()
        .hide();
    // wählbar setzen
    // wählen kann man nur, was man selber importiert hat - oder admin ist
    if ($("#"+this.id+" option:selected").attr("waehlbar") === "true") {
        wählbar = true;
    } else if (Boolean(localStorage.admin)) {
        wählbar = true;
    }
	if (wählbar) {
		// zuerst alle Felder leeren
		$('#importieren_bs_ds_beschreiben_collapse textarea, #importieren_bs_ds_beschreiben_collapse input').each(function() {
			$(this).val('');
		});
		$BsAnzDs.html("");
		$BsAnzDs_label.html("");
		if (bs_name) {
            _.each(window.adb.bs_von_objekten.rows, function(bs_row) {
                if (bs_row.key[1] === bs_name) {
                    $BsName.val(bs_name);
                    _.each(bs_row, function(feldwert, feldname) {
                        if (feldname === "Ursprungsdatensammlung") {
                            $("#BsUrsprungsBs").val(feldwert);
                        } else if (feldname !== "importiert von") {
                            $("#Bs" + feldname).val(feldwert);
                        }
                    });
                    if (bs_row.key[2] === true) {
                        $("#BsZusammenfassend").prop('checked', true);
                        $("#BsUrsprungsBs_div").show();
                    } else {
                        // sicherstellen, dass der Haken im Feld entfernt wird, wenn nach der zusammenfassenden eine andere BS gewählt wird
                        $("#BsZusammenfassend").prop('checked', false);
                        $("#BsUrsprungsBs_div").hide();
                    }
                    // wenn die ds/bs kein "importiert von" hat ist der Wert null
                    // verhindern, dass null angezeigt wird
                    if (bs_row.key[3]) {
                        $("#BsImportiertVon").val(bs_row.key[3]);
                    } else {
                        $("#BsImportiertVon").val("");
                    }
                    $BsAnzDs_label.html("Anzahl Arten/Lebensräume");
                    $BsAnzDs.html(bs_row.value);
                    // dafür sorgen, dass textareas genug gross sind
                    $('#importieren_bs').find('textarea').each(function() {
                        window.adb.fitTextareaToContent(this, document.documentElement.clientHeight);
                    });
                    $BsName.focus();
                }
                // löschen-Schaltfläche einblenden
                $("#BsLoeschen").show();
            });
		} else {
			// löschen-Schaltfläche ausblenden
			$("#BsLoeschen").hide();
		}
	} else {
		// melden, dass diese BS nicht bearbeitet werden kann
        $("#importieren_bs_ds_beschreiben_hinweis2")
            .html("Sie können nur Beziehungssammlungen verändern, die Sie selber importiert haben.<br>Ausnahme: Zusammenfassende Beziehungssammlungen.");
        $importieren_bs_ds_beschreiben_hinweis2
            .alert()
            .removeClass("alert-success")
            .removeClass("alert-info")
            .addClass("alert-danger")
            .show();
        $('html, body').animate({
            scrollTop: $("#BsWaehlen").offset().top
        }, 2000);
	}
};

// wenn DsFile geändert wird
window.adb.handleDsFileChange = function() {
	'use strict';
	if (typeof event.target.files[0] === "undefined") {
		// vorhandene Datei wurde entfernt
		$("#DsTabelleEigenschaften").hide();
		$("#importieren_ds_ids_identifizieren_hinweis_text").hide();
		$("#DsImportieren").hide();
		$("#DsEntfernen").hide();
	} else {
        var file = event.target.files[0],
            reader = new FileReader();

        reader.onload = function(event) {
            window.adb.dsDatensätze = $.csv.toObjects(event.target.result);
            window.adb.erstelleTabelle(window.adb.dsDatensätze, "DsFelder_div", "DsTabelleEigenschaften");
        };
        reader.readAsText(file);
    }
};

// wenn BsFile geändert wird
window.adb.handleBsFileChange = function() {
	'use strict';
	if (typeof event.target.files[0] === "undefined") {
		// vorhandene Datei wurde entfernt
		$("#BsTabelleEigenschaften").hide();
		$("#importieren_bs_ids_identifizieren_hinweis_text").hide();
		$("#BsImportieren").hide();
		$("#BsEntfernen").hide();
	} else {
        var file = event.target.files[0],
            reader = new FileReader();
        reader.onload = function(event) {
            window.adb.bsDatensätze = $.csv.toObjects(event.target.result);
            window.adb.erstelleTabelle(window.adb.bsDatensätze, "BsFelder_div", "BsTabelleEigenschaften");
        };
        reader.readAsText(file);
    }
};

// wenn btn_resize geklickt wird
window.adb.handleBtnResizeClick = function() {
	'use strict';
	var windowHeight = $(window).height(),
        $body = $("body");
	$body.toggleClass("force-mobile");
	if ($body.hasClass("force-mobile")) {
		// Spalten sind untereinander. Baum 91px weniger hoch, damit Formulare zum raufschieben immer erreicht werden können
		$(".baum").css("max-height", windowHeight - 252);
		// button rechts ausrichten
		$("#btn_resize")
            .css("margin-right", "0px")
            .attr("data-original-title", "in zwei Spalten anzeigen");
	} else {
		$(".baum").css("max-height", windowHeight - 161);
		// button an anderen Schaltflächen ausrichten
		$("#btn_resize")
            .css("margin-right", "6px")
            .attr("data-original-title", "ganze Breite nutzen");
	}
};

// wenn menu_btn geklickt wird
// Menu: Links zu Google Bilder und Wikipedia nur aktiv setzen, wenn Art oder Lebensraum angezeigt wird
window.adb.handleMenuBtnClick = function() {
	'use strict';
	if (localStorage.art_id) {
		$("#GoogleBilderLink_li").removeClass("disabled");
		$("#WikipediaLink_li").removeClass("disabled");
	} else {
		$("#GoogleBilderLink_li").addClass("disabled");
		$("#WikipediaLink_li").addClass("disabled");
	}
};

// wenn ds_importieren geklickt wird
// testen, ob der Browser das Importieren unterstützt
// wenn nein, Meldung bringen (macht die aufgerufene Funktion)
window.adb.handleDs_ImportierenClick = function() {
	'use strict';
	if(window.adb.isFileAPIAvailable()) {
		window.adb.zeigeFormular("importieren_ds");
		// Ist der User noch angemeldet? Wenn ja: Anmeldung überspringen
		if (window.adb.prüfeAnmeldung("ds")) {
			$("#importieren_ds_ds_beschreiben_collapse").collapse('show');
		}
	}
};

// wenn bs_importieren geklickt wird
// testen, ob der Browser das Importieren unterstützt
// wenn nein, Meldung bringen (macht die aufgerufene Funktion)
window.adb.handleBs_ImportierenClick = function() {
	'use strict';
	if(window.adb.isFileAPIAvailable()) {
		window.adb.zeigeFormular("importieren_bs");
		// Ist der User noch angemeldet? Wenn ja: Anmeldung überspringen
		if (window.adb.prüfeAnmeldung("bs")) {
			$("#importieren_bs_ds_beschreiben_collapse").collapse('show');
		}
	}
};

window.adb.handleMenuAdminClick = function() {
	'use strict';
	window.adb.zeigeFormular("admin");
};

window.adb.ergänzePilzeZhgis = function() {
	'use strict';
	$("#admin_pilze_zhgis_ergänzen_rückmeldung").html("Daten werden analysiert...");
	var $db = $.couch.db("artendb");
	$db.view('artendb/macromycetes?include_docs=true', {
		success: function(data) {
			var ds_zhgis = {},
				ergänzt = 0,
				fehler = 0,
				zhgis_schon_da = 0;
			ds_zhgis.Name = "ZH GIS";
			ds_zhgis.Beschreibung = "GIS-Layer und Betrachtungsdistanzen für das Artenlistentool, Artengruppen für EvAB, im Kanton Zürich. Eigenschaften aller Arten";
			ds_zhgis.Datenstand = "dauernd nachgeführt";
			ds_zhgis.Link = "http://www.naturschutz.zh.ch";
            ds_zhgis["importiert von"] = "alex@gabriel-software.ch";
			ds_zhgis.Eigenschaften = {};
			ds_zhgis.Eigenschaften["GIS-Layer"] = "Pilze";
			_.each(data.rows, function(row) {
				var pilz = row.doc,
					zhgis_in_ds;
				if (!pilz.Eigenschaftensammlungen) {
					pilz.Eigenschaftensammlungen = [];
				}
				zhgis_in_ds = _.find(pilz.Eigenschaftensammlungen, function(ds) {
					return ds.Name === "ZH GIS";
				});
				// nur ergänzen, wenn ZH GIS noch nicht existiert
				if (!zhgis_in_ds) {
					pilz.Eigenschaftensammlungen.push(ds_zhgis);
					pilz.Eigenschaftensammlungen = _.sortBy(pilz.Eigenschaftensammlungen, function(ds) {
						return ds.Name;
					});
					$db.saveDoc(pilz, {
						success: function() {
							ergänzt ++;
							$("#admin_pilze_zhgis_ergänzen_rückmeldung").html("Total: " + data.rows.length + ". Ergänzt: " + ergänzt + ", Fehler: " + fehler + ", 'ZH GIS' schon enthalten: " + zhgis_schon_da);
						},
						error: function() {
							fehler ++;
							$("#admin_pilze_zhgis_ergänzen_rückmeldung").html("Total: " + data.rows.length + ". Ergänzt: " + ergänzt + ", Fehler: " + fehler + ", 'ZH GIS' schon enthalten: " + zhgis_schon_da);
						}
					});
				} else {
					zhgis_schon_da ++;
					$("#admin_pilze_zhgis_ergänzen_rückmeldung").html("Total: " + data.rows.length + ". Ergänzt: " + ergänzt + ", Fehler: " + fehler + ", 'ZH GIS' schon enthalten: " + zhgis_schon_da);
				}
			});
		}
	});
};

window.adb.korrigiereArtwertnameInFlora = function() {
	'use strict';
    $("#admin_korrigiere_artwertname_in_flora_rückmeldung").html("Daten werden analysiert...");
    var $db = $.couch.db("artendb");
    $db.view('artendb/flora?include_docs=true', {
        success: function(data) {
            var korrigiert = 0,
                fehler = 0,
                save;
            _.each(data.rows, function(row) {
                var art = row.doc,
                    ds_artwert,
                    daten = {};
                if (art.Eigenschaftensammlungen) {
                    ds_artwert = _.find(art.Eigenschaftensammlungen, function(ds) {
                       return ds.Name === "ZH Artwert (1995)";
                    });
                    //if (ds_artwert && ds_artwert.Eigenschaften && ds_artwert.Eigenschaften["Artwert KT ZH"]) {
                    if (ds_artwert && ds_artwert.Eigenschaften) {
                        save = false;
                        // loopen und neu aufbauen, damit die Reihenfolge der keys erhalten bleibt (hoffentlich)
                        _.each(ds_artwert.Eigenschaften, function(value, key) {
                            if (key === "Artwert KT ZH") {
                                key = "Artwert";
                                save = true;
                            }
                            daten[key] = value;
                        });
                        if (save) {
                            ds_artwert.Eigenschaften = daten;
                            $db.saveDoc(art, {
                                success: function() {
                                    korrigiert ++;
                                    $("#admin_korrigiere_artwertname_in_flora_rückmeldung").html("Total: " + data.rows.length + ". Korrigiert: " + korrigiert + ", Fehler: " + fehler);
                                },
                                error: function() {
                                    fehler ++;
                                    $("#admin_korrigiere_artwertname_in_flora_rückmeldung").html("Total: " + data.rows.length + ". Korrigiert: " + korrigiert + ", Fehler: " + fehler);
                                }
                            });
                        }
                    }
                }
            });
            if (korrigiert === 0) {
                $("#admin_korrigiere_artwertname_in_flora_rückmeldung").html("Es gibt offenbar keine Felder mehr mit Namen 'Artwert KT ZH'");
            }
        }
    });
};

window.adb.korrigiereDsNameFloraChRoteListe1991 = function() {
	'use strict';
    var $admin_korrigiere_ds_name_ch_rote_liste_1991_rückmeldung = $("#admin_korrigiere_ds_name_ch_rote_liste_1991_rückmeldung");
    $admin_korrigiere_ds_name_ch_rote_liste_1991_rückmeldung.html("Daten werden analysiert...");
    var $db = $.couch.db("artendb");
    $db.view('artendb/flora?include_docs=true', {
        success: function(data) {
            var korrigiert = 0,
                fehler = 0,
                save;
            _.each(data.rows, function(row) {
                var art = row.doc,
                    ds;
                if (art.Eigenschaftensammlungen) {
                    ds = _.find(art.Eigenschaftensammlungen, function(ds) {
                        return ds.Name === "CH Rote Liste (1991)";
                    });
                    if (ds) {
                        ds.Name = "CH Rote Listen Flora (1991)";
                        $db.saveDoc(art, {
                            success: function() {
                                korrigiert ++;
                                $admin_korrigiere_ds_name_ch_rote_liste_1991_rückmeldung.html("Floraarten: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
                            },
                            error: function() {
                                fehler ++;
                                $admin_korrigiere_ds_name_ch_rote_liste_1991_rückmeldung.html("Floraarten: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
                            }
                        });
                    }
                }
            });
            if (korrigiert === 0) {
                $("#admin_korrigiere_artwertname_in_flora_rückmeldung").html("Es gibt offenbar keine Datensammlungen mehr mit Namen 'CH Rote Liste (1991)'");
            }
        }
    });
};

window.adb.nenneDsUm = function() {
	'use strict';
    var $admin_korrigiere_ds_name_ch_rückmeldung = $("#admin_korrigiere_ds_name_rückmeldung"),
        $admin_korrigiere_ds_name_name_vorher = $("#admin_korrigiere_ds_name_name_vorher"),
        $admin_korrigiere_ds_name_name_nachher = $("#admin_korrigiere_ds_name_name_nachher"),
        name_vorher = $admin_korrigiere_ds_name_name_vorher.val(),
        name_nachher = $admin_korrigiere_ds_name_name_nachher.val();
    if (!name_vorher) {
        $admin_korrigiere_ds_name_ch_rückmeldung.html("Bitte Name vorher erfassen");
        $admin_korrigiere_ds_name_name_vorher.focus();
        return;
    }
    if (!name_nachher) {
        $admin_korrigiere_ds_name_ch_rückmeldung.html("Bitte Name nachher erfassen");
        $admin_korrigiere_ds_name_name_nachher.focus();
        return;
    }
    $admin_korrigiere_ds_name_ch_rückmeldung.html("Daten werden analysiert...");
    var $db = $.couch.db("artendb");
    $db.view('artendb/ds_bs_guid?startkey=["' + name_vorher + '"]&endkey=["' + name_vorher + '",{}]&include_docs=true', {
        success: function(data) {
            var korrigiert = 0,
                fehler = 0,
                save;
            if (data.rows.length === 0) {
                $admin_korrigiere_ds_name_ch_rückmeldung.html("Es gibt keine Datensammlung namens " + name_vorher);
                return;
            }
            _.each(data.rows, function(row) {
                var art = row.doc,
                    ds,
                    bs,
                    save = false;
                // Datensammlung mit diesem Namen suchen
                if (art.Eigenschaftensammlungen && art.Eigenschaftensammlungen.length > 0) {
                    ds = _.find(art.Eigenschaftensammlungen, function(ds_) {
                        if (ds_.Name) {
                            return ds_.Name === name_vorher;
                        }
                    });
                    if (ds) {
                        ds.Name = name_nachher;
                        save = true;
                    }
                }
                // Beziehungssammlung mit diesem Namen suchen
                if (art.Beziehungssammlungen && art.Beziehungssammlungen.length > 0) {
                    bs = _.find(art.Beziehungssammlungen, function(ds_) {
                        if (ds_.Name) {
                            return ds_.Name === name_vorher;
                        }
                    });
                    if (bs) {
                        bs.Name = name_nachher;
                        save = true;
                    }
                }
                // Datensatz speichern, wenn nötig
                if (save) {
                    $db.saveDoc(art, {
                        success: function() {
                            korrigiert ++;
                            $admin_korrigiere_ds_name_ch_rückmeldung.html("Arten mit dieser Datensammlung: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
                        },
                        error: function() {
                            fehler ++;
                            $admin_korrigiere_ds_name_ch_rückmeldung.html("Arten mit dieser Datensammlung: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
                        }
                    });
                }
            });
            if (korrigiert === 0) {
                $("#admin_korrigiere_artwertname_in_flora_rückmeldung").html("Es gibt offenbar keine Datensammlungen mehr mit Namen '" + name_vorher + "'");
            }
        }
    });
};

window.adb.baueDsZuEigenschaftenUm = function() {
    'use strict';
    var $admin_baue_ds_zu_eigenschaften_um_rückmeldung = $("#admin_baue_ds_zu_eigenschaften_um_rückmeldung"),
        $db = $.couch.db("artendb");
    $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Daten werden analysiert...");
    $db.view('artendb/all_docs?include_docs=true', {
        success: function(data) {
            var korrigiert = 0,
                fehler = 0,
                save;
            if (data.rows.length === 0) {
                $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Keine Daten erhalten");
                return;
            }
            _.each(data.rows, function(row) {
                var art = row.doc,
                    datensammlungen,
                    beziehungssammlungen,
                    ds_daten,
                    tax_daten,
                    save = false;
                // Datensammlungen umbenennen
                // ds und bs entfernen, danach in der richtigen Reihenfolge hinzufügen
                // damit die Reihenfolge bewahrt bleibt
                if (art.Taxonomie && art.Taxonomie.Daten) {
                    tax_daten = art.Taxonomie.Daten;
                    delete art.Taxonomie.Daten;
                    art.Taxonomie.Eigenschaften = tax_daten;
                    save = true;
                }
                if (art.Datensammlungen) {
                    datensammlungen = art.Datensammlungen;
                    _.each(datensammlungen, function(ds) {
                        if (ds.Daten) {
                            ds_daten = ds.Daten;
                            delete ds.Daten;
                            ds.Eigenschaften = ds_daten;
                        }
                    });
                    delete art.Datensammlungen;
                    if (art.Beziehungssammlungen) {
                        beziehungssammlungen = art.Beziehungssammlungen;
                        delete art.Beziehungssammlungen;
                    } else {
                        beziehungssammlungen = {};
                    }
                    art.Eigenschaftensammlungen = datensammlungen;
                    art.Beziehungssammlungen = beziehungssammlungen;
                    save = true;
                }
                if (save) {
                    $db.saveDoc(art, {
                        success: function() {
                            korrigiert ++;
                            $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Anzahl Dokumente in DB: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
                        },
                        error: function() {
                            fehler ++;
                            $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Anzahl Dokumente in DB: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
                        }
                    });
                }

            });
            if (korrigiert === 0) {
                $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Es gibt offenbar keine Datensammlungen mehr, die umbenannt werden müssen");
            }
        }
    });
};

/*window.adb.baueDsZuEigenschaftenUm = function() {
 'use strict';
 var $admin_baue_ds_zu_eigenschaften_um_rückmeldung = $("#admin_baue_ds_zu_eigenschaften_um_rückmeldung"),
 $db = $.couch.db("artendb");
 $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Daten werden analysiert...");
 //$db.view('artendb/all_docs?include_docs=true', {
 $db.view('artendb/all_docs', {
 success: function(data) {
 var korrigiert = 0,
 fehler = 0,
 save;
 if (data.rows.length === 0) {
 $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Keine Daten erhalten");
 return;
 }
 _.each(data.rows, function(row) {
 $db.openDoc(row.key, {
 success: function(art) {
 var datensammlungen,
 beziehungssammlungen,
 ds_daten,
 tax_daten,
 save = false;
 // Datensammlungen umbenennen
 // ds und bs entfernen, danach in der richtigen Reihenfolge hinzufügen
 // damit die Reihenfolge bewahrt bleibt
 if (art.Taxonomie && art.Taxonomie.Daten) {
 tax_daten = art.Taxonomie.Daten;
 delete art.Taxonomie.Daten;
 art.Taxonomie.Eigenschaften = tax_daten;
 save = true;
 }
 if (art.Datensammlungen) {
 datensammlungen = art.Datensammlungen;
 _.each(datensammlungen, function(ds) {
 if (ds.Daten) {
 ds_daten = ds.Daten;
 delete ds.Daten;
 ds.Eigenschaften = ds_daten;
 }
 });
 delete art.Datensammlungen;
 if (art.Beziehungssammlungen) {
 beziehungssammlungen = art.Beziehungssammlungen;
 delete art.Beziehungssammlungen;
 } else {
 beziehungssammlungen = {};
 }
 art.Eigenschaftensammlungen = datensammlungen;
 art.Beziehungssammlungen = beziehungssammlungen;
 save = true;
 }
 if (save) {
 $db.saveDoc(art, {
 success: function() {
 korrigiert ++;
 $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Anzahl Dokumente in DB: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
 },
 error: function() {
 fehler ++;
 $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Anzahl Dokumente in DB: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
 }
 });
 }
 },
 error: function() {
 fehler ++;
 $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Anzahl Dokumente in DB: " + data.rows.length + ". Umbenannt: " + korrigiert + ", Fehler: " + fehler);
 }
 });

 });
 if (korrigiert === 0) {
 $admin_baue_ds_zu_eigenschaften_um_rückmeldung.html("Es gibt offenbar keine Datensammlungen mehr, die umbenannt werden müssen");
 }
 }
 });
 };*/

// wenn importieren_ds_ds_beschreiben_collapse geöffnet wird
window.adb.handleImportierenDsDsBeschreibenCollapseShown = function() {
	'use strict';
	// mitgeben, woher die Anfrage kommt, weil ev. angemeldet werden muss
	window.adb.bereiteImportieren_ds_beschreibenVor("ds");
	$("#DsImportiertVon").val(localStorage.Email);
};

// wenn importieren_bs_ds_beschreiben_collapse geöffnet wird
window.adb.handleImportierenBsDsBeschreibenCollapseShown = function() {
	'use strict';
	// mitgeben, woher die Anfrage kommt, weil ev. angemeldet werden muss
	window.adb.bereiteImportieren_bs_beschreibenVor("bs");
	$("#BsImportiertVon").val(localStorage.Email);
};

// wenn importieren_ds_daten_uploaden_collapse geöffnet wird
window.adb.handleImportierenDsDatenUploadenCollapseShown = function() {
	'use strict';
	if (!window.adb.prüfeAnmeldung("ds")) {
		$(this).collapse('hide');
	} else {
		$('#DsFile').fileupload();
	}
    $('html, body').animate({
        scrollTop: $("#importieren_ds_daten_uploaden_collapse").offset().top
    }, 2000);
};

// wenn importieren_bs_daten_uploaden_collapse geöffnet wird
window.adb.handleImportierenBsDatenUpladenCollapseShown = function() {
	'use strict';
	if (!window.adb.prüfeAnmeldung("bs")) {
		$(this).collapse('hide');
	} else {
		$('#BsFile').fileupload();
	}
    $('html, body').animate({
        scrollTop: $("#importieren_bs_daten_uploaden_collapse").offset().top
    }, 2000);
};

// wenn importieren_ds_ids_identifizieren_collapse geöffnet wird
window.adb.handleImportierenDsIdsIdentifizierenCollapseShown = function() {
	'use strict';
	if (!window.adb.prüfeAnmeldung("ds")) {
		$(this).collapse('hide');
	}
    $('html, body').animate({
        scrollTop: $("#importieren_ds_ids_identifizieren_collapse").offset().top
    }, 2000);
};

// wenn importieren_bs_ids_identifizieren_collapse geöffnet wird
window.adb.handleImportierenBsIdsIdentifizierenCollapseShown = function() {
	'use strict';
	if (!window.adb.prüfeAnmeldung("bs")) {
		$(this).collapse('hide');
	}
    $('html, body').animate({
        scrollTop: $("#importieren_bs_ids_identifizieren_collapse").offset().top
    }, 2000);
};

// wenn importieren_ds_import_ausfuehren_collapse geöffnet wird
window.adb.handleImportierenDsImportAusführenCollapseShown = function() {
	'use strict';
	if (!window.adb.prüfeAnmeldung("ds")) {
		$(this).collapse('hide');
	}
    $('html, body').animate({
        scrollTop: $("#importieren_ds_import_ausfuehren_collapse").offset().top
    }, 2000);
};

// wenn importieren_bs_import_ausfuehren_collapse geöffnet wird
window.adb.handleImportierenBsImportAusführenCollapseShown = function() {
	'use strict';
	if (!window.adb.prüfeAnmeldung("bs")) {
		$(this).collapse('hide');
	}
    $('html, body').animate({
        scrollTop: $("#importieren_bs_import_ausfuehren_collapse").offset().top
    }, 2000);
};

// wenn DsWählen geändert wird
window.adb.handleDsWählenChange = function() {
	'use strict';
	var ds_name = this.value,
		wählbar = false,
        $DsAnzDs = $("#DsAnzDs"),
        $DsAnzDs_label = $("#DsAnzDs_label"),
        $DsName = $("#DsName"),
        $importieren_ds_ds_beschreiben_error = $("#importieren_ds_ds_beschreiben_error");
    // allfälligen Alert schliessen
    $importieren_ds_ds_beschreiben_error
        .alert()
        .hide();
    // wählbar setzen
    // wählen kann man nur, was man selber importiert hat - oder admin ist
    if ($("#"+this.id+" option:selected").attr("waehlbar") === "true") {
        wählbar = true;
    } else if (Boolean(localStorage.admin)) {
        wählbar = true;
    }
	if (wählbar) {
		// zuerst alle Felder leeren
		$('#importieren_ds_ds_beschreiben_collapse textarea, #importieren_ds_ds_beschreiben_collapse input').each(function() {
			$(this).val('');
		});
		$DsAnzDs.html("");
		$DsAnzDs_label.html("");
		if (ds_name) {
            _.each(window.adb.ds_von_objekten.rows, function(ds_von_objekten_row) {
                if (ds_von_objekten_row.key[1] === ds_name) {
                    $DsName.val(ds_name);
                    _.each(ds_von_objekten_row.key[4], function(feldwert, feldname) {
                        if (feldname === "Ursprungsdatensammlung") {
                            $("#DsUrsprungsDs").val(feldwert);
                        } else if (feldname !== "importiert von") {
                            $("#Ds" + feldname).val(feldwert);
                        }
                    });
                    if (ds_von_objekten_row.key[2] === true) {
                        $("#DsZusammenfassend").prop('checked', true);
                        // Feld für Ursprungs-DS anzeigen
                        $("#DsUrsprungsDs_div").show();
                    } else {
                        // sicherstellen, dass der Haken im Feld entfernt wird, wenn nach der zusammenfassenden eine andere DS gewählt wird
                        $("#DsZusammenfassend").prop('checked', false);
                        // und Feld für Ursprungs-DS verstecken
                        $("#DsUrsprungsDs_div").hide();
                    }
                    // wenn die ds/bs kein "importiert von" hat ist der Wert null
                    // verhindern, dass null angezeigt wird
                    if (ds_von_objekten_row.key[3]) {
                        $("#DsImportiertVon").val(ds_von_objekten_row.key[3]);
                    } else {
                        $("#DsImportiertVon").val("");
                    }
                    $DsAnzDs_label.html("Anzahl Arten/Lebensräume");
                    $DsAnzDs.html(ds_von_objekten_row.value);
                    // dafür sorgen, dass textareas genug gross sind
                    $('#importieren_ds')
                        .find('textarea')
                        .each(function() {
                            window.adb.fitTextareaToContent(this, document.documentElement.clientHeight);
                        });
                    $DsName.focus();
                }
                // löschen-Schaltfläche einblenden
                $("#DsLoeschen").show();
            });
		} else {
			// löschen-Schaltfläche ausblenden
			$("#DsLoeschen").hide();
		}
	} else {
        // melden, dass diese BS nicht bearbeitet werden kann
        $("#importieren_ds_ds_beschreiben_error_text")
            .html("Sie können nur Datensammlungen verändern, die Sie selber importiert haben.<br>Ausnahme: Zusammenfassende Datensammlungen.");
        $importieren_ds_ds_beschreiben_error
            .alert()
            .show();
        $('html, body').animate({
            scrollTop: $("#DsWaehlen").offset().top
        }, 2000);
	}
};

// wenn DsName geändert wird
// suchen, ob schon eine Datensammlung mit diesem Namen existiert
// und sie von jemand anderem importiert wurde
// und sie nicht zusammenfassend ist
window.adb.handleDsNameChange = function() {
	'use strict';
	var that = this,
		ds_key = _.find(window.adb.ds_namen_eindeutig, function(key) {
			return key[0] === that.value && key[2] !== localStorage.Email && !key[1];
		}),
        $importieren_ds_ds_beschreiben_hinweis2 = $("#importieren_ds_ds_beschreiben_hinweis2");
	if (ds_key) {
		$importieren_ds_ds_beschreiben_hinweis2
            .alert()
            .show()
		    .html('Es existiert schon eine gleich heissende und nicht zusammenfassende Datensammlung.<br>Sie wurde von jemand anderem importiert. Daher müssen Sie einen anderen Namen verwenden.');
		setTimeout(function() {
			$importieren_ds_ds_beschreiben_hinweis2
                .alert()
                .hide();
		}, 30000);
		$("#DsName")
            .val("")
		    .focus();
	} else {
		$importieren_ds_ds_beschreiben_hinweis2
            .alert()
            .hide();
	}
};

// wenn DsLöschen geklickt wird
window.adb.handleDsLöschenClick = function() {
	'use strict';
	// Rückmeldung anzeigen
    $("#importieren_ds_ds_beschreiben_hinweis")
        .alert()
        .show()
	    .html("Bitte warten: Die Datensammlung wird entfernt...");
    window.adb.entferneDatensammlungAusAllenObjekten($("#DsName").val());
};

// wenn BsLoeschen geklickt wird
window.adb.handleBsLöschenClick = function() {
	'use strict';
	// Rückmeldung anzeigen
	$("#importieren_bs_ds_beschreiben_hinweis")
        .alert()
        .removeClass("alert-success")
        .removeClass("alert-danger")
        .addClass("alert-info")
        .show();
    $("#importieren_bs_ds_beschreiben_hinweis_text").html("Bitte warten: Die Beziehungssammlung wird entfernt...");
    window.adb.entferneBeziehungssammlungAusAllenObjekten($("#BsName").val());
};

// wenn exportieren geklickt wird
window.adb.handleExportierenClick = function() {
	'use strict';
	window.adb.zeigeFormular("export");
	delete window.adb.exportieren_objekte;
};

// wenn exportieren_alt geklickt wird
window.adb.handleExportierenAltClick = function() {
	'use strict';
	window.open("_list/export_alt_mit_synonymen_standardfelder/all_docs_mit_synonymen_fuer_alt?include_docs=true");
};

// wenn .feld_waehlen geändert wird
// kontrollieren, ob mehr als eine Beziehungssammlung angezeigt wird
// und pro Beziehung eine Zeile ausgegeben wird. 
// Wenn ja: reklamieren und rückgängig machen
window.adb.handleFeldWählenChange = function() {
	'use strict';
	if ($("#export_bez_in_zeilen").prop('checked')) {
		var bez_ds_checked = [],
			that = this;
		$("#exportieren_felder_waehlen_felderliste")
            .find(".feld_waehlen")
            .each(function() {
                if ($(this).prop('checked') && $(this).attr('dstyp') === "Beziehung") {
                    bez_ds_checked.push($(this).attr('datensammlung'));
                }
            });
		// eindeutige Liste der dsTypen erstellen
		bez_ds_checked = _.union(bez_ds_checked);
		if (bez_ds_checked && bez_ds_checked.length > 1) {
			$('#meldung_zuviele_bs').modal();
			$(that).prop('checked', false);
		} else {
			window.adb.exportZurücksetzen();
		}
	}
};

// wenn .feld_waehlen_alle_von_ds geändert wird
// wenn checked: alle unchecken, sonst alle checken
window.adb.handleFeldWählenAlleVonDs = function() {
	'use strict';
	var ds = $(this).attr('datensammlung'),
		status = false;
	if ($(this).prop('checked')) {
		status = true;
	}
	$('[datensammlung="' + ds + '"]').each(function() {
		$(this).prop('checked', status);
	});
};

// wenn exportieren_ds_objekte_waehlen_gruppe geändert wird
window.adb.handleExportierenDsObjekteWählenGruppeChange = function() {
	'use strict';
	window.adb.erstelleListeFürFeldwahl();
};

// wenn export_feld_filtern geändert wird
// kontrollieren, ob mehr als eine Beziehungssammlung Filter enthält. Wenn ja: reklamieren und rückgängig machen
window.adb.handleExportFeldFilternChange = function() {
	'use strict';
    var $this = $(this);
    // die Checkboxen sollen drei Werte annehmen können:
    if (this.type === "checkbox") {
        if (this.readOnly) {
            // so ist es zu Beginn
            // dann soll er auf chedked wechseln
            this.readOnly = this.indeterminate = false;
            $this.prop('checked', true);
        } else if (!$this.prop('checked')) {
            this.readOnly = this.indeterminate = false;
            $this.prop('checked', false);
        } else {
            $this.prop('checked', false);
            this.indeterminate = this.readOnly = true;
        }
    }

	var bez_ds_filtered = [];
	$("#exportieren_objekte_waehlen_ds_collapse")
        .find(".export_feld_filtern")
        .each(function() {
            if ((this.value || this.value === 0) && $(this).attr('dstyp') === "Beziehung") {
                bez_ds_filtered.push($(this).attr('eigenschaft'));
            }
        });
	// eindeutige Liste der dsTypen erstellen
	bez_ds_filtered = _.union(bez_ds_filtered);
	if (bez_ds_filtered && bez_ds_filtered.length > 1) {
		$('#meldung_zuviele_bs').modal();
		$(this).val("");
	} else {
		window.adb.exportZurücksetzen();
	}
};

// wenn exportieren_exportieren angezeigt wird
// zur Schaltfläche Vorschau scrollen
window.adb.handleExportierenExportierenShow = function() {
	'use strict';
    // Fehlermeldung verstecken, falls sie noch offen war
    $("#exportieren_exportieren_error_text")
        .alert()
        .hide();
	$('html, body').animate({
		scrollTop: $("#exportieren_exportieren_tabelle_aufbauen").offset().top
	}, 2000);
};

// wenn .btn.lr_bearb_bearb geklickt wird
window.adb.handleBtnLrBearbBearbKlick = function() {
	'use strict';
	if (!$(this).hasClass('disabled')) {
		window.adb.bearbeiteLrTaxonomie();
	}
};

// wenn .btn.lr_bearb_schuetzen geklickt wird
window.adb.handleBtnLrBearbSchützenClick = function() {
	'use strict';
	if (!$(this).hasClass('disabled')) {
		window.adb.schützeLrTaxonomie();
		// Einstellung merken, damit auch nach Datensatzwechsel die Bearbeitbarkeit bleibt
		delete localStorage.lr_bearb;
	}
};

// wenn .btn.lr_bearb_neu geklickt wird
window.adb.handleBtnLrBearbNeuClick = function() {
	'use strict';
	if (!$(this).hasClass('disabled')) {
		window.adb.initiiereLrParentAuswahlliste($("#Taxonomie").val());
	}
};

// wenn #lr_parent_waehlen_optionen [name="parent_optionen"] geändert wird
window.adb.handleLrParentOptionenChange = function() {
	'use strict';
	// prüfen, ob oberster Node gewählt wurde
	var parent_name = $(this).val(),
		parent_id = this.id,
		parent = {},
		object = {},
		erstelleBaum = require('./modules/erstelleBaum');
	// zuerst eine id holen
	object._id = $.couch.newUUID(1);
	object.Gruppe = "Lebensräume";
	object.Typ = "Objekt";
	object.Taxonomie = {};
	object.Taxonomie.Name = "neue Taxonomie";	// wenn nicht Wurzel, setzen. Passiert in aktualisiereHierarchieEinesNeuenLr
	object.Taxonomie.Eigenschaften = {};
	object.Taxonomie.Eigenschaften.Taxonomie = "neue Taxonomie";	// wenn nicht Wurzel, setzen. Passiert in aktualisiereHierarchieEinesNeuenLr
	// wenn keine Wurzel: Label anzeigen
	if (parent_id !== "0") {
		object.Taxonomie.Eigenschaften.Label = "";
	}
	object.Taxonomie.Eigenschaften.Einheit = "unbeschriebener Lebensraum";
	if (parent_id === "0") {
		object.Taxonomie.Eigenschaften.Einheit = "neue Taxonomie";
	}
	/*Einheit-Nr FNS wird nicht mehr benötigt, bzw. unabhängig führen
	object.Taxonomie.Eigenschaften["Einheit-Nr FNS"] = "";
	if (parent_id === "0") {
		object.Taxonomie.Eigenschaften["Einheit-Nrn FNS von"] = "";
		object.Taxonomie.Eigenschaften["Einheit-Nrn FNS bis"] = "";
	}*/
	object.Taxonomie.Eigenschaften.Beschreibung = "";
	object.Eigenschaftensammlungen = [];
	object.Beziehungssammlungen = [];
	// jetzt den parent erstellen
	// geht nicht vorher, weil die id bekannt sein muss
	if (parent_id === "0") {
		// das ist die Wurzel der Taxonomie
		parent.Name = "neue Taxonomie";
		parent.GUID = object._id;
		// bei der Wurzel ist Hierarchie gleich parent
		object.Taxonomie.Eigenschaften.Hierarchie = [];
		object.Taxonomie.Eigenschaften.Hierarchie.push(parent);
	} else {
		parent.Name = parent_name;
		parent.GUID = parent_id;
	}
	object.Taxonomie.Eigenschaften.Parent = parent;
	var $db = $.couch.db("artendb");
	$db.saveDoc(object, {
		success: function(object_saved) {
			object._rev = object_saved.rev;
			if (parent_id !== "0") {
				// die Hierarchie aufbauen und setzen
				// bei der Wurzel ist sie schon gesetzt
				window.adb.aktualisiereHierarchieEinesNeuenLr(null, object, true);
			} else {
				$.when(erstelleBaum()).then(function() {
					window.adb.öffneBaumZuId(object._id);
					$('#lr_parent_waehlen').modal('hide');
				});
			}
		}
	});
};

// wenn rueckfrage_lr_loeschen_ja geklickt wird
window.adb.handleRückfrageLrLöschenJaClick = function() {
	'use strict';
	// zuerst die id des Objekts holen
	var uri = new Uri($(location).attr('href')),
		id = uri.getQueryParamValue('id'),
		hash = uri.anchor();
	// wenn browser history nicht unterstützt, erstellt history.js eine hash
	// dann muss die id durch die id in der hash ersetzt werden
	if (hash) {
		var uri2 = new Uri(hash);
		id = uri2.getQueryParamValue('id');
	}
	// Objekt selbst inkl. aller hierarchisch darunter liegende Objekte ermitteln und löschen
	var $db = $.couch.db("artendb");
	$db.view('artendb/hierarchie?key="' + id + '"&include_docs=true', {
		success: function(data) {
			// daraus einen Array von docs machen
			var doc_array = _.map(data.rows, function(row) {
				return row.doc;
			});
			// und diese Dokumente nun löschen
			window.adb.löscheMassenMitObjektArray(doc_array);
			// vorigen node ermitteln
			var voriger_node = $.jstree._reference("#" + id)._get_prev("#" + id);
			// node des gelöschten LR entfernen
			$.jstree._reference("#" + id).delete_node("#" + id);
			// vorigen node öffnen
			if (voriger_node) {
				$.jstree._reference(voriger_node).select_node(voriger_node);
			} else {
				window.adb.öffneGruppe("Lebensräume");
			}
		}
	});
};

// Wenn #art .Lebensräume.Taxonomie .controls geändert wird
window.adb.handleLrTaxonomieControlsChange = function() {
	'use strict';
	window.adb.speichern($(this).val(), this.id, $(this).attr('dsName'), $(this).attr('dsTyp'));
};

// wenn .Lebensräume.Taxonomie geöffnet wird
window.adb.handlePanelbodyLrTaxonomieShown = function() {
	'use strict';
	if (localStorage.lr_bearb == "true") {
		window.adb.bearbeiteLrTaxonomie();
	}
};

// wenn #exportieren_exportieren_collapse geöffnet wird
window.adb.handleExportierenExportierenCollapseShown = function() {
	'use strict';
    var that = this;
	// nur ausführen, wenn exportieren_exportieren_collapse offen ist
	// komischerweise wurde dieser Code immer ausgelöst, wenn bei Lebensräumen F5 gedrückt wurde!
	if ($("#exportieren_exportieren_collapse").is(":visible")) {
        if (window.adb.handleExportierenObjekteWählenCollapseShown(that)) {
            // Gruppe ist gewählt, weitermachen
            // Tabelle und Herunterladen-Schaltfläche ausblenden
            $("#exportieren_exportieren_tabelle").hide();
            $(".exportieren_exportieren_exportieren").hide();
            // filtert und baut danach die Vorschautabelle auf
            window.adb.filtereFürExport();
        }
	}
};

window.adb.handleExportierenObjekteWählenCollapseShown = function(that) {
	'use strict';
    var gruppen_gewählt = window.adb.fürExportGewählteGruppen();
    if (gruppen_gewählt.length === 0) {
        // keine Gruppe gewählt
        window.adb.erstelleListeFürFeldwahl();
        // und den panel schliessen
        $(that).collapse('hide');
        return false;
    } else {
        return true;
    }
};

// wenn #exportieren_objekte_Taxonomien_zusammenfassen geklickt wird
window.adb.handleExportierenObjekteTaxonomienZusammenfassenClick = function(that) {
	'use strict';
    var gruppe_ist_gewählt = false;
	if ($(that).hasClass("active")) {
		window.adb.fasseTaxonomienZusammen = false;
		$(that).html("Alle Taxonomien zusammenfassen");
	} else {
		window.adb.fasseTaxonomienZusammen = true;
		$(that).html("Taxonomien einzeln behandeln");
	}
	// Felder neu aufbauen, aber nur, wenn eine Gruppe gewählt ist
	$("#exportieren_objekte_waehlen_gruppen_collapse")
        .find(".exportieren_ds_objekte_waehlen_gruppe")
        .each(function() {
            if ($(that).prop('checked')) {
                gruppe_ist_gewählt = true;
            }
        });
	if (gruppe_ist_gewählt) {
		window.adb.erstelleListeFürFeldwahl();
	}
};

// wenn #exportieren_exportieren_exportieren geklickt wird
window.adb.handleExportierenExportierenExportierenClick = function() {
	'use strict';
	if (window.adb.isFileAPIAvailable()) {
		var exportstring = window.adb.erstelleExportString(window.adb.exportieren_objekte),
			blob = new Blob([exportstring], {type: "text/csv;charset=utf-8;"}),
			d = new Date(),
			month = d.getMonth()+1,
			day = d.getDate(),
			output = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
		saveAs(blob, output + "_export.csv");
	}
};

// wenn .panel geöffnet wird
// Höhe der textareas an Textgrösse anpassen
window.adb.handlePanelShown = function() {
	'use strict';
	$(this).find('textarea').each(function() {
		window.adb.fitTextareaToContent(this.id);
	});
};

// wenn .LinkZuArtGleicherGruppe geklickt wird
window.adb.handleLinkZuArtGleicherGruppeClick = function(id) {
	'use strict';
    $(".suchen").val("");
	$("#tree" + window.adb.Gruppe)
        .jstree("clear_search")
	    .jstree("deselect_all")
	    .jstree("close_all", -1)
	    .jstree("select_node", "#" + id);
};

// wenn Fenstergrösse verändert wird
window.adb.handleResize = function() {
	'use strict';
	window.adb.setzeTreehöhe();
	// Höhe der Textareas korrigieren
	$('#forms').find('textarea').each(function() {
		window.adb.fitTextareaToContent(this.id);
	});
};

// wenn .anmelden_btn geklickt wird
window.adb.handleAnmeldenBtnClick = function(that) {
	'use strict';
	// es muss mitgegeben werden, woher die Anmeldung kam, damit die email aus dem richtigen Feld geholt werden kann
	var bs_ds = that.id.substring(that.id.length-2);
	if (bs_ds === "rt") {
		bs_ds = "art";
	}
	window.adb.meldeUserAn(bs_ds);
};

// wenn .Email keyup
window.adb.handleEmailKeyup = function() {
	'use strict';
	//allfällig noch vorhandenen Hinweis ausblenden
	$(".Emailhinweis").hide();
};

// wenn .Passwort keyup
window.adb.handlePasswortKeyup = function() {
	'use strict';
	//allfällig noch vorhandenen Hinweis ausblenden
	$(".Passworthinweis").hide();
};

// wenn .Passwort2 keyup
window.adb.handlePasswort2Keyup = function() {
	'use strict';
	//allfällig noch vorhandenen Hinweis ausblenden
	$(".Passworthinweis2").hide();
};

// wenn .konto_erstellen_btn geklickt wird
window.adb.handleKontoErstellenBtnClick = function(that) {
	'use strict';
	var bs_ds = that.id.substring(that.id.length-2);
	if (bs_ds === "rt") {
		bs_ds = "art";
	}
	$(".signup").show();
	$(".anmelden_btn").hide();
	$(".abmelden_btn").hide();
	$(".konto_erstellen_btn").hide();
	$(".konto_speichern_btn").show();
	$(".importieren_anmelden_fehler").hide();
	setTimeout(function() {
		$("#Email_" + bs_ds).focus();
	}, 50);  // need to use a timer so that .blur() can finish before you do .focus()
};

// wenn .konto_speichern_btn geklickt wird
window.adb.handleKontoSpeichernBtnClick = function(that) {
	'use strict';
	var bs_ds = that.id.substring(that.id.length-2);
	if (bs_ds === "rt") {
		bs_ds = "art";
	}
	if (window.adb.validiereSignup(bs_ds)) {
		window.adb.erstelleKonto(bs_ds);
		// Anmeldefenster zurücksetzen
		$(".signup").hide();
		$(".anmelden_btn").hide();
		$(".abmelden_btn").show();
		$(".konto_erstellen_btn").hide();
		$(".konto_speichern_btn").hide();
	}
};

// wenn .gruppe geklickt wird
window.adb.handleÖffneGruppeClick = function() {
	'use strict';
	window.adb.öffneGruppe($(this).attr("Gruppe"));
};

// wenn #DsFelder geändert wird
window.adb.handleDsFelderChange = function() {
	'use strict';
	window.adb.meldeErfolgVonIdIdentifikation("Ds");
};

// wenn #BsFelder geändert wird
window.adb.handleBsFelderChange = function() {
	'use strict';
	window.adb.meldeErfolgVonIdIdentifikation("Bs");
};

// wenn #DsId geändert wird
window.adb.handleDsIdChange = function() {
	'use strict';
	window.adb.meldeErfolgVonIdIdentifikation("Ds");
};

// wenn #BsId geändert wird
window.adb.handleBsIdChange = function() {
	'use strict';
	window.adb.meldeErfolgVonIdIdentifikation("Bs");
};

// wenn in textarea keyup oder focus
window.adb.handleTextareaKeyupFocus = function() {
	'use strict';
	window.adb.fitTextareaToContent(this.id);
};

// übernimmt eine Array mit Objekten
// und den div, in dem die Tabelle eingefügt werden soll
// plus einen div, in dem die Liste der Felder angzeigt wird (falls dieser div mitgeliefert wird)
// baut damit eine Tabelle auf und fügt sie in den übergebenen div ein
window.adb.erstelleTabelle = function(Datensätze, felder_div, tabellen_div) {
	'use strict';
	var html = "",
		Feldname = "",
		html_ds_felder_div = "",
        erste_10_ds,
        $tabellen_div = $("#"+tabellen_div);
	if (Datensätze.length > 10) {
		html += "Vorschau der ersten 10 von " + Datensätze.length + " Datensätzen:";
	} else if (Datensätze.length > 1) {
		html += "Vorschau der " + Datensätze.length + " Datensätze:";
	} else {
		html += "Vorschau des einzigen Datensatzes:";
	}
	// Tabelle initiieren
	html += '<div class="table-responsive"><table class="table table-bordered table-striped table-condensed table-hover">';
	// Titelzeile aufbauen
	// Zeile anlegen
	// gleichzeitig Feldliste für Formular anlegen
	if (felder_div) {
		if (felder_div === "DsFelder_div") {
			Feldname = "DsFelder";
		} else if (felder_div === "BsFelder_div") {
			Feldname = "BsFelder";
		}
	}
	html_ds_felder_div += '<label class="control-label" for="'+Feldname+'">Feld mit eindeutiger ID<br>in den Importdaten</label>';
	html_ds_felder_div += '<select multiple class="controls form-control input-sm" id="'+Feldname+'" style="height:' + ((Object.keys(Datensätze[0]).length*19)+9)  + 'px">';
	html += "<thead><tr>";

	// durch die Felder des ersten Datensatzes zirkeln
    _.each(Datensätze[0], function(feldwert, feldname) {
        // Spalte anlegen
        html += "<th>" + feldname + "</th>";
        // Option für Feldliste anfügen
        html_ds_felder_div += '<option value="' + feldname + '">' + feldname + '</option>';
    });
	// Titelzeile abschliessen
	html += "</tr></thead><tbody>";
	// Feldliste abschliessen
	html_ds_felder_div += '</select>';
	if (felder_div) {
		// nur, wenn ein felder_div übergeben wurde
		$("#"+felder_div).html(html_ds_felder_div);
	}

    // Tabellenzeilen aufbauen
	// nur die ersten 10 Datensätze anzeigen
    erste_10_ds = _.first(Datensätze, 10);

    _.each(erste_10_ds, function(datensatz) {
        // Zeile anlegen
        html += "<tr>";
        // durch die Felder zirkeln
        _.each(datensatz, function(feldwert, feldname) {
            // Spalte anlegen
            html += "<td>";
            if (feldwert === null) {
                // Null-Werte als leer anzeigen
                html += "";
            } else if (typeof feldwert === "object") {
                html += JSON.stringify(feldwert);
            } else if (feldwert || feldwert === 0) {
                html += feldwert;
            } else if (feldwert === false) {
                // dafür sogen, dass false auch angezeigt wird
                // ohne diese Zeile bleibt das Feld sonst leer
                html += feldwert;
            } else {
                // nullwerte als leerwerte (nicht) anzeigen
                html += "";
            }
            // Spalte abschliessen
            html += "</td>";
        });
        // Zeile abschliessen
        html += "</tr>";
    });

	// Tabelle abschliessen
	html += '</tbody></table></div>';
	// html in div einfügen
	$tabellen_div
        .html(html)
	    .css("margin-top", "20px")
        // sichtbar stellen
        .show();
    // fenster scrollen
    $('html, body').animate({
        scrollTop: $tabellen_div.offset().top
    }, 2000);
};

// erhält dbs = "Ds" oder "Bs"
window.adb.meldeErfolgVonIdIdentifikation = function(dbs) {
	'use strict';
    var $dbsFelderSelected = $("#"+dbs+"Felder option:selected"),
        $dbsIdSelected = $("#"+dbs+"Id option:selected"),
        ids_von_datensätzen = [],
        mehrfach_vorkommende_ids = [],
        ids_von_nicht_importierbaren_datensätzen = [];

	if ($dbsFelderSelected.length && $dbsIdSelected.length) {
		// beide ID's sind gewählt
		window.adb[dbs+"FelderId"] = $dbsFelderSelected.val();
		window.adb.DsId = $dbsIdSelected.val();
		window.adb[dbs+"Id"] = $dbsIdSelected.val();
		// das hier wird später noch für den Inmport gebraucht > globale Variable machen
		window.adb.ZuordbareDatensätze = [];
		$("#importieren_"+dbs.toLowerCase()+"_ids_identifizieren_hinweis_text")
            .alert()
            .html("Bitte warten, die Daten werden analysiert.<br>Das kann eine Weile dauern...")
            .removeClass("alert-success")
            .removeClass("alert-danger")
            .addClass("alert-info")
            .show();
        $('html, body').animate({
            scrollTop: $("#importieren_" + dbs.toLowerCase() + "_ids_identifizieren_collapse").offset().top
        }, 2000);

		// Dokumente aus der Gruppe der Datensätze holen
		// durch alle loopen. Dabei einen Array von Objekten bilden mit id und guid
		// kontrollieren, ob eine id mehr als einmal vorkommt
		var $db = $.couch.db("artendb");
		if (window.adb.DsId === "guid") {
			$db.view('artendb/all_docs', {
				success: function(data) {
                    var name_des_id_felds = window.adb[dbs+"FelderId"];
                    // durch die importierten Datensätze loopen
                    _.each(window.adb[dbs.toLowerCase()+"Datensätze"], function(import_datensatz) {
                        if (ids_von_datensätzen.indexOf(import_datensatz[name_des_id_felds]) === -1) {
                            // diese ID wurde noch nicht hinzugefügt > hinzufügen
                            ids_von_datensätzen.push(import_datensatz[name_des_id_felds]);
                            // prüfen, ob die ID zugeordnet werden kann
                            var zugehöriges_objekt = _.find(data.rows, function(objekt_row) {
                                return objekt_row.key === import_datensatz[name_des_id_felds];
                            });
                            if (zugehöriges_objekt) {
                                window.adb.ZuordbareDatensätze.push(import_datensatz[name_des_id_felds]);
                            } else {
                                // diese ID konnte nicht hinzugefügt werden. In die Liste der nicht hinzugefügten aufnehmen
                                ids_von_nicht_importierbaren_datensätzen.push(import_datensatz[name_des_id_felds]);
                            }
                        } else {
                            // diese ID wurden schon hinzugefügt > mehrfach!
                            mehrfach_vorkommende_ids.push(import_datensatz[name_des_id_felds]);
                        }
                    });
					window.adb.meldeErfolgVonIdIdentifikation_02(mehrfach_vorkommende_ids, ids_von_datensätzen, ids_von_nicht_importierbaren_datensätzen, dbs);
				}
			});
		} else {
			$db.view('artendb/gruppe_id_taxonomieid?startkey=["' + window.adb.DsId + '"]&endkey=["' + window.adb.DsId + '",{},{}]', {
				success: function(data) {
                    var name_des_id_felds = window.adb[dbs+"FelderId"];
                    // durch die importierten Datensätze loopen
                    _.each(window.adb[dbs.toLowerCase()+"Datensätze"], function(import_datensatz) {
                        if (ids_von_datensätzen.indexOf(import_datensatz[name_des_id_felds]) === -1) {
                            // diese ID wurde noch nicht hinzugefügt > hinzufügen
                            ids_von_datensätzen.push(import_datensatz[name_des_id_felds]);
                            // prüfen, ob die ID zugeordnet werden kann
                            var zugehöriges_objekt = _.find(data.rows, function(objekt_row) {
                                return objekt_row.key[2] === import_datensatz[name_des_id_felds];
                            });
                            if (zugehöriges_objekt) {
                                var Objekt = {};
                                Objekt.Id = parseInt(import_datensatz[name_des_id_felds], 10);
                                Objekt.Guid = zugehöriges_objekt.key[1];
                                window.adb.ZuordbareDatensätze.push(Objekt);
                            } else {
                                // diese ID konnte nicht hinzugefügt werden. In die Liste der nicht hinzugefügten aufnehmen
                                ids_von_nicht_importierbaren_datensätzen.push(import_datensatz[name_des_id_felds]);
                            }
                        } else {
                            // diese ID wurden schon hinzugefügt > mehrfach!
                            mehrfach_vorkommende_ids.push(import_datensatz[name_des_id_felds]);
                        }
                    });
					window.adb.meldeErfolgVonIdIdentifikation_02(mehrfach_vorkommende_ids, ids_von_datensätzen, ids_von_nicht_importierbaren_datensätzen, dbs);
				}
			});
		}
	}
};

window.adb.meldeErfolgVonIdIdentifikation_02 = function(mehrfach_vorkommende_ids, ids_von_datensätzen, ids_von_nicht_importierbaren_datensätzen, dbs) {
	'use strict';
    var $importieren_dbs_ids_identifizieren_hinweis_text = $("#importieren_"+dbs.toLowerCase()+"_ids_identifizieren_hinweis_text");
    $importieren_dbs_ids_identifizieren_hinweis_text.alert();
	// rückmelden: Falls mehrfache ID's, nur das rückmelden und abbrechen
	if (mehrfach_vorkommende_ids.length && dbs !== "Bs") {
		$importieren_dbs_ids_identifizieren_hinweis_text
            .html("Die folgenden ID's kommen mehrfach vor: " + mehrfach_vorkommende_ids + "<br>Bitte entfernen oder korrigieren Sie die entsprechenden Zeilen")
            .removeClass("alert-info")
            .removeClass("alert-success")
            .addClass("alert-danger");
	} else if (window.adb.ZuordbareDatensätze.length < ids_von_datensätzen.length) {
		// rückmelden: Total x Datensätze. y davon enthalten die gewählte ID. q davon können zugeordnet werden
        if (window.adb.ZuordbareDatensätze.length > 0) {
            // ein Teil der Datensätze kann importiert werden. Als Hinweis melden
            $importieren_dbs_ids_identifizieren_hinweis_text
                .removeClass("alert-danger")
                .removeClass("alert-success")
                .addClass("alert-info");
        } else {
            // keine Datensätze können importier werden. Als Misserfolg melden
            $importieren_dbs_ids_identifizieren_hinweis_text
                .removeClass("alert-info")
                .removeClass("alert-success")
                .addClass("alert-danger");
        }
		if (dbs === "Bs") {
			$importieren_dbs_ids_identifizieren_hinweis_text.html("Die Importtabelle enthält " + window.adb[dbs.toLowerCase()+"Datensätze"].length + " Beziehungen von " + ids_von_datensätzen.length + " Arten:<br>Beziehungen von " + ids_von_datensätzen.length + " Arten enthalten einen Wert im Feld \"" + window.adb[dbs+"FelderId"] + "\"<br>" + window.adb.ZuordbareDatensätze.length + " können zugeordnet und importiert werden<br>ACHTUNG: Beziehungen von " + ids_von_nicht_importierbaren_datensätzen.length + " Arten mit den folgenden Werten im Feld \"" + window.adb[dbs+"FelderId"] + "\" können NICHT zugeordnet und importiert werden: " + ids_von_nicht_importierbaren_datensätzen);
		} else {
			$importieren_dbs_ids_identifizieren_hinweis_text.html("Die Importtabelle enthält " + window.adb[dbs.toLowerCase()+"Datensätze"].length + " Datensätze:<br>" + ids_von_datensätzen.length + " enthalten einen Wert im Feld \"" + window.adb[dbs+"FelderId"] + "\"<br>" + window.adb.ZuordbareDatensätze.length + " können zugeordnet und importiert werden<br>ACHTUNG: " + ids_von_nicht_importierbaren_datensätzen.length + " Datensätze mit den folgenden Werten im Feld \"" + window.adb[dbs+"FelderId"] + "\" können NICHT zugeordnet und importiert werden: " + ids_von_nicht_importierbaren_datensätzen);
		}
		$("#"+dbs+"Importieren").show();
		$("#"+dbs+"Entfernen").show();
	} else {
		// rückmelden: Total x Datensätze. y davon enthalten die gewählte ID. q davon können zugeordnet werden
		$importieren_dbs_ids_identifizieren_hinweis_text
            .removeClass("alert-info")
            .removeClass("alert-danger")
            .addClass("alert-success");
		if (dbs === "Bs") {
			$importieren_dbs_ids_identifizieren_hinweis_text.html("Die Importtabelle enthält " + window.adb[dbs.toLowerCase()+"Datensätze"].length + " Beziehungen von " + ids_von_datensätzen.length + " Arten:<br>Beziehungen von " + ids_von_datensätzen.length + " Arten enthalten einen Wert im Feld \"" + window.adb[dbs+"FelderId"] + "\"<br>Beziehungen von " + window.adb.ZuordbareDatensätze.length + " Arten können zugeordnet und importiert werden");
		} else {
			$importieren_dbs_ids_identifizieren_hinweis_text.html("Die Importtabelle enthält " + window.adb[dbs.toLowerCase()+"Datensätze"].length + " Datensätze:<br>" + ids_von_datensätzen.length + " enthalten einen Wert im Feld \"" + window.adb[dbs+"FelderId"] + "\"<br>" + window.adb.ZuordbareDatensätze.length + " können zugeordnet und importiert werden");
		}
		$("#"+dbs+"Importieren").show();
		$("#"+dbs+"Entfernen").show();
	}
    $importieren_dbs_ids_identifizieren_hinweis_text.show();
    $('html, body').animate({
        scrollTop: $("#importieren_" + dbs.toLowerCase() + "_ids_identifizieren_collapse").offset().top
    }, 2000);
};

// bekommt das Objekt mit den Datensätzen (window.adb.dsDatensätze) und die Liste der zu aktualisierenden Datensätze (window.adb.ZuordbareDatensätze)
// holt sich selber die in den Feldern erfassten Infos der Datensammlung
window.adb.importiereDatensammlung = function() {
	'use strict';
	var datensammlung,
		anzahl_felder,
		anz_ds = window.adb.dsDatensätze.length,
        // Der Verlauf soll angezeigt werden, daher braucht es einen zähler
        anz_ds_importiert = 0,
		DsImportiert = $.Deferred(),
        $DsName = $("#DsName"),
        $DsBeschreibung = $("#DsBeschreibung"),
        nr,
        rückmeldung_intro,
        rückmeldung_links = "",
        rückmeldung,
        $DsDatenstand = $("#DsDatenstand"),
        $DsLink = $("#DsLink"),
        $DsUrsprungsDs = $("#DsUrsprungsDs"),
        $importieren_ds_import_ausfuehren_hinweis = $("#importieren_ds_import_ausfuehren_hinweis"),
        $importieren_ds_import_ausfuehren_hinweis_text = $("#importieren_ds_import_ausfuehren_hinweis_text"),
        erste_10_ids;
	// prüfen, ob ein DsName erfasst wurde. Wenn nicht: melden
	if (!$DsName.val()) {
		$("#meldung_individuell_label").html("Namen fehlt");
		$("#meldung_individuell_text").html("Bitte geben Sie der Datensammlung einen Namen");
		$("#meldung_individuell_schliessen").html("schliessen");
		$('#meldung_individuell').modal();
		$DsName.focus();
		return false;
	}

    // changes feed einrichten
    // versucht, view als Filter zu verwenden, oder besser, den expliziten Filter dsimport mit dsname als Kriterium
    // Ergebnis: bei view kamen alle changes, auch design doc. Bei dsimport kam nichts.
    /*var changes_options = {};
    changes_options.dsname = $DsName.val();
    changes_options.filter = "artendb/dsimport";
    window.adb.queryChangesStartingNow();

    // listener einrichten, der meldet, wenn ein Datensatz aktualisiert wurde
    $(document).bind('longpoll-data', function(event, data) {
        anzDsImportiert = anzDsImportiert + data.results.length;
        var prozent = Math.round(anzDsImportiert/anzDs*100);
        $("#DsImportierenProgressbar").css('width', prozent +'%').attr('aria-valuenow', prozent);
        if (anzDsImportiert >= anzDs-1 && anzDsImportiert <= anzDs) {
            // Rückmeldung in Feld anzeigen:
            $importieren_ds_import_ausfuehren_hinweis.css('display', 'block');
        }
    });*/

    // listener einrichten, der meldet, wenn ein Datensatz aktualisiert wurde
    $(document).bind('adb.ds_hinzugefügt', function() {
        anz_ds_importiert++;
        var prozent = Math.round(anz_ds_importiert/anz_ds*100),
            rückmeldung;
        $("#DsImportierenProgressbar")
            .css('width', prozent +'%')
            .attr('aria-valuenow', prozent);
        $("#DsImportierenProgressbarText").html(prozent + "%");
        $importieren_ds_import_ausfuehren_hinweis.removeClass("alert-success").removeClass("alert-danger").addClass("alert-info");
        rückmeldung = "Die Daten wurden importiert.<br>Die Indexe werden aktualisiert...";
        $importieren_ds_import_ausfuehren_hinweis_text.html(rückmeldung);
        $('html, body').animate({
            scrollTop: $importieren_ds_import_ausfuehren_hinweis.offset().top
        }, 2000);
        if (anz_ds_importiert === anz_ds) {
            // die Indexe
            var $db = $.couch.db("artendb");
            $db.view('artendb/lr', {
                success: function() {
                    // melden, dass views aktualisiert wurden
                    $importieren_ds_import_ausfuehren_hinweis.removeClass("alert-info").removeClass("alert-danger").addClass("alert-success");
                    rückmeldung = "Die Daten wurden importiert.<br>";
                    rückmeldung += "Die Indexe wurden aktualisiert.<br><br>";
                    rückmeldung += "Nachfolgend Links zu Objekten mit importierten Daten, damit Sie das Resultat überprüfen können:<br>";
                    $importieren_ds_import_ausfuehren_hinweis_text.html(rückmeldung + rückmeldung_links);
                    // Rückmeldungs-links behalten, falls der Benutzer direkt anschliessend entfernt
                    window.adb.rückmeldung_links = rückmeldung_links;
                    $('html, body').animate({
                        scrollTop: $importieren_ds_import_ausfuehren_hinweis.offset().top
                    }, 2000);
                }
            });
        }
    });
    _.each(window.adb.dsDatensätze, function(ds_datensatz) {
        // Datensammlung als Objekt gründen
        datensammlung = {};
        datensammlung.Name = $DsName.val();
        if ($DsBeschreibung.val()) {
            datensammlung.Beschreibung = $DsBeschreibung.val();
        }
        if ($DsDatenstand.val()) {
            datensammlung.Datenstand = $DsDatenstand.val();
        }
        if ($DsLink.val()) {
            datensammlung.Link = $DsLink.val();
        }
        // falls die Datensammlung zusammenfassend ist
        if ($("#DsZusammenfassend").prop('checked')) {
            datensammlung.zusammenfassend = true;
        }
        if ($DsUrsprungsDs.val()) {
            datensammlung.Ursprungsdatensammlung = $DsUrsprungsDs.val();
        }
        datensammlung["importiert von"] = localStorage.Email;
        // Felder der Datensammlung als Objekt gründen
        datensammlung.Eigenschaften = {};
        // Felder anfügen, wenn sie Werte enthalten
        anzahl_felder = 0;
        _.each(ds_datensatz, function(feldwert, feldname) {
            // nicht importiert wird die ID und leere Felder
            // und keine Taxonomie ID, wenn sie nur wegen der Identifikation mitgeliefert wurde
            //if (feldname !== window.adb.DsFelderId && feldwert !== "" && feldwert !== null && (window.adb.DsId !== "guid" && feldname !== "Taxonomie ID")) {
            if (feldname !== window.adb.DsFelderId && feldwert !== "" && feldwert !== null) {
                if (feldwert === -1) {
                    // Access macht in Abfragen mit Wenn-Klausel aus true -1 > korrigieren
                    datensammlung.Eigenschaften[feldname] = true;
                } else if (feldwert == "true") {
                    // true/false nicht als string importieren
                    datensammlung.Eigenschaften[feldname] = true;
                } else if (feldwert == "false") {
                    datensammlung.Eigenschaften[feldname] = false;
                } else if (feldwert == parseInt(feldwert, 10)) {
                    // Ganzzahlen als Zahlen importieren
                    datensammlung.Eigenschaften[feldname] = parseInt(feldwert, 10);
                } else if (feldwert == parseFloat(feldwert)) {
                    // Bruchzahlen als Zahlen importieren
                    datensammlung.Eigenschaften[feldname] = parseFloat(feldwert);
                } else {
                    // Normalfall
                    datensammlung.Eigenschaften[feldname] = feldwert;
                }
                anzahl_felder += 1;
            }
        });
        // entsprechenden Index öffnen
        // sicherstellen, dass Daten vorkommen. Gibt sonst einen Fehler
        if (anzahl_felder > 0) {
            // Datenbankabfrage ist langsam. Extern aufrufen,
            // sonst überholt die for-Schlaufe und Datensammlung ist bis zur saveDoc-Ausführung eine andere!
            var guid;
            if (window.adb.DsId === "guid") {
                // die in der Tabelle mitgelieferte id ist die guid
                guid = ds_datensatz[window.adb.DsFelderId];
            } else {
                var ds_datensatz_mit_richtiger_id = _.find(window.adb.ZuordbareDatensätze, function(datensatz) {
                    return datensatz.Id == ds_datensatz[window.adb.DsFelderId];
                });
                guid = ds_datensatz_mit_richtiger_id.Guid;
            }
            // kann sein, dass der guid oben nicht zugeordnet werden konnte. Dann nicht anfügen
            if (guid) {
                console.log("füge ds zu objekt");
                window.adb.fügeDatensammlungZuObjekt(guid, datensammlung);
            }
        }
    });
    // Für 10 Kontrollbeispiele die Links aufbauen
    if (window.adb.DsId === "guid") {
        erste_10_ids = _.first(window.adb.ZuordbareDatensätze, 10);
    } else {
        erste_10_ids = _.pluck(_.first(window.adb.ZuordbareDatensätze, 10), "Guid");
    }
    _.each(erste_10_ids, function(id, index) {
        nr = index + 1;
        rückmeldung_links += '<a href="' + $(location).attr("protocol") + '//' + $(location).attr("host") + $(location).attr("pathname") + '?id=' + id + '"  target="_blank">Beispiel ' + nr + '</a><br>';
    });

    // Rückmeldung in Feld anzeigen
    $importieren_ds_import_ausfuehren_hinweis.removeClass("alert-success").removeClass("alert-danger").addClass("alert-info");
    rückmeldung = "Die Daten werden importiert...";
	$importieren_ds_import_ausfuehren_hinweis_text.html(rückmeldung);
    $importieren_ds_import_ausfuehren_hinweis.css('display', 'block');
    $('html, body').animate({
        scrollTop: $importieren_ds_import_ausfuehren_hinweis.offset().top
    }, 2000);
	DsImportiert.resolve();
};

// wird momentan nicht benutzt
window.adb.queryChangesStartingNow = function(options) {
	'use strict';
    options = options || {};
    options.since = "now";
    if (options.filter) {
        // der Filter bremst die Abfrage - das ist schlecht, weil dann bereits DS aktualisiert wurden!
        // daher für die Erstabfrage entfernen
        var filter = options.filter;
        var dsname = options.dsname;
        delete options.view;
        delete options.dsname;
    }
    $.ajax({
        type: "get",
        url: "/artendb/_changes",
        dataType: "json",
        data: options
    })
    .done(function(data) {
        $(document).trigger('longpoll-data', data, data.last_seq);
        options.feed = "longpoll";
        options.since = data.last_seq;
        if (filter) {
            options.filter = filter;
            options.dsname = dsname;
        }
        $.ajax({
            type: "get",
            url: "/artendb/_changes",
            dataType: "json",
            data: options
        })
        .done(function(data2) {
            if (data2.results.length > 0 ) {
                $(document).trigger('longpoll-data2', data2);
            }
            options.since = data2.last_seq;
            // dafür sorgen, dass weiter beobachtet wird
            window.adb.queryChanges(options);
        });
    });
};

// wird momentan nicht benutzt
window.adb.queryChanges = function(options) {
	'use strict';
    options = options || {};
    options.since = options.since || "now";
    options.feed = options.feed || "longpoll";
    $.ajax({
        type: "get",
        url: "/artendb/_changes",
        dataType: "json",
        data: options
    })
    .done(function(data) {
        if (data.results.length > 0 ) {
            $(document).trigger('longpoll-data', data);
        }
        options.since = data.last_seq;
        window.adb.queryChanges(options);
    });
};

// bekommt das Objekt mit den Datensätzen (window.adb.bsDatensätze) und die Liste der zu aktualisierenden Datensätze (window.adb.ZuordbareDatensätze)
// holt sich selber die in den Feldern erfassten Infos der Datensammlung
window.adb.importiereBeziehungssammlung = function() {
	'use strict';
	var anzahl_felder,
		anzahl_beziehungssammlungen = window.adb.bsDatensätze.length,
        anz_bs_importiert = 0,
        erste_10_ids,
        nr,
        rückmeldung,
        rückmeldung_intro,
        rückmeldung_links = "",
		bs_importiert = $.Deferred(),
        $BsName = $("#BsName"),
        $BsBeschreibung = $("#BsBeschreibung"),
        $BsDatenstand = $("#BsDatenstand"),
        $BsLink = $("#BsLink"),
        $BsUrsprungsBs = $("#BsUrsprungsBs"),
        $importieren_bs_import_ausfuehren_hinweis = $("#importieren_bs_import_ausfuehren_hinweis"),
        $importieren_bs_import_ausfuehren_hinweis_text = $("#importieren_bs_import_ausfuehren_hinweis_text");
	// prüfen, ob ein BsName erfasst wurde. Wenn nicht: melden
	if (!$BsName.val()) {
		$("#meldung_individuell_label").html("Namen fehlt");
		$("#meldung_individuell_text").html("Bitte geben Sie der Beziehungssammlung einen Namen");
		$("#meldung_individuell_schliessen").html("schliessen");
		$('#meldung_individuell').modal();
		$BsName.focus();
		return false;
	}

	// Rückmeldung in Feld anzeigen:
    rückmeldung = "Die Daten werden importiert...";
    $importieren_bs_import_ausfuehren_hinweis_text.html(rückmeldung);
    $importieren_bs_import_ausfuehren_hinweis
        .removeClass("alert-success")
        .removeClass("alert-danger")
        .addClass("alert-info");
    $importieren_bs_import_ausfuehren_hinweis.alert().show();
    $('html, body').animate({
        scrollTop: $importieren_bs_import_ausfuehren_hinweis.offset().top
    }, 2000);

    // listener einrichten, der meldet, wenn ein Datensatz aktualisiert wurde
    $(document).bind('adb.bs_hinzugefügt', function() {
        anz_bs_importiert++;
        var prozent = Math.round(anz_bs_importiert/anzahl_beziehungssammlungen*100);
        $("#BsImportierenProgressbar")
            .css('width', prozent +'%')
            .attr('aria-valuenow', prozent);
        $("#BsImportierenProgressbarText").html(prozent + "%");
        $importieren_bs_import_ausfuehren_hinweis
            .removeClass("alert-success")
            .removeClass("alert-danger")
            .addClass("alert-info")
            .show();
        rückmeldung = "Die Daten werden importiert...<br>Die Indexe werden aktualisiert...";
        $importieren_bs_import_ausfuehren_hinweis_text.html(rückmeldung);
        $('html, body').animate({
            scrollTop: $importieren_bs_import_ausfuehren_hinweis.offset().top
        }, 2000);
        if (anz_bs_importiert === anzahl_beziehungssammlungen) {
            // Indices aktualisieren
            var $db = $.couch.db("artendb");
            $db.view('artendb/lr', {
                success: function() {
                    // melden, dass Indexe aktualisiert wurden
                    $importieren_bs_import_ausfuehren_hinweis
                        .removeClass("alert-info")
                        .removeClass("alert-danger")
                        .addClass("alert-success")
                        .show();
                    rückmeldung = "Die Daten wurden importiert.<br>";
                    rückmeldung += "Die Indexe wurden neu aufgebaut.<br><br>";
                    rückmeldung += "Nachfolgend Links zu Objekten mit importierten Daten, damit Sie das Resultat überprüfen können:<br>";
                    $importieren_bs_import_ausfuehren_hinweis_text.html(rückmeldung + rückmeldung_links);
                    // Rückmeldungs-links behalten, falls der Benutzer direkt anschliessend entfernt
                    window.adb.rückmeldung_links = rückmeldung_links;
                    $('html, body').animate({
                        scrollTop: $importieren_bs_import_ausfuehren_hinweis.offset().top
                    }, 2000);
                }
            });
        }
    });

	// zuerst: Veranlassen, dass die Beziehungspartner in window.adb.bsDatensätze in einen Array der richtigen Form umgewandelt werden
	$.when(window.adb.bereiteBeziehungspartnerFürImportVor())
		.then(function() {
			setTimeout(function() {
				anzahl_beziehungssammlungen = 0;
				var beziehungssammlung,
                    beziehungssammlung_vorlage = {};
				beziehungssammlung_vorlage.Name = $BsName.val();
				if ($BsBeschreibung.val()) {
					beziehungssammlung_vorlage.Beschreibung = $BsBeschreibung.val();
				}
				if ($BsDatenstand.val()) {
					beziehungssammlung_vorlage.Datenstand = $BsDatenstand.val();
				}
				if ($BsLink.val()) {
					beziehungssammlung_vorlage.Link = $BsLink.val();
				}
				// falls die Datensammlung zusammenfassend ist
				if ($("#BsZusammenfassend").prop('checked')) {
					beziehungssammlung_vorlage.zusammenfassend = true;
				}
				if ($BsUrsprungsBs.val()) {
					beziehungssammlung_vorlage.Ursprungsdatensammlung = $BsUrsprungsBs.val();
				}
				beziehungssammlung_vorlage["importiert von"] = localStorage.Email;
				beziehungssammlung_vorlage.Beziehungen = [];
				// zunächst den Array von Objekten in ein Objekt mit Eigenschaften = ObjektGuid und darin Array mit allen übrigen Daten verwandeln
				var bs_datensätze_objekt = _.groupBy(window.adb.bsDatensätze, function(objekt) {
					// id in guid umwandeln
					var guid;
					if (window.adb.BsId === "guid") {
						// die in der Tabelle mitgelieferte id ist die guid
						guid = objekt[window.adb.BsFelderId];
					} else {
						for (var q = 0; q < window.adb.ZuordbareDatensätze.length; q++) {
							// in den zuordbaren Datensätzen nach dem Objekt mit der richtigen id suchen
							if (window.adb.ZuordbareDatensätze[q].Id == objekt[window.adb.BsFelderId]) {
								// und die guid auslesen
								guid = window.adb.ZuordbareDatensätze[q].Guid;
								break;
							}
						}
					}
					objekt.GUID = guid;
					return objekt.GUID;
				});
				// jetzt durch die GUID's loopen und die jeweiligen Beziehungen anhängen
				$.each(bs_datensätze_objekt, function(importdaten_objekt_id, importdaten_felder_array) {
					var beziehungen = [];
					anzahl_beziehungssammlungen += 1;
					// Beziehungssammlung als Objekt gründen, indem die Vorlage kopiert wird
					beziehungssammlung = jQuery.extend(true, {}, beziehungssammlung_vorlage);
                    _.each(importdaten_felder_array, function(importdaten_feld) {
                        // durch die Felder der Beziehungen loopen
                        anzahl_felder = 0;
                        // Felder der Beziehungssammlung als Objekt gründen
                        var beziehung = {};
                        _.each(importdaten_feld, function(feldwert, feldname) {
                            // durch die Felder der Beziehung loopen
                            // nicht importiert wird die GUID und leere Felder
                            if (feldname !== "GUID" && feldwert !== "" && feldwert !== null) {
                                if (feldwert === -1) {
                                    // Access macht in Abfragen mit Wenn-Klausel aus true -1 > korrigieren
                                    beziehung[feldname] = true;
                                } else if (feldwert == "true") {
                                    // true/false nicht als string importieren
                                    beziehung[feldname] = true;
                                } else if (feldwert == "false") {
                                    beziehung[feldname] = false;
                                } else if (feldwert == parseInt(feldwert, 10)) {
                                    // Ganzzahlen als Zahlen importieren
                                    beziehung[feldname] = parseInt(feldwert, 10);
                                } else if (feldwert == parseFloat(feldwert)) {
                                    // Bruchzahlen als Zahlen importieren
                                    beziehung[feldname] = parseFloat(feldwert);
                                } else if (feldname == "Beziehungspartner") {
                                    beziehung[feldname] = [];
                                    // durch Beziehungspartner loopen und GUIDS mit Objekten ersetzen
                                    _.each(feldwert, function(beziehungspartner_feld) {
                                        beziehung[feldname].push(window.adb.bezPartner_objekt[beziehungspartner_feld]);
                                    });
                                } else {
                                    // Normalfall
                                    beziehung[feldname] = feldwert;
                                }
                                anzahl_felder++;
                            }
                        });
                        if (anzahl_felder > 0) {
                            beziehungen.push(beziehung);
                        }
                    });
					// entsprechenden Index öffnen
					// sicherstellen, dass Daten vorkommen. Gibt sonst einen Fehler
					if (beziehungen.length > 0) {
						// Datenbankabfrage ist langsam. Extern aufrufen, 
						// sonst überholt die for-Schlaufe und Beziehungssammlung ist bis zur saveDoc-Ausführung eine andere!
						window.adb.fügeBeziehungenZuObjekt(importdaten_objekt_id, beziehungssammlung, beziehungen);
					}
				});

                // Für 10 Kontrollbeispiele die Links aufbauen
                if (window.adb.BsId === "guid") {
                    erste_10_ids = _.first(window.adb.ZuordbareDatensätze, 10);
                } else {
                    erste_10_ids = _.pluck(_.first(window.adb.ZuordbareDatensätze, 10), "Guid");
                }
                _.each(erste_10_ids, function(id, index) {
                    nr = index +1;
                    rückmeldung_links += '<a href="' + $(location).attr("protocol") + '//' + $(location).attr("host") + $(location).attr("pathname") + '?id=' + id + '"  target="_blank">Beispiel ' + nr + '</a><br>';
                });
				bs_importiert.resolve();
			}, 1000);
		});
	return bs_importiert.promise();
};

window.adb.bereiteBeziehungspartnerFürImportVor = function() {
	'use strict';
	var alle_bez_partner_array = [],
		bez_partner_array,
		beziehungspartner_vorbereitet = $.Deferred();
	window.adb.bezPartner_objekt = {};

    _.each(window.adb.bsDatensätze, function(bs_datensatz) {
        if (bs_datensatz.Beziehungspartner) {
            // bs_datensatz.Beziehungspartner ist eine kommagetrennte Liste von guids
            // diese Liste in Array verwandeln
            bez_partner_array = bs_datensatz.Beziehungspartner.split(", ");
            // und in window.adb.bsDatensätze nachführen
            bs_datensatz.Beziehungspartner = bez_partner_array;
            // und vollständige Liste aller Beziehungspartner nachführen
            alle_bez_partner_array = _.union(alle_bez_partner_array, bez_partner_array);
        }
    });
	// jetzt wollen wir ein Objekt bauen, das für alle Beziehungspartner das auszutauschende Objekt enthält
	// danach für jede guid Gruppe, Taxonomie (bei LR) und Name holen und ein Objekt draus machen
	var $db = $.couch.db("artendb");
	$db.view('artendb/all_docs?keys=' + encodeURI(JSON.stringify(alle_bez_partner_array)) + '&include_docs=true', {
		success: function(data) {
			var objekt;
			var bez_partner;
            _.each(data.rows, function(data_row) {
                objekt = data_row.doc;
                bez_partner = {};
                bez_partner.Gruppe = objekt.Gruppe;
                if (objekt.Gruppe === "Lebensräume") {
                    bez_partner.Taxonomie = objekt.Taxonomie.Eigenschaften.Taxonomie;
                    if (objekt.Taxonomie.Eigenschaften.Taxonomie.Label) {
                        bez_partner.Name = objekt.Taxonomie.Eigenschaften.Label + ": " + objekt.Taxonomie.Eigenschaften.Taxonomie.Einheit;
                    } else {
                        bez_partner.Name = objekt.Taxonomie.Eigenschaften.Einheit;
                    }
                } else {
                    bez_partner.Name = objekt.Taxonomie.Eigenschaften["Artname vollständig"];
                }
                bez_partner.GUID = objekt._id;
                window.adb.bezPartner_objekt[objekt._id] = bez_partner;
            });
		}
	});
	beziehungspartner_vorbereitet.resolve();
	return beziehungspartner_vorbereitet.promise();
};

// bekommt das Objekt mit den Datensätzen (window.adb.dsDatensätze) und die Liste der zu aktualisierenden Datensätze (window.adb.ZuordbareDatensätze)
// holt sich selber den in den Feldern erfassten Namen der Datensammlung
window.adb.entferneDatensammlung = function() {
	'use strict';
	var guid_array = [],
        guid_array_2 = [],
		guid,
		ds_entfernt = $.Deferred(),
		a,
		batch,
		batch_grösse,
        anz_vorkommen_von_ds = window.adb.ZuordbareDatensätze.length,
        anz_vorkommen_von_ds_entfernt = 0,
        rückmeldung,
        $importieren_ds_import_ausfuehren_hinweis_text = $("#importieren_ds_import_ausfuehren_hinweis_text"),
        $importieren_ds_import_ausfuehren_hinweis = $("#importieren_ds_import_ausfuehren_hinweis");

    // listener einrichten, der meldet, wenn ei Datensatz entfernt wurde
    $(document).bind('adb.ds_entfernt', function() {
        anz_vorkommen_von_ds_entfernt++;
        var prozent = Math.round((anz_vorkommen_von_ds-anz_vorkommen_von_ds_entfernt)/anz_vorkommen_von_ds*100);
        $("#DsImportierenProgressbar")
            .css('width', prozent +'%')
            .attr('aria-valuenow', prozent);
        $("#DsImportierenProgressbarText").html(prozent + "%");
        $importieren_ds_import_ausfuehren_hinweis.removeClass("alert-success").removeClass("alert-danger").addClass("alert-info");
        rückmeldung = "Eigenschaftensammlungen werden entfernt...<br>Die Indexe werden neu aufgebaut...";
        $importieren_ds_import_ausfuehren_hinweis_text.html(rückmeldung);
        $('html, body').animate({
            scrollTop: $importieren_ds_import_ausfuehren_hinweis_text.offset().top
        }, 2000);
        if (anz_vorkommen_von_ds_entfernt === anz_vorkommen_von_ds) {
            // die Indexe aktualisieren
            var $db = $.couch.db("artendb");
            $db.view('artendb/lr', {
                success: function() {
                    // melden, dass Indexe aktualisiert wurden
                    $importieren_ds_import_ausfuehren_hinweis.removeClass("alert-info").removeClass("alert-danger").addClass("alert-success");
                    rückmeldung = "Die Eigenschaftensammlungen wurden entfernt.<br>";
                    rückmeldung += "Die Indexe wurden aktualisiert.";
                    if (window.adb.rückmeldung_links) {
                        rückmeldung += "<br><br>Nachfolgend Links zu Objekten mit importierten Daten, damit Sie das Resultat überprüfen können:<br>";
                        rückmeldung += window.adb.rückmeldung_links;
                        delete window.adb.rückmeldung_links;
                    }
                    $importieren_ds_import_ausfuehren_hinweis_text.html(rückmeldung);
                    $('html, body').animate({
                        scrollTop: $importieren_ds_import_ausfuehren_hinweis_text.offset().top
                    }, 2000);
                }
            });
        }
    });

    _.each(window.adb.dsDatensätze, function(datensatz) {
        // zuerst die id in guid übersetzen
        if (window.adb.DsId === "guid") {
            // die in der Tabelle mitgelieferte id ist die guid
            guid = datensatz.GUID;
        } else {
            // in den zuordbaren Datensätzen nach dem Objekt mit der richtigen id suchen
            // und die guid auslesen
            guid = _.find(window.adb.ZuordbareDatensätze, function(datensatz) {
                return datensatz.Id == datensatz[window.adb.DsFelderId];
            }).Guid;
            /* TODO: löschen, wenn obiger Code getestet ist
            for (q = 0; q < window.adb.ZuordbareDatensätze.length; q++) {
                // in den zuordbaren Datensätzen nach dem Objekt mit der richtigen id suchen
                if (window.adb.ZuordbareDatensätze[q].Id == datensatz[window.adb.DsFelderId]) {
                    // und die guid auslesen
                    guid = window.adb.ZuordbareDatensätze[q].Guid;
                    break;
                }
            }*/
        }
        // Einen Array der id's erstellen
        guid_array.push(guid);
    });
	// alle docs gleichzeitig holen
	// aber batchweise
	batch = 150;
	batch_grösse = 150;
	for (a=0; a<batch; a++) {
		if (a < guid_array.length) {
			guid_array_2.push(guid_array[a]);
			if (a === (batch-1)) {
				window.adb.entferneDatensammlung_2($("#DsName").val(), guid_array_2, (a-batch_grösse));
				guid_array_2 = [];
				batch += batch_grösse;
			}
		} else {
			window.adb.entferneDatensammlung_2($("#DsName").val(), guid_array_2, (a - batch_grösse));
			break;
		}
	}
	return ds_entfernt.promise();
};

window.adb.entferneDatensammlung_2 = function(ds_name, guid_array, verzögerungs_faktor) {
	'use strict';
	// alle docs holen
	setTimeout(function() {
		var $db = $.couch.db("artendb");
		$db.view('artendb/all_docs?keys=' + encodeURI(JSON.stringify(guid_array)) + '&include_docs=true', {
			success: function(data) {
				var Objekt;
                _.each(data.rows, function(data_row) {
                    Objekt = data_row.doc;
                    window.adb.entferneDatensammlungAusObjekt(ds_name, Objekt);
                });
			}
		});
	}, verzögerungs_faktor*40);
};

window.adb.entferneDatensammlungAusObjekt = function(ds_name, objekt) {
	'use strict';
	if (objekt.Eigenschaftensammlungen && objekt.Eigenschaftensammlungen.length > 0) {
        /* hat nicht funktioniert
        var datensammlung = _.find(objekt.Eigenschaftensammlungen, function(datensammlung) {
            return datensammlung.Name === ds_name;
        });
        objekt.Eigenschaftensammlungen = _.without(Objekt.Eigenschaftensammlungen, datensammlung);
        $db = $.couch.db("artendb");
        $db.saveDoc(objekt);*/
		for (var i=0; i<objekt.Eigenschaftensammlungen.length; i++) {
			if (objekt.Eigenschaftensammlungen[i].Name === ds_name) {
				objekt.Eigenschaftensammlungen.splice(i,1);
				var $db = $.couch.db("artendb");
				$db.saveDoc(objekt);
                // mitteilen, dass eine ds entfernt wurde
                $(document).trigger('adb.ds_entfernt');
                // TODO: Scheitern abfangen (trigger adb.ds_nicht_entfernt)
				break;
			}
		}
	}
};

// bekommt das Objekt mit den Datensätzen (window.adb.bsDatensätze) und die Liste der zu aktualisierenden Datensätze (window.adb.ZuordbareDatensätze)
// holt sich selber den in den Feldern erfassten Namen der Beziehungssammlung
window.adb.entferneBeziehungssammlung = function() {
	'use strict';
	var guid_array = [],
        guid_array_2 = [],
		guid,
		bs_name = $("#BsName").val(),
		bs_entfernt = $.Deferred(),
		q,
		a,
		batch = 150,
		batch_grösse = 150,
        anz_vorkommen_von_bs_entfernt = 0,
        anz_vorkommen_von_bs = window.adb.ZuordbareDatensätze.length,
        rückmeldung,
        $importieren_bs_import_ausfuehren_hinweis = $("#importieren_bs_import_ausfuehren_hinweis"),
        $importieren_bs_import_ausfuehren_hinweis_text = $("#importieren_bs_import_ausfuehren_hinweis_text");

    // listener einrichten, der meldet, wenn ei Datensatz entfernt wurde
    $(document).bind('adb.bs_entfernt', function() {
        anz_vorkommen_von_bs_entfernt++;
        var prozent = Math.round((anz_vorkommen_von_bs-anz_vorkommen_von_bs_entfernt)/anz_vorkommen_von_bs*100);
        $("#BsImportierenProgressbar")
            .css('width', prozent +'%')
            .attr('aria-valuenow', prozent);
        $("#BsImportierenProgressbarText").html(prozent + "%");

        if (anz_vorkommen_von_bs_entfernt === anz_vorkommen_von_bs) {
            // die Indexe aktualisieren
            var $db = $.couch.db("artendb");
            $db.view('artendb/lr', {
                success: function() {
                    // melden, dass Indexe aktualisiert wurden
                    $importieren_bs_import_ausfuehren_hinweis
                        .removeClass("alert-info")
                        .removeClass("alert-danger")
                        .addClass("alert-success");
                    rückmeldung = "Die Beziehungssammlungen wurden entfernt.<br>";
                    rückmeldung += "Die Indexe wurden aktualisiert.";
                    if (window.adb.rückmeldung_links) {
                        rückmeldung += "<br><br>Nachfolgend Links zu Objekten mit importierten Daten, damit Sie das Resultat überprüfen können:<br>";
                        rückmeldung += window.adb.rückmeldung_links;
                        delete window.adb.rückmeldung_links;
                    }
                    $importieren_bs_import_ausfuehren_hinweis_text.html(rückmeldung);
                    $('html, body').animate({
                        scrollTop: $importieren_bs_import_ausfuehren_hinweis_text.offset().top
                    }, 2000);
                }
            });
        }
    });

    // rückmelden, dass es passiert
    $importieren_bs_import_ausfuehren_hinweis
        .removeClass("alert-success")
        .removeClass("alert-danger")
        .addClass("alert-info");
    rückmeldung = "Beziehungssammlungen werden entfernt...<br>Die Indexe werden aktualisiert...";
    $importieren_bs_import_ausfuehren_hinweis_text.html(rückmeldung);
    $('html, body').animate({
        scrollTop: $importieren_bs_import_ausfuehren_hinweis_text.offset().top
    }, 2000);

    _.each(window.adb.bsDatensätze, function(bs_datensatz) {
        // zuerst die id in guid übersetzen
        if (window.adb.BsId === "guid") {
            // die in der Tabelle mitgelieferte id ist die guid
            guid = bs_datensatz.GUID;
        } else {
            for (q = 0; q < window.adb.ZuordbareDatensätze.length; q++) {
                // in den zuordbaren Datensätzen nach dem Objekt mit der richtigen id suchen
                if (window.adb.ZuordbareDatensätze[q].Id == bs_datensatz[window.adb.BsFelderId]) {
                    // und die guid auslesen
                    guid = window.adb.ZuordbareDatensätze[q].Guid;
                    break;
                }
            }
        }
        // Einen Array der id's erstellen
        guid_array.push(guid);
    });

	// guid_array auf die eindeutigen guids reduzieren
	guid_array = _.union(guid_array);

	// alle docs gleichzeitig holen
	// aber batchweise
	for (a=0; a<batch; a++) {
		if (a < guid_array.length) {
			guid_array_2.push(guid_array[a]);
			if (a === (batch-1)) {
				window.adb.entferneBeziehungssammlung_2(bs_name, guid_array_2, (a-batch_grösse));
				guid_array_2 = [];
				batch += batch_grösse;
			}
		} else {
			window.adb.entferneBeziehungssammlung_2(bs_name, guid_array_2, (a-batch_grösse));
			bs_entfernt.resolve();
			break;
		}
		// RückmeldungsLinks in Feld anzeigen:
        $importieren_bs_import_ausfuehren_hinweis
            .removeClass("alert-success")
            .removeClass("alert-danger")
            .addClass("alert-info")
            .css('display', 'block');
        $importieren_bs_import_ausfuehren_hinweis_text.html("Die Beziehungssammlungen werden entfernt...<br>Die Indexe werden aktualisiert...");
	}
	return bs_entfernt.promise();
};

window.adb.entferneBeziehungssammlung_2 = function(bs_name, guid_array, verzögerungs_faktor) {
	'use strict';
	// alle docs holen
	setTimeout(function() {
		var $db = $.couch.db("artendb");
		$db.view('artendb/all_docs?keys=' + encodeURI(JSON.stringify(guid_array)) + '&include_docs=true', {
			success: function(data) {
				var objekt,
					f;
                _.each(data.rows, function(data_row) {
                    objekt = data_row.doc;
                    window.adb.entferneBeziehungssammlungAusObjekt(bs_name, objekt);
                });
			}
		});
	}, verzögerungs_faktor*40);
};

window.adb.entferneBeziehungssammlungAusObjekt = function(bs_name, objekt) {
	'use strict';
	if (objekt.Beziehungssammlungen && objekt.Beziehungssammlungen.length > 0) {
		for (var i=0; i<objekt.Beziehungssammlungen.length; i++) {
			if (objekt.Beziehungssammlungen[i].Name === bs_name) {
				objekt.Beziehungssammlungen.splice(i,1);
				var $db = $.couch.db("artendb");
				$db.saveDoc(objekt);
                // mitteilen, dass eine bs entfernt wurde
                $(document).trigger('adb.bs_entfernt');
				break;
			}
		}
	}
};

// fügt der Art eine Datensammlung hinzu
// wenn dieselbe schon vorkommt, wird sie überschrieben
window.adb.fügeDatensammlungZuObjekt = function(guid, datensammlung) {
	'use strict';
	var $db = $.couch.db("artendb");
	$db.openDoc(guid, {
		success: function(doc) {
			// sicherstellen, dass Eigenschaftensammlung existiert
			if (!doc.Eigenschaftensammlungen) {
				doc.Eigenschaftensammlungen = [];
			}
			// falls dieselbe Datensammlung schon existierte: löschen
			// trifft z.B. zu bei zusammenfassenden
			doc.Eigenschaftensammlungen = _.reject(doc.Eigenschaftensammlungen, function(es) {
				return es.Name === datensammlung.Name;
			});
			// Datensammlung anfügen
			doc.Eigenschaftensammlungen.push(datensammlung);
			// sortieren
			// Eigenschaftensammlungen nach Name sortieren
			doc.Eigenschaftensammlungen = window.adb.sortiereObjektarrayNachName(doc.Eigenschaftensammlungen);
			// in artendb speichern
			$db.saveDoc(doc);
            // mitteilen, dass ein ds importiert wurde
            $(document).trigger('adb.ds_hinzugefügt');
            // TODO: Scheitern des Speicherns abfangen (trigger adb.ds_nicht_hinzugefügt)
		}
	});
};

// fügt der Art eine Datensammlung hinzu
// wenn dieselbe schon vorkommt, wird sie überschrieben
window.adb.fügeBeziehungenZuObjekt = function(guid, beziehungssammlung, beziehungen) {
	'use strict';
	var $db = $.couch.db("artendb");
	$db.openDoc(guid, {
		success: function(doc) {
			// prüfen, ob die Beziehung schon existiert
			if (doc.Beziehungssammlungen && doc.Beziehungssammlungen.length > 0) {
				var hinzugefügt = false,
					i,
					h;
				for (i in doc.Beziehungssammlungen) {
					if (doc.Beziehungssammlungen[i].Name === beziehungssammlung.Name) {
						for (h=0; h<beziehungen.length; h++) {
							if (!_.contains(doc.Beziehungssammlungen[i].Beziehungen, beziehungen[h])) {
								doc.Beziehungssammlungen[i].Beziehungen.push(beziehungen[h]);
							}
						}
						// Beziehungen nach Name sortieren
						doc.Beziehungssammlungen[i].Beziehungen = window.adb.sortiereBeziehungenNachName(doc.Beziehungssammlungen[i].Beziehungen);
						hinzugefügt = true;
						break;
					}
				}
				if (!hinzugefügt) {
					// die Beziehungssammlung existiert noch nicht
					beziehungssammlung.Beziehungen = [];
                    _.each(beziehungen, function(beziehung) {
                        beziehungssammlung.Beziehungen.push(beziehung);
                    });
					// Beziehungen nach Name sortieren
					beziehungssammlung.Beziehungen = window.adb.sortiereBeziehungenNachName(beziehungssammlung.Beziehungen);
					doc.Beziehungssammlungen.push(beziehungssammlung);
				}
			} else {
				// Beziehungssammlung anfügen
				beziehungssammlung.Beziehungen = [];
                _.each(beziehungen, function(beziehung) {
                    beziehungssammlung.Beziehungen.push(beziehung);
                });
				// Beziehungen nach Name sortieren
				beziehungssammlung.Beziehungen = window.adb.sortiereBeziehungenNachName(beziehungssammlung.Beziehungen);
				doc.Beziehungssammlungen = [];
				doc.Beziehungssammlungen.push(beziehungssammlung);
			}
			// Beziehungssammlungen nach Name sortieren
			doc.Beziehungssammlungen = window.adb.sortiereObjektarrayNachName(doc.Beziehungssammlungen);
			// in artendb speichern
			$db.saveDoc(doc);
            // mitteilen, dass eine bs importiert wurde
            $(document).trigger('adb.bs_hinzugefügt');
            // TODO: Scheitern des Speicherns abfangen (trigger adb.bs_nicht_hinzugefügt)
		}
	});
};

// übernimmt den Namen einer Datensammlung
// öffnet alle Dokumente, die diese Datensammlung enthalten und löscht die Datensammlung
window.adb.entferneDatensammlungAusAllenObjekten = function(ds_name) {
	'use strict';
	var ds_entfernt = $.Deferred(),
        anz_vorkommen_von_ds,
        anz_vorkommen_von_ds_entfernt = 0,
        $importieren_ds_ds_beschreiben_hinweis = $("#importieren_ds_ds_beschreiben_hinweis"),
        $db = $.couch.db("artendb"),
        rückmeldung;
	$db.view('artendb/ds_guid?startkey=["' + ds_name + '"]&endkey=["' + ds_name + '",{}]', {
		success: function(data) {
            anz_vorkommen_von_ds = data.rows.length;

            // listener einrichten, der meldet, wenn ei Datensatz entfernt wurde
            $(document).bind('adb.ds_entfernt', function() {
                anz_vorkommen_von_ds_entfernt++;
                rückmeldung = "Eigenschaftensammlungen werden entfernt...<br>Die Indexe werden aktualisiert...";
                $importieren_ds_ds_beschreiben_hinweis
                    .removeClass("alert-success").removeClass("alert-danger").addClass("alert-info")
                    .html(rückmeldung);
                $('html, body').animate({
                    scrollTop: $importieren_ds_ds_beschreiben_hinweis.offset().top
                }, 2000);
                if (anz_vorkommen_von_ds_entfernt === anz_vorkommen_von_ds) {
                    // die Indexe aktualisieren
                    $db.view('artendb/lr', {
                        success: function() {
                            // melden, dass Indexe aktualisiert wurden
                            rückmeldung = "Die Eigenschaftensammlungen wurden entfernt.<br>";
                            rückmeldung += "Die Indexe wurden aktualisiert.";
                            $importieren_ds_ds_beschreiben_hinweis
                                .removeClass("alert-info").removeClass("alert-danger").addClass("alert-success")
                                .html(rückmeldung);
                            $('html, body').animate({
                                scrollTop: $importieren_ds_ds_beschreiben_hinweis.offset().top
                            }, 2000);
                        }
                    });
                }
            });

            // Eigenschaftensammlungen entfernen
            _.each(data.rows, function(data_row) {
                // guid und DsName übergeben
                window.adb.entferneDatensammlungAusDokument(data_row.key[1], ds_name);
            });
			ds_entfernt.resolve();
		}
	});
	return ds_entfernt.promise();
};

// übernimmt den Namen einer Beziehungssammlung
// öffnet alle Dokumente, die diese Beziehungssammlung enthalten und löscht die Beziehungssammlung
window.adb.entferneBeziehungssammlungAusAllenObjekten = function(bs_name) {
	'use strict';
	var bs_entfernt = $.Deferred(),
        anz_vorkommen_von_bs_entfernt = 0,
        anz_vorkommen_von_bs,
        $importieren_bs_ds_beschreiben_hinweis = $("#importieren_bs_ds_beschreiben_hinweis"),
        $importieren_bs_ds_beschreiben_hinweis_text = $("#importieren_bs_ds_beschreiben_hinweis_text"),
        $db = $.couch.db("artendb"),
        rückmeldung;
	$db.view('artendb/bs_guid?startkey=["' + bs_name + '"]&endkey=["' + bs_name + '",{}]', {
		success: function(data) {
            anz_vorkommen_von_bs = data.rows.length;
            // listener einrichten, der meldet, wenn ein Datensatz entfernt wurde
            $(document).bind('adb.bs_entfernt', function() {
                anz_vorkommen_von_bs_entfernt++;
                $importieren_bs_ds_beschreiben_hinweis
                    .removeClass("alert-success")
                    .removeClass("alert-danger")
                    .addClass("alert-info");
                rückmeldung = "Beziehungssammlungen werden entfernt...<br>Die Indexe werden aktualisiert...";
                $importieren_bs_ds_beschreiben_hinweis_text.html(rückmeldung);
                $('html, body').animate({
                    scrollTop: $importieren_bs_ds_beschreiben_hinweis_text.offset().top
                }, 2000);
                if (anz_vorkommen_von_bs_entfernt === anz_vorkommen_von_bs) {
                    // die Indexe aktualisieren
                    $db.view('artendb/lr', {
                        success: function() {
                            // melden, dass Indexe aktualisiert wurden
                            $importieren_bs_ds_beschreiben_hinweis
                                .removeClass("alert-info")
                                .removeClass("alert-danger")
                                .addClass("alert-success");
                            rückmeldung = "Die Beziehungssammlungen wurden entfernt.<br>";
                            rückmeldung += "Die Indexe wurden aktualisiert.";
                            $importieren_bs_ds_beschreiben_hinweis_text.html(rückmeldung);
                            $('html, body').animate({
                                scrollTop: $importieren_bs_ds_beschreiben_hinweis_text.offset().top
                            }, 2000);
                        }
                    });
                }
            });

            _.each(data.rows, function(data_row) {
                // guid und DsName übergeben
                window.adb.entferneBeziehungssammlungAusDokument(data_row.key[1], bs_name);
            });
			bs_entfernt.resolve();
		}
	});
	return bs_entfernt.promise();
};

// übernimmt die id des zu verändernden Dokuments
// und den Namen der Datensammlung, die zu entfernen ist
// entfernt die Datensammlung
window.adb.entferneDatensammlungAusDokument = function(id, ds_name) {
	'use strict';
	var $db = $.couch.db("artendb");
	$db.openDoc(id, {
		success: function(doc) {
			// Datensammlung entfernen
            doc.Eigenschaftensammlungen = _.reject(doc.Eigenschaftensammlungen, function(datensammlung) {
                return datensammlung.Name === ds_name
            });
			// in artendb speichern
			$db.saveDoc(doc);
            // mitteilen, dass eine ds entfernt wurde
            $(document).trigger('adb.ds_entfernt');
            // TODO: Scheitern abfangen (trigger adb.ds_nicht_entfernt)
		}
	});
};

// übernimmt die id des zu verändernden Dokuments
// und den Namen der Beziehungssammlung, die zu entfernen ist
// entfernt die Beziehungssammlung
window.adb.entferneBeziehungssammlungAusDokument = function(id, bs_name) {
	'use strict';
	var $db = $.couch.db("artendb");
	$db.openDoc(id, {
		success: function(doc) {
			// Beziehungssammlung entfernen
            doc.Beziehungssammlungen = _.reject(doc.Beziehungssammlungen, function(beziehungssammlung) {
                return beziehungssammlung.Name === bs_name
            });
			// in artendb speichern
			$db.saveDoc(doc);
            // mitteilen, dass eine ds entfernt wurde
            $(document).trigger('adb.bs_entfernt');
            // TODO: Scheitern abfangen (trigger adb.ds_nicht_entfernt)
		}
	});
};

// prüft die URL. wenn eine id übergeben wurde, wird das entprechende Objekt angezeigt
window.adb.öffneUri = function() {
	'use strict';
	// parameter der uri holen
	var uri = new Uri($(location).attr('href')),
		id = uri.getQueryParamValue('id'),
		// wenn browser history nicht unterstützt, erstellt history.js eine hash
		// dann muss die id durch die id in der hash ersetzt werden
		hash = uri.anchor(),
		uri2,
		erstelleBaum = require('./modules/erstelleBaum');
	if (hash) {
		uri2 = new Uri(hash);
		id = uri2.getQueryParamValue('id');
	}
	if (id) {
		// Gruppe ermitteln
		var $db = $.couch.db("artendb");
		$db.openDoc(id, {
			success: function(objekt) {
				// window.adb.Gruppe setzen. Nötig, um im Menu die richtigen Felder einzublenden
				window.adb.Gruppe = objekt.Gruppe;
				$(".baum.jstree").jstree("deselect_all");
				// den richtigen Button aktivieren
				$('[gruppe="'+objekt.Gruppe+'"]').button('toggle');
				$("#Gruppe_label").html("Gruppe:");
				// tree aufbauen, danach Datensatz initiieren
				$.when(erstelleBaum()).then(function() {
					window.adb.öffneBaumZuId(id);
				});
			}
		});
	}
    // dafür sorgen, dass die passenden Menus angezeigt werden
    window.adb.blendeMenus();
};

// übernimmt anfangs drei arrays: taxonomien, datensammlungen und beziehungssammlungen
// verarbeitet immer den ersten array und ruft sich mit den übrigen selber wieder auf
window.adb.erstelleExportfelder = function(taxonomien, datensammlungen, beziehungssammlungen) {
	'use strict';
	var html_felder_wählen = '',
		html_filtern = '',
		ds_typ,
        x,
        dsbs_von_objekten = [],
        dsbs_von_objekt,
        ds_felder_objekt,
        html;

    // Eigenschaftensammlungen vorbereiten
    // Struktur von window.adb.ds_bs_von_objekten ist jetzt: [ds_typ, ds.Name, ds.zusammenfassend, ds["importiert von"], Felder_array]
    // erst mal die nicht benötigten Werte entfernen
    _.each(window.adb.ds_bs_von_objekten.rows, function(object_with_array_in_key) {
        dsbs_von_objekten.push([object_with_array_in_key.key[1], object_with_array_in_key.key[4]]);
    });
    // Struktur von dsbs_von_objekten ist jetzt: [ds.Name, felder_objekt]
    // jetzt gibt es Mehrfacheinträge, diese entfernen
    dsbs_von_objekten = _.union(dsbs_von_objekten);

	if (taxonomien && datensammlungen && beziehungssammlungen) {
		ds_typ = "Taxonomie";
		html_felder_wählen += '<h3>Taxonomie</h3>';
		html_filtern += '<h3>Taxonomie</h3>';
	} else if (taxonomien && datensammlungen) {
		ds_typ = "Datensammlung";
		html_felder_wählen += '<h3>Eigenschaftensammlungen</h3>';
		html_filtern += '<h3>Eigenschaftensammlungen</h3>';
	} else {
		ds_typ = "Beziehung";
		// bei "felder wählen" soll man auch wählen können, ob pro Beziehung eine Zeile oder alle Beziehungen in ein Feld geschrieben werden sollen
		// das muss auch erklärt sein
		html_felder_wählen += '<h3>Beziehungssammlungen</h3><div class="export_zum_titel_gehoerig"><div class="well well-sm" style="margin-top:9px;"><b>Sie können aus zwei Varianten wählen</b> <a href="#" class="show_next_hidden">...mehr</a><ol class="adb-hidden"><li>Pro Beziehung eine Zeile (Standardeinstellung):<ul><li>Für jede Art oder Lebensraum wird pro Beziehung eine neue Zeile erzeugt</li><li>Anschliessende Auswertungen sind so meist einfacher auszuführen</li><li>Dafür können Sie aus maximal einer Beziehungssammlung Felder wählen (aber wie gewohnt mit beliebig vielen Feldern aus Taxonomie(n) und Eigenschaftensammlungen ergänzen)</li></ul></li><li>Pro Art/Lebensraum eine Zeile und alle Beziehungen kommagetrennt in einem Feld:<ul><li>Von allen Beziehungen der Art oder des Lebensraums wird der Inhalt des Feldes kommagetrennt in das Feld der einzigen Zeile geschrieben</li><li>Sie können Felder aus beliebigen Beziehungssammlungen gleichzeitig exportieren</li></ul></li></ol></div><div class="radio"><label><input type="radio" id="export_bez_in_zeilen" checked="checked" name="export_bez_wie">Pro Beziehung eine Zeile</label></div><div class="radio"><label><input type="radio" id="export_bez_in_feldern" name="export_bez_wie">Pro Art/Lebensraum eine Zeile und alle Beziehungen kommagetrennt in einem Feld</label></div></div><hr>';
		html_filtern += '<h3>Beziehungssammlungen</h3>';
	}
    _.each(taxonomien, function(taxonomie, index) {
        if (index > 0) {
            html_felder_wählen += '<hr>';
            html_filtern += '<hr>';
        }

        html_felder_wählen += '<h5>' + taxonomie.Name;
        html_filtern += '<h5>' + taxonomie.Name;
        // informationen zur ds holen
        dsbs_von_objekt = _.find(dsbs_von_objekten, function(array) {
            return array[0] === taxonomie.Name;
        });
        if (dsbs_von_objekt && dsbs_von_objekt[1]) {
            html_felder_wählen += ' <a href="#" class="show_next_hidden_export">...mehr</a>';
            html_filtern += ' <a href="#" class="show_next_hidden_export">...mehr</a>';
            // ds-titel abschliessen
            html_felder_wählen += '</h5>';
            html_filtern += '</h5>';
            // Felder der ds darstellen
            html_felder_wählen += '<div class="adb-hidden">';
            html_filtern += '<div class="adb-hidden">';
            ds_felder_objekt = dsbs_von_objekt[1];
            _.each(ds_felder_objekt, function(feldwert, feldname) {
            	if (feldname === "zusammenfassend") {
            		// nicht sagen, woher die Infos stammen, weil das Objekt-abhängig ist
            		html = '<div class="ds_beschreibung_zeile"><div>Zus.-fassend:</div><div>Diese Datensammlung fasst die Daten mehrerer Eigenschaftensammlungen in einer zusammen</div></div>';
            		html_felder_wählen += html;
	                html_filtern += html;
	            } else if (feldname !== "Ursprungsdatensammlung") {
            		html = '<div class="ds_beschreibung_zeile"><div>' + feldname + ':</div><div>' + Autolinker.link(feldwert) + '</div></div>';
            		html_felder_wählen += html;
	                html_filtern += html;
            	}
            });
            html_felder_wählen += '</div>';
            html_filtern += '</div>';
        } else {
            // ds-titel abschliessen
            html_felder_wählen += '</h5>';
            html_filtern += '</h5>';
        }

        // jetzt die checkbox um alle auswählen zu können
        // aber nur, wenn mehr als 1 Feld existieren
        if ((taxonomie.Eigenschaften && _.size(taxonomie.Eigenschaften) > 1) || (taxonomie.Beziehungen && _.size(taxonomie.Beziehungen) > 1)) {
            html_felder_wählen += '<div class="checkbox"><label>';
            html_felder_wählen += '<input class="feld_waehlen_alle_von_ds" type="checkbox" DsTyp="'+ds_typ+'" Datensammlung="' + taxonomie.Name + '"><em>alle</em>';
            html_felder_wählen += '</div></label>';
        }
        html_felder_wählen += '<div class="felderspalte">';


        html_filtern += '<div class="felderspalte">';
        for (x in (taxonomie.Eigenschaften || taxonomie.Beziehungen)) {
            // felder wählen
            html_felder_wählen += '<div class="checkbox"><label>';
            html_felder_wählen += '<input class="feld_waehlen" type="checkbox" DsTyp="'+ds_typ+'" Datensammlung="' + taxonomie.Name + '" Feld="' + x + '">' + x;
            html_felder_wählen += '</div></label>';
            // filtern
            html_filtern += '<div class="form-group">';
            html_filtern += '<label class="control-label" for="exportieren_objekte_waehlen_ds_' + window.adb.ersetzeUngültigeZeichenInIdNamen(x) + '"';
            // Feldnamen, die mehr als eine Zeile belegen: Oben ausrichten
            if (x.length > 28) {
                html_filtern += ' style="padding-top:0px"';
            }
            html_filtern += '>' + x + '</label>';
            //if (taxonomie.Feldtyp === "boolean") {
            if ((taxonomie.Eigenschaften && (taxonomie.Eigenschaften[x] === "boolean")) || (taxonomie.Beziehungen && (taxonomie.Beziehungen[x] === "boolean"))) {
                // in einer checkbox darstellen
                // readonly markiert, dass kein Wert erfasst wurde
                html_filtern += '<input class="controls form-control export_feld_filtern form-control" type="checkbox" id="exportieren_objekte_waehlen_ds_' + window.adb.ersetzeUngültigeZeichenInIdNamen(x) + '" DsTyp="' + ds_typ + '" Eigenschaft="' + taxonomie.Name + '" Feld="' + x + '" readonly>';
            } else {
                // in einem input-feld darstellen
                html_filtern += '<input class="controls form-control export_feld_filtern form-control input-sm" type="text" id="exportieren_objekte_waehlen_ds_' + window.adb.ersetzeUngültigeZeichenInIdNamen(x) + '" DsTyp="' + ds_typ + '" Eigenschaft="' + taxonomie.Name + '" Feld="' + x + '">';
            }
            html_filtern += '</div>';
        }
        // Spalten abschliessen
        html_felder_wählen += '</div>';
        html_filtern += '</div>';
    });
	// linie voranstellen
	html_felder_wählen = '<hr>' + html_felder_wählen;
	html_filtern = '<hr>' + html_filtern;
	if (beziehungssammlungen) {
		$("#exportieren_felder_waehlen_felderliste").html(html_felder_wählen);
		$("#exportieren_objekte_waehlen_ds_felderliste").html(html_filtern);
		window.adb.erstelleExportfelder(datensammlungen, beziehungssammlungen);
	} else if (datensammlungen) {
		$("#exportieren_felder_waehlen_felderliste").append(html_felder_wählen);
		$("#exportieren_objekte_waehlen_ds_felderliste").append(html_filtern);
		window.adb.erstelleExportfelder(datensammlungen);
	} else {
		$("#exportieren_felder_waehlen_felderliste").append(html_felder_wählen);
		$("#exportieren_objekte_waehlen_ds_felderliste")
            .append(html_filtern)
            .find("input[type='checkbox']").each(function() {
               this.indeterminate = true;
            });
	}
};

window.adb.erstelleExportString = function(exportobjekte) {
	'use strict';
	var string_titelzeile = "",
		string_zeilen = "",
		string_zeile;
    _.each(exportobjekte, function(exportobjekt) {
        // aus unerklärlichem Grund blieb stringTitelzeile leer, wenn nur ein Datensatz gefiltert wurde
        // daher bei jedem Datensatz prüfen, ob eine Titelzeile erstellt wurde und wenn nötig ergänzen
        if (string_titelzeile === "" || string_titelzeile === ",") {
            string_titelzeile = "";
            // durch Spalten loopen
            _.each(exportobjekt, function(feld, index) {
                if (string_titelzeile !== "") {
                    string_titelzeile += ',';
                }
                string_titelzeile += '"' + index + '"';
            });
        }

        if (string_zeilen !== "") {
            string_zeilen += '\n';
        }
        string_zeile = "";
        // durch die Felder loopen
        _.each(exportobjekt, function(feld) {
            if (string_zeile !== "") {
                string_zeile += ',';
            }
            // null-Werte als leere Werte
            if (feld === null) {
                string_zeile += "";
            } else if (typeof feld === "number") {
                // Zahlen ohne Anführungs- und Schlusszeichen exportieren
                string_zeile += feld;
            } else if (typeof feld === "object") {
                // Anführungszeichen sind Feldtrenner und müssen daher ersetzt werden
                string_zeile += '"' + JSON.stringify(feld).replace(/"/g, "'") + '"';
            } else {
                string_zeile += '"' + feld + '"';
            }
        });
        string_zeilen += string_zeile;
    });
	return string_titelzeile + "\n" + string_zeilen;
};

// baut im Formular "export" die Liste aller Eigenschaften auf
// window.adb.fasseTaxonomienZusammen steuert, ob Taxonomien alle einzeln oder unter dem Titel Taxonomien zusammengefasst werden
// bekommt den Namen der Gruppe
window.adb.erstelleListeFürFeldwahl = function() {
	'use strict';
	var export_gruppen = [],
		gruppen = [],
        $exportieren_objekte_waehlen_gruppen_hinweis_text = $("#exportieren_objekte_waehlen_gruppen_hinweis_text"),
        $exportieren_nur_objekte_mit_eigenschaften_checkbox = $("#exportieren_nur_objekte_mit_eigenschaften_checkbox"),
        $exportieren_nur_objekte_mit_eigenschaften = $("#exportieren_nur_objekte_mit_eigenschaften"),
        $exportieren_exportieren_collapse = $("#exportieren_exportieren_collapse"),
        $exportieren_felder_waehlen_collapse = $("#exportieren_felder_waehlen_collapse"),
        $exportieren_objekte_waehlen_ds_collapse = $("#exportieren_objekte_waehlen_ds_collapse");
    // falls noch offen: folgende Bereiche schliessen
    if ($exportieren_exportieren_collapse.is(':visible')) {
        $exportieren_exportieren_collapse.collapse('hide');
    }
    if ($exportieren_felder_waehlen_collapse.is(':visible')) {
        $exportieren_felder_waehlen_collapse.collapse('hide');
    }
    if ($exportieren_objekte_waehlen_ds_collapse.is(':visible')) {
        $exportieren_objekte_waehlen_ds_collapse.collapse('hide');
    }

	// Beschäftigung melden
	$exportieren_objekte_waehlen_gruppen_hinweis_text
        .alert()
        .removeClass("alert-success")
        .removeClass("alert-danger")
        .addClass("alert-info")
        .show()
	    .html("Eigenschaften werden ermittelt...");
	// scrollen, damit Hinweis sicher ganz sichtbar ist
	$('html, body').animate({
		scrollTop: $exportieren_objekte_waehlen_gruppen_hinweis_text.offset().top
	}, 2000);
	// gewählte Gruppen ermitteln
	// globale Variable enthält die Gruppen. Damit nach AJAX-Abfragen bestimmt werden kann, ob alle Daten vorliegen
	// globale Variable sammelt arrays mit den Listen der Felder pro Gruppe
	var export_felder_arrays = [];
	var $db = $.couch.db("artendb");
	$(".exportieren_ds_objekte_waehlen_gruppe").each(function() {
		if ($(this).prop('checked')) {
			export_gruppen.push($(this).val());
		}
	});
    /*if (export_gruppen.length > 1) {
        // wenn mehrere Gruppen gewählt werden
        // Option exportieren_nur_objekte_mit_eigenschaften ausblenden
        // und false setzen
        // sonst kommen nur die DS einer Gruppe
        $exportieren_nur_objekte_mit_eigenschaften_checkbox.addClass("adb-hidden");
        $exportieren_nur_objekte_mit_eigenschaften.prop('checked', false);
    } else {
        if ($exportieren_nur_objekte_mit_eigenschaften_checkbox.hasClass("adb-hidden")) {
            $exportieren_nur_objekte_mit_eigenschaften_checkbox.removeClass("adb-hidden")
            $exportieren_nur_objekte_mit_eigenschaften.prop('checked', true);
        }
    }*/
	if (export_gruppen.length > 0) {
        // gruppen einzeln abfragen
        gruppen = export_gruppen;
        _.each(gruppen, function(gruppe) {
            // Felder abfragen
            $db.view('artendb/felder?group_level=5&startkey=["'+gruppe+'"]&endkey=["'+gruppe+'",{},{},{},{}]', {
                success: function(data) {
                    export_felder_arrays = _.union(export_felder_arrays, data.rows);
                    //console.log("Die Gruppe " + gruppe + " hat soviele Felder = " + data.rows.length);
                    // eine Gruppe aus export_gruppen entfernen
                    export_gruppen.splice(0,1);
                    if (export_gruppen.length === 0) {
                        // alle Gruppen sind verarbeitet
                        window.adb.erstelleListeFürFeldwahl_2(export_felder_arrays);
                    }
                }
            });
        });
	} else {
		// letzte Rückmeldung anpassen
		$exportieren_objekte_waehlen_gruppen_hinweis_text.html("bitte eine Gruppe wählen")
            .removeClass("alert-info")
            .removeClass("alert-success")
            .addClass("alert-danger");
		// Felder entfernen
		$("#exportieren_felder_waehlen_felderliste").html("");
		$("#exportieren_objekte_waehlen_ds_felderliste").html("");
	}
    // Tabelle ausblenden, falls sie eingeblendet war
    $("#exportieren_exportieren_tabelle").hide();
};

window.adb.erstelleListeFürFeldwahl_2 = function(export_felder_arrays) {
	'use strict';
	var felder_objekt = {},
		hinweis_taxonomien,
        taxonomien,
        datensammlungen,
        beziehungssammlungen;

	// in export_felder_arrays ist eine Liste der Felder, die in dieser Gruppe enthalten sind
	// sie kann aber Mehrfacheinträge enthalten, die sich in der Gruppe unterscheiden
	// Muster: Gruppe, Typ der Datensammlung, Name der Datensammlung, Name des Felds
	// Mehrfacheinträge sollen entfernt werden

	// dazu muss zuerst die Gruppe entfernt werden
    _.each(export_felder_arrays, function(export_felder) {
        export_felder.key.splice(0,1);
    });

	// jetzt nur noch eineindeutige Array-Objekte (=Eigenschaftensammlungen) belassen
	export_felder_arrays = _.union(export_felder_arrays);
	// jetzt den Array von Objekten nach key sortieren
	export_felder_arrays = _.sortBy(export_felder_arrays, function(object) {
		return object.key;
	});

	// Im Objekt "FelderObjekt" werden die Felder aller gewählten Gruppen gesammelt
	felder_objekt = window.adb.ergänzeFelderObjekt(felder_objekt, export_felder_arrays);

	// bei allfälligen "Taxonomie(n)" Feldnamen sortieren
	if (felder_objekt["Taxonomie(n)"] && felder_objekt["Taxonomie(n)"].Eigenschaften) {
		felder_objekt["Taxonomie(n)"].Eigenschaften = window.adb.sortKeysOfObject(felder_objekt["Taxonomie(n)"].Eigenschaften);
	}

	// Taxonomien und Datensammlungen aus dem FelderObjekt extrahieren
	taxonomien = [];
	datensammlungen = [];
	beziehungssammlungen = [];

    _.each(felder_objekt, function(ds) {
        if (typeof ds === "object" && ds.Typ) {
            // das ist Datensammlung oder Taxonomie
            if (ds.Typ === "Datensammlung") {
                datensammlungen.push(ds);
            } else if (ds.Typ === "Taxonomie") {
                taxonomien.push(ds);
            } else if (ds.Typ === "Beziehung") {
                beziehungssammlungen.push(ds);
            }
        }
    });

    $.when(window.adb.holeDatensammlungenFürExportfelder()).done(function() {
        window.adb.erstelleExportfelder(taxonomien, datensammlungen, beziehungssammlungen);
    });

	// kontrollieren, ob Taxonomien zusammengefasst werden
	if ($("#exportieren_objekte_Taxonomien_zusammenfassen").hasClass("active")) {
		hinweis_taxonomien = "Die Eigenschaften wurden aufgebaut<br>Alle Taxonomien sind zusammengefasst";
	} else {
		hinweis_taxonomien = "Die Eigenschaften wurden aufgebaut<br>Alle Taxonomien werden einzeln dargestellt";
	}
	// Ergebnis rückmelden
	$("#exportieren_objekte_waehlen_gruppen_hinweis_text")
        .alert()
        .removeClass("alert-info")
        .removeClass("alert-danger")
        .addClass("alert-success")
        .show()
        .html(hinweis_taxonomien);
};

// holt eine Liste aller Datensammlungen, wenn nötig
// speichert sie in einer globalen Variable, damit sie wiederverwendet werden kann
window.adb.holeDatensammlungenFürExportfelder = function() {
	'use strict';
    var exfe_geholt = $.Deferred();
    if (window.adb.ds_bs_von_objekten) {
        exfe_geholt.resolve();
    } else {
        var $db = $.couch.db("artendb");
        $db.view('artendb/ds_von_objekten?group_level=5', {
            success: function(data) {
                // Daten in Objektvariable speichern > Wenn Ds ausgewählt, Angaben in die Felder kopieren
                window.adb.ds_bs_von_objekten = data;
                exfe_geholt.resolve();
            }
        });
    }
    return exfe_geholt.promise();
};

// Nimmt ein FelderObjekt entgegen. Das ist entweder leer (erste Gruppe) oder enthält schon Felder (ab der zweiten Gruppe)
// Nimmt ein Array mit Feldern entgegen
// mit der Struktur: {"key":["Flora","Datensammlung","Blaue Liste (1998)","Anwendungshäufigkeit zur Erhaltung"],"value":null}
// ergänzt das FelderObjekt um diese Felder
// retourniert das ergänzte FelderObjekt
// das FelderObjekt enthält alle gewünschten Felder. Darin sind nullwerte
window.adb.ergänzeFelderObjekt = function(felder_objekt, felder_array) {
	'use strict';
	var ds_typ,
		ds_name,
		feldname,
        feldtyp;
    _.each(felder_array, function(feld_objekt) {
        if (feld_objekt.key) {
            // Gruppe wurde entfernt, so sind alle keys um 1 kleiner als ursprünglich
            ds_typ = feld_objekt.key[0];
            ds_name = feld_objekt.key[1];
            feldname = feld_objekt.key[2];
            feldtyp = feld_objekt.key[3];
            if (ds_typ === "Objekt") {
                // das ist eine Eigenschaft des Objekts
                //FelderObjekt[FeldName] = null;	// NICHT HINZUFÜGEN, DIESE FELDER SIND SCHON IM FORMULAR FIX DRIN
            } else if (window.adb.fasseTaxonomienZusammen && ds_typ === "Taxonomie") {
                // Datensammlungen werden zusammengefasst. DsTyp muss "Taxonomie(n)" heissen und die Felder aller Taxonomien sammeln
                // Wenn Datensammlung noch nicht existiert, gründen
                if (!felder_objekt["Taxonomie(n)"]) {
                    felder_objekt["Taxonomie(n)"] = {};
                    felder_objekt["Taxonomie(n)"].Typ = ds_typ;
                    felder_objekt["Taxonomie(n)"].Name = "Taxonomie(n)";
                    felder_objekt["Taxonomie(n)"].Eigenschaften = {};
                }
                // Feld ergänzen
                // als Feldwert den Feldtyp übergeben
                felder_objekt["Taxonomie(n)"].Eigenschaften[feldname] = feldtyp;
            } else if (ds_typ === "Datensammlung" || ds_typ === "Taxonomie") {
                // Wenn Datensammlung oder Taxonomie noch nicht existiert, gründen
                if (!felder_objekt[ds_name]) {
                    felder_objekt[ds_name] = {};
                    felder_objekt[ds_name].Typ = ds_typ;
                    felder_objekt[ds_name].Name = ds_name;
                    felder_objekt[ds_name].Eigenschaften = {};
                }
                // Feld ergänzen
                // als Feldwert den Feldtyp übergeben
                felder_objekt[ds_name].Eigenschaften[feldname] = feldtyp;
            } else if (ds_typ === "Beziehung") {
                // Wenn Beziehungstyp noch nicht existiert, gründen
                if (!felder_objekt[ds_name]) {
                    felder_objekt[ds_name] = {};
                    felder_objekt[ds_name].Typ = ds_typ;
                    felder_objekt[ds_name].Name = ds_name;
                    felder_objekt[ds_name].Beziehungen = {};
                }
                // Feld ergänzen
                // als Feldwert den Feldtyp übergeben
                felder_objekt[ds_name].Beziehungen[feldname] = feldtyp;
            }
        }
    });
	return felder_objekt;
};

// wird aufgerufen durch eine der zwei Schaltflächen: "Vorschau anzeigen", "direkt exportieren"
// direkt: list-funktion aufrufen, welche die Daten direkt herunterlädt
window.adb.filtereFürExport = function(direkt) {
	'use strict';
	// Array von Filterobjekten bilden
	var filterkriterien = [],
		// Objekt bilden, in das die Filterkriterien integriert werden, da ein array schlecht über die url geliefert wird
		filterkriterien_objekt = {},
		filter_objekt,
		gruppen_array = [],
		gruppen = "",
		gewählte_felder = [],
        anz_gewählte_felder_aus_dsbs = 0,
		gewählte_felder_objekt = {},
		anz_ds_gewählt = 0,
        $exportieren_exportieren_hinweis_text = $("#exportieren_exportieren_hinweis_text"),
        html_filterkriterien;

	// kontrollieren, ob eine Gruppe gewählt wurde
	if (window.adb.fürExportGewählteGruppen().length === 0) {
		return;
	}

	// Beschäftigung melden
	if (!direkt) {
		$exportieren_exportieren_hinweis_text
            .alert()
            .show()
            .html("Die Daten werden vorbereitet...");
	}

	// zum Hinweistext scrollen
	$('html, body').animate({
		scrollTop: $exportieren_exportieren_hinweis_text.offset().top
	}, 2000);
	// gewählte Gruppen ermitteln
    $("#exportieren_exportieren_exportieren_fuer_alt").addClass("adb-hidden-strictly");
	$(".exportieren_ds_objekte_waehlen_gruppe").each(function() {
		if ($(this).prop('checked')) {
			gruppen_array.push($(this).attr('view'));
			if (gruppen) {
				gruppen += ",";
			}
			gruppen += $(this).val();
		}
	});
    var gruppenliste = gruppen.split(",");
    if (gruppenliste.indexOf("Flora") >= 0 && gruppenliste.indexOf("Fauna") >= 0) {
        // Wenn Flora und Fauna gewählt: Schaltfläche für den Export für das ALT anzeigen
        $("#exportieren_exportieren_exportieren_fuer_alt").removeClass("adb-hidden-strictly");
    }
	// durch alle Filterfelder loopen
	// wenn ein Feld einen Wert enthält, danach filtern
	$("#exportieren_objekte_waehlen_ds_collapse").find(".export_feld_filtern").each(function() {
        var that = this,
            $this = $(this);
        if (that.type === "checkbox") {
            if (!$this.prop('readonly')) {
                filter_objekt = {};
                filter_objekt.DsTyp = $this.attr('dstyp');
                filter_objekt.DsName = $this.attr('eigenschaft');
                filter_objekt.Feldname = $this.attr('feld');
                filter_objekt.Filterwert = $this.prop("checked");
                filter_objekt.Vergleichsoperator = "=";
                filterkriterien.push(filter_objekt);
            } else {
                // übrige checkboxen ignorieren
            }
        } else if (this.value || this.value === 0) {
			// Filterobjekt zurücksetzen
			filter_objekt = {};
			filter_objekt.DsTyp = $this.attr('dstyp');
			filter_objekt.DsName = $this.attr('eigenschaft');
			filter_objekt.Feldname = $this.attr('feld');
			// Filterwert in Kleinschrift verwandeln, damit Gross-/Kleinschrift nicht wesentlich ist (Vergleichswerte werden von filtereFürExport später auch in Kleinschrift verwandelt)
			filter_objekt.Filterwert = window.adb.ermittleVergleichsoperator(this.value)[1];
			filter_objekt.Vergleichsoperator = window.adb.ermittleVergleichsoperator(this.value)[0];
			filterkriterien.push(filter_objekt);
		}
	});

	// den array dem objekt zuweisen
	filterkriterien_objekt.filterkriterien = filterkriterien;
	// gewählte Felder ermitteln
	$(".exportieren_felder_waehlen_objekt_feld.feld_waehlen").each(function() {
		if ($(this).prop('checked')) {
			// feldObjekt erstellen
			var feldObjekt = {};
			feldObjekt.DsName = "Objekt";
			feldObjekt.Feldname = $(this).attr('feldname');
			gewählte_felder.push(feldObjekt);
		}
	});
	$("#exportieren_felder_waehlen_felderliste").find(".feld_waehlen").each(function() {
		if ($(this).prop('checked')) {
			// feldObjekt erstellen
			var feldObjekt = {};
			feldObjekt.DsTyp = $(this).attr('dstyp');
			if (feldObjekt.DsTyp !== "Taxonomie") {
				anz_ds_gewählt++;
			}
			feldObjekt.DsName = $(this).attr('datensammlung');
			feldObjekt.Feldname = $(this).attr('feld');
			gewählte_felder.push(feldObjekt);
            anz_gewählte_felder_aus_dsbs++;
		}
	});
	// den array dem objekt zuweisen
	gewählte_felder_objekt.felder = gewählte_felder;

	// Wenn keine Felder gewählt sind: Melden und aufhören
	if (gewählte_felder_objekt.felder.length === 0) {
		// Beschäftigungsmeldung verstecken
		$exportieren_exportieren_hinweis_text
            .alert()
            .hide();
        $("#exportieren_exportieren_error_text_text")
            .html("Keine Eigenschaften gewählt<br>Bitte wählen Sie Eigenschaften, die exportiert werden sollen");
		$("#exportieren_exportieren_error_text")
            .alert()
            .show();
		return;
	}

    // html für filterkriterien aufbauen
    html_filterkriterien = "Gewählte Filterkriterien:<ul>";
    if ($("#exportieren_synonym_infos").prop('checked')) {
        html_filterkriterien += "<li>inklusive Informationen von Synonymen</li>";
    } else {
        html_filterkriterien += "<li>Informationen von Synonymen ignorieren</li>";
    }
    if (filterkriterien.length > 0) {
        _.each(filterkriterien, function(filterkriterium) {
            html_filterkriterien += "<li>";
            html_filterkriterien += "Feld \"" + filterkriterium.Feldname + "\" ";
            if (filterkriterium.Vergleichsoperator !== "kein") {
                html_filterkriterien += filterkriterium.Vergleichsoperator + " \"";
            } else {
                html_filterkriterien += "enthält \"";
            }
            html_filterkriterien += filterkriterium.Filterwert;
            html_filterkriterien += "\"</li>";
        });
        html_filterkriterien += "</ul>";
    } else if (anz_gewählte_felder_aus_dsbs > 0) {
        // wenn Filterkriterien erfasst wurde, werden sowieso nur Datensätze angezeigt, in denen Daten vorkommen
        // daher ist die folgende Info nur interesssant, wenn kein Filter gesetzt wurde
        // und natürlich auch nur, wenn Felder aus DS/BS gewählt wurden
        if ($("#exportieren_nur_objekte_mit_eigenschaften").prop('checked')) {
            html_filterkriterien += "<li>Nur Datensätze exportieren, die in den gewählten Eigenschaften- und Beziehungssammlungen Informationen enthalten</li>";
        } else {
            html_filterkriterien += "<li>Auch Datensätze exportieren, die in den gewählten Eigenschaften- und Beziehungssammlungen keine Informationen enthalten</li>";
        }
    }
    $("#exportieren_exportieren_filterkriterien")
        .html(html_filterkriterien)
        .show();

	// jetzt das filterObjekt übergeben
	if (direkt === "direkt") {
		window.adb.übergebeFilterFürDirektExport(gruppen, gruppen_array, anz_ds_gewählt, filterkriterien_objekt, gewählte_felder_objekt);
	} if (direkt === "für_alt") {
        window.adb.übergebeFilterFürExportFürAlt(gruppen, gruppen_array, anz_ds_gewählt, filterkriterien_objekt, gewählte_felder_objekt);
    }else {
		window.adb.übergebeFilterFürExportMitVorschau(gruppen, gruppen_array, anz_ds_gewählt, filterkriterien_objekt, gewählte_felder_objekt);
	}
};

window.adb.übergebeFilterFürExportFürAlt = function(gruppen, gruppen_array, anz_ds_gewählt, filterkriterien_objekt, gewählte_felder_objekt) {
	'use strict';
    // Alle Felder abfragen
    var fTz = "false",
        queryParam;
    // window.adb.fasseTaxonomienZusammen steuert, ob Taxonomien alle einzeln oder unter dem Titel Taxonomien zusammengefasst werden
    if (window.adb.fasseTaxonomienZusammen) {
        fTz = "true";
    }
    if ($("#exportieren_synonym_infos").prop('checked')) {
        queryParam = "export_alt_mit_synonymen_direkt/all_docs_mit_synonymen_fuer_alt?include_docs=true&filter=" + encodeURIComponent(JSON.stringify(filterkriterien_objekt)) + "&felder=" + encodeURIComponent(JSON.stringify(gewählte_felder_objekt)) + "&fasseTaxonomienZusammen=" + fTz + "&gruppen=" + gruppen;
    } else {
        queryParam = "export_alt_direkt/all_docs_fuer_alt?include_docs=true&filter=" + encodeURIComponent(JSON.stringify(filterkriterien_objekt)) + "&felder=" + encodeURIComponent(JSON.stringify(gewählte_felder_objekt)) + "&fasseTaxonomienZusammen=" + fTz + "&gruppen=" + gruppen;
    }
    if ($("#exportieren_nur_objekte_mit_eigenschaften").prop('checked') && anz_ds_gewählt > 0) {
        // prüfen, ob mindestens ein Feld aus ds gewählt ist
        // wenn ja: true, sonst false
        queryParam += "&nur_objekte_mit_eigenschaften=true";
    } else {
        queryParam += "&nur_objekte_mit_eigenschaften=false";
    }
    if ($("#export_bez_in_zeilen").prop('checked')) {
        queryParam += "&bez_in_zeilen=true";
    } else {
        queryParam += "&bez_in_zeilen=false";
    }
    window.open('_list/' + queryParam);
};

window.adb.übergebeFilterFürDirektExport = function(gruppen, gruppen_array, anz_ds_gewählt, filterkriterien_objekt, gewählte_felder_objekt) {
	'use strict';
	// Alle Felder abfragen
	var fTz = "false",
		queryParam,
        view_name,
        list_name,
        gruppenliste = gruppen.split(",");
	// window.adb.fasseTaxonomienZusammen steuert, ob Taxonomien alle einzeln oder unter dem Titel Taxonomien zusammengefasst werden
	if (window.adb.fasseTaxonomienZusammen) {
		fTz = "true";
	}
	if ($("#exportieren_synonym_infos").prop('checked')) {
        list_name = "export_mit_synonymen_direkt";
        if (gruppenliste.length > 1) {
            view_name = "all_docs_mit_synonymen";
        } else {
            // den view der Gruppe nehmen, das ist viel schneller
            if (gruppenliste[0] === "Lebensräume") {
                view_name = "lr_mit_synonymen";
            } else {
                view_name = gruppenliste[0].toLowerCase() + "_mit_synonymen";
            }
        }
	} else {
        list_name = "export_direkt";
        if (gruppenliste.length > 1) {
            view_name = "all_docs";
        } else {
            // den view der Gruppe nehmen, das ist viel schneller
            if (gruppenliste[0] === "Lebensräume") {
                view_name = "lr";
            } else {
                view_name = gruppenliste[0].toLowerCase();
            }

        }
	}

    queryParam = list_name + "/" + view_name + "?include_docs=true&filter=" + encodeURIComponent(JSON.stringify(filterkriterien_objekt)) + "&felder=" + encodeURIComponent(JSON.stringify(gewählte_felder_objekt)) + "&fasseTaxonomienZusammen=" + fTz + "&gruppen=" + gruppen;

	if ($("#exportieren_nur_objekte_mit_eigenschaften").prop('checked') && anz_ds_gewählt > 0) {
		// prüfen, ob mindestens ein Feld aus ds gewählt ist
		// wenn ja: true, sonst false
		queryParam += "&nur_objekte_mit_eigenschaften=true";
	} else {
		queryParam += "&nur_objekte_mit_eigenschaften=false";
	}
	if ($("#export_bez_in_zeilen").prop('checked')) {
		queryParam += "&bez_in_zeilen=true";
	} else {
		queryParam += "&bez_in_zeilen=false";
	}
	window.open('_list/' + queryParam);
};

window.adb.übergebeFilterFürExportMitVorschau = function(gruppen, gruppen_array, anz_ds_gewählt, filterkriterien_objekt, gewählte_felder_objekt) {
	'use strict';
	// Alle Felder abfragen
	var fTz = "false",
		anz_gruppen_abgefragt = 0,
		dbParam,
		queryParam;
	// window.adb.fasseTaxonomienZusammen steuert, ob Taxonomien alle einzeln oder unter dem Titel Taxonomien zusammengefasst werden
	if (window.adb.fasseTaxonomienZusammen) {
		fTz = "true";
	}
	// globale Variable vorbereiten
	window.adb.exportieren_objekte = [];
	// in anz_gruppen_abgefragt wird gezählt, wieviele Gruppen schon abgefragt wurden
	// jede Abfrage kontrolliert nach Erhalt der Daten, ob schon alle Gruppen abgefragt wurden und macht weiter, wenn ja
    _.each(gruppen_array, function(gruppe) {
        if ($("#exportieren_synonym_infos").prop('checked')) {
            dbParam = "artendb/export_mit_synonymen";
            queryParam = gruppe + "_mit_synonymen?include_docs=true&filter=" + encodeURIComponent(JSON.stringify(filterkriterien_objekt)) + "&felder=" + encodeURIComponent(JSON.stringify(gewählte_felder_objekt)) + "&fasseTaxonomienZusammen=" + fTz + "&gruppen=" + gruppen;
        } else {
            dbParam = "artendb/export";
            queryParam = gruppe + "?include_docs=true&filter=" + encodeURIComponent(JSON.stringify(filterkriterien_objekt)) + "&felder=" + encodeURIComponent(JSON.stringify(gewählte_felder_objekt)) + "&fasseTaxonomienZusammen=" + fTz + "&gruppen=" + gruppen;
        }
        if ($("#exportieren_nur_objekte_mit_eigenschaften").prop('checked') && anz_ds_gewählt > 0) {
            // prüfen, ob mindestens ein Feld aus ds gewählt ist
            // wenn ja: true, sonst false
            queryParam += "&nur_objekte_mit_eigenschaften=true";
        } else {
            queryParam += "&nur_objekte_mit_eigenschaften=false";
        }
        if ($("#export_bez_in_zeilen").prop('checked')) {
            queryParam += "&bez_in_zeilen=true";
        } else {
            queryParam += "&bez_in_zeilen=false";
        }
        var $db = $.couch.db("artendb");
        $db.list(dbParam, queryParam, {
            success: function(data) {
                // alle Objekte in data in window.adb.exportieren_objekte anfügen
                window.adb.exportieren_objekte = _.union(window.adb.exportieren_objekte, data);
                // speichern, dass eine Gruppe abgefragt wurde
                anz_gruppen_abgefragt++;
                if (anz_gruppen_abgefragt === gruppen_array.length) {
                    // alle Gruppen wurden abgefragt, jetzt kann es weitergehen
                    // Ergebnis rückmelden
                    $("#exportieren_exportieren_hinweis_text")
                        .alert()
                        .show()
                        .html(window.adb.exportieren_objekte.length + " Objekte sind gewählt");
                    window.adb.baueTabelleFürExportAuf();
                }
            },
            error: function() {
                console.log('error in $db.list');
            }
        });
    });
};

window.adb.baueTabelleFürExportAuf = function() {
	'use strict';
    var hinweis = "";
	if (window.adb.exportieren_objekte.length > 0) {
		window.adb.erstelleTabelle(window.adb.exportieren_objekte, "", "exportieren_exportieren_tabelle");
		$(".exportieren_exportieren_exportieren").show();
		// zur Tabelle scrollen
		$('html, body').animate({
			scrollTop: $("#exportieren_exportieren_exportieren").offset().top
		}, 2000);
	} else if (window.adb.exportieren_objekte && window.adb.exportieren_objekte.length === 0) {
        $("#exportieren_exportieren_error_text_text")
            .html("Keine Daten gefunden<br>Bitte passen Sie die Filterkriterien an");
        $("#exportieren_exportieren_error_text")
            .alert()
            .show();
        $('html, body').animate({
            scrollTop: $("#exportieren_exportieren_exportieren").offset().top
        }, 2000);

	}
	// Beschäftigungsmeldung verstecken
	$("#exportieren_exportieren_hinweis_text")
        .alert()
        .hide();
};

window.adb.fürExportGewählteGruppen = function() {
	'use strict';
	var gruppen = [];
	$(".exportieren_ds_objekte_waehlen_gruppe").each(function() {
		if ($(this).prop('checked')) {
			gruppen.push($(this).attr('feldname'));
		}
	});
	return gruppen;
};

// woher wird bloss benötigt, wenn angemeldet werden muss
window.adb.bereiteImportieren_ds_beschreibenVor = function(woher) {
	'use strict';
	if (!window.adb.prüfeAnmeldung("woher")) {
		$('#importieren_ds_ds_beschreiben_collapse').collapse('hide');
	} else {
		$("#DsName").focus();
		// Daten holen, wenn nötig
		if (window.adb.ds_von_objekten) {
			window.adb.bereiteImportieren_ds_beschreibenVor_02();
		} else {
			var $db = $.couch.db("artendb");
			$db.view('artendb/ds_von_objekten?startkey=["Datensammlung"]&endkey=["Datensammlung",{},{},{},{}]&group_level=5', {
				success: function(data) {
					// Daten in Objektvariable speichern > Wenn Ds ausgewählt, Angaben in die Felder kopieren
					window.adb.ds_von_objekten = data;
					window.adb.bereiteImportieren_ds_beschreibenVor_02();
				}
			});
		}
	}
};

// DsNamen in Auswahlliste stellen
// veränderbare sind normal, übrige grau
window.adb.bereiteImportieren_ds_beschreibenVor_02 = function() {
	'use strict';
	var html,
        ds_namen = [];
	// in diesem Array werden alle keys gesammelt
	// diesen Array als globale Variable gestalten: Wir benutzt, wenn DsName verändert wird
    window.adb.DsKeys = _.map(window.adb.ds_von_objekten.rows, function(row) {
        return row.key;
    });
    // brauche nur drei keys
    // email: leider gibt es Null-Werte
    window.adb.ds_namen_eindeutig = _.map(window.adb.DsKeys, function(ds_key) {
        return [ds_key[1], ds_key[2], ds_key[3] || "alex@gabriel-software.ch"];
    });
    // Objektarray reduzieren auf eindeutige Namen
    window.adb.ds_namen_eindeutig = _.reject(window.adb.ds_namen_eindeutig, function(objekt) {
        var position_in_ds_namen = _.indexOf(ds_namen, objekt[0]);
        if (position_in_ds_namen === -1) {
            ds_namen.push(objekt[0]);
            return false;
        } else {
            return true;
        }
    });
    // nach DsNamen sortieren
    window.adb.ds_namen_eindeutig = _.sortBy(window.adb.ds_namen_eindeutig, function(key) {
        return key[0];
    });
	// mit leerer Zeile beginnen
	html = "<option value='' waehlbar=true></option>";
	// Namen der Datensammlungen als Optionen anfügen
    _.each(window.adb.ds_namen_eindeutig, function(ds_name_eindeutig) {
        // veränderbar sind nur selbst importierte und zusammenfassende
        if (ds_name_eindeutig[2] === localStorage.Email || ds_name_eindeutig[1] || Boolean(localStorage.admin)) {
            // veränderbare sind normal = schwarz
            html += "<option value='" + ds_name_eindeutig[0] + "' class='adb_gruen_fett' waehlbar=true>" + ds_name_eindeutig[0] + "</option>";
        } else {
            // nicht veränderbare sind grau
            html += "<option value='" + ds_name_eindeutig[0] + "' class='adb_grau_normal' waehlbar=false>" + ds_name_eindeutig[0] + "</option>";
        }
    });
	$("#DsWaehlen").html(html);
	$("#DsUrsprungsDs").html(html);
};

// woher wird bloss benötigt, wenn angemeldet werden muss
window.adb.bereiteImportieren_bs_beschreibenVor = function(woher) {
	'use strict';
	if (!window.adb.prüfeAnmeldung("woher")) {
		$('#importieren_bs_ds_beschreiben_collapse').collapse('hide');
	} else {
		$("#BsName").focus();
		// anzeigen, dass Daten geladen werden. Nein: Blitzt bloss kurz auf
		//$("#BsWaehlen").html("<option value='null'>Bitte warte, die Liste wird aufgebaut...</option>");
		// Daten holen, wenn nötig
		if (window.adb.bs_von_objekten) {
            window.adb.bereiteImportieren_bs_beschreibenVor_02();
		} else {
			var $db = $.couch.db("artendb");
			$db.view('artendb/ds_von_objekten?startkey=["Beziehungssammlung"]&endkey=["Beziehungssammlung",{},{},{},{}]&group_level=5', {
				success: function(data) {
					// Daten in Objektvariable speichern > Wenn Ds ausgewählt, Angaben in die Felder kopieren
					window.adb.bs_von_objekten = data;
					window.adb.bereiteImportieren_bs_beschreibenVor_02();
				}
			});
		}
	}
};

window.adb.bereiteImportieren_bs_beschreibenVor_02 = function() {
	'use strict';
	var html,
		bs_namen = [];
	// in diesem Array werden alle keys gesammelt
	// diesen Array als globale Variable gestalten: Wir benutzt, wenn DsName verändert wird
	window.adb.BsKeys = _.map(window.adb.bs_von_objekten.rows, function(row) {
        return row.key;
    });

    // brauche nur drei keys
    window.adb.ds_namen_eindeutig = _.map(window.adb.BsKeys, function(bs_key) {
        return [bs_key[1], bs_key[2], bs_key[3]];
    });
    // Objektarray reduzieren auf eindeutige Namen
    window.adb.ds_namen_eindeutig = _.reject(window.adb.ds_namen_eindeutig, function(objekt) {
        var position_in_bs_namen = _.indexOf(bs_namen, objekt[0]);
        if (position_in_bs_namen === -1) {
            bs_namen.push(objekt[0]);
            return false;
        } else {
            return true;
        }
    });

	// nach DsNamen sortieren
	window.adb.ds_namen_eindeutig = _.sortBy(window.adb.ds_namen_eindeutig, function(key) {
		return key[0];
	});
	// mit leerer Zeile beginnen
	html = "<option value='' waehlbar=true></option>";
	// Namen der Datensammlungen als Optionen anfügen
    _.each(window.adb.ds_namen_eindeutig, function(ds_name_eindeutig) {
        // veränderbar sind nur selbst importierte und zusammenfassende
        if (ds_name_eindeutig[2] === localStorage.Email || ds_name_eindeutig[1] || Boolean(localStorage.admin)) {
            // veränderbare sind normal = schwarz
            html += "<option value='" + ds_name_eindeutig[0] + "' class='adb_gruen_fett' waehlbar=true>" + ds_name_eindeutig[0] + "</option>";
        } else {
            // nicht veränderbare sind grau
            html += "<option value='" + ds_name_eindeutig[0] + "' class='adb_grau_normal' waehlbar=false>" + ds_name_eindeutig[0] + "</option>";
        }
    });
	$("#BsWaehlen").html(html);
	$("#BsUrsprungsBs").html(html);
};

window.adb.isFileAPIAvailable = function() {
	'use strict';
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Great success! All the File APIs are supported.
		return true;
	} else {
		// source: File API availability - //caniuse.com/#feat=fileapi
		// source: <output> availability - //html5doctor.com/the-output-element/
		var html = "Für den Datenimport benötigen Sie mindestens einen der folgenden Browser:<br>";
		html += "(Stand März 2014)<br>";
		html += "- Google Chrome: 31 oder neuer<br>";
		html += "- Chrome auf Android: 33 oder neuer<br>";
		html += "- Mozilla Firefox: 28 oder neuer<br>";
		html += "- Firefox auf Android: 26 oder neuer<br>";
		html += "- Safari: 7.0 oder neuer<br>";
		html += "- iOs Safari: 6.0 oder neuer<br>";
		html += "- Opera: 20 oder neuer<br>";
		html += "- Internet Explorer: 10 oder neuer<br>";
		html += "- Internet Explorer mobile: bis Version 10 nicht<br>";
		html += "- Android Standardbrowser: Android 4.4 oder neuer<br>";
		$("#fileApiMeldungText").html(html);
		$('#fileApiMeldung').modal();
		return false;
	}
};

window.adb.sortiereObjektarrayNachName = function(objektarray) {
	'use strict';
	// Beziehungssammlungen bzw. Datensammlungen nach Name sortieren
	objektarray.sort(function(a, b) {
		var aName = a.Name,
			bName = b.Name;
		if (aName && bName) {
			return (aName.toLowerCase() == bName.toLowerCase()) ? 0 : (aName.toLowerCase() > bName.toLowerCase()) ? 1 : -1;
		} else {
			return (aName == bName) ? 0 : (aName > bName) ? 1 : -1;
		}
	});
	return objektarray;
};

// übernimmt einen Array mit den Beziehungen
// gibt diesen sortiert zurück
window.adb.sortiereBeziehungenNachName = function(beziehungen) {
	'use strict';
// Beziehungen nach Name sortieren
	beziehungen.sort(function(a, b) {
		var aName,
			bName;
        _.each(a.Beziehungspartner, function(beziehungspartner) {
            if (beziehungspartner.Gruppe === "Lebensräume") {
                // sortiert werden soll bei Lebensräumen zuerst nach Taxonomie, dann nach Name
                aName = beziehungspartner.Gruppe + beziehungspartner.Taxonomie + beziehungspartner.Name;
            } else {
                aName = beziehungspartner.Gruppe + beziehungspartner.Name;
            }
        });
        _.each(b.Beziehungspartner, function(beziehungspartner) {
            if (beziehungspartner.Gruppe === "Lebensräume") {
                bName = beziehungspartner.Gruppe + beziehungspartner.Taxonomie + beziehungspartner.Name;
            } else {
                bName = beziehungspartner.Gruppe + beziehungspartner.Name;
            }
        });
		if (aName && bName) {
			return (aName.toLowerCase() == bName.toLowerCase()) ? 0 : (aName.toLowerCase() > bName.toLowerCase()) ? 1 : -1;
		} else {
			return (aName == bName) ? 0 : (aName > bName) ? 1 : -1;
		}
	});
	return beziehungen;
};

// sortiert nach den keys des Objekts
// resultat nicht garantiert!
window.adb.sortKeysOfObject = function(o) {
	'use strict';
	var sorted = {},
		key,
		a = [];

	for (key in o) {
		if (o.hasOwnProperty(key)) {
			a.push(key);
		}
	}

	a.sort();

	for (key = 0; key < a.length; key++) {
		sorted[a[key]] = o[a[key]];
	}
	return sorted;
};

window.adb.exportZurücksetzen = function() {
	'use strict';
    var $exportieren_exportieren_collapse = $("#exportieren_exportieren_collapse");
	// Export ausblenden, falls sie eingeblendet war
	if ($exportieren_exportieren_collapse.css("display") !== "none") {
		$exportieren_exportieren_collapse.collapse('hide');
	}
	$("#exportieren_exportieren_tabelle").hide();
	$(".exportieren_exportieren_exportieren").hide();
	$("#exportieren_exportieren_error_text")
        .alert()
        .hide();
};

window.adb.öffneGruppe = function(Gruppe) {
	'use strict';
	var erstelleBaum = require('./modules/erstelleBaum');
	// Gruppe als globale Variable speichern, weil sie an vielen Orten benutzt wird
	window.adb.Gruppe = Gruppe;
	$(".suchfeld").val("");
	$("#Gruppe_label").html("Gruppe:");
	$(".suchen")
        .hide()
        .val("");
	$("#forms").hide();
	var treeMitteilung = "hole Daten...";
	if (window.adb.Gruppe === "Macromycetes") {
		treeMitteilung = "hole Daten (das dauert bei Pilzen länger...)";
	}
	$("#treeMitteilung")
        .html(treeMitteilung)
        .show();
	erstelleBaum();
	// keine Art mehr aktiv
	delete localStorage.art_id;
};

// schreibt Änderungen in Feldern in die Datenbank
// wird vorläufig nur für LR Taxonomie verwendet
window.adb.speichern = function(feldwert, feldname, ds_name, ds_typ) {
	'use strict';
	// zuerst die id des Objekts holen
	var uri = new Uri($(location).attr('href')),
		id = uri.getQueryParamValue('id'),
		// wenn browser history nicht unterstützt, erstellt history.js eine hash
		// dann muss die id durch die id in der hash ersetzt werden
		hash = uri.anchor(),
		uri2;
	if (hash) {
		uri2 = new Uri(hash);
		id = uri2.getQueryParamValue('id');
	}
	// sicherstellen, dass boolean, float und integer nicht in Text verwandelt werden
	feldwert = window.adb.convertToCorrectType(feldwert);
	var $db = $.couch.db("artendb");
	$db.openDoc(id, {
		success: function(object) {
			// prüfen, ob Einheit eines LR verändert wurde. Wenn ja: Name der Taxonomie anpassen
			if (feldname === "Einheit" && object.Taxonomie.Eigenschaften.Einheit === object.Taxonomie.Eigenschaften.Taxonomie) {
				// das ist die Wurzel der Taxonomie
				// somit ändert auch der Taxonomiename
				// diesen mitgeben
				// Einheit ändert und Taxonomiename muss auch angepasst werden
				object.Taxonomie.Name = feldwert;
				object.Taxonomie.Eigenschaften.Taxonomie = feldwert;
				// TODO: prüfen, ob die Änderung zulässig ist (Taxonomiename eindeutig) --- VOR DEM SPEICHERN
				// TODO: allfällige Beziehungen anpassen
			}
			// den übergebenen Wert im übergebenen Feldnamen speichern
			object.Taxonomie.Eigenschaften[feldname] = feldwert;
			$db.saveDoc(object, {
				success: function(data) {
					object._rev = data.rev;
					// prüfen, ob Label oder Name eines LR verändert wurde. Wenn ja: Hierarchie aktualisieren
					if (feldname === "Label" || feldname === "Einheit") {
						if (feldname === "Einheit" && object.Taxonomie.Eigenschaften.Einheit === object.Taxonomie.Eigenschaften.Taxonomie) {
							// das ist die Wurzel der Taxonomie
							// somit ändert auch der Taxonomiename
							// diesen mitgeben
							// Einheit ändert und Taxonomiename muss auch angepasst werden
							window.adb.aktualisiereHierarchieEinesLrInklusiveSeinerChildren(null, object, true, feldwert);
							// Feld Taxonomie und Beschriftung des Accordions aktualisiern
							// dazu neu initiieren, weil sonst das Accordion nicht verändert wird
							window.adb.initiiere_art(id);
							// Taxonomie anzeigen
							$('#' + window.adb.ersetzeUngültigeZeichenInIdNamen(feldwert)).collapse('show');
						} else {
							window.adb.aktualisiereHierarchieEinesLrInklusiveSeinerChildren(null, object, true, false);
						}
						// node umbenennen
						var neuer_nodetext;
						if (feldname === "Label") {
							// object hat noch den alten Wert für Label, neuen verwenden
							neuer_nodetext = window.adb.erstelleLrLabelName(feldwert, object.Taxonomie.Eigenschaften.Einheit);
						} else {
							// object hat noch den alten Wert für Einheit, neuen verwenden
							neuer_nodetext = window.adb.erstelleLrLabelName(object.Taxonomie.Eigenschaften.Label, feldwert);
						}
						$("#tree" + window.adb.Gruppe).jstree("rename_node", "#" + object._id, neuer_nodetext);
					}
				},
				error: function() {
					$("#meldung_individuell_label").html("Fehler");
					$("#meldung_individuell_text").html("Die letzte Änderung im Feld "+feldname+" wurde nicht gespeichert");
					$("#meldung_individuell_schliessen").html("schliessen");
					$('#meldung_individuell').modal();
				}
			});
		},
		error: function() {
			$("#meldung_individuell_label").html("Fehler");
			$("#meldung_individuell_text").html("Die letzte Änderung im Feld "+feldname+" wurde nicht gespeichert");
			$("#meldung_individuell_schliessen").html("schliessen");
			$('#meldung_individuell').modal();
		}
	});
};

window.adb.convertToCorrectType = function(feldwert) {
	'use strict';
	var type = window.adb.myTypeOf(feldwert);
	if (type === "boolean") {
		return Boolean(feldwert);
	} else if (type === "float") {
		return parseFloat(feldwert);
	} else if (type === "integer") {
		return parseInt(feldwert);
	} else {
		return feldwert;
	}
};

// Hilfsfunktion, die typeof ersetzt und ergänzt
// typeof gibt bei input-Feldern immer String zurück!
window.adb.myTypeOf = function(wert) {
	'use strict';
	if (typeof wert === "boolean") {
		return "boolean";
	} else if (parseInt(wert) && parseFloat(wert) && parseInt(wert) != parseFloat(wert) && parseInt(wert) == wert) {
		// es ist eine Float
		return "float";
	// verhindern, dass führende Nullen abgeschnitten werden
	} else if (parseInt(wert) == wert && wert.toString().length === Math.ceil(parseInt(wert)/10)) {
		// es ist eine Integer
		return "integer";
	} else {
		// als String behandeln
		return "string";
	}
};

window.adb.bearbeiteLrTaxonomie = function() {
	'use strict';
	// Benutzer muss anmelden
	if (!window.adb.prüfeAnmeldung("art")) {
		return false;
	}

	// Einstellung merken, damit auch nach Datensatzwechsel die Bearbeitbarkeit bleibt
	localStorage.lr_bearb = true;

	// Anmeldung: zeigen, aber geschlossen
	$("#art_anmelden_collapse").collapse('hide');
	$("#art_anmelden").show();

	// alle Felder schreibbar setzen
	$(".Lebensräume.Taxonomie").find(".controls").each(function() {
		// einige Felder nicht bearbeiten
		if ($(this).attr('id') !== "GUID" && $(this).attr('id') !== "Parent" && $(this).attr('id') !== "Taxonomie" && $(this).attr('id') !== "Hierarchie") {
            var parent = $(this).parent();
			$(this).attr('readonly', false);
			if (parent.attr('href')) {
				parent.attr('href', '#');
				// Standardverhalten beim Klicken von Links verhindern
				parent.attr('onclick', 'return false;');
				// Mauspointer nicht mehr als Finger
				this.style.cursor = '';
			}
		}
	});

	// Schreibbarkeit in den Symbolen anzeigen
	$('.lr_bearb').removeClass('disabled');
	$(".lr_bearb_bearb").addClass('disabled');
};

window.adb.schützeLrTaxonomie = function() {
	'use strict';
	// alle Felder schreibbar setzen
	$(".Lebensräume.Taxonomie .controls").each(function() {
        var parent = $(this).parent();
		$(this).attr('readonly', true);
		if (parent.attr('href')) {
			var feldWert = $(this).val();
			if (typeof feldWert === "string" && feldWert.slice(0, 7) === "//") {
				parent.attr('href', feldWert);
				// falls onclick besteht, entfernen
				parent.removeAttr("onclick");
				// Mauspointer nicht mehr als Finger
				this.style.cursor = 'pointer';
			}
		}
	});
	$('.lr_bearb').addClass('disabled');
	$(".lr_bearb_bearb").removeClass('disabled');
	$("#art_anmelden").hide();
};

// aktualisiert die Hierarchie eines Arrays von Objekten (in dieser Form: Lebensräumen, siehe wie der Name der parent-objekte erstellt wird)
// der Array kann das Resultat einer Abfrage aus der DB sein (object[i] = dara.rows[i].doc)
// oder aus dem Import einer Taxonomie stammen
// diese Funktion wird benötigt, wenn eine neue Taxonomie importiert wird
// Momentan nicht verwendet
window.adb.aktualisiereHierarchieEinerLrTaxonomie = function(object_array) {
	'use strict';
	var object,
		hierarchie,
		parent;
    _.each(object_array, function(object) {
        hierarchie = [];
        parent = object.Taxonomie.Eigenschaften.Parent;
        // als Start sich selben zur Hierarchie hinzufügen
        hierarchie.push(window.adb.erstelleHierarchieobjektAusObjekt(object));
        if (parent) {
            object.Taxonomie.Eigenschaften.Hierarchie = window.adb.ergänzeParentZuLrHierarchie(object_array, object._id, hierarchie);
            $db.saveDoc(object);
        }
    });
};

// aktualisiert die Hierarchie eines Objekts (in dieser Form: Lebensraum)
// ist aktualisiereHierarchiefeld true, wird das Feld in der UI aktualisiert
// diese Funktion wird benötigt, wenn ein neuer LR erstellt wird
// LR kann mitgegeben werden, muss aber nicht
// wird mitgegeben, wenn an den betreffenden lr nichts ändert und nicht jedes mal die LR aus der DB neu abgerufen werden sollen
// manchmal ist es aber nötig, die LR neu zu holen, wenn dazwischen an LR geändert wird!
window.adb.aktualisiereHierarchieEinesNeuenLr = function(lr, object, aktualisiere_hierarchiefeld) {
	'use strict';
	if (lr) {
		window.adb.aktualisiereHierarchieEinesNeuenLr_2(lr, object, aktualisiere_hierarchiefeld);
	} else {
		var $db = $.couch.db("artendb");
		$db.view('artendb/lr?include_docs=true', {
			success: function(data) {
				window.adb.aktualisiereHierarchieEinesNeuenLr_2(data, object, aktualisiere_hierarchiefeld);
			}
		});
	}
};

window.adb.aktualisiereHierarchieEinesNeuenLr_2 = function(LR, object) {
	'use strict';
	var object_array,
		hierarchie = [],
		parent_object,
		erstelleBaum = require('./modules/erstelleBaum');
	object_array = _.map(LR.rows, function(row) {
		return row.doc;
	});
	if (!object.Taxonomie) {
		object.Taxonomie = {};
	}
	if (!object.Taxonomie.Eigenschaften) {
		object.Taxonomie.Eigenschaften = {};
	}
	parent_object = _.find(object_array, function(obj) {
		return obj._id === object.Taxonomie.Eigenschaften.Parent.GUID;
	});
	// object.Name setzen
	object.Taxonomie.Name = parent_object.Taxonomie.Name;
	// object.Taxonomie.Eigenschaften.Taxonomie setzen
	object.Taxonomie.Eigenschaften.Taxonomie = parent_object.Taxonomie.Eigenschaften.Taxonomie;
	// als Start sich selben zur Hierarchie hinzufügen
	hierarchie.push(window.adb.erstelleHierarchieobjektAusObjekt(object));
	object.Taxonomie.Eigenschaften.Hierarchie = window.adb.ergänzeParentZuLrHierarchie(object_array, object.Taxonomie.Eigenschaften.Parent.GUID, hierarchie);
	// save ohne open: _rev wurde zuvor übernommen
	$db.saveDoc(object, {
		success: function() {
			$.when(erstelleBaum()).then(function() {
				window.adb.öffneBaumZuId(object._id);
				$('#lr_parent_waehlen').modal('hide');
			});
		},
		error: function() {
			$("#meldung_individuell_label").html("Fehler");
			$("#meldung_individuell_text").html("Die Hierarchie des Lebensraums konnte nicht erstellt werden");
			$("#meldung_individuell_schliessen").html("schliessen");
			$('#meldung_individuell').modal();
			window.adb.initiiere_art(object._id);
		}
	});
};

// aktualisiert die Hierarchie eines Objekts (in dieser Form: Lebensraum)
// und auch den parent
// prüft, ob dieses Objekt children hat
// wenn ja, wird deren Hierarchie auch aktualisiert
// ist aktualisiereHierarchiefeld true, wird das Feld in der UI aktualisiert
// wird das Ergebnis der DB-Abfrage mitgegeben, wird die Abfrage nicht wiederholt
// diese Funktion wird benötigt, wenn Namen oder Label eines bestehenden LR verändert wird
window.adb.aktualisiereHierarchieEinesLrInklusiveSeinerChildren = function(lr, object, aktualisiereHierarchiefeld, einheit_ist_taxonomiename) {
	'use strict';
	if (lr) {
		window.adb.aktualisiereHierarchieEinesLrInklusiveSeinerChildren_2(lr, object, aktualisiereHierarchiefeld, einheit_ist_taxonomiename);
	} else {
		var $db = $.couch.db("artendb");
		$db.view('artendb/lr?include_docs=true', {
			success: function(lr) {
				window.adb.aktualisiereHierarchieEinesLrInklusiveSeinerChildren_2(lr, object, aktualisiereHierarchiefeld, einheit_ist_taxonomiename);
			}
		});
	}
};

window.adb.aktualisiereHierarchieEinesLrInklusiveSeinerChildren_2 = function(lr, objekt, aktualisiereHierarchiefeld, einheit_ist_taxonomiename) {
	'use strict';
	var hierarchie = [],
		parent = objekt.Taxonomie.Eigenschaften.Parent,
		object_array = _.map(lr.rows, function(row) {
			return row.doc;
		});
	if (!objekt.Taxonomie) {
		objekt.Taxonomie = {};
	}
	if (!objekt.Taxonomie.Eigenschaften) {
		objekt.Taxonomie.Eigenschaften = {};
	}
	// als Start sich selber zur Hierarchie hinzufügen
	hierarchie.push(window.adb.erstelleHierarchieobjektAusObjekt(objekt));
	if (parent.GUID !== objekt._id) {
		objekt.Taxonomie.Eigenschaften.Hierarchie = window.adb.ergänzeParentZuLrHierarchie(object_array, objekt.Taxonomie.Eigenschaften.Parent.GUID, hierarchie);
	} else {
		// aha, das ist die Wurzel des Baums
		objekt.Taxonomie.Eigenschaften.Hierarchie = hierarchie;
	}
	if (aktualisiereHierarchiefeld) {
		$("#Hierarchie").val(window.adb.erstelleHierarchieFürFeldAusHierarchieobjekteArray(objekt.Taxonomie.Eigenschaften.Hierarchie));
	}
	// jetzt den parent aktualisieren
	if (objekt.Taxonomie.Eigenschaften.Hierarchie.length > 1) {
		// es gibt höhere Ebenen
		// das vorletzte Hierarchieobjekt wählen. das ist length -2, weil length bei 1 beginnt, die Objekte aber von 0 an nummeriert werden
		objekt.Taxonomie.Eigenschaften.Parent = objekt.Taxonomie.Eigenschaften.Hierarchie[objekt.Taxonomie.Eigenschaften.Hierarchie.length-2];
	} else if (objekt.Taxonomie.Eigenschaften.Hierarchie.length === 1) {
		// das ist die oberste Ebene
		objekt.Taxonomie.Eigenschaften.Parent = objekt.Taxonomie.Eigenschaften.Hierarchie[0];
	}
	if (einheit_ist_taxonomiename) {
		// Einheit ändert und Taxonomiename muss auch angepasst werden
		objekt.Taxonomie.Name = einheit_ist_taxonomiename;
		objekt.Taxonomie.Eigenschaften.Taxonomie = einheit_ist_taxonomiename;
	}
	$db.saveDoc(objekt, {
		success: function() {
			var doc;
			// kontrollieren, ob das Objekt children hat. Wenn ja, diese aktualisieren
            _.each(lr.rows, function(lr_row) {
                doc = lr_row.doc;
                if (doc.Taxonomie && doc.Taxonomie.Eigenschaften && doc.Taxonomie.Eigenschaften.Parent && doc.Taxonomie.Eigenschaften.Parent.GUID && doc.Taxonomie.Eigenschaften.Parent.GUID === objekt._id && doc._id !== objekt._id) {
                    // das ist ein child
                    // auch aktualisieren
                    // lr mitgeben, damit die Abfrage nicht wiederholt werden muss
                    window.adb.aktualisiereHierarchieEinesLrInklusiveSeinerChildren_2(lr, doc, false, einheit_ist_taxonomiename);
                }
            });
		}
	});
};

// Baut den Hierarchiepfad für einen Lebensraum auf
// das erste Element - der Lebensraum selbst - wird mit der Variable "Hierarchie" übergeben
// ruft sich selbst rekursiv auf, bis das oberste Hierarchieelement erreicht ist
window.adb.ergänzeParentZuLrHierarchie = function(objekt_array, parentGUID, Hierarchie) {
	'use strict';
	var parent_objekt,
		hierarchie_ergänzt;
    _.each(objekt_array, function(object) {
        if (object._id === parentGUID) {
            parent_objekt = window.adb.erstelleHierarchieobjektAusObjekt(object);
            Hierarchie.push(parent_objekt);
            if (object.Taxonomie.Eigenschaften.Parent.GUID !== object._id) {
                // die Hierarchie ist noch nicht zu Ende - weitermachen
                hierarchie_ergänzt = window.adb.ergänzeParentZuLrHierarchie(objekt_array, object.Taxonomie.Eigenschaften.Parent.GUID, Hierarchie);
                return Hierarchie;
            } else {
                // jetzt ist die Hierarchie vollständig
                // sie ist aber verkehrt - umkehren
                return Hierarchie.reverse();
            }
        }
    });
};

window.adb.erstelleHierarchieobjektAusObjekt = function(objekt) {
	'use strict';
	var hierarchieobjekt = {};
	hierarchieobjekt.Name = window.adb.erstelleLrLabelNameAusObjekt(objekt);
	hierarchieobjekt.GUID = objekt._id;
	return hierarchieobjekt;
};

window.adb.erstelleLrLabelNameAusObjekt = function(objekt) {
	'use strict';
	var label = objekt.Taxonomie.Eigenschaften.Label || "",
		einheit = objekt.Taxonomie.Eigenschaften.Einheit || "";
	return window.adb.erstelleLrLabelName(label, einheit);
};

window.adb.erstelleLrLabelName = function(label, einheit) {
	'use strict';
	if (label && einheit) {
		return label + ": " + einheit;
	} else if (einheit) {
		return einheit;
	} else {
		// aha, ein neues Objekt, noch ohne Label und Einheit
		return "unbenannte Einheit";
	}
};

// löscht Datensätze in Massen
// nimmt einen Array von Objekten entgegen
// baut daraus einen neuen array auf, in dem die Objekte nur noch die benötigten Informationen haben
// aktualisiert die Objekte mit einer einzigen Operation
window.adb.löscheMassenMitObjektArray = function(object_array) {
	'use strict';
	var objekte_mit_objekte,
		objekte = [],
		new_objekt;
    _.each(object_array, function(object) {
        new_objekt = {};
        new_objekt._id = object._id;
        new_objekt._rev = object._rev;
        new_objekt._deleted = true;
        objekte.push(new_objekt);
    });
	objekte_mit_objekte = {};
	objekte_mit_objekte.docs = objekte;
	$.ajax({
		type: "POST",
		url: "../../_bulk_docs",
		contentType: "application/json", 
		data: JSON.stringify(objekte_mit_objekte)
	});
};

// erhält einen filterwert
// dieser kann zuvorderst einen Vergleichsoperator enthalten oder auch nicht
// retourniert einen Array mit 0 Vergleichsoperator und 1 filterwert
window.adb.ermittleVergleichsoperator = function(filterwert) {
	'use strict';
	var vergleichsoperator;
	if (filterwert.indexOf(">=") === 0) {
		vergleichsoperator = ">=";
		if (filterwert.indexOf(" ") === 2) {
			filterwert = filterwert.slice(3);
		} else {
			filterwert = filterwert.slice(2);
		}
	} else if (filterwert.indexOf("<=") === 0) {
		vergleichsoperator = "<=";
		if (filterwert.indexOf(" ") === 2) {
			filterwert = filterwert.slice(3);
		} else {
			filterwert = filterwert.slice(2);
		}
	} else if (filterwert.indexOf(">") === 0) {
		vergleichsoperator = ">";
		if (filterwert.indexOf(" ") === 1) {
			filterwert = filterwert.slice(2);
		} else {
			filterwert = filterwert.slice(1);
		}
	} else if (filterwert.indexOf("<") === 0) {
		vergleichsoperator = "<";
		if (filterwert.indexOf(" ") === 1) {
			filterwert = filterwert.slice(2);
		} else {
			filterwert = filterwert.slice(1);
		}
	} else if (filterwert.indexOf("=") === 0) {
		// abfangen, falls jemand "=" eingibt
		vergleichsoperator = "=";
		if (filterwert.indexOf(" ") === 1) {
			filterwert = filterwert.slice(2);
		} else {
			filterwert = filterwert.slice(1);
		}
	} else {
		vergleichsoperator = "kein";
	}
	return [vergleichsoperator, filterwert];
};

window.adb.ersetzeUngültigeZeichenInIdNamen = function(idname) {
	'use strict';
	return idname.replace(/\s+/g, " ").replace(/ /g,'').replace(/,/g,'').replace(/\./g,'').replace(/:/g,'').replace(/-/g,'').replace(/\//g,'').replace(/\(/g,'').replace(/\)/g,'').replace(/\&/g,'');
};

// kontrolliert den verwendeten Browser
// Quelle: //stackoverflow.com/questions/13478303/correct-way-to-use-modernizr-to-detect-ie
window.adb.browserDetect = 
{
	init: function() 
	{
		this.browser = this.searchString(this.dataBrowser) || "Other";
		this.version = this.searchVersion(navigator.userAgent) ||	   this.searchVersion(navigator.appVersion) || "Unknown";
	},

	searchString: function(data) 
	{
		for (var i=0 ; i < data.length ; i++)   
		{
			var dataString = data[i].string;
			this.versionSearchString = data[i].subString;

			if (dataString.indexOf(data[i].subString) != -1)
			{
				return data[i].identity;
			}
		}
	},

	searchVersion: function(dataString) 
	{
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},

	dataBrowser: 
	[
		{ string: navigator.userAgent, subString: "Chrome",  identity: "Chrome" },
		{ string: navigator.userAgent, subString: "MSIE",	identity: "Explorer" },
		{ string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
		{ string: navigator.userAgent, subString: "Safari",  identity: "Safari" },
		{ string: navigator.userAgent, subString: "Opera",   identity: "Opera" }
    ]

};

/*
* Bootstrap file uploader
* Quelle: //jasny.github.io/bootstrap/javascript.html#fileupload
*/
/**
* Bootstrap.js by @mdo and @fat, extended by @ArnoldDaniels.
* plugins: bootstrap-fileupload.js
* Copyright 2012 Twitter, Inc.
* //apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){var t=function(t,n){this.$element=e(t),this.type=this.$element.data("uploadtype")||(this.$element.find(".thumbnail").length>0?"image":"file"),this.$input=this.$element.find(":file");if(this.$input.length===0)return;this.name=this.$input.attr("name")||n.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),this.$hidden.length===0&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileupload-preview");var r=this.$preview.css("height");this.$preview.css("display")!="inline"&&r!="0px"&&r!="none"&&this.$preview.css("line-height",r),this.original={exists:this.$element.hasClass("fileupload-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.$remove=this.$element.find('[data-dismiss="fileupload"]'),this.$element.find('[data-trigger="fileupload"]').on("click.fileupload",e.proxy(this.trigger,this)),this.listen()};t.prototype={listen:function(){this.$input.on("change.fileupload",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.fileupload",e.proxy(this.reset,this)),this.$remove&&this.$remove.on("click.fileupload",e.proxy(this.clear,this))},change:function(e,t){if(t==="clear")return;var n=e.target.files!==undefined?e.target.files[0]:e.target.value?{name:e.target.value.replace(/^.+\\/,"")}:null;if(!n){this.clear();return}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);if(this.type==="image"&&this.$preview.length>0&&(typeof n.type!="undefined"?n.type.match("image.*"):n.name.match(/\.(gif|png|jpe?g)$/i))&&typeof FileReader!="undefined"){var r=new FileReader,i=this.$preview,s=this.$element;r.onload=function(e){i.html('<img src="'+e.target.result+'" '+(i.css("max-height")!="none"?'style="max-height: '+i.css("max-height")+';"':"")+" />"),s.addClass("fileupload-exists").removeClass("fileupload-new")},r.readAsDataURL(n)}else this.$preview.text(n.name),this.$element.addClass("fileupload-exists").removeClass("fileupload-new")},clear:function(e){this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name","");if(navigator.userAgent.match(/msie/i)){var t=this.$input.clone(!0);this.$input.after(t),this.$input.remove(),this.$input=t}else this.$input.val("");this.$preview.html(""),this.$element.addClass("fileupload-new").removeClass("fileupload-exists"),e&&(this.$input.trigger("change",["clear"]),e.preventDefault ? e.preventDefault() : e.returnValue = false)},reset:function(e){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.original.exists?this.$element.addClass("fileupload-exists").removeClass("fileupload-new"):this.$element.addClass("fileupload-new").removeClass("fileupload-exists")},trigger:function(e){this.$input.trigger("click"),e.preventDefault ? e.preventDefault() : e.returnValue = false}},e.fn.fileupload=function(n){return this.each(function(){var r=e(this),i=r.data("fileupload");i||r.data("fileupload",i=new t(this,n)),typeof n=="string"&&i[n]()})},e.fn.fileupload.Constructor=t,e(document).on("click.fileupload.data-api",'[data-provides="fileupload"]',function(t){var n=e(this);if(n.data("fileupload"))return;n.fileupload(n.data());var r=e(t.target).closest('[data-dismiss="fileupload"],[data-trigger="fileupload"]');r.length>0&&(r.trigger("click.fileupload"),t.preventDefault())})}(window.jQuery);

/*!
 * Autolinker.js
 * 0.10.1
 *
 * Copyright(c) 2014 Gregory Jacobs <greg@greg-jacobs.com>
 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/gregjacobs/Autolinker.js
 */
!function(a,b){"function"==typeof define&&define.amd?define(b):"undefined"!=typeof exports?module.exports=b():a.Autolinker=b()}(this,function(){var a=function(a){a=a||{};for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])};return a.prototype={constructor:a,newWindow:!0,stripPrefix:!0,twitter:!0,email:!0,urls:!0,className:"",matcherRegex:function(){var a=/(^|[^\w])@(\w{1,15})/,b=/(?:[\-;:&=\+\$,\w\.]+@)/,c=/(?:[A-Za-z]{3,9}:(?:\/\/)?)/,d=/(?:www\.)/,e=/[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,f=/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,g=/(?:[\-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|])?/;return new RegExp(["(",a.source,")","|","(",b.source,e.source,f.source,")","|","(","(?:","(?:",c.source,e.source,")","|","(?:","(.?//)?",d.source,e.source,")","|","(?:","(.?//)?",e.source,f.source,")",")",g.source,")"].join(""),"g")}(),protocolRelativeRegex:/(.)?\/\//,htmlRegex:function(){var a=/[0-9a-zA-Z:]+/,b=/[^\s\0"'>\/=\x01-\x1F\x7F]+/,c=/(?:".*?"|'.*?'|[^'"=<>`\s]+)/;return new RegExp(["<(/)?","("+a.source+")","(?:","\\s+",b.source,"(?:\\s*=\\s*"+c.source+")?",")*","\\s*",">"].join(""),"g")}(),urlPrefixRegex:/^(https?:\/\/)?(www\.)?/,link:function(a){return this.processHtml(a)},processHtml:function(a){for(var b,c,d=this.htmlRegex,e=0,f=0,g=[];null!==(b=d.exec(a));){var h=b[0],i=b[2],j=!!b[1];c=a.substring(e,b.index),e=b.index+h.length,"a"===i?j?(f=Math.max(f-1,0),0===f&&g.push(c)):(f++,g.push(this.processTextNode(c))):g.push(0===f?this.processTextNode(c):c),g.push(h)}if(e<a.length){var k=this.processTextNode(a.substring(e));g.push(k)}return g.join("")},processTextNode:function(a){var b=this,c=this.matcherRegex,d=this.twitter,e=this.email,f=this.urls;return a.replace(c,function(a,c,g,h,i,j,k,l){var m=c,n=g,o=h,p=i,q=j,r=k||l,s="",t="";if(m&&!d||p&&!e||q&&!f||q&&-1===q.indexOf(".")||q&&/^[A-Za-z]{3,9}:/.test(q)&&!/:.*?[A-Za-z]/.test(q)||r&&/^[\w]\/\//.test(r))return a;var u=a.charAt(a.length-1);if(")"===u){var v=a.match(/\(/g),w=a.match(/\)/g),x=v&&v.length||0,y=w&&w.length||0;y>x&&(a=a.substr(0,a.length-1),t=")")}var z,A=a,B=a;if(m)z="twitter",s=n,A="https://twitter.com/"+o,B="@"+o;else if(p)z="email",A="mailto:"+p,B=p;else if(z="url",r){var C=new RegExp("^"+b.protocolRelativeRegex.source),D=r.match(C)[1]||"";s=D+s,A=A.replace(C,"//"),B=B.replace(C,"")}else/^[A-Za-z]{3,9}:/i.test(A)||(A="http://"+A);var E=b.createAnchorTag(z,A,B);return s+E+t})},createAnchorTag:function(a,b,c){var d=this.createAnchorAttrsStr(a,b);return c=this.processAnchorText(c),"<a "+d+">"+c+"</a>"},createAnchorAttrsStr:function(a,b){var c=['href="'+b+'"'],d=this.createCssClass(a);return d&&c.push('class="'+d+'"'),this.newWindow&&c.push('target="_blank"'),c.join(" ")},createCssClass:function(a){var b=this.className;return b?b+" "+b+"-"+a:""},processAnchorText:function(a){return this.stripPrefix&&(a=this.stripUrlPrefix(a)),a=this.removeTrailingSlash(a),a=this.doTruncate(a)},stripUrlPrefix:function(a){return a.replace(this.urlPrefixRegex,"")},removeTrailingSlash:function(a){return"/"===a.charAt(a.length-1)&&(a=a.slice(0,-1)),a},doTruncate:function(a){var b=this.truncate;return b&&a.length>b&&(a=a.substring(0,b-2)+".."),a}},a.link=function(b,c){var d=new a(c);return d.link(b)},a});
},{"./modules/erstelleBaum":"/Users/alex/artendb/vendor/couchapp/_attachments/modules/erstelleBaum.js"}],"/Users/alex/artendb/vendor/couchapp/_attachments/modules/erstelleBaum.js":[function(require,module,exports){
'use strict';

var returnFunction = function () {
	var gruppe,
		gruppenbezeichnung,
		baum_erstellt = $.Deferred();
	// alle Bäume ausblenden
	$(".baum").hide();
	// alle Beschriftungen ausblenden
	$(".treeBeschriftung").hide();
	// gewollte beschriften und sichtbar schalten
	switch (window.adb.Gruppe) {
    case "Fauna":
        gruppe = "fauna";
        gruppenbezeichnung = "Tiere";
        break;
    case "Flora":
        gruppe = "flora";
        gruppenbezeichnung = "Pflanzen";
        break;
    case "Moose":
        gruppe = "moose";
        gruppenbezeichnung = "Moose";
        break;
    case "Macromycetes":
        gruppe = "macromycetes";
        gruppenbezeichnung = "Pilze";
        break;
    case "Lebensräume":
        gruppe = "lr";
        gruppenbezeichnung = "Lebensräume";
        break;
	}
	var $db = $.couch.db("artendb");
	$db.view('artendb/' + gruppe + "_gruppiert", {
		success: function(data) {
			var anzahl_objekte = data.rows[0].value;
			$("#tree" + window.adb.Gruppe + "Beschriftung").html(anzahl_objekte + " " + gruppenbezeichnung);
			// eingeblendet wird die Beschriftung, wenn der Baum fertig ist im callback von function erstelleTree
		}
	});
	$.when(window.adb.erstelleTree()).then(function() {
		baum_erstellt.resolve();
	});
	return baum_erstellt.promise();
};

module.exports = returnFunction;
},{}]},{},["./vendor/couchapp/_attachments/artendb.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ2ZW5kb3IvY291Y2hhcHAvX2F0dGFjaG1lbnRzL2FydGVuZGIuanMiLCJ2ZW5kb3IvY291Y2hhcHAvX2F0dGFjaG1lbnRzL21vZHVsZXMvZXJzdGVsbGVCYXVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2OEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cuYWRiID0gd2luZG93LmFkYiB8fCB7fTtcblxud2luZG93LmFkYi5lcnN0ZWxsZVRyZWUgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgbGV2ZWwsXG5cdFx0Z3J1cHBlLFxuXHRcdGZpbHRlcixcblx0XHRpZCxcblx0XHRqc3RyZWVfZXJzdGVsbHQgPSAkLkRlZmVycmVkKCk7XG5cdCQoXCIjdHJlZVwiICsgd2luZG93LmFkYi5HcnVwcGUpLmpzdHJlZSh7XG5cdFx0XCJqc29uX2RhdGFcIjoge1xuXHRcdFx0YWpheDoge1xuXHRcdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdFx0dXJsOiBmdW5jdGlvbihub2RlKSB7XG5cdFx0XHRcdFx0aWYgKG5vZGUgPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB3aW5kb3cuYWRiLmhvbGVEYXRlblVybEbDvHJUcmVlT2JlcnN0ZXNMZXZlbCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsZXZlbCA9IHBhcnNlSW50KG5vZGUuYXR0cignbGV2ZWwnKSwgMTApICsgMTtcblx0XHRcdFx0XHRcdGdydXBwZSA9IG5vZGUuYXR0cignZ3J1cHBlJyk7XG5cdFx0XHRcdFx0XHRpZiAobm9kZS5hdHRyKCdmaWx0ZXInKSkge1xuXHRcdFx0XHRcdFx0XHRmaWx0ZXIgPSBub2RlLmF0dHIoJ2ZpbHRlcicpLnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0XHRcdFx0aWQgPSBcIlwiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZmlsdGVyID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0aWQgPSBub2RlLmF0dHIoJ2lkJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gd2luZG93LmFkYi5ob2xlRGF0ZW5VcmxGw7xyVHJlZVVudGVyZUxldmVsKGxldmVsLCBmaWx0ZXIsIGdydXBwZSwgaWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJlcnN0ZWxsZVRyZWUgbWVsZGV0OiBhamF4IHN1Y2Nlc3NcIik7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImVyc3RlbGxlVHJlZSBtZWxkZXQ6IGFqYXggZmFpbHVyZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJ1aVwiOiB7XG5cdFx0XHRcInNlbGVjdF9saW1pdFwiOiAxLFx0Ly8gbnVyIGVpbiBEYXRlbnNhdHoga2FubiBhdWZzIG1hbCBnZXfDpGhsdCB3ZXJkZW5cblx0XHRcdFwic2VsZWN0ZWRfcGFyZW50X29wZW5cIjogdHJ1ZSxcdC8vIHdlbm4gQ29kZSBlaW5lbiBub2RlIHfDpGhsdCwgd2VyZGVuIGFsbGUgcGFyZW50cyBnZcO2ZmZuZXRcblx0XHRcdFwic2VsZWN0X3ByZXZfb25fZGVsZXRlXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiY29yZVwiOiB7XG5cdFx0XHRcIm9wZW5fcGFyZW50c1wiOiB0cnVlLFx0Ly8gd2lyZCBlaW4gbm9kZSBwcm9ncmFtbWF0aXNjaCBnZcO2ZmZuZXQsIMO2ZmZuZW4gc2ljaCBhbGxlIHBhcmVudHNcblx0XHRcdFwic3RyaW5nc1wiOiB7XG5cdFx0XHRcdFwibG9hZGluZ1wiOiBcImhvbGUgRGF0ZW4uLi5cIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJzb3J0XCI6IGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldF90ZXh0KGEpID4gdGhpcy5nZXRfdGV4dChiKSA/IDEgOiAtMTtcblx0XHR9LFxuXHRcdFwidGhlbWVzXCI6IHtcblx0XHRcdFwiaWNvbnNcIjogZmFsc2Vcblx0XHR9LFxuXHRcdFwicGx1Z2luc1wiIDogW1widWlcIiwgXCJ0aGVtZXNcIiwgXCJqc29uX2RhdGFcIiwgXCJzb3J0XCJdXG5cdH0pXG5cdC5iaW5kKFwic2VsZWN0X25vZGUuanN0cmVlXCIsIGZ1bmN0aW9uKGUsIGRhdGEpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXHRcdHZhciBub2RlID0gZGF0YS5yc2x0Lm9iajtcblx0XHQkLmpzdHJlZS5fcmVmZXJlbmNlKG5vZGUpLm9wZW5fbm9kZShub2RlKTtcblx0XHRpZiAobm9kZS5hdHRyKFwiaWRcIikpIHtcblx0XHRcdC8vIHZlcmhpbmRlcm4sIGRhc3MgYmVyZWl0cyBvZmZlbmUgU2VpdGVuIG5vY2htYWxzIGdlw7ZmZm5ldCB3ZXJkZW5cblx0XHRcdGlmICghJChcIiNhcnRcIikuaXMoJzp2aXNpYmxlJykgfHwgbG9jYWxTdG9yYWdlLmFydF9pZCAhPT0gbm9kZS5hdHRyKFwiaWRcIikpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmFydF9pZCA9IG5vZGUuYXR0cihcImlkXCIpO1xuXHRcdFx0XHQvLyBBbnplaWdlIGltIEZvcm11bGFyIGluaXRpaWVyZW4uIElEIHVuZCBEYXRlbnNhbW1sdW5nIMO8YmVyZ2ViZW5cblx0XHRcdFx0d2luZG93LmFkYi5pbml0aWllcmVfYXJ0KG5vZGUuYXR0cihcImlkXCIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cdC5iaW5kKFwibG9hZGVkLmpzdHJlZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXHRcdGpzdHJlZV9lcnN0ZWxsdC5yZXNvbHZlKCk7XG5cdFx0JChcIiNzdWNoZW5cIit3aW5kb3cuYWRiLkdydXBwZSkuY3NzKFwiZGlzcGxheVwiLCBcInRhYmxlXCIpO1xuXHRcdCQoXCIjdHJlZU1pdHRlaWx1bmdcIikuaGlkZSgpO1xuXHRcdCQoXCIjdHJlZVwiICsgd2luZG93LmFkYi5HcnVwcGUpLnNob3coKTtcblx0XHQkKFwiI3RyZWVcIiArIHdpbmRvdy5hZGIuR3J1cHBlICsgXCJCZXNjaHJpZnR1bmdcIikuc2hvdygpO1xuXHRcdHdpbmRvdy5hZGIuc2V0emVUcmVlaMO2aGUoKTtcblx0XHR3aW5kb3cuYWRiLmluaXRpaWVyZVN1Y2hmZWxkKCk7XG5cdH0pXG5cdC5iaW5kKFwiYWZ0ZXJfb3Blbi5qc3RyZWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93LmFkYi5zZXR6ZVRyZWVow7ZoZSgpO1xuXHR9KVxuXHQuYmluZChcImFmdGVyX2Nsb3NlLmpzdHJlZVwiLCBmdW5jdGlvbigpIHtcblx0XHR3aW5kb3cuYWRiLnNldHplVHJlZWjDtmhlKCk7XG5cdH0pO1xuXHRyZXR1cm4ganN0cmVlX2Vyc3RlbGx0LnByb21pc2UoKTtcbn07XG5cbndpbmRvdy5hZGIuaG9sZURhdGVuVXJsRsO8clRyZWVPYmVyc3Rlc0xldmVsID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGdydXBwZSxcbiAgICAgICAgdXJsO1xuXHQvLyB3aWUgc2ljaGVyc3RlbGxlbiwgZGFzcyBuaWNodCBkaWVzZWxiZW4gbm9kZXMgbWVocm1hbHMgYW5nZWjDpG5ndCB3ZXJkZW4/XG5cdHN3aXRjaCAod2luZG93LmFkYi5HcnVwcGUpIHtcbiAgICBjYXNlIFwiRmF1bmFcIjpcbiAgICAgICAgZ3J1cHBlID0gXCJmYXVuYVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiRmxvcmFcIjpcbiAgICAgICAgZ3J1cHBlID0gXCJmbG9yYVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiTW9vc2VcIjpcbiAgICAgICAgZ3J1cHBlID0gXCJtb29zZVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiTWFjcm9teWNldGVzXCI6XG4gICAgICAgIGdydXBwZSA9IFwibWFjcm9teWNldGVzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJMZWJlbnNyw6R1bWVcIjpcbiAgICAgICAgZ3J1cHBlID0gXCJsclwiO1xuICAgICAgICBicmVhaztcblx0fVxuXHRpZiAod2luZG93LmFkYi5HcnVwcGUgPT09IFwiTGViZW5zcsOkdW1lXCIpIHtcblx0XHR1cmwgPSAkKGxvY2F0aW9uKS5hdHRyKFwicHJvdG9jb2xcIikgKyAnLy8nICsgJChsb2NhdGlvbikuYXR0cihcImhvc3RcIikgKyBcIi9hcnRlbmRiL19kZXNpZ24vYXJ0ZW5kYi9fbGlzdC9iYXVtX2xyL2JhdW1fbHI/c3RhcnRrZXk9WzFdJmVuZGtleT1bMSx7fSx7fSx7fSx7fSx7fV0mZ3JvdXBfbGV2ZWw9NlwiO1xuXHR9IGVsc2Uge1xuXHRcdHVybCA9ICQobG9jYXRpb24pLmF0dHIoXCJwcm90b2NvbFwiKSArICcvLycgKyAkKGxvY2F0aW9uKS5hdHRyKFwiaG9zdFwiKSArIFwiL2FydGVuZGIvX2Rlc2lnbi9hcnRlbmRiL19saXN0L2JhdW1fXCIrZ3J1cHBlK1wiL2JhdW1fXCIrZ3J1cHBlK1wiP2dyb3VwX2xldmVsPTFcIjtcblx0fVxuXHRyZXR1cm4gdXJsO1xufTtcblxud2luZG93LmFkYi5ob2xlRGF0ZW5VcmxGw7xyVHJlZVVudGVyZUxldmVsID0gZnVuY3Rpb24obGV2ZWwsIGZpbHRlciwgZ3J1cHBlLCBpZCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBzdGFydGtleSxcblx0XHQvLyBmbGFnLCB1bSBtaXR6dWxpZWZlcm4sIG9iIGRpZSBpZCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGxcblx0XHRpZDIgPSBmYWxzZSxcblx0XHRlbmRrZXkgPSBbXSxcbiAgICAgICAgYSxcbiAgICAgICAgdXJsO1xuXHRpZiAoZmlsdGVyKSB7XG5cdFx0Ly8gYmVpIGxyIGdpYnQgZXMga2VpbmVuIGZpbHRlciB1bmQgZGFzIGVyemV1Z3QgZWluZW4gZmVobGVyXG5cdFx0c3RhcnRrZXkgPSBmaWx0ZXIuc2xpY2UoKTtcblx0XHRlbmRrZXkgPSBmaWx0ZXIuc2xpY2UoKTtcblx0fVxuXHRzd2l0Y2ggKGdydXBwZSkge1xuICAgIGNhc2UgXCJmYXVuYVwiOlxuICAgICAgICBpZiAobGV2ZWwgPiA0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGE9NTsgYT49bGV2ZWw7IGEtLSkge1xuICAgICAgICAgICAgZW5ka2V5LnB1c2goe30pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltIHVudGVyc3RlbiBsZXZlbCBlaW5lbiBsZXZlbCBtZWhyIGFuemVpZ2VuLCBkYW1pdCBpZCB2b3JoYW5kZW4gaXN0XG4gICAgICAgIGlmIChsZXZlbCA9PT0gNCkge1xuICAgICAgICAgICAgLy8gZGFzIGlzdCBkaWUgQXJ0LUViZW5lXG4gICAgICAgICAgICAvLyBoaWVyIHNvbGwgZGllIGlkIGFuZ2V6ZWlndCB3ZXJkZW5cbiAgICAgICAgICAgIC8vIGRhenUgbXVzcyBkZXIgbsOkY2hzdGUgbGV2ZWwgYWJnZXJ1ZmVuIHdlcmRlblxuICAgICAgICAgICAgLy8gZGFtaXQgZGllIGxpc3QgZGVuIHp1IGhvaGVuIGxldmVsIGtvcnJpZ2llcmVuIGthbm4sIGlkIG1pdGdlYmVuXG4gICAgICAgICAgICBpZDIgPSB0cnVlO1xuICAgICAgICAgICAgbGV2ZWwrKztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiZmxvcmFcIjpcbiAgICAgICAgaWYgKGxldmVsID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChhPTQ7IGE+PWxldmVsOyBhLS0pIHtcbiAgICAgICAgICAgIGVuZGtleS5wdXNoKHt9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbSB1bnRlcnN0ZW4gbGV2ZWwgZWluZW4gbGV2ZWwgbWVociBhbnplaWdlbiwgZGFtaXQgaWQgdm9yaGFuZGVuIGlzdFxuICAgICAgICBpZiAobGV2ZWwgPT09IDMpIHtcbiAgICAgICAgICAgIGlkMiA9IHRydWU7XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtb29zZVwiOlxuICAgICAgICBpZiAobGV2ZWwgPiA0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGE9NTsgYT49bGV2ZWw7IGEtLSkge1xuICAgICAgICAgICAgZW5ka2V5LnB1c2goe30pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltIHVudGVyc3RlbiBsZXZlbCBlaW5lbiBsZXZlbCBtZWhyIGFuemVpZ2VuLCBkYW1pdCBpZCB2b3JoYW5kZW4gaXN0XG4gICAgICAgIGlmIChsZXZlbCA9PT0gNCkge1xuICAgICAgICAgICAgaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldmVsKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1hY3JvbXljZXRlc1wiOlxuICAgICAgICBpZiAobGV2ZWwgPiAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGE9MzsgYT49bGV2ZWw7IGEtLSkge1xuICAgICAgICAgICAgZW5ka2V5LnB1c2goe30pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltIHVudGVyc3RlbiBsZXZlbCBlaW5lbiBsZXZlbCBtZWhyIGFuemVpZ2VuLCBkYW1pdCBpZCB2b3JoYW5kZW4gaXN0XG4gICAgICAgIGlmIChsZXZlbCA9PT0gMikge1xuICAgICAgICAgICAgaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldmVsKys7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cdH1cblx0aWYgKGdydXBwZSA9PT0gXCJsclwiKSB7XG5cdFx0dXJsID0gJChsb2NhdGlvbikuYXR0cihcInByb3RvY29sXCIpICsgJy8vJyArICQobG9jYXRpb24pLmF0dHIoXCJob3N0XCIpICsgJy9hcnRlbmRiL19kZXNpZ24vYXJ0ZW5kYi9fbGlzdC9iYXVtX2xyL2JhdW1fbHI/c3RhcnRrZXk9WycrbGV2ZWwrJywgXCInK2lkKydcIl0mZW5ka2V5PVsnK2xldmVsKycsIFwiJytpZCsnXCIse30se30se30se31dJmdyb3VwX2xldmVsPTYnO1xuXHR9IGVsc2Uge1xuXHRcdHVybCA9ICQobG9jYXRpb24pLmF0dHIoXCJwcm90b2NvbFwiKSArICcvLycgKyAkKGxvY2F0aW9uKS5hdHRyKFwiaG9zdFwiKSArIFwiL2FydGVuZGIvX2Rlc2lnbi9hcnRlbmRiL19saXN0L2JhdW1fXCIrZ3J1cHBlK1wiL2JhdW1fXCIrZ3J1cHBlK1wiP3N0YXJ0a2V5PVwiK0pTT04uc3RyaW5naWZ5KHN0YXJ0a2V5KStcIiZlbmRrZXk9XCIrSlNPTi5zdHJpbmdpZnkoZW5ka2V5KStcIiZncm91cF9sZXZlbD1cIitsZXZlbDtcblx0fVxuXHRpZiAoaWQyKSB7XG5cdFx0dXJsID0gdXJsICsgXCImaWQ9dHJ1ZVwiO1xuXHR9XG5cdHJldHVybiB1cmw7XG59O1xuXG53aW5kb3cuYWRiLmluaXRpaWVyZVN1Y2hmZWxkID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8genVlcnN0IG1hbCBkaWUgYmVuw7Z0aWd0ZW4gRGF0ZW4gaG9sZW5cblx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHRpZiAod2luZG93LmFkYi5HcnVwcGUgJiYgd2luZG93LmFkYi5HcnVwcGUgPT09IFwiTGViZW5zcsOkdW1lXCIpIHtcblx0XHRpZiAod2luZG93LmFkYi5maWx0ZXJlX2xyKSB7XG5cdFx0XHR3aW5kb3cuYWRiLmluaXRpaWVyZVN1Y2hmZWxkXzIoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHN0YXJ0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KCdbXCInK3dpbmRvdy5hZGIuR3J1cHBlKydcIl0nKSxcblx0XHRcdFx0ZW5ka2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KCdbXCInK3dpbmRvdy5hZGIuR3J1cHBlKydcIix7fSx7fSx7fV0nKSxcblx0XHRcdFx0dXJsID0gJ2FydGVuZGIvZmlsdGVyZV9scj9zdGFydGtleT0nK3N0YXJ0a2V5KycmZW5ka2V5PScgKyBlbmRrZXk7XG5cdFx0XHQkZGIudmlldyh1cmwsIHtcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdHdpbmRvdy5hZGIuZmlsdGVyZV9sciA9IGRhdGE7XG5cdFx0XHRcdFx0d2luZG93LmFkYi5pbml0aWllcmVTdWNoZmVsZF8yKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSBlbHNlIGlmICh3aW5kb3cuYWRiLkdydXBwZSkge1xuXHRcdGlmICh3aW5kb3cuYWRiW1wiZmlsdGVyZV9hcnRfXCIgKyB3aW5kb3cuYWRiLkdydXBwZS50b0xvd2VyQ2FzZSgpXSkge1xuXHRcdFx0d2luZG93LmFkYi5pbml0aWllcmVTdWNoZmVsZF8yKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkYi52aWV3KCdhcnRlbmRiL2ZpbHRlcmVfYXJ0P3N0YXJ0a2V5PVtcIicrd2luZG93LmFkYi5HcnVwcGUrJ1wiXSZlbmRrZXk9W1wiJyt3aW5kb3cuYWRiLkdydXBwZSsnXCIse31dJywge1xuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkYltcImZpbHRlcmVfYXJ0X1wiICsgd2luZG93LmFkYi5HcnVwcGUudG9Mb3dlckNhc2UoKV0gPSBkYXRhO1xuXHRcdFx0XHRcdHdpbmRvdy5hZGIuaW5pdGlpZXJlU3VjaGZlbGRfMigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbndpbmRvdy5hZGIuaW5pdGlpZXJlU3VjaGZlbGRfMiA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBzdWNoX29iamVrdGU7XG5cdGlmICh3aW5kb3cuYWRiLkdydXBwZSAmJiB3aW5kb3cuYWRiLkdydXBwZSA9PT0gXCJMZWJlbnNyw6R1bWVcIikge1xuXHRcdHN1Y2hfb2JqZWt0ZSA9IHdpbmRvdy5hZGIuZmlsdGVyZV9sci5yb3dzO1xuXHR9IGVsc2UgaWYgKHdpbmRvdy5hZGIuR3J1cHBlKSB7XG5cdFx0c3VjaF9vYmpla3RlID0gd2luZG93LmFkYltcImZpbHRlcmVfYXJ0X1wiICsgd2luZG93LmFkYi5HcnVwcGUudG9Mb3dlckNhc2UoKV0ucm93cztcblx0fVxuXHRzdWNoX29iamVrdGUgPSBfLm1hcChzdWNoX29iamVrdGUsIGZ1bmN0aW9uKG9iamVrdCkge1xuXHRcdHJldHVybiBvYmpla3QudmFsdWU7XG5cdH0pO1xuXG5cdCQoJyNzdWNoZmVsZCcgKyB3aW5kb3cuYWRiLkdydXBwZSkudHlwZWFoZWFkKHtcblx0XHRuYW1lOiB3aW5kb3cuYWRiLkdydXBwZSxcblx0XHR2YWx1ZUtleTogJ05hbWUnLFxuXHRcdGxvY2FsOiBzdWNoX29iamVrdGUsXG5cdFx0bGltaXQ6IDIwXG5cdH0pXG5cdC5vbigndHlwZWFoZWFkOnNlbGVjdGVkJywgZnVuY3Rpb24oZSwgZGF0dW0pIHtcblx0XHR3aW5kb3cuYWRiLsO2ZmZuZUJhdW1adUlkKGRhdHVtLmlkKTtcblx0fSk7XG5cdCQoXCIjc3VjaGZlbGRcIit3aW5kb3cuYWRiLkdydXBwZSkuZm9jdXMoKTtcbn07XG5cbi8vIGJhdXQgZGllIEF1c3dhaGxsaXN0ZSBhdWYsIG1pdCBkZXIgZWluIFBhcmVudCBhdXNnZXfDpGhsdCB3ZXJkZW4gc29sbFxuLy8gYmVrb21tdCBkaWUgaWQgZGVzIExSLCB2b24gZGVtIGF1cyBlaW4gbmV1ZXIgTFIgZXJzdGVsbHQgd2VyZGVuIHNvbGxcbi8vIEluIGRlciBBdXN3YWhsbGlzdGUgc29sbGVuIG51ciBMUiBhdXMgZGVyc2VsYmVuIFRheG9ub21pZSBnZXfDpGhsdCB3ZXJkZW4ga8O2bm5lblxuLy8gcGx1cyBtYW4gc29sbCBhdWNoIGVpbmVuIG5ldWUgVGF4b25vbWllIGJlZ2lubmVuIGvDtm5uZW5cbndpbmRvdy5hZGIuaW5pdGlpZXJlTHJQYXJlbnRBdXN3YWhsbGlzdGUgPSBmdW5jdGlvbih0YXhvbm9taWVfbmFtZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIGxyIGhvbGVuXG5cdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0JGRiLnZpZXcoJ2FydGVuZGIvbHI/aW5jbHVkZV9kb2NzPXRydWUnLCB7XG5cdFx0c3VjY2VzczogZnVuY3Rpb24obHIpIHtcblx0XHRcdHZhciB0YXhvbm9taWVfb2JqZWt0ZSwgXG5cdFx0XHRcdG9iamVjdCxcblx0XHRcdFx0bmV1ZV90YXhvbm9taWUsXG5cdFx0XHRcdG9iamVjdF9odG1sLFxuXHRcdFx0XHRodG1sID0gXCJcIixcblx0XHRcdFx0aTtcblx0XHRcdC8vIHJlZHV6aWVyZW4gYXVmIGRpZSBMUiBkZXIgVGF4b25vbWllXG5cdFx0XHR0YXhvbm9taWVfb2JqZWt0ZSA9IF8uZmlsdGVyKGxyLnJvd3MsIGZ1bmN0aW9uKHJvdykge1xuXHRcdFx0XHRyZXR1cm4gcm93LmRvYy5UYXhvbm9taWUuTmFtZSA9PT0gdGF4b25vbWllX25hbWU7XG5cdFx0XHR9KTtcblx0XHRcdC8vIGVpbmVuIEFycmF5IHZvbiBPYmpla3RlbiBzY2hhZmZlbiBtaXQgaWQgdW5kIE5hbWVcblx0XHRcdHRheG9ub21pZV9vYmpla3RlID0gXy5tYXAodGF4b25vbWllX29iamVrdGUsIGZ1bmN0aW9uKHJvdykge1xuXHRcdFx0XHRvYmplY3QgPSB7fTtcblx0XHRcdFx0b2JqZWN0LmlkID0gcm93LmRvYy5faWQ7XG5cdFx0XHRcdGlmIChyb3cuZG9jLlRheG9ub21pZS5FaWdlbnNjaGFmdGVuICYmIHJvdy5kb2MuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uRWluaGVpdCkge1xuXHRcdFx0XHRcdGlmIChyb3cuZG9jLlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkxhYmVsKSB7XG5cdFx0XHRcdFx0XHRvYmplY3QuTmFtZSA9IHJvdy5kb2MuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uTGFiZWwgKyBcIjogXCIgKyByb3cuZG9jLlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkVpbmhlaXQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG9iamVjdC5OYW1lID0gcm93LmRvYy5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5FaW5oZWl0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocm93LmRvYy5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5IaWVyYXJjaGllICYmIHJvdy5kb2MuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uSGllcmFyY2hpZS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdC8vIGRhcyBpc3QgZGFzIG9iZXJzdGUgT2JqZWt0LCBzb2xsIGF1Y2ggenVvYmVyc3QgZWluc29ydGllcnQgd2VyZGVuXG5cdFx0XHRcdFx0XHQvLyBvZnQgaGF0IGVzIGFscyBlaW56aWdlcyBrZWluZW4gbGFiZWwgdW5kIHfDvHJkZSBkYWhlciB6dXVudGVyc3Qgc29ydGllcnQhXG5cdFx0XHRcdFx0XHRvYmplY3QuU29ydGllciA9IFwiMFwiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBtaXR0ZWxzIEFycmF5IHNvcnRpZXJlblxuXHRcdFx0XHRcdFx0b2JqZWN0LlNvcnRpZXIgPSBvYmplY3QuTmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9iamVjdDtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gamV0enQgbmFjaCBOYW1lIHNvcnRpZXJlblxuXHRcdFx0dGF4b25vbWllX29iamVrdGUgPSBfLnNvcnRCeSh0YXhvbm9taWVfb2JqZWt0ZSwgZnVuY3Rpb24ob2JqZWt0KSB7XG5cdFx0XHRcdHJldHVybiBvYmpla3QuU29ydGllcjtcblx0XHRcdH0pO1xuXHRcdFx0bmV1ZV90YXhvbm9taWUgPSB7fTtcblx0XHRcdG5ldWVfdGF4b25vbWllLmlkID0gMDtcblx0XHRcdG5ldWVfdGF4b25vbWllLk5hbWUgPSBcIk5ldWUgVGF4b25vbWllIGJlZ2lubmVuXCI7XG5cdFx0XHQvLyBuZXVlVGF4b25vbWllIGFscyBlcnN0ZXMgT2JqZWt0IGluIGRlbiBBcnJheSBlaW5mw7xnZW5cblx0XHRcdHRheG9ub21pZV9vYmpla3RlLnVuc2hpZnQobmV1ZV90YXhvbm9taWUpO1xuXG5cdFx0XHQvLyBqZXR6dCBkaWUgT3B0aW9uZW5saXN0ZSBmw7xyICQoXCIjbHJfcGFyZW50X3dhZWhsZW5fb3B0aW9uZW5cIikgYXVmYmF1ZW5cblx0XHRcdGZvciAoaT0wOyBpPHRheG9ub21pZV9vYmpla3RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG9iamVjdF9odG1sID0gJyc7XG5cdFx0XHRcdGlmIChpID09PSAxKSB7XG5cdFx0XHRcdFx0b2JqZWN0X2h0bWwgKz0gJzxwPi4uLm9kZXIgZGVuIGhpZXJhcmNoaXNjaCDDvGJlcmdlb3JkbmV0ZW4gTGViZW5zcmF1bSB3w6RobGVuOjwvcD4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9iamVjdF9odG1sICs9ICc8ZGl2IGNsYXNzPVwicmFkaW9cIj48bGFiZWw+Jztcblx0XHRcdFx0b2JqZWN0X2h0bWwgKz0gJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGFyZW50X29wdGlvbmVuXCIgaWQ9XCInO1xuXHRcdFx0XHRvYmplY3RfaHRtbCArPSB0YXhvbm9taWVfb2JqZWt0ZVtpXS5pZDtcblx0XHRcdFx0b2JqZWN0X2h0bWwgKz0gJ1wiIHZhbHVlPVwiJztcblx0XHRcdFx0b2JqZWN0X2h0bWwgKz0gdGF4b25vbWllX29iamVrdGVbaV0uTmFtZTtcblx0XHRcdFx0b2JqZWN0X2h0bWwgKz0gJ1wiPic7XG5cdFx0XHRcdG9iamVjdF9odG1sICs9IHRheG9ub21pZV9vYmpla3RlW2ldLk5hbWU7XG5cdFx0XHRcdG9iamVjdF9odG1sICs9ICc8L2xhYmVsPjwvZGl2Pic7XG5cdFx0XHRcdGh0bWwgKz0gb2JqZWN0X2h0bWw7XG5cdFx0XHR9XG5cdFx0XHQkKFwiI2xyX3BhcmVudF93YWVobGVuX29wdGlvbmVuXCIpLmh0bWwoaHRtbCk7XG5cdFx0XHQvLyBqZXR6dCBkYXMgbW9kYWwgYXVmcnVmZW5cblx0XHRcdC8vIGjDtmhlIEFucGFzc2VuIGZ1bmt0aW9uaWVydCBsZWlkZXIgbmljaHQgw7xiZXIgY3NzIG1pdCBjYWxjXG5cdFx0XHQkKCcjbHJfcGFyZW50X3dhZWhsZW4nKS5tb2RhbCgpO1xuXHRcdFx0JCgnI2xyX3BhcmVudF93YWVobGVuX29wdGlvbmVuJykuY3NzKCdtYXgtaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpLTEwMCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbndpbmRvdy5hZGIuw7ZmZm5lQmF1bVp1SWQgPSBmdW5jdGlvbihpZCkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIEhpZXJhcmNoaWUgZGVyIGlkIGhvbGVuXG5cdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0JGRiLm9wZW5Eb2MoaWQsIHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihvYmpla3QpIHtcbiAgICAgICAgICAgIHZhciAkZmlsdGVyX2tsYXNzZSA9ICQoXCJbZmlsdGVyPSdcIiArIG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5LbGFzc2UgKyBcIiddXCIpLFxuICAgICAgICAgICAgICAgICRhcnRfYW5tZWxkZW4gPSAkKFwiI2FydF9hbm1lbGRlblwiKTtcblx0XHRcdHN3aXRjaCAob2JqZWt0LkdydXBwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkZhdW5hXCI6XG4gICAgICAgICAgICAgICAgLy8gdm9uIG9iZW4gbmFjaCB1bnRlbiBkaWUgamV3ZWlscyByaWNodGlnZW4gbm9kZXMgw7ZmZm5lbiwgenVsZXR6dCBzZWxla3RpZXJlblxuICAgICAgICAgICAgICAgIC8vIG9iZXJzdGUgRWJlbmUgYXVmYmF1ZW4gbmljaHQgbsO2dGlnLCBkaWUgZ2lidCBlcyBzY2hvblxuICAgICAgICAgICAgICAgICQuanN0cmVlLl9yZWZlcmVuY2UoXCIjdHJlZUZhdW5hXCIpLm9wZW5fbm9kZSgkZmlsdGVyX2tsYXNzZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQuanN0cmVlLl9yZWZlcmVuY2UoXCIjdHJlZUZhdW5hXCIpLm9wZW5fbm9kZSgkKFwiW2ZpbHRlcj0nXCIgKyBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uS2xhc3NlICsgXCIsXCIgKyBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uT3JkbnVuZyArIFwiJ11cIiksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5qc3RyZWUuX3JlZmVyZW5jZShcIiN0cmVlRmF1bmFcIikub3Blbl9ub2RlKCQoXCJbZmlsdGVyPSdcIiArIG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5LbGFzc2UgKyBcIixcIiArIG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5PcmRudW5nICsgXCIsXCIrb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkZhbWlsaWUrXCInXVwiKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5qc3RyZWUuX3JlZmVyZW5jZShcIiN0cmVlRmF1bmFcIikuc2VsZWN0X25vZGUoJChcIiNcIiArIG9iamVrdC5faWQpLCBmdW5jdGlvbigpIHt9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gQW5tZWxkdW5nIHZlcnN0ZWNrZW4sIHdlbm4gbmljaHQgTGViZW5zcsOkdW1lXG4gICAgICAgICAgICAgICAgJGFydF9hbm1lbGRlbi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRmxvcmFcIjpcbiAgICAgICAgICAgICAgICAvLyB2b24gb2JlbiBuYWNoIHVudGVuIGRpZSBqZXdlaWxzIHJpY2h0aWdlbiBub2RlcyDDtmZmbmVuLCB6dWxldHp0IHNlbGVrdGllcmVuXG4gICAgICAgICAgICAgICAgLy8gb2JlcnN0ZSBFYmVuZSBhdWZiYXVlbiBuaWNodCBuw7Z0aWcsIGRpZSBnaWJ0IGVzIHNjaG9uXG4gICAgICAgICAgICAgICAgJC5qc3RyZWUuX3JlZmVyZW5jZShcIiN0cmVlRmxvcmFcIikub3Blbl9ub2RlKCQoXCJbZmlsdGVyPSdcIiArIG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5GYW1pbGllICsgXCInXVwiKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQuanN0cmVlLl9yZWZlcmVuY2UoXCIjdHJlZUZsb3JhXCIpLm9wZW5fbm9kZSgkKFwiW2ZpbHRlcj0nXCIgKyBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uRmFtaWxpZSArIFwiLFwiICsgb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkdhdHR1bmcgKyBcIiddXCIpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuanN0cmVlLl9yZWZlcmVuY2UoXCIjdHJlZUZsb3JhXCIpLnNlbGVjdF9ub2RlKCQoXCIjXCIgKyBvYmpla3QuX2lkKSwgZnVuY3Rpb24oKSB7fSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBBbm1lbGR1bmcgdmVyc3RlY2tlbiwgd2VubiBuaWNodCBMZWJlbnNyw6R1bWVcbiAgICAgICAgICAgICAgICAkYXJ0X2FubWVsZGVuLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNb29zZVwiOlxuICAgICAgICAgICAgICAgIC8vIHZvbiBvYmVuIG5hY2ggdW50ZW4gZGllIGpld2VpbHMgcmljaHRpZ2VuIG5vZGVzIMO2ZmZuZW4sIHp1bGV0enQgc2VsZWt0aWVyZW5cbiAgICAgICAgICAgICAgICAvLyBvYmVyc3RlIEViZW5lIGF1ZmJhdWVuIG5pY2h0IG7DtnRpZywgZGllIGdpYnQgZXMgc2Nob25cbiAgICAgICAgICAgICAgICAkLmpzdHJlZS5fcmVmZXJlbmNlKFwiI3RyZWVNb29zZVwiKS5vcGVuX25vZGUoJGZpbHRlcl9rbGFzc2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkLmpzdHJlZS5fcmVmZXJlbmNlKFwiI3RyZWVNb29zZVwiKS5vcGVuX25vZGUoJChcIltmaWx0ZXI9J1wiK29iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5LbGFzc2UrXCIsXCIrb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkZhbWlsaWUrXCInXVwiKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmpzdHJlZS5fcmVmZXJlbmNlKFwiI3RyZWVNb29zZVwiKS5vcGVuX25vZGUoJChcIltmaWx0ZXI9J1wiK29iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5LbGFzc2UrXCIsXCIrb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkZhbWlsaWUrXCIsXCIrb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkdhdHR1bmcrXCInXVwiKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5qc3RyZWUuX3JlZmVyZW5jZShcIiN0cmVlTW9vc2VcIikuc2VsZWN0X25vZGUoJChcIiNcIitvYmpla3QuX2lkKSwgZnVuY3Rpb24oKSB7fSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIEFubWVsZHVuZyB2ZXJzdGVja2VuLCB3ZW5uIG5pY2h0IExlYmVuc3LDpHVtZVxuICAgICAgICAgICAgICAgICRhcnRfYW5tZWxkZW4uaGlkZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1hY3JvbXljZXRlc1wiOlxuICAgICAgICAgICAgICAgIC8vIHZvbiBvYmVuIG5hY2ggdW50ZW4gZGllIGpld2VpbHMgcmljaHRpZ2VuIG5vZGVzIMO2ZmZuZW4sIHp1bGV0enQgc2VsZWt0aWVyZW5cbiAgICAgICAgICAgICAgICAvLyBvYmVyc3RlIEViZW5lIGF1ZmJhdWVuIG5pY2h0IG7DtnRpZywgZGllIGdpYnQgZXMgc2Nob25cbiAgICAgICAgICAgICAgICAkLmpzdHJlZS5fcmVmZXJlbmNlKFwiI3RyZWVNYWNyb215Y2V0ZXNcIikub3Blbl9ub2RlKCQoXCJbZmlsdGVyPSdcIitvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uR2F0dHVuZytcIiddXCIpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5qc3RyZWUuX3JlZmVyZW5jZShcIiN0cmVlTWFjcm9teWNldGVzXCIpLnNlbGVjdF9ub2RlKCQoXCIjXCIrb2JqZWt0Ll9pZCksIGZ1bmN0aW9uKCkge30sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBBbm1lbGR1bmcgdmVyc3RlY2tlbiwgd2VubiBuaWNodCBMZWJlbnNyw6R1bWVcbiAgICAgICAgICAgICAgICAkYXJ0X2FubWVsZGVuLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMZWJlbnNyw6R1bWVcIjpcbiAgICAgICAgICAgICAgICB2YXIgaWRfYXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8b2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkhpZXJhcmNoaWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWRfYXJyYXkucHVzaChvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uSGllcmFyY2hpZVtpXS5HVUlEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkYi5vZWZmbmVOb2RlTmFjaElkQXJyYXkoaWRfYXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59O1xuXG4vLyBsw6R1ZnQgdm9uIG9iZW4gbmFjaCB1bnRlbiBkdXJjaCBkaWUgSGllcmFyY2hpZSBkZXIgTGViZW5zcsOkdW1lXG4vLyBydWZ0IHNpY2ggc2VsYmVyIHdpZWRlciBhdWYsIHdlbm4gZWluIHRpZWZlcmVyIGxldmVsIGV4aXN0aWVydFxuLy8gZXJ3YXJ0ZXQgaWRBcnJheTogZWluZW4gQXJyYXkgZGVyIEdVSUQncyBhdXMgZGVyIEhpZXJhcmNoaWUgZGVzIE9iamVrdHNcbndpbmRvdy5hZGIub2VmZm5lTm9kZU5hY2hJZEFycmF5ID0gZnVuY3Rpb24oaWRBcnJheSkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmIChpZEFycmF5Lmxlbmd0aCA+IDEpIHtcblx0XHQkLmpzdHJlZS5fcmVmZXJlbmNlKFwiI3RyZWVcIiArIHdpbmRvdy5hZGIuR3J1cHBlKS5vcGVuX25vZGUoJChcIiNcIitpZEFycmF5WzBdKSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZEFycmF5LnNwbGljZSgwLDEpO1xuXHRcdFx0d2luZG93LmFkYi5vZWZmbmVOb2RlTmFjaElkQXJyYXkoaWRBcnJheSk7XG5cdFx0fSwgZmFsc2UpO1xuXHR9IGVsc2UgaWYgKGlkQXJyYXkubGVuZ3RoID09PSAxKSB7XG5cdFx0JC5qc3RyZWUuX3JlZmVyZW5jZShcIiN0cmVlXCIgKyB3aW5kb3cuYWRiLkdydXBwZSkuc2VsZWN0X25vZGUoJChcIiNcIitpZEFycmF5WzBdKSxmdW5jdGlvbigpIHt9LCB0cnVlKTtcblx0fVxufTtcblxud2luZG93LmFkYi5pbml0aWllcmVfYXJ0ID0gZnVuY3Rpb24oaWQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdCRkYi5vcGVuRG9jKGlkLCB7XG5cdFx0c3VjY2VzczogZnVuY3Rpb24oYXJ0KSB7XG5cdFx0XHR2YXIgaHRtbF9hcnQsXG5cdFx0XHRcdGFydF9laWdlbnNjaGFmdGVuc2FtbWx1bmdlbiA9IGFydC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbixcblx0XHRcdFx0YXJ0X2JlemllaHVuZ3NzYW1tbHVuZ2VuID0gW10sXG5cdFx0XHRcdHRheG9ub21pc2NoZV9iZXppZWh1bmdzc2FtbWx1bmdlbiA9IFtdLFxuXHRcdFx0XHRsZW4sXG5cdFx0XHRcdGd1aWRzX3Zvbl9zeW5vbnltZW4gPSBbXSxcblx0XHRcdFx0ZWlnZW5zY2hhZnRlbnNhbW1sdW5nZW5fdm9uX3N5bm9ueW1lbiA9IFtdLFxuXHRcdFx0XHRiZXppZWh1bmdzc2FtbWx1bmdlbl92b25fc3lub255bWVuID0gW10sXG5cdFx0XHRcdGEsIGYsIGgsIGksIGssIHgsXG5cdFx0XHRcdGRzX25hbWVuID0gW10sXG5cdFx0XHRcdGJlel9uYW1lbiA9IFtdO1xuXHRcdFx0Ly8gcGFuZWwgYmVnaW5uZW5cblx0XHRcdGh0bWxfYXJ0ID0gJzxoND5UYXhvbm9taWU6PC9oND4nO1xuXHRcdFx0Ly8genVlcnN0IGFsbGUgRGF0ZW5zYW1tbHVuZ2VuIGF1Zmxpc3RlbiwgZGFtaXQgZGFuYWNoIHNvcnRpZXJ0IHdlcmRlbiBrYW5uXG5cdFx0XHQvLyBnbGVpY2h6ZWl0aWcgZGllIFRheG9ub21pZSBzdWNoZW4gdW5kIGdsZWljaCBlcnN0ZWxsZW4gbGFzc2VuXG5cdFx0XHRodG1sX2FydCArPSB3aW5kb3cuYWRiLmVyc3RlbGxlSHRtbEbDvHJEYXRlbnNhbW1sdW5nKFwiVGF4b25vbWllXCIsIGFydCwgYXJ0LlRheG9ub21pZSk7XG5cdFx0XHQvLyBEYXRlbnNhbW1sdW5nZW4gbXVzcyBuaWNodCBnZXB1c2h0IHdlcmRlblxuXHRcdFx0Ly8gYWJlciBCZXppZWh1bmdzc2FtbWx1bmdlbiBhdWZ0ZWlsZW5cblx0XHRcdGlmIChhcnQuQmV6aWVodW5nc3NhbW1sdW5nZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF8uZWFjaChhcnQuQmV6aWVodW5nc3NhbW1sdW5nZW4sIGZ1bmN0aW9uKGJlemllaHVuZ3NzYW1tbHVuZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJlemllaHVuZ3NzYW1tbHVuZy5UeXAgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydF9iZXppZWh1bmdzc2FtbWx1bmdlbi5wdXNoKGJlemllaHVuZ3NzYW1tbHVuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZXpOYW1lbiBhdWZsaXN0ZW4sIHVtIHNww6R0ZXIgenUgdmVyZ2xlaWNoZW4sIG9iIGRpZXNlIERTIHNjaG9uIGRhcmdlc3RlbGx0IHdpcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlel9uYW1lbi5wdXNoKGJlemllaHVuZ3NzYW1tbHVuZy5OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiZXppZWh1bmdzc2FtbWx1bmcuVHlwID09PSBcInRheG9ub21pc2NoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub21pc2NoZV9iZXppZWh1bmdzc2FtbWx1bmdlbi5wdXNoKGJlemllaHVuZ3NzYW1tbHVuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZXpOYW1lbiBhdWZsaXN0ZW4sIHVtIHNww6R0ZXIgenUgdmVyZ2xlaWNoZW4sIG9iIGRpZXNlIERTIHNjaG9uIGRhcmdlc3RlbGx0IHdpcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlel9uYW1lbi5wdXNoKGJlemllaHVuZ3NzYW1tbHVuZy5OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdGF4b25vbWlzY2hlIEJlemllaHVuZ2VuIGluIGdld29sbHRlciBSZWloZW5mb2xnZSBoaW56dWbDvGdlblxuXHRcdFx0aWYgKHRheG9ub21pc2NoZV9iZXppZWh1bmdzc2FtbWx1bmdlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdC8vIFRpdGVsIGhpbnp1ZsO8Z2VuLCBmYWxscyBEYXRlbnNhbW1sdW5nZW4gZXhpc3RpZXJlblxuXHRcdFx0XHRodG1sX2FydCArPSBcIjxoND5UYXhvbm9taXNjaGUgQmV6aWVodW5nZW46PC9oND5cIjtcbiAgICAgICAgICAgICAgICBfLmVhY2godGF4b25vbWlzY2hlX2JlemllaHVuZ3NzYW1tbHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmdzc2FtbWx1bmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSFRNTCBmw7xyIERhdGVuc2FtbWx1bmcgZXJzdGVsbGVuIGxhc3NlbiB1bmQgaGluenVmw7xnZW5cbiAgICAgICAgICAgICAgICAgICAgaHRtbF9hcnQgKz0gd2luZG93LmFkYi5lcnN0ZWxsZUh0bWxGw7xyQmV6aWVodW5nc3NhbW1sdW5nKGFydCwgYmV6aWVodW5nc3NhbW1sdW5nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlemllaHVuZ3NzYW1tbHVuZ1tcIkFydCBkZXIgQmV6aWVodW5nZW5cIl0gJiYgYmV6aWVodW5nc3NhbW1sdW5nW1wiQXJ0IGRlciBCZXppZWh1bmdlblwiXSA9PT0gXCJzeW5vbnltXCIgJiYgYmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmV6aWVodW5nLkJlemllaHVuZ3NwYXJ0bmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChiZXppZWh1bmcuQmV6aWVodW5nc3BhcnRuZXIsIGZ1bmN0aW9uKGJlemllaHVuZ3NwYXJ0bmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmV6aWVodW5nc3BhcnRuZXIuR1VJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRzX3Zvbl9zeW5vbnltZW4ucHVzaChiZXppZWh1bmdzcGFydG5lci5HVUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHRcdC8vIERhdGVuc2FtbWx1bmdlbiBpbiBnZXdvbGx0ZXIgUmVpaGVuZm9sZ2UgaGluenVmw7xnZW5cblx0XHRcdGlmIChhcnRfZWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyBEYXRlbnNhbW1sdW5nZW4gbmFjaCBOYW1lIHNvcnRpZXJlblxuXHRcdFx0XHQvKmF1c2dlc2NoYWx0ZXQsIHVtIFRlbXBvIHp1IGdld2lubmVuLCBEYXRlbiBzaW5kIGVoIHNvcnRpZXJ0XG5cdFx0XHRcdERhdGVuc2FtbWx1bmdlbiA9IHdpbmRvdy5hZGIuc29ydGllcmVPYmpla3RhcnJheU5hY2hOYW1lKERhdGVuc2FtbWx1bmdlbik7Ki9cblx0XHRcdFx0Ly8gVGl0ZWwgaGluenVmw7xnZW5cblx0XHRcdFx0aHRtbF9hcnQgKz0gXCI8aDQ+RWlnZW5zY2hhZnRlbjo8L2g0PlwiO1xuICAgICAgICAgICAgICAgIF8uZWFjaChhcnRfZWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGRhdGVuc2FtbWx1bmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSFRNTCBmw7xyIERhdGVuc2FtbWx1bmcgZXJzdGVsbGVuIGxhc3NlbiB1bmQgaGluenVmw7xnZW5cbiAgICAgICAgICAgICAgICAgICAgaHRtbF9hcnQgKz0gd2luZG93LmFkYi5lcnN0ZWxsZUh0bWxGw7xyRGF0ZW5zYW1tbHVuZyhcIkRhdGVuc2FtbWx1bmdcIiwgYXJ0LCBkYXRlbnNhbW1sdW5nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHNOYW1lbiBhdWZsaXN0ZW4sIHVtIHNww6R0ZXIgenUgdmVyZ2xlaWNoZW4sIG9iIHNpZSBzY2hvbiBkYXJnZXN0ZWxsdCB3aXJkXG4gICAgICAgICAgICAgICAgICAgIGRzX25hbWVuLnB1c2goZGF0ZW5zYW1tbHVuZy5OYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHRcdC8vIEJlemllaHVuZ2VuIGhpbnp1ZsO8Z2VuXG5cdFx0XHRpZiAoYXJ0X2JlemllaHVuZ3NzYW1tbHVuZ2VuLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gVGl0ZWwgaGluenVmw7xnZW5cblx0XHRcdFx0aHRtbF9hcnQgKz0gXCI8aDQ+QmV6aWVodW5nZW46PC9oND5cIjtcbiAgICAgICAgICAgICAgICBfLmVhY2goYXJ0X2JlemllaHVuZ3NzYW1tbHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmdzc2FtbWx1bmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSFRNTCBmw7xyIERhdGVuc2FtbWx1bmcgZXJzdGVsbGVuIGxhc3NlbiB1bmQgaGluenVmw7xnZW5cbiAgICAgICAgICAgICAgICAgICAgaHRtbF9hcnQgKz0gd2luZG93LmFkYi5lcnN0ZWxsZUh0bWxGw7xyQmV6aWVodW5nc3NhbW1sdW5nKGFydCwgYmV6aWVodW5nc3NhbW1sdW5nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHRcdC8vIEJlemllaHVuZ3NzYW1tbHVuZ2VuIHZvbiBzeW5vbnltZW4gQXJ0ZW5cblx0XHRcdGlmIChndWlkc192b25fc3lub255bWVuLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdFx0XHRcdCRkYi52aWV3KCdhcnRlbmRiL2FsbF9kb2NzP2tleXM9JyArIGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShndWlkc192b25fc3lub255bWVuKSkgKyAnJmluY2x1ZGVfZG9jcz10cnVlJywge1xuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRcdHZhciBzeW5vbnltZV9hcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbihkYXRhX3Jvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bm9ueW1lX2FydCA9IGRhdGFfcm93LmRvYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3lub255bWVfYXJ0LkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuICYmIHN5bm9ueW1lX2FydC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChzeW5vbnltZV9hcnQuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHNfbmFtZW4uaW5kZXhPZihlaWdlbnNjaGFmdGVuc2FtbWx1bmdlbi5OYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaWVzZSBEYXRlbnNhbW1sdW5nIHdpcmQgbm9jaCBuaWNodCBkYXJnZXN0ZWxsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuX3Zvbl9zeW5vbnltZW4ucHVzaChlaWdlbnNjaGFmdGVuc2FtbWx1bmdlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXVjaCBpbiBkc05hbWVuIHB1c2hlbiwgZGFtaXQgYmVpbSBuw6RjaHN0ZW4gVmVyZ2xlaWNoIG1pdCBiZXLDvGNrc2ljaHRpZ3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc19uYW1lbi5wdXNoKGVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuLk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1Y2ggaW4gRGF0ZW5zYW1tbHVuZ2VuIGVyZ8Okbnplbiwgd2VpbCBkaWUgRGFyc3RlbGx1bmcgZGF2b24gYWJow6RuZ3QsIG9iIGVpbmUgRFMgZXhpc3RpZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0X2VpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuLnB1c2goZWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bm9ueW1lX2FydC5CZXppZWh1bmdzc2FtbWx1bmdlbiAmJiBzeW5vbnltZV9hcnQuQmV6aWVodW5nc3NhbW1sdW5nZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goc3lub255bWVfYXJ0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmdzc2FtbWx1bmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZXpfbmFtZW4uaW5kZXhPZihiZXppZWh1bmdzc2FtbWx1bmcuTmFtZSkgPT09IC0xICYmIGJlemllaHVuZ3NzYW1tbHVuZ1tcIkFydCBkZXIgQmV6aWVodW5nZW5cIl0gIT09IFwic3lub255bVwiICYmIGJlemllaHVuZ3NzYW1tbHVuZy5UeXAgIT09IFwidGF4b25vbWlzY2hcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpZXNlIEJlemllaHVuZ3NzYW1tbHVuZyB3aXJkIG5vY2ggbmljaHQgZGFyZ2VzdGVsbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1bmQgc2llIGlzdCBuaWNodCB0YXhvbm9taXNjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlemllaHVuZ3NzYW1tbHVuZ2VuX3Zvbl9zeW5vbnltZW4ucHVzaChiZXppZWh1bmdzc2FtbWx1bmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1Y2ggaW4gYmV6TmFtZW4gcHVzaGVuLCBkYW1pdCBiZWltIG7DpGNoc3RlbiBWZXJnbGVpY2ggbWl0IGJlcsO8Y2tzaWNodGlndFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlel9uYW1lbi5wdXNoKGJlemllaHVuZ3NzYW1tbHVuZy5OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdWNoIGluIEJlemllaHVuZ3NzYW1tbHVuZ2VuIGVyZ8Okbnplbiwgd2VpbCBkaWUgRGFyc3RlbGx1bmcgZGF2b24gYWJow6RuZ3QsIG9iIGVpbmUgRFMgZXhpc3RpZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0X2JlemllaHVuZ3NzYW1tbHVuZ2VuLnB1c2goYmV6aWVodW5nc3NhbW1sdW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmV6aWVodW5nc3NhbW1sdW5nW1wiQXJ0IGRlciBCZXppZWh1bmdlblwiXSAhPT0gXCJzeW5vbnltXCIgJiYgYmV6aWVodW5nc3NhbW1sdW5nLlR5cCAhPT0gXCJ0YXhvbm9taXNjaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGllc2UgQmV6aWVodW5nc3NhbW1sdW5nIHdpcmQgc2Nob24gZGFyZ2VzdGVsbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBrYW5uIGFiZXIgc2VpbiwgZGFzcyBiZWltIFN5bm9ueW0gQmV6aWVodW5nZW4gZXhpc3RpZXJlbiwgd2VsY2hlIG5vY2ggbmljaHQgZGFyZ2VzdGVsbHQgd2VyZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJzX2Rlcl9zeW5vbnltZW5fYXJ0ID0gYmV6aWVodW5nc3NhbW1sdW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic19kZXJfb3JpZ2luYWxhcnQgPSBfLmZpbmQoYXJ0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmdzc2FtbWx1bmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXppZWh1bmdzc2FtbWx1bmcuTmFtZSA9PT0gYnNfZGVyX3N5bm9ueW1lbl9hcnQuTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnNfZGVyX3N5bm9ueW1lbl9hcnQuQmV6aWVodW5nZW4gJiYgYnNfZGVyX3N5bm9ueW1lbl9hcnQuQmV6aWVodW5nZW4ubGVuZ3RoID4gMCAmJiBic19kZXJfb3JpZ2luYWxhcnQgJiYgYnNfZGVyX29yaWdpbmFsYXJ0LkJlemllaHVuZ2VuICYmIGJzX2Rlcl9vcmlnaW5hbGFydC5CZXppZWh1bmdlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJlaWRlIEFydGVuIGhhYmVuIGluIGRlcnNlbGJlbiBCZXppZWh1bmdzc2FtbWx1bmcgQmV6aWVodW5nZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gZGVyIE9yaWdpbmFsYXJ0IHZvcmhhbmRlbmUgQmV6aWVodW5nZW4gYXVzIGRlbSBTeW5vbnltIGVudGZlcm5lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic19kZXJfc3lub255bWVuX2FydC5CZXppZWh1bmdlbiA9IF8ucmVqZWN0KGJzX2Rlcl9zeW5vbnltZW5fYXJ0LkJlemllaHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmdfZGVzX3N5bm9ueW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWNoZSBpbiBCZXppZWh1bmdlbiBkZXIgT3JpZ2luYWxhcnQgZWluZSBtaXQgZGVuc2VsYmVuIEJlemllaHVuZ3NwYXJ0bmVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlemllaHVuZ19kZXJfb3JpZ2luYWxhcnQgPSBfLmZpbmQoYnNfZGVyX29yaWdpbmFsYXJ0LkJlemllaHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmdfb3JpZ2FydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIF8uaXNFcXVhbChiZXppZWh1bmdfZGVzX3N5bm9ueW1zLCBiZXppZWh1bmdfb3JpZ2FydCk7ICBXaWVzbyBmdW5rdGlvbmllcnQgZGFzIG5pY2h0P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZXppZWh1bmdfZGVzX3N5bm9ueW1zLkJlemllaHVuZ3NwYXJ0bmVyLmxlbmd0aCA+IDAgJiYgYmV6aWVodW5nX29yaWdhcnQuQmV6aWVodW5nc3BhcnRuZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmV6aWVodW5nX2Rlc19zeW5vbnltcy5CZXppZWh1bmdzcGFydG5lclswXS5HVUlEID09PSBiZXppZWh1bmdfb3JpZ2FydC5CZXppZWh1bmdzcGFydG5lclswXS5HVUlEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWJlemllaHVuZ19kZXJfb3JpZ2luYWxhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnNfZGVyX3N5bm9ueW1lbl9hcnQuQmV6aWVodW5nZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWxscyBub2NoIGRhcnp1c3RlbGxlbmRlIEJlemllaHVuZ2VuIHZlcmJsZWliZW4sIGRpZSBEUyBwdXNoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV6aWVodW5nc3NhbW1sdW5nZW5fdm9uX3N5bm9ueW1lbi5wdXNoKGJzX2Rlcl9zeW5vbnltZW5fYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0XHRcdFx0Ly8gQlMgdm9uIFN5bm9ueW1lbiBkYXJzdGVsbGVuXG5cdFx0XHRcdFx0XHRpZiAoZWlnZW5zY2hhZnRlbnNhbW1sdW5nZW5fdm9uX3N5bm9ueW1lbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdC8vIERhdGVuc2FtbWx1bmdlblZvblN5bm9ueW1lbiBuYWNoIE5hbWUgc29ydGllcmVuXG5cdFx0XHRcdFx0XHRcdGVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuX3Zvbl9zeW5vbnltZW4gPSB3aW5kb3cuYWRiLnNvcnRpZXJlT2JqZWt0YXJyYXlOYWNoTmFtZShlaWdlbnNjaGFmdGVuc2FtbWx1bmdlbl92b25fc3lub255bWVuKTtcblx0XHRcdFx0XHRcdFx0Ly8gVGl0ZWwgaGluenVmw7xnZW5cblx0XHRcdFx0XHRcdFx0aHRtbF9hcnQgKz0gXCI8aDQ+RWlnZW5zY2hhZnRlbiB2b24gU3lub255bWVuOjwvaDQ+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuX3Zvbl9zeW5vbnltZW4sIGZ1bmN0aW9uKGRhdGVzYW1tbHVuZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIVE1MIGbDvHIgRGF0ZW5zYW1tbHVuZyBlcnN0ZWxsZW4gbGFzc2VuIHVuZCBoaW56dWbDvGdlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sX2FydCArPSB3aW5kb3cuYWRiLmVyc3RlbGxlSHRtbEbDvHJEYXRlbnNhbW1sdW5nKFwiRGF0ZW5zYW1tbHVuZ1wiLCBhcnQsIGRhdGVzYW1tbHVuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBiZXogdm9uIFN5bm9ueW1lbiBkYXJzdGVsbGVuXG5cdFx0XHRcdFx0XHRpZiAoYmV6aWVodW5nc3NhbW1sdW5nZW5fdm9uX3N5bm9ueW1lbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEJlemllaHVuZ3NzYW1tbHVuZ2VuVm9uU3lub255bWVuIHNvcnRpZXJlblxuXHRcdFx0XHRcdFx0XHRiZXppZWh1bmdzc2FtbWx1bmdlbl92b25fc3lub255bWVuID0gd2luZG93LmFkYi5zb3J0aWVyZU9iamVrdGFycmF5TmFjaE5hbWUoYmV6aWVodW5nc3NhbW1sdW5nZW5fdm9uX3N5bm9ueW1lbik7XG5cdFx0XHRcdFx0XHRcdC8vIFRpdGVsIGhpbnp1ZsO8Z2VuXG5cdFx0XHRcdFx0XHRcdGh0bWxfYXJ0ICs9IFwiPGg0PkJlemllaHVuZ2VuIHZvbiBTeW5vbnltZW46PC9oND5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYmV6aWVodW5nc3NhbW1sdW5nZW5fdm9uX3N5bm9ueW1lbiwgZnVuY3Rpb24oYmV6aWVodW5nc3NhbW1sdW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhUTUwgZsO8ciBCZXppZWh1bmcgZXJzdGVsbGVuIGxhc3NlbiB1bmQgaGluenVmw7xnZW4uIERyaXR0ZW4gUGFyYW1ldGVyIG1pdGdlYmVuLCBkYW1pdCBkaWUgRFMgaW4gZGVyIFVJIG5pY2h0IGdsZWljaCBoZWlzc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbF9hcnQgKz0gd2luZG93LmFkYi5lcnN0ZWxsZUh0bWxGw7xyQmV6aWVodW5nc3NhbW1sdW5nKGFydCwgYmV6aWVodW5nc3NhbW1sdW5nLCBcIjJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR3aW5kb3cuYWRiLmluaXRpaWVyZV9hcnRfMihodG1sX2FydCwgYXJ0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LmFkYi5pbml0aWllcmVfYXJ0XzIoaHRtbF9hcnQsIGFydCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL21lbGRlKFwiRmVobGVyOiBBcnQga29ubnRlIG5pY2h0IGdlw7ZmZm5ldCB3ZXJkZW5cIik7XG5cdFx0fVxuXHR9KTtcbn07XG5cbndpbmRvdy5hZGIuaW5pdGlpZXJlX2FydF8yID0gZnVuY3Rpb24oaHRtbF9hcnQsIGFydCkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIHBhbmVsIGJlZW5kZW5cblx0JChcIiNhcnRfaW5oYWx0XCIpLmh0bWwoaHRtbF9hcnQpO1xuXHQvLyByaWNodGlnZXMgRm9ybXVsYXIgYW56ZWlnZW5cblx0d2luZG93LmFkYi56ZWlnZUZvcm11bGFyKFwiYXJ0XCIpO1xuXHQvLyBBbm1lbGR1bmcgc29sbCBudXIga3VyemZyaXN0aWcgc2ljaHRiYXIgc2Vpbiwgd2VubiBlaW5lIEFubWVsZHVuZyBlcmZvbGdlbiBzb2xsXG5cdCQoXCIjYXJ0X2FubWVsZGVuXCIpLmhpZGUoKTtcblx0Ly8gV2VubiBudXIgZWluZSBEYXRlbnNhbW1sdW5nIChkaWUgVGF4b25vbWllKSBleGlzdGllcnQsIGRpZXNlIMO2ZmZuZW5cblx0aWYgKGFydC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbi5sZW5ndGggPT09IDAgJiYgYXJ0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLmxlbmd0aCA9PT0gMCkge1xuXHRcdCQoJy5wYW5lbC1jb2xsYXBzZS5UYXhvbm9taWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5jb2xsYXBzZSgnc2hvdycpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIGpldHp0IGRpZSBMaW5rcyBpbSBNZW51IHNldHplblxuXHQvLyB3aXJkIHp3YXIgaW4gemVpZ2VGb3JtdWxhciBzY2hvbiBnZW1hY2h0XG4gICAgLy8gdHJvdHpkZW0gbsO2dGlnLCB3ZWlsIGRvcnQgZXJzdCBtYWwgbGVlcmUgbGlua3MgZ2VzZXR6dCB3ZXJkZW5cbiAgICAvLyBoaWVyIHdpcmQgZGllIHVybCBhbmdlZsO8Z3Rcblx0d2luZG93LmFkYi5zZXR6dGVMaW5rc1p1QmlsZGVyVW5kV2lraXBlZGlhKGFydCk7XG5cdC8vIHVuZCBkaWUgVVJMIGFucGFzc2VuXG5cdGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIFwiaW5kZXguaHRtbD9pZD1cIiArIGFydC5faWQpO1xufTtcblxuLy8gZXJzdGVsbHQgZGllIEhUTUwgZsO8ciBlaW5lIEJlemllaHVuZ1xuLy8gYmVuw7Z0aWd0IHZvbiBkZXIgYXJ0IGJ6dy4gZGVuIGxyIGRpZSBlbnRzcHJlY2hlbmRlIEJlemllaHVuZ3NzYW1tbHVuZ1xuLy8gYWx0TmFtZSBpc3QgZsO8ciBCZXppZWh1bmdzc2FtbWx1bmdlbiB2b24gU3lub255bWVuOiBIaWVyIGthbm4gZGllc2VsYmUgRFMgendlaSBtYWwgdm9ya29tbWVuIHVuZCBzb2xsdGUgbmljaHQgZ2xlaWNoIGhlaXNzZW4sIHNvbnN0IGdlaHQgbnVyIGRpZSBlcnN0ZSBhdWZcbndpbmRvdy5hZGIuZXJzdGVsbGVIdG1sRsO8ckJlemllaHVuZ3NzYW1tbHVuZyA9IGZ1bmN0aW9uKGFydCwgYmV6aWVodW5nc3NhbW1sdW5nLCBhbHRfbmFtZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBodG1sLFxuXHRcdG5hbWUsXG5cdFx0YnNfbmFtZSA9IHdpbmRvdy5hZGIuZXJzZXR6ZVVuZ8O8bHRpZ2VaZWljaGVuSW5JZE5hbWVuKGJlemllaHVuZ3NzYW1tbHVuZy5OYW1lKSArIGFsdF9uYW1lO1xuXG5cdC8vIEFjY29yZGlvbi1HcnVwcGUgdW5kIC1oZWFkaW5nIGFuZsO8Z2VuXG5cdGh0bWwgPSAnPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj48ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWdyYWRpZW50XCI+PGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj4nO1xuXHQvLyBkaWUgaWQgZGVyIEdydXBwZSB3aXJkIG1pdCBkZW0gTmFtZW4gZGVyIERhdGVuc2FtbWx1bmcgZ2ViaWxkZXQuIEhpZXIgbcO8c3NlbiBhYmVyIGxlZXJ6ZWljaGVuIGVudGZlcm50IHdlcmRlblxuXHRodG1sICs9ICc8YSBjbGFzcz1cIkRhdGVuc2FtbWx1bmcgYWNjb3JkaW9uLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXBhcmVudD1cIiNwYW5lbF9hcnRcIiBocmVmPVwiI2NvbGxhcHNlJyArIGJzX25hbWUgKyAnXCI+Jztcblx0Ly8gVGl0ZWwgZsO8ciBkaWUgRGF0ZW5zYW1tbHVuZyBlaW5mw7xnZW5cblx0aHRtbCArPSBiZXppZWh1bmdzc2FtbWx1bmcuTmFtZSArIFwiIChcIiArIGJlemllaHVuZ3NzYW1tbHVuZy5CZXppZWh1bmdlbi5sZW5ndGggKyBcIilcIjtcblx0Ly8gaGVhZGVyIGFic2NobGllc3NlblxuXHRodG1sICs9ICc8L2E+PC9oND48L2Rpdj4nO1xuXHQvLyBib2R5IGJlZ2lubmVuXG5cdGh0bWwgKz0gJzxkaXYgaWQ9XCJjb2xsYXBzZScgKyBic19uYW1lICsgJ1wiIGNsYXNzPVwicGFuZWwtY29sbGFwc2UgY29sbGFwc2VcIj48ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPic7XG5cblx0Ly8gRGF0ZW5zYW1tbHVuZyBiZXNjaHJlaWJlblxuICAgIGh0bWwgKz0gd2luZG93LmFkYi5lcnN0ZWxsZUh0bWxGw7xyRGF0ZW5zYW1tbHVuZ0Jlc2NocmVpYnVuZyhiZXppZWh1bmdzc2FtbWx1bmcpO1xuXG5cdC8vIGRpZSBCZXppZWh1bmdlbiBzb3J0aWVyZW5cblx0YmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuID0gd2luZG93LmFkYi5zb3J0aWVyZUJlemllaHVuZ2VuTmFjaE5hbWUoYmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuKTtcblxuXHQvLyBqZXR6dCBmw7xyIGFsbGUgQmV6aWVodW5nZW4gZGllIEZlbGRlciBoaW56dWbDvGdlblxuICAgIF8uZWFjaChiZXppZWh1bmdzc2FtbWx1bmcuQmV6aWVodW5nZW4sIGZ1bmN0aW9uKGJlemllaHVuZywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGJlemllaHVuZy5CZXppZWh1bmdzcGFydG5lciAmJiBiZXppZWh1bmcuQmV6aWVodW5nc3BhcnRuZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgXy5lYWNoKGJlemllaHVuZy5CZXppZWh1bmdzcGFydG5lciwgZnVuY3Rpb24oYmV6aWVodW5nc3BhcnRuZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmV6aWVodW5nc3BhcnRuZXIuVGF4b25vbWllKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBiZXppZWh1bmdzcGFydG5lci5HcnVwcGUgKyBcIjogXCIgKyBiZXppZWh1bmdzcGFydG5lci5UYXhvbm9taWUgKyBcIiA+IFwiICsgYmV6aWVodW5nc3BhcnRuZXIuTmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gYmV6aWVodW5nc3BhcnRuZXIuR3J1cHBlICsgXCI6IFwiICsgYmV6aWVodW5nc3BhcnRuZXIuTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUGFydG5lciBkYXJzdGVsbGVuXG4gICAgICAgICAgICAgICAgaWYgKGJlemllaHVuZ3NwYXJ0bmVyLlJvbGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZlbGQgc29sbCBtaXQgZGVyIFJvbGxlIGJlc2NocmlmdGV0IHdlcmRlblxuICAgICAgICAgICAgICAgICAgICBodG1sICs9IHdpbmRvdy5hZGIuZ2VuZXJpZXJlSHRtbEbDvHJPYmpla3RsaW5rKGJlemllaHVuZ3NwYXJ0bmVyLlJvbGxlLCBuYW1lLCAkKGxvY2F0aW9uKS5hdHRyKFwicHJvdG9jb2xcIikgKyAnLy8nICsgJChsb2NhdGlvbikuYXR0cihcImhvc3RcIikgKyAkKGxvY2F0aW9uKS5hdHRyKFwicGF0aG5hbWVcIikgKyAnP2lkPScgKyBiZXppZWh1bmdzcGFydG5lci5HVUlEKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBodG1sICs9IHdpbmRvdy5hZGIuZ2VuZXJpZXJlSHRtbEbDvHJPYmpla3RsaW5rKFwiQmV6aWVodW5nc3BhcnRuZXJcIiwgbmFtZSwgJChsb2NhdGlvbikuYXR0cihcInByb3RvY29sXCIpICsgJy8vJyArICQobG9jYXRpb24pLmF0dHIoXCJob3N0XCIpICsgJChsb2NhdGlvbikuYXR0cihcInBhdGhuYW1lXCIpICsgJz9pZD0nICsgYmV6aWVodW5nc3BhcnRuZXIuR1VJRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGllIEZlbGRlciBhbnplaWdlblxuICAgICAgICBfLmVhY2goYmV6aWVodW5nLCBmdW5jdGlvbihmZWxkd2VydCwgZmVsZG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChmZWxkbmFtZSAhPT0gXCJCZXppZWh1bmdzcGFydG5lclwiKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSB3aW5kb3cuYWRiLmVyc3RlbGxlSHRtbEbDvHJGZWxkKGZlbGRuYW1lLCBmZWxkd2VydCwgXCJCZXppZWh1bmdzc2FtbWx1bmdcIiwgYmV6aWVodW5nc3NhbW1sdW5nLk5hbWUucmVwbGFjZSgvXCIvZywgXCInXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFtIFNjaGx1c3MgZWluZSBMaW5pZSwgbmljaHQgYWJlciBiZWkgZGVyIGxldHp0ZW4gQmV6aWVodW5nXG4gICAgICAgIGlmIChpbmRleCA8IChiZXppZWh1bmdzc2FtbWx1bmcuQmV6aWVodW5nZW4ubGVuZ3RoLTEpKSB7XG4gICAgICAgICAgICBodG1sICs9IFwiPGhyPlwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cdC8vIGJvZHkgdW5kIEFjY29yZGlvbi1HcnVwcGUgYWJzY2hsaWVzc2VuXG5cdGh0bWwgKz0gJzwvZGl2PjwvZGl2PjwvZGl2Pic7XG5cdHJldHVybiBodG1sO1xufTtcblxuLy8gZXJzdGVsbHQgZGllIEhUTUwgZsO8ciBlaW5lIERhdGVuc2FtbWx1bmdcbi8vIGJlbsO2dGlndCB2b24gZGVyIGFydCBiencuIGRlbiBsciBkaWUgZW50c3ByZWNoZW5kZSBEYXRlbnNhbW1sdW5nXG53aW5kb3cuYWRiLmVyc3RlbGxlSHRtbEbDvHJEYXRlbnNhbW1sdW5nID0gZnVuY3Rpb24oZHNfdHlwLCBhcnQsIGRhdGVuc2FtbWx1bmcpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaHRtbF9kYXRlbnNhbW1sdW5nLFxuXHRcdGhpZXJhcmNoaWVfc3RyaW5nLFxuXHRcdGFycmF5X3N0cmluZyxcblx0XHRkc19uYW1lO1xuXHRkc19uYW1lID0gd2luZG93LmFkYi5lcnNldHplVW5nw7xsdGlnZVplaWNoZW5JbklkTmFtZW4oZGF0ZW5zYW1tbHVuZy5OYW1lKTtcblx0Ly8gQWNjb3JkaW9uLUdydXBwZSB1bmQgLWhlYWRpbmcgYW5mw7xnZW5cblx0aHRtbF9kYXRlbnNhbW1sdW5nID0gJzxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+PGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1ncmFkaWVudFwiPic7XG5cdC8vIGJlaSBMUjogU3ltYm9sbGVpc3RlIGVpbmbDvGdlblxuXHRpZiAoYXJ0LkdydXBwZSA9PT0gXCJMZWJlbnNyw6R1bWVcIiAmJiBkc190eXAgPT09IFwiVGF4b25vbWllXCIpIHtcblx0XHRodG1sX2RhdGVuc2FtbWx1bmcgKz0gJzxkaXYgY2xhc3M9XCJidG4tdG9vbGJhciBiZWFyYl90b29sYmFyXCI+PGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc21cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBscl9iZWFyYiBscl9iZWFyYl9iZWFyYlwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiYmVhcmJlaXRlblwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcIj48L2k+PC9idXR0b24+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgbHJfYmVhcmIgbHJfYmVhcmJfc2NodWV0emVuIGRpc2FibGVkXCIgdGl0bGU9XCJzY2jDvHR6ZW5cIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tYmFuLWNpcmNsZVwiPjwvaT48L2J1dHRvbj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBscl9iZWFyYiBscl9iZWFyYl9uZXUgZGlzYWJsZWRcIiB0aXRsZT1cIm5ldWVyIExlYmVuc3JhdW1cIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvaT48L2J1dHRvbj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcnVlY2tmcmFnZV9scl9sb2VzY2hlblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGxyX2JlYXJiIGxyX2JlYXJiX2xvZXNjaGVuIGRpc2FibGVkXCIgdGl0bGU9XCJMZWJlbnNyYXVtIGzDtnNjaGVuXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXCI+PC9pPjwvYnV0dG9uPjwvZGl2PjwvZGl2Pic7XG5cdH1cblx0Ly8gZGllIGlkIGRlciBHcnVwcGUgd2lyZCBtaXQgZGVtIE5hbWVuIGRlciBEYXRlbnNhbW1sdW5nIGdlYmlsZGV0LiBIaWVyIG3DvHNzZW4gYWJlciBsZWVyemVpY2hlbiBlbnRmZXJudCB3ZXJkZW5cblx0aHRtbF9kYXRlbnNhbW1sdW5nICs9ICc8aDQgY2xhc3M9XCJwYW5lbC10aXRsZVwiPjxhIGNsYXNzPVwiRGF0ZW5zYW1tbHVuZyBhY2NvcmRpb24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtcGFyZW50PVwiI3BhbmVsX2FydFwiIGhyZWY9XCIjY29sbGFwc2UnICsgZHNfbmFtZSArICdcIj4nO1xuXHQvLyBUaXRlbCBmw7xyIGRpZSBEYXRlbnNhbW1sdW5nIGVpbmbDvGdlblxuXHRodG1sX2RhdGVuc2FtbWx1bmcgKz0gZGF0ZW5zYW1tbHVuZy5OYW1lO1xuXHQvLyBoZWFkZXIgYWJzY2hsaWVzc2VuXG5cdGh0bWxfZGF0ZW5zYW1tbHVuZyArPSAnPC9hPjwvaDQ+PC9kaXY+Jztcblx0Ly8gYm9keSBiZWdpbm5lblxuXHRodG1sX2RhdGVuc2FtbWx1bmcgKz0gJzxkaXYgaWQ9XCJjb2xsYXBzZScgKyBkc19uYW1lICsgJ1wiIGNsYXNzPVwicGFuZWwtY29sbGFwc2UgY29sbGFwc2UgJyArIGFydC5HcnVwcGUgKyAnICcgKyBkc190eXAgKyAnXCI+PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj4nO1xuXHQvLyBEYXRlbnNhbW1sdW5nIGJlc2NocmVpYmVuXG4gICAgaHRtbF9kYXRlbnNhbW1sdW5nICs9IHdpbmRvdy5hZGIuZXJzdGVsbGVIdG1sRsO8ckRhdGVuc2FtbWx1bmdCZXNjaHJlaWJ1bmcoZGF0ZW5zYW1tbHVuZyk7XG5cdC8vIEZlbGRlciBhbnplaWdlblxuXHQvLyB6dWVyc3QgZGllIEdVSUQsIGFiZXIgbnVyIGJlaSBkZXIgVGF4b25vbWllXG5cdGlmIChkc190eXAgPT09IFwiVGF4b25vbWllXCIpIHtcblx0XHRodG1sX2RhdGVuc2FtbWx1bmcgKz0gd2luZG93LmFkYi5lcnN0ZWxsZUh0bWxGw7xyRmVsZChcIkdVSURcIiwgYXJ0Ll9pZCwgZHNfdHlwLCBcIlRheG9ub21pZVwiKTtcblx0fVxuICAgIF8uZWFjaChkYXRlbnNhbW1sdW5nLkVpZ2Vuc2NoYWZ0ZW4sIGZ1bmN0aW9uKGZlbGR3ZXJ0LCBmZWxkbmFtZSkge1xuICAgICAgICBpZiAoZmVsZG5hbWUgPT09IFwiR1VJRFwiKSB7XG4gICAgICAgICAgICAvLyBkaWVzZXMgRmVsZCBuaWNodCBhbnplaWdlbi4gRXMgd2lyZCBfaWQgdmVyd2VuZGV0XG4gICAgICAgICAgICAvLyBkaWVzZXMgRmVsZCB3aXJkIGvDvG5mdGlnIG5pY2h0IG1laHIgaW1wb3J0aWVydFxuICAgICAgICB9IGVsc2UgaWYgKCgoZmVsZG5hbWUgPT09IFwiT2ZmaXppZWxsZSBBcnRcIiB8fCBmZWxkbmFtZSA9PT0gXCJFaW5nZXNjaGxvc3NlbiBpblwiIHx8IGZlbGRuYW1lID09PSBcIlN5bm9ueW0gdm9uXCIpICYmIGFydC5HcnVwcGUgPT09IFwiRmxvcmFcIikgfHwgKGZlbGRuYW1lID09PSBcIkFremVwdGllcnRlIFJlZmVyZW56XCIgJiYgYXJ0LkdydXBwZSA9PT0gXCJNb29zZVwiKSkge1xuICAgICAgICAgICAgLy8gZGFubiBkZW4gTGluayBhdWZiYXVlbiBsYXNzZW5cbiAgICAgICAgICAgIGh0bWxfZGF0ZW5zYW1tbHVuZyArPSB3aW5kb3cuYWRiLmdlbmVyaWVyZUh0bWxGw7xyTGlua1p1R2xlaWNoZXJHcnVwcGUoZmVsZG5hbWUsIGFydC5faWQsIGZlbGR3ZXJ0Lk5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKChmZWxkbmFtZSA9PT0gXCJHw7xsdGlnZSBOYW1lblwiIHx8IGZlbGRuYW1lID09PSBcIkVpbmdlc2NobG9zc2VuZSBBcnRlblwiIHx8IGZlbGRuYW1lID09PSBcIlN5bm9ueW1lXCIpICYmIGFydC5HcnVwcGUgPT09IFwiRmxvcmFcIikge1xuICAgICAgICAgICAgLy8gZGFzIGlzdCBlaW4gQXJyYXkgdm9uIE9iamVrdGVuXG4gICAgICAgICAgICBodG1sX2RhdGVuc2FtbWx1bmcgKz0gd2luZG93LmFkYi5nZW5lcmllcmVIdG1sRsO8ckxpbmtzWnVHbGVpY2hlckdydXBwZShmZWxkbmFtZSwgZmVsZHdlcnQpO1xuICAgICAgICB9IGVsc2UgaWYgKChmZWxkbmFtZSA9PT0gXCJBcnRuYW1lXCIgJiYgYXJ0LkdydXBwZSA9PT0gXCJGbG9yYVwiKSB8fCAoZmVsZG5hbWUgPT09IFwiUGFyZW50XCIgJiYgYXJ0LkdydXBwZSA9PT0gXCJMZWJlbnNyw6R1bWVcIikpIHtcbiAgICAgICAgICAgIC8vIGRpZXNlcyBGZWxkIG5pY2h0IGFuemVpZ2VuXG4gICAgICAgIH0gZWxzZSBpZiAoZmVsZG5hbWUgPT09IFwiSGllcmFyY2hpZVwiICYmIGFydC5HcnVwcGUgPT09IFwiTGViZW5zcsOkdW1lXCIgJiYgXy5pc0FycmF5KGZlbGR3ZXJ0KSkge1xuICAgICAgICAgICAgLy8gTmFtZW4ga29tbWFnZXRyZW5udCBhbnplaWdlblxuICAgICAgICAgICAgaGllcmFyY2hpZV9zdHJpbmcgPSB3aW5kb3cuYWRiLmVyc3RlbGxlSGllcmFyY2hpZUbDvHJGZWxkQXVzSGllcmFyY2hpZW9iamVrdGVBcnJheShmZWxkd2VydCk7XG4gICAgICAgICAgICBodG1sX2RhdGVuc2FtbWx1bmcgKz0gd2luZG93LmFkYi5nZW5lcmllcmVIdG1sRsO8clRleHRhcmVhKGZlbGRuYW1lLCBoaWVyYXJjaGllX3N0cmluZywgZHNfdHlwLCBkYXRlbnNhbW1sdW5nLk5hbWUucmVwbGFjZSgvXCIvZywgXCInXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmlzQXJyYXkoZmVsZHdlcnQpKSB7XG4gICAgICAgICAgICAvLyBkaWVzZXMgRmVsZCBlbnRow6RsdCBlaW5lbiBBcnJheSB2b24gV2VydGVuXG4gICAgICAgICAgICBhcnJheV9zdHJpbmcgPSBmZWxkd2VydC50b1N0cmluZygpO1xuICAgICAgICAgICAgaHRtbF9kYXRlbnNhbW1sdW5nICs9IHdpbmRvdy5hZGIuZ2VuZXJpZXJlSHRtbEbDvHJUZXh0YXJlYShmZWxkbmFtZSwgYXJyYXlfc3RyaW5nLCBkc190eXAsIGRhdGVuc2FtbWx1bmcuTmFtZS5yZXBsYWNlKC9cIi9nLCBcIidcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbF9kYXRlbnNhbW1sdW5nICs9IHdpbmRvdy5hZGIuZXJzdGVsbGVIdG1sRsO8ckZlbGQoZmVsZG5hbWUsIGZlbGR3ZXJ0LCBkc190eXAsIGRhdGVuc2FtbWx1bmcuTmFtZS5yZXBsYWNlKC9cIi9nLCBcIidcIikpO1xuICAgICAgICB9XG4gICAgfSk7XG5cdC8vIGJvZHkgdW5kIEFjY29yZGlvbi1HcnVwcGUgYWJzY2hsaWVzc2VuXG5cdGh0bWxfZGF0ZW5zYW1tbHVuZyArPSAnPC9kaXY+PC9kaXY+PC9kaXY+Jztcblx0cmV0dXJuIGh0bWxfZGF0ZW5zYW1tbHVuZztcbn07XG5cbndpbmRvdy5hZGIuZXJzdGVsbGVIdG1sRsO8ckRhdGVuc2FtbWx1bmdCZXNjaHJlaWJ1bmcgPSBmdW5jdGlvbihlc19vZGVyX2JzKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiRGF0ZW5zYW1tbHVuZyBCZXNjaHJlaWJ1bmdEYXRlbnNhbW1sdW5nXCI+JztcbiAgICBpZiAoZXNfb2Rlcl9icy5CZXNjaHJlaWJ1bmcpIHtcbiAgICAgICAgaHRtbCArPSBlc19vZGVyX2JzLkJlc2NocmVpYnVuZztcbiAgICB9XG4gICAgLy8gd2VubiB3ZWl0ZXJlIEluZm9zIGtvbW1lbjogZGllc2Uga8O2bm5lbiB3YWhsd2Vpc2UgZWluZ2VibGVuZGV0IHdlcmRlblxuICAgIGlmIChlc19vZGVyX2JzLkRhdGVuc3RhbmQgfHwgZXNfb2Rlcl9icy5MaW5rIHx8IChlc19vZGVyX2JzLnp1c2FtbWVuZmFzc2VuZCAmJiBlc19vZGVyX2JzLlVyc3BydW5nc2RhdGVuc2FtbWx1bmcpKSB7XG4gICAgICAgIC8vIHdlbm4ga2VpbmUgQmVzY2hyZWlidW5nIGV4aXN0aWVydCwgYW5kZXJlIE9wdGlvbiBlaW5ibGVuZGVuXG4gICAgICAgIGlmIChlc19vZGVyX2JzLkJlc2NocmVpYnVuZykge1xuICAgICAgICAgICAgaHRtbCArPSAnIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzaG93X25leHRfaGlkZGVuXCI+Li4ubWVocjwvYT4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd2VubiBrZWluZSBCZXNjaHJlaWJ1bmcgZXhpc3RpZXJ0LCBhbmRlcmUgT3B0aW9uIGVpbmJsZW5kZW5cbiAgICAgICAgICAgIGh0bWwgKz0gJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzaG93X25leHRfaGlkZGVuXCI+QmVzY2hyZWlidW5nIGRlciBEYXRlbnNhbW1sdW5nIGFuemVpZ2VuPC9hPic7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImFkYi1oaWRkZW5cIj4nO1xuICAgICAgICBpZiAoZXNfb2Rlcl9icy5EYXRlbnN0YW5kKSB7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiZHNfYmVzY2hyZWlidW5nX3plaWxlXCI+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXY+U3RhbmQ6IDwvZGl2Pic7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2PicgKyBlc19vZGVyX2JzLkRhdGVuc3RhbmQgKyAnPC9kaXY+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVzX29kZXJfYnMuTGluaykge1xuICAgICAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImRzX2Jlc2NocmVpYnVuZ196ZWlsZVwiPic7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2Pkxpbms6IDwvZGl2Pic7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2PicgKyBBdXRvbGlua2VyLmxpbmsoZXNfb2Rlcl9icy5MaW5rKSArICc8L2Rpdj4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXNfb2Rlcl9ic1tcImltcG9ydGllcnQgdm9uXCJdKSB7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiZHNfYmVzY2hyZWlidW5nX3plaWxlXCI+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXY+SW1wb3J0aWVydCB2b246IDwvZGl2Pic7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2PicgKyBBdXRvbGlua2VyLmxpbmsoZXNfb2Rlcl9ic1tcImltcG9ydGllcnQgdm9uXCJdKSArICc8L2Rpdj4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXNfb2Rlcl9icy56dXNhbW1lbmZhc3NlbmQgJiYgZXNfb2Rlcl9icy5VcnNwcnVuZ3NkYXRlbnNhbW1sdW5nKSB7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiZHNfYmVzY2hyZWlidW5nX3plaWxlXCI+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXY+WnVzLi1mYXNzZW5kOjwvZGl2Pic7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2PkRpZXNlIERhdGVuc2FtbWx1bmcgZmFzc3QgZGllIERhdGVuIG1laHJlcmVyIEVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuIGluIGVpbmVyIHp1c2FtbWVuLjxicj5EaWUgYW5nZXplaWd0ZW4gSW5mb3JtYXRpb25lbiBzdGFtbWVuIGF1cyBkZXIgRWlnZW5zY2hhZnRlbnNhbW1sdW5nIFwiJyArIGVzX29kZXJfYnMuVXJzcHJ1bmdzZGF0ZW5zYW1tbHVuZyArICdcIjwvZGl2Pic7XG4gICAgICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xuICAgICAgICB9IGVsc2UgaWYgKGVzX29kZXJfYnMuenVzYW1tZW5mYXNzZW5kICYmICFlc19vZGVyX2JzLlVyc3BydW5nc2RhdGVuc2FtbWx1bmcpIHtcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJkc19iZXNjaHJlaWJ1bmdfemVpbGVcIj4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPGRpdj5adXMuLWZhc3NlbmQ6PC9kaXY+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXY+RGllc2UgRGF0ZW5zYW1tbHVuZyBmYXNzdCBkaWUgRGF0ZW4gbWVocmVyZXIgRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gaW4gZWluZXIgenVzYW1tZW4uPGJyPkJlaSBkZW4gYW5nZXplaWd0ZW4gSW5mb3JtYXRpb25lbiBpc3QgZGllIFVyc3BydW5ncy1FaWdlbnNjaGFmdGVuc2FtbWx1bmcgbGVpZGVyIG5pY2h0IGJlc2NocmllYmVuPC9kaXY+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgLy8genVzw6R0emxpY2hlIEluZm9zIGFic2NobGllc3NlblxuICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xuICAgIH1cbiAgICAvLyBCZXNjaHJlaWJ1bmcgZGVyIERhdGVuc2FtbWx1bmcgYWJzY2hsaWVzc2VuXG4gICAgaHRtbCArPSAnPC9kaXY+JztcbiAgICByZXR1cm4gaHRtbDtcbn07XG5cbndpbmRvdy5hZGIuZXJzdGVsbGVIaWVyYXJjaGllRsO8ckZlbGRBdXNIaWVyYXJjaGllb2JqZWt0ZUFycmF5ID0gZnVuY3Rpb24oaGllcmFyY2hpZV9hcnJheSkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICghXy5pc0FycmF5KGhpZXJhcmNoaWVfYXJyYXkpKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblx0Ly8gTmFtZW4ga29tbWFnZXRyZW5udCBhbnplaWdlblxuXHR2YXIgaGllcmFyY2hpZV9zdHJpbmcgPSBcIlwiO1xuICAgIF8uZWFjaChoaWVyYXJjaGllX2FycmF5LCBmdW5jdGlvbihoaWVyYXJjaGllX29iamVrdCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgaGllcmFyY2hpZV9zdHJpbmcgKz0gXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICBoaWVyYXJjaGllX3N0cmluZyArPSBoaWVyYXJjaGllX29iamVrdC5OYW1lO1xuICAgIH0pO1xuXHRyZXR1cm4gaGllcmFyY2hpZV9zdHJpbmc7XG59O1xuXG4vLyDDvGJlcm5pbW10IEZlbGRuYW1lIHVuZCBGZWxkd2VydFxuLy8gZ2VuZXJpZXJ0IGRhcmF1cyB1bmQgcmV0b3VybmllcnQgaHRtbCBmw7xyIGRpZSBEYXJzdGVsbHVuZyBpbSBwYXNzZW5kZW4gRmVsZFxud2luZG93LmFkYi5lcnN0ZWxsZUh0bWxGw7xyRmVsZCA9IGZ1bmN0aW9uKGZlbGRuYW1lLCBmZWxkd2VydCwgZHNfdHlwLCBkc19uYW1lKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGh0bWxfZGF0ZW5zYW1tbHVuZyA9IFwiXCI7XG5cdGlmICgodHlwZW9mIGZlbGR3ZXJ0ID09PSBcInN0cmluZ1wiICYmIGZlbGR3ZXJ0LnNsaWNlKDAsIDcpID09PSBcImh0dHA6Ly9cIikgfHwgKHR5cGVvZiBmZWxkd2VydCA9PT0gXCJzdHJpbmdcIiAmJiBmZWxkd2VydC5zbGljZSgwLCA4KSA9PT0gXCJodHRwczovL1wiKSB8fCAodHlwZW9mIGZlbGR3ZXJ0ID09PSBcInN0cmluZ1wiICYmIGZlbGR3ZXJ0LnNsaWNlKDAsIDIpID09PSBcIi8vXCIpKSB7XG5cdFx0Ly8gd3d3LUxpbmtzIGFscyBMaW5rIGRhcnN0ZWxsZW5cblx0XHRodG1sX2RhdGVuc2FtbWx1bmcgKz0gd2luZG93LmFkYi5nZW5lcmllcmVIdG1sRsO8cld3d0xpbmsoZmVsZG5hbWUsIGZlbGR3ZXJ0LCBkc190eXAsIGRzX25hbWUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBmZWxkd2VydCA9PT0gXCJzdHJpbmdcIiAmJiBmZWxkd2VydC5sZW5ndGggPCA0NSkge1xuXHRcdGh0bWxfZGF0ZW5zYW1tbHVuZyArPSB3aW5kb3cuYWRiLmdlbmVyaWVyZUh0bWxGw7xyVGV4dGlucHV0KGZlbGRuYW1lLCBmZWxkd2VydCwgXCJ0ZXh0XCIsIGRzX3R5cCwgZHNfbmFtZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGZlbGR3ZXJ0ID09PSBcInN0cmluZ1wiICYmIGZlbGR3ZXJ0Lmxlbmd0aCA+PSA0NSkge1xuXHRcdGh0bWxfZGF0ZW5zYW1tbHVuZyArPSB3aW5kb3cuYWRiLmdlbmVyaWVyZUh0bWxGw7xyVGV4dGFyZWEoZmVsZG5hbWUsIGZlbGR3ZXJ0LCBkc190eXApO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBmZWxkd2VydCA9PT0gXCJudW1iZXJcIikge1xuXHRcdGh0bWxfZGF0ZW5zYW1tbHVuZyArPSB3aW5kb3cuYWRiLmdlbmVyaWVyZUh0bWxGw7xyVGV4dGlucHV0KGZlbGRuYW1lLCBmZWxkd2VydCwgXCJudW1iZXJcIiwgZHNfdHlwLCBkc19uYW1lKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZmVsZHdlcnQgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0aHRtbF9kYXRlbnNhbW1sdW5nICs9IHdpbmRvdy5hZGIuZ2VuZXJpZXJlSHRtbEbDvHJCb29sZWFuKGZlbGRuYW1lLCBmZWxkd2VydCwgZHNfdHlwLCBkc19uYW1lKTtcblx0fSBlbHNlIHtcblx0XHRodG1sX2RhdGVuc2FtbWx1bmcgKz0gd2luZG93LmFkYi5nZW5lcmllcmVIdG1sRsO8clRleHRpbnB1dChmZWxkbmFtZSwgZmVsZHdlcnQsIFwidGV4dFwiLCBkc190eXAsIGRzX25hbWUpO1xuXHR9XG5cdHJldHVybiBodG1sX2RhdGVuc2FtbWx1bmc7XG59O1xuXG4vLyBtYW5hZ3QgZGllIExpbmtzIHp1IEdvb2dsZSBCaWxkZXIgdW5kIFdpa2lwZWRpYVxuLy8gZXJ3YXJ0ZXQgZGFzIE9iamVrdCBtaXQgZGVyIEFydFxud2luZG93LmFkYi5zZXR6dGVMaW5rc1p1QmlsZGVyVW5kV2lraXBlZGlhID0gZnVuY3Rpb24oYXJ0KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gamV0enQgZGllIExpbmtzIGltIE1lbnUgc2V0emVuXG5cdGlmIChhcnQpIHtcblx0XHR2YXIgZ29vZ2xlX2JpbGRlcl9saW5rID0gXCJcIixcbiAgICAgICAgICAgIHdpa2lwZWRpYV9saW5rID0gXCJcIjtcblx0XHRzd2l0Y2ggKGFydC5HcnVwcGUpIHtcblx0XHRjYXNlIFwiRmxvcmFcIjpcblx0XHRcdGdvb2dsZV9iaWxkZXJfbGluayA9ICdodHRwczovL3d3dy5nb29nbGUuY2gvc2VhcmNoP251bT0xMCZobD1kZSZzaXRlPWltZ2hwJnRibT1pc2NoJnNvdXJjZT1ocCZiaWg9ODI0JnE9XCInICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkFydG5hbWUgKyAnXCInO1xuXHRcdFx0aWYgKGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlblsnTmFtZSBEZXV0c2NoJ10pIHtcblx0XHRcdFx0Z29vZ2xlX2JpbGRlcl9saW5rICs9ICcrT1IrXCInICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuWydOYW1lIERldXRzY2gnXSArICdcIic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuWydOYW1lIEZyYW56w7ZzaXNjaCddKSB7XG5cdFx0XHRcdGdvb2dsZV9iaWxkZXJfbGluayArPSAnK09SK1wiJyArIGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlblsnTmFtZSBGcmFuesO2c2lzY2gnXSArICdcIic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuWydOYW1lIEl0YWxpZW5pc2NoJ10pIHtcblx0XHRcdFx0Z29vZ2xlX2JpbGRlcl9saW5rICs9ICcrT1IrXCInICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuWydOYW1lIEl0YWxpZW5pc2NoJ10gKyAnXCInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlblsnTmFtZSBEZXV0c2NoJ10pIHtcblx0XHRcdFx0d2lraXBlZGlhX2xpbmsgPSAnLy9kZS53aWtpcGVkaWEub3JnL3dpa2kvJyArIGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlblsnTmFtZSBEZXV0c2NoJ107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aWtpcGVkaWFfbGluayA9ICcvL2RlLndpa2lwZWRpYS5vcmcvd2lraS8nICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkFydG5hbWU7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiRmF1bmFcIjpcblx0XHRcdGdvb2dsZV9iaWxkZXJfbGluayA9ICdodHRwczovL3d3dy5nb29nbGUuY2gvc2VhcmNoP251bT0xMCZobD1kZSZzaXRlPWltZ2hwJnRibT1pc2NoJnNvdXJjZT1ocCZiaWg9ODI0JnE9XCInICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkFydG5hbWUgKyAnXCInO1xuXHRcdFx0aWYgKGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbltcIk5hbWUgRGV1dHNjaFwiXSkge1xuXHRcdFx0XHRnb29nbGVfYmlsZGVyX2xpbmsgKz0gJytPUitcIicgKyBhcnQuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW5bJ05hbWUgRGV1dHNjaCddICsgJ1wiJztcblx0XHRcdH1cblx0XHRcdGlmIChhcnQuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW5bJ05hbWUgRnJhbnrDtnNpc2NoJ10pIHtcblx0XHRcdFx0Z29vZ2xlX2JpbGRlcl9saW5rICs9ICcrT1IrXCInICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuWydOYW1lIEZyYW56w7ZzaXNjaCddICsgJ1wiJztcblx0XHRcdH1cblx0XHRcdGlmIChhcnQuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW5bJ05hbWUgSXRhbGllbmlzY2gnXSkge1xuXHRcdFx0XHRnb29nbGVfYmlsZGVyX2xpbmsgKz0gJytPUlwiJyArIGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlblsnTmFtZSBJdGFsaWVuaXNjaCddICsgJ1wiJztcblx0XHRcdH1cblx0XHRcdHdpa2lwZWRpYV9saW5rID0gJy8vZGUud2lraXBlZGlhLm9yZy93aWtpLycgKyBhcnQuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uR2F0dHVuZyArICdfJyArIGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5BcnQ7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdNb29zZSc6XG5cdFx0XHRnb29nbGVfYmlsZGVyX2xpbmsgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNoL3NlYXJjaD9udW09MTAmaGw9ZGUmc2l0ZT1pbWdocCZ0Ym09aXNjaCZzb3VyY2U9aHAmYmloPTgyNCZxPVwiJyArIGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5HYXR0dW5nICsgJyAnICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkFydCArICdcIic7XG5cdFx0XHR3aWtpcGVkaWFfbGluayA9ICcvL2RlLndpa2lwZWRpYS5vcmcvd2lraS8nICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkdhdHR1bmcgKyAnXycgKyBhcnQuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uQXJ0O1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnTWFjcm9teWNldGVzJzpcblx0XHRcdGdvb2dsZV9iaWxkZXJfbGluayA9ICdodHRwczovL3d3dy5nb29nbGUuY2gvc2VhcmNoP251bT0xMCZobD1kZSZzaXRlPWltZ2hwJnRibT1pc2NoJnNvdXJjZT1ocCZiaWg9ODI0JnE9XCInICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLk5hbWUgKyAnXCInO1xuXHRcdFx0aWYgKGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlblsnTmFtZSBEZXV0c2NoJ10pIHtcblx0XHRcdFx0Z29vZ2xlX2JpbGRlcl9saW5rICs9ICcrT1IrXCInICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuWydOYW1lIERldXRzY2gnXSArICdcIic7XG5cdFx0XHR9XG5cdFx0XHR3aWtpcGVkaWFfbGluayA9ICcvL2RlLndpa2lwZWRpYS5vcmcvd2lraS8nICsgYXJ0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLk5hbWU7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdMZWJlbnNyw6R1bWUnOlxuXHRcdFx0Z29vZ2xlX2JpbGRlcl9saW5rID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jaC9zZWFyY2g/bnVtPTEwJmhsPWRlJnNpdGU9aW1naHAmdGJtPWlzY2gmc291cmNlPWhwJmJpaD04MjQmcT1cIicgKyBhcnQuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uRWluaGVpdDtcblx0XHRcdHdpa2lwZWRpYV9saW5rID0gJy8vZGUud2lraXBlZGlhLm9yZy93aWtpLycgKyBhcnQuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uRWluaGVpdDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvLyBtaXQgcmVwbGFjZSBIb2Noa29tbWF0YSAnIGVyc2V0emVuLCBzb25zdCBrbGFwcHQgdXJsIG5pY2h0XG5cdFx0JChcIiNHb29nbGVCaWxkZXJMaW5rXCIpLmF0dHIoXCJocmVmXCIsIGVuY29kZVVSSShnb29nbGVfYmlsZGVyX2xpbmspLnJlcGxhY2UoXCImIzM5O1wiLCBcIiUyMFwiKSk7XG5cdFx0JChcIiNHb29nbGVCaWxkZXJMaW5rX2xpXCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG5cdFx0JChcIiNXaWtpcGVkaWFMaW5rXCIpLmF0dHIoXCJocmVmXCIsIHdpa2lwZWRpYV9saW5rKTtcblx0XHQkKFwiI1dpa2lwZWRpYUxpbmtfbGlcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblx0fSBlbHNlIHtcblx0XHQkKFwiI1dpa2lwZWRpYUxpbmtcIikuYXR0cihcImhyZWZcIiwgXCIjXCIpO1xuXHRcdCQoXCIjV2lraXBlZGlhTGlua19saVwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuXHRcdCQoXCIjR29vZ2xlQmlsZGVyTGlua1wiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIik7XG5cdFx0JChcIiNHb29nbGVCaWxkZXJMaW5rX2xpXCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG5cdH1cbn07XG5cbi8vIGdlbmVyaWVydCBkZW4gaHRtbC1JbmhhbHQgZsO8ciBlaW56ZWxuZSBMaW5rcyBpbiBGbG9yYVxud2luZG93LmFkYi5nZW5lcmllcmVIdG1sRsO8ckxpbmtadUdsZWljaGVyR3J1cHBlID0gZnVuY3Rpb24oZmVsZF9uYW1lLCBpZCwgYXJ0bmFtZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBodG1sX2NvbnRhaW5lcjtcblx0aHRtbF9jb250YWluZXIgPSAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj48bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+Jztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZF9uYW1lO1xuXHRodG1sX2NvbnRhaW5lciArPSAnOjwvbGFiZWw+PHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtc3RhdGljIGNvbnRyb2xzIGZlbGR0ZXh0XCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIkxpbmtadUFydEdsZWljaGVyR3J1cHBlXCIgQXJ0SWQ9XCInO1xuXHRodG1sX2NvbnRhaW5lciArPSBpZDtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiPic7XG5cdGh0bWxfY29udGFpbmVyICs9IGFydG5hbWU7XG5cdGh0bWxfY29udGFpbmVyICs9ICc8L2E+PC9wPjwvZGl2Pic7XG5cdHJldHVybiBodG1sX2NvbnRhaW5lcjtcbn07XG5cbi8vIGdlbmVyaWVydCBkZW4gaHRtbC1JbmhhbHQgZsO8ciBTZXJpZW4gdm9uIExpbmtzIGluIEZsb3JhXG53aW5kb3cuYWRiLmdlbmVyaWVyZUh0bWxGw7xyTGlua3NadUdsZWljaGVyR3J1cHBlID0gZnVuY3Rpb24oZmVsZG5hbWUsIG9iamVrdF9saXN0ZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBodG1sX2NvbnRhaW5lcjtcblx0aHRtbF9jb250YWluZXIgPSAnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj48bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+Jztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZG5hbWU7XG5cdGh0bWxfY29udGFpbmVyICs9ICc6PC9sYWJlbD48c3BhbiBjbGFzcz1cImZlbGR0ZXh0IGNvbnRyb2xzXCI+JztcbiAgICBfLmVhY2gob2JqZWt0X2xpc3RlLCBmdW5jdGlvbihvYmpla3QsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGh0bWxfY29udGFpbmVyICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbF9jb250YWluZXIgKz0gJzxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXN0YXRpYyBjb250cm9sc1wiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJMaW5rWnVBcnRHbGVpY2hlckdydXBwZVwiIEFydElkPVwiJztcbiAgICAgICAgaHRtbF9jb250YWluZXIgKz0gb2JqZWt0LkdVSUQ7XG4gICAgICAgIGh0bWxfY29udGFpbmVyICs9ICdcIj4nO1xuICAgICAgICBodG1sX2NvbnRhaW5lciArPSBvYmpla3QuTmFtZTtcbiAgICAgICAgaHRtbF9jb250YWluZXIgKz0gJzwvYT48L3A+JztcbiAgICB9KTtcblx0aHRtbF9jb250YWluZXIgKz0gJzwvc3Bhbj48L2Rpdj4nO1xuXHRyZXR1cm4gaHRtbF9jb250YWluZXI7XG59O1xuXG4vLyBnZW5lcmllcnQgZGVuIGh0bWwtSW5oYWx0IGbDvHIgZWluemVsbmUgTGlua3MgaW4gRmxvcmFcbndpbmRvdy5hZGIuZ2VuZXJpZXJlSHRtbEbDvHJXd3dMaW5rID0gZnVuY3Rpb24oZmVsZG5hbWUsIGZlbGR3ZXJ0LCBkc190eXAsIGRzX25hbWUpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaHRtbF9jb250YWluZXI7XG5cdGh0bWxfY29udGFpbmVyID0gJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxuXFx0PGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIGZvcj1cIic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGRuYW1lO1xuXHRodG1sX2NvbnRhaW5lciArPSAnXCI+Jztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZG5hbWU7XG5cdGh0bWxfY29udGFpbmVyICs9ICc6PC9sYWJlbD5cXG5cXHQnO1xuXHQvLyBqZXR6dCBMaW5rIGJlZ2lubmVuLCBkYW1pdCBkYXMgRmVsZCBrbGlja2JhciB3aXJkXG5cdGh0bWxfY29udGFpbmVyICs9ICc8cD48YSBocmVmPVwiJztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZHdlcnQ7XG5cdGh0bWxfY29udGFpbmVyICs9ICdcIj48aW5wdXQgY2xhc3M9XCJjb250cm9scyBmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBkc1R5cD1cIicrZHNfdHlwKydcIiBkc05hbWU9XCInK2RzX25hbWUrJ1wiIGlkPVwiJztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZG5hbWU7XG5cdGh0bWxfY29udGFpbmVyICs9ICdcIiBuYW1lPVwiJztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZG5hbWU7XG5cdGh0bWxfY29udGFpbmVyICs9ICdcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZHdlcnQ7XG5cdGh0bWxfY29udGFpbmVyICs9ICdcIiByZWFkb25seT1cInJlYWRvbmx5XCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIj4nO1xuXHQvLyBMaW5rIGFic2NobGllc3NlblxuXHRodG1sX2NvbnRhaW5lciArPSAnPC9hPjwvcD4nO1xuXHRodG1sX2NvbnRhaW5lciArPSAnXFxuPC9kaXY+Jztcblx0cmV0dXJuIGh0bWxfY29udGFpbmVyO1xufTtcblxuLy8gZ2VuZXJpZXJ0IGRlbiBodG1sLUluaGFsdCBmw7xyIGVpbnplbG5lIExpbmtzIGluIEZsb3JhXG53aW5kb3cuYWRiLmdlbmVyaWVyZUh0bWxGw7xyT2JqZWt0bGluayA9IGZ1bmN0aW9uKGZlbGRuYW1lLCBmZWxkd2VydCwgdXJsKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGh0bWxfY29udGFpbmVyO1xuXHRodG1sX2NvbnRhaW5lciA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIj4nO1xuXHRodG1sX2NvbnRhaW5lciArPSBmZWxkbmFtZTtcblx0aHRtbF9jb250YWluZXIgKz0gJzonO1xuXHRodG1sX2NvbnRhaW5lciArPSAnPC9sYWJlbD4nO1xuXHRodG1sX2NvbnRhaW5lciArPSAnPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtc3RhdGljIGZlbGR0ZXh0IGNvbnRyb2xzXCI+PGEgaHJlZj1cIic7XG5cdGh0bWxfY29udGFpbmVyICs9IHVybDtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiIHRhcmdldD1cIl9ibGFua1wiPic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGR3ZXJ0O1xuXHRodG1sX2NvbnRhaW5lciArPSAnPC9hPjwvcD48L2Rpdj4nO1xuXHRyZXR1cm4gaHRtbF9jb250YWluZXI7XG59O1xuXG4vLyBnZW5lcmllcnQgZGVuIGh0bWwtSW5oYWx0IGbDvHIgVGV4dGlucHV0c1xud2luZG93LmFkYi5nZW5lcmllcmVIdG1sRsO8clRleHRpbnB1dCA9IGZ1bmN0aW9uKGZlbGRuYW1lLCBmZWxkd2VydCwgaW5wdXRfdHlwLCBkc190eXAsIGRzX25hbWUpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaHRtbF9jb250YWluZXI7XG5cdGh0bWxfY29udGFpbmVyID0gJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxuXFx0PGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIGZvcj1cIic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGRuYW1lO1xuXHRodG1sX2NvbnRhaW5lciArPSAnXCI+Jztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZG5hbWU7XG5cdGh0bWxfY29udGFpbmVyICs9ICc6PC9sYWJlbD5cXG5cXHQ8aW5wdXQgY2xhc3M9XCJjb250cm9scyBmb3JtLWNvbnRyb2wgaW5wdXQtc21cIiBpZD1cIic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGRuYW1lO1xuXHRodG1sX2NvbnRhaW5lciArPSAnXCIgbmFtZT1cIic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGRuYW1lO1xuXHRodG1sX2NvbnRhaW5lciArPSAnXCIgdHlwZT1cIic7XG5cdGh0bWxfY29udGFpbmVyICs9IGlucHV0X3R5cDtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiIHZhbHVlPVwiJztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZHdlcnQ7XG5cdGh0bWxfY29udGFpbmVyICs9ICdcIiByZWFkb25seT1cInJlYWRvbmx5XCIgZHNUeXA9XCInK2RzX3R5cCsnXCIgZHNOYW1lPVwiJytkc19uYW1lKydcIj5cXG48L2Rpdj4nO1xuXHRyZXR1cm4gaHRtbF9jb250YWluZXI7XG59O1xuXG4vLyBnZW5lcmllcnQgZGVuIGh0bWwtSW5oYWx0IGbDvHIgVGV4dGFyZWFcbndpbmRvdy5hZGIuZ2VuZXJpZXJlSHRtbEbDvHJUZXh0YXJlYSA9IGZ1bmN0aW9uKGZlbGRuYW1lLCBmZWxkd2VydCwgZHNfdHlwLCBkc19uYW1lKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGh0bWxfY29udGFpbmVyO1xuXHRodG1sX2NvbnRhaW5lciA9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPjxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBmb3I9XCInO1xuXHRodG1sX2NvbnRhaW5lciArPSBmZWxkbmFtZTtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiPic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGRuYW1lO1xuXHRodG1sX2NvbnRhaW5lciArPSAnOjwvbGFiZWw+PHRleHRhcmVhIGNsYXNzPVwiY29udHJvbHMgZm9ybS1jb250cm9sXCIgaWQ9XCInO1xuXHRodG1sX2NvbnRhaW5lciArPSBmZWxkbmFtZTtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiIG5hbWU9XCInO1xuXHRodG1sX2NvbnRhaW5lciArPSBmZWxkbmFtZTtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiIHJlYWRvbmx5PVwicmVhZG9ubHlcIiBkc1R5cD1cIicrZHNfdHlwKydcIiBkc05hbWU9XCInK2RzX25hbWUrJ1wiPic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGR3ZXJ0O1xuXHRodG1sX2NvbnRhaW5lciArPSAnPC90ZXh0YXJlYT48L2Rpdj4nO1xuXHRyZXR1cm4gaHRtbF9jb250YWluZXI7XG59O1xuXG4vLyBnZW5lcmllcnQgZGVuIGh0bWwtSW5oYWx0IGbDvHIgamEvbmVpbi1GZWxkZXJcbndpbmRvdy5hZGIuZ2VuZXJpZXJlSHRtbEbDvHJCb29sZWFuID0gZnVuY3Rpb24oZmVsZG5hbWUsIGZlbGR3ZXJ0LCBkc190eXAsIGRzX25hbWUpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaHRtbF9jb250YWluZXI7XG5cdGh0bWxfY29udGFpbmVyID0gJzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+PGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIGZvcj1cIic7XG5cdGh0bWxfY29udGFpbmVyICs9IGZlbGRuYW1lO1xuXHRodG1sX2NvbnRhaW5lciArPSAnXCI+Jztcblx0aHRtbF9jb250YWluZXIgKz0gZmVsZG5hbWU7XG5cdGh0bWxfY29udGFpbmVyICs9ICc6PC9sYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCInO1xuXHRodG1sX2NvbnRhaW5lciArPSBmZWxkbmFtZTtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiIG5hbWU9XCInO1xuXHRodG1sX2NvbnRhaW5lciArPSBmZWxkbmFtZTtcblx0aHRtbF9jb250YWluZXIgKz0gJ1wiJztcblx0aWYgKGZlbGR3ZXJ0ID09PSB0cnVlKSB7XG5cdFx0aHRtbF9jb250YWluZXIgKz0gJyBjaGVja2VkPVwidHJ1ZVwiJztcblx0fVxuXHRodG1sX2NvbnRhaW5lciArPSAnXCIgcmVhZG9ubHk9XCJyZWFkb25seVwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIiBkc1R5cD1cIicrZHNfdHlwKydcIiBkc05hbWU9XCInK2RzX25hbWUrJ1wiPjwvZGl2Pic7XG5cdHJldHVybiBodG1sX2NvbnRhaW5lcjtcbn07XG5cbi8vIGJlZ3Jlbnp0IGRpZSBtYXhpbWFsZSBIw7ZoZSBkZXMgQmF1bXMgYXVmIGRpZSBTZWl0ZW5ow7ZoZSwgd2VubiBuw7Z0aWdcbndpbmRvdy5hZGIuc2V0emVUcmVlaMO2aGUgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgd2luZG93X2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblx0aWYgKCQod2luZG93KS53aWR0aCgpID4gMTAwMCAmJiAhJChcImJvZHlcIikuaGFzQ2xhc3MoXCJmb3JjZS1tb2JpbGVcIikpIHtcblx0XHQkKFwiLmJhdW1cIikuY3NzKFwibWF4LWhlaWdodFwiLCB3aW5kb3dfaGVpZ2h0IC0gMTYxKTtcblx0fSBlbHNlIHtcblx0XHQvLyBTcGFsdGVuIHNpbmQgdW50ZXJlaW5hbmRlci4gQmF1bSA5MXB4IHdlbmlnZXIgaG9jaCwgZGFtaXQgRm9ybXVsYXJlIHp1bSByYXVmc2NoaWViZW4gaW1tZXIgZXJyZWljaHQgd2VyZGVuIGvDtm5uZW5cblx0XHQkKFwiLmJhdW1cIikuY3NzKFwibWF4LWhlaWdodFwiLCB3aW5kb3dfaGVpZ2h0IC0gMjUyKTtcblx0fVxufTtcblxuLy8gc2V0enQgZGllIEjDtmhlIHZvbiB0ZXh0YXJlYXMgc28sIGRhc3MgZGVyIFRleHQgZ2VuYXUgcmVpbiBwYXNzdFxud2luZG93LmFkYi5maXRUZXh0YXJlYVRvQ29udGVudCA9IGZ1bmN0aW9uKGlkLCBtYXhfaGVpZ2h0KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHRleHQgPSBpZCAmJiBpZC5zdHlsZSA/IGlkIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRtYXhfaGVpZ2h0ID0gbWF4X2hlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRpZiAoIXRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKiBBY2NvdW50cyBmb3Igcm93cyBiZWluZyBkZWxldGVkLCBwaXhlbCB2YWx1ZSBtYXkgbmVlZCBhZGp1c3RpbmcgKi9cblx0aWYgKHRleHQuY2xpZW50SGVpZ2h0ID09IHRleHQuc2Nyb2xsSGVpZ2h0KSB7XG5cdFx0dGV4dC5zdHlsZS5oZWlnaHQgPSBcIjMwcHhcIjtcblx0fVxuXG5cdHZhciBhZGp1c3RlZEhlaWdodCA9IHRleHQuY2xpZW50SGVpZ2h0O1xuXHRpZiAoIW1heF9oZWlnaHQgfHwgbWF4X2hlaWdodCA+IGFkanVzdGVkSGVpZ2h0KSB7XG5cdFx0YWRqdXN0ZWRIZWlnaHQgPSBNYXRoLm1heCh0ZXh0LnNjcm9sbEhlaWdodCwgYWRqdXN0ZWRIZWlnaHQpO1xuXHR9XG5cdGlmIChtYXhfaGVpZ2h0KSB7XG5cdFx0YWRqdXN0ZWRIZWlnaHQgPSBNYXRoLm1pbihtYXhfaGVpZ2h0LCBhZGp1c3RlZEhlaWdodCk7XG5cdH1cblx0aWYgKGFkanVzdGVkSGVpZ2h0ID4gdGV4dC5jbGllbnRIZWlnaHQpIHtcblx0XHR0ZXh0LnN0eWxlLmhlaWdodCA9IGFkanVzdGVkSGVpZ2h0ICsgXCJweFwiO1xuXHR9XG59O1xuXG4vLyBtYW5hZ2VkIGRpZSBTaWNodGJhcmtlaXQgdm9uIEZvcm11bGFyZW5cbi8vIHdpcmQgdm9uIGFsbGVuIGluaXRpaWVyZV8tRnVua3Rpb25lbiB2ZXJ3ZW5kZXRcbi8vIHdpcmQgZWluIEZvcm11bGFybmFtZSDDvGJlcmdlYmVuLCB3aXJkIGRpZXNlcyBGb3JtdWxhciBnZXplaWd0XG4vLyB1bmQgYWxsZSBhbmRlcmVuIGF1c2dlYmxlbmRldFxuLy8genVzw6R0emxpY2ggd2lyZCBkaWUgSMO2aGUgdm9uIHRleHRpbnB1dC1GZWxkZXJuIGFuIGRlbiBUZXh0aW5oYWx0IGFuZ2VwYXNzdFxud2luZG93LmFkYi56ZWlnZUZvcm11bGFyID0gZnVuY3Rpb24oZm9ybXVsYXJuYW1lKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGZvcm11bGFyX2FuZ2V6ZWlndCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgJGZvcm0gPSAkKCdmb3JtJyk7XG5cdC8vIHp1ZXJzdCBhbGxlIEZvcm11bGFyZSBhdXNibGVuZGVuXG5cdCQoXCIjZm9ybXNcIikuaGlkZSgpO1xuICAgICRmb3JtLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5oaWRlKCk7XG5cdH0pO1xuXG5cdGlmIChmb3JtdWxhcm5hbWUpIHtcblx0XHRpZiAoZm9ybXVsYXJuYW1lICE9PSBcImFydFwiKSB7XG5cdFx0XHQvLyBTcHVyZW4gZGVzIGxldHp0ZW4gT2JqZWt0cyBlbnRmZXJuZW5cblx0XHRcdC8vIElFOCBrYW5uIG5pY2h0IGRlbGV0ZW5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRlbGV0ZSBsb2NhbFN0b3JhZ2UuYXJ0X2lkO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLmFydF9pZCA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdC8vIFVSTCBhbnBhc3NlbiwgZGFtaXQga2VpbiBPYmpla3QgYW5nZXplaWd0IHdpcmRcblx0XHRcdC8vIFRPRE86IERJRVNFUiBCRUZFSEwgTMOWU1QgSU4gSUUxMSBFSU5Gw5xHRU4gVk9OIDovLy8gQVVTISEhIVxuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgXCJpbmRleC5odG1sXCIpO1xuXHRcdFx0Ly8gYWxsZSBCw6R1bWUgYXVzYmxlbmRlbiwgc3VjaGZlbGQsIEJhdW10aXRlbFxuXHRcdFx0JChcIi5zdWNoZW5cIikuaGlkZSgpO1xuXHRcdFx0JChcIi5iYXVtXCIpLmhpZGUoKTtcblx0XHRcdCQoXCIudHJlZUJlc2NocmlmdHVuZ1wiKS5oaWRlKCk7XG5cdFx0XHQvLyBHcnVwcGUgU2NoYWx0ZmzDpGNoZSBkZWFrdGl2aWVyZW5cblx0XHRcdCQoJyNHcnVwcGUnKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH1cblx0XHQkZm9ybS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRoYXQgPSAkKHRoaXMpO1xuXHRcdFx0aWYgKHRoYXQuYXR0cihcImlkXCIpID09PSBmb3JtdWxhcm5hbWUpIHtcblx0XHRcdFx0JChcIiNmb3Jtc1wiKS5zaG93KCk7XG5cdFx0XHRcdHRoYXQuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoMCk7XG5cdFx0Ly8gamV0enQgZGllIExpbmtzIGltIE1lbnUgKGRlKWFrdGl2aWVyZW5cblx0XHR3aW5kb3cuYWRiLnNldHp0ZUxpbmtzWnVCaWxkZXJVbmRXaWtpcGVkaWEoKTtcblx0XHRmb3JtdWxhcl9hbmdlemVpZ3QucmVzb2x2ZSgpO1xuXHR9XG5cdHJldHVybiBmb3JtdWxhcl9hbmdlemVpZ3QucHJvbWlzZSgpO1xufTtcblxuLy8ga29udHJvbGxpZXJlbiwgb2IgZGllIGVyZm9yZGVybGljaGVuIEZlbGRlciBldHdhcyBlbnRoYWx0ZW5cbi8vIHdlbm4gamEgd2lyZCB0cnVlIHJldG91cm5pZXJ0LCBzb25zdCBmYWxzZVxud2luZG93LmFkYi52YWxpZGllcmVTaWdudXAgPSBmdW5jdGlvbih3b2hlcikge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBlbWFpbCxcbiAgICAgICAgcGFzc3dvcnQsXG4gICAgICAgIHBhc3N3b3J0Mjtcblx0Ly8genVuw6RjaHN0IGFsbGUgSGlud2Vpc2UgYXVzYmxlbmRlbiAoZmFsbHMgZWluZXIgdm9uIGVpbmVyIGZyw7xoZXJlbiBQcsO8ZnVuZyBoZXIgbm9jaCBlaW5nZWJsZW5kZXQgd8OkcmUpXG5cdCQoXCIuaGlud2Vpc1wiKS5oaWRlKCk7XG5cdC8vIGVyZmFzc3RlIFdlcnRlIGhvbGVuXG5cdGVtYWlsID0gJChcIiNFbWFpbF9cIit3b2hlcikudmFsKCk7XG5cdHBhc3N3b3J0ID0gJChcIiNQYXNzd29ydF9cIit3b2hlcikudmFsKCk7XG5cdHBhc3N3b3J0MiA9ICQoXCIjUGFzc3dvcnQyX1wiK3dvaGVyKS52YWwoKTtcblx0Ly8gcHLDvGZlblxuXHRpZiAoIWVtYWlsKSB7XG5cdFx0JChcIiNFbWFpbGhpbndlaXNfXCIrd29oZXIpLnNob3coKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcIiNFbWFpbF9cIit3b2hlcikuZm9jdXMoKTtcblx0XHR9LCA1MCk7ICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIHNvIHRoYXQgLmJsdXIoKSBjYW4gZmluaXNoIGJlZm9yZSB5b3UgZG8gLmZvY3VzKClcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSBpZiAoIXBhc3N3b3J0KSB7XG5cdFx0JChcIiNQYXNzd29ydGhpbndlaXNfXCIrd29oZXIpLnNob3coKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcIiNQYXNzd29ydF9cIit3b2hlcikuZm9jdXMoKTtcblx0XHR9LCA1MCk7ICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIHNvIHRoYXQgLmJsdXIoKSBjYW4gZmluaXNoIGJlZm9yZSB5b3UgZG8gLmZvY3VzKClcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSBpZiAoIXBhc3N3b3J0Mikge1xuXHRcdCQoXCIjUGFzc3dvcnQyaGlud2Vpc19cIit3b2hlcikuc2hvdygpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKFwiI1Bhc3N3b3J0Ml9cIit3b2hlcikuZm9jdXMoKTtcblx0XHR9LCA1MCk7ICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIHNvIHRoYXQgLmJsdXIoKSBjYW4gZmluaXNoIGJlZm9yZSB5b3UgZG8gLmZvY3VzKClcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSBpZiAocGFzc3dvcnQgIT09IHBhc3N3b3J0Mikge1xuXHRcdCQoXCIjUGFzc3dvcnQyaGlud2Vpc0ZhbHNjaF9cIit3b2hlcikuc2hvdygpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKFwiI1Bhc3N3b3J0Ml9cIit3b2hlcikuZm9jdXMoKTtcblx0XHR9LCA1MCk7ICAvLyBuZWVkIHRvIHVzZSBhIHRpbWVyIHNvIHRoYXQgLmJsdXIoKSBjYW4gZmluaXNoIGJlZm9yZSB5b3UgZG8gLmZvY3VzKClcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG53aW5kb3cuYWRiLmVyc3RlbGxlS29udG8gPSBmdW5jdGlvbih3b2hlcikge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIFVzZXIgaW4gX3VzZXIgZWludHJhZ2VuXG5cdCQuY291Y2guc2lnbnVwKHtcblx0XHRuYW1lOiAkKCcjRW1haWxfJyt3b2hlcikudmFsKClcblx0fSxcblx0JCgnI1Bhc3N3b3J0Xycrd29oZXIpLnZhbCgpLCB7XG5cdFx0c3VjY2VzcyA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLkVtYWlsID0gJCgnI0VtYWlsXycrd29oZXIpLnZhbCgpO1xuXHRcdFx0aWYgKHdvaGVyID09PSBcImFydFwiKSB7XG5cdFx0XHRcdHdpbmRvdy5hZGIuYmVhcmJlaXRlTHJUYXhvbm9taWUoKTtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy5hZGIucGFzc2VVaUbDvHJBbmdlbWVsZGV0ZW5Vc2VyQW4od29oZXIpO1xuXHRcdFx0Ly8gV2VydGUgYXVzIEZlbGRlcm4gZW50ZmVybmVuXG5cdFx0XHQkKFwiI0VtYWlsX1wiK3dvaGVyKS52YWwoXCJcIik7XG5cdFx0XHQkKFwiI1Bhc3N3b3J0X1wiK3dvaGVyKS52YWwoXCJcIik7XG5cdFx0XHQkKFwiI1Bhc3N3b3J0Ml9cIit3b2hlcikudmFsKFwiXCIpO1xuXHRcdH0sXG5cdFx0ZXJyb3IgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwcmFlZml4ID0gXCJpbXBvcnRpZXJlbl9cIjtcblx0XHRcdGlmICh3b2hlciA9PT0gXCJhcnRcIikge1xuXHRcdFx0XHRwcmFlZml4ID0gXCJcIjtcblx0XHRcdH1cblx0XHRcdCQoXCIjXCIrcHJhZWZpeCt3b2hlcitcIl9hbm1lbGRlbl9mZWhsZXJfdGV4dFwiKS5odG1sKFwiRmVobGVyOiBEYXMgS29udG8gd3VyZGUgbmljaHQgZXJzdGVsbHRcIik7XG5cdFx0XHQkKFwiI1wiK3ByYWVmaXgrd29oZXIrXCJfYW5tZWxkZW5fZmVobGVyXCIpXG4gICAgICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgICAgICAuc2hvdygpO1xuXHRcdH1cblx0fSk7XG59O1xuXG53aW5kb3cuYWRiLm1lbGRlVXNlckFuID0gZnVuY3Rpb24od29oZXIpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZW1haWwgPSAkKCcjRW1haWxfJyt3b2hlcikudmFsKCksXG5cdFx0cGFzc3dvcnQgPSAkKCcjUGFzc3dvcnRfJyt3b2hlcikudmFsKCk7XG5cdGlmICh3aW5kb3cuYWRiLnZhbGlkaWVyZVVzZXJBbm1lbGR1bmcod29oZXIpKSB7XG5cdFx0JC5jb3VjaC5sb2dpbih7XG5cdFx0XHRuYW1lIDogZW1haWwsXG5cdFx0XHRwYXNzd29yZCA6IHBhc3N3b3J0LFxuXHRcdFx0c3VjY2VzcyA6IGZ1bmN0aW9uKHIpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLkVtYWlsID0gJCgnI0VtYWlsXycrd29oZXIpLnZhbCgpO1xuXHRcdFx0XHRpZiAod29oZXIgPT09IFwiYXJ0XCIpIHtcblx0XHRcdFx0XHR3aW5kb3cuYWRiLmJlYXJiZWl0ZUxyVGF4b25vbWllKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LmFkYi5wYXNzZVVpRsO8ckFuZ2VtZWxkZXRlblVzZXJBbih3b2hlcik7XG5cdFx0XHRcdC8vIFdlcnRlIGF1cyBGZWxkZXJuIGVudGZlcm5lblxuXHRcdFx0XHQkKFwiI0VtYWlsX1wiK3dvaGVyKS52YWwoXCJcIik7XG5cdFx0XHRcdCQoXCIjUGFzc3dvcnRfXCIrd29oZXIpLnZhbChcIlwiKTtcblx0XHRcdFx0JChcIiNhcnRfYW5tZWxkZW5cIikuc2hvdygpO1xuXHRcdFx0XHQvLyBhZG1pbi1GdW5rdGlvbmVuXG5cdFx0XHRcdGlmIChyLnJvbGVzLmluZGV4T2YoXCJfYWRtaW5cIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0Ly8gZGFzIGlzdCBlaW4gYWRtaW5cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImhhbGxvIGFkbWluXCIpO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5hZG1pbiA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVsZXRlIGxvY2FsU3RvcmFnZS5hZG1pbjtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuYWRiLmJsZW5kZU1lbnVzKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcHLDpGZpeCA9IFwiaW1wb3J0aWVyZW5fXCI7XG5cdFx0XHRcdGlmICh3b2hlciA9PT0gXCJhcnRcIikge1xuXHRcdFx0XHRcdHByw6RmaXggPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHp1ZXJzdCBhbGxmw6RsbGlnZSBiZXN0ZWhlbmRlIEhpbndlaXNlIGF1c2JsZW5kZW5cblx0XHRcdFx0JChcIi5oaW53ZWlzXCIpLmhpZGUoKTtcblx0XHRcdFx0JChcIiNcIitwcsOkZml4K3dvaGVyK1wiX2FubWVsZGVuX2ZlaGxlcl90ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKFwiQW5tZWxkdW5nIGdlc2NoZWl0ZXJ0Ljxicj5TaWUgbcO8c3NlbiBldi4gZWluIEtvbnRvIGVyc3RlbGxlbj9cIilcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0KClcblx0XHRcdFx0ICAgIC5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5cbndpbmRvdy5hZGIuYmxlbmRlTWVudXMgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAobG9jYWxTdG9yYWdlLmFkbWluKSB7XG5cdFx0JChcIiNtZW51X2J0blwiKVxuICAgICAgICAgICAgLmZpbmQoXCIuYWRtaW5cIilcbiAgICAgICAgICAgIC5zaG93KCk7XG5cdH0gZWxzZSB7XG5cdFx0JChcIiNtZW51X2J0blwiKVxuICAgICAgICAgICAgLmZpbmQoXCIuYWRtaW5cIilcbiAgICAgICAgICAgIC5oaWRlKCk7XG5cdH1cbn07XG5cbndpbmRvdy5hZGIubWVsZGVVc2VyQWIgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBJRTgga2FubiBuaWNodCBkZWxldGVuXG5cdHRyeSB7XG5cdFx0ZGVsZXRlIGxvY2FsU3RvcmFnZS5FbWFpbDtcblx0fVxuXHRjYXRjaCAoZSkge1xuXHRcdGxvY2FsU3RvcmFnZS5FbWFpbCA9IHVuZGVmaW5lZDtcblx0fVxuXHQkKFwiLmFydF9hbm1lbGRlbl90aXRlbFwiKS50ZXh0KFwiQW5tZWxkZW5cIik7XG5cdCQoXCIuaW1wb3J0aWVyZW5fYW5tZWxkZW5fdGl0ZWxcIikudGV4dChcIjEuIEFubWVsZGVuXCIpO1xuXHQkKFwiLmFsZXJ0XCIpLmhpZGUoKTtcblx0JChcIi5oaW53ZWlzXCIpLmhpZGUoKTtcblx0JChcIi53ZWxsLmFubWVsZGVuXCIpLnNob3coKTtcblx0JChcIi5FbWFpbFwiKS5zaG93KCk7XG5cdCQoXCIuUGFzc3dvcnRcIikuc2hvdygpO1xuXHQkKFwiLmFubWVsZGVuX2J0blwiKS5zaG93KCk7XG5cdCQoXCIuYWJtZWxkZW5fYnRuXCIpLmhpZGUoKTtcblx0Ly8gYXVzc2NoYWx0ZW4sIHNvbGwgc3DDpHRlciBiZWkgT3JnYW5pc2F0aW9uIG3DtmdsaWNoIHdlcmRlblxuXHQvLyAkKFwiLmtvbnRvX2Vyc3RlbGxlbl9idG5cIikuc2hvdygpO1xuXHQkKFwiLmtvbnRvX3NwZWljaGVybl9idG5cIikuaGlkZSgpO1xuXHQkKFwiI2FydF9hbm1lbGRlblwiKS5oaWRlKCk7XG5cdHdpbmRvdy5hZGIuc2Now7x0emVMclRheG9ub21pZSgpO1xuICAgIC8vIGZhbGxzIGRpZXNlciBVc2VyIGFkbWluIHdhcjogdmVyZ2Vzc2VuXG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZS5hZG1pbjtcbiAgICAvLyBmw7xyIGRpZXNlbiBOdXR6ZXIgcGFzc2VuZGUgTWVudXMgYW56ZWlnZW5cbiAgICB3aW5kb3cuYWRiLmJsZW5kZU1lbnVzKCk7XG59O1xuXG53aW5kb3cuYWRiLnBhc3NlVWlGw7xyQW5nZW1lbGRldGVuVXNlckFuID0gZnVuY3Rpb24od29oZXIpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgcHLDpGZpeCA9IFwiaW1wb3J0aWVyZW5fXCI7XG5cdGlmICh3b2hlciA9PT0gXCJhcnRcIikge1xuXHRcdHByw6RmaXggPSBcIlwiO1xuXHR9XG5cdCQoXCIjYXJ0X2FubWVsZGVuX3RpdGVsXCIpLnRleHQobG9jYWxTdG9yYWdlLkVtYWlsICsgXCIgaXN0IGFuZ2VtZWxkZXRcIik7XG5cdCQoXCIuaW1wb3J0aWVyZW5fYW5tZWxkZW5fdGl0ZWxcIikudGV4dChcIjEuIFwiICsgbG9jYWxTdG9yYWdlLkVtYWlsICsgXCIgaXN0IGFuZ2VtZWxkZXRcIik7XG5cdGlmICh3b2hlciAhPT0gXCJhcnRcIikge1xuXHRcdCQoXCIjXCIgKyBwcsOkZml4ICsgd29oZXIgKyBcIl9hbm1lbGRlbl9jb2xsYXBzZVwiKS5jb2xsYXBzZSgnaGlkZScpO1xuXHRcdCQoXCIjaW1wb3J0aWVyZW5fXCIgKyB3b2hlciArIFwiX2RzX2Jlc2NocmVpYmVuX2NvbGxhcHNlXCIpLmNvbGxhcHNlKCdzaG93Jyk7XG5cdH1cblx0JChcIi5hbGVydFwiKS5oaWRlKCk7XG5cdCQoXCIuaGlud2Vpc1wiKS5oaWRlKCk7XG5cdCQoXCIud2VsbC5hbm1lbGRlblwiKS5oaWRlKCk7XG5cdCQoXCIuRW1haWxcIikuaGlkZSgpO1xuXHQkKFwiLlBhc3N3b3J0XCIpLmhpZGUoKTtcblx0JChcIi5hbm1lbGRlbl9idG5cIikuaGlkZSgpO1xuXHQkKFwiLmFibWVsZGVuX2J0blwiKS5zaG93KCk7XG5cdCQoXCIua29udG9fZXJzdGVsbGVuX2J0blwiKS5oaWRlKCk7XG5cdCQoXCIua29udG9fc3BlaWNoZXJuX2J0blwiKS5oaWRlKCk7XG5cdC8vIGluIExSIHNvbGwgQW5tZWxkZS1BY2NvcmRpb24gbmljaHQgc2ljaHRiYXIgc2VpblxuXHQkKFwiI2FydF9hbm1lbGRlblwiKS5oaWRlKCk7XG59O1xuXG4vLyBwcsO8ZnQsIG9iIGRlciBCZW51dHplciBhbmdlbWVsZGV0IGlzdFxuLy8gamE6IHJldG91cm5pZXJ0IHRydWVcbi8vIG5laW46IHJldG91cm5pZXJ0IGZhbHNlIHVuZCDDtmZmbmV0IGRpZSBBbm1lbGR1bmdcbi8vIHdlbGNoZSBhbm1lbGR1bmcgaMOkbmd0IGFiLCB3b2hlciBkaWUgUHLDvGZ1bmcgYW5nZWZvcmRlcnQgd3VyZGVcbi8vIGRhcnVtIGVyd2FydGV0IGRpZSBGdW5rdGlvbiBkZW4gcGFyYW1ldGVyIHdvaGVyXG53aW5kb3cuYWRiLnByw7xmZUFubWVsZHVuZyA9IGZ1bmN0aW9uKHdvaGVyKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKCFsb2NhbFN0b3JhZ2UuRW1haWwpIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LmFkYi56dXLDvGNrWnVyQW5tZWxkdW5nKHdvaGVyKTtcblx0XHR9LCA2MDApO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbndpbmRvdy5hZGIuenVyw7xja1p1ckFubWVsZHVuZyA9IGZ1bmN0aW9uKHdvaGVyKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHByw6RmaXggPSBcImltcG9ydGllcmVuX1wiO1xuXG5cdC8vIEJlaSBMUiBtdXNzIGRlciBBbm1lbGR1bmdzYWJzY2huaXR0IGVpbmdlYmxlbmRldCB3ZXJkZW5cblx0aWYgKHdvaGVyID09PSBcImFydFwiKSB7XG5cdFx0cHLDpGZpeCA9IFwiXCI7XG5cdFx0JChcIiNhcnRfYW5tZWxkZW5cIikuc2hvdygpO1xuXHR9XG5cblx0Ly8gTWl0dGVpbGVuLCBkYXNzIEFubWVsZHVuZyBuw7Z0aWcgaXN0XG5cdCQoXCIjXCIrcHLDpGZpeCt3b2hlcitcIl9hbm1lbGRlbl9oaW53ZWlzXCIpXG4gICAgICAgIC5hbGVydCgpXG4gICAgICAgIC5zaG93KCk7XG5cdCQoXCIjXCIrcHLDpGZpeCt3b2hlcitcIl9hbm1lbGRlbl9oaW53ZWlzX3RleHRcIikuaHRtbChcIlVtIERhdGVuIHp1IGJlYXJiZWl0ZW4sIG3DvHNzZW4gU2llIGFuZ2VtZWxkZXQgc2VpblwiKTtcblx0JChcIiNcIitwcsOkZml4K3dvaGVyK1wiX2FubWVsZGVuX2NvbGxhcHNlXCIpLmNvbGxhcHNlKCdzaG93Jyk7XG5cdCQoXCIuYW5tZWxkZW5fYnRuXCIpLnNob3coKTtcblx0JChcIi5hYm1lbGRlbl9idG5cIikuaGlkZSgpO1xuXHQvLyBhdXNzY2hhbHRlbiwgc29sbCBzcMOkdGVyIGJlaSBPcmdhbmlzYXRpb25lbiBtw7ZnbGljaCB3ZXJkZW5cblx0Ly8kKFwiLmtvbnRvX2Vyc3RlbGxlbl9idG5cIikuc2hvdygpO1xuXHQkKFwiLmtvbnRvX3NwZWljaGVybl9idG5cIikuaGlkZSgpO1xuXHQkKFwiI0VtYWlsX1wiK3dvaGVyKS5mb2N1cygpO1xufTtcblxud2luZG93LmFkYi52YWxpZGllcmVVc2VyQW5tZWxkdW5nID0gZnVuY3Rpb24od29oZXIpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZW1haWwgPSAkKCcjRW1haWxfJyt3b2hlcikudmFsKCksXG5cdFx0cGFzc3dvcnQgPSAkKCcjUGFzc3dvcnRfJyt3b2hlcikudmFsKCk7XG5cdGlmICghZW1haWwpIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnI0VtYWlsXycrd29oZXIpLmZvY3VzKCk7XG5cdFx0fSwgNTApOyAgLy8gbmVlZCB0byB1c2UgYSB0aW1lciBzbyB0aGF0IC5ibHVyKCkgY2FuIGZpbmlzaCBiZWZvcmUgeW91IGRvIC5mb2N1cygpXG5cdFx0JChcIiNFbWFpbGhpbndlaXNfXCIrd29oZXIpLnNob3coKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSBpZiAoIXBhc3N3b3J0KSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyNQYXNzd29ydF8nK3dvaGVyKS5mb2N1cygpO1xuXHRcdH0sIDUwKTsgIC8vIG5lZWQgdG8gdXNlIGEgdGltZXIgc28gdGhhdCAuYmx1cigpIGNhbiBmaW5pc2ggYmVmb3JlIHlvdSBkbyAuZm9jdXMoKVxuXHRcdCQoXCIjUGFzc3dvcnRoaW53ZWlzX1wiK3dvaGVyKS5zaG93KCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gd2VubiBCc05hbWUgZ2XDpG5kZXJ0IHdpcmRcbi8vIHN1Y2hlbiwgb2Igc2Nob24gZWluZSBEYXRlbnNhbW1sdW5nIG1pdCBkaWVzZW0gTmFtZW4gZXhpc3RpZXJ0XG4vLyB1bmQgc2llIHZvbiBqZW1hbmQgYW5kZXJlbSBpbXBvcnRpZXJ0IHd1cmRlXG4vLyB1bmQgc2llIG5pY2h0IHp1c2FtbWVuZmFzc2VuZCBpc3RcbndpbmRvdy5hZGIuaGFuZGxlQnNOYW1lQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdGJzX2tleSA9IF8uZmluZCh3aW5kb3cuYWRiLmRzX25hbWVuX2VpbmRldXRpZywgZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRyZXR1cm4ga2V5WzBdID09PSB0aGF0LnZhbHVlICYmIGtleVsyXSAhPT0gbG9jYWxTdG9yYWdlLkVtYWlsICYmICFrZXlbMV07XG5cdFx0fSk7XG5cdGlmIChic19rZXkpIHtcblx0XHQkKFwiI2ltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXMyXCIpXG4gICAgICAgICAgICAuYWxlcnQoKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1pbmZvXCIpXG4gICAgICAgICAgICAuc2hvdygpO1xuXHRcdCQoXCIjaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2Vpc190ZXh0MlwiKS5odG1sKCdFcyBleGlzdGllcnQgc2Nob24gZWluZSBnbGVpY2ggaGVpc3NlbmRlIHVuZCBuaWNodCB6dXNhbW1lbmZhc3NlbmRlIEJlemllaHVuZ3NzYW1tbHVuZy48YnI+U2llIHd1cmRlIHZvbiBqZW1hbmQgYW5kZXJlbSBpbXBvcnRpZXJ0LiBEYWhlciBtw7xzc2VuIFNpZSBlaW5lbiBhbmRlcmVuIE5hbWVuIHZlcndlbmRlbi4nKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcIiNpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlwiKVxuICAgICAgICAgICAgICAgIC5hbGVydCgpXG4gICAgICAgICAgICAgICAgLmhpZGUoKTtcblx0XHR9LCAzMDAwMCk7XG5cdFx0JChcIiNCc05hbWVcIilcbiAgICAgICAgICAgIC52YWwoXCJcIilcblx0XHQgICAgLmZvY3VzKCk7XG5cdH0gZWxzZSB7XG5cdFx0JChcIiNpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlwiKVxuICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgIC5oaWRlKCk7XG5cdH1cbn07XG5cbi8vIFdlbm4gRHNJbXBvcnRpZXJ0Vm9uIGdlw6RuZGVydCB3aXJkXG4vLyBrb250cm9sbGllcmVuLCBkYXNzIGVzIGRpZSBlbWFpbCBkZXIgYW5nZW1lbGRldGVuIFBlcnNvbiBpc3RcbndpbmRvdy5hZGIuaGFuZGxlRHNJbXBvcnRpZXJ0Vm9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICB2YXIgJGltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXMyID0gJChcIiNpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlwiKTtcblx0JChcIiNEc0ltcG9ydGllcnRWb25cIikudmFsKGxvY2FsU3RvcmFnZS5FbWFpbCk7XG5cdCRpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlxuICAgICAgICAuYWxlcnQoKVxuICAgICAgICAuc2hvdygpXG5cdCAgICAuaHRtbCgnXCJpbXBvcnRpZXJ0IHZvblwiIGlzdCBpbW1lciBkaWUgZW1haWwtQWRyZXNzZSBkZXIgYW5nZW1lbGRldGVuIFBlcnNvbicpO1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdCRpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlxuICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgIC5oaWRlKCk7XG5cdH0sIDEwMDAwKTtcbn07XG5cbi8vIFdlbm4gQnNJbXBvcnRpZXJ0Vm9uIGdlw6RuZGVydCB3aXJkXG4vLyBLb250cm9sbGllcmVuLCBkYXNzIGVzIGRpZSBlbWFpbCBkZXIgYW5nZW1lbGRldGVuIFBlcnNvbiBpc3RcbndpbmRvdy5hZGIuaGFuZGxlQnNJbXBvcnRpZXJ0Vm9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0JChcIiNCc0ltcG9ydGllcnRWb25cIikudmFsKGxvY2FsU3RvcmFnZS5FbWFpbCk7XG5cdCQoXCIjaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2VpczJcIilcbiAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtaW5mb1wiKVxuICAgICAgICAuc2hvdygpO1xuXHQkKFwiI2ltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNfdGV4dDJcIikuaHRtbCgnXCJpbXBvcnRpZXJ0IHZvblwiIGlzdCBpbW1lciBkaWUgZW1haWwtQWRyZXNzZSBkZXIgYW5nZW1lbGRldGVuIFBlcnNvbicpO1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdCQoXCIjaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2VpczJcIilcbiAgICAgICAgICAgIC5hbGVydCgpXG4gICAgICAgICAgICAuaGlkZSgpO1xuXHR9LCAxMDAwMCk7XG59O1xuXG4vLyB3ZW5uIEJzWnVzYW1tZW5mYXNzZW5kIGdlw6RuZGVydCB3aXJkXG4vLyBCc1Vyc3BydW5nc0JzX2RpdiB6ZWlnZW4gb2RlciB2ZXJzdGVja2VuXG53aW5kb3cuYWRiLmhhbmRsZUJzWnVzYW1tZW5mYXNzZW5kQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG5cdFx0JChcIiNCc1Vyc3BydW5nc0JzX2RpdlwiKS5zaG93KCk7XG5cdH0gZWxzZSB7XG5cdFx0JChcIiNCc1Vyc3BydW5nc0JzX2RpdlwiKS5oaWRlKCk7XG5cdH1cbn07XG5cbi8vIHdlbm4gRHNadXNhbW1lbmZhc3NlbmQgZ2XDpG5kZXJ0IHdpcmRcbi8vIERzVXJzcHJ1bmdzRHMgemVpZ2VuIG9kZXIgdmVyc3RlY2tlblxud2luZG93LmFkYi5oYW5kbGVEc1p1c2FtbWVuZmFzc2VuZENoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuXHRcdCQoXCIjRHNVcnNwcnVuZ3NEc19kaXZcIikuc2hvdygpO1xuXHR9IGVsc2Uge1xuXHRcdCQoXCIjRHNVcnNwcnVuZ3NEc19kaXZcIikuaGlkZSgpO1xuXHR9XG59O1xuXG4vLyBXZW5uIEJzV8OkaGxlbiBnZcOkbmRlcnQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVCc1fDpGhsZW5DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgYnNfbmFtZSA9IHRoaXMudmFsdWUsXG5cdFx0d8OkaGxiYXIgPSBmYWxzZSxcbiAgICAgICAgJEJzQW56RHMgPSAkKFwiI0JzQW56RHNcIiksXG4gICAgICAgICRCc0FuekRzX2xhYmVsID0gJChcIiNCc0FuekRzX2xhYmVsXCIpLFxuICAgICAgICAkQnNOYW1lID0gJChcIiNCc05hbWVcIiksXG4gICAgICAgICRpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMiA9ICQoXCIjaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2VpczJcIik7XG4gICAgLy8gYWxsZsOkbGxpZ2VuIEFsZXJ0IHNjaGxpZXNzZW5cbiAgICAkaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2VpczJcbiAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgLmhpZGUoKTtcbiAgICAvLyB3w6RobGJhciBzZXR6ZW5cbiAgICAvLyB3w6RobGVuIGthbm4gbWFuIG51ciwgd2FzIG1hbiBzZWxiZXIgaW1wb3J0aWVydCBoYXQgLSBvZGVyIGFkbWluIGlzdFxuICAgIGlmICgkKFwiI1wiK3RoaXMuaWQrXCIgb3B0aW9uOnNlbGVjdGVkXCIpLmF0dHIoXCJ3YWVobGJhclwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgd8OkaGxiYXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoQm9vbGVhbihsb2NhbFN0b3JhZ2UuYWRtaW4pKSB7XG4gICAgICAgIHfDpGhsYmFyID0gdHJ1ZTtcbiAgICB9XG5cdGlmICh3w6RobGJhcikge1xuXHRcdC8vIHp1ZXJzdCBhbGxlIEZlbGRlciBsZWVyZW5cblx0XHQkKCcjaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5fY29sbGFwc2UgdGV4dGFyZWEsICNpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9jb2xsYXBzZSBpbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLnZhbCgnJyk7XG5cdFx0fSk7XG5cdFx0JEJzQW56RHMuaHRtbChcIlwiKTtcblx0XHQkQnNBbnpEc19sYWJlbC5odG1sKFwiXCIpO1xuXHRcdGlmIChic19uYW1lKSB7XG4gICAgICAgICAgICBfLmVhY2god2luZG93LmFkYi5ic192b25fb2JqZWt0ZW4ucm93cywgZnVuY3Rpb24oYnNfcm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKGJzX3Jvdy5rZXlbMV0gPT09IGJzX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJEJzTmFtZS52YWwoYnNfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChic19yb3csIGZ1bmN0aW9uKGZlbGR3ZXJ0LCBmZWxkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlbGRuYW1lID09PSBcIlVyc3BydW5nc2RhdGVuc2FtbWx1bmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjQnNVcnNwcnVuZ3NCc1wiKS52YWwoZmVsZHdlcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmZWxkbmFtZSAhPT0gXCJpbXBvcnRpZXJ0IHZvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNCc1wiICsgZmVsZG5hbWUpLnZhbChmZWxkd2VydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnNfcm93LmtleVsyXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNCc1p1c2FtbWVuZmFzc2VuZFwiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0JzVXJzcHJ1bmdzQnNfZGl2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpY2hlcnN0ZWxsZW4sIGRhc3MgZGVyIEhha2VuIGltIEZlbGQgZW50ZmVybnQgd2lyZCwgd2VubiBuYWNoIGRlciB6dXNhbW1lbmZhc3NlbmRlbiBlaW5lIGFuZGVyZSBCUyBnZXfDpGhsdCB3aXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0JzWnVzYW1tZW5mYXNzZW5kXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0JzVXJzcHJ1bmdzQnNfZGl2XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZW5uIGRpZSBkcy9icyBrZWluIFwiaW1wb3J0aWVydCB2b25cIiBoYXQgaXN0IGRlciBXZXJ0IG51bGxcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVyaGluZGVybiwgZGFzcyBudWxsIGFuZ2V6ZWlndCB3aXJkXG4gICAgICAgICAgICAgICAgICAgIGlmIChic19yb3cua2V5WzNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0JzSW1wb3J0aWVydFZvblwiKS52YWwoYnNfcm93LmtleVszXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0JzSW1wb3J0aWVydFZvblwiKS52YWwoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJEJzQW56RHNfbGFiZWwuaHRtbChcIkFuemFobCBBcnRlbi9MZWJlbnNyw6R1bWVcIik7XG4gICAgICAgICAgICAgICAgICAgICRCc0FuekRzLmh0bWwoYnNfcm93LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGFmw7xyIHNvcmdlbiwgZGFzcyB0ZXh0YXJlYXMgZ2VudWcgZ3Jvc3Mgc2luZFxuICAgICAgICAgICAgICAgICAgICAkKCcjaW1wb3J0aWVyZW5fYnMnKS5maW5kKCd0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRiLmZpdFRleHRhcmVhVG9Db250ZW50KHRoaXMsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJEJzTmFtZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsw7ZzY2hlbi1TY2hhbHRmbMOkY2hlIGVpbmJsZW5kZW5cbiAgICAgICAgICAgICAgICAkKFwiI0JzTG9lc2NoZW5cIikuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGzDtnNjaGVuLVNjaGFsdGZsw6RjaGUgYXVzYmxlbmRlblxuXHRcdFx0JChcIiNCc0xvZXNjaGVuXCIpLmhpZGUoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gbWVsZGVuLCBkYXNzIGRpZXNlIEJTIG5pY2h0IGJlYXJiZWl0ZXQgd2VyZGVuIGthbm5cbiAgICAgICAgJChcIiNpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlwiKVxuICAgICAgICAgICAgLmh0bWwoXCJTaWUga8O2bm5lbiBudXIgQmV6aWVodW5nc3NhbW1sdW5nZW4gdmVyw6RuZGVybiwgZGllIFNpZSBzZWxiZXIgaW1wb3J0aWVydCBoYWJlbi48YnI+QXVzbmFobWU6IFp1c2FtbWVuZmFzc2VuZGUgQmV6aWVodW5nc3NhbW1sdW5nZW4uXCIpO1xuICAgICAgICAkaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2VpczJcbiAgICAgICAgICAgIC5hbGVydCgpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1pbmZvXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgICAgIC5zaG93KCk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNCc1dhZWhsZW5cIikub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDIwMDApO1xuXHR9XG59O1xuXG4vLyB3ZW5uIERzRmlsZSBnZcOkbmRlcnQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVEc0ZpbGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAodHlwZW9mIGV2ZW50LnRhcmdldC5maWxlc1swXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdC8vIHZvcmhhbmRlbmUgRGF0ZWkgd3VyZGUgZW50ZmVybnRcblx0XHQkKFwiI0RzVGFiZWxsZUVpZ2Vuc2NoYWZ0ZW5cIikuaGlkZSgpO1xuXHRcdCQoXCIjaW1wb3J0aWVyZW5fZHNfaWRzX2lkZW50aWZpemllcmVuX2hpbndlaXNfdGV4dFwiKS5oaWRlKCk7XG5cdFx0JChcIiNEc0ltcG9ydGllcmVuXCIpLmhpZGUoKTtcblx0XHQkKFwiI0RzRW50ZmVybmVuXCIpLmhpZGUoKTtcblx0fSBlbHNlIHtcbiAgICAgICAgdmFyIGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF0sXG4gICAgICAgICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgd2luZG93LmFkYi5kc0RhdGVuc8OkdHplID0gJC5jc3YudG9PYmplY3RzKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgd2luZG93LmFkYi5lcnN0ZWxsZVRhYmVsbGUod2luZG93LmFkYi5kc0RhdGVuc8OkdHplLCBcIkRzRmVsZGVyX2RpdlwiLCBcIkRzVGFiZWxsZUVpZ2Vuc2NoYWZ0ZW5cIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH1cbn07XG5cbi8vIHdlbm4gQnNGaWxlIGdlw6RuZGVydCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUJzRmlsZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICh0eXBlb2YgZXZlbnQudGFyZ2V0LmZpbGVzWzBdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Ly8gdm9yaGFuZGVuZSBEYXRlaSB3dXJkZSBlbnRmZXJudFxuXHRcdCQoXCIjQnNUYWJlbGxlRWlnZW5zY2hhZnRlblwiKS5oaWRlKCk7XG5cdFx0JChcIiNpbXBvcnRpZXJlbl9ic19pZHNfaWRlbnRpZml6aWVyZW5faGlud2Vpc190ZXh0XCIpLmhpZGUoKTtcblx0XHQkKFwiI0JzSW1wb3J0aWVyZW5cIikuaGlkZSgpO1xuXHRcdCQoXCIjQnNFbnRmZXJuZW5cIikuaGlkZSgpO1xuXHR9IGVsc2Uge1xuICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXSxcbiAgICAgICAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgd2luZG93LmFkYi5ic0RhdGVuc8OkdHplID0gJC5jc3YudG9PYmplY3RzKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgd2luZG93LmFkYi5lcnN0ZWxsZVRhYmVsbGUod2luZG93LmFkYi5ic0RhdGVuc8OkdHplLCBcIkJzRmVsZGVyX2RpdlwiLCBcIkJzVGFiZWxsZUVpZ2Vuc2NoYWZ0ZW5cIik7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH1cbn07XG5cbi8vIHdlbm4gYnRuX3Jlc2l6ZSBnZWtsaWNrdCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUJ0blJlc2l6ZUNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgJGJvZHkgPSAkKFwiYm9keVwiKTtcblx0JGJvZHkudG9nZ2xlQ2xhc3MoXCJmb3JjZS1tb2JpbGVcIik7XG5cdGlmICgkYm9keS5oYXNDbGFzcyhcImZvcmNlLW1vYmlsZVwiKSkge1xuXHRcdC8vIFNwYWx0ZW4gc2luZCB1bnRlcmVpbmFuZGVyLiBCYXVtIDkxcHggd2VuaWdlciBob2NoLCBkYW1pdCBGb3JtdWxhcmUgenVtIHJhdWZzY2hpZWJlbiBpbW1lciBlcnJlaWNodCB3ZXJkZW4ga8O2bm5lblxuXHRcdCQoXCIuYmF1bVwiKS5jc3MoXCJtYXgtaGVpZ2h0XCIsIHdpbmRvd0hlaWdodCAtIDI1Mik7XG5cdFx0Ly8gYnV0dG9uIHJlY2h0cyBhdXNyaWNodGVuXG5cdFx0JChcIiNidG5fcmVzaXplXCIpXG4gICAgICAgICAgICAuY3NzKFwibWFyZ2luLXJpZ2h0XCIsIFwiMHB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIiwgXCJpbiB6d2VpIFNwYWx0ZW4gYW56ZWlnZW5cIik7XG5cdH0gZWxzZSB7XG5cdFx0JChcIi5iYXVtXCIpLmNzcyhcIm1heC1oZWlnaHRcIiwgd2luZG93SGVpZ2h0IC0gMTYxKTtcblx0XHQvLyBidXR0b24gYW4gYW5kZXJlbiBTY2hhbHRmbMOkY2hlbiBhdXNyaWNodGVuXG5cdFx0JChcIiNidG5fcmVzaXplXCIpXG4gICAgICAgICAgICAuY3NzKFwibWFyZ2luLXJpZ2h0XCIsIFwiNnB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIiwgXCJnYW56ZSBCcmVpdGUgbnV0emVuXCIpO1xuXHR9XG59O1xuXG4vLyB3ZW5uIG1lbnVfYnRuIGdla2xpY2t0IHdpcmRcbi8vIE1lbnU6IExpbmtzIHp1IEdvb2dsZSBCaWxkZXIgdW5kIFdpa2lwZWRpYSBudXIgYWt0aXYgc2V0emVuLCB3ZW5uIEFydCBvZGVyIExlYmVuc3JhdW0gYW5nZXplaWd0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlTWVudUJ0bkNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKGxvY2FsU3RvcmFnZS5hcnRfaWQpIHtcblx0XHQkKFwiI0dvb2dsZUJpbGRlckxpbmtfbGlcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblx0XHQkKFwiI1dpa2lwZWRpYUxpbmtfbGlcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblx0fSBlbHNlIHtcblx0XHQkKFwiI0dvb2dsZUJpbGRlckxpbmtfbGlcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblx0XHQkKFwiI1dpa2lwZWRpYUxpbmtfbGlcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblx0fVxufTtcblxuLy8gd2VubiBkc19pbXBvcnRpZXJlbiBnZWtsaWNrdCB3aXJkXG4vLyB0ZXN0ZW4sIG9iIGRlciBCcm93c2VyIGRhcyBJbXBvcnRpZXJlbiB1bnRlcnN0w7x0enRcbi8vIHdlbm4gbmVpbiwgTWVsZHVuZyBicmluZ2VuIChtYWNodCBkaWUgYXVmZ2VydWZlbmUgRnVua3Rpb24pXG53aW5kb3cuYWRiLmhhbmRsZURzX0ltcG9ydGllcmVuQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZih3aW5kb3cuYWRiLmlzRmlsZUFQSUF2YWlsYWJsZSgpKSB7XG5cdFx0d2luZG93LmFkYi56ZWlnZUZvcm11bGFyKFwiaW1wb3J0aWVyZW5fZHNcIik7XG5cdFx0Ly8gSXN0IGRlciBVc2VyIG5vY2ggYW5nZW1lbGRldD8gV2VubiBqYTogQW5tZWxkdW5nIMO8YmVyc3ByaW5nZW5cblx0XHRpZiAod2luZG93LmFkYi5wcsO8ZmVBbm1lbGR1bmcoXCJkc1wiKSkge1xuXHRcdFx0JChcIiNpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9jb2xsYXBzZVwiKS5jb2xsYXBzZSgnc2hvdycpO1xuXHRcdH1cblx0fVxufTtcblxuLy8gd2VubiBic19pbXBvcnRpZXJlbiBnZWtsaWNrdCB3aXJkXG4vLyB0ZXN0ZW4sIG9iIGRlciBCcm93c2VyIGRhcyBJbXBvcnRpZXJlbiB1bnRlcnN0w7x0enRcbi8vIHdlbm4gbmVpbiwgTWVsZHVuZyBicmluZ2VuIChtYWNodCBkaWUgYXVmZ2VydWZlbmUgRnVua3Rpb24pXG53aW5kb3cuYWRiLmhhbmRsZUJzX0ltcG9ydGllcmVuQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZih3aW5kb3cuYWRiLmlzRmlsZUFQSUF2YWlsYWJsZSgpKSB7XG5cdFx0d2luZG93LmFkYi56ZWlnZUZvcm11bGFyKFwiaW1wb3J0aWVyZW5fYnNcIik7XG5cdFx0Ly8gSXN0IGRlciBVc2VyIG5vY2ggYW5nZW1lbGRldD8gV2VubiBqYTogQW5tZWxkdW5nIMO8YmVyc3ByaW5nZW5cblx0XHRpZiAod2luZG93LmFkYi5wcsO8ZmVBbm1lbGR1bmcoXCJic1wiKSkge1xuXHRcdFx0JChcIiNpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9jb2xsYXBzZVwiKS5jb2xsYXBzZSgnc2hvdycpO1xuXHRcdH1cblx0fVxufTtcblxud2luZG93LmFkYi5oYW5kbGVNZW51QWRtaW5DbGljayA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHdpbmRvdy5hZGIuemVpZ2VGb3JtdWxhcihcImFkbWluXCIpO1xufTtcblxud2luZG93LmFkYi5lcmfDpG56ZVBpbHplWmhnaXMgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQkKFwiI2FkbWluX3BpbHplX3poZ2lzX2VyZ8Okbnplbl9yw7xja21lbGR1bmdcIikuaHRtbChcIkRhdGVuIHdlcmRlbiBhbmFseXNpZXJ0Li4uXCIpO1xuXHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdCRkYi52aWV3KCdhcnRlbmRiL21hY3JvbXljZXRlcz9pbmNsdWRlX2RvY3M9dHJ1ZScsIHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHR2YXIgZHNfemhnaXMgPSB7fSxcblx0XHRcdFx0ZXJnw6RuenQgPSAwLFxuXHRcdFx0XHRmZWhsZXIgPSAwLFxuXHRcdFx0XHR6aGdpc19zY2hvbl9kYSA9IDA7XG5cdFx0XHRkc196aGdpcy5OYW1lID0gXCJaSCBHSVNcIjtcblx0XHRcdGRzX3poZ2lzLkJlc2NocmVpYnVuZyA9IFwiR0lTLUxheWVyIHVuZCBCZXRyYWNodHVuZ3NkaXN0YW56ZW4gZsO8ciBkYXMgQXJ0ZW5saXN0ZW50b29sLCBBcnRlbmdydXBwZW4gZsO8ciBFdkFCLCBpbSBLYW50b24gWsO8cmljaC4gRWlnZW5zY2hhZnRlbiBhbGxlciBBcnRlblwiO1xuXHRcdFx0ZHNfemhnaXMuRGF0ZW5zdGFuZCA9IFwiZGF1ZXJuZCBuYWNoZ2Vmw7xocnRcIjtcblx0XHRcdGRzX3poZ2lzLkxpbmsgPSBcImh0dHA6Ly93d3cubmF0dXJzY2h1dHouemguY2hcIjtcbiAgICAgICAgICAgIGRzX3poZ2lzW1wiaW1wb3J0aWVydCB2b25cIl0gPSBcImFsZXhAZ2FicmllbC1zb2Z0d2FyZS5jaFwiO1xuXHRcdFx0ZHNfemhnaXMuRWlnZW5zY2hhZnRlbiA9IHt9O1xuXHRcdFx0ZHNfemhnaXMuRWlnZW5zY2hhZnRlbltcIkdJUy1MYXllclwiXSA9IFwiUGlsemVcIjtcblx0XHRcdF8uZWFjaChkYXRhLnJvd3MsIGZ1bmN0aW9uKHJvdykge1xuXHRcdFx0XHR2YXIgcGlseiA9IHJvdy5kb2MsXG5cdFx0XHRcdFx0emhnaXNfaW5fZHM7XG5cdFx0XHRcdGlmICghcGlsei5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbikge1xuXHRcdFx0XHRcdHBpbHouRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR6aGdpc19pbl9kcyA9IF8uZmluZChwaWx6LkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuLCBmdW5jdGlvbihkcykge1xuXHRcdFx0XHRcdHJldHVybiBkcy5OYW1lID09PSBcIlpIIEdJU1wiO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gbnVyIGVyZ8Okbnplbiwgd2VubiBaSCBHSVMgbm9jaCBuaWNodCBleGlzdGllcnRcblx0XHRcdFx0aWYgKCF6aGdpc19pbl9kcykge1xuXHRcdFx0XHRcdHBpbHouRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4ucHVzaChkc196aGdpcyk7XG5cdFx0XHRcdFx0cGlsei5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiA9IF8uc29ydEJ5KHBpbHouRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGRzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZHMuTmFtZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkZGIuc2F2ZURvYyhwaWx6LCB7XG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0ZXJnw6RuenQgKys7XG5cdFx0XHRcdFx0XHRcdCQoXCIjYWRtaW5fcGlsemVfemhnaXNfZXJnw6RuemVuX3LDvGNrbWVsZHVuZ1wiKS5odG1sKFwiVG90YWw6IFwiICsgZGF0YS5yb3dzLmxlbmd0aCArIFwiLiBFcmfDpG56dDogXCIgKyBlcmfDpG56dCArIFwiLCBGZWhsZXI6IFwiICsgZmVobGVyICsgXCIsICdaSCBHSVMnIHNjaG9uIGVudGhhbHRlbjogXCIgKyB6aGdpc19zY2hvbl9kYSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRmZWhsZXIgKys7XG5cdFx0XHRcdFx0XHRcdCQoXCIjYWRtaW5fcGlsemVfemhnaXNfZXJnw6RuemVuX3LDvGNrbWVsZHVuZ1wiKS5odG1sKFwiVG90YWw6IFwiICsgZGF0YS5yb3dzLmxlbmd0aCArIFwiLiBFcmfDpG56dDogXCIgKyBlcmfDpG56dCArIFwiLCBGZWhsZXI6IFwiICsgZmVobGVyICsgXCIsICdaSCBHSVMnIHNjaG9uIGVudGhhbHRlbjogXCIgKyB6aGdpc19zY2hvbl9kYSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0emhnaXNfc2Nob25fZGEgKys7XG5cdFx0XHRcdFx0JChcIiNhZG1pbl9waWx6ZV96aGdpc19lcmfDpG56ZW5fcsO8Y2ttZWxkdW5nXCIpLmh0bWwoXCJUb3RhbDogXCIgKyBkYXRhLnJvd3MubGVuZ3RoICsgXCIuIEVyZ8Okbnp0OiBcIiArIGVyZ8Okbnp0ICsgXCIsIEZlaGxlcjogXCIgKyBmZWhsZXIgKyBcIiwgJ1pIIEdJUycgc2Nob24gZW50aGFsdGVuOiBcIiArIHpoZ2lzX3NjaG9uX2RhKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbndpbmRvdy5hZGIua29ycmlnaWVyZUFydHdlcnRuYW1lSW5GbG9yYSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG4gICAgJChcIiNhZG1pbl9rb3JyaWdpZXJlX2FydHdlcnRuYW1lX2luX2Zsb3JhX3LDvGNrbWVsZHVuZ1wiKS5odG1sKFwiRGF0ZW4gd2VyZGVuIGFuYWx5c2llcnQuLi5cIik7XG4gICAgdmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuICAgICRkYi52aWV3KCdhcnRlbmRiL2Zsb3JhP2luY2x1ZGVfZG9jcz10cnVlJywge1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB2YXIga29ycmlnaWVydCA9IDAsXG4gICAgICAgICAgICAgICAgZmVobGVyID0gMCxcbiAgICAgICAgICAgICAgICBzYXZlO1xuICAgICAgICAgICAgXy5lYWNoKGRhdGEucm93cywgZnVuY3Rpb24ocm93KSB7XG4gICAgICAgICAgICAgICAgdmFyIGFydCA9IHJvdy5kb2MsXG4gICAgICAgICAgICAgICAgICAgIGRzX2FydHdlcnQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGVuID0ge307XG4gICAgICAgICAgICAgICAgaWYgKGFydC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbikge1xuICAgICAgICAgICAgICAgICAgICBkc19hcnR3ZXJ0ID0gXy5maW5kKGFydC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiwgZnVuY3Rpb24oZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRzLk5hbWUgPT09IFwiWkggQXJ0d2VydCAoMTk5NSlcIjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKGRzX2FydHdlcnQgJiYgZHNfYXJ0d2VydC5FaWdlbnNjaGFmdGVuICYmIGRzX2FydHdlcnQuRWlnZW5zY2hhZnRlbltcIkFydHdlcnQgS1QgWkhcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRzX2FydHdlcnQgJiYgZHNfYXJ0d2VydC5FaWdlbnNjaGFmdGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wZW4gdW5kIG5ldSBhdWZiYXVlbiwgZGFtaXQgZGllIFJlaWhlbmZvbGdlIGRlciBrZXlzIGVyaGFsdGVuIGJsZWlidCAoaG9mZmVudGxpY2gpXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goZHNfYXJ0d2VydC5FaWdlbnNjaGFmdGVuLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJBcnR3ZXJ0IEtUIFpIXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gXCJBcnR3ZXJ0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlbltrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHNfYXJ0d2VydC5FaWdlbnNjaGFmdGVuID0gZGF0ZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRiLnNhdmVEb2MoYXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga29ycmlnaWVydCArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjYWRtaW5fa29ycmlnaWVyZV9hcnR3ZXJ0bmFtZV9pbl9mbG9yYV9yw7xja21lbGR1bmdcIikuaHRtbChcIlRvdGFsOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gS29ycmlnaWVydDogXCIgKyBrb3JyaWdpZXJ0ICsgXCIsIEZlaGxlcjogXCIgKyBmZWhsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWhsZXIgKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2FkbWluX2tvcnJpZ2llcmVfYXJ0d2VydG5hbWVfaW5fZmxvcmFfcsO8Y2ttZWxkdW5nXCIpLmh0bWwoXCJUb3RhbDogXCIgKyBkYXRhLnJvd3MubGVuZ3RoICsgXCIuIEtvcnJpZ2llcnQ6IFwiICsga29ycmlnaWVydCArIFwiLCBGZWhsZXI6IFwiICsgZmVobGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoa29ycmlnaWVydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQoXCIjYWRtaW5fa29ycmlnaWVyZV9hcnR3ZXJ0bmFtZV9pbl9mbG9yYV9yw7xja21lbGR1bmdcIikuaHRtbChcIkVzIGdpYnQgb2ZmZW5iYXIga2VpbmUgRmVsZGVyIG1laHIgbWl0IE5hbWVuICdBcnR3ZXJ0IEtUIFpIJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxud2luZG93LmFkYi5rb3JyaWdpZXJlRHNOYW1lRmxvcmFDaFJvdGVMaXN0ZTE5OTEgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIHZhciAkYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX2NoX3JvdGVfbGlzdGVfMTk5MV9yw7xja21lbGR1bmcgPSAkKFwiI2FkbWluX2tvcnJpZ2llcmVfZHNfbmFtZV9jaF9yb3RlX2xpc3RlXzE5OTFfcsO8Y2ttZWxkdW5nXCIpO1xuICAgICRhZG1pbl9rb3JyaWdpZXJlX2RzX25hbWVfY2hfcm90ZV9saXN0ZV8xOTkxX3LDvGNrbWVsZHVuZy5odG1sKFwiRGF0ZW4gd2VyZGVuIGFuYWx5c2llcnQuLi5cIik7XG4gICAgdmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuICAgICRkYi52aWV3KCdhcnRlbmRiL2Zsb3JhP2luY2x1ZGVfZG9jcz10cnVlJywge1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB2YXIga29ycmlnaWVydCA9IDAsXG4gICAgICAgICAgICAgICAgZmVobGVyID0gMCxcbiAgICAgICAgICAgICAgICBzYXZlO1xuICAgICAgICAgICAgXy5lYWNoKGRhdGEucm93cywgZnVuY3Rpb24ocm93KSB7XG4gICAgICAgICAgICAgICAgdmFyIGFydCA9IHJvdy5kb2MsXG4gICAgICAgICAgICAgICAgICAgIGRzO1xuICAgICAgICAgICAgICAgIGlmIChhcnQuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZHMgPSBfLmZpbmQoYXJ0LkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuLCBmdW5jdGlvbihkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRzLk5hbWUgPT09IFwiQ0ggUm90ZSBMaXN0ZSAoMTk5MSlcIjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHMuTmFtZSA9IFwiQ0ggUm90ZSBMaXN0ZW4gRmxvcmEgKDE5OTEpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZGIuc2F2ZURvYyhhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga29ycmlnaWVydCArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFkbWluX2tvcnJpZ2llcmVfZHNfbmFtZV9jaF9yb3RlX2xpc3RlXzE5OTFfcsO8Y2ttZWxkdW5nLmh0bWwoXCJGbG9yYWFydGVuOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gVW1iZW5hbm50OiBcIiArIGtvcnJpZ2llcnQgKyBcIiwgRmVobGVyOiBcIiArIGZlaGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlaGxlciArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFkbWluX2tvcnJpZ2llcmVfZHNfbmFtZV9jaF9yb3RlX2xpc3RlXzE5OTFfcsO8Y2ttZWxkdW5nLmh0bWwoXCJGbG9yYWFydGVuOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gVW1iZW5hbm50OiBcIiArIGtvcnJpZ2llcnQgKyBcIiwgRmVobGVyOiBcIiArIGZlaGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChrb3JyaWdpZXJ0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChcIiNhZG1pbl9rb3JyaWdpZXJlX2FydHdlcnRuYW1lX2luX2Zsb3JhX3LDvGNrbWVsZHVuZ1wiKS5odG1sKFwiRXMgZ2lidCBvZmZlbmJhciBrZWluZSBEYXRlbnNhbW1sdW5nZW4gbWVociBtaXQgTmFtZW4gJ0NIIFJvdGUgTGlzdGUgKDE5OTEpJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxud2luZG93LmFkYi5uZW5uZURzVW0gPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIHZhciAkYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX2NoX3LDvGNrbWVsZHVuZyA9ICQoXCIjYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX3LDvGNrbWVsZHVuZ1wiKSxcbiAgICAgICAgJGFkbWluX2tvcnJpZ2llcmVfZHNfbmFtZV9uYW1lX3ZvcmhlciA9ICQoXCIjYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX25hbWVfdm9yaGVyXCIpLFxuICAgICAgICAkYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX25hbWVfbmFjaGhlciA9ICQoXCIjYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX25hbWVfbmFjaGhlclwiKSxcbiAgICAgICAgbmFtZV92b3JoZXIgPSAkYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX25hbWVfdm9yaGVyLnZhbCgpLFxuICAgICAgICBuYW1lX25hY2hoZXIgPSAkYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX25hbWVfbmFjaGhlci52YWwoKTtcbiAgICBpZiAoIW5hbWVfdm9yaGVyKSB7XG4gICAgICAgICRhZG1pbl9rb3JyaWdpZXJlX2RzX25hbWVfY2hfcsO8Y2ttZWxkdW5nLmh0bWwoXCJCaXR0ZSBOYW1lIHZvcmhlciBlcmZhc3NlblwiKTtcbiAgICAgICAgJGFkbWluX2tvcnJpZ2llcmVfZHNfbmFtZV9uYW1lX3Zvcmhlci5mb2N1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbmFtZV9uYWNoaGVyKSB7XG4gICAgICAgICRhZG1pbl9rb3JyaWdpZXJlX2RzX25hbWVfY2hfcsO8Y2ttZWxkdW5nLmh0bWwoXCJCaXR0ZSBOYW1lIG5hY2hoZXIgZXJmYXNzZW5cIik7XG4gICAgICAgICRhZG1pbl9rb3JyaWdpZXJlX2RzX25hbWVfbmFtZV9uYWNoaGVyLmZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJGFkbWluX2tvcnJpZ2llcmVfZHNfbmFtZV9jaF9yw7xja21lbGR1bmcuaHRtbChcIkRhdGVuIHdlcmRlbiBhbmFseXNpZXJ0Li4uXCIpO1xuICAgIHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcbiAgICAkZGIudmlldygnYXJ0ZW5kYi9kc19ic19ndWlkP3N0YXJ0a2V5PVtcIicgKyBuYW1lX3ZvcmhlciArICdcIl0mZW5ka2V5PVtcIicgKyBuYW1lX3ZvcmhlciArICdcIix7fV0maW5jbHVkZV9kb2NzPXRydWUnLCB7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBrb3JyaWdpZXJ0ID0gMCxcbiAgICAgICAgICAgICAgICBmZWhsZXIgPSAwLFxuICAgICAgICAgICAgICAgIHNhdmU7XG4gICAgICAgICAgICBpZiAoZGF0YS5yb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRhZG1pbl9rb3JyaWdpZXJlX2RzX25hbWVfY2hfcsO8Y2ttZWxkdW5nLmh0bWwoXCJFcyBnaWJ0IGtlaW5lIERhdGVuc2FtbWx1bmcgbmFtZW5zIFwiICsgbmFtZV92b3JoZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uZWFjaChkYXRhLnJvd3MsIGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgIHZhciBhcnQgPSByb3cuZG9jLFxuICAgICAgICAgICAgICAgICAgICBkcyxcbiAgICAgICAgICAgICAgICAgICAgYnMsXG4gICAgICAgICAgICAgICAgICAgIHNhdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBEYXRlbnNhbW1sdW5nIG1pdCBkaWVzZW0gTmFtZW4gc3VjaGVuXG4gICAgICAgICAgICAgICAgaWYgKGFydC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiAmJiBhcnQuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkcyA9IF8uZmluZChhcnQuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGRzXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRzXy5OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRzXy5OYW1lID09PSBuYW1lX3ZvcmhlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHMuTmFtZSA9IG5hbWVfbmFjaGhlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEJlemllaHVuZ3NzYW1tbHVuZyBtaXQgZGllc2VtIE5hbWVuIHN1Y2hlblxuICAgICAgICAgICAgICAgIGlmIChhcnQuQmV6aWVodW5nc3NhbW1sdW5nZW4gJiYgYXJ0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnMgPSBfLmZpbmQoYXJ0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLCBmdW5jdGlvbihkc18pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkc18uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkc18uTmFtZSA9PT0gbmFtZV92b3JoZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJzLk5hbWUgPSBuYW1lX25hY2hoZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEYXRlbnNhdHogc3BlaWNoZXJuLCB3ZW5uIG7DtnRpZ1xuICAgICAgICAgICAgICAgIGlmIChzYXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICRkYi5zYXZlRG9jKGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga29ycmlnaWVydCArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX2NoX3LDvGNrbWVsZHVuZy5odG1sKFwiQXJ0ZW4gbWl0IGRpZXNlciBEYXRlbnNhbW1sdW5nOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gVW1iZW5hbm50OiBcIiArIGtvcnJpZ2llcnQgKyBcIiwgRmVobGVyOiBcIiArIGZlaGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlaGxlciArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYWRtaW5fa29ycmlnaWVyZV9kc19uYW1lX2NoX3LDvGNrbWVsZHVuZy5odG1sKFwiQXJ0ZW4gbWl0IGRpZXNlciBEYXRlbnNhbW1sdW5nOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gVW1iZW5hbm50OiBcIiArIGtvcnJpZ2llcnQgKyBcIiwgRmVobGVyOiBcIiArIGZlaGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGtvcnJpZ2llcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKFwiI2FkbWluX2tvcnJpZ2llcmVfYXJ0d2VydG5hbWVfaW5fZmxvcmFfcsO8Y2ttZWxkdW5nXCIpLmh0bWwoXCJFcyBnaWJ0IG9mZmVuYmFyIGtlaW5lIERhdGVuc2FtbWx1bmdlbiBtZWhyIG1pdCBOYW1lbiAnXCIgKyBuYW1lX3ZvcmhlciArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxud2luZG93LmFkYi5iYXVlRHNadUVpZ2Vuc2NoYWZ0ZW5VbSA9IGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgJGFkbWluX2JhdWVfZHNfenVfZWlnZW5zY2hhZnRlbl91bV9yw7xja21lbGR1bmcgPSAkKFwiI2FkbWluX2JhdWVfZHNfenVfZWlnZW5zY2hhZnRlbl91bV9yw7xja21lbGR1bmdcIiksXG4gICAgICAgICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuICAgICRhZG1pbl9iYXVlX2RzX3p1X2VpZ2Vuc2NoYWZ0ZW5fdW1fcsO8Y2ttZWxkdW5nLmh0bWwoXCJEYXRlbiB3ZXJkZW4gYW5hbHlzaWVydC4uLlwiKTtcbiAgICAkZGIudmlldygnYXJ0ZW5kYi9hbGxfZG9jcz9pbmNsdWRlX2RvY3M9dHJ1ZScsIHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgdmFyIGtvcnJpZ2llcnQgPSAwLFxuICAgICAgICAgICAgICAgIGZlaGxlciA9IDAsXG4gICAgICAgICAgICAgICAgc2F2ZTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJGFkbWluX2JhdWVfZHNfenVfZWlnZW5zY2hhZnRlbl91bV9yw7xja21lbGR1bmcuaHRtbChcIktlaW5lIERhdGVuIGVyaGFsdGVuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uZWFjaChkYXRhLnJvd3MsIGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgIHZhciBhcnQgPSByb3cuZG9jLFxuICAgICAgICAgICAgICAgICAgICBkYXRlbnNhbW1sdW5nZW4sXG4gICAgICAgICAgICAgICAgICAgIGJlemllaHVuZ3NzYW1tbHVuZ2VuLFxuICAgICAgICAgICAgICAgICAgICBkc19kYXRlbixcbiAgICAgICAgICAgICAgICAgICAgdGF4X2RhdGVuLFxuICAgICAgICAgICAgICAgICAgICBzYXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gRGF0ZW5zYW1tbHVuZ2VuIHVtYmVuZW5uZW5cbiAgICAgICAgICAgICAgICAvLyBkcyB1bmQgYnMgZW50ZmVybmVuLCBkYW5hY2ggaW4gZGVyIHJpY2h0aWdlbiBSZWloZW5mb2xnZSBoaW56dWbDvGdlblxuICAgICAgICAgICAgICAgIC8vIGRhbWl0IGRpZSBSZWloZW5mb2xnZSBiZXdhaHJ0IGJsZWlidFxuICAgICAgICAgICAgICAgIGlmIChhcnQuVGF4b25vbWllICYmIGFydC5UYXhvbm9taWUuRGF0ZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGF4X2RhdGVuID0gYXJ0LlRheG9ub21pZS5EYXRlbjtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFydC5UYXhvbm9taWUuRGF0ZW47XG4gICAgICAgICAgICAgICAgICAgIGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbiA9IHRheF9kYXRlbjtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhcnQuRGF0ZW5zYW1tbHVuZ2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVuc2FtbWx1bmdlbiA9IGFydC5EYXRlbnNhbW1sdW5nZW47XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChkYXRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHMuRGF0ZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc19kYXRlbiA9IGRzLkRhdGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkcy5EYXRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcy5FaWdlbnNjaGFmdGVuID0gZHNfZGF0ZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXJ0LkRhdGVuc2FtbWx1bmdlbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFydC5CZXppZWh1bmdzc2FtbWx1bmdlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmV6aWVodW5nc3NhbW1sdW5nZW4gPSBhcnQuQmV6aWVodW5nc3NhbW1sdW5nZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXJ0LkJlemllaHVuZ3NzYW1tbHVuZ2VuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmV6aWVodW5nc3NhbW1sdW5nZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnQuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gPSBkYXRlbnNhbW1sdW5nZW47XG4gICAgICAgICAgICAgICAgICAgIGFydC5CZXppZWh1bmdzc2FtbWx1bmdlbiA9IGJlemllaHVuZ3NzYW1tbHVuZ2VuO1xuICAgICAgICAgICAgICAgICAgICBzYXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNhdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGRiLnNhdmVEb2MoYXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrb3JyaWdpZXJ0ICsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhZG1pbl9iYXVlX2RzX3p1X2VpZ2Vuc2NoYWZ0ZW5fdW1fcsO8Y2ttZWxkdW5nLmh0bWwoXCJBbnphaGwgRG9rdW1lbnRlIGluIERCOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gVW1iZW5hbm50OiBcIiArIGtvcnJpZ2llcnQgKyBcIiwgRmVobGVyOiBcIiArIGZlaGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlaGxlciArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYWRtaW5fYmF1ZV9kc196dV9laWdlbnNjaGFmdGVuX3VtX3LDvGNrbWVsZHVuZy5odG1sKFwiQW56YWhsIERva3VtZW50ZSBpbiBEQjogXCIgKyBkYXRhLnJvd3MubGVuZ3RoICsgXCIuIFVtYmVuYW5udDogXCIgKyBrb3JyaWdpZXJ0ICsgXCIsIEZlaGxlcjogXCIgKyBmZWhsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGtvcnJpZ2llcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAkYWRtaW5fYmF1ZV9kc196dV9laWdlbnNjaGFmdGVuX3VtX3LDvGNrbWVsZHVuZy5odG1sKFwiRXMgZ2lidCBvZmZlbmJhciBrZWluZSBEYXRlbnNhbW1sdW5nZW4gbWVociwgZGllIHVtYmVuYW5udCB3ZXJkZW4gbcO8c3NlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyp3aW5kb3cuYWRiLmJhdWVEc1p1RWlnZW5zY2hhZnRlblVtID0gZnVuY3Rpb24oKSB7XG4gJ3VzZSBzdHJpY3QnO1xuIHZhciAkYWRtaW5fYmF1ZV9kc196dV9laWdlbnNjaGFmdGVuX3VtX3LDvGNrbWVsZHVuZyA9ICQoXCIjYWRtaW5fYmF1ZV9kc196dV9laWdlbnNjaGFmdGVuX3VtX3LDvGNrbWVsZHVuZ1wiKSxcbiAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcbiAkYWRtaW5fYmF1ZV9kc196dV9laWdlbnNjaGFmdGVuX3VtX3LDvGNrbWVsZHVuZy5odG1sKFwiRGF0ZW4gd2VyZGVuIGFuYWx5c2llcnQuLi5cIik7XG4gLy8kZGIudmlldygnYXJ0ZW5kYi9hbGxfZG9jcz9pbmNsdWRlX2RvY3M9dHJ1ZScsIHtcbiAkZGIudmlldygnYXJ0ZW5kYi9hbGxfZG9jcycsIHtcbiBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gdmFyIGtvcnJpZ2llcnQgPSAwLFxuIGZlaGxlciA9IDAsXG4gc2F2ZTtcbiBpZiAoZGF0YS5yb3dzLmxlbmd0aCA9PT0gMCkge1xuICRhZG1pbl9iYXVlX2RzX3p1X2VpZ2Vuc2NoYWZ0ZW5fdW1fcsO8Y2ttZWxkdW5nLmh0bWwoXCJLZWluZSBEYXRlbiBlcmhhbHRlblwiKTtcbiByZXR1cm47XG4gfVxuIF8uZWFjaChkYXRhLnJvd3MsIGZ1bmN0aW9uKHJvdykge1xuICRkYi5vcGVuRG9jKHJvdy5rZXksIHtcbiBzdWNjZXNzOiBmdW5jdGlvbihhcnQpIHtcbiB2YXIgZGF0ZW5zYW1tbHVuZ2VuLFxuIGJlemllaHVuZ3NzYW1tbHVuZ2VuLFxuIGRzX2RhdGVuLFxuIHRheF9kYXRlbixcbiBzYXZlID0gZmFsc2U7XG4gLy8gRGF0ZW5zYW1tbHVuZ2VuIHVtYmVuZW5uZW5cbiAvLyBkcyB1bmQgYnMgZW50ZmVybmVuLCBkYW5hY2ggaW4gZGVyIHJpY2h0aWdlbiBSZWloZW5mb2xnZSBoaW56dWbDvGdlblxuIC8vIGRhbWl0IGRpZSBSZWloZW5mb2xnZSBiZXdhaHJ0IGJsZWlidFxuIGlmIChhcnQuVGF4b25vbWllICYmIGFydC5UYXhvbm9taWUuRGF0ZW4pIHtcbiB0YXhfZGF0ZW4gPSBhcnQuVGF4b25vbWllLkRhdGVuO1xuIGRlbGV0ZSBhcnQuVGF4b25vbWllLkRhdGVuO1xuIGFydC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbiA9IHRheF9kYXRlbjtcbiBzYXZlID0gdHJ1ZTtcbiB9XG4gaWYgKGFydC5EYXRlbnNhbW1sdW5nZW4pIHtcbiBkYXRlbnNhbW1sdW5nZW4gPSBhcnQuRGF0ZW5zYW1tbHVuZ2VuO1xuIF8uZWFjaChkYXRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGRzKSB7XG4gaWYgKGRzLkRhdGVuKSB7XG4gZHNfZGF0ZW4gPSBkcy5EYXRlbjtcbiBkZWxldGUgZHMuRGF0ZW47XG4gZHMuRWlnZW5zY2hhZnRlbiA9IGRzX2RhdGVuO1xuIH1cbiB9KTtcbiBkZWxldGUgYXJ0LkRhdGVuc2FtbWx1bmdlbjtcbiBpZiAoYXJ0LkJlemllaHVuZ3NzYW1tbHVuZ2VuKSB7XG4gYmV6aWVodW5nc3NhbW1sdW5nZW4gPSBhcnQuQmV6aWVodW5nc3NhbW1sdW5nZW47XG4gZGVsZXRlIGFydC5CZXppZWh1bmdzc2FtbWx1bmdlbjtcbiB9IGVsc2Uge1xuIGJlemllaHVuZ3NzYW1tbHVuZ2VuID0ge307XG4gfVxuIGFydC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiA9IGRhdGVuc2FtbWx1bmdlbjtcbiBhcnQuQmV6aWVodW5nc3NhbW1sdW5nZW4gPSBiZXppZWh1bmdzc2FtbWx1bmdlbjtcbiBzYXZlID0gdHJ1ZTtcbiB9XG4gaWYgKHNhdmUpIHtcbiAkZGIuc2F2ZURvYyhhcnQsIHtcbiBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiBrb3JyaWdpZXJ0ICsrO1xuICRhZG1pbl9iYXVlX2RzX3p1X2VpZ2Vuc2NoYWZ0ZW5fdW1fcsO8Y2ttZWxkdW5nLmh0bWwoXCJBbnphaGwgRG9rdW1lbnRlIGluIERCOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gVW1iZW5hbm50OiBcIiArIGtvcnJpZ2llcnQgKyBcIiwgRmVobGVyOiBcIiArIGZlaGxlcik7XG4gfSxcbiBlcnJvcjogZnVuY3Rpb24oKSB7XG4gZmVobGVyICsrO1xuICRhZG1pbl9iYXVlX2RzX3p1X2VpZ2Vuc2NoYWZ0ZW5fdW1fcsO8Y2ttZWxkdW5nLmh0bWwoXCJBbnphaGwgRG9rdW1lbnRlIGluIERCOiBcIiArIGRhdGEucm93cy5sZW5ndGggKyBcIi4gVW1iZW5hbm50OiBcIiArIGtvcnJpZ2llcnQgKyBcIiwgRmVobGVyOiBcIiArIGZlaGxlcik7XG4gfVxuIH0pO1xuIH1cbiB9LFxuIGVycm9yOiBmdW5jdGlvbigpIHtcbiBmZWhsZXIgKys7XG4gJGFkbWluX2JhdWVfZHNfenVfZWlnZW5zY2hhZnRlbl91bV9yw7xja21lbGR1bmcuaHRtbChcIkFuemFobCBEb2t1bWVudGUgaW4gREI6IFwiICsgZGF0YS5yb3dzLmxlbmd0aCArIFwiLiBVbWJlbmFubnQ6IFwiICsga29ycmlnaWVydCArIFwiLCBGZWhsZXI6IFwiICsgZmVobGVyKTtcbiB9XG4gfSk7XG5cbiB9KTtcbiBpZiAoa29ycmlnaWVydCA9PT0gMCkge1xuICRhZG1pbl9iYXVlX2RzX3p1X2VpZ2Vuc2NoYWZ0ZW5fdW1fcsO8Y2ttZWxkdW5nLmh0bWwoXCJFcyBnaWJ0IG9mZmVuYmFyIGtlaW5lIERhdGVuc2FtbWx1bmdlbiBtZWhyLCBkaWUgdW1iZW5hbm50IHdlcmRlbiBtw7xzc2VuXCIpO1xuIH1cbiB9XG4gfSk7XG4gfTsqL1xuXG4vLyB3ZW5uIGltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2NvbGxhcHNlIGdlw7ZmZm5ldCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUltcG9ydGllcmVuRHNEc0Jlc2NocmVpYmVuQ29sbGFwc2VTaG93biA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIG1pdGdlYmVuLCB3b2hlciBkaWUgQW5mcmFnZSBrb21tdCwgd2VpbCBldi4gYW5nZW1lbGRldCB3ZXJkZW4gbXVzc1xuXHR3aW5kb3cuYWRiLmJlcmVpdGVJbXBvcnRpZXJlbl9kc19iZXNjaHJlaWJlblZvcihcImRzXCIpO1xuXHQkKFwiI0RzSW1wb3J0aWVydFZvblwiKS52YWwobG9jYWxTdG9yYWdlLkVtYWlsKTtcbn07XG5cbi8vIHdlbm4gaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5fY29sbGFwc2UgZ2XDtmZmbmV0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlSW1wb3J0aWVyZW5Cc0RzQmVzY2hyZWliZW5Db2xsYXBzZVNob3duID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gbWl0Z2ViZW4sIHdvaGVyIGRpZSBBbmZyYWdlIGtvbW10LCB3ZWlsIGV2LiBhbmdlbWVsZGV0IHdlcmRlbiBtdXNzXG5cdHdpbmRvdy5hZGIuYmVyZWl0ZUltcG9ydGllcmVuX2JzX2Jlc2NocmVpYmVuVm9yKFwiYnNcIik7XG5cdCQoXCIjQnNJbXBvcnRpZXJ0Vm9uXCIpLnZhbChsb2NhbFN0b3JhZ2UuRW1haWwpO1xufTtcblxuLy8gd2VubiBpbXBvcnRpZXJlbl9kc19kYXRlbl91cGxvYWRlbl9jb2xsYXBzZSBnZcO2ZmZuZXQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVJbXBvcnRpZXJlbkRzRGF0ZW5VcGxvYWRlbkNvbGxhcHNlU2hvd24gPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAoIXdpbmRvdy5hZGIucHLDvGZlQW5tZWxkdW5nKFwiZHNcIikpIHtcblx0XHQkKHRoaXMpLmNvbGxhcHNlKCdoaWRlJyk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnI0RzRmlsZScpLmZpbGV1cGxvYWQoKTtcblx0fVxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2ltcG9ydGllcmVuX2RzX2RhdGVuX3VwbG9hZGVuX2NvbGxhcHNlXCIpLm9mZnNldCgpLnRvcFxuICAgIH0sIDIwMDApO1xufTtcblxuLy8gd2VubiBpbXBvcnRpZXJlbl9ic19kYXRlbl91cGxvYWRlbl9jb2xsYXBzZSBnZcO2ZmZuZXQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVJbXBvcnRpZXJlbkJzRGF0ZW5VcGxhZGVuQ29sbGFwc2VTaG93biA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICghd2luZG93LmFkYi5wcsO8ZmVBbm1lbGR1bmcoXCJic1wiKSkge1xuXHRcdCQodGhpcykuY29sbGFwc2UoJ2hpZGUnKTtcblx0fSBlbHNlIHtcblx0XHQkKCcjQnNGaWxlJykuZmlsZXVwbG9hZCgpO1xuXHR9XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoXCIjaW1wb3J0aWVyZW5fYnNfZGF0ZW5fdXBsb2FkZW5fY29sbGFwc2VcIikub2Zmc2V0KCkudG9wXG4gICAgfSwgMjAwMCk7XG59O1xuXG4vLyB3ZW5uIGltcG9ydGllcmVuX2RzX2lkc19pZGVudGlmaXppZXJlbl9jb2xsYXBzZSBnZcO2ZmZuZXQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVJbXBvcnRpZXJlbkRzSWRzSWRlbnRpZml6aWVyZW5Db2xsYXBzZVNob3duID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKCF3aW5kb3cuYWRiLnByw7xmZUFubWVsZHVuZyhcImRzXCIpKSB7XG5cdFx0JCh0aGlzKS5jb2xsYXBzZSgnaGlkZScpO1xuXHR9XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoXCIjaW1wb3J0aWVyZW5fZHNfaWRzX2lkZW50aWZpemllcmVuX2NvbGxhcHNlXCIpLm9mZnNldCgpLnRvcFxuICAgIH0sIDIwMDApO1xufTtcblxuLy8gd2VubiBpbXBvcnRpZXJlbl9ic19pZHNfaWRlbnRpZml6aWVyZW5fY29sbGFwc2UgZ2XDtmZmbmV0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlSW1wb3J0aWVyZW5Cc0lkc0lkZW50aWZpemllcmVuQ29sbGFwc2VTaG93biA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICghd2luZG93LmFkYi5wcsO8ZmVBbm1lbGR1bmcoXCJic1wiKSkge1xuXHRcdCQodGhpcykuY29sbGFwc2UoJ2hpZGUnKTtcblx0fVxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2ltcG9ydGllcmVuX2JzX2lkc19pZGVudGlmaXppZXJlbl9jb2xsYXBzZVwiKS5vZmZzZXQoKS50b3BcbiAgICB9LCAyMDAwKTtcbn07XG5cbi8vIHdlbm4gaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5fY29sbGFwc2UgZ2XDtmZmbmV0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlSW1wb3J0aWVyZW5Ec0ltcG9ydEF1c2bDvGhyZW5Db2xsYXBzZVNob3duID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKCF3aW5kb3cuYWRiLnByw7xmZUFubWVsZHVuZyhcImRzXCIpKSB7XG5cdFx0JCh0aGlzKS5jb2xsYXBzZSgnaGlkZScpO1xuXHR9XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoXCIjaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5fY29sbGFwc2VcIikub2Zmc2V0KCkudG9wXG4gICAgfSwgMjAwMCk7XG59O1xuXG4vLyB3ZW5uIGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2NvbGxhcHNlIGdlw7ZmZm5ldCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUltcG9ydGllcmVuQnNJbXBvcnRBdXNmw7xocmVuQ29sbGFwc2VTaG93biA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICghd2luZG93LmFkYi5wcsO8ZmVBbm1lbGR1bmcoXCJic1wiKSkge1xuXHRcdCQodGhpcykuY29sbGFwc2UoJ2hpZGUnKTtcblx0fVxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2ltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2NvbGxhcHNlXCIpLm9mZnNldCgpLnRvcFxuICAgIH0sIDIwMDApO1xufTtcblxuLy8gd2VubiBEc1fDpGhsZW4gZ2XDpG5kZXJ0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlRHNXw6RobGVuQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGRzX25hbWUgPSB0aGlzLnZhbHVlLFxuXHRcdHfDpGhsYmFyID0gZmFsc2UsXG4gICAgICAgICREc0FuekRzID0gJChcIiNEc0FuekRzXCIpLFxuICAgICAgICAkRHNBbnpEc19sYWJlbCA9ICQoXCIjRHNBbnpEc19sYWJlbFwiKSxcbiAgICAgICAgJERzTmFtZSA9ICQoXCIjRHNOYW1lXCIpLFxuICAgICAgICAkaW1wb3J0aWVyZW5fZHNfZHNfYmVzY2hyZWliZW5fZXJyb3IgPSAkKFwiI2ltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2Vycm9yXCIpO1xuICAgIC8vIGFsbGbDpGxsaWdlbiBBbGVydCBzY2hsaWVzc2VuXG4gICAgJGltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2Vycm9yXG4gICAgICAgIC5hbGVydCgpXG4gICAgICAgIC5oaWRlKCk7XG4gICAgLy8gd8OkaGxiYXIgc2V0emVuXG4gICAgLy8gd8OkaGxlbiBrYW5uIG1hbiBudXIsIHdhcyBtYW4gc2VsYmVyIGltcG9ydGllcnQgaGF0IC0gb2RlciBhZG1pbiBpc3RcbiAgICBpZiAoJChcIiNcIit0aGlzLmlkK1wiIG9wdGlvbjpzZWxlY3RlZFwiKS5hdHRyKFwid2FlaGxiYXJcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIHfDpGhsYmFyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKEJvb2xlYW4obG9jYWxTdG9yYWdlLmFkbWluKSkge1xuICAgICAgICB3w6RobGJhciA9IHRydWU7XG4gICAgfVxuXHRpZiAod8OkaGxiYXIpIHtcblx0XHQvLyB6dWVyc3QgYWxsZSBGZWxkZXIgbGVlcmVuXG5cdFx0JCgnI2ltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2NvbGxhcHNlIHRleHRhcmVhLCAjaW1wb3J0aWVyZW5fZHNfZHNfYmVzY2hyZWliZW5fY29sbGFwc2UgaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS52YWwoJycpO1xuXHRcdH0pO1xuXHRcdCREc0FuekRzLmh0bWwoXCJcIik7XG5cdFx0JERzQW56RHNfbGFiZWwuaHRtbChcIlwiKTtcblx0XHRpZiAoZHNfbmFtZSkge1xuICAgICAgICAgICAgXy5lYWNoKHdpbmRvdy5hZGIuZHNfdm9uX29iamVrdGVuLnJvd3MsIGZ1bmN0aW9uKGRzX3Zvbl9vYmpla3Rlbl9yb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoZHNfdm9uX29iamVrdGVuX3Jvdy5rZXlbMV0gPT09IGRzX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJERzTmFtZS52YWwoZHNfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChkc192b25fb2JqZWt0ZW5fcm93LmtleVs0XSwgZnVuY3Rpb24oZmVsZHdlcnQsIGZlbGRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVsZG5hbWUgPT09IFwiVXJzcHJ1bmdzZGF0ZW5zYW1tbHVuZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNEc1Vyc3BydW5nc0RzXCIpLnZhbChmZWxkd2VydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlbGRuYW1lICE9PSBcImltcG9ydGllcnQgdm9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0RzXCIgKyBmZWxkbmFtZSkudmFsKGZlbGR3ZXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkc192b25fb2JqZWt0ZW5fcm93LmtleVsyXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNEc1p1c2FtbWVuZmFzc2VuZFwiKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGZWxkIGbDvHIgVXJzcHJ1bmdzLURTIGFuemVpZ2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0RzVXJzcHJ1bmdzRHNfZGl2XCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpY2hlcnN0ZWxsZW4sIGRhc3MgZGVyIEhha2VuIGltIEZlbGQgZW50ZmVybnQgd2lyZCwgd2VubiBuYWNoIGRlciB6dXNhbW1lbmZhc3NlbmRlbiBlaW5lIGFuZGVyZSBEUyBnZXfDpGhsdCB3aXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0RzWnVzYW1tZW5mYXNzZW5kXCIpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1bmQgRmVsZCBmw7xyIFVyc3BydW5ncy1EUyB2ZXJzdGVja2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0RzVXJzcHJ1bmdzRHNfZGl2XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB3ZW5uIGRpZSBkcy9icyBrZWluIFwiaW1wb3J0aWVydCB2b25cIiBoYXQgaXN0IGRlciBXZXJ0IG51bGxcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVyaGluZGVybiwgZGFzcyBudWxsIGFuZ2V6ZWlndCB3aXJkXG4gICAgICAgICAgICAgICAgICAgIGlmIChkc192b25fb2JqZWt0ZW5fcm93LmtleVszXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNEc0ltcG9ydGllcnRWb25cIikudmFsKGRzX3Zvbl9vYmpla3Rlbl9yb3cua2V5WzNdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjRHNJbXBvcnRpZXJ0Vm9uXCIpLnZhbChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkRHNBbnpEc19sYWJlbC5odG1sKFwiQW56YWhsIEFydGVuL0xlYmVuc3LDpHVtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJERzQW56RHMuaHRtbChkc192b25fb2JqZWt0ZW5fcm93LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGFmw7xyIHNvcmdlbiwgZGFzcyB0ZXh0YXJlYXMgZ2VudWcgZ3Jvc3Mgc2luZFxuICAgICAgICAgICAgICAgICAgICAkKCcjaW1wb3J0aWVyZW5fZHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGIuZml0VGV4dGFyZWFUb0NvbnRlbnQodGhpcywgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJERzTmFtZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsw7ZzY2hlbi1TY2hhbHRmbMOkY2hlIGVpbmJsZW5kZW5cbiAgICAgICAgICAgICAgICAkKFwiI0RzTG9lc2NoZW5cIikuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGzDtnNjaGVuLVNjaGFsdGZsw6RjaGUgYXVzYmxlbmRlblxuXHRcdFx0JChcIiNEc0xvZXNjaGVuXCIpLmhpZGUoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG4gICAgICAgIC8vIG1lbGRlbiwgZGFzcyBkaWVzZSBCUyBuaWNodCBiZWFyYmVpdGV0IHdlcmRlbiBrYW5uXG4gICAgICAgICQoXCIjaW1wb3J0aWVyZW5fZHNfZHNfYmVzY2hyZWliZW5fZXJyb3JfdGV4dFwiKVxuICAgICAgICAgICAgLmh0bWwoXCJTaWUga8O2bm5lbiBudXIgRGF0ZW5zYW1tbHVuZ2VuIHZlcsOkbmRlcm4sIGRpZSBTaWUgc2VsYmVyIGltcG9ydGllcnQgaGFiZW4uPGJyPkF1c25haG1lOiBadXNhbW1lbmZhc3NlbmRlIERhdGVuc2FtbWx1bmdlbi5cIik7XG4gICAgICAgICRpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9lcnJvclxuICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgIC5zaG93KCk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNEc1dhZWhsZW5cIikub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDIwMDApO1xuXHR9XG59O1xuXG4vLyB3ZW5uIERzTmFtZSBnZcOkbmRlcnQgd2lyZFxuLy8gc3VjaGVuLCBvYiBzY2hvbiBlaW5lIERhdGVuc2FtbWx1bmcgbWl0IGRpZXNlbSBOYW1lbiBleGlzdGllcnRcbi8vIHVuZCBzaWUgdm9uIGplbWFuZCBhbmRlcmVtIGltcG9ydGllcnQgd3VyZGVcbi8vIHVuZCBzaWUgbmljaHQgenVzYW1tZW5mYXNzZW5kIGlzdFxud2luZG93LmFkYi5oYW5kbGVEc05hbWVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0ZHNfa2V5ID0gXy5maW5kKHdpbmRvdy5hZGIuZHNfbmFtZW5fZWluZGV1dGlnLCBmdW5jdGlvbihrZXkpIHtcblx0XHRcdHJldHVybiBrZXlbMF0gPT09IHRoYXQudmFsdWUgJiYga2V5WzJdICE9PSBsb2NhbFN0b3JhZ2UuRW1haWwgJiYgIWtleVsxXTtcblx0XHR9KSxcbiAgICAgICAgJGltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXMyID0gJChcIiNpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlwiKTtcblx0aWYgKGRzX2tleSkge1xuXHRcdCRpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9oaW53ZWlzMlxuICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgIC5zaG93KClcblx0XHQgICAgLmh0bWwoJ0VzIGV4aXN0aWVydCBzY2hvbiBlaW5lIGdsZWljaCBoZWlzc2VuZGUgdW5kIG5pY2h0IHp1c2FtbWVuZmFzc2VuZGUgRGF0ZW5zYW1tbHVuZy48YnI+U2llIHd1cmRlIHZvbiBqZW1hbmQgYW5kZXJlbSBpbXBvcnRpZXJ0LiBEYWhlciBtw7xzc2VuIFNpZSBlaW5lbiBhbmRlcmVuIE5hbWVuIHZlcndlbmRlbi4nKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JGltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXMyXG4gICAgICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgICAgICAuaGlkZSgpO1xuXHRcdH0sIDMwMDAwKTtcblx0XHQkKFwiI0RzTmFtZVwiKVxuICAgICAgICAgICAgLnZhbChcIlwiKVxuXHRcdCAgICAuZm9jdXMoKTtcblx0fSBlbHNlIHtcblx0XHQkaW1wb3J0aWVyZW5fZHNfZHNfYmVzY2hyZWliZW5faGlud2VpczJcbiAgICAgICAgICAgIC5hbGVydCgpXG4gICAgICAgICAgICAuaGlkZSgpO1xuXHR9XG59O1xuXG4vLyB3ZW5uIERzTMO2c2NoZW4gZ2VrbGlja3Qgd2lyZFxud2luZG93LmFkYi5oYW5kbGVEc0zDtnNjaGVuQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBSw7xja21lbGR1bmcgYW56ZWlnZW5cbiAgICAkKFwiI2ltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNcIilcbiAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgLnNob3coKVxuXHQgICAgLmh0bWwoXCJCaXR0ZSB3YXJ0ZW46IERpZSBEYXRlbnNhbW1sdW5nIHdpcmQgZW50ZmVybnQuLi5cIik7XG4gICAgd2luZG93LmFkYi5lbnRmZXJuZURhdGVuc2FtbWx1bmdBdXNBbGxlbk9iamVrdGVuKCQoXCIjRHNOYW1lXCIpLnZhbCgpKTtcbn07XG5cbi8vIHdlbm4gQnNMb2VzY2hlbiBnZWtsaWNrdCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUJzTMO2c2NoZW5DbGljayA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIFLDvGNrbWVsZHVuZyBhbnplaWdlblxuXHQkKFwiI2ltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNcIilcbiAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtaW5mb1wiKVxuICAgICAgICAuc2hvdygpO1xuICAgICQoXCIjaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2Vpc190ZXh0XCIpLmh0bWwoXCJCaXR0ZSB3YXJ0ZW46IERpZSBCZXppZWh1bmdzc2FtbWx1bmcgd2lyZCBlbnRmZXJudC4uLlwiKTtcbiAgICB3aW5kb3cuYWRiLmVudGZlcm5lQmV6aWVodW5nc3NhbW1sdW5nQXVzQWxsZW5PYmpla3RlbigkKFwiI0JzTmFtZVwiKS52YWwoKSk7XG59O1xuXG4vLyB3ZW5uIGV4cG9ydGllcmVuIGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlRXhwb3J0aWVyZW5DbGljayA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHdpbmRvdy5hZGIuemVpZ2VGb3JtdWxhcihcImV4cG9ydFwiKTtcblx0ZGVsZXRlIHdpbmRvdy5hZGIuZXhwb3J0aWVyZW5fb2JqZWt0ZTtcbn07XG5cbi8vIHdlbm4gZXhwb3J0aWVyZW5fYWx0IGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlRXhwb3J0aWVyZW5BbHRDbGljayA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHdpbmRvdy5vcGVuKFwiX2xpc3QvZXhwb3J0X2FsdF9taXRfc3lub255bWVuX3N0YW5kYXJkZmVsZGVyL2FsbF9kb2NzX21pdF9zeW5vbnltZW5fZnVlcl9hbHQ/aW5jbHVkZV9kb2NzPXRydWVcIik7XG59O1xuXG4vLyB3ZW5uIC5mZWxkX3dhZWhsZW4gZ2XDpG5kZXJ0IHdpcmRcbi8vIGtvbnRyb2xsaWVyZW4sIG9iIG1laHIgYWxzIGVpbmUgQmV6aWVodW5nc3NhbW1sdW5nIGFuZ2V6ZWlndCB3aXJkXG4vLyB1bmQgcHJvIEJlemllaHVuZyBlaW5lIFplaWxlIGF1c2dlZ2ViZW4gd2lyZC4gXG4vLyBXZW5uIGphOiByZWtsYW1pZXJlbiB1bmQgcsO8Y2tnw6RuZ2lnIG1hY2hlblxud2luZG93LmFkYi5oYW5kbGVGZWxkV8OkaGxlbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICgkKFwiI2V4cG9ydF9iZXpfaW5femVpbGVuXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuXHRcdHZhciBiZXpfZHNfY2hlY2tlZCA9IFtdLFxuXHRcdFx0dGhhdCA9IHRoaXM7XG5cdFx0JChcIiNleHBvcnRpZXJlbl9mZWxkZXJfd2FlaGxlbl9mZWxkZXJsaXN0ZVwiKVxuICAgICAgICAgICAgLmZpbmQoXCIuZmVsZF93YWVobGVuXCIpXG4gICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgJiYgJCh0aGlzKS5hdHRyKCdkc3R5cCcpID09PSBcIkJlemllaHVuZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlel9kc19jaGVja2VkLnB1c2goJCh0aGlzKS5hdHRyKCdkYXRlbnNhbW1sdW5nJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXHRcdC8vIGVpbmRldXRpZ2UgTGlzdGUgZGVyIGRzVHlwZW4gZXJzdGVsbGVuXG5cdFx0YmV6X2RzX2NoZWNrZWQgPSBfLnVuaW9uKGJlel9kc19jaGVja2VkKTtcblx0XHRpZiAoYmV6X2RzX2NoZWNrZWQgJiYgYmV6X2RzX2NoZWNrZWQubGVuZ3RoID4gMSkge1xuXHRcdFx0JCgnI21lbGR1bmdfenV2aWVsZV9icycpLm1vZGFsKCk7XG5cdFx0XHQkKHRoYXQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5hZGIuZXhwb3J0WnVyw7xja3NldHplbigpO1xuXHRcdH1cblx0fVxufTtcblxuLy8gd2VubiAuZmVsZF93YWVobGVuX2FsbGVfdm9uX2RzIGdlw6RuZGVydCB3aXJkXG4vLyB3ZW5uIGNoZWNrZWQ6IGFsbGUgdW5jaGVja2VuLCBzb25zdCBhbGxlIGNoZWNrZW5cbndpbmRvdy5hZGIuaGFuZGxlRmVsZFfDpGhsZW5BbGxlVm9uRHMgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZHMgPSAkKHRoaXMpLmF0dHIoJ2RhdGVuc2FtbWx1bmcnKSxcblx0XHRzdGF0dXMgPSBmYWxzZTtcblx0aWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG5cdFx0c3RhdHVzID0gdHJ1ZTtcblx0fVxuXHQkKCdbZGF0ZW5zYW1tbHVuZz1cIicgKyBkcyArICdcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIHN0YXR1cyk7XG5cdH0pO1xufTtcblxuLy8gd2VubiBleHBvcnRpZXJlbl9kc19vYmpla3RlX3dhZWhsZW5fZ3J1cHBlIGdlw6RuZGVydCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUV4cG9ydGllcmVuRHNPYmpla3RlV8OkaGxlbkdydXBwZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHdpbmRvdy5hZGIuZXJzdGVsbGVMaXN0ZUbDvHJGZWxkd2FobCgpO1xufTtcblxuLy8gd2VubiBleHBvcnRfZmVsZF9maWx0ZXJuIGdlw6RuZGVydCB3aXJkXG4vLyBrb250cm9sbGllcmVuLCBvYiBtZWhyIGFscyBlaW5lIEJlemllaHVuZ3NzYW1tbHVuZyBGaWx0ZXIgZW50aMOkbHQuIFdlbm4gamE6IHJla2xhbWllcmVuIHVuZCByw7xja2fDpG5naWcgbWFjaGVuXG53aW5kb3cuYWRiLmhhbmRsZUV4cG9ydEZlbGRGaWx0ZXJuQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgIC8vIGRpZSBDaGVja2JveGVuIHNvbGxlbiBkcmVpIFdlcnRlIGFubmVobWVuIGvDtm5uZW46XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAvLyBzbyBpc3QgZXMgenUgQmVnaW5uXG4gICAgICAgICAgICAvLyBkYW5uIHNvbGwgZXIgYXVmIGNoZWRrZWQgd2VjaHNlbG5cbiAgICAgICAgICAgIHRoaXMucmVhZE9ubHkgPSB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICR0aGlzLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICghJHRoaXMucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRPbmx5ID0gdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAkdGhpcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRoaXMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRoaXMucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cdHZhciBiZXpfZHNfZmlsdGVyZWQgPSBbXTtcblx0JChcIiNleHBvcnRpZXJlbl9vYmpla3RlX3dhZWhsZW5fZHNfY29sbGFwc2VcIilcbiAgICAgICAgLmZpbmQoXCIuZXhwb3J0X2ZlbGRfZmlsdGVyblwiKVxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgodGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlID09PSAwKSAmJiAkKHRoaXMpLmF0dHIoJ2RzdHlwJykgPT09IFwiQmV6aWVodW5nXCIpIHtcbiAgICAgICAgICAgICAgICBiZXpfZHNfZmlsdGVyZWQucHVzaCgkKHRoaXMpLmF0dHIoJ2VpZ2Vuc2NoYWZ0JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0Ly8gZWluZGV1dGlnZSBMaXN0ZSBkZXIgZHNUeXBlbiBlcnN0ZWxsZW5cblx0YmV6X2RzX2ZpbHRlcmVkID0gXy51bmlvbihiZXpfZHNfZmlsdGVyZWQpO1xuXHRpZiAoYmV6X2RzX2ZpbHRlcmVkICYmIGJlel9kc19maWx0ZXJlZC5sZW5ndGggPiAxKSB7XG5cdFx0JCgnI21lbGR1bmdfenV2aWVsZV9icycpLm1vZGFsKCk7XG5cdFx0JCh0aGlzKS52YWwoXCJcIik7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmFkYi5leHBvcnRadXLDvGNrc2V0emVuKCk7XG5cdH1cbn07XG5cbi8vIHdlbm4gZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW4gYW5nZXplaWd0IHdpcmRcbi8vIHp1ciBTY2hhbHRmbMOkY2hlIFZvcnNjaGF1IHNjcm9sbGVuXG53aW5kb3cuYWRiLmhhbmRsZUV4cG9ydGllcmVuRXhwb3J0aWVyZW5TaG93ID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICAvLyBGZWhsZXJtZWxkdW5nIHZlcnN0ZWNrZW4sIGZhbGxzIHNpZSBub2NoIG9mZmVuIHdhclxuICAgICQoXCIjZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fZXJyb3JfdGV4dFwiKVxuICAgICAgICAuYWxlcnQoKVxuICAgICAgICAuaGlkZSgpO1xuXHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0c2Nyb2xsVG9wOiAkKFwiI2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX3RhYmVsbGVfYXVmYmF1ZW5cIikub2Zmc2V0KCkudG9wXG5cdH0sIDIwMDApO1xufTtcblxuLy8gd2VubiAuYnRuLmxyX2JlYXJiX2JlYXJiIGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlQnRuTHJCZWFyYkJlYXJiS2xpY2sgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcblx0XHR3aW5kb3cuYWRiLmJlYXJiZWl0ZUxyVGF4b25vbWllKCk7XG5cdH1cbn07XG5cbi8vIHdlbm4gLmJ0bi5scl9iZWFyYl9zY2h1ZXR6ZW4gZ2VrbGlja3Qgd2lyZFxud2luZG93LmFkYi5oYW5kbGVCdG5MckJlYXJiU2Now7x0emVuQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcblx0XHR3aW5kb3cuYWRiLnNjaMO8dHplTHJUYXhvbm9taWUoKTtcblx0XHQvLyBFaW5zdGVsbHVuZyBtZXJrZW4sIGRhbWl0IGF1Y2ggbmFjaCBEYXRlbnNhdHp3ZWNoc2VsIGRpZSBCZWFyYmVpdGJhcmtlaXQgYmxlaWJ0XG5cdFx0ZGVsZXRlIGxvY2FsU3RvcmFnZS5scl9iZWFyYjtcblx0fVxufTtcblxuLy8gd2VubiAuYnRuLmxyX2JlYXJiX25ldSBnZWtsaWNrdCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUJ0bkxyQmVhcmJOZXVDbGljayA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuXHRcdHdpbmRvdy5hZGIuaW5pdGlpZXJlTHJQYXJlbnRBdXN3YWhsbGlzdGUoJChcIiNUYXhvbm9taWVcIikudmFsKCkpO1xuXHR9XG59O1xuXG4vLyB3ZW5uICNscl9wYXJlbnRfd2FlaGxlbl9vcHRpb25lbiBbbmFtZT1cInBhcmVudF9vcHRpb25lblwiXSBnZcOkbmRlcnQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVMclBhcmVudE9wdGlvbmVuQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gcHLDvGZlbiwgb2Igb2JlcnN0ZXIgTm9kZSBnZXfDpGhsdCB3dXJkZVxuXHR2YXIgcGFyZW50X25hbWUgPSAkKHRoaXMpLnZhbCgpLFxuXHRcdHBhcmVudF9pZCA9IHRoaXMuaWQsXG5cdFx0cGFyZW50ID0ge30sXG5cdFx0b2JqZWN0ID0ge30sXG5cdFx0ZXJzdGVsbGVCYXVtID0gcmVxdWlyZSgnLi9tb2R1bGVzL2Vyc3RlbGxlQmF1bScpO1xuXHQvLyB6dWVyc3QgZWluZSBpZCBob2xlblxuXHRvYmplY3QuX2lkID0gJC5jb3VjaC5uZXdVVUlEKDEpO1xuXHRvYmplY3QuR3J1cHBlID0gXCJMZWJlbnNyw6R1bWVcIjtcblx0b2JqZWN0LlR5cCA9IFwiT2JqZWt0XCI7XG5cdG9iamVjdC5UYXhvbm9taWUgPSB7fTtcblx0b2JqZWN0LlRheG9ub21pZS5OYW1lID0gXCJuZXVlIFRheG9ub21pZVwiO1x0Ly8gd2VubiBuaWNodCBXdXJ6ZWwsIHNldHplbi4gUGFzc2llcnQgaW4gYWt0dWFsaXNpZXJlSGllcmFyY2hpZUVpbmVzTmV1ZW5MclxuXHRvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4gPSB7fTtcblx0b2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLlRheG9ub21pZSA9IFwibmV1ZSBUYXhvbm9taWVcIjtcdC8vIHdlbm4gbmljaHQgV3VyemVsLCBzZXR6ZW4uIFBhc3NpZXJ0IGluIGFrdHVhbGlzaWVyZUhpZXJhcmNoaWVFaW5lc05ldWVuTHJcblx0Ly8gd2VubiBrZWluZSBXdXJ6ZWw6IExhYmVsIGFuemVpZ2VuXG5cdGlmIChwYXJlbnRfaWQgIT09IFwiMFwiKSB7XG5cdFx0b2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkxhYmVsID0gXCJcIjtcblx0fVxuXHRvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uRWluaGVpdCA9IFwidW5iZXNjaHJpZWJlbmVyIExlYmVuc3JhdW1cIjtcblx0aWYgKHBhcmVudF9pZCA9PT0gXCIwXCIpIHtcblx0XHRvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uRWluaGVpdCA9IFwibmV1ZSBUYXhvbm9taWVcIjtcblx0fVxuXHQvKkVpbmhlaXQtTnIgRk5TIHdpcmQgbmljaHQgbWVociBiZW7DtnRpZ3QsIGJ6dy4gdW5hYmjDpG5naWcgZsO8aHJlblxuXHRvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW5bXCJFaW5oZWl0LU5yIEZOU1wiXSA9IFwiXCI7XG5cdGlmIChwYXJlbnRfaWQgPT09IFwiMFwiKSB7XG5cdFx0b2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuW1wiRWluaGVpdC1Ocm4gRk5TIHZvblwiXSA9IFwiXCI7XG5cdFx0b2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuW1wiRWluaGVpdC1Ocm4gRk5TIGJpc1wiXSA9IFwiXCI7XG5cdH0qL1xuXHRvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uQmVzY2hyZWlidW5nID0gXCJcIjtcblx0b2JqZWN0LkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuID0gW107XG5cdG9iamVjdC5CZXppZWh1bmdzc2FtbWx1bmdlbiA9IFtdO1xuXHQvLyBqZXR6dCBkZW4gcGFyZW50IGVyc3RlbGxlblxuXHQvLyBnZWh0IG5pY2h0IHZvcmhlciwgd2VpbCBkaWUgaWQgYmVrYW5udCBzZWluIG11c3Ncblx0aWYgKHBhcmVudF9pZCA9PT0gXCIwXCIpIHtcblx0XHQvLyBkYXMgaXN0IGRpZSBXdXJ6ZWwgZGVyIFRheG9ub21pZVxuXHRcdHBhcmVudC5OYW1lID0gXCJuZXVlIFRheG9ub21pZVwiO1xuXHRcdHBhcmVudC5HVUlEID0gb2JqZWN0Ll9pZDtcblx0XHQvLyBiZWkgZGVyIFd1cnplbCBpc3QgSGllcmFyY2hpZSBnbGVpY2ggcGFyZW50XG5cdFx0b2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkhpZXJhcmNoaWUgPSBbXTtcblx0XHRvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uSGllcmFyY2hpZS5wdXNoKHBhcmVudCk7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50Lk5hbWUgPSBwYXJlbnRfbmFtZTtcblx0XHRwYXJlbnQuR1VJRCA9IHBhcmVudF9pZDtcblx0fVxuXHRvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uUGFyZW50ID0gcGFyZW50O1xuXHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdCRkYi5zYXZlRG9jKG9iamVjdCwge1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKG9iamVjdF9zYXZlZCkge1xuXHRcdFx0b2JqZWN0Ll9yZXYgPSBvYmplY3Rfc2F2ZWQucmV2O1xuXHRcdFx0aWYgKHBhcmVudF9pZCAhPT0gXCIwXCIpIHtcblx0XHRcdFx0Ly8gZGllIEhpZXJhcmNoaWUgYXVmYmF1ZW4gdW5kIHNldHplblxuXHRcdFx0XHQvLyBiZWkgZGVyIFd1cnplbCBpc3Qgc2llIHNjaG9uIGdlc2V0enRcblx0XHRcdFx0d2luZG93LmFkYi5ha3R1YWxpc2llcmVIaWVyYXJjaGllRWluZXNOZXVlbkxyKG51bGwsIG9iamVjdCwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkLndoZW4oZXJzdGVsbGVCYXVtKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkYi7DtmZmbmVCYXVtWnVJZChvYmplY3QuX2lkKTtcblx0XHRcdFx0XHQkKCcjbHJfcGFyZW50X3dhZWhsZW4nKS5tb2RhbCgnaGlkZScpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufTtcblxuLy8gd2VubiBydWVja2ZyYWdlX2xyX2xvZXNjaGVuX2phIGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlUsO8Y2tmcmFnZUxyTMO2c2NoZW5KYUNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8genVlcnN0IGRpZSBpZCBkZXMgT2JqZWt0cyBob2xlblxuXHR2YXIgdXJpID0gbmV3IFVyaSgkKGxvY2F0aW9uKS5hdHRyKCdocmVmJykpLFxuXHRcdGlkID0gdXJpLmdldFF1ZXJ5UGFyYW1WYWx1ZSgnaWQnKSxcblx0XHRoYXNoID0gdXJpLmFuY2hvcigpO1xuXHQvLyB3ZW5uIGJyb3dzZXIgaGlzdG9yeSBuaWNodCB1bnRlcnN0w7x0enQsIGVyc3RlbGx0IGhpc3RvcnkuanMgZWluZSBoYXNoXG5cdC8vIGRhbm4gbXVzcyBkaWUgaWQgZHVyY2ggZGllIGlkIGluIGRlciBoYXNoIGVyc2V0enQgd2VyZGVuXG5cdGlmIChoYXNoKSB7XG5cdFx0dmFyIHVyaTIgPSBuZXcgVXJpKGhhc2gpO1xuXHRcdGlkID0gdXJpMi5nZXRRdWVyeVBhcmFtVmFsdWUoJ2lkJyk7XG5cdH1cblx0Ly8gT2JqZWt0IHNlbGJzdCBpbmtsLiBhbGxlciBoaWVyYXJjaGlzY2ggZGFydW50ZXIgbGllZ2VuZGUgT2JqZWt0ZSBlcm1pdHRlbG4gdW5kIGzDtnNjaGVuXG5cdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0JGRiLnZpZXcoJ2FydGVuZGIvaGllcmFyY2hpZT9rZXk9XCInICsgaWQgKyAnXCImaW5jbHVkZV9kb2NzPXRydWUnLCB7XG5cdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0Ly8gZGFyYXVzIGVpbmVuIEFycmF5IHZvbiBkb2NzIG1hY2hlblxuXHRcdFx0dmFyIGRvY19hcnJheSA9IF8ubWFwKGRhdGEucm93cywgZnVuY3Rpb24ocm93KSB7XG5cdFx0XHRcdHJldHVybiByb3cuZG9jO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyB1bmQgZGllc2UgRG9rdW1lbnRlIG51biBsw7ZzY2hlblxuXHRcdFx0d2luZG93LmFkYi5sw7ZzY2hlTWFzc2VuTWl0T2JqZWt0QXJyYXkoZG9jX2FycmF5KTtcblx0XHRcdC8vIHZvcmlnZW4gbm9kZSBlcm1pdHRlbG5cblx0XHRcdHZhciB2b3JpZ2VyX25vZGUgPSAkLmpzdHJlZS5fcmVmZXJlbmNlKFwiI1wiICsgaWQpLl9nZXRfcHJldihcIiNcIiArIGlkKTtcblx0XHRcdC8vIG5vZGUgZGVzIGdlbMO2c2NodGVuIExSIGVudGZlcm5lblxuXHRcdFx0JC5qc3RyZWUuX3JlZmVyZW5jZShcIiNcIiArIGlkKS5kZWxldGVfbm9kZShcIiNcIiArIGlkKTtcblx0XHRcdC8vIHZvcmlnZW4gbm9kZSDDtmZmbmVuXG5cdFx0XHRpZiAodm9yaWdlcl9ub2RlKSB7XG5cdFx0XHRcdCQuanN0cmVlLl9yZWZlcmVuY2Uodm9yaWdlcl9ub2RlKS5zZWxlY3Rfbm9kZSh2b3JpZ2VyX25vZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LmFkYi7DtmZmbmVHcnVwcGUoXCJMZWJlbnNyw6R1bWVcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8vIFdlbm4gI2FydCAuTGViZW5zcsOkdW1lLlRheG9ub21pZSAuY29udHJvbHMgZ2XDpG5kZXJ0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlTHJUYXhvbm9taWVDb250cm9sc0NoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHdpbmRvdy5hZGIuc3BlaWNoZXJuKCQodGhpcykudmFsKCksIHRoaXMuaWQsICQodGhpcykuYXR0cignZHNOYW1lJyksICQodGhpcykuYXR0cignZHNUeXAnKSk7XG59O1xuXG4vLyB3ZW5uIC5MZWJlbnNyw6R1bWUuVGF4b25vbWllIGdlw7ZmZm5ldCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZVBhbmVsYm9keUxyVGF4b25vbWllU2hvd24gPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAobG9jYWxTdG9yYWdlLmxyX2JlYXJiID09IFwidHJ1ZVwiKSB7XG5cdFx0d2luZG93LmFkYi5iZWFyYmVpdGVMclRheG9ub21pZSgpO1xuXHR9XG59O1xuXG4vLyB3ZW5uICNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9jb2xsYXBzZSBnZcO2ZmZuZXQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVFeHBvcnRpZXJlbkV4cG9ydGllcmVuQ29sbGFwc2VTaG93biA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXHQvLyBudXIgYXVzZsO8aHJlbiwgd2VubiBleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9jb2xsYXBzZSBvZmZlbiBpc3Rcblx0Ly8ga29taXNjaGVyd2Vpc2Ugd3VyZGUgZGllc2VyIENvZGUgaW1tZXIgYXVzZ2Vsw7ZzdCwgd2VubiBiZWkgTGViZW5zcsOkdW1lbiBGNSBnZWRyw7xja3Qgd3VyZGUhXG5cdGlmICgkKFwiI2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX2NvbGxhcHNlXCIpLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGIuaGFuZGxlRXhwb3J0aWVyZW5PYmpla3RlV8OkaGxlbkNvbGxhcHNlU2hvd24odGhhdCkpIHtcbiAgICAgICAgICAgIC8vIEdydXBwZSBpc3QgZ2V3w6RobHQsIHdlaXRlcm1hY2hlblxuICAgICAgICAgICAgLy8gVGFiZWxsZSB1bmQgSGVydW50ZXJsYWRlbi1TY2hhbHRmbMOkY2hlIGF1c2JsZW5kZW5cbiAgICAgICAgICAgICQoXCIjZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fdGFiZWxsZVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiLmV4cG9ydGllcmVuX2V4cG9ydGllcmVuX2V4cG9ydGllcmVuXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIGZpbHRlcnQgdW5kIGJhdXQgZGFuYWNoIGRpZSBWb3JzY2hhdXRhYmVsbGUgYXVmXG4gICAgICAgICAgICB3aW5kb3cuYWRiLmZpbHRlcmVGw7xyRXhwb3J0KCk7XG4gICAgICAgIH1cblx0fVxufTtcblxud2luZG93LmFkYi5oYW5kbGVFeHBvcnRpZXJlbk9iamVrdGVXw6RobGVuQ29sbGFwc2VTaG93biA9IGZ1bmN0aW9uKHRoYXQpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIHZhciBncnVwcGVuX2dld8OkaGx0ID0gd2luZG93LmFkYi5mw7xyRXhwb3J0R2V3w6RobHRlR3J1cHBlbigpO1xuICAgIGlmIChncnVwcGVuX2dld8OkaGx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBrZWluZSBHcnVwcGUgZ2V3w6RobHRcbiAgICAgICAgd2luZG93LmFkYi5lcnN0ZWxsZUxpc3RlRsO8ckZlbGR3YWhsKCk7XG4gICAgICAgIC8vIHVuZCBkZW4gcGFuZWwgc2NobGllc3NlblxuICAgICAgICAkKHRoYXQpLmNvbGxhcHNlKCdoaWRlJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG4vLyB3ZW5uICNleHBvcnRpZXJlbl9vYmpla3RlX1RheG9ub21pZW5fenVzYW1tZW5mYXNzZW4gZ2VrbGlja3Qgd2lyZFxud2luZG93LmFkYi5oYW5kbGVFeHBvcnRpZXJlbk9iamVrdGVUYXhvbm9taWVuWnVzYW1tZW5mYXNzZW5DbGljayA9IGZ1bmN0aW9uKHRoYXQpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIHZhciBncnVwcGVfaXN0X2dld8OkaGx0ID0gZmFsc2U7XG5cdGlmICgkKHRoYXQpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG5cdFx0d2luZG93LmFkYi5mYXNzZVRheG9ub21pZW5adXNhbW1lbiA9IGZhbHNlO1xuXHRcdCQodGhhdCkuaHRtbChcIkFsbGUgVGF4b25vbWllbiB6dXNhbW1lbmZhc3NlblwiKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuYWRiLmZhc3NlVGF4b25vbWllblp1c2FtbWVuID0gdHJ1ZTtcblx0XHQkKHRoYXQpLmh0bWwoXCJUYXhvbm9taWVuIGVpbnplbG4gYmVoYW5kZWxuXCIpO1xuXHR9XG5cdC8vIEZlbGRlciBuZXUgYXVmYmF1ZW4sIGFiZXIgbnVyLCB3ZW5uIGVpbmUgR3J1cHBlIGdld8OkaGx0IGlzdFxuXHQkKFwiI2V4cG9ydGllcmVuX29iamVrdGVfd2FlaGxlbl9ncnVwcGVuX2NvbGxhcHNlXCIpXG4gICAgICAgIC5maW5kKFwiLmV4cG9ydGllcmVuX2RzX29iamVrdGVfd2FlaGxlbl9ncnVwcGVcIilcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGF0KS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBncnVwcGVfaXN0X2dld8OkaGx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdGlmIChncnVwcGVfaXN0X2dld8OkaGx0KSB7XG5cdFx0d2luZG93LmFkYi5lcnN0ZWxsZUxpc3RlRsO8ckZlbGR3YWhsKCk7XG5cdH1cbn07XG5cbi8vIHdlbm4gI2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX2V4cG9ydGllcmVuIGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlRXhwb3J0aWVyZW5FeHBvcnRpZXJlbkV4cG9ydGllcmVuQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAod2luZG93LmFkYi5pc0ZpbGVBUElBdmFpbGFibGUoKSkge1xuXHRcdHZhciBleHBvcnRzdHJpbmcgPSB3aW5kb3cuYWRiLmVyc3RlbGxlRXhwb3J0U3RyaW5nKHdpbmRvdy5hZGIuZXhwb3J0aWVyZW5fb2JqZWt0ZSksXG5cdFx0XHRibG9iID0gbmV3IEJsb2IoW2V4cG9ydHN0cmluZ10sIHt0eXBlOiBcInRleHQvY3N2O2NoYXJzZXQ9dXRmLTg7XCJ9KSxcblx0XHRcdGQgPSBuZXcgRGF0ZSgpLFxuXHRcdFx0bW9udGggPSBkLmdldE1vbnRoKCkrMSxcblx0XHRcdGRheSA9IGQuZ2V0RGF0ZSgpLFxuXHRcdFx0b3V0cHV0ID0gZC5nZXRGdWxsWWVhcigpICsgJy0nICsgKG1vbnRoPDEwID8gJzAnIDogJycpICsgbW9udGggKyAnLScgKyAoZGF5PDEwID8gJzAnIDogJycpICsgZGF5O1xuXHRcdHNhdmVBcyhibG9iLCBvdXRwdXQgKyBcIl9leHBvcnQuY3N2XCIpO1xuXHR9XG59O1xuXG4vLyB3ZW5uIC5wYW5lbCBnZcO2ZmZuZXQgd2lyZFxuLy8gSMO2aGUgZGVyIHRleHRhcmVhcyBhbiBUZXh0Z3LDtnNzZSBhbnBhc3Nlblxud2luZG93LmFkYi5oYW5kbGVQYW5lbFNob3duID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0JCh0aGlzKS5maW5kKCd0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93LmFkYi5maXRUZXh0YXJlYVRvQ29udGVudCh0aGlzLmlkKTtcblx0fSk7XG59O1xuXG4vLyB3ZW5uIC5MaW5rWnVBcnRHbGVpY2hlckdydXBwZSBnZWtsaWNrdCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUxpbmtadUFydEdsZWljaGVyR3J1cHBlQ2xpY2sgPSBmdW5jdGlvbihpZCkge1xuXHQndXNlIHN0cmljdCc7XG4gICAgJChcIi5zdWNoZW5cIikudmFsKFwiXCIpO1xuXHQkKFwiI3RyZWVcIiArIHdpbmRvdy5hZGIuR3J1cHBlKVxuICAgICAgICAuanN0cmVlKFwiY2xlYXJfc2VhcmNoXCIpXG5cdCAgICAuanN0cmVlKFwiZGVzZWxlY3RfYWxsXCIpXG5cdCAgICAuanN0cmVlKFwiY2xvc2VfYWxsXCIsIC0xKVxuXHQgICAgLmpzdHJlZShcInNlbGVjdF9ub2RlXCIsIFwiI1wiICsgaWQpO1xufTtcblxuLy8gd2VubiBGZW5zdGVyZ3LDtnNzZSB2ZXLDpG5kZXJ0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0d2luZG93LmFkYi5zZXR6ZVRyZWVow7ZoZSgpO1xuXHQvLyBIw7ZoZSBkZXIgVGV4dGFyZWFzIGtvcnJpZ2llcmVuXG5cdCQoJyNmb3JtcycpLmZpbmQoJ3RleHRhcmVhJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHR3aW5kb3cuYWRiLmZpdFRleHRhcmVhVG9Db250ZW50KHRoaXMuaWQpO1xuXHR9KTtcbn07XG5cbi8vIHdlbm4gLmFubWVsZGVuX2J0biBnZWtsaWNrdCB3aXJkXG53aW5kb3cuYWRiLmhhbmRsZUFubWVsZGVuQnRuQ2xpY2sgPSBmdW5jdGlvbih0aGF0KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gZXMgbXVzcyBtaXRnZWdlYmVuIHdlcmRlbiwgd29oZXIgZGllIEFubWVsZHVuZyBrYW0sIGRhbWl0IGRpZSBlbWFpbCBhdXMgZGVtIHJpY2h0aWdlbiBGZWxkIGdlaG9sdCB3ZXJkZW4ga2FublxuXHR2YXIgYnNfZHMgPSB0aGF0LmlkLnN1YnN0cmluZyh0aGF0LmlkLmxlbmd0aC0yKTtcblx0aWYgKGJzX2RzID09PSBcInJ0XCIpIHtcblx0XHRic19kcyA9IFwiYXJ0XCI7XG5cdH1cblx0d2luZG93LmFkYi5tZWxkZVVzZXJBbihic19kcyk7XG59O1xuXG4vLyB3ZW5uIC5FbWFpbCBrZXl1cFxud2luZG93LmFkYi5oYW5kbGVFbWFpbEtleXVwID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly9hbGxmw6RsbGlnIG5vY2ggdm9yaGFuZGVuZW4gSGlud2VpcyBhdXNibGVuZGVuXG5cdCQoXCIuRW1haWxoaW53ZWlzXCIpLmhpZGUoKTtcbn07XG5cbi8vIHdlbm4gLlBhc3N3b3J0IGtleXVwXG53aW5kb3cuYWRiLmhhbmRsZVBhc3N3b3J0S2V5dXAgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvL2FsbGbDpGxsaWcgbm9jaCB2b3JoYW5kZW5lbiBIaW53ZWlzIGF1c2JsZW5kZW5cblx0JChcIi5QYXNzd29ydGhpbndlaXNcIikuaGlkZSgpO1xufTtcblxuLy8gd2VubiAuUGFzc3dvcnQyIGtleXVwXG53aW5kb3cuYWRiLmhhbmRsZVBhc3N3b3J0MktleXVwID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly9hbGxmw6RsbGlnIG5vY2ggdm9yaGFuZGVuZW4gSGlud2VpcyBhdXNibGVuZGVuXG5cdCQoXCIuUGFzc3dvcnRoaW53ZWlzMlwiKS5oaWRlKCk7XG59O1xuXG4vLyB3ZW5uIC5rb250b19lcnN0ZWxsZW5fYnRuIGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlS29udG9FcnN0ZWxsZW5CdG5DbGljayA9IGZ1bmN0aW9uKHRoYXQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgYnNfZHMgPSB0aGF0LmlkLnN1YnN0cmluZyh0aGF0LmlkLmxlbmd0aC0yKTtcblx0aWYgKGJzX2RzID09PSBcInJ0XCIpIHtcblx0XHRic19kcyA9IFwiYXJ0XCI7XG5cdH1cblx0JChcIi5zaWdudXBcIikuc2hvdygpO1xuXHQkKFwiLmFubWVsZGVuX2J0blwiKS5oaWRlKCk7XG5cdCQoXCIuYWJtZWxkZW5fYnRuXCIpLmhpZGUoKTtcblx0JChcIi5rb250b19lcnN0ZWxsZW5fYnRuXCIpLmhpZGUoKTtcblx0JChcIi5rb250b19zcGVpY2hlcm5fYnRuXCIpLnNob3coKTtcblx0JChcIi5pbXBvcnRpZXJlbl9hbm1lbGRlbl9mZWhsZXJcIikuaGlkZSgpO1xuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdCQoXCIjRW1haWxfXCIgKyBic19kcykuZm9jdXMoKTtcblx0fSwgNTApOyAgLy8gbmVlZCB0byB1c2UgYSB0aW1lciBzbyB0aGF0IC5ibHVyKCkgY2FuIGZpbmlzaCBiZWZvcmUgeW91IGRvIC5mb2N1cygpXG59O1xuXG4vLyB3ZW5uIC5rb250b19zcGVpY2hlcm5fYnRuIGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlS29udG9TcGVpY2hlcm5CdG5DbGljayA9IGZ1bmN0aW9uKHRoYXQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgYnNfZHMgPSB0aGF0LmlkLnN1YnN0cmluZyh0aGF0LmlkLmxlbmd0aC0yKTtcblx0aWYgKGJzX2RzID09PSBcInJ0XCIpIHtcblx0XHRic19kcyA9IFwiYXJ0XCI7XG5cdH1cblx0aWYgKHdpbmRvdy5hZGIudmFsaWRpZXJlU2lnbnVwKGJzX2RzKSkge1xuXHRcdHdpbmRvdy5hZGIuZXJzdGVsbGVLb250byhic19kcyk7XG5cdFx0Ly8gQW5tZWxkZWZlbnN0ZXIgenVyw7xja3NldHplblxuXHRcdCQoXCIuc2lnbnVwXCIpLmhpZGUoKTtcblx0XHQkKFwiLmFubWVsZGVuX2J0blwiKS5oaWRlKCk7XG5cdFx0JChcIi5hYm1lbGRlbl9idG5cIikuc2hvdygpO1xuXHRcdCQoXCIua29udG9fZXJzdGVsbGVuX2J0blwiKS5oaWRlKCk7XG5cdFx0JChcIi5rb250b19zcGVpY2hlcm5fYnRuXCIpLmhpZGUoKTtcblx0fVxufTtcblxuLy8gd2VubiAuZ3J1cHBlIGdla2xpY2t0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlw5ZmZm5lR3J1cHBlQ2xpY2sgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR3aW5kb3cuYWRiLsO2ZmZuZUdydXBwZSgkKHRoaXMpLmF0dHIoXCJHcnVwcGVcIikpO1xufTtcblxuLy8gd2VubiAjRHNGZWxkZXIgZ2XDpG5kZXJ0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlRHNGZWxkZXJDaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR3aW5kb3cuYWRiLm1lbGRlRXJmb2xnVm9uSWRJZGVudGlmaWthdGlvbihcIkRzXCIpO1xufTtcblxuLy8gd2VubiAjQnNGZWxkZXIgZ2XDpG5kZXJ0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlQnNGZWxkZXJDaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR3aW5kb3cuYWRiLm1lbGRlRXJmb2xnVm9uSWRJZGVudGlmaWthdGlvbihcIkJzXCIpO1xufTtcblxuLy8gd2VubiAjRHNJZCBnZcOkbmRlcnQgd2lyZFxud2luZG93LmFkYi5oYW5kbGVEc0lkQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0d2luZG93LmFkYi5tZWxkZUVyZm9sZ1ZvbklkSWRlbnRpZmlrYXRpb24oXCJEc1wiKTtcbn07XG5cbi8vIHdlbm4gI0JzSWQgZ2XDpG5kZXJ0IHdpcmRcbndpbmRvdy5hZGIuaGFuZGxlQnNJZENoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHdpbmRvdy5hZGIubWVsZGVFcmZvbGdWb25JZElkZW50aWZpa2F0aW9uKFwiQnNcIik7XG59O1xuXG4vLyB3ZW5uIGluIHRleHRhcmVhIGtleXVwIG9kZXIgZm9jdXNcbndpbmRvdy5hZGIuaGFuZGxlVGV4dGFyZWFLZXl1cEZvY3VzID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0d2luZG93LmFkYi5maXRUZXh0YXJlYVRvQ29udGVudCh0aGlzLmlkKTtcbn07XG5cbi8vIMO8YmVybmltbXQgZWluZSBBcnJheSBtaXQgT2JqZWt0ZW5cbi8vIHVuZCBkZW4gZGl2LCBpbiBkZW0gZGllIFRhYmVsbGUgZWluZ2Vmw7xndCB3ZXJkZW4gc29sbFxuLy8gcGx1cyBlaW5lbiBkaXYsIGluIGRlbSBkaWUgTGlzdGUgZGVyIEZlbGRlciBhbmd6ZWlndCB3aXJkIChmYWxscyBkaWVzZXIgZGl2IG1pdGdlbGllZmVydCB3aXJkKVxuLy8gYmF1dCBkYW1pdCBlaW5lIFRhYmVsbGUgYXVmIHVuZCBmw7xndCBzaWUgaW4gZGVuIMO8YmVyZ2ViZW5lbiBkaXYgZWluXG53aW5kb3cuYWRiLmVyc3RlbGxlVGFiZWxsZSA9IGZ1bmN0aW9uKERhdGVuc8OkdHplLCBmZWxkZXJfZGl2LCB0YWJlbGxlbl9kaXYpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaHRtbCA9IFwiXCIsXG5cdFx0RmVsZG5hbWUgPSBcIlwiLFxuXHRcdGh0bWxfZHNfZmVsZGVyX2RpdiA9IFwiXCIsXG4gICAgICAgIGVyc3RlXzEwX2RzLFxuICAgICAgICAkdGFiZWxsZW5fZGl2ID0gJChcIiNcIit0YWJlbGxlbl9kaXYpO1xuXHRpZiAoRGF0ZW5zw6R0emUubGVuZ3RoID4gMTApIHtcblx0XHRodG1sICs9IFwiVm9yc2NoYXUgZGVyIGVyc3RlbiAxMCB2b24gXCIgKyBEYXRlbnPDpHR6ZS5sZW5ndGggKyBcIiBEYXRlbnPDpHR6ZW46XCI7XG5cdH0gZWxzZSBpZiAoRGF0ZW5zw6R0emUubGVuZ3RoID4gMSkge1xuXHRcdGh0bWwgKz0gXCJWb3JzY2hhdSBkZXIgXCIgKyBEYXRlbnPDpHR6ZS5sZW5ndGggKyBcIiBEYXRlbnPDpHR6ZTpcIjtcblx0fSBlbHNlIHtcblx0XHRodG1sICs9IFwiVm9yc2NoYXUgZGVzIGVpbnppZ2VuIERhdGVuc2F0emVzOlwiO1xuXHR9XG5cdC8vIFRhYmVsbGUgaW5pdGlpZXJlblxuXHRodG1sICs9ICc8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPjx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWQgdGFibGUtY29uZGVuc2VkIHRhYmxlLWhvdmVyXCI+Jztcblx0Ly8gVGl0ZWx6ZWlsZSBhdWZiYXVlblxuXHQvLyBaZWlsZSBhbmxlZ2VuXG5cdC8vIGdsZWljaHplaXRpZyBGZWxkbGlzdGUgZsO8ciBGb3JtdWxhciBhbmxlZ2VuXG5cdGlmIChmZWxkZXJfZGl2KSB7XG5cdFx0aWYgKGZlbGRlcl9kaXYgPT09IFwiRHNGZWxkZXJfZGl2XCIpIHtcblx0XHRcdEZlbGRuYW1lID0gXCJEc0ZlbGRlclwiO1xuXHRcdH0gZWxzZSBpZiAoZmVsZGVyX2RpdiA9PT0gXCJCc0ZlbGRlcl9kaXZcIikge1xuXHRcdFx0RmVsZG5hbWUgPSBcIkJzRmVsZGVyXCI7XG5cdFx0fVxuXHR9XG5cdGh0bWxfZHNfZmVsZGVyX2RpdiArPSAnPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIGZvcj1cIicrRmVsZG5hbWUrJ1wiPkZlbGQgbWl0IGVpbmRldXRpZ2VyIElEPGJyPmluIGRlbiBJbXBvcnRkYXRlbjwvbGFiZWw+Jztcblx0aHRtbF9kc19mZWxkZXJfZGl2ICs9ICc8c2VsZWN0IG11bHRpcGxlIGNsYXNzPVwiY29udHJvbHMgZm9ybS1jb250cm9sIGlucHV0LXNtXCIgaWQ9XCInK0ZlbGRuYW1lKydcIiBzdHlsZT1cImhlaWdodDonICsgKChPYmplY3Qua2V5cyhEYXRlbnPDpHR6ZVswXSkubGVuZ3RoKjE5KSs5KSAgKyAncHhcIj4nO1xuXHRodG1sICs9IFwiPHRoZWFkPjx0cj5cIjtcblxuXHQvLyBkdXJjaCBkaWUgRmVsZGVyIGRlcyBlcnN0ZW4gRGF0ZW5zYXR6ZXMgemlya2VsblxuICAgIF8uZWFjaChEYXRlbnPDpHR6ZVswXSwgZnVuY3Rpb24oZmVsZHdlcnQsIGZlbGRuYW1lKSB7XG4gICAgICAgIC8vIFNwYWx0ZSBhbmxlZ2VuXG4gICAgICAgIGh0bWwgKz0gXCI8dGg+XCIgKyBmZWxkbmFtZSArIFwiPC90aD5cIjtcbiAgICAgICAgLy8gT3B0aW9uIGbDvHIgRmVsZGxpc3RlIGFuZsO8Z2VuXG4gICAgICAgIGh0bWxfZHNfZmVsZGVyX2RpdiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBmZWxkbmFtZSArICdcIj4nICsgZmVsZG5hbWUgKyAnPC9vcHRpb24+JztcbiAgICB9KTtcblx0Ly8gVGl0ZWx6ZWlsZSBhYnNjaGxpZXNzZW5cblx0aHRtbCArPSBcIjwvdHI+PC90aGVhZD48dGJvZHk+XCI7XG5cdC8vIEZlbGRsaXN0ZSBhYnNjaGxpZXNzZW5cblx0aHRtbF9kc19mZWxkZXJfZGl2ICs9ICc8L3NlbGVjdD4nO1xuXHRpZiAoZmVsZGVyX2Rpdikge1xuXHRcdC8vIG51ciwgd2VubiBlaW4gZmVsZGVyX2RpdiDDvGJlcmdlYmVuIHd1cmRlXG5cdFx0JChcIiNcIitmZWxkZXJfZGl2KS5odG1sKGh0bWxfZHNfZmVsZGVyX2Rpdik7XG5cdH1cblxuICAgIC8vIFRhYmVsbGVuemVpbGVuIGF1ZmJhdWVuXG5cdC8vIG51ciBkaWUgZXJzdGVuIDEwIERhdGVuc8OkdHplIGFuemVpZ2VuXG4gICAgZXJzdGVfMTBfZHMgPSBfLmZpcnN0KERhdGVuc8OkdHplLCAxMCk7XG5cbiAgICBfLmVhY2goZXJzdGVfMTBfZHMsIGZ1bmN0aW9uKGRhdGVuc2F0eikge1xuICAgICAgICAvLyBaZWlsZSBhbmxlZ2VuXG4gICAgICAgIGh0bWwgKz0gXCI8dHI+XCI7XG4gICAgICAgIC8vIGR1cmNoIGRpZSBGZWxkZXIgemlya2VsblxuICAgICAgICBfLmVhY2goZGF0ZW5zYXR6LCBmdW5jdGlvbihmZWxkd2VydCwgZmVsZG5hbWUpIHtcbiAgICAgICAgICAgIC8vIFNwYWx0ZSBhbmxlZ2VuXG4gICAgICAgICAgICBodG1sICs9IFwiPHRkPlwiO1xuICAgICAgICAgICAgaWYgKGZlbGR3ZXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gTnVsbC1XZXJ0ZSBhbHMgbGVlciBhbnplaWdlblxuICAgICAgICAgICAgICAgIGh0bWwgKz0gXCJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZlbGR3ZXJ0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBKU09OLnN0cmluZ2lmeShmZWxkd2VydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZlbGR3ZXJ0IHx8IGZlbGR3ZXJ0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBmZWxkd2VydDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVsZHdlcnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gZGFmw7xyIHNvZ2VuLCBkYXNzIGZhbHNlIGF1Y2ggYW5nZXplaWd0IHdpcmRcbiAgICAgICAgICAgICAgICAvLyBvaG5lIGRpZXNlIFplaWxlIGJsZWlidCBkYXMgRmVsZCBzb25zdCBsZWVyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBmZWxkd2VydDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbnVsbHdlcnRlIGFscyBsZWVyd2VydGUgKG5pY2h0KSBhbnplaWdlblxuICAgICAgICAgICAgICAgIGh0bWwgKz0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNwYWx0ZSBhYnNjaGxpZXNzZW5cbiAgICAgICAgICAgIGh0bWwgKz0gXCI8L3RkPlwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gWmVpbGUgYWJzY2hsaWVzc2VuXG4gICAgICAgIGh0bWwgKz0gXCI8L3RyPlwiO1xuICAgIH0pO1xuXG5cdC8vIFRhYmVsbGUgYWJzY2hsaWVzc2VuXG5cdGh0bWwgKz0gJzwvdGJvZHk+PC90YWJsZT48L2Rpdj4nO1xuXHQvLyBodG1sIGluIGRpdiBlaW5mw7xnZW5cblx0JHRhYmVsbGVuX2RpdlxuICAgICAgICAuaHRtbChodG1sKVxuXHQgICAgLmNzcyhcIm1hcmdpbi10b3BcIiwgXCIyMHB4XCIpXG4gICAgICAgIC8vIHNpY2h0YmFyIHN0ZWxsZW5cbiAgICAgICAgLnNob3coKTtcbiAgICAvLyBmZW5zdGVyIHNjcm9sbGVuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICR0YWJlbGxlbl9kaXYub2Zmc2V0KCkudG9wXG4gICAgfSwgMjAwMCk7XG59O1xuXG4vLyBlcmjDpGx0IGRicyA9IFwiRHNcIiBvZGVyIFwiQnNcIlxud2luZG93LmFkYi5tZWxkZUVyZm9sZ1ZvbklkSWRlbnRpZmlrYXRpb24gPSBmdW5jdGlvbihkYnMpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIHZhciAkZGJzRmVsZGVyU2VsZWN0ZWQgPSAkKFwiI1wiK2RicytcIkZlbGRlciBvcHRpb246c2VsZWN0ZWRcIiksXG4gICAgICAgICRkYnNJZFNlbGVjdGVkID0gJChcIiNcIitkYnMrXCJJZCBvcHRpb246c2VsZWN0ZWRcIiksXG4gICAgICAgIGlkc192b25fZGF0ZW5zw6R0emVuID0gW10sXG4gICAgICAgIG1laHJmYWNoX3ZvcmtvbW1lbmRlX2lkcyA9IFtdLFxuICAgICAgICBpZHNfdm9uX25pY2h0X2ltcG9ydGllcmJhcmVuX2RhdGVuc8OkdHplbiA9IFtdO1xuXG5cdGlmICgkZGJzRmVsZGVyU2VsZWN0ZWQubGVuZ3RoICYmICRkYnNJZFNlbGVjdGVkLmxlbmd0aCkge1xuXHRcdC8vIGJlaWRlIElEJ3Mgc2luZCBnZXfDpGhsdFxuXHRcdHdpbmRvdy5hZGJbZGJzK1wiRmVsZGVySWRcIl0gPSAkZGJzRmVsZGVyU2VsZWN0ZWQudmFsKCk7XG5cdFx0d2luZG93LmFkYi5Ec0lkID0gJGRic0lkU2VsZWN0ZWQudmFsKCk7XG5cdFx0d2luZG93LmFkYltkYnMrXCJJZFwiXSA9ICRkYnNJZFNlbGVjdGVkLnZhbCgpO1xuXHRcdC8vIGRhcyBoaWVyIHdpcmQgc3DDpHRlciBub2NoIGbDvHIgZGVuIElubXBvcnQgZ2VicmF1Y2h0ID4gZ2xvYmFsZSBWYXJpYWJsZSBtYWNoZW5cblx0XHR3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplID0gW107XG5cdFx0JChcIiNpbXBvcnRpZXJlbl9cIitkYnMudG9Mb3dlckNhc2UoKStcIl9pZHNfaWRlbnRpZml6aWVyZW5faGlud2Vpc190ZXh0XCIpXG4gICAgICAgICAgICAuYWxlcnQoKVxuICAgICAgICAgICAgLmh0bWwoXCJCaXR0ZSB3YXJ0ZW4sIGRpZSBEYXRlbiB3ZXJkZW4gYW5hbHlzaWVydC48YnI+RGFzIGthbm4gZWluZSBXZWlsZSBkYXVlcm4uLi5cIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKVxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtaW5mb1wiKVxuICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2ltcG9ydGllcmVuX1wiICsgZGJzLnRvTG93ZXJDYXNlKCkgKyBcIl9pZHNfaWRlbnRpZml6aWVyZW5fY29sbGFwc2VcIikub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDIwMDApO1xuXG5cdFx0Ly8gRG9rdW1lbnRlIGF1cyBkZXIgR3J1cHBlIGRlciBEYXRlbnPDpHR6ZSBob2xlblxuXHRcdC8vIGR1cmNoIGFsbGUgbG9vcGVuLiBEYWJlaSBlaW5lbiBBcnJheSB2b24gT2JqZWt0ZW4gYmlsZGVuIG1pdCBpZCB1bmQgZ3VpZFxuXHRcdC8vIGtvbnRyb2xsaWVyZW4sIG9iIGVpbmUgaWQgbWVociBhbHMgZWlubWFsIHZvcmtvbW10XG5cdFx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHRcdGlmICh3aW5kb3cuYWRiLkRzSWQgPT09IFwiZ3VpZFwiKSB7XG5cdFx0XHQkZGIudmlldygnYXJ0ZW5kYi9hbGxfZG9jcycsIHtcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV9kZXNfaWRfZmVsZHMgPSB3aW5kb3cuYWRiW2RicytcIkZlbGRlcklkXCJdO1xuICAgICAgICAgICAgICAgICAgICAvLyBkdXJjaCBkaWUgaW1wb3J0aWVydGVuIERhdGVuc8OkdHplIGxvb3BlblxuICAgICAgICAgICAgICAgICAgICBfLmVhY2god2luZG93LmFkYltkYnMudG9Mb3dlckNhc2UoKStcIkRhdGVuc8OkdHplXCJdLCBmdW5jdGlvbihpbXBvcnRfZGF0ZW5zYXR6KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWRzX3Zvbl9kYXRlbnPDpHR6ZW4uaW5kZXhPZihpbXBvcnRfZGF0ZW5zYXR6W25hbWVfZGVzX2lkX2ZlbGRzXSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGllc2UgSUQgd3VyZGUgbm9jaCBuaWNodCBoaW56dWdlZsO8Z3QgPiBoaW56dWbDvGdlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkc192b25fZGF0ZW5zw6R0emVuLnB1c2goaW1wb3J0X2RhdGVuc2F0eltuYW1lX2Rlc19pZF9mZWxkc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByw7xmZW4sIG9iIGRpZSBJRCB6dWdlb3JkbmV0IHdlcmRlbiBrYW5uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHp1Z2Vow7ZyaWdlc19vYmpla3QgPSBfLmZpbmQoZGF0YS5yb3dzLCBmdW5jdGlvbihvYmpla3Rfcm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpla3Rfcm93LmtleSA9PT0gaW1wb3J0X2RhdGVuc2F0eltuYW1lX2Rlc19pZF9mZWxkc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHp1Z2Vow7ZyaWdlc19vYmpla3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZS5wdXNoKGltcG9ydF9kYXRlbnNhdHpbbmFtZV9kZXNfaWRfZmVsZHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaWVzZSBJRCBrb25udGUgbmljaHQgaGluenVnZWbDvGd0IHdlcmRlbi4gSW4gZGllIExpc3RlIGRlciBuaWNodCBoaW56dWdlZsO8Z3RlbiBhdWZuZWhtZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzX3Zvbl9uaWNodF9pbXBvcnRpZXJiYXJlbl9kYXRlbnPDpHR6ZW4ucHVzaChpbXBvcnRfZGF0ZW5zYXR6W25hbWVfZGVzX2lkX2ZlbGRzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaWVzZSBJRCB3dXJkZW4gc2Nob24gaGluenVnZWbDvGd0ID4gbWVocmZhY2ghXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVocmZhY2hfdm9ya29tbWVuZGVfaWRzLnB1c2goaW1wb3J0X2RhdGVuc2F0eltuYW1lX2Rlc19pZF9mZWxkc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblx0XHRcdFx0XHR3aW5kb3cuYWRiLm1lbGRlRXJmb2xnVm9uSWRJZGVudGlmaWthdGlvbl8wMihtZWhyZmFjaF92b3Jrb21tZW5kZV9pZHMsIGlkc192b25fZGF0ZW5zw6R0emVuLCBpZHNfdm9uX25pY2h0X2ltcG9ydGllcmJhcmVuX2RhdGVuc8OkdHplbiwgZGJzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRkYi52aWV3KCdhcnRlbmRiL2dydXBwZV9pZF90YXhvbm9taWVpZD9zdGFydGtleT1bXCInICsgd2luZG93LmFkYi5Ec0lkICsgJ1wiXSZlbmRrZXk9W1wiJyArIHdpbmRvdy5hZGIuRHNJZCArICdcIix7fSx7fV0nLCB7XG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVfZGVzX2lkX2ZlbGRzID0gd2luZG93LmFkYltkYnMrXCJGZWxkZXJJZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVyY2ggZGllIGltcG9ydGllcnRlbiBEYXRlbnPDpHR6ZSBsb29wZW5cbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHdpbmRvdy5hZGJbZGJzLnRvTG93ZXJDYXNlKCkrXCJEYXRlbnPDpHR6ZVwiXSwgZnVuY3Rpb24oaW1wb3J0X2RhdGVuc2F0eikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkc192b25fZGF0ZW5zw6R0emVuLmluZGV4T2YoaW1wb3J0X2RhdGVuc2F0eltuYW1lX2Rlc19pZF9mZWxkc10pID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpZXNlIElEIHd1cmRlIG5vY2ggbmljaHQgaGluenVnZWbDvGd0ID4gaGluenVmw7xnZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHNfdm9uX2RhdGVuc8OkdHplbi5wdXNoKGltcG9ydF9kYXRlbnNhdHpbbmFtZV9kZXNfaWRfZmVsZHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcsO8ZmVuLCBvYiBkaWUgSUQgenVnZW9yZG5ldCB3ZXJkZW4ga2FublxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6dWdlaMO2cmlnZXNfb2JqZWt0ID0gXy5maW5kKGRhdGEucm93cywgZnVuY3Rpb24ob2JqZWt0X3Jvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWt0X3Jvdy5rZXlbMl0gPT09IGltcG9ydF9kYXRlbnNhdHpbbmFtZV9kZXNfaWRfZmVsZHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6dWdlaMO2cmlnZXNfb2JqZWt0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBPYmpla3QgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWt0LklkID0gcGFyc2VJbnQoaW1wb3J0X2RhdGVuc2F0eltuYW1lX2Rlc19pZF9mZWxkc10sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWt0Lkd1aWQgPSB6dWdlaMO2cmlnZXNfb2JqZWt0LmtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZS5wdXNoKE9iamVrdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGllc2UgSUQga29ubnRlIG5pY2h0IGhpbnp1Z2Vmw7xndCB3ZXJkZW4uIEluIGRpZSBMaXN0ZSBkZXIgbmljaHQgaGluenVnZWbDvGd0ZW4gYXVmbmVobWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkc192b25fbmljaHRfaW1wb3J0aWVyYmFyZW5fZGF0ZW5zw6R0emVuLnB1c2goaW1wb3J0X2RhdGVuc2F0eltuYW1lX2Rlc19pZF9mZWxkc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGllc2UgSUQgd3VyZGVuIHNjaG9uIGhpbnp1Z2Vmw7xndCA+IG1laHJmYWNoIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1laHJmYWNoX3ZvcmtvbW1lbmRlX2lkcy5wdXNoKGltcG9ydF9kYXRlbnNhdHpbbmFtZV9kZXNfaWRfZmVsZHNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cdFx0XHRcdFx0d2luZG93LmFkYi5tZWxkZUVyZm9sZ1ZvbklkSWRlbnRpZmlrYXRpb25fMDIobWVocmZhY2hfdm9ya29tbWVuZGVfaWRzLCBpZHNfdm9uX2RhdGVuc8OkdHplbiwgaWRzX3Zvbl9uaWNodF9pbXBvcnRpZXJiYXJlbl9kYXRlbnPDpHR6ZW4sIGRicyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufTtcblxud2luZG93LmFkYi5tZWxkZUVyZm9sZ1ZvbklkSWRlbnRpZmlrYXRpb25fMDIgPSBmdW5jdGlvbihtZWhyZmFjaF92b3Jrb21tZW5kZV9pZHMsIGlkc192b25fZGF0ZW5zw6R0emVuLCBpZHNfdm9uX25pY2h0X2ltcG9ydGllcmJhcmVuX2RhdGVuc8OkdHplbiwgZGJzKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICB2YXIgJGltcG9ydGllcmVuX2Ric19pZHNfaWRlbnRpZml6aWVyZW5faGlud2Vpc190ZXh0ID0gJChcIiNpbXBvcnRpZXJlbl9cIitkYnMudG9Mb3dlckNhc2UoKStcIl9pZHNfaWRlbnRpZml6aWVyZW5faGlud2Vpc190ZXh0XCIpO1xuICAgICRpbXBvcnRpZXJlbl9kYnNfaWRzX2lkZW50aWZpemllcmVuX2hpbndlaXNfdGV4dC5hbGVydCgpO1xuXHQvLyByw7xja21lbGRlbjogRmFsbHMgbWVocmZhY2hlIElEJ3MsIG51ciBkYXMgcsO8Y2ttZWxkZW4gdW5kIGFiYnJlY2hlblxuXHRpZiAobWVocmZhY2hfdm9ya29tbWVuZGVfaWRzLmxlbmd0aCAmJiBkYnMgIT09IFwiQnNcIikge1xuXHRcdCRpbXBvcnRpZXJlbl9kYnNfaWRzX2lkZW50aWZpemllcmVuX2hpbndlaXNfdGV4dFxuICAgICAgICAgICAgLmh0bWwoXCJEaWUgZm9sZ2VuZGVuIElEJ3Mga29tbWVuIG1laHJmYWNoIHZvcjogXCIgKyBtZWhyZmFjaF92b3Jrb21tZW5kZV9pZHMgKyBcIjxicj5CaXR0ZSBlbnRmZXJuZW4gb2RlciBrb3JyaWdpZXJlbiBTaWUgZGllIGVudHNwcmVjaGVuZGVuIFplaWxlblwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtaW5mb1wiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpO1xuXHR9IGVsc2UgaWYgKHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emUubGVuZ3RoIDwgaWRzX3Zvbl9kYXRlbnPDpHR6ZW4ubGVuZ3RoKSB7XG5cdFx0Ly8gcsO8Y2ttZWxkZW46IFRvdGFsIHggRGF0ZW5zw6R0emUuIHkgZGF2b24gZW50aGFsdGVuIGRpZSBnZXfDpGhsdGUgSUQuIHEgZGF2b24ga8O2bm5lbiB6dWdlb3JkbmV0IHdlcmRlblxuICAgICAgICBpZiAod2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBlaW4gVGVpbCBkZXIgRGF0ZW5zw6R0emUga2FubiBpbXBvcnRpZXJ0IHdlcmRlbi4gQWxzIEhpbndlaXMgbWVsZGVuXG4gICAgICAgICAgICAkaW1wb3J0aWVyZW5fZGJzX2lkc19pZGVudGlmaXppZXJlbl9oaW53ZWlzX3RleHRcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGtlaW5lIERhdGVuc8OkdHplIGvDtm5uZW4gaW1wb3J0aWVyIHdlcmRlbi4gQWxzIE1pc3NlcmZvbGcgbWVsZGVuXG4gICAgICAgICAgICAkaW1wb3J0aWVyZW5fZGJzX2lkc19pZGVudGlmaXppZXJlbl9oaW53ZWlzX3RleHRcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1pbmZvXCIpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LWRhbmdlclwiKTtcbiAgICAgICAgfVxuXHRcdGlmIChkYnMgPT09IFwiQnNcIikge1xuXHRcdFx0JGltcG9ydGllcmVuX2Ric19pZHNfaWRlbnRpZml6aWVyZW5faGlud2Vpc190ZXh0Lmh0bWwoXCJEaWUgSW1wb3J0dGFiZWxsZSBlbnRow6RsdCBcIiArIHdpbmRvdy5hZGJbZGJzLnRvTG93ZXJDYXNlKCkrXCJEYXRlbnPDpHR6ZVwiXS5sZW5ndGggKyBcIiBCZXppZWh1bmdlbiB2b24gXCIgKyBpZHNfdm9uX2RhdGVuc8OkdHplbi5sZW5ndGggKyBcIiBBcnRlbjo8YnI+QmV6aWVodW5nZW4gdm9uIFwiICsgaWRzX3Zvbl9kYXRlbnPDpHR6ZW4ubGVuZ3RoICsgXCIgQXJ0ZW4gZW50aGFsdGVuIGVpbmVuIFdlcnQgaW0gRmVsZCBcXFwiXCIgKyB3aW5kb3cuYWRiW2RicytcIkZlbGRlcklkXCJdICsgXCJcXFwiPGJyPlwiICsgd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZS5sZW5ndGggKyBcIiBrw7ZubmVuIHp1Z2VvcmRuZXQgdW5kIGltcG9ydGllcnQgd2VyZGVuPGJyPkFDSFRVTkc6IEJlemllaHVuZ2VuIHZvbiBcIiArIGlkc192b25fbmljaHRfaW1wb3J0aWVyYmFyZW5fZGF0ZW5zw6R0emVuLmxlbmd0aCArIFwiIEFydGVuIG1pdCBkZW4gZm9sZ2VuZGVuIFdlcnRlbiBpbSBGZWxkIFxcXCJcIiArIHdpbmRvdy5hZGJbZGJzK1wiRmVsZGVySWRcIl0gKyBcIlxcXCIga8O2bm5lbiBOSUNIVCB6dWdlb3JkbmV0IHVuZCBpbXBvcnRpZXJ0IHdlcmRlbjogXCIgKyBpZHNfdm9uX25pY2h0X2ltcG9ydGllcmJhcmVuX2RhdGVuc8OkdHplbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRpbXBvcnRpZXJlbl9kYnNfaWRzX2lkZW50aWZpemllcmVuX2hpbndlaXNfdGV4dC5odG1sKFwiRGllIEltcG9ydHRhYmVsbGUgZW50aMOkbHQgXCIgKyB3aW5kb3cuYWRiW2Ricy50b0xvd2VyQ2FzZSgpK1wiRGF0ZW5zw6R0emVcIl0ubGVuZ3RoICsgXCIgRGF0ZW5zw6R0emU6PGJyPlwiICsgaWRzX3Zvbl9kYXRlbnPDpHR6ZW4ubGVuZ3RoICsgXCIgZW50aGFsdGVuIGVpbmVuIFdlcnQgaW0gRmVsZCBcXFwiXCIgKyB3aW5kb3cuYWRiW2RicytcIkZlbGRlcklkXCJdICsgXCJcXFwiPGJyPlwiICsgd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZS5sZW5ndGggKyBcIiBrw7ZubmVuIHp1Z2VvcmRuZXQgdW5kIGltcG9ydGllcnQgd2VyZGVuPGJyPkFDSFRVTkc6IFwiICsgaWRzX3Zvbl9uaWNodF9pbXBvcnRpZXJiYXJlbl9kYXRlbnPDpHR6ZW4ubGVuZ3RoICsgXCIgRGF0ZW5zw6R0emUgbWl0IGRlbiBmb2xnZW5kZW4gV2VydGVuIGltIEZlbGQgXFxcIlwiICsgd2luZG93LmFkYltkYnMrXCJGZWxkZXJJZFwiXSArIFwiXFxcIiBrw7ZubmVuIE5JQ0hUIHp1Z2VvcmRuZXQgdW5kIGltcG9ydGllcnQgd2VyZGVuOiBcIiArIGlkc192b25fbmljaHRfaW1wb3J0aWVyYmFyZW5fZGF0ZW5zw6R0emVuKTtcblx0XHR9XG5cdFx0JChcIiNcIitkYnMrXCJJbXBvcnRpZXJlblwiKS5zaG93KCk7XG5cdFx0JChcIiNcIitkYnMrXCJFbnRmZXJuZW5cIikuc2hvdygpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHLDvGNrbWVsZGVuOiBUb3RhbCB4IERhdGVuc8OkdHplLiB5IGRhdm9uIGVudGhhbHRlbiBkaWUgZ2V3w6RobHRlIElELiBxIGRhdm9uIGvDtm5uZW4genVnZW9yZG5ldCB3ZXJkZW5cblx0XHQkaW1wb3J0aWVyZW5fZGJzX2lkc19pZGVudGlmaXppZXJlbl9oaW53ZWlzX3RleHRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWluZm9cIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKVxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKTtcblx0XHRpZiAoZGJzID09PSBcIkJzXCIpIHtcblx0XHRcdCRpbXBvcnRpZXJlbl9kYnNfaWRzX2lkZW50aWZpemllcmVuX2hpbndlaXNfdGV4dC5odG1sKFwiRGllIEltcG9ydHRhYmVsbGUgZW50aMOkbHQgXCIgKyB3aW5kb3cuYWRiW2Ricy50b0xvd2VyQ2FzZSgpK1wiRGF0ZW5zw6R0emVcIl0ubGVuZ3RoICsgXCIgQmV6aWVodW5nZW4gdm9uIFwiICsgaWRzX3Zvbl9kYXRlbnPDpHR6ZW4ubGVuZ3RoICsgXCIgQXJ0ZW46PGJyPkJlemllaHVuZ2VuIHZvbiBcIiArIGlkc192b25fZGF0ZW5zw6R0emVuLmxlbmd0aCArIFwiIEFydGVuIGVudGhhbHRlbiBlaW5lbiBXZXJ0IGltIEZlbGQgXFxcIlwiICsgd2luZG93LmFkYltkYnMrXCJGZWxkZXJJZFwiXSArIFwiXFxcIjxicj5CZXppZWh1bmdlbiB2b24gXCIgKyB3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplLmxlbmd0aCArIFwiIEFydGVuIGvDtm5uZW4genVnZW9yZG5ldCB1bmQgaW1wb3J0aWVydCB3ZXJkZW5cIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRpbXBvcnRpZXJlbl9kYnNfaWRzX2lkZW50aWZpemllcmVuX2hpbndlaXNfdGV4dC5odG1sKFwiRGllIEltcG9ydHRhYmVsbGUgZW50aMOkbHQgXCIgKyB3aW5kb3cuYWRiW2Ricy50b0xvd2VyQ2FzZSgpK1wiRGF0ZW5zw6R0emVcIl0ubGVuZ3RoICsgXCIgRGF0ZW5zw6R0emU6PGJyPlwiICsgaWRzX3Zvbl9kYXRlbnPDpHR6ZW4ubGVuZ3RoICsgXCIgZW50aGFsdGVuIGVpbmVuIFdlcnQgaW0gRmVsZCBcXFwiXCIgKyB3aW5kb3cuYWRiW2RicytcIkZlbGRlcklkXCJdICsgXCJcXFwiPGJyPlwiICsgd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZS5sZW5ndGggKyBcIiBrw7ZubmVuIHp1Z2VvcmRuZXQgdW5kIGltcG9ydGllcnQgd2VyZGVuXCIpO1xuXHRcdH1cblx0XHQkKFwiI1wiK2RicytcIkltcG9ydGllcmVuXCIpLnNob3coKTtcblx0XHQkKFwiI1wiK2RicytcIkVudGZlcm5lblwiKS5zaG93KCk7XG5cdH1cbiAgICAkaW1wb3J0aWVyZW5fZGJzX2lkc19pZGVudGlmaXppZXJlbl9oaW53ZWlzX3RleHQuc2hvdygpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI2ltcG9ydGllcmVuX1wiICsgZGJzLnRvTG93ZXJDYXNlKCkgKyBcIl9pZHNfaWRlbnRpZml6aWVyZW5fY29sbGFwc2VcIikub2Zmc2V0KCkudG9wXG4gICAgfSwgMjAwMCk7XG59O1xuXG4vLyBiZWtvbW10IGRhcyBPYmpla3QgbWl0IGRlbiBEYXRlbnPDpHR6ZW4gKHdpbmRvdy5hZGIuZHNEYXRlbnPDpHR6ZSkgdW5kIGRpZSBMaXN0ZSBkZXIgenUgYWt0dWFsaXNpZXJlbmRlbiBEYXRlbnPDpHR6ZSAod2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZSlcbi8vIGhvbHQgc2ljaCBzZWxiZXIgZGllIGluIGRlbiBGZWxkZXJuIGVyZmFzc3RlbiBJbmZvcyBkZXIgRGF0ZW5zYW1tbHVuZ1xud2luZG93LmFkYi5pbXBvcnRpZXJlRGF0ZW5zYW1tbHVuZyA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBkYXRlbnNhbW1sdW5nLFxuXHRcdGFuemFobF9mZWxkZXIsXG5cdFx0YW56X2RzID0gd2luZG93LmFkYi5kc0RhdGVuc8OkdHplLmxlbmd0aCxcbiAgICAgICAgLy8gRGVyIFZlcmxhdWYgc29sbCBhbmdlemVpZ3Qgd2VyZGVuLCBkYWhlciBicmF1Y2h0IGVzIGVpbmVuIHrDpGhsZXJcbiAgICAgICAgYW56X2RzX2ltcG9ydGllcnQgPSAwLFxuXHRcdERzSW1wb3J0aWVydCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgJERzTmFtZSA9ICQoXCIjRHNOYW1lXCIpLFxuICAgICAgICAkRHNCZXNjaHJlaWJ1bmcgPSAkKFwiI0RzQmVzY2hyZWlidW5nXCIpLFxuICAgICAgICBucixcbiAgICAgICAgcsO8Y2ttZWxkdW5nX2ludHJvLFxuICAgICAgICByw7xja21lbGR1bmdfbGlua3MgPSBcIlwiLFxuICAgICAgICByw7xja21lbGR1bmcsXG4gICAgICAgICREc0RhdGVuc3RhbmQgPSAkKFwiI0RzRGF0ZW5zdGFuZFwiKSxcbiAgICAgICAgJERzTGluayA9ICQoXCIjRHNMaW5rXCIpLFxuICAgICAgICAkRHNVcnNwcnVuZ3NEcyA9ICQoXCIjRHNVcnNwcnVuZ3NEc1wiKSxcbiAgICAgICAgJGltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXMgPSAkKFwiI2ltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNcIiksXG4gICAgICAgICRpbXBvcnRpZXJlbl9kc19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzX3RleHQgPSAkKFwiI2ltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dFwiKSxcbiAgICAgICAgZXJzdGVfMTBfaWRzO1xuXHQvLyBwcsO8ZmVuLCBvYiBlaW4gRHNOYW1lIGVyZmFzc3Qgd3VyZGUuIFdlbm4gbmljaHQ6IG1lbGRlblxuXHRpZiAoISREc05hbWUudmFsKCkpIHtcblx0XHQkKFwiI21lbGR1bmdfaW5kaXZpZHVlbGxfbGFiZWxcIikuaHRtbChcIk5hbWVuIGZlaGx0XCIpO1xuXHRcdCQoXCIjbWVsZHVuZ19pbmRpdmlkdWVsbF90ZXh0XCIpLmh0bWwoXCJCaXR0ZSBnZWJlbiBTaWUgZGVyIERhdGVuc2FtbWx1bmcgZWluZW4gTmFtZW5cIik7XG5cdFx0JChcIiNtZWxkdW5nX2luZGl2aWR1ZWxsX3NjaGxpZXNzZW5cIikuaHRtbChcInNjaGxpZXNzZW5cIik7XG5cdFx0JCgnI21lbGR1bmdfaW5kaXZpZHVlbGwnKS5tb2RhbCgpO1xuXHRcdCREc05hbWUuZm9jdXMoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuICAgIC8vIGNoYW5nZXMgZmVlZCBlaW5yaWNodGVuXG4gICAgLy8gdmVyc3VjaHQsIHZpZXcgYWxzIEZpbHRlciB6dSB2ZXJ3ZW5kZW4sIG9kZXIgYmVzc2VyLCBkZW4gZXhwbGl6aXRlbiBGaWx0ZXIgZHNpbXBvcnQgbWl0IGRzbmFtZSBhbHMgS3JpdGVyaXVtXG4gICAgLy8gRXJnZWJuaXM6IGJlaSB2aWV3IGthbWVuIGFsbGUgY2hhbmdlcywgYXVjaCBkZXNpZ24gZG9jLiBCZWkgZHNpbXBvcnQga2FtIG5pY2h0cy5cbiAgICAvKnZhciBjaGFuZ2VzX29wdGlvbnMgPSB7fTtcbiAgICBjaGFuZ2VzX29wdGlvbnMuZHNuYW1lID0gJERzTmFtZS52YWwoKTtcbiAgICBjaGFuZ2VzX29wdGlvbnMuZmlsdGVyID0gXCJhcnRlbmRiL2RzaW1wb3J0XCI7XG4gICAgd2luZG93LmFkYi5xdWVyeUNoYW5nZXNTdGFydGluZ05vdygpO1xuXG4gICAgLy8gbGlzdGVuZXIgZWlucmljaHRlbiwgZGVyIG1lbGRldCwgd2VubiBlaW4gRGF0ZW5zYXR6IGFrdHVhbGlzaWVydCB3dXJkZVxuICAgICQoZG9jdW1lbnQpLmJpbmQoJ2xvbmdwb2xsLWRhdGEnLCBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICBhbnpEc0ltcG9ydGllcnQgPSBhbnpEc0ltcG9ydGllcnQgKyBkYXRhLnJlc3VsdHMubGVuZ3RoO1xuICAgICAgICB2YXIgcHJvemVudCA9IE1hdGgucm91bmQoYW56RHNJbXBvcnRpZXJ0L2FuekRzKjEwMCk7XG4gICAgICAgICQoXCIjRHNJbXBvcnRpZXJlblByb2dyZXNzYmFyXCIpLmNzcygnd2lkdGgnLCBwcm96ZW50ICsnJScpLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm96ZW50KTtcbiAgICAgICAgaWYgKGFuekRzSW1wb3J0aWVydCA+PSBhbnpEcy0xICYmIGFuekRzSW1wb3J0aWVydCA8PSBhbnpEcykge1xuICAgICAgICAgICAgLy8gUsO8Y2ttZWxkdW5nIGluIEZlbGQgYW56ZWlnZW46XG4gICAgICAgICAgICAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpcy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgfVxuICAgIH0pOyovXG5cbiAgICAvLyBsaXN0ZW5lciBlaW5yaWNodGVuLCBkZXIgbWVsZGV0LCB3ZW5uIGVpbiBEYXRlbnNhdHogYWt0dWFsaXNpZXJ0IHd1cmRlXG4gICAgJChkb2N1bWVudCkuYmluZCgnYWRiLmRzX2hpbnp1Z2Vmw7xndCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBhbnpfZHNfaW1wb3J0aWVydCsrO1xuICAgICAgICB2YXIgcHJvemVudCA9IE1hdGgucm91bmQoYW56X2RzX2ltcG9ydGllcnQvYW56X2RzKjEwMCksXG4gICAgICAgICAgICByw7xja21lbGR1bmc7XG4gICAgICAgICQoXCIjRHNJbXBvcnRpZXJlblByb2dyZXNzYmFyXCIpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsIHByb3plbnQgKyclJylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLXZhbHVlbm93JywgcHJvemVudCk7XG4gICAgICAgICQoXCIjRHNJbXBvcnRpZXJlblByb2dyZXNzYmFyVGV4dFwiKS5odG1sKHByb3plbnQgKyBcIiVcIik7XG4gICAgICAgICRpbXBvcnRpZXJlbl9kc19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKS5hZGRDbGFzcyhcImFsZXJ0LWluZm9cIik7XG4gICAgICAgIHLDvGNrbWVsZHVuZyA9IFwiRGllIERhdGVuIHd1cmRlbiBpbXBvcnRpZXJ0Ljxicj5EaWUgSW5kZXhlIHdlcmRlbiBha3R1YWxpc2llcnQuLi5cIjtcbiAgICAgICAgJGltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5odG1sKHLDvGNrbWVsZHVuZyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJGltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXMub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgICBpZiAoYW56X2RzX2ltcG9ydGllcnQgPT09IGFuel9kcykge1xuICAgICAgICAgICAgLy8gZGllIEluZGV4ZVxuICAgICAgICAgICAgdmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuICAgICAgICAgICAgJGRiLnZpZXcoJ2FydGVuZGIvbHInLCB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1lbGRlbiwgZGFzcyB2aWV3cyBha3R1YWxpc2llcnQgd3VyZGVuXG4gICAgICAgICAgICAgICAgICAgICRpbXBvcnRpZXJlbl9kc19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzLnJlbW92ZUNsYXNzKFwiYWxlcnQtaW5mb1wiKS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKS5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIHLDvGNrbWVsZHVuZyA9IFwiRGllIERhdGVuIHd1cmRlbiBpbXBvcnRpZXJ0Ljxicj5cIjtcbiAgICAgICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nICs9IFwiRGllIEluZGV4ZSB3dXJkZW4gYWt0dWFsaXNpZXJ0Ljxicj48YnI+XCI7XG4gICAgICAgICAgICAgICAgICAgIHLDvGNrbWVsZHVuZyArPSBcIk5hY2hmb2xnZW5kIExpbmtzIHp1IE9iamVrdGVuIG1pdCBpbXBvcnRpZXJ0ZW4gRGF0ZW4sIGRhbWl0IFNpZSBkYXMgUmVzdWx0YXQgw7xiZXJwcsO8ZmVuIGvDtm5uZW46PGJyPlwiO1xuICAgICAgICAgICAgICAgICAgICAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc190ZXh0Lmh0bWwocsO8Y2ttZWxkdW5nICsgcsO8Y2ttZWxkdW5nX2xpbmtzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUsO8Y2ttZWxkdW5ncy1saW5rcyBiZWhhbHRlbiwgZmFsbHMgZGVyIEJlbnV0emVyIGRpcmVrdCBhbnNjaGxpZXNzZW5kIGVudGZlcm50XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGIucsO8Y2ttZWxkdW5nX2xpbmtzID0gcsO8Y2ttZWxkdW5nX2xpbmtzO1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICRpbXBvcnRpZXJlbl9kc19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIF8uZWFjaCh3aW5kb3cuYWRiLmRzRGF0ZW5zw6R0emUsIGZ1bmN0aW9uKGRzX2RhdGVuc2F0eikge1xuICAgICAgICAvLyBEYXRlbnNhbW1sdW5nIGFscyBPYmpla3QgZ3LDvG5kZW5cbiAgICAgICAgZGF0ZW5zYW1tbHVuZyA9IHt9O1xuICAgICAgICBkYXRlbnNhbW1sdW5nLk5hbWUgPSAkRHNOYW1lLnZhbCgpO1xuICAgICAgICBpZiAoJERzQmVzY2hyZWlidW5nLnZhbCgpKSB7XG4gICAgICAgICAgICBkYXRlbnNhbW1sdW5nLkJlc2NocmVpYnVuZyA9ICREc0Jlc2NocmVpYnVuZy52YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJERzRGF0ZW5zdGFuZC52YWwoKSkge1xuICAgICAgICAgICAgZGF0ZW5zYW1tbHVuZy5EYXRlbnN0YW5kID0gJERzRGF0ZW5zdGFuZC52YWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJERzTGluay52YWwoKSkge1xuICAgICAgICAgICAgZGF0ZW5zYW1tbHVuZy5MaW5rID0gJERzTGluay52YWwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmYWxscyBkaWUgRGF0ZW5zYW1tbHVuZyB6dXNhbW1lbmZhc3NlbmQgaXN0XG4gICAgICAgIGlmICgkKFwiI0RzWnVzYW1tZW5mYXNzZW5kXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgZGF0ZW5zYW1tbHVuZy56dXNhbW1lbmZhc3NlbmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkRHNVcnNwcnVuZ3NEcy52YWwoKSkge1xuICAgICAgICAgICAgZGF0ZW5zYW1tbHVuZy5VcnNwcnVuZ3NkYXRlbnNhbW1sdW5nID0gJERzVXJzcHJ1bmdzRHMudmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZW5zYW1tbHVuZ1tcImltcG9ydGllcnQgdm9uXCJdID0gbG9jYWxTdG9yYWdlLkVtYWlsO1xuICAgICAgICAvLyBGZWxkZXIgZGVyIERhdGVuc2FtbWx1bmcgYWxzIE9iamVrdCBncsO8bmRlblxuICAgICAgICBkYXRlbnNhbW1sdW5nLkVpZ2Vuc2NoYWZ0ZW4gPSB7fTtcbiAgICAgICAgLy8gRmVsZGVyIGFuZsO8Z2VuLCB3ZW5uIHNpZSBXZXJ0ZSBlbnRoYWx0ZW5cbiAgICAgICAgYW56YWhsX2ZlbGRlciA9IDA7XG4gICAgICAgIF8uZWFjaChkc19kYXRlbnNhdHosIGZ1bmN0aW9uKGZlbGR3ZXJ0LCBmZWxkbmFtZSkge1xuICAgICAgICAgICAgLy8gbmljaHQgaW1wb3J0aWVydCB3aXJkIGRpZSBJRCB1bmQgbGVlcmUgRmVsZGVyXG4gICAgICAgICAgICAvLyB1bmQga2VpbmUgVGF4b25vbWllIElELCB3ZW5uIHNpZSBudXIgd2VnZW4gZGVyIElkZW50aWZpa2F0aW9uIG1pdGdlbGllZmVydCB3dXJkZVxuICAgICAgICAgICAgLy9pZiAoZmVsZG5hbWUgIT09IHdpbmRvdy5hZGIuRHNGZWxkZXJJZCAmJiBmZWxkd2VydCAhPT0gXCJcIiAmJiBmZWxkd2VydCAhPT0gbnVsbCAmJiAod2luZG93LmFkYi5Ec0lkICE9PSBcImd1aWRcIiAmJiBmZWxkbmFtZSAhPT0gXCJUYXhvbm9taWUgSURcIikpIHtcbiAgICAgICAgICAgIGlmIChmZWxkbmFtZSAhPT0gd2luZG93LmFkYi5Ec0ZlbGRlcklkICYmIGZlbGR3ZXJ0ICE9PSBcIlwiICYmIGZlbGR3ZXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlbGR3ZXJ0ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBY2Nlc3MgbWFjaHQgaW4gQWJmcmFnZW4gbWl0IFdlbm4tS2xhdXNlbCBhdXMgdHJ1ZSAtMSA+IGtvcnJpZ2llcmVuXG4gICAgICAgICAgICAgICAgICAgIGRhdGVuc2FtbWx1bmcuRWlnZW5zY2hhZnRlbltmZWxkbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVsZHdlcnQgPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ1ZS9mYWxzZSBuaWNodCBhbHMgc3RyaW5nIGltcG9ydGllcmVuXG4gICAgICAgICAgICAgICAgICAgIGRhdGVuc2FtbWx1bmcuRWlnZW5zY2hhZnRlbltmZWxkbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVsZHdlcnQgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVuc2FtbWx1bmcuRWlnZW5zY2hhZnRlbltmZWxkbmFtZV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlbGR3ZXJ0ID09IHBhcnNlSW50KGZlbGR3ZXJ0LCAxMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2FuenphaGxlbiBhbHMgWmFobGVuIGltcG9ydGllcmVuXG4gICAgICAgICAgICAgICAgICAgIGRhdGVuc2FtbWx1bmcuRWlnZW5zY2hhZnRlbltmZWxkbmFtZV0gPSBwYXJzZUludChmZWxkd2VydCwgMTApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVsZHdlcnQgPT0gcGFyc2VGbG9hdChmZWxkd2VydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQnJ1Y2h6YWhsZW4gYWxzIFphaGxlbiBpbXBvcnRpZXJlblxuICAgICAgICAgICAgICAgICAgICBkYXRlbnNhbW1sdW5nLkVpZ2Vuc2NoYWZ0ZW5bZmVsZG5hbWVdID0gcGFyc2VGbG9hdChmZWxkd2VydCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm9ybWFsZmFsbFxuICAgICAgICAgICAgICAgICAgICBkYXRlbnNhbW1sdW5nLkVpZ2Vuc2NoYWZ0ZW5bZmVsZG5hbWVdID0gZmVsZHdlcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFuemFobF9mZWxkZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVudHNwcmVjaGVuZGVuIEluZGV4IMO2ZmZuZW5cbiAgICAgICAgLy8gc2ljaGVyc3RlbGxlbiwgZGFzcyBEYXRlbiB2b3Jrb21tZW4uIEdpYnQgc29uc3QgZWluZW4gRmVobGVyXG4gICAgICAgIGlmIChhbnphaGxfZmVsZGVyID4gMCkge1xuICAgICAgICAgICAgLy8gRGF0ZW5iYW5rYWJmcmFnZSBpc3QgbGFuZ3NhbS4gRXh0ZXJuIGF1ZnJ1ZmVuLFxuICAgICAgICAgICAgLy8gc29uc3Qgw7xiZXJob2x0IGRpZSBmb3ItU2NobGF1ZmUgdW5kIERhdGVuc2FtbWx1bmcgaXN0IGJpcyB6dXIgc2F2ZURvYy1BdXNmw7xocnVuZyBlaW5lIGFuZGVyZSFcbiAgICAgICAgICAgIHZhciBndWlkO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5hZGIuRHNJZCA9PT0gXCJndWlkXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBkaWUgaW4gZGVyIFRhYmVsbGUgbWl0Z2VsaWVmZXJ0ZSBpZCBpc3QgZGllIGd1aWRcbiAgICAgICAgICAgICAgICBndWlkID0gZHNfZGF0ZW5zYXR6W3dpbmRvdy5hZGIuRHNGZWxkZXJJZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkc19kYXRlbnNhdHpfbWl0X3JpY2h0aWdlcl9pZCA9IF8uZmluZCh3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplLCBmdW5jdGlvbihkYXRlbnNhdHopIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVuc2F0ei5JZCA9PSBkc19kYXRlbnNhdHpbd2luZG93LmFkYi5Ec0ZlbGRlcklkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBndWlkID0gZHNfZGF0ZW5zYXR6X21pdF9yaWNodGlnZXJfaWQuR3VpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGthbm4gc2VpbiwgZGFzcyBkZXIgZ3VpZCBvYmVuIG5pY2h0IHp1Z2VvcmRuZXQgd2VyZGVuIGtvbm50ZS4gRGFubiBuaWNodCBhbmbDvGdlblxuICAgICAgICAgICAgaWYgKGd1aWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImbDvGdlIGRzIHp1IG9iamVrdFwiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRiLmbDvGdlRGF0ZW5zYW1tbHVuZ1p1T2JqZWt0KGd1aWQsIGRhdGVuc2FtbWx1bmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gRsO8ciAxMCBLb250cm9sbGJlaXNwaWVsZSBkaWUgTGlua3MgYXVmYmF1ZW5cbiAgICBpZiAod2luZG93LmFkYi5Ec0lkID09PSBcImd1aWRcIikge1xuICAgICAgICBlcnN0ZV8xMF9pZHMgPSBfLmZpcnN0KHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emUsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnN0ZV8xMF9pZHMgPSBfLnBsdWNrKF8uZmlyc3Qod2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZSwgMTApLCBcIkd1aWRcIik7XG4gICAgfVxuICAgIF8uZWFjaChlcnN0ZV8xMF9pZHMsIGZ1bmN0aW9uKGlkLCBpbmRleCkge1xuICAgICAgICBuciA9IGluZGV4ICsgMTtcbiAgICAgICAgcsO8Y2ttZWxkdW5nX2xpbmtzICs9ICc8YSBocmVmPVwiJyArICQobG9jYXRpb24pLmF0dHIoXCJwcm90b2NvbFwiKSArICcvLycgKyAkKGxvY2F0aW9uKS5hdHRyKFwiaG9zdFwiKSArICQobG9jYXRpb24pLmF0dHIoXCJwYXRobmFtZVwiKSArICc/aWQ9JyArIGlkICsgJ1wiICB0YXJnZXQ9XCJfYmxhbmtcIj5CZWlzcGllbCAnICsgbnIgKyAnPC9hPjxicj4nO1xuICAgIH0pO1xuXG4gICAgLy8gUsO8Y2ttZWxkdW5nIGluIEZlbGQgYW56ZWlnZW5cbiAgICAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpcy5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIikucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIikuYWRkQ2xhc3MoXCJhbGVydC1pbmZvXCIpO1xuICAgIHLDvGNrbWVsZHVuZyA9IFwiRGllIERhdGVuIHdlcmRlbiBpbXBvcnRpZXJ0Li4uXCI7XG5cdCRpbXBvcnRpZXJlbl9kc19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzX3RleHQuaHRtbChyw7xja21lbGR1bmcpO1xuICAgICRpbXBvcnRpZXJlbl9kc19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpcy5vZmZzZXQoKS50b3BcbiAgICB9LCAyMDAwKTtcblx0RHNJbXBvcnRpZXJ0LnJlc29sdmUoKTtcbn07XG5cbi8vIHdpcmQgbW9tZW50YW4gbmljaHQgYmVudXR6dFxud2luZG93LmFkYi5xdWVyeUNoYW5nZXNTdGFydGluZ05vdyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2luY2UgPSBcIm5vd1wiO1xuICAgIGlmIChvcHRpb25zLmZpbHRlcikge1xuICAgICAgICAvLyBkZXIgRmlsdGVyIGJyZW1zdCBkaWUgQWJmcmFnZSAtIGRhcyBpc3Qgc2NobGVjaHQsIHdlaWwgZGFubiBiZXJlaXRzIERTIGFrdHVhbGlzaWVydCB3dXJkZW4hXG4gICAgICAgIC8vIGRhaGVyIGbDvHIgZGllIEVyc3RhYmZyYWdlIGVudGZlcm5lblxuICAgICAgICB2YXIgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIHZhciBkc25hbWUgPSBvcHRpb25zLmRzbmFtZTtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudmlldztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZHNuYW1lO1xuICAgIH1cbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICB1cmw6IFwiL2FydGVuZGIvX2NoYW5nZXNcIixcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBkYXRhOiBvcHRpb25zXG4gICAgfSlcbiAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2xvbmdwb2xsLWRhdGEnLCBkYXRhLCBkYXRhLmxhc3Rfc2VxKTtcbiAgICAgICAgb3B0aW9ucy5mZWVkID0gXCJsb25ncG9sbFwiO1xuICAgICAgICBvcHRpb25zLnNpbmNlID0gZGF0YS5sYXN0X3NlcTtcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgICAgICBvcHRpb25zLmRzbmFtZSA9IGRzbmFtZTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIHVybDogXCIvYXJ0ZW5kYi9fY2hhbmdlc1wiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgZGF0YTogb3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbihkYXRhMikge1xuICAgICAgICAgICAgaWYgKGRhdGEyLnJlc3VsdHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdsb25ncG9sbC1kYXRhMicsIGRhdGEyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMuc2luY2UgPSBkYXRhMi5sYXN0X3NlcTtcbiAgICAgICAgICAgIC8vIGRhZsO8ciBzb3JnZW4sIGRhc3Mgd2VpdGVyIGJlb2JhY2h0ZXQgd2lyZFxuICAgICAgICAgICAgd2luZG93LmFkYi5xdWVyeUNoYW5nZXMob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuLy8gd2lyZCBtb21lbnRhbiBuaWNodCBiZW51dHp0XG53aW5kb3cuYWRiLnF1ZXJ5Q2hhbmdlcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2luY2UgPSBvcHRpb25zLnNpbmNlIHx8IFwibm93XCI7XG4gICAgb3B0aW9ucy5mZWVkID0gb3B0aW9ucy5mZWVkIHx8IFwibG9uZ3BvbGxcIjtcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICB1cmw6IFwiL2FydGVuZGIvX2NoYW5nZXNcIixcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBkYXRhOiBvcHRpb25zXG4gICAgfSlcbiAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2xvbmdwb2xsLWRhdGEnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnNpbmNlID0gZGF0YS5sYXN0X3NlcTtcbiAgICAgICAgd2luZG93LmFkYi5xdWVyeUNoYW5nZXMob3B0aW9ucyk7XG4gICAgfSk7XG59O1xuXG4vLyBiZWtvbW10IGRhcyBPYmpla3QgbWl0IGRlbiBEYXRlbnPDpHR6ZW4gKHdpbmRvdy5hZGIuYnNEYXRlbnPDpHR6ZSkgdW5kIGRpZSBMaXN0ZSBkZXIgenUgYWt0dWFsaXNpZXJlbmRlbiBEYXRlbnPDpHR6ZSAod2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZSlcbi8vIGhvbHQgc2ljaCBzZWxiZXIgZGllIGluIGRlbiBGZWxkZXJuIGVyZmFzc3RlbiBJbmZvcyBkZXIgRGF0ZW5zYW1tbHVuZ1xud2luZG93LmFkYi5pbXBvcnRpZXJlQmV6aWVodW5nc3NhbW1sdW5nID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGFuemFobF9mZWxkZXIsXG5cdFx0YW56YWhsX2JlemllaHVuZ3NzYW1tbHVuZ2VuID0gd2luZG93LmFkYi5ic0RhdGVuc8OkdHplLmxlbmd0aCxcbiAgICAgICAgYW56X2JzX2ltcG9ydGllcnQgPSAwLFxuICAgICAgICBlcnN0ZV8xMF9pZHMsXG4gICAgICAgIG5yLFxuICAgICAgICByw7xja21lbGR1bmcsXG4gICAgICAgIHLDvGNrbWVsZHVuZ19pbnRybyxcbiAgICAgICAgcsO8Y2ttZWxkdW5nX2xpbmtzID0gXCJcIixcblx0XHRic19pbXBvcnRpZXJ0ID0gJC5EZWZlcnJlZCgpLFxuICAgICAgICAkQnNOYW1lID0gJChcIiNCc05hbWVcIiksXG4gICAgICAgICRCc0Jlc2NocmVpYnVuZyA9ICQoXCIjQnNCZXNjaHJlaWJ1bmdcIiksXG4gICAgICAgICRCc0RhdGVuc3RhbmQgPSAkKFwiI0JzRGF0ZW5zdGFuZFwiKSxcbiAgICAgICAgJEJzTGluayA9ICQoXCIjQnNMaW5rXCIpLFxuICAgICAgICAkQnNVcnNwcnVuZ3NCcyA9ICQoXCIjQnNVcnNwcnVuZ3NCc1wiKSxcbiAgICAgICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXMgPSAkKFwiI2ltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNcIiksXG4gICAgICAgICRpbXBvcnRpZXJlbl9ic19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzX3RleHQgPSAkKFwiI2ltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dFwiKTtcblx0Ly8gcHLDvGZlbiwgb2IgZWluIEJzTmFtZSBlcmZhc3N0IHd1cmRlLiBXZW5uIG5pY2h0OiBtZWxkZW5cblx0aWYgKCEkQnNOYW1lLnZhbCgpKSB7XG5cdFx0JChcIiNtZWxkdW5nX2luZGl2aWR1ZWxsX2xhYmVsXCIpLmh0bWwoXCJOYW1lbiBmZWhsdFwiKTtcblx0XHQkKFwiI21lbGR1bmdfaW5kaXZpZHVlbGxfdGV4dFwiKS5odG1sKFwiQml0dGUgZ2ViZW4gU2llIGRlciBCZXppZWh1bmdzc2FtbWx1bmcgZWluZW4gTmFtZW5cIik7XG5cdFx0JChcIiNtZWxkdW5nX2luZGl2aWR1ZWxsX3NjaGxpZXNzZW5cIikuaHRtbChcInNjaGxpZXNzZW5cIik7XG5cdFx0JCgnI21lbGR1bmdfaW5kaXZpZHVlbGwnKS5tb2RhbCgpO1xuXHRcdCRCc05hbWUuZm9jdXMoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBSw7xja21lbGR1bmcgaW4gRmVsZCBhbnplaWdlbjpcbiAgICByw7xja21lbGR1bmcgPSBcIkRpZSBEYXRlbiB3ZXJkZW4gaW1wb3J0aWVydC4uLlwiO1xuICAgICRpbXBvcnRpZXJlbl9ic19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzX3RleHQuaHRtbChyw7xja21lbGR1bmcpO1xuICAgICRpbXBvcnRpZXJlbl9ic19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LWluZm9cIik7XG4gICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXMuYWxlcnQoKS5zaG93KCk7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICRpbXBvcnRpZXJlbl9ic19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzLm9mZnNldCgpLnRvcFxuICAgIH0sIDIwMDApO1xuXG4gICAgLy8gbGlzdGVuZXIgZWlucmljaHRlbiwgZGVyIG1lbGRldCwgd2VubiBlaW4gRGF0ZW5zYXR6IGFrdHVhbGlzaWVydCB3dXJkZVxuICAgICQoZG9jdW1lbnQpLmJpbmQoJ2FkYi5ic19oaW56dWdlZsO8Z3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYW56X2JzX2ltcG9ydGllcnQrKztcbiAgICAgICAgdmFyIHByb3plbnQgPSBNYXRoLnJvdW5kKGFuel9ic19pbXBvcnRpZXJ0L2FuemFobF9iZXppZWh1bmdzc2FtbWx1bmdlbioxMDApO1xuICAgICAgICAkKFwiI0JzSW1wb3J0aWVyZW5Qcm9ncmVzc2JhclwiKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCBwcm96ZW50ICsnJScpXG4gICAgICAgICAgICAuYXR0cignYXJpYS12YWx1ZW5vdycsIHByb3plbnQpO1xuICAgICAgICAkKFwiI0JzSW1wb3J0aWVyZW5Qcm9ncmVzc2JhclRleHRcIikuaHRtbChwcm96ZW50ICsgXCIlXCIpO1xuICAgICAgICAkaW1wb3J0aWVyZW5fYnNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJhbGVydC1pbmZvXCIpXG4gICAgICAgICAgICAuc2hvdygpO1xuICAgICAgICByw7xja21lbGR1bmcgPSBcIkRpZSBEYXRlbiB3ZXJkZW4gaW1wb3J0aWVydC4uLjxicj5EaWUgSW5kZXhlIHdlcmRlbiBha3R1YWxpc2llcnQuLi5cIjtcbiAgICAgICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5odG1sKHLDvGNrbWVsZHVuZyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXMub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgICBpZiAoYW56X2JzX2ltcG9ydGllcnQgPT09IGFuemFobF9iZXppZWh1bmdzc2FtbWx1bmdlbikge1xuICAgICAgICAgICAgLy8gSW5kaWNlcyBha3R1YWxpc2llcmVuXG4gICAgICAgICAgICB2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG4gICAgICAgICAgICAkZGIudmlldygnYXJ0ZW5kYi9scicsIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVsZGVuLCBkYXNzIEluZGV4ZSBha3R1YWxpc2llcnQgd3VyZGVuXG4gICAgICAgICAgICAgICAgICAgICRpbXBvcnRpZXJlbl9ic19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1pbmZvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHLDvGNrbWVsZHVuZyA9IFwiRGllIERhdGVuIHd1cmRlbiBpbXBvcnRpZXJ0Ljxicj5cIjtcbiAgICAgICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nICs9IFwiRGllIEluZGV4ZSB3dXJkZW4gbmV1IGF1ZmdlYmF1dC48YnI+PGJyPlwiO1xuICAgICAgICAgICAgICAgICAgICByw7xja21lbGR1bmcgKz0gXCJOYWNoZm9sZ2VuZCBMaW5rcyB6dSBPYmpla3RlbiBtaXQgaW1wb3J0aWVydGVuIERhdGVuLCBkYW1pdCBTaWUgZGFzIFJlc3VsdGF0IMO8YmVycHLDvGZlbiBrw7ZubmVuOjxicj5cIjtcbiAgICAgICAgICAgICAgICAgICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5odG1sKHLDvGNrbWVsZHVuZyArIHLDvGNrbWVsZHVuZ19saW5rcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFLDvGNrbWVsZHVuZ3MtbGlua3MgYmVoYWx0ZW4sIGZhbGxzIGRlciBCZW51dHplciBkaXJla3QgYW5zY2hsaWVzc2VuZCBlbnRmZXJudFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRiLnLDvGNrbWVsZHVuZ19saW5rcyA9IHLDvGNrbWVsZHVuZ19saW5rcztcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkaW1wb3J0aWVyZW5fYnNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpcy5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXHQvLyB6dWVyc3Q6IFZlcmFubGFzc2VuLCBkYXNzIGRpZSBCZXppZWh1bmdzcGFydG5lciBpbiB3aW5kb3cuYWRiLmJzRGF0ZW5zw6R0emUgaW4gZWluZW4gQXJyYXkgZGVyIHJpY2h0aWdlbiBGb3JtIHVtZ2V3YW5kZWx0IHdlcmRlblxuXHQkLndoZW4od2luZG93LmFkYi5iZXJlaXRlQmV6aWVodW5nc3BhcnRuZXJGw7xySW1wb3J0Vm9yKCkpXG5cdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRhbnphaGxfYmV6aWVodW5nc3NhbW1sdW5nZW4gPSAwO1xuXHRcdFx0XHR2YXIgYmV6aWVodW5nc3NhbW1sdW5nLFxuICAgICAgICAgICAgICAgICAgICBiZXppZWh1bmdzc2FtbWx1bmdfdm9ybGFnZSA9IHt9O1xuXHRcdFx0XHRiZXppZWh1bmdzc2FtbWx1bmdfdm9ybGFnZS5OYW1lID0gJEJzTmFtZS52YWwoKTtcblx0XHRcdFx0aWYgKCRCc0Jlc2NocmVpYnVuZy52YWwoKSkge1xuXHRcdFx0XHRcdGJlemllaHVuZ3NzYW1tbHVuZ192b3JsYWdlLkJlc2NocmVpYnVuZyA9ICRCc0Jlc2NocmVpYnVuZy52YWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoJEJzRGF0ZW5zdGFuZC52YWwoKSkge1xuXHRcdFx0XHRcdGJlemllaHVuZ3NzYW1tbHVuZ192b3JsYWdlLkRhdGVuc3RhbmQgPSAkQnNEYXRlbnN0YW5kLnZhbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkQnNMaW5rLnZhbCgpKSB7XG5cdFx0XHRcdFx0YmV6aWVodW5nc3NhbW1sdW5nX3ZvcmxhZ2UuTGluayA9ICRCc0xpbmsudmFsKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gZmFsbHMgZGllIERhdGVuc2FtbWx1bmcgenVzYW1tZW5mYXNzZW5kIGlzdFxuXHRcdFx0XHRpZiAoJChcIiNCc1p1c2FtbWVuZmFzc2VuZFwiKS5wcm9wKCdjaGVja2VkJykpIHtcblx0XHRcdFx0XHRiZXppZWh1bmdzc2FtbWx1bmdfdm9ybGFnZS56dXNhbW1lbmZhc3NlbmQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkQnNVcnNwcnVuZ3NCcy52YWwoKSkge1xuXHRcdFx0XHRcdGJlemllaHVuZ3NzYW1tbHVuZ192b3JsYWdlLlVyc3BydW5nc2RhdGVuc2FtbWx1bmcgPSAkQnNVcnNwcnVuZ3NCcy52YWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRiZXppZWh1bmdzc2FtbWx1bmdfdm9ybGFnZVtcImltcG9ydGllcnQgdm9uXCJdID0gbG9jYWxTdG9yYWdlLkVtYWlsO1xuXHRcdFx0XHRiZXppZWh1bmdzc2FtbWx1bmdfdm9ybGFnZS5CZXppZWh1bmdlbiA9IFtdO1xuXHRcdFx0XHQvLyB6dW7DpGNoc3QgZGVuIEFycmF5IHZvbiBPYmpla3RlbiBpbiBlaW4gT2JqZWt0IG1pdCBFaWdlbnNjaGFmdGVuID0gT2JqZWt0R3VpZCB1bmQgZGFyaW4gQXJyYXkgbWl0IGFsbGVuIMO8YnJpZ2VuIERhdGVuIHZlcndhbmRlbG5cblx0XHRcdFx0dmFyIGJzX2RhdGVuc8OkdHplX29iamVrdCA9IF8uZ3JvdXBCeSh3aW5kb3cuYWRiLmJzRGF0ZW5zw6R0emUsIGZ1bmN0aW9uKG9iamVrdCkge1xuXHRcdFx0XHRcdC8vIGlkIGluIGd1aWQgdW13YW5kZWxuXG5cdFx0XHRcdFx0dmFyIGd1aWQ7XG5cdFx0XHRcdFx0aWYgKHdpbmRvdy5hZGIuQnNJZCA9PT0gXCJndWlkXCIpIHtcblx0XHRcdFx0XHRcdC8vIGRpZSBpbiBkZXIgVGFiZWxsZSBtaXRnZWxpZWZlcnRlIGlkIGlzdCBkaWUgZ3VpZFxuXHRcdFx0XHRcdFx0Z3VpZCA9IG9iamVrdFt3aW5kb3cuYWRiLkJzRmVsZGVySWRdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBxID0gMDsgcSA8IHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emUubGVuZ3RoOyBxKyspIHtcblx0XHRcdFx0XHRcdFx0Ly8gaW4gZGVuIHp1b3JkYmFyZW4gRGF0ZW5zw6R0emVuIG5hY2ggZGVtIE9iamVrdCBtaXQgZGVyIHJpY2h0aWdlbiBpZCBzdWNoZW5cblx0XHRcdFx0XHRcdFx0aWYgKHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emVbcV0uSWQgPT0gb2JqZWt0W3dpbmRvdy5hZGIuQnNGZWxkZXJJZF0pIHtcblx0XHRcdFx0XHRcdFx0XHQvLyB1bmQgZGllIGd1aWQgYXVzbGVzZW5cblx0XHRcdFx0XHRcdFx0XHRndWlkID0gd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZVtxXS5HdWlkO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9iamVrdC5HVUlEID0gZ3VpZDtcblx0XHRcdFx0XHRyZXR1cm4gb2JqZWt0LkdVSUQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBqZXR6dCBkdXJjaCBkaWUgR1VJRCdzIGxvb3BlbiB1bmQgZGllIGpld2VpbGlnZW4gQmV6aWVodW5nZW4gYW5ow6RuZ2VuXG5cdFx0XHRcdCQuZWFjaChic19kYXRlbnPDpHR6ZV9vYmpla3QsIGZ1bmN0aW9uKGltcG9ydGRhdGVuX29iamVrdF9pZCwgaW1wb3J0ZGF0ZW5fZmVsZGVyX2FycmF5KSB7XG5cdFx0XHRcdFx0dmFyIGJlemllaHVuZ2VuID0gW107XG5cdFx0XHRcdFx0YW56YWhsX2JlemllaHVuZ3NzYW1tbHVuZ2VuICs9IDE7XG5cdFx0XHRcdFx0Ly8gQmV6aWVodW5nc3NhbW1sdW5nIGFscyBPYmpla3QgZ3LDvG5kZW4sIGluZGVtIGRpZSBWb3JsYWdlIGtvcGllcnQgd2lyZFxuXHRcdFx0XHRcdGJlemllaHVuZ3NzYW1tbHVuZyA9IGpRdWVyeS5leHRlbmQodHJ1ZSwge30sIGJlemllaHVuZ3NzYW1tbHVuZ192b3JsYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGltcG9ydGRhdGVuX2ZlbGRlcl9hcnJheSwgZnVuY3Rpb24oaW1wb3J0ZGF0ZW5fZmVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHVyY2ggZGllIEZlbGRlciBkZXIgQmV6aWVodW5nZW4gbG9vcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnphaGxfZmVsZGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZlbGRlciBkZXIgQmV6aWVodW5nc3NhbW1sdW5nIGFscyBPYmpla3QgZ3LDvG5kZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZXppZWh1bmcgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChpbXBvcnRkYXRlbl9mZWxkLCBmdW5jdGlvbihmZWxkd2VydCwgZmVsZG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkdXJjaCBkaWUgRmVsZGVyIGRlciBCZXppZWh1bmcgbG9vcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmljaHQgaW1wb3J0aWVydCB3aXJkIGRpZSBHVUlEIHVuZCBsZWVyZSBGZWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVsZG5hbWUgIT09IFwiR1VJRFwiICYmIGZlbGR3ZXJ0ICE9PSBcIlwiICYmIGZlbGR3ZXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWxkd2VydCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjY2VzcyBtYWNodCBpbiBBYmZyYWdlbiBtaXQgV2Vubi1LbGF1c2VsIGF1cyB0cnVlIC0xID4ga29ycmlnaWVyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlemllaHVuZ1tmZWxkbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlbGR3ZXJ0ID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnVlL2ZhbHNlIG5pY2h0IGFscyBzdHJpbmcgaW1wb3J0aWVyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlemllaHVuZ1tmZWxkbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlbGR3ZXJ0ID09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV6aWVodW5nW2ZlbGRuYW1lXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlbGR3ZXJ0ID09IHBhcnNlSW50KGZlbGR3ZXJ0LCAxMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdhbnp6YWhsZW4gYWxzIFphaGxlbiBpbXBvcnRpZXJlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV6aWVodW5nW2ZlbGRuYW1lXSA9IHBhcnNlSW50KGZlbGR3ZXJ0LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVsZHdlcnQgPT0gcGFyc2VGbG9hdChmZWxkd2VydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJydWNoemFobGVuIGFscyBaYWhsZW4gaW1wb3J0aWVyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlemllaHVuZ1tmZWxkbmFtZV0gPSBwYXJzZUZsb2F0KGZlbGR3ZXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmZWxkbmFtZSA9PSBcIkJlemllaHVuZ3NwYXJ0bmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlemllaHVuZ1tmZWxkbmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGR1cmNoIEJlemllaHVuZ3NwYXJ0bmVyIGxvb3BlbiB1bmQgR1VJRFMgbWl0IE9iamVrdGVuIGVyc2V0emVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goZmVsZHdlcnQsIGZ1bmN0aW9uKGJlemllaHVuZ3NwYXJ0bmVyX2ZlbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXppZWh1bmdbZmVsZG5hbWVdLnB1c2god2luZG93LmFkYi5iZXpQYXJ0bmVyX29iamVrdFtiZXppZWh1bmdzcGFydG5lcl9mZWxkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbGZhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlemllaHVuZ1tmZWxkbmFtZV0gPSBmZWxkd2VydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnphaGxfZmVsZGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW56YWhsX2ZlbGRlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXppZWh1bmdlbi5wdXNoKGJlemllaHVuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0XHRcdC8vIGVudHNwcmVjaGVuZGVuIEluZGV4IMO2ZmZuZW5cblx0XHRcdFx0XHQvLyBzaWNoZXJzdGVsbGVuLCBkYXNzIERhdGVuIHZvcmtvbW1lbi4gR2lidCBzb25zdCBlaW5lbiBGZWhsZXJcblx0XHRcdFx0XHRpZiAoYmV6aWVodW5nZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gRGF0ZW5iYW5rYWJmcmFnZSBpc3QgbGFuZ3NhbS4gRXh0ZXJuIGF1ZnJ1ZmVuLCBcblx0XHRcdFx0XHRcdC8vIHNvbnN0IMO8YmVyaG9sdCBkaWUgZm9yLVNjaGxhdWZlIHVuZCBCZXppZWh1bmdzc2FtbWx1bmcgaXN0IGJpcyB6dXIgc2F2ZURvYy1BdXNmw7xocnVuZyBlaW5lIGFuZGVyZSFcblx0XHRcdFx0XHRcdHdpbmRvdy5hZGIuZsO8Z2VCZXppZWh1bmdlblp1T2JqZWt0KGltcG9ydGRhdGVuX29iamVrdF9pZCwgYmV6aWVodW5nc3NhbW1sdW5nLCBiZXppZWh1bmdlbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuICAgICAgICAgICAgICAgIC8vIEbDvHIgMTAgS29udHJvbGxiZWlzcGllbGUgZGllIExpbmtzIGF1ZmJhdWVuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5hZGIuQnNJZCA9PT0gXCJndWlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJzdGVfMTBfaWRzID0gXy5maXJzdCh3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplLCAxMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJzdGVfMTBfaWRzID0gXy5wbHVjayhfLmZpcnN0KHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emUsIDEwKSwgXCJHdWlkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLmVhY2goZXJzdGVfMTBfaWRzLCBmdW5jdGlvbihpZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbnIgPSBpbmRleCArMTtcbiAgICAgICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nX2xpbmtzICs9ICc8YSBocmVmPVwiJyArICQobG9jYXRpb24pLmF0dHIoXCJwcm90b2NvbFwiKSArICcvLycgKyAkKGxvY2F0aW9uKS5hdHRyKFwiaG9zdFwiKSArICQobG9jYXRpb24pLmF0dHIoXCJwYXRobmFtZVwiKSArICc/aWQ9JyArIGlkICsgJ1wiICB0YXJnZXQ9XCJfYmxhbmtcIj5CZWlzcGllbCAnICsgbnIgKyAnPC9hPjxicj4nO1xuICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0XHRic19pbXBvcnRpZXJ0LnJlc29sdmUoKTtcblx0XHRcdH0sIDEwMDApO1xuXHRcdH0pO1xuXHRyZXR1cm4gYnNfaW1wb3J0aWVydC5wcm9taXNlKCk7XG59O1xuXG53aW5kb3cuYWRiLmJlcmVpdGVCZXppZWh1bmdzcGFydG5lckbDvHJJbXBvcnRWb3IgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgYWxsZV9iZXpfcGFydG5lcl9hcnJheSA9IFtdLFxuXHRcdGJlel9wYXJ0bmVyX2FycmF5LFxuXHRcdGJlemllaHVuZ3NwYXJ0bmVyX3ZvcmJlcmVpdGV0ID0gJC5EZWZlcnJlZCgpO1xuXHR3aW5kb3cuYWRiLmJlelBhcnRuZXJfb2JqZWt0ID0ge307XG5cbiAgICBfLmVhY2god2luZG93LmFkYi5ic0RhdGVuc8OkdHplLCBmdW5jdGlvbihic19kYXRlbnNhdHopIHtcbiAgICAgICAgaWYgKGJzX2RhdGVuc2F0ei5CZXppZWh1bmdzcGFydG5lcikge1xuICAgICAgICAgICAgLy8gYnNfZGF0ZW5zYXR6LkJlemllaHVuZ3NwYXJ0bmVyIGlzdCBlaW5lIGtvbW1hZ2V0cmVubnRlIExpc3RlIHZvbiBndWlkc1xuICAgICAgICAgICAgLy8gZGllc2UgTGlzdGUgaW4gQXJyYXkgdmVyd2FuZGVsblxuICAgICAgICAgICAgYmV6X3BhcnRuZXJfYXJyYXkgPSBic19kYXRlbnNhdHouQmV6aWVodW5nc3BhcnRuZXIuc3BsaXQoXCIsIFwiKTtcbiAgICAgICAgICAgIC8vIHVuZCBpbiB3aW5kb3cuYWRiLmJzRGF0ZW5zw6R0emUgbmFjaGbDvGhyZW5cbiAgICAgICAgICAgIGJzX2RhdGVuc2F0ei5CZXppZWh1bmdzcGFydG5lciA9IGJlel9wYXJ0bmVyX2FycmF5O1xuICAgICAgICAgICAgLy8gdW5kIHZvbGxzdMOkbmRpZ2UgTGlzdGUgYWxsZXIgQmV6aWVodW5nc3BhcnRuZXIgbmFjaGbDvGhyZW5cbiAgICAgICAgICAgIGFsbGVfYmV6X3BhcnRuZXJfYXJyYXkgPSBfLnVuaW9uKGFsbGVfYmV6X3BhcnRuZXJfYXJyYXksIGJlel9wYXJ0bmVyX2FycmF5KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXHQvLyBqZXR6dCB3b2xsZW4gd2lyIGVpbiBPYmpla3QgYmF1ZW4sIGRhcyBmw7xyIGFsbGUgQmV6aWVodW5nc3BhcnRuZXIgZGFzIGF1c3p1dGF1c2NoZW5kZSBPYmpla3QgZW50aMOkbHRcblx0Ly8gZGFuYWNoIGbDvHIgamVkZSBndWlkIEdydXBwZSwgVGF4b25vbWllIChiZWkgTFIpIHVuZCBOYW1lIGhvbGVuIHVuZCBlaW4gT2JqZWt0IGRyYXVzIG1hY2hlblxuXHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdCRkYi52aWV3KCdhcnRlbmRiL2FsbF9kb2NzP2tleXM9JyArIGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShhbGxlX2Jlel9wYXJ0bmVyX2FycmF5KSkgKyAnJmluY2x1ZGVfZG9jcz10cnVlJywge1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBvYmpla3Q7XG5cdFx0XHR2YXIgYmV6X3BhcnRuZXI7XG4gICAgICAgICAgICBfLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbihkYXRhX3Jvdykge1xuICAgICAgICAgICAgICAgIG9iamVrdCA9IGRhdGFfcm93LmRvYztcbiAgICAgICAgICAgICAgICBiZXpfcGFydG5lciA9IHt9O1xuICAgICAgICAgICAgICAgIGJlel9wYXJ0bmVyLkdydXBwZSA9IG9iamVrdC5HcnVwcGU7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVrdC5HcnVwcGUgPT09IFwiTGViZW5zcsOkdW1lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmV6X3BhcnRuZXIuVGF4b25vbWllID0gb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLlRheG9ub21pZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5UYXhvbm9taWUuTGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlel9wYXJ0bmVyLk5hbWUgPSBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uTGFiZWwgKyBcIjogXCIgKyBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uVGF4b25vbWllLkVpbmhlaXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXpfcGFydG5lci5OYW1lID0gb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkVpbmhlaXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiZXpfcGFydG5lci5OYW1lID0gb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuW1wiQXJ0bmFtZSB2b2xsc3TDpG5kaWdcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJlel9wYXJ0bmVyLkdVSUQgPSBvYmpla3QuX2lkO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGIuYmV6UGFydG5lcl9vYmpla3Rbb2JqZWt0Ll9pZF0gPSBiZXpfcGFydG5lcjtcbiAgICAgICAgICAgIH0pO1xuXHRcdH1cblx0fSk7XG5cdGJlemllaHVuZ3NwYXJ0bmVyX3ZvcmJlcmVpdGV0LnJlc29sdmUoKTtcblx0cmV0dXJuIGJlemllaHVuZ3NwYXJ0bmVyX3ZvcmJlcmVpdGV0LnByb21pc2UoKTtcbn07XG5cbi8vIGJla29tbXQgZGFzIE9iamVrdCBtaXQgZGVuIERhdGVuc8OkdHplbiAod2luZG93LmFkYi5kc0RhdGVuc8OkdHplKSB1bmQgZGllIExpc3RlIGRlciB6dSBha3R1YWxpc2llcmVuZGVuIERhdGVuc8OkdHplICh3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplKVxuLy8gaG9sdCBzaWNoIHNlbGJlciBkZW4gaW4gZGVuIEZlbGRlcm4gZXJmYXNzdGVuIE5hbWVuIGRlciBEYXRlbnNhbW1sdW5nXG53aW5kb3cuYWRiLmVudGZlcm5lRGF0ZW5zYW1tbHVuZyA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBndWlkX2FycmF5ID0gW10sXG4gICAgICAgIGd1aWRfYXJyYXlfMiA9IFtdLFxuXHRcdGd1aWQsXG5cdFx0ZHNfZW50ZmVybnQgPSAkLkRlZmVycmVkKCksXG5cdFx0YSxcblx0XHRiYXRjaCxcblx0XHRiYXRjaF9ncsO2c3NlLFxuICAgICAgICBhbnpfdm9ya29tbWVuX3Zvbl9kcyA9IHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emUubGVuZ3RoLFxuICAgICAgICBhbnpfdm9ya29tbWVuX3Zvbl9kc19lbnRmZXJudCA9IDAsXG4gICAgICAgIHLDvGNrbWVsZHVuZyxcbiAgICAgICAgJGltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dCA9ICQoXCIjaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc190ZXh0XCIpLFxuICAgICAgICAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2VpcyA9ICQoXCIjaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc1wiKTtcblxuICAgIC8vIGxpc3RlbmVyIGVpbnJpY2h0ZW4sIGRlciBtZWxkZXQsIHdlbm4gZWkgRGF0ZW5zYXR6IGVudGZlcm50IHd1cmRlXG4gICAgJChkb2N1bWVudCkuYmluZCgnYWRiLmRzX2VudGZlcm50JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFuel92b3Jrb21tZW5fdm9uX2RzX2VudGZlcm50Kys7XG4gICAgICAgIHZhciBwcm96ZW50ID0gTWF0aC5yb3VuZCgoYW56X3ZvcmtvbW1lbl92b25fZHMtYW56X3ZvcmtvbW1lbl92b25fZHNfZW50ZmVybnQpL2Fuel92b3Jrb21tZW5fdm9uX2RzKjEwMCk7XG4gICAgICAgICQoXCIjRHNJbXBvcnRpZXJlblByb2dyZXNzYmFyXCIpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsIHByb3plbnQgKyclJylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLXZhbHVlbm93JywgcHJvemVudCk7XG4gICAgICAgICQoXCIjRHNJbXBvcnRpZXJlblByb2dyZXNzYmFyVGV4dFwiKS5odG1sKHByb3plbnQgKyBcIiVcIik7XG4gICAgICAgICRpbXBvcnRpZXJlbl9kc19pbXBvcnRfYXVzZnVlaHJlbl9oaW53ZWlzLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKS5hZGRDbGFzcyhcImFsZXJ0LWluZm9cIik7XG4gICAgICAgIHLDvGNrbWVsZHVuZyA9IFwiRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gd2VyZGVuIGVudGZlcm50Li4uPGJyPkRpZSBJbmRleGUgd2VyZGVuIG5ldSBhdWZnZWJhdXQuLi5cIjtcbiAgICAgICAgJGltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5odG1sKHLDvGNrbWVsZHVuZyk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJGltcG9ydGllcmVuX2RzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIGlmIChhbnpfdm9ya29tbWVuX3Zvbl9kc19lbnRmZXJudCA9PT0gYW56X3ZvcmtvbW1lbl92b25fZHMpIHtcbiAgICAgICAgICAgIC8vIGRpZSBJbmRleGUgYWt0dWFsaXNpZXJlblxuICAgICAgICAgICAgdmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuICAgICAgICAgICAgJGRiLnZpZXcoJ2FydGVuZGIvbHInLCB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1lbGRlbiwgZGFzcyBJbmRleGUgYWt0dWFsaXNpZXJ0IHd1cmRlblxuICAgICAgICAgICAgICAgICAgICAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpcy5yZW1vdmVDbGFzcyhcImFsZXJ0LWluZm9cIikucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIikuYWRkQ2xhc3MoXCJhbGVydC1zdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICByw7xja21lbGR1bmcgPSBcIkRpZSBFaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiB3dXJkZW4gZW50ZmVybnQuPGJyPlwiO1xuICAgICAgICAgICAgICAgICAgICByw7xja21lbGR1bmcgKz0gXCJEaWUgSW5kZXhlIHd1cmRlbiBha3R1YWxpc2llcnQuXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWRiLnLDvGNrbWVsZHVuZ19saW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nICs9IFwiPGJyPjxicj5OYWNoZm9sZ2VuZCBMaW5rcyB6dSBPYmpla3RlbiBtaXQgaW1wb3J0aWVydGVuIERhdGVuLCBkYW1pdCBTaWUgZGFzIFJlc3VsdGF0IMO8YmVycHLDvGZlbiBrw7ZubmVuOjxicj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHLDvGNrbWVsZHVuZyArPSB3aW5kb3cuYWRiLnLDvGNrbWVsZHVuZ19saW5rcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuYWRiLnLDvGNrbWVsZHVuZ19saW5rcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc190ZXh0Lmh0bWwocsO8Y2ttZWxkdW5nKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkaW1wb3J0aWVyZW5fZHNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc190ZXh0Lm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXy5lYWNoKHdpbmRvdy5hZGIuZHNEYXRlbnPDpHR6ZSwgZnVuY3Rpb24oZGF0ZW5zYXR6KSB7XG4gICAgICAgIC8vIHp1ZXJzdCBkaWUgaWQgaW4gZ3VpZCDDvGJlcnNldHplblxuICAgICAgICBpZiAod2luZG93LmFkYi5Ec0lkID09PSBcImd1aWRcIikge1xuICAgICAgICAgICAgLy8gZGllIGluIGRlciBUYWJlbGxlIG1pdGdlbGllZmVydGUgaWQgaXN0IGRpZSBndWlkXG4gICAgICAgICAgICBndWlkID0gZGF0ZW5zYXR6LkdVSUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpbiBkZW4genVvcmRiYXJlbiBEYXRlbnPDpHR6ZW4gbmFjaCBkZW0gT2JqZWt0IG1pdCBkZXIgcmljaHRpZ2VuIGlkIHN1Y2hlblxuICAgICAgICAgICAgLy8gdW5kIGRpZSBndWlkIGF1c2xlc2VuXG4gICAgICAgICAgICBndWlkID0gXy5maW5kKHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emUsIGZ1bmN0aW9uKGRhdGVuc2F0eikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlbnNhdHouSWQgPT0gZGF0ZW5zYXR6W3dpbmRvdy5hZGIuRHNGZWxkZXJJZF07XG4gICAgICAgICAgICB9KS5HdWlkO1xuICAgICAgICAgICAgLyogVE9ETzogbMO2c2NoZW4sIHdlbm4gb2JpZ2VyIENvZGUgZ2V0ZXN0ZXQgaXN0XG4gICAgICAgICAgICBmb3IgKHEgPSAwOyBxIDwgd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZS5sZW5ndGg7IHErKykge1xuICAgICAgICAgICAgICAgIC8vIGluIGRlbiB6dW9yZGJhcmVuIERhdGVuc8OkdHplbiBuYWNoIGRlbSBPYmpla3QgbWl0IGRlciByaWNodGlnZW4gaWQgc3VjaGVuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emVbcV0uSWQgPT0gZGF0ZW5zYXR6W3dpbmRvdy5hZGIuRHNGZWxkZXJJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kIGRpZSBndWlkIGF1c2xlc2VuXG4gICAgICAgICAgICAgICAgICAgIGd1aWQgPSB3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplW3FdLkd1aWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG4gICAgICAgIC8vIEVpbmVuIEFycmF5IGRlciBpZCdzIGVyc3RlbGxlblxuICAgICAgICBndWlkX2FycmF5LnB1c2goZ3VpZCk7XG4gICAgfSk7XG5cdC8vIGFsbGUgZG9jcyBnbGVpY2h6ZWl0aWcgaG9sZW5cblx0Ly8gYWJlciBiYXRjaHdlaXNlXG5cdGJhdGNoID0gMTUwO1xuXHRiYXRjaF9ncsO2c3NlID0gMTUwO1xuXHRmb3IgKGE9MDsgYTxiYXRjaDsgYSsrKSB7XG5cdFx0aWYgKGEgPCBndWlkX2FycmF5Lmxlbmd0aCkge1xuXHRcdFx0Z3VpZF9hcnJheV8yLnB1c2goZ3VpZF9hcnJheVthXSk7XG5cdFx0XHRpZiAoYSA9PT0gKGJhdGNoLTEpKSB7XG5cdFx0XHRcdHdpbmRvdy5hZGIuZW50ZmVybmVEYXRlbnNhbW1sdW5nXzIoJChcIiNEc05hbWVcIikudmFsKCksIGd1aWRfYXJyYXlfMiwgKGEtYmF0Y2hfZ3LDtnNzZSkpO1xuXHRcdFx0XHRndWlkX2FycmF5XzIgPSBbXTtcblx0XHRcdFx0YmF0Y2ggKz0gYmF0Y2hfZ3LDtnNzZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmFkYi5lbnRmZXJuZURhdGVuc2FtbWx1bmdfMigkKFwiI0RzTmFtZVwiKS52YWwoKSwgZ3VpZF9hcnJheV8yLCAoYSAtIGJhdGNoX2dyw7Zzc2UpKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZHNfZW50ZmVybnQucHJvbWlzZSgpO1xufTtcblxud2luZG93LmFkYi5lbnRmZXJuZURhdGVuc2FtbWx1bmdfMiA9IGZ1bmN0aW9uKGRzX25hbWUsIGd1aWRfYXJyYXksIHZlcnrDtmdlcnVuZ3NfZmFrdG9yKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gYWxsZSBkb2NzIGhvbGVuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHRcdCRkYi52aWV3KCdhcnRlbmRiL2FsbF9kb2NzP2tleXM9JyArIGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShndWlkX2FycmF5KSkgKyAnJmluY2x1ZGVfZG9jcz10cnVlJywge1xuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHR2YXIgT2JqZWt0O1xuICAgICAgICAgICAgICAgIF8uZWFjaChkYXRhLnJvd3MsIGZ1bmN0aW9uKGRhdGFfcm93KSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVrdCA9IGRhdGFfcm93LmRvYztcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkYi5lbnRmZXJuZURhdGVuc2FtbWx1bmdBdXNPYmpla3QoZHNfbmFtZSwgT2JqZWt0KTtcbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgdmVyesO2Z2VydW5nc19mYWt0b3IqNDApO1xufTtcblxud2luZG93LmFkYi5lbnRmZXJuZURhdGVuc2FtbWx1bmdBdXNPYmpla3QgPSBmdW5jdGlvbihkc19uYW1lLCBvYmpla3QpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAob2JqZWt0LkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuICYmIG9iamVrdC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8qIGhhdCBuaWNodCBmdW5rdGlvbmllcnRcbiAgICAgICAgdmFyIGRhdGVuc2FtbWx1bmcgPSBfLmZpbmQob2JqZWt0LkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuLCBmdW5jdGlvbihkYXRlbnNhbW1sdW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZW5zYW1tbHVuZy5OYW1lID09PSBkc19uYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqZWt0LkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuID0gXy53aXRob3V0KE9iamVrdC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiwgZGF0ZW5zYW1tbHVuZyk7XG4gICAgICAgICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuICAgICAgICAkZGIuc2F2ZURvYyhvYmpla3QpOyovXG5cdFx0Zm9yICh2YXIgaT0wOyBpPG9iamVrdC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKG9iamVrdC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbltpXS5OYW1lID09PSBkc19uYW1lKSB7XG5cdFx0XHRcdG9iamVrdC5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbi5zcGxpY2UoaSwxKTtcblx0XHRcdFx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHRcdFx0XHQkZGIuc2F2ZURvYyhvYmpla3QpO1xuICAgICAgICAgICAgICAgIC8vIG1pdHRlaWxlbiwgZGFzcyBlaW5lIGRzIGVudGZlcm50IHd1cmRlXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignYWRiLmRzX2VudGZlcm50Jyk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogU2NoZWl0ZXJuIGFiZmFuZ2VuICh0cmlnZ2VyIGFkYi5kc19uaWNodF9lbnRmZXJudClcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBiZWtvbW10IGRhcyBPYmpla3QgbWl0IGRlbiBEYXRlbnPDpHR6ZW4gKHdpbmRvdy5hZGIuYnNEYXRlbnPDpHR6ZSkgdW5kIGRpZSBMaXN0ZSBkZXIgenUgYWt0dWFsaXNpZXJlbmRlbiBEYXRlbnPDpHR6ZSAod2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZSlcbi8vIGhvbHQgc2ljaCBzZWxiZXIgZGVuIGluIGRlbiBGZWxkZXJuIGVyZmFzc3RlbiBOYW1lbiBkZXIgQmV6aWVodW5nc3NhbW1sdW5nXG53aW5kb3cuYWRiLmVudGZlcm5lQmV6aWVodW5nc3NhbW1sdW5nID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGd1aWRfYXJyYXkgPSBbXSxcbiAgICAgICAgZ3VpZF9hcnJheV8yID0gW10sXG5cdFx0Z3VpZCxcblx0XHRic19uYW1lID0gJChcIiNCc05hbWVcIikudmFsKCksXG5cdFx0YnNfZW50ZmVybnQgPSAkLkRlZmVycmVkKCksXG5cdFx0cSxcblx0XHRhLFxuXHRcdGJhdGNoID0gMTUwLFxuXHRcdGJhdGNoX2dyw7Zzc2UgPSAxNTAsXG4gICAgICAgIGFuel92b3Jrb21tZW5fdm9uX2JzX2VudGZlcm50ID0gMCxcbiAgICAgICAgYW56X3ZvcmtvbW1lbl92b25fYnMgPSB3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplLmxlbmd0aCxcbiAgICAgICAgcsO8Y2ttZWxkdW5nLFxuICAgICAgICAkaW1wb3J0aWVyZW5fYnNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2VpcyA9ICQoXCIjaW1wb3J0aWVyZW5fYnNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc1wiKSxcbiAgICAgICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dCA9ICQoXCIjaW1wb3J0aWVyZW5fYnNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc190ZXh0XCIpO1xuXG4gICAgLy8gbGlzdGVuZXIgZWlucmljaHRlbiwgZGVyIG1lbGRldCwgd2VubiBlaSBEYXRlbnNhdHogZW50ZmVybnQgd3VyZGVcbiAgICAkKGRvY3VtZW50KS5iaW5kKCdhZGIuYnNfZW50ZmVybnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYW56X3ZvcmtvbW1lbl92b25fYnNfZW50ZmVybnQrKztcbiAgICAgICAgdmFyIHByb3plbnQgPSBNYXRoLnJvdW5kKChhbnpfdm9ya29tbWVuX3Zvbl9icy1hbnpfdm9ya29tbWVuX3Zvbl9ic19lbnRmZXJudCkvYW56X3ZvcmtvbW1lbl92b25fYnMqMTAwKTtcbiAgICAgICAgJChcIiNCc0ltcG9ydGllcmVuUHJvZ3Jlc3NiYXJcIilcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgcHJvemVudCArJyUnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCBwcm96ZW50KTtcbiAgICAgICAgJChcIiNCc0ltcG9ydGllcmVuUHJvZ3Jlc3NiYXJUZXh0XCIpLmh0bWwocHJvemVudCArIFwiJVwiKTtcblxuICAgICAgICBpZiAoYW56X3ZvcmtvbW1lbl92b25fYnNfZW50ZmVybnQgPT09IGFuel92b3Jrb21tZW5fdm9uX2JzKSB7XG4gICAgICAgICAgICAvLyBkaWUgSW5kZXhlIGFrdHVhbGlzaWVyZW5cbiAgICAgICAgICAgIHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcbiAgICAgICAgICAgICRkYi52aWV3KCdhcnRlbmRiL2xyJywge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtZWxkZW4sIGRhc3MgSW5kZXhlIGFrdHVhbGlzaWVydCB3dXJkZW5cbiAgICAgICAgICAgICAgICAgICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWluZm9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nID0gXCJEaWUgQmV6aWVodW5nc3NhbW1sdW5nZW4gd3VyZGVuIGVudGZlcm50Ljxicj5cIjtcbiAgICAgICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nICs9IFwiRGllIEluZGV4ZSB3dXJkZW4gYWt0dWFsaXNpZXJ0LlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmFkYi5yw7xja21lbGR1bmdfbGlua3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHLDvGNrbWVsZHVuZyArPSBcIjxicj48YnI+TmFjaGZvbGdlbmQgTGlua3MgenUgT2JqZWt0ZW4gbWl0IGltcG9ydGllcnRlbiBEYXRlbiwgZGFtaXQgU2llIGRhcyBSZXN1bHRhdCDDvGJlcnByw7xmZW4ga8O2bm5lbjo8YnI+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByw7xja21lbGR1bmcgKz0gd2luZG93LmFkYi5yw7xja21lbGR1bmdfbGlua3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgd2luZG93LmFkYi5yw7xja21lbGR1bmdfbGlua3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5odG1sKHLDvGNrbWVsZHVuZyk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHLDvGNrbWVsZGVuLCBkYXNzIGVzIHBhc3NpZXJ0XG4gICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtaW5mb1wiKTtcbiAgICByw7xja21lbGR1bmcgPSBcIkJlemllaHVuZ3NzYW1tbHVuZ2VuIHdlcmRlbiBlbnRmZXJudC4uLjxicj5EaWUgSW5kZXhlIHdlcmRlbiBha3R1YWxpc2llcnQuLi5cIjtcbiAgICAkaW1wb3J0aWVyZW5fYnNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc190ZXh0Lmh0bWwocsO8Y2ttZWxkdW5nKTtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNfdGV4dC5vZmZzZXQoKS50b3BcbiAgICB9LCAyMDAwKTtcblxuICAgIF8uZWFjaCh3aW5kb3cuYWRiLmJzRGF0ZW5zw6R0emUsIGZ1bmN0aW9uKGJzX2RhdGVuc2F0eikge1xuICAgICAgICAvLyB6dWVyc3QgZGllIGlkIGluIGd1aWQgw7xiZXJzZXR6ZW5cbiAgICAgICAgaWYgKHdpbmRvdy5hZGIuQnNJZCA9PT0gXCJndWlkXCIpIHtcbiAgICAgICAgICAgIC8vIGRpZSBpbiBkZXIgVGFiZWxsZSBtaXRnZWxpZWZlcnRlIGlkIGlzdCBkaWUgZ3VpZFxuICAgICAgICAgICAgZ3VpZCA9IGJzX2RhdGVuc2F0ei5HVUlEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChxID0gMDsgcSA8IHdpbmRvdy5hZGIuWnVvcmRiYXJlRGF0ZW5zw6R0emUubGVuZ3RoOyBxKyspIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBkZW4genVvcmRiYXJlbiBEYXRlbnPDpHR6ZW4gbmFjaCBkZW0gT2JqZWt0IG1pdCBkZXIgcmljaHRpZ2VuIGlkIHN1Y2hlblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWRiLlp1b3JkYmFyZURhdGVuc8OkdHplW3FdLklkID09IGJzX2RhdGVuc2F0elt3aW5kb3cuYWRiLkJzRmVsZGVySWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZCBkaWUgZ3VpZCBhdXNsZXNlblxuICAgICAgICAgICAgICAgICAgICBndWlkID0gd2luZG93LmFkYi5adW9yZGJhcmVEYXRlbnPDpHR6ZVtxXS5HdWlkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWluZW4gQXJyYXkgZGVyIGlkJ3MgZXJzdGVsbGVuXG4gICAgICAgIGd1aWRfYXJyYXkucHVzaChndWlkKTtcbiAgICB9KTtcblxuXHQvLyBndWlkX2FycmF5IGF1ZiBkaWUgZWluZGV1dGlnZW4gZ3VpZHMgcmVkdXppZXJlblxuXHRndWlkX2FycmF5ID0gXy51bmlvbihndWlkX2FycmF5KTtcblxuXHQvLyBhbGxlIGRvY3MgZ2xlaWNoemVpdGlnIGhvbGVuXG5cdC8vIGFiZXIgYmF0Y2h3ZWlzZVxuXHRmb3IgKGE9MDsgYTxiYXRjaDsgYSsrKSB7XG5cdFx0aWYgKGEgPCBndWlkX2FycmF5Lmxlbmd0aCkge1xuXHRcdFx0Z3VpZF9hcnJheV8yLnB1c2goZ3VpZF9hcnJheVthXSk7XG5cdFx0XHRpZiAoYSA9PT0gKGJhdGNoLTEpKSB7XG5cdFx0XHRcdHdpbmRvdy5hZGIuZW50ZmVybmVCZXppZWh1bmdzc2FtbWx1bmdfMihic19uYW1lLCBndWlkX2FycmF5XzIsIChhLWJhdGNoX2dyw7Zzc2UpKTtcblx0XHRcdFx0Z3VpZF9hcnJheV8yID0gW107XG5cdFx0XHRcdGJhdGNoICs9IGJhdGNoX2dyw7Zzc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5hZGIuZW50ZmVybmVCZXppZWh1bmdzc2FtbWx1bmdfMihic19uYW1lLCBndWlkX2FycmF5XzIsIChhLWJhdGNoX2dyw7Zzc2UpKTtcblx0XHRcdGJzX2VudGZlcm50LnJlc29sdmUoKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvLyBSw7xja21lbGR1bmdzTGlua3MgaW4gRmVsZCBhbnplaWdlbjpcbiAgICAgICAgJGltcG9ydGllcmVuX2JzX2ltcG9ydF9hdXNmdWVocmVuX2hpbndlaXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKVxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtaW5mb1wiKVxuICAgICAgICAgICAgLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAkaW1wb3J0aWVyZW5fYnNfaW1wb3J0X2F1c2Z1ZWhyZW5faGlud2Vpc190ZXh0Lmh0bWwoXCJEaWUgQmV6aWVodW5nc3NhbW1sdW5nZW4gd2VyZGVuIGVudGZlcm50Li4uPGJyPkRpZSBJbmRleGUgd2VyZGVuIGFrdHVhbGlzaWVydC4uLlwiKTtcblx0fVxuXHRyZXR1cm4gYnNfZW50ZmVybnQucHJvbWlzZSgpO1xufTtcblxud2luZG93LmFkYi5lbnRmZXJuZUJlemllaHVuZ3NzYW1tbHVuZ18yID0gZnVuY3Rpb24oYnNfbmFtZSwgZ3VpZF9hcnJheSwgdmVyesO2Z2VydW5nc19mYWt0b3IpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBhbGxlIGRvY3MgaG9sZW5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdFx0JGRiLnZpZXcoJ2FydGVuZGIvYWxsX2RvY3M/a2V5cz0nICsgZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KGd1aWRfYXJyYXkpKSArICcmaW5jbHVkZV9kb2NzPXRydWUnLCB7XG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdHZhciBvYmpla3QsXG5cdFx0XHRcdFx0ZjtcbiAgICAgICAgICAgICAgICBfLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbihkYXRhX3Jvdykge1xuICAgICAgICAgICAgICAgICAgICBvYmpla3QgPSBkYXRhX3Jvdy5kb2M7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGIuZW50ZmVybmVCZXppZWh1bmdzc2FtbWx1bmdBdXNPYmpla3QoYnNfbmFtZSwgb2JqZWt0KTtcbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSwgdmVyesO2Z2VydW5nc19mYWt0b3IqNDApO1xufTtcblxud2luZG93LmFkYi5lbnRmZXJuZUJlemllaHVuZ3NzYW1tbHVuZ0F1c09iamVrdCA9IGZ1bmN0aW9uKGJzX25hbWUsIG9iamVrdCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmIChvYmpla3QuQmV6aWVodW5nc3NhbW1sdW5nZW4gJiYgb2JqZWt0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBpPTA7IGk8b2JqZWt0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAob2JqZWt0LkJlemllaHVuZ3NzYW1tbHVuZ2VuW2ldLk5hbWUgPT09IGJzX25hbWUpIHtcblx0XHRcdFx0b2JqZWt0LkJlemllaHVuZ3NzYW1tbHVuZ2VuLnNwbGljZShpLDEpO1xuXHRcdFx0XHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdFx0XHRcdCRkYi5zYXZlRG9jKG9iamVrdCk7XG4gICAgICAgICAgICAgICAgLy8gbWl0dGVpbGVuLCBkYXNzIGVpbmUgYnMgZW50ZmVybnQgd3VyZGVcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdhZGIuYnNfZW50ZmVybnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBmw7xndCBkZXIgQXJ0IGVpbmUgRGF0ZW5zYW1tbHVuZyBoaW56dVxuLy8gd2VubiBkaWVzZWxiZSBzY2hvbiB2b3Jrb21tdCwgd2lyZCBzaWUgw7xiZXJzY2hyaWViZW5cbndpbmRvdy5hZGIuZsO8Z2VEYXRlbnNhbW1sdW5nWnVPYmpla3QgPSBmdW5jdGlvbihndWlkLCBkYXRlbnNhbW1sdW5nKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHQkZGIub3BlbkRvYyhndWlkLCB7XG5cdFx0c3VjY2VzczogZnVuY3Rpb24oZG9jKSB7XG5cdFx0XHQvLyBzaWNoZXJzdGVsbGVuLCBkYXNzIEVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZyBleGlzdGllcnRcblx0XHRcdGlmICghZG9jLkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuKSB7XG5cdFx0XHRcdGRvYy5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZmFsbHMgZGllc2VsYmUgRGF0ZW5zYW1tbHVuZyBzY2hvbiBleGlzdGllcnRlOiBsw7ZzY2hlblxuXHRcdFx0Ly8gdHJpZmZ0IHouQi4genUgYmVpIHp1c2FtbWVuZmFzc2VuZGVuXG5cdFx0XHRkb2MuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gPSBfLnJlamVjdChkb2MuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGVzKSB7XG5cdFx0XHRcdHJldHVybiBlcy5OYW1lID09PSBkYXRlbnNhbW1sdW5nLk5hbWU7XG5cdFx0XHR9KTtcblx0XHRcdC8vIERhdGVuc2FtbWx1bmcgYW5mw7xnZW5cblx0XHRcdGRvYy5FaWdlbnNjaGFmdGVuc2FtbWx1bmdlbi5wdXNoKGRhdGVuc2FtbWx1bmcpO1xuXHRcdFx0Ly8gc29ydGllcmVuXG5cdFx0XHQvLyBFaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiBuYWNoIE5hbWUgc29ydGllcmVuXG5cdFx0XHRkb2MuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gPSB3aW5kb3cuYWRiLnNvcnRpZXJlT2JqZWt0YXJyYXlOYWNoTmFtZShkb2MuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4pO1xuXHRcdFx0Ly8gaW4gYXJ0ZW5kYiBzcGVpY2hlcm5cblx0XHRcdCRkYi5zYXZlRG9jKGRvYyk7XG4gICAgICAgICAgICAvLyBtaXR0ZWlsZW4sIGRhc3MgZWluIGRzIGltcG9ydGllcnQgd3VyZGVcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FkYi5kc19oaW56dWdlZsO8Z3QnKTtcbiAgICAgICAgICAgIC8vIFRPRE86IFNjaGVpdGVybiBkZXMgU3BlaWNoZXJucyBhYmZhbmdlbiAodHJpZ2dlciBhZGIuZHNfbmljaHRfaGluenVnZWbDvGd0KVxuXHRcdH1cblx0fSk7XG59O1xuXG4vLyBmw7xndCBkZXIgQXJ0IGVpbmUgRGF0ZW5zYW1tbHVuZyBoaW56dVxuLy8gd2VubiBkaWVzZWxiZSBzY2hvbiB2b3Jrb21tdCwgd2lyZCBzaWUgw7xiZXJzY2hyaWViZW5cbndpbmRvdy5hZGIuZsO8Z2VCZXppZWh1bmdlblp1T2JqZWt0ID0gZnVuY3Rpb24oZ3VpZCwgYmV6aWVodW5nc3NhbW1sdW5nLCBiZXppZWh1bmdlbikge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0JGRiLm9wZW5Eb2MoZ3VpZCwge1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRvYykge1xuXHRcdFx0Ly8gcHLDvGZlbiwgb2IgZGllIEJlemllaHVuZyBzY2hvbiBleGlzdGllcnRcblx0XHRcdGlmIChkb2MuQmV6aWVodW5nc3NhbW1sdW5nZW4gJiYgZG9jLkJlemllaHVuZ3NzYW1tbHVuZ2VuLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIGhpbnp1Z2Vmw7xndCA9IGZhbHNlLFxuXHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0aDtcblx0XHRcdFx0Zm9yIChpIGluIGRvYy5CZXppZWh1bmdzc2FtbWx1bmdlbikge1xuXHRcdFx0XHRcdGlmIChkb2MuQmV6aWVodW5nc3NhbW1sdW5nZW5baV0uTmFtZSA9PT0gYmV6aWVodW5nc3NhbW1sdW5nLk5hbWUpIHtcblx0XHRcdFx0XHRcdGZvciAoaD0wOyBoPGJlemllaHVuZ2VuLmxlbmd0aDsgaCsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghXy5jb250YWlucyhkb2MuQmV6aWVodW5nc3NhbW1sdW5nZW5baV0uQmV6aWVodW5nZW4sIGJlemllaHVuZ2VuW2hdKSkge1xuXHRcdFx0XHRcdFx0XHRcdGRvYy5CZXppZWh1bmdzc2FtbWx1bmdlbltpXS5CZXppZWh1bmdlbi5wdXNoKGJlemllaHVuZ2VuW2hdKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gQmV6aWVodW5nZW4gbmFjaCBOYW1lIHNvcnRpZXJlblxuXHRcdFx0XHRcdFx0ZG9jLkJlemllaHVuZ3NzYW1tbHVuZ2VuW2ldLkJlemllaHVuZ2VuID0gd2luZG93LmFkYi5zb3J0aWVyZUJlemllaHVuZ2VuTmFjaE5hbWUoZG9jLkJlemllaHVuZ3NzYW1tbHVuZ2VuW2ldLkJlemllaHVuZ2VuKTtcblx0XHRcdFx0XHRcdGhpbnp1Z2Vmw7xndCA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFoaW56dWdlZsO8Z3QpIHtcblx0XHRcdFx0XHQvLyBkaWUgQmV6aWVodW5nc3NhbW1sdW5nIGV4aXN0aWVydCBub2NoIG5pY2h0XG5cdFx0XHRcdFx0YmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuID0gW107XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChiZXppZWh1bmdlbiwgZnVuY3Rpb24oYmV6aWVodW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZXppZWh1bmdzc2FtbWx1bmcuQmV6aWVodW5nZW4ucHVzaChiZXppZWh1bmcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblx0XHRcdFx0XHQvLyBCZXppZWh1bmdlbiBuYWNoIE5hbWUgc29ydGllcmVuXG5cdFx0XHRcdFx0YmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuID0gd2luZG93LmFkYi5zb3J0aWVyZUJlemllaHVuZ2VuTmFjaE5hbWUoYmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuKTtcblx0XHRcdFx0XHRkb2MuQmV6aWVodW5nc3NhbW1sdW5nZW4ucHVzaChiZXppZWh1bmdzc2FtbWx1bmcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBCZXppZWh1bmdzc2FtbWx1bmcgYW5mw7xnZW5cblx0XHRcdFx0YmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuID0gW107XG4gICAgICAgICAgICAgICAgXy5lYWNoKGJlemllaHVuZ2VuLCBmdW5jdGlvbihiZXppZWh1bmcpIHtcbiAgICAgICAgICAgICAgICAgICAgYmV6aWVodW5nc3NhbW1sdW5nLkJlemllaHVuZ2VuLnB1c2goYmV6aWVodW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdFx0Ly8gQmV6aWVodW5nZW4gbmFjaCBOYW1lIHNvcnRpZXJlblxuXHRcdFx0XHRiZXppZWh1bmdzc2FtbWx1bmcuQmV6aWVodW5nZW4gPSB3aW5kb3cuYWRiLnNvcnRpZXJlQmV6aWVodW5nZW5OYWNoTmFtZShiZXppZWh1bmdzc2FtbWx1bmcuQmV6aWVodW5nZW4pO1xuXHRcdFx0XHRkb2MuQmV6aWVodW5nc3NhbW1sdW5nZW4gPSBbXTtcblx0XHRcdFx0ZG9jLkJlemllaHVuZ3NzYW1tbHVuZ2VuLnB1c2goYmV6aWVodW5nc3NhbW1sdW5nKTtcblx0XHRcdH1cblx0XHRcdC8vIEJlemllaHVuZ3NzYW1tbHVuZ2VuIG5hY2ggTmFtZSBzb3J0aWVyZW5cblx0XHRcdGRvYy5CZXppZWh1bmdzc2FtbWx1bmdlbiA9IHdpbmRvdy5hZGIuc29ydGllcmVPYmpla3RhcnJheU5hY2hOYW1lKGRvYy5CZXppZWh1bmdzc2FtbWx1bmdlbik7XG5cdFx0XHQvLyBpbiBhcnRlbmRiIHNwZWljaGVyblxuXHRcdFx0JGRiLnNhdmVEb2MoZG9jKTtcbiAgICAgICAgICAgIC8vIG1pdHRlaWxlbiwgZGFzcyBlaW5lIGJzIGltcG9ydGllcnQgd3VyZGVcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FkYi5ic19oaW56dWdlZsO8Z3QnKTtcbiAgICAgICAgICAgIC8vIFRPRE86IFNjaGVpdGVybiBkZXMgU3BlaWNoZXJucyBhYmZhbmdlbiAodHJpZ2dlciBhZGIuYnNfbmljaHRfaGluenVnZWbDvGd0KVxuXHRcdH1cblx0fSk7XG59O1xuXG4vLyDDvGJlcm5pbW10IGRlbiBOYW1lbiBlaW5lciBEYXRlbnNhbW1sdW5nXG4vLyDDtmZmbmV0IGFsbGUgRG9rdW1lbnRlLCBkaWUgZGllc2UgRGF0ZW5zYW1tbHVuZyBlbnRoYWx0ZW4gdW5kIGzDtnNjaHQgZGllIERhdGVuc2FtbWx1bmdcbndpbmRvdy5hZGIuZW50ZmVybmVEYXRlbnNhbW1sdW5nQXVzQWxsZW5PYmpla3RlbiA9IGZ1bmN0aW9uKGRzX25hbWUpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZHNfZW50ZmVybnQgPSAkLkRlZmVycmVkKCksXG4gICAgICAgIGFuel92b3Jrb21tZW5fdm9uX2RzLFxuICAgICAgICBhbnpfdm9ya29tbWVuX3Zvbl9kc19lbnRmZXJudCA9IDAsXG4gICAgICAgICRpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9oaW53ZWlzID0gJChcIiNpbXBvcnRpZXJlbl9kc19kc19iZXNjaHJlaWJlbl9oaW53ZWlzXCIpLFxuICAgICAgICAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKSxcbiAgICAgICAgcsO8Y2ttZWxkdW5nO1xuXHQkZGIudmlldygnYXJ0ZW5kYi9kc19ndWlkP3N0YXJ0a2V5PVtcIicgKyBkc19uYW1lICsgJ1wiXSZlbmRrZXk9W1wiJyArIGRzX25hbWUgKyAnXCIse31dJywge1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGFuel92b3Jrb21tZW5fdm9uX2RzID0gZGF0YS5yb3dzLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gbGlzdGVuZXIgZWlucmljaHRlbiwgZGVyIG1lbGRldCwgd2VubiBlaSBEYXRlbnNhdHogZW50ZmVybnQgd3VyZGVcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2FkYi5kc19lbnRmZXJudCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFuel92b3Jrb21tZW5fdm9uX2RzX2VudGZlcm50Kys7XG4gICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nID0gXCJFaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiB3ZXJkZW4gZW50ZmVybnQuLi48YnI+RGllIEluZGV4ZSB3ZXJkZW4gYWt0dWFsaXNpZXJ0Li4uXCI7XG4gICAgICAgICAgICAgICAgJGltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKS5yZW1vdmVDbGFzcyhcImFsZXJ0LWRhbmdlclwiKS5hZGRDbGFzcyhcImFsZXJ0LWluZm9cIilcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwocsO8Y2ttZWxkdW5nKTtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJGltcG9ydGllcmVuX2RzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXMub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgaWYgKGFuel92b3Jrb21tZW5fdm9uX2RzX2VudGZlcm50ID09PSBhbnpfdm9ya29tbWVuX3Zvbl9kcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaWUgSW5kZXhlIGFrdHVhbGlzaWVyZW5cbiAgICAgICAgICAgICAgICAgICAgJGRiLnZpZXcoJ2FydGVuZGIvbHInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZWxkZW4sIGRhc3MgSW5kZXhlIGFrdHVhbGlzaWVydCB3dXJkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByw7xja21lbGR1bmcgPSBcIkRpZSBFaWdlbnNjaGFmdGVuc2FtbWx1bmdlbiB3dXJkZW4gZW50ZmVybnQuPGJyPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHLDvGNrbWVsZHVuZyArPSBcIkRpZSBJbmRleGUgd3VyZGVuIGFrdHVhbGlzaWVydC5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW1wb3J0aWVyZW5fZHNfZHNfYmVzY2hyZWliZW5faGlud2Vpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1pbmZvXCIpLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpLmFkZENsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChyw7xja21lbGR1bmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkaW1wb3J0aWVyZW5fZHNfZHNfYmVzY2hyZWliZW5faGlud2Vpcy5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuIGVudGZlcm5lblxuICAgICAgICAgICAgXy5lYWNoKGRhdGEucm93cywgZnVuY3Rpb24oZGF0YV9yb3cpIHtcbiAgICAgICAgICAgICAgICAvLyBndWlkIHVuZCBEc05hbWUgw7xiZXJnZWJlblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGIuZW50ZmVybmVEYXRlbnNhbW1sdW5nQXVzRG9rdW1lbnQoZGF0YV9yb3cua2V5WzFdLCBkc19uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuXHRcdFx0ZHNfZW50ZmVybnQucmVzb2x2ZSgpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkc19lbnRmZXJudC5wcm9taXNlKCk7XG59O1xuXG4vLyDDvGJlcm5pbW10IGRlbiBOYW1lbiBlaW5lciBCZXppZWh1bmdzc2FtbWx1bmdcbi8vIMO2ZmZuZXQgYWxsZSBEb2t1bWVudGUsIGRpZSBkaWVzZSBCZXppZWh1bmdzc2FtbWx1bmcgZW50aGFsdGVuIHVuZCBsw7ZzY2h0IGRpZSBCZXppZWh1bmdzc2FtbWx1bmdcbndpbmRvdy5hZGIuZW50ZmVybmVCZXppZWh1bmdzc2FtbWx1bmdBdXNBbGxlbk9iamVrdGVuID0gZnVuY3Rpb24oYnNfbmFtZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBic19lbnRmZXJudCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgYW56X3ZvcmtvbW1lbl92b25fYnNfZW50ZmVybnQgPSAwLFxuICAgICAgICBhbnpfdm9ya29tbWVuX3Zvbl9icyxcbiAgICAgICAgJGltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXMgPSAkKFwiI2ltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNcIiksXG4gICAgICAgICRpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9oaW53ZWlzX3RleHQgPSAkKFwiI2ltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNfdGV4dFwiKSxcbiAgICAgICAgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIiksXG4gICAgICAgIHLDvGNrbWVsZHVuZztcblx0JGRiLnZpZXcoJ2FydGVuZGIvYnNfZ3VpZD9zdGFydGtleT1bXCInICsgYnNfbmFtZSArICdcIl0mZW5ka2V5PVtcIicgKyBic19uYW1lICsgJ1wiLHt9XScsIHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBhbnpfdm9ya29tbWVuX3Zvbl9icyA9IGRhdGEucm93cy5sZW5ndGg7XG4gICAgICAgICAgICAvLyBsaXN0ZW5lciBlaW5yaWNodGVuLCBkZXIgbWVsZGV0LCB3ZW5uIGVpbiBEYXRlbnNhdHogZW50ZmVybnQgd3VyZGVcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2FkYi5ic19lbnRmZXJudCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFuel92b3Jrb21tZW5fdm9uX2JzX2VudGZlcm50Kys7XG4gICAgICAgICAgICAgICAgJGltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtaW5mb1wiKTtcbiAgICAgICAgICAgICAgICByw7xja21lbGR1bmcgPSBcIkJlemllaHVuZ3NzYW1tbHVuZ2VuIHdlcmRlbiBlbnRmZXJudC4uLjxicj5EaWUgSW5kZXhlIHdlcmRlbiBha3R1YWxpc2llcnQuLi5cIjtcbiAgICAgICAgICAgICAgICAkaW1wb3J0aWVyZW5fYnNfZHNfYmVzY2hyZWliZW5faGlud2Vpc190ZXh0Lmh0bWwocsO8Y2ttZWxkdW5nKTtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJGltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNfdGV4dC5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICBpZiAoYW56X3ZvcmtvbW1lbl92b25fYnNfZW50ZmVybnQgPT09IGFuel92b3Jrb21tZW5fdm9uX2JzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpZSBJbmRleGUgYWt0dWFsaXNpZXJlblxuICAgICAgICAgICAgICAgICAgICAkZGIudmlldygnYXJ0ZW5kYi9scicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbGRlbiwgZGFzcyBJbmRleGUgYWt0dWFsaXNpZXJ0IHd1cmRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9oaW53ZWlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWluZm9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcsO8Y2ttZWxkdW5nID0gXCJEaWUgQmV6aWVodW5nc3NhbW1sdW5nZW4gd3VyZGVuIGVudGZlcm50Ljxicj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByw7xja21lbGR1bmcgKz0gXCJEaWUgSW5kZXhlIHd1cmRlbiBha3R1YWxpc2llcnQuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2hpbndlaXNfdGV4dC5odG1sKHLDvGNrbWVsZHVuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICRpbXBvcnRpZXJlbl9ic19kc19iZXNjaHJlaWJlbl9oaW53ZWlzX3RleHQub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbihkYXRhX3Jvdykge1xuICAgICAgICAgICAgICAgIC8vIGd1aWQgdW5kIERzTmFtZSDDvGJlcmdlYmVuXG4gICAgICAgICAgICAgICAgd2luZG93LmFkYi5lbnRmZXJuZUJlemllaHVuZ3NzYW1tbHVuZ0F1c0Rva3VtZW50KGRhdGFfcm93LmtleVsxXSwgYnNfbmFtZSk7XG4gICAgICAgICAgICB9KTtcblx0XHRcdGJzX2VudGZlcm50LnJlc29sdmUoKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gYnNfZW50ZmVybnQucHJvbWlzZSgpO1xufTtcblxuLy8gw7xiZXJuaW1tdCBkaWUgaWQgZGVzIHp1IHZlcsOkbmRlcm5kZW4gRG9rdW1lbnRzXG4vLyB1bmQgZGVuIE5hbWVuIGRlciBEYXRlbnNhbW1sdW5nLCBkaWUgenUgZW50ZmVybmVuIGlzdFxuLy8gZW50ZmVybnQgZGllIERhdGVuc2FtbWx1bmdcbndpbmRvdy5hZGIuZW50ZmVybmVEYXRlbnNhbW1sdW5nQXVzRG9rdW1lbnQgPSBmdW5jdGlvbihpZCwgZHNfbmFtZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0JGRiLm9wZW5Eb2MoaWQsIHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihkb2MpIHtcblx0XHRcdC8vIERhdGVuc2FtbWx1bmcgZW50ZmVybmVuXG4gICAgICAgICAgICBkb2MuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gPSBfLnJlamVjdChkb2MuRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4sIGZ1bmN0aW9uKGRhdGVuc2FtbWx1bmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZW5zYW1tbHVuZy5OYW1lID09PSBkc19uYW1lXG4gICAgICAgICAgICB9KTtcblx0XHRcdC8vIGluIGFydGVuZGIgc3BlaWNoZXJuXG5cdFx0XHQkZGIuc2F2ZURvYyhkb2MpO1xuICAgICAgICAgICAgLy8gbWl0dGVpbGVuLCBkYXNzIGVpbmUgZHMgZW50ZmVybnQgd3VyZGVcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FkYi5kc19lbnRmZXJudCcpO1xuICAgICAgICAgICAgLy8gVE9ETzogU2NoZWl0ZXJuIGFiZmFuZ2VuICh0cmlnZ2VyIGFkYi5kc19uaWNodF9lbnRmZXJudClcblx0XHR9XG5cdH0pO1xufTtcblxuLy8gw7xiZXJuaW1tdCBkaWUgaWQgZGVzIHp1IHZlcsOkbmRlcm5kZW4gRG9rdW1lbnRzXG4vLyB1bmQgZGVuIE5hbWVuIGRlciBCZXppZWh1bmdzc2FtbWx1bmcsIGRpZSB6dSBlbnRmZXJuZW4gaXN0XG4vLyBlbnRmZXJudCBkaWUgQmV6aWVodW5nc3NhbW1sdW5nXG53aW5kb3cuYWRiLmVudGZlcm5lQmV6aWVodW5nc3NhbW1sdW5nQXVzRG9rdW1lbnQgPSBmdW5jdGlvbihpZCwgYnNfbmFtZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0JGRiLm9wZW5Eb2MoaWQsIHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihkb2MpIHtcblx0XHRcdC8vIEJlemllaHVuZ3NzYW1tbHVuZyBlbnRmZXJuZW5cbiAgICAgICAgICAgIGRvYy5CZXppZWh1bmdzc2FtbWx1bmdlbiA9IF8ucmVqZWN0KGRvYy5CZXppZWh1bmdzc2FtbWx1bmdlbiwgZnVuY3Rpb24oYmV6aWVodW5nc3NhbW1sdW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJlemllaHVuZ3NzYW1tbHVuZy5OYW1lID09PSBic19uYW1lXG4gICAgICAgICAgICB9KTtcblx0XHRcdC8vIGluIGFydGVuZGIgc3BlaWNoZXJuXG5cdFx0XHQkZGIuc2F2ZURvYyhkb2MpO1xuICAgICAgICAgICAgLy8gbWl0dGVpbGVuLCBkYXNzIGVpbmUgZHMgZW50ZmVybnQgd3VyZGVcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FkYi5ic19lbnRmZXJudCcpO1xuICAgICAgICAgICAgLy8gVE9ETzogU2NoZWl0ZXJuIGFiZmFuZ2VuICh0cmlnZ2VyIGFkYi5kc19uaWNodF9lbnRmZXJudClcblx0XHR9XG5cdH0pO1xufTtcblxuLy8gcHLDvGZ0IGRpZSBVUkwuIHdlbm4gZWluZSBpZCDDvGJlcmdlYmVuIHd1cmRlLCB3aXJkIGRhcyBlbnRwcmVjaGVuZGUgT2JqZWt0IGFuZ2V6ZWlndFxud2luZG93LmFkYi7DtmZmbmVVcmkgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBwYXJhbWV0ZXIgZGVyIHVyaSBob2xlblxuXHR2YXIgdXJpID0gbmV3IFVyaSgkKGxvY2F0aW9uKS5hdHRyKCdocmVmJykpLFxuXHRcdGlkID0gdXJpLmdldFF1ZXJ5UGFyYW1WYWx1ZSgnaWQnKSxcblx0XHQvLyB3ZW5uIGJyb3dzZXIgaGlzdG9yeSBuaWNodCB1bnRlcnN0w7x0enQsIGVyc3RlbGx0IGhpc3RvcnkuanMgZWluZSBoYXNoXG5cdFx0Ly8gZGFubiBtdXNzIGRpZSBpZCBkdXJjaCBkaWUgaWQgaW4gZGVyIGhhc2ggZXJzZXR6dCB3ZXJkZW5cblx0XHRoYXNoID0gdXJpLmFuY2hvcigpLFxuXHRcdHVyaTIsXG5cdFx0ZXJzdGVsbGVCYXVtID0gcmVxdWlyZSgnLi9tb2R1bGVzL2Vyc3RlbGxlQmF1bScpO1xuXHRpZiAoaGFzaCkge1xuXHRcdHVyaTIgPSBuZXcgVXJpKGhhc2gpO1xuXHRcdGlkID0gdXJpMi5nZXRRdWVyeVBhcmFtVmFsdWUoJ2lkJyk7XG5cdH1cblx0aWYgKGlkKSB7XG5cdFx0Ly8gR3J1cHBlIGVybWl0dGVsblxuXHRcdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0XHQkZGIub3BlbkRvYyhpZCwge1xuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ob2JqZWt0KSB7XG5cdFx0XHRcdC8vIHdpbmRvdy5hZGIuR3J1cHBlIHNldHplbi4gTsO2dGlnLCB1bSBpbSBNZW51IGRpZSByaWNodGlnZW4gRmVsZGVyIGVpbnp1YmxlbmRlblxuXHRcdFx0XHR3aW5kb3cuYWRiLkdydXBwZSA9IG9iamVrdC5HcnVwcGU7XG5cdFx0XHRcdCQoXCIuYmF1bS5qc3RyZWVcIikuanN0cmVlKFwiZGVzZWxlY3RfYWxsXCIpO1xuXHRcdFx0XHQvLyBkZW4gcmljaHRpZ2VuIEJ1dHRvbiBha3RpdmllcmVuXG5cdFx0XHRcdCQoJ1tncnVwcGU9XCInK29iamVrdC5HcnVwcGUrJ1wiXScpLmJ1dHRvbigndG9nZ2xlJyk7XG5cdFx0XHRcdCQoXCIjR3J1cHBlX2xhYmVsXCIpLmh0bWwoXCJHcnVwcGU6XCIpO1xuXHRcdFx0XHQvLyB0cmVlIGF1ZmJhdWVuLCBkYW5hY2ggRGF0ZW5zYXR6IGluaXRpaWVyZW5cblx0XHRcdFx0JC53aGVuKGVyc3RlbGxlQmF1bSgpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHdpbmRvdy5hZGIuw7ZmZm5lQmF1bVp1SWQoaWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuICAgIC8vIGRhZsO8ciBzb3JnZW4sIGRhc3MgZGllIHBhc3NlbmRlbiBNZW51cyBhbmdlemVpZ3Qgd2VyZGVuXG4gICAgd2luZG93LmFkYi5ibGVuZGVNZW51cygpO1xufTtcblxuLy8gw7xiZXJuaW1tdCBhbmZhbmdzIGRyZWkgYXJyYXlzOiB0YXhvbm9taWVuLCBkYXRlbnNhbW1sdW5nZW4gdW5kIGJlemllaHVuZ3NzYW1tbHVuZ2VuXG4vLyB2ZXJhcmJlaXRldCBpbW1lciBkZW4gZXJzdGVuIGFycmF5IHVuZCBydWZ0IHNpY2ggbWl0IGRlbiDDvGJyaWdlbiBzZWxiZXIgd2llZGVyIGF1Zlxud2luZG93LmFkYi5lcnN0ZWxsZUV4cG9ydGZlbGRlciA9IGZ1bmN0aW9uKHRheG9ub21pZW4sIGRhdGVuc2FtbWx1bmdlbiwgYmV6aWVodW5nc3NhbW1sdW5nZW4pIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaHRtbF9mZWxkZXJfd8OkaGxlbiA9ICcnLFxuXHRcdGh0bWxfZmlsdGVybiA9ICcnLFxuXHRcdGRzX3R5cCxcbiAgICAgICAgeCxcbiAgICAgICAgZHNic192b25fb2JqZWt0ZW4gPSBbXSxcbiAgICAgICAgZHNic192b25fb2JqZWt0LFxuICAgICAgICBkc19mZWxkZXJfb2JqZWt0LFxuICAgICAgICBodG1sO1xuXG4gICAgLy8gRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gdm9yYmVyZWl0ZW5cbiAgICAvLyBTdHJ1a3R1ciB2b24gd2luZG93LmFkYi5kc19ic192b25fb2JqZWt0ZW4gaXN0IGpldHp0OiBbZHNfdHlwLCBkcy5OYW1lLCBkcy56dXNhbW1lbmZhc3NlbmQsIGRzW1wiaW1wb3J0aWVydCB2b25cIl0sIEZlbGRlcl9hcnJheV1cbiAgICAvLyBlcnN0IG1hbCBkaWUgbmljaHQgYmVuw7Z0aWd0ZW4gV2VydGUgZW50ZmVybmVuXG4gICAgXy5lYWNoKHdpbmRvdy5hZGIuZHNfYnNfdm9uX29iamVrdGVuLnJvd3MsIGZ1bmN0aW9uKG9iamVjdF93aXRoX2FycmF5X2luX2tleSkge1xuICAgICAgICBkc2JzX3Zvbl9vYmpla3Rlbi5wdXNoKFtvYmplY3Rfd2l0aF9hcnJheV9pbl9rZXkua2V5WzFdLCBvYmplY3Rfd2l0aF9hcnJheV9pbl9rZXkua2V5WzRdXSk7XG4gICAgfSk7XG4gICAgLy8gU3RydWt0dXIgdm9uIGRzYnNfdm9uX29iamVrdGVuIGlzdCBqZXR6dDogW2RzLk5hbWUsIGZlbGRlcl9vYmpla3RdXG4gICAgLy8gamV0enQgZ2lidCBlcyBNZWhyZmFjaGVpbnRyw6RnZSwgZGllc2UgZW50ZmVybmVuXG4gICAgZHNic192b25fb2JqZWt0ZW4gPSBfLnVuaW9uKGRzYnNfdm9uX29iamVrdGVuKTtcblxuXHRpZiAodGF4b25vbWllbiAmJiBkYXRlbnNhbW1sdW5nZW4gJiYgYmV6aWVodW5nc3NhbW1sdW5nZW4pIHtcblx0XHRkc190eXAgPSBcIlRheG9ub21pZVwiO1xuXHRcdGh0bWxfZmVsZGVyX3fDpGhsZW4gKz0gJzxoMz5UYXhvbm9taWU8L2gzPic7XG5cdFx0aHRtbF9maWx0ZXJuICs9ICc8aDM+VGF4b25vbWllPC9oMz4nO1xuXHR9IGVsc2UgaWYgKHRheG9ub21pZW4gJiYgZGF0ZW5zYW1tbHVuZ2VuKSB7XG5cdFx0ZHNfdHlwID0gXCJEYXRlbnNhbW1sdW5nXCI7XG5cdFx0aHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnPGgzPkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuPC9oMz4nO1xuXHRcdGh0bWxfZmlsdGVybiArPSAnPGgzPkVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuPC9oMz4nO1xuXHR9IGVsc2Uge1xuXHRcdGRzX3R5cCA9IFwiQmV6aWVodW5nXCI7XG5cdFx0Ly8gYmVpIFwiZmVsZGVyIHfDpGhsZW5cIiBzb2xsIG1hbiBhdWNoIHfDpGhsZW4ga8O2bm5lbiwgb2IgcHJvIEJlemllaHVuZyBlaW5lIFplaWxlIG9kZXIgYWxsZSBCZXppZWh1bmdlbiBpbiBlaW4gRmVsZCBnZXNjaHJpZWJlbiB3ZXJkZW4gc29sbGVuXG5cdFx0Ly8gZGFzIG11c3MgYXVjaCBlcmtsw6RydCBzZWluXG5cdFx0aHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnPGgzPkJlemllaHVuZ3NzYW1tbHVuZ2VuPC9oMz48ZGl2IGNsYXNzPVwiZXhwb3J0X3p1bV90aXRlbF9nZWhvZXJpZ1wiPjxkaXYgY2xhc3M9XCJ3ZWxsIHdlbGwtc21cIiBzdHlsZT1cIm1hcmdpbi10b3A6OXB4O1wiPjxiPlNpZSBrw7ZubmVuIGF1cyB6d2VpIFZhcmlhbnRlbiB3w6RobGVuPC9iPiA8YSBocmVmPVwiI1wiIGNsYXNzPVwic2hvd19uZXh0X2hpZGRlblwiPi4uLm1laHI8L2E+PG9sIGNsYXNzPVwiYWRiLWhpZGRlblwiPjxsaT5Qcm8gQmV6aWVodW5nIGVpbmUgWmVpbGUgKFN0YW5kYXJkZWluc3RlbGx1bmcpOjx1bD48bGk+RsO8ciBqZWRlIEFydCBvZGVyIExlYmVuc3JhdW0gd2lyZCBwcm8gQmV6aWVodW5nIGVpbmUgbmV1ZSBaZWlsZSBlcnpldWd0PC9saT48bGk+QW5zY2hsaWVzc2VuZGUgQXVzd2VydHVuZ2VuIHNpbmQgc28gbWVpc3QgZWluZmFjaGVyIGF1c3p1ZsO8aHJlbjwvbGk+PGxpPkRhZsO8ciBrw7ZubmVuIFNpZSBhdXMgbWF4aW1hbCBlaW5lciBCZXppZWh1bmdzc2FtbWx1bmcgRmVsZGVyIHfDpGhsZW4gKGFiZXIgd2llIGdld29obnQgbWl0IGJlbGllYmlnIHZpZWxlbiBGZWxkZXJuIGF1cyBUYXhvbm9taWUobikgdW5kIEVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuIGVyZ8Okbnplbik8L2xpPjwvdWw+PC9saT48bGk+UHJvIEFydC9MZWJlbnNyYXVtIGVpbmUgWmVpbGUgdW5kIGFsbGUgQmV6aWVodW5nZW4ga29tbWFnZXRyZW5udCBpbiBlaW5lbSBGZWxkOjx1bD48bGk+Vm9uIGFsbGVuIEJlemllaHVuZ2VuIGRlciBBcnQgb2RlciBkZXMgTGViZW5zcmF1bXMgd2lyZCBkZXIgSW5oYWx0IGRlcyBGZWxkZXMga29tbWFnZXRyZW5udCBpbiBkYXMgRmVsZCBkZXIgZWluemlnZW4gWmVpbGUgZ2VzY2hyaWViZW48L2xpPjxsaT5TaWUga8O2bm5lbiBGZWxkZXIgYXVzIGJlbGllYmlnZW4gQmV6aWVodW5nc3NhbW1sdW5nZW4gZ2xlaWNoemVpdGlnIGV4cG9ydGllcmVuPC9saT48L3VsPjwvbGk+PC9vbD48L2Rpdj48ZGl2IGNsYXNzPVwicmFkaW9cIj48bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZXhwb3J0X2Jlel9pbl96ZWlsZW5cIiBjaGVja2VkPVwiY2hlY2tlZFwiIG5hbWU9XCJleHBvcnRfYmV6X3dpZVwiPlBybyBCZXppZWh1bmcgZWluZSBaZWlsZTwvbGFiZWw+PC9kaXY+PGRpdiBjbGFzcz1cInJhZGlvXCI+PGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImV4cG9ydF9iZXpfaW5fZmVsZGVyblwiIG5hbWU9XCJleHBvcnRfYmV6X3dpZVwiPlBybyBBcnQvTGViZW5zcmF1bSBlaW5lIFplaWxlIHVuZCBhbGxlIEJlemllaHVuZ2VuIGtvbW1hZ2V0cmVubnQgaW4gZWluZW0gRmVsZDwvbGFiZWw+PC9kaXY+PC9kaXY+PGhyPic7XG5cdFx0aHRtbF9maWx0ZXJuICs9ICc8aDM+QmV6aWVodW5nc3NhbW1sdW5nZW48L2gzPic7XG5cdH1cbiAgICBfLmVhY2godGF4b25vbWllbiwgZnVuY3Rpb24odGF4b25vbWllLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBodG1sX2ZlbGRlcl93w6RobGVuICs9ICc8aHI+JztcbiAgICAgICAgICAgIGh0bWxfZmlsdGVybiArPSAnPGhyPic7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sX2ZlbGRlcl93w6RobGVuICs9ICc8aDU+JyArIHRheG9ub21pZS5OYW1lO1xuICAgICAgICBodG1sX2ZpbHRlcm4gKz0gJzxoNT4nICsgdGF4b25vbWllLk5hbWU7XG4gICAgICAgIC8vIGluZm9ybWF0aW9uZW4genVyIGRzIGhvbGVuXG4gICAgICAgIGRzYnNfdm9uX29iamVrdCA9IF8uZmluZChkc2JzX3Zvbl9vYmpla3RlbiwgZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheVswXSA9PT0gdGF4b25vbWllLk5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZHNic192b25fb2JqZWt0ICYmIGRzYnNfdm9uX29iamVrdFsxXSkge1xuICAgICAgICAgICAgaHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzaG93X25leHRfaGlkZGVuX2V4cG9ydFwiPi4uLm1laHI8L2E+JztcbiAgICAgICAgICAgIGh0bWxfZmlsdGVybiArPSAnIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzaG93X25leHRfaGlkZGVuX2V4cG9ydFwiPi4uLm1laHI8L2E+JztcbiAgICAgICAgICAgIC8vIGRzLXRpdGVsIGFic2NobGllc3NlblxuICAgICAgICAgICAgaHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnPC9oNT4nO1xuICAgICAgICAgICAgaHRtbF9maWx0ZXJuICs9ICc8L2g1Pic7XG4gICAgICAgICAgICAvLyBGZWxkZXIgZGVyIGRzIGRhcnN0ZWxsZW5cbiAgICAgICAgICAgIGh0bWxfZmVsZGVyX3fDpGhsZW4gKz0gJzxkaXYgY2xhc3M9XCJhZGItaGlkZGVuXCI+JztcbiAgICAgICAgICAgIGh0bWxfZmlsdGVybiArPSAnPGRpdiBjbGFzcz1cImFkYi1oaWRkZW5cIj4nO1xuICAgICAgICAgICAgZHNfZmVsZGVyX29iamVrdCA9IGRzYnNfdm9uX29iamVrdFsxXTtcbiAgICAgICAgICAgIF8uZWFjaChkc19mZWxkZXJfb2JqZWt0LCBmdW5jdGlvbihmZWxkd2VydCwgZmVsZG5hbWUpIHtcbiAgICAgICAgICAgIFx0aWYgKGZlbGRuYW1lID09PSBcInp1c2FtbWVuZmFzc2VuZFwiKSB7XG4gICAgICAgICAgICBcdFx0Ly8gbmljaHQgc2FnZW4sIHdvaGVyIGRpZSBJbmZvcyBzdGFtbWVuLCB3ZWlsIGRhcyBPYmpla3QtYWJow6RuZ2lnIGlzdFxuICAgICAgICAgICAgXHRcdGh0bWwgPSAnPGRpdiBjbGFzcz1cImRzX2Jlc2NocmVpYnVuZ196ZWlsZVwiPjxkaXY+WnVzLi1mYXNzZW5kOjwvZGl2PjxkaXY+RGllc2UgRGF0ZW5zYW1tbHVuZyBmYXNzdCBkaWUgRGF0ZW4gbWVocmVyZXIgRWlnZW5zY2hhZnRlbnNhbW1sdW5nZW4gaW4gZWluZXIgenVzYW1tZW48L2Rpdj48L2Rpdj4nO1xuICAgICAgICAgICAgXHRcdGh0bWxfZmVsZGVyX3fDpGhsZW4gKz0gaHRtbDtcblx0ICAgICAgICAgICAgICAgIGh0bWxfZmlsdGVybiArPSBodG1sO1xuXHQgICAgICAgICAgICB9IGVsc2UgaWYgKGZlbGRuYW1lICE9PSBcIlVyc3BydW5nc2RhdGVuc2FtbWx1bmdcIikge1xuICAgICAgICAgICAgXHRcdGh0bWwgPSAnPGRpdiBjbGFzcz1cImRzX2Jlc2NocmVpYnVuZ196ZWlsZVwiPjxkaXY+JyArIGZlbGRuYW1lICsgJzo8L2Rpdj48ZGl2PicgKyBBdXRvbGlua2VyLmxpbmsoZmVsZHdlcnQpICsgJzwvZGl2PjwvZGl2Pic7XG4gICAgICAgICAgICBcdFx0aHRtbF9mZWxkZXJfd8OkaGxlbiArPSBodG1sO1xuXHQgICAgICAgICAgICAgICAgaHRtbF9maWx0ZXJuICs9IGh0bWw7XG4gICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnPC9kaXY+JztcbiAgICAgICAgICAgIGh0bWxfZmlsdGVybiArPSAnPC9kaXY+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRzLXRpdGVsIGFic2NobGllc3NlblxuICAgICAgICAgICAgaHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnPC9oNT4nO1xuICAgICAgICAgICAgaHRtbF9maWx0ZXJuICs9ICc8L2g1Pic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBqZXR6dCBkaWUgY2hlY2tib3ggdW0gYWxsZSBhdXN3w6RobGVuIHp1IGvDtm5uZW5cbiAgICAgICAgLy8gYWJlciBudXIsIHdlbm4gbWVociBhbHMgMSBGZWxkIGV4aXN0aWVyZW5cbiAgICAgICAgaWYgKCh0YXhvbm9taWUuRWlnZW5zY2hhZnRlbiAmJiBfLnNpemUodGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4pID4gMSkgfHwgKHRheG9ub21pZS5CZXppZWh1bmdlbiAmJiBfLnNpemUodGF4b25vbWllLkJlemllaHVuZ2VuKSA+IDEpKSB7XG4gICAgICAgICAgICBodG1sX2ZlbGRlcl93w6RobGVuICs9ICc8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48bGFiZWw+JztcbiAgICAgICAgICAgIGh0bWxfZmVsZGVyX3fDpGhsZW4gKz0gJzxpbnB1dCBjbGFzcz1cImZlbGRfd2FlaGxlbl9hbGxlX3Zvbl9kc1wiIHR5cGU9XCJjaGVja2JveFwiIERzVHlwPVwiJytkc190eXArJ1wiIERhdGVuc2FtbWx1bmc9XCInICsgdGF4b25vbWllLk5hbWUgKyAnXCI+PGVtPmFsbGU8L2VtPic7XG4gICAgICAgICAgICBodG1sX2ZlbGRlcl93w6RobGVuICs9ICc8L2Rpdj48L2xhYmVsPic7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnPGRpdiBjbGFzcz1cImZlbGRlcnNwYWx0ZVwiPic7XG5cblxuICAgICAgICBodG1sX2ZpbHRlcm4gKz0gJzxkaXYgY2xhc3M9XCJmZWxkZXJzcGFsdGVcIj4nO1xuICAgICAgICBmb3IgKHggaW4gKHRheG9ub21pZS5FaWdlbnNjaGFmdGVuIHx8IHRheG9ub21pZS5CZXppZWh1bmdlbikpIHtcbiAgICAgICAgICAgIC8vIGZlbGRlciB3w6RobGVuXG4gICAgICAgICAgICBodG1sX2ZlbGRlcl93w6RobGVuICs9ICc8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48bGFiZWw+JztcbiAgICAgICAgICAgIGh0bWxfZmVsZGVyX3fDpGhsZW4gKz0gJzxpbnB1dCBjbGFzcz1cImZlbGRfd2FlaGxlblwiIHR5cGU9XCJjaGVja2JveFwiIERzVHlwPVwiJytkc190eXArJ1wiIERhdGVuc2FtbWx1bmc9XCInICsgdGF4b25vbWllLk5hbWUgKyAnXCIgRmVsZD1cIicgKyB4ICsgJ1wiPicgKyB4O1xuICAgICAgICAgICAgaHRtbF9mZWxkZXJfd8OkaGxlbiArPSAnPC9kaXY+PC9sYWJlbD4nO1xuICAgICAgICAgICAgLy8gZmlsdGVyblxuICAgICAgICAgICAgaHRtbF9maWx0ZXJuICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPic7XG4gICAgICAgICAgICBodG1sX2ZpbHRlcm4gKz0gJzxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBmb3I9XCJleHBvcnRpZXJlbl9vYmpla3RlX3dhZWhsZW5fZHNfJyArIHdpbmRvdy5hZGIuZXJzZXR6ZVVuZ8O8bHRpZ2VaZWljaGVuSW5JZE5hbWVuKHgpICsgJ1wiJztcbiAgICAgICAgICAgIC8vIEZlbGRuYW1lbiwgZGllIG1laHIgYWxzIGVpbmUgWmVpbGUgYmVsZWdlbjogT2JlbiBhdXNyaWNodGVuXG4gICAgICAgICAgICBpZiAoeC5sZW5ndGggPiAyOCkge1xuICAgICAgICAgICAgICAgIGh0bWxfZmlsdGVybiArPSAnIHN0eWxlPVwicGFkZGluZy10b3A6MHB4XCInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbF9maWx0ZXJuICs9ICc+JyArIHggKyAnPC9sYWJlbD4nO1xuICAgICAgICAgICAgLy9pZiAodGF4b25vbWllLkZlbGR0eXAgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICBpZiAoKHRheG9ub21pZS5FaWdlbnNjaGFmdGVuICYmICh0YXhvbm9taWUuRWlnZW5zY2hhZnRlblt4XSA9PT0gXCJib29sZWFuXCIpKSB8fCAodGF4b25vbWllLkJlemllaHVuZ2VuICYmICh0YXhvbm9taWUuQmV6aWVodW5nZW5beF0gPT09IFwiYm9vbGVhblwiKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBlaW5lciBjaGVja2JveCBkYXJzdGVsbGVuXG4gICAgICAgICAgICAgICAgLy8gcmVhZG9ubHkgbWFya2llcnQsIGRhc3Mga2VpbiBXZXJ0IGVyZmFzc3Qgd3VyZGVcbiAgICAgICAgICAgICAgICBodG1sX2ZpbHRlcm4gKz0gJzxpbnB1dCBjbGFzcz1cImNvbnRyb2xzIGZvcm0tY29udHJvbCBleHBvcnRfZmVsZF9maWx0ZXJuIGZvcm0tY29udHJvbFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiZXhwb3J0aWVyZW5fb2JqZWt0ZV93YWVobGVuX2RzXycgKyB3aW5kb3cuYWRiLmVyc2V0emVVbmfDvGx0aWdlWmVpY2hlbkluSWROYW1lbih4KSArICdcIiBEc1R5cD1cIicgKyBkc190eXAgKyAnXCIgRWlnZW5zY2hhZnQ9XCInICsgdGF4b25vbWllLk5hbWUgKyAnXCIgRmVsZD1cIicgKyB4ICsgJ1wiIHJlYWRvbmx5Pic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluIGVpbmVtIGlucHV0LWZlbGQgZGFyc3RlbGxlblxuICAgICAgICAgICAgICAgIGh0bWxfZmlsdGVybiArPSAnPGlucHV0IGNsYXNzPVwiY29udHJvbHMgZm9ybS1jb250cm9sIGV4cG9ydF9mZWxkX2ZpbHRlcm4gZm9ybS1jb250cm9sIGlucHV0LXNtXCIgdHlwZT1cInRleHRcIiBpZD1cImV4cG9ydGllcmVuX29iamVrdGVfd2FlaGxlbl9kc18nICsgd2luZG93LmFkYi5lcnNldHplVW5nw7xsdGlnZVplaWNoZW5JbklkTmFtZW4oeCkgKyAnXCIgRHNUeXA9XCInICsgZHNfdHlwICsgJ1wiIEVpZ2Vuc2NoYWZ0PVwiJyArIHRheG9ub21pZS5OYW1lICsgJ1wiIEZlbGQ9XCInICsgeCArICdcIj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbF9maWx0ZXJuICs9ICc8L2Rpdj4nO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwYWx0ZW4gYWJzY2hsaWVzc2VuXG4gICAgICAgIGh0bWxfZmVsZGVyX3fDpGhsZW4gKz0gJzwvZGl2Pic7XG4gICAgICAgIGh0bWxfZmlsdGVybiArPSAnPC9kaXY+JztcbiAgICB9KTtcblx0Ly8gbGluaWUgdm9yYW5zdGVsbGVuXG5cdGh0bWxfZmVsZGVyX3fDpGhsZW4gPSAnPGhyPicgKyBodG1sX2ZlbGRlcl93w6RobGVuO1xuXHRodG1sX2ZpbHRlcm4gPSAnPGhyPicgKyBodG1sX2ZpbHRlcm47XG5cdGlmIChiZXppZWh1bmdzc2FtbWx1bmdlbikge1xuXHRcdCQoXCIjZXhwb3J0aWVyZW5fZmVsZGVyX3dhZWhsZW5fZmVsZGVybGlzdGVcIikuaHRtbChodG1sX2ZlbGRlcl93w6RobGVuKTtcblx0XHQkKFwiI2V4cG9ydGllcmVuX29iamVrdGVfd2FlaGxlbl9kc19mZWxkZXJsaXN0ZVwiKS5odG1sKGh0bWxfZmlsdGVybik7XG5cdFx0d2luZG93LmFkYi5lcnN0ZWxsZUV4cG9ydGZlbGRlcihkYXRlbnNhbW1sdW5nZW4sIGJlemllaHVuZ3NzYW1tbHVuZ2VuKTtcblx0fSBlbHNlIGlmIChkYXRlbnNhbW1sdW5nZW4pIHtcblx0XHQkKFwiI2V4cG9ydGllcmVuX2ZlbGRlcl93YWVobGVuX2ZlbGRlcmxpc3RlXCIpLmFwcGVuZChodG1sX2ZlbGRlcl93w6RobGVuKTtcblx0XHQkKFwiI2V4cG9ydGllcmVuX29iamVrdGVfd2FlaGxlbl9kc19mZWxkZXJsaXN0ZVwiKS5hcHBlbmQoaHRtbF9maWx0ZXJuKTtcblx0XHR3aW5kb3cuYWRiLmVyc3RlbGxlRXhwb3J0ZmVsZGVyKGRhdGVuc2FtbWx1bmdlbik7XG5cdH0gZWxzZSB7XG5cdFx0JChcIiNleHBvcnRpZXJlbl9mZWxkZXJfd2FlaGxlbl9mZWxkZXJsaXN0ZVwiKS5hcHBlbmQoaHRtbF9mZWxkZXJfd8OkaGxlbik7XG5cdFx0JChcIiNleHBvcnRpZXJlbl9vYmpla3RlX3dhZWhsZW5fZHNfZmVsZGVybGlzdGVcIilcbiAgICAgICAgICAgIC5hcHBlbmQoaHRtbF9maWx0ZXJuKVxuICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cdH1cbn07XG5cbndpbmRvdy5hZGIuZXJzdGVsbGVFeHBvcnRTdHJpbmcgPSBmdW5jdGlvbihleHBvcnRvYmpla3RlKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHN0cmluZ190aXRlbHplaWxlID0gXCJcIixcblx0XHRzdHJpbmdfemVpbGVuID0gXCJcIixcblx0XHRzdHJpbmdfemVpbGU7XG4gICAgXy5lYWNoKGV4cG9ydG9iamVrdGUsIGZ1bmN0aW9uKGV4cG9ydG9iamVrdCkge1xuICAgICAgICAvLyBhdXMgdW5lcmtsw6RybGljaGVtIEdydW5kIGJsaWViIHN0cmluZ1RpdGVsemVpbGUgbGVlciwgd2VubiBudXIgZWluIERhdGVuc2F0eiBnZWZpbHRlcnQgd3VyZGVcbiAgICAgICAgLy8gZGFoZXIgYmVpIGplZGVtIERhdGVuc2F0eiBwcsO8ZmVuLCBvYiBlaW5lIFRpdGVsemVpbGUgZXJzdGVsbHQgd3VyZGUgdW5kIHdlbm4gbsO2dGlnIGVyZ8OkbnplblxuICAgICAgICBpZiAoc3RyaW5nX3RpdGVsemVpbGUgPT09IFwiXCIgfHwgc3RyaW5nX3RpdGVsemVpbGUgPT09IFwiLFwiKSB7XG4gICAgICAgICAgICBzdHJpbmdfdGl0ZWx6ZWlsZSA9IFwiXCI7XG4gICAgICAgICAgICAvLyBkdXJjaCBTcGFsdGVuIGxvb3BlblxuICAgICAgICAgICAgXy5lYWNoKGV4cG9ydG9iamVrdCwgZnVuY3Rpb24oZmVsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5nX3RpdGVsemVpbGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nX3RpdGVsemVpbGUgKz0gJywnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHJpbmdfdGl0ZWx6ZWlsZSArPSAnXCInICsgaW5kZXggKyAnXCInO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaW5nX3plaWxlbiAhPT0gXCJcIikge1xuICAgICAgICAgICAgc3RyaW5nX3plaWxlbiArPSAnXFxuJztcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmdfemVpbGUgPSBcIlwiO1xuICAgICAgICAvLyBkdXJjaCBkaWUgRmVsZGVyIGxvb3BlblxuICAgICAgICBfLmVhY2goZXhwb3J0b2JqZWt0LCBmdW5jdGlvbihmZWxkKSB7XG4gICAgICAgICAgICBpZiAoc3RyaW5nX3plaWxlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nX3plaWxlICs9ICcsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG51bGwtV2VydGUgYWxzIGxlZXJlIFdlcnRlXG4gICAgICAgICAgICBpZiAoZmVsZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0cmluZ196ZWlsZSArPSBcIlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmVsZCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIC8vIFphaGxlbiBvaG5lIEFuZsO8aHJ1bmdzLSB1bmQgU2NobHVzc3plaWNoZW4gZXhwb3J0aWVyZW5cbiAgICAgICAgICAgICAgICBzdHJpbmdfemVpbGUgKz0gZmVsZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZlbGQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBBbmbDvGhydW5nc3plaWNoZW4gc2luZCBGZWxkdHJlbm5lciB1bmQgbcO8c3NlbiBkYWhlciBlcnNldHp0IHdlcmRlblxuICAgICAgICAgICAgICAgIHN0cmluZ196ZWlsZSArPSAnXCInICsgSlNPTi5zdHJpbmdpZnkoZmVsZCkucmVwbGFjZSgvXCIvZywgXCInXCIpICsgJ1wiJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nX3plaWxlICs9ICdcIicgKyBmZWxkICsgJ1wiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN0cmluZ196ZWlsZW4gKz0gc3RyaW5nX3plaWxlO1xuICAgIH0pO1xuXHRyZXR1cm4gc3RyaW5nX3RpdGVsemVpbGUgKyBcIlxcblwiICsgc3RyaW5nX3plaWxlbjtcbn07XG5cbi8vIGJhdXQgaW0gRm9ybXVsYXIgXCJleHBvcnRcIiBkaWUgTGlzdGUgYWxsZXIgRWlnZW5zY2hhZnRlbiBhdWZcbi8vIHdpbmRvdy5hZGIuZmFzc2VUYXhvbm9taWVuWnVzYW1tZW4gc3RldWVydCwgb2IgVGF4b25vbWllbiBhbGxlIGVpbnplbG4gb2RlciB1bnRlciBkZW0gVGl0ZWwgVGF4b25vbWllbiB6dXNhbW1lbmdlZmFzc3Qgd2VyZGVuXG4vLyBiZWtvbW10IGRlbiBOYW1lbiBkZXIgR3J1cHBlXG53aW5kb3cuYWRiLmVyc3RlbGxlTGlzdGVGw7xyRmVsZHdhaGwgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZXhwb3J0X2dydXBwZW4gPSBbXSxcblx0XHRncnVwcGVuID0gW10sXG4gICAgICAgICRleHBvcnRpZXJlbl9vYmpla3RlX3dhZWhsZW5fZ3J1cHBlbl9oaW53ZWlzX3RleHQgPSAkKFwiI2V4cG9ydGllcmVuX29iamVrdGVfd2FlaGxlbl9ncnVwcGVuX2hpbndlaXNfdGV4dFwiKSxcbiAgICAgICAgJGV4cG9ydGllcmVuX251cl9vYmpla3RlX21pdF9laWdlbnNjaGFmdGVuX2NoZWNrYm94ID0gJChcIiNleHBvcnRpZXJlbl9udXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbl9jaGVja2JveFwiKSxcbiAgICAgICAgJGV4cG9ydGllcmVuX251cl9vYmpla3RlX21pdF9laWdlbnNjaGFmdGVuID0gJChcIiNleHBvcnRpZXJlbl9udXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlblwiKSxcbiAgICAgICAgJGV4cG9ydGllcmVuX2V4cG9ydGllcmVuX2NvbGxhcHNlID0gJChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9jb2xsYXBzZVwiKSxcbiAgICAgICAgJGV4cG9ydGllcmVuX2ZlbGRlcl93YWVobGVuX2NvbGxhcHNlID0gJChcIiNleHBvcnRpZXJlbl9mZWxkZXJfd2FlaGxlbl9jb2xsYXBzZVwiKSxcbiAgICAgICAgJGV4cG9ydGllcmVuX29iamVrdGVfd2FlaGxlbl9kc19jb2xsYXBzZSA9ICQoXCIjZXhwb3J0aWVyZW5fb2JqZWt0ZV93YWVobGVuX2RzX2NvbGxhcHNlXCIpO1xuICAgIC8vIGZhbGxzIG5vY2ggb2ZmZW46IGZvbGdlbmRlIEJlcmVpY2hlIHNjaGxpZXNzZW5cbiAgICBpZiAoJGV4cG9ydGllcmVuX2V4cG9ydGllcmVuX2NvbGxhcHNlLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICRleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9jb2xsYXBzZS5jb2xsYXBzZSgnaGlkZScpO1xuICAgIH1cbiAgICBpZiAoJGV4cG9ydGllcmVuX2ZlbGRlcl93YWVobGVuX2NvbGxhcHNlLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICRleHBvcnRpZXJlbl9mZWxkZXJfd2FlaGxlbl9jb2xsYXBzZS5jb2xsYXBzZSgnaGlkZScpO1xuICAgIH1cbiAgICBpZiAoJGV4cG9ydGllcmVuX29iamVrdGVfd2FlaGxlbl9kc19jb2xsYXBzZS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAkZXhwb3J0aWVyZW5fb2JqZWt0ZV93YWVobGVuX2RzX2NvbGxhcHNlLmNvbGxhcHNlKCdoaWRlJyk7XG4gICAgfVxuXG5cdC8vIEJlc2Now6RmdGlndW5nIG1lbGRlblxuXHQkZXhwb3J0aWVyZW5fb2JqZWt0ZV93YWVobGVuX2dydXBwZW5faGlud2Vpc190ZXh0XG4gICAgICAgIC5hbGVydCgpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtZGFuZ2VyXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LWluZm9cIilcbiAgICAgICAgLnNob3coKVxuXHQgICAgLmh0bWwoXCJFaWdlbnNjaGFmdGVuIHdlcmRlbiBlcm1pdHRlbHQuLi5cIik7XG5cdC8vIHNjcm9sbGVuLCBkYW1pdCBIaW53ZWlzIHNpY2hlciBnYW56IHNpY2h0YmFyIGlzdFxuXHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0c2Nyb2xsVG9wOiAkZXhwb3J0aWVyZW5fb2JqZWt0ZV93YWVobGVuX2dydXBwZW5faGlud2Vpc190ZXh0Lm9mZnNldCgpLnRvcFxuXHR9LCAyMDAwKTtcblx0Ly8gZ2V3w6RobHRlIEdydXBwZW4gZXJtaXR0ZWxuXG5cdC8vIGdsb2JhbGUgVmFyaWFibGUgZW50aMOkbHQgZGllIEdydXBwZW4uIERhbWl0IG5hY2ggQUpBWC1BYmZyYWdlbiBiZXN0aW1tdCB3ZXJkZW4ga2Fubiwgb2IgYWxsZSBEYXRlbiB2b3JsaWVnZW5cblx0Ly8gZ2xvYmFsZSBWYXJpYWJsZSBzYW1tZWx0IGFycmF5cyBtaXQgZGVuIExpc3RlbiBkZXIgRmVsZGVyIHBybyBHcnVwcGVcblx0dmFyIGV4cG9ydF9mZWxkZXJfYXJyYXlzID0gW107XG5cdHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcblx0JChcIi5leHBvcnRpZXJlbl9kc19vYmpla3RlX3dhZWhsZW5fZ3J1cHBlXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG5cdFx0XHRleHBvcnRfZ3J1cHBlbi5wdXNoKCQodGhpcykudmFsKCkpO1xuXHRcdH1cblx0fSk7XG4gICAgLyppZiAoZXhwb3J0X2dydXBwZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyB3ZW5uIG1laHJlcmUgR3J1cHBlbiBnZXfDpGhsdCB3ZXJkZW5cbiAgICAgICAgLy8gT3B0aW9uIGV4cG9ydGllcmVuX251cl9vYmpla3RlX21pdF9laWdlbnNjaGFmdGVuIGF1c2JsZW5kZW5cbiAgICAgICAgLy8gdW5kIGZhbHNlIHNldHplblxuICAgICAgICAvLyBzb25zdCBrb21tZW4gbnVyIGRpZSBEUyBlaW5lciBHcnVwcGVcbiAgICAgICAgJGV4cG9ydGllcmVuX251cl9vYmpla3RlX21pdF9laWdlbnNjaGFmdGVuX2NoZWNrYm94LmFkZENsYXNzKFwiYWRiLWhpZGRlblwiKTtcbiAgICAgICAgJGV4cG9ydGllcmVuX251cl9vYmpla3RlX21pdF9laWdlbnNjaGFmdGVuLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCRleHBvcnRpZXJlbl9udXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbl9jaGVja2JveC5oYXNDbGFzcyhcImFkYi1oaWRkZW5cIikpIHtcbiAgICAgICAgICAgICRleHBvcnRpZXJlbl9udXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbl9jaGVja2JveC5yZW1vdmVDbGFzcyhcImFkYi1oaWRkZW5cIilcbiAgICAgICAgICAgICRleHBvcnRpZXJlbl9udXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbi5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9Ki9cblx0aWYgKGV4cG9ydF9ncnVwcGVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gZ3J1cHBlbiBlaW56ZWxuIGFiZnJhZ2VuXG4gICAgICAgIGdydXBwZW4gPSBleHBvcnRfZ3J1cHBlbjtcbiAgICAgICAgXy5lYWNoKGdydXBwZW4sIGZ1bmN0aW9uKGdydXBwZSkge1xuICAgICAgICAgICAgLy8gRmVsZGVyIGFiZnJhZ2VuXG4gICAgICAgICAgICAkZGIudmlldygnYXJ0ZW5kYi9mZWxkZXI/Z3JvdXBfbGV2ZWw9NSZzdGFydGtleT1bXCInK2dydXBwZSsnXCJdJmVuZGtleT1bXCInK2dydXBwZSsnXCIse30se30se30se31dJywge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0X2ZlbGRlcl9hcnJheXMgPSBfLnVuaW9uKGV4cG9ydF9mZWxkZXJfYXJyYXlzLCBkYXRhLnJvd3MpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGllIEdydXBwZSBcIiArIGdydXBwZSArIFwiIGhhdCBzb3ZpZWxlIEZlbGRlciA9IFwiICsgZGF0YS5yb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVpbmUgR3J1cHBlIGF1cyBleHBvcnRfZ3J1cHBlbiBlbnRmZXJuZW5cbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0X2dydXBwZW4uc3BsaWNlKDAsMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBvcnRfZ3J1cHBlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbGUgR3J1cHBlbiBzaW5kIHZlcmFyYmVpdGV0XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRiLmVyc3RlbGxlTGlzdGVGw7xyRmVsZHdhaGxfMihleHBvcnRfZmVsZGVyX2FycmF5cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gbGV0enRlIFLDvGNrbWVsZHVuZyBhbnBhc3NlblxuXHRcdCRleHBvcnRpZXJlbl9vYmpla3RlX3dhZWhsZW5fZ3J1cHBlbl9oaW53ZWlzX3RleHQuaHRtbChcImJpdHRlIGVpbmUgR3J1cHBlIHfDpGhsZW5cIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LWluZm9cIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFsZXJ0LXN1Y2Nlc3NcIilcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcImFsZXJ0LWRhbmdlclwiKTtcblx0XHQvLyBGZWxkZXIgZW50ZmVybmVuXG5cdFx0JChcIiNleHBvcnRpZXJlbl9mZWxkZXJfd2FlaGxlbl9mZWxkZXJsaXN0ZVwiKS5odG1sKFwiXCIpO1xuXHRcdCQoXCIjZXhwb3J0aWVyZW5fb2JqZWt0ZV93YWVobGVuX2RzX2ZlbGRlcmxpc3RlXCIpLmh0bWwoXCJcIik7XG5cdH1cbiAgICAvLyBUYWJlbGxlIGF1c2JsZW5kZW4sIGZhbGxzIHNpZSBlaW5nZWJsZW5kZXQgd2FyXG4gICAgJChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl90YWJlbGxlXCIpLmhpZGUoKTtcbn07XG5cbndpbmRvdy5hZGIuZXJzdGVsbGVMaXN0ZUbDvHJGZWxkd2FobF8yID0gZnVuY3Rpb24oZXhwb3J0X2ZlbGRlcl9hcnJheXMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgZmVsZGVyX29iamVrdCA9IHt9LFxuXHRcdGhpbndlaXNfdGF4b25vbWllbixcbiAgICAgICAgdGF4b25vbWllbixcbiAgICAgICAgZGF0ZW5zYW1tbHVuZ2VuLFxuICAgICAgICBiZXppZWh1bmdzc2FtbWx1bmdlbjtcblxuXHQvLyBpbiBleHBvcnRfZmVsZGVyX2FycmF5cyBpc3QgZWluZSBMaXN0ZSBkZXIgRmVsZGVyLCBkaWUgaW4gZGllc2VyIEdydXBwZSBlbnRoYWx0ZW4gc2luZFxuXHQvLyBzaWUga2FubiBhYmVyIE1laHJmYWNoZWludHLDpGdlIGVudGhhbHRlbiwgZGllIHNpY2ggaW4gZGVyIEdydXBwZSB1bnRlcnNjaGVpZGVuXG5cdC8vIE11c3RlcjogR3J1cHBlLCBUeXAgZGVyIERhdGVuc2FtbWx1bmcsIE5hbWUgZGVyIERhdGVuc2FtbWx1bmcsIE5hbWUgZGVzIEZlbGRzXG5cdC8vIE1laHJmYWNoZWludHLDpGdlIHNvbGxlbiBlbnRmZXJudCB3ZXJkZW5cblxuXHQvLyBkYXp1IG11c3MgenVlcnN0IGRpZSBHcnVwcGUgZW50ZmVybnQgd2VyZGVuXG4gICAgXy5lYWNoKGV4cG9ydF9mZWxkZXJfYXJyYXlzLCBmdW5jdGlvbihleHBvcnRfZmVsZGVyKSB7XG4gICAgICAgIGV4cG9ydF9mZWxkZXIua2V5LnNwbGljZSgwLDEpO1xuICAgIH0pO1xuXG5cdC8vIGpldHp0IG51ciBub2NoIGVpbmVpbmRldXRpZ2UgQXJyYXktT2JqZWt0ZSAoPUVpZ2Vuc2NoYWZ0ZW5zYW1tbHVuZ2VuKSBiZWxhc3NlblxuXHRleHBvcnRfZmVsZGVyX2FycmF5cyA9IF8udW5pb24oZXhwb3J0X2ZlbGRlcl9hcnJheXMpO1xuXHQvLyBqZXR6dCBkZW4gQXJyYXkgdm9uIE9iamVrdGVuIG5hY2gga2V5IHNvcnRpZXJlblxuXHRleHBvcnRfZmVsZGVyX2FycmF5cyA9IF8uc29ydEJ5KGV4cG9ydF9mZWxkZXJfYXJyYXlzLCBmdW5jdGlvbihvYmplY3QpIHtcblx0XHRyZXR1cm4gb2JqZWN0LmtleTtcblx0fSk7XG5cblx0Ly8gSW0gT2JqZWt0IFwiRmVsZGVyT2JqZWt0XCIgd2VyZGVuIGRpZSBGZWxkZXIgYWxsZXIgZ2V3w6RobHRlbiBHcnVwcGVuIGdlc2FtbWVsdFxuXHRmZWxkZXJfb2JqZWt0ID0gd2luZG93LmFkYi5lcmfDpG56ZUZlbGRlck9iamVrdChmZWxkZXJfb2JqZWt0LCBleHBvcnRfZmVsZGVyX2FycmF5cyk7XG5cblx0Ly8gYmVpIGFsbGbDpGxsaWdlbiBcIlRheG9ub21pZShuKVwiIEZlbGRuYW1lbiBzb3J0aWVyZW5cblx0aWYgKGZlbGRlcl9vYmpla3RbXCJUYXhvbm9taWUobilcIl0gJiYgZmVsZGVyX29iamVrdFtcIlRheG9ub21pZShuKVwiXS5FaWdlbnNjaGFmdGVuKSB7XG5cdFx0ZmVsZGVyX29iamVrdFtcIlRheG9ub21pZShuKVwiXS5FaWdlbnNjaGFmdGVuID0gd2luZG93LmFkYi5zb3J0S2V5c09mT2JqZWN0KGZlbGRlcl9vYmpla3RbXCJUYXhvbm9taWUobilcIl0uRWlnZW5zY2hhZnRlbik7XG5cdH1cblxuXHQvLyBUYXhvbm9taWVuIHVuZCBEYXRlbnNhbW1sdW5nZW4gYXVzIGRlbSBGZWxkZXJPYmpla3QgZXh0cmFoaWVyZW5cblx0dGF4b25vbWllbiA9IFtdO1xuXHRkYXRlbnNhbW1sdW5nZW4gPSBbXTtcblx0YmV6aWVodW5nc3NhbW1sdW5nZW4gPSBbXTtcblxuICAgIF8uZWFjaChmZWxkZXJfb2JqZWt0LCBmdW5jdGlvbihkcykge1xuICAgICAgICBpZiAodHlwZW9mIGRzID09PSBcIm9iamVjdFwiICYmIGRzLlR5cCkge1xuICAgICAgICAgICAgLy8gZGFzIGlzdCBEYXRlbnNhbW1sdW5nIG9kZXIgVGF4b25vbWllXG4gICAgICAgICAgICBpZiAoZHMuVHlwID09PSBcIkRhdGVuc2FtbWx1bmdcIikge1xuICAgICAgICAgICAgICAgIGRhdGVuc2FtbWx1bmdlbi5wdXNoKGRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZHMuVHlwID09PSBcIlRheG9ub21pZVwiKSB7XG4gICAgICAgICAgICAgICAgdGF4b25vbWllbi5wdXNoKGRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZHMuVHlwID09PSBcIkJlemllaHVuZ1wiKSB7XG4gICAgICAgICAgICAgICAgYmV6aWVodW5nc3NhbW1sdW5nZW4ucHVzaChkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQud2hlbih3aW5kb3cuYWRiLmhvbGVEYXRlbnNhbW1sdW5nZW5Gw7xyRXhwb3J0ZmVsZGVyKCkpLmRvbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5hZGIuZXJzdGVsbGVFeHBvcnRmZWxkZXIodGF4b25vbWllbiwgZGF0ZW5zYW1tbHVuZ2VuLCBiZXppZWh1bmdzc2FtbWx1bmdlbik7XG4gICAgfSk7XG5cblx0Ly8ga29udHJvbGxpZXJlbiwgb2IgVGF4b25vbWllbiB6dXNhbW1lbmdlZmFzc3Qgd2VyZGVuXG5cdGlmICgkKFwiI2V4cG9ydGllcmVuX29iamVrdGVfVGF4b25vbWllbl96dXNhbW1lbmZhc3NlblwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuXHRcdGhpbndlaXNfdGF4b25vbWllbiA9IFwiRGllIEVpZ2Vuc2NoYWZ0ZW4gd3VyZGVuIGF1ZmdlYmF1dDxicj5BbGxlIFRheG9ub21pZW4gc2luZCB6dXNhbW1lbmdlZmFzc3RcIjtcblx0fSBlbHNlIHtcblx0XHRoaW53ZWlzX3RheG9ub21pZW4gPSBcIkRpZSBFaWdlbnNjaGFmdGVuIHd1cmRlbiBhdWZnZWJhdXQ8YnI+QWxsZSBUYXhvbm9taWVuIHdlcmRlbiBlaW56ZWxuIGRhcmdlc3RlbGx0XCI7XG5cdH1cblx0Ly8gRXJnZWJuaXMgcsO8Y2ttZWxkZW5cblx0JChcIiNleHBvcnRpZXJlbl9vYmpla3RlX3dhZWhsZW5fZ3J1cHBlbl9oaW53ZWlzX3RleHRcIilcbiAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWxlcnQtaW5mb1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJhbGVydC1kYW5nZXJcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYWxlcnQtc3VjY2Vzc1wiKVxuICAgICAgICAuc2hvdygpXG4gICAgICAgIC5odG1sKGhpbndlaXNfdGF4b25vbWllbik7XG59O1xuXG4vLyBob2x0IGVpbmUgTGlzdGUgYWxsZXIgRGF0ZW5zYW1tbHVuZ2VuLCB3ZW5uIG7DtnRpZ1xuLy8gc3BlaWNoZXJ0IHNpZSBpbiBlaW5lciBnbG9iYWxlbiBWYXJpYWJsZSwgZGFtaXQgc2llIHdpZWRlcnZlcndlbmRldCB3ZXJkZW4ga2Fublxud2luZG93LmFkYi5ob2xlRGF0ZW5zYW1tbHVuZ2VuRsO8ckV4cG9ydGZlbGRlciA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG4gICAgdmFyIGV4ZmVfZ2Vob2x0ID0gJC5EZWZlcnJlZCgpO1xuICAgIGlmICh3aW5kb3cuYWRiLmRzX2JzX3Zvbl9vYmpla3Rlbikge1xuICAgICAgICBleGZlX2dlaG9sdC5yZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuICAgICAgICAkZGIudmlldygnYXJ0ZW5kYi9kc192b25fb2JqZWt0ZW4/Z3JvdXBfbGV2ZWw9NScsIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBEYXRlbiBpbiBPYmpla3R2YXJpYWJsZSBzcGVpY2hlcm4gPiBXZW5uIERzIGF1c2dld8OkaGx0LCBBbmdhYmVuIGluIGRpZSBGZWxkZXIga29waWVyZW5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRiLmRzX2JzX3Zvbl9vYmpla3RlbiA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZXhmZV9nZWhvbHQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4ZmVfZ2Vob2x0LnByb21pc2UoKTtcbn07XG5cbi8vIE5pbW10IGVpbiBGZWxkZXJPYmpla3QgZW50Z2VnZW4uIERhcyBpc3QgZW50d2VkZXIgbGVlciAoZXJzdGUgR3J1cHBlKSBvZGVyIGVudGjDpGx0IHNjaG9uIEZlbGRlciAoYWIgZGVyIHp3ZWl0ZW4gR3J1cHBlKVxuLy8gTmltbXQgZWluIEFycmF5IG1pdCBGZWxkZXJuIGVudGdlZ2VuXG4vLyBtaXQgZGVyIFN0cnVrdHVyOiB7XCJrZXlcIjpbXCJGbG9yYVwiLFwiRGF0ZW5zYW1tbHVuZ1wiLFwiQmxhdWUgTGlzdGUgKDE5OTgpXCIsXCJBbndlbmR1bmdzaMOkdWZpZ2tlaXQgenVyIEVyaGFsdHVuZ1wiXSxcInZhbHVlXCI6bnVsbH1cbi8vIGVyZ8Okbnp0IGRhcyBGZWxkZXJPYmpla3QgdW0gZGllc2UgRmVsZGVyXG4vLyByZXRvdXJuaWVydCBkYXMgZXJnw6RuenRlIEZlbGRlck9iamVrdFxuLy8gZGFzIEZlbGRlck9iamVrdCBlbnRow6RsdCBhbGxlIGdld8O8bnNjaHRlbiBGZWxkZXIuIERhcmluIHNpbmQgbnVsbHdlcnRlXG53aW5kb3cuYWRiLmVyZ8OkbnplRmVsZGVyT2JqZWt0ID0gZnVuY3Rpb24oZmVsZGVyX29iamVrdCwgZmVsZGVyX2FycmF5KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGRzX3R5cCxcblx0XHRkc19uYW1lLFxuXHRcdGZlbGRuYW1lLFxuICAgICAgICBmZWxkdHlwO1xuICAgIF8uZWFjaChmZWxkZXJfYXJyYXksIGZ1bmN0aW9uKGZlbGRfb2JqZWt0KSB7XG4gICAgICAgIGlmIChmZWxkX29iamVrdC5rZXkpIHtcbiAgICAgICAgICAgIC8vIEdydXBwZSB3dXJkZSBlbnRmZXJudCwgc28gc2luZCBhbGxlIGtleXMgdW0gMSBrbGVpbmVyIGFscyB1cnNwcsO8bmdsaWNoXG4gICAgICAgICAgICBkc190eXAgPSBmZWxkX29iamVrdC5rZXlbMF07XG4gICAgICAgICAgICBkc19uYW1lID0gZmVsZF9vYmpla3Qua2V5WzFdO1xuICAgICAgICAgICAgZmVsZG5hbWUgPSBmZWxkX29iamVrdC5rZXlbMl07XG4gICAgICAgICAgICBmZWxkdHlwID0gZmVsZF9vYmpla3Qua2V5WzNdO1xuICAgICAgICAgICAgaWYgKGRzX3R5cCA9PT0gXCJPYmpla3RcIikge1xuICAgICAgICAgICAgICAgIC8vIGRhcyBpc3QgZWluZSBFaWdlbnNjaGFmdCBkZXMgT2JqZWt0c1xuICAgICAgICAgICAgICAgIC8vRmVsZGVyT2JqZWt0W0ZlbGROYW1lXSA9IG51bGw7XHQvLyBOSUNIVCBISU5aVUbDnEdFTiwgRElFU0UgRkVMREVSIFNJTkQgU0NIT04gSU0gRk9STVVMQVIgRklYIERSSU5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmFkYi5mYXNzZVRheG9ub21pZW5adXNhbW1lbiAmJiBkc190eXAgPT09IFwiVGF4b25vbWllXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBEYXRlbnNhbW1sdW5nZW4gd2VyZGVuIHp1c2FtbWVuZ2VmYXNzdC4gRHNUeXAgbXVzcyBcIlRheG9ub21pZShuKVwiIGhlaXNzZW4gdW5kIGRpZSBGZWxkZXIgYWxsZXIgVGF4b25vbWllbiBzYW1tZWxuXG4gICAgICAgICAgICAgICAgLy8gV2VubiBEYXRlbnNhbW1sdW5nIG5vY2ggbmljaHQgZXhpc3RpZXJ0LCBncsO8bmRlblxuICAgICAgICAgICAgICAgIGlmICghZmVsZGVyX29iamVrdFtcIlRheG9ub21pZShuKVwiXSkge1xuICAgICAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W1wiVGF4b25vbWllKG4pXCJdID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZlbGRlcl9vYmpla3RbXCJUYXhvbm9taWUobilcIl0uVHlwID0gZHNfdHlwO1xuICAgICAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W1wiVGF4b25vbWllKG4pXCJdLk5hbWUgPSBcIlRheG9ub21pZShuKVwiO1xuICAgICAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W1wiVGF4b25vbWllKG4pXCJdLkVpZ2Vuc2NoYWZ0ZW4gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRmVsZCBlcmfDpG56ZW5cbiAgICAgICAgICAgICAgICAvLyBhbHMgRmVsZHdlcnQgZGVuIEZlbGR0eXAgw7xiZXJnZWJlblxuICAgICAgICAgICAgICAgIGZlbGRlcl9vYmpla3RbXCJUYXhvbm9taWUobilcIl0uRWlnZW5zY2hhZnRlbltmZWxkbmFtZV0gPSBmZWxkdHlwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkc190eXAgPT09IFwiRGF0ZW5zYW1tbHVuZ1wiIHx8IGRzX3R5cCA9PT0gXCJUYXhvbm9taWVcIikge1xuICAgICAgICAgICAgICAgIC8vIFdlbm4gRGF0ZW5zYW1tbHVuZyBvZGVyIFRheG9ub21pZSBub2NoIG5pY2h0IGV4aXN0aWVydCwgZ3LDvG5kZW5cbiAgICAgICAgICAgICAgICBpZiAoIWZlbGRlcl9vYmpla3RbZHNfbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmVsZGVyX29iamVrdFtkc19uYW1lXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W2RzX25hbWVdLlR5cCA9IGRzX3R5cDtcbiAgICAgICAgICAgICAgICAgICAgZmVsZGVyX29iamVrdFtkc19uYW1lXS5OYW1lID0gZHNfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZmVsZGVyX29iamVrdFtkc19uYW1lXS5FaWdlbnNjaGFmdGVuID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEZlbGQgZXJnw6RuemVuXG4gICAgICAgICAgICAgICAgLy8gYWxzIEZlbGR3ZXJ0IGRlbiBGZWxkdHlwIMO8YmVyZ2ViZW5cbiAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W2RzX25hbWVdLkVpZ2Vuc2NoYWZ0ZW5bZmVsZG5hbWVdID0gZmVsZHR5cDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZHNfdHlwID09PSBcIkJlemllaHVuZ1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2VubiBCZXppZWh1bmdzdHlwIG5vY2ggbmljaHQgZXhpc3RpZXJ0LCBncsO8bmRlblxuICAgICAgICAgICAgICAgIGlmICghZmVsZGVyX29iamVrdFtkc19uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W2RzX25hbWVdID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZlbGRlcl9vYmpla3RbZHNfbmFtZV0uVHlwID0gZHNfdHlwO1xuICAgICAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W2RzX25hbWVdLk5hbWUgPSBkc19uYW1lO1xuICAgICAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W2RzX25hbWVdLkJlemllaHVuZ2VuID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEZlbGQgZXJnw6RuemVuXG4gICAgICAgICAgICAgICAgLy8gYWxzIEZlbGR3ZXJ0IGRlbiBGZWxkdHlwIMO8YmVyZ2ViZW5cbiAgICAgICAgICAgICAgICBmZWxkZXJfb2JqZWt0W2RzX25hbWVdLkJlemllaHVuZ2VuW2ZlbGRuYW1lXSA9IGZlbGR0eXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblx0cmV0dXJuIGZlbGRlcl9vYmpla3Q7XG59O1xuXG4vLyB3aXJkIGF1ZmdlcnVmZW4gZHVyY2ggZWluZSBkZXIgendlaSBTY2hhbHRmbMOkY2hlbjogXCJWb3JzY2hhdSBhbnplaWdlblwiLCBcImRpcmVrdCBleHBvcnRpZXJlblwiXG4vLyBkaXJla3Q6IGxpc3QtZnVua3Rpb24gYXVmcnVmZW4sIHdlbGNoZSBkaWUgRGF0ZW4gZGlyZWt0IGhlcnVudGVybMOkZHRcbndpbmRvdy5hZGIuZmlsdGVyZUbDvHJFeHBvcnQgPSBmdW5jdGlvbihkaXJla3QpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBBcnJheSB2b24gRmlsdGVyb2JqZWt0ZW4gYmlsZGVuXG5cdHZhciBmaWx0ZXJrcml0ZXJpZW4gPSBbXSxcblx0XHQvLyBPYmpla3QgYmlsZGVuLCBpbiBkYXMgZGllIEZpbHRlcmtyaXRlcmllbiBpbnRlZ3JpZXJ0IHdlcmRlbiwgZGEgZWluIGFycmF5IHNjaGxlY2h0IMO8YmVyIGRpZSB1cmwgZ2VsaWVmZXJ0IHdpcmRcblx0XHRmaWx0ZXJrcml0ZXJpZW5fb2JqZWt0ID0ge30sXG5cdFx0ZmlsdGVyX29iamVrdCxcblx0XHRncnVwcGVuX2FycmF5ID0gW10sXG5cdFx0Z3J1cHBlbiA9IFwiXCIsXG5cdFx0Z2V3w6RobHRlX2ZlbGRlciA9IFtdLFxuICAgICAgICBhbnpfZ2V3w6RobHRlX2ZlbGRlcl9hdXNfZHNicyA9IDAsXG5cdFx0Z2V3w6RobHRlX2ZlbGRlcl9vYmpla3QgPSB7fSxcblx0XHRhbnpfZHNfZ2V3w6RobHQgPSAwLFxuICAgICAgICAkZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5faGlud2Vpc190ZXh0ID0gJChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9oaW53ZWlzX3RleHRcIiksXG4gICAgICAgIGh0bWxfZmlsdGVya3JpdGVyaWVuO1xuXG5cdC8vIGtvbnRyb2xsaWVyZW4sIG9iIGVpbmUgR3J1cHBlIGdld8OkaGx0IHd1cmRlXG5cdGlmICh3aW5kb3cuYWRiLmbDvHJFeHBvcnRHZXfDpGhsdGVHcnVwcGVuKCkubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQmVzY2jDpGZ0aWd1bmcgbWVsZGVuXG5cdGlmICghZGlyZWt0KSB7XG5cdFx0JGV4cG9ydGllcmVuX2V4cG9ydGllcmVuX2hpbndlaXNfdGV4dFxuICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgIC5odG1sKFwiRGllIERhdGVuIHdlcmRlbiB2b3JiZXJlaXRldC4uLlwiKTtcblx0fVxuXG5cdC8vIHp1bSBIaW53ZWlzdGV4dCBzY3JvbGxlblxuXHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0c2Nyb2xsVG9wOiAkZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5faGlud2Vpc190ZXh0Lm9mZnNldCgpLnRvcFxuXHR9LCAyMDAwKTtcblx0Ly8gZ2V3w6RobHRlIEdydXBwZW4gZXJtaXR0ZWxuXG4gICAgJChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9leHBvcnRpZXJlbl9mdWVyX2FsdFwiKS5hZGRDbGFzcyhcImFkYi1oaWRkZW4tc3RyaWN0bHlcIik7XG5cdCQoXCIuZXhwb3J0aWVyZW5fZHNfb2JqZWt0ZV93YWVobGVuX2dydXBwZVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuXHRcdFx0Z3J1cHBlbl9hcnJheS5wdXNoKCQodGhpcykuYXR0cigndmlldycpKTtcblx0XHRcdGlmIChncnVwcGVuKSB7XG5cdFx0XHRcdGdydXBwZW4gKz0gXCIsXCI7XG5cdFx0XHR9XG5cdFx0XHRncnVwcGVuICs9ICQodGhpcykudmFsKCk7XG5cdFx0fVxuXHR9KTtcbiAgICB2YXIgZ3J1cHBlbmxpc3RlID0gZ3J1cHBlbi5zcGxpdChcIixcIik7XG4gICAgaWYgKGdydXBwZW5saXN0ZS5pbmRleE9mKFwiRmxvcmFcIikgPj0gMCAmJiBncnVwcGVubGlzdGUuaW5kZXhPZihcIkZhdW5hXCIpID49IDApIHtcbiAgICAgICAgLy8gV2VubiBGbG9yYSB1bmQgRmF1bmEgZ2V3w6RobHQ6IFNjaGFsdGZsw6RjaGUgZsO8ciBkZW4gRXhwb3J0IGbDvHIgZGFzIEFMVCBhbnplaWdlblxuICAgICAgICAkKFwiI2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX2Z1ZXJfYWx0XCIpLnJlbW92ZUNsYXNzKFwiYWRiLWhpZGRlbi1zdHJpY3RseVwiKTtcbiAgICB9XG5cdC8vIGR1cmNoIGFsbGUgRmlsdGVyZmVsZGVyIGxvb3BlblxuXHQvLyB3ZW5uIGVpbiBGZWxkIGVpbmVuIFdlcnQgZW50aMOkbHQsIGRhbmFjaCBmaWx0ZXJuXG5cdCQoXCIjZXhwb3J0aWVyZW5fb2JqZWt0ZV93YWVobGVuX2RzX2NvbGxhcHNlXCIpLmZpbmQoXCIuZXhwb3J0X2ZlbGRfZmlsdGVyblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIGlmICh0aGF0LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgICAgaWYgKCEkdGhpcy5wcm9wKCdyZWFkb25seScpKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyX29iamVrdCA9IHt9O1xuICAgICAgICAgICAgICAgIGZpbHRlcl9vYmpla3QuRHNUeXAgPSAkdGhpcy5hdHRyKCdkc3R5cCcpO1xuICAgICAgICAgICAgICAgIGZpbHRlcl9vYmpla3QuRHNOYW1lID0gJHRoaXMuYXR0cignZWlnZW5zY2hhZnQnKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJfb2JqZWt0LkZlbGRuYW1lID0gJHRoaXMuYXR0cignZmVsZCcpO1xuICAgICAgICAgICAgICAgIGZpbHRlcl9vYmpla3QuRmlsdGVyd2VydCA9ICR0aGlzLnByb3AoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgICAgIGZpbHRlcl9vYmpla3QuVmVyZ2xlaWNoc29wZXJhdG9yID0gXCI9XCI7XG4gICAgICAgICAgICAgICAgZmlsdGVya3JpdGVyaWVuLnB1c2goZmlsdGVyX29iamVrdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIMO8YnJpZ2UgY2hlY2tib3hlbiBpZ25vcmllcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlID09PSAwKSB7XG5cdFx0XHQvLyBGaWx0ZXJvYmpla3QgenVyw7xja3NldHplblxuXHRcdFx0ZmlsdGVyX29iamVrdCA9IHt9O1xuXHRcdFx0ZmlsdGVyX29iamVrdC5Ec1R5cCA9ICR0aGlzLmF0dHIoJ2RzdHlwJyk7XG5cdFx0XHRmaWx0ZXJfb2JqZWt0LkRzTmFtZSA9ICR0aGlzLmF0dHIoJ2VpZ2Vuc2NoYWZ0Jyk7XG5cdFx0XHRmaWx0ZXJfb2JqZWt0LkZlbGRuYW1lID0gJHRoaXMuYXR0cignZmVsZCcpO1xuXHRcdFx0Ly8gRmlsdGVyd2VydCBpbiBLbGVpbnNjaHJpZnQgdmVyd2FuZGVsbiwgZGFtaXQgR3Jvc3MtL0tsZWluc2NocmlmdCBuaWNodCB3ZXNlbnRsaWNoIGlzdCAoVmVyZ2xlaWNoc3dlcnRlIHdlcmRlbiB2b24gZmlsdGVyZUbDvHJFeHBvcnQgc3DDpHRlciBhdWNoIGluIEtsZWluc2NocmlmdCB2ZXJ3YW5kZWx0KVxuXHRcdFx0ZmlsdGVyX29iamVrdC5GaWx0ZXJ3ZXJ0ID0gd2luZG93LmFkYi5lcm1pdHRsZVZlcmdsZWljaHNvcGVyYXRvcih0aGlzLnZhbHVlKVsxXTtcblx0XHRcdGZpbHRlcl9vYmpla3QuVmVyZ2xlaWNoc29wZXJhdG9yID0gd2luZG93LmFkYi5lcm1pdHRsZVZlcmdsZWljaHNvcGVyYXRvcih0aGlzLnZhbHVlKVswXTtcblx0XHRcdGZpbHRlcmtyaXRlcmllbi5wdXNoKGZpbHRlcl9vYmpla3QpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gZGVuIGFycmF5IGRlbSBvYmpla3QgenV3ZWlzZW5cblx0ZmlsdGVya3JpdGVyaWVuX29iamVrdC5maWx0ZXJrcml0ZXJpZW4gPSBmaWx0ZXJrcml0ZXJpZW47XG5cdC8vIGdld8OkaGx0ZSBGZWxkZXIgZXJtaXR0ZWxuXG5cdCQoXCIuZXhwb3J0aWVyZW5fZmVsZGVyX3dhZWhsZW5fb2JqZWt0X2ZlbGQuZmVsZF93YWVobGVuXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG5cdFx0XHQvLyBmZWxkT2JqZWt0IGVyc3RlbGxlblxuXHRcdFx0dmFyIGZlbGRPYmpla3QgPSB7fTtcblx0XHRcdGZlbGRPYmpla3QuRHNOYW1lID0gXCJPYmpla3RcIjtcblx0XHRcdGZlbGRPYmpla3QuRmVsZG5hbWUgPSAkKHRoaXMpLmF0dHIoJ2ZlbGRuYW1lJyk7XG5cdFx0XHRnZXfDpGhsdGVfZmVsZGVyLnB1c2goZmVsZE9iamVrdCk7XG5cdFx0fVxuXHR9KTtcblx0JChcIiNleHBvcnRpZXJlbl9mZWxkZXJfd2FlaGxlbl9mZWxkZXJsaXN0ZVwiKS5maW5kKFwiLmZlbGRfd2FlaGxlblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuXHRcdFx0Ly8gZmVsZE9iamVrdCBlcnN0ZWxsZW5cblx0XHRcdHZhciBmZWxkT2JqZWt0ID0ge307XG5cdFx0XHRmZWxkT2JqZWt0LkRzVHlwID0gJCh0aGlzKS5hdHRyKCdkc3R5cCcpO1xuXHRcdFx0aWYgKGZlbGRPYmpla3QuRHNUeXAgIT09IFwiVGF4b25vbWllXCIpIHtcblx0XHRcdFx0YW56X2RzX2dld8OkaGx0Kys7XG5cdFx0XHR9XG5cdFx0XHRmZWxkT2JqZWt0LkRzTmFtZSA9ICQodGhpcykuYXR0cignZGF0ZW5zYW1tbHVuZycpO1xuXHRcdFx0ZmVsZE9iamVrdC5GZWxkbmFtZSA9ICQodGhpcykuYXR0cignZmVsZCcpO1xuXHRcdFx0Z2V3w6RobHRlX2ZlbGRlci5wdXNoKGZlbGRPYmpla3QpO1xuICAgICAgICAgICAgYW56X2dld8OkaGx0ZV9mZWxkZXJfYXVzX2RzYnMrKztcblx0XHR9XG5cdH0pO1xuXHQvLyBkZW4gYXJyYXkgZGVtIG9iamVrdCB6dXdlaXNlblxuXHRnZXfDpGhsdGVfZmVsZGVyX29iamVrdC5mZWxkZXIgPSBnZXfDpGhsdGVfZmVsZGVyO1xuXG5cdC8vIFdlbm4ga2VpbmUgRmVsZGVyIGdld8OkaGx0IHNpbmQ6IE1lbGRlbiB1bmQgYXVmaMO2cmVuXG5cdGlmIChnZXfDpGhsdGVfZmVsZGVyX29iamVrdC5mZWxkZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0Ly8gQmVzY2jDpGZ0aWd1bmdzbWVsZHVuZyB2ZXJzdGVja2VuXG5cdFx0JGV4cG9ydGllcmVuX2V4cG9ydGllcmVuX2hpbndlaXNfdGV4dFxuICAgICAgICAgICAgLmFsZXJ0KClcbiAgICAgICAgICAgIC5oaWRlKCk7XG4gICAgICAgICQoXCIjZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fZXJyb3JfdGV4dF90ZXh0XCIpXG4gICAgICAgICAgICAuaHRtbChcIktlaW5lIEVpZ2Vuc2NoYWZ0ZW4gZ2V3w6RobHQ8YnI+Qml0dGUgd8OkaGxlbiBTaWUgRWlnZW5zY2hhZnRlbiwgZGllIGV4cG9ydGllcnQgd2VyZGVuIHNvbGxlblwiKTtcblx0XHQkKFwiI2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX2Vycm9yX3RleHRcIilcbiAgICAgICAgICAgIC5hbGVydCgpXG4gICAgICAgICAgICAuc2hvdygpO1xuXHRcdHJldHVybjtcblx0fVxuXG4gICAgLy8gaHRtbCBmw7xyIGZpbHRlcmtyaXRlcmllbiBhdWZiYXVlblxuICAgIGh0bWxfZmlsdGVya3JpdGVyaWVuID0gXCJHZXfDpGhsdGUgRmlsdGVya3JpdGVyaWVuOjx1bD5cIjtcbiAgICBpZiAoJChcIiNleHBvcnRpZXJlbl9zeW5vbnltX2luZm9zXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICBodG1sX2ZpbHRlcmtyaXRlcmllbiArPSBcIjxsaT5pbmtsdXNpdmUgSW5mb3JtYXRpb25lbiB2b24gU3lub255bWVuPC9saT5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBodG1sX2ZpbHRlcmtyaXRlcmllbiArPSBcIjxsaT5JbmZvcm1hdGlvbmVuIHZvbiBTeW5vbnltZW4gaWdub3JpZXJlbjwvbGk+XCI7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJrcml0ZXJpZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBfLmVhY2goZmlsdGVya3JpdGVyaWVuLCBmdW5jdGlvbihmaWx0ZXJrcml0ZXJpdW0pIHtcbiAgICAgICAgICAgIGh0bWxfZmlsdGVya3JpdGVyaWVuICs9IFwiPGxpPlwiO1xuICAgICAgICAgICAgaHRtbF9maWx0ZXJrcml0ZXJpZW4gKz0gXCJGZWxkIFxcXCJcIiArIGZpbHRlcmtyaXRlcml1bS5GZWxkbmFtZSArIFwiXFxcIiBcIjtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJrcml0ZXJpdW0uVmVyZ2xlaWNoc29wZXJhdG9yICE9PSBcImtlaW5cIikge1xuICAgICAgICAgICAgICAgIGh0bWxfZmlsdGVya3JpdGVyaWVuICs9IGZpbHRlcmtyaXRlcml1bS5WZXJnbGVpY2hzb3BlcmF0b3IgKyBcIiBcXFwiXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGh0bWxfZmlsdGVya3JpdGVyaWVuICs9IFwiZW50aMOkbHQgXFxcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbF9maWx0ZXJrcml0ZXJpZW4gKz0gZmlsdGVya3JpdGVyaXVtLkZpbHRlcndlcnQ7XG4gICAgICAgICAgICBodG1sX2ZpbHRlcmtyaXRlcmllbiArPSBcIlxcXCI8L2xpPlwiO1xuICAgICAgICB9KTtcbiAgICAgICAgaHRtbF9maWx0ZXJrcml0ZXJpZW4gKz0gXCI8L3VsPlwiO1xuICAgIH0gZWxzZSBpZiAoYW56X2dld8OkaGx0ZV9mZWxkZXJfYXVzX2RzYnMgPiAwKSB7XG4gICAgICAgIC8vIHdlbm4gRmlsdGVya3JpdGVyaWVuIGVyZmFzc3Qgd3VyZGUsIHdlcmRlbiBzb3dpZXNvIG51ciBEYXRlbnPDpHR6ZSBhbmdlemVpZ3QsIGluIGRlbmVuIERhdGVuIHZvcmtvbW1lblxuICAgICAgICAvLyBkYWhlciBpc3QgZGllIGZvbGdlbmRlIEluZm8gbnVyIGludGVyZXNzc2FudCwgd2VubiBrZWluIEZpbHRlciBnZXNldHp0IHd1cmRlXG4gICAgICAgIC8vIHVuZCBuYXTDvHJsaWNoIGF1Y2ggbnVyLCB3ZW5uIEZlbGRlciBhdXMgRFMvQlMgZ2V3w6RobHQgd3VyZGVuXG4gICAgICAgIGlmICgkKFwiI2V4cG9ydGllcmVuX251cl9vYmpla3RlX21pdF9laWdlbnNjaGFmdGVuXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgaHRtbF9maWx0ZXJrcml0ZXJpZW4gKz0gXCI8bGk+TnVyIERhdGVuc8OkdHplIGV4cG9ydGllcmVuLCBkaWUgaW4gZGVuIGdld8OkaGx0ZW4gRWlnZW5zY2hhZnRlbi0gdW5kIEJlemllaHVuZ3NzYW1tbHVuZ2VuIEluZm9ybWF0aW9uZW4gZW50aGFsdGVuPC9saT5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWxfZmlsdGVya3JpdGVyaWVuICs9IFwiPGxpPkF1Y2ggRGF0ZW5zw6R0emUgZXhwb3J0aWVyZW4sIGRpZSBpbiBkZW4gZ2V3w6RobHRlbiBFaWdlbnNjaGFmdGVuLSB1bmQgQmV6aWVodW5nc3NhbW1sdW5nZW4ga2VpbmUgSW5mb3JtYXRpb25lbiBlbnRoYWx0ZW48L2xpPlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgICQoXCIjZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fZmlsdGVya3JpdGVyaWVuXCIpXG4gICAgICAgIC5odG1sKGh0bWxfZmlsdGVya3JpdGVyaWVuKVxuICAgICAgICAuc2hvdygpO1xuXG5cdC8vIGpldHp0IGRhcyBmaWx0ZXJPYmpla3Qgw7xiZXJnZWJlblxuXHRpZiAoZGlyZWt0ID09PSBcImRpcmVrdFwiKSB7XG5cdFx0d2luZG93LmFkYi7DvGJlcmdlYmVGaWx0ZXJGw7xyRGlyZWt0RXhwb3J0KGdydXBwZW4sIGdydXBwZW5fYXJyYXksIGFuel9kc19nZXfDpGhsdCwgZmlsdGVya3JpdGVyaWVuX29iamVrdCwgZ2V3w6RobHRlX2ZlbGRlcl9vYmpla3QpO1xuXHR9IGlmIChkaXJla3QgPT09IFwiZsO8cl9hbHRcIikge1xuICAgICAgICB3aW5kb3cuYWRiLsO8YmVyZ2ViZUZpbHRlckbDvHJFeHBvcnRGw7xyQWx0KGdydXBwZW4sIGdydXBwZW5fYXJyYXksIGFuel9kc19nZXfDpGhsdCwgZmlsdGVya3JpdGVyaWVuX29iamVrdCwgZ2V3w6RobHRlX2ZlbGRlcl9vYmpla3QpO1xuICAgIH1lbHNlIHtcblx0XHR3aW5kb3cuYWRiLsO8YmVyZ2ViZUZpbHRlckbDvHJFeHBvcnRNaXRWb3JzY2hhdShncnVwcGVuLCBncnVwcGVuX2FycmF5LCBhbnpfZHNfZ2V3w6RobHQsIGZpbHRlcmtyaXRlcmllbl9vYmpla3QsIGdld8OkaGx0ZV9mZWxkZXJfb2JqZWt0KTtcblx0fVxufTtcblxud2luZG93LmFkYi7DvGJlcmdlYmVGaWx0ZXJGw7xyRXhwb3J0RsO8ckFsdCA9IGZ1bmN0aW9uKGdydXBwZW4sIGdydXBwZW5fYXJyYXksIGFuel9kc19nZXfDpGhsdCwgZmlsdGVya3JpdGVyaWVuX29iamVrdCwgZ2V3w6RobHRlX2ZlbGRlcl9vYmpla3QpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIC8vIEFsbGUgRmVsZGVyIGFiZnJhZ2VuXG4gICAgdmFyIGZUeiA9IFwiZmFsc2VcIixcbiAgICAgICAgcXVlcnlQYXJhbTtcbiAgICAvLyB3aW5kb3cuYWRiLmZhc3NlVGF4b25vbWllblp1c2FtbWVuIHN0ZXVlcnQsIG9iIFRheG9ub21pZW4gYWxsZSBlaW56ZWxuIG9kZXIgdW50ZXIgZGVtIFRpdGVsIFRheG9ub21pZW4genVzYW1tZW5nZWZhc3N0IHdlcmRlblxuICAgIGlmICh3aW5kb3cuYWRiLmZhc3NlVGF4b25vbWllblp1c2FtbWVuKSB7XG4gICAgICAgIGZUeiA9IFwidHJ1ZVwiO1xuICAgIH1cbiAgICBpZiAoJChcIiNleHBvcnRpZXJlbl9zeW5vbnltX2luZm9zXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICBxdWVyeVBhcmFtID0gXCJleHBvcnRfYWx0X21pdF9zeW5vbnltZW5fZGlyZWt0L2FsbF9kb2NzX21pdF9zeW5vbnltZW5fZnVlcl9hbHQ/aW5jbHVkZV9kb2NzPXRydWUmZmlsdGVyPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGZpbHRlcmtyaXRlcmllbl9vYmpla3QpKSArIFwiJmZlbGRlcj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShnZXfDpGhsdGVfZmVsZGVyX29iamVrdCkpICsgXCImZmFzc2VUYXhvbm9taWVuWnVzYW1tZW49XCIgKyBmVHogKyBcIiZncnVwcGVuPVwiICsgZ3J1cHBlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVBhcmFtID0gXCJleHBvcnRfYWx0X2RpcmVrdC9hbGxfZG9jc19mdWVyX2FsdD9pbmNsdWRlX2RvY3M9dHJ1ZSZmaWx0ZXI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZmlsdGVya3JpdGVyaWVuX29iamVrdCkpICsgXCImZmVsZGVyPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGdld8OkaGx0ZV9mZWxkZXJfb2JqZWt0KSkgKyBcIiZmYXNzZVRheG9ub21pZW5adXNhbW1lbj1cIiArIGZUeiArIFwiJmdydXBwZW49XCIgKyBncnVwcGVuO1xuICAgIH1cbiAgICBpZiAoJChcIiNleHBvcnRpZXJlbl9udXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlblwiKS5wcm9wKCdjaGVja2VkJykgJiYgYW56X2RzX2dld8OkaGx0ID4gMCkge1xuICAgICAgICAvLyBwcsO8ZmVuLCBvYiBtaW5kZXN0ZW5zIGVpbiBGZWxkIGF1cyBkcyBnZXfDpGhsdCBpc3RcbiAgICAgICAgLy8gd2VubiBqYTogdHJ1ZSwgc29uc3QgZmFsc2VcbiAgICAgICAgcXVlcnlQYXJhbSArPSBcIiZudXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbj10cnVlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVlcnlQYXJhbSArPSBcIiZudXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbj1mYWxzZVwiO1xuICAgIH1cbiAgICBpZiAoJChcIiNleHBvcnRfYmV6X2luX3plaWxlblwiKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgcXVlcnlQYXJhbSArPSBcIiZiZXpfaW5femVpbGVuPXRydWVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVBhcmFtICs9IFwiJmJlel9pbl96ZWlsZW49ZmFsc2VcIjtcbiAgICB9XG4gICAgd2luZG93Lm9wZW4oJ19saXN0LycgKyBxdWVyeVBhcmFtKTtcbn07XG5cbndpbmRvdy5hZGIuw7xiZXJnZWJlRmlsdGVyRsO8ckRpcmVrdEV4cG9ydCA9IGZ1bmN0aW9uKGdydXBwZW4sIGdydXBwZW5fYXJyYXksIGFuel9kc19nZXfDpGhsdCwgZmlsdGVya3JpdGVyaWVuX29iamVrdCwgZ2V3w6RobHRlX2ZlbGRlcl9vYmpla3QpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBBbGxlIEZlbGRlciBhYmZyYWdlblxuXHR2YXIgZlR6ID0gXCJmYWxzZVwiLFxuXHRcdHF1ZXJ5UGFyYW0sXG4gICAgICAgIHZpZXdfbmFtZSxcbiAgICAgICAgbGlzdF9uYW1lLFxuICAgICAgICBncnVwcGVubGlzdGUgPSBncnVwcGVuLnNwbGl0KFwiLFwiKTtcblx0Ly8gd2luZG93LmFkYi5mYXNzZVRheG9ub21pZW5adXNhbW1lbiBzdGV1ZXJ0LCBvYiBUYXhvbm9taWVuIGFsbGUgZWluemVsbiBvZGVyIHVudGVyIGRlbSBUaXRlbCBUYXhvbm9taWVuIHp1c2FtbWVuZ2VmYXNzdCB3ZXJkZW5cblx0aWYgKHdpbmRvdy5hZGIuZmFzc2VUYXhvbm9taWVuWnVzYW1tZW4pIHtcblx0XHRmVHogPSBcInRydWVcIjtcblx0fVxuXHRpZiAoJChcIiNleHBvcnRpZXJlbl9zeW5vbnltX2luZm9zXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICBsaXN0X25hbWUgPSBcImV4cG9ydF9taXRfc3lub255bWVuX2RpcmVrdFwiO1xuICAgICAgICBpZiAoZ3J1cHBlbmxpc3RlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZpZXdfbmFtZSA9IFwiYWxsX2RvY3NfbWl0X3N5bm9ueW1lblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVuIHZpZXcgZGVyIEdydXBwZSBuZWhtZW4sIGRhcyBpc3QgdmllbCBzY2huZWxsZXJcbiAgICAgICAgICAgIGlmIChncnVwcGVubGlzdGVbMF0gPT09IFwiTGViZW5zcsOkdW1lXCIpIHtcbiAgICAgICAgICAgICAgICB2aWV3X25hbWUgPSBcImxyX21pdF9zeW5vbnltZW5cIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld19uYW1lID0gZ3J1cHBlbmxpc3RlWzBdLnRvTG93ZXJDYXNlKCkgKyBcIl9taXRfc3lub255bWVuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgbGlzdF9uYW1lID0gXCJleHBvcnRfZGlyZWt0XCI7XG4gICAgICAgIGlmIChncnVwcGVubGlzdGUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmlld19uYW1lID0gXCJhbGxfZG9jc1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVuIHZpZXcgZGVyIEdydXBwZSBuZWhtZW4sIGRhcyBpc3QgdmllbCBzY2huZWxsZXJcbiAgICAgICAgICAgIGlmIChncnVwcGVubGlzdGVbMF0gPT09IFwiTGViZW5zcsOkdW1lXCIpIHtcbiAgICAgICAgICAgICAgICB2aWV3X25hbWUgPSBcImxyXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdfbmFtZSA9IGdydXBwZW5saXN0ZVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblx0fVxuXG4gICAgcXVlcnlQYXJhbSA9IGxpc3RfbmFtZSArIFwiL1wiICsgdmlld19uYW1lICsgXCI/aW5jbHVkZV9kb2NzPXRydWUmZmlsdGVyPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGZpbHRlcmtyaXRlcmllbl9vYmpla3QpKSArIFwiJmZlbGRlcj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShnZXfDpGhsdGVfZmVsZGVyX29iamVrdCkpICsgXCImZmFzc2VUYXhvbm9taWVuWnVzYW1tZW49XCIgKyBmVHogKyBcIiZncnVwcGVuPVwiICsgZ3J1cHBlbjtcblxuXHRpZiAoJChcIiNleHBvcnRpZXJlbl9udXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlblwiKS5wcm9wKCdjaGVja2VkJykgJiYgYW56X2RzX2dld8OkaGx0ID4gMCkge1xuXHRcdC8vIHByw7xmZW4sIG9iIG1pbmRlc3RlbnMgZWluIEZlbGQgYXVzIGRzIGdld8OkaGx0IGlzdFxuXHRcdC8vIHdlbm4gamE6IHRydWUsIHNvbnN0IGZhbHNlXG5cdFx0cXVlcnlQYXJhbSArPSBcIiZudXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbj10cnVlXCI7XG5cdH0gZWxzZSB7XG5cdFx0cXVlcnlQYXJhbSArPSBcIiZudXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbj1mYWxzZVwiO1xuXHR9XG5cdGlmICgkKFwiI2V4cG9ydF9iZXpfaW5femVpbGVuXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuXHRcdHF1ZXJ5UGFyYW0gKz0gXCImYmV6X2luX3plaWxlbj10cnVlXCI7XG5cdH0gZWxzZSB7XG5cdFx0cXVlcnlQYXJhbSArPSBcIiZiZXpfaW5femVpbGVuPWZhbHNlXCI7XG5cdH1cblx0d2luZG93Lm9wZW4oJ19saXN0LycgKyBxdWVyeVBhcmFtKTtcbn07XG5cbndpbmRvdy5hZGIuw7xiZXJnZWJlRmlsdGVyRsO8ckV4cG9ydE1pdFZvcnNjaGF1ID0gZnVuY3Rpb24oZ3J1cHBlbiwgZ3J1cHBlbl9hcnJheSwgYW56X2RzX2dld8OkaGx0LCBmaWx0ZXJrcml0ZXJpZW5fb2JqZWt0LCBnZXfDpGhsdGVfZmVsZGVyX29iamVrdCkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIEFsbGUgRmVsZGVyIGFiZnJhZ2VuXG5cdHZhciBmVHogPSBcImZhbHNlXCIsXG5cdFx0YW56X2dydXBwZW5fYWJnZWZyYWd0ID0gMCxcblx0XHRkYlBhcmFtLFxuXHRcdHF1ZXJ5UGFyYW07XG5cdC8vIHdpbmRvdy5hZGIuZmFzc2VUYXhvbm9taWVuWnVzYW1tZW4gc3RldWVydCwgb2IgVGF4b25vbWllbiBhbGxlIGVpbnplbG4gb2RlciB1bnRlciBkZW0gVGl0ZWwgVGF4b25vbWllbiB6dXNhbW1lbmdlZmFzc3Qgd2VyZGVuXG5cdGlmICh3aW5kb3cuYWRiLmZhc3NlVGF4b25vbWllblp1c2FtbWVuKSB7XG5cdFx0ZlR6ID0gXCJ0cnVlXCI7XG5cdH1cblx0Ly8gZ2xvYmFsZSBWYXJpYWJsZSB2b3JiZXJlaXRlblxuXHR3aW5kb3cuYWRiLmV4cG9ydGllcmVuX29iamVrdGUgPSBbXTtcblx0Ly8gaW4gYW56X2dydXBwZW5fYWJnZWZyYWd0IHdpcmQgZ2V6w6RobHQsIHdpZXZpZWxlIEdydXBwZW4gc2Nob24gYWJnZWZyYWd0IHd1cmRlblxuXHQvLyBqZWRlIEFiZnJhZ2Uga29udHJvbGxpZXJ0IG5hY2ggRXJoYWx0IGRlciBEYXRlbiwgb2Igc2Nob24gYWxsZSBHcnVwcGVuIGFiZ2VmcmFndCB3dXJkZW4gdW5kIG1hY2h0IHdlaXRlciwgd2VubiBqYVxuICAgIF8uZWFjaChncnVwcGVuX2FycmF5LCBmdW5jdGlvbihncnVwcGUpIHtcbiAgICAgICAgaWYgKCQoXCIjZXhwb3J0aWVyZW5fc3lub255bV9pbmZvc1wiKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGRiUGFyYW0gPSBcImFydGVuZGIvZXhwb3J0X21pdF9zeW5vbnltZW5cIjtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW0gPSBncnVwcGUgKyBcIl9taXRfc3lub255bWVuP2luY2x1ZGVfZG9jcz10cnVlJmZpbHRlcj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmaWx0ZXJrcml0ZXJpZW5fb2JqZWt0KSkgKyBcIiZmZWxkZXI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZ2V3w6RobHRlX2ZlbGRlcl9vYmpla3QpKSArIFwiJmZhc3NlVGF4b25vbWllblp1c2FtbWVuPVwiICsgZlR6ICsgXCImZ3J1cHBlbj1cIiArIGdydXBwZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYlBhcmFtID0gXCJhcnRlbmRiL2V4cG9ydFwiO1xuICAgICAgICAgICAgcXVlcnlQYXJhbSA9IGdydXBwZSArIFwiP2luY2x1ZGVfZG9jcz10cnVlJmZpbHRlcj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmaWx0ZXJrcml0ZXJpZW5fb2JqZWt0KSkgKyBcIiZmZWxkZXI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZ2V3w6RobHRlX2ZlbGRlcl9vYmpla3QpKSArIFwiJmZhc3NlVGF4b25vbWllblp1c2FtbWVuPVwiICsgZlR6ICsgXCImZ3J1cHBlbj1cIiArIGdydXBwZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQoXCIjZXhwb3J0aWVyZW5fbnVyX29iamVrdGVfbWl0X2VpZ2Vuc2NoYWZ0ZW5cIikucHJvcCgnY2hlY2tlZCcpICYmIGFuel9kc19nZXfDpGhsdCA+IDApIHtcbiAgICAgICAgICAgIC8vIHByw7xmZW4sIG9iIG1pbmRlc3RlbnMgZWluIEZlbGQgYXVzIGRzIGdld8OkaGx0IGlzdFxuICAgICAgICAgICAgLy8gd2VubiBqYTogdHJ1ZSwgc29uc3QgZmFsc2VcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW0gKz0gXCImbnVyX29iamVrdGVfbWl0X2VpZ2Vuc2NoYWZ0ZW49dHJ1ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnlQYXJhbSArPSBcIiZudXJfb2JqZWt0ZV9taXRfZWlnZW5zY2hhZnRlbj1mYWxzZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKFwiI2V4cG9ydF9iZXpfaW5femVpbGVuXCIpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbSArPSBcIiZiZXpfaW5femVpbGVuPXRydWVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW0gKz0gXCImYmV6X2luX3plaWxlbj1mYWxzZVwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkZGIgPSAkLmNvdWNoLmRiKFwiYXJ0ZW5kYlwiKTtcbiAgICAgICAgJGRiLmxpc3QoZGJQYXJhbSwgcXVlcnlQYXJhbSwge1xuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGFsbGUgT2JqZWt0ZSBpbiBkYXRhIGluIHdpbmRvdy5hZGIuZXhwb3J0aWVyZW5fb2JqZWt0ZSBhbmbDvGdlblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGIuZXhwb3J0aWVyZW5fb2JqZWt0ZSA9IF8udW5pb24od2luZG93LmFkYi5leHBvcnRpZXJlbl9vYmpla3RlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBzcGVpY2hlcm4sIGRhc3MgZWluZSBHcnVwcGUgYWJnZWZyYWd0IHd1cmRlXG4gICAgICAgICAgICAgICAgYW56X2dydXBwZW5fYWJnZWZyYWd0Kys7XG4gICAgICAgICAgICAgICAgaWYgKGFuel9ncnVwcGVuX2FiZ2VmcmFndCA9PT0gZ3J1cHBlbl9hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsZSBHcnVwcGVuIHd1cmRlbiBhYmdlZnJhZ3QsIGpldHp0IGthbm4gZXMgd2VpdGVyZ2VoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXJnZWJuaXMgcsO8Y2ttZWxkZW5cbiAgICAgICAgICAgICAgICAgICAgJChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9oaW53ZWlzX3RleHRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbGVydCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbCh3aW5kb3cuYWRiLmV4cG9ydGllcmVuX29iamVrdGUubGVuZ3RoICsgXCIgT2JqZWt0ZSBzaW5kIGdld8OkaGx0XCIpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRiLmJhdWVUYWJlbGxlRsO8ckV4cG9ydEF1ZigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluICRkYi5saXN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxud2luZG93LmFkYi5iYXVlVGFiZWxsZUbDvHJFeHBvcnRBdWYgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuICAgIHZhciBoaW53ZWlzID0gXCJcIjtcblx0aWYgKHdpbmRvdy5hZGIuZXhwb3J0aWVyZW5fb2JqZWt0ZS5sZW5ndGggPiAwKSB7XG5cdFx0d2luZG93LmFkYi5lcnN0ZWxsZVRhYmVsbGUod2luZG93LmFkYi5leHBvcnRpZXJlbl9vYmpla3RlLCBcIlwiLCBcImV4cG9ydGllcmVuX2V4cG9ydGllcmVuX3RhYmVsbGVcIik7XG5cdFx0JChcIi5leHBvcnRpZXJlbl9leHBvcnRpZXJlbl9leHBvcnRpZXJlblwiKS5zaG93KCk7XG5cdFx0Ly8genVyIFRhYmVsbGUgc2Nyb2xsZW5cblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0XHRzY3JvbGxUb3A6ICQoXCIjZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5cIikub2Zmc2V0KCkudG9wXG5cdFx0fSwgMjAwMCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmFkYi5leHBvcnRpZXJlbl9vYmpla3RlICYmIHdpbmRvdy5hZGIuZXhwb3J0aWVyZW5fb2JqZWt0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9lcnJvcl90ZXh0X3RleHRcIilcbiAgICAgICAgICAgIC5odG1sKFwiS2VpbmUgRGF0ZW4gZ2VmdW5kZW48YnI+Qml0dGUgcGFzc2VuIFNpZSBkaWUgRmlsdGVya3JpdGVyaWVuIGFuXCIpO1xuICAgICAgICAkKFwiI2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX2Vycm9yX3RleHRcIilcbiAgICAgICAgICAgIC5hbGVydCgpXG4gICAgICAgICAgICAuc2hvdygpO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5cIikub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDIwMDApO1xuXG5cdH1cblx0Ly8gQmVzY2jDpGZ0aWd1bmdzbWVsZHVuZyB2ZXJzdGVja2VuXG5cdCQoXCIjZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5faGlud2Vpc190ZXh0XCIpXG4gICAgICAgIC5hbGVydCgpXG4gICAgICAgIC5oaWRlKCk7XG59O1xuXG53aW5kb3cuYWRiLmbDvHJFeHBvcnRHZXfDpGhsdGVHcnVwcGVuID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGdydXBwZW4gPSBbXTtcblx0JChcIi5leHBvcnRpZXJlbl9kc19vYmpla3RlX3dhZWhsZW5fZ3J1cHBlXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XG5cdFx0XHRncnVwcGVuLnB1c2goJCh0aGlzKS5hdHRyKCdmZWxkbmFtZScpKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZ3J1cHBlbjtcbn07XG5cbi8vIHdvaGVyIHdpcmQgYmxvc3MgYmVuw7Z0aWd0LCB3ZW5uIGFuZ2VtZWxkZXQgd2VyZGVuIG11c3NcbndpbmRvdy5hZGIuYmVyZWl0ZUltcG9ydGllcmVuX2RzX2Jlc2NocmVpYmVuVm9yID0gZnVuY3Rpb24od29oZXIpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRpZiAoIXdpbmRvdy5hZGIucHLDvGZlQW5tZWxkdW5nKFwid29oZXJcIikpIHtcblx0XHQkKCcjaW1wb3J0aWVyZW5fZHNfZHNfYmVzY2hyZWliZW5fY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuXHR9IGVsc2Uge1xuXHRcdCQoXCIjRHNOYW1lXCIpLmZvY3VzKCk7XG5cdFx0Ly8gRGF0ZW4gaG9sZW4sIHdlbm4gbsO2dGlnXG5cdFx0aWYgKHdpbmRvdy5hZGIuZHNfdm9uX29iamVrdGVuKSB7XG5cdFx0XHR3aW5kb3cuYWRiLmJlcmVpdGVJbXBvcnRpZXJlbl9kc19iZXNjaHJlaWJlblZvcl8wMigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdFx0XHQkZGIudmlldygnYXJ0ZW5kYi9kc192b25fb2JqZWt0ZW4/c3RhcnRrZXk9W1wiRGF0ZW5zYW1tbHVuZ1wiXSZlbmRrZXk9W1wiRGF0ZW5zYW1tbHVuZ1wiLHt9LHt9LHt9LHt9XSZncm91cF9sZXZlbD01Jywge1xuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0Ly8gRGF0ZW4gaW4gT2JqZWt0dmFyaWFibGUgc3BlaWNoZXJuID4gV2VubiBEcyBhdXNnZXfDpGhsdCwgQW5nYWJlbiBpbiBkaWUgRmVsZGVyIGtvcGllcmVuXG5cdFx0XHRcdFx0d2luZG93LmFkYi5kc192b25fb2JqZWt0ZW4gPSBkYXRhO1xuXHRcdFx0XHRcdHdpbmRvdy5hZGIuYmVyZWl0ZUltcG9ydGllcmVuX2RzX2Jlc2NocmVpYmVuVm9yXzAyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufTtcblxuLy8gRHNOYW1lbiBpbiBBdXN3YWhsbGlzdGUgc3RlbGxlblxuLy8gdmVyw6RuZGVyYmFyZSBzaW5kIG5vcm1hbCwgw7xicmlnZSBncmF1XG53aW5kb3cuYWRiLmJlcmVpdGVJbXBvcnRpZXJlbl9kc19iZXNjaHJlaWJlblZvcl8wMiA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBodG1sLFxuICAgICAgICBkc19uYW1lbiA9IFtdO1xuXHQvLyBpbiBkaWVzZW0gQXJyYXkgd2VyZGVuIGFsbGUga2V5cyBnZXNhbW1lbHRcblx0Ly8gZGllc2VuIEFycmF5IGFscyBnbG9iYWxlIFZhcmlhYmxlIGdlc3RhbHRlbjogV2lyIGJlbnV0enQsIHdlbm4gRHNOYW1lIHZlcsOkbmRlcnQgd2lyZFxuICAgIHdpbmRvdy5hZGIuRHNLZXlzID0gXy5tYXAod2luZG93LmFkYi5kc192b25fb2JqZWt0ZW4ucm93cywgZnVuY3Rpb24ocm93KSB7XG4gICAgICAgIHJldHVybiByb3cua2V5O1xuICAgIH0pO1xuICAgIC8vIGJyYXVjaGUgbnVyIGRyZWkga2V5c1xuICAgIC8vIGVtYWlsOiBsZWlkZXIgZ2lidCBlcyBOdWxsLVdlcnRlXG4gICAgd2luZG93LmFkYi5kc19uYW1lbl9laW5kZXV0aWcgPSBfLm1hcCh3aW5kb3cuYWRiLkRzS2V5cywgZnVuY3Rpb24oZHNfa2V5KSB7XG4gICAgICAgIHJldHVybiBbZHNfa2V5WzFdLCBkc19rZXlbMl0sIGRzX2tleVszXSB8fCBcImFsZXhAZ2FicmllbC1zb2Z0d2FyZS5jaFwiXTtcbiAgICB9KTtcbiAgICAvLyBPYmpla3RhcnJheSByZWR1emllcmVuIGF1ZiBlaW5kZXV0aWdlIE5hbWVuXG4gICAgd2luZG93LmFkYi5kc19uYW1lbl9laW5kZXV0aWcgPSBfLnJlamVjdCh3aW5kb3cuYWRiLmRzX25hbWVuX2VpbmRldXRpZywgZnVuY3Rpb24ob2JqZWt0KSB7XG4gICAgICAgIHZhciBwb3NpdGlvbl9pbl9kc19uYW1lbiA9IF8uaW5kZXhPZihkc19uYW1lbiwgb2JqZWt0WzBdKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uX2luX2RzX25hbWVuID09PSAtMSkge1xuICAgICAgICAgICAgZHNfbmFtZW4ucHVzaChvYmpla3RbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBuYWNoIERzTmFtZW4gc29ydGllcmVuXG4gICAgd2luZG93LmFkYi5kc19uYW1lbl9laW5kZXV0aWcgPSBfLnNvcnRCeSh3aW5kb3cuYWRiLmRzX25hbWVuX2VpbmRldXRpZywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXlbMF07XG4gICAgfSk7XG5cdC8vIG1pdCBsZWVyZXIgWmVpbGUgYmVnaW5uZW5cblx0aHRtbCA9IFwiPG9wdGlvbiB2YWx1ZT0nJyB3YWVobGJhcj10cnVlPjwvb3B0aW9uPlwiO1xuXHQvLyBOYW1lbiBkZXIgRGF0ZW5zYW1tbHVuZ2VuIGFscyBPcHRpb25lbiBhbmbDvGdlblxuICAgIF8uZWFjaCh3aW5kb3cuYWRiLmRzX25hbWVuX2VpbmRldXRpZywgZnVuY3Rpb24oZHNfbmFtZV9laW5kZXV0aWcpIHtcbiAgICAgICAgLy8gdmVyw6RuZGVyYmFyIHNpbmQgbnVyIHNlbGJzdCBpbXBvcnRpZXJ0ZSB1bmQgenVzYW1tZW5mYXNzZW5kZVxuICAgICAgICBpZiAoZHNfbmFtZV9laW5kZXV0aWdbMl0gPT09IGxvY2FsU3RvcmFnZS5FbWFpbCB8fCBkc19uYW1lX2VpbmRldXRpZ1sxXSB8fCBCb29sZWFuKGxvY2FsU3RvcmFnZS5hZG1pbikpIHtcbiAgICAgICAgICAgIC8vIHZlcsOkbmRlcmJhcmUgc2luZCBub3JtYWwgPSBzY2h3YXJ6XG4gICAgICAgICAgICBodG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBkc19uYW1lX2VpbmRldXRpZ1swXSArIFwiJyBjbGFzcz0nYWRiX2dydWVuX2ZldHQnIHdhZWhsYmFyPXRydWU+XCIgKyBkc19uYW1lX2VpbmRldXRpZ1swXSArIFwiPC9vcHRpb24+XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBuaWNodCB2ZXLDpG5kZXJiYXJlIHNpbmQgZ3JhdVxuICAgICAgICAgICAgaHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZHNfbmFtZV9laW5kZXV0aWdbMF0gKyBcIicgY2xhc3M9J2FkYl9ncmF1X25vcm1hbCcgd2FlaGxiYXI9ZmFsc2U+XCIgKyBkc19uYW1lX2VpbmRldXRpZ1swXSArIFwiPC9vcHRpb24+XCI7XG4gICAgICAgIH1cbiAgICB9KTtcblx0JChcIiNEc1dhZWhsZW5cIikuaHRtbChodG1sKTtcblx0JChcIiNEc1Vyc3BydW5nc0RzXCIpLmh0bWwoaHRtbCk7XG59O1xuXG4vLyB3b2hlciB3aXJkIGJsb3NzIGJlbsO2dGlndCwgd2VubiBhbmdlbWVsZGV0IHdlcmRlbiBtdXNzXG53aW5kb3cuYWRiLmJlcmVpdGVJbXBvcnRpZXJlbl9ic19iZXNjaHJlaWJlblZvciA9IGZ1bmN0aW9uKHdvaGVyKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKCF3aW5kb3cuYWRiLnByw7xmZUFubWVsZHVuZyhcIndvaGVyXCIpKSB7XG5cdFx0JCgnI2ltcG9ydGllcmVuX2JzX2RzX2Jlc2NocmVpYmVuX2NvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcblx0fSBlbHNlIHtcblx0XHQkKFwiI0JzTmFtZVwiKS5mb2N1cygpO1xuXHRcdC8vIGFuemVpZ2VuLCBkYXNzIERhdGVuIGdlbGFkZW4gd2VyZGVuLiBOZWluOiBCbGl0enQgYmxvc3Mga3VyeiBhdWZcblx0XHQvLyQoXCIjQnNXYWVobGVuXCIpLmh0bWwoXCI8b3B0aW9uIHZhbHVlPSdudWxsJz5CaXR0ZSB3YXJ0ZSwgZGllIExpc3RlIHdpcmQgYXVmZ2ViYXV0Li4uPC9vcHRpb24+XCIpO1xuXHRcdC8vIERhdGVuIGhvbGVuLCB3ZW5uIG7DtnRpZ1xuXHRcdGlmICh3aW5kb3cuYWRiLmJzX3Zvbl9vYmpla3Rlbikge1xuICAgICAgICAgICAgd2luZG93LmFkYi5iZXJlaXRlSW1wb3J0aWVyZW5fYnNfYmVzY2hyZWliZW5Wb3JfMDIoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHRcdFx0JGRiLnZpZXcoJ2FydGVuZGIvZHNfdm9uX29iamVrdGVuP3N0YXJ0a2V5PVtcIkJlemllaHVuZ3NzYW1tbHVuZ1wiXSZlbmRrZXk9W1wiQmV6aWVodW5nc3NhbW1sdW5nXCIse30se30se30se31dJmdyb3VwX2xldmVsPTUnLCB7XG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHQvLyBEYXRlbiBpbiBPYmpla3R2YXJpYWJsZSBzcGVpY2hlcm4gPiBXZW5uIERzIGF1c2dld8OkaGx0LCBBbmdhYmVuIGluIGRpZSBGZWxkZXIga29waWVyZW5cblx0XHRcdFx0XHR3aW5kb3cuYWRiLmJzX3Zvbl9vYmpla3RlbiA9IGRhdGE7XG5cdFx0XHRcdFx0d2luZG93LmFkYi5iZXJlaXRlSW1wb3J0aWVyZW5fYnNfYmVzY2hyZWliZW5Wb3JfMDIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59O1xuXG53aW5kb3cuYWRiLmJlcmVpdGVJbXBvcnRpZXJlbl9ic19iZXNjaHJlaWJlblZvcl8wMiA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBodG1sLFxuXHRcdGJzX25hbWVuID0gW107XG5cdC8vIGluIGRpZXNlbSBBcnJheSB3ZXJkZW4gYWxsZSBrZXlzIGdlc2FtbWVsdFxuXHQvLyBkaWVzZW4gQXJyYXkgYWxzIGdsb2JhbGUgVmFyaWFibGUgZ2VzdGFsdGVuOiBXaXIgYmVudXR6dCwgd2VubiBEc05hbWUgdmVyw6RuZGVydCB3aXJkXG5cdHdpbmRvdy5hZGIuQnNLZXlzID0gXy5tYXAod2luZG93LmFkYi5ic192b25fb2JqZWt0ZW4ucm93cywgZnVuY3Rpb24ocm93KSB7XG4gICAgICAgIHJldHVybiByb3cua2V5O1xuICAgIH0pO1xuXG4gICAgLy8gYnJhdWNoZSBudXIgZHJlaSBrZXlzXG4gICAgd2luZG93LmFkYi5kc19uYW1lbl9laW5kZXV0aWcgPSBfLm1hcCh3aW5kb3cuYWRiLkJzS2V5cywgZnVuY3Rpb24oYnNfa2V5KSB7XG4gICAgICAgIHJldHVybiBbYnNfa2V5WzFdLCBic19rZXlbMl0sIGJzX2tleVszXV07XG4gICAgfSk7XG4gICAgLy8gT2JqZWt0YXJyYXkgcmVkdXppZXJlbiBhdWYgZWluZGV1dGlnZSBOYW1lblxuICAgIHdpbmRvdy5hZGIuZHNfbmFtZW5fZWluZGV1dGlnID0gXy5yZWplY3Qod2luZG93LmFkYi5kc19uYW1lbl9laW5kZXV0aWcsIGZ1bmN0aW9uKG9iamVrdCkge1xuICAgICAgICB2YXIgcG9zaXRpb25faW5fYnNfbmFtZW4gPSBfLmluZGV4T2YoYnNfbmFtZW4sIG9iamVrdFswXSk7XG4gICAgICAgIGlmIChwb3NpdGlvbl9pbl9ic19uYW1lbiA9PT0gLTEpIHtcbiAgICAgICAgICAgIGJzX25hbWVuLnB1c2gob2JqZWt0WzBdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cblx0Ly8gbmFjaCBEc05hbWVuIHNvcnRpZXJlblxuXHR3aW5kb3cuYWRiLmRzX25hbWVuX2VpbmRldXRpZyA9IF8uc29ydEJ5KHdpbmRvdy5hZGIuZHNfbmFtZW5fZWluZGV1dGlnLCBmdW5jdGlvbihrZXkpIHtcblx0XHRyZXR1cm4ga2V5WzBdO1xuXHR9KTtcblx0Ly8gbWl0IGxlZXJlciBaZWlsZSBiZWdpbm5lblxuXHRodG1sID0gXCI8b3B0aW9uIHZhbHVlPScnIHdhZWhsYmFyPXRydWU+PC9vcHRpb24+XCI7XG5cdC8vIE5hbWVuIGRlciBEYXRlbnNhbW1sdW5nZW4gYWxzIE9wdGlvbmVuIGFuZsO8Z2VuXG4gICAgXy5lYWNoKHdpbmRvdy5hZGIuZHNfbmFtZW5fZWluZGV1dGlnLCBmdW5jdGlvbihkc19uYW1lX2VpbmRldXRpZykge1xuICAgICAgICAvLyB2ZXLDpG5kZXJiYXIgc2luZCBudXIgc2VsYnN0IGltcG9ydGllcnRlIHVuZCB6dXNhbW1lbmZhc3NlbmRlXG4gICAgICAgIGlmIChkc19uYW1lX2VpbmRldXRpZ1syXSA9PT0gbG9jYWxTdG9yYWdlLkVtYWlsIHx8IGRzX25hbWVfZWluZGV1dGlnWzFdIHx8IEJvb2xlYW4obG9jYWxTdG9yYWdlLmFkbWluKSkge1xuICAgICAgICAgICAgLy8gdmVyw6RuZGVyYmFyZSBzaW5kIG5vcm1hbCA9IHNjaHdhcnpcbiAgICAgICAgICAgIGh0bWwgKz0gXCI8b3B0aW9uIHZhbHVlPSdcIiArIGRzX25hbWVfZWluZGV1dGlnWzBdICsgXCInIGNsYXNzPSdhZGJfZ3J1ZW5fZmV0dCcgd2FlaGxiYXI9dHJ1ZT5cIiArIGRzX25hbWVfZWluZGV1dGlnWzBdICsgXCI8L29wdGlvbj5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5pY2h0IHZlcsOkbmRlcmJhcmUgc2luZCBncmF1XG4gICAgICAgICAgICBodG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBkc19uYW1lX2VpbmRldXRpZ1swXSArIFwiJyBjbGFzcz0nYWRiX2dyYXVfbm9ybWFsJyB3YWVobGJhcj1mYWxzZT5cIiArIGRzX25hbWVfZWluZGV1dGlnWzBdICsgXCI8L29wdGlvbj5cIjtcbiAgICAgICAgfVxuICAgIH0pO1xuXHQkKFwiI0JzV2FlaGxlblwiKS5odG1sKGh0bWwpO1xuXHQkKFwiI0JzVXJzcHJ1bmdzQnNcIikuaHRtbChodG1sKTtcbn07XG5cbndpbmRvdy5hZGIuaXNGaWxlQVBJQXZhaWxhYmxlID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQ2hlY2sgZm9yIHRoZSB2YXJpb3VzIEZpbGUgQVBJIHN1cHBvcnQuXG5cdGlmICh3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZVJlYWRlciAmJiB3aW5kb3cuRmlsZUxpc3QgJiYgd2luZG93LkJsb2IpIHtcblx0XHQvLyBHcmVhdCBzdWNjZXNzISBBbGwgdGhlIEZpbGUgQVBJcyBhcmUgc3VwcG9ydGVkLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHNvdXJjZTogRmlsZSBBUEkgYXZhaWxhYmlsaXR5IC0gLy9jYW5pdXNlLmNvbS8jZmVhdD1maWxlYXBpXG5cdFx0Ly8gc291cmNlOiA8b3V0cHV0PiBhdmFpbGFiaWxpdHkgLSAvL2h0bWw1ZG9jdG9yLmNvbS90aGUtb3V0cHV0LWVsZW1lbnQvXG5cdFx0dmFyIGh0bWwgPSBcIkbDvHIgZGVuIERhdGVuaW1wb3J0IGJlbsO2dGlnZW4gU2llIG1pbmRlc3RlbnMgZWluZW4gZGVyIGZvbGdlbmRlbiBCcm93c2VyOjxicj5cIjtcblx0XHRodG1sICs9IFwiKFN0YW5kIE3DpHJ6IDIwMTQpPGJyPlwiO1xuXHRcdGh0bWwgKz0gXCItIEdvb2dsZSBDaHJvbWU6IDMxIG9kZXIgbmV1ZXI8YnI+XCI7XG5cdFx0aHRtbCArPSBcIi0gQ2hyb21lIGF1ZiBBbmRyb2lkOiAzMyBvZGVyIG5ldWVyPGJyPlwiO1xuXHRcdGh0bWwgKz0gXCItIE1vemlsbGEgRmlyZWZveDogMjggb2RlciBuZXVlcjxicj5cIjtcblx0XHRodG1sICs9IFwiLSBGaXJlZm94IGF1ZiBBbmRyb2lkOiAyNiBvZGVyIG5ldWVyPGJyPlwiO1xuXHRcdGh0bWwgKz0gXCItIFNhZmFyaTogNy4wIG9kZXIgbmV1ZXI8YnI+XCI7XG5cdFx0aHRtbCArPSBcIi0gaU9zIFNhZmFyaTogNi4wIG9kZXIgbmV1ZXI8YnI+XCI7XG5cdFx0aHRtbCArPSBcIi0gT3BlcmE6IDIwIG9kZXIgbmV1ZXI8YnI+XCI7XG5cdFx0aHRtbCArPSBcIi0gSW50ZXJuZXQgRXhwbG9yZXI6IDEwIG9kZXIgbmV1ZXI8YnI+XCI7XG5cdFx0aHRtbCArPSBcIi0gSW50ZXJuZXQgRXhwbG9yZXIgbW9iaWxlOiBiaXMgVmVyc2lvbiAxMCBuaWNodDxicj5cIjtcblx0XHRodG1sICs9IFwiLSBBbmRyb2lkIFN0YW5kYXJkYnJvd3NlcjogQW5kcm9pZCA0LjQgb2RlciBuZXVlcjxicj5cIjtcblx0XHQkKFwiI2ZpbGVBcGlNZWxkdW5nVGV4dFwiKS5odG1sKGh0bWwpO1xuXHRcdCQoJyNmaWxlQXBpTWVsZHVuZycpLm1vZGFsKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG53aW5kb3cuYWRiLnNvcnRpZXJlT2JqZWt0YXJyYXlOYWNoTmFtZSA9IGZ1bmN0aW9uKG9iamVrdGFycmF5KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8gQmV6aWVodW5nc3NhbW1sdW5nZW4gYnp3LiBEYXRlbnNhbW1sdW5nZW4gbmFjaCBOYW1lIHNvcnRpZXJlblxuXHRvYmpla3RhcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHR2YXIgYU5hbWUgPSBhLk5hbWUsXG5cdFx0XHRiTmFtZSA9IGIuTmFtZTtcblx0XHRpZiAoYU5hbWUgJiYgYk5hbWUpIHtcblx0XHRcdHJldHVybiAoYU5hbWUudG9Mb3dlckNhc2UoKSA9PSBiTmFtZS50b0xvd2VyQ2FzZSgpKSA/IDAgOiAoYU5hbWUudG9Mb3dlckNhc2UoKSA+IGJOYW1lLnRvTG93ZXJDYXNlKCkpID8gMSA6IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKGFOYW1lID09IGJOYW1lKSA/IDAgOiAoYU5hbWUgPiBiTmFtZSkgPyAxIDogLTE7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG9iamVrdGFycmF5O1xufTtcblxuLy8gw7xiZXJuaW1tdCBlaW5lbiBBcnJheSBtaXQgZGVuIEJlemllaHVuZ2VuXG4vLyBnaWJ0IGRpZXNlbiBzb3J0aWVydCB6dXLDvGNrXG53aW5kb3cuYWRiLnNvcnRpZXJlQmV6aWVodW5nZW5OYWNoTmFtZSA9IGZ1bmN0aW9uKGJlemllaHVuZ2VuKSB7XG5cdCd1c2Ugc3RyaWN0Jztcbi8vIEJlemllaHVuZ2VuIG5hY2ggTmFtZSBzb3J0aWVyZW5cblx0YmV6aWVodW5nZW4uc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0dmFyIGFOYW1lLFxuXHRcdFx0Yk5hbWU7XG4gICAgICAgIF8uZWFjaChhLkJlemllaHVuZ3NwYXJ0bmVyLCBmdW5jdGlvbihiZXppZWh1bmdzcGFydG5lcikge1xuICAgICAgICAgICAgaWYgKGJlemllaHVuZ3NwYXJ0bmVyLkdydXBwZSA9PT0gXCJMZWJlbnNyw6R1bWVcIikge1xuICAgICAgICAgICAgICAgIC8vIHNvcnRpZXJ0IHdlcmRlbiBzb2xsIGJlaSBMZWJlbnNyw6R1bWVuIHp1ZXJzdCBuYWNoIFRheG9ub21pZSwgZGFubiBuYWNoIE5hbWVcbiAgICAgICAgICAgICAgICBhTmFtZSA9IGJlemllaHVuZ3NwYXJ0bmVyLkdydXBwZSArIGJlemllaHVuZ3NwYXJ0bmVyLlRheG9ub21pZSArIGJlemllaHVuZ3NwYXJ0bmVyLk5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFOYW1lID0gYmV6aWVodW5nc3BhcnRuZXIuR3J1cHBlICsgYmV6aWVodW5nc3BhcnRuZXIuTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF8uZWFjaChiLkJlemllaHVuZ3NwYXJ0bmVyLCBmdW5jdGlvbihiZXppZWh1bmdzcGFydG5lcikge1xuICAgICAgICAgICAgaWYgKGJlemllaHVuZ3NwYXJ0bmVyLkdydXBwZSA9PT0gXCJMZWJlbnNyw6R1bWVcIikge1xuICAgICAgICAgICAgICAgIGJOYW1lID0gYmV6aWVodW5nc3BhcnRuZXIuR3J1cHBlICsgYmV6aWVodW5nc3BhcnRuZXIuVGF4b25vbWllICsgYmV6aWVodW5nc3BhcnRuZXIuTmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYk5hbWUgPSBiZXppZWh1bmdzcGFydG5lci5HcnVwcGUgKyBiZXppZWh1bmdzcGFydG5lci5OYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0XHRpZiAoYU5hbWUgJiYgYk5hbWUpIHtcblx0XHRcdHJldHVybiAoYU5hbWUudG9Mb3dlckNhc2UoKSA9PSBiTmFtZS50b0xvd2VyQ2FzZSgpKSA/IDAgOiAoYU5hbWUudG9Mb3dlckNhc2UoKSA+IGJOYW1lLnRvTG93ZXJDYXNlKCkpID8gMSA6IC0xO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKGFOYW1lID09IGJOYW1lKSA/IDAgOiAoYU5hbWUgPiBiTmFtZSkgPyAxIDogLTE7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGJlemllaHVuZ2VuO1xufTtcblxuLy8gc29ydGllcnQgbmFjaCBkZW4ga2V5cyBkZXMgT2JqZWt0c1xuLy8gcmVzdWx0YXQgbmljaHQgZ2FyYW50aWVydCFcbndpbmRvdy5hZGIuc29ydEtleXNPZk9iamVjdCA9IGZ1bmN0aW9uKG8pIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgc29ydGVkID0ge30sXG5cdFx0a2V5LFxuXHRcdGEgPSBbXTtcblxuXHRmb3IgKGtleSBpbiBvKSB7XG5cdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0YS5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0YS5zb3J0KCk7XG5cblx0Zm9yIChrZXkgPSAwOyBrZXkgPCBhLmxlbmd0aDsga2V5KyspIHtcblx0XHRzb3J0ZWRbYVtrZXldXSA9IG9bYVtrZXldXTtcblx0fVxuXHRyZXR1cm4gc29ydGVkO1xufTtcblxud2luZG93LmFkYi5leHBvcnRadXLDvGNrc2V0emVuID0gZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgICB2YXIgJGV4cG9ydGllcmVuX2V4cG9ydGllcmVuX2NvbGxhcHNlID0gJChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9jb2xsYXBzZVwiKTtcblx0Ly8gRXhwb3J0IGF1c2JsZW5kZW4sIGZhbGxzIHNpZSBlaW5nZWJsZW5kZXQgd2FyXG5cdGlmICgkZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fY29sbGFwc2UuY3NzKFwiZGlzcGxheVwiKSAhPT0gXCJub25lXCIpIHtcblx0XHQkZXhwb3J0aWVyZW5fZXhwb3J0aWVyZW5fY29sbGFwc2UuY29sbGFwc2UoJ2hpZGUnKTtcblx0fVxuXHQkKFwiI2V4cG9ydGllcmVuX2V4cG9ydGllcmVuX3RhYmVsbGVcIikuaGlkZSgpO1xuXHQkKFwiLmV4cG9ydGllcmVuX2V4cG9ydGllcmVuX2V4cG9ydGllcmVuXCIpLmhpZGUoKTtcblx0JChcIiNleHBvcnRpZXJlbl9leHBvcnRpZXJlbl9lcnJvcl90ZXh0XCIpXG4gICAgICAgIC5hbGVydCgpXG4gICAgICAgIC5oaWRlKCk7XG59O1xuXG53aW5kb3cuYWRiLsO2ZmZuZUdydXBwZSA9IGZ1bmN0aW9uKEdydXBwZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBlcnN0ZWxsZUJhdW0gPSByZXF1aXJlKCcuL21vZHVsZXMvZXJzdGVsbGVCYXVtJyk7XG5cdC8vIEdydXBwZSBhbHMgZ2xvYmFsZSBWYXJpYWJsZSBzcGVpY2hlcm4sIHdlaWwgc2llIGFuIHZpZWxlbiBPcnRlbiBiZW51dHp0IHdpcmRcblx0d2luZG93LmFkYi5HcnVwcGUgPSBHcnVwcGU7XG5cdCQoXCIuc3VjaGZlbGRcIikudmFsKFwiXCIpO1xuXHQkKFwiI0dydXBwZV9sYWJlbFwiKS5odG1sKFwiR3J1cHBlOlwiKTtcblx0JChcIi5zdWNoZW5cIilcbiAgICAgICAgLmhpZGUoKVxuICAgICAgICAudmFsKFwiXCIpO1xuXHQkKFwiI2Zvcm1zXCIpLmhpZGUoKTtcblx0dmFyIHRyZWVNaXR0ZWlsdW5nID0gXCJob2xlIERhdGVuLi4uXCI7XG5cdGlmICh3aW5kb3cuYWRiLkdydXBwZSA9PT0gXCJNYWNyb215Y2V0ZXNcIikge1xuXHRcdHRyZWVNaXR0ZWlsdW5nID0gXCJob2xlIERhdGVuIChkYXMgZGF1ZXJ0IGJlaSBQaWx6ZW4gbMOkbmdlci4uLilcIjtcblx0fVxuXHQkKFwiI3RyZWVNaXR0ZWlsdW5nXCIpXG4gICAgICAgIC5odG1sKHRyZWVNaXR0ZWlsdW5nKVxuICAgICAgICAuc2hvdygpO1xuXHRlcnN0ZWxsZUJhdW0oKTtcblx0Ly8ga2VpbmUgQXJ0IG1laHIgYWt0aXZcblx0ZGVsZXRlIGxvY2FsU3RvcmFnZS5hcnRfaWQ7XG59O1xuXG4vLyBzY2hyZWlidCDDhG5kZXJ1bmdlbiBpbiBGZWxkZXJuIGluIGRpZSBEYXRlbmJhbmtcbi8vIHdpcmQgdm9ybMOkdWZpZyBudXIgZsO8ciBMUiBUYXhvbm9taWUgdmVyd2VuZGV0XG53aW5kb3cuYWRiLnNwZWljaGVybiA9IGZ1bmN0aW9uKGZlbGR3ZXJ0LCBmZWxkbmFtZSwgZHNfbmFtZSwgZHNfdHlwKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Ly8genVlcnN0IGRpZSBpZCBkZXMgT2JqZWt0cyBob2xlblxuXHR2YXIgdXJpID0gbmV3IFVyaSgkKGxvY2F0aW9uKS5hdHRyKCdocmVmJykpLFxuXHRcdGlkID0gdXJpLmdldFF1ZXJ5UGFyYW1WYWx1ZSgnaWQnKSxcblx0XHQvLyB3ZW5uIGJyb3dzZXIgaGlzdG9yeSBuaWNodCB1bnRlcnN0w7x0enQsIGVyc3RlbGx0IGhpc3RvcnkuanMgZWluZSBoYXNoXG5cdFx0Ly8gZGFubiBtdXNzIGRpZSBpZCBkdXJjaCBkaWUgaWQgaW4gZGVyIGhhc2ggZXJzZXR6dCB3ZXJkZW5cblx0XHRoYXNoID0gdXJpLmFuY2hvcigpLFxuXHRcdHVyaTI7XG5cdGlmIChoYXNoKSB7XG5cdFx0dXJpMiA9IG5ldyBVcmkoaGFzaCk7XG5cdFx0aWQgPSB1cmkyLmdldFF1ZXJ5UGFyYW1WYWx1ZSgnaWQnKTtcblx0fVxuXHQvLyBzaWNoZXJzdGVsbGVuLCBkYXNzIGJvb2xlYW4sIGZsb2F0IHVuZCBpbnRlZ2VyIG5pY2h0IGluIFRleHQgdmVyd2FuZGVsdCB3ZXJkZW5cblx0ZmVsZHdlcnQgPSB3aW5kb3cuYWRiLmNvbnZlcnRUb0NvcnJlY3RUeXBlKGZlbGR3ZXJ0KTtcblx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHQkZGIub3BlbkRvYyhpZCwge1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRcdFx0Ly8gcHLDvGZlbiwgb2IgRWluaGVpdCBlaW5lcyBMUiB2ZXLDpG5kZXJ0IHd1cmRlLiBXZW5uIGphOiBOYW1lIGRlciBUYXhvbm9taWUgYW5wYXNzZW5cblx0XHRcdGlmIChmZWxkbmFtZSA9PT0gXCJFaW5oZWl0XCIgJiYgb2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkVpbmhlaXQgPT09IG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5UYXhvbm9taWUpIHtcblx0XHRcdFx0Ly8gZGFzIGlzdCBkaWUgV3VyemVsIGRlciBUYXhvbm9taWVcblx0XHRcdFx0Ly8gc29taXQgw6RuZGVydCBhdWNoIGRlciBUYXhvbm9taWVuYW1lXG5cdFx0XHRcdC8vIGRpZXNlbiBtaXRnZWJlblxuXHRcdFx0XHQvLyBFaW5oZWl0IMOkbmRlcnQgdW5kIFRheG9ub21pZW5hbWUgbXVzcyBhdWNoIGFuZ2VwYXNzdCB3ZXJkZW5cblx0XHRcdFx0b2JqZWN0LlRheG9ub21pZS5OYW1lID0gZmVsZHdlcnQ7XG5cdFx0XHRcdG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5UYXhvbm9taWUgPSBmZWxkd2VydDtcblx0XHRcdFx0Ly8gVE9ETzogcHLDvGZlbiwgb2IgZGllIMOEbmRlcnVuZyB6dWzDpHNzaWcgaXN0IChUYXhvbm9taWVuYW1lIGVpbmRldXRpZykgLS0tIFZPUiBERU0gU1BFSUNIRVJOXG5cdFx0XHRcdC8vIFRPRE86IGFsbGbDpGxsaWdlIEJlemllaHVuZ2VuIGFucGFzc2VuXG5cdFx0XHR9XG5cdFx0XHQvLyBkZW4gw7xiZXJnZWJlbmVuIFdlcnQgaW0gw7xiZXJnZWJlbmVuIEZlbGRuYW1lbiBzcGVpY2hlcm5cblx0XHRcdG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbltmZWxkbmFtZV0gPSBmZWxkd2VydDtcblx0XHRcdCRkYi5zYXZlRG9jKG9iamVjdCwge1xuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0b2JqZWN0Ll9yZXYgPSBkYXRhLnJldjtcblx0XHRcdFx0XHQvLyBwcsO8ZmVuLCBvYiBMYWJlbCBvZGVyIE5hbWUgZWluZXMgTFIgdmVyw6RuZGVydCB3dXJkZS4gV2VubiBqYTogSGllcmFyY2hpZSBha3R1YWxpc2llcmVuXG5cdFx0XHRcdFx0aWYgKGZlbGRuYW1lID09PSBcIkxhYmVsXCIgfHwgZmVsZG5hbWUgPT09IFwiRWluaGVpdFwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoZmVsZG5hbWUgPT09IFwiRWluaGVpdFwiICYmIG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5FaW5oZWl0ID09PSBvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uVGF4b25vbWllKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGRhcyBpc3QgZGllIFd1cnplbCBkZXIgVGF4b25vbWllXG5cdFx0XHRcdFx0XHRcdC8vIHNvbWl0IMOkbmRlcnQgYXVjaCBkZXIgVGF4b25vbWllbmFtZVxuXHRcdFx0XHRcdFx0XHQvLyBkaWVzZW4gbWl0Z2ViZW5cblx0XHRcdFx0XHRcdFx0Ly8gRWluaGVpdCDDpG5kZXJ0IHVuZCBUYXhvbm9taWVuYW1lIG11c3MgYXVjaCBhbmdlcGFzc3Qgd2VyZGVuXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5hZGIuYWt0dWFsaXNpZXJlSGllcmFyY2hpZUVpbmVzTHJJbmtsdXNpdmVTZWluZXJDaGlsZHJlbihudWxsLCBvYmplY3QsIHRydWUsIGZlbGR3ZXJ0KTtcblx0XHRcdFx0XHRcdFx0Ly8gRmVsZCBUYXhvbm9taWUgdW5kIEJlc2NocmlmdHVuZyBkZXMgQWNjb3JkaW9ucyBha3R1YWxpc2llcm5cblx0XHRcdFx0XHRcdFx0Ly8gZGF6dSBuZXUgaW5pdGlpZXJlbiwgd2VpbCBzb25zdCBkYXMgQWNjb3JkaW9uIG5pY2h0IHZlcsOkbmRlcnQgd2lyZFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuYWRiLmluaXRpaWVyZV9hcnQoaWQpO1xuXHRcdFx0XHRcdFx0XHQvLyBUYXhvbm9taWUgYW56ZWlnZW5cblx0XHRcdFx0XHRcdFx0JCgnIycgKyB3aW5kb3cuYWRiLmVyc2V0emVVbmfDvGx0aWdlWmVpY2hlbkluSWROYW1lbihmZWxkd2VydCkpLmNvbGxhcHNlKCdzaG93Jyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cuYWRiLmFrdHVhbGlzaWVyZUhpZXJhcmNoaWVFaW5lc0xySW5rbHVzaXZlU2VpbmVyQ2hpbGRyZW4obnVsbCwgb2JqZWN0LCB0cnVlLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBub2RlIHVtYmVuZW5uZW5cblx0XHRcdFx0XHRcdHZhciBuZXVlcl9ub2RldGV4dDtcblx0XHRcdFx0XHRcdGlmIChmZWxkbmFtZSA9PT0gXCJMYWJlbFwiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIG9iamVjdCBoYXQgbm9jaCBkZW4gYWx0ZW4gV2VydCBmw7xyIExhYmVsLCBuZXVlbiB2ZXJ3ZW5kZW5cblx0XHRcdFx0XHRcdFx0bmV1ZXJfbm9kZXRleHQgPSB3aW5kb3cuYWRiLmVyc3RlbGxlTHJMYWJlbE5hbWUoZmVsZHdlcnQsIG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5FaW5oZWl0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIG9iamVjdCBoYXQgbm9jaCBkZW4gYWx0ZW4gV2VydCBmw7xyIEVpbmhlaXQsIG5ldWVuIHZlcndlbmRlblxuXHRcdFx0XHRcdFx0XHRuZXVlcl9ub2RldGV4dCA9IHdpbmRvdy5hZGIuZXJzdGVsbGVMckxhYmVsTmFtZShvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uTGFiZWwsIGZlbGR3ZXJ0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCQoXCIjdHJlZVwiICsgd2luZG93LmFkYi5HcnVwcGUpLmpzdHJlZShcInJlbmFtZV9ub2RlXCIsIFwiI1wiICsgb2JqZWN0Ll9pZCwgbmV1ZXJfbm9kZXRleHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoXCIjbWVsZHVuZ19pbmRpdmlkdWVsbF9sYWJlbFwiKS5odG1sKFwiRmVobGVyXCIpO1xuXHRcdFx0XHRcdCQoXCIjbWVsZHVuZ19pbmRpdmlkdWVsbF90ZXh0XCIpLmh0bWwoXCJEaWUgbGV0enRlIMOEbmRlcnVuZyBpbSBGZWxkIFwiK2ZlbGRuYW1lK1wiIHd1cmRlIG5pY2h0IGdlc3BlaWNoZXJ0XCIpO1xuXHRcdFx0XHRcdCQoXCIjbWVsZHVuZ19pbmRpdmlkdWVsbF9zY2hsaWVzc2VuXCIpLmh0bWwoXCJzY2hsaWVzc2VuXCIpO1xuXHRcdFx0XHRcdCQoJyNtZWxkdW5nX2luZGl2aWR1ZWxsJykubW9kYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XG5cdFx0XHQkKFwiI21lbGR1bmdfaW5kaXZpZHVlbGxfbGFiZWxcIikuaHRtbChcIkZlaGxlclwiKTtcblx0XHRcdCQoXCIjbWVsZHVuZ19pbmRpdmlkdWVsbF90ZXh0XCIpLmh0bWwoXCJEaWUgbGV0enRlIMOEbmRlcnVuZyBpbSBGZWxkIFwiK2ZlbGRuYW1lK1wiIHd1cmRlIG5pY2h0IGdlc3BlaWNoZXJ0XCIpO1xuXHRcdFx0JChcIiNtZWxkdW5nX2luZGl2aWR1ZWxsX3NjaGxpZXNzZW5cIikuaHRtbChcInNjaGxpZXNzZW5cIik7XG5cdFx0XHQkKCcjbWVsZHVuZ19pbmRpdmlkdWVsbCcpLm1vZGFsKCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbndpbmRvdy5hZGIuY29udmVydFRvQ29ycmVjdFR5cGUgPSBmdW5jdGlvbihmZWxkd2VydCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciB0eXBlID0gd2luZG93LmFkYi5teVR5cGVPZihmZWxkd2VydCk7XG5cdGlmICh0eXBlID09PSBcImJvb2xlYW5cIikge1xuXHRcdHJldHVybiBCb29sZWFuKGZlbGR3ZXJ0KTtcblx0fSBlbHNlIGlmICh0eXBlID09PSBcImZsb2F0XCIpIHtcblx0XHRyZXR1cm4gcGFyc2VGbG9hdChmZWxkd2VydCk7XG5cdH0gZWxzZSBpZiAodHlwZSA9PT0gXCJpbnRlZ2VyXCIpIHtcblx0XHRyZXR1cm4gcGFyc2VJbnQoZmVsZHdlcnQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmZWxkd2VydDtcblx0fVxufTtcblxuLy8gSGlsZnNmdW5rdGlvbiwgZGllIHR5cGVvZiBlcnNldHp0IHVuZCBlcmfDpG56dFxuLy8gdHlwZW9mIGdpYnQgYmVpIGlucHV0LUZlbGRlcm4gaW1tZXIgU3RyaW5nIHp1csO8Y2shXG53aW5kb3cuYWRiLm15VHlwZU9mID0gZnVuY3Rpb24od2VydCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmICh0eXBlb2Ygd2VydCA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRyZXR1cm4gXCJib29sZWFuXCI7XG5cdH0gZWxzZSBpZiAocGFyc2VJbnQod2VydCkgJiYgcGFyc2VGbG9hdCh3ZXJ0KSAmJiBwYXJzZUludCh3ZXJ0KSAhPSBwYXJzZUZsb2F0KHdlcnQpICYmIHBhcnNlSW50KHdlcnQpID09IHdlcnQpIHtcblx0XHQvLyBlcyBpc3QgZWluZSBGbG9hdFxuXHRcdHJldHVybiBcImZsb2F0XCI7XG5cdC8vIHZlcmhpbmRlcm4sIGRhc3MgZsO8aHJlbmRlIE51bGxlbiBhYmdlc2Nobml0dGVuIHdlcmRlblxuXHR9IGVsc2UgaWYgKHBhcnNlSW50KHdlcnQpID09IHdlcnQgJiYgd2VydC50b1N0cmluZygpLmxlbmd0aCA9PT0gTWF0aC5jZWlsKHBhcnNlSW50KHdlcnQpLzEwKSkge1xuXHRcdC8vIGVzIGlzdCBlaW5lIEludGVnZXJcblx0XHRyZXR1cm4gXCJpbnRlZ2VyXCI7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gYWxzIFN0cmluZyBiZWhhbmRlbG5cblx0XHRyZXR1cm4gXCJzdHJpbmdcIjtcblx0fVxufTtcblxud2luZG93LmFkYi5iZWFyYmVpdGVMclRheG9ub21pZSA9IGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdC8vIEJlbnV0emVyIG11c3MgYW5tZWxkZW5cblx0aWYgKCF3aW5kb3cuYWRiLnByw7xmZUFubWVsZHVuZyhcImFydFwiKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIEVpbnN0ZWxsdW5nIG1lcmtlbiwgZGFtaXQgYXVjaCBuYWNoIERhdGVuc2F0endlY2hzZWwgZGllIEJlYXJiZWl0YmFya2VpdCBibGVpYnRcblx0bG9jYWxTdG9yYWdlLmxyX2JlYXJiID0gdHJ1ZTtcblxuXHQvLyBBbm1lbGR1bmc6IHplaWdlbiwgYWJlciBnZXNjaGxvc3NlblxuXHQkKFwiI2FydF9hbm1lbGRlbl9jb2xsYXBzZVwiKS5jb2xsYXBzZSgnaGlkZScpO1xuXHQkKFwiI2FydF9hbm1lbGRlblwiKS5zaG93KCk7XG5cblx0Ly8gYWxsZSBGZWxkZXIgc2NocmVpYmJhciBzZXR6ZW5cblx0JChcIi5MZWJlbnNyw6R1bWUuVGF4b25vbWllXCIpLmZpbmQoXCIuY29udHJvbHNcIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHQvLyBlaW5pZ2UgRmVsZGVyIG5pY2h0IGJlYXJiZWl0ZW5cblx0XHRpZiAoJCh0aGlzKS5hdHRyKCdpZCcpICE9PSBcIkdVSURcIiAmJiAkKHRoaXMpLmF0dHIoJ2lkJykgIT09IFwiUGFyZW50XCIgJiYgJCh0aGlzKS5hdHRyKCdpZCcpICE9PSBcIlRheG9ub21pZVwiICYmICQodGhpcykuYXR0cignaWQnKSAhPT0gXCJIaWVyYXJjaGllXCIpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdyZWFkb25seScsIGZhbHNlKTtcblx0XHRcdGlmIChwYXJlbnQuYXR0cignaHJlZicpKSB7XG5cdFx0XHRcdHBhcmVudC5hdHRyKCdocmVmJywgJyMnKTtcblx0XHRcdFx0Ly8gU3RhbmRhcmR2ZXJoYWx0ZW4gYmVpbSBLbGlja2VuIHZvbiBMaW5rcyB2ZXJoaW5kZXJuXG5cdFx0XHRcdHBhcmVudC5hdHRyKCdvbmNsaWNrJywgJ3JldHVybiBmYWxzZTsnKTtcblx0XHRcdFx0Ly8gTWF1c3BvaW50ZXIgbmljaHQgbWVociBhbHMgRmluZ2VyXG5cdFx0XHRcdHRoaXMuc3R5bGUuY3Vyc29yID0gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTY2hyZWliYmFya2VpdCBpbiBkZW4gU3ltYm9sZW4gYW56ZWlnZW5cblx0JCgnLmxyX2JlYXJiJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdCQoXCIubHJfYmVhcmJfYmVhcmJcIikuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG59O1xuXG53aW5kb3cuYWRiLnNjaMO8dHplTHJUYXhvbm9taWUgPSBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHQvLyBhbGxlIEZlbGRlciBzY2hyZWliYmFyIHNldHplblxuXHQkKFwiLkxlYmVuc3LDpHVtZS5UYXhvbm9taWUgLmNvbnRyb2xzXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXHRcdCQodGhpcykuYXR0cigncmVhZG9ubHknLCB0cnVlKTtcblx0XHRpZiAocGFyZW50LmF0dHIoJ2hyZWYnKSkge1xuXHRcdFx0dmFyIGZlbGRXZXJ0ID0gJCh0aGlzKS52YWwoKTtcblx0XHRcdGlmICh0eXBlb2YgZmVsZFdlcnQgPT09IFwic3RyaW5nXCIgJiYgZmVsZFdlcnQuc2xpY2UoMCwgNykgPT09IFwiLy9cIikge1xuXHRcdFx0XHRwYXJlbnQuYXR0cignaHJlZicsIGZlbGRXZXJ0KTtcblx0XHRcdFx0Ly8gZmFsbHMgb25jbGljayBiZXN0ZWh0LCBlbnRmZXJuZW5cblx0XHRcdFx0cGFyZW50LnJlbW92ZUF0dHIoXCJvbmNsaWNrXCIpO1xuXHRcdFx0XHQvLyBNYXVzcG9pbnRlciBuaWNodCBtZWhyIGFscyBGaW5nZXJcblx0XHRcdFx0dGhpcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0JCgnLmxyX2JlYXJiJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdCQoXCIubHJfYmVhcmJfYmVhcmJcIikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdCQoXCIjYXJ0X2FubWVsZGVuXCIpLmhpZGUoKTtcbn07XG5cbi8vIGFrdHVhbGlzaWVydCBkaWUgSGllcmFyY2hpZSBlaW5lcyBBcnJheXMgdm9uIE9iamVrdGVuIChpbiBkaWVzZXIgRm9ybTogTGViZW5zcsOkdW1lbiwgc2llaGUgd2llIGRlciBOYW1lIGRlciBwYXJlbnQtb2JqZWt0ZSBlcnN0ZWxsdCB3aXJkKVxuLy8gZGVyIEFycmF5IGthbm4gZGFzIFJlc3VsdGF0IGVpbmVyIEFiZnJhZ2UgYXVzIGRlciBEQiBzZWluIChvYmplY3RbaV0gPSBkYXJhLnJvd3NbaV0uZG9jKVxuLy8gb2RlciBhdXMgZGVtIEltcG9ydCBlaW5lciBUYXhvbm9taWUgc3RhbW1lblxuLy8gZGllc2UgRnVua3Rpb24gd2lyZCBiZW7DtnRpZ3QsIHdlbm4gZWluZSBuZXVlIFRheG9ub21pZSBpbXBvcnRpZXJ0IHdpcmRcbi8vIE1vbWVudGFuIG5pY2h0IHZlcndlbmRldFxud2luZG93LmFkYi5ha3R1YWxpc2llcmVIaWVyYXJjaGllRWluZXJMclRheG9ub21pZSA9IGZ1bmN0aW9uKG9iamVjdF9hcnJheSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBvYmplY3QsXG5cdFx0aGllcmFyY2hpZSxcblx0XHRwYXJlbnQ7XG4gICAgXy5lYWNoKG9iamVjdF9hcnJheSwgZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGhpZXJhcmNoaWUgPSBbXTtcbiAgICAgICAgcGFyZW50ID0gb2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLlBhcmVudDtcbiAgICAgICAgLy8gYWxzIFN0YXJ0IHNpY2ggc2VsYmVuIHp1ciBIaWVyYXJjaGllIGhpbnp1ZsO8Z2VuXG4gICAgICAgIGhpZXJhcmNoaWUucHVzaCh3aW5kb3cuYWRiLmVyc3RlbGxlSGllcmFyY2hpZW9iamVrdEF1c09iamVrdChvYmplY3QpKTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgb2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkhpZXJhcmNoaWUgPSB3aW5kb3cuYWRiLmVyZ8OkbnplUGFyZW50WnVMckhpZXJhcmNoaWUob2JqZWN0X2FycmF5LCBvYmplY3QuX2lkLCBoaWVyYXJjaGllKTtcbiAgICAgICAgICAgICRkYi5zYXZlRG9jKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8vIGFrdHVhbGlzaWVydCBkaWUgSGllcmFyY2hpZSBlaW5lcyBPYmpla3RzIChpbiBkaWVzZXIgRm9ybTogTGViZW5zcmF1bSlcbi8vIGlzdCBha3R1YWxpc2llcmVIaWVyYXJjaGllZmVsZCB0cnVlLCB3aXJkIGRhcyBGZWxkIGluIGRlciBVSSBha3R1YWxpc2llcnRcbi8vIGRpZXNlIEZ1bmt0aW9uIHdpcmQgYmVuw7Z0aWd0LCB3ZW5uIGVpbiBuZXVlciBMUiBlcnN0ZWxsdCB3aXJkXG4vLyBMUiBrYW5uIG1pdGdlZ2ViZW4gd2VyZGVuLCBtdXNzIGFiZXIgbmljaHRcbi8vIHdpcmQgbWl0Z2VnZWJlbiwgd2VubiBhbiBkZW4gYmV0cmVmZmVuZGVuIGxyIG5pY2h0cyDDpG5kZXJ0IHVuZCBuaWNodCBqZWRlcyBtYWwgZGllIExSIGF1cyBkZXIgREIgbmV1IGFiZ2VydWZlbiB3ZXJkZW4gc29sbGVuXG4vLyBtYW5jaG1hbCBpc3QgZXMgYWJlciBuw7Z0aWcsIGRpZSBMUiBuZXUgenUgaG9sZW4sIHdlbm4gZGF6d2lzY2hlbiBhbiBMUiBnZcOkbmRlcnQgd2lyZCFcbndpbmRvdy5hZGIuYWt0dWFsaXNpZXJlSGllcmFyY2hpZUVpbmVzTmV1ZW5MciA9IGZ1bmN0aW9uKGxyLCBvYmplY3QsIGFrdHVhbGlzaWVyZV9oaWVyYXJjaGllZmVsZCkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmIChscikge1xuXHRcdHdpbmRvdy5hZGIuYWt0dWFsaXNpZXJlSGllcmFyY2hpZUVpbmVzTmV1ZW5Mcl8yKGxyLCBvYmplY3QsIGFrdHVhbGlzaWVyZV9oaWVyYXJjaGllZmVsZCk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyICRkYiA9ICQuY291Y2guZGIoXCJhcnRlbmRiXCIpO1xuXHRcdCRkYi52aWV3KCdhcnRlbmRiL2xyP2luY2x1ZGVfZG9jcz10cnVlJywge1xuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHR3aW5kb3cuYWRiLmFrdHVhbGlzaWVyZUhpZXJhcmNoaWVFaW5lc05ldWVuTHJfMihkYXRhLCBvYmplY3QsIGFrdHVhbGlzaWVyZV9oaWVyYXJjaGllZmVsZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5cbndpbmRvdy5hZGIuYWt0dWFsaXNpZXJlSGllcmFyY2hpZUVpbmVzTmV1ZW5Mcl8yID0gZnVuY3Rpb24oTFIsIG9iamVjdCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBvYmplY3RfYXJyYXksXG5cdFx0aGllcmFyY2hpZSA9IFtdLFxuXHRcdHBhcmVudF9vYmplY3QsXG5cdFx0ZXJzdGVsbGVCYXVtID0gcmVxdWlyZSgnLi9tb2R1bGVzL2Vyc3RlbGxlQmF1bScpO1xuXHRvYmplY3RfYXJyYXkgPSBfLm1hcChMUi5yb3dzLCBmdW5jdGlvbihyb3cpIHtcblx0XHRyZXR1cm4gcm93LmRvYztcblx0fSk7XG5cdGlmICghb2JqZWN0LlRheG9ub21pZSkge1xuXHRcdG9iamVjdC5UYXhvbm9taWUgPSB7fTtcblx0fVxuXHRpZiAoIW9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbikge1xuXHRcdG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbiA9IHt9O1xuXHR9XG5cdHBhcmVudF9vYmplY3QgPSBfLmZpbmQob2JqZWN0X2FycmF5LCBmdW5jdGlvbihvYmopIHtcblx0XHRyZXR1cm4gb2JqLl9pZCA9PT0gb2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLlBhcmVudC5HVUlEO1xuXHR9KTtcblx0Ly8gb2JqZWN0Lk5hbWUgc2V0emVuXG5cdG9iamVjdC5UYXhvbm9taWUuTmFtZSA9IHBhcmVudF9vYmplY3QuVGF4b25vbWllLk5hbWU7XG5cdC8vIG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5UYXhvbm9taWUgc2V0emVuXG5cdG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5UYXhvbm9taWUgPSBwYXJlbnRfb2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLlRheG9ub21pZTtcblx0Ly8gYWxzIFN0YXJ0IHNpY2ggc2VsYmVuIHp1ciBIaWVyYXJjaGllIGhpbnp1ZsO8Z2VuXG5cdGhpZXJhcmNoaWUucHVzaCh3aW5kb3cuYWRiLmVyc3RlbGxlSGllcmFyY2hpZW9iamVrdEF1c09iamVrdChvYmplY3QpKTtcblx0b2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkhpZXJhcmNoaWUgPSB3aW5kb3cuYWRiLmVyZ8OkbnplUGFyZW50WnVMckhpZXJhcmNoaWUob2JqZWN0X2FycmF5LCBvYmplY3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uUGFyZW50LkdVSUQsIGhpZXJhcmNoaWUpO1xuXHQvLyBzYXZlIG9obmUgb3BlbjogX3JldiB3dXJkZSB6dXZvciDDvGJlcm5vbW1lblxuXHQkZGIuc2F2ZURvYyhvYmplY3QsIHtcblx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdCQud2hlbihlcnN0ZWxsZUJhdW0oKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93LmFkYi7DtmZmbmVCYXVtWnVJZChvYmplY3QuX2lkKTtcblx0XHRcdFx0JCgnI2xyX3BhcmVudF93YWVobGVuJykubW9kYWwoJ2hpZGUnKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcIiNtZWxkdW5nX2luZGl2aWR1ZWxsX2xhYmVsXCIpLmh0bWwoXCJGZWhsZXJcIik7XG5cdFx0XHQkKFwiI21lbGR1bmdfaW5kaXZpZHVlbGxfdGV4dFwiKS5odG1sKFwiRGllIEhpZXJhcmNoaWUgZGVzIExlYmVuc3JhdW1zIGtvbm50ZSBuaWNodCBlcnN0ZWxsdCB3ZXJkZW5cIik7XG5cdFx0XHQkKFwiI21lbGR1bmdfaW5kaXZpZHVlbGxfc2NobGllc3NlblwiKS5odG1sKFwic2NobGllc3NlblwiKTtcblx0XHRcdCQoJyNtZWxkdW5nX2luZGl2aWR1ZWxsJykubW9kYWwoKTtcblx0XHRcdHdpbmRvdy5hZGIuaW5pdGlpZXJlX2FydChvYmplY3QuX2lkKTtcblx0XHR9XG5cdH0pO1xufTtcblxuLy8gYWt0dWFsaXNpZXJ0IGRpZSBIaWVyYXJjaGllIGVpbmVzIE9iamVrdHMgKGluIGRpZXNlciBGb3JtOiBMZWJlbnNyYXVtKVxuLy8gdW5kIGF1Y2ggZGVuIHBhcmVudFxuLy8gcHLDvGZ0LCBvYiBkaWVzZXMgT2JqZWt0IGNoaWxkcmVuIGhhdFxuLy8gd2VubiBqYSwgd2lyZCBkZXJlbiBIaWVyYXJjaGllIGF1Y2ggYWt0dWFsaXNpZXJ0XG4vLyBpc3QgYWt0dWFsaXNpZXJlSGllcmFyY2hpZWZlbGQgdHJ1ZSwgd2lyZCBkYXMgRmVsZCBpbiBkZXIgVUkgYWt0dWFsaXNpZXJ0XG4vLyB3aXJkIGRhcyBFcmdlYm5pcyBkZXIgREItQWJmcmFnZSBtaXRnZWdlYmVuLCB3aXJkIGRpZSBBYmZyYWdlIG5pY2h0IHdpZWRlcmhvbHRcbi8vIGRpZXNlIEZ1bmt0aW9uIHdpcmQgYmVuw7Z0aWd0LCB3ZW5uIE5hbWVuIG9kZXIgTGFiZWwgZWluZXMgYmVzdGVoZW5kZW4gTFIgdmVyw6RuZGVydCB3aXJkXG53aW5kb3cuYWRiLmFrdHVhbGlzaWVyZUhpZXJhcmNoaWVFaW5lc0xySW5rbHVzaXZlU2VpbmVyQ2hpbGRyZW4gPSBmdW5jdGlvbihsciwgb2JqZWN0LCBha3R1YWxpc2llcmVIaWVyYXJjaGllZmVsZCwgZWluaGVpdF9pc3RfdGF4b25vbWllbmFtZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdGlmIChscikge1xuXHRcdHdpbmRvdy5hZGIuYWt0dWFsaXNpZXJlSGllcmFyY2hpZUVpbmVzTHJJbmtsdXNpdmVTZWluZXJDaGlsZHJlbl8yKGxyLCBvYmplY3QsIGFrdHVhbGlzaWVyZUhpZXJhcmNoaWVmZWxkLCBlaW5oZWl0X2lzdF90YXhvbm9taWVuYW1lKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdFx0JGRiLnZpZXcoJ2FydGVuZGIvbHI/aW5jbHVkZV9kb2NzPXRydWUnLCB7XG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihscikge1xuXHRcdFx0XHR3aW5kb3cuYWRiLmFrdHVhbGlzaWVyZUhpZXJhcmNoaWVFaW5lc0xySW5rbHVzaXZlU2VpbmVyQ2hpbGRyZW5fMihsciwgb2JqZWN0LCBha3R1YWxpc2llcmVIaWVyYXJjaGllZmVsZCwgZWluaGVpdF9pc3RfdGF4b25vbWllbmFtZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5cbndpbmRvdy5hZGIuYWt0dWFsaXNpZXJlSGllcmFyY2hpZUVpbmVzTHJJbmtsdXNpdmVTZWluZXJDaGlsZHJlbl8yID0gZnVuY3Rpb24obHIsIG9iamVrdCwgYWt0dWFsaXNpZXJlSGllcmFyY2hpZWZlbGQsIGVpbmhlaXRfaXN0X3RheG9ub21pZW5hbWUpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaGllcmFyY2hpZSA9IFtdLFxuXHRcdHBhcmVudCA9IG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5QYXJlbnQsXG5cdFx0b2JqZWN0X2FycmF5ID0gXy5tYXAobHIucm93cywgZnVuY3Rpb24ocm93KSB7XG5cdFx0XHRyZXR1cm4gcm93LmRvYztcblx0XHR9KTtcblx0aWYgKCFvYmpla3QuVGF4b25vbWllKSB7XG5cdFx0b2JqZWt0LlRheG9ub21pZSA9IHt9O1xuXHR9XG5cdGlmICghb2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuKSB7XG5cdFx0b2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuID0ge307XG5cdH1cblx0Ly8gYWxzIFN0YXJ0IHNpY2ggc2VsYmVyIHp1ciBIaWVyYXJjaGllIGhpbnp1ZsO8Z2VuXG5cdGhpZXJhcmNoaWUucHVzaCh3aW5kb3cuYWRiLmVyc3RlbGxlSGllcmFyY2hpZW9iamVrdEF1c09iamVrdChvYmpla3QpKTtcblx0aWYgKHBhcmVudC5HVUlEICE9PSBvYmpla3QuX2lkKSB7XG5cdFx0b2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkhpZXJhcmNoaWUgPSB3aW5kb3cuYWRiLmVyZ8OkbnplUGFyZW50WnVMckhpZXJhcmNoaWUob2JqZWN0X2FycmF5LCBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uUGFyZW50LkdVSUQsIGhpZXJhcmNoaWUpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGFoYSwgZGFzIGlzdCBkaWUgV3VyemVsIGRlcyBCYXVtc1xuXHRcdG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5IaWVyYXJjaGllID0gaGllcmFyY2hpZTtcblx0fVxuXHRpZiAoYWt0dWFsaXNpZXJlSGllcmFyY2hpZWZlbGQpIHtcblx0XHQkKFwiI0hpZXJhcmNoaWVcIikudmFsKHdpbmRvdy5hZGIuZXJzdGVsbGVIaWVyYXJjaGllRsO8ckZlbGRBdXNIaWVyYXJjaGllb2JqZWt0ZUFycmF5KG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5IaWVyYXJjaGllKSk7XG5cdH1cblx0Ly8gamV0enQgZGVuIHBhcmVudCBha3R1YWxpc2llcmVuXG5cdGlmIChvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uSGllcmFyY2hpZS5sZW5ndGggPiAxKSB7XG5cdFx0Ly8gZXMgZ2lidCBow7ZoZXJlIEViZW5lblxuXHRcdC8vIGRhcyB2b3JsZXR6dGUgSGllcmFyY2hpZW9iamVrdCB3w6RobGVuLiBkYXMgaXN0IGxlbmd0aCAtMiwgd2VpbCBsZW5ndGggYmVpIDEgYmVnaW5udCwgZGllIE9iamVrdGUgYWJlciB2b24gMCBhbiBudW1tZXJpZXJ0IHdlcmRlblxuXHRcdG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5QYXJlbnQgPSBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uSGllcmFyY2hpZVtvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uSGllcmFyY2hpZS5sZW5ndGgtMl07XG5cdH0gZWxzZSBpZiAob2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLkhpZXJhcmNoaWUubGVuZ3RoID09PSAxKSB7XG5cdFx0Ly8gZGFzIGlzdCBkaWUgb2JlcnN0ZSBFYmVuZVxuXHRcdG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5QYXJlbnQgPSBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uSGllcmFyY2hpZVswXTtcblx0fVxuXHRpZiAoZWluaGVpdF9pc3RfdGF4b25vbWllbmFtZSkge1xuXHRcdC8vIEVpbmhlaXQgw6RuZGVydCB1bmQgVGF4b25vbWllbmFtZSBtdXNzIGF1Y2ggYW5nZXBhc3N0IHdlcmRlblxuXHRcdG9iamVrdC5UYXhvbm9taWUuTmFtZSA9IGVpbmhlaXRfaXN0X3RheG9ub21pZW5hbWU7XG5cdFx0b2JqZWt0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLlRheG9ub21pZSA9IGVpbmhlaXRfaXN0X3RheG9ub21pZW5hbWU7XG5cdH1cblx0JGRiLnNhdmVEb2Mob2JqZWt0LCB7XG5cdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9jO1xuXHRcdFx0Ly8ga29udHJvbGxpZXJlbiwgb2IgZGFzIE9iamVrdCBjaGlsZHJlbiBoYXQuIFdlbm4gamEsIGRpZXNlIGFrdHVhbGlzaWVyZW5cbiAgICAgICAgICAgIF8uZWFjaChsci5yb3dzLCBmdW5jdGlvbihscl9yb3cpIHtcbiAgICAgICAgICAgICAgICBkb2MgPSBscl9yb3cuZG9jO1xuICAgICAgICAgICAgICAgIGlmIChkb2MuVGF4b25vbWllICYmIGRvYy5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbiAmJiBkb2MuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uUGFyZW50ICYmIGRvYy5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5QYXJlbnQuR1VJRCAmJiBkb2MuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uUGFyZW50LkdVSUQgPT09IG9iamVrdC5faWQgJiYgZG9jLl9pZCAhPT0gb2JqZWt0Ll9pZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkYXMgaXN0IGVpbiBjaGlsZFxuICAgICAgICAgICAgICAgICAgICAvLyBhdWNoIGFrdHVhbGlzaWVyZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gbHIgbWl0Z2ViZW4sIGRhbWl0IGRpZSBBYmZyYWdlIG5pY2h0IHdpZWRlcmhvbHQgd2VyZGVuIG11c3NcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkYi5ha3R1YWxpc2llcmVIaWVyYXJjaGllRWluZXNMcklua2x1c2l2ZVNlaW5lckNoaWxkcmVuXzIobHIsIGRvYywgZmFsc2UsIGVpbmhlaXRfaXN0X3RheG9ub21pZW5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyBCYXV0IGRlbiBIaWVyYXJjaGllcGZhZCBmw7xyIGVpbmVuIExlYmVuc3JhdW0gYXVmXG4vLyBkYXMgZXJzdGUgRWxlbWVudCAtIGRlciBMZWJlbnNyYXVtIHNlbGJzdCAtIHdpcmQgbWl0IGRlciBWYXJpYWJsZSBcIkhpZXJhcmNoaWVcIiDDvGJlcmdlYmVuXG4vLyBydWZ0IHNpY2ggc2VsYnN0IHJla3Vyc2l2IGF1ZiwgYmlzIGRhcyBvYmVyc3RlIEhpZXJhcmNoaWVlbGVtZW50IGVycmVpY2h0IGlzdFxud2luZG93LmFkYi5lcmfDpG56ZVBhcmVudFp1THJIaWVyYXJjaGllID0gZnVuY3Rpb24ob2JqZWt0X2FycmF5LCBwYXJlbnRHVUlELCBIaWVyYXJjaGllKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHBhcmVudF9vYmpla3QsXG5cdFx0aGllcmFyY2hpZV9lcmfDpG56dDtcbiAgICBfLmVhY2gob2JqZWt0X2FycmF5LCBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5faWQgPT09IHBhcmVudEdVSUQpIHtcbiAgICAgICAgICAgIHBhcmVudF9vYmpla3QgPSB3aW5kb3cuYWRiLmVyc3RlbGxlSGllcmFyY2hpZW9iamVrdEF1c09iamVrdChvYmplY3QpO1xuICAgICAgICAgICAgSGllcmFyY2hpZS5wdXNoKHBhcmVudF9vYmpla3QpO1xuICAgICAgICAgICAgaWYgKG9iamVjdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5QYXJlbnQuR1VJRCAhPT0gb2JqZWN0Ll9pZCkge1xuICAgICAgICAgICAgICAgIC8vIGRpZSBIaWVyYXJjaGllIGlzdCBub2NoIG5pY2h0IHp1IEVuZGUgLSB3ZWl0ZXJtYWNoZW5cbiAgICAgICAgICAgICAgICBoaWVyYXJjaGllX2VyZ8Okbnp0ID0gd2luZG93LmFkYi5lcmfDpG56ZVBhcmVudFp1THJIaWVyYXJjaGllKG9iamVrdF9hcnJheSwgb2JqZWN0LlRheG9ub21pZS5FaWdlbnNjaGFmdGVuLlBhcmVudC5HVUlELCBIaWVyYXJjaGllKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gSGllcmFyY2hpZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gamV0enQgaXN0IGRpZSBIaWVyYXJjaGllIHZvbGxzdMOkbmRpZ1xuICAgICAgICAgICAgICAgIC8vIHNpZSBpc3QgYWJlciB2ZXJrZWhydCAtIHVta2VocmVuXG4gICAgICAgICAgICAgICAgcmV0dXJuIEhpZXJhcmNoaWUucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG53aW5kb3cuYWRiLmVyc3RlbGxlSGllcmFyY2hpZW9iamVrdEF1c09iamVrdCA9IGZ1bmN0aW9uKG9iamVrdCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBoaWVyYXJjaGllb2JqZWt0ID0ge307XG5cdGhpZXJhcmNoaWVvYmpla3QuTmFtZSA9IHdpbmRvdy5hZGIuZXJzdGVsbGVMckxhYmVsTmFtZUF1c09iamVrdChvYmpla3QpO1xuXHRoaWVyYXJjaGllb2JqZWt0LkdVSUQgPSBvYmpla3QuX2lkO1xuXHRyZXR1cm4gaGllcmFyY2hpZW9iamVrdDtcbn07XG5cbndpbmRvdy5hZGIuZXJzdGVsbGVMckxhYmVsTmFtZUF1c09iamVrdCA9IGZ1bmN0aW9uKG9iamVrdCkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBsYWJlbCA9IG9iamVrdC5UYXhvbm9taWUuRWlnZW5zY2hhZnRlbi5MYWJlbCB8fCBcIlwiLFxuXHRcdGVpbmhlaXQgPSBvYmpla3QuVGF4b25vbWllLkVpZ2Vuc2NoYWZ0ZW4uRWluaGVpdCB8fCBcIlwiO1xuXHRyZXR1cm4gd2luZG93LmFkYi5lcnN0ZWxsZUxyTGFiZWxOYW1lKGxhYmVsLCBlaW5oZWl0KTtcbn07XG5cbndpbmRvdy5hZGIuZXJzdGVsbGVMckxhYmVsTmFtZSA9IGZ1bmN0aW9uKGxhYmVsLCBlaW5oZWl0KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0aWYgKGxhYmVsICYmIGVpbmhlaXQpIHtcblx0XHRyZXR1cm4gbGFiZWwgKyBcIjogXCIgKyBlaW5oZWl0O1xuXHR9IGVsc2UgaWYgKGVpbmhlaXQpIHtcblx0XHRyZXR1cm4gZWluaGVpdDtcblx0fSBlbHNlIHtcblx0XHQvLyBhaGEsIGVpbiBuZXVlcyBPYmpla3QsIG5vY2ggb2huZSBMYWJlbCB1bmQgRWluaGVpdFxuXHRcdHJldHVybiBcInVuYmVuYW5udGUgRWluaGVpdFwiO1xuXHR9XG59O1xuXG4vLyBsw7ZzY2h0IERhdGVuc8OkdHplIGluIE1hc3NlblxuLy8gbmltbXQgZWluZW4gQXJyYXkgdm9uIE9iamVrdGVuIGVudGdlZ2VuXG4vLyBiYXV0IGRhcmF1cyBlaW5lbiBuZXVlbiBhcnJheSBhdWYsIGluIGRlbSBkaWUgT2JqZWt0ZSBudXIgbm9jaCBkaWUgYmVuw7Z0aWd0ZW4gSW5mb3JtYXRpb25lbiBoYWJlblxuLy8gYWt0dWFsaXNpZXJ0IGRpZSBPYmpla3RlIG1pdCBlaW5lciBlaW56aWdlbiBPcGVyYXRpb25cbndpbmRvdy5hZGIubMO2c2NoZU1hc3Nlbk1pdE9iamVrdEFycmF5ID0gZnVuY3Rpb24ob2JqZWN0X2FycmF5KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIG9iamVrdGVfbWl0X29iamVrdGUsXG5cdFx0b2JqZWt0ZSA9IFtdLFxuXHRcdG5ld19vYmpla3Q7XG4gICAgXy5lYWNoKG9iamVjdF9hcnJheSwgZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIG5ld19vYmpla3QgPSB7fTtcbiAgICAgICAgbmV3X29iamVrdC5faWQgPSBvYmplY3QuX2lkO1xuICAgICAgICBuZXdfb2JqZWt0Ll9yZXYgPSBvYmplY3QuX3JldjtcbiAgICAgICAgbmV3X29iamVrdC5fZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIG9iamVrdGUucHVzaChuZXdfb2JqZWt0KTtcbiAgICB9KTtcblx0b2JqZWt0ZV9taXRfb2JqZWt0ZSA9IHt9O1xuXHRvYmpla3RlX21pdF9vYmpla3RlLmRvY3MgPSBvYmpla3RlO1xuXHQkLmFqYXgoe1xuXHRcdHR5cGU6IFwiUE9TVFwiLFxuXHRcdHVybDogXCIuLi8uLi9fYnVsa19kb2NzXCIsXG5cdFx0Y29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLCBcblx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShvYmpla3RlX21pdF9vYmpla3RlKVxuXHR9KTtcbn07XG5cbi8vIGVyaMOkbHQgZWluZW4gZmlsdGVyd2VydFxuLy8gZGllc2VyIGthbm4genV2b3JkZXJzdCBlaW5lbiBWZXJnbGVpY2hzb3BlcmF0b3IgZW50aGFsdGVuIG9kZXIgYXVjaCBuaWNodFxuLy8gcmV0b3VybmllcnQgZWluZW4gQXJyYXkgbWl0IDAgVmVyZ2xlaWNoc29wZXJhdG9yIHVuZCAxIGZpbHRlcndlcnRcbndpbmRvdy5hZGIuZXJtaXR0bGVWZXJnbGVpY2hzb3BlcmF0b3IgPSBmdW5jdGlvbihmaWx0ZXJ3ZXJ0KSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHZlcmdsZWljaHNvcGVyYXRvcjtcblx0aWYgKGZpbHRlcndlcnQuaW5kZXhPZihcIj49XCIpID09PSAwKSB7XG5cdFx0dmVyZ2xlaWNoc29wZXJhdG9yID0gXCI+PVwiO1xuXHRcdGlmIChmaWx0ZXJ3ZXJ0LmluZGV4T2YoXCIgXCIpID09PSAyKSB7XG5cdFx0XHRmaWx0ZXJ3ZXJ0ID0gZmlsdGVyd2VydC5zbGljZSgzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmlsdGVyd2VydCA9IGZpbHRlcndlcnQuc2xpY2UoMik7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGZpbHRlcndlcnQuaW5kZXhPZihcIjw9XCIpID09PSAwKSB7XG5cdFx0dmVyZ2xlaWNoc29wZXJhdG9yID0gXCI8PVwiO1xuXHRcdGlmIChmaWx0ZXJ3ZXJ0LmluZGV4T2YoXCIgXCIpID09PSAyKSB7XG5cdFx0XHRmaWx0ZXJ3ZXJ0ID0gZmlsdGVyd2VydC5zbGljZSgzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmlsdGVyd2VydCA9IGZpbHRlcndlcnQuc2xpY2UoMik7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGZpbHRlcndlcnQuaW5kZXhPZihcIj5cIikgPT09IDApIHtcblx0XHR2ZXJnbGVpY2hzb3BlcmF0b3IgPSBcIj5cIjtcblx0XHRpZiAoZmlsdGVyd2VydC5pbmRleE9mKFwiIFwiKSA9PT0gMSkge1xuXHRcdFx0ZmlsdGVyd2VydCA9IGZpbHRlcndlcnQuc2xpY2UoMik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZpbHRlcndlcnQgPSBmaWx0ZXJ3ZXJ0LnNsaWNlKDEpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChmaWx0ZXJ3ZXJ0LmluZGV4T2YoXCI8XCIpID09PSAwKSB7XG5cdFx0dmVyZ2xlaWNoc29wZXJhdG9yID0gXCI8XCI7XG5cdFx0aWYgKGZpbHRlcndlcnQuaW5kZXhPZihcIiBcIikgPT09IDEpIHtcblx0XHRcdGZpbHRlcndlcnQgPSBmaWx0ZXJ3ZXJ0LnNsaWNlKDIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmaWx0ZXJ3ZXJ0ID0gZmlsdGVyd2VydC5zbGljZSgxKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoZmlsdGVyd2VydC5pbmRleE9mKFwiPVwiKSA9PT0gMCkge1xuXHRcdC8vIGFiZmFuZ2VuLCBmYWxscyBqZW1hbmQgXCI9XCIgZWluZ2lidFxuXHRcdHZlcmdsZWljaHNvcGVyYXRvciA9IFwiPVwiO1xuXHRcdGlmIChmaWx0ZXJ3ZXJ0LmluZGV4T2YoXCIgXCIpID09PSAxKSB7XG5cdFx0XHRmaWx0ZXJ3ZXJ0ID0gZmlsdGVyd2VydC5zbGljZSgyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZmlsdGVyd2VydCA9IGZpbHRlcndlcnQuc2xpY2UoMSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHZlcmdsZWljaHNvcGVyYXRvciA9IFwia2VpblwiO1xuXHR9XG5cdHJldHVybiBbdmVyZ2xlaWNoc29wZXJhdG9yLCBmaWx0ZXJ3ZXJ0XTtcbn07XG5cbndpbmRvdy5hZGIuZXJzZXR6ZVVuZ8O8bHRpZ2VaZWljaGVuSW5JZE5hbWVuID0gZnVuY3Rpb24oaWRuYW1lKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0cmV0dXJuIGlkbmFtZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS5yZXBsYWNlKC8gL2csJycpLnJlcGxhY2UoLywvZywnJykucmVwbGFjZSgvXFwuL2csJycpLnJlcGxhY2UoLzovZywnJykucmVwbGFjZSgvLS9nLCcnKS5yZXBsYWNlKC9cXC8vZywnJykucmVwbGFjZSgvXFwoL2csJycpLnJlcGxhY2UoL1xcKS9nLCcnKS5yZXBsYWNlKC9cXCYvZywnJyk7XG59O1xuXG4vLyBrb250cm9sbGllcnQgZGVuIHZlcndlbmRldGVuIEJyb3dzZXJcbi8vIFF1ZWxsZTogLy9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTM0NzgzMDMvY29ycmVjdC13YXktdG8tdXNlLW1vZGVybml6ci10by1kZXRlY3QtaWVcbndpbmRvdy5hZGIuYnJvd3NlckRldGVjdCA9IFxue1xuXHRpbml0OiBmdW5jdGlvbigpIFxuXHR7XG5cdFx0dGhpcy5icm93c2VyID0gdGhpcy5zZWFyY2hTdHJpbmcodGhpcy5kYXRhQnJvd3NlcikgfHwgXCJPdGhlclwiO1xuXHRcdHRoaXMudmVyc2lvbiA9IHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50KSB8fFx0ICAgdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCBcIlVua25vd25cIjtcblx0fSxcblxuXHRzZWFyY2hTdHJpbmc6IGZ1bmN0aW9uKGRhdGEpIFxuXHR7XG5cdFx0Zm9yICh2YXIgaT0wIDsgaSA8IGRhdGEubGVuZ3RoIDsgaSsrKSAgIFxuXHRcdHtcblx0XHRcdHZhciBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XG5cdFx0XHR0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnN1YlN0cmluZztcblxuXHRcdFx0aWYgKGRhdGFTdHJpbmcuaW5kZXhPZihkYXRhW2ldLnN1YlN0cmluZykgIT0gLTEpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBkYXRhW2ldLmlkZW50aXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRzZWFyY2hWZXJzaW9uOiBmdW5jdGlvbihkYXRhU3RyaW5nKSBcblx0e1xuXHRcdHZhciBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpO1xuXHRcdGlmIChpbmRleCA9PSAtMSkgcmV0dXJuO1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKGluZGV4K3RoaXMudmVyc2lvblNlYXJjaFN0cmluZy5sZW5ndGgrMSkpO1xuXHR9LFxuXG5cdGRhdGFCcm93c2VyOiBcblx0W1xuXHRcdHsgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiQ2hyb21lXCIsICBpZGVudGl0eTogXCJDaHJvbWVcIiB9LFxuXHRcdHsgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiTVNJRVwiLFx0aWRlbnRpdHk6IFwiRXhwbG9yZXJcIiB9LFxuXHRcdHsgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiRmlyZWZveFwiLCBpZGVudGl0eTogXCJGaXJlZm94XCIgfSxcblx0XHR7IHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlNhZmFyaVwiLCAgaWRlbnRpdHk6IFwiU2FmYXJpXCIgfSxcblx0XHR7IHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk9wZXJhXCIsICAgaWRlbnRpdHk6IFwiT3BlcmFcIiB9XG4gICAgXVxuXG59O1xuXG4vKlxuKiBCb290c3RyYXAgZmlsZSB1cGxvYWRlclxuKiBRdWVsbGU6IC8vamFzbnkuZ2l0aHViLmlvL2Jvb3RzdHJhcC9qYXZhc2NyaXB0Lmh0bWwjZmlsZXVwbG9hZFxuKi9cbi8qKlxuKiBCb290c3RyYXAuanMgYnkgQG1kbyBhbmQgQGZhdCwgZXh0ZW5kZWQgYnkgQEFybm9sZERhbmllbHMuXG4qIHBsdWdpbnM6IGJvb3RzdHJhcC1maWxldXBsb2FkLmpzXG4qIENvcHlyaWdodCAyMDEyIFR3aXR0ZXIsIEluYy5cbiogLy9hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLnR4dFxuKi9cbiFmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbih0LG4pe3RoaXMuJGVsZW1lbnQ9ZSh0KSx0aGlzLnR5cGU9dGhpcy4kZWxlbWVudC5kYXRhKFwidXBsb2FkdHlwZVwiKXx8KHRoaXMuJGVsZW1lbnQuZmluZChcIi50aHVtYm5haWxcIikubGVuZ3RoPjA/XCJpbWFnZVwiOlwiZmlsZVwiKSx0aGlzLiRpbnB1dD10aGlzLiRlbGVtZW50LmZpbmQoXCI6ZmlsZVwiKTtpZih0aGlzLiRpbnB1dC5sZW5ndGg9PT0wKXJldHVybjt0aGlzLm5hbWU9dGhpcy4kaW5wdXQuYXR0cihcIm5hbWVcIil8fG4ubmFtZSx0aGlzLiRoaWRkZW49dGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPWhpZGRlbl1bbmFtZT1cIicrdGhpcy5uYW1lKydcIl0nKSx0aGlzLiRoaWRkZW4ubGVuZ3RoPT09MCYmKHRoaXMuJGhpZGRlbj1lKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIC8+JyksdGhpcy4kZWxlbWVudC5wcmVwZW5kKHRoaXMuJGhpZGRlbikpLHRoaXMuJHByZXZpZXc9dGhpcy4kZWxlbWVudC5maW5kKFwiLmZpbGV1cGxvYWQtcHJldmlld1wiKTt2YXIgcj10aGlzLiRwcmV2aWV3LmNzcyhcImhlaWdodFwiKTt0aGlzLiRwcmV2aWV3LmNzcyhcImRpc3BsYXlcIikhPVwiaW5saW5lXCImJnIhPVwiMHB4XCImJnIhPVwibm9uZVwiJiZ0aGlzLiRwcmV2aWV3LmNzcyhcImxpbmUtaGVpZ2h0XCIsciksdGhpcy5vcmlnaW5hbD17ZXhpc3RzOnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmaWxldXBsb2FkLWV4aXN0c1wiKSxwcmV2aWV3OnRoaXMuJHByZXZpZXcuaHRtbCgpLGhpZGRlblZhbDp0aGlzLiRoaWRkZW4udmFsKCl9LHRoaXMuJHJlbW92ZT10aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWRpc21pc3M9XCJmaWxldXBsb2FkXCJdJyksdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS10cmlnZ2VyPVwiZmlsZXVwbG9hZFwiXScpLm9uKFwiY2xpY2suZmlsZXVwbG9hZFwiLGUucHJveHkodGhpcy50cmlnZ2VyLHRoaXMpKSx0aGlzLmxpc3RlbigpfTt0LnByb3RvdHlwZT17bGlzdGVuOmZ1bmN0aW9uKCl7dGhpcy4kaW5wdXQub24oXCJjaGFuZ2UuZmlsZXVwbG9hZFwiLGUucHJveHkodGhpcy5jaGFuZ2UsdGhpcykpLGUodGhpcy4kaW5wdXRbMF0uZm9ybSkub24oXCJyZXNldC5maWxldXBsb2FkXCIsZS5wcm94eSh0aGlzLnJlc2V0LHRoaXMpKSx0aGlzLiRyZW1vdmUmJnRoaXMuJHJlbW92ZS5vbihcImNsaWNrLmZpbGV1cGxvYWRcIixlLnByb3h5KHRoaXMuY2xlYXIsdGhpcykpfSxjaGFuZ2U6ZnVuY3Rpb24oZSx0KXtpZih0PT09XCJjbGVhclwiKXJldHVybjt2YXIgbj1lLnRhcmdldC5maWxlcyE9PXVuZGVmaW5lZD9lLnRhcmdldC5maWxlc1swXTplLnRhcmdldC52YWx1ZT97bmFtZTplLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9eLitcXFxcLyxcIlwiKX06bnVsbDtpZighbil7dGhpcy5jbGVhcigpO3JldHVybn10aGlzLiRoaWRkZW4udmFsKFwiXCIpLHRoaXMuJGhpZGRlbi5hdHRyKFwibmFtZVwiLFwiXCIpLHRoaXMuJGlucHV0LmF0dHIoXCJuYW1lXCIsdGhpcy5uYW1lKTtpZih0aGlzLnR5cGU9PT1cImltYWdlXCImJnRoaXMuJHByZXZpZXcubGVuZ3RoPjAmJih0eXBlb2Ygbi50eXBlIT1cInVuZGVmaW5lZFwiP24udHlwZS5tYXRjaChcImltYWdlLipcIik6bi5uYW1lLm1hdGNoKC9cXC4oZ2lmfHBuZ3xqcGU/ZykkL2kpKSYmdHlwZW9mIEZpbGVSZWFkZXIhPVwidW5kZWZpbmVkXCIpe3ZhciByPW5ldyBGaWxlUmVhZGVyLGk9dGhpcy4kcHJldmlldyxzPXRoaXMuJGVsZW1lbnQ7ci5vbmxvYWQ9ZnVuY3Rpb24oZSl7aS5odG1sKCc8aW1nIHNyYz1cIicrZS50YXJnZXQucmVzdWx0KydcIiAnKyhpLmNzcyhcIm1heC1oZWlnaHRcIikhPVwibm9uZVwiPydzdHlsZT1cIm1heC1oZWlnaHQ6ICcraS5jc3MoXCJtYXgtaGVpZ2h0XCIpKyc7XCInOlwiXCIpK1wiIC8+XCIpLHMuYWRkQ2xhc3MoXCJmaWxldXBsb2FkLWV4aXN0c1wiKS5yZW1vdmVDbGFzcyhcImZpbGV1cGxvYWQtbmV3XCIpfSxyLnJlYWRBc0RhdGFVUkwobil9ZWxzZSB0aGlzLiRwcmV2aWV3LnRleHQobi5uYW1lKSx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiZmlsZXVwbG9hZC1leGlzdHNcIikucmVtb3ZlQ2xhc3MoXCJmaWxldXBsb2FkLW5ld1wiKX0sY2xlYXI6ZnVuY3Rpb24oZSl7dGhpcy4kaGlkZGVuLnZhbChcIlwiKSx0aGlzLiRoaWRkZW4uYXR0cihcIm5hbWVcIix0aGlzLm5hbWUpLHRoaXMuJGlucHV0LmF0dHIoXCJuYW1lXCIsXCJcIik7aWYobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbXNpZS9pKSl7dmFyIHQ9dGhpcy4kaW5wdXQuY2xvbmUoITApO3RoaXMuJGlucHV0LmFmdGVyKHQpLHRoaXMuJGlucHV0LnJlbW92ZSgpLHRoaXMuJGlucHV0PXR9ZWxzZSB0aGlzLiRpbnB1dC52YWwoXCJcIik7dGhpcy4kcHJldmlldy5odG1sKFwiXCIpLHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJmaWxldXBsb2FkLW5ld1wiKS5yZW1vdmVDbGFzcyhcImZpbGV1cGxvYWQtZXhpc3RzXCIpLGUmJih0aGlzLiRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIsW1wiY2xlYXJcIl0pLGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2UpfSxyZXNldDpmdW5jdGlvbihlKXt0aGlzLmNsZWFyKCksdGhpcy4kaGlkZGVuLnZhbCh0aGlzLm9yaWdpbmFsLmhpZGRlblZhbCksdGhpcy4kcHJldmlldy5odG1sKHRoaXMub3JpZ2luYWwucHJldmlldyksdGhpcy5vcmlnaW5hbC5leGlzdHM/dGhpcy4kZWxlbWVudC5hZGRDbGFzcyhcImZpbGV1cGxvYWQtZXhpc3RzXCIpLnJlbW92ZUNsYXNzKFwiZmlsZXVwbG9hZC1uZXdcIik6dGhpcy4kZWxlbWVudC5hZGRDbGFzcyhcImZpbGV1cGxvYWQtbmV3XCIpLnJlbW92ZUNsYXNzKFwiZmlsZXVwbG9hZC1leGlzdHNcIil9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dGhpcy4kaW5wdXQudHJpZ2dlcihcImNsaWNrXCIpLGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2V9fSxlLmZuLmZpbGV1cGxvYWQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciByPWUodGhpcyksaT1yLmRhdGEoXCJmaWxldXBsb2FkXCIpO2l8fHIuZGF0YShcImZpbGV1cGxvYWRcIixpPW5ldyB0KHRoaXMsbikpLHR5cGVvZiBuPT1cInN0cmluZ1wiJiZpW25dKCl9KX0sZS5mbi5maWxldXBsb2FkLkNvbnN0cnVjdG9yPXQsZShkb2N1bWVudCkub24oXCJjbGljay5maWxldXBsb2FkLmRhdGEtYXBpXCIsJ1tkYXRhLXByb3ZpZGVzPVwiZmlsZXVwbG9hZFwiXScsZnVuY3Rpb24odCl7dmFyIG49ZSh0aGlzKTtpZihuLmRhdGEoXCJmaWxldXBsb2FkXCIpKXJldHVybjtuLmZpbGV1cGxvYWQobi5kYXRhKCkpO3ZhciByPWUodC50YXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLWRpc21pc3M9XCJmaWxldXBsb2FkXCJdLFtkYXRhLXRyaWdnZXI9XCJmaWxldXBsb2FkXCJdJyk7ci5sZW5ndGg+MCYmKHIudHJpZ2dlcihcImNsaWNrLmZpbGV1cGxvYWRcIiksdC5wcmV2ZW50RGVmYXVsdCgpKX0pfSh3aW5kb3cualF1ZXJ5KTtcblxuLyohXG4gKiBBdXRvbGlua2VyLmpzXG4gKiAwLjEwLjFcbiAqXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBHcmVnb3J5IEphY29icyA8Z3JlZ0BncmVnLWphY29icy5jb20+XG4gKiBNSVQgTGljZW5zZWQuIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyZWdqYWNvYnMvQXV0b2xpbmtlci5qc1xuICovXG4hZnVuY3Rpb24oYSxiKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTphLkF1dG9saW5rZXI9YigpfSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGE9ZnVuY3Rpb24oYSl7YT1hfHx7fTtmb3IodmFyIGIgaW4gYSlhLmhhc093blByb3BlcnR5KGIpJiYodGhpc1tiXT1hW2JdKX07cmV0dXJuIGEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjphLG5ld1dpbmRvdzohMCxzdHJpcFByZWZpeDohMCx0d2l0dGVyOiEwLGVtYWlsOiEwLHVybHM6ITAsY2xhc3NOYW1lOlwiXCIsbWF0Y2hlclJlZ2V4OmZ1bmN0aW9uKCl7dmFyIGE9LyhefFteXFx3XSlAKFxcd3sxLDE1fSkvLGI9Lyg/OltcXC07OiY9XFwrXFwkLFxcd1xcLl0rQCkvLGM9Lyg/OltBLVphLXpdezMsOX06KD86XFwvXFwvKT8pLyxkPS8oPzp3d3dcXC4pLyxlPS9bQS1aYS16MC05XFwuXFwtXSpbQS1aYS16MC05XFwtXS8sZj0vXFwuKD86aW50ZXJuYXRpb25hbHxjb25zdHJ1Y3Rpb258Y29udHJhY3RvcnN8ZW50ZXJwcmlzZXN8cGhvdG9ncmFwaHl8cHJvZHVjdGlvbnN8Zm91bmRhdGlvbnxpbW1vYmlsaWVufGluZHVzdHJpZXN8bWFuYWdlbWVudHxwcm9wZXJ0aWVzfHRlY2hub2xvZ3l8Y2hyaXN0bWFzfGNvbW11bml0eXxkaXJlY3Rvcnl8ZWR1Y2F0aW9ufGVxdWlwbWVudHxpbnN0aXR1dGV8bWFya2V0aW5nfHNvbHV0aW9uc3x2YWNhdGlvbnN8YmFyZ2FpbnN8Ym91dGlxdWV8YnVpbGRlcnN8Y2F0ZXJpbmd8Y2xlYW5pbmd8Y2xvdGhpbmd8Y29tcHV0ZXJ8ZGVtb2NyYXR8ZGlhbW9uZHN8Z3JhcGhpY3N8aG9sZGluZ3N8bGlnaHRpbmd8cGFydG5lcnN8cGx1bWJpbmd8c3VwcGxpZXN8dHJhaW5pbmd8dmVudHVyZXN8YWNhZGVteXxjYXJlZXJzfGNvbXBhbnl8Y3J1aXNlc3xkb21haW5zfGV4cG9zZWR8ZmxpZ2h0c3xmbG9yaXN0fGdhbGxlcnl8Z3VpdGFyc3xob2xpZGF5fGtpdGNoZW58bmV1c3Rhcnxva2luYXdhfHJlY2lwZXN8cmVudGFsc3xyZXZpZXdzfHNoaWtzaGF8c2luZ2xlc3xzdXBwb3J0fHN5c3RlbXN8YWdlbmN5fGJlcmxpbnxjYW1lcmF8Y2VudGVyfGNvZmZlZXxjb25kb3N8ZGF0aW5nfGVzdGF0ZXxldmVudHN8ZXhwZXJ0fGZ1dGJvbHxrYXVmZW58bHV4dXJ5fG1haXNvbnxtb25hc2h8bXVzZXVtfG5hZ295YXxwaG90b3N8cmVwYWlyfHJlcG9ydHxzb2NpYWx8c3VwcGx5fHRhdHRvb3x0aWVuZGF8dHJhdmVsfHZpYWplc3x2aWxsYXN8dmlzaW9ufHZvdGluZ3x2b3lhZ2V8YWN0b3J8YnVpbGR8Y2FyZHN8Y2hlYXB8Y29kZXN8ZGFuY2V8ZW1haWx8Z2xhc3N8aG91c2V8bWFuZ298bmluamF8cGFydHN8cGhvdG98c2hvZXN8c29sYXJ8dG9kYXl8dG9reW98dG9vbHN8d2F0Y2h8d29ya3N8YWVyb3xhcnBhfGFzaWF8YmVzdHxiaWtlfGJsdWV8YnV6enxjYW1wfGNsdWJ8Y29vbHxjb29wfGZhcm18ZmlzaHxnaWZ0fGd1cnV8aW5mb3xqb2JzfGtpd2l8a3JlZHxsYW5kfGxpbW98bGlua3xtZW51fG1vYml8bW9kYXxuYW1lfHBpY3N8cGlua3xwb3N0fHFwb258cmljaHxydWhyfHNleHl8dGlwc3x2b3RlfHZvdG98d2FuZ3x3aWVufHdpa2l8em9uZXxiYXJ8YmlkfGJpenxjYWJ8Y2F0fGNlb3xjb218ZWR1fGdvdnxpbnR8a2ltfG1pbHxuZXR8b25sfG9yZ3xwcm98cHVifHJlZHx0ZWx8dW5vfHdlZHx4eHh8eHl6fGFjfGFkfGFlfGFmfGFnfGFpfGFsfGFtfGFufGFvfGFxfGFyfGFzfGF0fGF1fGF3fGF4fGF6fGJhfGJifGJkfGJlfGJmfGJnfGJofGJpfGJqfGJtfGJufGJvfGJyfGJzfGJ0fGJ2fGJ3fGJ5fGJ6fGNhfGNjfGNkfGNmfGNnfGNofGNpfGNrfGNsfGNtfGNufGNvfGNyfGN1fGN2fGN3fGN4fGN5fGN6fGRlfGRqfGRrfGRtfGRvfGR6fGVjfGVlfGVnfGVyfGVzfGV0fGV1fGZpfGZqfGZrfGZtfGZvfGZyfGdhfGdifGdkfGdlfGdmfGdnfGdofGdpfGdsfGdtfGdufGdwfGdxfGdyfGdzfGd0fGd1fGd3fGd5fGhrfGhtfGhufGhyfGh0fGh1fGlkfGllfGlsfGltfGlufGlvfGlxfGlyfGlzfGl0fGplfGptfGpvfGpwfGtlfGtnfGtofGtpfGttfGtufGtwfGtyfGt3fGt5fGt6fGxhfGxifGxjfGxpfGxrfGxyfGxzfGx0fGx1fGx2fGx5fG1hfG1jfG1kfG1lfG1nfG1ofG1rfG1sfG1tfG1ufG1vfG1wfG1xfG1yfG1zfG10fG11fG12fG13fG14fG15fG16fG5hfG5jfG5lfG5mfG5nfG5pfG5sfG5vfG5wfG5yfG51fG56fG9tfHBhfHBlfHBmfHBnfHBofHBrfHBsfHBtfHBufHByfHBzfHB0fHB3fHB5fHFhfHJlfHJvfHJzfHJ1fHJ3fHNhfHNifHNjfHNkfHNlfHNnfHNofHNpfHNqfHNrfHNsfHNtfHNufHNvfHNyfHN0fHN1fHN2fHN4fHN5fHN6fHRjfHRkfHRmfHRnfHRofHRqfHRrfHRsfHRtfHRufHRvfHRwfHRyfHR0fHR2fHR3fHR6fHVhfHVnfHVrfHVzfHV5fHV6fHZhfHZjfHZlfHZnfHZpfHZufHZ1fHdmfHdzfHllfHl0fHphfHptfHp3KVxcYi8sZz0vKD86W1xcLUEtWmEtejAtOSsmQCNcXC8lPz1+XygpfCE6LC47XSpbXFwtQS1aYS16MC05KyZAI1xcLyU9fl8oKXxdKT8vO3JldHVybiBuZXcgUmVnRXhwKFtcIihcIixhLnNvdXJjZSxcIilcIixcInxcIixcIihcIixiLnNvdXJjZSxlLnNvdXJjZSxmLnNvdXJjZSxcIilcIixcInxcIixcIihcIixcIig/OlwiLFwiKD86XCIsYy5zb3VyY2UsZS5zb3VyY2UsXCIpXCIsXCJ8XCIsXCIoPzpcIixcIiguPy8vKT9cIixkLnNvdXJjZSxlLnNvdXJjZSxcIilcIixcInxcIixcIig/OlwiLFwiKC4/Ly8pP1wiLGUuc291cmNlLGYuc291cmNlLFwiKVwiLFwiKVwiLGcuc291cmNlLFwiKVwiXS5qb2luKFwiXCIpLFwiZ1wiKX0oKSxwcm90b2NvbFJlbGF0aXZlUmVnZXg6LyguKT9cXC9cXC8vLGh0bWxSZWdleDpmdW5jdGlvbigpe3ZhciBhPS9bMC05YS16QS1aOl0rLyxiPS9bXlxcc1xcMFwiJz5cXC89XFx4MDEtXFx4MUZcXHg3Rl0rLyxjPS8oPzpcIi4qP1wifCcuKj8nfFteJ1wiPTw+YFxcc10rKS87cmV0dXJuIG5ldyBSZWdFeHAoW1wiPCgvKT9cIixcIihcIithLnNvdXJjZStcIilcIixcIig/OlwiLFwiXFxcXHMrXCIsYi5zb3VyY2UsXCIoPzpcXFxccyo9XFxcXHMqXCIrYy5zb3VyY2UrXCIpP1wiLFwiKSpcIixcIlxcXFxzKlwiLFwiPlwiXS5qb2luKFwiXCIpLFwiZ1wiKX0oKSx1cmxQcmVmaXhSZWdleDovXihodHRwcz86XFwvXFwvKT8od3d3XFwuKT8vLGxpbms6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHJvY2Vzc0h0bWwoYSl9LHByb2Nlc3NIdG1sOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9dGhpcy5odG1sUmVnZXgsZT0wLGY9MCxnPVtdO251bGwhPT0oYj1kLmV4ZWMoYSkpOyl7dmFyIGg9YlswXSxpPWJbMl0saj0hIWJbMV07Yz1hLnN1YnN0cmluZyhlLGIuaW5kZXgpLGU9Yi5pbmRleCtoLmxlbmd0aCxcImFcIj09PWk/aj8oZj1NYXRoLm1heChmLTEsMCksMD09PWYmJmcucHVzaChjKSk6KGYrKyxnLnB1c2godGhpcy5wcm9jZXNzVGV4dE5vZGUoYykpKTpnLnB1c2goMD09PWY/dGhpcy5wcm9jZXNzVGV4dE5vZGUoYyk6YyksZy5wdXNoKGgpfWlmKGU8YS5sZW5ndGgpe3ZhciBrPXRoaXMucHJvY2Vzc1RleHROb2RlKGEuc3Vic3RyaW5nKGUpKTtnLnB1c2goayl9cmV0dXJuIGcuam9pbihcIlwiKX0scHJvY2Vzc1RleHROb2RlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz10aGlzLm1hdGNoZXJSZWdleCxkPXRoaXMudHdpdHRlcixlPXRoaXMuZW1haWwsZj10aGlzLnVybHM7cmV0dXJuIGEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyxnLGgsaSxqLGssbCl7dmFyIG09YyxuPWcsbz1oLHA9aSxxPWoscj1rfHxsLHM9XCJcIix0PVwiXCI7aWYobSYmIWR8fHAmJiFlfHxxJiYhZnx8cSYmLTE9PT1xLmluZGV4T2YoXCIuXCIpfHxxJiYvXltBLVphLXpdezMsOX06Ly50ZXN0KHEpJiYhLzouKj9bQS1aYS16XS8udGVzdChxKXx8ciYmL15bXFx3XVxcL1xcLy8udGVzdChyKSlyZXR1cm4gYTt2YXIgdT1hLmNoYXJBdChhLmxlbmd0aC0xKTtpZihcIilcIj09PXUpe3ZhciB2PWEubWF0Y2goL1xcKC9nKSx3PWEubWF0Y2goL1xcKS9nKSx4PXYmJnYubGVuZ3RofHwwLHk9dyYmdy5sZW5ndGh8fDA7eT54JiYoYT1hLnN1YnN0cigwLGEubGVuZ3RoLTEpLHQ9XCIpXCIpfXZhciB6LEE9YSxCPWE7aWYobSl6PVwidHdpdHRlclwiLHM9bixBPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIitvLEI9XCJAXCIrbztlbHNlIGlmKHApej1cImVtYWlsXCIsQT1cIm1haWx0bzpcIitwLEI9cDtlbHNlIGlmKHo9XCJ1cmxcIixyKXt2YXIgQz1uZXcgUmVnRXhwKFwiXlwiK2IucHJvdG9jb2xSZWxhdGl2ZVJlZ2V4LnNvdXJjZSksRD1yLm1hdGNoKEMpWzFdfHxcIlwiO3M9RCtzLEE9QS5yZXBsYWNlKEMsXCIvL1wiKSxCPUIucmVwbGFjZShDLFwiXCIpfWVsc2UvXltBLVphLXpdezMsOX06L2kudGVzdChBKXx8KEE9XCJodHRwOi8vXCIrQSk7dmFyIEU9Yi5jcmVhdGVBbmNob3JUYWcoeixBLEIpO3JldHVybiBzK0UrdH0pfSxjcmVhdGVBbmNob3JUYWc6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMuY3JlYXRlQW5jaG9yQXR0cnNTdHIoYSxiKTtyZXR1cm4gYz10aGlzLnByb2Nlc3NBbmNob3JUZXh0KGMpLFwiPGEgXCIrZCtcIj5cIitjK1wiPC9hPlwifSxjcmVhdGVBbmNob3JBdHRyc1N0cjpmdW5jdGlvbihhLGIpe3ZhciBjPVsnaHJlZj1cIicrYisnXCInXSxkPXRoaXMuY3JlYXRlQ3NzQ2xhc3MoYSk7cmV0dXJuIGQmJmMucHVzaCgnY2xhc3M9XCInK2QrJ1wiJyksdGhpcy5uZXdXaW5kb3cmJmMucHVzaCgndGFyZ2V0PVwiX2JsYW5rXCInKSxjLmpvaW4oXCIgXCIpfSxjcmVhdGVDc3NDbGFzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmNsYXNzTmFtZTtyZXR1cm4gYj9iK1wiIFwiK2IrXCItXCIrYTpcIlwifSxwcm9jZXNzQW5jaG9yVGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zdHJpcFByZWZpeCYmKGE9dGhpcy5zdHJpcFVybFByZWZpeChhKSksYT10aGlzLnJlbW92ZVRyYWlsaW5nU2xhc2goYSksYT10aGlzLmRvVHJ1bmNhdGUoYSl9LHN0cmlwVXJsUHJlZml4OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodGhpcy51cmxQcmVmaXhSZWdleCxcIlwiKX0scmVtb3ZlVHJhaWxpbmdTbGFzaDpmdW5jdGlvbihhKXtyZXR1cm5cIi9cIj09PWEuY2hhckF0KGEubGVuZ3RoLTEpJiYoYT1hLnNsaWNlKDAsLTEpKSxhfSxkb1RydW5jYXRlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMudHJ1bmNhdGU7cmV0dXJuIGImJmEubGVuZ3RoPmImJihhPWEuc3Vic3RyaW5nKDAsYi0yKStcIi4uXCIpLGF9fSxhLmxpbms9ZnVuY3Rpb24oYixjKXt2YXIgZD1uZXcgYShjKTtyZXR1cm4gZC5saW5rKGIpfSxhfSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmV0dXJuRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBncnVwcGUsXG5cdFx0Z3J1cHBlbmJlemVpY2hudW5nLFxuXHRcdGJhdW1fZXJzdGVsbHQgPSAkLkRlZmVycmVkKCk7XG5cdC8vIGFsbGUgQsOkdW1lIGF1c2JsZW5kZW5cblx0JChcIi5iYXVtXCIpLmhpZGUoKTtcblx0Ly8gYWxsZSBCZXNjaHJpZnR1bmdlbiBhdXNibGVuZGVuXG5cdCQoXCIudHJlZUJlc2NocmlmdHVuZ1wiKS5oaWRlKCk7XG5cdC8vIGdld29sbHRlIGJlc2NocmlmdGVuIHVuZCBzaWNodGJhciBzY2hhbHRlblxuXHRzd2l0Y2ggKHdpbmRvdy5hZGIuR3J1cHBlKSB7XG4gICAgY2FzZSBcIkZhdW5hXCI6XG4gICAgICAgIGdydXBwZSA9IFwiZmF1bmFcIjtcbiAgICAgICAgZ3J1cHBlbmJlemVpY2hudW5nID0gXCJUaWVyZVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiRmxvcmFcIjpcbiAgICAgICAgZ3J1cHBlID0gXCJmbG9yYVwiO1xuICAgICAgICBncnVwcGVuYmV6ZWljaG51bmcgPSBcIlBmbGFuemVuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJNb29zZVwiOlxuICAgICAgICBncnVwcGUgPSBcIm1vb3NlXCI7XG4gICAgICAgIGdydXBwZW5iZXplaWNobnVuZyA9IFwiTW9vc2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIk1hY3JvbXljZXRlc1wiOlxuICAgICAgICBncnVwcGUgPSBcIm1hY3JvbXljZXRlc1wiO1xuICAgICAgICBncnVwcGVuYmV6ZWljaG51bmcgPSBcIlBpbHplXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJMZWJlbnNyw6R1bWVcIjpcbiAgICAgICAgZ3J1cHBlID0gXCJsclwiO1xuICAgICAgICBncnVwcGVuYmV6ZWljaG51bmcgPSBcIkxlYmVuc3LDpHVtZVwiO1xuICAgICAgICBicmVhaztcblx0fVxuXHR2YXIgJGRiID0gJC5jb3VjaC5kYihcImFydGVuZGJcIik7XG5cdCRkYi52aWV3KCdhcnRlbmRiLycgKyBncnVwcGUgKyBcIl9ncnVwcGllcnRcIiwge1xuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBhbnphaGxfb2JqZWt0ZSA9IGRhdGEucm93c1swXS52YWx1ZTtcblx0XHRcdCQoXCIjdHJlZVwiICsgd2luZG93LmFkYi5HcnVwcGUgKyBcIkJlc2NocmlmdHVuZ1wiKS5odG1sKGFuemFobF9vYmpla3RlICsgXCIgXCIgKyBncnVwcGVuYmV6ZWljaG51bmcpO1xuXHRcdFx0Ly8gZWluZ2VibGVuZGV0IHdpcmQgZGllIEJlc2NocmlmdHVuZywgd2VubiBkZXIgQmF1bSBmZXJ0aWcgaXN0IGltIGNhbGxiYWNrIHZvbiBmdW5jdGlvbiBlcnN0ZWxsZVRyZWVcblx0XHR9XG5cdH0pO1xuXHQkLndoZW4od2luZG93LmFkYi5lcnN0ZWxsZVRyZWUoKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRiYXVtX2Vyc3RlbGx0LnJlc29sdmUoKTtcblx0fSk7XG5cdHJldHVybiBiYXVtX2Vyc3RlbGx0LnByb21pc2UoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmV0dXJuRnVuY3Rpb247Il19