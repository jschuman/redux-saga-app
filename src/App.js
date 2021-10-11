import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Home from './Home';

import { reset } from './actions';

const app = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default app;

export function resetStore() {
  store.dispatch(reset());
}