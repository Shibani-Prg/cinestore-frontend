import MovieCategory from "../MovieCategory";
import HollywoodCard from "./HollywoodCard";
import { getHollywoodPage } from "../../movieApi";

const Hollywood = () => {
  return (
    <MovieCategory
      title="🎬 Hollywood"
      fetchFunction={getHollywoodPage}
      CardComponent={HollywoodCard}
    />
  );
};

export default Hollywood;