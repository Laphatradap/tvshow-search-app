import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTVShows } from "../../store/shows/actions";
import { getTVShows } from "../../store/shows/selectors";
import EpisodeListContainer from "../EpisodeListContainer";

const ShowContainer = () => {
  const dispatch = useDispatch();
  const tvshows = useSelector(getTVShows);

  useEffect(() => {
    dispatch(fetchTVShows());
  }, [dispatch]);

  if (!tvshows) return "Loading...";

  return (
    <div>
      {tvshows.map((show) => (
        <div key={show.show.id}>
          <h1>{show.show.name}</h1>
          <img src={show.show.image.medium} alt="showPoster" />
          <div dangerouslySetInnerHTML={{ __html: show.show.summary }}></div>
          <a href={show.show.officialSite}>{show.show.officialSite}</a>
          <br></br>
            <div>Average rating: {show.show.rating.average}</div>
          <div>
            <EpisodeListContainer showId={show.show.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowContainer;
