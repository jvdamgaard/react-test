import { connect } from 'react-redux';
import { getTracks } from '../actions/tracks';
import AlbumList from '../components/AlbumList';

function mapStateToProps(state/* , ownProps */) {
  return {
    albums: state.albums,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  return {
    getTracks: (albumId) => dispatch(getTracks(albumId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);
