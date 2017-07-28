Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reduxLogger=require('redux-logger');var _reduxLogger2=_interopRequireDefault(_reduxLogger);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var __DEV__=__DEV__||true;
var isDebuggingInChrome=__DEV__&&!!window.navigator.userAgent;var

Logger=function(){



function Logger(id){_classCallCheck(this,Logger);

this.id=id;
}_createClass(Logger,[{key:'log',value:function log()

{var _console;
(_console=console).log.apply(_console,arguments);
}}],[{key:'log',value:function log()

{var _console2;
(_console2=console).log.apply(_console2,arguments);
}},{key:'storeLogger',value:function storeLogger()

{
return(0,_reduxLogger2.default)({
predicate:function predicate(getState,action){return isDebuggingInChrome;},
collapsed:true,
duration:true});

}}]);return Logger;}();exports.default=Logger;