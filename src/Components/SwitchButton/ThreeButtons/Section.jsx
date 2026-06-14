
import MoviesCard from "../MoviesCard";

const Section = ({ title, data }) => {
  const addToWatchlist = (movie) => {
    const existing = JSON.parse(localStorage.getItem("watchlist")) || [];

    // avoid duplicates
    const alreadyAdded = existing.find((item) => item.id === movie.id);

    if (!alreadyAdded) {
      const updated = [...existing, movie];
      localStorage.setItem("watchlist", JSON.stringify(updated));
      alert("Added to Watchlist ✅");
    } else {
      alert("Already in Watchlist ⚠️");
    }
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      <div className="flex gap-8 overflow-x-auto scroll-smooth object-cover ">
        {data.slice(0, 10).map((elem) => (
          <MoviesCard key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default Section;