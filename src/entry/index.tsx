import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/index';

import Header from '../components/common/header';
import List from '../components/list';
import Detail from '../components/Detail';

import './index.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="app-content">
      <Router>
        <Route exact path="/" component={List} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="*" component={List} />
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);