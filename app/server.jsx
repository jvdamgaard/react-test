import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Router from './components/Router';

export default function render(url, store) {
  const memoryHistory = createMemoryHistory(url);
  const history = syncHistoryWithStore(memoryHistory, store);

  // Render the component to a string
  return renderToString(
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
}
