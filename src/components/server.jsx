import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import Root from './app/AppContainer';

export default function init(url, store) {
  const memoryHistory = createMemoryHistory(url);
  const history = syncHistoryWithStore(memoryHistory, store);

  return renderToString(
    <AppContainer >
      <Root history={history} store={store} />
    </AppContainer>
  );
}
