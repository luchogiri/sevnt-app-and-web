// @flow

import ENV from '../env';
import Logger from '../helpers/logger';
import Fetch from '../helpers/fetch';

export default class Config {

  static Retrieve() {
    return new Promise(async (resolve, reject) => {
      
      let res = {};
      try {
        let req = await Fetch(ENV.API_PATH + '/config', { headers: ENV.HEADERS });
        res = await req.json();
        // res = {};
      }
      catch (err) {
        Logger.log(err);
        return reject(err);
      }
      resolve(res);
    });
  }

}
