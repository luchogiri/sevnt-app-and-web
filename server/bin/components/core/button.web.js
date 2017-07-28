Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _text=require('./text');var _text2=_interopRequireDefault(_text);
var _touchable=require('./touchable');var _touchable2=_interopRequireDefault(_touchable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}


var Button=function Button(props){var

style=props.style,textStyle=props.textStyle,attrs=_objectWithoutProperties(props,['style','textStyle']);

return(
_react2.default.createElement(_touchable2.default,_extends({style:_extends({},styles.def,style)},attrs),
_react2.default.createElement(_text2.default,{style:_extends({},styles.label,textStyle)},props.children)));


};exports.default=

Button;

var styles={

def:{
height:40,
borderRadius:20,
backgroundColor:'#666666',
justifyContent:'center'},


label:{
textAlign:'center',
fontWeight:'600',
fontSize:14}};