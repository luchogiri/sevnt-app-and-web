Object.defineProperty(exports,"__esModule",{value:true});

var _express=require('express');var _express2=_interopRequireDefault(_express);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);

var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);
var _auth=require('../helpers/auth');var _auth2=_interopRequireDefault(_auth);

var _events=require('../schemas/events');var _events2=_interopRequireDefault(_events);
var _accounts=require('../schemas/accounts');var _accounts2=_interopRequireDefault(_accounts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var router=_express2.default.Router();



router.get('/',function(req,res){

var now=_moment2.default.utc().startOf('day').toDate();
var query={start_date:{$gte:now}};

if(req.query.query)query.name=new RegExp(req.query.query,'i');
if(req.query.country)query.country=req.query.country;
if(req.query.state)query.state=req.query.state;
if(req.query.city)query.city=req.query.city;
if(req.query.category)query.category=req.query.category;



var offset=req.query.offset||0;
var limit=Math.floor(!isNaN(req.query.limit)&&req.query.limit)||20;
limit=limit<=50?limit:20;

Promise.all([

_events2.default.find(query).count(),
_events2.default.
find(query).
sort('start_date').
skip(offset).
limit(limit).
exec()]).

then(function(data){

res.json({
total:data[0],
items:data[1],
limit:limit,
offset:offset,
query:query});


},function(err){
console.log(err);
res.sendStatus(500);
});
});



router.get('/dump',function(req,res){
_events2.default.find().exec(function(err,data){
res.json(data);
});
});


router.post('/',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){(function(){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);



var model=new _events2.default(req.body);
model.author=decoded._id;
model.published=true;

model.save(function(err,model){

if(err){
console.log(err);
res.sendStatus(500);

}else{

_accounts2.default.
findOne({_id:decoded._id}).
exec(function(err,user){
if(err)throw err;else
{
if(user.events.indexOf(model._id)==-1)
user.events.push(model._id);

user.save(function(err){
if(err)console.log(err);
});
}
});

res.json(model);
}
});})();
}else


return res.status(403).send({success:false,msg:'No token provided.'});
});


router.get('/:id',function(req,res){
_events2.default.
findOne({_id:req.params.id}).
exec(function(err,model){

if(err){
console.log(err);
res.sendStatus(500);

}else{
res.json(model);
}
});
});


router.put('/:id',function(req,res){

_events2.default.
findOneAndUpdate({_id:req.params.id},req.body,{new:true}).
exec(function(err,model){

if(err){
console.log(err);
res.sendStatus(500);

}else{
res.json(model);
}
});
});


router.delete('/:id',function(req,res){
_events2.default.
findByIdAndRemove(req.params.id).
exec(function(err,response){
if(err){console.log(err);res.sendStatus(500);}else
res.sendStatus(200);
});
});exports.default=


router;