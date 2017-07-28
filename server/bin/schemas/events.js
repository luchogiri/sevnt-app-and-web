Object.defineProperty(exports,"__esModule",{value:true});

var _mongoose=require('mongoose');var _mongoose2=_interopRequireDefault(_mongoose);

var _activities=require('./activities');var _activities2=_interopRequireDefault(_activities);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var Event=new _mongoose.Schema({

name:String,
category:String,

author:{type:_mongoose2.default.Schema.ObjectId,ref:'Account'},
organizer:String,

venue:String,
country:String,
state:String,
city:String,
address:String,

start_date:Date,
end_date:Date,

contact_email:String,
contact_phone:String,
link:String,
img:String,

bus_lines:String,
subway_lines:String,
description:String,

tags:[String],

activities:[_activities2.default],

social:{
facebook:String,
twitter:String,
instagram:String,
youtube:String,
web:String},



weight:{type:Number,default:0},

created_at:{type:Date,default:Date.now},
updated_at:{type:Date,default:Date.now},
published:{type:Boolean,default:false},
deleted:{type:Boolean,default:false}});exports.default=



_mongoose2.default.model('Event',Event);