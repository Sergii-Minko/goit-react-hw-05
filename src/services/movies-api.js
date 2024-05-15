import axios from "axios";

const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "bc2889845986d56a8f4e15dd0e60e301",
    language: "en-US",
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await moviesApi.get("/trending/movie/day");
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await moviesApi.get("/search/movie", {
    params: { query },
  });
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await moviesApi.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await moviesApi.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchReviews = async (movieId) => {
  const { data } = await moviesApi.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const fetchMovieByCategory = async (category) => {
  const { data } = await moviesApi.get(`/movie/${category}`);
  return data.results;
};

export const fetchMovieByCategoryWithPage = async (category, page) => {
  const { data } = await moviesApi.get(`/movie/${category}`, {
    params: { page },
  });
  return data.results;
};
