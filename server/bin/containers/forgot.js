Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



Forgot=function(_Component){_inherits(Forgot,_Component);









function Forgot(props){_classCallCheck(this,Forgot);var _this=_possibleConstructorReturn(this,(Forgot.__proto__||Object.getPrototypeOf(Forgot)).call(this,
props));_this.




handleInput=function(field){
return function(value){
_this.setState(_defineProperty({},field,value));
};
};_this.

handleReset=function(){var
email=_this.state.email;
_this.setState({error:false,loading:true});
_this.refs.email.blur();

if(!email)
return _this.setState({error:true,loading:false});

_this.props.
dispatch(_account2.default.RequestNewPassword({email:email})).
then(_this.handleResetSuccess,_this.handleResetError);
};_this.

handleResetSuccess=function(){
_this.setState({error:false,loading:false,requested:true});

};_this.

handleResetError=function(err){
_this.setState({error:true,loading:false});
console.log(err);
};_this.state={error:false,loading:false,requested:false,email:''};return _this;}_createClass(Forgot,[{key:'render',value:function render()


{
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.View,{style:styles.form},

_react2.default.createElement(_core.View,{style:styles.forgot},
_react2.default.createElement(_core.Text,{style:styles.forgot_text},'Los datos y la forma de recuperar tu contrase\xF1a seran enviadas a la direccion de mail con la que te registraste.')),




_react2.default.createElement(_core.Field,{
ref:'email',
label:'EMAIL',
placeholder:'ej: usuario@sevnt.com',
value:this.state.email,
onChangeText:this.handleInput('email'),
keyboardType:'email-address',
autoCapitalize:'none',
returnKeyType:'done',
style:styles.field}),


this.state.error?_react2.default.createElement(_core.Text,{style:styles.form_error},'El email proporcionado es inv\xE1lido'):null,

_react2.default.createElement(_core.Button,{style:styles.button_request,onPress:this.handleReset},'ENVIAR'),

this.state.requested?
_react2.default.createElement(_core.View,null,
_react2.default.createElement(_core.Text,{style:styles.form_error},'Revise su casilla de email'),
_react2.default.createElement(_core.Button,{
style:styles.button_back,textStyle:styles.button_back_text,
onPress:this.props.navigator.popToTop},'VOLVER AL INICIO')):

null),


_react2.default.createElement(_header2.default,{navigator:this.props.navigator,type:'dark',title:'Recuperar Contrase\xF1a',titleStyle:styles.title})));


}}]);return Forgot;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Forgot);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff',
paddingTop:_core.Platform.OS=='ios'?66:_core.Platform.Version>17?70:46},


title:{
color:'#2195D2'},


form:{
marginLeft:32,
marginRight:32,
marginTop:24},


field:{
marginTop:24},


form_error:{
marginTop:16,
fontSize:14,
color:'#ff0000'},


forgot:{
marginTop:24},


forgot_text:{
color:'#000000',
fontSize:14,
lineHeight:18},


button_request:{
marginTop:32,
backgroundColor:'#2195D2'},


button_back:{
marginTop:16,
backgroundColor:'transparent',
borderColor:'#2195D2',
borderWidth:1},

button_back_text:{
color:'#2195D2'}});