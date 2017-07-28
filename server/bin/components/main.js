Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _index=require('./index');var Components=_interopRequireWildcard(_index);

var _reactNative=require('react-native');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var











Main=function(_Component){_inherits(Main,_Component);function Main(){_classCallCheck(this,Main);return _possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).apply(this,arguments));}_createClass(Main,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.wrapper},

_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,null,'Hola')),


_react2.default.createElement(Components.Tabbar,{style:styles.container},
_react2.default.createElement(Components.Tabbar.Item,{title:(0,_i18n2.default)('Home')},
_react2.default.createElement(Components.Home,{navigator:this.props.navigator})),


_react2.default.createElement(Components.Tabbar.Item,{title:(0,_i18n2.default)('Alerts')},
_react2.default.createElement(Components.Alerts,{navigator:this.props.navigator})),


_react2.default.createElement(Components.Tabbar.Item,{title:(0,_i18n2.default)('Favorites')},
_react2.default.createElement(Components.Favorites,{navigator:this.props.navigator})),


_react2.default.createElement(Components.Tabbar.Item,{title:(0,_i18n2.default)('Profile')},
_react2.default.createElement(Components.Profile,{navigator:this.props.navigator})))));




}}]);return Main;}(_react.Component);exports.default=Main;var _Dimensions$get=


_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;
var styles=_reactNative.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'white'},


container:{
position:'absolute',
left:0,
top:0,
height:height,
width:width}});