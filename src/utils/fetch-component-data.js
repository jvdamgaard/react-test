import fetcher from './api-fetcher';
import * as musicApi from '../services/api/musicApi';
import { setAlbums } from '../components/album/actions';
import { setSearch } from '../components/search/actions';
import { setTracks } from '../components/track/actions';

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
