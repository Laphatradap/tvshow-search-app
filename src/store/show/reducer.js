export default function tvshowReducer(state = null, action) {
  switch (action.type) {
    case "TVSHOWS_FETCHED":
      return action.shows;

    default:
      return state;
  }
}
