import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Bollywood from "./Pages/Bollywood/Bollywood";
import Hollywood from "./Pages/Hollywood/Hollywood";
import Thai from "./Pages/Thai/Thai";
import Tollywood from "./Pages/TollyWood/Tollywood";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Kmovies from "./Pages/KMovies/Kmovies";
import Trending from "./Components/SwitchButton/ThreeButtons/Trending";
import Featured from "./Components/SwitchButton/ThreeButtons/Featured";
import Watchlist from "./Components/SwitchButton/ThreeButtons/WatchList";
import MovieDetails from "./MovieDetails";
import Headershow from "./Components/Header/Headershow/Headershow";

function App() {
  return (
    <>
      <Header />
     


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/thai" element={<Thai />} />
        <Route path="/tollywood" element={<Tollywood />} />
        <Route path="/kmovie" element={<Kmovies />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;