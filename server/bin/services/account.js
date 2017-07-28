Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _env=require('../env');var _env2=_interopRequireDefault(_env);
var _logger=require('../helpers/logger');var _logger2=_interopRequireDefault(_logger);
var _fetch=require('../helpers/fetch');var _fetch2=_interopRequireDefault(_fetch);


var _core=require('../components/core');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var _LoginManager$GraphRe=

{
LoginManager:{setLoginBehavior:function setLoginBehavior(){},logInWithReadPermissions:function logInWithReadPermissions(){}},
GraphRequest:function GraphRequest(){},
GraphRequestManager:function GraphRequestManager(){}},LoginManager=_LoginManager$GraphRe.LoginManager,GraphRequest=_LoginManager$GraphRe.GraphRequest,GraphRequestManager=_LoginManager$GraphRe.GraphRequestManager;var


AccountService=function(){function AccountService(){_classCallCheck(this,AccountService);}_createClass(AccountService,null,[{key:'Login',value:function Login(

data){var _this=this;

return new Promise(function _callee(resolve,reject){var res,method,body,req;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
res=void 0;
method='POST';
body=JSON.stringify(data);_context.prev=3;_context.next=6;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/auth/signin',{method:method,body:body,headers:_env2.default.HEADERS}));case 6:req=_context.sent;_context.next=9;return regeneratorRuntime.awrap(
req.json());case 9:res=_context.sent;_context.next=15;break;case 12:_context.prev=12;_context.t0=_context['catch'](3);return _context.abrupt('return',



reject(_context.t0));case 15:if(!(


res.success==false&&!res.token)){_context.next=17;break;}return _context.abrupt('return',reject(res));case 17:
resolve(res);case 18:case'end':return _context.stop();}}},null,_this,[[3,12]]);});

}},{key:'FBLogin',value:function FBLogin()


{var _this2=this;
return new Promise(function _callee2(resolve,reject){var res;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:

_logger2.default.log('[account] Login called');
res=void 0;_context2.prev=2;

LoginManager.setLoginBehavior(_core.Platform.OS=='android'?'native_with_fallback':'native');_context2.next=6;return regeneratorRuntime.awrap(
LoginManager.logInWithReadPermissions(['public_profile','email']));case 6:res=_context2.sent;_context2.next=13;break;case 9:_context2.prev=9;_context2.t0=_context2['catch'](2);



_logger2.default.log('[account] Login error');return _context2.abrupt('return',
reject(_context2.t0));case 13:if(!


res.isCancelled){_context2.next=16;break;}
_logger2.default.log('[account] Login cancelled');return _context2.abrupt('return',
reject(res));case 16:


_logger2.default.log('[account] Logged in');
resolve(res);case 18:case'end':return _context2.stop();}}},null,_this2,[[2,9]]);});

}},{key:'FBInfo',value:function FBInfo()


{var _this3=this;
return new Promise(function _callee3(resolve,reject){var infoRequest;return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:

_logger2.default.log('[account] Getinfo called');
infoRequest=new GraphRequest('/me?fields=id,first_name,last_name,picture.type(large),email',null,

function(error,result){
_logger2.default.log('[account] Info received'+(error?' with error':''));
if(error)return reject(error);var
id=result.id,first_name=result.first_name,last_name=result.last_name,email=result.email,_result$picture=result.picture,picture=_result$picture===undefined?{}:_result$picture;
resolve({id:id,first_name:first_name,last_name:last_name,email:email,picture:(picture.data||{}).url});
});

new GraphRequestManager().addRequest(infoRequest).start();case 3:case'end':return _context3.stop();}}},null,_this3);});

}},{key:'FBLogout',value:function FBLogout()


{
_logger2.default.log('[account] Logout');
return LoginManager.logOut();
}},{key:'FBSignIn',value:function FBSignIn(

data){var _this4=this;

return new Promise(function _callee4(resolve,reject){var res,method,body,req;return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:
res=void 0;
method='POST';
body=JSON.stringify(data);
_logger2.default.log(body);_context4.prev=4;_context4.next=7;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/auth/fb',{method:method,body:body,headers:_env2.default.HEADERS}));case 7:req=_context4.sent;_context4.next=10;return regeneratorRuntime.awrap(
req.json());case 10:res=_context4.sent;_context4.next=16;break;case 13:_context4.prev=13;_context4.t0=_context4['catch'](4);return _context4.abrupt('return',



reject(_context4.t0));case 16:if(!(


res.success==false&&!res.token)){_context4.next=18;break;}return _context4.abrupt('return',reject(res));case 18:
resolve(res);case 19:case'end':return _context4.stop();}}},null,_this4,[[4,13]]);});

}},{key:'SignUp',value:function SignUp(

data){var _this5=this;

return new Promise(function _callee5(resolve,reject){var res,method,body,req;return regeneratorRuntime.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:
res=void 0;
method='POST';
body=JSON.stringify(data);_context5.prev=3;_context5.next=6;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/auth/signup',{method:method,body:body,headers:_env2.default.HEADERS}));case 6:req=_context5.sent;_context5.next=9;return regeneratorRuntime.awrap(
req.json());case 9:res=_context5.sent;_context5.next=15;break;case 12:_context5.prev=12;_context5.t0=_context5['catch'](3);return _context5.abrupt('return',



reject(_context5.t0));case 15:if(!(


res.success==false&&!res.token)){_context5.next=17;break;}return _context5.abrupt('return',reject(res));case 17:
resolve(res);case 18:case'end':return _context5.stop();}}},null,_this5,[[3,12]]);});

}},{key:'RequestPassword',value:function RequestPassword(


data){var _this6=this;

return new Promise(function _callee6(resolve,reject){var res,method,body,req;return regeneratorRuntime.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:
res=void 0;
method='POST';
body=JSON.stringify(data);_context6.prev=3;_context6.next=6;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/auth/requestPassword',{method:method,body:body,headers:_env2.default.HEADERS}));case 6:req=_context6.sent;_context6.next=9;return regeneratorRuntime.awrap(
req.json());case 9:res=_context6.sent;_context6.next=15;break;case 12:_context6.prev=12;_context6.t0=_context6['catch'](3);return _context6.abrupt('return',



reject(_context6.t0));case 15:if(!(


res.success==false)){_context6.next=17;break;}return _context6.abrupt('return',reject(res));case 17:
resolve(res);case 18:case'end':return _context6.stop();}}},null,_this6,[[3,12]]);});

}},{key:'UserInfo',value:function UserInfo(


token){var _this7=this;

return new Promise(function _callee7(resolve,reject){var res,headers,req;return regeneratorRuntime.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:
res=void 0;
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context7.prev=2;_context7.next=5;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/accounts/me',{headers:headers}));case 5:req=_context7.sent;_context7.next=8;return regeneratorRuntime.awrap(
req.json());case 8:res=_context7.sent;_context7.next=14;break;case 11:_context7.prev=11;_context7.t0=_context7['catch'](2);return _context7.abrupt('return',



reject(_context7.t0));case 14:if(!(


res.success==false)){_context7.next=16;break;}return _context7.abrupt('return',reject(res));case 16:
resolve(res);case 17:case'end':return _context7.stop();}}},null,_this7,[[2,11]]);});

}},{key:'Update',value:function Update(

data,token){var _this8=this;

return new Promise(function _callee8(resolve,reject){var res,method,body,headers,req;return regeneratorRuntime.async(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:
res=void 0;
method='PUT';
body=JSON.stringify(data);
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context8.prev=4;_context8.next=7;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/accounts/me',{method:method,body:body,headers:headers}));case 7:req=_context8.sent;_context8.next=10;return regeneratorRuntime.awrap(
req.json());case 10:res=_context8.sent;_context8.next=16;break;case 13:_context8.prev=13;_context8.t0=_context8['catch'](4);return _context8.abrupt('return',



reject(_context8.t0));case 16:if(!(


res.success==false)){_context8.next=18;break;}return _context8.abrupt('return',reject(res));case 18:
resolve(res);case 19:case'end':return _context8.stop();}}},null,_this8,[[4,13]]);});

}},{key:'GetFavorites',value:function GetFavorites(


token){var _this9=this;

return new Promise(function _callee9(resolve,reject){var res,headers,req;return regeneratorRuntime.async(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:
res=void 0;
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context9.prev=2;_context9.next=5;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/accounts/me/favorites',{headers:headers}));case 5:req=_context9.sent;_context9.next=8;return regeneratorRuntime.awrap(
req.json());case 8:res=_context9.sent;_context9.next=14;break;case 11:_context9.prev=11;_context9.t0=_context9['catch'](2);return _context9.abrupt('return',



reject(_context9.t0));case 14:if(!(


res.success==false)){_context9.next=16;break;}return _context9.abrupt('return',reject(res));case 16:
resolve(res);case 17:case'end':return _context9.stop();}}},null,_this9,[[2,11]]);});

}},{key:'AddFavorite',value:function AddFavorite(


data,token){var _this10=this;

return new Promise(function _callee10(resolve,reject){var res,method,body,headers,req;return regeneratorRuntime.async(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:
res=void 0;
method='POST';
body=JSON.stringify({_id:data});
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context10.prev=4;_context10.next=7;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/accounts/me/favorites',{method:method,body:body,headers:headers}));case 7:req=_context10.sent;_context10.next=10;return regeneratorRuntime.awrap(
req.json());case 10:res=_context10.sent;_context10.next=16;break;case 13:_context10.prev=13;_context10.t0=_context10['catch'](4);return _context10.abrupt('return',



reject(_context10.t0));case 16:if(!(


res.success==false)){_context10.next=18;break;}return _context10.abrupt('return',reject(res));case 18:
resolve(res);case 19:case'end':return _context10.stop();}}},null,_this10,[[4,13]]);});

}},{key:'RemoveFavorite',value:function RemoveFavorite(


data,token){var _this11=this;

return new Promise(function _callee11(resolve,reject){var res,method,body,headers,req;return regeneratorRuntime.async(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:
res=void 0;
method='DELETE';
body=JSON.stringify({_id:data});
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context11.prev=4;_context11.next=7;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/accounts/me/favorites',{method:method,body:body,headers:headers}));case 7:req=_context11.sent;_context11.next=10;return regeneratorRuntime.awrap(
req.json());case 10:res=_context11.sent;_context11.next=16;break;case 13:_context11.prev=13;_context11.t0=_context11['catch'](4);return _context11.abrupt('return',



reject(_context11.t0));case 16:if(!(


res.success==false)){_context11.next=18;break;}return _context11.abrupt('return',reject(res));case 18:
resolve(res);case 19:case'end':return _context11.stop();}}},null,_this11,[[4,13]]);});

}},{key:'GetMyEvents',value:function GetMyEvents(


token){var _this12=this;

return new Promise(function _callee12(resolve,reject){var res,headers,req;return regeneratorRuntime.async(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:
res=void 0;
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context12.prev=2;_context12.next=5;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/accounts/me/events',{headers:headers}));case 5:req=_context12.sent;_context12.next=8;return regeneratorRuntime.awrap(
req.json());case 8:res=_context12.sent;_context12.next=14;break;case 11:_context12.prev=11;_context12.t0=_context12['catch'](2);return _context12.abrupt('return',



reject(_context12.t0));case 14:if(!(


res.success==false)){_context12.next=16;break;}return _context12.abrupt('return',reject(res));case 16:
resolve(res);case 17:case'end':return _context12.stop();}}},null,_this12,[[2,11]]);});

}},{key:'GetMyPurchases',value:function GetMyPurchases(

token){var _this13=this;

return new Promise(function _callee13(resolve,reject){var res,headers,req;return regeneratorRuntime.async(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:
res=void 0;
headers=_extends({},_env2.default.HEADERS,{authorization:token});_context13.prev=2;_context13.next=5;return regeneratorRuntime.awrap(


(0,_fetch2.default)(_env2.default.API_PATH+'/accounts/me/reservations',{headers:headers}));case 5:req=_context13.sent;_context13.next=8;return regeneratorRuntime.awrap(
req.json());case 8:res=_context13.sent;_context13.next=14;break;case 11:_context13.prev=11;_context13.t0=_context13['catch'](2);return _context13.abrupt('return',



reject(_context13.t0));case 14:if(!(


res.success==false)){_context13.next=16;break;}return _context13.abrupt('return',reject(res));case 16:
resolve(res);case 17:case'end':return _context13.stop();}}},null,_this13,[[2,11]]);});

}}]);return AccountService;}();exports.default=AccountService;