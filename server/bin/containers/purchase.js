Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _reactNativeCamera=require('react-native-camera');var _reactNativeCamera2=_interopRequireDefault(_reactNativeCamera);
var _reactNativeAwesomeCardIo=require('react-native-awesome-card-io');

var _core=require('../components/core');

var _events=require('../actions/events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Purchase=function(_Component){_inherits(Purchase,_Component);









function Purchase(props){_classCallCheck(this,Purchase);var _this=_possibleConstructorReturn(this,(Purchase.__proto__||Object.getPrototypeOf(Purchase)).call(this,
props));_this.



















setModalVisible=function(visible){
return function(){
_this.setState({modalVisible:visible});
};
};_this.

handleInput=function(field){
return function(value){
_this.setState(_defineProperty({},field,value));
};
};_this.

handleNext=function(next){
return function(){
_this.refs[next].focus();
};
};_this.

handleBuy=function(){

if(!_this.props.account.token)
return _this.props.navigator.push({screen:'Login'});

_this.setState({error:false,loading:true});var _this$state=

_this.state,first_name=_this$state.first_name,last_name=_this$state.last_name,document_number=_this$state.document_number,email=_this$state.email,payment_method=_this$state.payment_method,card_number=_this$state.card_number,holder_name=_this$state.holder_name,security_code=_this$state.security_code;

var isFree=true;
_this.props.event.activities.forEach(function(activity,i){
if(activity.price.value!=0&&_this.props.data[i])isFree=false;
});


if(!first_name||!last_name||!document_number||!email)
return _this.setState({error:true,loading:false});

if(!isFree&&(!payment_method||!card_number||!holder_name||!security_code))
return _this.setState({error:true,loading:false});

var user_data={first_name:first_name,last_name:last_name,document_number:document_number,email:email};
var payment_info={payment_method:payment_method,holder_name:holder_name,card_number:card_number,security_code:security_code};

var data={};
data.event=_this.props.event;
data.payment_info=payment_info;
data.tickets=[];
_this.props.data.forEach(function(q,idx){
for(var i=0;i<q;i++){
data.tickets.push(_extends({},_this.props.event.activities[idx],user_data));
}
});

_this.props.
dispatch(_events2.default.Buy(data,_this.props.account.token)).
then(_this.handleBought(data),_this.handleBuyError);

};_this.

handleBought=function(data){
return function(){
_this.setState({error:false,loading:false});
_this.props.navigator.push({screen:'Thanks',data:data});
};
};_this.

handleBuyError=function(err){
_this.setState({error:true,loading:false});
console.log(err);
};_this.

onBarcodeRead=function(evt){
if(_this.state.read)return;


var info=evt.data.split('@');
_this.setState({data:info,first_name:info[2],last_name:info[1],document_number:info[4],read:true});
_this.setModalVisible(false)();

};_this.

scanCard=function(){
_reactNativeAwesomeCardIo.CardIOModule.scanCard().then(function(card){
_this.setState({card_number:card.cardNumber,payment_method:card.cardType,security_code:card.cvv});
}).catch(function(){});
};_this.state={error:false,loading:false,modalVisible:false,data:[],read:false,first_name:'',last_name:'',document_number:'',email:'',payment_method:'',holder_name:'',card_number:'',security_code:''};return _this;}_createClass(Purchase,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.account.token){this.setState({first_name:this.props.account.first_name,last_name:this.props.account.last_name,email:this.props.account.email});}}},{key:'componentWillMount',value:function componentWillMount(){try{_reactNativeAwesomeCardIo.CardIOUtilities.preload();}catch(error){console.log(error);}}},{key:'render',value:function render()


{var _this2=this;

var eventDate=(0,_moment2.default)(this.props.event.start_date).utc();
var isFree=true;
this.props.event.activities.forEach(function(activity,i){
if(activity.price.value!=0&&_this2.props.data[i])isFree=false;
});

return(
_react2.default.createElement(_core.KeyboardAvoidingView,{behavior:'position',style:styles.wrapper},
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





_react2.default.createElement(_core.View,{style:styles.form},
_react2.default.createElement(_core.View,{style:styles.form_component},
_react2.default.createElement(_core.Text,{style:styles.form_title},'DATOS DE ENTRADA'),
_react2.default.createElement(_core.TouchableOpacity,{style:styles.form_icon,onPress:function onPress(){_this2.setState({read:false});_this2.setModalVisible(true)();}},
_react2.default.createElement(_core.Image,{style:{height:20,width:20},source:require('../img/icon-camera.png')}))),



_react2.default.createElement(_core.Modal,{
animationType:"slide",
transparent:true,
visible:this.state.modalVisible},
_react2.default.createElement(_core.View,{style:styles.modal},
_react2.default.createElement(_core.View,{style:{alignItems:'center',justifyContent:'center'}},
_react2.default.createElement(_reactNativeCamera2.default,{
ref:function ref(cam){_this2.camera=cam;},
style:styles.preview,
aspect:'fill',
defaultOnFocusComponent:true,
torchMode:_reactNativeCamera2.default.constants.TorchMode.on,
onBarCodeRead:this.onBarcodeRead}),
_react2.default.createElement(_core.Button,{style:styles.button_cancel,onPress:this.setModalVisible(false)},'Cancelar')))),






_react2.default.createElement(_core.View,{style:styles.help},
_react2.default.createElement(_core.View,{style:styles.help_pointer}),
_react2.default.createElement(_core.Text,{style:styles.help_text},'\xBFSab\xEDas que pod\xE9s tomar todos los datos para tu entrada escaneando tu documento? \xA1Intentalo!')),


_react2.default.createElement(_core.Field,{
label:'NOMBRE',
placeholder:'ej: Juan',
value:this.state.first_name||this.state.data[1],
onChangeText:this.handleInput('first_name'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('last_name')}),


_react2.default.createElement(_core.Field,{
ref:'last_name',
label:'APELLIDO',
placeholder:'ej: Lopez',
value:this.state.last_name||this.state.data[2],
onChangeText:this.handleInput('last_name'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('document_number')}),


_react2.default.createElement(_core.Field,{
ref:'document_number',
label:'NUMERO DE DOCUMENTO',
placeholder:'ej: 23444555',
value:this.state.document_number||this.state.data[4],
onChangeText:this.handleInput('document_number'),
keyboardType:'numeric',
autoCapitalize:'none',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('document_number')}),


_react2.default.createElement(_core.Field,{
ref:'email',
label:'EMAIL',
placeholder:'ej: usuario@sevnt.com',
value:this.state.email,
onChangeText:this.handleInput('email'),
keyboardType:'email-address',
autoCapitalize:'none',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('payment_method')}),


isFree?null:
_react2.default.createElement(_core.View,null,
_react2.default.createElement(_core.View,{style:styles.form_component},
_react2.default.createElement(_core.Text,{style:styles.form_title},'FORMA DE PAGO'),
_react2.default.createElement(_core.TouchableOpacity,{style:styles.form_icon,onPress:this.scanCard},
_react2.default.createElement(_core.Image,{style:{height:20,width:20},source:require('../img/icon-camera.png')}))),



_react2.default.createElement(_core.View,{style:styles.help},
_react2.default.createElement(_core.View,{style:styles.help_pointer}),
_react2.default.createElement(_core.Text,{style:styles.help_text},'\xBFSab\xEDas que pod\xE9s escanear los datos de tu tarjeta de cr\xE9dito? \xA1Intentalo!')),


_react2.default.createElement(_core.Field,{
ref:'payment_method',
label:'MEDIO DE PAGO',
placeholder:'ej: Visa',
value:this.state.payment_method,
onChangeText:this.handleInput('payment_method'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('holder_name')}),


_react2.default.createElement(_core.Field,{
ref:'holder_name',
label:'NOMBRE DEL TITULAR',
placeholder:'como figura en la tarjeta',
value:this.state.holder_name,
onChangeText:this.handleInput('holder_name'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('card_number')}),


_react2.default.createElement(_core.Field,{
ref:'card_number',
label:'NUMERO DE TARJETA',
placeholder:'ej: 4444 1234 1234 1234',
value:this.state.card_number,
onChangeText:this.handleInput('card_number'),
keyboardType:'numeric',
autoCapitalize:'none',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('security_code')}),


_react2.default.createElement(_core.Field,{
ref:'security_code',
label:'CODIGO DE SEGURIDAD',
placeholder:'ej: 123',
value:this.state.security_code,
onChangeText:this.handleInput('security_code'),
keyboardType:'numeric',
autoCapitalize:'none',
returnKeyType:'done',
style:styles.field})),



this.state.error?_react2.default.createElement(_core.Text,{style:styles.form_error},'Revise sus datos'):null,

_react2.default.createElement(_core.Button,{style:styles.button_buy,onPress:this.handleBuy},
isFree?'OBTENER':'COMPRAR')))));






}}]);return Purchase;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Purchase);exports.default=
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


