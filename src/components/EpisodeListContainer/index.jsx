import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../../store/episodes/selectors";
import { fetchEpisodes } from "../../store/episodes/actions";
import { useHistory } from "react-router-dom";

const EpisodeListContainer = (props) => {
  const { showId } = props;
  const dispatch = useDispatch();
  const episodeList = useSelector(getEpisodes);
  const history = useHistory();
  const [state, setState] = useState("1");

  useEffect(() => {
    dispatch(fetchEpisodes(showId));
  }, [dispatch, showId]);

  if (!episodeList) return "Loading...";

  const episodeData = episodeList.find((e) => e.showId === showId);
  if (!episodeData) return "Loading..";

  const groupData = episodeData.data.map((episode) => episode);

  const groupBySeason = groupData.reduce((r, a) => {
    r[a.season] = [...(r[a.season] || []), a];
    return r;
  }, {});

  const renderSeasonNumber = Object.entries(groupBySeason).map(([key]) => {
    return (
      <div key={key} onClick={() => setState(key)} className="season-number">
        <p>Season {key}</p>
      </div>
    );
  });

  const renderSeasonInfo = Object.entries(groupBySeason).map(([key, value]) => {
    return (
      <div key={key}>
        {key === state && (
          <div className="info">
            {value.map((v) => (
              <div key={v.id}>
                {!v.image ? (
                  <div
                    key={v.id}
                    onClick={() => history.push(`/episode/${v.id}`)}
                    className="showTitle"
                  >
                    <div>{v.name}</div>
                  </div>
                ) : (
                  <div
                    key={v.id}
                    onClick={() => history.push(`/episode/${v.id}`)}
                    className="showTitle"
                  >
                    <div>{v.name}</div>
                    <img src={v.image.medium} alt="showposter" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <div className="header">Episodes</div>
      <div className="season-container">
        <div className="season-wrapper">
          <div>{renderSeasonNumber}</div>
        </div>
        <div className="episode-wrapper">
          <div>{renderSeasonInfo}</div>
        </div>
      </div>
    </div>
  );
};
export default EpisodeListContainer;
