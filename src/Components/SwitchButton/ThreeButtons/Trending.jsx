import { useEffect, useState } from "react";
import Section from "./Section";
import {
  getTrendingHollywood,
  getTrendingBollywood,
  getTrendingSouth,
  getTrendingAnimated,
} from "../../../movieApi";
import { Helmet } from "react-helmet"; // ✅ FIX

const Trending = () => {
  const [hollywood, setHollywood] = useState([]);
  const [bollywood, setBollywood] = useState([]);
  const [south, setSouth] = useState([]);
  const [animated, setAnimated] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-20">
        Loading movies...
      </div>
    );
  }

  return (
    <div className="bg-black text-white p-4 pt-28 space-y-8">

      {/* 🔥 SEO */}
      <Helmet>
        <title>Trending Movies | Movora</title>
        <meta
          name="description"
          content="Watch trending Bollywood, Hollywood, South and animated movies on Movora"
        />
        {/* 🔥 Open Graph (for WhatsApp, Instagram, etc.) */}
        <meta property="og:title" content="Trending Movies | Movora" />
        <meta property="og:description" content="Explore trending movies on Movora" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Section title="🔥 Hollywood" data={hollywood} />
      <Section title="🇮🇳 Bollywood" data={bollywood} />
      <Section title="🎬 South Movies" data={south} />
      <Section title="🐭 Animated" data={animated} />
    </div>
  );
};

export default Trending;