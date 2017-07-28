Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _core=require('../components/core');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Search=function(_Component){_inherits(Search,_Component);






function Search(props){_classCallCheck(this,Search);var _this=_possibleConstructorReturn(this,(Search.__proto__||Object.getPrototypeOf(Search)).call(this,
props));_this.




handleInput=function(field){
return function(value){
_this.setState(_defineProperty({},field,value));
};
};_this.

navigate=function(category){
return function(){
if(!category&&!_this.state.query)return;
if(!category)
_this.props.navigator.push({screen:'Result',data:{query:_this.state.query}});else

_this.props.navigator.push({screen:'Result',data:{category:category}});
};
};_this.state={query:''};return _this;}_createClass(Search,[{key:'render',value:function render()


{var _this2=this;
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.Image,{style:styles.header,source:require('../img/bg-nav.jpg')},
_react2.default.createElement(_core.View,{style:styles.header_content},

_react2.default.createElement(_core.TouchableOpacity,{style:styles.header_back,onPress:this.props.navigator.pop},
_react2.default.createElement(_core.Image,{style:{width:12,height:20},source:require('../img/icon-back.png')})),


_react2.default.createElement(_core.View,{style:styles.header_field},
_react2.default.createElement(_core.TextInput,{
style:styles.header_input,
placeholderTextColor:'#bbbbbb',
underlineColorAndroid:'transparent',
placeholder:'ingrese un t\xE9rmino...',
onChangeText:this.handleInput('query'),
value:this.state.query,
autoCapitalize:'none',
returnKeyType:'done'})),



_react2.default.createElement(_core.Button,{
style:styles.header_search,
textStyle:styles.header_search_text,
onPress:this.navigate()},'BUSCAR'))),



_react2.default.createElement(_core.ScrollView,null,
_react2.default.createElement(_core.View,{style:styles.predefined},
['MUSIC','THEATRE','FASHION','SPIRITUALITY','COURSES','PROFESSIONAL','SPORTS','EDUCATION',
'PARTIES','EXHIBITIONS AND MUSEUMS','INFANTILE','RECOMMENDED'].map(function(category){return(
_react2.default.createElement(_core.TouchableOpacity,{key:category,style:styles.predefined_item,onPress:_this2.navigate(category)},
_react2.default.createElement(_core.Text,{style:styles.predefined_item_text},(0,_i18n2.default)(category))));})))));






}}]);return Search;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Search);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff'},


header:{
paddingTop:_core.Platform.OS=='ios'?20:_core.Platform.Version>17?24:0,
height:_core.Platform.OS=='ios'?70:_core.Platform.Version>17?74:60,
width:null,
resizeMode:'cover'},


header_content:{
flex:1,
alignItems:'center',
flexDirection:'row',
paddingRight:16,
paddingLeft:6},


header_back:{
width:30,
justifyContent:'center',
alignItems:'center'},


header_field:{
flex:1,
height:32,
borderRadius:16,
backgroundColor:'#ffffff',
marginRight:12,
marginLeft:8,
position:'relative',
paddingLeft:16},


header_input:{
flex:1,
fontSize:14,
color:'#333333',
marginBottom:0,
paddingBottom:_core.Platform.OS=='ios'?0:6},


header_search:{
width:70,
height:32,
backgroundColor:'transparent',
borderColor:'#ffffff',
borderWidth:1},

header_search_text:{
color:'#ffffff',
fontSize:13},


predefined:{
marginTop:16},


predefined_item:{
height:56,
borderStyle:'solid',
borderBottomWidth:1,
borderBottomColor:'#f0f0f0',
backgroundColor:'#fbfbfb',
justifyContent:'center',
paddingLeft:32},


predefined_item_text:{
fontSize:18,
fontWeight:'400',
color:'#666666'}});