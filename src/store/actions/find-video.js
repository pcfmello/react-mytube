// Usando Redux Thunk
import youtubeSearch from "youtube-api-v3-search";
import { API_KEY as youtubeApi } from "../../constants";

import {
  SEARCH_VIDEO_START,
  SEARCH_VIDEO_SUCCESS,
  SEARCH_VIDEO_ERROR
} from "../reducers/find";

export const searchVideoStart = () => ({
  type: SEARCH_VIDEO_START
});

export const searchVideoSuccess = payload => ({
  type: SEARCH_VIDEO_SUCCESS,
  payload
});

export const searchVideoError = () => ({
  type: SEARCH_VIDEO_ERROR
});

export const searchVideo = q => {
  return dispatch => {
    dispatch(searchVideoStart());
    youtubeSearch(youtubeApi, { q })
      .then(resp => dispatch(searchVideoSuccess(resp.items)))
      .catch(() => dispatch(searchVideoError()));
  };
};
