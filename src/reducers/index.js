import { combineReducers } from "redux";

import helloWorld from './helloWorld';
import getUsers from './getUsers';

export default combineReducers({
    helloWorld,
    getUsers
});