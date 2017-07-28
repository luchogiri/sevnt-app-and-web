Object.defineProperty(exports,"__esModule",{value:true});

var _mongoose=require('mongoose');var _mongoose2=_interopRequireDefault(_mongoose);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var City=new _mongoose.Schema({

name:String,
state:String,
country:String,

created_at:Date,
updated_at:Date,
published:Boolean,
deleted:Boolean});exports.default=



_mongoose2.default.model('City',City);