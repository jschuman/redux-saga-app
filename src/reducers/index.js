import { combineReducers } from "redux";

import helloWorld from './helloWorld';
import getUsers from './getUsers';
import buttonType from './buttonType';

export default combineReducers({
    helloWorld,
    getUsers,
    buttonType
});