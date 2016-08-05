import axios from 'axios';

function fetch(request) {
  return axios
    .get(request)
    .then(response => response.data);
}

export function getAlbums(artist) {
  const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
  return fetch(request);
}

export function getTracks(albumId) {
  const request = `https://api.spotify.com/v1/albums/${albumId}`;
  return fetch(request);
}
