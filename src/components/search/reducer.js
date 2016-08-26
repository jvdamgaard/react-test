import { SET_SEARCH } from './actionTypes';

export default function searchReducer(state = '', action) {
  switch (action.type) {
    case SET_SEARCH: {
      const { term } = action;
      return term;
    }

    default:
      return state;
  }
}
