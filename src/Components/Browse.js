import useAiringTodayTvSeries from "../Hooks/useAiringTodayTvSeries";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useOnTheAir from "../Hooks/useOnTheAir";
import usePopularMovies from "../Hooks/usePopularMovies";
import usePopularTvSeries from "../Hooks/usePopularTvSeries";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useTopRatedTvSeries from "../Hooks/useTopRatedTvSeries";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayTvSeries();
  usePopularTvSeries();
  useOnTheAir();
  useTopRatedTvSeries();

  return (
    <div className="w-screen h-screen hide-scrollbar"> {/* Full screen width and height */}
      <Header />
      <MainSection />
      <SecondarySection />
    </div>
  );
};

export default Browse;
