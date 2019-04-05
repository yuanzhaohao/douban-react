import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux/index';

export default () => (
  <Provider store={store}>
    app
  </Provider>
)