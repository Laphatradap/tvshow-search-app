import API from "../../api";

export const episodesFetched = (episodes) => {
  return {
    type: "EPISODES_FETCHED",
    episodes,
  };
};

export const fetchEpisodes = (showId) => async (dispatch) => {
  await API.get(`/shows/${showId}/episodes`)
    .then((res) => {
      dispatch(episodesFetched(res.data));
    })
    .catch(console.error);
};
