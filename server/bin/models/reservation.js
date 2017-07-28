Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Reservation=function(){

function Reservation(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Reservation);

this.account=data.account;
this.event=new Event(data.event);
this.tickets=this.getTickets(data.tickets);
this.payment=this.getPaymentInfo(data.payment);
}_createClass(Reservation,[{key:'getTickets',value:function getTickets()


{var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];

if(!(data instanceof Array))return;
this.tickets=data.map(function(item){return new Ticket(item);});
}},{key:'getPaymentInfo',value:function getPaymentInfo()

{var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

if(!(data instanceof Object))return{};

}}]);return Reservation;}();exports.default=Reservation;var



Event=function(){

function Event(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Event);

this.name=data.name||'';
this.category=data.category||'';
this.organizer=data.organizer||'';

this.start_date=data.start_date||'';
this.end_date=data.end_date||'';

this.img=data.img||'';
this.venue=data.venue||'';




this.errors=[];
}_createClass(Event,[{key:'validate',value:function validate()



{var _this=this;

this.errors=[];

['name','category','start_date','end_date','venue'].forEach(function(prop){
if(!_this.validateNotEmpty(_this[prop]))
_this.errors.push({name:prop,message:'missing field'});
});

if(!this.tickets.length)
this.errors.push({name:'acitivities',message:'missing field'});

if(this.errors.length)throw this.errors;
}},{key:'validateNotEmpty',value:function validateNotEmpty(

item){
return!!item;
}},{key:'lean',value:function lean()

{var
errors=this.errors,props=_objectWithoutProperties(this,['errors']);
return _extends({},props);
}}]);return Event;}();