import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "./movieApi";
import { Helmet } from "react-helmet";


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieById(id);
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h2 className="text-white text-center mt-20">Loading...</h2>;
  }

  return (
    <div className="bg-black text-white p-6 pt-28 min-h-screen">
      <Helmet>
        <title>{movie.title} | Movora</title>
        <meta
          name="description"
          content="Watch trending Bollywood, Hollywood, South and animated movies on Movora"
        />

        <meta property="og:title" content={movie.title} />
        <meta property="og:description" content={movie.overview} />
        <meta property="og:image" content={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <meta property="og:type" content="movie" />
      </Helmet>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-60 rounded-lg mb-4"
      />

      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="mt-2">⭐ {movie.vote_average}</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;