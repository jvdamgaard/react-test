import React from 'react';
import { Router, Route } from 'react-router';
import App from '../../components/App';

export default function AppContainer({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/search/:query" component={App} />
      </Route>
    </Router>
  );
}

AppContainer.propTypes = {
  history: React.PropTypes.object.isRequired,
};
