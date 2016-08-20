import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import createStore from './store';
import Router from './components/Router';

const initialState = window.INITIAL_STATE || {};
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

const store = createStore(initialState, reduxDevTools);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.getElementById('app')
);
