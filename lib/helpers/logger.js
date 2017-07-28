// @flow

import createLogger from 'redux-logger';

const __DEV__ = __DEV__ || true;
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default class Logger {

  id: string;

  constructor(id: string) {

    this.id = id;
  }

  log(...args: any[]) {
    console.log( ...args );
  }
  
  static log(...args: any[]) {
    console.log( ...args );
  }

  static storeLogger() {
    return createLogger({
      predicate: (getState, action) => isDebuggingInChrome,
      collapsed: true,
      duration: true,
    });
  }
}
