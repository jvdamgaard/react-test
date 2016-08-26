import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from './Track.css';

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

Track.mixins = [PureRenderMixin];
Track.propTypes = {
  track: React.PropTypes.object.isRequired,
  playPreview: React.PropTypes.func.isRequired,
};
