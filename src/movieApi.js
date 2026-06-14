import API from "./api";

// 🎬 Get all movies
export const getMovies = () => API.get("/movies");

// 🔍 Search (FIXED)
export const searchMovies = (query) =>
  API.get(`/search?q=${query}`);

// 🎥 Movie details (FIXED)
export const getMovieById = (id) =>
  API.get(`/movie/${id}`);

// 🎭 Genre
export const getMoviesByGenre = (genreId) =>
  API.get(`/movies/genre/${genreId}`);

// ⭐ Featured
export const getTopRated = () =>
  API.get("/movies/top-rated");

export const getHollywood = () =>
  API.get("/movies/hollywood");

export const getBollywood = () =>
  API.get("/movies/bollywood");

// 🔥 Trending
export const getTrendingHollywood = () =>
  API.get("/movies/trending/hollywood");

export const getTrendingBollywood = () =>
  API.get("/movies/trending/bollywood");

export const getTrendingSouth = () =>
  API.get("/movies/trending/south");

export const getTrendingAnimated = () =>
  API.get("/movies/trending/animated");

// 📄 Pagination
export const getBollywoodPage = (page) =>
  API.get(`/movies/bollywood/page/${page}`);