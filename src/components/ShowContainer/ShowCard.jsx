import React from "react";

const ShowCard = (props) => {
  const { id, title, img, summary, rating } = props;

  return (
    <div key={id} className="container">
      <h1>{title}</h1>
      <div>{rating}</div>
      <img src={img} alt="poster" />
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
    </div>
  );
};

export default ShowCard