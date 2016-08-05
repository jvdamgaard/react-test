import axios from 'axios';

function fetch(request) {
  return axios
    .get(request)
    .then(response => response.data);
}

export function getAlbums(artist, callback) {
  const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
  return fetch(request, callback);
}

export function getTracks(albumId, callback) {
  const request = `https://api.spotify.com/v1/albums/${albumId}`;
  return fetch(request, callback);
}
