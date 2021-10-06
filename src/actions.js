export const REQUEST_HELLO_WORLD = "REQUEST_HELLO_WORLD";
export const RECEIVE_HELLO_WORLD = "RECEIVE_HELLO_WORLD";

export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const CLEAR_USERS = "CLEAR_USERS";

export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_USER = "CLEAR_USER";

export const SET_BUTTON_TYPE = "SET_BUTTON_TYPE";

export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });

export const requestUsers = () => ({ type: REQUEST_USERS });
export const receiveUsers = users => ({ type: RECEIVE_USERS, users });
export const clearUsers = () => ({ type: CLEAR_USERS });

export const requestUser = (userId) => ({ type: REQUEST_USER, userId });
export const receiveUser = user => ({ type: RECEIVE_USER, user });
export const clearUser = () => ({ type: CLEAR_USER });

export const setButtonType = buttonType => ({ type: SET_BUTTON_TYPE, buttonType });
