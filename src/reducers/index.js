import { combineReducers } from "redux";

import helloWorld from './helloWorld';
import getUsers from './getUsers';
import buttonType from './buttonType';
import getUser from './getUser';

export default combineReducers({
    helloWorld,
    getUsers,
    buttonType,
    getUser
});