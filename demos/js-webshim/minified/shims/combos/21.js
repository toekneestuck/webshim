(function(e){if(!navigator.geolocation){var t=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},n=0,i=e.webshims.cfg.geolocation||{};navigator.geolocation=function(){var r,a={getCurrentPosition:function(n,a,o){var s,u,l,c=2,p=function(){if(!l)if(r){if(l=!0,n(e.extend({timestamp:(new Date).getTime()},r)),f(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(r))}catch(t){}}else a&&!c&&(l=!0,f(),a({code:2,message:"POSITION_UNAVAILABLE"}))},d=function(){c--,h(),p()},f=function(){e(document).unbind("google-loader",f),clearTimeout(u),clearTimeout(s)},h=function(){if(r||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var t=google.loader.ClientLocation;return r={coords:{latitude:t.latitude,longitude:t.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:e.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},t.address)},!0},m=function(){if(!r&&(h(),!r&&window.JSON&&window.sessionStorage))try{r=sessionStorage.getItem("storedGeolocationData654321"),r=r?JSON.parse(r):!1,r.coords||(r=!1)}catch(e){r=!1}};return m(),r?(setTimeout(p,1),void 0):i.confirmText&&!confirm(i.confirmText.replace("{location}",location.hostname))?(a&&a({code:1,message:"PERMISSION_DENIED"}),void 0):(e.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(e){c--,e&&(r=r||{coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:e.city,country:e.country_name,countryCode:e.country_code,county:"",postalCode:e.zipcode,premises:"",region:e.region_name,street:"",streetNumber:""}},p())},error:function(){c--,p()}}),clearTimeout(u),window.google&&window.google.loader?c--:u=setTimeout(function(){i.destroyWrite&&(document.write=t,document.writeln=t),e(document).one("google-loader",d),webshims.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),s=o&&o.timeout?setTimeout(function(){f(),a&&a({code:3,message:"TIMEOUT"})},o.timeout):setTimeout(function(){c=0,p()},1e4),void 0)},clearWatch:e.noop};return a.watchPosition=function(e,t,i){return a.getCurrentPosition(e,t,i),n++,n},a}(),webshims.isReady("geolocation",!0)}})(jQuery),webshims.register("details",function(e,t,n,i,r,a){var o=function(t){var n=e(t).parent("details");return n[0]&&n.children(":first").get(0)===t?n:r},s=function(t,n){t=e(t),n=e(n);var i=e.data(n[0],"summaryElement");e.data(t[0],"detailsElement",n),i&&t[0]===i[0]||(i&&(i.hasClass("fallback-summary")?i.remove():i.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(n[0],"summaryElement",t),n.prop("open",n.prop("open")))},u=function(t){var n=e.data(t,"summaryElement");return n||(n=e("> summary:first-child",t),n[0]?s(n,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+a.text+"</summary>"),n=e.data(t,"summaryElement"))),n};t.createElement("summary",function(){var n=o(this);if(n&&!e.data(this,"detailsElement")){var i,r,a=e.attr(this,"tabIndex")||"0";s(this,n),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var n=o(this);if(n){if(!r&&t.originalEvent)return r=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),r=!1,!1;clearTimeout(i),i=setTimeout(function(){t.isDefaultPrevented()||n.prop("open",!n.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(r=!0,t.preventDefault(),e(this).trigger("click"),r=!1)}}).attr({tabindex:a,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var l;t.defineNodeNamesBooleanProperty("details","open",function(t){var n=e(e.data(this,"summaryElement"));if(n){var i=t?"removeClass":"addClass",r=e(this);if(!l&&a.animate){r.stop().css({width:"",height:""});var o={width:r.width(),height:r.height()}}if(n.attr("aria-expanded",""+t),r[i]("closed-details-summary").children().not(n[0])[i]("closed-details-child"),!l&&a.animate){var s={width:r.width(),height:r.height()};r.css(o).animate(s,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){l=!0,u(this),e.prop(this,"open",e.prop(this,"open")),l=!1})}),webshims.register("mediaelement-jaris",function(e,t,n,i,r,a){"use strict";var o=t.mediaelement,s=n.swfmini,u=Modernizr.audio&&Modernizr.video,l=s.hasFlashPlayerVersion("9.0.115"),c=0,p="ActiveXObject"in n&&u,d={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),r):0},end:function(e){return e?(t.error("buffered index size error"),r):0},length:0}},f=Object.keys(d),h={currentTime:0,volume:1,muted:!1};Object.keys(h);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:r,_calledMeta:!1,lastDuration:0},d,h),v=function(e){try{e.nodeName}catch(n){return null}var i=t.data(e,"mediaelement");return i&&"third"==i.isActive?i:null},g=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,r,t)},y=a.playerPath||t.cfg.basePath+"swf/"+(a.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(a.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(a.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(a.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e};o.jarisEvent={};var w,T={onPlayPause:function(e,t,n){var i,r;if(null==n)try{i=t.api.api_get("isPlaying")}catch(a){}else i=n;i==t.paused&&(t.paused=!i,r=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,r),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var n,i=t.duration;t.duration=e.duration,i==t.duration||isNaN(t.duration)||t._calledMeta&&2>(n=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},n>50?0:n>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),g(t._elem,"timeupdate")},onProgress:function(t,n){if(n.ended&&(n.ended=!1),n.duration&&!isNaN(n.duration)){var i=t.loaded/t.total;i>.02&&.2>i?b(3,n):i>.2&&(i>.99&&(n.networkState=1),b(4,n)),n._bufferedEnd&&n._bufferedEnd>i&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=i,n.buffered.length=1,e.event.trigger("progress",r,n._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var n=function(e){var t=!0;try{e.api.api_get("volume")}catch(n){t=!1}return t};return function(i,a){var o=0,s=function(){return o>9?(a.tryedReframeing=0,r):(o++,a.tryedReframeing++,n(a)?(a.wasSwfReady=!0,a.tryedReframeing=0,N(a),x(a)):6>a.tryedReframeing?3>a.tryedReframeing?(a.reframeTimer=setTimeout(s,9),a.shadowElem.css({overflow:"visible"}),setTimeout(function(){a.shadowElem.css({overflow:"hidden"})},1)):(a.shadowElem.css({overflow:"hidden"}),e(a._elem).mediaLoad()):(clearTimeout(a.reframeTimer),t.error("reframing error")),r)};a&&a.api&&(a.tryedReframeing||(a.tryedReframeing=0),clearTimeout(w),clearTimeout(a.reframeTimer),a.shadowElem.removeClass("flashblocker-assumed"),o?a.reframeTimer=setTimeout(s,9):s())}}()};T.onMute=T.onVolumeChange;var x=function(e){var n,i=e.actionQueue.length,r=0;if(i&&"third"==e.isActive)for(;e.actionQueue.length&&i>r;){r++,n=e.actionQueue.shift();try{e.api[n.fn].apply(e.api,n.args)}catch(a){t.warn(a)}}e.actionQueue.length&&(e.actionQueue=[])},N=function(t){t&&((t._ppFlag===r&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===r||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(n){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},E=e.noop;if(u){var k={play:1,playing:1},A=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],C=A.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(n){var i=t.data(n.target,"mediaelement");if(i){var r=n.originalEvent&&n.originalEvent.type===n.type;r==("third"==i.activating)&&(n.stopImmediatePropagation(),k[n.type]&&i.isActive!=i.activating&&e(n.target).pause())}};E=function(n){e(n).off(C).on(C,S),A.forEach(function(e){t.moveToFirstEvent(n,e)})},E(i)}o.setActive=function(n,i,r){if(r||(r=t.data(n,"mediaelement")),r&&r.isActive!=i){"html5"!=i&&"third"!=i&&t.warn("wrong type for mediaelement activating: "+i);var a=t.data(n,"shadowData");r.activating=i,e(n).pause(),r.isActive=i,"third"==i?(a.shadowElement=a.shadowFocusElement=r.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),a.shadowElement=a.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")}};var _=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(n){if(n){var i=t,r=n.networkState;for(b(0,n),clearTimeout(n._durationChangeTimer);--i>-1;)delete n[e[i]];n.actionQueue=[],n.buffered.length=0,r&&g(n._elem,"emptied")}}}(),D=function(t,n){var i,r=t._elem,a=t.shadowElem;e(r)[n?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||n?a.css({width:r.style.width||(i=e(r).attr("width"))&&i+"px"||e(r).width(),height:r.style.height||(i=e(r).attr("height"))&&i+"px"||e(r).height()}):a.css({width:0,height:0})},M=function(){var t={"":1,auto:1};return function(n){var i=e.attr(n,"preload");return null==i||"none"==i||e.prop(n,"autoplay")?!1:(i=e.prop(n,"preload"),!!(t[i]||"metadata"==i&&e(n).is(".preload-in-doubt, video:not([poster])")))}}(),P={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},F=function(e){return e.replace?e.replace(P.A,"%26").replace(P.a,"%26").replace(P.e,"%3D").replace(P.q,"%3F"):e};o.createSWF=function(n,i,p){if(!l)return setTimeout(function(){e(n).mediaLoad()},1),r;1>c?c=1:c++,p||(p=t.data(n,"mediaelement")),(e.attr(n,"height")||e.attr(n,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var d,f="audio/rtmp"==i.type||"video/rtmp"==i.type,h=e.extend({},a.vars,{poster:F(e.attr(n,"poster")&&e.prop(n,"poster")||""),source:F(i.streamId||i.srcProp),server:F(i.server||"")}),v=e(n).data("vars")||{},g=e.prop(n,"controls"),b="jarisplayer-"+t.getID(n),x=e.extend({},a.params,e(n).data("params")),N=n.nodeName.toLowerCase(),k=e.extend({},a.attrs,{name:b,id:b},e(n).data("attrs")),A=function(){D(p,e.prop(n,"controls"))};p&&p.swfCreated?(o.setActive(n,"third",p),p.currentSrc=i.srcProp,p.shadowElem.html('<div id="'+b+'">'),p.api=!1,p.actionQueue=[],d=p.shadowElem,_(p)):(d=e('<div class="polyfill-'+N+' polyfill-mediaelement" id="wrapper-'+b+'"><div id="'+b+'"></div>').css({position:"relative",overflow:"hidden"}),p=t.data(n,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:d},_elemNodeName:{value:N},_elem:{value:n},currentSrc:{value:i.srcProp},swfCreated:{value:!0},id:{value:b.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),r):0},end:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),r):(p.duration-p._bufferedStart)*p._bufferedEnd+p._bufferedStart},length:0}}})),D(p,g),d.insertBefore(n),u&&e.extend(p,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted"),paused:e.prop(n,"paused")}),t.addShadowDom(n,d),t.data(n,"mediaelement")||t.data(n,"mediaelement",p),E(n),o.setActive(n,"third",p),e(n).on({updatemediaelementdimensions:A}).onWSOff("updateshadowdom",A).on("remove",function(e){!e.originalEvent&&o.jarisEvent[p.id]&&o.jarisEvent[p.id].elem==n&&(delete o.jarisEvent[p.id],clearTimeout(w),clearTimeout(p.flashBlock)),d.remove()})),o.jarisEvent[p.id]&&o.jarisEvent[p.id].elem==n||(o.jarisEvent[p.id]=function(e){if("ready"==e.type){var t=function(){p.api&&(M(n)&&p.api.api_preload(),T.ready(e,p))};p.api?t():setTimeout(t,9)}else p.currentTime=e.position,p.api&&(!p._calledMeta&&isNaN(e.duration)&&p.duration!=e.duration&&isNaN(p.duration)&&T.onDataInitialized(e,p),p._ppFlag||"onPlayPause"==e.type||T.onPlayPause(e,p),T[e.type]&&T[e.type](e,p)),p.duration=e.duration},o.jarisEvent[p.id].elem=n),e.extend(h,{id:b,evtId:p.id,controls:""+g,autostart:"false",nodename:N},v),f?h.streamtype="rtmp":"audio/mpeg"==i.type||"audio/mp3"==i.type?(h.type="audio",h.streamtype="file"):"video/youtube"==i.type&&(h.streamtype="youtube"),a.changeSWF(h,n,i,p,"embed"),clearTimeout(p.flashBlock),s.embedSWF(y,b,"100%","100%","9.0.115",!1,h,x,k,function(i){if(i.success){var r=function(){(!i.ref.parentNode&&d[0].parentNode||"none"==i.ref.style.display)&&(d.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed")),e(i.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};p.api=i.ref,g||e(i.ref).attr("tabindex","-1").css("outline","none"),p.flashBlock=setTimeout(r,99),w||(clearTimeout(w),w=setTimeout(function(){r();var n=e(i.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>n[0].offsetWidth||2>n[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3))}})};var O=function(e,t,n,i){return i=i||v(e),i?(i.api&&i.api[t]?i.api[t].apply(i.api,n||[]):(i.actionQueue.push({fn:t,args:n}),i.actionQueue.length>10&&setTimeout(function(){i.actionQueue.length>5&&i.actionQueue.shift()},99)),i):!1};if(["audio","video"].forEach(function(n){var i,r={},a=function(e){("audio"!=n||"videoHeight"!=e&&"videoWidth"!=e)&&(r[e]={get:function(){var t=v(this);return t?t[e]:u&&i[e].prop._supget?i[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){a(e),delete r[e].writeable,r[e].set=t};o("volume",function(e){var n=v(this);if(n)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),O(this,"api_volume",[e],n),n.volume!=e&&(n.volume=e,g(n._elem,"volumechange")),n=null);else if(i.volume.prop._supset)return i.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,O(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(i.muted.prop._supset)return i.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||O(this,"api_seek",[e],t);else if(i.currentTime.prop._supset)return i.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){r[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),O(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(i[e].prop._supvalue)return i[e].prop._supvalue.apply(this,arguments)}}}),f.forEach(a),t.onNodeNamesPropertyModify(n,"controls",function(t,i){var r=v(this);e(this)[i?"addClass":"removeClass"]("webshims-controls"),r&&("audio"==n&&D(r,i),O(this,"api_controls",[i],r))}),t.onNodeNamesPropertyModify(n,"preload",function(){var n,i,r;M(this)&&(n=v(this),n?O(this,"api_preload",[],n):!p||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(r=this,i=t.data(r,"mediaelementBase")||t.data(r,"mediaelementBase",{}),clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){e(r).mediaLoad()},9)))}),i=t.defineNodeNameProperties(n,r,"prop")}),l&&e.cleanData){var j=e.cleanData,I={object:1,OBJECT:1};e.cleanData=function(e){var t,n;if(e&&(n=e.length)&&c)for(t=0;n>t;t++)if(I[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(i){}}return j.apply(this,arguments)}}u||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))}),webshims.register("track",function(e,t,n,i){"use strict";var r=t.mediaelement;(new Date).getTime();var a=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),u=Modernizr.ES5&&Modernizr.objectAccessor,l=function(e){var n={};return e.addEventListener=function(e,i){n[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+i),n[e]=i},e.removeEventListener=function(e,i){n[e]&&n[e]!=i&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+i),n[e]&&delete n[e]},e},c={getCueById:function(e){for(var t=null,n=0,i=this.length;i>n;n++)if(this[n].id===e){t=this[n];break}return t}},p={0:"disabled",1:"hidden",2:"showing"},d={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var n=this.cues[this.cues.length-1];n&&n.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=r.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var n=this.cues||[],i=0,r=n.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;r>i;i++)if(n[i]===e){n.splice(i,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},f=["kind","label","srclang"],h={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(n,i){var r,a,o=[],s=[],u=[];if(n||(n=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),i||(n.blockTrackListUpdate=!0,i=e.prop(this,"textTracks"),n.blockTrackListUpdate=!1),clearTimeout(n.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");u.push(t),-1==i.indexOf(t)&&s.push(t)}),n.scriptedTextTracks)for(r=0,a=n.scriptedTextTracks.length;a>r;r++)u.push(n.scriptedTextTracks[r]),-1==i.indexOf(n.scriptedTextTracks[r])&&s.push(n.scriptedTextTracks[r]);for(r=0,a=i.length;a>r;r++)-1==u.indexOf(i[r])&&o.push(i[r]);if(o.length||s.length){for(i.splice(0),r=0,a=u.length;a>r;r++)i.push(u[r]);for(r=0,a=o.length;a>r;r++)e([i]).triggerHandler(e.Event({type:"removetrack",track:o[r]}));for(r=0,a=s.length;a>r;r++)e([i]).triggerHandler(e.Event({type:"addtrack",track:s[r]}));(n.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(n,i){i||(i=t.data(n,"trackData")),i&&!i.isTriggering&&(i.isTriggering=!0,setTimeout(function(){(i.track||{}).readyState?e(n).closest("audio, video").triggerHandler("updatetrackdisplay"):e(n).triggerHandler("checktrackmode"),i.isTriggering=!1},1))},y=e("<div />")[0];n.TextTrackCue=function(e,n,i){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=n,this.text=i,this.id="",this.pauseOnExit=!1,l(this)},n.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",n="",a=i.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,i;if(t!=this.text)for(t=this.text,n=r.parseCueTextToHTML(t),y.innerHTML=n,e=0,i=y.childNodes.length;i>e;e++)a.appendChild(y.childNodes[e].cloneNode(!0));return a.cloneNode(!0)}),e?e.apply(this,arguments):a.cloneNode(!0)},track:null,id:""},r.createCueList=function(){return e.extend([],c)},r.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,n=/\<\s*\//,i=function(e,t,i,r){var a;return n.test(r)?a="</"+e+">":(i.splice(0,1),a="<"+e+" "+t+'="'+i.join(" ").replace(/\"/g,"&#34;")+'">'),a},r=function(e){var n=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return n[0]&&(n[0]=n[0].toLowerCase(),t.test(n[0])?"c"==n[0]?e=i("span","class",n,e):"v"==n[0]&&(e=i("q","title",n,e)):e=""),e};return function(t){return t.replace(e,r)}}(),r.loadTextTrack=function(n,i,a,s){var u="play playing timeupdate updatetrackdisplay",l=a.track,c=function(){var a,o,s=e.prop(i,"src");if("disabled"!=l.mode&&s&&e.attr(i,"src")&&(e(n).unbind(u,c),e(i).unbind("checktrackmode",c),!l.readyState)){a=function(){l.readyState=3,l.cues=null,l.activeCues=l.shimActiveCues=l._shimActiveCues=null,e(i).triggerHandler("error")},l.readyState=1;try{l.cues=r.createCueList(),l.activeCues=l.shimActiveCues=l._shimActiveCues=r.createCueList(),o=e.ajax({dataType:"text",url:s,success:function(s){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),r.parseCaptions(s,l,function(t){t&&"length"in t?(l.readyState=2,e(i).triggerHandler("load"),e(n).triggerHandler("updatetrackdisplay")):a()})},error:a})}catch(p){a(),t.warn(p)}}};l.readyState=0,l.shimActiveCues=null,l._shimActiveCues=null,l.activeCues=null,l.cues=null,e(n).unbind(u,c),e(i).unbind("checktrackmode",c),e(n).on(u,c),e(i).on("checktrackmode",c),s&&(l.mode=o[l.kind]?"showing":"hidden",c())},r.createTextTrack=function(n,i){var o,s;return i.nodeName&&(s=t.data(i,"trackData"),s&&(g(i,s),o=s.track)),o||(o=l(t.objectCreate(d)),u||f.forEach(function(t){var n=e.prop(i,t);n&&(o[h[t]||t]=n)}),i.nodeName?(u&&f.forEach(function(n){t.defineProperty(o,h[n]||n,{get:function(){return e.prop(i,n)}})}),s=t.data(i,"trackData",{track:o}),r.loadTextTrack(n,i,s,e.prop(i,"default")&&e(i).siblings("track[default]")[a]()[0]==i)):(u&&f.forEach(function(e){t.defineProperty(o,h[e]||e,{value:i[e],writeable:!1})}),o.cues=r.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=r.createCueList(),o.mode="hidden",o.readyState=2)),o},r.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,n=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,i=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,r=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(a){var o,s,u,l,c,p,d,f,h,m;if(f=n.exec(a))return null;if(f=i.exec(a))return null;if(f=r.exec(a))return null;for(o=a.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(d=o.shift().replace(/\s*/gi,"")+""),p=0;o.length>p;p++){var v=o[p];(h=e.exec(v))&&(c=h.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),u=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,p).concat(o.slice(p+1));break}return s||u?(l=o.join("\n"),m=new TextTrackCue(s,u,l),d&&(m.id=d),m):(t.warn("couldn't extract time information: "+[s,u,o.join("\n"),d].join(" ; ")),null)}}(),r.parseCaptions=function(e,n,i){r.createCueList();var a,o,s,u,l;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,p){for(;p>c;c++){if(a=e[c],s.test(a))l=!0;else if(a.replace(/\s*/gi,"").length){if(!l){t.error("please use WebVTT format. This is the standard"),i(null);break}a=r.parseCaptionChunk(a,c),a&&n.addCue(a)}if((new Date).getTime()-30>u){c++,setTimeout(function(){u=(new Date).getTime(),o(c,p)},90);break}}c>=p&&(l||t.error("please use WebVTT format. This is the standard"),i(n.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){u=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},r.createTrackList=function(e,n){return n=n||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),n.textTracks||(n.textTracks=[],t.defineProperties(n.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),l(n.textTracks)),n.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var n=t.data(this,"trackData");this.setAttribute("data-kind",e),n&&(n.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(f,function(n,i){var r=h[i]||i;t.onNodeNamesPropertyModify("track",i,function(){var n=t.data(this,"trackData"),a=this;n&&("kind"==i&&g(this,n),u||(n.track[r]=e.prop(this,i)),clearTimeout(n.changedTrackPropTimer),n.changedTrackPropTimer=setTimeout(function(){e(a).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(n){if(n){var i,a=t.data(this,"trackData");a&&(i=e(this).closest("video, audio"),i[0]&&r.loadTextTrack(i,this,a))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return r.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),i=r.createTrackList(e,n);return n.blockTrackListUpdate||v.call(e,n,i),i},writeable:!1},addTextTrack:{value:function(e,n,i){var a=r.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:n||"",srclang:i||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(a),v.call(this),a}}},"prop"),e(i).on("emptied ended updatetracklist",function(n){if(e(n.target).is("audio, video")){var i=t.data(n.target,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){v.call(n.target,i)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var n,i,r=e.prop(this,"track"),a=this.track;a&&(n=e.prop(this,"kind"),i=b(this,a),(a.mode||i)&&(r.mode=p[a.mode]||a.mode),"descriptions"!=n&&(a.mode="string"==typeof a.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:n}))),e(this).on("load error",w)}};t.addReady(function(n,i){var r=i.filter("video, audio, track").closest("audio, video");e("video, audio",n).add(r).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var n=e.prop(this,"textTracks"),i=this.textTracks;n.length!=i.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),r.each(function(){var e=this,n=t.data(e,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(e,n)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")});