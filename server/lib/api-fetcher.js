import LRU from 'lru-cache';
import axios from 'axios';

const CHARS_PER_MEGABYTE = 1048576; // Based on http://www.unitconversion.org/data-storage/characters-to-megabytes-conversion.html

const fetcher = axios.create();
const cache = new LRU({
  max: CHARS_PER_MEGABYTE * 1000,
  maxAge: 10 * 60 * 1000, // 10 min
  length: (n) => JSON.stringify(n).length,
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
      if (response.status >= 200 && response.status < 300) {
        let time;
        const cacheControl = response.headers['cache-control'];
        if (cacheControl && cacheControl.indexOf('public, max-age=') === 0) {
          time = parseInt(cacheControl.replace('public, max-age=', ''), 10) * 1000;
        }
        cache.set(request, response.data, time);
      }
      return response;
    })
    .then(response => response.data);
}
