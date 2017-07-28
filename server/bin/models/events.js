Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _activities=require('./activities');var _activities2=_interopRequireDefault(_activities);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Event=function(){

function Event(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Event);

this.name=data.name||'';
this.category=data.category||'';
this.organizer=data.organizer||'';

this.start_date=data.start_date||'';


this.img=data.img||'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-724469189813/sevnt/uploads/default-image.png';

this.venue=data.venue||'';
this.address=data.address||'';
this.city=data.city||'';



this.activities=[];
this.getActivities(data.activities);

this.errors=[];
}_createClass(Event,[{key:'getActivities',value:function getActivities()

{var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];

if(!(data instanceof Array))return;
this.activities=data.map(function(item){return new _activities2.default(item);});
}},{key:'validate',value:function validate()

{var _this=this;

this.errors=[];

['name','category','start_date','end_date','venue'].forEach(function(prop){
if(!_this.validateNotEmpty(_this[prop]))
_this.errors.push({name:prop,message:'missing field'});
});

if(!this.activities.length)
this.errors.push({name:'acitivities',message:'missing field'});

if(this.errors.length)throw this.errors;
}},{key:'validateNotEmpty',value:function validateNotEmpty(

item){
return!!item;
}},{key:'lean',value:function lean()

{var
errors=this.errors,props=_objectWithoutProperties(this,['errors']);
return props;
}}]);return Event;}();exports.default=Event;