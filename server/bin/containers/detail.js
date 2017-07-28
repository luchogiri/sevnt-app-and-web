Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _reactNativeShare=require('react-native-share');var _reactNativeShare2=_interopRequireDefault(_reactNativeShare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Detail=function(_Component){_inherits(Detail,_Component);





function Detail(props){_classCallCheck(this,Detail);var _this=_possibleConstructorReturn(this,(Detail.__proto__||Object.getPrototypeOf(Detail)).call(this,
props));_this.




addRemoveFavorite=function(){
if(!_this.props.account.token)
return _this.props.navigator.push({screen:'Login'});

_this.props.account.favorites.indexOf(_this.props.event._id)!=-1?
_this.props.dispatch(_account2.default.RemoveFavorite(_this.props.event._id,_this.props.account.token)):
_this.props.dispatch(_account2.default.AddFavorite(_this.props.event._id,_this.props.account.token));
};_this.state={};return _this;}_createClass(Detail,[{key:'render',value:function render()

{var _this2=this;

var eventDate=(0,_moment2.default)(this.props.event.start_date).utc();

var shareOptions={
title:this.props.event.name,
message:"Evento "+this.props.event.name+" en "+this.props.event.venue+", "+this.props.event.address+". El dia "+eventDate.format('DD')+" de "+(0,_i18n2.default)('months')[eventDate.format('M')]+" a las "+eventDate.format('HH:mm')+"Hs. Más info en http://sevnt.com/e/"+this.props.event.name,

subject:this.props.event.name};


var price=this.props.event.activities.map(function(a){return a.price.value;}).sort()[0];

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ScrollView,{ref:'scroll'},

_react2.default.createElement(_core.View,{style:styles.upper},

_react2.default.createElement(_core.Image,{style:styles.event_img,source:{uri:this.props.event.img}}),
_react2.default.createElement(_core.Image,{style:styles.event_img_bg,source:require('../img/bg-detail.png')}),

_react2.default.createElement(_core.View,{style:styles.header},
_react2.default.createElement(_core.TouchableOpacity,{style:styles.header_back,onPress:this.props.navigator.pop},
_react2.default.createElement(_core.Image,{source:require('../img/icon-back.png'),style:{width:12,height:20}})),


_react2.default.createElement(_core.View,{style:styles.header_date},
_react2.default.createElement(_core.Text,{style:styles.header_month},(0,_i18n2.default)(eventDate.format('MMM'))),
_react2.default.createElement(_core.Text,{style:styles.header_day},eventDate.format('DD')))),



_react2.default.createElement(_core.View,{style:styles.event_info},
_react2.default.createElement(_core.View,{style:styles.event_info_cat},
_react2.default.createElement(_core.Text,{style:styles.event_info_cat_title},(0,_i18n2.default)(this.props.event.category))),


_react2.default.createElement(_core.Text,{style:styles.event_info_title},
this.props.event.name),


_react2.default.createElement(_core.View,{style:styles.event_info_desc},
_react2.default.createElement(_core.Text,{style:styles.event_info_desc_text},
eventDate.format('DD'),' de ',(0,_i18n2.default)('months')[eventDate.format('M')],' ',eventDate.format('HH:mm'),' Hs.')),


_react2.default.createElement(_core.View,{style:styles.event_info_desc},
_react2.default.createElement(_core.Text,{style:styles.event_info_desc_text},this.props.event.venue,' - ',this.props.event.address)),

_react2.default.createElement(_core.View,{style:styles.event_info_desc},
_react2.default.createElement(_core.Text,{style:styles.event_info_desc_text},'Entradas desde:\xA0',

_react2.default.createElement(_core.Text,{style:styles.event_info_desc_text_big},
price==0?'Gratis':'$ '+price))),




_react2.default.createElement(_core.View,{style:styles.event_info_actions},





_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_info_desc_btn,onPress:this.addRemoveFavorite},
this.props.account.favorites.indexOf(this.props.event._id)!=-1?
_react2.default.createElement(_core.Image,{source:require('../img/icon-favorite-color.png')}):
_react2.default.createElement(_core.Image,{source:require('../img/icon-favorite.png')})),


_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_info_desc_btn,onPress:function onPress(){_reactNativeShare2.default.open(shareOptions);}},
_react2.default.createElement(_core.Image,{source:require('../img/icon-share.png')})),


_react2.default.createElement(_core.TouchableOpacity,{
style:styles.event_info_desc_btn_buy,
onPress:this.props.navigator.screen('Checkout',{event:this.props.event})},
_react2.default.createElement(_core.Image,{source:require('../img/icon-ticket.png')}))),



_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_info_down,onPress:function onPress(){_this2.refs.scroll.scrollTo({y:522});}},
_react2.default.createElement(_core.Image,{source:require('../img/icon-down.png'),style:{width:20,height:12}})))),






