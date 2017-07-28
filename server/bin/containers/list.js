Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);

var _reactNative=require('react-native');
var _core=require('../components/core');

var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


List=function(_Component){_inherits(List,_Component);








function List(props){_classCallCheck(this,List);var _this=_possibleConstructorReturn(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,
props));

_this.state={refreshing:false,headerOpacity:0};
_this.ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});
_this.onRefresh=_this.onRefresh.bind(_this);
_this.onScroll=_this.onScroll.bind(_this);return _this;
}_createClass(List,[{key:'onRefresh',value:function onRefresh()

{var _this2=this;
this.setState({refreshing:true});
setTimeout(function(){
_this2.setState({refreshing:false});
},1500);
}},{key:'onScroll',value:function onScroll(

event){
var y=event.nativeEvent.contentOffset.y;
if(y<0)this.setState({headerOpacity:y/30*-1});else
if(y>130&&y<160)this.setState({headerOpacity:(y-130)/30});else
if(y>160)this.setState({headerOpacity:1});else
this.setState({headerOpacity:0});
}},{key:'render',value:function render()


{var _this3=this;
return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement(_reactNative.ListView,{
onScroll:this.onScroll,
dataSource:this.ds.cloneWithRows(this.props.events.items),
renderRow:function renderRow(data,rowId,index){return(
_react2.default.createElement(_core.View,{style:styles.list__row},
_react2.default.createElement(_core.Image,{style:styles.list__row__img,source:{uri:data.img}}),
_react2.default.createElement(_core.TouchableOpacity,{style:styles.item,onPress:function onPress(){return _this3.props.navigator.push({screen:'Detail',data:data});}},

_react2.default.createElement(_core.View,{style:styles.item__date},
_react2.default.createElement(_core.Text,{style:styles.item__date__month},(0,_i18n2.default)((0,_moment2.default)(data.start_date).format('MMM'))),
_react2.default.createElement(_core.Text,{style:styles.item__date__day},(0,_moment2.default)(data.start_date).format('DD'))),


_react2.default.createElement(_core.View,{style:styles.item__info},
_react2.default.createElement(_core.View,{style:styles.info__category},
_react2.default.createElement(_core.Text,{style:styles.info__category__title},(0,_i18n2.default)(data.category)),
_react2.default.createElement(_core.Image,{style:styles.info__category__like,source:require('../img/icon-like-empty.png')})),


_react2.default.createElement(_core.Text,{style:styles.info__title},
data.name)))));},






refreshControl:
_react2.default.createElement(_reactNative.RefreshControl,{
refreshing:this.state.refreshing,
onRefresh:this.onRefresh,
tintColor:'#ffffff'})}),




_react2.default.createElement(_header2.default,{openDrawer:this.props.openDrawer,opacity:this.state.headerOpacity})));


}}]);return List;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(List);exports.default=
Container;



var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
paddingTop:_core.Platform.OS=='ios'?56:60},


list:{},



list__row:{
height:190},


list__row__img:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
resizeMode:'cover',
width:null,
height:null},


item:{
flex:1,
backgroundColor:'#00000066'},


item__date:{
height:56,
width:50,
justifyContent:'flex-end',
alignSelf:'flex-end',
alignItems:'center'},

item__date__month:{
fontSize:14,
lineHeight:14,
color:'#ffffff'},

item__date__day:{
fontSize:27,
lineHeight:27,
color:'#ffffff'},


item__info:{
flex:1,
justifyContent:'flex-end',
paddingBottom:10,
paddingLeft:20},


info__category:{
flexDirection:'row',
alignItems:'center'},

info__category__title:{
color:'#ffffff',
fontSize:14,
marginRight:4},


info__title:{
color:'#ffffff',
fontSize:34,
lineHeight:34,
fontWeight:'300'}});