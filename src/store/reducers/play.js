export const PLAY_VIDEO = "PLAY_VIDEO";

const INITIAL_STATE = {
  video: {}
};

export default function play(state = INITIAL_STATE, action) {
  if (action.type === PLAY_VIDEO) {
    return { video: action.payload };
  }
  return state;
}
