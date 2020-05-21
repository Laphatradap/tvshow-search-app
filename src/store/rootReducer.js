import { combineReducers } from "redux";
import showReducer from "./show/reducer";
import episodeReducer from "./episode/reducer"

export default combineReducers({
  shows: showReducer,
  episodes: episodeReducer
});
