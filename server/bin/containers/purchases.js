Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _core=require('../components/core');

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


MyPurchases=function(_Component){_inherits(MyPurchases,_Component);







function MyPurchases(props){_classCallCheck(this,MyPurchases);var _this=_possibleConstructorReturn(this,(MyPurchases.__proto__||Object.getPrototypeOf(MyPurchases)).call(this,
props));_this.





componentDidMount=function(){
!_this.props.account.token&&
setTimeout(function(){_this.props.navigator.push({screen:'Login'});},1500);
_this.retrieveEvents();
};_this.

retrieveEvents=function(){
_this.setState({loading:true,refreshing:true});
_this.props.
dispatch(_account2.default.GetMyPurchases(_this.props.account.token)).
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
};_this.state={refreshing:false,items:[]};_this.ds=new _core.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});return _this;}_createClass(MyPurchases,[{key:'render',value:function render()

{var _this2=this;

return(

_react2.default.createElement(_core.View,{style:styles.wrapper},

this.state.items.length||this.state.loading?null:
_react2.default.createElement(_core.View,{style:{flex:1,alignItems:'center',justifyContent:'center'}},
_react2.default.createElement(_core.Image,{source:require('../img/icon-no-result.png'),style:{height:80,width:80}}),
_react2.default.createElement(_core.Text,{style:{color:'#777777',fontSize:14,marginTop:16}},'A\xFAn no has adquirido entradas para ver.')),



_react2.default.createElement(_core.ListView,{
removeClippedSubviews:false,
dataSource:this.ds.cloneWithRows([].concat(_toConsumableArray(this.state.items)).reverse()),
renderRow:function renderRow(data,rowId,index){return(

_react2.default.createElement(_core.View,{style:styles.card},
_react2.default.createElement(_core.Image,{style:styles.card_img,source:{uri:data.event.img}}),

_react2.default.createElement(_core.View,{style:styles.data},

_react2.default.createElement(_core.Text,{style:styles.data_title},data.event.name),
_react2.default.createElement(_core.Text,{style:styles.data_text},data.event.venue),

_react2.default.createElement(_core.Text,{style:styles.data_text},'Fecha: ',
(0,_moment2.default)(data.event.start_date).utc().format('D'),' de\xA0',
(0,_i18n2.default)('months')[(0,_moment2.default)(data.event.start_date).utc().format('M')],'\xA0',
(0,_moment2.default)(data.event.start_date).utc().format('HH:mm'),' Hs.'),


_react2.default.createElement(_core.Text,{style:styles.data_text},'Adquirida:\xA0',

(0,_moment2.default)(data.created_at).utc().format('D'),' de\xA0',
(0,_i18n2.default)('months')[(0,_moment2.default)(data.created_at).utc().format('M')],'.'),


_react2.default.createElement(_core.View,{style:styles.tickets},
data.tickets.map(function(t,idx){return(
_react2.default.createElement(_core.View,{style:styles.ticket,key:idx},
_react2.default.createElement(_core.Text,{style:[styles.ticket_text,{fontWeight:'600'}]},'Ticket: ',t.name,' ',t.price.value==0?'Gratis':'a $ '+t.price.value),
_react2.default.createElement(_core.Text,{style:styles.ticket_text},t.first_name,' ',t.last_name,' (',t.email,')')));})),




_react2.default.createElement(_core.TouchableOpacity,{style:styles.data_next,onPress:_this2.props.navigator.screen('Detail',{event:data.event})},
_react2.default.createElement(_core.Text,{style:styles.data_next_text},'Ver Detalle Evento')))));},






refreshControl:
_react2.default.createElement(_core.RefreshControl,{
refreshing:this.state.refreshing,
onRefresh:this.onRefresh})}),




_react2.default.createElement(_header2.default,{navigator:this.props.navigator,title:'Mis Compras'})));


}}]);return MyPurchases;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(MyPurchases);exports.default=
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
marginLeft:16,
marginRight:16,
marginTop:16},


card_img:{
height:100,
width:_core.Dimensions.get('window').width-34,
borderRadius:5,
resizeMode:'cover'},



data:{
paddingLeft:16,
paddingRight:16,
paddingBottom:16},


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
marginTop:16,
alignSelf:'center'},


data_next_text:{
fontSize:17,
fontWeight:'400',
textAlign:'center'},


tickets:{
marginTop:16},


ticket:{
padding:8,
backgroundColor:'#f5f5f5',
marginBottom:12},


ticket_text:{
color:'#666666',
fontSize:15}});