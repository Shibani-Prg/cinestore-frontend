import React, { useEffect, useState } from "react";
import BollywoodCard from "./BollywoodCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getBollywoodPage } from "../../movieApi";

const Bollywood = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getBollywoodPage(index);
        setUserData(data.results || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray text-xs">Loading...</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.slice(0, 18).map((elem) => (
      <div key={elem.id}>
        <BollywoodCard elem={elem} />
      </div>
    ));
  }

  return (
    <div className="bg-black h-screen overflow-y-auto text-white flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 pb-28">
        {printUserData}
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center shadow-lg">
        <div className="flex items-center gap-6 p-6">

          {/* Prev */}
          <button
            disabled={index === 1}
            className={`px-4 py-2 rounded font-semibold flex items-center gap-2 transition-all duration-300 
              ${index === 1
                ? "bg-gray-400 text-white cursor-not-allowed opacity-50"
                : "text-white hover:bg-red-500 hover:scale-105"
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

          {/* Next */}
          <button
            className="text-white hover:bg-red-500 transition-all rounded-lg px-4 py-2 
            font-semibold flex items-center gap-2 hover:scale-105"
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

export default Bollywood;