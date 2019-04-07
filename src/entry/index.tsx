import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/index';

import List from '../components/list';
import Header from '../components/common/header';

import './index.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="app-content">
      <Router>
        <Route exact path={'/'} component={List}></Route>
        <Route exact path={'/list'} component={List}></Route>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);