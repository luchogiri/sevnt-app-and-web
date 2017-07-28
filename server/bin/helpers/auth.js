Object.defineProperty(exports,"__esModule",{value:true});exports.Token=exports.Secret=undefined;
var _passport=require('passport');var _passport2=_interopRequireDefault(_passport);
var _passportJwt=require('passport-jwt');

var _accounts=require('../schemas/accounts');var _accounts2=_interopRequireDefault(_accounts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var Secret=exports.Secret='s3vnts3cr3tk3y';


_passport2.default.use(
new _passportJwt.Strategy({
secretOrKey:Secret,
jwtFromRequest:_passportJwt.ExtractJwt.fromAuthHeader()},

function(jwt_payload,done){

_accounts2.default.findOne({_id:jwt_payload._id},function(err,user){

if(err)return done(err,false);
if(user)done(null,user);else
done(null,false);
});
}));




var Token=exports.Token=function Token(headers){
if(headers&&headers.authorization){
var parted=headers.authorization.split(' ');
if(parted.length===2)return parted[1];else
return null;
}else
return null;
};


var Auth=function Auth(){
return _passport2.default.authenticate('jwt',{session:false});
};exports.default=

Auth;