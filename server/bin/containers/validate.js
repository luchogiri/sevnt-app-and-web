Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeCamera=require('react-native-camera');var _reactNativeCamera2=_interopRequireDefault(_reactNativeCamera);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _reservations=require('../actions/reservations');var _reservations2=_interopRequireDefault(_reservations);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Validate=function(_Component){_inherits(Validate,_Component);



function Validate(props){_classCallCheck(this,Validate);var _this=_possibleConstructorReturn(this,(Validate.__proto__||Object.getPrototypeOf(Validate)).call(this,
props));_this.



onBarcodeReaded=function(evt){

if(_this.state.readed)return;
if(evt.data){

_this.setState({readed:true});
var data=evt.data.split('@');
_this.props.
dispatch(_reservations2.default.Accredit(_this.props.event._id,{document_number:data[4]},_this.props.account.token)).
then(_this.handleValidate(evt.data),_this.handleError);
}
};_this.

handleValidate=function(data){
return function(res){
if(res.success)
_this.setState({data:res.data,read:true,scanned:_this.state.scanned+1});else
{
_this.setState({readError:true,data:data.split('@')});
}
};
};_this.

handleError=function(err){
console.log(err);
};_this.state={data:[],read:false,readed:false,readError:false,scanned:0};return _this;}_createClass(Validate,[{key:'render',value:function render()


{var _this2=this;
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.ScrollView,null,

_react2.default.createElement(_core.View,{style:styles.header}),

_react2.default.createElement(_core.View,{style:styles.back},
_react2.default.createElement(_core.TouchableOpacity,{onPress:this.props.navigator.pop},
_react2.default.createElement(_core.Text,null,'Volver'))),



_react2.default.createElement(_core.View,{style:styles.card},

!this.state.read&&!this.state.readError?
_react2.default.createElement(_reactNativeCamera2.default,{
ref:function ref(cam){_this2.camera=cam;},
style:styles.preview,
aspect:'fill',
defaultOnFocusComponent:true,
torchMode:_reactNativeCamera2.default.constants.TorchMode.on,
onBarCodeRead:this.onBarcodeReaded}):
null,

!this.state.read&&!this.state.readError?
_react2.default.createElement(_core.View,{style:styles.data},
_react2.default.createElement(_core.View,{style:[styles.data_check,{backgroundColor:'#bbbbbb'}]}),
_react2.default.createElement(_core.View,{style:styles.data_content},
_react2.default.createElement(_core.Text,{style:styles.data_text},'Esperando lectura...'))):


null,



this.state.read?
_react2.default.createElement(_core.View,{style:styles.data},
_react2.default.createElement(_core.View,{style:styles.data_check}),
_react2.default.createElement(_core.View,{style:styles.data_content},
_react2.default.createElement(_core.Text,{style:styles.data_text},'Ticket: ',this.state.data.name),
_react2.default.createElement(_core.Text,{style:styles.data_text},this.state.data.first_name),
_react2.default.createElement(_core.Text,{style:styles.data_text},this.state.data.last_name),
_react2.default.createElement(_core.Text,{style:styles.data_text},this.state.data.document_number)),

_react2.default.createElement(_core.TouchableOpacity,{style:styles.data_next,onPress:function(){_this2.setState({readed:false,read:false,readError:false,data:[]});}.bind(this)},
_react2.default.createElement(_core.Text,{style:styles.data_next_text},'Continuar'))):

null,


this.state.readError?
_react2.default.createElement(_core.View,{style:styles.data},
_react2.default.createElement(_core.View,{style:[styles.data_check,{backgroundColor:'red'}]}),
_react2.default.createElement(_core.View,{style:styles.data_content},
_react2.default.createElement(_core.Text,{style:styles.data_text},'NO AUTORIZADO'),
_react2.default.createElement(_core.Text,{style:styles.data_text},this.state.data[1]),
_react2.default.createElement(_core.Text,{style:styles.data_text},this.state.data[2]),
_react2.default.createElement(_core.Text,{style:styles.data_text},this.state.data[4])),

_react2.default.createElement(_core.TouchableOpacity,{style:styles.data_next,onPress:function(){_this2.setState({readed:false,read:false,readError:false,data:[]});}.bind(this)},
_react2.default.createElement(_core.Text,{style:styles.data_next_text},'Continuar'))):

null,







_react2.default.createElement(_core.Text,{style:styles.info},this.state.scanned,' Tickets Escaneados')))));





}}]);return Validate;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Validate);exports.default=
Container;


var styles=_core.StyleSheet.create({
info:{color:'#333'},

wrapper:{
flex:1,
backgroundColor:'#f2f2f2'},


header:{
backgroundColor:'#a61362',
paddingTop:32,
position:'absolute',
left:0,
right:0,
top:0,
height:200},


back:{
height:30,
marginTop:32,
width:80,
paddingLeft:16,
justifyContent:'center'},


card:{
height:580,
borderRadius:5,
borderWidth:1,
borderColor:'#e9e9e9',
backgroundColor:'#ffffff',
marginLeft:32,
marginRight:32,
marginTop:16,
paddingTop:32,
marginTop:16,
alignItems:'center'},


data:{
marginTop:50,
alignItems:'center'},


data_check:{
height:70,
width:70,
backgroundColor:'green',
borderRadius:35,
marginBottom:25},


data_content:{},


data_text:{
fontSize:22,
marginTop:2,
color:'#444444',
textAlign:'center'},


data_next:{
height:36,
width:260,
backgroundColor:'#a61362',
justifyContent:'center',
borderRadius:18,
marginRight:20,
marginLeft:20,
marginTop:24,
marginBottom:15},


data_next_text:{
fontSize:17,
fontWeight:'400',
textAlign:'center'},


preview:{
justifyContent:'center',
alignItems:'center',
height:200,
width:_core.Dimensions.get('window').width-130},


capture:{
flex:0,
backgroundColor:'#fff',
borderRadius:5,
color:'#000',
padding:10,
margin:40}});