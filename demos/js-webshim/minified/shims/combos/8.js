var swfmini=function(){function e(){if(!C){try{var e=T.getElementsByTagName("body")[0].appendChild(d("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var i=x.length,n=0;i>n;n++)x[n]()}}function t(e){C?e():x[x.length]=e}function i(){}function n(){N&&a()}function a(){var e=T.getElementsByTagName("body")[0],t=d(m);t.setAttribute("type",b);var i=e.appendChild(t);if(i){var n=0;(function(){if(typeof i.GetVariable!=h){var a=i.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),M.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null})()}}function r(e){var t=null,i=c(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=h)t=i;else{var n=i.getElementsByTagName(m)[0];n&&(t=n)}return t}function o(e,t,i){var n,a=c(i);if(M.wk&&312>M.wk)return n;if(a)if(typeof e.id==h&&(e.id=i),M.ie&&M.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",A[A.length]=e.id,n=c(e.id)}else{var p=d(m);p.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?p.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&p.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(p,v,t[v]);a.parentNode.replaceChild(p,a),n=p}return n}function s(e,t,i){var n=d("param");n.setAttribute("name",t),n.setAttribute("value",i),e.appendChild(n)}function l(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(M.ie&&M.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=c(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(i){}return t}function d(e){return T.createElement(e)}function p(e){var t=M.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function f(e,t){if(S){var i,n=t?"visible":"hidden";C&&i&&c(e)&&(c(e).style.visibility=n)}}var h="undefined",m="object",v=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,E=navigator,N=!1,x=[n],A=[],k=[],C=!1,S=!0,M=function(){var e=typeof T.getElementById!=h&&typeof T.getElementsByTagName!=h&&typeof T.createElement!=h,t=E.userAgent.toLowerCase(),i=E.platform.toLowerCase(),n=i?/win/.test(i):/win/.test(t),a=i?/mac/.test(i):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof E.plugins!=h&&typeof E.plugins[g]==m)l=E.plugins[g].description,!l||typeof E.mimeTypes!=h&&E.mimeTypes[b]&&!E.mimeTypes[b].enabledPlugin||(N=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=h)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(c){}return{w3:e,pv:s,wk:r,ie:o,win:n,mac:a}}();return function(){M.ie&&M.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=k.length,t=0;e>t;t++)k[t][0].detachEvent(k[t][1],k[t][2]);for(var i=A.length,n=0;i>n;n++)l(A[n]);for(var a in M)M[a]=null;M=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return M.w3?r(e):void 0},embedSWF:function(e,i,n,a,r,s,l,u,c,d){var v={success:!1,id:i};M.w3&&!(M.wk&&312>M.wk)&&e&&i&&n&&a&&r?(f(i,!1),t(function(){n+="",a+="";var t={};if(c&&typeof c===m)for(var s in c)t[s]=c[s];t.data=e,t.width=n,t.height=a;var g={};if(u&&typeof u===m)for(var y in u)g[y]=u[y];if(l&&typeof l===m)for(var b in l)typeof g.flashvars!=h?g.flashvars+="&"+b+"="+l[b]:g.flashvars=b+"="+l[b];if(p(r)){var w=o(t,g,i);t.id==i&&f(i,!0),v.success=!0,v.ref=w}else f(i,!0);d&&d(v)})):d&&d(v)},switchOffAutoHideShow:function(){S=!1},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:p,createSWF:function(e,t,i){return M.w3?o(e,t,i):void 0},showExpressInstall:function(){},removeSWF:function(e){M.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,expressInstallCallback:function(){}}}();webshims.register("dom-extend",function(e,t,i,n,a){"use strict";var r=!("hrefNormalized"in e.support)||e.support.hrefNormalized,o=!("getSetAttribute"in e.support)||e.support.getSetAttribute;if(t.assumeARIA=o||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),t.cfg.extendNative===a&&t.warn("extendNative configuration was set to false by default with this release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var s=function(){if(!i.jQuery||i.$&&i.jQuery!=i.$||i.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),i.$&&(i.$=t.$),i.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};s(),setTimeout(s,90),t.ready("DOM",s),e(s),t.ready("WINDOWLOAD",s)}var l=t.modules,u=/\s*,\s*/,c={},d={},p={},f={},h={},m=e.fn.val,v=function(t,i,n,a,r){return r?m.call(e(t)):m.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(i){if(!e.widget)for(var n,a=0;null!=(n=i[a]);a++)try{e(n).triggerHandler("remove")}catch(r){}t(i)}}(),e.fn.val=function(t){var i=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return i&&1===i.nodeType?e.prop(i,"value",t,"val",!0):m.call(this);if(e.isArray(t))return m.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(i=this,1===i.nodeType)if(n){var o=t.call(i,r,e.prop(i,"value",a,"val",!0));null==o&&(o=""),e.prop(i,"value",o,"val")}else e.prop(i,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,i,a,r){return r||(r=n),e(r)[a?"onTrigger":"on"](t,i),this.on("remove",function(n){n.originalEvent||e(r).off(t,i)}),this};var g="_webshimsLib"+Math.round(1e3*Math.random()),y=function(t,i,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,g);return n!==a&&(r||(r=e.data(t,g,{})),i&&(r[i]=n)),i?r&&r[i]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var i=[];return this.each(function(){var n=y(this,"shadowData"),a=n&&n[t.prop]||this;-1==e.inArray(a,i)&&i.push(a)}),this.pushStack(i)}}),["removeAttr","prop","attr"].forEach(function(i){c[i]=e[i],e[i]=function(t,n,r,o,s){var l="val"==o,u=l?v:c[i];if(!t||!d[n]||1!==t.nodeType||!l&&o&&"attr"==i&&e.attrFn[n])return u(t,n,r,o,s);var f,m,g,y=(t.nodeName||"").toLowerCase(),b=p[y],w="attr"!=i||r!==!1&&null!==r?i:"removeAttr";if(b||(b=p["*"]),b&&(b=b[n]),b&&(f=b[w]),f){if("value"==n&&(m=f.isVal,f.isVal=l),"removeAttr"===w)return f.value.call(t);if(r===a)return f.get?f.get.call(t):f.value;f.set&&("attr"==i&&r===!0&&(r=n),g=f.set.call(t,r)),"value"==n&&(f.isVal=m)}else g=u(t,n,r,o,s);if((r!==a||"removeAttr"===w)&&h[y]&&h[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!r:!0,h[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==i)||"attr"==e.only&&"prop"!=i)&&e.call(t,r,T,l?"val":w,i)})}return g},f[i]=function(e,n,r){p[e]||(p[e]={}),p[e][n]||(p[e][n]={});var o=p[e][n][i],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==i&&"value"==n?function(e){var t=this;return r.isVal?v(t,n,e,!1,0===arguments.length):c[i](t,n,e)}:"prop"==i&&"value"==e&&r.value.apply?function(){var e=c[i](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return c[i](this,n,e)}};p[e][n][i]=r,r.value===a&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var b=function(){var e=t.getPrototypeOf(n.createElement("foobar")),i=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var l,u;if(!(a&&(l=n.createElement(r))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&i.call(l,o))s._supvalue=function(){var e=y(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},w.extendValue(r,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),w=function(){var i={};t.addReady(function(n,r){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(i,function(e,i){return s(e),i&&i.forEach?(i.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+i),a)}),o=null});var r,o=e([]),s=function(t,a){i[t]?i[t].push(a):i[t]=[a],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,i){s(t,function(){var t=e.attr(this,i);null!=t&&e.attr(this,i,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,i,n){s(t,function(){e(this).each(function(){var e=y(this,"propValue",{});e[i]=this[i],this[i]=n})})}}}(),T=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(i){i=e(i);var n=i.prop("id");return n||(t++,n="ID-"+t,i.eq(0).prop("id",n)),n}}(),implement:function(e,i){var n=y(e,"implemented")||y(e,"implemented",{});return n[i]?(t.warn(i+" already implemented for element #"+e.id),!1):(n[i]=!0,!0)},extendUNDEFProp:function(t,i){e.each(i,function(e,i){e in t||(t[e]=i)})},createPropDefault:T,data:y,moveToFirstEvent:function(t,i,n){var a,r=(e._data(t,"events")||{})[i];r&&r.length>1&&(a=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(i).width(),l=e(i).width();if(l==r&&a==o)return;r=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var i=n.body,a=n.documentElement;s[t]=function(){return Math.max(i["scroll"+e],a["scroll"+e],i["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).on("updatelayout",this.handler),e(i).bind("resize",this.handler),function(){var t,i=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),i.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(i,n,a){if(i&&n){a=a||{},i.jquery&&(i=i[0]),n.jquery&&(n=n[0]);var r=e.data(i,g)||e.data(i,g,{}),o=e.data(n,g)||e.data(n,g,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,g)||e.data(a.shadowFocusElement,g,s)):a.shadowFocusElement=n,e(i).on("remove",function(t){t.originalEvent||setTimeout(function(){e(n).remove()},4)}),r.hasShadow=n,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=r.shadowData={nativeElement:i,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){y(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){T(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){T(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(i,n){T(i),i.prop||(i.prop={set:function(e){i.attr.set.call(this,e)},get:function(){var i,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!r){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(o){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}})}}(),enumarated:function(e){T(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(i,n){"string"==typeof n&&(n=n.split(u)),n.forEach(function(n){t.defineNodeNamesProperty(i,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(i,n,a){return d[n]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,n),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),f[r](i,n,o),"*"!=i&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&b(i,n,o),a[r]=o)}),a.initAttr&&w.content(i,n),a},defineNodeNameProperties:function(e,i,n,a){for(var r in i)!a&&i[r].initAttr&&w.createTmpCache(e),n&&(i[r][n]||(i[r][n]={},["value","set","get"].forEach(function(e){e in i[r]&&(i[r][n][e]=i[r][e],delete i[r][e])}))),i[r]=t.defineNodeNameProperty(e,r,i[r]);return a||w.flushTmpCache(),i},createElement:function(i,n,a){var r;return e.isFunction(n)&&(n={after:n}),w.createTmpCache(i),n.before&&w.createElement(i,n.before),a&&(r=t.defineNodeNameProperties(i,a,!1,!0)),n.after&&w.createElement(i,n.after),w.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,i,n,a){"string"==typeof t&&(t=t.split(u)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){h[e]||(h[e]={}),"string"==typeof i&&(i=i.split(u)),n.initAttr&&w.createTmpCache(e),i.forEach(function(t){h[e][t]||(h[e][t]=[],d[t]=!0),n.set&&(a&&(n.set.only=a),h[e][t].push(n.set)),n.initAttr&&w.content(e,t)}),w.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(i,n,{attr:{set:function(e){this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,i){if(e.nodeName){var n;return i===a?(n=e.attributes[t]||{},i=n.specified?n.value:null,null==i?a:i):("boolean"==typeof i?i?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,i),a)}},activeLang:function(){var i,n,a=[],r={},o=/:\/\/|^\.*\//,s=function(i,n,a){var r;return n&&a&&-1!==e.inArray(n,a.availabeLangs||[])?(i.loading=!0,r=a.langSrc,o.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+n+".js",function(){i.langObj[n]?(i.loading=!1,c(i,!0)):e(function(){i.langObj[n]&&c(i,!0),i.loading=!1})}),!0):!1},u=function(e){r[e]&&r[e].forEach(function(e){e.callback(i,n,"")})},c=function(e,t){if(e.activeLang!=i&&e.activeLang!==n){var a=l[e.module].options;e.langObj[i]||n&&e.langObj[n]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[n],i),u(e.module)):t||s(e,i,a)||s(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],i),u(e.module))}},d=function(t){return"string"==typeof t&&t!==i?(i=t,n=i.split("-")[0],i==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback(i,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),i};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,i){t[e]=function(e,n,a,r){"string"==typeof e&&(e=e.split(u));var o={};return e.forEach(function(e){o[e]=t[i](e,n,a,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var i=e.getAttribute("role");i||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(i,function(t,i){for(var o=e(t,a).add(r.filter(t)),s=0,l=o.length;l>s;s++)n(o[s],i)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||n(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,i,n,a,r){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var i=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var i=["form-validation"];r.lazyCustomMessages&&(r.customMessages=!0,i.push("form-message")),r.customDatalist&&(r.fD=!0,i.push("form-datalist")),r.addValidators&&i.push("form-validators"),t.reTest(i),e(n).off(".lazyloadvalidation")},l=function(t){var i=!1;return e(t).jProp("elements").each(function(){return i=e(this).is(":invalid"),i?!1:a}),i},u=/^(?:form)$/i;e.extend(e.expr[":"],{"valid-element":function(t){return u.test(t.nodeName||"")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var c=e.expr[":"].focus;e.expr[":"].focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,i){e(t).trigger(i)};var d=function(e,i,n){s(),t.ready("form-validation",function(){e[i].apply(e,n)})},p="transitionDelay"in n.documentElement.style?"":" no-transition",f=t.cfg.wspopover;f.position||f.position===!1||(f.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},f,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+p+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){d(this,"show",arguments)}},t.validityAlert={showFor:function(){d(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,i,n){var r=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return n&&r[n]?r=r[n]:r&&(i=i||e.prop(t,"validity")||{valid:1},i.valid&&(r="")),"object"==typeof r&&(i=i||e.prop(t,"validity")||{valid:1},i.valid||(e.each(i,function(e,t){return t&&"valid"!=e&&r[e]?(r=r[e],!1):a}),"object"==typeof r&&(i.typeMismatch&&r.badInput&&(r=r.badInput),i.badInput&&r.typeMismatch&&(r=r.typeMismatch)))),"object"==typeof r&&(r=r.defaultMessage),r||""},e.fn.getErrorMessage=function(i){var n="",a=this[0];return a&&(n=t.getContentValidationMessage(a,!1,i)||e.prop(a,"customValidationMessage")||e.prop(a,"validationMessage")),n},e(n).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&(t.target.list||e(t.target).is(":invalid"))&&s()}),t.ready("WINDOWLOAD",s)}),webshims.register("form-message",function(e,t,i,n,a,r){"use strict";r.lazyCustomMessages&&(r.customMessages=!0);var o=t.validityMessages,s=r.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\u00e4ssig.",email:"{%value} ist keine g\u00fcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\u00fcltige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zul\u00e4ssigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\u00e4stchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte w\u00e4hlen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var l=o[""],u=function(t,i){return t&&"string"!=typeof t&&(t=t[e.prop(i,"type")]||t[(i.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(i,n){var a,r=e.prop(i,"type"),s=u(l[n],i);return s||"badInput"!=n||(s=u(l.typeMismatch,i)),s||"typeMismatch"!=n||(s=u(l.badInput,i)),s||(s=u(o[""][n],i)||e.prop(i,"validationMessage"),t.info("could not find errormessage for: "+n+" / "+r+". in language: "+t.activeLang())),s&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==s.indexOf("{%"+o)){var l=("label"==o?e.trim(e('label[for="'+i.id+'"]',i.form).text()).replace(/\*$|:$/,""):e.prop(i,o))||"";"patternMismatch"!=n||"title"!=o||l||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(a||(a=e(i).getShadowElement().data("wsWidget"+r)),a&&a.formatValue&&(l=a.formatValue(l,!1))),s=s.replace("{%"+o+"}",l),"value"==o&&(s=s.replace("{%valueLen}",l.length))}}),s||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){l=e}}),t.activeLang({register:"form-core",callback:function(e){o[e]&&(l=o[e])}}),s.forEach(function(i){t.defineNodeNamesProperty(["fieldset","output","button"],i,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(n){var r=t.defineNodeNameProperty(n,i,{prop:{get:function(){var i=this,n="";if(!e.prop(i,"willValidate"))return n;var o=e.prop(i,"validity")||{valid:1};return o.valid?n:(n=t.getContentValidationMessage(i,o))?n:o.customError&&i.nodeName&&(n=Modernizr.formvalidation&&!t.bugs.bustedValidity&&r.prop._supget?r.prop._supget.call(i):t.data(i,"customvalidationMessage"))?n:(e.each(o,function(e,r){return"valid"!=e&&r?(n=t.createValidationMessage(i,e),n?!1:a):a}),n||"")},writeable:!1}})})})}),function(e,t){"use strict";var i,n,a=t.$,r=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},c=t.cfg,d=c.mediaelement;if(!d)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var p=document.createElement("video");if(e.videoBuffered="buffered"in p,o="loop"in p,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!d.preferFlash){var f={1:1,2:1},h=function(e){var i,r,o;if(!d.preferFlash&&(a(e.target).is("audio, video")||(o=e.target.parentNode)&&a("source:last",o)[0]==e.target)&&(i=a(e.target).closest("audio, video"))&&!f[r=i.prop("error")]){if(null==r)return t.warn("There was an unspecified error on a mediaelement"),void 0;a(function(){n&&!d.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){d.preferFlash||!t.mediaelement.createSWF||i.is(".nonnative-api-active")||(d.preferFlash=!0,document.removeEventListener("error",h,!0),a("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+i.prop("error")))},9)})):document.removeEventListener("error",h,!0)})}};document.addEventListener("error",h,!0),a("audio, video").each(function(){var e=a.prop(this,"error");return e&&!f[e]?(h({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof a("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),i=e.track&&!s.track,t.register("mediaelement-core",function(e,t,a,s,c,d){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var p=t.mediaelement;p.parseRtmp=function(e){var i,n,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],i=1,n=o.length;n>i;i++)a||-1===o[i].indexOf(":")||(o[i]=o[i].split(":")[1],a=!0),a?e.streamId.push(o[i]):e.server+=o[i]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=p.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:p.parseRtmp(a)),a):a},h=!n&&"postMessage"in a&&r,m=function(){m.loaded||(m.loaded=!0,d.noAutoTrack||t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var i;return function(){!i&&h&&(i=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){n?u():v()};t.addPolyfill("mediaelement-yt",{test:!h,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(p.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):c}),n},p.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=f(t,n);return a.src?i.push(a):e("source",t).each(function(){a=f(this,n),a.src&&i.push(a)
}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(i){"string"==typeof i&&(i={src:i}),t.append(e(s.createElement("source")).attr(i))})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==c&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,i){var a="";return(n||h)&&(t=e(t),i=i||p.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=p.swfMimeTypes.indexOf(t.container)||h&&"video/youtube"==t.container)?(a=t,!1):c})),a};var y={};p.canNativePlaySrces=function(t,i){var n="";if(r){t=e(t);var a=(t[0].nodeName||"").toLowerCase(),o=(y[a]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return n;i=i||p.srces(t),e.each(i,function(e,i){return i.type&&o.call(t[0],i.type)?(n=i,!1):c})}return n};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(i,n){if(e("source",i).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(i).mediaLoad()}catch(a){}}else n||(n="can't play sources"),e(i).pause().data("mediaerror",n),t.error("mediaelementError: "+n),setTimeout(function(){e(i).data("mediaerror")&&e(i).addClass("media-error").trigger("mediaerror")},1)};var T=function(){var e;return function(i,a,r){t.ready(n?l:"mediaelement-yt",function(){p.createSWF?p.createSWF(i,a,r):e||(e=!0,g(),T(i,a,r))}),e||!h||p.createSWF||v()}}(),E=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=p.canThirdPlaySrces(e,n),r?T(e,r,t):a?p.setError(e,!1):E(e,t,!1,n,!0)):(r=p.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&p.setActive(e,"html5",t):a?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):E(e,t,!0,n,!0))},N=/^(?:embed|object|datalist)$/i,x=function(i,n){var a=t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),r=p.srces(i),o=i.parentNode;clearTimeout(a.loadTimer),e(i).removeClass("media-error"),e.data(i,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!N.test(o.nodeName||"")&&(n=n||t.data(i,"mediaelement"),p.sortMedia&&r.sort(p.sortMedia),E(i,n,d.preferFlash||c,r))};p.selectSource=x,e(s).on("ended",function(i){var n=t.data(i.target,"mediaelement");(!o||n&&"html5"!=n.isActive||e.prop(i.target,"loop"))&&setTimeout(function(){!e.prop(i.target,"paused")&&e.prop(i.target,"loop")&&e(i.target).prop("currentTime",0).play()},1)});var A=!1,k=function(){var i=function(){if(t.implement(this,"mediaelement")&&(x(this),r&&(!o||"ActiveXObject"in a))){var i,n,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var i="",n=0,a=t.length;a>n;n++)i+=t.end(n);return i}},u=function(){var i=l();i!=n&&(n=i,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=l()),clearTimeout(i),i=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(i)}}),"ActiveXObject"in a&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){A=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(i){var a;a=t.defineNodeNameProperty(i,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");x(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}}),y[i]=t.defineNodeNameProperty(i,"canPlayType",{prop:{value:function(t){var a="";return r&&y[i].prop._supvalue&&(a=y[i].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&n&&(t=e.trim((t||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){x(e),e=null},9)}}),t.addReady(function(t,n){var a=e("video, audio",t).add(n.filter("video, audio")).each(i);!m.loaded&&e("track",a).length&&m(),a=null})}),r&&!A&&t.addReady(function(t,i){A||e("video, audio",t).add(i.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?c:(g(),A=!0,!1)})})};i&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),k(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,k),t.ready("track",m)})}(Modernizr,webshims);