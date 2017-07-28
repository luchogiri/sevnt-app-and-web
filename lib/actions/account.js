// @flow

import AccountService from '../services/account';


export default class Account {

  // store initial state
  static InitialState = {

    registered: [],
    favorites: []
  };


  // action types

  static SAVE = 'app/account/save';
  static CLEAR = 'app/account/clear';
  static ADD_FAVORITE = 'app/account/add_favorite';


  // action creators

  static Login(data) {
    return async(dispatch) => {
      let response = await AccountService.Login( data );
      dispatch( Account.Save( response ) );
    }
  }
  
  static FBLogin() {
    return async(dispatch) => {
      await AccountService.FBLogin();
      let data = await AccountService.FBInfo();
      let res = await AccountService.FBSignIn(data);
      dispatch( Account.Save( res ) );
    }
  }
  
  static FBLogout() {
    AccountService.FBLogout();
    return { type: Account.CLEAR };
  }

  static Register(data) {
    return async(dispatch) => {
      let response = await AccountService.SignUp( data );
      dispatch( Account.Save( response ) );
    }
  }

  static Update(data, token) {
    return async(dispatch) => {
      let response = await AccountService.Update( data, token );
      dispatch( Account.Save( response ) );
    }
  }

  static Save( data ) {
    return { type: Account.SAVE, data: data };
  }

  static Logout() {
    return { type: Account.CLEAR };
  }

  static RequestNewPassword(data) {
    return async() => {
      await AccountService.RequestPassword( data );
    }
  }

  static RequestNewPassword(data) {
    return async() => {
      await AccountService.RequestPassword( data );
    }
  }
  
  
  static UserInfo(token) {
    return async(dispatch) => {
      let response = await AccountService.UserInfo( token );
      dispatch( Account.Save( response) );
    }
  }
  
  static GetFavorites(token) {
    return async(dispatch) => {
      return await AccountService.GetFavorites( token );
      // dispatch( Account.Save({ favorites: response }) );
    }
  }
  
  static AddFavorite(data, token) {
    return async(dispatch) => {
      let response = await AccountService.AddFavorite( data, token );
      dispatch( Account.Save({ favorites: response }) );
    }
  }
  
  static RemoveFavorite(data, token) {
    return async(dispatch) => {
      let response = await AccountService.RemoveFavorite( data, token );
      dispatch( Account.Save({ favorites: response }) );
    }
  }
  
  static GetMyEvents(token) {
    return async(dispatch) => {
      return await AccountService.GetMyEvents( token );
    }
  }
  
  static GetMyPurchases(token) {
    return async(dispatch) => {
      return await AccountService.GetMyPurchases( token );
    }
  }
  //
  //
  //
  // static Saveindb( data:Object ){
  //   return async(dispatch) => {
  //     let pepe = await AccountService.Saveuserdb(data);
  //   }
  // }
  //
  // static Saveuser( data:Object ){
  //       return async(dispatch) => {
  //             let datas = await AccountService.SaveMyUser(data);
  //             dispatch( Account.Save( data ) );
  //       }
  //   }
  //
  // static SaveNewuser( data:Object ){
  //       return async(dispatch) => {
  //             let datas = await AccountService.Saveuserdb(data);
  //             dispatch( Account.Save( data ) );
  //       }
  //   }
  //
  // static Getuser(){
  //   return async(dispatch) => {
  //     //await AccountService.Getuserdb();
  //     let data = await AccountService.Getuserdb();
  //     //console.log(data);
  //     dispatch( Account.Save( data ) );
  //     //dispatch(Events.showfakeuser(data));
  //   }
  // }
  //
  // static Showfakeuser( data ){
  //   //return { type: Account.SHOWFAKEUSER, data: data }
  // }
  //
  // static Logout() {
  //   AccountService.Logout();
  //   return { type: Account.CLEAR };
  // }
}
