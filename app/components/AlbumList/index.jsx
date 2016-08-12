import React from 'react';
import Album from '../Album';
import style from './style.css';

export default function AlbumList({ albums, getTracks }) {
  const albumsList = albums.map((album) => (
    <Album
      key={album.id}
      album={album}
      getTracks={getTracks}
    />
  ));

  return (
    <div className={`col-md-4 ${style.container}`}>
      <ul className={style.list}>
        {albumsList}
      </ul>
    </div>
  );
}

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};
