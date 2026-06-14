import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./Section";

const API_KEY = "cafd1dd89b09980ab77cf23458aeacd2";

const Featured = () => {
  const [topRated, setTopRated] = useState([]);
  const [hollywood, setHollywood] = useState([]);
  const [bollywood, setBollywood] = useState([]);

  const fetchData = async () => {
    try {
      // ⭐ Top Rated Movies
      const topRatedRes = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );

      // Hollywood Top Rated
      const hollywoodRes = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=en&sort_by=vote_average.desc&vote_count.gte=1000`
      );

      // Bollywood Top Rated
      const bollywoodRes = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi&region=IN&sort_by=vote_average.desc&vote_count.gte=200`
      );

      setTopRated(topRatedRes.data.results);
      setHollywood(hollywoodRes.data.results);
      setBollywood(bollywoodRes.data.results);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!topRated.length) {
    return <h2 className="text-white text-center mt-20">Loading Featured...</h2>;
  }

  return (
    <div className="bg-black text-white p-4 pt-28 space-y-8">

      <Section title="⭐ Top Rated Movies" data={topRated} />
      <Section title=" Hollywood Best" data={hollywood} />
      <Section title=" Bollywood Best" data={bollywood} />

    </div>
  );
};

export default Featured;