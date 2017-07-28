Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeDrawer=require('react-native-drawer');var _reactNativeDrawer2=_interopRequireDefault(_reactNativeDrawer);

var _containers=require('../containers');var Containers=_interopRequireWildcard(_containers);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


AppNavigation=function(_Component){_inherits(AppNavigation,_Component);












function AppNavigation(props){_classCallCheck(this,AppNavigation);var _this=_possibleConstructorReturn(this,(AppNavigation.__proto__||Object.getPrototypeOf(AppNavigation)).call(this,
props));
_this._handlers=[];
_this.handleBackButton=_this.handleBackButton.bind(_this);
_this.addBackButtonListener=_this.addBackButtonListener.bind(_this);
_this.removeBackButtonListener=_this.removeBackButtonListener.bind(_this);
_this.renderScene=_this.renderScene.bind(_this);
_this.closeDrawer=_this.closeDrawer.bind(_this);
_this.openDrawer=_this.openDrawer.bind(_this);
_this.getNavigator=_this.getNavigator.bind(_this);return _this;
}_createClass(AppNavigation,[{key:'openDrawer',value:function openDrawer()

{
this.refs.drawer.open();
}},{key:'closeDrawer',value:function closeDrawer()

{
this.refs.drawer.close();
}},{key:'getNavigator',value:function getNavigator()

{
return this.refs.navigator;
}},{key:'render',value:function render()


{
return(
_react2.default.createElement(_reactNativeDrawer2.default,{
ref:'drawer',
tapToClose:true,
openDrawerOffset:0.4,
content:_react2.default.createElement(Containers.Menu,{navigator:this.getNavigator,close:this.closeDrawer})},
_react2.default.createElement(_reactNative.Navigator,{
ref:'navigator',
style:Styles.container,
initialRoute:{screen:'Main'},
renderScene:this.renderScene,
configureScene:function configureScene(route){
if(route.screen=='Login')return _reactNative.Navigator.SceneConfigs.FloatFromBottom;
if(route.screen=='Onboarding')return _reactNative.Navigator.SceneConfigs.FloatFromBottom;
if(route.screen=='Thanks')return _extends({},_reactNative.Navigator.SceneConfigs.PushFromRight,{gestures:false});
return _reactNative.Navigator.SceneConfigs.PushFromRight;
}})));



}},{key:'renderScene',value:function renderScene(

route,navigator){
navigator.screen=function(screen){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return function(){return navigator.push(_extends({screen:screen},props));};};var
screen=route.screen,props=_objectWithoutProperties(route,['screen']);
var Component=Containers[screen];
return _react2.default.createElement(Component,_extends({navigator:navigator,openDrawer:this.openDrawer},props));
}},{key:'componentDidMount',value:function componentDidMount()




{_reactNative.BackAndroid.addEventListener('hardwareBackPress',this.handleBackButton);}},{key:'componentWillUnmount',value:function componentWillUnmount()
{_reactNative.BackAndroid.removeEventListener('hardwareBackPress',this.handleBackButton);}},{key:'getChildContext',value:function getChildContext()
{return{addBackButtonListener:this.addBackButtonListener,removeBackButtonListener:this.removeBackButtonListener};}},{key:'addBackButtonListener',value:function addBackButtonListener(
listener){this._handlers.push(listener);}},{key:'removeBackButtonListener',value:function removeBackButtonListener(
listener){this._handlers=this._handlers.filter(function(handler){return handler!==listener;});}},{key:'handleBackButton',value:function handleBackButton()
{for(var i=this._handlers.length-1;i>=0;i--){if(this._handlers[i]())return true;}if(this.refs.navigator&&this.refs.navigator.getCurrentRoutes().length>1){this.refs.navigator.pop();return true;}return false;}}]);return AppNavigation;}(_react.Component);



AppNavigation.childContextTypes={addBackButtonListener:_react2.default.PropTypes.func,removeBackButtonListener:_react2.default.PropTypes.func};exports.default=
AppNavigation;


var Styles=_reactNative.StyleSheet.create({

container:{
flex:1}});