form:{
paddingLeft:24,
paddingRight:24,
paddingTop:24},


form_component:{
flexDirection:'row',
alignItems:'center'},


form_title:{
marginTop:16,
marginBottom:16,
fontSize:16,
fontSize:16,
fontWeight:'700',
color:'#555555',
flex:1},


form_icon:{
width:40},


field:{
marginBottom:24},


form_error:{
marginTop:16,
fontSize:14,
color:'#ff0000'},



help:{
backgroundColor:'#00000099',
borderRadius:8,
padding:8,
position:'relative',
marginBottom:16},

help_pointer:{
position:'absolute',
right:16,
top:-10,
borderColor:'transparent',
borderBottomColor:'#00000099',
borderWidth:14,
borderBottomWidth:10,
borderTopWidth:0,
height:0,
width:0},

help_text:{
fontSize:14},


button_buy:{
backgroundColor:'#8DC63F',
marginTop:32,
marginBottom:24},


modal:{
flex:1,
backgroundColor:'#00000099',
paddingLeft:24,
paddingRight:24,
paddingTop:64},


button_cancel:{
marginTop:48,
marginBottom:16,
borderRadius:24,
height:48,
width:_core.Dimensions.get('window').width-100},


preview:{
justifyContent:'center',
alignItems:'center',
height:200,
width:_core.Dimensions.get('window').width-100}});