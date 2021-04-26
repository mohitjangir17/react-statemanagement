import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div className="movies">
      <h3>Name:{name}</h3>
      <h5>Price:{price}</h5>
    </div>
  );
};

export default Movie;
