export const FIND_VIDEO_START = "FIND_VIDEO_START";
export const FIND_VIDEO_SUCCESS = "FIND_VIDEO_SUCCESS";
export const FIND_VIDEO_ERROR = "FIND_VIDEO_ERROR";

const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: ""
};

export default function find(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FIND_VIDEO_START:
      return {
        videos: [],
        loading: true,
        error: false
      };

    case FIND_VIDEO_SUCCESS:
      return {
        videos: action.payload,
        loading: false,
        error: false
      };

    case FIND_VIDEO_ERROR: {
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
