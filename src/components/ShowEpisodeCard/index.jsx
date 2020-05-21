import React from "react";
import { Link } from "react-router-dom";

const ShowEpisodeCard = (props) => {
  const { id, title, img, description } = props;

  return (
    <div key={id}>
      <h1>{title}</h1>
      <Link to={`/shows/${id}`}>
        <img src={img} alt="poster" />
      </Link>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export default ShowEpisodeCard;
