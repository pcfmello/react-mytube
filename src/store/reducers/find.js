export const SEARCH_VIDEO_START = "SEARCH_VIDEO_START";
export const SEARCH_VIDEO_SUCCESS = "SEARCH_VIDEO_SUCCESS";
export const SEARCH_VIDEO_ERROR = "SEARCH_VIDEO_ERROR";

const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: ""
};

export default function find(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_VIDEO_START:
      return {
        videos: [],
        loading: true,
        error: false
      };

    case SEARCH_VIDEO_SUCCESS:
      return {
        videos: action.payload,
        loading: false,
        error: false
      };

    case SEARCH_VIDEO_ERROR: {
      return {
        videos: [],
        loading: false,
        error: true
      };
    }

    default:
      return state;
  }
}
