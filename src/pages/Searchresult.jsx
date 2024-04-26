import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchresult = () => {
  const [query, setQuery] = useState("usdt");
  const apiUrl = "https://gnosis.blockscout.com/api/v2/search";
  const [searchResults, setSearchResults] = useState();
  const data = async () => {
    try {
      const response = await fetch(`${apiUrl}?q=${query}`);
      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }
      const data = await response.json();
      console.log("test", data);
      console.log(data.items);
      setSearchResults(data.items);
      setQuery(""); // Assuming data is always an array
      //   setMenuopen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <div className="flex items-center  justify-center">
        <div className="relative mt-16">
          <FaSearch className="text-white absolute mt-[20px] sm:mt-5 ml-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any address, transaction or block"
            className="border border-[#CDDFE5] border-opacity-[0.62] w-[20rem] sm:w-[600px] pl-11 pr-[5.5rem] sm:pr-32 md:pr-[8rem] lg:pr-32 py-3 sm:py-6 bg-[#081015]  bg-opacity-[0.8] text-white font-poppins tracking-wide z-[-8] font-bold rounded-xl stroke-black outline-none  placeholder:text-[15px] sm:placeholder-white placeholder-transparent "
          />
          <button
            className="text-white font-bold sm:text-[18px] border-transparent rounded-lg my-[0.4rem] py-[0.5rem] mr-3 sm:mr-5 sm:px-3 px-1 w-16 sm:w-24 cursor-pointer absolute bg-[#0086FF] right-0"
            onClick={() => {
              data();
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* {searchResults.length > 0 && ( */}
      <div className="mt-4  mx-auto  xl:w-[85rem]">
        <div className=" border-gray-200">
          <ul className={` shadow-md rounded-lg p-4`}>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Search Results:
              </h2>
            </div>
            {searchResults?.map((result, index) => (
              <li
                key={index}
                className="border-b py-2 flex justify-between items-center overflow-x-auto md:overflow-x-hidden"
              >
                <span className="text-white">{result.address}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Searchresult;
