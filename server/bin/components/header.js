Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _core=require('./core');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}


var Header=function Header(props){var

left=props.left,right=props.right,title=props.title,titleStyle=props.titleStyle,type=props.type,style=props.style,navigator=props.navigator,drawer=props.drawer,attrs=_objectWithoutProperties(props,['left','right','title','titleStyle','type','style','navigator','drawer']);

var navigate=function navigate(screen){
return function(){
navigator.push({screen:screen});
};
};

var LeftContent=function LeftContent(){

switch(left){

case'menu':return(
_react2.default.createElement(_core.TouchableOpacity,{style:styles.button,onPress:drawer},
_react2.default.createElement(_core.Image,{source:require('../img/icon-menu.png'),style:{width:36,height:36}})));


case'none':return _react2.default.createElement(_core.View,{style:styles.button});

default:return(
_react2.default.createElement(_core.TouchableOpacity,{style:styles.button,onPress:navigator.pop},
_react2.default.createElement(_core.Image,{
style:{width:12,height:20},
source:type!='dark'?
require('../img/icon-back.png'):
require('../img/icon-back-blue.png')})));}


};


var RightContent=function RightContent(){

switch(right){

case'search':return(
_react2.default.createElement(_core.TouchableOpacity,{style:[styles.button,styles.button_back],onPress:navigate('Search')},
_react2.default.createElement(_core.Image,{source:require('../img/icon-search.png'),style:{width:36,height:36}})));



default:return _react2.default.createElement(_core.View,{style:styles.button});}

};


return(
_react2.default.createElement(_core.View,{style:[styles.wrapper,style]},
type!='dark'?
_react2.default.createElement(_core.Image,{style:styles.bg,source:require('../img/bg-nav.jpg')}):null,

LeftContent(),

_react2.default.createElement(_core.View,{style:styles.title},
title=='sevnt'?
_react2.default.createElement(_core.Image,{source:require('../img/sevnt-iso.png'),style:{height:21,width:70}}):
_react2.default.createElement(_core.Text,{style:[styles.title_text,titleStyle]},title)),


RightContent(),

type=='dark'?
_react2.default.createElement(_core.Image,{style:styles.status_bar,source:require('../img/bg-nav.jpg')}):null));


};exports.default=

Header;


var styles=_core.StyleSheet.create({

wrapper:{
flexDirection:'row',
height:_core.Platform.OS=='ios'?66:_core.Platform.Version>17?70:46,
paddingTop:_core.Platform.OS=='ios'?20:_core.Platform.Version>17?24:0,
backgroundColor:'#ffffff',
position:'absolute',
right:0,
left:0,
top:0},


button:{
width:50,
justifyContent:'center',
alignItems:'center'},


title:{
flex:1,
alignItems:'center',
justifyContent:'center'},


title_text:{
color:'#ffffff',
fontSize:18},


bg:{
height:_core.Platform.OS=='ios'?66:_core.Platform.Version>17?70:46,
resizeMode:'stretch',
position:'absolute',
width:null,
right:0,
left:0,
top:0},


status_bar:{
height:_core.Platform.OS=='ios'?20:_core.Platform.Version>17?24:0,
position:'absolute',
resizeMode:'cover',
width:null,
right:0,
left:0,
top:0}});