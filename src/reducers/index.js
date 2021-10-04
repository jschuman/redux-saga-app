import { combineReducers } from "redux";

import helloWorld from './helloWorld';
import getUsers from './getUsers';
import dangerButton from './dangerButton';

export default combineReducers({
    helloWorld,
    getUsers,
    dangerButton
});