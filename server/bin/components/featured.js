Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _core=require('./core');

var _featuredBg=require('./featured-bg');var _featuredBg2=_interopRequireDefault(_featuredBg);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var Featured=function Featured(props){

var item=props.items[0]||{img:''};

return(
_react2.default.createElement(_core.Image,{style:styles.wrapper,source:{uri:item.img}},
_react2.default.createElement(_core.TouchableOpacity,{onPress:props.showDetails(item),style:styles.clickable},
_react2.default.createElement(_featuredBg2.default,null),
_react2.default.createElement(_core.View,{style:styles.bg}),

_react2.default.createElement(_core.View,{style:styles.content},
_react2.default.createElement(_core.Text,{style:styles.category},(0,_i18n2.default)(item.category)),
_react2.default.createElement(_core.Text,{style:styles.title},item.name),
_react2.default.createElement(_core.Text,{style:styles.date},
(0,_moment2.default)(item.start_date).format('DD'),' de ',(0,_i18n2.default)('months')[(0,_moment2.default)(item.start_date).format('MM')])))));




};exports.default=

Featured;


var styles=_core.StyleSheet.create({

wrapper:{
height:_core.Platform.OS=='web'?380:330,
minHeight:_core.Platform.OS=='web'?380:330},


clickable:{
flex:1,
justifyContent:'flex-end',
position:'relative'},


bg:{
position:'absolute',
backgroundColor:'rgba(0,0,0,0.22)',
bottom:0,
top:0,
left:0,
right:0},


content:{
position:'relative',
marginLeft:_core.Platform.OS=='web'?80:20,
marginBottom:_core.Platform.OS=='web'?50:40},


category:{
fontWeight:_core.Platform.OS=='web'?'400':'600',
fontSize:_core.Platform.OS=='web'?16:15},


title:{
fontWeight:_core.Platform.OS=='web'?'300':'500',
fontSize:_core.Platform.OS=='web'?40:28,
marginTop:0},


date:{
fontSize:14,
marginTop:4}});