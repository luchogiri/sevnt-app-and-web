

var _express=require('express');var _express2=_interopRequireDefault(_express);
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _morgan=require('morgan');var _morgan2=_interopRequireDefault(_morgan);
var _cookieParser=require('cookie-parser');var _cookieParser2=_interopRequireDefault(_cookieParser);
var _bodyParser=require('body-parser');var _bodyParser2=_interopRequireDefault(_bodyParser);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var app=(0,_express2.default)();

if(app.get('env')=='development'){
app.use((0,_morgan2.default)('dev'));
app.set('views',_path2.default.join(__dirname,'../server/views'));
}else

app.set('views',_path2.default.join(__dirname,'../views'));
app.set('view engine','pug');
app.use(_bodyParser2.default.json({limit:'50mb'}));
app.use(_bodyParser2.default.urlencoded({limit:'50mb',extended:true}));
app.use((0,_cookieParser2.default)());



app.use('/api',require('./routes/api').default);

if(app.get('env')=='development'){
app.use('/',_express2.default.static(_path2.default.join(__dirname,'../web')));
app.use('*',_express2.default.static(_path2.default.join(__dirname,'../web/index.html')));
}


app.use(function(req,res,next){
var err=new Error('Not Found');
err.status=404;
next(err);
});




if(app.get('env')==='development'){
app.use(function(err,req,res,next){
res.status(err.status||500);
res.render('error',{
message:err.message,
error:err});

});
}



app.use(function(err,req,res,next){
res.status(err.status||500);
res.render('error',{
message:err.message,
error:{}});

});

module.exports=app;