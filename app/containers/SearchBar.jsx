import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import debounce from 'lodash/debounce';
import { getAlbums } from '../actions/albums';
import SearchBar from '../components/SearchBar';

function mapStateToProps(state, ownProps) {
  return {
    albumSearch: ownProps.albumSearch,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  const debouncedGetAlbums = debounce((albumSearch) => {
    dispatch(getAlbums(albumSearch));
  }, 250);

  return {
    onChange: (event) => {
      if (!event.target.value) {
        browserHistory.push('/');
        return;
      }
      browserHistory.push(`/search/${event.target.value}`);
      debouncedGetAlbums(event.target.value);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
