Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reservations=require('../services/reservations');var _reservations2=_interopRequireDefault(_reservations);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Reservations=function(){function Reservations(){_classCallCheck(this,Reservations);}_createClass(Reservations,null,[{key:'Sync',value:function Sync(



id,token){var _this=this;
return function _callee(){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
_reservations2.default.Sync(id,token));case 2:return _context.abrupt('return',_context.sent);case 3:case'end':return _context.stop();}}},null,_this);};

}},{key:'Accredit',value:function Accredit(

id,data,token){var _this2=this;
return function _callee2(){return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(
_reservations2.default.Accredit(id,data,token));case 2:return _context2.abrupt('return',_context2.sent);case 3:case'end':return _context2.stop();}}},null,_this2);};

}}]);return Reservations;}();exports.default=Reservations;