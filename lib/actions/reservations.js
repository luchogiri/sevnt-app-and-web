// @flow

import ReservationsService from '../services/reservations';


export default class Reservations {
  
  // action creators
  
  static Sync( id, token ) {
    return async() => {
      return await ReservationsService.Sync( id, token );
    }
  }
  
  static Accredit( id, data, token ) {
    return async() => {
      return await ReservationsService.Accredit( id, data, token );
    }
  }
}
