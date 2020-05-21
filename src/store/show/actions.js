import API from "../../api";

export const tvshowsFetched = (shows) => {
  return {
    type: "TVSHOWS_FETCHED",
    shows,
  };
};

export const fetchTVShows = () => async (dispatch) => {
  await API.get(`/search/shows`, {
    params: {
      q: "girls",
    },
  })
    .then((res) => {
      dispatch(tvshowsFetched(res.data));
    })
    .catch(console.error);
};
