import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoader(true);
      try {
        const moviesData = await fetchTrendingMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, []);

  return (
    movies && (
      <>
        {loader && <Loader />}
        <h1>Trending today</h1>
        <MovieList movies={movies} />
      </>
    )
  );
};

export default HomePage;
