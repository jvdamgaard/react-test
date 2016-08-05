import {
  SET_CURRENT_TRACK,
} from '../actions/types';

export default function currentTrackReducer(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      const { trackUrl } = action;
      return trackUrl;
    }

    default:
      return state;
  }
}
