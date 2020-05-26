import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchEpisodesSuccess = (episodes) => {
  return {
    type: "FETCH_EPISODES_SUCCESS",
    episodes,
  };
};

export const fetchEpisodes = (showId) => async (dispatch) => {
  await axios
    .get(`${apiUrl}/shows/${showId}/episodes`)
    .then((res) => {
      dispatch(fetchEpisodesSuccess({ data: res.data, showId }));
    })
    .catch(console.error);
};
