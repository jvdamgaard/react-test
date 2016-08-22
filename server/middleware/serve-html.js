import fetcher from '../lib/api-fetcher';
import * as musicApi from '../../api/musicApi';
import createStore from '../../app/store';
import { setAlbums } from '../../app/actions/albums';
import renderReact from '../../compiled/render-react';

function renderHtml(html, preloadedState) {
  return `<!doctype html>
<html>
  <head>
    <title>Respotify</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    >
    <link rel="stylesheet" href="/static/styles.css">
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.INITIAL_STATE = ${JSON.stringify(preloadedState)}
    </script>
    <script src="/static/app.js"></script>
  </body>
</html>`;
}

function sendResponse(req, res, store) {
  // Render the component to a string
  renderReact(req.url, store, (err, html) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(renderHtml(html, store.getState()));
  });
}

export default function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore();

  const { query } = req.params;
  if (!query) {
    return sendResponse(req, res, store);
  }
  return musicApi
    .getAlbums(query, fetcher)
    .then((data) => {
      store.dispatch(setAlbums(data.albums.items));
      sendResponse(req, res, store);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
}
