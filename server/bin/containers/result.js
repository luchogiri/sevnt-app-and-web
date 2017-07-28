Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);

var _core=require('../components/core');

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _events=require('../actions/events');var _events2=_interopRequireDefault(_events);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Result=function(_Component){_inherits(Result,_Component);







function Result(props){_classCallCheck(this,Result);var _this=_possibleConstructorReturn(this,(Result.__proto__||Object.getPrototypeOf(Result)).call(this,
props));_this.





componentDidMount=function(){
_this.retrieveEvents();
};_this.

retrieveEvents=function(){
_this.props.
dispatch(_events2.default.Get(_extends({},_this.props.data))).
then(_this.onEventsRetrieved,_this.onEventsError);
};_this.

onEventsRetrieved=function(events){
_this.setState({events:events,refreshing:false});
};_this.

onEventsError=function(err){

_this.setState({refreshing:false});
};_this.

onRefresh=function(){
_this.setState({refreshing:true});
_this.retrieveEvents().then(function(){return _this.setState({refreshing:false});});
};_this.state={refreshing:false,events:{items:[]}};_this.ds=new _core.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});return _this;}_createClass(Result,[{key:'render',value:function render()


{var _this2=this;
return(
_react2.default.createElement(_core.Image,{style:styles.wrapper,source:require('../img/bg-main.jpg')},

this.state.events.items.length||this.state.loading?null:
_react2.default.createElement(_core.View,{style:{flex:1,alignItems:'center',justifyContent:'center'}},
_react2.default.createElement(_core.Image,{source:require('../img/icon-no-result.png'),style:{height:80,width:80}}),
_react2.default.createElement(_core.Text,{style:{fontSize:14,marginTop:16}},'No encontramos resultados'),
_react2.default.createElement(_core.Text,{style:{fontSize:14,marginTop:2}},'para tu b\xFAsqueda.')),


this.state.loading?null:
_react2.default.createElement(_core.ListView,{
removeClippedSubviews:false,
dataSource:this.ds.cloneWithRows(this.state.events.items),
renderRow:function renderRow(data,rowId,index){return(
_react2.default.createElement(_core.View,{style:styles.event},

_react2.default.createElement(_core.Image,{style:styles.event_img,source:{uri:data.img}}),
_react2.default.createElement(_core.TouchableOpacity,{style:styles.event_wrapper,onPress:_this2.props.navigator.screen('Detail',{event:data})},

_react2.default.createElement(_core.View,{style:styles.event_date},
_react2.default.createElement(_core.Text,{style:styles.event_date_month},(0,_i18n2.default)((0,_moment2.default)(data.start_date).format('MMM'))),
_react2.default.createElement(_core.Text,{style:styles.event_date_day},(0,_moment2.default)(data.start_date).format('DD'))),


_react2.default.createElement(_core.View,{style:styles.event_info},
_react2.default.createElement(_core.View,{style:styles.event_info_cat},
_react2.default.createElement(_core.Text,{style:styles.event_info_cat_title},(0,_i18n2.default)(data.category).toUpperCase()),

_this2.props.account.favorites.indexOf(data._id)==-1?null:
_react2.default.createElement(_core.Image,{source:require('../img/icon-like-empty.png')})),



_react2.default.createElement(_core.Text,{style:styles.event_title},
data.name)))));},






refreshControl:
_react2.default.createElement(_core.RefreshControl,{
refreshing:this.state.refreshing,
onRefresh:this.onRefresh,
tintColor:'#ffffff'})}),




_react2.default.createElement(_header2.default,{title:this.props.data.query||(0,_i18n2.default)(this.props.data.category),navigator:this.props.navigator})));


}}]);return Result;}(_react.Component);



var Container=(0,_reactRedux.connect)(function(store){return store;})(Result);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
height:null,
width:null,
resizeMode:'stretch',
paddingTop:_core.Platform.OS=='ios'?66:_core.Platform.Version>17?70:46},


list:{},



event:{
height:190},


event_img:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
resizeMode:'cover',
width:null,
height:null},


event_wrapper:{
flex:1,
backgroundColor:'#00000088'},


event_date:{
height:56,
width:50,
justifyContent:'flex-end',
alignSelf:'flex-end',
alignItems:'center'},


event_date_month:{
fontSize:14,
lineHeight:14,
color:'#ffffff'},

event_date_day:{
fontSize:27,
lineHeight:27,
color:'#ffffff'},


event_info:{
flex:1,
justifyContent:'flex-end',
paddingBottom:12,
paddingLeft:20},


event_info_cat:{
flexDirection:'row',
alignItems:'center'},

event_info_cat_title:{
color:'#ffffff',
fontSize:14,
marginRight:4},


event_title:{
color:'#ffffff',
fontSize:34,
lineHeight:34,
fontWeight:'300'}});