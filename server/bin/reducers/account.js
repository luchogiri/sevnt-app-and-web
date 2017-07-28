Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _account=require('../actions/account');var _account2=_interopRequireDefault(_account);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}


var AccountReducer=function AccountReducer()




{var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_account2.default.InitialState;var action=arguments[1];

switch(action.type){

case _account2.default.SAVE:
return _extends({},state,action.data);

case _account2.default.CLEAR:
return _account2.default.InitialState;

case _account2.default.ADD_FAVORITE:
return _extends({},state,{favorites:[].concat(_toConsumableArray(state.favorites),[action.data])});

default:
return state;}

};exports.default=

AccountReducer;