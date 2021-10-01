import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Home from './Home';

const app = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default app;