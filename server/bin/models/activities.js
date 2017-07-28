Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Activity=function(){

function Activity(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Activity);

this.name=data.name;

this.start_date=data.start_date||'';


this.stock=data.stock||'';
this.price={};
this.getPrice(data.price);

this.errors=[];
}_createClass(Activity,[{key:'getPrice',value:function getPrice()

{var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

this.price.currency='ARS';
this.price.value=data.value||'';
}},{key:'validate',value:function validate()

{var _this=this;

this.errors=[];

['name','stock'].forEach(function(prop){
if(!_this.validateNotEmpty(_this[prop]))
_this.errors.push({name:prop,message:'missing field'});
});

if(!this.validateNotEmpty(this.price.value))
this.errors.push({name:'price value',message:'missing field'});

if(this.errors.length)throw this.errors;
}},{key:'validateNotEmpty',value:function validateNotEmpty(

item){
return!!item;
}},{key:'lean',value:function lean()

{var
errors=this.errors,props=_objectWithoutProperties(this,['errors']);
return props;
}}]);return Activity;}();exports.default=Activity;