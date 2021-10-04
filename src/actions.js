export const REQUEST_HELLO_WORLD = "REQUEST_HELLO_WORLD";
export const RECEIVE_HELLO_WORLD = "RECEIVE_HELLO_WORLD";

export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const SET_DANGER_BUTTON = "SET_DANGER_BUTTON";

export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });

export const requestUsers = () => ({ type: REQUEST_USERS });
export const receiveUsers = users => ({ type: RECEIVE_USERS, users });

export const setDangerButton = on => ({ type: SET_DANGER_BUTTON, on });
