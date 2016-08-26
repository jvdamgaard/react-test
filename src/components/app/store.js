import { routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function store(initialState, reduxDevTools) {
  const enhancer = (reduxDevTools) ?
    compose(applyMiddleware(thunk), reduxDevTools) :
    applyMiddleware(thunk);

  return createStore(
    combineReducers({ ...reducers, routing: routerReducer }),
    initialState,
    enhancer
  );
}
