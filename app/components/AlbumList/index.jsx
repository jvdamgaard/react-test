import React from 'react';
import Album from '../Album';
import style from './style.css';

export default function AlbumList({ albums, getTracks, children }) {
  const albumsList = albums.map((album) => (
    <Album
      key={album.id}
      album={album}
      getTracks={getTracks}
    />
  ));

  return (
    <div>
      <div className={`col-md-4 ${style.container}`}>
        <ul className={style.list}>
          {albumsList}
        </ul>
      </div>
      {children}
    </div>
  );
}

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
  getTracks: React.PropTypes.func.isRequired,
  children: React.PropTypes.object,
};
