import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../../store/episodes/selectors";
import { fetchEpisodes } from "../../store/episodes/actions";
import { useHistory } from "react-router-dom";
// import ShowEpisodeCard from "../ShowEpisodeCard";

const EpisodeListContainer = (props) => {
  const {showId} = props;
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodes);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchEpisodes(showId));
  }, [dispatch]);

  if (!episodes) return "Loading...";

  const episodeData = episodes.find((e) => e.showId === showId);
  if (!episodeData) return "Loading..";

  const groupData = episodeData.data.map((episode) => episode);
  console.log("OUTPUT: EpisodeListContainer -> groupData", groupData);

  const groupBySeason = groupData.reduce((r, a) => {
    r[a.season] = [...(r[a.season] || []), a];
    return r;
  }, {});

  const renderSeasons = Object.entries(groupBySeason).map(([key, value], i) => {
    return (
      <div key={key}>
        <h4>Season {key}</h4>
        <>
          {value.map((v) => (
            <div key={v.id} onClick={() => history.push(`/episode/${v.id}`)}>
              <div>{v.name}</div>
              <>
                {!v.image ? (
                  <div>No Photo Found!</div>
                ) : (
                  <img src={v.image.medium} alt="showposter" />
                )}
              </>
            </div>
          ))}
        </>
      </div>
    );
  });

  return (
    <div>
      <h2>Episodes:</h2>
      <div>{renderSeasons}</div>
    </div>
  );
};
export default EpisodeListContainer;
