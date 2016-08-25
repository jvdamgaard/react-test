import fetcher from './api-fetcher';
import * as musicApi from '../../api/musicApi';
import { setAlbums } from '../../app/actions/albums';
import { setSearch } from '../../app/actions/search';
import { setTracks } from '../../app/actions/tracks';

export default function fetchComponentData(dispatch, params) {
  const promises = [];

  if (params.albumSearch) {
    dispatch(setSearch(params.albumSearch));
    promises.push(
      musicApi
        .getAlbums(params.albumSearch, fetcher)
        .then((data) => {
          dispatch(setAlbums(data.albums.items));
        })
    );
  }

  if (params.albumId) {
    promises.push(
      musicApi
        .getTracks(params.albumId, fetcher)
        .then((data) => {
          dispatch(setTracks(data.tracks.items));
        })
    );
  }

  return Promise.all(promises);
}
