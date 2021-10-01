import { all, call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_HELLO_WORLD, receiveHelloWorld, REQUEST_USERS, receiveUsers } from './actions';
import fetchData from './api';

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
    const users = yield call(fetchData);
    yield put(receiveUsers(users));
    //yield put(receiveUsers([{id: 1, name: 'jeff', email: 'j@s.com'}]));
  } catch (e) {
    console.log("Error: " + e);
  }
}

function* watchGetUsers() {
  yield takeLatest(REQUEST_USERS, getUsers);
}

function* rootSaga() {
  yield all([
    helloWorldSaga(),
    watchGetUsers()
  ])
  // code after all-effect
}


export default rootSaga;
