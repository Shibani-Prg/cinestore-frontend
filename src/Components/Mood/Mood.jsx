import React, { useEffect, useState } from "react";
import { moodGenres } from "./moodData";
import MoodButton from "./Moodbutton";
import { getMoviesByGenre } from "../../movieApi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const Mood = () => {
  const [selectedMood, setSelectedMood] = useState("relax");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const genreId = moodGenres[selectedMood];
        if (!genreId) return;

        const { data } = await getMoviesByGenre(genreId);
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedMood]);

  return (
    <div className="px-6 py-6 text-white">
      <Helmet>
        <title>Movies by Mood | Movora</title>
        <meta name="description" content="Find movies based on your mood" />
        <meta property="og:title" content="Movies by Mood | Movora" />
        <meta property="og:description" content="Explore movies based on your mood" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h2 className="text-2xl font-bold mb-4 md:mb-10">
          🎭 Watch by Mood
        </h2>

        {/* MOOD BUTTONS */}
        <div className="flex gap-3 flex-wrap">
          {Object.keys(moodGenres).map((mood) => (
            <MoodButton
              key={mood}
              mood={mood}
              active={selectedMood === mood}
              onClick={() => setSelectedMood(mood)}
            />
          ))}
        </div>
      </div>

      {/* LABEL */}
      <h3 className="mb-4 text-gray-400">
        Showing <span className="text-red-500">{selectedMood}</span> mood 🎬
      </h3>

      {/* LOADING */}
      {loading && (
        <p className="text-center mt-10 text-gray-400">
          Loading movies...
        </p>
      )}

      {/* EMPTY */}
      {!loading && movies.length === 0 && (
        <p className="text-center mt-10 text-gray-400">
          No movies found 😢
        </p>
      )}

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {!loading &&
          movies.map((movie) => {
            let existing = [];

            try {
              existing = JSON.parse(localStorage.getItem("watchlist")) || [];
            } catch (err) {
              console.error("Invalid watchlist data");
              existing = [];
            }

            const isSaved = existing.some((m) => m.id === movie.id);

            const toggleWatchlist = (e) => {
              e.stopPropagation();

              let updated;

              if (isSaved) {
                updated = existing.filter((m) => m.id !== movie.id);
                console.log("Removed ❌");
              } else {
                updated = [...existing, movie];
                console.log("Added ✅");
              }

              localStorage.setItem("watchlist", JSON.stringify(updated));

              // force re-render
              setMovies((prev) => [...prev]);
            };

            return (
              <div
                key={movie.id}
                className="bg-gray-900 rounded-xl overflow-hidden 
                           hover:scale-105 hover:shadow-red-500/40 
                           transition duration-300 cursor-pointer group relative"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >

                {/* IMAGE */}
                <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/300x450"
                    }
                    alt={movie.title}
                    className="w-full h-90 object-cover
                    group-hover:scale-110 group-hover:opacity-50 transition duration-300"
                  />
                </div>

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-black/70 opacity-0 
                  group-hover:opacity-70
                  flex flex-col justify-center items-center
                  text-white text-xs p-2
                  transition duration-300"
                >

                  {/* ⭐ Rating */}
                  <p className="mb-2">⭐ {movie.vote_average}</p>

                  {/* ❤️ TOGGLE */}
                  <button
                    onClick={toggleWatchlist}
                    className={`px-3 py-1 rounded text-xs mb-2 ${isSaved ? "bg-green-600" : "bg-red-600"
                      }`}
                  >
                    {isSaved ? "✅ Added" : "❤️ Save"}
                  </button>

                  {/* ℹ️ DETAILS */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/movie/${movie.id}`);
                    }}
                    className="bg-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-600"
                  >
                    ℹ️ Details
                  </button>
                </div>

                {/* BADGE */}
                {isSaved && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Added
                  </div>
                )}

                {/* INFO */}
                <div className="p-3 bg-black/80">
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {movie.title}
                  </h3>

                  <span className="text-red-500 text-xs">
                    ⭐ {movie.vote_average}
                  </span>
                </div>

              </div>
            );
          })}

      </div>
    </div>
  );
};

export default Mood;