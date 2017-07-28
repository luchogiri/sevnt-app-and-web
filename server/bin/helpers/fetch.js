Object.defineProperty(exports,"__esModule",{value:true});
var _logger=require('./logger');var _logger2=_interopRequireDefault(_logger);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var memoize={};


var Fetch=function Fetch(){var _ref=arguments.length<=1?undefined:arguments[1],_ref$method=_ref.

method,method=_ref$method===undefined?'GET':_ref$method,_ref$body=_ref.body,body=_ref$body===undefined?'':_ref$body;
_logger2.default.log('['+method+'] '+(arguments.length<=0?undefined:arguments[0])+'   '+body.substr(0,75));
return fetch.apply(undefined,arguments);
};exports.default=

Fetch;