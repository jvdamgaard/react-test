import React from 'react';
import { Provider } from 'react-redux';
import Router from '../Router';

export default function App({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};
