import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchTVShowsSuccess = (shows) => {
  return {
    type: "FETCH_TVSHOWS_SUCCESS",
    shows,
  };
};

// export const fetchTVShows = () => async (dispatch) => {
//   await axios
//     .get(`${apiUrl}/search/shows`, {
//       params: {
//         q: "girls",
//       },
//     })
//     .then((res) => {
//       const data = res.data
//         .map((data) => data.show)
//         .map((item) => ({
//           id: item.id,
//           name: item.name,
//           image: item.image,
//           summary: item.summary,
//           language: item.language,
//           officialSite: item.officialSite,
//           links: item._links.self,
//           genres: item.genres,
//         }));
//       dispatch(tvshowsFetched(data));
//     })
//     .catch(console.error);
// };

export const fetchTVShows = (query) => async (dispatch) => {
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
