Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _env=require('../env');var _env2=_interopRequireDefault(_env);

var _reactNativeImageCropPicker=require('react-native-image-crop-picker');var _reactNativeImageCropPicker2=_interopRequireDefault(_reactNativeImageCropPicker);
var _reactNativeDatepicker=require('react-native-datepicker');var _reactNativeDatepicker2=_interopRequireDefault(_reactNativeDatepicker);
var _reactNativeModalPicker=require('react-native-modal-picker');var _reactNativeModalPicker2=_interopRequireDefault(_reactNativeModalPicker);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _reactNativeAws=require('react-native-aws3');

var _core=require('../components/core');
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _events=require('../actions/events');var _events2=_interopRequireDefault(_events);
var _events3=require('../models/events');var _events4=_interopRequireDefault(_events3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Create=function(_Component){_inherits(Create,_Component);






function Create(props){_classCallCheck(this,Create);var _this=_possibleConstructorReturn(this,(Create.__proto__||Object.getPrototypeOf(Create)).call(this,
props));_this.











handleInput=function(field){
return function(value){
var data=_this.state.data;
data[field]=value;
_this.setState({data:data});
};
};_this.

handleDate=function(field){
return function(value){
var data=_this.state.data;
var date=value.split(' ');
data[field]=date[0].split('/').reverse().join('-')+'T'+date[1];
_this.setState({data:data});
};
};_this.

setModalVisible=function(visible){
return function(){
_this.setState({cam_modal:visible});
};
};_this.

takeImg=function(){
_reactNativeImageCropPicker2.default.
openCamera({width:500,height:500,cropping:true}).
then(_this.onPictureCropped);
};_this.

pickImg=function(){
_reactNativeImageCropPicker2.default.
openPicker({width:500,height:500,cropping:true}).
then(_this.onPictureCropped);
};_this.

onPictureCropped=function(response){
_this.setModalVisible(false)();

_this.image=response;
var data=_this.state.data;
data.img=response.path;
_this.setState({data:data});
};_this.

onPlaceSelected=function(place){
var data=_this.state.data;
data.venue=place.name;
data.address=place.vicinity;
data.city=place.address_components?(place.address_components[0]||{}).long_name||'':place.city;
_this.setState({data:data});
};_this.

onDescriptionAdded=function(bus_lines,subway_lines,description){
var data=_this.state.data;
data.bus_lines=bus_lines;
data.subway_lines=subway_lines;
data.description=description;
_this.setState({data:data});
};_this.

onTicketsCreated=function(tickets){
var data=_this.state.data;
data.activities=tickets;
_this.setState({data:data});
};_this.

createEvent=function(){

if(_this.state.loading)return;
_this.setState({loading:true,error:false});

var data=_this.state.data;
try{data.validate();}
catch(err){return _this.setState({loading:false,error:true});}


if(_this.image&&_this.image.path){
var file={
uri:'file://'+_this.image.path,
name:_this.image.path.split('/')[_this.image.path.split('/').length-1],
type:_this.image.mime};


_reactNativeAws.RNS3.put(file,_env2.default.S3).then(function(s3response){



_this.setState({loading:false});
data.img=((s3response.body||{}).postResponse||{}).location||undefined;

_this.props.
dispatch(_events2.default.Create(data,_this.props.account.token)).
then(_this.props.navigator.pop);
});
}else

{
_this.setState({loading:false});
_this.props.
dispatch(_events2.default.Create(data,_this.props.account.token)).
then(_this.props.navigator.pop);
}
};_this.state={error:false,loading:false,cam_modal:false,data:new _events4.default()};_this.image='';return _this;}_createClass(Create,[{key:'render',value:function render()


{var _this2=this;

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ScrollView,null,

_react2.default.createElement(_core.View,{style:styles.upper},

!this.state.data.img?
_react2.default.createElement(_core.Image,{style:styles.event_img,source:require('../img/bg-head.jpg')}):
_react2.default.createElement(_core.Image,{style:styles.event_img,source:{uri:this.state.data.img,isStatic:true}}),

_react2.default.createElement(_core.Image,{style:styles.event_img_bg,source:require('../img/bg-detail.png')}),

_react2.default.createElement(_core.View,{style:styles.header},
_react2.default.createElement(_core.TouchableOpacity,{style:styles.header_back,onPress:this.props.navigator.pop},
_react2.default.createElement(_core.Image,{source:require('../img/icon-back.png'),style:{width:12,height:20}})),


_react2.default.createElement(_core.View,{style:styles.header_img},
_react2.default.createElement(_core.TouchableOpacity,{onPress:this.setModalVisible(true)},
_react2.default.createElement(_core.Image,{source:require('../img/icon-image.png')})))),




_react2.default.createElement(_core.View,{style:styles.event_info},
_react2.default.createElement(_core.TextInput,{
style:styles.event_info_title,
placeholderTextColor:'#ffffff55',
underlineColorAndroid:'transparent',
placeholder:'ej: Festejo de Verano',
value:this.state.data.name,
onChangeText:this.handleInput('name'),
returnKeyType:'done'}))),




_react2.default.createElement(_core.View,{style:styles.event_more},

_react2.default.createElement(_reactNativeModalPicker2.default,{
style:styles.event_more_row_select,
optionTextStyle:styles.event_more_row_text,
data:this.props.config.categories.map(function(item){return{key:item,name:item,label:(0,_i18n2.default)(item)};}),
initValue:this.state.data.category,
cancelText:'Cancelar',
onChange:function onChange(option){_this2.handleInput('category')(option.name);}},
_react2.default.createElement(_core.View,{style:styles.select},
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},
this.state.data.category?(0,_i18n2.default)(this.state.data.category):'Categoría'),

_react2.default.createElement(_core.Image,{source:require('../img/icon-right-blue.png')}))),



_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_more_row,onPress:function onPress(){return _this2.refs.start_date.onPressDate();}},
_react2.default.createElement(_reactNativeDatepicker2.default,{
ref:'start_date',
style:{width:200},
date:this.state.data.start_date?(0,_moment2.default)(this.state.data.start_date).format('DD/MM/YYYY HH:mm'):'',
minDate:(0,_moment2.default)().add(1,'hour').startOf('hour').toDate(),
mode:'datetime',
placeholder:'Fecha inicio del evento',
format:'DD/MM/YYYY HH:mm',
confirmBtnText:'Confirmar',
cancelBtnText:'Cancelar',
showIcon:false,
customStyles:{dateInput:{borderWidth:0,alignItems:'flex-start'},placeholderText:{color:'#555555',fontWeight:'500'}},
onDateChange:function onDateChange(date){_this2.handleDate('start_date')(date);}}),


_react2.default.createElement(_core.View,null,
_react2.default.createElement(_core.Image,{source:require('../img/icon-right-blue.png')}))),



_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_more_row,onPress:function onPress(){return _this2.refs.end_date.onPressDate();}},
_react2.default.createElement(_reactNativeDatepicker2.default,{
ref:'end_date',
style:{width:200},
date:this.state.data.end_date?(0,_moment2.default)(this.state.data.end_date).format('DD/MM/YYYY HH:mm'):'',
minDate:(0,_moment2.default)(this.state.data.start_date).add(1,'hour').toDate(),
mode:'datetime',
placeholder:'Fecha fin del evento',
format:'DD/MM/YYYY HH:mm',
confirmBtnText:'Confirmar',
cancelBtnText:'Cancelar',
showIcon:false,
customStyles:{dateInput:{borderWidth:0,alignItems:'flex-start'},placeholderText:{color:'#555555',fontWeight:'500'}},
onDateChange:function onDateChange(date){_this2.handleDate('end_date')(date);}}),


_react2.default.createElement(_core.View,null,
_react2.default.createElement(_core.Image,{source:require('../img/icon-right-blue.png')}))),



_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_more_row,onPress:this.props.navigator.screen('CreatePlace',{onPlaceSelected:this.onPlaceSelected})},
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},this.state.data.venue?this.state.data.venue:'Lugar del evento'),
_react2.default.createElement(_core.Image,{source:require('../img/icon-right-blue.png')})),



