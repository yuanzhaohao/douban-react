import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/index';

import List from '../components/list';

const App = () => (
  <Provider store={store}>
    <List />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);