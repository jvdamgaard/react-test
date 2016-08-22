import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import createStore from './store';
import Root from './components/Root';

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
  module.hot.accept('./components/Root', () => {
    const RootContainer = require('./components/Root').default;

    render(
      <AppContainer>
        <RootContainer store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
