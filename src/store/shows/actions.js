import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchTVShowsSuccess = (shows) => {
  return {
    type: "FETCH_TVSHOWS_SUCCESS",
    shows,
  };
};

export const fetchTVShows = (query) => async (dispatch) => {
  console.log("OUTPUT: fetchTVShows -> query", query)
  await axios
    .get(`${apiUrl}/search/shows`, {
      params: {
        q: query,
      },
    })
    .then((res) => {
      dispatch(fetchTVShowsSuccess(res.data));
    })
    .catch(console.err);
};
