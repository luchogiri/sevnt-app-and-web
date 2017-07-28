Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);

var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var












TabbarItem=function(_Component){_inherits(TabbarItem,_Component);function TabbarItem(){_classCallCheck(this,TabbarItem);return _possibleConstructorReturn(this,(TabbarItem.__proto__||Object.getPrototypeOf(TabbarItem)).apply(this,arguments));}_createClass(TabbarItem,[{key:'render',value:function render()



{
return this.props.children;
}}]);return TabbarItem;}(_react.Component);var



Tabbar=function(_Component2){_inherits(Tabbar,_Component2);








function Tabbar(props){_classCallCheck(this,Tabbar);var _this2=_possibleConstructorReturn(this,(Tabbar.__proto__||Object.getPrototypeOf(Tabbar)).call(this,
props));

_this2.state={
itemSelected:0,
itemOpacity:new _reactNative.Animated.Value(0)};


_this2.onTabSelected=_this2.onTabSelected.bind(_this2);return _this2;
}_createClass(Tabbar,[{key:'componentDidMount',value:function componentDidMount()

{
_reactNative.Animated.timing(this.state.itemOpacity,{toValue:1,duration:50}).start();
}},{key:'onTabSelected',value:function onTabSelected(


tab,callback){var _this3=this;
return function(){
if(_this3.state.itemSelected==tab)return;
_reactNative.Animated.timing(_this3.state.itemOpacity,{toValue:0,duration:50}).start();
setTimeout(function(){
_this3.setState({itemSelected:tab});
_reactNative.Animated.timing(_this3.state.itemOpacity,{toValue:1,duration:50}).start();
if(callback)callback();
},50);
};
}},{key:'render',value:function render()





{var _this4=this;
return(
_react2.default.createElement(_reactNative.View,{style:styles.wrapper},

_react2.default.createElement(_reactNative.View,{style:styles.content},
this.props.children.map(function(item,idx){
if(idx==_this4.state.itemSelected)
return(
_react2.default.createElement(_reactNative.Animated.View,{
key:idx,
style:[styles.tab_screen,{opacity:_this4.state.itemOpacity}]},
item.props.children));


})),


_react2.default.createElement(_reactNative.View,{style:styles.tabbar},
this.props.children.map(function(item,idx){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
key:idx,
style:[styles.tabbar_item,
_this4.state.itemSelected!=idx?null:styles.tabbar_item_selected],
onPress:_this4.onTabSelected(idx,item.props.onPress)},


_react2.default.createElement(_reactNative.Text,{style:[styles.tabbar_item_text,
_this4.state.itemSelected!=idx?null:
styles.tabbar_item_text_selected]},
item.props.title)));}))));






}}],[{key:'Item',get:function get(){return TabbarItem;}}]);return Tabbar;}(_react.Component);exports.default=


Tabbar;

var styles=_reactNative.StyleSheet.create({

wrapper:{
flex:1},


content:{
flex:1},


tabbar:{
height:50,
flexDirection:'row',
borderTopWidth:1,
borderTopColor:'#c1c1c1',
backgroundColor:'#ffffff'},


tabbar_item:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#ffffff'},

tabbar_item_text:{
fontSize:14,
color:'#808080'},


tabbar_item_selected:{
backgroundColor:'#ffffff'},

tabbar_item_text_selected:{
color:'#0a60fe'},


tab_screen:{
flex:1}});