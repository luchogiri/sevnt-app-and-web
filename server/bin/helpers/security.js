Object.defineProperty(exports,"__esModule",{value:true});
var API_KEYS=exports.API_KEYS={

"5d67c23eb3b648a0884ae461":"ADMIN",
"2f3116f9bc709610655e3539":"MOBILE",
"1d45d76cc135012453e3961e":"WEB"};



var ALLOWED_PATHS=exports.ALLOWED_PATHS={

"WEB":['config'],
"MOBILE":['config']};



var Security=function Security(req,res,next){


return next();

var platform=API_KEYS[req.headers['x-apikey']];
var path=req.path.replace('/','').replace('/','');

if(platform=='ADMIN')return next();
if(ALLOWED_PATHS[platform]&&ALLOWED_PATHS[platform].indexOf(path)>-1)return next();else
return res.sendStatus(401);
};exports.default=

Security;