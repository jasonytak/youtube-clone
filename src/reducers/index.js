import { combineReducers } from 'redux';
import VideoReducer from './videoReducer';

export default combineReducers({
  videos: VideoReducer
});