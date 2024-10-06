import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath, onClick }) => {
  return (
    <div className="relative w-48 cursor-pointer" onClick={onClick}>
      <img
        alt="Movie Card"
        src={`${IMG_CDN_URL}${posterPath}`}
        className="rounded-lg transition-transform duration-300 transform hover:scale-105"
      />
    </div>
  );
};

export default MovieCard;
