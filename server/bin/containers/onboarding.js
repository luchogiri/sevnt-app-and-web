Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNativeSwiper=require('react-native-swiper');var _reactNativeSwiper2=_interopRequireDefault(_reactNativeSwiper);

var _core=require('../components/core');

var _config=require('../actions/config');var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Onboarding=function(_Component){_inherits(Onboarding,_Component);





function Onboarding(props){_classCallCheck(this,Onboarding);var _this=_possibleConstructorReturn(this,(Onboarding.__proto__||Object.getPrototypeOf(Onboarding)).call(this,
props));_this.



dismiss=function(){
_this.props.dispatch(_config2.default.Update({show_onboarding:false}));
_this.props.navigator.popToTop();
};_this.state={};return _this;}_createClass(Onboarding,[{key:'render',value:function render()


{
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.Image,{style:styles.status_bar,source:require('../img/bg-nav.jpg')}),

_react2.default.createElement(_reactNativeSwiper2.default,{
ref:'slider',
loop:false,
dot:_react2.default.createElement(_core.View,{style:styles.pagination_dot}),
activeDot:_react2.default.createElement(_core.View,{style:styles.pagination_dot_active}),
paginationStyle:styles.pagination},

_react2.default.createElement(_core.View,{style:styles.slide},
_react2.default.createElement(_core.View,{style:styles.top},
_react2.default.createElement(_core.Image,{style:styles.img,source:require('../img/step-onboarding-1.png')})),

_react2.default.createElement(_core.View,{style:styles.bottom},
_react2.default.createElement(_core.Text,{style:styles.title},'Busca'),
_react2.default.createElement(_core.Text,{style:styles.desc},'tu evento favorito'))),



_react2.default.createElement(_core.View,{style:styles.slide},
_react2.default.createElement(_core.View,{style:styles.top},
_react2.default.createElement(_core.Image,{style:styles.img,source:require('../img/step-onboarding-2.png')})),

_react2.default.createElement(_core.View,{style:styles.bottom},
_react2.default.createElement(_core.Text,{style:styles.title},'Compra'),
_react2.default.createElement(_core.Text,{style:styles.desc},'y asocialo con tus datos personales'))),



_react2.default.createElement(_core.View,{style:styles.slide},
_react2.default.createElement(_core.View,{style:styles.top},
_react2.default.createElement(_core.Image,{style:styles.img,source:require('../img/step-onboarding-3.png')})),

_react2.default.createElement(_core.View,{style:styles.bottom},
_react2.default.createElement(_core.Text,{style:styles.title},'Entra!'),
_react2.default.createElement(_core.Text,{style:styles.desc},'Tu documento es tu entrada!'),
_react2.default.createElement(_core.Button,{onPress:this.dismiss,style:styles.button},'COMENZAR'))))));






}}]);return Onboarding;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Onboarding);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


status_bar:{
height:_core.Platform.OS=='ios'?20:_core.Platform.Version>17?24:0,
width:null,
resizeMode:'cover'},


slide:{
flex:1,
paddingTop:48},


pagination:{
paddingBottom:72},

pagination_dot:{
backgroundColor:'#90A4AE',
width:12,
height:12,
borderRadius:6,
marginRight:8,
marginLeft:8},

pagination_dot_active:{
backgroundColor:'#D11F41',
width:12,
height:12,
borderRadius:6,
marginRight:8,
marginLeft:8},



top:{
flex:1,
marginLeft:40,
marginRight:40,
alignItems:'center',
justifyContent:'flex-end'},

img:{
flex:1,
resizeMode:'contain'},


bottom:{
flex:1,
paddingTop:16},


title:{
fontSize:48,
textAlign:'center',
color:'#D11F41'},


desc:{
fontSize:24,
textAlign:'center',
color:'#D11F41',
marginTop:8,
marginLeft:56,
marginRight:56},


button:{
position:'absolute',
bottom:40,
left:40,
right:40,
backgroundColor:'#8DC63F'}});