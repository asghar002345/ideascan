import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Navigate } from "react-router-dom";
import Searchresult from "../pages/Searchresult";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuopen, setMenuopen] = useState(false);
  // const [modalOpen,setModalOpen] = useState(false)

  const apiUrl = "https://gnosis.blockscout.com/api/v2/search";

  const handleSearch = async () => {
    //   if (!query.trim()) return;
    //   console.log("handle is called ", query);
    //   try {
    //     const response = await fetch(`${apiUrl}?q=${query}`);
    //     // if (!response.ok) {
    //     //   throw new Error("Network response was not ok");
    //     // }
    //     const data = await response.json();
    //     console.log("test", data);
    //     console.log(data.items);
    //     setSearchResults(data.items);
    //     setQuery(""); // Assuming data is always an array
    //     setMenuopen(true);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    if (!query.trim()) return; // Don't search if query is empty
    try {
      const response = await fetch(`${apiUrl}?q=${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchResults(data.items);
      if (data.items.length > 0) {
        // Open modal only if search results are not empty
        setMenuopen(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const closemenu = () => {
  //   setMenuopen(!menuopen);
  // };

  return (
    <div className="font-poppins">
      <div className="flex items-center  justify-center mt-8">
        <div className="relative">
          <FaSearch className="text-white absolute mt-[20px] sm:mt-5 ml-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any address, transaction or block"
            className="border border-[#CDDFE5] border-opacity-[0.1] w-[20rem] sm:w-[600px] pl-11 pr-[5.5rem] sm:pr-32 md:pr-[8rem] lg:pr-32 py-3 sm:py-6 bg-[#081015]  bg-opacity-[0.8] text-white font-poppins tracking-wide z-[-8] font-bold rounded-xl stroke-black outline-none  placeholder:text-[15px] sm:placeholder-white placeholder-transparent "
          />
          <button
            className="text-white font-bold sm:text-[18px] border-transparent rounded-lg my-[0.4rem] py-[0.5rem] mr-3 sm:mr-5 sm:px-3 px-1 w-16 sm:w-24 cursor-pointer absolute bg-[#0086FF] right-0"
            onClick={() => {
              handleSearch();
              setMenuopen(true);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {/* Render Modal if modalOpen is true */}
      {menuopen && searchResults.length > 0 && <Navigate to="/searchresult" />}
      {/* Display search results */}
      {/* {menuopen && searchResults.length > 0 && (
        <div className="mt-4 w-[18rem] mx-4 xl:w-[90rem] xl:ml-6 h-[40rem] absolute">
          <div className=" border-gray-200">
            <ul className={`bg-black bg-opacity-60 shadow-md rounded-lg p-4`}>
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold mb-2 text-white">
                  Search Results:
                </h2>
                <button onClick={closemenu} className="text-white">
                  <FaXmark />
                </button>
              </div>
              {searchResults.slice(0, 9).map((result, index) => (
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
      )} */}
    </div>
  );
};

export default SearchBar;
