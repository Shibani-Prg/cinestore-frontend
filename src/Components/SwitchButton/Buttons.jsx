import React from "react";
import { Link } from "react-router-dom";


const Buttons = () => {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center-safe">


      {/* OUTLINE BUTTON */}
      <Link to="/trending">
        <button className="px-6 py-2 bg-gradient-to-r from-gray-900 to-red-700 
                     text-white rounded-full shadow-lg 
                     hover:shadow-red-500/50 hover:scale-110 
                     hover:from-black hover:to-red-600
                     transition duration-300 font-semibold tracking-wide">
          🔥 Trending
        </button>
      </Link>

      {/* GLOW BUTTON */}
      <Link to="/featured">
        <button className="px-6 py-2 bg-gradient-to-r from-gray-900 to-red-700 
                   text-white rounded-full shadow-lg 
                   hover:shadow-red-500/50 hover:scale-110 
                   hover:from-black hover:to-red-600
                   transition duration-300 font-semibold tracking-wide">
          ⭐ Featured
        </button>
      </Link>

      {/* SECONDARY BUTTON */}
      <Link to="/watchlist">
        <button className="px-6 py-2 bg-gradient-to-r from-gray-900 to-red-700 
               text-white rounded-full shadow-lg 
               hover:shadow-red-500/50 hover:scale-110 
               hover:from-black hover:to-red-600
               transition duration-300 font-semibold tracking-wide">
          ❤️ Watchlist
        </button>
      </Link>

    </div>
  );
};

export default Buttons;