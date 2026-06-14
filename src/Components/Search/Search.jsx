import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";


const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false); // 🔥 NEW
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // const API_KEY = "cafd1dd89b09980ab77cf23458aeacd2";

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      setLoading(true); // 🔥 start loading

      try {
       const res = await fetch(
  `https://movie-backend-5eac.onrender.com/search?q=${query}`
);
        const data = await res.json();

        setSuggestions(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); // 🔥 stop loading
      }
    };

    const timer = setTimeout(fetchMovies, 400);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search/${query}`);
    setSuggestions([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div ref={wrapperRef} className="relative w-72">
      <form onSubmit={handleSearch} className="relative">

        {/* INPUT */}
        <div className="relative">

          {/* 🔍 SEARCH ICON */}
          <span
            onClick={() => {
              if (query.trim().length >= 2) {
                setQuery(query); // trigger useEffect
              }
            }}
            className="absolute right-4 top-3 cursor-pointer text-gray-400 hover:text-white"
          >
            <FiSearch size={18} />
          </span>

          {/* INPUT */}
          <input
            onFocus={() => setShowSuggestions(true)}
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-gray-900 text-white px-4 pr-10 py-2 rounded-full h-12 w-full
               outline-none focus:ring-2 focus:ring-white"
          />

        </div>

        {/* LOADING */}
        {loading && (
          <div className="absolute right-4 top-3 text-white text-sm">
            Loading...
          </div>
        )}

        {/* SUGGESTIONS */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute w-full bg-gray-900 mt-2 rounded-xl shadow-lg z-50 max-h-72 overflow-y-auto">

            {suggestions.map((movie) => (
              <div
                key={movie.id}
                onClick={() => {
                  window.open(`https://www.google.com/search?q=${movie.title}`, "_blank");
                  setQuery(movie.title);
                  setSuggestions([]);
                }}
                className="flex items-center gap-3 p-3 hover:bg-gray-800 cursor-pointer"
              >

                {/* 🎬 POSTER */}
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                      : "https://via.placeholder.com/50x70"
                  }
                  alt={movie.title}
                  className="w-10 h-14 object-cover rounded"
                />

                {/* TITLE + YEAR */}
                <div className="text-white">
                  <p className="text-sm font-medium">{movie.title}</p>
                  <p className="text-xs text-gray-400">
                    {movie.release_date?.split("-")[0]}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </form>
    </div>
  );
};

export default Search;