import {
  SET_ALBUMS,
} from './types';

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    albums,
  };
}
