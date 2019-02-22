// Usando Redux Thunk
import youtubeSearch from "youtube-api-v3-search";
import youtubeApi from "../../api";

const API_KEY = youtubeApi;

export const findVideoStart = () => ({
  type: "FIND_VIDEO_START",
  loading: true,
  error: false
});

export const findVideoSuccess = videos => ({
  type: "FIND_VIDEO_SUCCESS",
  videos,
  loading: false,
  error: false
});

export const findVideoError = () => ({
  type: "FIND_VIDEO_ERROR",
  loading: false,
  error: true
});

export const findVideo = q => {
  return dispatch => {
    dispatch(findVideoStart());
    youtubeSearch(API_KEY, { q })
      .then(resp => dispatch(findVideoSuccess(resp.items)))
      .catch(() => dispatch(findVideoError()));
  };
};
