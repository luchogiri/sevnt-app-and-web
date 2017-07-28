Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _core=require('./core');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var HorizontalItem=function HorizontalItem(props){

return(
_react2.default.createElement(_core.Image,{style:styles.wrapper,source:{uri:props.item.img}},
_react2.default.createElement(_core.TouchableOpacity,{onPress:props.onPress(props.item),style:styles.clickable},
_react2.default.createElement(_core.View,{style:styles.bg}),

_react2.default.createElement(_core.View,{style:styles.date},
_react2.default.createElement(_core.Text,{style:styles.month},(0,_i18n2.default)((0,_moment2.default)(props.item.start_date).format('MMM'))),
_react2.default.createElement(_core.Text,{style:styles.day},(0,_moment2.default)(props.item.start_date).format('DD'))),


_react2.default.createElement(_core.View,{style:styles.content},
_react2.default.createElement(_core.Text,{style:styles.category},(0,_i18n2.default)(props.item.category)),
_react2.default.createElement(_core.Text,{style:styles.title},props.item.name)))));




};exports.default=

HorizontalItem;


var styles=_core.StyleSheet.create({

wrapper:{
height:260,
width:240,
minWidth:240,
marginLeft:20},


clickable:{
flex:1,
position:'relative',
justifyContent:'space-between'},


bg:{
position:'absolute',
backgroundColor:'rgba(0,0,0,0.35)',
bottom:0,
top:0,
left:0,
right:0},


content:{
position:'relative',
paddingLeft:16,
paddingBottom:16},


category:{
fontWeight:_core.Platform.OS=='web'?'300':'500',
fontSize:14},


title:{
fontWeight:_core.Platform.OS=='web'?'200':'400',
fontSize:23,
marginTop:0},


date:{
position:'relative',
alignItems:'flex-end',
marginRight:12,
marginTop:12},


day:{
width:40,
fontSize:25,
textAlign:'center'},


month:{
width:40,
fontSize:15,
textAlign:'center'}});