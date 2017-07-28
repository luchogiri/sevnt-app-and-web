// @flow

import ConfigService from '../services/config';


export default class Config {
  
  // store initial state
  static InitialState = {
    
    show_onboarding: true,
    categories: [
      'MUSIC',
      'THEATRE',
      'FASHION',
      'SPIRITUALITY',
      'COURSES',
      'PROFESSIONAL',
      'SPORTS',
      'EDUCATION',
      'PARTIES',
      'EXHIBITIONS AND MUSEUMS',
      'INFANTILE',
      'RECOMMENDED'
    ]
  };
  
  
  // action types
  static SAVE = 'app/config/save';
  static UPDATE = 'app/config/update';
  static CLEAR = 'app/config/clear';
  
  
  // action creators
  
  static Retrieve() {
    return async(dispatch) => {
      let data = await ConfigService.Retrieve();
      dispatch( Config.Save( data ) );
    }
  }
  
  static Save( data ) {
    return { type: Config.SAVE, data: data };
  }
  
  static Update( data ) {
    return { type: Config.UPDATE, data: data };
  }
  
  static Clear() {
    return { type: Config.CLEAR };
  }
}
