import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTVShows } from "../../store/show/actions";
import { getTVShows } from "../../store/show/selectors";
import ShowEpisodeCard from "../ShowEpisodeCard";

const ShowContainer = () => {
  const dispatch = useDispatch();
  const tvshows = useSelector(getTVShows);

  useEffect(() => {
    dispatch(fetchTVShows());
  }, [dispatch]);

  if (!tvshows) return "Loading...";

  const renderShows = (tvshows, CardComponent) => {
    return tvshows.map((show) => (
      <CardComponent
        key={show.show.id}
        id={show.show.id}
        title={show.show.name}
        img={show.show.image.medium}
        description={show.show.summary}
      />
    ));
  };

  return <div>{renderShows(tvshows, ShowEpisodeCard)}</div>;
};
export default ShowContainer;
