import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../../store/episodes/selectors";
import { fetchEpisodes } from "../../store/episodes/actions";

const EpisodeListContainer = (props) => {
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodes);

  useEffect(() => {
    dispatch(fetchEpisodes(props.showId));
  }, [dispatch]);

  if (!episodes) return "Loading...";

  const episodeData = episodes.find((e) => e.showId === props.showId);
  if (!episodeData) return "loading..";

  const groupData = episodeData.data.map((episode) => episode);

  const groupBySeason = groupData.reduce((r, a) => {
    r[a.season] = [...(r[a.season] || []), a];
    return r;
  }, {});

  const renderSeason = Object.entries(groupBySeason).map(([key, value], i) => {
    return (

        <div key={key}>
          <h4>Season {key}</h4>
          {value.map((v) => (
            <div key={v.id}>{v.name}</div>
          ))}
        </div>
    
    );
  });

  return (
    <div>
      <h2>Episodes:</h2>
      <div>{renderSeason}</div>
    </div>
  );
};
export default EpisodeListContainer;
