Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _env=require('../env');var _env2=_interopRequireDefault(_env);
var _logger=require('../helpers/logger');var _logger2=_interopRequireDefault(_logger);
var _fetch=require('../helpers/fetch');var _fetch2=_interopRequireDefault(_fetch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Events=function(){function Events(){_classCallCheck(this,Events);}_createClass(Events,null,[{key:'Retrieve',value:function Retrieve()

{var _this=this;var filters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
return new Promise(function _callee(resolve,reject){var query,filt,res,req;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:

query='';
filt=Object.keys(filters);
if(filt.length)
query='?'+filt.map(function(filt){return''+filt+'='+filters[filt];}).join('&');

if(filters._id)
query='/'+filters._id;

res={};_context.prev=5;_context.next=8;return regeneratorRuntime.awrap(

(0,_fetch2.default)(_env2.default.API_PATH+'/events'+query,{headers:_env2.default.HEADERS}));case 8:req=_context.sent;_context.next=11;return regeneratorRuntime.awrap(
req.json());case 11:res=_context.sent;_context.next=18;break;case 14:_context.prev=14;_context.t0=_context['catch'](5);


_logger2.default.log(_context.t0);return _context.abrupt('return',
reject(_context.t0));case 18:

resolve(res);case 19:case'end':return _context.stop();}}},null,_this,[[5,14]]);});

}},{key:'Create',value:function Create(

data,token){var _this2=this;

return new Promise(function _callee2(resolve,reject){var res,method,body,headers,req;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:
res=void 0;
method='POST';
data.start_date=data.start_date.split('/').reverse().join('-');

body=JSON.stringify(data);
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context2.prev=5;_context2.next=8;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/events',{method:method,body:body,headers:headers}));case 8:req=_context2.sent;_context2.next=11;return regeneratorRuntime.awrap(
req.json());case 11:res=_context2.sent;_context2.next=17;break;case 14:_context2.prev=14;_context2.t0=_context2['catch'](5);return _context2.abrupt('return',



reject(_context2.t0));case 17:if(!(


res.success==false)){_context2.next=19;break;}return _context2.abrupt('return',reject(res));case 19:
resolve(res);case 20:case'end':return _context2.stop();}}},null,_this2,[[5,14]]);});

}},{key:'Buy',value:function Buy(


data,token){var _this3=this;

return new Promise(function _callee3(resolve,reject){var res,method,body,headers,req;return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:
res=void 0;
method='POST';
body=JSON.stringify(data);
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context3.prev=4;_context3.next=7;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/reservations',{method:method,body:body,headers:headers}));case 7:req=_context3.sent;_context3.next=10;return regeneratorRuntime.awrap(
req.json());case 10:res=_context3.sent;_context3.next=16;break;case 13:_context3.prev=13;_context3.t0=_context3['catch'](4);return _context3.abrupt('return',



reject(_context3.t0));case 16:if(!(


res.success==false)){_context3.next=18;break;}return _context3.abrupt('return',reject(res));case 18:
resolve(res);case 19:case'end':return _context3.stop();}}},null,_this3,[[4,13]]);});

}}]);return Events;}();exports.default=Events;