import React from "react";
import { useSelector } from "react-redux";
import { getEpisodebyID } from "../../store/episodes/selectors";
import noImage from "../../assets/no-img-landscape-text.png";

const EpisodeDetailContainer = (props) => {
  const episodeData = useSelector(getEpisodebyID(props.match.params.id));
  console.log("OUTPUT: EpisodeDetailContainer -> episodeData", episodeData);

  return (
    <div>
      <div className="episode-container">
        <div className="header">Season {episodeData.season}</div>

        <div className="episode-title">{episodeData.name}</div>

        <div className="episode-image-wrapper">
          {!episodeData.image ? (
            <a href={episodeData.url}>
              <img src={noImage} alt="noImageFound" />
            </a>
          ) : (
            <a href={episodeData.url}>
              <img src={episodeData.image.medium} alt="showposter" />
            </a>
          )}
        </div>

        <div className="episode-summary">
          {!episodeData.summary ? (
            <>
              <em>
                We don't have a summary for {episodeData.name} yet.
              </em>
            </>
          ) : (
            <>
              <div
                dangerouslySetInnerHTML={{ __html: episodeData.summary }}
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailContainer;
