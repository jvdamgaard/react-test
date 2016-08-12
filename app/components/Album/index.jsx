import React from 'react';
import style from './style.css';

export default function Album({ album, getTracks }) {
  return (
    <li>
      <img
        src={album.images[1].url}
        alt={album.name}
        className={style.img}
        onClick={() => getTracks(album.id)}
      />
    </li>
  );
}

Album.propTypes = {
  album: React.PropTypes.object.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};
