import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/app';
import People from './components/people_component';
import reducers from './reducers/index';

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const Store = storeWithMiddleware(reducers);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={ Store }>
   <BrowserRouter history={history}>
    <App>
      <Switch>
        <Route path='/people' component={People} />
      </Switch>
    </App>
   </BrowserRouter>
  </Provider>
, document.querySelector('.main'));