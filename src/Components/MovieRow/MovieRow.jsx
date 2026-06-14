import React, { useEffect, useRef, useState } from "react";



const MovieRow = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef();

  // 🎬 FETCH MOVIES
  useEffect(() => {
    const fetchMovies = async () => {
      try {

        const res = await fetch(
          "https://movie-backend-5eac.onrender.com/movies"
        );



        const data = await res.json();


        // ✅ CHANGED: backend already gives combined data
        const filtered = (data.results || []).filter(
          (m) => m && m.poster_path
        );

        setMovies(filtered);

      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); // ✅ ONLY ONCE

  // AUTO SCROLL
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (rowRef.current) {
        rowRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // ⬅️➡️ SCROLL
  const scroll = (dir) => {
    const amount = dir === "left" ? -400 : 400;
    rowRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="px-6 py-6 text-white bg-black relative">
      <h2 className="text-2xl font-bold mb-4 text-white">
        🌍 Best Movies
      </h2>

      {/* LOADING */}
      {loading && <p>Loading movies...</p>}

      {/* EMPTY */}
      {!loading && movies.length === 0 && (
        <p>No movies found 😢</p>
      )}

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 mt-25 
                   hover:bg-gradient-to-r hover:from-gray-900 hover:to-red-600
                   px-3 py-2 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 mt-25 
                   hover:bg-gradient-to-r hover:from-gray-900 hover:to-red-600
                   px-3 py-2 rounded-full"
      >
        ▶
      </button>

      {/* MOVIE ROW */}
      <div
        ref={rowRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-4 overflow-x-scroll scrollbar-hide"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => {
              window.open(
                `https://www.google.com/search?q=${encodeURIComponent(
                  movie.title +
                  " movie reviews rating imdb rotten tomatoes"
                )}`,
                "_blank"
              );
            }}
            className="min-w-[180px] bg-gray-900 rounded-xl overflow-hidden
                       hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              loading="lazy" // ✅ ADDED (performance)
              className="w-full h-64 object-cover"
            />

            <div className="p-2 text-sm text-center hover:text-red-500">
              {movie.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;