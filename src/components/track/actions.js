import * as musicApi from '../../services/api/musicApi';
import { SET_TRACKS, EMPTY_TRACKS } from './actionTypes';

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
    dispatch();
  };
}
