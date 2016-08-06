import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';

const initialState = window.INITIAL_STATE || {};
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;
const enhancer = compose(applyMiddleware(thunk), reduxDevTools);

ReactDom.render(
  <Provider store={createStore(reducers, initialState, enhancer)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
