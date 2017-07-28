Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _reactNativeCamera=require('react-native-camera');var _reactNativeCamera2=_interopRequireDefault(_reactNativeCamera);

var _core=require('../components/core');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


MyEvents=function(_Component){_inherits(MyEvents,_Component);



function MyEvents(props){_classCallCheck(this,MyEvents);return _possibleConstructorReturn(this,(MyEvents.__proto__||Object.getPrototypeOf(MyEvents)).call(this,
props));
}_createClass(MyEvents,[{key:'render',value:function render()

{var _this2=this;

var item=this.props.events.items[0]||{};
var item2=this.props.events.items[1]||{};

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_core.View,{style:styles.header}),

_react2.default.createElement(_core.View,{style:styles.back},
_react2.default.createElement(_core.TouchableOpacity,{onPress:this.props.navigator.pop},
_react2.default.createElement(_core.Text,null,'Volver'))),



_react2.default.createElement(_core.ScrollView,null,
_react2.default.createElement(_core.View,{style:styles.card},
_react2.default.createElement(_core.Image,{style:styles.card_img,source:{uri:item.img}}),

_react2.default.createElement(_core.View,{style:styles.data},
_react2.default.createElement(_core.Text,{style:styles.data_title},item.name),

_react2.default.createElement(_core.Text,{style:styles.data_text},'132 Entradas ya sincronizadas'),



_react2.default.createElement(_core.TouchableOpacity,{style:styles.data_next,onPress:function(){_this2.props.navigator.push({screen:'Validate'});}.bind(this)},
_react2.default.createElement(_core.Text,{style:styles.data_next_text},'Validar Entradas')))),




_react2.default.createElement(_core.View,{style:styles.card},
_react2.default.createElement(_core.Image,{style:styles.card_img,source:{uri:item2.img}}),

_react2.default.createElement(_core.View,{style:styles.data},
_react2.default.createElement(_core.Text,{style:styles.data_title},item2.name),

_react2.default.createElement(_core.Text,{style:styles.data_text},'24 Entradas ya sincronizadas'),



_react2.default.createElement(_core.TouchableOpacity,{style:styles.data_next,onPress:function(){_this2.props.navigator.push({screen:'Validate'});}.bind(this)},
_react2.default.createElement(_core.Text,{style:styles.data_next_text},'Validar Entradas')))))));






}}]);return MyEvents;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(MyEvents);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#f2f2f2'},


header:{
position:'absolute',
left:0,
right:0,
backgroundColor:'#a61362',
height:200},


back:{
paddingTop:24,
height:60,
width:80,
paddingLeft:16,
justifyContent:'center'},


card:{
borderRadius:5,
borderWidth:1,
borderColor:'#e9e9e9',
backgroundColor:'#ffffff',
marginLeft:32,
marginRight:32,
marginTop:16,
marginBottom:16,
alignItems:'center'},


card_img:{
height:200,
width:_core.Dimensions.get('window').width-66,
borderRadius:5,
resizeMode:'cover'},



data:{
marginLeft:20,
marginRight:20,
marginBottom:20},


data_title:{
color:'#444444',
fontSize:22,
marginTop:16},


data_text:{
color:'#444444',
fontSize:16},


data_next:{
height:36,
width:260,
backgroundColor:'#a61362',
justifyContent:'center',
borderRadius:18,
marginTop:24},


data_next_text:{
fontSize:17,
fontWeight:'400',
textAlign:'center'}});