Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _config=require('../services/config');var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Config=function(){function Config(){_classCallCheck(this,Config);}_createClass(Config,null,[{key:'Retrieve',value:function Retrieve()






























{var _this=this;
return function _callee(dispatch){var data;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
_config2.default.Retrieve());case 2:data=_context.sent;
dispatch(Config.Save(data));case 4:case'end':return _context.stop();}}},null,_this);};

}},{key:'Save',value:function Save(

data){
return{type:Config.SAVE,data:data};
}},{key:'Update',value:function Update(

data){
return{type:Config.UPDATE,data:data};
}},{key:'Clear',value:function Clear()

{
return{type:Config.CLEAR};
}}]);return Config;}();Config.InitialState={show_onboarding:true,categories:['MUSIC','THEATRE','FASHION','SPIRITUALITY','COURSES','PROFESSIONAL','SPORTS','EDUCATION','PARTIES','EXHIBITIONS AND MUSEUMS','INFANTILE','RECOMMENDED']};Config.SAVE='app/config/save';Config.UPDATE='app/config/update';Config.CLEAR='app/config/clear';exports.default=Config;