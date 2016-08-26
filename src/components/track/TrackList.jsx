import React from 'react';
import style from './TrackList.css';
import Track from './Track';

export default function TrackList({ tracks, playPreview }) {
  const tracksList = tracks.map((track) => (
    <Track
      key={track.id}
      track={track}
      playPreview={playPreview}
    />
  ));

  return (
    <div className="col-md-3">
      <ul className={style.list}>
        {tracksList}
      </ul>
    </div>
  );
}

TrackList.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  playPreview: React.PropTypes.func.isRequired,
};
