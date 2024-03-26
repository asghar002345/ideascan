import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/arraytest";
const Cards = () => {
  const [statsData, setStatsData] = useState(null);
  const [error, setError] = useState(null);

  const test = async () => {
    const res = await fetch(`https://gnosis.blockscout.com/api/v2/addresses`);
    const response = await res.json();
    setStatsData(response);
    console.log("Adresses");
    console.log(response);
  };

  useEffect(() => {
    test();
  }, []);
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 items-end text-white sm:h-[400px] md:h-[450px] mx-auto">
        {arraytest.map((arr) => (
          <div
            key={arr.id}
            className="flex flex-col justify-center items-center w-64 border border-[#1E2739] my-3 rounded-lg h-36 bg-[#040F1C]"
          >
            <div className="flex justify-center border border-[#40576A] rounded-lg bg-[#354D61] w-10 h-10 mb-3">
              <img src={arr.logo} alt="" className="" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px] text-[#9CA0A7] font-poppins font-semibold">
                {arr.textBig}
              </span>
              <span className="text-[24px] font-poppins font-semibold">
                {arr.diffData}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
