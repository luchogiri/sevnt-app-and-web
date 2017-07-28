Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _reactNativeGooglePlacesAutocomplete=require('react-native-google-places-autocomplete');

var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


CreatePlace=function(_Component){_inherits(CreatePlace,_Component);





function CreatePlace(props){_classCallCheck(this,CreatePlace);var _this=_possibleConstructorReturn(this,(CreatePlace.__proto__||Object.getPrototypeOf(CreatePlace)).call(this,
props));_this.




handleInput=function(field){
return function(value){
_this.setState(_defineProperty({},field,value));
};
};_this.

setModalVisible=function(visible){
return function(){
_this.setState({modal:visible});
};
};_this.

handleNext=function(next){
return function(){
_this.refs[next].focus();
};
};_this.

createVenue=function(){var _this$state=
_this.state,venue_name=_this$state.venue_name,venue_address=_this$state.venue_address,venue_city=_this$state.venue_city;
if(!venue_name||!venue_address||!venue_city)return false;
_this.props.onPlaceSelected({name:venue_name,vicinity:venue_address,city:venue_city});
_this.setModalVisible(false)();
_this.props.navigator.pop();
};_this.state={name:'',date:'',modal:false,venue_name:'',venue_address:'',venue_city:''};return _this;}_createClass(CreatePlace,[{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_header2.default,{navigator:this.props.navigator}),

_react2.default.createElement(_core.View,{style:styles.search},
_react2.default.createElement(_reactNativeGooglePlacesAutocomplete.GooglePlacesAutocomplete,{
placeholder:'Search',
minLength:2,
autoFocus:false,
listViewDisplayed:'auto',
fetchDetails:true,
renderDescription:function renderDescription(){var row=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
return((row.terms||[])[0]||{}).value;
},

onPress:function onPress(data){var details=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;
_this2.props.onPlaceSelected(details);
_this2.props.navigator.pop();
},
getDefaultValue:function getDefaultValue(){return'';},
query:{

key:'AIzaSyCa2vTlvJdL8OEnn-UB-MU_-yhc_pZJlE0',
language:'es',
types:'establishment'},

styles:{
poweredContainer:{
height:1,width:1},

powered:{
height:1,width:1},

textInputContainer:{
backgroundColor:'transparent',borderWidth:0,borderColor:'none'},

description:{
fontWeight:'bold'},

predefinedPlacesDescription:{
color:'#1faadb'},

textInputContainer:{
backgroundColor:'transparent',borderWidth:0,borderColor:'transparent'}},



currentLocation:true,
currentLocationLabel:'Current location',
nearbyPlacesAPI:'GooglePlacesSearch',
GoogleReverseGeocodingQuery:{},


GooglePlacesSearchQuery:{

rankby:'distance',
types:'bar,cafe,casino,university,stadium, shopping_mall, school, rv_park, restaurant, park, night_club, museum, movie_theater, local_goverment_office'}})),








_react2.default.createElement(_core.View,{style:styles.suggest},
_react2.default.createElement(_core.Button,{style:styles.button,onPress:this.setModalVisible(true)},'\xF3 ingresar la direcci\xF3n...')),



_react2.default.createElement(_core.Modal,{
animationType:"slide",
transparent:true,
visible:this.state.modal},
_react2.default.createElement(_core.KeyboardAvoidingView,{behavior:'position',style:styles.modal},
_react2.default.createElement(_core.View,{style:styles.ctn_modal},
_react2.default.createElement(_core.Field,{
label:'Nombre del Lugar',
placeholder:'ej: Teatro Gran Rex',
value:this.state.venue_name,
onChangeText:this.handleInput('venue_name'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('venue_address')}),


_react2.default.createElement(_core.Field,{
ref:'venue_address',
label:'Direcci\xF3n',
placeholder:'ej: Av. Madero 909',
value:this.state.venue_address,
onChangeText:this.handleInput('venue_address'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('venue_city')}),


_react2.default.createElement(_core.Field,{
ref:'venue_city',
label:'Ciudad',
placeholder:'ej: Ciudad de Buenos Aires',
value:this.state.venue_city,
onChangeText:this.handleInput('venue_city'),
returnKeyType:'done',
style:styles.field}),


_react2.default.createElement(_core.Button,{style:[styles.button,{marginTop:16,marginLeft:0,marginRight:0}],onPress:this.createVenue},'Confirmar'),
_react2.default.createElement(_core.Button,{style:[styles.button_cancel,{marginTop:16}],onPress:this.setModalVisible(false)},'Cancelar'))))));





}}]);return CreatePlace;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(CreatePlace);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


search:{
flex:1,
paddingTop:_core.Platform.OS=='ios'?22:_core.Platform.Version>17?26:2,
marginLeft:50,
marginRight:50},


suggest:{
height:70,
justifyContent:'center'},


button:{
backgroundColor:'#8DC63F',
marginLeft:24,
marginRight:24},


modal:{
flex:1,
backgroundColor:'#00000099',
justifyContent:'flex-end'},


ctn_modal:{
paddingLeft:24,
paddingRight:24,
paddingVertical:24,
backgroundColor:"#ffffff",
borderRadius:8},


field:{
marginTop:16}});