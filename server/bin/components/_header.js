Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _core=require('./core');

var _headerMenu=require('./header-menu');var _headerMenu2=_interopRequireDefault(_headerMenu);
var _headerTitle=require('./header-title');var _headerTitle2=_interopRequireDefault(_headerTitle);
var _headerSearch=require('./header-search');var _headerSearch2=_interopRequireDefault(_headerSearch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var Header=function Header(props){var

opacity=props.opacity,_props$openDrawer=props.openDrawer,openDrawer=_props$openDrawer===undefined?function(){}:_props$openDrawer;

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_core.Platform.OS!='web'?_react2.default.createElement(_core.View,{style:[styles.bg,{opacity:opacity}]}):null,

_core.Platform.OS!='web'?
_react2.default.createElement(_core.TouchableOpacity,{style:styles.button,onPress:openDrawer},
_react2.default.createElement(_headerMenu2.default,null)):
null,

_react2.default.createElement(_core.View,{style:styles.title},
_react2.default.createElement(_headerTitle2.default,null)),


_react2.default.createElement(_core.TouchableOpacity,{style:styles.button},
_react2.default.createElement(_headerSearch2.default,null))));



};exports.default=

Header;

var styles=_core.StyleSheet.create({

wrapper:{
flexDirection:'row',
height:_core.Platform.OS=='web'?64:_core.Platform.OS=='ios'?66:70,
paddingTop:_core.Platform.OS=='web'?0:_core.Platform.OS=='ios'?20:24,
position:'absolute',
right:0,
left:0,
top:0},


bg:{
backgroundColor:'#a61362',
height:_core.Platform.OS=='ios'?66:70,
position:'absolute',
right:0,
left:0,
top:0},


button:{
width:_core.Platform.OS=='web'?64:50,
justifyContent:'center',
alignItems:'center'},


title:{
flex:1,
alignItems:'center',
justifyContent:'center'}});