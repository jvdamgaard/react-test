import React from 'react';
import { Router, Route } from 'react-router';
import App from '../../components/App';
import Query from '../../components/Query';
import ErrorPage from '../../components/ErrorPage';

export default function AppContainer({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/search/:query" component={Query} />
        <Route path="/*" component={ErrorPage} />
      </Route>
    </Router>
  );
}

AppContainer.propTypes = {
  history: React.PropTypes.object.isRequired,
};
