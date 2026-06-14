import React, { useEffect, useState } from "react";
import { moodGenres } from "./moodData";
import MoodButton from "./Moodbutton";

const API_KEY = "cafd1dd89b09980ab77cf23458aeacd2";

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState("relax");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreId = moodGenres[selectedMood];
        if (!genreId) return;


        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&region=IN&sort_by=popularity.desc`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [selectedMood]);

  return (
    <div className="px-6 py-6 text-white">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

        <h2 className="text-2xl font-bold text-white mb-4 md:mb-10">
          🎭 Watch by Mood
        </h2>

        {/* BUTTONS */}
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

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => {
              window.open(
                `https://www.google.com/search?q=${encodeURIComponent(movie.title + " movie")}`,
                "_blank"
              );
            }}
            className="bg-gray-900 rounded-xl overflow-hidden 
                       hover:scale-105 hover:shadow-red-500/40 
                       transition duration-300 cursor-pointer group"
          >

            {/* IMAGE FRAME */}
            <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl">

              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450"
                }
                alt={movie.title}
                className="w-full h-90 object-cover object-fill
               group-hover:scale-110 hover:opacity-45 transition duration-300"
              />

            </div>
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
        ))}

      </div>

    </div>
  );
};

export default Mood;