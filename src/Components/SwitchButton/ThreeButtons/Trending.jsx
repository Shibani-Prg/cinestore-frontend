import { useEffect, useState } from "react";
import Section from "./Section";
import {
  getTrendingHollywood,
  getTrendingBollywood,
  getTrendingSouth,
  getTrendingAnimated,
} from "../../../movieApi";

const Trending = () => {
  const [hollywood, setHollywood] = useState([]);
  const [bollywood, setBollywood] = useState([]);
  const [south, setSouth] = useState([]);
  const [animated, setAnimated] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [holly, bolly, southRes, anim] = await Promise.all([
          getTrendingHollywood(),
          getTrendingBollywood(),
          getTrendingSouth(),
          getTrendingAnimated(),
        ]);

        setHollywood(holly.data.results || []);
        setBollywood(bolly.data.results || []);
        setSouth(southRes.data.results || []);
        setAnimated(anim.data.results || []);
      } catch (err) {
        console.error(err);
      }
    };

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