import { combineReducers } from "redux";

import helloWorld from './helloWorld';
import users from './users';
import buttonType from './buttonType';

const appReducer = combineReducers({
  helloWorld,
  users,
  buttonType
});

export default function rootReducer(state, action){
  if (action.type === 'RESET') { // check for action type 
    state = undefined;
  }

  return appReducer(state, action);
}
  