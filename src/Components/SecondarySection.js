import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondarySection = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-48 ml-4 relative z-20">
        {movies && (
          <>
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
            <MovieList title="Popular" movies={movies.popularMovies} />
            <MovieList title="Top Rated" movies={movies.topRatedMovies} />
            <MovieList title="Upcoming" movies={movies.upcomingMovies} />
          </>
        )}
      </div>
    </div>
  );
};

export default SecondarySection;
