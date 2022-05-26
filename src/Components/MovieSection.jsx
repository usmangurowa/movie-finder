import React from "react";

const MovieSection = () => {
  return (
    <div className="movie-section">
      <div className="info">
        <h1>
          Thor <span className="year">06 May 2011</span>
        </h1>
        <span className="year">PG-13</span>
        <p>
          <b>Genre:</b> Action, Adventure, Fantasy
        </p>
        <p>
          <b>imdbRating:</b> 7.0
        </p>
        <p>
          <b>Actors:</b> Chris Hemsworth, Anthony Hopkins, Natalie Portman
        </p>
        <p>
          <b>Plot:</b> The powerful but arrogant god Thor is cast out of Asgard
          to live amongst humans in Midgard (Earth), where he soon becomes one
          of their finest defenders.
        </p>
      </div>
      <div className="poster">
        <img src="/loki.jpg" alt="" />
      </div>
    </div>
  );
};
export default MovieSection;
