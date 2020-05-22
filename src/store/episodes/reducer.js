const initialState = [];

export default function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case "EPISODES_FETCHED":
      return [...state, action.episodes];
      
    default:
      return state;
  }
}
