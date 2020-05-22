import React from "react";
import { useSelector } from "react-redux";
import { getEpisodes } from "../../store/episodes/selectors";

const EpisodeDetailContainer = (props) => {
  const episodes = useSelector(getEpisodes);

  const episodeData = episodes
    .flatMap((episode) => episode.data)
    .map((data) => data)
    .find((item) => item.id === Number(props.match.params.id));

  return (
    <div>
      <h1>Season {episodeData.season}</h1>
      <h2>{episodeData.name}</h2>
      <>
        {!episodeData.image ? (
          <div>No Photo!</div>
        ) : (
          <img src={episodeData.image.medium} alt="showposter" />
        )}
      </>
      <div dangerouslySetInnerHTML={{ __html: episodeData.summary }}></div>
    </div>
  );
};

export default EpisodeDetailContainer;
