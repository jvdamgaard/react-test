import * as musicApi from '../../services/api/musicApi';
import { setSearch } from '../search/actions';
import { SET_ALBUMS } from './actionTypes';

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    albums,
  };
}

export function getAlbums(query) {
  return (dispatch) => {
    dispatch(setSearch(query));
    if (!query) {
      return Promise.resolve(
        dispatch(
          setAlbums([])
        )
      );
    }
    return musicApi
      .getAlbums(query)
      .then(payload => dispatch(
        setAlbums(payload.albums.items))
      );
  };
}
