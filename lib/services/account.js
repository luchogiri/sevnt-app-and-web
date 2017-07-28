// @flow

import ENV from '../env';
import Logger from '../helpers/logger';
import Fetch from '../helpers/fetch';

import { LoginManager, GraphRequest, GraphRequestManager } from '../helpers/fbsdk';
import { Platform } from '../components/core';

export default class AccountService {

  static Login(data) {

    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'POST';
      let body = JSON.stringify(data);

      try {
        let req = await Fetch( ENV.API_PATH + '/auth/signin', { method, body, headers: ENV.HEADERS } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false && !res.token) return reject(res);
      resolve(res);
    })
  }


  static FBLogin() {
    return new Promise(async(resolve, reject) => {

      Logger.log('[account] Login called');
      let res;
      try {
        LoginManager.setLoginBehavior(Platform.OS == 'android' ? 'native_with_fallback':'native');
        res = await LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      }

      catch (err) {
        Logger.log('[account] Login error');
        return reject(err);
      }

      if (res.isCancelled) {
        Logger.log('[account] Login cancelled');
        return reject(res);
      }

      Logger.log('[account] Logged in');
      resolve(res);
    });
  }


  static FBInfo() {
    return new Promise(async(resolve, reject) => {

      Logger.log('[account] Getinfo called');
      const infoRequest = new GraphRequest('/me?fields=id,first_name,last_name,picture.type(large),email', null,

        (error: ?Object, result: ?Object) => {
          Logger.log('[account] Info received' + (error? ' with error': ''));
          if (error) return reject(error);
          const { id, first_name, last_name, email, picture = {} } = result;
          resolve({ id, first_name, last_name, email, picture: (picture.data || {}).url });
        });

      new GraphRequestManager().addRequest(infoRequest).start();
    });
  }


  static FBLogout() {
    Logger.log('[account] Logout');
    return LoginManager.logOut();
  }

  static FBSignIn(data) {

    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'POST';
      let body = JSON.stringify(data);
      Logger.log(body);

      try {
        let req = await Fetch( ENV.API_PATH + '/auth/fb', { method, body, headers: ENV.HEADERS } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false && !res.token) return reject(res);
      resolve(res);
    })
  }

  static SignUp(data) {

    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'POST';
      let body = JSON.stringify(data);

      try {
        let req = await Fetch( ENV.API_PATH + '/auth/signup', { method, body, headers: ENV.HEADERS } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false && !res.token) return reject(res);
      resolve(res);
    })
  }


  static RequestPassword(data) {

    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'POST';
      let body = JSON.stringify(data);

      try {
        let req = await Fetch( ENV.API_PATH + '/auth/requestPassword', { method, body, headers: ENV.HEADERS } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }


  static UserInfo(token) {

    return new Promise(async (resolve,reject) => {
      let res;
      let headers = { ...ENV.HEADERS, authorization: token };

      try {
        let req = await Fetch( ENV.API_PATH + '/accounts/me', { headers });
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }

  static Update(data, token) {

    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'PUT';
      let body = JSON.stringify(data);
      let headers = { ...ENV.HEADERS, authorization: token };

      try {
        let req = await Fetch( ENV.API_PATH + '/accounts/me', { method, body, headers } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }


  static GetFavorites(token) {

    return new Promise(async (resolve, reject) => {
      let res;
      let headers = { ...ENV.HEADERS, authorization: token };

      try {
        let req = await Fetch( ENV.API_PATH + '/accounts/me/favorites', { headers } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }


  static AddFavorite(data, token) {

    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'POST';
      let body = JSON.stringify({ _id: data });
      let headers = { ...ENV.HEADERS, authorization: token };

      try {
        let req = await Fetch( ENV.API_PATH + '/accounts/me/favorites', { method, body, headers } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }


  static RemoveFavorite(data, token) {

    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'DELETE';
      let body = JSON.stringify({ _id: data });
      let headers = { ...ENV.HEADERS, authorization: token };

      try {
        let req = await Fetch( ENV.API_PATH + '/accounts/me/favorites', { method, body, headers } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }


  static GetMyEvents(token) {

    return new Promise(async (resolve, reject) => {
      let res;
      let headers = { ...ENV.HEADERS, authorization: token };

      try {
        let req = await Fetch( ENV.API_PATH + '/accounts/me/events', { headers } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }

  static GetMyPurchases(token) {

    return new Promise(async (resolve, reject) => {
      let res;
      let headers = { ...ENV.HEADERS, authorization: token };

      try {
        let req = await Fetch( ENV.API_PATH + '/accounts/me/reservations', { headers } );
        res = await req.json();
      }

      catch(error){
        return reject(error);
      }

      if (res.success == false) return reject(res);
      resolve(res);
    })
  }
}
