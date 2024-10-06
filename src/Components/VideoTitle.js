import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-full pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      {/* Movie Title */}
      <h1 className="text-6xl font-extrabold font-cinzel font-bold-700 mb-6 bg-gradient-to-r from-blue-500 via-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
        {title}
      </h1>

      {/* Movie Overview */}
      <p className="p-4 text-lg w-1/2 leading-relaxed mb-8 -ml-3">{overview}</p>

      {/* Buttons */}
      <div className="flex space-x-4 ml-1">
        {/* Play Button */}
        <button className="flex items-center bg-red-600 text-white px-6 py-2 rounded-md text-lg border-b-2 border-transparent border-orange-400 hover:bg-red-700 transition duration-200 ease-in-out">
          <FaPlay className="mr-2" /> Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-md text-lg border-b-2 border-transparent border-zinc-500 hover:bg-gray-700 transition duration-200 ease-in-out">
          <FaInfoCircle className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
