// @flow

import Actions from '../actions/events';


const Config = (
  
  state: Object = { ...Actions.InitialState },
  action: Object

) => {
  
  switch (action.type) {
    
    case Actions.SAVE:
      return { ...state, ...action.data };

    case Actions.ADD:
      return { ...state, items: [...state.items, action.data]};
      
    case Actions.CLEAR:
      return { ...Actions.InitialState };
    
    default:
      return state;
  }
}

export default Config;
