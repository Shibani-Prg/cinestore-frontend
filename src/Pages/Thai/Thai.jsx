import MovieCategory from "../MovieCategory";
import ThaiCard from "./ThaiCard";
import { getThaiPage } from "../../movieApi";

const Thai = () => {
  return (
    <MovieCategory
      title="🇹🇭 Thai Movies"
      fetchFunction={getThaiPage}
      CardComponent={ThaiCard}
    />
  );
};

export default Thai;