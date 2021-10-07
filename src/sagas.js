import { all, call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_HELLO_WORLD, receiveHelloWorld, 
  REQUEST_USERS, receiveUsers,
  REQUEST_USER, receiveUser,
  REQUEST_DELETE_USER, deleteUserSuccess,
  REQUEST_UPDATE_USER, updateUserSuccess
 } from './actions';
import { fetchUsersData, fetchUserData, deleteUser, updateUser } from './api';

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
    const all = yield call(fetchUsersData);
    yield put(receiveUsers(all));
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

// worker Saga: will be fired on REQUEST_DELETE_USER actions
function* deleteTheUser(action) {
  try {
    //do api call  
    yield call(deleteUser, action.userId);
    yield put(deleteUserSuccess(action.userId));
  } catch (e) {
    console.log("Error: " + e);
  }
}

// worker Saga: will be fired on REQUEST_UPDATE_USER actions
function* updateTheUser(action) {
  try {
    //do api call  
    const user = yield call(updateUser, action.user);
    console.log(`response from update: ${JSON.stringify(user)}`);
    yield put(updateUserSuccess(user));
  } catch (e) {
    console.log("Error: " + e);
  }
}

function* watchGetUser() {
  yield takeLatest(REQUEST_USER, getUser);
}

function* watchDeleteUser() {
  yield takeLatest(REQUEST_DELETE_USER, deleteTheUser);
}

function* watchUpdateUser() {
  yield takeLatest(REQUEST_UPDATE_USER, updateTheUser);
}

function* rootSaga() {
  yield all([
    helloWorldSaga(),
    watchGetUsers(),
    watchGetUser(),
    watchDeleteUser(),
    watchUpdateUser()
  ])
  // code after all-effect
}

export default rootSaga;
