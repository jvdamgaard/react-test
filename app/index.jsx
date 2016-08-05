import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';

const initialState = window.INITIAL_STATE || {};
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

ReactDom.render(
  <Provider store={createStore(reducers, initialState, reduxDevTools)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
