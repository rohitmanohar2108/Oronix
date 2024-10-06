import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const MovieModal = ({ movieId, title, overview, onClose }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
        >
          &times; {/* Close button */}
        </button>
        
        {/* Movie Title */}
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>

        {/* Movie Overview */}
        <p className="text-white mb-4">{overview}</p>

        <iframe
          className="w-full aspect-video rounded-lg"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?rel=0&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="text-white mt-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2">{overview}</p>
          {/* Add more movie details as needed */}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
