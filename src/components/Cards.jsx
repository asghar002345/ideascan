import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/arraytest";
import img1 from "../assests/pngs/icon1.png";
import img2 from "../assests/pngs/icon2.png";
import img3 from "../assests/pngs/icon3.png";
import img4 from "../assests/pngs/icon4.png";

const Cards = () => {
  const [statsData, setStatsData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const test = async () => {
      const res = await fetch("https://eth.blockscout.com/api/v2/stats");
      const des = await res.json();
      setStatsData(des);
      console.log(des);
    };
    test();
  }, []);

  return (
    <div className="flex items-center justify-center font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-16 items-end text-white sm:h-[400px] md:h-[450px] mx-auto">
        <div className="flex flex-col justify-center items-center w-64 my-1 sm:my-3 rounded-lg h-32 sm:h-36 bg-[#040F1C] bg-opacity-90">
          <div className="flex justify-center border border-[#40576A] rounded-lg bg-[#354D61] w-10 h-10 mt-3 mb-2">
            <img src={img1} alt="" className="" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[14px] sm:text-[18px] font-semibold text-white sm:font-bold font-poppins">
              Avg. Block Time
            </span>
            <span className="text-[18px] sm:text-[24px] font-poppins font-semibold">
              {(statsData?.average_block_time/1000).toFixed(1)} sec
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-64 my-1 sm:my-3 rounded-lg h-32 sm:h-36 bg-[#040F1C] bg-opacity-90">
          <div className="flex justify-center border border-[#40576A] rounded-lg bg-[#354D61] w-10 h-10 mt-3 mb-2">
            <img src={img2} alt="" className="" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[14px] sm:text-[18px] font-semibold text-white sm:font-bold font-poppins">
            Market Cap
            </span>
            <span className="text-[18px] sm:text-[24px] font-poppins font-semibold">
              ${(statsData?.market_cap/1000000000).toFixed(2)} B
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-64 my-1 sm:my-3 rounded-lg h-32 sm:h-36 bg-[#040F1C] bg-opacity-90">
          <div className="flex justify-center border border-[#40576A] rounded-lg bg-[#354D61] w-10 h-10 mt-3 mb-2">
            <img src={img3} alt="" className="" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[14px] sm:text-[18px] font-semibold text-white sm:font-bold font-poppins">
            Avg. Apr ⓘ
            </span>
            <span className="text-[18px] sm:text-[24px] font-poppins font-semibold">
              {(statsData?.total_blocks/1000000).toFixed(1)} %
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-64 my-1 sm:my-3 rounded-lg h-32 sm:h-36 bg-[#040F1C] bg-opacity-90">
          <div className="flex justify-center border border-[#40576A] rounded-lg bg-[#354D61] w-10 h-10 mt-3 mb-2">
            <img src={img4} alt="" className="" />
          </div>
          <div className="flex flex-col items-center mb-3">
            <span className="text-[14px] sm:text-[18px] font-semibold text-white sm:font-bold font-poppins">
            Circulation Supply ⓘ
            </span>
            <span className="text-[18px] sm:text-[24px] font-poppins font-semibold">
              {(statsData?.transactions_today/100000).toFixed(2)} B
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
