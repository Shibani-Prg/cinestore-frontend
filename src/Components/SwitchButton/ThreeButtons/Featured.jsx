import { useEffect, useState } from "react";
import Section from "./Section";
import {
  getTopRated,
  getHollywood,
  getBollywood,
} from "../../../movieApi";

const Featured = () => {
  const [topRated, setTopRated] = useState([]);
  const [hollywood, setHollywood] = useState([]);
  const [bollywood, setBollywood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [top, holly, bolly] = await Promise.all([
          getTopRated(),
          getHollywood(),
          getBollywood(),
        ]);

        setTopRated(top.data.results || []);
        setHollywood(holly.data.results || []);
        setBollywood(bolly.data.results || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (!topRated.length) {
    return (
      <h2 className="text-white text-center mt-20">
        Loading Featured...
      </h2>
    );
  }

  return (
    <div className="bg-black text-white p-4 pt-28 space-y-8">
      <Section title="⭐ Top Rated Movies" data={topRated} />
      <Section title="Hollywood Best" data={hollywood} />
      <Section title="Bollywood Best" data={bollywood} />
    </div>
  );
};

export default Featured;