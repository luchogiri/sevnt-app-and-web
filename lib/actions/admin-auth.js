// @flow

import AdminAuthService from '../services/admin-auth';


export default class AdminAuth {
  
  // initial state
  static InitialState = { user: {} };
  
  
  // action types
  static SAVE = 'app/account/save';
  
  
  // action creators
  
  static Login( data ) {
    return async(dispatch) => {
      
      let res = await AdminAuthService.Login(data);
      dispatch( AdminAuth.Save( res ) );
    }
  }
  
  static Save( data ) {
    return { type: AdminAuth.SAVE, data: data }
  }
  
};