import React from 'react';

const mouseOverColor = '#ADD8E6';
const mouseOutColor = 'white';

export default function Track({ track, playPreview }) {
  return (
    <li
      style={Track.styles.li}
      onMouseOver={(e) => { e.target.style.backgroundColor = mouseOverColor; }}
      onMouseOut={(e) => { e.target.style.backgroundColor = mouseOutColor; }}
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

Track.styles = {
  li: {
    fontSize: '1.5em',
    padding: '0.2em',
    listStyleType: 'none',
    backgroundColor: mouseOutColor,
  },
};

