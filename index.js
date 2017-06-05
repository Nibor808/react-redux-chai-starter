import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers/index';

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const Store = storeWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={ Store }>
    <App />
  </Provider>
, document.querySelector('.main'));