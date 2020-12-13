// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/EditFields.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"settingsDesc" data-dojo-attach-point\x3d"fieldsDesc"\x3e${nls.fieldsPage.description}\x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"settingsNotes" data-dojo-attach-point\x3d"fieldsNotes"\x3e${nls.fieldsPage.fieldsNotes}\x3c/div\x3e\r\n    \x3cdiv class\x3d"attachmentsDesc" data-dojo-attach-point\x3d"attachmentsValidation"\x3e${nls.fieldsPage.smartAttachmentText}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-construct dojo/on dojo/string dojo/query dojo/text!./EditFields.html ./FieldValidation ./CopyAttributes dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup jimu/dijit/Message esri/lang dijit/registry".split(" "),function(t,u,d,k,p,q,h,v,l,w,r,x,y,z,A,B,C,m,n){return t([z,u,y],{baseClass:"jimu-widget-smartEditor-setting-fields",templateString:w,_configInfo:null,_fieldValid:null,
_fieldValidations:null,_fieldValues:null,_attachmentValidations:null,__layerName:null,_removeFromSmartActionsGroup:[],_removeFromAttributeActionsGroup:[],postCreate:function(){this.inherited(arguments);this._removeFromSmartActionsGroup=[];this._removeFromAttributeActionsGroup=[];this.fieldsPopUp=null;this._initFieldsTable();if(this.honorWebMapSettings)var a=this.editUtils.mergeFieldInfosWithConfiguration(this._configInfo.layerInfo,null);this._setFieldsTable(a||this._configInfo.fieldInfos);this._fieldValidations=
void 0===this._configInfo.fieldValidations?{}:d.clone(this._configInfo.fieldValidations);this._fieldValues=void 0===this._configInfo.fieldValues?{}:d.clone(this._configInfo.fieldValues);this._attachmentValidations=void 0===this._configInfo.attachmentValidations?{}:d.clone(this._configInfo.attachmentValidations);this.own(h(this.attachmentsValidation,"click",d.hitch(this,function(){this._onAttachmentsValidationClicked()})));this._configInfo.layerInfo.layerObject.hasAttachments?p.set(this.attachmentsValidation,
"display","block"):p.set(this.attachmentsValidation,"display","none")},popupEditPage:function(){this.fieldsPopUp=new B({titleLabel:m.substitute({layername:this._layerName},this.nls.fieldsPage.title),width:972,maxHeight:700,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){this._validateTable()?(this.honorWebMapSettings||this._resetFieldInfos(),this._configInfo.fieldValidations=this._fieldValidations,this._configInfo.fieldValues=this._fieldValues,this._configInfo.attachmentValidations=
this._attachmentValidations,this.emit("RemoveFromGroup",{smartActionGroupInfo:this._removeFromSmartActionsGroup,attributeActionGroupInfo:this._removeFromAttributeActionsGroup}),this.fieldsPopUp.close()):C({message:v.substitute(this.nls.fieldsPage.noDisplayFieldWarningMsg,{layerName:this._layerName})})})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){this.fieldsPopUp.close()})}],onClose:d.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=
new A({fields:[{name:"required",title:"",type:"text","class":"required"},{name:"visible",title:this.nls.fieldsPage.fieldsSettingsTable.display,type:"checkbox","class":"visible",width:"15%"},{name:"isEditable",title:this.nls.fieldsPage.fieldsSettingsTable.edit,type:"checkbox","class":"editable",width:"15%"},{name:"fieldName",title:this.nls.fieldsPage.fieldsSettingsTable.fieldName,type:"text","class":"fieldName",width:"30%"},{name:"label",title:this.nls.fieldsPage.fieldsSettingsTable.fieldAlias,type:"text",
editable:!1,"class":"fieldLabel",width:"30%"},{name:"actions",title:this.nls.fieldsPage.fieldsSettingsTable.actions,type:"actions",actions:["up","down","edit","copy"],"class":"actions",width:"10%"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup();l("th.simple-table-field",this._fieldsTable.domNode).forEach(function(a){switch(void 0===a.innerText||""===a.innerText?"":a.innerText.replace(/(\r\n|\n|\r)/gm,"")){case this.nls.fieldsPage.fieldsSettingsTable.display:a.title=
this.nls.fieldsPage.fieldsSettingsTable.displayTip;break;case this.nls.fieldsPage.fieldsSettingsTable.edit:a.title=this.nls.fieldsPage.fieldsSettingsTable.editTip;break;case this.nls.fieldsPage.fieldsSettingsTable.fieldName:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldNameTip;break;case this.nls.fieldsPage.fieldsSettingsTable.fieldAlias:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldAliasTip;break;case this.nls.fieldsPage.fieldsSettingsTable.actions:a.title=this.nls.fieldsPage.fieldsSettingsTable.actionsTip}},
this);this.own(h(this._fieldsTable,"actions-edit",d.hitch(this,this._onEditFieldInfoClick)))},_validateTable:function(){if(this.honorWebMapSettings||0===this._configInfo.fieldInfos.length)return!0;var a=this._fieldsTable.getRows();return 0===a.length?!1:k.some(a,function(b){return this._fieldsTable.getRowData(b).visible},this)},_onEditFieldInfoClick:function(a){a=this._fieldsTable.getRowData(a);var b=m.substitute({fieldname:a.fieldName},this.nls.actionPage.smartActionTitle),e={fields:d.clone(this._configInfo.layerInfo.layerObject.fields)};
this._fieldValid=new r({nls:this.nls,_layerDefinition:e,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,_fieldValidations:this._fieldValidations,_fieldName:a.fieldName,_fieldAlias:a.label,popupTitle:b,_smartActionsTable:this._smartActionsTable});this._fieldValid.removeFromGroup=d.hitch(this,function(g){this._removeFromSmartActionsGroup.push(g)});this._fieldValid.onGroupEditingStart=d.hitch(this,function(){this.fieldsPopUp&&this.fieldsPopUp.close();
this._tab&&this._tab.selectTab(this.nls.layersPage.smartActionsTabTitle)});this._fieldValid.popupActionsPage()},_onCopyAttrButtonClick:function(a){var b=this._fieldsTable.getRowData(a),e={fields:d.clone(this._configInfo.layerInfo.layerObject.fields)};this._copyAttr=new x({nls:this.nls,_layerDefinition:e,_fieldInfos:this._configInfo.fieldInfos,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,_fieldName:b.fieldName,_fieldAlias:b.label,_fieldValues:this._fieldValues,
_geocoderSettings:this._geocoderSettings,_configuredPresetInfos:this._configuredPresetInfos,layerInfos:this.layerInfos,isRelatedLayer:this.isRelatedLayer,map:this.map,_fieldType:a.fieldType,_attributeActionsTable:this._attributeActionsTable});this.own(h(this._copyAttr,"onGroupEditingStart",d.hitch(this,function(g){this.fieldsPopUp&&this.fieldsPopUp.close();this._tab&&this._tab.selectTab(g)})));this.own(h(this._copyAttr,"removeFromGroup",d.hitch(this,function(g){this._removeFromAttributeActionsGroup.push(g)})));
this._copyAttr.popupActionsPage();this.own(h(this._copyAttr,"SetGeocoder",d.hitch(this,function(){this.emit("SetGeocoder")})))},_onAttachmentsValidationClicked:function(){var a=m.substitute({layername:this._layerName},this.nls.fieldsPage.smartAttachmentPopupTitle),b={fields:d.clone(this._configInfo.layerInfo.layerObject.fields)};this._attachmentFieldValidation=new r({nls:this.nls,_layerDefinition:b,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,
_fieldValidations:this._attachmentValidations,_fieldName:"Actions",_fieldAlias:"",popupTitle:a});this._attachmentFieldValidation.popupActionsPage()},_setFieldsTable:function(a){var b,e,g;k.forEach(a,function(c){var f=c.visible;"esriFieldTypeGeometry"!==c.type&&"esriFieldTypeOID"!==c.type&&"esriFieldTypeBlob"!==c.type&&"esriFieldTypeGlobalID"!==c.type&&"esriFieldTypeRaster"!==c.type&&"esriFieldTypeXML"!==c.type&&(!1===c.visible&&!0===c.isEditable&&(f=!0),f={fieldName:c.fieldName,isEditable:c.hasOwnProperty("isEditable")?
c.isEditable:c.editable,label:c.label,visible:f},c.hasOwnProperty("nullable")&&!1===c.nullable?f.required="*":f.required="",b=this._fieldsTable.addRow(f).tr,g=l(".jimu-icon-edit",b)[0],g.title=this.nls.fieldsPage.editActionTip,e=b.children[b.children.length-1],b.fieldType=c.type,this._addNewAction(e.children[0],b))},this);setTimeout(d.hitch(this,function(){k.forEach(this._fieldsTable.fields,function(f){"visible"===f.name?f.onChange=d.hitch(this,this._onDisplayFieldChanged):"isEditable"===f.name&&
(f.onChange=d.hitch(this,this._onIsEditableFieldChanged))},this);if(!this.isEditableLayer){var c=l(".editable",this._fieldsTable.domNode);c.forEach(function(f){f=n.getEnclosingWidget(f.childNodes[0]);f.setValue(!1);f.setStatus(!1)})}this.honorWebMapSettings&&(c=l(".editable",this._fieldsTable.domNode),c.forEach(function(f){n.getEnclosingWidget(f.childNodes[0]).setStatus(!1)}),c=l(".visible",this._fieldsTable.domNode),c.forEach(function(f){n.getEnclosingWidget(f.childNodes[0]).setStatus(!1)}))}),300)},
_addNewAction:function(a,b){var e=q.create("div",{"class":"esriCTCopyAction",title:this.nls.fieldsPage.copyActionTip});h(e,"click",d.hitch(this,this._onCopyAttrButtonClick,b));q.place(e,a,"last")},_onDisplayFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);!b.visible&&b.isEditable&&(b.isEditable=!1,this._fieldsTable.editRow(a,b))},_onIsEditableFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);b.isEditable&&!b.visible&&(b.visible=!0,this._fieldsTable.editRow(a,b))},_resetFieldInfos:function(){var a=
[],b=this._fieldsTable.getData();k.forEach(b,d.hitch(this,function(e){var g={isEditable:null===e.isEditable?this.isEditableLayer?!0:!1:e.isEditable,visible:null===e.visible?!0:e.visible};e=this._getFieldInfoByFieldName(this._configInfo.fieldInfos,e.fieldName);d.mixin(e,g);a.push(e)}));this._configInfo.fieldInfos=a},_getFieldInfoByFieldName:function(a,b){var e;k.some(a,function(g){if(g.name===b)return e=g,!0});return e},geocoderConfigured:function(){this._copyAttr.geocoderConfigured()}})});