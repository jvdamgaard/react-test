import {
  SET_SEARCH,
} from './types';

export function setSearch(term) {
  return {
    type: SET_SEARCH,
    term,
  };
}
