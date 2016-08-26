import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import createStore from './app/store';
import Root from './app/AppContainer';

const initialState = window.INITIAL_STATE || {};
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

const store = createStore(initialState, reduxDevTools);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./app/AppContainer', () => {
    /* eslint-disable global-require */
    const RootContainer = require('./app/AppContainer').default;
    /* eslint-enable global-require */

    render(
      <AppContainer>
        <RootContainer store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
