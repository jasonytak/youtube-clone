import { FETCH_VIDEOS, SELECT_VIDEO } from './types';
import youtube from '../apis/youtube';

export const fetchVideos = term => async dispatch => {
  const response = await youtube.get('/search', {
    params: {
      q: term
    }
  });
  dispatch({ type: FETCH_VIDEOS, payload: response.data });
};

export const selectVideo = video => dispatch => {
  dispatch({ type: SELECT_VIDEO, payload: video });
};
