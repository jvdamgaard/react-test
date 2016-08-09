import * as musicApi from '../../api/musicApi';
import { SET_TRACKS, EMPTY_TRACKS, SET_CURRENT_TRACK } from './types';

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

export function getTracks(albumId) {
  return (dispatch) => (
    musicApi
      .getTracks(albumId)
      .then(payload => {
        dispatch(setTracks(payload.tracks.items));
      })
  );
}

let curAudioObject;
export function playPreview(trackUrl) {
  return (dispatch) => {
    if (curAudioObject) {
      curAudioObject.pause();
    }

    curAudioObject = new Audio(trackUrl);
    curAudioObject.play();
    dispatch(setCurrentTrack(trackUrl));
  };
}
