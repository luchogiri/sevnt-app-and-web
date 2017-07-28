Object.defineProperty(exports,"__esModule",{value:true});
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _auth=require('../helpers/auth');var _auth2=_interopRequireDefault(_auth);

var _reservations=require('../schemas/reservations');var _reservations2=_interopRequireDefault(_reservations);
var _accounts=require('../schemas/accounts');var _accounts2=_interopRequireDefault(_accounts);
var _events=require('../schemas/events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var router=_express2.default.Router();



router.get('/',function(req,res){

var query={};
var offset=req.query.offset||0;
var limit=Math.floor(!isNaN(req.query.limit)&&req.query.limit)||20;
limit=limit<=50?limit:20;

Promise.all([

_reservations2.default.find(query).count(),
_reservations2.default.
find(query).
sort('-created_at').
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


router.post('/',(0,_auth2.default)(),function(req,res){

var token=(0,_auth.Token)(req.headers);

if(token){

var decoded=_jwtSimple2.default.decode(token,_auth.Secret);

_accounts2.default.
findOne({_id:decoded._id},'-__v -published -deleted -created_at -updated_at -password').
exec(function(err,user){

if(err)throw err;
if(!user)
return res.status(403).send({success:false,msg:'Authentication failed. User not found.'});else

{(function(){

var data=req.body;


if(!data.tickets.length)
res.json({success:false,msg:'No tickets given.'});

var reservation=new _reservations2.default(req.body);
reservation.account=user._id;
reservation.save(function(err){
if(err)
return res.json({success:false,msg:'Reservation failed.',err:err});

if(user.reservations.indexOf(reservation._id)==-1){
user.reservations.push(reservation._id);
user.save(function(){});
}

_events2.default.
findOne({_id:reservation.event._id}).
exec(function(errEv,ev){
reservation.tickets.forEach(function(t){
ev.activities.forEach(function(a){
if(a._id==t._id)a.sold++;
});
});
});

res.json(reservation);
});})();
}
});
}else


return res.status(403).send({success:false,msg:'No token provided.'});

});


router.get('/:id',function(req,res){
_reservations2.default.
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

_reservations2.default.
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
_reservations2.default.
findByIdAndRemove(req.params.id).
exec(function(err,response){
if(err){console.log(err);res.sendStatus(500);}else
res.sendStatus(200);
});
});



router.get('/:id/sync',(0,_auth2.default)(),function(req,res){

_reservations2.default.
find({'event._id':req.params.id}).
exec(function(err,reservations){

if(err){console.log(err);res.sendStatus(500);}
res.json(reservations);
});
});


router.post('/:id/accreditation',(0,_auth2.default)(),function(req,res){

_reservations2.default.
find({'event._id':req.params.id,'tickets.document_number':req.body.document_number}).
exec(function(err,reservations){

if(err){console.log(err);res.sendStatus(500);}
if(!reservations.length)return res.status(403).send({success:false,msg:'Unauthorized'});
var authorized=false;
var theTicket=void 0;

try{
reservations.forEach(function(reservation){
reservation.tickets.forEach(function(ticket){
if(!authorized&&!ticket.accredited_at){
authorized=true;
theTicket=ticket;
ticket.accredited_at=(0,_moment2.default)().format('YYYY-MM-DDTHH:mm:ss.000Z');
reservation.save();
}
});
});

if(!authorized)return res.json({success:false,msg:'Unauthorized'});else
return res.json({success:true,data:theTicket});
}

catch(err){
console.log(err);
}
});
});exports.default=

router;