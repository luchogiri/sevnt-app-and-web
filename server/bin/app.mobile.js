Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');

var _store=require('./reducers/store');var _store2=_interopRequireDefault(_store);
var _navigation=require('./containers/navigation');var _navigation2=_interopRequireDefault(_navigation);

var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


console.disableYellowBox=true;
_reactNative.UIManager.setLayoutAnimationEnabledExperimental&&
_reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);var

Application=function(_Component){_inherits(Application,_Component);






function Application(){_classCallCheck(this,Application);var _this=_possibleConstructorReturn(this,(Application.__proto__||Object.getPrototypeOf(Application)).call(this));


_this.mounted=_this.received=false;
_this.storeDidLoad=_this.storeDidLoad.bind(_this);

_this.state={
loading:true,
store:(0,_store2.default)(_this.storeDidLoad)};return _this;

}_createClass(Application,[{key:'componentDidMount',value:function componentDidMount()

{
if(this.received)this.setState({loading:false});
this.mounted=true;
}},{key:'storeDidLoad',value:function storeDidLoad()

{
if(this.mounted)this.setState({loading:false});
this.received=true;
}},{key:'componentWillUpdate',value:function componentWillUpdate()

{
_reactNative.LayoutAnimation.configureNext(_reactNative.LayoutAnimation.Presets.easeInEaseOut);
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactRedux.Provider,{store:this.state.store},
_react2.default.createElement(_reactNative.Image,{style:styles.wrapper,source:require('./img/bg-main.jpg')},
_react2.default.createElement(_reactNative.StatusBar,{translucent:true,barStyle:'light-content',backgroundColor:'rgba(0,0,0,0.4)'}),
!this.state.loading?_react2.default.createElement(_navigation2.default,{ref:'nav'}):null)));



}}]);return Application;}(_react.Component);exports.default=Application;


var styles=_reactNative.StyleSheet.create({
wrapper:{
flex:1,
resizeMode:'stretch',
width:null,
height:null}});