import React from "react";
import { useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import useMovieTrailer from "../Hooks/useMovieTrailer";

const MovieModal = ({ movieId, title, overview, onClose }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      {/* Increased max-w-5xl for larger modal size */}
      <div className="relative bg-gray-900 p-8 rounded-lg max-w-5xl w-full h-auto">
        
        {/* Movie Title */}
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>

        {/* Movie Overview */}
        <p className="text-white mb-4 text-lg">{overview}</p>

        <iframe
          className="w-full aspect-video rounded-lg mt-4"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?rel=0&autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Close Button below the video */}
        <button 
          onClick={onClose} 
          className="mt-6 w-full p-2 bg-gray-800 rounded-md text-white hover:bg-gray-700 transition duration-200"
        >
          <FaTimes className="mr-2 inline" /> Close {/* Using the close icon */}
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
