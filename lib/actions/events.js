// @flow

import EventsService from '../services/events';


export default class Events {
  
  // store initial state
  static InitialState = {
    
    datetime: undefined,
    items: []
  };
  
  
  // action types
  static SAVE = 'app/events/save';
  static ADD = 'app/events/add';
  static CLEAR = 'app/events/clear';
  
  
  // action creators
  
  static Get( filters ) {
    return async() => {
      return await EventsService.Retrieve( filters );
    }
  }
  
  static Retrieve( filters ) {
    return async(dispatch) => {
      let data = await EventsService.Retrieve( filters );
      dispatch( Events.Save( data ) );
    }
  }
  
  
  static Create( data, token ) {
    return async(dispatch) => {
      await EventsService.Create( data, token );
      dispatch( Events.Retrieve() );
    }
  }
  
  static Update( id, data, token, param ) {
    return async(dispatch) => {
      await EventsService.Update( id, data, token );
      dispatch( Events.Retrieve() );
    }
  }
  
  static Delete( id, token ) {
    return async(dispatch) => {
      await EventsService.Delete( id, token );
      dispatch( Events.Retrieve() );
    }
  }
  
  static Save( data ) {
    return { type: Events.SAVE, data: data };
  }
  
  static Add( data ) {
    return { type: Events.ADD, data: data };
  }
  
  static Clear() {
    return { type: Events.CLEAR };
  }
  
  static Buy( data, token ) {
    return async(dispatch) => {
      return await EventsService.Buy( data, token );
      // dispatch( Events.Save( data ) );
    }
  }
}
