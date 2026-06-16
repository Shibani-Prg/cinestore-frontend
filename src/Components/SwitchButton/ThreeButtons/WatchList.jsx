import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesCard from "../MoviesCard";

const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // ❌ REMOVE FUNCTION
  const removeFromWatchlist = (id) => {
    const updated = movies.filter((movie) => movie.id !== id);
    setMovies(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  // 📦 LOAD DATA
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setMovies(data);
  }, []);

  return (
    <div className="bg-black text-white p-4 pt-5 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          ❤️ My Watchlist ({movies.length})
        </h2>

        <button
          onClick={() => navigate("/")}
          className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-500 transition"
        >
          ➕ Add Movies
        </button>
      </div>

      {/* EMPTY STATE */}
      {movies.length === 0 ? (
        <div className="text-center mt-20">
          <p className="mb-4 text-gray-400">
            No movies added yet 😢
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-500"
          >
            Browse Movies
          </button>
        </div>
      ) : (

        /* MOVIE GRID */
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((elem) => (
            <div key={elem.id} className="relative group">

              <MoviesCard elem={elem} />

              {/* ❌ REMOVE BUTTON */}
              <button
                onClick={() => removeFromWatchlist(elem.id)}
                className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                ✖
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;