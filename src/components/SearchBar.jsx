import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuopen ,setMenuopen] = useState(false);

  const apiUrl = "https://gnosis.blockscout.com/api/v2/search";

  const handleSearch = async () => {
    if (!query.trim()) return;
    console.log("handle is called ", query);
    try {
      const response = await fetch(`${apiUrl}?q=${query}`);
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      const data = await response.json();
      console.log('test',data);
      console.log(data.items);
      setSearchResults(data.items);
      setQuery(""); // Assuming data is always an array
      setMenuopen(true)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const closemenu = () => {
    setMenuopen(!menuopen)
  }
  return (
    <div className="font-poppins">
      <div className="flex items-center h-[100px] justify-center">
        <div className="relative">
          <FaSearch className="text-white absolute mt-7 ml-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any address, transaction or block"
            className="w-[253px] sm:w-[600px] pl-11 py-6 bg-[#081015]  bg-opacity-[0.8] text-white font-poppins tracking-wide z-[-8] font-bold rounded-xl stroke-black outline-none  placeholder:text-[15px] sm:placeholder-white placeholder-transparent "
          />
          <input
            type="button"
            className="text-white font-bold sm:text-[18px] border-transparent rounded-lg my-[0.8rem] py-[0.5rem] mr-3 sm:mr-5 sm:px-3 px-1 w-16 sm:w-24 cursor-pointer absolute bg-[#0086FF] right-0"
            value="Search"
            onClick={() => {handleSearch()}}
          />
        </div>
      </div> 
      {/* Display search results */}
      {menuopen && ((searchResults.length > 0) && (
          <div className="mt-4 px-4">
            <div className=" border-gray-200">
            <ul className={`bg-[#0F2434] shadow-md rounded-lg p-4 `}>
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2 text-white">Search Results:</h2>
            <button onClick={closemenu} className="text-white"><FaXmark /></button>
            </div>
              {searchResults.slice(0, 6).map((result, index) => (
                <li
                key={index}
                className="border-b py-2 flex justify-between items-center"
                >
                  <span className="text-white">{result.address}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        ))}
      
    </div>
  );
};

export default SearchBar;
