import { connect } from 'react-redux';
import { playPreview } from '../actions/tracks';
import TrackList from '../components/TrackList';

function mapStateToProps(state/* , ownProps */) {
  return {
    tracks: state.tracks,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  return {
    playPreview: (url) => {
      dispatch(playPreview(url));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
