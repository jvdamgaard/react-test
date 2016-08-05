import { connect } from 'react-redux';
import { setTracks } from '../actions/tracks';
import * as musicApi from '../api/musicApi';
import AlbumList from '../components/AlbumList';

function mapStateToProps(state/* , ownProps */) {
  return {
    albums: state.albums,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  return {
    getTracks: (albumId) => {
      musicApi
        .getTracks(albumId)
        .then(payload => {
          dispatch(setTracks(payload.tracks.items));
        });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);
