import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addPopularMovies, addPopularTvSeries } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularTvSeries = () => {
  const dispatch = useDispatch();

  const getPopularTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addPopularTvSeries(json.results));
  };

  useEffect(() => {
    getPopularTvSeries();
  }, []);
};

export default usePopularTvSeries;
