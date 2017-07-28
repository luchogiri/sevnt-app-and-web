// @flow

import { Errors } from '../helpers/errors';

const users = {
  'admin': 'admin'
};

export default class AdminAuthService {
  
  static Login( data ) {

    let Err: Errors.ProviderError;

    if (!data.email || !data.pass) {
      Err = new Error(Errors.MISSING_FIELD_MSG);
      Err.code = Errors.MISSING_FIELD;
      throw Err;
    }

    if (!users[data.email]) {
      Err = new Error(Errors.INVALID_EMAIL_MSG);
      Err.code = Errors.INVALID_EMAIL;
      throw Err;
    }

    if (data.pass !== users[data.email]) {
      Err = new Error(Errors.INVALID_PASSWORD_MSG);
      Err.code = Errors.INVALID_PASSWORD;
      throw Err;
    }

    return {
      email: data.email,
      pass: data.pass
    }
  }
}
