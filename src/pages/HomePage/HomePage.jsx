import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/movies-api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrendingMovies().then(setMovies);
    setLoader(false);
  }, []);

  return (
    movies && (
      <>
        {loader && <Loader />}
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    )
  );
};

export default HomePage;
