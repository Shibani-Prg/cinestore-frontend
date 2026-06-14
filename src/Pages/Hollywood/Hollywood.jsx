import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HollywoodCard from './HollywoodCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_KEY = "cafd1dd89b09980ab77cf23458aeacd2";

const Hollywood = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=en&sort_by=popularity.desc&page=${index}`
    );

    setUserData(response.data.results);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className='text-gray-400 text-xs'>Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.slice(0, 18).map((elem) => {
      return (
        <div key={elem.id}>
          <HollywoodCard elem={elem} />
        </div>
      );
    });
  }



  return (
    <div className="bg-black h-screen overflow-y-auto text-white flex flex-col">

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 pb-28">
        {printUserData}
      </div>

      <div className="fixed bottom-0 left-0  w-full flex justify-center shadow-lg ">
        <div className="flex items-center gap-6 p-6">

          {/* Prev Button */}
          <button
            disabled={index === 1}
            className={`px-4 py-2 rounded font-semibold flex items-center gap-2 transition-all duration-300 
    ${index === 1
                ? "bg-gray-400 text-white cursor-not-allowed opacity-50 "
                : " text-white hover:bg-red-500 hover:text-white hover:scale-105 hover:cursor-pointer"
              }`}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setUserData([]);
              }
            }}
          >
            <FaChevronLeft />
            Prev
          </button>

          <h4 className="text-lg font-semibold">Page {index}</h4>

          {/* Next Button */}
          <button
            className=" text-white hover:bg-red-500 duration-300 ease-in-out  transition-all rounded-lg px-4 py-2 
            font-semibold flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 hover:cursor-pointer"
            onClick={() => {
              setIndex(index + 1);
              setUserData([]);
            }}
          >
            Next
            <FaChevronRight />
          </button>

        </div>
      </div>

    </div>
  );
};
export default Hollywood;