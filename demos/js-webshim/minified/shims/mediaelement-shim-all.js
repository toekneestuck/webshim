jQuery.webshims.ready("dom-support",function(e,f,p,o){var n=o.createElement("a");["poster","src"].forEach(function(m){f.defineNodeNamesProperty(m=="src"?["audio","video","source"]:["video"],m,{prop:{get:function(){var k=e.attr(this,m);if(k==null)return"";n.setAttribute("href",k);return n.href},set:function(k){e.attr(this,m,k)}}})});["autoplay","controls"].forEach(function(e){f.defineNodeNamesBooleanProperty(["audio","video"],e)});f.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},
HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")});
jQuery.webshims.register("mediaelement-swf",function(e,f,p,o,n,m){var k=f.mediaelement,t=p.swfobject,C=Modernizr.audio&&Modernizr.video,E=t.hasFlashPlayerVersion("9.0.115"),x,A={paused:!0,ended:!1,currentSrc:"",duration:p.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)f.error("buffered index size error");else return 0},end:function(a){if(a)f.error("buffered index size error");else return 0},length:0}},i=Object.keys(A),u={currentTime:0,volume:1,
muted:!1};Object.keys(u);var y=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,currentTime:0,_ppFlag:n},A,u),z=/^jwplayer-/,j=function(a){if(a=o.getElementById(a.replace(z,"")))return a=f.data(a,"mediaelement"),a.isActive=="flash"?a:null},r=function(a){return(a=f.data(a,"mediaelement"))&&a.isActive=="flash"?a:null},l=function(a,b){b=e.Event(b);b.preventDefault();e.event.trigger(b,n,a)},v,c=f.cfg.basePath+"swf/jwwebshims.swf",d=f.cfg.basePath+
"jwplayer/player.swf";E&&f.ready("WINDOWLOAD",function(){x||e.ajax(c,f.xhrPreloadOption)});f.extendUNDEFProp(m.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});f.extendUNDEFProp(m.jwVars,{screencolor:"ffffffff"});f.extendUNDEFProp(m.jwAttrs,{bgcolor:"#000000"});k.jwEvents={View:{PLAY:function(a){var b=j(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;l(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(a){var b=
j(a.id);if(b&&b._bufferedEnd!=a.percentage){b.networkState=a.percentage==100?1:2;if(!b.duration){try{if(b.duration=b.jwapi.getPlaylist()[0].duration,b.duration<=0)b.duration=p.NaN}catch(c){}b.duration&&(l(b._elem,"durationchange"),b._elemNodeName=="audio"&&this.META(e.extend({duration:b.duration},a),b))}if(b.ended)b.ended=!1;if(b.duration){if(a.percentage>1&&b.readyState<3)b.readyState=3,l(b._elem,"canplay");if(b._bufferedEnd&&b._bufferedEnd>a.percentage)b._bufferedStart=b.currentTime||0;b._bufferedEnd=
a.percentage;b.buffered.length=1;if(a.percentage==100)b.networkState=1,b.readyState=4;e.event.trigger("progress",n,b._elem,!0)}}},META:function(a,b){if("duration"in a||"youtubequalitylevels"in a)if((b=b&&b.networkState?b:j(a.id))&&!b._metadata){b._metadata=!0;if(!b.duration||"duration"in a||!("youtubequalitylevels"in a)){var c=b.duration;b.duration=a.duration;b.videoHeight=a.height||0;b.videoWidth=a.width||0;if(!b.networkState)b.networkState=2;if(b.readyState<1)b.readyState=1;c!==b.duration&&l(b._elem,
"durationchange")}l(b._elem,"loadedmetadata")}},TIME:function(a){var b=j(a.id);if(b&&b.currentTime!==a.position){b.currentTime=a.position;if(b.readyState<2)b.readyState=2;if(b.ended)b.ended=!1;l(b._elem,"timeupdate")}},STATE:function(a){var b=j(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.readyState>1)b.readyState=1;if(b.ended)b.ended=!1;l(b._elem,"waiting");break;case "PLAYING":b.paused=!1;b._ppFlag=!0;if(b.readyState<3)b.readyState=3,l(b._elem,"canplay");if(b.ended)b.ended=!1;l(b._elem,"playing");
break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,l(b._elem,"pause");break;case "COMPLETED":if(b.readyState<4)b.readyState=4;b.ended=!0;l(b._elem,"ended")}}},Controller:{ERROR:function(a){var b=j(a.id);b&&k.setError(b._elem,a.message)},SEEK:function(a){var b=j(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=a.position)b.currentTime=a.position,l(b._elem,"timeupdate")}},VOLUME:function(a){var b=j(a.id);if(b&&(a=
a.percentage/100,b.volume!=a))b.volume=a,l(b._elem,"volumechange")},MUTE:function(a){if(!v||!a.state){var b=j(a.id);if(b&&b.muted!=a.state)b.muted=a.state,l(b._elem,"volumechange")}}}};var g=function(a){e.each(k.jwEvents,function(b,c){e.each(c,function(c){a.jwapi["add"+b+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+b+"."+c)})})},h=function(a){a&&(a._ppFlag===n&&e.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if(a.isActive=="flash"&&(a._ppFlag===n||!a.paused))try{e(a._elem).play()}catch(b){}},
1)},H=function(a){if(a&&a._elemNodeName=="video"){var b,c,d,g={},s,q,h,k=function(k,f){if(f&&k&&!(f<1||k<1||a.isActive!="flash"))if(b&&(b.remove(),b=!1),g.width=k,g.height=f,clearTimeout(q),c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d){s=s||e(a._elem).getShadowElement();var t;c&&!d?(t=s.height(),k*=t/f,f=t):!c&&d&&(t=s.width(),f*=t/k,k=t);h=!0;setTimeout(function(){h=!1},9);s.css({width:k,height:f})}},f=function(){if(!(a.isActive!="flash"||e.prop(a._elem,"readyState")&&e.prop(this,
"videoWidth"))){var g=e.prop(a._elem,"poster");if(g&&(c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d))b&&(b.remove(),b=!1),b=e('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(q);var a=this,c=a.naturalWidth||a.width||a.offsetWidth,d=a.naturalHeight||a.height||a.offsetHeight;d&&c?(k(c,d),a=null):setTimeout(function(){c=a.naturalWidth||a.width||a.offsetWidth;d=a.naturalHeight||
a.height||a.offsetHeight;k(c,d);b&&(b.remove(),b=!1);a=null},9);e(this).unbind()}).prop("src",g).appendTo("body").each(function(){this.complete||this.error?e(this).triggerHandler("alreadycomplete"):(clearTimeout(q),q=setTimeout(function(){e(a._elem).triggerHandler("error")},9999))})}};e(a._elem).bind("loadedmetadata",function(){k(e.prop(this,"videoWidth"),e.prop(this,"videoHeight"))}).bind("emptied",f).bind("swfstageresize",function(){h||k(g.width,g.height)}).triggerHandler("swfstageresize");f();
e.prop(a._elem,"readyState")&&k(e.prop(a._elem,"videoWidth"),e.prop(a._elem,"videoHeight"))}};k.playerResize=function(a){a&&(a=o.getElementById(a.replace(z,"")))&&e(a).triggerHandler("swfstageresize")};e(o).bind("emptied",function(a){a=r(a.target);h(a)});var B;k.jwPlayerReady=function(a){var b=j(a.id);if(b&&b.jwapi){clearTimeout(B);b.jwData=a;b.wasSwfReady?e(b._elem).mediaLoad():(a=parseFloat(a.version,10),(a<5.6||a>=6)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),e.prop(b._elem,
"volume",b.volume),e.prop(b._elem,"muted",b.muted),g(b));b.wasSwfReady=!0;var a=b.actionQueue.length,c=0,d;if(a&&b.isActive=="flash")for(;b.actionQueue.length&&a>c;)c++,d=b.actionQueue.shift(),b.jwapi[d.fn].apply(b.jwapi,d.args);if(b.actionQueue.length)b.actionQueue=[];h(b)}};var F=e.noop;if(C){var I={play:1,playing:1},D=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"].map(function(a){return a+".webshimspolyfill"}).join(" "),G=function(a){var b=
f.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==(b.activating=="flash")&&(a.stopImmediatePropagation(),I[a.type]&&b.isActive!=b.activating&&e(a.target).pause())};e(o).bind(D,G);F=function(a){e(a).unbind(D).bind(D,G)}}k.setActive=function(a,b,c){c||(c=f.data(a,"mediaelement"));if(c&&c.isActive!=b){b!="html5"&&b!="flash"&&f.warn("wrong type for mediaelement activating: "+b);var d=f.data(a,"shadowData");c.activating=b;e(a).pause();c.isActive=b;b=="flash"?(d.shadowElement=
d.shadowFocusElement=c.shadowElem[0],e(a).hide().getShadowElement().show()):(e(a).show().getShadowElement().hide(),d.shadowElement=d.shadowFocusElement=!1)}};var J=function(){var a=["_bufferedEnd","_bufferedStart","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],b=a.length;return function(c){if(c){for(var d=b,e=c.networkState;--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&l(c._elem,"emptied")}}}();k.createSWF=function(a,
b,g){if(E){x=!0;var h=e.extend({},m.jwVars,{image:e.prop(a,"poster")||"",file:b.srcProp}),i=e(a).data("jwvars")||{};if(g&&g.swfCreated)k.setActive(a,"flash",g),J(g),g.currentSrc=b.srcProp,e.extend(h,i),m.changeJW(h,a,b,g,"load"),w(a,"sendEvent",["LOAD",h]);else{var s=e.prop(a,"controls"),q="jwplayer-"+f.getID(a),l=e.extend({},m.jwParams,e(a).data("jwparams")),j=a.nodeName.toLowerCase(),o=e.extend({},m.jwAttrs,{name:q,id:q},e(a).data("jwattrs")),n=e('<div class="polyfill-'+j+' polyfill-mediaelement" id="wrapper-'+
q+'"><div id="'+q+'"></div>').css({position:"relative",overflow:"hidden"});j=="audio"&&!s?n.css({width:0,height:0}):n.css({width:a.style.width||e(a).width(),height:a.style.height||e(a).height()});n.insertBefore(a);g=f.data(a,"mediaelement",f.objectCreate(y,{actionQueue:{value:[]},shadowElem:{value:n},_elemNodeName:{value:j},_elem:{value:a},currentSrc:{value:b.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(b){if(b>=g.buffered.length)f.error("buffered index size error");else return 0},
end:function(b){if(b>=g.buffered.length)f.error("buffered index size error");else return(g.duration-g._bufferedStart)*g._bufferedEnd/100+g._bufferedStart},length:0}}}));C&&e.extend(g,{volume:e.prop(a,"volume"),muted:e.prop(a,"muted")});e.extend(h,{id:q,controlbar:s?m.jwVars.controlbar||(j=="video"?"over":"bottom"):"none",icons:""+(s&&j=="video")},i,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});h.plugins?h.plugins+=","+c:h.plugins=c;f.addShadowDom(a,n);F(a);k.setActive(a,"flash",g);m.changeJW(h,
a,b,g,"embed");H(g);t.embedSWF(d,q,"100%","100%","9.0.0",!1,h,l,o,function(b){if(b.success)g.jwapi=b.ref,s||e(b.ref).attr("tabindex","-1").css("outline","none"),B||(clearTimeout(B),B=setTimeout(function(){var a=e(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"});a[0].offsetWidth>1&&a[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(a[0].offsetWidth<2||a[0].offsetHeight<2)&&f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){e(a).mediaLoad()},1)};var w=function(a,b,c,d){return(d=d||r(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},c,d=function(d){a=="audio"&&
(d=="videoHeight"||d=="videoWidth")||(b[d]={get:function(){var b=r(this);return b?b[d]:C&&c[d].prop._supget?c[d].prop._supget.apply(this):y[d]},writeable:!1})},g=function(a,c){d(a);delete b[a].writeable;b[a].set=c};g("volume",function(b){var a=r(this);if(a){if(b*=100,!isNaN(b)){(b<0||b>100)&&f.error("volume greater or less than allowed "+b/100);a.muted&&(v=!0);w(this,"sendEvent",["VOLUME",b],a);if(v){try{a.jwapi.sendEvent("mute","true")}catch(d){}v=!1}setTimeout(function(){b/=100;if(!(a.volume==b||
a.isActive!="flash"))a.volume=b,l(a._elem,"volumechange"),a=null},1)}}else if(c.volume.prop._supset)return c.volume.prop._supset.apply(this,arguments)});g("muted",function(b){var a=r(this);if(a)b=!!b,w(this,"sendEvent",["mute",""+b],a),setTimeout(function(){if(!(a.muted==b||a.isActive!="flash"))a.muted=b,l(a._elem,"volumechange"),a=null},1);else if(c.muted.prop._supset)return c.muted.prop._supset.apply(this,arguments)});g("currentTime",function(b){var a=r(this);if(a){if(b*=1,!isNaN(b)){if(a.paused)clearTimeout(a.stopPlayPause),
a.stopPlayPause=setTimeout(function(){a.paused=!0;a.stopPlayPause=!1},50);w(this,"sendEvent",["SEEK",""+b],a);if(a.paused){if(a.readyState>0)a.currentTime=b,l(a._elem,"timeupdate");try{a.jwapi.sendEvent("play","false")}catch(d){}}}}else if(c.currentTime.prop._supset)return c.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=r(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),w(this,"sendEvent",["play",a=="play"],b),setTimeout(function(){if(b.isActive==
"flash"&&(b._ppFlag=!0,b.paused!=(a!="play")))b.paused=a!="play",l(b._elem,a)},1);else if(c[a].prop._supvalue)return c[a].prop._supvalue.apply(this,arguments)}}});i.forEach(d);f.onNodeNamesPropertyModify(a,"controls",function(b,c){var d=w(this,c?"showControls":"hideControls",[a]);e(this)[c?"addClass":"removeClass"]("webshims-controls");d&&e(d.jwapi).attr("tabindex",c?"0":"-1")});c=f.defineNodeNameProperties(a,b,"prop")})});
(function(e,f,p){var o=f.audio&&f.video,n=!1;if(o){var m=document.createElement("video");f.videoBuffered="buffered"in m;n="loop"in m;f.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),p.cfg.waitReady&&e.readyWait++,p.loader.loadScript("mediaelement-native-fix",function(){p.cfg.waitReady&&e.ready(!0)}))}e.webshims.ready("dom-support",function(e,f,m,p,x){var A=f.cfg.mediaelement,i=f.mediaelement,u=!m.swfobject||swfobject.hasFlashPlayerVersion("9.0.115"),
y=function(){f.ready("mediaelement-swf",function(){if(!i.createSWF)f.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],f.loader.loadList(["mediaelement-swf"])})},z=function(c,d){var c=e(c),g={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!g.src)return g;var h=c.attr("type");if(h)g.type=h,g.container=e.trim(h.split(";")[0]);else if(d||(d=c[0].nodeName.toLowerCase(),d=="source"&&(d=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),
h=i.getTypeForSrc(g.src,d))g.type=h,g.container=h,f.warn("you should always provide a proper mime-type using the source element. "+g.src+" detected as: "+h),e.nodeName(c[0],"source")&&c.attr("type",h);if(h=c.attr("media"))g.media=h;return g};f.loader.loadList(["swfobject"]);f.ready("swfobject",function(){(u=swfobject.hasFlashPlayerVersion("9.0.115"))&&f.ready("WINDOWLOAD",y)});o&&f.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]);
i.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r"],"audio/wav":["wav"],"audio/x-m4a":["m4a"],"audio/x-m4p":["m4p"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"]}};
i.mimeTypes.source=e.extend({},i.mimeTypes.audio,i.mimeTypes.video);i.getTypeForSrc=function(c,d){if(c.indexOf("youtube.com/watch?")!=-1)return"video/youtube";var c=c.split("?")[0].split("."),c=c[c.length-1],g;e.each(i.mimeTypes[d],function(d,e){if(e.indexOf(c)!==-1)return g=d,!1});return g};i.srces=function(c,d){c=e(c);if(d)c.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(d)||(d=[d]),d.forEach(function(d){var e=p.createElement("source");typeof d=="string"&&(d={src:d});e.setAttribute("src",
d.src);d.type&&e.setAttribute("type",d.type);d.media&&e.setAttribute("media",d.media);c.append(e)});else{var d=[],g=c[0].nodeName.toLowerCase(),f=z(c,g);f.src?d.push(f):e("source",c).each(function(){f=z(this,g);f.src&&d.push(f)});return d}};e.fn.loadMediaSrc=function(c,d){return this.each(function(){d!==x&&(e(this).removeAttr("poster"),d&&e.attr(this,"poster",d));i.srces(this,c);e(this).mediaLoad()})};i.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p",
"video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube"];i.canSwfPlaySrces=function(c,d){var g="";u&&(c=e(c),d=d||i.srces(c),e.each(d,function(c,d){if(d.container&&d.src&&i.swfMimeTypes.indexOf(d.container)!=-1)return g=d,!1}));return g};var j={};i.canNativePlaySrces=function(c,d){var g="";if(o){var c=e(c),f=(c[0].nodeName||"").toLowerCase();if(!j[f])return g;d=d||i.srces(c);e.each(d,
function(d,e){if(e.type&&j[f].prop._supvalue.call(c[0],e.type))return g=e,!1})}return g};i.setError=function(c,d){d||(d="can't play sources");e(c).data("mediaerror",d);f.warn("mediaelementError: "+d);setTimeout(function(){e(c).data("mediaerror")&&e(c).trigger("mediaerror")},1)};var r=function(){var c;return function(d,e,h){f.ready("mediaelement-swf",function(){i.createSWF?i.createSWF(d,e,h):c||(c=!0,y(),r(d,e,h))})}}(),l=function(c,d,f,h,j,m){j=j||i.srces(d);e(d).data("mediaerror",!1);j.length&&(h||
h!==!1&&f&&f.isActive=="flash"?(h=i.canSwfPlaySrces(d,j))?r(d,h,f):m?i.setError(d,!1):l(c,d,f,!1,j,!0):(h=i.canNativePlaySrces(d))?f&&f.isActive=="flash"&&i.setActive(d,"html5",f):m?i.setError(d,!1):l(c,d,f,!0,j,!0))};e(p).bind("ended",function(c){var d=f.data(c.target,"mediaelement");(!n||d&&d.isActive!="html5"||e.prop(c.target,"loop"))&&setTimeout(function(){!e.prop(c.target,"paused")&&e.prop(c.target,"loop")&&e(c.target).prop("currentTime",0).play()},1)});n||f.defineNodeNamesBooleanProperty(["audio",
"video"],"loop");var v=/^(?:embed|object)$/i;f.addReady(function(c,d){e("video, audio",c).add(d.filter("video, audio")).each(function(){var c=this.parentNode;if(!c||!v.test(c.nodeName||""))c=f.data(this,"mediaelementBase")||f.data(this,"mediaelementBase",{}),l(c,this,!1,A.preferFlash||x)})});["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var c=f.data(this,"mediaelement"),e=f.data(this,"mediaelementBase")||f.data(this,"mediaelementBase",{});clearTimeout(e.loadTimer);
l(e,this,c);o&&(!c||c.isActive=="html5")&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});j[c]=f.defineNodeNameProperty(c,"canPlayType",{prop:{value:function(d){var f="";o&&j[c].prop._supvalue&&(f=j[c].prop._supvalue.call(this,d),f=="no"&&(f=""));!f&&u&&(d=e.trim(d.split(";")[0]),i.swfMimeTypes.indexOf(d)!=-1&&(f="maybe"));return f}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var c=f.data(this,"mediaelement"),d=this,e=f.data(this,"mediaelementBase")||
f.data(this,"mediaelementBase",{});clearTimeout(e.loadTimer);e.loadTimer=setTimeout(function(){l(e,d,c)},9)}});f.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);