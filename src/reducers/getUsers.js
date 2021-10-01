import { RECEIVE_USERS } from "../actions";

const getUsers = (state={}, {type, users}) => {
  switch(type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users
      };
    default:
      return state;
  }
}

export default getUsers;