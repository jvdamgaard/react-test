import { connect } from 'react-redux';
import { setCurrentTrack } from '../actions/tracks';
import TrackList from '../components/TrackList';

let curAudioObject;

function mapStateToProps(state/* , ownProps */) {
  return {
    tracks: state.tracks,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  return {
    playPreview: (url) => {
      if (curAudioObject) {
        curAudioObject.pause();
      }

      curAudioObject = new Audio(url);
      curAudioObject.play();
      dispatch(setCurrentTrack(url));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
