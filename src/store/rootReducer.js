import { combineReducers } from "redux";
import showReducer from "./shows/reducer";
import episodeReducer from "./episodes/reducer"

export default combineReducers({
  shows: showReducer,
  episodes: episodeReducer
});
