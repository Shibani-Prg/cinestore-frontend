import React from 'react';
import { useNavigate } from "react-router-dom";

const KmoviesCard = ({ elem }) => {
  const navigate = useNavigate();

  const imageUrl = elem.poster_path
    ? `https://image.tmdb.org/t/p/w500${elem.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className='p-2 group cursor-pointer'>
      <div
        className='h-60 w-44 overflow-hidden rounded-xl relative
        transition duration-300 
        group-hover:scale-102 
        group-hover:shadow-[0_0_20px_rgba(255,0,0,1)]'
      >
        <img
          src={imageUrl}
          alt={elem.title}
          onClick={() => navigate(`/movie/${elem.id}`)} // ✅ FIXED
          className="h-full w-full object-cover 
          transition duration-300 
          group-hover:scale-110 group-hover:opacity-60"
        />
      </div>

      <h2 className='text-sm mt-2 text-center'>
        {elem.title}
      </h2>
    </div>
  );
};

export default KmoviesCard;