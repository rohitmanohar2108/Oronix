import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img alt="Movie Card" src={`${IMG_CDN_URL}${posterPath}`} className="" />
    </div>
  );
};

export default MovieCard;
