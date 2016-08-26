import { SET_SEARCH } from './actionTypes';

export function noop() {}

export function setSearch(term) {
  return {
    type: SET_SEARCH,
    term,
  };
}
