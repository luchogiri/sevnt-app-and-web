Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var View=function View(props){var

style=props.style,scrollEventThrottle=props.scrollEventThrottle,attrs=_objectWithoutProperties(props,['style','scrollEventThrottle']);

return(
_react2.default.createElement('div',_extends({style:_extends({},styles.def,style)},attrs),
props.children));


};exports.default=

View;


var styles={
def:{
display:'flex',
flexDirection:'column'}};