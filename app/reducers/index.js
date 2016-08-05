import { combineReducers } from 'redux';
import albums from './albums';
import tracks from './tracks';
import currentTrack from './currentTrack';
import search from './search';

export default combineReducers({
  albums,
  tracks,
  currentTrack,
  search,
});
