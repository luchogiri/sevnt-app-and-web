Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _account=require('../services/account');var _account2=_interopRequireDefault(_account);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Account=function(){function Account(){_classCallCheck(this,Account);}_createClass(Account,null,[{key:'Login',value:function Login(


















data){var _this=this;
return function _callee(dispatch){var response;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
_account2.default.Login(data));case 2:response=_context.sent;
dispatch(Account.Save(response));case 4:case'end':return _context.stop();}}},null,_this);};

}},{key:'FBLogin',value:function FBLogin()

{var _this2=this;
return function _callee2(dispatch){var data,res;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(
_account2.default.FBLogin());case 2:_context2.next=4;return regeneratorRuntime.awrap(
_account2.default.FBInfo());case 4:data=_context2.sent;_context2.next=7;return regeneratorRuntime.awrap(
_account2.default.FBSignIn(data));case 7:res=_context2.sent;
dispatch(Account.Save(res));case 9:case'end':return _context2.stop();}}},null,_this2);};

}},{key:'FBLogout',value:function FBLogout()

{
_account2.default.FBLogout();
return{type:Account.CLEAR};
}},{key:'Register',value:function Register(

data){var _this3=this;
return function _callee3(dispatch){var response;return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regeneratorRuntime.awrap(
_account2.default.SignUp(data));case 2:response=_context3.sent;
dispatch(Account.Save(response));case 4:case'end':return _context3.stop();}}},null,_this3);};

}},{key:'Update',value:function Update(

data,token){var _this4=this;
return function _callee4(dispatch){var response;return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return regeneratorRuntime.awrap(
_account2.default.Update(data,token));case 2:response=_context4.sent;
dispatch(Account.Save(response));case 4:case'end':return _context4.stop();}}},null,_this4);};

}},{key:'Save',value:function Save(

data){
return{type:Account.SAVE,data:data};
}},{key:'Logout',value:function Logout()

{
return{type:Account.CLEAR};
}},{key:'RequestNewPassword',value:function RequestNewPassword(

data){var _this5=this;
return function _callee5(){return regeneratorRuntime.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return regeneratorRuntime.awrap(
_account2.default.RequestPassword(data));case 2:case'end':return _context5.stop();}}},null,_this5);};

}},{key:'RequestNewPassword',value:function RequestNewPassword(

data){var _this6=this;
return function _callee6(){return regeneratorRuntime.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return regeneratorRuntime.awrap(
_account2.default.RequestPassword(data));case 2:case'end':return _context6.stop();}}},null,_this6);};

}},{key:'UserInfo',value:function UserInfo(


token){var _this7=this;
return function _callee7(dispatch){var response;return regeneratorRuntime.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return regeneratorRuntime.awrap(
_account2.default.UserInfo(token));case 2:response=_context7.sent;
dispatch(Account.Save(response));case 4:case'end':return _context7.stop();}}},null,_this7);};

}},{key:'GetFavorites',value:function GetFavorites(

token){var _this8=this;
return function _callee8(dispatch){return regeneratorRuntime.async(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:_context8.next=2;return regeneratorRuntime.awrap(
_account2.default.GetFavorites(token));case 2:return _context8.abrupt('return',_context8.sent);case 3:case'end':return _context8.stop();}}},null,_this8);};


}},{key:'AddFavorite',value:function AddFavorite(

data,token){var _this9=this;
return function _callee9(dispatch){var response;return regeneratorRuntime.async(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:_context9.next=2;return regeneratorRuntime.awrap(
_account2.default.AddFavorite(data,token));case 2:response=_context9.sent;
dispatch(Account.Save({favorites:response}));case 4:case'end':return _context9.stop();}}},null,_this9);};

}},{key:'RemoveFavorite',value:function RemoveFavorite(

data,token){var _this10=this;
return function _callee10(dispatch){var response;return regeneratorRuntime.async(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:_context10.next=2;return regeneratorRuntime.awrap(
_account2.default.RemoveFavorite(data,token));case 2:response=_context10.sent;
dispatch(Account.Save({favorites:response}));case 4:case'end':return _context10.stop();}}},null,_this10);};

}},{key:'GetMyEvents',value:function GetMyEvents(

token){var _this11=this;
return function _callee11(dispatch){return regeneratorRuntime.async(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:_context11.next=2;return regeneratorRuntime.awrap(
_account2.default.GetMyEvents(token));case 2:return _context11.abrupt('return',_context11.sent);case 3:case'end':return _context11.stop();}}},null,_this11);};

}},{key:'GetMyPurchases',value:function GetMyPurchases(

token){var _this12=this;
return function _callee12(dispatch){return regeneratorRuntime.async(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:_context12.next=2;return regeneratorRuntime.awrap(
_account2.default.GetMyPurchases(token));case 2:return _context12.abrupt('return',_context12.sent);case 3:case'end':return _context12.stop();}}},null,_this12);};

}}]);return Account;}();Account.InitialState={registered:[],favorites:[]};Account.SAVE='app/account/save';Account.CLEAR='app/account/clear';Account.ADD_FAVORITE='app/account/add_favorite';exports.default=Account;