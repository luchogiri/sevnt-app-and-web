
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Logger from '../lib/helpers/logger';
import auth from '../lib/reducers/admin-auth';
import config from '../lib/reducers/config';
import events from '../lib/reducers/events';


export const Store = (onComplete: ?() => void) => {

  const store = createStore(
    combineReducers({ auth, config, events }),
    applyMiddleware(thunk, Logger.storeLogger())
  );

  return store;
};

export default Store;
