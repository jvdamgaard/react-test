import {
  SET_SEARCH,
} from '../actions/types';

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
