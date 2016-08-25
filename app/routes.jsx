import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import TrackList from './containers/TrackList';
import AlbumList from './containers/AlbumList';
import ErrorPage from './components/ErrorPage';

export default (
  <Route path="/" component={App}>
    <Route path="/search/:albumSearch" component={AlbumList}>
      <Route path="/search/:albumSearch/:albumId" component={TrackList} />
    </Route>
    <Route path="/*" component={ErrorPage} />
  </Route>
);
