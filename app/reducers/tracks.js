import {
  SET_TRACKS,
  EMPTY_TRACKS,
} from '../actions/types';

export default function tracksReducer(state = [], action) {
  switch (action.type) {
    case SET_TRACKS: {
      const { tracks } = action;
      return tracks;
    }

    case EMPTY_TRACKS: {
      return [];
    }

    default:
      return state;
  }
}
