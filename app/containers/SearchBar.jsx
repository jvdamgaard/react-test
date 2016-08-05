import { connect } from 'react-redux';
import { setSearch } from '../actions/search';
import { setAlbums } from '../actions/albums';
import * as musicApi from '../api/musicApi';
import SearchBar from '../components/SearchBar';

function mapStateToProps(state/* , ownProps */) {
  return {
    searchTerm: state.search,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  return {
    onChange: (event) => {
      dispatch(setSearch(event.target.value));
    },

    onKeyPress: (event) => {
      if (event.key === 'Enter') {
        musicApi
          .getAlbums(event.target.value)
          .then(payload => dispatch(setAlbums(payload.albums.items)));
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
