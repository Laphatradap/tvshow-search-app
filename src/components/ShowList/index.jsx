import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTVShows } from "../../store/shows/actions";
import { getTVShows } from "../../store/shows/selectors";
import { useHistory } from "react-router-dom";

const ShowListContainer = () => {
  const dispatch = useDispatch();
  const tvshows = useSelector(getTVShows);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchTVShows());
  }, [dispatch]);

  if (!tvshows) return "Loading...";

  return (
    <div className="showlist-container">
      {tvshows.map((show) => (
        <div
          key={show.show.id}
          onClick={() => history.push(`/show/${show.show.id}`)}
        >
          <div>
          {!show.show.image ? (
              <div>No Photo!</div>
            ) : (
              <img src={show.show.image.medium} alt="showposter" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowListContainer;
