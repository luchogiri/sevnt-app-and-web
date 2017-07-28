Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _events=require('../services/events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Events=function(){function Events(){_classCallCheck(this,Events);}_createClass(Events,null,[{key:'Get',value:function Get(

















filters){var _this=this;
return function _callee(){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
_events2.default.Retrieve(filters));case 2:return _context.abrupt('return',_context.sent);case 3:case'end':return _context.stop();}}},null,_this);};

}},{key:'Retrieve',value:function Retrieve(

filters){var _this2=this;
return function _callee2(dispatch){var data;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(
_events2.default.Retrieve(filters));case 2:data=_context2.sent;
dispatch(Events.Save(data));case 4:case'end':return _context2.stop();}}},null,_this2);};

}},{key:'Create',value:function Create(


data,token){var _this3=this;
return function _callee3(dispatch){return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regeneratorRuntime.awrap(
_events2.default.Create(data,token));case 2:
dispatch(Events.Retrieve());case 3:case'end':return _context3.stop();}}},null,_this3);};

}},{key:'Save',value:function Save(

data){
return{type:Events.SAVE,data:data};
}},{key:'Add',value:function Add(

data){
return{type:Events.ADD,data:data};
}},{key:'Clear',value:function Clear()

{
return{type:Events.CLEAR};
}},{key:'Buy',value:function Buy(

data,token){var _this4=this;
return function _callee4(dispatch){return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return regeneratorRuntime.awrap(
_events2.default.Buy(data,token));case 2:return _context4.abrupt('return',_context4.sent);case 3:case'end':return _context4.stop();}}},null,_this4);};


}}]);return Events;}();Events.InitialState={datetime:undefined,items:[]};Events.SAVE='app/events/save';Events.ADD='app/events/add';Events.CLEAR='app/events/clear';exports.default=Events;