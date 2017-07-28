// @flow

import Account from '../actions/account';


const AccountReducer = (

  state: Object = Account.InitialState,
  action: Object

) => {

  switch (action.type) {

    case Account.SAVE:
      return { ...state, ...action.data };

    case Account.CLEAR:
      return Account.InitialState;

    case Account.ADD_FAVORITE:
      return { ...state, favorites: [ ...state.favorites, action.data ] }

    default:
      return state;
  }
}

export default AccountReducer;
