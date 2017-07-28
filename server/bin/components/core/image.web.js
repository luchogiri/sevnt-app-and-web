Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}


var Image=function Image(props){var _props$style=

props.style,style=_props$style===undefined?{}:_props$style,_props$source=props.source,source=_props$source===undefined?{}:_props$source,attrs=_objectWithoutProperties(props,['style','source']);
if(source.uri)style.backgroundImage='url(\''+source.uri+'\')';else
style.backgroundImage='url(\'/bin/'+source+'\')';

return(
_react2.default.createElement('div',_extends({style:_extends({},style,styles.def)},attrs),
props.children));


};exports.default=

Image;

var styles={

def:{
display:'flex',
flexDirection:'column',
backgroundSize:'cover',
backgroundPosition:'center center'}};