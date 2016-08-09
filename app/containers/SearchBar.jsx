import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getAlbums } from '../actions/albums';
import SearchBar from '../components/SearchBar';

function mapStateToProps(state, ownProps) {
  return {
    searchTerm: ownProps.search,
  };
}

function mapDispatchToProps(dispatch/* , ownProps */) {
  return {
    onChange: (event) => {
      browserHistory.push(`/${event.target.value}`);
      dispatch(getAlbums(event.target.value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
