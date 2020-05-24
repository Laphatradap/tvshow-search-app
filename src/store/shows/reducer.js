export default function tvshowReducer(state = null, action) {
  switch (action.type) {
    case "FETCH_TVSHOWS_SUCCESS":
      return action.shows;

    default:
      return state;
  }
} 
