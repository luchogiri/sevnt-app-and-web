Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _core=require('./core');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var FeaturedBg=function FeaturedBg(props){return(
_react2.default.createElement(_core.Image,{style:styles.wrapper,source:{uri:'/img/featured-bg.png'}}));};exports.default=


FeaturedBg;

var styles=_core.StyleSheet.create({
wrapper:{
position:'absolute',
bottom:0,
right:0,
left:0,
top:0}});