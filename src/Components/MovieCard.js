import React, { useState } from "react";
import { FaPlay } from "react-icons/fa"; // Import the Play icon
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath, onClick }) => {
  const [showPlayText, setShowPlayText] = useState(false); // State to manage the visibility of the "Play" text

  const handleMouseEnter = () => {
    setShowPlayText(true); // Show "Play" text on hover
  };

  const handleMouseLeave = () => {
    setShowPlayText(false); // Hide "Play" text when not hovering
  };

  return (
    <div className="relative w-48 h-72 cursor-pointer group"> 
      {/* Movie Poster Image */}
      <img
        alt="Movie Card"
        src={`${IMG_CDN_URL}${posterPath}`}
        className="w-full h-full object-cover transition-transform duration-300"
      />

      {/* Overlay (dark background with opacity) */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Play Button (appears on hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={onClick}
          onMouseEnter={handleMouseEnter} // Show tooltip on hover
          onMouseLeave={handleMouseLeave} // Hide tooltip when not hovering
          className="p-4 bg-red-600 hover:bg-red-700 text-white rounded-full"
        >
          <FaPlay className="text-xl" /> {/* Play Icon */}
        </button>
      </div>

      {/* Play Text Tooltip (appears on hover) */}
      {showPlayText && (
        <div className="absolute bottom-[84px] left-1/2 transform -translate-x-1/2 border border-zinc-400 bg-zinc-800 text-white text-xs font-medium py-1 px-3 rounded-full shadow-lg">
          <div className="relative">
            <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-red-700"></div>
            Play
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
