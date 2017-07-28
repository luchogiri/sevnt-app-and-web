// @flow

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import passport from 'passport';

import CORS from '../helpers/cors';
import Security from '../helpers/security';
import ModelRoute from './model-route';

import Config from './config';

import Countries from '../schemas/countries';
import States from '../schemas/states';
import Cities from '../schemas/cities';
import Categories from '../schemas/categories';

import AuthRouter from './auth';
import AccountsRouter from './accounts';
import EventsRouter from './events';
import ReservationsRouter from './reservations';

mongoose.connect('mongodb://localhost/sevnt');

const router = express.Router();

router.use( Security, CORS, passport.initialize() );

router.use('/config', Config);
router.use('/countries', ModelRoute( Countries ));
router.use('/states', ModelRoute( States ));
router.use('/cities', ModelRoute( Cities ));
router.use('/categories', ModelRoute( Categories ));

router.use('/auth', AuthRouter );
router.use('/accounts', AccountsRouter);
router.use('/events', EventsRouter);
router.use('/reservations', ReservationsRouter);

export default router;
