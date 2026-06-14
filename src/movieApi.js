import API from "./api";

// 🎬 Get all movies
export const getMovies = () => API.get("/movies");

// 🔍 (future use)
export const searchMovies = (query) =>
  API.get(`/movies/search?q=${query}`);

// 🎥 (future use)
export const getMovieById = (id) =>
  API.get(`/movies/${id}`);

export const getMoviesByGenre = (genreId) =>
  API.get(`/movies/genre/${genreId}`);

export const getTopRated = () =>
  API.get("/movies/top-rated");

export const getHollywood = () =>
  API.get("/movies/hollywood");

export const getBollywood = () =>
  API.get("/movies/bollywood");

export const getTrendingHollywood = () =>
  API.get("/movies/trending/hollywood");

export const getTrendingBollywood = () =>
  API.get("/movies/trending/bollywood");

export const getTrendingSouth = () =>
  API.get("/movies/trending/south");

export const getTrendingAnimated = () =>
  API.get("/movies/trending/animated");

export const getBollywoodPage = (page) =>
  API.get(`/movies/bollywood/page/${page}`);