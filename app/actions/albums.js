import * as musicApi from '../../api/musicApi';
import { SET_ALBUMS } from './types';

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    albums,
  };
}

export function getAlbums(query) {
  return (dispatch) => {
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
