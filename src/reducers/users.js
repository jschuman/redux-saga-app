import { RECEIVE_USERS, CLEAR_USERS, RECEIVE_USER, DELETE_USER_SUCCESS, UPDATE_USER_SUCCESS } from "../actions";

const users = (state={}, {type, all, user, userId}) => {
  switch(type) {
    case RECEIVE_USERS:
      return {
        ...state,
        all
      };
    case CLEAR_USERS:
      return {
        ...state,
        all: null,
        user: null
      };  
    case RECEIVE_USER:
      return {
        ...state,
        user
      };
    case DELETE_USER_SUCCESS:
      let selectedUser = (state.user?.id !== userId) ? state.user : null;
      return {
        ...state,
        all: state.all.filter(u => u.id !== userId),
        user: selectedUser
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.map(u => (u.id !== user.id) ? u : user)
      }  
    default:
      return state;
  }
}

export default users;