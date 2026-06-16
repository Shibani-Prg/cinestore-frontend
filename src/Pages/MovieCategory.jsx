import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieCategory = ({ title, fetchFunction, CardComponent }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchFunction(page);
        setData(data.results || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [page, fetchFunction]);

  return (
    <div className="bg-black h-screen overflow-y-auto text-white flex flex-col">

      <h2 className="text-2xl font-bold p-4">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 pb-28">
        {data.length === 0
          ? <h3 className="text-gray-400">Loading...</h3>
          : data.slice(0, 18).map((elem) => (
              <CardComponent key={elem.id} elem={elem} />
            ))}
      </div>

      {/* PAGINATION */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center">
        <div className="flex items-center gap-6 p-6">

          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            <FaChevronLeft /> Prev
          </button>

          <h4>Page {page}</h4>

          <button onClick={() => setPage(page + 1)}>
            Next <FaChevronRight />
          </button>

        </div>
      </div>
    </div>
  );
};

export default MovieCategory;