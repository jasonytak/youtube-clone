import { FETCH_VIDEOS, SELECT_VIDEO } from '../actions/types';

const INTIAL_STATE = {
  videos: null,
  selectedVideo: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload.items,
        selectedVideo: action.payload.items[0]
      };
    case SELECT_VIDEO:
      return { ...state, selectedVideo: action.payload}
    default:
      return state;
  }
};
