import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesCard from "../MoviesCard";


const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setMovies(data);
  }, []);

  return (
    <div className="bg-black text-white p-4 pt-5 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">❤️ My Watchlist</h2>

        {/* ➕ Add Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-500 transition"
        >
          ➕ Add Movies
        </button>
      </div>

      {/* Movies */}
      {movies.length === 0 ? (
        <div className="text-center mt-20">
          <p className="mb-4">No movies added yet.</p>

          
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((elem) => (
            <MoviesCard key={elem.id} elem={elem} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Watchlist;