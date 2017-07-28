Object.defineProperty(exports,"__esModule",{value:true});

var _mongoose=require('mongoose');

var Activity=new _mongoose.Schema({

name:String,
link:String,
start_date:Date,
end_date:Date,

stock:Number,
sold:Number,

price:{
currency:String,
value:Number},


created_at:{type:Date,default:Date.now},
updated_at:{type:Date,default:Date.now},
published:{type:Boolean,default:false},
deleted:{type:Boolean,default:false}});exports.default=



Activity;