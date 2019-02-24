import { combineReducers } from "redux";
import find from "./find";
import play from "./play";

const rootReducer = combineReducers({
  find,
  play
});

export default rootReducer;
