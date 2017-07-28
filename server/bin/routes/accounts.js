
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);
var _auth=require('../helpers/auth');var _auth2=_interopRequireDefault(_auth);

var _accounts=require('../schemas/accounts');var _accounts2=_interopRequireDefault(_accounts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}

var router=_express2.default.Router();


router.get('/',function(req,res){
_accounts2.default.find().exec(function(err,data){
res.json(data);
});
});


router.get('/me',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOne({_id:decoded._id},'-__v -published -deleted -created_at -updated_at -password').

lean().
exec(function(err,user){

if(err)throw err;
if(!user)
return res.status(403).send({success:false,msg:'Authentication failed. User not found.'});else

res.json(user);
});
}else


return res.status(403).send({success:false,msg:'No token provided.'});

});


router.put('/me',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOneAndUpdate({_id:decoded._id},req.body,{new:true}).

lean().
exec(function(err,user){

if(err)throw err;
if(!user)
return res.status(403).json({success:false,msg:'Authentication failed. User not found.'});else

res.json(user);
});
}else


return res.status(403).send({success:false,msg:'No token provided.'});

});



router.get('/me/favorites',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOne({_id:decoded._id},'-__v -published -deleted -created_at -updated_at -password').
populate('favorites').
lean().
exec(function(err,user){
if(err)throw err;
if(!user)
return res.status(403).json({success:false,msg:'Authentication failed. User not found.'});else

res.json(user.favorites);
});
}else


return res.status(403).send({success:false,msg:'No token provided.'});

});


router.post('/me/favorites',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOne({_id:decoded._id},'-__v -published -deleted -created_at -updated_at -password').

exec(function(err,user){
if(err)throw err;
if(!user)
return res.status(403).json({success:false,msg:'Authentication failed. User not found.'});else

{
if(user.favorites.indexOf(req.body._id)==-1)
user.favorites.push(req.body._id);

user.save(function(err){
if(err)throw err;
res.json(user.favorites);
});
}
});
}else


return res.status(403).json({success:false,msg:'No token provided.'});

});



router.delete('/me/favorites',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOne({_id:decoded._id},'-__v -published -deleted -created_at -updated_at -password').

exec(function(err,user){
if(err)throw err;
if(!user)
return res.status(403).json({success:false,msg:'Authentication failed. User not found.'});else

{

var idx=user.favorites.indexOf(req.body._id);
if(idx!=-1)
user.favorites=[].concat(_toConsumableArray(user.favorites.slice(0,idx)),_toConsumableArray(user.favorites.slice(idx+1)));

user.save(function(err){
if(err)throw err;
res.json(user.favorites);
});
}
});
}else


return res.status(403).json({success:false,msg:'No token provided.'});

});


router.get('/me/events',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOne({_id:decoded._id},'-__v -published -deleted -created_at -updated_at -password').
populate('events').
lean().
exec(function(err,user){
if(err)throw err;
if(!user)
return res.status(403).json({success:false,msg:'Authentication failed. User not found.'});else

res.json(user.events);
});
}else


return res.status(403).send({success:false,msg:'No token provided.'});

});


router.get('/me/reservations',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOne({_id:decoded._id},'-__v -published -deleted -created_at -updated_at -password').
populate('reservations').
lean().
exec(function(err,user){
if(err)throw err;
if(!user)
return res.status(403).json({success:false,msg:'Authentication failed. User not found.'});else

res.json(user.reservations);
});
}else


return res.status(403).send({success:false,msg:'No token provided.'});

});


router.get('/:id',function(req,res){

_accounts2.default.
findOne({_id:req.params.id}).
populate('favorites reservations').
exec(function(err,model){
if(err)console.log(err);else

res.json(model);
});
});












router.delete('/:id',function(req,res){

_accounts2.default.
findByIdAndRemove(req.params.id).
exec(function(err,response){
if(err){res.sendStatus(500);}else
res.sendStatus(200);
});
});


module.exports=router;