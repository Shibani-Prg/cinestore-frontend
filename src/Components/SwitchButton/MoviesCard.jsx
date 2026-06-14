import React from "react";
import { useNavigate } from "react-router-dom";

const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    18: "Drama",
    27: "Horror",
    10749: "Romance",
};

const MoviesCard = ({ elem }) => {
    const navigate = useNavigate();
    const imageUrl = elem.poster_path
        ? `https://image.tmdb.org/t/p/w500${elem.poster_path}`
        : "https://via.placeholder.com/200x300?text=No+Image";




    return (
        <div className="p-2 min-w-[150px] group">
            <div
                className="relative h-60 w-40 overflow-hidden rounded-xl cursor-pointer"
                onClick={() => navigate(`/movie/${elem.id}`)}
            >
                <img
                    src={imageUrl}
                    alt={elem.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
                />


                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 
                group-hover:opacity-100 
                flex flex-col justify-center items-center
                text-white text-xs p-2
                transition duration-300
                pointer-events-none">

                    <p className="mb-2">⭐ {elem.vote_average?.toFixed(1)}</p>

                    <p className="text-center">
                        {elem.genre_ids
                            ?.slice(0, 2)
                            .map((id) => genreMap[id])
                            .join(", ")}
                    </p>

                </div>
            </div>

            <h2 className="text-sm mt-2 text-center">
                {elem.title}
            </h2>
        </div>
    );
};

export default MoviesCard;