import React from "react";
import { useSelector } from "react-redux";
import { getTVShows } from "../../store/shows/selectors";
import EpisodeListContainer from "../EpisodeListContainer";
import { useParams } from "react-router-dom";

// import ShowCard from "./ShowCard";
const ShowContainer = () => {
  const params = useParams();
  const showId = parseInt(params.id);
  const tvshows = useSelector(getTVShows);

  if (!tvshows) return "Loading...";
  const showData = tvshows
    .map((show) => show.show)
    .find((item) => item.id === showId);

  // const renderShow = (showData, CardComponent) => {
  //   return (
  //     <CardComponent
  //       key={showData.id}
  //       id={showData.id}
  //       title={showData.name}
  //       img={showData.image.medium}
  //       summary={showData.summary}
  //       rating={showData.rating.average}
  //     />
  //   );
  // };

  return (
    <div className="showCard-container">
      <div>
        {" "}
        {!showData.image ? (
          <div>No Photo!</div>
        ) : (
          <img
            src={showData.image.original}
            alt="showposter"
            className="image"
            height="115px"
            width="169px"
          />
        )}
      </div>
      <div className="title">{showData.name}</div>
      <div className="showInfo">
        {showData.language}
        {" | "}
        {showData.genres.map((genre) => (
          <span key={showData.id}>{genre} </span>
        ))}
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: showData.summary }}
      ></div>
      <div>
        <EpisodeListContainer showId={showData.id} />
      </div>
    </div>
  );
};

export default ShowContainer;
