import API from "./api";

// 🎬 All movies
export const getMovies = () => API.get("/movies");

// 🔍 Search
export const searchMovies = (query) =>
  API.get(`/search?q=${query}`);

// 🎥 Movie details
export const getMovieById = (id) =>
  API.get(`/movie/${id}`);

// 🎭 Genre
export const getMoviesByGenre = (genreId) =>
  API.get(`/movies/genre/${genreId}`);

// ⭐ Featured
export const getTopRated = () =>
  API.get("/movies/top-rated");

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

export const getHollywoodPage = (page) =>
  API.get(`/movies/hollywood/page/${page}`);

export const getKoreanPage = (page) =>
  API.get(`/movies/korean/page/${page}`);

export const getThaiPage = (page) =>
  API.get(`/movies/thai/page/${page}`);

export const getSouthPage = (page) =>
  API.get(`/movies/south/page/${page}`);