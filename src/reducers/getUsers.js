import { RECEIVE_USERS, CLEAR_USERS } from "../actions";

const getUsers = (state={}, {type, users}) => {
  switch(type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: null
      };  
    default:
      return state;
  }
}

export default getUsers;