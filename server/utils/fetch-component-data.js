import fetcher from './api-fetcher';
import * as musicApi from '../../api/musicApi';
import { setAlbums } from '../../app/actions/albums';

export default function fetchComponentData(dispatch, params) {
  const promises = [];

  if (params.albumSearch) {
    promises.push(
      musicApi
        .getAlbums(params.albumSearch, fetcher)
        .then((data) => {
          dispatch(setAlbums(data.albums.items));
        })
    );
  }

  return Promise.all(promises);
}
