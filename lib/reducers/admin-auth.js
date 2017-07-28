// @flow

import AdminAuth from '../actions/admin-auth';

const AdminAuthReducer = (

  state: Object = { ...AdminAuth.InitialState },
  action: Object

) => {

  switch (action.type) {

    case AdminAuth.SAVE:
      return { ...state, user: action.data }

    default:
      return state;
  }
};

export default AdminAuthReducer;
