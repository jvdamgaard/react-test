import {
  SET_TRACKS,
  EMPTY_TRACKS,
  SET_CURRENT_TRACK,
} from './types';

export function setTracks(tracks) {
  return {
    type: SET_TRACKS,
    tracks,
  };
}

export function emptyTracks() {
  return {
    type: EMPTY_TRACKS,
  };
}

export function setCurrentTrack(trackUrl) {
  return {
    type: SET_CURRENT_TRACK,
    trackUrl,
  };
}
