Object.defineProperty(exports,"__esModule",{value:true});

var _express=require('express');var _express2=_interopRequireDefault(_express);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




var ModelRouter=function ModelRouter(Model){

var router=_express2.default.Router();
if(!Model)return router;



router.get('/',function(req,res){
Model.find().exec(function(err,data){
res.json(data);
});
});


router.post('/',function(req,res){
var model=new Model(req.body);
model.save(function(err,model){
if(err){
console.log(err);
}else{
res.json(model);
}
});
});


router.get('/:id',function(req,res){
Model.
findOne({_id:req.params.id}).
exec(function(err,model){
if(err){
console.log(err);
}else{
res.json(model);
}
});
});


router.put('/:id',function(req,res){
Model.
findOneAndUpdate({_id:req.params.id},req.body,{new:true}).
exec(function(err,model){
if(err){
console.log(err);
}else{
res.json(model);
}
});
});


router.delete('/:id',function(req,res){
Model.
findByIdAndRemove(req.params.id).
exec(function(err,response){
if(err){res.sendStatus(500);}else
res.sendStatus(200);
});
});

return router;
};exports.default=

ModelRouter;