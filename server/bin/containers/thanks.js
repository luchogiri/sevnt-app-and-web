Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Thanks=function(_Component){_inherits(Thanks,_Component);





function Thanks(props){_classCallCheck(this,Thanks);var _this=_possibleConstructorReturn(this,(Thanks.__proto__||Object.getPrototypeOf(Thanks)).call(this,
props));

_this.state={};return _this;
}_createClass(Thanks,[{key:'render',value:function render()


{
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.Text,{style:styles.headTitle},'Felicitaciones!'),
_react2.default.createElement(_core.Text,{style:styles.firstTxt},'Ya ten\xE9s tu entrada para ',this.props.data.event.name,'.'),
_react2.default.createElement(_core.Text,{style:styles.txt},'Podr\xE1s verla en tu perfil entrando a mis entradas y te enviaremos tambien la confirmaci\xF3n por email para tu tranquilidad.'),




_react2.default.createElement(_core.Text,{style:styles.txt},'Lo \xFAnico que ten\xE9s que hacer ahora es ir el dia del evento con tu documento para poder ingresar.'),








_react2.default.createElement(_core.Button,{style:styles.nav_item_create,onPress:this.props.navigator.popToTop},'VOLVER Al INICIO'),

_react2.default.createElement(_header2.default,{navigator:this.props.navigator,title:'Compra Exitosa',left:'none'})));


}}]);return Thanks;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Thanks);exports.default=
Container;

var styles=_core.StyleSheet.create({

headTitle:{color:'#D11F41',fontSize:36,textAlign:'center',marginTop:40},
firstTxt:{fontSize:16,fontWeight:'bold',color:'#4D4E4E',textAlign:'center',marginBottom:25},
txt:{color:'#6E6F6F',fontSize:14,marginLeft:25,marginRight:25,marginTop:10},
nav_item_create:{marginLeft:20,marginRight:20,marginTop:16,backgroundColor:'#8DC63F'},
nav_item_boughts:{marginLeft:20,marginRight:20,marginTop:24,backgroundColor:'#2195D2'},

wrapper:{
flex:1,
backgroundColor:'#ffffff',
paddingTop:_core.Platform.OS=='ios'?66:70},


list_item:{
height:100,
backgroundColor:'#f5f5f5'}});