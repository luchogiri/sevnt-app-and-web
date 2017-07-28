Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);

var _core=require('../components/core');

var _i18n=require('../helpers/i18n');var _i18n2=_interopRequireDefault(_i18n);
var _events=require('../actions/events');var _events2=_interopRequireDefault(_events);
var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);
var _header=require('../components/header');var _header2=_interopRequireDefault(_header);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Purchased=function(_Component){_inherits(Purchased,_Component);









function Purchased(props){_classCallCheck(this,Purchased);var _this=_possibleConstructorReturn(this,(Purchased.__proto__||Object.getPrototypeOf(Purchased)).call(this,
props));_this.





componentDidMount=function(){
!_this.props.account.token&&
setTimeout(function(){_this.props.navigator.push({screen:'Login'});},1500);
_this.retrieveEvents();
};_this.

retrieveEvents=function(){
return _this.props.dispatch(_events2.default.Retrieve());
};_this.

onRefresh=function(){
_this.setState({refreshing:true});
_this.retrieveEvents().then(function(){return _this.setState({refreshing:false});});
};_this.state={};_this.ds=new _core.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});return _this;}_createClass(Purchased,[{key:'render',value:function render()



{



return(
_react2.default.createElement(_core.View,{style:styles.wrapper},

_react2.default.createElement(_core.Text,{style:styles.titulo},'Purchased ',this.props.event.name),

_react2.default.createElement(_header2.default,{navigator:this.props.navigator,title:'Mis Compras'})));


}}]);return Purchased;}(_react.Component);


var Container=(0,_reactRedux.connect)(function(store){return store;})(Purchased);exports.default=
Container;


var styles=_core.StyleSheet.create({

wrapper:{
flex:1,
backgroundColor:'#ffffff',
paddingTop:_core.Platform.OS=='ios'?66:70},


titulo:{color:'#000000'}});