Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Field=function(_Component){_inherits(Field,_Component);

function Field(props){_classCallCheck(this,Field);var _this=_possibleConstructorReturn(this,(Field.__proto__||Object.getPrototypeOf(Field)).call(this,
props));_this.


focus=function(){
_this.refs.input.focus();
};_this.

blur=function(){
_this.refs.input.blur();
};return _this;}_createClass(Field,[{key:'render',value:function render()

{var _props=

this.props,label=_props.label,style=_props.style,labelStyle=_props.labelStyle,inputStyle=_props.inputStyle,attrs=_objectWithoutProperties(_props,['label','style','labelStyle','inputStyle']);

return(
_react2.default.createElement(_reactNative.View,{style:[styles.def,style]},
_react2.default.createElement(_reactNative.Text,{style:[styles.label,labelStyle]},label),
_react2.default.createElement(_reactNative.TextInput,_extends({
ref:'input',
style:[styles.input,inputStyle],
placeholderTextColor:'#bbbbbb',
underlineColorAndroid:'transparent'},
attrs))));



}}]);return Field;}(_react.Component);exports.default=


Field;


var styles=_reactNative.StyleSheet.create({

def:{
borderBottomWidth:1,
borderBottomColor:'#888888',
height:50},


label:{
fontSize:12,
color:'#939598'},


input:{
flex:1,
height:38,
marginBottom:0,
paddingBottom:_reactNative.Platform.OS=='ios'?0:8,
fontSize:20,
lineHeight:20,
color:'#333333'}});