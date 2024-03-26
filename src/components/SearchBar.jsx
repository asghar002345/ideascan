import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiUrl = "https://gnosis.blockscout.com/api/v2/search";

  const handleSearch = async () => {
    if (!query.trim()) return;
    console.log("handle is called ", query);
    try {
      const response = await fetch(`${apiUrl}?q=${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.items);
      setSearchResults(data.items);
      setQuery(""); // Assuming data is always an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const string = () => {
    const text = "Search for an address, block, transaction/block hash"
    const result = text.slice(9)
  }
  return (
    <div>
      <div className="flex items-center h-[100px] justify-center">
        <div className="relative">
          <FaSearch className="text-white absolute mt-7 ml-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-[300px] sm:w-[600px] pl-11 py-6 bg-[#FFFFFF] opacity-[0.17] font-poppins z-[-8]  rounded-xl stroke-black outline-none  text-opacity-80 text-[15px] font-semibold font-Poppins placeholder-orange-900"
          />
          <input
            type="button"
            className="text-white border-transparent rounded-lg my-3 py-1.5 mr-5 px-3 w-24 cursor-pointer absolute bg-[#0086FF] right-0"
            value="Search"
            onClick={handleSearch}
          />
        </div>
      </div>
      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="mt-4 px-4">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul className="bg-white shadow-md rounded-lg p-4">
            {searchResults.slice(0, 5).map((result, index) => (
              <li
                key={index}
                className="border-b border-gray-200 py-2 flex justify-between items-center"
              >
                <span>{result.address}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
