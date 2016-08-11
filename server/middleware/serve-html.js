import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import { Provider } from 'react-redux';
import fetcher from '../lib/api-fetcher';
import * as musicApi from '../../api/musicApi';
import createStore from '../../app/store';
import { setAlbums } from '../../app/actions/albums';
import Router from '../../app/components/Router';

function renderHtml(html, preloadedState) {
  return `<!doctype html>
<html>
  <head>
    <title>Respotify</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    >
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.INITIAL_STATE = ${JSON.stringify(preloadedState)}
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>`;
}

function sendResponse(req, res, store) {
  const memoryHistory = createMemoryHistory(req.url);
  const history = syncHistoryWithStore(memoryHistory, store);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );

  // Send the rendered page back to the client
  res.send(renderHtml(html, store.getState()));
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
