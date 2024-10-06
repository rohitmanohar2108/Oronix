import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="w-screen h-screen hide-scrollbar"> {/* Full screen width and height */}
      <Header />
      <MainSection />
      <SecondarySection />
    </div>
  );
};

export default Browse;
