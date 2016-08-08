import qs from 'qs';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counterApp from '../../app/reducers';
import App from '../../app/components/App';
import { setSearch } from '../../app/actions/search';
import { getAlbums } from '../../app/actions/albums';

function renderHtml(html, preloadedState) {
  return `<!doctype html>
<html>
  <head>
    <title>Respotify</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.INITIAL_STATE = ${JSON.stringify(preloadedState)}
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>
  `;
}

function sendResponse(res, store) {
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Send the rendered page back to the client
  res.send(renderHtml(html, store.getState()));
}


export default function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(counterApp, applyMiddleware(thunk));
  const { query } = qs.parse(req.query);
  if (!query) {
    return sendResponse(res, store);
  }
  store.dispatch(setSearch(query));
  return store.dispatch(getAlbums(query)).then(() => {
    sendResponse(res, store);
  });
}
