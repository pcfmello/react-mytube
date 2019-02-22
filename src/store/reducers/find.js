const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: ""
};

export default function find(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FIND_VIDEO_START":
      return {
        videos: [],
        loading: true,
        error: false
      };

    case "FIND_VIDEO_SUCCESS":
      return {
        videos: action.videos,
        loading: false,
        error: false
      };

    case "FIND_VIDEO_ERROR": {
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
