import { SET_ALBUMS } from './actionTypes';

export default function albumsReducer(state = [], action) {
  switch (action.type) {
    case SET_ALBUMS: {
      const { albums } = action;
      return albums;
    }

    default:
      return state;
  }
}
