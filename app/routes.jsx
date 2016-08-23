import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Query from './components/Query';
import ErrorPage from './components/ErrorPage';

export default (
  <Route path="/" component={App}>
    <Route path="/search/:query" component={Query} />
    <Route path="/*" component={ErrorPage} />
  </Route>
);
