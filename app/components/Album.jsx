import React from 'react';

export default function Album({ album, getTracks }) {
  return (
    <li>
      <img
        src={album.images[1].url}
        alt={album.name}
        style={Album.styles.img}
        onClick={() => getTracks(album.id)}
      />
    </li>
  );
}

Album.propTypes = {
  album: React.PropTypes.object.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};

Album.styles = {
  img: {
    marginBottom: '1em',
  },
};
