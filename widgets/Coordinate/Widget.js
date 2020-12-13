// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"libs/usng/usng":function(){define(["dojo/_base/declare","dojo/string"],function(u,n){var D,B,v,C=Math.PI/180,A=180/Math.PI;var r=6378137;var k=.006694380023;var y=k/(1-k),w=(1-Math.sqrt(1-k))/(1+Math.sqrt(1-k));return{getZoneNumber:function(b,d){b=parseFloat(b);d=parseFloat(d);(360<d||-180>d||90<b||-90>b)&&console.warn("Bad input. lat: "+b+" lon: "+d);d=d+180-360*parseInt((d+180)/360)-180;var g=parseInt((d+180)/6)+1;56<=b&&64>b&&3<=d&&12>d&&(g=32);72<=b&&84>b&&(0<=d&&9>d?g=31:9<=
d&&21>d?g=33:21<=d&&33>d?g=35:33<=d&&42>d&&(g=37));return g},LLtoUTM:function(b,d,g,l){b=parseFloat(b);d=parseFloat(d);if(84<b||-80>b)return"undefined";(360<d||-180>d||90<b||-90>b)&&console.warn("Bad input. lat: "+b+" lon: "+d);var m=d+180-360*parseInt((d+180)/360)-180,p=b*C;m*=C;v=l?l:this.getZoneNumber(b,d);var t=(6*(v-1)-180+3)*C;this.UTMLetterDesignator(b);b=r/Math.sqrt(1-k*Math.sin(p)*Math.sin(p));d=Math.tan(p)*Math.tan(p);l=y*Math.cos(p)*Math.cos(p);m=Math.cos(p)*(m-t);t=r*((1-k/4-3*k*k/64-
5*k*k*k/256)*p-(3*k/8+3*k*k/32+45*k*k*k/1024)*Math.sin(2*p)+(15*k*k/256+45*k*k*k/1024)*Math.sin(4*p)-35*k*k*k/3072*Math.sin(6*p));D=.9996*b*(m+(1-d+l)*m*m*m/6+(5-18*d+d*d+72*l-58*y)*m*m*m*m*m/120)+5E5;B=.9996*(t+b*Math.tan(p)*(m*m/2+(5-d+9*l+4*l*l)*m*m*m*m/24+(61-58*d+d*d+600*l-330*y)*m*m*m*m*m*m/720));g[0]=D;g[1]=B;g[2]=v},LLtoUSNG:function(b,d,g){b=parseFloat(b);d=parseFloat(d);var l=[];this.LLtoUTM(b,d,l);var m=l[0];l=l[1];0>b&&(l+=1E7);var p=this.findGridLetters(v,l,m);l=Math.round(l)%1E5;m=Math.round(m)%
1E5;l=Math.floor(l/Math.pow(10,5-g));m=Math.floor(m/Math.pow(10,5-g));b=this.getZoneNumber(b,d)+this.UTMLetterDesignator(b)+" "+p+" ";for(d=String(m).length;d<g;d++)b+="0";b+=m+" ";for(d=String(l).length;d<g;d++)b+="0";return b+l},UTMLetterDesignator:function(b){b=parseFloat(b);return 84>=b&&72<=b?"X":72>b&&64<=b?"W":64>b&&56<=b?"V":56>b&&48<=b?"U":48>b&&40<=b?"T":40>b&&32<=b?"S":32>b&&24<=b?"R":24>b&&16<=b?"Q":16>b&&8<=b?"P":8>b&&0<=b?"N":0>b&&-8<=b?"M":-8>b&&-16<=b?"L":-16>b&&-24<=b?"K":-24>b&&
-32<=b?"J":-32>b&&-40<=b?"H":-40>b&&-48<=b?"G":-48>b&&-56<=b?"F":-56>b&&-64<=b?"E":-64>b&&-72<=b?"D":-72>b&&-80<=b?"C":"Z"},findSet:function(b){b=parseInt(b);switch(b%6){case 0:return 6;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;default:return-1}},findGridLetters:function(b,d,g){b=parseInt(b);d=parseFloat(d);g=parseFloat(g);var l=1;for(d=Math.round(d);1E5<=d;)d-=1E5,l++;l%=20;d=0;for(g=Math.round(g);1E5<=g;)g-=1E5,d++;d%=8;return this.lettersHelper(this.findSet(b),
l,d)},lettersHelper:function(b,d,g){0===d?d=19:d--;0===g?g=7:g--;switch(b){case 1:return b="ABCDEFGHJKLMNPQRSTUV","ABCDEFGH".charAt(g)+b.charAt(d);case 2:return b="FGHJKLMNPQRSTUVABCDE","JKLMNPQR".charAt(g)+b.charAt(d);case 3:return b="ABCDEFGHJKLMNPQRSTUV","STUVWXYZ".charAt(g)+b.charAt(d);case 4:return b="FGHJKLMNPQRSTUVABCDE","ABCDEFGH".charAt(g)+b.charAt(d);case 5:return b="ABCDEFGHJKLMNPQRSTUV","JKLMNPQR".charAt(g)+b.charAt(d);case 6:return b="FGHJKLMNPQRSTUVABCDE","STUVWXYZ".charAt(g)+b.charAt(d)}},
UTMtoLL:function(b,d,g,l){d=parseFloat(d)-5E5;b=parseFloat(b);g=parseInt(g);b=b/.9996/(r*(1-k/4-3*k*k/64-5*k*k*k/256));b=b+(3*w/2-27*w*w*w/32)*Math.sin(2*b)+(21*w*w/16-55*w*w*w*w/32)*Math.sin(4*b)+151*w*w*w/96*Math.sin(6*b);var m=r/Math.sqrt(1-k*Math.sin(b)*Math.sin(b)),p=Math.tan(b)*Math.tan(b),t=y*Math.cos(b)*Math.cos(b);d/=.9996*m;m=b-m*Math.tan(b)/(r*(1-k)/Math.pow(1-k*Math.sin(b)*Math.sin(b),1.5))*(d*d/2-(5+3*p+10*t-4*t*t-9*y)*d*d*d*d/24+(61+90*p+298*t+45*p*p-252*y-3*t*t)*d*d*d*d*d*d/720);m*=
A;d=(d-(1+2*p+t)*d*d*d/6+(5-2*t+28*p-3*t*t+8*y+24*p*p)*d*d*d*d*d/120)/Math.cos(b);d=6*(g-1)-180+3+d*A;l.lat=m;l.lon=d},USNGtoUTM:function(b,d,g,l,m,p,t){g=1+"ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(g)%8;var H="CDEFGHJKLMNPQRSTUVWX".indexOf(d);l=b%2?"ABCDEFGHJKLMNPQRSTUV".indexOf(l):"FGHJKLMNPQRSTUVABCDE".indexOf(l);l=Number([0,2,2,2,4,4,6,6,8,8,0,0,0,2,2,4,4,6,6,6][H])+l/10;l<[1.1,2,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,0,.8,1.7,2.6,3.5,4.4,5.3,6.2,7,7.9][H]&&(l+=2);t.N=1E6*l+Number(p)*Math.pow(10,5-p.length);
t.E=1E5*g+Number(m)*Math.pow(10,5-m.length);t.zone=b;t.letter=d},USNGtoLL:function(b,d){var g={};this.parseUSNG_str(b,g);b={};this.USNGtoUTM(g.zone,g.let,g.sq1,g.sq2,g.east,g.north,b);"N">g.let&&(b.N-=1E7);this.UTMtoLL(b.N,b.E,g.zone,b);d[0]=b.lat;d[1]=b.lon},parseUSNG_str:function(b,d){var g=0,l=[];var m=[];m=b.toUpperCase();l=/%20/g;l=m.replace(l,"");l=/ /g;l=m.replace(l,"");if(7>l.length)return console.warn("This application requires minimum USNG precision of 10,000 meters"),0;d.zone=10*l.charAt(g++)+
1*l.charAt(g++);d.let=l.charAt(g++);d.sq1=l.charAt(g++);d.sq2=l.charAt(g++);d.precision=(l.length-g)/2;d.east="";d.north="";for(m=0;m<d.precision;m++)d.east+=l.charAt(g++);" "==l[g]&&g++;for(m=0;m<d.precision;m++)d.north+=l.charAt(g++)},isUSNG:function(b){var d=[];d=b.toUpperCase();b=/%20/g;d=d.replace(b,"");b=/ /g;d=d.replace(b,"");if(15<d.length)return 0;b=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX]$/;if(d.match(b))return console.warn("Input appears to be a UTM zone...more precision is required to display a correct result."),
0;b=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV]([0-9][0-9]){0,5}/;return d.match(b)?7>d.length?(alert(d+" Appears to be a USNG string, but this application requires precision of at least 10,000 meters"),0):d:0},LLtoMGRS:function(b,d,g){var l="";return l=this.LLtoUSNG(b,d,g).replace(/ /g,"")},LLtoUSNG_nad27:function(b,d,g){r=6378206.4;k=.006768658;b=this.LLtoUSNG(b,d,g);r=6378137;k=.006694380023;return b+" (NAD27)"}}})},"widgets/Coordinate/a11y/Widget":function(){define("dojo/_base/lang dojo/on dojo/_base/html dojo/keys jimu/utils dijit/a11yclick".split(" "),
function(u,n,D,B,v,C){var A={a11y_init:function(r){v.initFirstFocusNode(this.domNode,this.locateButton);r&&r.isHidePopmenu?v.initLastFocusNode(this.domNode,this.locateButton):v.initLastFocusNode(this.domNode,this.foldableNode)},a11y_initEvents:function(){this.own(n(this.locateButton,C,u.hitch(this,this.onLocateButtonClick)));this.own(n(this.foldContainer,C,u.hitch(this,this.onFoldContainerClick)));this.own(n(this.foldContainer,"keydown",u.hitch(this,function(r){if(r.keyCode===B.UP_ARROW||r.keyCode===
B.DOWN_ARROW)this.onFoldContainerClick()})))},a11y_setCoordinateInfo:function(r){var k=this.coordinateInfo,y=this.domNode;k&&(k.innerHTML=v.sanitizeHTML(r));y&&D.setAttr(y,"aria-label",r)},_isKeyEvent:function(r){return r&&r._origType?!0:!1},a11y_initPopMenuEvents:function(){this.own(n(this.popMenu.domNode,"keydown",u.hitch(this,function(r){r.keyCode===B.ESCAPE&&(r.stopPropagation(),r.preventDefault(),this.onFoldContainerClick(),setTimeout(u.hitch(this,function(){this.foldableNode.focus()}),0))})))},
a11y_bindMenuItemEvent:function(r){this.own(n(r,"click",u.hitch(this,function(k){A._isKeyEvent(k)&&setTimeout(u.hitch(this,function(){this.a11y_focusToPopMenuBtn()}),0)})))},a11y_focusMenuItem:function(){this.selectedItem.domNode.focus()},a11y_focusToPopMenuBtn:function(){this.foldableNode.focus()}};return A})},"widgets/Coordinate/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Coordinate/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"coordinateBackground"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateMenuContainer" style\x3d"display:none"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateMenu"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateInfoMenu" class\x3d"coordinate-info-menu jimu-float-leading jimu-align-leading"\x3e\r\n      \x3cdiv class\x3d"jimu-float-leading coordinate-locate-container" data-dojo-attach-point\x3d"locateContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"locateButton" class\x3d"coordinate-locate jimu-float-leading" tabindex\x3d"0" role\x3d"button"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateInfo" class\x3d"coordinate-info jimu-float-leading jimu-align-leading"\x3e\r\n        ${nls.loading}\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-float-trailing coordinate-foldable-container" data-dojo-attach-point\x3d"foldContainer"\x3e\r\n      \x3cdiv class\x3d"coordinate-foldable jimu-float-trailing" data-dojo-attach-point\x3d"foldableNode" tabindex\x3d"0" role\x3d"button"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Coordinate/css/style.css":".jimu-widget-coordinate .coordinate-background{line-height: 17px; overflow: hidden; font-size: 10px; color: #fff; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.5);}.jimu-widget-coordinate .display-coordinate-menu{display: block !important; border-bottom: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate{width: 13px; height: 13px; background: url(images/locate.png) center no-repeat; margin: 2px;}.jimu-widget-coordinate .coordinate-locate-container{width: 17px; height: 17px; border-right: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate{background: url(images/locate-hover.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background: url(images/locate-active.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-info{margin: 0 5px; font-size: 11px !important; color: #fff !important;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-info{margin: 0;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-locate-container {border-style: none !important;}.jimu-widget-coordinate .coordinate-foldable-container {border-left: 1px solid rgba(255,255,255,0.4); height: 17px;}.jimu-widget-coordinate .coordinate-foldable{background: url(images/more.png) center no-repeat; cursor: pointer; width: 13px; height: 13px; margin: 2px;}.jimu-widget-coordinate:hover .coordinate-foldable{background-image: url(images/more-hover.png);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container{border-right-style: none; border-left: 1px solid rgba(255,255,255,0.4);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate,.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background-position: right center;}.jimu-rtl .jimu-widget-coordinate .coordinate-foldable-container{border-left-style: none; border-right: 1px solid rgba(255,255,255,0.4);}.claro .jimu-widget-coordinate .dijitMenuTable {background: transparent; border-style: none; padding: 2px;}.claro .jimu-widget-coordinate .dijitMenuItem {color: #fff;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{border-style: none; text-align: left; padding: 4px 2px; font-size: 10px;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem.selected-item{font-weight: bold; background: #000;}.jimu-rtl .claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{text-align: right;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover {color: #fff; background: #000; border-style: none;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected td{background: #000; color: #fff;}.DartTheme .jimu-widget-coordinate {z-index: 102 !important;}",
"*now":function(u){u(['dojo/i18n!*preload*widgets/Coordinate/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetsInTemplateMixin esri/geometry/Point esri/SpatialReference jimu/BaseWidget jimu/utils jimu/dijit/Message dojo/_base/lang dojo/on dojo/dom-class dijit/DropDownMenu dijit/MenuItem dojo/aspect dojo/Deferred esri/request esri/graphic esri/layers/GraphicsLayer esri/tasks/ProjectParameters esri/geometry/webMercatorUtils esri/symbols/PictureMarkerSymbol jimu/portalUtils esri/config libs/usng/usng jimu/SpatialReference/unitUtils ./a11y/Widget".split(" "),function(u,
n,D,B,v,C,A,r,k,y,w,b,d,g,l,m,p,t,H,M,N,K,O,L,I,P){var Q={INCHES:"Inches",FOOT:"Foot",FEET:"Foot",FOOT_US:"Foot_US",YARDS:"Yards",MILES:"Miles",NAUTICAL_MILES:"Nautical_Miles",MILLIMETERS:"Millimeters",CENTIMETERS:"Centimeters",METER:"Meter",METERS:"Meter",KILOMETERS:"Kilometers",DECIMETERS:"Decimeters",DEGREE:"Decimal_Degrees",DECIMAL_DEGREES:"Decimal_Degrees",DEGREES_DECIMAL_MINUTES:"Degrees_Decimal_Minutes",DEGREE_MINUTE_SECONDS:"Degree_Minutes_Seconds",MGRS:"MGRS",USNG:"USNG"},E={esriCentimeters:"CENTIMETERS",
esriDecimalDegrees:"DECIMAL_DEGREES",esriDegreeMinuteSeconds:"DEGREE_MINUTE_SECONDS",esriDecimeters:"DECIMETERS",esriFeet:"FOOT",esriInches:"INCHES",esriKilometers:"KILOMETERS",esriMeters:"METER",esriMiles:"MILES",esriMillimeters:"MILLIMETERS",esriNauticalMiles:"NAUTICAL_MILES",esriPoints:"POINTS",esriUnknownUnits:"UNKNOWN",esriYards:"YARDS"};u=u([C,D],{baseClass:"jimu-widget-coordinate",name:"Coordinate",popMenu:null,selectedWkid:null,selectedItem:null,selectedTfWkid:null,_defaultItem:null,forward:!0,
enableRealtime:!1,geoServiceUrl:null,_mapWkid:null,_configured:!1,_markerGraphic:null,moveTopOnActive:!1,_ENABLE_MAP_POPUP:!1,postMixInProperties:function(){this.nls.enableClick=this.nls.enableClick||"Click to enable clicking map to get coordinates";this.nls.disableClick=this.nls.disableClick||"Click to disable clicking map to get coordinates"},postCreate:function(){this.inherited(arguments);w.add(this.coordinateBackground,"coordinate-background");this.own(y(this.map,"extent-change",k.hitch(this,
this.onExtentChange)));this.own(y(this.map,"mouse-move",k.hitch(this,this.onMouseMove)));this.own(y(this.map,"click",k.hitch(this,this.onMapClick)));this.a11y_initEvents();this.graphicsLayer=new t;this.map.addLayer(this.graphicsLayer)},startup:function(){this.inherited(arguments);this.selectedWkid=this._mapWkid=this.map.spatialReference.isWebMercator()?3857:this.map.spatialReference.wkid;this.config.spatialReferences&&1<this.config.spatialReferences.length?n.setStyle(this.foldableNode,"display","inline-block"):
n.setStyle(this.foldableNode,"display","none")},onOpen:function(){this._processData().then(k.hitch(this,function(a){this.domNode&&(this.initPopMenu(a),(a=1>=this.popMenu.getChildren().length)&&n.setStyle(this.foldContainer,"display","none"),this.a11y_init({isHidePopmenu:a}))}),k.hitch(this,function(a){console.error(a)}))},_processMapUnits:function(a){var c=new l;if(a.units)c.resolve(a);else{var e=a.spatialReference||k.exists("tileInfo.spatialReference",a)&&a.tileInfo.spatialReference,f=a.extent||
a.initialExtent||a.fullExtent,h=e&&(e.latestWkid||e.wkid)||f&&f.spatialReference&&f.spatialReference.wkid,z=this;require(["jimu/SpatialReference/srUtils"],function(q){q.loadResource().then(k.hitch(z,function(){var x=q.getCSUnit(h);a.units=x;c.resolve(a)}))})}return c},_processData:function(){var a=new l,c=this.map.itemInfo.itemData.baseMap.baseMapLayers[0];this.config.spatialReferences&&this.config.spatialReferences.length?(this._configured=!0,a.resolve(this.config.spatialReferences)):K.getUnits(this.appConfig.portalUrl).then(k.hitch(this,
function(e){var f=c&&("BingMapsRoad"===c.type||"BingMapsHybrid"===c.type||"BingMapsAerial"===c.type),h=c&&"WebTiledLayer"===c.type,z=c&&"VectorTileLayer"===c.type;"WMS"===c.type?this._getWMSBaseMapInfo().then(k.hitch(this,function(q){this._configured=!1;a.resolve(q)})):c&&c.url?m({url:c.url,handleAs:"json",callbackParamName:"callback",content:{f:"json"}}).then(k.hitch(this,function(q){this._processMapUnits(q).then(k.hitch(this,function(x){var F=this._getUnconfiguredUnitOptions(x.units,e),G=x.spatialReference,
J=x.extent;G={wkid:G&&(G.latestWkid||G.wkid)||J&&J.spatialReference&&J.spatialReference.wkid,label:"",outputUnit:F.outputUnit};G.options={sameSRWithMap:!0,defaultUnit:E[x.units]||x.units,isGeographicUnit:F.isGeographicUnit,isGeographicCS:F.isGeographicCS,isProjectUnit:F.isProjectUnit,isProjectedCS:F.isProjectedCS,unitRate:F.unitRate};this._configured=!1;a.resolve(G)}))}),k.hitch(this,function(q){console.error(q);a.reject(q)})):c&&("OpenStreetMap"===c.type||f||h||z)?(f=this._getUnconfiguredUnitOptions("esriMeters",
e),h={wkid:3857,label:"",outputUnit:f.outputUnit},h.options={sameSRWithMap:!0,defaultUnit:E.esriMeters,isGeographicUnit:f.isGeographicUnit,isGeographicCS:f.isGeographicCS,isProjectUnit:f.isProjectUnit,isProjectedCS:f.isProjectedCS,unitRate:f.unitRate},this._configured=!1,a.resolve(h)):a.reject(Error("no baseMap"))}));return a},_getUnconfiguredUnitOptions:function(a,c){a=E[a]||a;var e="",f=1,h="",z="",q="",x="";I.isProjectUnit(a)?(q=x=!0,h=z=!1,e="english"===c?E.esriFeet.toUpperCase():E.esriMeters.toUpperCase(),
f=I.getUnitRate(a.toUpperCase(),e)):I.isGeographicUnit(a)&&(q=x=!1,h=z=!0,e=a.toUpperCase());this.map.spatialReference.isWebMercator()&&(e=E.esriDecimalDegrees,z=!0,x=!1,f=1);return{outputUnit:e,unitRate:f,isGeographicUnit:z,isGeographicCS:h,isProjectUnit:x,isProjectedCS:q}},initPopMenu:function(a){this.popMenu=new b({},this.coordinateMenu);g.after(this.popMenu,"onItemClick",k.hitch(this,this.onClickMenu),!0);"[object Array]"!==Object.prototype.toString.call(a)?(this.selectedWkid=parseInt(a.wkid,
10),this.addMenuItem("",this.selectedWkid,a.outputUnit,null,null,a.options,a.isDefault,a.alias),this.selectedItem=this.popMenu.getChildren()[0]):(this._addAllMenuItems(),this._setDefaultItme(),null===this.selectedItem&&(this.selectedItem=this.popMenu.getChildren()[0]));this.selectedWkid=parseInt(this.selectedItem.params.wkid,10);this.selectedTfWkid=this.selectedItem.params.transformationWkid&&parseInt(this.selectedItem.params.transformationWkid,10);this.selectedItem.set({label:this.getStatusString(!0,
this.selectedItem.params.alias||this.selectedItem.params.name,this.selectedItem.params.wkid,this.selectedItem.params.isDefault)});n.addClass(this.selectedItem.domNode,"selected-item");this._adjustCoordinateInfoUI(this.selectedWkid);this.popMenu.startup();this.a11y_initPopMenuEvents()},_addAllMenuItems:function(){for(var a=this.config.spatialReferences.length,c=0;c<a;c++)this.addMenuItem(this.config.spatialReferences[c].label,this.config.spatialReferences[c].wkid,this.config.spatialReferences[c].outputUnit,
this.config.spatialReferences[c].transformationWkid,this.config.spatialReferences[c].transformForward,this.config.spatialReferences[c].options,this.config.spatialReferences[c].isDefault,this.config.spatialReferences[c].alias)},_isWebMercator:function(a){return v.prototype._isWebMercator?v.prototype._isWebMercator.apply({wkid:parseInt(a,10)},[]):(new v(parseInt(a,10))).isWebMercator()},canShowInClient:function(a){a=4326===this._mapWkid&&this._isWebMercator(a)||this._isWebMercator(this._mapWkid)&&4326===
parseInt(a,10);var c=this.selectedItem.get("options");return c&&c.sameSRWithMap||a?!0:!1},onClickMenu:function(a){n.removeClass(this.selectedItem.domNode,"selected-item");this.selectedItem.set({label:this.getStatusString(!1,this.selectedItem.params.alias||this.selectedItem.params.name,this.selectedItem.params.wkid,this.selectedItem.params.isDefault)});this.selectedWkid=parseInt(a.params.wkid,10);this.selectedTfWkid=a.params.tfWkid;this.forward=a.params.forward;a.set({label:this.getStatusString(!0,
a.params.alias||a.params.name,a.params.wkid,a.params.isDefault)});n.addClass(a.domNode,"selected-item");this.selectedItem=a;this._adjustCoordinateInfoUI(this.selectedWkid);this.toggleMenuContainer(!1)},_adjustCoordinateInfoUI:function(a){n.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");this.graphicsLayer.remove(this._markerGraphic);this._markerGraphic=null;this.canShowInClient(a)?(this.enableRealtime=!0,this._getDefaultPlaceHolder()):(this.enableRealtime=!1,this.a11y_setCoordinateInfo(""),
n.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"));n.setAttr(this.locateButton,"title",this.nls.enableClick);n.removeClass(this.locateContainer,"coordinate-locate-container-active");this.enableWebMapPopup();this.onExtentChange({extent:this.map.extent})},disableWebMapPopup:function(){this._ENABLE_MAP_POPUP=!1;this.map.setInfoWindowOnClick(!1)},enableWebMapPopup:function(){this._ENABLE_MAP_POPUP=!0;this.map.setInfoWindowOnClick(!0)},onLocateButtonClick:function(){if(this.isMenuContainerOpen())this.onFoldContainerClick();
n.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");n.toggleClass(this.locateContainer,"coordinate-locate-container-active");this.graphicsLayer.remove(this._markerGraphic);this._markerGraphic=null;this.canShowInClient(this.selectedWkid)?this.enableRealtime?(this.enableRealtime=!1,this.a11y_setCoordinateInfo(this.nls.hintMessage),n.setAttr(this.locateButton,"title",this.nls.disableClick),this.disableWebMapPopup()):(this.enableRealtime=!0,this._getDefaultPlaceHolder(),n.setAttr(this.locateButton,
"title",this.nls.enableClick),this.enableWebMapPopup()):n.hasClass(this.locateContainer,"coordinate-locate-container-active")?(this.a11y_setCoordinateInfo(this.nls.hintMessage),this.disableWebMapPopup(),n.setAttr(this.locateButton,"title",this.nls.disableClick)):(this.a11y_setCoordinateInfo(""),n.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"),this.enableWebMapPopup(),n.setAttr(this.locateButton,"title",this.nls.enableClick))},onActive:function(){this.locateContainer&&n.hasClass(this.locateContainer,
"coordinate-locate-container-active")&&(!0===this._ENABLE_MAP_POPUP?this.enableWebMapPopup():this.disableWebMapPopup())},onDeActive:function(){if(n.hasClass(this.locateContainer,"coordinate-locate-container-active"))this.onLocateButtonClick();if(this.isMenuContainerOpen())this.onFoldContainerClick()},getStatusString:function(a,c,e,f){var h="";e=parseInt(e,10);h=a?"\x3cb\x3e"+h+c+"\x3c/b\x3e\x26nbsp;"+this._rtlTheBrackets(e)+"\x26nbsp;":h+c+"\x26nbsp;\x26nbsp;"+this._rtlTheBrackets(e)+"\x26nbsp;";
f&&(h+=this.nls.defaultLabel);return h},_rtlTheBrackets:function(a){return window.isRTL?"\x26rlm;("+a+")":"("+a+")"},addMenuItem:function(a,c,e,f,h,z,q,x){a={label:this.getStatusString(!1,x||a,c,q)||"",name:a||"",wkid:c||"",outputUnit:e||"",tfWkid:f||"",options:z,isDefault:q,alias:x,ownerDocument:this.ownerDocument};a.tfWkid&&(a.forward=h);h=new d(a);this.a11y_bindMenuItemEvent(h);this.popMenu.addChild(h)},_toFormat:function(a){return isNaN(a)?"":A.localizeNumberByFieldInfo(a,{format:{places:this.config.decimalPlaces,
digitSeparator:this.config.addSeparator}})},onProjectComplete:function(a,c){if(this.selectedWkid&&a===this.selectedWkid&&this.domNode){c=c[0];a=c.x;c=c.y;var e=this.selectedItem.get("outputUnit"),f=this.selectedItem.get("options");"MGRS"===e||"USNG"===e?this._displayUsngOrMgrs(e,c,a):f.isGeographicUnit?this._displayDegOrDms(e,c,a):this._displayProject(e,c,a)}},_unitToNls:function(a){var c=Q[a.toUpperCase()];return this.nls[c]||this.nls[a]||a},onProjectError:function(a){new r({message:a.message||a.toString()});
this.a11y_setCoordinateInfo(this.nls.hintMessage)},onExtentChange:function(a){if(this.selectedItem){var c=n.position(this.domNode),e=n.position(this.map.root);if(!window.isRTL)c.x-e.x+c.w+5>=e.w&&("left"in this.position?n.setStyle(this.domNode,"right","5px"):n.setStyle(this.domNode,"left","5px"));else if(0>=c.x-e.x||c.x-e.x+c.w+5>=e.w)"left"in this.position?n.setStyle(this.domNode,"left","5px"):n.setStyle(this.domNode,"right","5px");window.appInfo.isRunInMobile?(this.graphicsLayer.remove(this._markerGraphic),
this._markerGraphic=null,n.setStyle(this.locateContainer,"display","none"),n.removeClass(this.coordinateMenuContainer,"display-coordinate-menu"),n.setStyle(this.domNode,"zIndex","auto"),this.canShowInClient(this.selectedWkid)?this._displayOnClient(a.extent.getCenter()):this._projectMapPoint(a.extent.getCenter())):(n.setStyle(this.locateContainer,"display","block"),1<this.popMenu.getChildren().length?n.setStyle(this.foldContainer,"display","block"):n.setStyle(this.foldContainer,"display","none"))}},
_getMarkerGraphic:function(a){var c=new N(this.folderUrl+"css/images/esriGreenPin16x26.png",16,26);c.setOffset(0,12);return new p(a,c)},onMapClick:function(a){window.appInfo.isRunInMobile||this.enableRealtime||!this.selectedItem||(!this.canShowInClient(this.selectedWkid)&&!n.hasClass(this.locateContainer,"coordinate-locate-container-active")||this._markerGraphic||(this._markerGraphic=this._getMarkerGraphic(a.mapPoint),this.graphicsLayer.add(this._markerGraphic)),this.canShowInClient(this.selectedWkid)?
(this._markerGraphic.setGeometry(a.mapPoint),this._displayOnClient(a.mapPoint)):n.hasClass(this.locateContainer,"coordinate-locate-container-active")&&(this._markerGraphic.setGeometry(a.mapPoint),a=new B(a.mapPoint.x,a.mapPoint.y,this.map.spatialReference),this._projectMapPoint(a)))},_projectMapPoint:function(a){var c=new H,e=null,f=this.selectedItem.get("options");c.geometries=[a];f.isProjectedCS?e=f.isProjectUnit?this.selectedWkid:f.spheroidCS:f.isGeographicCS&&(e=this.selectedWkid);this.selectedTfWkid&&
(c.transformation=new v(parseInt(this.selectedTfWkid,10)),c.transformForward=JSON.parse(this.forward));c.outSR=new v(parseInt(e,10));this.a11y_setCoordinateInfo(this.nls.computing);O.defaults.geometryService.project(c,k.hitch(this,this.onProjectComplete,this.selectedWkid),k.hitch(this,this.onProjectError))},_displayOnClient:function(a){var c=this.selectedItem.get("outputUnit"),e=a.x,f=a.y,h=null,z=4326===this._mapWkid&&this._isWebMercator(this.selectedWkid)||this._isWebMercator(this._mapWkid)&&4326===
this.selectedWkid,q=this.selectedItem.get("options");h=a.normalize();q.isGeographicUnit&&(e=h.getLongitude()||e);q.isGeographicUnit&&(f=h.getLatitude()||f);z?4326===a.spatialReference.wkid&&this._isWebMercator(this.selectedWkid)?"MGRS"===c||"USNG"===c?this._displayUsngOrMgrs(c,h.getLatitude(),h.getLongitude()):q.isGeographicUnit?this._displayDegOrDms(c,f,e):q.isProjectUnit&&(a=M.lngLatToXY(e,f),this._displayProject(c,a[1],a[0])):a.spatialReference.isWebMercator()&&4326===this.selectedWkid&&("MGRS"===
c||"USNG"===c?this._displayUsngOrMgrs(c,h.getLatitude(),h.getLongitude()):q.isGeographicUnit&&this._displayDegOrDms(c,f,e)):q.defaultUnit===c?(this._displayCoordinatesByOrder(this._toFormat(e),this._toFormat(f)),this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(c))):4326===a.spatialReference.wkid||a.spatialReference.isWebMercator()?"MGRS"===c||"USNG"===c?this._displayUsngOrMgrs(c,h.getLatitude(),h.getLongitude()):q.isGeographicUnit?this._displayDegOrDms(c,f,e):q.isProjectedCS&&
this._displayProject(c,f,e):q.isProjectedCS?this._displayProject(c,f,e):q.isGeographicCS&&("MGRS"===c||"USNG"===c?this._displayUsngOrMgrs(c,f,e):q.isGeographicUnit&&this._displayDegOrDms(c,f,e))},onMouseMove:function(a){window.appInfo.isRunInMobile||this.enableRealtime&&this.selectedItem&&this._displayOnClient(a.mapPoint)},destroy:function(){this._markerGraphic&&this.graphicsLayer.remove(this._markerGraphic);this.graphicsLayer&&this.map.removeLayer(this.graphicsLayer);this.inherited(arguments)},_displayUsngOrMgrs:function(a,
c,e){"MGRS"===a?this.a11y_setCoordinateInfo(L.LLtoMGRS(c,e,5)):"USNG"===a&&this.a11y_setCoordinateInfo(L.LLtoUSNG(c,e,5));isNaN(c)&&isNaN(e)?this.a11y_setCoordinateInfo(""):this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a))},_displayDegOrDms:function(a,c,e){var f="",h="";f=this.selectedItem.get("options");e*=f.unitRate;c*=f.unitRate;"DEGREE_MINUTE_SECONDS"===a?(h=this.degToDMS(e,"LON"),f=this.degToDMS(c,"LAT"),this._displayCoordinatesByOrder(h,f)):"DEGREES_DECIMAL_MINUTES"===
a?(h=this.degToDDM(e),f=this.degToDDM(c),this._displayCoordinatesByOrder(h,f)):(this._displayCoordinatesByOrder(this._toFormat(e),this._toFormat(c)),isNaN(c)&&isNaN(e)?this.a11y_setCoordinateInfo(""):this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a)))},_displayProject:function(a,c,e){var f=this.selectedItem.get("options");e*=f.unitRate;c*=f.unitRate;this._displayCoordinatesByOrder(this._toFormat(e),this._toFormat(c));isNaN(c)&&isNaN(e)?this.a11y_setCoordinateInfo(""):
this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a))},_displayCoordinatesByOrder:function(a,c){this.config.displayOrderLonLat?this.a11y_setCoordinateInfo(a+"  "+c):this.a11y_setCoordinateInfo(c+"  "+a)},onFoldContainerClick:function(){this._configured&&this.toggleMenuContainer();this.a11y_focusMenuItem()},isMenuContainerOpen:function(){return n.hasClass(this.coordinateMenuContainer,"display-coordinate-menu")},toggleMenuContainer:function(a){a||(a=this.isMenuContainerOpen(),
a=!a);!0===a?(n.addClass(this.coordinateMenuContainer,"display-coordinate-menu"),n.setStyle(this.domNode,"zIndex","1")):!1===a&&(n.removeClass(this.coordinateMenuContainer,"display-coordinate-menu"),n.setStyle(this.domNode,"zIndex","auto"))},degToDMS:function(a,c){var e=Math.abs(a),f=Math.floor(e);e-=f;var h=Math.floor(60*e);e=Math.floor(3600*(e-h/60));60===e&&(h++,e=0);60===h&&(f++,h=0);return f+"\x26deg;"+(10>h?"0"+h:h)+"\x26prime;"+(10>e?"0"+e:e)+"\x26Prime;"+("LAT"===c?0>a?"S":"N":0>a?"W":"E")},
degToDDM:function(a){var c=Math.abs(a);a=Math.floor(c);c-=a;var e=Math.floor(60*c);c=Math.floor(3600*(c-e/60));60===c&&(e++,c=0);60===e&&(a++,e=0);e=A.localizeNumberByFieldInfo(e+c/60,{format:{places:this.config.decimalPlaces,digitSeparator:this.config.addSeparator}});return a+"\x26deg;"+e+"\x26prime;"},_getWMSBaseMapInfo:function(){var a=new l;require(["jimu/SpatialReference/srUtils"],k.hitch(this,function(c){c.loadResource().then(k.hitch(this,function(){var e=this.map.spatialReference.wkid;K.getUnits(this.appConfig.portalUrl).then(k.hitch(this,
function(f){if(c.isValidWkid(e)){var h={wkid:c.standardizeWkid(e),label:c.getSRLabel(parseInt(e,10))};c.isProjectedCS(h.wkid)?h.outputUnit="english"===f?"FOOT":"METER":h.outputUnit=h.outputUnit||c.getCSUnit(h.wkid);f={sameSRWithMap:c.isSameSR(h.wkid,this.map.spatialReference.wkid),isGeographicCS:c.isGeographicCS(h.wkid),isGeographicUnit:c.isGeographicUnit(h.outputUnit),isProjectedCS:c.isProjectedCS(h.wkid),isProjectUnit:c.isProjectUnit(h.outputUnit),spheroidCS:c.isProjectedCS(h.wkid)?c.getGeoCSByProj(h.wkid):
h.wkid,defaultUnit:c.getCSUnit(h.wkid),unitRate:c.getUnitRate(c.getCSUnit(h.wkid),h.outputUnit)};this.map.spatialReference.isWebMercator()&&(f.isGeographicUnit=!0,f.isProjectUnit=!1,f.unitRate=1,h.outputUnit="DECIMAL_DEGREES");"DEGREES_DECIMAL_MINUTES"===h.outputUnit&&(f.isGeographicUnit=!0,f.unitRate=1);h.options=f;a.resolve(h)}}),k.hitch(this,function(f){console.error(f);a.reject(f)}))}))}));return a},_setDefaultItme:function(){var a;var c=0;for(a=this.popMenu.getChildren().length;c<a;c++){var e=
this.popMenu.getChildren()[c];if(!0===e.params.isDefault){this._defaultItem=this.selectedItem=e;break}}var f=this._mapWkid;if(!this._defaultItem)for(c=0,a=this.popMenu.getChildren().length;c<a;c++)if(e=this.popMenu.getChildren()[c],parseInt(e.params.wkid,10)===parseInt(f,10)){e.set({isDefault:!0});e.params.isDefault=!0;this._defaultItem=e;break}this._defaultItem&&this._setDefaultItemStyle(this._defaultItem)},_setDefaultItemStyle:function(a){a.set({label:this.getStatusString(!1,a.params.alias||a.params.name,
a.params.wkid,a.params.isDefault)})},_getDefaultPlaceHolder:function(){A.isMobileUa()?this.a11y_setCoordinateInfo(""):this.a11y_setCoordinateInfo(this.nls.realtimeLabel)}});u.extend(P);return u});