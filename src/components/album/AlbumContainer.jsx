import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getTracks } from '../track/actions';
import AlbumList from './AlbumList';

function mapStateToProps({ albums }/* , ownProps */) {
  return {
    albums,
  };
}

function mapDispatchToProps(dispatch, { params }) {
  return {
    getTracks: ({ id }) => {
      browserHistory.push(`/search/${params.albumSearch}/${id}/`);
      return dispatch(getTracks(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);
