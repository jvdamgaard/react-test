import React from 'react';
import { Route } from 'react-router';
import App from './App';
import TrackContainer from '../track/TrackContainer';
import AlbumContainer from '../album/AlbumContainer';
import ErrorPage from './ErrorPage';

export default (
  <Route path="/" component={App}>
    <Route path="/search/:albumSearch" component={AlbumContainer}>
      <Route path="/search/:albumSearch/:albumId" component={TrackContainer} />
    </Route>
    <Route path="/*" component={ErrorPage} />
  </Route>
);
