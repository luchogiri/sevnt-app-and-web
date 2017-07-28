Object.defineProperty(exports,"__esModule",{value:true});

var CORS=function CORS(req,res,next){
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","X-Requested-With, X-ApiKey, content-type");
next();
};exports.default=

CORS;