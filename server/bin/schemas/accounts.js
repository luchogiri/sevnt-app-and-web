Object.defineProperty(exports,"__esModule",{value:true});
var _mongoose=require('mongoose');var _mongoose2=_interopRequireDefault(_mongoose);
var _bcrypt=require('bcrypt');var _bcrypt2=_interopRequireDefault(_bcrypt);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




var Account=new _mongoose.Schema({

first_name:String,
last_name:String,


email:{type:String,unique:true,required:true},
password:{type:String,required:true},

picture:String,
birthdate:Date,

country:String,
state:String,
city:String,

favorites:[{type:_mongoose.Schema.ObjectId,ref:'Event'}],
events:[{type:_mongoose.Schema.ObjectId,ref:'Event'}],
reservations:[{type:_mongoose.Schema.ObjectId,ref:'Reservation'}],

created_at:Date,
updated_at:Date,
published:Boolean,
deleted:Boolean});









Account.pre('save',function(next){

var user=this;
if(user.isModified('password')||user.isNew){

_bcrypt2.default.genSalt(10,function(err,salt){

if(err)return next(err);
_bcrypt2.default.hash(user.password,salt,function(err,hash){

if(err)return next(err);
user.password=hash;
next();
});
});
}else


return next();
});


Account.methods.comparePassword=function(passw,cb){
_bcrypt2.default.compare(passw,this.password,function(err,isMatch){
if(err)return cb(err);
cb(null,isMatch);
});
};exports.default=

_mongoose2.default.model('Account',Account);