import React from 'react';
import SearchBar from '../containers/SearchBar';
import AlbumList from '../containers/AlbumList';
import TrackList from '../containers/TrackList';

export default function App() {
  return (
    <div>
      <SearchBar />
      <AlbumList />
      <TrackList />
    </div>
  );
}
