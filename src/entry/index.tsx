import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/index';

import Header from '../components/common/header';
import Loading from '../components/common/loading';
// import List from '../components/list';
// import Detail from '../components/Detail';

const { Suspense, lazy} = React;
const List = lazy(() => import('../components/list'));
const Detail = lazy(() => import('../components/detail'));

import './index.scss';

const App = () => (
  <Provider store={store}>
    <Router>
    <Header />
      <div className="app-content">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="*" component={List} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);