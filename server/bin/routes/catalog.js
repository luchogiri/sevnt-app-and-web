Object.defineProperty(exports,"__esModule",{value:true});

var _express=require('express');var _express2=_interopRequireDefault(_express);

var _cities=require('../schemas/cities');var _cities2=_interopRequireDefault(_cities);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var router=_express2.default.Router();

router.get('/',function(req,res){

_cities2.default.
find({},'-_id -__v -published -deleted -created_at -updated_at').
exec(function(err,data){

var states={};
var statesAux={};
var countries={};
var response={};

data.map(function(item){

states[item.state]=states[item.state]||[];
statesAux[item.state]=statesAux[item.state]||[];
statesAux[item.state].push(item);
states[item.state].push(item.name);
});


Object.keys(statesAux).map(function(state){

states[state].sort();
countries[statesAux[state][0].country]=countries[statesAux[state][0].country]||{};
countries[statesAux[state][0].country][state]=states[state];
});

response=Object.keys(countries).map(function(country){
return countries[country];
});

res.json({countries:countries});
});
});exports.default=

router;