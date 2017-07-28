Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _reactNativeModalPicker=require('react-native-modal-picker');var _reactNativeModalPicker2=_interopRequireDefault(_reactNativeModalPicker);

var _core=require('../components/core');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Checkout=function(_Component){_inherits(Checkout,_Component);

function Checkout(props){_classCallCheck(this,Checkout);var _this=_possibleConstructorReturn(this,(Checkout.__proto__||Object.getPrototypeOf(Checkout)).call(this,
props));_this.




changedQuantity=function(idx){
return function(option){
var quantity=_this.state.quantity;
quantity[idx]=option.name;
_this.setState({quantity:quantity});
};
};_this.

proceedToPurchase=function(){
_this.setState({error:false});
if([].concat(_toConsumableArray(_this.state.quantity)).sort().reverse()[0]==0)
return _this.setState({error:true});
_this.props.navigator.push({screen:'Purchase',event:_this.props.event,data:_this.state.quantity});
};_this.state={quantity:_this.props.event.activities.map(function(i){return 0;}),options:[0,1,2,3,4,5,6,7,8,9,10]};return _this;}_createClass(Checkout,[{key:'render',value:function render()

{var _this2=this;

var eventDate=(0,_moment2.default)(this.props.event.start_date).utc();

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ScrollView,null,

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
_react2.default.createElement(_core.Text,{style:styles.event_info_title},
this.props.event.name))),





_react2.default.createElement(_core.View,{style:styles.event_more},

this.props.event.activities.map(function(activity,idx){return(
_react2.default.createElement(_core.View,{style:styles.event_more_row,key:idx},

_react2.default.createElement(_core.View,{style:styles.event_more_text},
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},
activity.name,'\xA0\xA0-\xA0\xA0',
activity.price.value==0?'Gratis':'$ '+activity.price.value)),


_react2.default.createElement(_reactNativeModalPicker2.default,{
style:styles.event_more_row_select,
optionTextStyle:styles.event_more_row_text,
data:_this2.state.options.map(function(item){return{key:item,name:item,label:item};}),
initValue:_this2.state.quantity.toString(),
cancelText:'Cancelar',
onChange:_this2.changedQuantity(idx)},
_react2.default.createElement(_core.View,{style:styles.event_more_stock},
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text_qty},_this2.state.quantity[idx]),
_react2.default.createElement(_core.Image,{source:require('../img/icon-down-blue.png')})))));}),




this.state.error?_react2.default.createElement(_core.Text,{style:styles.form_error},'Debe seleccionar al menos un tipo de entrada'):null,

_react2.default.createElement(_core.Button,{style:styles.button_buy,onPress:this.proceedToPurchase},'COMPLETAR PEDIDO')))));







}}]);return Checkout;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Checkout);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


upper:{
height:200},


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
resizeMode:'cover',
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
fontSize:15,
lineHeight:15,
color:'#ffffff'},


header_day:{
fontSize:24,
lineHeight:24,
color:'#ffffff'},



event_info:{
flex:1,
justifyContent:'flex-end',
paddingBottom:4,
paddingLeft:20},


event_info_title:{
marginBottom:16,
color:'#ffffff',
fontSize:30,
fontWeight:'300'},


event_more:{
paddingLeft:24,
paddingRight:24,
paddingTop:24},


event_more_row:{
flexDirection:'row',
borderRadius:25,
borderWidth:1,
borderColor:'#a7a9ac',
height:50,
marginTop:12,
alignItems:'center',
paddingLeft:16,
paddingRight:16},


event_more_text:{
flex:1,
justifyContent:'center'},


event_more_stock:{
width:80,
flexDirection:'row',
alignItems:'center'},


event_more_row_text:{
color:'#555555',
fontSize:14,
fontWeight:'500'},


event_more_row_text_qty:{
color:'#555555',
fontSize:14,
marginLeft:40,
marginRight:12,
fontWeight:'700'},


button_buy:{
backgroundColor:'#8DC63F',
marginTop:24,
height:48,
borderRadius:24},


select:{
height:48,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'},


select_text:{
color:'#888888',
textAlign:'center'},


form_error:{
marginTop:16,
fontSize:14,
color:'#ff0000'}});