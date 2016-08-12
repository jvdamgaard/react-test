import React from 'react';
import SearchBar from '../../containers/SearchBar';
import AlbumList from '../../containers/AlbumList';
import TrackList from '../../containers/TrackList';

export default function App({ params }) {
  return (
    <div>
      <SearchBar query={params.query || ''} />
      <AlbumList />
      <TrackList />
    </div>
  );
}

App.propTypes = {
  params: React.PropTypes.object.isRequired,
};
