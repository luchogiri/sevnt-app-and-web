Object.defineProperty(exports,"__esModule",{value:true});

var _mongoose=require('mongoose');var _mongoose2=_interopRequireDefault(_mongoose);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var Venue=new _mongoose.Schema({

name:String,
country:String,
state:String,
city:String,
address:String,
picture:String,
geo:{lat:Number,lng:Number},

created_at:Date,
updated_at:Date,
published:Boolean,
deleted:Boolean});exports.default=



_mongoose2.default.model('Venue',Venue);