Object.defineProperty(exports,"__esModule",{value:true});

var _mongoose=require('mongoose');var _mongoose2=_interopRequireDefault(_mongoose);

var _events=require('./events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




var Reservation=new _mongoose.Schema({

event:_events2.default.schema,
account:{type:_mongoose2.default.Schema.ObjectId,ref:'Account'},

tickets:[{

name:String,
link:String,



price:{
currency:String,
value:Number},


first_name:String,
last_name:String,
document_number:String,
email:String,





accredited_at:Date}],


payment:{

card_type:String,
card_mask:String,
card_bank:String,
holder_name:String},


created_at:{type:Date,default:Date.now},
updated_at:{type:Date,default:Date.now},
published:{type:Boolean,default:false},
deleted:{type:Boolean,default:false}});exports.default=



_mongoose2.default.model('Reservation',Reservation);