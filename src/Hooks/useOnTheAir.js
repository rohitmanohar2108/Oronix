import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import {  addOnTheAir } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useOnTheAir = () => {
  const dispatch = useDispatch();

  const getOnTheAir = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addOnTheAir(json.results));
  };

  useEffect(() => {
    getOnTheAir();
  }, []);
};

export default useOnTheAir;
