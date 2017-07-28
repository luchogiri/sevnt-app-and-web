Object.defineProperty(exports,"__esModule",{value:true});exports.Store=undefined;

var _redux=require('redux');
var _reduxStorage=require('redux-storage');
var _reduxStorageEngineReactnativeasyncstorage=require('redux-storage-engine-reactnativeasyncstorage');var _reduxStorageEngineReactnativeasyncstorage2=_interopRequireDefault(_reduxStorageEngineReactnativeasyncstorage);
var _reduxThunk=require('redux-thunk');var _reduxThunk2=_interopRequireDefault(_reduxThunk);

var _reducers=require('../reducers');var reducers=_interopRequireWildcard(_reducers);
var _logger=require('../helpers/logger');var _logger2=_interopRequireDefault(_logger);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var Store=exports.Store=function Store(onComplete){

var engine=(0,_reduxStorageEngineReactnativeasyncstorage2.default)('@app:data');

var store=(0,_redux.createStore)(
(0,_reduxStorage.reducer)((0,_redux.combineReducers)(reducers)),
(0,_redux.applyMiddleware)(_reduxThunk2.default,(0,_reduxStorage.createMiddleware)(engine),_logger2.default.storeLogger()));


(0,_reduxStorage.createLoader)(engine)(store).done(onComplete);
return store;
};exports.default=

Store;