_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_more_row,onPress:this.props.navigator.screen('CreateTickets',{data:this.state.data.activities,onTicketsCreated:this.onTicketsCreated})},
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},this.state.data.activities.length?
this.state.data.activities.length+' tipo/s de entrada creadas':
'Tipos de entradas'),
_react2.default.createElement(_core.Image,{source:require('../img/icon-right-blue.png')})),


_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_more_row,onPress:this.props.navigator.screen('CreateDescription',{onDescriptionAdded:this.onDescriptionAdded})},
_react2.default.createElement(_core.Text,{style:styles.event_more_row_text},this.state.data.description?this.state.data.description.substr(0,200)+'...':'Información adicional'),
_react2.default.createElement(_core.Image,{source:require('../img/icon-right-blue.png')})),


this.state.error?
_react2.default.createElement(_core.View,{style:styles.errors},
this.state.data.errors.map(function(err){return _react2.default.createElement(_core.Text,{style:styles.error,key:err.name},(0,_i18n2.default)(err.message),' ',(0,_i18n2.default)('field '+err.name));})):
null,

_react2.default.createElement(_core.Button,{style:[styles.button_buy,this.state.loading?{opacity:0.7}:null],onPress:this.createEvent},
!this.state.loading?'CREAR EVENTO':'Creando evento...'))),





