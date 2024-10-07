import React, { useState } from "react";
import { FaPlay, FaPlus } from "react-icons/fa"; // Import icons
import { IMG_CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addWishlist } from "../Utils/wishListSlice";

const MovieCard = ({ posterPath, title, id, onClick }) => {
  const [showPlayText, setShowPlayText] = useState(false); // State for play text
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setShowPlayText(true); // Show play text
  };

  const handleMouseLeave = () => {
    setShowPlayText(false); // Hide play text
  };

  const handleAddToWishList = () => {
    dispatch(addWishlist({ id, title, posterPath })); // Use the correct action
  };

  return (
    <div className="relative w-48 h-72 cursor-pointer group">
      {/* Movie Poster Image */}
      <img
        alt="Movie Card"
        src={`${IMG_CDN_URL}${posterPath}`}
        className="w-full h-full object-cover transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="p-4 bg-red-600 hover:bg-red-700 text-white rounded-full"
        >
          <FaPlay className="text-xl" />
        </button>
      </div>

      {/* Add to Wish List Button */}
      <button
        onClick={handleAddToWishList}
        className="absolute top-2 right-2 bg-white p-1 rounded-full text-black hover:bg-gray-300"
      >
        <FaPlus className="text-lg" />
      </button>

      {/* Play Text Tooltip */}
      {showPlayText && (
        <div className="absolute bottom-[84px] left-1/2 transform -translate-x-1/2 border border-zinc-400 bg-zinc-800 text-white text-xs font-medium py-1 px-3 rounded-full shadow-lg">
          Play
        </div>
      )}
    </div>
  );
};

export default MovieCard;
