Object.defineProperty(exports,"__esModule",{value:true});
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);
var _auth=require('../helpers/auth');

var _accounts=require('../schemas/accounts');var _accounts2=_interopRequireDefault(_accounts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var router=_express2.default.Router();


router.post('/signup',function(req,res){

if(!req.body.email||!req.body.password)
res.json({success:false,msg:'No email and password given.'});else

{(function(){
var user=new _accounts2.default(req.body);

user.save(function(err){
if(err)
return res.json({success:false,msg:'Username already exists.'});

var token=_jwtSimple2.default.encode({_id:user._id,email:user.email},_auth.Secret);
var userObj=user.toObject();
userObj.token='JWT '+token;
delete userObj.password;
res.json(userObj);
});})();
}
});


router.post('/signin',function(req,res){

_accounts2.default.
findOne({email:req.body.email},'-__v -published -deleted -created_at -updated_at').
exec(function(err,user){

if(err)throw err;

if(!user){
res.json({success:false,msg:'Authentication failed. User not found.'});

}else{

user.comparePassword(req.body.password,function(err,isMatch){

if(isMatch&&!err){

var token=_jwtSimple2.default.encode({_id:user._id,email:user.email},_auth.Secret);
var userObj=user.toObject();
userObj.token='JWT '+token;
delete userObj.password;
res.json(userObj);

}else{
res.json({success:false,msg:'Authentication failed. Wrong password.'});
}
});
}
});
});


router.post('/fb',function(req,res){

if(!req.body.id&&!req.body.email)
res.json({success:false,msg:'No fbid or email given.'});else

{(function(){
req.body.email=req.body.email||'fb'+req.body.id+'@tmpsevnt.com';
req.body.password='fbtmppass';
var user=new _accounts2.default(req.body);

user.save(function(err){



if(err){
_accounts2.default.
findOne({email:req.body.email},'-__v -published -deleted -created_at -updated_at').
exec(function(errn,u){
if(errn)throw errn;
if(!u)res.json({success:false,msg:'Authentication failed. User not found.'});else
receivedUser(u,res);
});
}else

{
receivedUser(user,res);
}
});})();
}

function receivedUser(user,res){
var token=_jwtSimple2.default.encode({_id:user._id,email:user.email},_auth.Secret);
var userObj=user.toObject();
userObj.token='JWT '+token;
delete userObj.password;
res.json(userObj);
}

});


router.post('/requestPassword',function(req,res){

_accounts2.default.
findOne({email:req.body.email},'-__v -published -deleted -created_at -updated_at').
exec(function(err,user){

if(err)throw err;

if(!user)
res.json({success:false,msg:'User not found.'});else


res.json({success:true});

});

});exports.default=


router;