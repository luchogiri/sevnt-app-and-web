Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRouter=require('react-router');


var _home=require('./home');var _home2=_interopRequireDefault(_home);
var _main=require('./main');var _main2=_interopRequireDefault(_main);
var _detail=require('./detail');var _detail2=_interopRequireDefault(_detail);
var _category=require('./category');var _category2=_interopRequireDefault(_category);
var _result=require('./result');var _result2=_interopRequireDefault(_result);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Navigator=function(_Component){_inherits(Navigator,_Component);




function Navigator(props){_classCallCheck(this,Navigator);var _this=_possibleConstructorReturn(this,(Navigator.__proto__||Object.getPrototypeOf(Navigator)).call(this,
props));_this.















routes=
_react2.default.createElement(_reactRouter.Route,{path:'/',component:_main2.default},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_home2.default}),
_react2.default.createElement(_reactRouter.Route,{path:'category',component:_category2.default}),

_react2.default.createElement(_reactRouter.Route,{path:'events'},

_react2.default.createElement(_reactRouter.Route,{path:':id',component:_detail2.default})),

_react2.default.createElement(_reactRouter.Route,{path:'categories'},

_react2.default.createElement(_reactRouter.Route,{path:':id',component:_result2.default})));_this.checkAuth=_this.checkAuth.bind(_this);return _this;}_createClass(Navigator,[{key:'checkAuth',value:function checkAuth(router,replace){}},{key:'render',value:function render()





{
return(
_react2.default.createElement(_reactRouter.Router,{history:_reactRouter.browserHistory,routes:this.routes}));

}}]);return Navigator;}(_react.Component);exports.default=


Navigator;