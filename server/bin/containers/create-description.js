Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CreateDescription=function(_Component){_inherits(CreateDescription,_Component);





function CreateDescription(props){_classCallCheck(this,CreateDescription);var _this=_possibleConstructorReturn(this,(CreateDescription.__proto__||Object.getPrototypeOf(CreateDescription)).call(this,
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

onSave=function(){
_this.props.onDescriptionAdded(_this.state.bus_lines,_this.state.subway_lines,_this.state.description);
_this.props.navigator.pop();
};_this.state={bus_lines:'',subway_lines:'',description:''};return _this;}_createClass(CreateDescription,[{key:'render',value:function render()

{

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ScrollView,{style:styles.formFields},
_react2.default.createElement(_core.View,{style:styles.inputLineas},
_react2.default.createElement(_core.Field,{
label:'Colectivos',
placeholder:'ej: Lineas 42 - 68 - 55 - 96',
value:this.state.bus_lines,
onChangeText:this.handleInput('bus_lines'),
autoCapitalize:'none',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('subway_lines')})),



_react2.default.createElement(_core.View,{style:styles.inputLineas},
_react2.default.createElement(_core.Field,{
ref:'subway_lines',
label:'Subtes',
placeholder:'ej: Lineas A - B - C',
value:this.state.subway_lines,
onChangeText:this.handleInput('subway_lines'),
autoCapitalize:'none',
returnKeyType:'next',
blurOnSubmit:false,
style:styles.field,
onSubmitEditing:this.handleNext('description')})),



_react2.default.createElement(_core.View,{style:styles.inputDescripcion},

_react2.default.createElement(_core.Field,{
ref:'description',
multiline:true,
label:'Descripci\xF3n',
placeholder:'ej: Sobre este evento...',
value:this.state.description,
onChangeText:this.handleInput('description'),
autoCapitalize:'none',
blurOnSubmit:false,
style:styles.fieldMulti,
inputStyle:{fontSize:14}})),



_react2.default.createElement(_core.View,{style:styles.suggest},
_react2.default.createElement(_core.Button,{style:styles.button,onPress:this.onSave},'Guardar'))),



_react2.default.createElement(_header2.default,{navigator:this.props.navigator,title:'Crear Descripci\xF3n'})));


}}]);return CreateDescription;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(CreateDescription);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},

formFields:{
marginTop:_core.Platform.OS=='ios'?70:_core.Platform.Version>17?84:60,
paddingBottom:16},

inputLineas:{
marginTop:24,
marginLeft:24,
marginRight:24},

inputDescripcion:{
marginTop:24,
marginLeft:24,
marginRight:24},

fieldMulti:{
height:135},

inputHead:{
color:'#00000088'},

search:{
flex:1,
paddingTop:20,
paddingLeft:50},


suggest:{
height:60,
justifyContent:'center'},


button:{
backgroundColor:'#8DC63F',
marginLeft:24,
marginRight:24}});