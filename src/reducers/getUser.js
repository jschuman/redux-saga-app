import { RECEIVE_USER, CLEAR_USER } from "../actions";

const getUser = (state={}, {type, user}) => {
  switch(type) {
    case RECEIVE_USER:
      return {
        ...state,
        user
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null
      };  
    default:
      return state;
  }
}

export default getUser;