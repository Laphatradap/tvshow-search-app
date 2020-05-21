import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../store/episode/actions";
import { getEpisodeList } from "../../store/episode/selectors";
import ShowEpisodeCard from "../ShowEpisodeCard";

const EpisodeContainer = (props) => {
  const showId = props.match.params.id;
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodeList);

  useEffect(() => {
    dispatch(fetchEpisodes(showId));
  }, [dispatch]);

  if (!episodes) return "Loading...";

  const renderEpisodes = (episodes, CardComponent) => {
    return episodes.map((episode) => (
      <CardComponent
        key={episode.id}
        id={episode.id}
        title={episode.name}
        img={episode.image.medium}
        description={episode.summary}
      />
    ));
  };

  return <div>{renderEpisodes(episodes, ShowEpisodeCard)}</div>;
};

export default EpisodeContainer;
