import * as musicApi from '../../api/musicApi';
import { SET_ALBUMS } from './types';

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    albums,
  };
}

export function getAlbums(query) {
  return (dispatch) => (
    musicApi
      .getAlbums(query)
      .then(payload => dispatch(setAlbums(payload.albums.items)))
  );
}
