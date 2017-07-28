Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _core=require('./core');

var _horizontalItem=require('./horizontal-item');var _horizontalItem2=_interopRequireDefault(_horizontalItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var HorizontalItems=function HorizontalItems(props){

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.View,{style:styles.container,className:'horizontal-scrollable-items'},
_react2.default.createElement(_core.View,{style:styles.items},
props.items.map(function(item){return _react2.default.createElement(_horizontalItem2.default,{item:item,key:item._id});})))));




};exports.default=

HorizontalItems;


var styles=_core.StyleSheet.create({

wrapper:{
position:'relative',
minHeight:260,
height:260,
top:-20},


container:{
position:'absolute',
overflow:'scroll',
right:0,
left:0,
top:0},


items:{
flexDirection:'row'}});