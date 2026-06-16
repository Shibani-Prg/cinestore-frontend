import MovieCategory from "../MovieCategory";
import SouthCard from "./SouthCard";
import { getSouthPage } from "../../movieApi";

const Tollywood = () => {
  return (
    <MovieCategory
      title="🎬 South Indian Movies"
      fetchFunction={getSouthPage}
      CardComponent={SouthCard}
    />
  );
};

export default Tollywood;