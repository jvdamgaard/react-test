import React from 'react';
import SearchBar from '../containers/SearchBar';
import AlbumList from '../containers/AlbumList';
import TrackList from '../containers/TrackList';

export default function App(ownProps) {
  return (
    <div>
      <SearchBar query={ownProps.params.query || ''} />
      <AlbumList />
      <TrackList />
    </div>
  );
}
