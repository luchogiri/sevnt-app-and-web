Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


SignIn=function(_Component){_inherits(SignIn,_Component);










function SignIn(props){_classCallCheck(this,SignIn);var _this=_possibleConstructorReturn(this,(SignIn.__proto__||Object.getPrototypeOf(SignIn)).call(this,
props));_this.




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

handleLogin=function(){var _this$state=
_this.state,email=_this$state.email,password=_this$state.password;
_this.setState({error:false,loading:true});

if(!email||!password)
return _this.setState({error:true,loading:false});

_this.props.
dispatch(_account2.default.Login({email:email,password:password})).
then(_this.handleLoggedIn,_this.handleLoginError);
};_this.

handleLoggedIn=function(){
_this.setState({error:false,loading:false});
_this.refs.password.blur();
_this.props.navigator.popToTop();
};_this.

handleLoginError=function(err){
_this.setState({error:true,loading:false});
console.log(err);
};_this.state={error:false,loading:false,email:'',password:''};return _this;}_createClass(SignIn,[{key:'render',value:function render()


{

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.View,{style:styles.form},

_react2.default.createElement(_core.Field,{
label:'USUARIO',
placeholder:'ej: usuario@sevnt.com',
value:this.state.email,
onChangeText:this.handleInput('email'),
keyboardType:'email-address',
autoCapitalize:'none',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('password')}),


_react2.default.createElement(_core.Field,{
ref:'password',
label:'CLAVE',
placeholder:'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022',
value:this.state.password,
onChangeText:this.handleInput('password'),
secureTextEntry:true,
autoCapitalize:'none',
returnKeyType:'done',
style:styles.field}),


this.state.error?_react2.default.createElement(_core.Text,{style:styles.form_error},'Revise su usuario o contrase\xF1a'):null,

_react2.default.createElement(_core.Button,{style:styles.button_login,onPress:this.handleLogin},'ENTRAR'),

_react2.default.createElement(_core.View,{style:styles.forgot},
_react2.default.createElement(_core.Text,{style:styles.forgot_text},'\xBFOlvidaste tu clave?\xA0',

_react2.default.createElement(_core.Text,{style:styles.forgot_text_link,onPress:this.props.navigator.screen('Forgot')},'podemos ayudarte'))),



_react2.default.createElement(_core.View,{style:styles.hr},
_react2.default.createElement(_core.View,{style:styles.hr_bg}),
_react2.default.createElement(_core.Text,{style:styles.hr_text},'o tambi\xE9n pod\xE9s')),


_react2.default.createElement(_core.Button,{style:styles.button_fb,onPress:this.props.navigator.popToTop},'INGRESAR CON FACEBOOK'),



_react2.default.createElement(_core.Text,{style:styles.hr_text},'\xBFTodav\xEDa no sos usuario?'),

_react2.default.createElement(_core.Button,{style:styles.button_register,
textStyle:styles.button_register_text,
onPress:this.props.navigator.screen('Register')},'CREAR CUENTA')),




_react2.default.createElement(_header2.default,{navigator:this.props.navigator,type:'dark',title:'Ingresar',titleStyle:styles.title})));


}}]);return SignIn;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(SignIn);exports.default=
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
textAlign:'center',
fontSize:14},


forgot_text_link:{
color:'#2295d2',
fontSize:14},



hr:{
height:18,
marginTop:40,
marginLeft:20,
marginRight:20,
position:'relative',
alignItems:'center'},


hr_bg:{
position:'absolute',
left:0,
right:0,
top:9,
borderTopWidth:1,
borderTopColor:'#888888'},


hr_text:{
paddingLeft:16,
paddingRight:16,
fontSize:14,
backgroundColor:'#ffffff',
textAlign:'center',
color:'#444444'},


button_login:{
marginTop:32,
backgroundColor:'#2195D2'},


button_fb:{
backgroundColor:'#4B6EA7',
marginTop:32,
marginBottom:32},


button_register:{
backgroundColor:'transparent',
borderColor:'#2195D2',
borderWidth:1,
marginTop:16},

button_register_text:{
color:'#2195D2'}});