Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);

var _core=require('../components/core');

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _events=require('../actions/events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



Detail=function(_Component){_inherits(Detail,_Component);




function Detail(props){_classCallCheck(this,Detail);var _this=_possibleConstructorReturn(this,(Detail.__proto__||Object.getPrototypeOf(Detail)).call(this,
props));_this.



componentDidMount=function(){
_this.retrieveEvents();
};_this.


retrieveEvents=function(){
_this.props.
dispatch(_events2.default.Get({_id:_this.props.params.id})).
then(function(event){
_this.setState({event:event});
console.log(_this.state.event);
console.log(_this.state.event.activities[0].price.value);
});
};_this.state={event:{activities:[]}};return _this;}_createClass(Detail,[{key:'render',value:function render()


{

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},
_react2.default.createElement('div',{style:styles.scrollContainer},

_react2.default.createElement(_core.View,{style:styles.columns},
_react2.default.createElement(_core.View,{style:styles.colIzq},
_react2.default.createElement(_core.View,{style:styles.containerImgPrin},
_react2.default.createElement(_core.Image,{style:styles.imgPrincipal,source:{uri:this.state.event.img}})),

_react2.default.createElement(_core.View,{style:styles.socialLinks},
_react2.default.createElement(_core.Text,{style:styles.txtSocial},'Comparti este evento! '),
_react2.default.createElement(_core.TouchableOpacity,null,
_react2.default.createElement(_core.Image,{style:styles.icon_fb,source:require('../img/share_fb.png')})),

_react2.default.createElement(_core.TouchableOpacity,null,
_react2.default.createElement(_core.Image,{style:styles.icon_tw,source:require('../img/share_tw.png')}))),


_react2.default.createElement(_core.View,{style:styles.containerImgBanner},
_react2.default.createElement(_core.Image,{style:styles.imgBanner,source:require('../img/todel2.jpg')}))),


_react2.default.createElement(_core.View,{style:styles.colDer},
_react2.default.createElement(_core.Text,{style:styles.event_category},(0,_i18n2.default)(this.state.event.category)),
_react2.default.createElement(_core.Text,{style:styles.event_title},this.state.event.name),
_react2.default.createElement(_core.View,{style:styles.boxes},
_react2.default.createElement(_core.View,{style:styles.roundBoxHalf},
_react2.default.createElement(_core.View,{style:styles.elmnts},
_react2.default.createElement(_core.Image,{style:styles.icon,source:require('../img/icon-calendar-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.label},(0,_moment2.default)(this.state.event.start_date).format('DD'),' de ',(0,_i18n2.default)((0,_moment2.default)(this.state.event.start_date).format('MMMM'))))),


_react2.default.createElement(_core.View,{style:styles.roundBoxHalf},
_react2.default.createElement(_core.View,{style:styles.elmnts},
_react2.default.createElement(_core.Image,{style:styles.icon,source:require('../img/icon-date-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.label},(0,_moment2.default)(this.state.event.start_date).format('HH'),'hs.')))),




_react2.default.createElement(_core.View,{style:styles.boxes},
_react2.default.createElement(_core.View,{style:styles.roundBoxFull},
_react2.default.createElement(_core.View,{style:styles.elmnts},
_react2.default.createElement(_core.Image,{style:styles.icon,source:require('../img/icon-ticket-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.label},' ',this.state.event.activities.length?this.state.event.activities[0].price.value:null,' ')))),



_react2.default.createElement(_core.View,{style:styles.boxes},
_react2.default.createElement(_core.View,{style:styles.roundBoxFull},
_react2.default.createElement(_core.View,{style:styles.elmnts},
_react2.default.createElement(_core.Image,{style:styles.iconLoc,source:require('../img/icon-location-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.label},this.state.event.venue,', ',this.state.event.address,', ',this.state.event.city)))),



_react2.default.createElement(_core.View,{style:styles.boxes},
_react2.default.createElement(_core.View,{style:styles.roundBoxFull},
_react2.default.createElement(_core.View,{style:styles.elmnts},
_react2.default.createElement(_core.Image,{style:styles.icon,source:require('../img/icon-bus-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.label},this.state.event.bus_lines)))),



_react2.default.createElement(_core.View,{style:styles.boxes},
_react2.default.createElement(_core.View,{style:styles.roundBoxFull},
_react2.default.createElement(_core.View,{style:styles.elmnts},
_react2.default.createElement(_core.Image,{style:styles.iconTrain,source:require('../img/icon-train-color.png')}),
_react2.default.createElement(_core.Text,{style:styles.label},this.state.event.subway_lines)))),



_react2.default.createElement(_core.View,{style:styles.event_description},
_react2.default.createElement(_core.Text,{style:styles.text_event_description},
this.state.event.description)))))));











}}]);return Detail;}(_react.Component);



var Container=(0,_reactRedux.connect)(function(store){return store;})(Detail);exports.default=
Container;

var styles=_core.StyleSheet.create({
event_category:{fontSize:16,color:'#969696',fontWeight:700,textTransform:'uppercase',marginTop:20,marginLeft:10},
event_title:{fontSize:40,color:'#c50848',marginLeft:10},

elmnts:{flexDirection:'row'},
icon:{width:25,height:25,marginTop:12,marginLeft:20,marginRight:10},
iconLoc:{width:24,height:32,marginTop:8,marginLeft:20,marginRight:10},
iconTrain:{width:24,height:32,marginTop:8,marginLeft:20,marginRight:10},
label:{color:'#000000',flex:1,marginTop:15},

masInfo:{borderRadius:25,borderWidth:1,borderStyle:'solid',borderColor:'#d9d9d9',height:50,width:200},

boxes:{flexDirection:'row'},
roundBoxHalf:{marginTop:15,flex:0.5,borderRadius:25,borderWidth:1,borderStyle:'solid',borderColor:'#d9d9d9',height:50,marginRight:10,marginLeft:10},
roundBoxFull:{marginTop:15,flex:1,borderRadius:25,borderWidth:1,borderStyle:'solid',borderColor:'#d9d9d9',height:50,marginRight:10,marginLeft:10},

event_description:{marginTop:20,marginLeft:10,marginRight:10,marginBottom:20},
text_event_description:{color:'#8d8d8d',fontSize:16,lineHeight:1.5},

boxRelacionados:{flexDirection:'row'},
titleRelacionados:{flexDirection:'row'},
txtTitleRel:{color:'#cc0641',fontSize:20,marginLeft:10,marginBottom:10},
colRel:{flex:0.5},

socialLinks:{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:20,marginRight:10},
txtSocial:{color:'#a3a2a0'},
icon_fb:{width:30,height:30,marginLeft:5,marginRight:5},
icon_tw:{width:30,height:30,marginRight:5},

columns:{flexDirection:'row',backgroundColor:'#ffffff'},
colIzq:{width:340,minHeight:'600'},
colDer:{flex:1},

containerImgPrin:{flex:1},
imgPrincipal:{width:320,height:420,marginLeft:15},
containerImgBanner:{flex:1,marginTop:80},
imgBanner:{width:320,height:266,marginLeft:15},
scrollContainer:{
overflow:'scroll'},

wrapper:{}});