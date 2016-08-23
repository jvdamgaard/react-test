import { match } from 'react-router';
import fetchComponentData from '../utils/fetch-component-data';
import createStore from '../../app/store';
import renderReact from '../../compiled/render-react';
import routes from '../../compiled/routes';

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

export default function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore();

  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    }

    if (!props) {
      return res.status(404).send('Not found');
    }

    return fetchComponentData(store.dispatch, props.params)
      .then(() => {
        const initView = renderReact(req.url, store);
        return renderHtml(initView, store.getState());
      })
      .then(page => res.status(200).send(page))
      .catch(fetchError => res.end(fetchError.message));
  });
}
