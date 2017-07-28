Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _config=require('../actions/config');var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var Config=function Config()




{var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_extends({},_config2.default.InitialState);var action=arguments[1];

switch(action.type){

case _config2.default.SAVE:
return _extends({},state,action.data);

case _config2.default.UPDATE:
return _extends({},state,action.data);

case _config2.default.CLEAR:
return _extends({},_config2.default.InitialState);

default:
return state;}

};exports.default=

Config;