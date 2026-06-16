import MovieCategory from "../MovieCategory";
import BollywoodCard from "./BollywoodCard";
import { getBollywoodPage } from "../../movieApi";

const Bollywood = () => {
  return (
    <MovieCategory
      title="🇮🇳 Bollywood"
      fetchFunction={getBollywoodPage}
      CardComponent={BollywoodCard}
    />
  );
};

export default Bollywood;