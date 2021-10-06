import { combineReducers } from "redux";

import helloWorld from './helloWorld';
import users from './users';
import buttonType from './buttonType';

export default combineReducers({
    helloWorld,
    users,
    buttonType
});