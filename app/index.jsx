import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

export default function App({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};
