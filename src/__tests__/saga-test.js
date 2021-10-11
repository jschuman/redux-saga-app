import { call, put, takeLatest } from 'redux-saga/effects';
import { watchGetUsers, getUsers } from '../sagas';

import { requestUsers, receiveUsers, REQUEST_USERS } from '../actions';
import { fetchUsersData } from '../api';


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
  
  it('when getting users, should fetch data from APIk and dispatch success action', () => {
    const generator = getUsers();

    expect(generator.next().value)
      .toEqual(call(fetchUsersData));

    expect(generator.next().value)
      .toEqual(put(receiveUsers()))

    expect(generator.next())
      .toEqual({done: true, value: undefined });
  });

});