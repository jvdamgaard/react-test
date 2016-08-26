import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from './Album.css';

export default function Album({ album, getTracks }) {
  return (
    <li>
      <img
        src={album.images[1].url}
        alt={album.name}
        className={style.img}
        onClick={() => getTracks(album)}
      />
    </li>
  );
}

Album.mixins = [PureRenderMixin];
Album.propTypes = {
  album: React.PropTypes.object.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};
