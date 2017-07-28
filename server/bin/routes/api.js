Object.defineProperty(exports,"__esModule",{value:true});

var _express=require('express');var _express2=_interopRequireDefault(_express);
var _mongoose=require('mongoose');var _mongoose2=_interopRequireDefault(_mongoose);

var _passport=require('passport');var _passport2=_interopRequireDefault(_passport);

var _cors=require('../helpers/cors');var _cors2=_interopRequireDefault(_cors);
var _security=require('../helpers/security');var _security2=_interopRequireDefault(_security);
var _modelRoute=require('./model-route');var _modelRoute2=_interopRequireDefault(_modelRoute);

var _config=require('./config');var _config2=_interopRequireDefault(_config);

var _countries=require('../schemas/countries');var _countries2=_interopRequireDefault(_countries);
var _states=require('../schemas/states');var _states2=_interopRequireDefault(_states);
var _cities=require('../schemas/cities');var _cities2=_interopRequireDefault(_cities);
var _categories=require('../schemas/categories');var _categories2=_interopRequireDefault(_categories);

var _auth=require('./auth');var _auth2=_interopRequireDefault(_auth);
var _accounts=require('./accounts');var _accounts2=_interopRequireDefault(_accounts);
var _events=require('./events');var _events2=_interopRequireDefault(_events);
var _reservations=require('./reservations');var _reservations2=_interopRequireDefault(_reservations);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_mongoose2.default.Promise=global.Promise;

_mongoose2.default.connect('mongodb://localhost/sevnt');

var router=_express2.default.Router();

router.use(_security2.default,_cors2.default,_passport2.default.initialize());

router.use('/config',_config2.default);
router.use('/countries',(0,_modelRoute2.default)(_countries2.default));
router.use('/states',(0,_modelRoute2.default)(_states2.default));
router.use('/cities',(0,_modelRoute2.default)(_cities2.default));
router.use('/categories',(0,_modelRoute2.default)(_categories2.default));

router.use('/auth',_auth2.default);
router.use('/accounts',_accounts2.default);
router.use('/events',_events2.default);
router.use('/reservations',_reservations2.default);exports.default=

router;