import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBaground";

const MainSection = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies == null) return null; // Return null if no movies are found
  const mainMovie = movies[0];

  const { original_title, overview } = mainMovie;

  return (
    <div className="relative w-screen">
      {/* Video Title displayed above the video background */}
      <VideoTitle title={original_title} overview={overview} />

      {/* Video Background covering the full area */}
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainSection;
