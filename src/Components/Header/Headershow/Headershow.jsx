
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Search from '../../Search/Search'


const Headershow = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search/${query}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white z-50 shadow-lg">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🎬</span>
          <h1 className="text-2xl font-bold text-red-500">
            CineStore
          </h1>
        </div>

        <div className="text-2xl hover:text-red-500 cursor-pointer">⋮</div>
      </div>

      {/* NAV LINKS */}
      <div className="flex items-center justify-between px-6 py-3 gap-4">
        <div className="flex gap-6">
          <Link to="/hollywood" className="hover:text-red-500  cursor-pointer relative
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-red-500 
             after:transition-all after:duration-300 
             hover:after:w-full">
            Hollywood
          </Link>

          <Link to="/bollywood" className="hover:text-red-500 cursor-pointer relative 
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-red-500 
             after:transition-all after:duration-300 
             hover:after:w-full ">
            Bollywood
          </Link>

          <Link to="/tollywood" className="hover:text-red-500 relative cursor-pointer 
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-red-500 
             after:transition-all after:duration-300 
             hover:after:w-full">
            Tollywood
          </Link>

          <Link to="/kmovie" className="hover:text-red-500 cursor-pointer relative 
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-red-500 
             after:transition-all after:duration-300 
             hover:after:w-full">
            KMovie
          </Link>

          <Link to="/thai" className="hover:text-red-500 cursor-pointer relative 
             after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-red-500 
             after:transition-all after:duration-300 
             hover:after:w-full">
            Thai
          </Link>


        </div>
        <Search />
      </div>

    </header>
  );
};

export default Headershow;