_react2.default.createElement(_core.Modal,{
animationType:"slide",
transparent:true,
visible:this.state.cam_modal},
_react2.default.createElement(_core.View,{style:styles.modal},
_react2.default.createElement(_core.View,null,
_react2.default.createElement(_core.Button,{style:styles.button_pic,onPress:this.takeImg},'Tomar una fotograf\xEDa'),


_react2.default.createElement(_core.Button,{style:styles.button_pic,onPress:this.pickImg},'Seleccionar de librer\xEDa...'),


_react2.default.createElement(_core.Button,{style:styles.button_cancel,onPress:this.setModalVisible(false)},'Cancelar'))))));







}}]);return Create;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Create);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


upper:{
height:180,
justifyContent:'space-between'},


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
opacity:0.8,
width:null,
height:null},



header:{
height:_core.Platform.OS=='ios'?70:_core.Platform.Version>17?84:60,
marginTop:_core.Platform.OS=='ios'?20:_core.Platform.Version>17?24:0,
justifyContent:'space-between',
flexDirection:'row'},


header_back:{
width:30,
marginTop:16,
marginLeft:12},


header_img:{
height:50,
width:50,
marginTop:16,
marginRight:8,
alignItems:'center'},



event_info:{
height:48,
backgroundColor:'#ffffff11',
marginBottom:16,
marginHorizontal:16,
paddingHorizontal:8,
justifyContent:'center',
borderBottomColor:'#ffffff44',
borderBottomWidth:1},


event_info_title:{
color:'#ffffff',
height:44,
fontSize:26,
lineHeight:26,
fontWeight:'300',
marginBottom:0,
paddingBottom:_core.Platform.OS=='ios'?0:8},



event_more:{
paddingLeft:20,
paddingRight:20,
paddingTop:10},


event_more_row:{
flexDirection:'row',
borderRadius:25,
borderWidth:1,
borderColor:'#a7a9ac',
height:50,
marginTop:12,
alignItems:'center',
justifyContent:'space-between',
paddingLeft:16,
paddingRight:16},


event_more_row_text:{
color:'#555555',
fontSize:14,
fontWeight:'500'},



event_more_row_select:{
borderRadius:25,
borderWidth:1,
borderColor:'#a7a9ac',
height:50,
marginTop:12,
paddingLeft:16,
paddingRight:16},


select:{
height:48,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'},


select_text:{
color:'#888888',
textAlign:'center'},


modal:{
flex:1,
backgroundColor:'#00000099',
justifyContent:'flex-end',
paddingLeft:24,
paddingRight:24},


button_buy:{
backgroundColor:'#8DC63F',
marginTop:24,
borderRadius:24,
height:48},


button_pic:{
backgroundColor:'#2195D2',
marginTop:12,
borderRadius:24,
height:48},


button_cancel:{
marginTop:12,
marginBottom:16,
borderRadius:24,
height:48},


errors:{
marginTop:16},


error:{
color:'#ff0000',
fontSize:13,
marginTop:4}});