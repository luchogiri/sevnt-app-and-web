Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _core=require('../components/core');

var _config=require('../actions/config');var _config2=_interopRequireDefault(_config);

var _home=require('./home');var _home2=_interopRequireDefault(_home);
var _menu=require('./menu');var _menu2=_interopRequireDefault(_menu);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Main=function(_Component){_inherits(Main,_Component);







function Main(props){_classCallCheck(this,Main);var _this=_possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).call(this,
props));_this.








retrieveConfig=function(){
_this.setState({complete:false,error:false});
_this.props.
dispatch(_config2.default.Retrieve()).
then(_this.onConfigReceived,_this.onConfigError);
};_this.

onConfigReceived=function(){
_this.setState({complete:true,error:false});
};_this.

onConfigError=function(){
_this.setState({complete:false,error:true});
};_this.state={complete:false,error:false};return _this;}_createClass(Main,[{key:'componentDidMount',value:function componentDidMount(){this.retrieveConfig();}},{key:'componentWillUpdate',value:function componentWillUpdate()


{
_core.Platform.OS!='web'?
_core.LayoutAnimation.configureNext(_core.LayoutAnimation.Presets.easeInEaseOut):null;
}},{key:'render',value:function render()

{

var content=null;

if(this.state.error){
content=_react2.default.createElement(_core.View,{style:styles.content},
_react2.default.createElement(_core.Text,{style:styles.loading__text},'Ha ocurrido un problema de conexi\xF3n'),
_react2.default.createElement(_core.TouchableOpacity,{onPress:this.retrieveConfig},
_react2.default.createElement(_core.Text,{style:styles.loading__text},'reintentar')));


}else





if(this.state.complete){
content=_core.Platform.OS=='web'?
_react2.default.createElement(_core.View,{style:styles.container},
_react2.default.createElement(_menu2.default,{style:styles.containerMenu}),
_react2.default.createElement(_core.View,{style:styles.containerHome},
this.props.children)):


_react2.default.createElement(_home2.default,{navigator:this.props.navigator,openDrawer:this.props.openDrawer});
}else

{
content=_react2.default.createElement(_core.View,{style:styles.content},
_react2.default.createElement(_core.Text,{style:styles.loading__text},'Cargando...'));

}

return(
_react2.default.createElement(_core.View,{style:styles.wrapper},content));

}}]);return Main;}(_react.Component);




var Container=(0,_reactRedux.connect)(function(store){return store.config;})(Main);exports.default=
Container;

var styles=_core.StyleSheet.create({

wrapper:{
flex:1},


content:{
flex:1,
justifyContent:'flex-end'},



containerMenu:{},


containerHome:{

flex:1},


container:{
flex:1,
flexDirection:'row'},


loading__text:{
color:'#ffffff',
fontSize:16,
marginTop:8,
textAlign:'center',
backgroundColor:'transparent'}});