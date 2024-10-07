import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer"; // Import the Shimmer component

const SecondarySection = () => {
  const movies = useSelector((store) => store.movies);
  const isLoading = !movies || Object.keys(movies).length === 0; // Determine if loading

  return (
    <div className="bg-black">
      <div className="-mt-48 ml-4 relative z-20 bg-gradient-to-tl from-black/10">
        {isLoading ? ( // Show shimmer if loading
          <Shimmer />
        ) : (
          <>
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
            <MovieList title="Popular" movies={movies.popularMovies} />
            <MovieList title="Top Rated" movies={movies.topRatedMovies} />
            <MovieList title="Upcoming" movies={movies.upcomingMovies} />
            <MovieList title="Airing Today Tv Series" movies={movies.airingTodayTvSeries} />
            <MovieList title="Popular TV Series" movies={movies.popularTvSeries} />
            <MovieList title="On The Air TV Series" movies={movies.onTheAir} />
            <MovieList title="Top Rated TV Series" movies={movies.topRatedTvSeries} />
          </>
        )}
      </div>
    </div>
  );
};

export default SecondarySection;
