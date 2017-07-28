// @flow

import ENV from '../env';
import Logger from '../helpers/logger';
import Fetch from '../helpers/fetch';
// import moment from 'moment';

export default class Reservations {
  
  static Sync( id, token ) {
    return new Promise(async (resolve, reject) => {
      
      let res = {};
      let headers = { ...ENV.HEADERS, authorization: token };
      
      try {
        let req = await Fetch(ENV.API_PATH + '/reservations/' + id + '/sync' , { headers });
        res = await req.json();
      }
      catch (err) {
        Logger.log(err);
        return reject(err);
      }
      resolve(res);
    });
  }
  
  static Accredit( id, data, token ) {
    return new Promise(async (resolve, reject) => {
      
      let res = {};
      let body = JSON.stringify(data);
      let headers = { ...ENV.HEADERS, authorization: token };
      let method = 'POST';
      
      try {
        let req = await Fetch(ENV.API_PATH + '/reservations/' + id + '/accreditation' , { method, body, headers });
        res = await req.json();
      }
      catch (err) {
        Logger.log(err);
        return reject(err);
      }
      resolve(res);
    });
  }
}
