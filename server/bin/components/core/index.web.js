Object.defineProperty(exports,"__esModule",{value:true});exports.StyleSheet=exports.Dimensions=exports.Platform=exports.Button=exports.Image=exports.TouchableOpacity=exports.TextInline=exports.Text=exports.ScrollView=exports.View=undefined;var _view=require('./view');Object.defineProperty(exports,'View',{enumerable:true,get:function get(){return _interopRequireDefault(_view).


default;}});Object.defineProperty(exports,'ScrollView',{enumerable:true,get:function get(){return _interopRequireDefault(_view).
default;}});var _text=require('./text');Object.defineProperty(exports,'Text',{enumerable:true,get:function get(){return _interopRequireDefault(_text).
default;}});var _textInline=require('./text-inline');Object.defineProperty(exports,'TextInline',{enumerable:true,get:function get(){return _interopRequireDefault(_textInline).
default;}});var _touchable=require('./touchable');Object.defineProperty(exports,'TouchableOpacity',{enumerable:true,get:function get(){return _interopRequireDefault(_touchable).
default;}});var _image=require('./image');Object.defineProperty(exports,'Image',{enumerable:true,get:function get(){return _interopRequireDefault(_image).
default;}});var _button=require('./button');Object.defineProperty(exports,'Button',{enumerable:true,get:function get(){return _interopRequireDefault(_button).
default;}});var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var Platform=exports.Platform={OS:'web'};
var Dimensions=exports.Dimensions={get:function get(){return{width:0,height:0};}};
var StyleSheet=exports.StyleSheet={create:function create(styles){return styles;}};