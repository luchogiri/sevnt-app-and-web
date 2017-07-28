Object.defineProperty(exports,"__esModule",{value:true});


var _express=require('express');var _express2=_interopRequireDefault(_express);
var _mongoose=require('mongoose');var _mongoose2=_interopRequireDefault(_mongoose);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





var router=_express2.default.Router();


router.get('/',function(req,res){

res.json({
data:'example'});


});exports.default=

router;