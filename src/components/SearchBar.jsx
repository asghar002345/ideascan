import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Navigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuopen, setMenuopen] = useState(false);
  // const [modalOpen,setModalOpen] = useState(false)

  const apiUrl = "https://gnosis.blockscout.com/api/v2/search";

  const handleSearch = async () => {

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

  return (
    <div className="font-poppins">
      <div className="flex items-center justify-center mt-7">
        <div className="relative">
          <FaSearch className="text-white absolute mt-[12px] sm:mt-[25px] ml-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any address, transaction or block"
            className="border border-[#CDDFE5] border-opacity-[0.1] mb-2 h-[40px] sm:h-[65px] w-[18rem] sm:w-[600px] pl-11 pr-[5.5rem] sm:pr-32 md:pr-[8rem] lg:pr-32 py-3 sm:py-6 bg-[#081015]  bg-opacity-[0.8] text-white font-poppins tracking-wide z-[-8] font-bold rounded-xl stroke-black outline-none placeholder:-translate-y-0.5 sm:placeholder:-translate-y-0 placeholder:text-[12px] sm:placeholder:text-[15px] sm:placeholder-white   "
          />
          <button
            className="text-white font-bold text-[14px] sm:text-[18px] h-[22px] sm:h-[48px] border-transparent rounded-lg my-[0.5rem] sm:py-[0.5rem] mr-3 sm:mr-5 sm:px-3 px-1 w-16 sm:w-24 cursor-pointer absolute bg-[#0086FF] right-0"
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
    </div>
  );
};

export default SearchBar;
