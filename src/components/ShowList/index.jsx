import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTVShows } from "../../store/shows/actions";
import { getTVShows } from "../../store/shows/selectors";
import { useHistory } from "react-router-dom";

const ShowListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tvshows = useSelector(getTVShows);

  useEffect(() => {
    dispatch(fetchTVShows("girls"));
  }, [dispatch]);

  if (!tvshows) return <div className="loadingMsg">Search your show!</div>;

  return (
    <div>
      <div className="showlist-container">
        {tvshows &&
          tvshows.map((show) => (
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
    </div>
  );
};

export default ShowListContainer;
