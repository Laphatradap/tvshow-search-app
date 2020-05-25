export const getEpisodes = (state) => state.episodes;

export const getEpisodebyID = (id) => (state) => {
  return state.episodes
    .flatMap((episode) => episode.data)
    .find((item) => item.id === Number(id));
};
