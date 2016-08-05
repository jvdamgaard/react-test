import React from 'react';
import Album from './Album';

export default function AlbumList({ albums, getTracks }) {
  const albumsList = albums.map((album) => (
    <Album
      key={album.id}
      album={album}
      getTracks={getTracks}
    />
  ));

  return (
    <div className="col-md-4" style={AlbumList.styles.div}>
      <ul style={AlbumList.styles.ul}>
        {albumsList}
      </ul>
    </div>
  );
}

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};

AlbumList.styles = {
  div: {
    width: 370,
    marginLeft: 30,
    textAlign: 'right',
    maxHeight: '85vh',
    overflowY: 'auto',
  },
  ul: {
    listStyle: 'none',
  },
};
