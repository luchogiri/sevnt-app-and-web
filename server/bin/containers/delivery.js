Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Delivery=function(_Component){_inherits(Delivery,_Component);





function Delivery(props){_classCallCheck(this,Delivery);var _this=_possibleConstructorReturn(this,(Delivery.__proto__||Object.getPrototypeOf(Delivery)).call(this,
props));

_this.state={};return _this;
}_createClass(Delivery,[{key:'render',value:function render()


{
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.Text,null,'CHECKOUT'),

_react2.default.createElement(_core.TouchableOpacity,{style:styles.list_item,onPress:this.props.navigator.screen('Purchase')},
_react2.default.createElement(_core.Text,null,'DO PURCHASE')),


_react2.default.createElement(_header2.default,{navigator:this.props.navigator})));


}}]);return Delivery;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Delivery);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff',
paddingTop:_core.Platform.OS=='ios'?66:70},


list_item:{
height:100,
backgroundColor:'#f5f5f5'}});