import LRU from 'lru-cache';
import axios from 'axios';
import { CHARS_PER_MEGABYTE, MINS, SECS } from './constants';

const fetcher = axios.create();
const cache = new LRU({
  max: CHARS_PER_MEGABYTE * 1000, // approx. 1 GB of memory
  maxAge: 10 * MINS, // 10 min
  length: (n) => {
    try {
      return JSON.stringify(n).length;
    } catch (e) {
      return 1;
    }
  },
});

export default function apiFetcher(request) {
  // Return cached values
  const cached = cache.get(request);
  if (cached) {
    return Promise.resolve(cached);
  }

  return fetcher
    .get(request)
    .then(response => {
      // Save success responses in cache
      if (response.status >= 200 && response.status < 300 && response.data) {
        let time;
        const cacheControl = response.headers['cache-control'];
        if (cacheControl && cacheControl.indexOf('public, max-age=') === 0) {
          time = SECS * parseInt(cacheControl.replace('public, max-age=', ''), 10);
        }
        cache.set(request, response.data, time);
      }
      return response;
    })
    .then(response => response.data);
}
