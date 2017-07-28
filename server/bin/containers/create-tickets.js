Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _core=require('../components/core');

var _header=require('../components/header');var _header2=_interopRequireDefault(_header);
var _activities=require('../models/activities');var _activities2=_interopRequireDefault(_activities);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CreateTickets=function(_Component){_inherits(CreateTickets,_Component);





function CreateTickets(props){_classCallCheck(this,CreateTickets);var _this=_possibleConstructorReturn(this,(CreateTickets.__proto__||Object.getPrototypeOf(CreateTickets)).call(this,
props));_this.



handleInput=function(field){
return function(value){
var data=_this.state.data;
data[field]=field=='stock'?value.replace(/[a-zA-Z\.]/g,''):value;
_this.setState({data:data});
};
};_this.

handleSubInput=function(parent,field){
return function(value){
var data=_this.state.data;
data[parent][field]=value.replace(/[a-zA-Z]/g,'');
_this.setState({data:data});
};
};_this.

handleNext=function(next){
return function(){
_this.refs[next].focus();
};
};_this.

addActivity=function(){

_this.setState({error:false});
try{_this.state.data.validate();}
catch(err){return _this.setState({error:true});}
_this.state.data.price.value=Math.floor(Number(_this.state.data.price.value)*1.1*100)/100;
_this.setState({activities:[].concat(_toConsumableArray(_this.state.activities),[_this.state.data.lean()]),data:new _activities2.default(),free:false,limitless:false});
};_this.

createActivities=function(){

if(!_this.state.activities.length)return;
_this.props.onTicketsCreated(_this.state.activities);
_this.props.navigator.pop();
};_this.

removeActivity=function(i){
return function(){
_this.setState({activities:[].concat(_toConsumableArray(_this.state.activities.slice(0,i)),_toConsumableArray(_this.state.activities.slice(i+1)))});
};
};_this.state={error:false,activities:_this.props.data,free:false,limitless:false,data:new _activities2.default()};return _this;}_createClass(CreateTickets,[{key:'render',value:function render()

{var _this2=this;

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ScrollView,null,

_react2.default.createElement(_header2.default,{navigator:this.props.navigator,title:'Tipos de Entrada'}),

_react2.default.createElement(_core.View,{style:styles.activities},
this.state.activities.map(function(activity,i){return(
_react2.default.createElement(_core.View,{style:styles.activity,key:i},
_react2.default.createElement(_core.Text,{style:{color:"#333"}},activity.name),

_react2.default.createElement(_core.Text,{style:{color:"#333"}},
activity.stock==0?'Entradas sin límite ':activity.stock+' entradas ',
(activity.price||{}).value==0?'Gratis':'a $ '+(activity.price||{}).value+' c/u.'),

_react2.default.createElement(_core.TouchableOpacity,{style:styles.activity_remove,onPress:_this2.removeActivity(i)},
_react2.default.createElement(_core.Text,{style:{color:'red',fontSize:26,transform:[{scaleY:0.75}]}},'x'))));})),





_react2.default.createElement(_core.View,{style:styles.fields},
_react2.default.createElement(_core.View,{style:styles.input},
_react2.default.createElement(_core.Field,{
label:'Nombre',
placeholder:'ej: Platea Alta o Entrada General',
value:this.state.data.name,
onChangeText:this.handleInput('name'),
autoCapitalize:'none',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('stock')})),



_react2.default.createElement(_core.View,{style:styles.inline},
_react2.default.createElement(_core.View,{style:[styles.input,styles.input_inline]},
_react2.default.createElement(_core.Field,{
ref:'stock',
label:'Cantidad',
placeholder:'ej: 500',
value:this.state.data.stock,
onChangeText:this.handleInput('stock'),
autoCapitalize:'none',
keyboardType:'numeric',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('price')})),



_react2.default.createElement(_core.Button,{style:[styles.button,styles.button_inline,!this.state.limitless?styles.disabled:null],
onPress:function onPress(){
var data=_this2.state.data;
data.stock=!_this2.state.limitless?'0':'';
_this2.setState({limitless:!_this2.state.limitless,data:data});
}},'SIN LIMITE')),




_react2.default.createElement(_core.View,{style:styles.inline},
_react2.default.createElement(_core.View,{style:[styles.input,styles.input_inline]},
_react2.default.createElement(_core.Field,{
ref:'price',
multiline:true,
label:'Precio',
placeholder:'ej: 390',
value:this.state.data.price.value,
onChangeText:this.handleSubInput('price','value'),
autoCapitalize:'none',
returnKeyType:'done',
keyboardType:'numeric',
style:styles.field})),



_react2.default.createElement(_core.Button,{style:[styles.button,styles.button_inline,!this.state.free?styles.disabled:null],
onPress:function onPress(){
var data=_this2.state.data;
data.price.value=!_this2.state.free?'0':'';
_this2.setState({free:!_this2.state.free,data:data});}},'ENTRADA GRATUITA')),




!this.state.free&&this.state.data.price.value?
_react2.default.createElement(_core.View,{style:styles.help},
_react2.default.createElement(_core.View,{style:styles.help_pointer}),
_react2.default.createElement(_core.Text,{style:styles.help_text},'Costo del servicio $ ',Math.floor(this.state.data.price.value*0.1*100)/100),
_react2.default.createElement(_core.Text,{style:styles.help_text},'Precio final al p\xFAblico $ ',Math.floor(this.state.data.price.value*1.1*100)/100)):
null),



this.state.error?
_react2.default.createElement(_core.View,{style:styles.errors},
this.state.data.errors.map(function(err){return _react2.default.createElement(_core.Text,{style:styles.error,key:err.name},(0,_i18n2.default)(err.message),' ',(0,_i18n2.default)('field '+err.name));})):
null,

_react2.default.createElement(_core.View,{style:styles.suggest},
_react2.default.createElement(_core.Button,{style:styles.button,onPress:this.addActivity},'AGREGAR')),


_react2.default.createElement(_core.View,{style:styles.suggest},
_react2.default.createElement(_core.Button,{style:[styles.button,!this.state.activities.length?styles.disabled:{backgroundColor:'#2195D2'}],onPress:this.createActivities},'LISTO')))));




}}]);return CreateTickets;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(CreateTickets);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


fields:{
marginTop:16,
marginBottom:16},


inline:{
flex:1,
flexDirection:'row'},


input:{
marginTop:24,
marginLeft:24,
marginRight:24},


input_inline:{
flex:1,
marginRight:0},


button_inline:{
width:170,
marginTop:36},


suggest:{
height:60,
justifyContent:'center'},


button:{
backgroundColor:'#8DC63F',
marginLeft:24,
marginRight:24},


disabled:{
backgroundColor:'#bbbbbb'},


activities:{
marginTop:_core.Platform.OS=='ios'?70:84},


activity:{
borderRadius:12,
borderWidth:1,
borderColor:'#a7a9ac',
marginTop:12,
marginLeft:16,
marginRight:16,
paddingRight:24,
paddingTop:12,
paddingBottom:12,
paddingLeft:12,
position:'relative'},


activity_remove:{
position:'absolute',
right:0,
top:0,
height:32,
width:32,
alignItems:'center',
justifyContent:'center'},



help:{
backgroundColor:'#00000099',
borderRadius:8,
padding:8,
position:'relative',
margin:16,
marginBottom:8},

help_pointer:{
position:'absolute',
left:24,
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


errors:{
marginLeft:24,
marginRight:24},


error:{
color:'#ff0000',
fontSize:13,
marginTop:4}});