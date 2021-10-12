import { call, put, takeLatest } from 'redux-saga/effects';
import { watchGetUsers, getUsers,
  watchDeleteUser, deleteTheUser } from '../sagas';

import { requestUsers, receiveUsers, REQUEST_USERS, requestDeleteUser, deleteUserSuccess } from '../actions';
import { fetchUsersData, deleteUser } from '../api';

const mockUsers = require('./mockUsers.json');

describe('when interacting with users', () => {

  it('should wait for dispatched getUsers action', () => {
    const generator = watchGetUsers();

    put(requestUsers());

    expect(generator.next().value)
      .toEqual(takeLatest(REQUEST_USERS, getUsers));
  });

  it('should wait for dispatched getUsers action - take 2', () => {
    const generator = watchGetUsers();
    
    expect(generator.next(requestUsers()).value)
      .toEqual(takeLatest(REQUEST_USERS, getUsers));
  });
  
  it('when getting users, should fetch data from API and dispatch success action', () => {
    const generator = getUsers();

    expect(generator.next().value)
      .toEqual(call(fetchUsersData));

    expect(generator.next().value)
      .toEqual(put(receiveUsers()))

    expect(generator.next())
      .toEqual({done: true, value: undefined });
  });

  it ('should delete user when delete requested', () => {
    const action = requestDeleteUser(mockUsers[0].id);
    const generator = deleteTheUser(action);

    expect(generator.next().value)
      .toEqual(call(deleteUser, action.userId))

    expect(generator.next().value)
      .toEqual(put(deleteUserSuccess(action.userId)))

    expect(generator.next())
      .toEqual({done: true, value: undefined})

  })

});