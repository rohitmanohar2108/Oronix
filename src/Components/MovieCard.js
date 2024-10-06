import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={`${IMG_CDN_URL}${posterPath}`} className="rounded-lg" />
    </div>
  );
};

export default MovieCard;
