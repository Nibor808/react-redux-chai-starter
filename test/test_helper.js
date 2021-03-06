import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { JSDOM } from 'jsdom';
import _$ from 'jquery';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

global.window = new JSDOM('<!doctype html><html><head></head><body><p>Hello</p></body></html>').window;
global.document = global.window.document;
const $ = _$(global.window);

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const Store = storeWithMiddleware(reducers);

function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={ Store }>
      <ComponentClass { ...props } />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

export { renderComponent };