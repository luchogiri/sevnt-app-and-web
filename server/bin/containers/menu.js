Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _reactRouter=require('react-router');

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Menu=function(_Component){_inherits(Menu,_Component);








function Menu(props){_classCallCheck(this,Menu);var _this=_possibleConstructorReturn(this,(Menu.__proto__||Object.getPrototypeOf(Menu)).call(this,
props));_this.



componentDidMount=function(){
_this.props.account.token&&_this.retrieveUser();
};_this.

retrieveUser=function(){
_this.props.
dispatch(_account2.default.UserInfo(_this.props.account.token)).
then(_this.onUserReceived,_this.onUserError);
};_this.

onUserReceived=function(){

};_this.

onUserError=function(){
_this.props.dispatch(_account2.default.Logout());
};_this.


navigate=function(screen){
return function(){
if(screen=='Home')_this.props.navigator().popToTop();else
_this.props.navigator().push({screen:screen});
_this.props.close();
};
};_this.state={};return _this;}_createClass(Menu,[{key:'render',value:function render()


{var _this2=this;var

account=this.props.account;

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.View,{style:styles.imageContainerTop},
_react2.default.createElement(_core.Image,{style:styles.bg_logo,source:require('../img/bg_logo.png')})),

_react2.default.createElement(_core.View,{style:styles.logoContainer},
_react2.default.createElement(_reactRouter.Link,{to:'/'},
_react2.default.createElement(_core.Image,{style:styles.logo_sevnt,source:require('../img/logo_sevnt.png')}))),



_react2.default.createElement(_core.View,{style:styles.status_bar}),





account.token?
_react2.default.createElement(_core.View,{style:styles.profile},
_react2.default.createElement(_core.Image,{style:styles.profile_img,
source:account.picture?{uri:account.picture}:require('../img/img-profile.png')}),
_react2.default.createElement(_core.Text,{style:styles.profile_name},account.first_name),
_react2.default.createElement(_core.Text,{style:styles.profile_well,onPress:this.navigate('Profile')},'Editar Perfil')):


_react2.default.createElement(_core.View,{style:styles.profile},
_react2.default.createElement(_core.Image,{style:styles.profile_img,source:require('../img/img-profile.png')}),
_react2.default.createElement(_core.Text,{style:styles.profile_name},'Invitado'),
_react2.default.createElement(_core.Text,{style:styles.profile_well},'Bienvenido')),


!this.props.account.token?

_react2.default.createElement(_core.View,{style:styles.menu},
_react2.default.createElement(_core.Button,{style:styles.nav_item_login,onPress:this.navigate('Login')},'INGRESAR')):


_react2.default.createElement(_core.View,{style:styles.menu},

_react2.default.createElement(_core.TouchableOpacity,{style:styles.nav_item,onPress:this.navigate('Favorites')},
_react2.default.createElement(_core.Text,{style:styles.nav_item_text},'Mis Favoritos')),


_react2.default.createElement(_core.TouchableOpacity,{style:styles.nav_item,onPress:this.navigate('Purchases')},
_react2.default.createElement(_core.Text,{style:styles.nav_item_text},'Mis Compras')),


_react2.default.createElement(_core.TouchableOpacity,{style:styles.nav_item,onPress:this.navigate('Events')},
_react2.default.createElement(_core.Text,{style:styles.nav_item_text},'Mis Eventos')),


_react2.default.createElement(_core.Button,{style:styles.nav_item_create,onPress:this.navigate('Create')},'CREAR EVENTO')),








_react2.default.createElement(_core.View,{style:styles.predefined},
['MUSIC','THEATRE','FASHION','SPIRITUALITY','COURSES','PROFESSIONAL','SPORTS','EDUCATION',
'PARTIES','EXHIBITIONS AND MUSEUMS','INFANTILE','RECOMMENDED'].map(function(category){return(
_react2.default.createElement(_core.TouchableOpacity,{key:category,style:styles.predefined_item,onPress:_this2.navigate(category)},
_react2.default.createElement(_reactRouter.Link,{style:styles.link,to:"/categories/"+(0,_i18n2.default)(category)},
_react2.default.createElement(_core.Text,{style:styles.predefined_item_text},(0,_i18n2.default)(category)))));})),





_react2.default.createElement(_core.View,{style:styles.socialLinks},
_react2.default.createElement(_core.Text,{style:styles.txtSocial},'Seamos Amigos! '),
_react2.default.createElement(_core.TouchableOpacity,null,
_react2.default.createElement(_core.Image,{style:styles.icon_fb,source:require('../img/icon_fb.png')})),

_react2.default.createElement(_core.TouchableOpacity,null,
_react2.default.createElement(_core.Image,{style:styles.icon_tw,source:require('../img/icon_tw.png')})))));







}}]);return Menu;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return{account:store.account};})(Menu);exports.default=
Container;


var styles=_core.StyleSheet.create({
link:{textDecoration:'none'},
socialLinks:{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:8,marginBottom:8,marginRight:15},
txtSocial:{color:'#a3a2a0'},
imageContainerTop:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column'},

bg_logo:{
width:330,
height:60},

logoContainer:{
flex:0,flexDirection:'row'},

logo_sevnt:{
width:103,height:38,marginTop:-48,marginLeft:10},

icon_fb:{width:24,height:22,marginLeft:5,marginRight:5},
icon_tw:{width:24,height:22,marginRight:5},

imageContainer:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'},

imgHuella:{
width:320,
height:480},











wrapper:{

flex:_core.Platform.OS!='web'?1:0.3,
backgroundColor:'#f2f2f2'},



status_bar:{
height:_core.Platform.OS=='ios'?20:24},



profile:{
height:170,
justifyContent:'flex-end',
alignItems:'center',
paddingBottom:10,
borderBottomWidth:1,
borderBottomColor:'#e3e3e3',
borderStyle:'solid'},


profile_img:{
height:80,
width:80,
overflow:'hidden',
resizeMode:'cover',
borderRadius:40,
backgroundColor:'transparent'},


profile_name:{
marginTop:10,
fontSize:18,
color:'#333333'},


profile_well:{
fontSize:15,
color:'#333333'},



nav:{},



nav_item:{
height:48,
borderStyle:'solid',
borderBottomWidth:1,
borderBottomColor:'#e3e3e3',
backgroundColor:'#efefef',
justifyContent:'center',
paddingLeft:32},


nav_item_text:{
fontSize:17,
fontWeight:'400',
color:'#444444'},


nav_item_login:{
backgroundColor:'#2195D2',
height:35,
marginTop:18,
marginBottom:10,
marginLeft:20,
marginRight:20},


nav_item_create:{
backgroundColor:'#a61362',
height:36,
marginTop:24,
marginLeft:20,
marginRight:20},


predefined:{
marginTop:10},


predefined_item:{
height:35,
borderStyle:'solid',
borderBottomWidth:1,
borderBottomColor:'#f0f0f0',
backgroundColor:'#fbfbfb',
justifyContent:'center',
paddingLeft:32},


predefined_item_text:{
fontSize:13,
fontWeight:'400',
color:'#666666'}});