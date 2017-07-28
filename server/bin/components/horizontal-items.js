Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _core=require('./core');

var _horizontalItem=require('./horizontal-item');var _horizontalItem2=_interopRequireDefault(_horizontalItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var HorizontalItems=function HorizontalItems(props){

var ds=new _core.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ListView,{
horizontal:true,
style:styles.items,
dataSource:ds.cloneWithRows(props.items),
contentContainerStyle:{paddingRight:20},
showsHorizontalScrollIndicator:false,
renderRow:function renderRow(item){return _react2.default.createElement(_horizontalItem2.default,{item:item,key:item._id,onPress:props.showDetails});}})));


};exports.default=

HorizontalItems;


var styles=_core.StyleSheet.create({

wrapper:{
height:260,
top:-20},


items:{
flex:1,
flexDirection:'row'}});