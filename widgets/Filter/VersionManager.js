// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(e){function c(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){return a}},{version:"1.4",upgrader:function(a){return a}},{version:"2.0Beta",upgrader:function(a){return a}},{version:"2.0",upgrader:function(a){return a}},{version:"2.0.1",upgrader:function(a){return a}},{version:"2.1",upgrader:function(a){return a}},
{version:"2.2",upgrader:function(a){for(var b=a.filters,d=0;d<b.length;d++)b[d].enableMapFilter=!0;return a}},{version:"2.3",upgrader:function(a){return a}},{version:"2.4",upgrader:function(a){return a}},{version:"2.5",upgrader:function(a){return a}},{version:"2.6",upgrader:function(a){a.collapse=!1;return a}},{version:"2.7",upgrader:function(a){a.collapse&&a.filters&&a.filters.forEach(function(b){b.collapse=!0});return a}},{version:"2.8",upgrader:function(a){return a}},{version:"2.9",upgrader:function(a){a.taskOper=
"AND";a.groupByLayer=!1;return a}},{version:"2.10",upgrader:function(a){return a}},{version:"2.11",upgrader:function(a){return a}},{version:"2.12",upgrader:function(a){return a}},{version:"2.13",upgrader:function(a){return a}},{version:"2.14",upgrader:function(a){a.zoombackto=!1;a.allowResetAll=!1;a.allowTurnOffAll=!1;return a}}]}c.prototype=new e;return c.prototype.constructor=c});