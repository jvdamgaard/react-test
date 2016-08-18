import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import debounce from 'lodash/debounce';
import { getAlbums } from '../actions/albums';
import SearchBar from '../components/SearchBar';

function mapStateToProps(state, ownProps) {
  return {
    searchTerm: ownProps.search,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  const debouncedGetAlbums = debounce((query) => {
    dispatch(getAlbums(query));
  }, 250);

  return {
    onChange: (event) => {
      browserHistory.push(`/search/${event.target.value}`);
      debouncedGetAlbums(event.target.value);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
