import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./Section";

const API_KEY = "cafd1dd89b09980ab77cf23458aeacd2";

const Trending = () => {
  const [hollywood, setHollywood] = useState([]);
  const [bollywood, setBollywood] = useState([]);
  const [south, setSouth] = useState([]);
  const [animated, setAnimated] = useState([]);

  const fetchData = async () => {
    try {
      const hollywoodRes = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=en&sort_by=popularity.desc`
      );

      const bollywoodRes = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi&region=IN&sort_by=popularity.desc`
      );

      const southRes = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=te&region=IN&sort_by=popularity.desc`
      );

      const animatedRes = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`
      );

      setHollywood(hollywoodRes.data.results);
      setBollywood(bollywoodRes.data.results);
      setSouth(southRes.data.results);
      setAnimated(animatedRes.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!hollywood.length) {
    return (
      <div className="text-white text-center mt-20">
        Loading movies...
      </div>
    );
  }
  return (
    <div className="bg-black text-white p-4 pt-28 space-y-8">

      <Section title="🔥 Hollywood" data={hollywood} />
      <Section title="🇮🇳 Bollywood" data={bollywood} />
      <Section title="🎬 South Movies" data={south} />
      <Section title="🐭 Animated" data={animated} />

    </div>
  );
};

export default Trending;