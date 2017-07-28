Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _env=require('../env');var _env2=_interopRequireDefault(_env);
var _logger=require('../helpers/logger');var _logger2=_interopRequireDefault(_logger);
var _fetch=require('../helpers/fetch');var _fetch2=_interopRequireDefault(_fetch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Config=function(){function Config(){_classCallCheck(this,Config);}_createClass(Config,null,[{key:'Retrieve',value:function Retrieve()

{var _this=this;
return new Promise(function _callee(resolve,reject){var res,req;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:

res={};_context.prev=1;_context.next=4;return regeneratorRuntime.awrap(

(0,_fetch2.default)(_env2.default.API_PATH+'/config',{headers:_env2.default.HEADERS}));case 4:req=_context.sent;_context.next=7;return regeneratorRuntime.awrap(
req.json());case 7:res=_context.sent;_context.next=14;break;case 10:_context.prev=10;_context.t0=_context['catch'](1);



_logger2.default.log(_context.t0);return _context.abrupt('return',
reject(_context.t0));case 14:

resolve(res);case 15:case'end':return _context.stop();}}},null,_this,[[1,10]]);});

}}]);return Config;}();exports.default=Config;