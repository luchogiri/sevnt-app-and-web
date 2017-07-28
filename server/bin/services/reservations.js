Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _env=require('../env');var _env2=_interopRequireDefault(_env);
var _logger=require('../helpers/logger');var _logger2=_interopRequireDefault(_logger);
var _fetch=require('../helpers/fetch');var _fetch2=_interopRequireDefault(_fetch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Reservations=function(){function Reservations(){_classCallCheck(this,Reservations);}_createClass(Reservations,null,[{key:'Sync',value:function Sync(

id,token){var _this=this;
return new Promise(function _callee(resolve,reject){var res,headers,req;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:

res={};
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context.prev=2;_context.next=5;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/reservations/'+id+'/sync',{headers:headers}));case 5:req=_context.sent;_context.next=8;return regeneratorRuntime.awrap(
req.json());case 8:res=_context.sent;_context.next=15;break;case 11:_context.prev=11;_context.t0=_context['catch'](2);


_logger2.default.log(_context.t0);return _context.abrupt('return',
reject(_context.t0));case 15:

resolve(res);case 16:case'end':return _context.stop();}}},null,_this,[[2,11]]);});

}},{key:'Accredit',value:function Accredit(

id,data,token){var _this2=this;
return new Promise(function _callee2(resolve,reject){var res,body,headers,method,req;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:

res={};
body=JSON.stringify(data);
headers=_extends({},_env2.default.HEADERS,{authorization:token});
method='POST';_context2.prev=4;_context2.next=7;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/reservations/'+id+'/accreditation',{method:method,body:body,headers:headers}));case 7:req=_context2.sent;_context2.next=10;return regeneratorRuntime.awrap(
req.json());case 10:res=_context2.sent;_context2.next=17;break;case 13:_context2.prev=13;_context2.t0=_context2['catch'](4);


_logger2.default.log(_context2.t0);return _context2.abrupt('return',
reject(_context2.t0));case 17:

resolve(res);case 18:case'end':return _context2.stop();}}},null,_this2,[[4,13]]);});

}}]);return Reservations;}();exports.default=Reservations;