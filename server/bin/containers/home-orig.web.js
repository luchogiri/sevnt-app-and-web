Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);

var _core=require('../components/core');

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _events=require('../actions/events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



Home=function(_Component){_inherits(Home,_Component);




function Home(props){_classCallCheck(this,Home);var _this=_possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).call(this,
props));_this.





componentDidMount=function(){


_this.retrieveEvents();
};_this.


retrieveEvents=function(){
return _this.props.dispatch(_events2.default.Retrieve());
};_this.


onRefresh=function(){
_this.setState({refreshing:true});
_this.retrieveEvents().then(function(){return _this.setState({refreshing:false});});
};_this.state={refreshing:false};return _this;}_createClass(Home,[{key:'render',value:function render()


{

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement('div',{style:styles.scrollContainer},
_react2.default.createElement(_core.View,{style:styles.imageContainer}),







_react2.default.createElement(_core.Text,{style:styles.tituloDestacadosMes},'Destacados del mes'),

_react2.default.createElement(_core.View,{style:styles.containerBanner},
_react2.default.createElement(_core.Image,{style:styles.banner728,source:require('../img/728x90_banner.jpg')})),



_react2.default.createElement(_core.View,{style:styles.list}),










































_react2.default.createElement(_core.View,{style:styles.white_box},
_react2.default.createElement('div',null,
_react2.default.createElement(_core.Text,{style:styles.upcomingTitle},'Upcoming Events'),
_react2.default.createElement(_core.View,{style:styles.list2},

this.props.events.items.map(function(item,index){
console.log("index: "+index);

return(
_react2.default.createElement(_core.View,{style:styles.listitem2,key:item._id},
_react2.default.createElement(_core.Image,{style:styles.event_img2,source:{uri:item.img}}),
_react2.default.createElement(_core.View,{style:styles.event_text2},
_react2.default.createElement(_core.Text,{style:styles.event_title2},
item.name),

_react2.default.createElement(_core.Text,{style:styles.event_date2},
(0,_moment2.default)(item.start_date).format('DD'),' de ',(0,_i18n2.default)((0,_moment2.default)(item.start_date).format('MMMM')))),


_react2.default.createElement(_core.TouchableOpacity,{style:styles.btn},_react2.default.createElement(_core.Text,{style:styles.btnText},'Ver'))));



})))))));

























































}}]);return Home;}(_react.Component);



var Container=(0,_reactRedux.connect)(function(store){return store;})(Home);exports.default=
Container;

var styles=_core.StyleSheet.create({
banner_img:{height:50,width:500},
containerBanner:{alignItems:'center',marginTop:20,marginBottom:20},
banner728:{width:728,height:90},
upcomingTitle:{fontSize:22,color:'#ff0000',marginTop:10,marginBottom:10,marginLeft:10},
scrollContainer:{
overflow:'scroll'},

wrapper:{},








list:{
flexDirection:'row'},

list2:{
flexDirection:'row'},


imageContainer:{
height:450,
position:'relative'},


tituloDestacadosMes:{textTransform:'uppercase',textAlign:'center',marginTop:20,marginBottom:20},

categoria:{position:'absolute',top:260,left:40,zIndex:999,color:'#f1cc1d',fontSize:18},
titulo:{position:'absolute',top:280,left:40,zIndex:999,fontSize:48},
fecha:{position:'absolute',top:330,left:40,zIndex:999,fontSize:16},

event_big_img:{
flex:1},


white_box:{
backgroundColor:'#ffffff',flex:1,flexDirection:'row',marginTop:0,paddingTop:30,zIndex:-1},


listitem:{
minHeight:260,minWidth:340,flex:1,marginLeft:20,marginRight:20,position:'relative',alignItems:'center',marginBottom:20},

event_text:{marginTop:100,justifyContent:'center'},
event_title:{textAlign:'center',fontSize:22,marginBottom:5},
event_date:{textAlign:'center'},
event_img:{position:'absolute',top:0,left:0,width:340,height:250,zIndex:-1},

listitem2:{
minHeight:360,minWidth:340,flex:1,marginLeft:20,marginRight:20,position:'relative',alignItems:'center',marginBottom:20},

event_text2:{marginTop:140,justifyContent:'center'},
event_title2:{textAlign:'center',color:'#ffffff',zIndex:10,fontSize:22,marginBottom:5},
event_date2:{textAlign:'center',color:'#ffffff',zIndex:10},
event_img2:{position:'absolute',top:0,left:0,width:340,height:360},

btn:{},
btnText:{borderWidth:1,borderColor:'#ffffff',borderRadius:10,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,textAlign:'center',color:'#ffffff',zIndex:10}});