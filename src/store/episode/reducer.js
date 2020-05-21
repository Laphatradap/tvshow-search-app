export default function episodeReducer(state = null, action) {
  switch (action.type) {
    case "EPISODES_FETCHED":
      return action.episodes;

    default:
      return state;
  }
}