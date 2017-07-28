// @flow

import ENV from '../env';
import Logger from '../helpers/logger';
import Fetch from '../helpers/fetch';
// import moment from 'moment';

export default class Events {
  
  static Retrieve( filters = {}) {
    return new Promise(async (resolve, reject) => {
      
      let query = '';
      let filt = Object.keys(filters);
      if (filt.length)
        query = '?' + filt.map(filt => (''+filt+'='+filters[filt]) ).join('&');
      
      if (filters._id)
        query = '/' + filters._id;
      
      let res = {};
      try {
        let req = await Fetch(ENV.API_PATH + '/events' + query, { headers: ENV.HEADERS });
        res = await req.json();
      }
      catch (err) {
        Logger.log(err);
        return reject(err);
      }
      resolve(res);
    });
  }
  
  static Create( data, token ) {
    
    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'POST';
      data.start_date = data.start_date.split('/').reverse().join('-');
      
      let body = JSON.stringify(data);
      let headers = { ...ENV.HEADERS, authorization: token };
      
      try {
        let req = await Fetch( ENV.API_PATH + '/events', { method, body, headers } );
        res = await req.json();
      }
      
      catch(error){
        return reject(error);
      }
      
      if (res.success == false) return reject(res);
      resolve(res);
    })
  }
  
  static Update( id, data, token ) {
    
    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'PUT';
      
      let body = JSON.stringify(data);
      let headers = { ...ENV.HEADERS, authorization: token };
      
      try {
        let req = await Fetch( ENV.API_PATH + '/events/' + id, { method, body, headers } );
        res = await req.json();
      }
      
      catch(error){
        return reject(error);
      }
      
      if (res.success == false) return reject(res);
      resolve(res);
    })
  }
  
  static Delete( id, token ) {
    
    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'DELETE';
      let headers = { ...ENV.HEADERS, authorization: token };
      
      try {
        await Fetch( ENV.API_PATH + '/events/' + id, { method, headers } );
        res = true;
      }
      
      catch(error){
        return reject(error);
      }
      
      if (res.success == false) return reject(res);
      resolve(res);
    })
  }
  
  
  static Buy( data, token ) {
    
    return new Promise(async (resolve,reject) => {
      let res;
      let method = 'POST';
      let body = JSON.stringify(data);
      let headers = { ...ENV.HEADERS, authorization: token };
      
      try {
        let req = await Fetch( ENV.API_PATH + '/reservations', { method, body, headers } );
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
