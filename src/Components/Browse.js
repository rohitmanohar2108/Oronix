import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainSection from "./MainSection";
import SecondarySection from "./SecondarySection";



const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainSection />
      <SecondarySection />
    </div>
  );
};

export default Browse;
