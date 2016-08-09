import LRU from 'lru-cache';
import axios from 'axios';

const fetcher = axios.create();
const cache = new LRU({
  max: 10000,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
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
      if (
        response.status >= 200 &&
        response.status < 300 &&
        response.headers['cache-control'] &&
        response.headers['cache-control'].indexOf('public, max-age=') === 0
      ) {
        const time = parseInt(response
          .headers['cache-control']
          .replace('public, max-age=', 10), 10);
        cache.set(request, response.data, time);
      }
      return response;
    })
    .then(response => response.data);
}
