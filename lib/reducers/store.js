// @flow

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk';

import storageOptions from './storage';

import * as reducers from './index';
import Logger from '../helpers/logger';


export const Store = (onComplete: ?() => void) => {

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk, Logger.storeLogger()),
    autoRehydrate()
  );

  // onComplete()
  persistStore(store, storageOptions, onComplete);
  return store;
};

export default Store;
