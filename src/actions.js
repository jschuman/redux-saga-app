export const REQUEST_HELLO_WORLD = "REQUEST_HELLO_WORLD";
export const RECEIVE_HELLO_WORLD = "RECEIVE_HELLO_WORLD";

export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const CLEAR_USERS = "CLEAR_USERS";

export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const REQUEST_DELETE_USER = "REQUEST_DELETE_USER";
export const DELETE_USER_SUCCESS = "DElETE_USER_SUCCESS";

export const REQUEST_UPDATE_USER = "REQUEST_UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";


export const SET_BUTTON_TYPE = "SET_BUTTON_TYPE";

export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });

export const requestUsers = () => ({ type: REQUEST_USERS });
export const receiveUsers = all => ({ type: RECEIVE_USERS, all });
export const clearUsers = () => ({ type: CLEAR_USERS });

export const requestUser = (userId) => ({ type: REQUEST_USER, userId });
export const receiveUser = user => ({ type: RECEIVE_USER, user });

export const requestDeleteUser = (userId) => ({ type: REQUEST_DELETE_USER, userId });
export const deleteUserSuccess = (userId) => ({ type: DELETE_USER_SUCCESS, userId });

export const requestUpdateUser = (user) => ({ type: REQUEST_UPDATE_USER, user });
export const updateUserSuccess = (user) => ({ type: UPDATE_USER_SUCCESS, user });

export const setButtonType = buttonType => ({ type: SET_BUTTON_TYPE, buttonType });
