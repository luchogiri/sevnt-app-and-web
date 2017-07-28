Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



Register=function(_Component){_inherits(Register,_Component);









function Register(props){_classCallCheck(this,Register);var _this=_possibleConstructorReturn(this,(Register.__proto__||Object.getPrototypeOf(Register)).call(this,
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

handleRegister=function(){var _this$state=
_this.state,first_name=_this$state.first_name,last_name=_this$state.last_name,email=_this$state.email,password=_this$state.password,repeat=_this$state.repeat;
_this.setState({error:false,loading:true});

if(!email||!password||!first_name||!last_name)
return _this.setState({error:true,loading:false});

if(password!=repeat)
return _this.setState({error:true,loading:false});

_this.props.
dispatch(_account2.default.Register({first_name:first_name,last_name:last_name,email:email,password:password})).
then(_this.handleRegistered,_this.handleRegisterError);
};_this.

handleRegistered=function(){
_this.setState({error:false,loading:false});
_this.props.navigator.popToTop();
};_this.

handleRegisterError=function(err){
_this.setState({error:true,loading:false});
console.log(err);
};_this.state={error:false,loading:false,first_name:'',last_name:'',email:'',password:'',repeat:''};return _this;}_createClass(Register,[{key:'render',value:function render()


{
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.ScrollView,null,
_react2.default.createElement(_core.View,{style:styles.form},

_react2.default.createElement(_core.Field,{
label:'NOMBRE',
placeholder:'ej: Juan',
value:this.state.first_name,
onChangeText:this.handleInput('first_name'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('last_name')}),


_react2.default.createElement(_core.Field,{
ref:'last_name',
label:'APELLIDO',
placeholder:'ej: Lopez',
value:this.state.last_name,
onChangeText:this.handleInput('last_name'),
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('email')}),


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
onSubmitEditing:this.handleNext('password')}),


_react2.default.createElement(_core.Field,{
ref:'password',
label:'CONTRASE\xD1A',
placeholder:'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022',
value:this.state.password,
onChangeText:this.handleInput('password'),
secureTextEntry:true,
autoCapitalize:'none',
returnKeyType:'next',
onSubmitEditing:this.handleNext('repeat'),
style:styles.field}),


_react2.default.createElement(_core.Field,{
ref:'repeat',
label:'REPETIR CONTRASE\xD1A',
placeholder:'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022',
value:this.state.repeat,
onChangeText:this.handleInput('repeat'),
secureTextEntry:true,
autoCapitalize:'none',
returnKeyType:'done',
style:styles.field}),


this.state.error?_react2.default.createElement(_core.Text,{style:styles.form_error},'Revise sus datos'):null,

_react2.default.createElement(_core.Button,{style:styles.button_register,onPress:this.handleRegister},'REGISTRARME'),

_react2.default.createElement(_core.View,{style:styles.forgot},
_react2.default.createElement(_core.Text,{style:styles.forgot_text},'\xBFYa ten\xE9s cuenta?\xA0',

_react2.default.createElement(_core.Text,{style:styles.forgot_text_link,onPress:this.props.navigator.pop},'volver al ingreso'))))),





_react2.default.createElement(_header2.default,{navigator:this.props.navigator,type:'dark',title:'Registrarme',titleStyle:styles.title})));


}}]);return Register;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Register);exports.default=
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


button_register:{
marginTop:32,
backgroundColor:'#2195D2'}});