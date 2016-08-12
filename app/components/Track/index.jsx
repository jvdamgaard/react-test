import React from 'react';
import style from './style.css';

export default function Track({ track, playPreview }) {
  return (
    <li
      className={style.listItem}
      onClick={() => playPreview(track.preview_url)}
    >
      {track.name}
    </li>
  );
}

Track.propTypes = {
  track: React.PropTypes.object.isRequired,
  playPreview: React.PropTypes.func.isRequired,
};
