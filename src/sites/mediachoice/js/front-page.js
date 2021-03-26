

/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
!function(t,i,e,s){"use strict";function o(i,e){this.element=i,this.$context=t(i).data("api",this),this.$layers=this.$context.find(".layer");var s={calibrateX:this.$context.data("calibrate-x")||null,calibrateY:this.$context.data("calibrate-y")||null,invertX:this.$context.data("invert-x")||null,invertY:this.$context.data("invert-y")||null,limitX:parseFloat(this.$context.data("limit-x"))||null,limitY:parseFloat(this.$context.data("limit-y"))||null,scalarX:parseFloat(this.$context.data("scalar-x"))||null,scalarY:parseFloat(this.$context.data("scalar-y"))||null,frictionX:parseFloat(this.$context.data("friction-x"))||null,frictionY:parseFloat(this.$context.data("friction-y"))||null,originX:parseFloat(this.$context.data("origin-x"))||null,originY:parseFloat(this.$context.data("origin-y"))||null};for(var o in s)null===s[o]&&delete s[o];t.extend(this,r,e,s),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var n="parallax",a=30,r={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5};o.prototype.transformSupport=function(t){for(var o=e.createElement("div"),n=!1,a=null,r=!1,h=null,l=null,p=0,c=this.vendors.length;c>p;p++)if(null!==this.vendors[p]?(h=this.vendors[p][0]+"transform",l=this.vendors[p][1]+"Transform"):(h="transform",l="transform"),o.style[l]!==s){n=!0;break}switch(t){case"2D":r=n;break;case"3D":if(n){var m=e.body||e.createElement("body"),u=e.documentElement,y=u.style.overflow;e.body||(u.style.overflow="hidden",u.appendChild(m),m.style.overflow="hidden",m.style.background=""),m.appendChild(o),o.style[l]="translate3d(1px,1px,1px)",a=i.getComputedStyle(o).getPropertyValue(h),r=a!==s&&a.length>0&&"none"!==a,u.style.overflow=y,m.removeChild(o)}}return r},o.prototype.ww=null,o.prototype.wh=null,o.prototype.wcx=null,o.prototype.wcy=null,o.prototype.wrx=null,o.prototype.wry=null,o.prototype.portrait=null,o.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),o.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],o.prototype.motionSupport=!!i.DeviceMotionEvent,o.prototype.orientationSupport=!!i.DeviceOrientationEvent,o.prototype.orientationStatus=0,o.prototype.transform2DSupport=o.prototype.transformSupport("2D"),o.prototype.transform3DSupport=o.prototype.transformSupport("3D"),o.prototype.propertyCache={},o.prototype.initialise=function(){"static"===this.$context.css("position")&&this.$context.css({position:"relative"}),this.accelerate(this.$context),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},o.prototype.updateLayers=function(){this.$layers=this.$context.find(".layer"),this.depths=[],this.$layers.css({position:"absolute",display:"block",left:0,top:0}),this.$layers.first().css({position:"relative"}),this.accelerate(this.$layers),this.$layers.each(t.proxy(function(i,e){this.depths.push(t(e).data("depth")||0)},this))},o.prototype.updateDimensions=function(){this.ww=i.innerWidth,this.wh=i.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},o.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},o.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},o.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,i.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,i.addEventListener("mousemove",this.onMouseMove)),i.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},o.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?i.removeEventListener("deviceorientation",this.onDeviceOrientation):i.removeEventListener("mousemove",this.onMouseMove),i.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},o.prototype.calibrate=function(t,i){this.calibrateX=t===s?this.calibrateX:t,this.calibrateY=i===s?this.calibrateY:i},o.prototype.invert=function(t,i){this.invertX=t===s?this.invertX:t,this.invertY=i===s?this.invertY:i},o.prototype.friction=function(t,i){this.frictionX=t===s?this.frictionX:t,this.frictionY=i===s?this.frictionY:i},o.prototype.scalar=function(t,i){this.scalarX=t===s?this.scalarX:t,this.scalarY=i===s?this.scalarY:i},o.prototype.limit=function(t,i){this.limitX=t===s?this.limitX:t,this.limitY=i===s?this.limitY:i},o.prototype.origin=function(t,i){this.originX=t===s?this.originX:t,this.originY=i===s?this.originY:i},o.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},o.prototype.css=function(i,e,o){var n=this.propertyCache[e];if(!n)for(var a=0,r=this.vendors.length;r>a;a++)if(n=null!==this.vendors[a]?t.camelCase(this.vendors[a][1]+"-"+e):e,i.style[n]!==s){this.propertyCache[e]=n;break}i.style[n]=o},o.prototype.accelerate=function(t){for(var i=0,e=t.length;e>i;i++){var s=t[i];this.css(s,"transform","translate3d(0,0,0)"),this.css(s,"transform-style","preserve-3d"),this.css(s,"backface-visibility","hidden")}},o.prototype.setPosition=function(t,i,e){i+="px",e+="px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},o.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},o.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},o.prototype.onWindowResize=function(){this.updateDimensions()},o.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.$layers.length;s>e;e++){var o=this.depths[e],n=this.$layers[e],a=this.vx*o*(this.invertX?-1:1),r=this.vy*o*(this.invertY?-1:1);this.setPosition(n,a,r)}this.raf=requestAnimationFrame(this.onAnimationFrame)},o.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var e=(t.beta||0)/a,s=(t.gamma||0)/a,o=i.innerHeight>i.innerWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=e,this.cy=s),this.ix=e,this.iy=s}},o.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)};var h={enable:o.prototype.enable,disable:o.prototype.disable,updateLayers:o.prototype.updateLayers,calibrate:o.prototype.calibrate,friction:o.prototype.friction,invert:o.prototype.invert,scalar:o.prototype.scalar,limit:o.prototype.limit,origin:o.prototype.origin};t.fn[n]=function(i){var e=arguments;return this.each(function(){var s=t(this),a=s.data(n);a||(a=new o(this,i),s.data(n,a)),h[i]&&a[i].apply(a,Array.prototype.slice.call(e,1))})}}(window.jQuery||window.Zepto,window,document),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),s=Math.max(0,16-(e-t)),o=window.setTimeout(function(){i(e+s)},s);return t=e+s,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();
;(function($){var multipleSupport=typeof $('<input/>')[0].multiple!=='undefined',isIE=/msie/i.test(navigator.userAgent);$.fn.customFile=function(){return this.each(function(){var $file=$(this).addClass('custom-file-upload-hidden'),$wrap=$('<div class="file-upload-wrapper">'),$input=$('<input type="text" class="file-upload-input" placeholder="Attachments" />'),$button=$('<button type="button" class="file-upload-button"></button>'),$label=$('<label class="file-upload-button" for="'+$file[0].id+'"></label>');$file.css({position:'absolute',left:'-9999px'});$wrap.insertAfter($file).append($file,$input,(isIE?$label:$button));$file.attr('tabIndex',-1);$button.attr('tabIndex',-1);$button.click(function(){$file.focus().click();});$file.change(function(){var files=[],fileArr,filename;if(multipleSupport){fileArr=$file[0].files;for(var i=0,len=fileArr.length;i<len;i++){files.push(fileArr[i].name);}
filename=files.join(', ');}else{filename=$file.val().split('\\').pop();}
$input.val(filename).attr('title',filename).focus();});$input.on({blur:function(){$file.trigger('blur');},keydown:function(e){if(e.which===13){if(!isIE){$file.trigger('click');}}else if(e.which===8||e.which===46){$file.replaceWith($file=$file.clone(true));$file.trigger('change');$input.val('');}else if(e.which===9){return;}else{return false;}}});});};if(!multipleSupport){$(document).on('change','input.customfile',function(){var $this=$(this),uniqId='customfile_'+(new Date()).getTime(),$wrap=$this.parent(),$inputs=$wrap.siblings().find('.file-upload-input').filter(function(){return!this.value}),$file=$('<input type="file" id="'+uniqId+'" name="'+$this.attr('name')+'"/>');setTimeout(function(){if($this.val()){if(!$inputs.length){$wrap.after($file);$file.customFile();}}else{$inputs.parent().remove();$wrap.appendTo($wrap.parent());$wrap.find('input').focus();}},1);});}}(jQuery));
(function($){$.fn.image_hiduken=function(options){var settings=$.extend({},$.fn.image_hiduken.defaults,options);$.fn.image_hiduken.vars.elements=this;image_hiduken.init();};$.fn.image_hiduken.defaults={default_to_small:true,small_size:300,medium_size:640,large_size:980,};$.fn.image_hiduken.vars={elements:null,screen_width:0,screen_height:0,current_size:$.fn.image_hiduken.defaults.default_to_small?$.fn.image_hiduken.defaults.small_size:0,}
var image_hiduken={init:function(){image_hiduken.bind_to_resize();image_hiduken.resize_handler();},bind_to_resize:function(){$(window).resize(function(){$.fn.image_hiduken.vars.screen_width=$(window).width();$.fn.image_hiduken.vars.screen_height=$(window).height();image_hiduken.resize_handler();});},resize_handler:function(){if($.fn.image_hiduken.vars.screen_width==0&&$.fn.image_hiduken.vars.screen_height==0){$.fn.image_hiduken.vars.screen_width=$(window).width();$.fn.image_hiduken.vars.screen_height=$(window).height();}
var size=null;var size_key=null;var sizes={small_size:$.fn.image_hiduken.defaults.small_size,medium_size:$.fn.image_hiduken.defaults.medium_size,large_size:$.fn.image_hiduken.defaults.large_size,};$.each(sizes,function(key,value){if(size==null||Math.abs(value-$.fn.image_hiduken.vars.screen_width)<Math.abs(size-$.fn.image_hiduken.vars.screen_width)){size=value;size_key=key;}});image_hiduken.update_images(size_key,size);},update_images:function(key,size){var data_attribute="data-"+key.replace("_","-").replace('size','src');$.fn.image_hiduken.vars.elements.each(function(index,item){if($(item).attr(data_attribute)!=null){if($(item).is('div')){$(item).css({"background-image":'url("'+$(item).attr(data_attribute)+'")'});}
else if($(item).is('img')){$(item).attr('src',$(item).attr(data_attribute));};};});},};})(jQuery);
(function($){'use strict';var default_options={i18n:{ar:{months:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],dayOfWeek:["ن","ث","ع","خ","ج","س","ح"]},ro:{months:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],dayOfWeek:["l","ma","mi","j","v","s","d"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],dayOfWeek:["Sen","Sel","Rab","Kam","Jum","Sab","Min"]},bg:{months:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],dayOfWeek:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]},fa:{months:['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],dayOfWeek:['یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه']},ru:{months:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],dayOfWeek:["Вск","Пн","Вт","Ср","Чт","Пт","Сб"]},uk:{months:['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],dayOfWeek:["Ндл","Пнд","Втр","Срд","Чтв","Птн","Сбт"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},el:{months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],dayOfWeek:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"]},de:{months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],dayOfWeek:["So","Mo","Di","Mi","Do","Fr","Sa"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeek:["zo","ma","di","wo","do","vr","za"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeek:["Paz","Pts","Sal","Çar","Per","Cum","Cts"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeek:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeek:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]},th:{months:['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],dayOfWeek:['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.']},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeek:["nd","pn","wt","śr","cz","pt","sb"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeek:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeek:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeek:["일","월","화","수","목","금","토"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeek:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},da:{months:["January","Februar","Marts","April","Maj","Juni","July","August","September","Oktober","November","December"],dayOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},no:{months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],dayOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeek:["日","月","火","水","木","金","土"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeek:["CN","T2","T3","T4","T5","T6","T7"]},sl:{months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],dayOfWeek:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],dayOfWeek:["Ne","Po","Út","St","Čt","Pá","So"]},hu:{months:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],dayOfWeek:["Va","Hé","Ke","Sze","Cs","Pé","Szo"]}},value:'',lang:'en',format:'Y/m/d H:i',formatTime:'H:i',formatDate:'Y/m/d',startDate:false,step:60,monthChangeSpinner:true,closeOnDateSelect:false,closeOnWithoutClick:true,closeOnInputClick:true,timepicker:true,datepicker:true,weeks:false,defaultTime:false,defaultDate:false,minDate:false,maxDate:false,minTime:false,maxTime:false,allowTimes:[],opened:false,initTime:true,inline:false,theme:'',onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:true,inverseButton:false,hours12:false,next:'xdsoft_next',prev:'xdsoft_prev',dayOfWeekStart:0,parentID:'body',timeHeightInTimePicker:25,timepickerScrollbar:true,todayButton:true,defaultSelect:true,scrollMonth:true,scrollTime:true,scrollInput:true,lazyInit:false,mask:false,validateOnBlur:true,allowBlank:true,yearStart:1950,yearEnd:2050,style:'',id:'',fixed:false,roundTime:'round',className:'',weekends:[],disabledDates:[],yearOffset:0,beforeShowDay:null,enterLikeTab:true};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(obj,start){var i,j;for(i=(start||0),j=this.length;i<j;i+=1){if(this[i]===obj){return i;}}
return-1;};}
Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate();};$.fn.xdsoftScroller=function(percent){return this.each(function(){var timeboxparent=$(this),pointerEventToXY=function(e){var out={x:0,y:0},touch;if(e.type==='touchstart'||e.type==='touchmove'||e.type==='touchend'||e.type==='touchcancel'){touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];out.x=touch.clientX;out.y=touch.clientY;}else if(e.type==='mousedown'||e.type==='mouseup'||e.type==='mousemove'||e.type==='mouseover'||e.type==='mouseout'||e.type==='mouseenter'||e.type==='mouseleave'){out.x=e.clientX;out.y=e.clientY;}
return out;},move=0,timebox,parentHeight,height,scrollbar,scroller,maximumOffset=100,start=false,startY=0,startTop=0,h1=0,touchStart=false,startTopScroll=0,calcOffset=function(){};if(percent==='hide'){timeboxparent.find('.xdsoft_scrollbar').hide();return;}
if(!$(this).hasClass('xdsoft_scroller_box')){timebox=timeboxparent.children().eq(0);parentHeight=timeboxparent[0].clientHeight;height=timebox[0].offsetHeight;scrollbar=$('<div class="xdsoft_scrollbar"></div>');scroller=$('<div class="xdsoft_scroller"></div>');scrollbar.append(scroller);timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);calcOffset=function calcOffset(event){var offset=pointerEventToXY(event).y-startY+startTopScroll;if(offset<0){offset=0;}
if(offset+scroller[0].offsetHeight>h1){offset=h1-scroller[0].offsetHeight;}
timeboxparent.trigger('scroll_element.xdsoft_scroller',[maximumOffset?offset/maximumOffset:0]);};scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller',function(event){if(!parentHeight){timeboxparent.trigger('resize_scroll.xdsoft_scroller',[percent]);}
startY=pointerEventToXY(event).y;startTopScroll=parseInt(scroller.css('margin-top'),10);h1=scrollbar[0].offsetHeight;if(event.type==='mousedown'){if(document){$(document.body).addClass('xdsoft_noselect');}
$([document.body,window]).on('mouseup.xdsoft_scroller',function arguments_callee(){$([document.body,window]).off('mouseup.xdsoft_scroller',arguments_callee).off('mousemove.xdsoft_scroller',calcOffset).removeClass('xdsoft_noselect');});$(document.body).on('mousemove.xdsoft_scroller',calcOffset);}else{touchStart=true;event.stopPropagation();event.preventDefault();}}).on('touchmove',function(event){if(touchStart){event.preventDefault();calcOffset(event);}}).on('touchend touchcancel',function(event){touchStart=false;startTopScroll=0;});timeboxparent.on('scroll_element.xdsoft_scroller',function(event,percentage){if(!parentHeight){timeboxparent.trigger('resize_scroll.xdsoft_scroller',[percentage,true]);}
percentage=percentage>1?1:(percentage<0||isNaN(percentage))?0:percentage;scroller.css('margin-top',maximumOffset*percentage);setTimeout(function(){timebox.css('marginTop',-parseInt((timebox[0].offsetHeight-parentHeight)*percentage,10));},10);}).on('resize_scroll.xdsoft_scroller',function(event,percentage,noTriggerScroll){var percent,sh;parentHeight=timeboxparent[0].clientHeight;height=timebox[0].offsetHeight;percent=parentHeight/height;sh=percent*scrollbar[0].offsetHeight;if(percent>1){scroller.hide();}else{scroller.show();scroller.css('height',parseInt(sh>10?sh:10,10));maximumOffset=scrollbar[0].offsetHeight-scroller[0].offsetHeight;if(noTriggerScroll!==true){timeboxparent.trigger('scroll_element.xdsoft_scroller',[percentage||Math.abs(parseInt(timebox.css('marginTop'),10))/(height-parentHeight)]);}}});timeboxparent.on('mousewheel',function(event){var top=Math.abs(parseInt(timebox.css('marginTop'),10));top=top-(event.deltaY*20);if(top<0){top=0;}
timeboxparent.trigger('scroll_element.xdsoft_scroller',[top/(height-parentHeight)]);event.stopPropagation();return false;});timeboxparent.on('touchstart',function(event){start=pointerEventToXY(event);startTop=Math.abs(parseInt(timebox.css('marginTop'),10));});timeboxparent.on('touchmove',function(event){if(start){event.preventDefault();var coord=pointerEventToXY(event);timeboxparent.trigger('scroll_element.xdsoft_scroller',[(startTop-(coord.y-start.y))/(height-parentHeight)]);}});timeboxparent.on('touchend touchcancel',function(event){start=false;startTop=0;});}
timeboxparent.trigger('resize_scroll.xdsoft_scroller',[percent]);});};$.fn.datetimepicker=function(opt){var KEY0=48,KEY9=57,_KEY0=96,_KEY9=105,CTRLKEY=17,DEL=46,ENTER=13,ESC=27,BACKSPACE=8,ARROWLEFT=37,ARROWUP=38,ARROWRIGHT=39,ARROWDOWN=40,TAB=9,F5=116,AKEY=65,CKEY=67,VKEY=86,ZKEY=90,YKEY=89,ctrlDown=false,options=($.isPlainObject(opt)||!opt)?$.extend(true,{},default_options,opt):$.extend(true,{},default_options),lazyInitTimer=0,createDateTimePicker,destroyDateTimePicker,_xdsoft_datetime,lazyInit=function(input){input.on('open.xdsoft focusin.xdsoft mousedown.xdsoft',function initOnActionCallback(event){if(input.is(':disabled')||input.is(':hidden')||!input.is(':visible')||input.data('xdsoft_datetimepicker')){return;}
clearTimeout(lazyInitTimer);lazyInitTimer=setTimeout(function(){if(!input.data('xdsoft_datetimepicker')){createDateTimePicker(input);}
input.off('open.xdsoft focusin.xdsoft mousedown.xdsoft',initOnActionCallback).trigger('open.xdsoft');},100);});};createDateTimePicker=function(input){var datetimepicker=$('<div '+(options.id?'id="'+options.id+'"':'')+' '+(options.style?'style="'+options.style+'"':'')+' class="xdsoft_datetimepicker xdsoft_'+options.theme+' xdsoft_noselect '+(options.weeks?' xdsoft_showweeks':'')+options.className+'"></div>'),xdsoft_copyright=$('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),datepicker=$('<div class="xdsoft_datepicker active"></div>'),mounth_picker=$('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>'+'<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>'+'<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>'+'<button type="button" class="xdsoft_next"></button></div>'),calendar=$('<div class="xdsoft_calendar"></div>'),timepicker=$('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),timeboxparent=timepicker.find('.xdsoft_time_box').eq(0),timebox=$('<div class="xdsoft_time_variant"></div>'),monthselect=$('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),yearselect=$('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),triggerAfterOpen=false,XDSoft_datetime,xchangeTimer,timerclick,current_time_index,setPos,timer=0,timer1=0;mounth_picker.find('.xdsoft_month span').after(monthselect);mounth_picker.find('.xdsoft_year span').after(yearselect);mounth_picker.find('.xdsoft_month,.xdsoft_year').on('mousedown.xdsoft',function(event){var select=$(this).find('.xdsoft_select').eq(0),val=0,top=0,visible=select.is(':visible'),items,i;mounth_picker.find('.xdsoft_select').hide();if(_xdsoft_datetime.currentTime){val=_xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month')?'getMonth':'getFullYear']();}
select[visible?'hide':'show']();for(items=select.find('div.xdsoft_option'),i=0;i<items.length;i+=1){if(items.eq(i).data('value')===val){break;}else{top+=items[0].offsetHeight;}}
select.xdsoftScroller(top/(select.children()[0].offsetHeight-(select[0].clientHeight)));event.stopPropagation();return false;});mounth_picker.find('.xdsoft_select').xdsoftScroller().on('mousedown.xdsoft',function(event){event.stopPropagation();event.preventDefault();}).on('mousedown.xdsoft','.xdsoft_option',function(event){var year=_xdsoft_datetime.currentTime.getFullYear();if(_xdsoft_datetime&&_xdsoft_datetime.currentTime){_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect')?'setMonth':'setFullYear']($(this).data('value'));}
$(this).parent().parent().hide();datetimepicker.trigger('xchange.xdsoft');if(options.onChangeMonth&&$.isFunction(options.onChangeMonth)){options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));}
if(year!==_xdsoft_datetime.currentTime.getFullYear()&&$.isFunction(options.onChangeYear)){options.onChangeYear.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));}});datetimepicker.setOptions=function(_options){options=$.extend(true,{},options,_options);if(_options.allowTimes&&$.isArray(_options.allowTimes)&&_options.allowTimes.length){options.allowTimes=$.extend(true,[],_options.allowTimes);}
if(_options.weekends&&$.isArray(_options.weekends)&&_options.weekends.length){options.weekends=$.extend(true,[],_options.weekends);}
if(_options.disabledDates&&$.isArray(_options.disabledDates)&&_options.disabledDates.length){options.disabledDates=$.extend(true,[],_options.disabledDates);}
if((options.open||options.opened)&&(!options.inline)){input.trigger('open.xdsoft');}
if(options.inline){triggerAfterOpen=true;datetimepicker.addClass('xdsoft_inline');input.after(datetimepicker).hide();}
if(options.inverseButton){options.next='xdsoft_prev';options.prev='xdsoft_next';}
if(options.datepicker){datepicker.addClass('active');}else{datepicker.removeClass('active');}
if(options.timepicker){timepicker.addClass('active');}else{timepicker.removeClass('active');}
if(options.value){if(input&&input.val){input.val(options.value);}
_xdsoft_datetime.setCurrentTime(options.value);}
if(isNaN(options.dayOfWeekStart)){options.dayOfWeekStart=0;}else{options.dayOfWeekStart=parseInt(options.dayOfWeekStart,10)%7;}
if(!options.timepickerScrollbar){timeboxparent.xdsoftScroller('hide');}
if(options.minDate&&/^-(.*)$/.test(options.minDate)){options.minDate=_xdsoft_datetime.strToDateTime(options.minDate).dateFormat(options.formatDate);}
if(options.maxDate&&/^\+(.*)$/.test(options.maxDate)){options.maxDate=_xdsoft_datetime.strToDateTime(options.maxDate).dateFormat(options.formatDate);}
mounth_picker.find('.xdsoft_today_button').css('visibility',!options.todayButton?'hidden':'visible');if(options.mask){var e,getCaretPos=function(input){try{if(document.selection&&document.selection.createRange){var range=document.selection.createRange();return range.getBookmark().charCodeAt(2)-2;}
if(input.setSelectionRange){return input.selectionStart;}}catch(e){return 0;}},setCaretPos=function(node,pos){node=(typeof node==="string"||node instanceof String)?document.getElementById(node):node;if(!node){return false;}
if(node.createTextRange){var textRange=node.createTextRange();textRange.collapse(true);textRange.moveEnd('character',pos);textRange.moveStart('character',pos);textRange.select();return true;}
if(node.setSelectionRange){node.setSelectionRange(pos,pos);return true;}
return false;},isValidValue=function(mask,value){var reg=mask.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,'\\$1').replace(/_/g,'{digit+}').replace(/([0-9]{1})/g,'{digit$1}').replace(/\{digit([0-9]{1})\}/g,'[0-$1_]{1}').replace(/\{digit[\+]\}/g,'[0-9_]{1}');return(new RegExp(reg)).test(value);};input.off('keydown.xdsoft');if(options.mask===true){options.mask=options.format.replace(/Y/g,'9999').replace(/F/g,'9999').replace(/m/g,'19').replace(/d/g,'39').replace(/H/g,'29').replace(/i/g,'59').replace(/s/g,'59');}
if($.type(options.mask)==='string'){if(!isValidValue(options.mask,input.val())){input.val(options.mask.replace(/[0-9]/g,'_'));}
input.on('keydown.xdsoft',function(event){var val=this.value,key=event.which,pos,digit;if(((key>=KEY0&&key<=KEY9)||(key>=_KEY0&&key<=_KEY9))||(key===BACKSPACE||key===DEL)){pos=getCaretPos(this);digit=(key!==BACKSPACE&&key!==DEL)?String.fromCharCode((_KEY0<=key&&key<=_KEY9)?key-KEY0:key):'_';if((key===BACKSPACE||key===DEL)&&pos){pos-=1;digit='_';}
while(/[^0-9_]/.test(options.mask.substr(pos,1))&&pos<options.mask.length&&pos>0){pos+=(key===BACKSPACE||key===DEL)?-1:1;}
val=val.substr(0,pos)+digit+val.substr(pos+1);if($.trim(val)===''){val=options.mask.replace(/[0-9]/g,'_');}else{if(pos===options.mask.length){event.preventDefault();return false;}}
pos+=(key===BACKSPACE||key===DEL)?0:1;while(/[^0-9_]/.test(options.mask.substr(pos,1))&&pos<options.mask.length&&pos>0){pos+=(key===BACKSPACE||key===DEL)?-1:1;}
if(isValidValue(options.mask,val)){this.value=val;setCaretPos(this,pos);}else if($.trim(val)===''){this.value=options.mask.replace(/[0-9]/g,'_');}else{input.trigger('error_input.xdsoft');}}else{if(([AKEY,CKEY,VKEY,ZKEY,YKEY].indexOf(key)!==-1&&ctrlDown)||[ESC,ARROWUP,ARROWDOWN,ARROWLEFT,ARROWRIGHT,F5,CTRLKEY,TAB,ENTER].indexOf(key)!==-1){return true;}}
event.preventDefault();return false;});}}
if(options.validateOnBlur){input.off('blur.xdsoft').on('blur.xdsoft',function(){if(options.allowBlank&&!$.trim($(this).val()).length){$(this).val(null);datetimepicker.data('xdsoft_datetime').empty();}else if(!Date.parseDate($(this).val(),options.format)){$(this).val((_xdsoft_datetime.now()).dateFormat(options.format));datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());}else{datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());}
datetimepicker.trigger('changedatetime.xdsoft');});}
options.dayOfWeekStartPrev=(options.dayOfWeekStart===0)?6:options.dayOfWeekStart-1;datetimepicker.trigger('xchange.xdsoft').trigger('afterOpen.xdsoft');};datetimepicker.data('options',options).on('mousedown.xdsoft',function(event){event.stopPropagation();event.preventDefault();yearselect.hide();monthselect.hide();return false;});timeboxparent.append(timebox);timeboxparent.xdsoftScroller();datetimepicker.on('afterOpen.xdsoft',function(){timeboxparent.xdsoftScroller();});datetimepicker.append(datepicker).append(timepicker);if(options.withoutCopyright!==true){datetimepicker.append(xdsoft_copyright);}
datepicker.append(mounth_picker).append(calendar);$(options.parentID).append(datetimepicker);XDSoft_datetime=function(){var _this=this;_this.now=function(norecursion){var d=new Date(),date,time;if(!norecursion&&options.defaultDate){date=_this.strToDate(options.defaultDate);d.setFullYear(date.getFullYear());d.setMonth(date.getMonth());d.setDate(date.getDate());}
if(options.yearOffset){d.setFullYear(d.getFullYear()+options.yearOffset);}
if(!norecursion&&options.defaultTime){time=_this.strtotime(options.defaultTime);d.setHours(time.getHours());d.setMinutes(time.getMinutes());}
return d;};_this.isValidDate=function(d){if(Object.prototype.toString.call(d)!=="[object Date]"){return false;}
return!isNaN(d.getTime());};_this.setCurrentTime=function(dTime){_this.currentTime=(typeof dTime==='string')?_this.strToDateTime(dTime):_this.isValidDate(dTime)?dTime:_this.now();datetimepicker.trigger('xchange.xdsoft');};_this.empty=function(){_this.currentTime=null;};_this.getCurrentTime=function(dTime){return _this.currentTime;};_this.nextMonth=function(){var month=_this.currentTime.getMonth()+1,year;if(month===12){_this.currentTime.setFullYear(_this.currentTime.getFullYear()+1);month=0;}
year=_this.currentTime.getFullYear();_this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(),month+1,0).getDate(),_this.currentTime.getDate()));_this.currentTime.setMonth(month);if(options.onChangeMonth&&$.isFunction(options.onChangeMonth)){options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));}
if(year!==_this.currentTime.getFullYear()&&$.isFunction(options.onChangeYear)){options.onChangeYear.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));}
datetimepicker.trigger('xchange.xdsoft');return month;};_this.prevMonth=function(){var month=_this.currentTime.getMonth()-1;if(month===-1){_this.currentTime.setFullYear(_this.currentTime.getFullYear()-1);month=11;}
_this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(),month+1,0).getDate(),_this.currentTime.getDate()));_this.currentTime.setMonth(month);if(options.onChangeMonth&&$.isFunction(options.onChangeMonth)){options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));}
datetimepicker.trigger('xchange.xdsoft');return month;};_this.getWeekOfYear=function(datetime){var onejan=new Date(datetime.getFullYear(),0,1);return Math.ceil((((datetime-onejan)/86400000)+onejan.getDay()+1)/7);};_this.strToDateTime=function(sDateTime){var tmpDate=[],timeOffset,currentTime;if(sDateTime&&sDateTime instanceof Date&&_this.isValidDate(sDateTime)){return sDateTime;}
tmpDate=/^(\+|\-)(.*)$/.exec(sDateTime);if(tmpDate){tmpDate[2]=Date.parseDate(tmpDate[2],options.formatDate);}
if(tmpDate&&tmpDate[2]){timeOffset=tmpDate[2].getTime()-(tmpDate[2].getTimezoneOffset())*60000;currentTime=new Date((_xdsoft_datetime.now()).getTime()+parseInt(tmpDate[1]+'1',10)*timeOffset);}else{currentTime=sDateTime?Date.parseDate(sDateTime,options.format):_this.now();}
if(!_this.isValidDate(currentTime)){currentTime=_this.now();}
return currentTime;};_this.strToDate=function(sDate){if(sDate&&sDate instanceof Date&&_this.isValidDate(sDate)){return sDate;}
var currentTime=sDate?Date.parseDate(sDate,options.formatDate):_this.now(true);if(!_this.isValidDate(currentTime)){currentTime=_this.now(true);}
return currentTime;};_this.strtotime=function(sTime){if(sTime&&sTime instanceof Date&&_this.isValidDate(sTime)){return sTime;}
var currentTime=sTime?Date.parseDate(sTime,options.formatTime):_this.now(true);if(!_this.isValidDate(currentTime)){currentTime=_this.now(true);}
return currentTime;};_this.str=function(){return _this.currentTime.dateFormat(options.format);};_this.currentTime=this.now();};_xdsoft_datetime=new XDSoft_datetime();mounth_picker.find('.xdsoft_today_button').on('mousedown.xdsoft',function(){datetimepicker.data('changed',true);_xdsoft_datetime.setCurrentTime(0);datetimepicker.trigger('afterOpen.xdsoft');}).on('dblclick.xdsoft',function(){input.val(_xdsoft_datetime.str());datetimepicker.trigger('close.xdsoft');});mounth_picker.find('.xdsoft_prev,.xdsoft_next').on('mousedown.xdsoft',function(){var $this=$(this),timer=0,stop=false;(function arguments_callee1(v){var month=_xdsoft_datetime.currentTime.getMonth();if($this.hasClass(options.next)){_xdsoft_datetime.nextMonth();}else if($this.hasClass(options.prev)){_xdsoft_datetime.prevMonth();}
if(options.monthChangeSpinner){if(!stop){timer=setTimeout(arguments_callee1,v||100);}}}(500));$([document.body,window]).on('mouseup.xdsoft',function arguments_callee2(){clearTimeout(timer);stop=true;$([document.body,window]).off('mouseup.xdsoft',arguments_callee2);});});timepicker.find('.xdsoft_prev,.xdsoft_next').on('mousedown.xdsoft',function(){var $this=$(this),timer=0,stop=false,period=110;(function arguments_callee4(v){var pheight=timeboxparent[0].clientHeight,height=timebox[0].offsetHeight,top=Math.abs(parseInt(timebox.css('marginTop'),10));if($this.hasClass(options.next)&&(height-pheight)-options.timeHeightInTimePicker>=top){timebox.css('marginTop','-'+(top+options.timeHeightInTimePicker)+'px');}else if($this.hasClass(options.prev)&&top-options.timeHeightInTimePicker>=0){timebox.css('marginTop','-'+(top-options.timeHeightInTimePicker)+'px');}
timeboxparent.trigger('scroll_element.xdsoft_scroller',[Math.abs(parseInt(timebox.css('marginTop'),10)/(height-pheight))]);period=(period>10)?10:period-10;if(!stop){timer=setTimeout(arguments_callee4,v||period);}}(500));$([document.body,window]).on('mouseup.xdsoft',function arguments_callee5(){clearTimeout(timer);stop=true;$([document.body,window]).off('mouseup.xdsoft',arguments_callee5);});});xchangeTimer=0;datetimepicker.on('xchange.xdsoft',function(event){clearTimeout(xchangeTimer);xchangeTimer=setTimeout(function(){var table='',start=new Date(_xdsoft_datetime.currentTime.getFullYear(),_xdsoft_datetime.currentTime.getMonth(),1,12,0,0),i=0,j,today=_xdsoft_datetime.now(),maxDate=false,minDate=false,d,y,m,w,classes=[],customDateSettings,newRow=true,time='',h='',line_time;while(start.getDay()!==options.dayOfWeekStart){start.setDate(start.getDate()-1);}
table+='<table><thead><tr>';if(options.weeks){table+='<th></th>';}
for(j=0;j<7;j+=1){table+='<th>'+options.i18n[options.lang].dayOfWeek[(j+options.dayOfWeekStart)%7]+'</th>';}
table+='</tr></thead>';table+='<tbody>';if(options.maxDate!==false){maxDate=_xdsoft_datetime.strToDate(options.maxDate);maxDate=new Date(maxDate.getFullYear(),maxDate.getMonth(),maxDate.getDate(),23,59,59,999);}
if(options.minDate!==false){minDate=_xdsoft_datetime.strToDate(options.minDate);minDate=new Date(minDate.getFullYear(),minDate.getMonth(),minDate.getDate());}
while(i<_xdsoft_datetime.currentTime.countDaysInMonth()||start.getDay()!==options.dayOfWeekStart||_xdsoft_datetime.currentTime.getMonth()===start.getMonth()){classes=[];i+=1;d=start.getDate();y=start.getFullYear();m=start.getMonth();w=_xdsoft_datetime.getWeekOfYear(start);classes.push('xdsoft_date');if(options.beforeShowDay&&$.isFunction(options.beforeShowDay.call)){customDateSettings=options.beforeShowDay.call(datetimepicker,start);}else{customDateSettings=null;}
if((maxDate!==false&&start>maxDate)||(minDate!==false&&start<minDate)||(customDateSettings&&customDateSettings[0]===false)){classes.push('xdsoft_disabled');}else if(options.disabledDates.indexOf(start.dateFormat(options.formatDate))!==-1){classes.push('xdsoft_disabled');}
if(customDateSettings&&customDateSettings[1]!==""){classes.push(customDateSettings[1]);}
if(_xdsoft_datetime.currentTime.getMonth()!==m){classes.push('xdsoft_other_month');}
if((options.defaultSelect||datetimepicker.data('changed'))&&_xdsoft_datetime.currentTime.dateFormat(options.formatDate)===start.dateFormat(options.formatDate)){classes.push('xdsoft_current');}
if(today.dateFormat(options.formatDate)===start.dateFormat(options.formatDate)){classes.push('xdsoft_today');}
if(start.getDay()===0||start.getDay()===6||options.weekends.indexOf(start.dateFormat(options.formatDate))===-1){classes.push('xdsoft_weekend');}
if(options.beforeShowDay&&$.isFunction(options.beforeShowDay)){classes.push(options.beforeShowDay(start));}
if(newRow){table+='<tr>';newRow=false;if(options.weeks){table+='<th>'+w+'</th>';}}
table+='<td data-date="'+d+'" data-month="'+m+'" data-year="'+y+'"'+' class="xdsoft_date xdsoft_day_of_week'+start.getDay()+' '+classes.join(' ')+'">'+'<div>'+d+'</div>'+'</td>';if(start.getDay()===options.dayOfWeekStartPrev){table+='</tr>';newRow=true;}
start.setDate(d+1);}
table+='</tbody></table>';calendar.html(table);mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[options.lang].months[_xdsoft_datetime.currentTime.getMonth()]);mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());time='';h='';m='';line_time=function line_time(h,m){var now=_xdsoft_datetime.now();now.setHours(h);h=parseInt(now.getHours(),10);now.setMinutes(m);m=parseInt(now.getMinutes(),10);classes=[];if((options.maxTime!==false&&_xdsoft_datetime.strtotime(options.maxTime).getTime()<now.getTime())||(options.minTime!==false&&_xdsoft_datetime.strtotime(options.minTime).getTime()>now.getTime())){classes.push('xdsoft_disabled');}
if((options.initTime||options.defaultSelect||datetimepicker.data('changed'))&&parseInt(_xdsoft_datetime.currentTime.getHours(),10)===parseInt(h,10)&&(options.step>59||Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes()/options.step)*options.step===parseInt(m,10))){if(options.defaultSelect||datetimepicker.data('changed')){classes.push('xdsoft_current');}else if(options.initTime){classes.push('xdsoft_init_time');}}
if(parseInt(today.getHours(),10)===parseInt(h,10)&&parseInt(today.getMinutes(),10)===parseInt(m,10)){classes.push('xdsoft_today');}
time+='<div class="xdsoft_time '+classes.join(' ')+'" data-hour="'+h+'" data-minute="'+m+'">'+now.dateFormat(options.formatTime)+'</div>';};if(!options.allowTimes||!$.isArray(options.allowTimes)||!options.allowTimes.length){for(i=0,j=0;i<(options.hours12?12:24);i+=1){for(j=0;j<60;j+=options.step){h=(i<10?'0':'')+i;m=(j<10?'0':'')+j;line_time(h,m);}}}else{for(i=0;i<options.allowTimes.length;i+=1){h=_xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();m=_xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();line_time(h,m);}}
timebox.html(time);opt='';i=0;for(i=parseInt(options.yearStart,10)+options.yearOffset;i<=parseInt(options.yearEnd,10)+options.yearOffset;i+=1){opt+='<div class="xdsoft_option '+(_xdsoft_datetime.currentTime.getFullYear()===i?'xdsoft_current':'')+'" data-value="'+i+'">'+i+'</div>';}
yearselect.children().eq(0).html(opt);for(i=0,opt='';i<=11;i+=1){opt+='<div class="xdsoft_option '+(_xdsoft_datetime.currentTime.getMonth()===i?'xdsoft_current':'')+'" data-value="'+i+'">'+options.i18n[options.lang].months[i]+'</div>';}
monthselect.children().eq(0).html(opt);$(datetimepicker).trigger('generate.xdsoft');},10);event.stopPropagation();}).on('afterOpen.xdsoft',function(){if(options.timepicker){var classType,pheight,height,top;if(timebox.find('.xdsoft_current').length){classType='.xdsoft_current';}else if(timebox.find('.xdsoft_init_time').length){classType='.xdsoft_init_time';}
if(classType){pheight=timeboxparent[0].clientHeight;height=timebox[0].offsetHeight;top=timebox.find(classType).index()*options.timeHeightInTimePicker+1;if((height-pheight)<top){top=height-pheight;}
timeboxparent.trigger('scroll_element.xdsoft_scroller',[parseInt(top,10)/(height-pheight)]);}else{timeboxparent.trigger('scroll_element.xdsoft_scroller',[0]);}}});timerclick=0;calendar.on('click.xdsoft','td',function(xdevent){xdevent.stopPropagation();timerclick+=1;var $this=$(this),currentTime=_xdsoft_datetime.currentTime;if(currentTime===undefined||currentTime===null){_xdsoft_datetime.currentTime=_xdsoft_datetime.now();currentTime=_xdsoft_datetime.currentTime;}
if($this.hasClass('xdsoft_disabled')){return false;}
currentTime.setDate(1);currentTime.setFullYear($this.data('year'));currentTime.setMonth($this.data('month'));currentTime.setDate($this.data('date'));datetimepicker.trigger('select.xdsoft',[currentTime]);input.val(_xdsoft_datetime.str());if((timerclick>1||(options.closeOnDateSelect===true||(options.closeOnDateSelect===0&&!options.timepicker)))&&!options.inline){datetimepicker.trigger('close.xdsoft');}
if(options.onSelectDate&&$.isFunction(options.onSelectDate)){options.onSelectDate.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'),xdevent);}
datetimepicker.data('changed',true);datetimepicker.trigger('xchange.xdsoft');datetimepicker.trigger('changedatetime.xdsoft');setTimeout(function(){timerclick=0;},200);});timebox.on('click.xdsoft','div',function(xdevent){xdevent.stopPropagation();var $this=$(this),currentTime=_xdsoft_datetime.currentTime;if(currentTime===undefined||currentTime===null){_xdsoft_datetime.currentTime=_xdsoft_datetime.now();currentTime=_xdsoft_datetime.currentTime;}
if($this.hasClass('xdsoft_disabled')){return false;}
currentTime.setHours($this.data('hour'));currentTime.setMinutes($this.data('minute'));datetimepicker.trigger('select.xdsoft',[currentTime]);datetimepicker.data('input').val(_xdsoft_datetime.str());if(!options.inline){datetimepicker.trigger('close.xdsoft');}
if(options.onSelectTime&&$.isFunction(options.onSelectTime)){options.onSelectTime.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'),xdevent);}
datetimepicker.data('changed',true);datetimepicker.trigger('xchange.xdsoft');datetimepicker.trigger('changedatetime.xdsoft');});datepicker.on('mousewheel.xdsoft',function(event){if(!options.scrollMonth){return true;}
if(event.deltaY<0){_xdsoft_datetime.nextMonth();}else{_xdsoft_datetime.prevMonth();}
return false;});input.on('mousewheel.xdsoft',function(event){if(!options.scrollInput){return true;}
if(!options.datepicker&&options.timepicker){current_time_index=timebox.find('.xdsoft_current').length?timebox.find('.xdsoft_current').eq(0).index():0;if(current_time_index+event.deltaY>=0&&current_time_index+event.deltaY<timebox.children().length){current_time_index+=event.deltaY;}
if(timebox.children().eq(current_time_index).length){timebox.children().eq(current_time_index).trigger('mousedown');}
return false;}
if(options.datepicker&&!options.timepicker){datepicker.trigger(event,[event.deltaY,event.deltaX,event.deltaY]);if(input.val){input.val(_xdsoft_datetime.str());}
datetimepicker.trigger('changedatetime.xdsoft');return false;}});datetimepicker.on('changedatetime.xdsoft',function(event){if(options.onChangeDateTime&&$.isFunction(options.onChangeDateTime)){var $input=datetimepicker.data('input');options.onChangeDateTime.call(datetimepicker,_xdsoft_datetime.currentTime,$input,event);delete options.value;$input.trigger('change');}}).on('generate.xdsoft',function(){if(options.onGenerate&&$.isFunction(options.onGenerate)){options.onGenerate.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));}
if(triggerAfterOpen){datetimepicker.trigger('afterOpen.xdsoft');triggerAfterOpen=false;}}).on('click.xdsoft',function(xdevent){xdevent.stopPropagation();});current_time_index=0;setPos=function(){var offset=datetimepicker.data('input').offset(),top=offset.top+datetimepicker.data('input')[0].offsetHeight-1,left=offset.left,position="absolute";if(options.fixed){top-=$(window).scrollTop();left-=$(window).scrollLeft();position="fixed";}else{if(top+datetimepicker[0].offsetHeight>$(window).height()+$(window).scrollTop()){top=offset.top-datetimepicker[0].offsetHeight+1;}
if(top<0){top=0;}
if(left+datetimepicker[0].offsetWidth>$(window).width()){left=$(window).width()-datetimepicker[0].offsetWidth;}}
datetimepicker.css({left:left,top:top,position:position});};datetimepicker.on('open.xdsoft',function(event){var onShow=true;if(options.onShow&&$.isFunction(options.onShow)){onShow=options.onShow.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'),event);}
if(onShow!==false){datetimepicker.show();setPos();$(window).off('resize.xdsoft',setPos).on('resize.xdsoft',setPos);if(options.closeOnWithoutClick){$([document.body,window]).on('mousedown.xdsoft',function arguments_callee6(){datetimepicker.trigger('close.xdsoft');$([document.body,window]).off('mousedown.xdsoft',arguments_callee6);});}}}).on('close.xdsoft',function(event){var onClose=true;mounth_picker.find('.xdsoft_month,.xdsoft_year').find('.xdsoft_select').hide();if(options.onClose&&$.isFunction(options.onClose)){onClose=options.onClose.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'),event);}
if(onClose!==false&&!options.opened&&!options.inline){datetimepicker.hide();}
event.stopPropagation();}).on('toggle.xdsoft',function(event){datetimepicker.is(':visible')?datetimepicker.trigger('close.xdsoft'):datetimepicker.trigger('open.xdsoft');}).data('input',input);timer=0;timer1=0;datetimepicker.data('xdsoft_datetime',_xdsoft_datetime);datetimepicker.setOptions(options);function getCurrentValue(){var ct=false,time;if(options.startDate){ct=_xdsoft_datetime.strToDate(options.startDate);}else{ct=options.value||((input&&input.val&&input.val())?input.val():'');if(ct){ct=_xdsoft_datetime.strToDateTime(ct);}else if(options.defaultDate){ct=_xdsoft_datetime.strToDate(options.defaultDate);if(options.defaultTime){time=_xdsoft_datetime.strtotime(options.defaultTime);ct.setHours(time.getHours());ct.setMinutes(time.getMinutes());}}}
if(ct&&_xdsoft_datetime.isValidDate(ct)){datetimepicker.data('changed',true);}else{ct='';}
return ct||0;}
_xdsoft_datetime.setCurrentTime(getCurrentValue());input.data('xdsoft_datetimepicker',datetimepicker).on('open.xdsoft focusin.xdsoft mousedown.xdsoft',function(event){if(input.is(':disabled')||input.is(':hidden')||!input.is(':visible')||(input.data('xdsoft_datetimepicker').is(':visible')&&options.closeOnInputClick)){return;}
clearTimeout(timer);timer=setTimeout(function(){if(input.is(':disabled')||input.is(':hidden')||!input.is(':visible')){return;}
triggerAfterOpen=true;_xdsoft_datetime.setCurrentTime(getCurrentValue());datetimepicker.trigger('open.xdsoft');},100);}).on('keydown.xdsoft',function(event){var val=this.value,elementSelector,key=event.which;if([ENTER].indexOf(key)!==-1&&options.enterLikeTab){elementSelector=$("input:visible,textarea:visible");datetimepicker.trigger('close.xdsoft');elementSelector.eq(elementSelector.index(this)+1).focus();return false;}
if([TAB].indexOf(key)!==-1){datetimepicker.trigger('close.xdsoft');return true;}});};destroyDateTimePicker=function(input){var datetimepicker=input.data('xdsoft_datetimepicker');if(datetimepicker){datetimepicker.data('xdsoft_datetime',null);datetimepicker.remove();input.data('xdsoft_datetimepicker',null).off('.xdsoft');$(window).off('resize.xdsoft');$([window,document.body]).off('mousedown.xdsoft');if(input.unmousewheel){input.unmousewheel();}}};$(document).off('keydown.xdsoftctrl keyup.xdsoftctrl').on('keydown.xdsoftctrl',function(e){if(e.keyCode===CTRLKEY){ctrlDown=true;}}).on('keyup.xdsoftctrl',function(e){if(e.keyCode===CTRLKEY){ctrlDown=false;}});return this.each(function(){var datetimepicker=$(this).data('xdsoft_datetimepicker');if(datetimepicker){if($.type(opt)==='string'){switch(opt){case'show':$(this).select().focus();datetimepicker.trigger('open.xdsoft');break;case'hide':datetimepicker.trigger('close.xdsoft');break;case'toggle':datetimepicker.trigger('toggle.xdsoft');break;case'destroy':destroyDateTimePicker($(this));break;case'reset':this.value=this.defaultValue;if(!this.value||!datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value,options.format))){datetimepicker.data('changed',false);}
datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);break;}}else{datetimepicker.setOptions(opt);}
return 0;}
if($.type(opt)!=='string'){if(!options.lazyInit||options.open||options.inline){createDateTimePicker($(this));}else{lazyInit($(this));}}});};$.fn.datetimepicker.defaults=default_options;}(jQuery));(function(){
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
Date.parseFunctions = {
    count: 0
};
Date.parseRegexes = [];
Date.formatFunctions = {
    count: 0
};
Date.prototype.dateFormat = function(b) {
    if (b == "unixtime") {
        return parseInt(this.getTime() / 1000);
    }
    if (Date.formatFunctions[b] == null) {
        Date.createNewFormat(b);
    }
    var a = Date.formatFunctions[b];
    return this[a]();
};
Date.createNewFormat = function(format) {
    var funcName = "format" + Date.formatFunctions.count++;
    Date.formatFunctions[format] = funcName;
    var code = "Date.prototype." + funcName + " = function() {return ";
    var special = false;
    var ch = "";
    for (var i = 0; i < format.length; ++i) {
        ch = format.charAt(i);
        if (!special && ch == "\\") {
            special = true;
        } else {
            if (special) {
                special = false;
                code += "'" + String.escape(ch) + "' + ";
            } else {
                code += Date.getFormatCode(ch);
            }
        }
    }
    eval(code.substring(0, code.length - 3) + ";}");
};
Date.getFormatCode = function(a) {
    switch (a) {
        case "d":
            return "String.leftPad(this.getDate(), 2, '0') + ";
        case "D":
            return "Date.dayNames[this.getDay()].substring(0, 3) + ";
        case "j":
            return "this.getDate() + ";
        case "l":
            return "Date.dayNames[this.getDay()] + ";
        case "S":
            return "this.getSuffix() + ";
        case "w":
            return "this.getDay() + ";
        case "z":
            return "this.getDayOfYear() + ";
        case "W":
            return "this.getWeekOfYear() + ";
        case "F":
            return "Date.monthNames[this.getMonth()] + ";
        case "m":
            return "String.leftPad(this.getMonth() + 1, 2, '0') + ";
        case "M":
            return "Date.monthNames[this.getMonth()].substring(0, 3) + ";
        case "n":
            return "(this.getMonth() + 1) + ";
        case "t":
            return "this.getDaysInMonth() + ";
        case "L":
            return "(this.isLeapYear() ? 1 : 0) + ";
        case "Y":
            return "this.getFullYear() + ";
        case "y":
            return "('' + this.getFullYear()).substring(2, 4) + ";
        case "a":
            return "(this.getHours() < 12 ? 'am' : 'pm') + ";
        case "A":
            return "(this.getHours() < 12 ? 'AM' : 'PM') + ";
        case "g":
            return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
        case "G":
            return "this.getHours() + ";
        case "h":
            return "String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
        case "H":
            return "String.leftPad(this.getHours(), 2, '0') + ";
        case "i":
            return "String.leftPad(this.getMinutes(), 2, '0') + ";
        case "s":
            return "String.leftPad(this.getSeconds(), 2, '0') + ";
        case "O":
            return "this.getGMTOffset() + ";
        case "T":
            return "this.getTimezone() + ";
        case "Z":
            return "(this.getTimezoneOffset() * -60) + ";
        default:
            return "'" + String.escape(a) + "' + ";
    }
};
Date.parseDate = function(a, c) {
    if (c == "unixtime") {
        return new Date(!isNaN(parseInt(a)) ? parseInt(a) * 1000 : 0);
    }
    if (Date.parseFunctions[c] == null) {
        Date.createParser(c);
    }
    var b = Date.parseFunctions[c];
    return Date[b](a);
};
Date.createParser = function(format) {
    var funcName = "parse" + Date.parseFunctions.count++;
    var regexNum = Date.parseRegexes.length;
    var currentGroup = 1;
    Date.parseFunctions[format] = funcName;
    var code = "Date." + funcName + " = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes[" + regexNum + "]);\nif (results && results.length > 0) {";
    var regex = "";
    var special = false;
    var ch = "";
    for (var i = 0; i < format.length; ++i) {
        ch = format.charAt(i);
        if (!special && ch == "\\") {
            special = true;
        } else {
            if (special) {
                special = false;
                regex += String.escape(ch);
            } else {
                obj = Date.formatCodeToRegex(ch, currentGroup);
                currentGroup += obj.g;
                regex += obj.s;
                if (obj.g && obj.c) {
                    code += obj.c;
                }
            }
        }
    }
    code += "if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";
    code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";
    Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$");
    eval(code);
};
Date.formatCodeToRegex = function(b, a) {
    switch (b) {
        case "D":
            return {
                g: 0,
                c: null,
                s: "(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"
            };
        case "j":
        case "d":
            return {
                g: 1,
                c: "d = parseInt(results[" + a + "], 10);\n",
                s: "(\\d{1,2})"
            };
        case "l":
            return {
                g: 0,
                c: null,
                s: "(?:" + Date.dayNames.join("|") + ")"
            };
        case "S":
            return {
                g: 0,
                c: null,
                s: "(?:st|nd|rd|th)"
            };
        case "w":
            return {
                g: 0,
                c: null,
                s: "\\d"
            };
        case "z":
            return {
                g: 1,
                c: "z = parseInt(results[" + a + "], 10);\n",
                s: "(\\d{1,3})"
            };
        case "W":
            return {
                g: 0,
                c: null,
                s: "(?:\\d{2})"
            };
        case "F":
            return {
                g: 1,
                c: "m = parseInt(Date.monthNumbers[results[" + a + "].substring(0, 3)], 10);\n",
                s: "(" + Date.monthNames.join("|") + ")"
            };
        case "M":
            return {
                g: 1,
                c: "m = parseInt(Date.monthNumbers[results[" + a + "]], 10);\n",
                s: "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"
            };
        case "n":
        case "m":
            return {
                g: 1,
                c: "m = parseInt(results[" + a + "], 10) - 1;\n",
                s: "(\\d{1,2})"
            };
        case "t":
            return {
                g: 0,
                c: null,
                s: "\\d{1,2}"
            };
        case "L":
            return {
                g: 0,
                c: null,
                s: "(?:1|0)"
            };
        case "Y":
            return {
                g: 1,
                c: "y = parseInt(results[" + a + "], 10);\n",
                s: "(\\d{4})"
            };
        case "y":
            return {
                g: 1,
                c: "var ty = parseInt(results[" + a + "], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
                s: "(\\d{1,2})"
            };
        case "a":
            return {
                g: 1,
                c: "if (results[" + a + "] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
                s: "(am|pm)"
            };
        case "A":
            return {
                g: 1,
                c: "if (results[" + a + "] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
                s: "(AM|PM)"
            };
        case "g":
        case "G":
        case "h":
        case "H":
            return {
                g: 1,
                c: "h = parseInt(results[" + a + "], 10);\n",
                s: "(\\d{1,2})"
            };
        case "i":
            return {
                g: 1,
                c: "i = parseInt(results[" + a + "], 10);\n",
                s: "(\\d{2})"
            };
        case "s":
            return {
                g: 1,
                c: "s = parseInt(results[" + a + "], 10);\n",
                s: "(\\d{2})"
            };
        case "O":
            return {
                g: 0,
                c: null,
                s: "[+-]\\d{4}"
            };
        case "T":
            return {
                g: 0,
                c: null,
                s: "[A-Z]{3}"
            };
        case "Z":
            return {
                g: 0,
                c: null,
                s: "[+-]\\d{1,5}"
            };
        default:
            return {
                g: 0,
                c: null,
                s: String.escape(b)
            };
    }
};
Date.prototype.getTimezone = function() {
    return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3");
};
Date.prototype.getGMTOffset = function() {
    return (this.getTimezoneOffset() > 0 ? "-" : "+") + String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset()) / 60), 2, "0") + String.leftPad(Math.abs(this.getTimezoneOffset()) % 60, 2, "0");
};
Date.prototype.getDayOfYear = function() {
    var a = 0;
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    for (var b = 0; b < this.getMonth(); ++b) {
        a += Date.daysInMonth[b];
    }
    return a + this.getDate();
};
Date.prototype.getWeekOfYear = function() {
    var b = this.getDayOfYear() + (4 - this.getDay());
    var a = new Date(this.getFullYear(), 0, 1);
    var c = (7 - a.getDay() + 4);
    return String.leftPad(Math.ceil((b - c) / 7) + 1, 2, "0");
};
Date.prototype.isLeapYear = function() {
    var a = this.getFullYear();
    return ((a & 3) == 0 && (a % 100 || (a % 400 == 0 && a)));
};
Date.prototype.getFirstDayOfMonth = function() {
    var a = (this.getDay() - (this.getDate() - 1)) % 7;
    return (a < 0) ? (a + 7) : a;
};
Date.prototype.getLastDayOfMonth = function() {
    var a = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
    return (a < 0) ? (a + 7) : a;
};
Date.prototype.getDaysInMonth = function() {
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    return Date.daysInMonth[this.getMonth()];
};
Date.prototype.getSuffix = function() {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th";
    }
};
String.escape = function(a) {
    return a.replace(/('|\\)/g, "\\$1");
};
String.leftPad = function(d, b, c) {
    var a = new String(d);
    if (c == null) {
        c = " ";
    }
    while (a.length < b) {
        a = c + a;
    }
    return a;
};
Date.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
Date.y2kYear = 50;
Date.monthNumbers = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
};
Date.patterns = {
    ISO8601LongPattern: "Y-m-d H:i:s",
    ISO8601ShortPattern: "Y-m-d",
    ShortDatePattern: "n/j/Y",
    LongDatePattern: "l, F d, Y",
    FullDateTimePattern: "l, F d, Y g:i:s A",
    MonthDayPattern: "F d",
    ShortTimePattern: "g:i A",
    LongTimePattern: "g:i:s A",
    SortableDateTimePattern: "Y-m-d\\TH:i:s",
    UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
    YearMonthPattern: "F, Y"
};
}());
! function(a) {
    "undefined" == typeof a.fn.each2 && a.extend(a.fn, {
        each2: function(b) {
            for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;);
            return this
        }
    })
}(jQuery),
function(a, b) {
    "use strict";

    function n(b) {
        var c = a(document.createTextNode(""));
        b.before(c), c.before(b), c.remove()
    }

    function o(a) {
        function b(a) {
            return m[a] || a
        }
        return a.replace(/[^\u0000-\u007E]/g, b)
    }

    function p(a, b) {
        for (var c = 0, d = b.length; d > c; c += 1)
            if (r(a, b[c])) return c;
        return -1
    }

    function q() {
        var b = a(l);
        b.appendTo(document.body);
        var c = {
            width: b.width() - b[0].clientWidth,
            height: b.height() - b[0].clientHeight
        };
        return b.remove(), c
    }

    function r(a, c) {
        return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1
    }

    function s(a, b, c) {
        var d, e, f;
        if (null === a || a.length < 1) return [];
        for (d = a.split(b), e = 0, f = d.length; f > e; e += 1) d[e] = c(d[e]);
        return d
    }

    function t(a) {
        return a.outerWidth(!1) - a.width()
    }

    function u(c) {
        var d = "keyup-change-value";
        c.on("keydown", function() {
            a.data(c, d) === b && a.data(c, d, c.val())
        }), c.on("keyup", function() {
            var e = a.data(c, d);
            e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
        })
    }

    function v(c) {
        c.on("mousemove", function(c) {
            var d = h;
            (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
        })
    }

    function w(a, c, d) {
        d = d || b;
        var e;
        return function() {
            var b = arguments;
            window.clearTimeout(e), e = window.setTimeout(function() {
                c.apply(d, b)
            }, a)
        }
    }

    function x(a, b) {
        var c = w(a, function(a) {
            b.trigger("scroll-debounced", a)
        });
        b.on("scroll", function(a) {
            p(a.target, b.get()) >= 0 && c(a)
        })
    }

    function y(a) {
        a[0] !== document.activeElement && window.setTimeout(function() {
            var d, b = a[0],
                c = a.val().length;
            a.focus();
            var e = b.offsetWidth > 0 || b.offsetHeight > 0;
            e && b === document.activeElement && (b.setSelectionRange ? b.setSelectionRange(c, c) : b.createTextRange && (d = b.createTextRange(), d.collapse(!1), d.select()))
        }, 0)
    }

    function z(b) {
        b = a(b)[0];
        var c = 0,
            d = 0;
        if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;
        else if ("selection" in document) {
            b.focus();
            var e = document.selection.createRange();
            d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
        }
        return {
            offset: c,
            length: d
        }
    }

    function A(a) {
        a.preventDefault(), a.stopPropagation()
    }

    function B(a) {
        a.preventDefault(), a.stopImmediatePropagation()
    }

    function C(b) {
        if (!g) {
            var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
            g = a(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: c.fontSize,
                fontFamily: c.fontFamily,
                fontStyle: c.fontStyle,
                fontWeight: c.fontWeight,
                letterSpacing: c.letterSpacing,
                textTransform: c.textTransform,
                whiteSpace: "nowrap"
            }), g.attr("class", "select2-sizer"), a(document.body).append(g)
        }
        return g.text(b.val()), g.width()
    }

    function D(b, c, d) {
        var e, g, f = [];
        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
            0 === this.indexOf("select2-") && f.push(this)
        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
            0 !== this.indexOf("select2-") && (g = d(this), g && f.push(g))
        })), b.attr("class", f.join(" "))
    }

    function E(a, b, c, d) {
        var e = o(a.toUpperCase()).indexOf(o(b.toUpperCase())),
            f = b.length;
        return 0 > e ? (c.push(d(a)), void 0) : (c.push(d(a.substring(0, e))), c.push("<span class='select2-match'>"), c.push(d(a.substring(e, e + f))), c.push("</span>"), c.push(d(a.substring(e + f, a.length))), void 0)
    }

    function F(a) {
        var b = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(a).replace(/[&<>"'\/\\]/g, function(a) {
            return b[a]
        })
    }

    function G(c) {
        var d, e = null,
            f = c.quietMillis || 100,
            g = c.url,
            h = this;
        return function(i) {
            window.clearTimeout(d), d = window.setTimeout(function() {
                var d = c.data,
                    f = g,
                    j = c.transport || a.fn.select2.ajaxDefaults.transport,
                    k = {
                        type: c.type || "GET",
                        cache: c.cache || !1,
                        jsonpCallback: c.jsonpCallback || b,
                        dataType: c.dataType || "json"
                    },
                    l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
                d = d ? d.call(h, i.term, i.page, i.context) : null, f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f, e && "function" == typeof e.abort && e.abort(), c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)), a.extend(l, {
                    url: f,
                    dataType: c.dataType,
                    data: d,
                    success: function(a) {
                        var b = c.results(a, i.page, i);
                        i.callback(b)
                    },
                    error: function(a, b, c) {
                        var d = {
                            hasError: !0,
                            jqXHR: a,
                            textStatus: b,
                            errorThrown: c
                        };
                        i.callback(d)
                    }
                }), e = j.call(h, l)
            }, f)
        }
    }

    function H(b) {
        var d, e, c = b,
            f = function(a) {
                return "" + a.text
            };
        a.isArray(c) && (e = c, c = {
            results: e
        }), a.isFunction(c) === !1 && (e = c, c = function() {
            return e
        });
        var g = c();
        return g.text && (f = g.text, a.isFunction(f) || (d = g.text, f = function(a) {
                return a[d]
            })),
            function(b) {
                var g, d = b.term,
                    e = {
                        results: []
                    };
                return "" === d ? (b.callback(c()), void 0) : (g = function(c, e) {
                    var h, i;
                    if (c = c[0], c.children) {
                        h = {};
                        for (i in c) c.hasOwnProperty(i) && (h[i] = c[i]);
                        h.children = [], a(c.children).each2(function(a, b) {
                            g(b, h.children)
                        }), (h.children.length || b.matcher(d, f(h), c)) && e.push(h)
                    } else b.matcher(d, f(c), c) && e.push(c)
                }, a(c().results).each2(function(a, b) {
                    g(b, e.results)
                }), b.callback(e), void 0)
            }
    }

    function I(c) {
        var d = a.isFunction(c);
        return function(e) {
            var f = e.term,
                g = {
                    results: []
                },
                h = d ? c(e) : c;
            a.isArray(h) && (a(h).each(function() {
                var a = this.text !== b,
                    c = a ? this.text : this;
                ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
                    id: this,
                    text: this
                })
            }), e.callback(g))
        }
    }

    function J(b, c) {
        if (a.isFunction(b)) return !0;
        if (!b) return !1;
        if ("string" == typeof b) return !0;
        throw new Error(c + " must be a string, function, or falsy value")
    }

    function K(b, c) {
        if (a.isFunction(b)) {
            var d = Array.prototype.slice.call(arguments, 2);
            return b.apply(c, d)
        }
        return b
    }

    function L(b) {
        var c = 0;
        return a.each(b, function(a, b) {
            b.children ? c += L(b.children) : c++
        }), c
    }

    function M(a, c, d, e) {
        var h, i, j, k, l, f = a,
            g = !1;
        if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1) return b;
        for (;;) {
            for (i = -1, j = 0, k = e.tokenSeparators.length; k > j && (l = e.tokenSeparators[j], i = a.indexOf(l), !(i >= 0)); j++);
            if (0 > i) break;
            if (h = a.substring(0, i), a = a.substring(i + l.length), h.length > 0 && (h = e.createSearchChoice.call(this, h, c), h !== b && null !== h && e.id(h) !== b && null !== e.id(h))) {
                for (g = !1, j = 0, k = c.length; k > j; j++)
                    if (r(e.id(h), e.id(c[j]))) {
                        g = !0;
                        break
                    }
                g || d(h)
            }
        }
        return f !== a ? a : void 0
    }

    function N() {
        var b = this;
        a.each(arguments, function(a, c) {
            b[c].remove(), b[c] = null
        })
    }

    function O(b, c) {
        var d = function() {};
        return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d
    }
    if (window.Select2 === b) {
        var c, d, e, f, g, i, j, h = {
                x: 0,
                y: 0
            },
            k = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(a) {
                    switch (a = a.which ? a.which : a) {
                        case k.LEFT:
                        case k.RIGHT:
                        case k.UP:
                        case k.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function(a) {
                    var b = a.which;
                    switch (b) {
                        case k.SHIFT:
                        case k.CTRL:
                        case k.ALT:
                            return !0
                    }
                    return a.metaKey ? !0 : !1
                },
                isFunctionKey: function(a) {
                    return a = a.which ? a.which : a, a >= 112 && 123 >= a
                }
            },
            l = "<div class='select2-measure-scrollbar'></div>",
            m = {
                "\u24b6": "A",
                "\uff21": "A",
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\u1ea6": "A",
                "\u1ea4": "A",
                "\u1eaa": "A",
                "\u1ea8": "A",
                "\xc3": "A",
                "\u0100": "A",
                "\u0102": "A",
                "\u1eb0": "A",
                "\u1eae": "A",
                "\u1eb4": "A",
                "\u1eb2": "A",
                "\u0226": "A",
                "\u01e0": "A",
                "\xc4": "A",
                "\u01de": "A",
                "\u1ea2": "A",
                "\xc5": "A",
                "\u01fa": "A",
                "\u01cd": "A",
                "\u0200": "A",
                "\u0202": "A",
                "\u1ea0": "A",
                "\u1eac": "A",
                "\u1eb6": "A",
                "\u1e00": "A",
                "\u0104": "A",
                "\u023a": "A",
                "\u2c6f": "A",
                "\ua732": "AA",
                "\xc6": "AE",
                "\u01fc": "AE",
                "\u01e2": "AE",
                "\ua734": "AO",
                "\ua736": "AU",
                "\ua738": "AV",
                "\ua73a": "AV",
                "\ua73c": "AY",
                "\u24b7": "B",
                "\uff22": "B",
                "\u1e02": "B",
                "\u1e04": "B",
                "\u1e06": "B",
                "\u0243": "B",
                "\u0182": "B",
                "\u0181": "B",
                "\u24b8": "C",
                "\uff23": "C",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\xc7": "C",
                "\u1e08": "C",
                "\u0187": "C",
                "\u023b": "C",
                "\ua73e": "C",
                "\u24b9": "D",
                "\uff24": "D",
                "\u1e0a": "D",
                "\u010e": "D",
                "\u1e0c": "D",
                "\u1e10": "D",
                "\u1e12": "D",
                "\u1e0e": "D",
                "\u0110": "D",
                "\u018b": "D",
                "\u018a": "D",
                "\u0189": "D",
                "\ua779": "D",
                "\u01f1": "DZ",
                "\u01c4": "DZ",
                "\u01f2": "Dz",
                "\u01c5": "Dz",
                "\u24ba": "E",
                "\uff25": "E",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\u1ec0": "E",
                "\u1ebe": "E",
                "\u1ec4": "E",
                "\u1ec2": "E",
                "\u1ebc": "E",
                "\u0112": "E",
                "\u1e14": "E",
                "\u1e16": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\xcb": "E",
                "\u1eba": "E",
                "\u011a": "E",
                "\u0204": "E",
                "\u0206": "E",
                "\u1eb8": "E",
                "\u1ec6": "E",
                "\u0228": "E",
                "\u1e1c": "E",
                "\u0118": "E",
                "\u1e18": "E",
                "\u1e1a": "E",
                "\u0190": "E",
                "\u018e": "E",
                "\u24bb": "F",
                "\uff26": "F",
                "\u1e1e": "F",
                "\u0191": "F",
                "\ua77b": "F",
                "\u24bc": "G",
                "\uff27": "G",
                "\u01f4": "G",
                "\u011c": "G",
                "\u1e20": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u01e6": "G",
                "\u0122": "G",
                "\u01e4": "G",
                "\u0193": "G",
                "\ua7a0": "G",
                "\ua77d": "G",
                "\ua77e": "G",
                "\u24bd": "H",
                "\uff28": "H",
                "\u0124": "H",
                "\u1e22": "H",
                "\u1e26": "H",
                "\u021e": "H",
                "\u1e24": "H",
                "\u1e28": "H",
                "\u1e2a": "H",
                "\u0126": "H",
                "\u2c67": "H",
                "\u2c75": "H",
                "\ua78d": "H",
                "\u24be": "I",
                "\uff29": "I",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u0130": "I",
                "\xcf": "I",
                "\u1e2e": "I",
                "\u1ec8": "I",
                "\u01cf": "I",
                "\u0208": "I",
                "\u020a": "I",
                "\u1eca": "I",
                "\u012e": "I",
                "\u1e2c": "I",
                "\u0197": "I",
                "\u24bf": "J",
                "\uff2a": "J",
                "\u0134": "J",
                "\u0248": "J",
                "\u24c0": "K",
                "\uff2b": "K",
                "\u1e30": "K",
                "\u01e8": "K",
                "\u1e32": "K",
                "\u0136": "K",
                "\u1e34": "K",
                "\u0198": "K",
                "\u2c69": "K",
                "\ua740": "K",
                "\ua742": "K",
                "\ua744": "K",
                "\ua7a2": "K",
                "\u24c1": "L",
                "\uff2c": "L",
                "\u013f": "L",
                "\u0139": "L",
                "\u013d": "L",
                "\u1e36": "L",
                "\u1e38": "L",
                "\u013b": "L",
                "\u1e3c": "L",
                "\u1e3a": "L",
                "\u0141": "L",
                "\u023d": "L",
                "\u2c62": "L",
                "\u2c60": "L",
                "\ua748": "L",
                "\ua746": "L",
                "\ua780": "L",
                "\u01c7": "LJ",
                "\u01c8": "Lj",
                "\u24c2": "M",
                "\uff2d": "M",
                "\u1e3e": "M",
                "\u1e40": "M",
                "\u1e42": "M",
                "\u2c6e": "M",
                "\u019c": "M",
                "\u24c3": "N",
                "\uff2e": "N",
                "\u01f8": "N",
                "\u0143": "N",
                "\xd1": "N",
                "\u1e44": "N",
                "\u0147": "N",
                "\u1e46": "N",
                "\u0145": "N",
                "\u1e4a": "N",
                "\u1e48": "N",
                "\u0220": "N",
                "\u019d": "N",
                "\ua790": "N",
                "\ua7a4": "N",
                "\u01ca": "NJ",
                "\u01cb": "Nj",
                "\u24c4": "O",
                "\uff2f": "O",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\u1ed2": "O",
                "\u1ed0": "O",
                "\u1ed6": "O",
                "\u1ed4": "O",
                "\xd5": "O",
                "\u1e4c": "O",
                "\u022c": "O",
                "\u1e4e": "O",
                "\u014c": "O",
                "\u1e50": "O",
                "\u1e52": "O",
                "\u014e": "O",
                "\u022e": "O",
                "\u0230": "O",
                "\xd6": "O",
                "\u022a": "O",
                "\u1ece": "O",
                "\u0150": "O",
                "\u01d1": "O",
                "\u020c": "O",
                "\u020e": "O",
                "\u01a0": "O",
                "\u1edc": "O",
                "\u1eda": "O",
                "\u1ee0": "O",
                "\u1ede": "O",
                "\u1ee2": "O",
                "\u1ecc": "O",
                "\u1ed8": "O",
                "\u01ea": "O",
                "\u01ec": "O",
                "\xd8": "O",
                "\u01fe": "O",
                "\u0186": "O",
                "\u019f": "O",
                "\ua74a": "O",
                "\ua74c": "O",
                "\u01a2": "OI",
                "\ua74e": "OO",
                "\u0222": "OU",
                "\u24c5": "P",
                "\uff30": "P",
                "\u1e54": "P",
                "\u1e56": "P",
                "\u01a4": "P",
                "\u2c63": "P",
                "\ua750": "P",
                "\ua752": "P",
                "\ua754": "P",
                "\u24c6": "Q",
                "\uff31": "Q",
                "\ua756": "Q",
                "\ua758": "Q",
                "\u024a": "Q",
                "\u24c7": "R",
                "\uff32": "R",
                "\u0154": "R",
                "\u1e58": "R",
                "\u0158": "R",
                "\u0210": "R",
                "\u0212": "R",
                "\u1e5a": "R",
                "\u1e5c": "R",
                "\u0156": "R",
                "\u1e5e": "R",
                "\u024c": "R",
                "\u2c64": "R",
                "\ua75a": "R",
                "\ua7a6": "R",
                "\ua782": "R",
                "\u24c8": "S",
                "\uff33": "S",
                "\u1e9e": "S",
                "\u015a": "S",
                "\u1e64": "S",
                "\u015c": "S",
                "\u1e60": "S",
                "\u0160": "S",
                "\u1e66": "S",
                "\u1e62": "S",
                "\u1e68": "S",
                "\u0218": "S",
                "\u015e": "S",
                "\u2c7e": "S",
                "\ua7a8": "S",
                "\ua784": "S",
                "\u24c9": "T",
                "\uff34": "T",
                "\u1e6a": "T",
                "\u0164": "T",
                "\u1e6c": "T",
                "\u021a": "T",
                "\u0162": "T",
                "\u1e70": "T",
                "\u1e6e": "T",
                "\u0166": "T",
                "\u01ac": "T",
                "\u01ae": "T",
                "\u023e": "T",
                "\ua786": "T",
                "\ua728": "TZ",
                "\u24ca": "U",
                "\uff35": "U",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\u0168": "U",
                "\u1e78": "U",
                "\u016a": "U",
                "\u1e7a": "U",
                "\u016c": "U",
                "\xdc": "U",
                "\u01db": "U",
                "\u01d7": "U",
                "\u01d5": "U",
                "\u01d9": "U",
                "\u1ee6": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u01d3": "U",
                "\u0214": "U",
                "\u0216": "U",
                "\u01af": "U",
                "\u1eea": "U",
                "\u1ee8": "U",
                "\u1eee": "U",
                "\u1eec": "U",
                "\u1ef0": "U",
                "\u1ee4": "U",
                "\u1e72": "U",
                "\u0172": "U",
                "\u1e76": "U",
                "\u1e74": "U",
                "\u0244": "U",
                "\u24cb": "V",
                "\uff36": "V",
                "\u1e7c": "V",
                "\u1e7e": "V",
                "\u01b2": "V",
                "\ua75e": "V",
                "\u0245": "V",
                "\ua760": "VY",
                "\u24cc": "W",
                "\uff37": "W",
                "\u1e80": "W",
                "\u1e82": "W",
                "\u0174": "W",
                "\u1e86": "W",
                "\u1e84": "W",
                "\u1e88": "W",
                "\u2c72": "W",
                "\u24cd": "X",
                "\uff38": "X",
                "\u1e8a": "X",
                "\u1e8c": "X",
                "\u24ce": "Y",
                "\uff39": "Y",
                "\u1ef2": "Y",
                "\xdd": "Y",
                "\u0176": "Y",
                "\u1ef8": "Y",
                "\u0232": "Y",
                "\u1e8e": "Y",
                "\u0178": "Y",
                "\u1ef6": "Y",
                "\u1ef4": "Y",
                "\u01b3": "Y",
                "\u024e": "Y",
                "\u1efe": "Y",
                "\u24cf": "Z",
                "\uff3a": "Z",
                "\u0179": "Z",
                "\u1e90": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u1e92": "Z",
                "\u1e94": "Z",
                "\u01b5": "Z",
                "\u0224": "Z",
                "\u2c7f": "Z",
                "\u2c6b": "Z",
                "\ua762": "Z",
                "\u24d0": "a",
                "\uff41": "a",
                "\u1e9a": "a",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\u1ea7": "a",
                "\u1ea5": "a",
                "\u1eab": "a",
                "\u1ea9": "a",
                "\xe3": "a",
                "\u0101": "a",
                "\u0103": "a",
                "\u1eb1": "a",
                "\u1eaf": "a",
                "\u1eb5": "a",
                "\u1eb3": "a",
                "\u0227": "a",
                "\u01e1": "a",
                "\xe4": "a",
                "\u01df": "a",
                "\u1ea3": "a",
                "\xe5": "a",
                "\u01fb": "a",
                "\u01ce": "a",
                "\u0201": "a",
                "\u0203": "a",
                "\u1ea1": "a",
                "\u1ead": "a",
                "\u1eb7": "a",
                "\u1e01": "a",
                "\u0105": "a",
                "\u2c65": "a",
                "\u0250": "a",
                "\ua733": "aa",
                "\xe6": "ae",
                "\u01fd": "ae",
                "\u01e3": "ae",
                "\ua735": "ao",
                "\ua737": "au",
                "\ua739": "av",
                "\ua73b": "av",
                "\ua73d": "ay",
                "\u24d1": "b",
                "\uff42": "b",
                "\u1e03": "b",
                "\u1e05": "b",
                "\u1e07": "b",
                "\u0180": "b",
                "\u0183": "b",
                "\u0253": "b",
                "\u24d2": "c",
                "\uff43": "c",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\xe7": "c",
                "\u1e09": "c",
                "\u0188": "c",
                "\u023c": "c",
                "\ua73f": "c",
                "\u2184": "c",
                "\u24d3": "d",
                "\uff44": "d",
                "\u1e0b": "d",
                "\u010f": "d",
                "\u1e0d": "d",
                "\u1e11": "d",
                "\u1e13": "d",
                "\u1e0f": "d",
                "\u0111": "d",
                "\u018c": "d",
                "\u0256": "d",
                "\u0257": "d",
                "\ua77a": "d",
                "\u01f3": "dz",
                "\u01c6": "dz",
                "\u24d4": "e",
                "\uff45": "e",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\u1ec1": "e",
                "\u1ebf": "e",
                "\u1ec5": "e",
                "\u1ec3": "e",
                "\u1ebd": "e",
                "\u0113": "e",
                "\u1e15": "e",
                "\u1e17": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\xeb": "e",
                "\u1ebb": "e",
                "\u011b": "e",
                "\u0205": "e",
                "\u0207": "e",
                "\u1eb9": "e",
                "\u1ec7": "e",
                "\u0229": "e",
                "\u1e1d": "e",
                "\u0119": "e",
                "\u1e19": "e",
                "\u1e1b": "e",
                "\u0247": "e",
                "\u025b": "e",
                "\u01dd": "e",
                "\u24d5": "f",
                "\uff46": "f",
                "\u1e1f": "f",
                "\u0192": "f",
                "\ua77c": "f",
                "\u24d6": "g",
                "\uff47": "g",
                "\u01f5": "g",
                "\u011d": "g",
                "\u1e21": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u01e7": "g",
                "\u0123": "g",
                "\u01e5": "g",
                "\u0260": "g",
                "\ua7a1": "g",
                "\u1d79": "g",
                "\ua77f": "g",
                "\u24d7": "h",
                "\uff48": "h",
                "\u0125": "h",
                "\u1e23": "h",
                "\u1e27": "h",
                "\u021f": "h",
                "\u1e25": "h",
                "\u1e29": "h",
                "\u1e2b": "h",
                "\u1e96": "h",
                "\u0127": "h",
                "\u2c68": "h",
                "\u2c76": "h",
                "\u0265": "h",
                "\u0195": "hv",
                "\u24d8": "i",
                "\uff49": "i",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\xef": "i",
                "\u1e2f": "i",
                "\u1ec9": "i",
                "\u01d0": "i",
                "\u0209": "i",
                "\u020b": "i",
                "\u1ecb": "i",
                "\u012f": "i",
                "\u1e2d": "i",
                "\u0268": "i",
                "\u0131": "i",
                "\u24d9": "j",
                "\uff4a": "j",
                "\u0135": "j",
                "\u01f0": "j",
                "\u0249": "j",
                "\u24da": "k",
                "\uff4b": "k",
                "\u1e31": "k",
                "\u01e9": "k",
                "\u1e33": "k",
                "\u0137": "k",
                "\u1e35": "k",
                "\u0199": "k",
                "\u2c6a": "k",
                "\ua741": "k",
                "\ua743": "k",
                "\ua745": "k",
                "\ua7a3": "k",
                "\u24db": "l",
                "\uff4c": "l",
                "\u0140": "l",
                "\u013a": "l",
                "\u013e": "l",
                "\u1e37": "l",
                "\u1e39": "l",
                "\u013c": "l",
                "\u1e3d": "l",
                "\u1e3b": "l",
                "\u017f": "l",
                "\u0142": "l",
                "\u019a": "l",
                "\u026b": "l",
                "\u2c61": "l",
                "\ua749": "l",
                "\ua781": "l",
                "\ua747": "l",
                "\u01c9": "lj",
                "\u24dc": "m",
                "\uff4d": "m",
                "\u1e3f": "m",
                "\u1e41": "m",
                "\u1e43": "m",
                "\u0271": "m",
                "\u026f": "m",
                "\u24dd": "n",
                "\uff4e": "n",
                "\u01f9": "n",
                "\u0144": "n",
                "\xf1": "n",
                "\u1e45": "n",
                "\u0148": "n",
                "\u1e47": "n",
                "\u0146": "n",
                "\u1e4b": "n",
                "\u1e49": "n",
                "\u019e": "n",
                "\u0272": "n",
                "\u0149": "n",
                "\ua791": "n",
                "\ua7a5": "n",
                "\u01cc": "nj",
                "\u24de": "o",
                "\uff4f": "o",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\u1ed3": "o",
                "\u1ed1": "o",
                "\u1ed7": "o",
                "\u1ed5": "o",
                "\xf5": "o",
                "\u1e4d": "o",
                "\u022d": "o",
                "\u1e4f": "o",
                "\u014d": "o",
                "\u1e51": "o",
                "\u1e53": "o",
                "\u014f": "o",
                "\u022f": "o",
                "\u0231": "o",
                "\xf6": "o",
                "\u022b": "o",
                "\u1ecf": "o",
                "\u0151": "o",
                "\u01d2": "o",
                "\u020d": "o",
                "\u020f": "o",
                "\u01a1": "o",
                "\u1edd": "o",
                "\u1edb": "o",
                "\u1ee1": "o",
                "\u1edf": "o",
                "\u1ee3": "o",
                "\u1ecd": "o",
                "\u1ed9": "o",
                "\u01eb": "o",
                "\u01ed": "o",
                "\xf8": "o",
                "\u01ff": "o",
                "\u0254": "o",
                "\ua74b": "o",
                "\ua74d": "o",
                "\u0275": "o",
                "\u01a3": "oi",
                "\u0223": "ou",
                "\ua74f": "oo",
                "\u24df": "p",
                "\uff50": "p",
                "\u1e55": "p",
                "\u1e57": "p",
                "\u01a5": "p",
                "\u1d7d": "p",
                "\ua751": "p",
                "\ua753": "p",
                "\ua755": "p",
                "\u24e0": "q",
                "\uff51": "q",
                "\u024b": "q",
                "\ua757": "q",
                "\ua759": "q",
                "\u24e1": "r",
                "\uff52": "r",
                "\u0155": "r",
                "\u1e59": "r",
                "\u0159": "r",
                "\u0211": "r",
                "\u0213": "r",
                "\u1e5b": "r",
                "\u1e5d": "r",
                "\u0157": "r",
                "\u1e5f": "r",
                "\u024d": "r",
                "\u027d": "r",
                "\ua75b": "r",
                "\ua7a7": "r",
                "\ua783": "r",
                "\u24e2": "s",
                "\uff53": "s",
                "\xdf": "s",
                "\u015b": "s",
                "\u1e65": "s",
                "\u015d": "s",
                "\u1e61": "s",
                "\u0161": "s",
                "\u1e67": "s",
                "\u1e63": "s",
                "\u1e69": "s",
                "\u0219": "s",
                "\u015f": "s",
                "\u023f": "s",
                "\ua7a9": "s",
                "\ua785": "s",
                "\u1e9b": "s",
                "\u24e3": "t",
                "\uff54": "t",
                "\u1e6b": "t",
                "\u1e97": "t",
                "\u0165": "t",
                "\u1e6d": "t",
                "\u021b": "t",
                "\u0163": "t",
                "\u1e71": "t",
                "\u1e6f": "t",
                "\u0167": "t",
                "\u01ad": "t",
                "\u0288": "t",
                "\u2c66": "t",
                "\ua787": "t",
                "\ua729": "tz",
                "\u24e4": "u",
                "\uff55": "u",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\u0169": "u",
                "\u1e79": "u",
                "\u016b": "u",
                "\u1e7b": "u",
                "\u016d": "u",
                "\xfc": "u",
                "\u01dc": "u",
                "\u01d8": "u",
                "\u01d6": "u",
                "\u01da": "u",
                "\u1ee7": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u01d4": "u",
                "\u0215": "u",
                "\u0217": "u",
                "\u01b0": "u",
                "\u1eeb": "u",
                "\u1ee9": "u",
                "\u1eef": "u",
                "\u1eed": "u",
                "\u1ef1": "u",
                "\u1ee5": "u",
                "\u1e73": "u",
                "\u0173": "u",
                "\u1e77": "u",
                "\u1e75": "u",
                "\u0289": "u",
                "\u24e5": "v",
                "\uff56": "v",
                "\u1e7d": "v",
                "\u1e7f": "v",
                "\u028b": "v",
                "\ua75f": "v",
                "\u028c": "v",
                "\ua761": "vy",
                "\u24e6": "w",
                "\uff57": "w",
                "\u1e81": "w",
                "\u1e83": "w",
                "\u0175": "w",
                "\u1e87": "w",
                "\u1e85": "w",
                "\u1e98": "w",
                "\u1e89": "w",
                "\u2c73": "w",
                "\u24e7": "x",
                "\uff58": "x",
                "\u1e8b": "x",
                "\u1e8d": "x",
                "\u24e8": "y",
                "\uff59": "y",
                "\u1ef3": "y",
                "\xfd": "y",
                "\u0177": "y",
                "\u1ef9": "y",
                "\u0233": "y",
                "\u1e8f": "y",
                "\xff": "y",
                "\u1ef7": "y",
                "\u1e99": "y",
                "\u1ef5": "y",
                "\u01b4": "y",
                "\u024f": "y",
                "\u1eff": "y",
                "\u24e9": "z",
                "\uff5a": "z",
                "\u017a": "z",
                "\u1e91": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u1e93": "z",
                "\u1e95": "z",
                "\u01b6": "z",
                "\u0225": "z",
                "\u0240": "z",
                "\u2c6c": "z",
                "\ua763": "z",
                "\u0386": "\u0391",
                "\u0388": "\u0395",
                "\u0389": "\u0397",
                "\u038a": "\u0399",
                "\u03aa": "\u0399",
                "\u038c": "\u039f",
                "\u038e": "\u03a5",
                "\u03ab": "\u03a5",
                "\u038f": "\u03a9",
                "\u03ac": "\u03b1",
                "\u03ad": "\u03b5",
                "\u03ae": "\u03b7",
                "\u03af": "\u03b9",
                "\u03ca": "\u03b9",
                "\u0390": "\u03b9",
                "\u03cc": "\u03bf",
                "\u03cd": "\u03c5",
                "\u03cb": "\u03c5",
                "\u03b0": "\u03c5",
                "\u03c9": "\u03c9",
                "\u03c2": "\u03c3"
            };
        i = a(document), f = function() {
            var a = 1;
            return function() {
                return a++
            }
        }(), c = O(Object, {
            bind: function(a) {
                var b = this;
                return function() {
                    a.apply(b, arguments)
                }
            },
            init: function(c) {
                var d, e, g = ".select2-results";
                this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = a(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + f()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", c.element.attr("title")), this.body = a(document.body), D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", c.element.attr("style")), this.container.css(K(c.containerCss, this.opts.element)), this.container.addClass(K(c.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", A), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(c.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", A), this.results = d = this.container.find(g), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", A), v(this.results), this.dropdown.on("mousemove-filtered", g, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", g, this.bind(function(a) {
                    this._touchEvent = !0, this.highlightUnderEvent(a)
                })), this.dropdown.on("touchmove", g, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", g, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function() {
                    this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                })), x(80, this.results), this.dropdown.on("scroll-debounced", g, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }), a(this.dropdown).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }), a.fn.mousewheel && d.mousewheel(function(a, b, c, e) {
                    var f = d.scrollTop();
                    e > 0 && 0 >= f - e ? (d.scrollTop(0), A(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()), A(a))
                }), u(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function() {
                    e.addClass("select2-focused")
                }), e.on("blur", function() {
                    e.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", g, this.bind(function(b) {
                    a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b))
                })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(a) {
                    a.stopPropagation()
                }), this.nextSearchTerm = b, a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                var h = c.element.prop("disabled");
                h === b && (h = !1), this.enable(!h);
                var i = c.element.prop("readonly");
                i === b && (i = !1), this.readonly(i), j = j || q(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", c.searchInputPlaceholder)
            },
            destroy: function() {
                var a = this.opts.element,
                    c = a.data("select2"),
                    d = this;
                this.close(), a.length && a[0].detachEvent && d._sync && a.each(function() {
                    d._sync && this.detachEvent("onpropertychange", d._sync)
                }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, c !== b && (c.container.remove(), c.liveRegion.remove(), c.dropdown.remove(), a.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
                    tabindex: this.elementTabIndex
                }) : a.removeAttr("tabindex"), a.show()), N.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function(a) {
                return a.is("option") ? {
                    id: a.prop("value"),
                    text: a.text(),
                    element: a.get(),
                    css: a.attr("class"),
                    disabled: a.prop("disabled"),
                    locked: r(a.attr("locked"), "locked") || r(a.data("locked"), !0)
                } : a.is("optgroup") ? {
                    text: a.attr("label"),
                    children: [],
                    element: a.get(),
                    css: a.attr("class")
                } : void 0
            },
            prepareOpts: function(c) {
                var d, e, g, h, i = this;
                if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element), e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                        if (this in c) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                    }), c = a.extend({}, {
                        populateResults: function(d, e, g) {
                            var h, j = this.opts.id,
                                k = this.liveRegion;
                            h = function(d, e, l) {
                                var m, n, o, p, q, r, s, t, u, v;
                                d = c.sortResults(d, e, g);
                                var w = [];
                                for (m = 0, n = d.length; n > m; m += 1) o = d[m], q = o.disabled === !0, p = !q && j(o) !== b, r = o.children && o.children.length > 0, s = a("<li></li>"), s.addClass("select2-results-dept-" + l), s.addClass("select2-result"), s.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), q && s.addClass("select2-disabled"), r && s.addClass("select2-result-with-children"), s.addClass(i.opts.formatResultCssClass(o)), s.attr("role", "presentation"), t = a(document.createElement("div")), t.addClass("select2-result-label"), t.attr("id", "select2-result-label-" + f()), t.attr("role", "option"), v = c.formatResult(o, t, g, i.opts.escapeMarkup), v !== b && (t.html(v), s.append(t)), r && (u = a("<ul></ul>"), u.addClass("select2-result-sub"), h(o.children, u, l + 1), s.append(u)), s.data("select2-data", o), w.push(s[0]);
                                e.append(w), k.text(c.formatMatches(d.length))
                            }, h(e, d, 0)
                        }
                    }, a.fn.select2.defaults, c), "function" != typeof c.id && (g = c.id, c.id = function(a) {
                        return a[g]
                    }), a.isArray(c.element.data("select2Tags"))) {
                    if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                    c.tags = c.element.data("select2Tags")
                }
                if (e ? (c.query = this.bind(function(a) {
                        var f, g, h, c = {
                                results: [],
                                more: !1
                            },
                            e = a.term;
                        h = function(b, c) {
                            var d;
                            b.is("option") ? a.matcher(e, b.text(), b) && c.push(i.optionToData(b)) : b.is("optgroup") && (d = i.optionToData(b), b.children().each2(function(a, b) {
                                h(b, d.children)
                            }), d.children.length > 0 && c.push(d))
                        }, f = d.children(), this.getPlaceholder() !== b && f.length > 0 && (g = this.getPlaceholderOption(), g && (f = f.not(g))), f.each2(function(a, b) {
                            h(b, c.results)
                        }), a.callback(c)
                    }), c.id = function(a) {
                        return a.id
                    }) : "query" in c || ("ajax" in c ? (h = c.element.data("ajax-url"), h && h.length > 0 && (c.ajax.url = h), c.query = G.call(c.element, c.ajax)) : "data" in c ? c.query = H(c.data) : "tags" in c && (c.query = I(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function(b) {
                        return {
                            id: a.trim(b),
                            text: a.trim(b)
                        }
                    }), c.initSelection === b && (c.initSelection = function(b, d) {
                        var e = [];
                        a(s(b.val(), c.separator, c.transformVal)).each(function() {
                            var b = {
                                    id: this,
                                    text: this
                                },
                                d = c.tags;
                            a.isFunction(d) && (d = d()), a(d).each(function() {
                                return r(this.id, b.id) ? (b = this, !1) : void 0
                            }), e.push(b)
                        }), d(e)
                    }))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
                if ("top" === c.createSearchChoicePosition) c.createSearchChoicePosition = function(a, b) {
                    a.unshift(b)
                };
                else if ("bottom" === c.createSearchChoicePosition) c.createSearchChoicePosition = function(a, b) {
                    a.push(b)
                };
                else if ("function" != typeof c.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return c
            },
            monitorSource: function() {
                var d, c = this.opts.element,
                    e = this;
                c.on("change.select2", this.bind(function() {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })), this._sync = this.bind(function() {
                    var a = c.prop("disabled");
                    a === b && (a = !1), this.enable(!a);
                    var d = c.prop("readonly");
                    d === b && (d = !1), this.readonly(d), this.container && (D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(K(this.opts.containerCssClass, this.opts.element))), this.dropdown && (D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(this.opts.dropdownCssClass, this.opts.element)))
                }), c.length && c[0].attachEvent && c.each(function() {
                    this.attachEvent("onpropertychange", e._sync)
                }), d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, d !== b && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new d(function(b) {
                    a.each(b, e._sync)
                }), this.propertyObserver.observe(c.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(b) {
                var c = a.Event("select2-selecting", {
                    val: this.id(b),
                    object: b,
                    choice: b
                });
                return this.opts.element.trigger(c), !c.isDefaultPrevented()
            },
            triggerChange: function(b) {
                b = b || {}, b = a.extend({}, b, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var a = this._enabled && !this._readonly,
                    b = !a;
                return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
            },
            enable: function(a) {
                a === b && (a = !0), this._enabled !== a && (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(a) {
                a === b && (a = !1), this._readonly !== a && (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface())
            },
            opened: function() {
                return this.container ? this.container.hasClass("select2-dropdown-open") : !1
            },
            positionDropdown: function() {
                var v, w, x, y, z, b = this.dropdown,
                    c = this.container,
                    d = c.offset(),
                    e = c.outerHeight(!1),
                    f = c.outerWidth(!1),
                    g = b.outerHeight(!1),
                    h = a(window),
                    i = h.width(),
                    k = h.height(),
                    l = h.scrollLeft() + i,
                    m = h.scrollTop() + k,
                    n = d.top + e,
                    o = d.left,
                    p = m >= n + g,
                    q = d.top - g >= h.scrollTop(),
                    r = b.outerWidth(!1),
                    s = function() {
                        return l >= o + r
                    },
                    t = function() {
                        return d.left + l + c.outerWidth(!1) > r
                    },
                    u = b.hasClass("select2-drop-above");
                u ? (w = !0, !q && p && (x = !0, w = !1)) : (w = !1, !p && q && (x = !0, w = !0)), x && (b.hide(), d = this.container.offset(), e = this.container.outerHeight(!1), f = this.container.outerWidth(!1), g = b.outerHeight(!1), l = h.scrollLeft() + i, m = h.scrollTop() + k, n = d.top + e, o = d.left, r = b.outerWidth(!1), b.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (z = a(".select2-results", b)[0], b.addClass("select2-drop-auto-width"), b.css("width", ""), r = b.outerWidth(!1) + (z.scrollHeight === z.clientHeight ? 0 : j.width), r > f ? f = r : r = f, g = b.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (v = this.body.offset(), n -= v.top, o -= v.left), !s() && t() && (o = d.left + this.container.outerWidth(!1) - r), y = {
                    left: o,
                    width: f
                }, w ? (y.top = d.top - g, y.bottom = "auto", this.container.addClass("select2-drop-above"), b.addClass("select2-drop-above")) : (y.top = n, y.bottom = "auto", this.container.removeClass("select2-drop-above"), b.removeClass("select2-drop-above")), y = a.extend(y, K(this.opts.dropdownCss, this.opts.element)), b.css(y)
            },
            shouldOpen: function() {
                var b;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                return this.shouldOpen() ? (this.opening(), i.on("mousemove.select2Event", function(a) {
                    h.x = a.pageX, h.y = a.pageY
                }), !0) : !1
            },
            opening: function() {
                var f, b = this.containerEventName,
                    c = "scroll." + b,
                    d = "resize." + b,
                    e = "orientationchange." + b;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), f = a("#select2-drop-mask"), 0 === f.length && (f = a(document.createElement("div")), f.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), f.hide(), f.appendTo(this.body), f.on("mousedown touchstart click", function(b) {
                    n(f);
                    var d, c = a("#select2-drop");
                    c.length > 0 && (d = c.data("select2"), d.opts.selectOnBlur && d.selectHighlighted({
                        noFocus: !0
                    }), d.close(), b.preventDefault(), b.stopPropagation())
                })), this.dropdown.prev()[0] !== f[0] && this.dropdown.before(f), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), f.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var g = this;
                this.container.parents().add(window).each(function() {
                    a(this).on(d + " " + c + " " + e, function() {
                        g.opened() && g.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var b = this.containerEventName,
                        c = "scroll." + b,
                        d = "resize." + b,
                        e = "orientationchange." + b;
                    this.container.parents().add(window).each(function() {
                        a(this).off(c).off(d).off(e)
                    }), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), i.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(a.Event("select2-close"))
                }
            },
            externalSearch: function(a) {
                this.open(), this.search.val(a), this.updateResults(!1)
            },
            clearSearch: function() {},
            getMaximumSelectionSize: function() {
                return K(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function() {
                var c, d, e, f, g, h, i, j, b = this.results;
                if (d = this.highlight(), !(0 > d)) {
                    if (0 == d) return b.scrollTop(0), void 0;
                    c = this.findHighlightableChoices().find(".select2-result-label"), e = a(c[d]), j = (e.offset() || {}).top || 0, f = j + e.outerHeight(!0), d === c.length - 1 && (i = b.find("li.select2-more-results"), i.length > 0 && (f = i.offset().top + i.outerHeight(!0))), g = b.offset().top + b.outerHeight(!1), f > g && b.scrollTop(b.scrollTop() + (f - g)), h = j - b.offset().top, 0 > h && "none" != e.css("display") && b.scrollTop(b.scrollTop() + h)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function(b) {
                for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
                    d += b;
                    var e = a(c[d]);
                    if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
                        this.highlight(d);
                        break
                    }
                }
            },
            highlight: function(b) {
                var d, e, c = this.findHighlightableChoices();
                return 0 === arguments.length ? p(c.filter(".select2-highlighted")[0], c.get()) : (b >= c.length && (b = c.length - 1), 0 > b && (b = 0), this.removeHighlight(), d = a(c[b]), d.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", d.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(d.text()), e = d.data("select2-data"), e && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(e),
                    choice: e
                }), void 0)
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function() {
                this._touchMoved = !0
            },
            clearTouchMoved: function() {
                this._touchMoved = !1
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(b) {
                var c = a(b.target).closest(".select2-result-selectable");
                if (c.length > 0 && !c.is(".select2-highlighted")) {
                    var d = this.findHighlightableChoices();
                    this.highlight(d.index(c))
                } else 0 == c.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var c, a = this.results,
                    b = a.find("li.select2-more-results"),
                    d = this.resultsPage + 1,
                    e = this,
                    f = this.search.val(),
                    g = this.context;
                0 !== b.length && (c = b.offset().top - a.offset().top - a.height(), c <= this.opts.loadMorePadding && (b.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: f,
                    page: d,
                    context: g,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(c) {
                        e.opened() && (e.opts.populateResults.call(this, a, c.results, {
                            term: f,
                            page: d,
                            context: g
                        }), e.postprocessResults(c, !1, !1), c.more === !0 ? (b.detach().appendTo(a).html(e.opts.escapeMarkup(K(e.opts.formatLoadMore, e.opts.element, d + 1))), window.setTimeout(function() {
                            e.loadMoreIfNeeded()
                        }, 10)) : b.remove(), e.positionDropdown(), e.resultsPage = d, e.context = c.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: c
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(c) {
                function m() {
                    d.removeClass("select2-active"), h.positionDropdown(), e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? h.liveRegion.text(e.text()) : h.liveRegion.text(h.opts.formatMatches(e.find('.select2-result-selectable:not(".select2-selected")').length))
                }

                function n(a) {
                    e.html(a), m()
                }
                var g, i, l, d = this.search,
                    e = this.results,
                    f = this.opts,
                    h = this,
                    j = d.val(),
                    k = a.data(this.container, "select2-last-term");
                if ((c === !0 || !k || !r(j, k)) && (a.data(this.container, "select2-last-term", j), c === !0 || this.showSearchInput !== !1 && this.opened())) {
                    l = ++this.queryCount;
                    var o = this.getMaximumSelectionSize();
                    if (o >= 1 && (g = this.data(), a.isArray(g) && g.length >= o && J(f.formatSelectionTooBig, "formatSelectionTooBig"))) return n("<li class='select2-selection-limit'>" + K(f.formatSelectionTooBig, f.element, o) + "</li>"), void 0;
                    if (d.val().length < f.minimumInputLength) return J(f.formatInputTooShort, "formatInputTooShort") ? n("<li class='select2-no-results'>" + K(f.formatInputTooShort, f.element, d.val(), f.minimumInputLength) + "</li>") : n(""), c && this.showSearch && this.showSearch(!0), void 0;
                    if (f.maximumInputLength && d.val().length > f.maximumInputLength) return J(f.formatInputTooLong, "formatInputTooLong") ? n("<li class='select2-no-results'>" + K(f.formatInputTooLong, f.element, d.val(), f.maximumInputLength) + "</li>") : n(""), void 0;
                    f.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + K(f.formatSearching, f.element) + "</li>"), d.addClass("select2-active"), this.removeHighlight(), i = this.tokenize(), i != b && null != i && d.val(i), this.resultsPage = 1, f.query({
                        element: f.element,
                        term: d.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: f.matcher,
                        callback: this.bind(function(g) {
                            var i;
                            if (l == this.queryCount) {
                                if (!this.opened()) return this.search.removeClass("select2-active"), void 0;
                                if (g.hasError !== b && J(f.formatAjaxError, "formatAjaxError")) return n("<li class='select2-ajax-error'>" + K(f.formatAjaxError, f.element, g.jqXHR, g.textStatus, g.errorThrown) + "</li>"), void 0;
                                if (this.context = g.context === b ? null : g.context, this.opts.createSearchChoice && "" !== d.val() && (i = this.opts.createSearchChoice.call(h, d.val(), g.results), i !== b && null !== i && h.id(i) !== b && null !== h.id(i) && 0 === a(g.results).filter(function() {
                                        return r(h.id(this), h.id(i))
                                    }).length && this.opts.createSearchChoicePosition(g.results, i)), 0 === g.results.length && J(f.formatNoMatches, "formatNoMatches")) return n("<li class='select2-no-results'>" + K(f.formatNoMatches, f.element, d.val()) + "</li>"), void 0;
                                e.empty(), h.opts.populateResults.call(this, e, g.results, {
                                    term: d.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), g.more === !0 && J(f.formatLoadMore, "formatLoadMore") && (e.append("<li class='select2-more-results'>" + f.escapeMarkup(K(f.formatLoadMore, f.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    h.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(g, c), m(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: g
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                y(this.search)
            },
            selectHighlighted: function(a) {
                if (this._touchMoved) return this.clearTouchMoved(), void 0;
                var b = this.highlight(),
                    c = this.results.find(".select2-highlighted"),
                    d = c.closest(".select2-result").data("select2-data");
                d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
            },
            getPlaceholder: function() {
                var a;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var c = this.select.children("option").first();
                    if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && c || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === a.trim(c.text()) && "" === c.val()) return c
                }
            },
            initContainerWidth: function() {
                function c() {
                    var c, d, e, f, g, h;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (c = this.opts.element.attr("style"), c !== b)
                            for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1)
                                if (h = d[f].replace(/\s/g, ""), e = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== e && e.length >= 1) return e[1];
                        return "resolve" === this.opts.width ? (c = this.opts.element.css("width"), c.indexOf("%") > 0 ? c : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var d = c.call(this);
                null !== d && this.container.css("width", d)
            }
        }), d = O(c, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                return b
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var c, d, e;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), c = this.search.get(0), c.createTextRange ? (d = c.createTextRange(), d.collapse(!1), d.select()) : c.setSelectionRange && (e = this.search.val().length, c.setSelectionRange(e, e))), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function() {
                a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), N.call(this, "selection", "focusser")
            },
            initContainer: function() {
                var b, g, c = this.container,
                    d = this.dropdown,
                    e = f();
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = b = c.find(".select2-choice"), this.focusser = c.find(".select2-focusser"), b.find(".select2-chosen").attr("id", "select2-chosen-" + e), this.focusser.attr("aria-labelledby", "select2-chosen-" + e), this.results.attr("id", "select2-results-" + e), this.search.attr("aria-owns", "select2-results-" + e), this.focusser.attr("id", "s2id_autogen" + e), g = a("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.focus(this.bind(function() {
                    this.focus()
                })), this.focusser.prev().text(g.text()).attr("for", this.focusser.attr("id"));
                var h = this.opts.element.attr("title");
                this.opts.element.attr("title", h || g.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(a("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && 229 != a.keyCode) {
                        if (a.which === k.PAGE_UP || a.which === k.PAGE_DOWN) return A(a), void 0;
                        switch (a.which) {
                            case k.UP:
                            case k.DOWN:
                                return this.moveHighlight(a.which === k.UP ? -1 : 1), A(a), void 0;
                            case k.ENTER:
                                return this.selectHighlighted(), A(a), void 0;
                            case k.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), void 0;
                            case k.ESC:
                                return this.cancel(a), A(a), void 0
                        }
                    }
                })), this.search.on("blur", this.bind(function() {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                        this.opened() && this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && a.which !== k.TAB && !k.isControl(a) && !k.isFunctionKey(a) && a.which !== k.ESC) {
                        if (this.opts.openOnEnter === !1 && a.which === k.ENTER) return A(a), void 0;
                        if (a.which == k.DOWN || a.which == k.UP || a.which == k.ENTER && this.opts.openOnEnter) {
                            if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
                            return this.open(), A(a), void 0
                        }
                        return a.which == k.DELETE || a.which == k.BACKSPACE ? (this.opts.allowClear && this.clear(), A(a), void 0) : void 0
                    }
                })), u(this.focusser), this.focusser.on("keyup-change input", this.bind(function(a) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (a.stopPropagation(), this.opened()) return;
                        this.open()
                    }
                })), b.on("mousedown touchstart", "abbr", this.bind(function(a) {
                    this.isInterfaceEnabled() && (this.clear(), B(a), this.close(), this.selection && this.selection.focus())
                })), b.on("mousedown touchstart", this.bind(function(c) {
                    n(b), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), A(c)
                })), d.on("mousedown touchstart", this.bind(function() {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                })), b.on("focus", this.bind(function(a) {
                    A(a)
                })), this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
            },
            clear: function(b) {
                var c = this.selection.data("select2-data");
                if (c) {
                    var d = a.Event("select2-clearing");
                    if (this.opts.element.trigger(d), d.isDefaultPrevented()) return;
                    var e = this.getPlaceholderOption();
                    this.opts.element.val(e ? e.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), b !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(c),
                        choice: c
                    }), this.triggerChange({
                        removed: c
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var c = this;
                    this.opts.initSelection.call(null, this.opts.element, function(a) {
                        a !== b && null !== a && (c.updateSelection(a), c.close(), c.setPlaceholder(), c.nextSearchTerm = c.opts.nextSearchTerm(a, c.search.val()))
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var a;
                return this.getPlaceholder() === b ? !1 : (a = this.getPlaceholderOption()) !== b && a.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val()
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    b(c.optionToData(d))
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = c.val(),
                        f = null;
                    b.query({
                        matcher: function(a, c, d) {
                            var g = r(e, b.id(d));
                            return g && (f = d), g
                        },
                        callback: a.isFunction(d) ? function() {
                            d(f)
                        } : a.noop
                    })
                }), b
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var a = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && a !== b) {
                    if (this.select && this.getPlaceholderOption() === b) return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(a, b, c) {
                var d = 0,
                    e = this;
                if (this.findHighlightableChoices().each2(function(a, b) {
                        return r(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a, !1) : void 0
                    }), c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)), b === !0) {
                    var g = this.opts.minimumResultsForSearch;
                    g >= 0 && this.showSearch(L(a.results) >= g)
                }
            },
            showSearch: function(b) {
                this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
            },
            onSelect: function(a, b) {
                if (this.triggerSelect(a)) {
                    var c = this.opts.element.val(),
                        d = this.data();
                    this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(a),
                        choice: a
                    }), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.close(), b && b.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), r(c, this.id(a)) || this.triggerChange({
                        added: a,
                        removed: d
                    })
                }
            },
            updateSelection: function(a) {
                var d, e, c = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", a), c.empty(), null !== a && (d = this.opts.formatSelection(a, c, this.opts.escapeMarkup)), d !== b && c.append(d), e = this.opts.formatSelectionCssClass(a, c), e !== b && c.addClass(e), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var a, c = !1,
                    d = null,
                    e = this,
                    f = this.data();
                if (0 === arguments.length) return this.opts.element.val();
                if (a = arguments[0], arguments.length > 1 && (c = arguments[1]), this.select) this.select.val(a).find("option").filter(function() {
                    return this.selected
                }).each2(function(a, b) {
                    return d = e.optionToData(b), !1
                }), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
                    added: d,
                    removed: f
                });
                else {
                    if (!a && 0 !== a) return this.clear(c), void 0;
                    if (this.opts.initSelection === b) throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(a), this.opts.initSelection(this.opts.element, function(a) {
                        e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
                            added: a,
                            removed: f
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val(""), this.focusser.val("")
            },
            data: function(a) {
                var c, d = !1;
                return 0 === arguments.length ? (c = this.selection.data("select2-data"), c == b && (c = null), c) : (arguments.length > 1 && (d = arguments[1]), a ? (c = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), d && this.triggerChange({
                    added: a,
                    removed: c
                })) : this.clear(d), void 0)
            }
        }), e = O(c, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return b
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = [];
                    a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(a, b) {
                        d.push(c.optionToData(b))
                    }), b(d)
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = s(c.val(), b.separator, b.transformVal),
                        f = [];
                    b.query({
                        matcher: function(c, d, g) {
                            var h = a.grep(e, function(a) {
                                return r(a, b.id(g))
                            }).length;
                            return h && f.push(g), h
                        },
                        callback: a.isFunction(d) ? function() {
                            for (var a = [], c = 0; c < e.length; c++)
                                for (var g = e[c], h = 0; h < f.length; h++) {
                                    var i = f[h];
                                    if (r(g, b.id(i))) {
                                        a.push(i), f.splice(h, 1);
                                        break
                                    }
                                }
                            d(a)
                        } : a.noop
                    })
                }), b
            },
            selectChoice: function(a) {
                var b = this.container.find(".select2-search-choice-focus");
                b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
            },
            destroy: function() {
                a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), N.call(this, "searchContainer", "selection")
            },
            initContainer: function() {
                var c, b = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = c = this.container.find(b);
                var d = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
                    d.search[0].focus(), d.selectChoice(a(this))
                }), this.search.attr("id", "s2id_autogen" + f()), this.search.prev().text(a("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.focus(this.bind(function() {
                    this.focus()
                })), this.search.on("input paste", this.bind(function() {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var b = c.find(".select2-search-choice-focus"),
                            d = b.prev(".select2-search-choice:not(.select2-locked)"),
                            e = b.next(".select2-search-choice:not(.select2-locked)"),
                            f = z(this.search);
                        if (b.length && (a.which == k.LEFT || a.which == k.RIGHT || a.which == k.BACKSPACE || a.which == k.DELETE || a.which == k.ENTER)) {
                            var g = b;
                            return a.which == k.LEFT && d.length ? g = d : a.which == k.RIGHT ? g = e.length ? e : null : a.which === k.BACKSPACE ? this.unselect(b.first()) && (this.search.width(10), g = d.length ? d : e) : a.which == k.DELETE ? this.unselect(b.first()) && (this.search.width(10), g = e.length ? e : null) : a.which == k.ENTER && (g = null), this.selectChoice(g), A(a), g && g.length || this.open(), void 0
                        }
                        if ((a.which === k.BACKSPACE && 1 == this.keydowns || a.which == k.LEFT) && 0 == f.offset && !f.length) return this.selectChoice(c.find(".select2-search-choice:not(.select2-locked)").last()), A(a), void 0;
                        if (this.selectChoice(null), this.opened()) switch (a.which) {
                            case k.UP:
                            case k.DOWN:
                                return this.moveHighlight(a.which === k.UP ? -1 : 1), A(a), void 0;
                            case k.ENTER:
                                return this.selectHighlighted(), A(a), void 0;
                            case k.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), this.close(), void 0;
                            case k.ESC:
                                return this.cancel(a), A(a), void 0
                        }
                        if (a.which !== k.TAB && !k.isControl(a) && !k.isFunctionKey(a) && a.which !== k.BACKSPACE && a.which !== k.ESC) {
                            if (a.which === k.ENTER) {
                                if (this.opts.openOnEnter === !1) return;
                                if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return
                            }
                            this.open(), (a.which === k.PAGE_UP || a.which === k.PAGE_DOWN) && A(a), a.which === k.ENTER && A(a)
                        }
                    }
                })), this.search.on("keyup", this.bind(function() {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function(b) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"))
                })), this.container.on("click", b, this.bind(function(b) {
                    this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()))
                })), this.container.on("focus", b, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var c = this;
                    this.opts.initSelection.call(null, this.opts.element, function(a) {
                        a !== b && null !== a && (c.updateSelection(a), c.close(), c.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var a = this.getPlaceholder(),
                    c = this.getMaxSearchWidth();
                a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close(), this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(b) {
                var c = [],
                    d = [],
                    e = this;
                a(b).each(function() {
                    p(e.id(this), c) < 0 && (c.push(e.id(this)), d.push(this))
                }), b = d, this.selection.find(".select2-search-choice").remove(), a(b).each(function() {
                    e.addSelectedChoice(this)
                }), e.postprocessResults()
            },
            tokenize: function() {
                var a = this.search.val();
                a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
            },
            onSelect: function(a, c) {
                this.triggerSelect(a) && "" !== a.text && (this.addSelectedChoice(a), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(a),
                    choice: a
                }), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(a, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                    added: a
                }), c && c.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close(), this.focusSearch()
            },
            addSelectedChoice: function(c) {
                var j, k, d = !c.locked,
                    e = a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    f = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    g = d ? e : f,
                    h = this.id(c),
                    i = this.getVal();
                j = this.opts.formatSelection(c, g.find("div"), this.opts.escapeMarkup), j != b && g.find("div").replaceWith(a("<div></div>").html(j)), k = this.opts.formatSelectionCssClass(c, g.find("div")), k != b && g.addClass(k), d && g.find(".select2-search-choice-close").on("mousedown", A).on("click dblclick", this.bind(function(b) {
                    this.isInterfaceEnabled() && (this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), A(b), this.close(), this.focusSearch())
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), g.data("select2-data", c), g.insertBefore(this.searchContainer), i.push(h), this.setVal(i)
            },
            unselect: function(b) {
                var d, e, c = this.getVal();
                if (b = b.closest(".select2-search-choice"), 0 === b.length) throw "Invalid argument: " + b + ". Must be .select2-search-choice";
                if (d = b.data("select2-data")) {
                    var f = a.Event("select2-removing");
                    if (f.val = this.id(d), f.choice = d, this.opts.element.trigger(f), f.isDefaultPrevented()) return !1;
                    for (;
                        (e = p(this.id(d), c)) >= 0;) c.splice(e, 1), this.setVal(c), this.select && this.postprocessResults();
                    return b.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(d),
                        choice: d
                    }), this.triggerChange({
                        removed: d
                    }), !0
                }
            },
            postprocessResults: function(a, b, c) {
                var d = this.getVal(),
                    e = this.results.find(".select2-result"),
                    f = this.results.find(".select2-result-with-children"),
                    g = this;
                e.each2(function(a, b) {
                    var c = g.id(b.data("select2-data"));
                    p(c, d) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
                }), f.each2(function(a, b) {
                    b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
                }), -1 == this.highlight() && c !== !1 && this.opts.closeOnSelect === !0 && g.highlight(0), !this.opts.createSearchChoice && !e.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && J(g.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + K(g.opts.formatNoMatches, g.opts.element, g.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - t(this.search)
            },
            resizeSearch: function() {
                var a, b, c, d, e, f = t(this.search);
                a = C(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(Math.floor(e))
            },
            getVal: function() {
                var a;
                return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), s(a, this.opts.separator, this.opts.transformVal))
            },
            setVal: function(b) {
                var c;
                this.select ? this.select.val(b) : (c = [], a(b).each(function() {
                    p(this, c) < 0 && c.push(this)
                }), this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator)))
            },
            buildChangeDetails: function(a, b) {
                for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
                    for (var d = 0; d < a.length; d++) r(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1), c > 0 && c--, a.splice(d, 1), d--);
                return {
                    added: b,
                    removed: a
                }
            },
            val: function(c, d) {
                var e, f = this;
                if (0 === arguments.length) return this.getVal();
                if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), d && this.triggerChange({
                    added: this.data(),
                    removed: e
                }), void 0;
                if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                else {
                    if (this.opts.initSelection === b) throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(b) {
                        var c = a.map(b, f.id);
                        f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(f.buildChangeDetails(e, f.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function() {
                var b = [],
                    c = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                    b.push(c.opts.id(a(this).data("select2-data")))
                }), this.setVal(b), this.triggerChange()
            },
            data: function(b, c) {
                var e, f, d = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                    return a(this).data("select2-data")
                }).get() : (f = this.data(), b || (b = []), e = a.map(b, function(a) {
                    return d.opts.id(a)
                }), this.setVal(e), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(f, this.data())), void 0)
            }
        }), a.fn.select2 = function() {
            var d, e, f, g, h, c = Array.prototype.slice.call(arguments, 0),
                i = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                j = ["opened", "isFocused", "container", "dropdown"],
                k = ["val", "data"],
                l = {
                    search: "externalSearch"
                };
            return this.each(function() {
                if (0 === c.length || "object" == typeof c[0]) d = 0 === c.length ? {} : a.extend({}, c[0]), d.element = a(this), "select" === d.element.get(0).tagName.toLowerCase() ? h = d.element.prop("multiple") : (h = d.multiple || !1, "tags" in d && (d.multiple = h = !0)), e = h ? new window.Select2["class"].multi : new window.Select2["class"].single, e.init(d);
                else {
                    if ("string" != typeof c[0]) throw "Invalid arguments to select2 plugin: " + c;
                    if (p(c[0], i) < 0) throw "Unknown method: " + c[0];
                    if (g = b, e = a(this).data("select2"), e === b) return;
                    if (f = c[0], "container" === f ? g = e.container : "dropdown" === f ? g = e.dropdown : (l[f] && (f = l[f]), g = e[f].apply(e, c.slice(1))), p(c[0], j) >= 0 || p(c[0], k) >= 0 && 1 == c.length) return !1
                }
            }), g === b ? this : g
        }, a.fn.select2.defaults = {
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(a, b, c, d) {
                var e = [];
                return E(this.text(a), c.term, e, d), e.join("")
            },
            transformVal: function(b) {
                return a.trim(b)
            },
            formatSelection: function(a, c, d) {
                return a ? d(this.text(a)) : b
            },
            sortResults: function(a) {
                return a
            },
            formatResultCssClass: function(a) {
                return a.css
            },
            formatSelectionCssClass: function() {
                return b
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(a) {
                return a == b ? null : a.id
            },
            text: function(b) {
                return b && this.data && this.data.text ? a.isFunction(this.data.text) ? this.data.text(b) : b[this.data.text] : b.text
            },
            matcher: function(a, b) {
                return o("" + b).toUpperCase().indexOf(o("" + a).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: M,
            escapeMarkup: F,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(a) {
                return a
            },
            adaptDropdownCssClass: function() {
                return null
            },
            nextSearchTerm: function() {
                return b
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function(a) {
                var b = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
                return b ? a.opts.minimumResultsForSearch < 0 ? !1 : !0 : !0
            }
        }, a.fn.select2.locales = [], a.fn.select2.locales.en = {
            formatMatches: function(a) {
                return 1 === a ? "One result is available, press enter to select it." : a + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatAjaxError: function() {
                return "Loading failed"
            },
            formatInputTooShort: function(a, b) {
                var c = b - a.length;
                return "Please enter " + c + " or more character" + (1 == c ? "" : "s")
            },
            formatInputTooLong: function(a, b) {
                var c = a.length - b;
                return "Please delete " + c + " character" + (1 == c ? "" : "s")
            },
            formatSelectionTooBig: function(a) {
                return "You can only select " + a + " item" + (1 == a ? "" : "s")
            },
            formatLoadMore: function() {
                return "Loading more results\u2026"
            },
            formatSearching: function() {
                return "Searching\u2026"
            }
        }, a.extend(a.fn.select2.defaults, a.fn.select2.locales.en), a.fn.select2.ajaxDefaults = {
            transport: a.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        }, window.Select2 = {
            query: {
                ajax: G,
                local: H,
                tags: I
            },
            util: {
                debounce: w,
                markMatch: E,
                escapeMarkup: F,
                stripDiacritics: o
            },
            "class": {
                "abstract": c,
                single: d,
                multi: e
            }
        }
    }
}(jQuery);
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera;
var isIE = /*@cc_on!@*/ false || !!document.documentMode;;
(function($) {
    $.fn.accordSlider = function(options) {
        var $that = this;
        var slides = $that.find('li');

        $('li.video .video-placeholder').click(function() {
            var iframe = $('li.video #video')[0];
            var player = $f(iframe);
            $('li.video #video').show();
            $('li.video .video-placeholder').fadeOut('slow', function() {
                player.addEvent('ready', function() {
                    player.addEvent('finish', function(id) {
                        $('li.video #video').hide();
                        player.api('play');
                        player.api('pause');
                        $('li.video .video-placeholder').fadeIn('slow');
                    });
                    player.api('play');
                });
            });
        })
        return $that;
    };
}(jQuery));;
(function($) {
    $.fn.accordion = function(options) {
        var $that = this;
        var slides = $that.find('li');
        slides.each(function() {
            var slide = $(this);
            slide.click(function() {
                if (!slide.hasClass('active')) {
                    var iframe = $('li.video #video')[0];
                    var player = $f(iframe);
                    player.api('pause');
                    $that.find('li.video').find('#video').hide();
                    $that.find('li.video').find('.video-placeholder').show();
                    $that.find('li.video').find('.scroll-down').hide();
                    $that.find('li.active').removeClass('active').removeAttr('style').find('.scroll-down').hide();
                    slide.addClass('active');
                    scrollToActiveElement();
                }
                if (slide.hasClass('active') && slide.hasClass('video')) {
                    var iframe = $('li.video #video')[0];
                    var player = $f(iframe);
                    $('li.video #video').show();
                    $('li.video .video-placeholder').fadeOut('slow', function() {
                        player.addEventHTMLIFrameElement('ready', function() {
                            player.addEvent('finish', function(id) {
                                $('li.video #video').hide();
                                $('li.video .video-placeholder').fadeIn('slow');
                                $('li.video #btn-showreel-play').show();
                                $('li.video .scroll-down').hide();
                                $('li.video .placeholder-headline').hide();
                                $('li.video .placeholder-byline').hide();
                            });
                            player.addEvent('play', function(id) {
                                $('li.video #btn-showreel-play').hide();
                                $('li.video .video-placeholder').hide();
                                $('li.video .scroll-down').hide();
                                $('li.video .placeholder-headline').hide();
                                $('li.video .placeholder-byline').hide();
                            });
                            player.addEvent('pause', function(id) {
                                $('li.video #btn-showreel-play').show();
                                $('li.video .scroll-down').hide();
                            });
                            player.api('play');
                        });
                    });
                }
            });
            if (slide.hasClass('active')) {
                if ((slide.hasClass('video') && !slide.find('.video-placeholder').is(':hidden')) || !slide.hasClass('video')) {
                    $that.find('li.active').find('.scroll-down').fadeIn();
                }
            }
        });
    }
}(jQuery));
$('.video-slider').accordion();


// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("btn-showreel-play");
  playButton.addEventListener("click", function() {
    player.playVideo();
		$('li.video #video').show();
	    $('li.video #btn-showreel-play').hide();
	    $('li.video .video-placeholder').hide();
	    $('li.video .scroll-down').hide();
	    $('li.video .placeholder-headline').hide();
	    $('li.video .placeholder-byline').hide();

  });
  
  // var pauseButton = document.getElementById("pause-button");
  // pauseButton.addEventListener("click", function() {
  //   player.pauseVideo();
  //   	$('li.video #btn-showreel-play').show();
  // });
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
