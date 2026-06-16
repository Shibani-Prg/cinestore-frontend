import MovieCategory from "../MovieCategory";
import KmoviesCard from "./KmoviesCard";
import { getKoreanPage } from "../../movieApi";

const Kmovies = () => {
  return (
    <MovieCategory
      title="🇰🇷 Korean Movies"
      fetchFunction={getKoreanPage}
      CardComponent={KmoviesCard}
    />
  );
};

export default Kmovies;