_react2.default.createElement(_core.View,{style:styles.event_more},

_react2.default.createElement(_core.View,{style:styles.event_more_row},
_react2.default.createElement(_core.Image,{source:require('../img/icon-calendar-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},
eventDate.format('DD')+' de '+(0,_i18n2.default)('months')[eventDate.format('M')]+' de '+eventDate.format('YYYY'))),



_react2.default.createElement(_core.View,{style:styles.event_more_row},
_react2.default.createElement(_core.Image,{source:require('../img/icon-date-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},eventDate.format('HH:mm'),' Hs.')),


_react2.default.createElement(_core.View,{style:styles.event_more_row},
_react2.default.createElement(_core.Image,{source:require('../img/icon-ticket-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},'Entradas desde ',price==0?'Gratis':'$ '+price)),


_react2.default.createElement(_core.View,{style:styles.event_more_row},
_react2.default.createElement(_core.Image,{source:require('../img/icon-location-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},this.props.event.venue,' ',this.props.event.address?' - '+this.props.event.address:null)),


this.props.event.bus_lines?
_react2.default.createElement(_core.View,{style:styles.event_more_row},
_react2.default.createElement(_core.Image,{source:require('../img/icon-bus-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},this.props.event.bus_lines)):
null,


this.props.event.subway_lines?
_react2.default.createElement(_core.View,{style:styles.event_more_row},
_react2.default.createElement(_core.Image,{source:require('../img/icon-train-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},this.props.event.subway_lines)):
null,


_react2.default.createElement(_core.Button,{style:styles.button_buy,onPress:this.props.navigator.screen('Checkout',{event:this.props.event})},'COMPRAR'),



this.props.event.description?
_react2.default.createElement(_core.View,{style:styles.event_more_desc},
_react2.default.createElement(_core.Text,{style:styles.event_more_desc_text},
this.props.event.description)):

null))));





}}]);return Detail;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Detail);exports.default=
Container;var _Dimensions$get=

_core.Dimensions.get('window'),height=_Dimensions$get.height;
var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


upper:{
height:height-100},


event_img:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
resizeMode:'cover',
width:null,
height:null},


event_img_bg:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
resizeMode:'stretch',
width:null,
height:null,
opacity:0.8},



header:{
height:_core.Platform.OS=='ios'?70:_core.Platform.Version>17?84:60,
marginTop:_core.Platform.OS=='ios'?20:_core.Platform.Version>17?24:0,
justifyContent:'space-between',
flexDirection:'row'},


header_back:{
width:30,
marginTop:16,
marginLeft:12},


header_date:{
height:66,
width:60,
marginTop:16,
alignItems:'center'},


header_month:{
fontSize:16,
lineHeight:16,
color:'#ffffff'},


header_day:{
fontSize:30,
lineHeight:30,
color:'#ffffff'},



event_info:{
flex:1,
justifyContent:'flex-end',
paddingBottom:4,
paddingLeft:20},


event_info_cat:{
flexDirection:'row',
alignItems:'center',
marginBottom:4},


event_info_cat_title:{
color:'#ffffff',
fontSize:14,
marginRight:4},


event_info_title:{
marginBottom:16,
color:'#ffffff',
fontSize:34,
lineHeight:34,
fontWeight:'300'},


event_info_desc:{
flexDirection:'row'},


event_info_desc_text:{
fontSize:14,
marginBottom:8},


event_info_desc_text_big:{
fontSize:18},


event_info_actions:{
flexDirection:'row',
alignItems:'center'},


event_info_desc_btn:{
marginRight:20},

event_info_desc_btn_buy:{
marginLeft:10},


event_info_down:{
marginTop:16,
height:24,
marginLeft:40,
marginRight:40,
alignItems:'center',
justifyContent:'center'},




event_more:{
paddingLeft:24,
paddingRight:24,
paddingTop:24,
paddingBottom:24},


event_more_row:{
flexDirection:'row',
borderRadius:25,
borderWidth:1,
borderColor:'#a7a9ac',
height:50,
marginTop:12,
alignItems:'center',
paddingLeft:16},


event_more_row_text:{
color:'#555555',
fontSize:14,
marginLeft:12,
fontWeight:'500'},










event_more_desc:{
marginTop:24,
marginBottom:24,
marginLeft:8,
marginRight:8},


event_more_desc_text:{
fontSize:14,
lineHeight:24,
color:'#555555'},


button_buy:{
backgroundColor:'#8DC63F',
marginTop:16,
height:48,
borderRadius:24}});