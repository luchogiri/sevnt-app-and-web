Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


MyEvents=function(_Component){_inherits(MyEvents,_Component);







function MyEvents(props){_classCallCheck(this,MyEvents);var _this=_possibleConstructorReturn(this,(MyEvents.__proto__||Object.getPrototypeOf(MyEvents)).call(this,
props));_this.





componentDidMount=function(){
!_this.props.account.token&&
setTimeout(function(){_this.props.navigator.push({screen:'Login'});},1500);
_this.retrieveEvents();
};_this.

retrieveEvents=function(){
_this.setState({loading:true,refreshing:true});
_this.props.
dispatch(_account2.default.GetMyEvents(_this.props.account.token)).
then(_this.onEventsRetrieved,_this.onEventsError);
};_this.

onEventsRetrieved=function(response){
_this.setState({loading:false,refreshing:false,items:response});
};_this.

onEventsError=function(err){

_this.setState({loading:false,refreshing:false});
};_this.

onRefresh=function(){
_this.setState({refreshing:true});
_this.retrieveEvents();
};_this.state={refreshing:false,items:[]};_this.ds=new _core.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});return _this;}_createClass(MyEvents,[{key:'render',value:function render()

{var _this2=this;

return(

_react2.default.createElement(_core.View,{style:styles.wrapper},

this.state.items.length||this.state.loading?null:
_react2.default.createElement(_core.View,{style:{flex:1,alignItems:'center',justifyContent:'center'}},
_react2.default.createElement(_core.Image,{source:require('../img/icon-no-result.png'),style:{height:80,width:80}}),
_react2.default.createElement(_core.Text,{style:{color:'#777777',fontSize:14,marginTop:16}},'A\xFAn no has creado ningun evento a\xFAn.')),



_react2.default.createElement(_core.ListView,{
removeClippedSubviews:false,
dataSource:this.ds.cloneWithRows(this.state.items),
renderRow:function renderRow(data,rowId,index){return(

_react2.default.createElement(_core.View,{style:styles.card},
_react2.default.createElement(_core.Image,{style:styles.card_img,source:{uri:data.img}}),

_react2.default.createElement(_core.View,{style:styles.data},
_react2.default.createElement(_core.Text,{style:styles.data_title},data.name),
_react2.default.createElement(_core.Text,{style:styles.data_text},data.venue),

_react2.default.createElement(_core.Text,{style:styles.data_text},
(0,_moment2.default)(data.start_date).utc().format('DD'),' de\xA0',
(0,_i18n2.default)('months')[(0,_moment2.default)(data.start_date).utc().format('M')],'\xA0',
(0,_moment2.default)(data.start_date).utc().format('HH:mm'),' Hs.'),


_react2.default.createElement(_core.TouchableOpacity,{style:styles.data_next,onPress:_this2.props.navigator.screen('Validate',{event:data})},
_react2.default.createElement(_core.Text,{style:styles.data_next_text},'Admistrar evento')))));},






refreshControl:
_react2.default.createElement(_core.RefreshControl,{
refreshing:this.state.refreshing,
onRefresh:this.onRefresh})}),




_react2.default.createElement(_header2.default,{navigator:this.props.navigator,title:'Mis Eventos Organizados'})));


}}]);return MyEvents;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(MyEvents);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#f2f2f2',
paddingTop:_core.Platform.OS=='ios'?66:70},


card:{
borderRadius:5,
borderWidth:1,
borderColor:'#e9e9e9',
backgroundColor:'#ffffff',
marginLeft:24,
marginRight:24,
marginTop:16,
alignItems:'center'},


card_img:{
height:140,
width:_core.Dimensions.get('window').width-50,
borderRadius:5,
resizeMode:'cover'},



data:{
marginLeft:16,
marginRight:16,
marginBottom:16},


data_title:{
color:'#444444',
fontSize:22,
marginTop:12},


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