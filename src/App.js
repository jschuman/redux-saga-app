import React from 'react';
import { Provider } from 'react-redux';
import { NumberContext } from './NumberContext';

import store from './store';
import Home from './Home';

import { reset } from './actions';

const app = () => (
  <Provider store={store}>
    <NumberContext.Provider value={41}>
      <Home />
    </NumberContext.Provider>
  </Provider>
);

export default app;

export function resetStore() {
  store.dispatch(reset());
}