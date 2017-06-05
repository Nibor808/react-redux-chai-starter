import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import People from './components/people_component';
import reducers from './reducers/index';

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const Store = storeWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={ Store }>
   <BrowserRouter>
    <div>
      <Route path='/' component={App} />
      <Route path='/people' component={People} />
    </div>
   </BrowserRouter>
  </Provider>
, document.querySelector('.main'));