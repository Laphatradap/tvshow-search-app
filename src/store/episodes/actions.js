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
      dispatch(episodesFetched({ data: res.data, showId }));
    })
    .catch(console.error);
};


// https://api.tvmaze.com/episodes/1

// export const episodeFetched = (episode) => {
//   return {
//     type: "EPISODE_FETCHED",
//     episode,
//   };
// };

// export const fetchEpisode = (episodeId) => async (dispatch) => {
//   await API.get(`/episodes/${episodeId}`)
//     .then((res) => {
//       dispatch(episodeFetched(res.data));
//     })
//     .catch(console.error);
// };