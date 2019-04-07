import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/index';

import List from '../components/list';
import Header from '../components/common/header';

import './index.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="app-content">
      <List />
    </div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);