import { all, call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_HELLO_WORLD, receiveHelloWorld, 
  REQUEST_USERS, receiveUsers,
  REQUEST_USER, receiveUser } from './actions';
import { fetchUsersData, fetchUserData } from './api';

// worker Saga: will be fired on REQUEST_HELLO_WORLD actions
function* helloWorld(action) {
  try {
    yield put(receiveHelloWorld("Hello World from Redux Saga!"));
  } catch (e) {
    yield put(receiveHelloWorld("Hello World from Redux Saga!"));
  }
}

function* helloWorldSaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}

// worker Saga: will be fired on REQUEST_USERS actions
function* getUsers() {
  try {
    //do api call  
    const users = yield call(fetchUsersData);
    yield put(receiveUsers(users));
  } catch (e) {
    console.log("Error: " + e);
  }
}

function* watchGetUsers() {
  yield takeLatest(REQUEST_USERS, getUsers);
}

// worker Saga: will be fired on REQUEST_USER actions
function* getUser(action) {
  try {
    //do api call  
    const user = yield call(fetchUserData, action.userId);
    yield put(receiveUser(user));
  } catch (e) {
    console.log("Error: " + e);
  }
}

function* watchGetUser() {
  yield takeLatest(REQUEST_USER, getUser);
}

function* rootSaga() {
  yield all([
    helloWorldSaga(),
    watchGetUsers(),
    watchGetUser()
  ])
  // code after all-effect
}


export default rootSaga;
