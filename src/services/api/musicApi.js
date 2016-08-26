import axios from 'axios';

const fetcher = axios.create();

const defaultFetcher = (request) => (
  fetcher
    .get(request)
    .then(response => response.data)
);

export function getAlbums(artist, fetch = defaultFetcher) {
  const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
  return fetch(request);
}

export function getTracks(albumId, fetch = defaultFetcher) {
  const request = `https://api.spotify.com/v1/albums/${albumId}`;
  return fetch(request);
}
