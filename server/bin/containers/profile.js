Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Profile=function(_Component){_inherits(Profile,_Component);










function Profile(props){_classCallCheck(this,Profile);var _this=_possibleConstructorReturn(this,(Profile.__proto__||Object.getPrototypeOf(Profile)).call(this,
props));_initialiseProps.call(_this);var _this$props$account=

_this.props.account,first_name=_this$props$account.first_name,last_name=_this$props$account.last_name,email=_this$props$account.email;
if(/fb[0-9]+@tmpsevnt.com/.test(email))email='';
_this.state={error:false,loading:false,saved:false,first_name:first_name,last_name:last_name,email:email};return _this;
}_createClass(Profile,[{key:'render',value:function render()









































{var

account=this.props.account;

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ScrollView,{style:{position:'relative'}},

_react2.default.createElement(_core.View,{style:styles.profile},
_react2.default.createElement(_core.Image,{source:require('../img/bg-head.jpg'),style:styles.profile_bg}),
_react2.default.createElement(_core.Image,{
style:styles.profile_img,
source:account.picture?{uri:account.picture}:require('../img/img-profile.png')})),


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
returnKeyType:'done',
style:styles.field}),


this.state.error?_react2.default.createElement(_core.Text,{style:styles.form_error},'Revise sus datos'):null,

!this.state.saved?
_react2.default.createElement(_core.Button,{style:styles.button_save,onPress:this.handleSave},'GUARDAR CAMBIOS'):
_react2.default.createElement(_core.Button,{style:styles.button_saved,textStyle:styles.button_saved_text},'GUARDADO'),

_react2.default.createElement(_core.Button,{style:styles.button_logout,onPress:this.handleLogout},'SALIR DE MI CUENTA')),



_react2.default.createElement(_header2.default,{navigator:this.props.navigator,style:styles.header,title:'Mi Perfil'}))));



}}]);return Profile;}(_react.Component);var _initialiseProps=function _initialiseProps(){var _this2=this;this.handleInput=function(field){return function(value){_this2.setState(_defineProperty({},field,value));};};this.handleNext=function(next){return function(){_this2.refs[next].focus();};};this.handleSave=function(){var _state=_this2.state,first_name=_state.first_name,last_name=_state.last_name,email=_state.email;_this2.setState({error:false,loading:true});if(!email||!first_name||!last_name)return _this2.setState({error:true,loading:false});_this2.props.dispatch(_account2.default.Update({first_name:first_name,last_name:last_name,email:email},_this2.props.account.token)).then(_this2.handleSaved,_this2.handleSaveError);};this.handleSaved=function(){_this2.setState({error:false,loading:false,saved:true});setTimeout(function(){_this2.state&&_this2.setState({saved:false});},2500);};this.handleSaveError=function(err){_this2.setState({error:true,loading:false});console.log(err);};this.handleLogout=function(){_this2.props.dispatch(_account2.default.Logout());_this2.props.navigator.popToTop();};};



var Container=(0,_reactRedux.connect)(function(store){return{account:store.account};})(Profile);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


profile:{
marginTop:_core.Platform.OS=='ios'?66:_core.Platform.Version>17?70:46,
height:140,
justifyContent:'flex-end',
alignItems:'center',
paddingBottom:20},


profile_bg:{
height:70,
width:null,
resizeMode:'cover',
position:'absolute',
right:0,
left:0,
top:0},


profile_img:{
height:100,
width:100,
overflow:'hidden',
resizeMode:'cover',
borderRadius:50,
backgroundColor:'transparent'},


form:{
marginLeft:32,
marginRight:32},


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


button_save:{
marginTop:32,
backgroundColor:'#2195D2'},


button_saved:{
marginTop:32,
backgroundColor:'transparent',
borderColor:'#2195D2',
borderWidth:1},

button_saved_text:{
color:'#2195D2'},


button_fb:{
backgroundColor:'#4B6EA7',
marginBottom:16},


button_logout:{
backgroundColor:'#D11F41',
marginTop:16}});