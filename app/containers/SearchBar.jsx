import { connect } from 'react-redux';
import { setSearch } from '../actions/search';
import { getAlbums } from '../actions/albums';
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
        getAlbums(event.target.value);
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
