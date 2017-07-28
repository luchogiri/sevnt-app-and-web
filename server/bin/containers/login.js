Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Login=function(_Component){_inherits(Login,_Component);





function Login(props){_classCallCheck(this,Login);var _this=_possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,
props));_this.



onFacebookLogin=function(){
_this.props.dispatch(_account2.default.FBLogin()).then(_this.props.navigator.popToTop,_this.onFBError);
};_this.

onFacebookLogout=function(){
_this.props.dispatch(_account2.default.FBLogout());
};_this.

onFBError=function(err){
console.log(err);
};_this.state={};return _this;}_createClass(Login,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_core.Image,{source:require('../img/bg-main.jpg'),style:styles.wrapper},

_react2.default.createElement(_core.View,{style:styles.logo},
_react2.default.createElement(_core.Image,{source:require('../img/sevnt-logo.png')})),


_react2.default.createElement(_core.View,{style:styles.message},
_react2.default.createElement(_core.Text,{style:styles.message_text},'Bienvenido, est\xE1s a punto de comprar entradas para tus eventos de una forma mas r\xE1pida y segura')),





_react2.default.createElement(_core.View,{style:styles.buttons},
_react2.default.createElement(_core.Button,{style:styles.button_fb,onPress:this.onFacebookLogin},'INGRESAR CON FACEBOOK'),



_react2.default.createElement(_core.Button,{style:styles.button_email,onPress:this.props.navigator.screen('SignIn')},'INGRESAR CON EMAIL'),



_react2.default.createElement(_core.Button,{style:styles.button_register,onPress:this.props.navigator.screen('Register')},'CREAR CUENTA')),




_react2.default.createElement(_core.View,{style:styles.terms},
_react2.default.createElement(_core.Text,{style:styles.message_text},'Al ingresar acepta los ',
_react2.default.createElement(_core.Text,{onPress:this.props.navigator.screen('Terms'),style:styles.terms_link},'T\xE9rminos y Condiciones'),' del sitio.')),




_react2.default.createElement(_core.View,{style:styles.skip},
_react2.default.createElement(_core.Button,{style:styles.button_skip,textStyle:styles.button_skip_text,onPress:this.props.navigator.popToTop},'Continuar como invitado'))));






}}]);return Login;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Login);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff',
height:null,
width:null,
resizeMode:'stretch'},


logo:{
flex:7,
alignItems:'center',
justifyContent:'flex-end'},


message:{
flex:3,
marginLeft:44,
marginRight:44,
justifyContent:'center'},

message_text:{
fontSize:14,
lineHeight:19,
textAlign:'center',
fontWeight:'400'},


buttons:{
flex:6,
marginLeft:40,
marginRight:40,
justifyContent:'center'},

button_fb:{
backgroundColor:'#4B6EA7',
marginBottom:16},


button_email:{
backgroundColor:'#2195D2',
marginBottom:16},


button_register:{
backgroundColor:'transparent',
borderColor:'#ffffff',
borderWidth:1},


terms:{
flex:3,
marginLeft:50,
marginRight:50,
justifyContent:'center'},

terms_link:{
fontSize:14,
textDecorationLine:'underline'},


skip:{
flex:2,
justifyContent:'flex-start'},

button_skip:{
backgroundColor:'transparent'},

button_skip_text:{
fontWeight:'400'}});