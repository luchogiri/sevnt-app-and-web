Object.defineProperty(exports,"__esModule",{value:true});exports.Store=undefined;

var _redux=require('redux');
var _reduxPersist=require('redux-persist');
var _reduxThunk=require('redux-thunk');var _reduxThunk2=_interopRequireDefault(_reduxThunk);

var _storage=require('./storage');var _storage2=_interopRequireDefault(_storage);

var _index=require('./index');var reducers=_interopRequireWildcard(_index);
var _logger=require('../helpers/logger');var _logger2=_interopRequireDefault(_logger);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var Store=exports.Store=function Store(onComplete){

var store=(0,_redux.createStore)(
(0,_redux.combineReducers)(reducers),
(0,_redux.applyMiddleware)(_reduxThunk2.default,_logger2.default.storeLogger()),
(0,_reduxPersist.autoRehydrate)());



(0,_reduxPersist.persistStore)(store,_storage2.default,onComplete);
return store;
};exports.default=

Store;