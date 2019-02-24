// Usando Redux Thunk
import youtubeSearch from "youtube-api-v3-search";
import youtubeApi from "../../api";

import {
  FIND_VIDEO_START,
  FIND_VIDEO_SUCCESS,
  FIND_VIDEO_ERROR
} from "../reducers/find";

const API_KEY = youtubeApi;

export const findVideoStart = () => ({
  type: FIND_VIDEO_START
});

export const findVideoSuccess = payload => ({
  type: FIND_VIDEO_SUCCESS,
  payload
});

export const findVideoError = () => ({
  type: FIND_VIDEO_ERROR
});

export const findVideo = q => {
  return dispatch => {
    dispatch(findVideoStart());
    youtubeSearch(API_KEY, { q })
      .then(resp => dispatch(findVideoSuccess(resp.items)))
      .catch(() => dispatch(findVideoError()));
  };
};
