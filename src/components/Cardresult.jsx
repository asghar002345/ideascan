import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/array4";
import tick from '../assests/pngs/tick.png'

const Cardresult = () => {
  // const [statsData, setStatsData] = useState(null);
  // const [error, setError] = useState(null);

  // const test = async () => {
  //   const res = await fetch(
  //     `https://gnosis.blockscout.com/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg`
  //   );
  //   const response = await res.json();
  //   setStatsData(response);
  //   console.log(response);
  // };

  // useEffect(() => {
  //   test();
  // }, []);

  return (
    <div className="mb-28 mx-4">
      <div className="flex justify-between items-center md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto my-4">
        <h1 className="font-bold text-[24px] text-white uppercase">
          Recent Transactions
        </h1>
        <button className="rounded-xl px-3 py-2 text-white bg-blue-600">
          View All
        </button>
      </div>
      <div className="flex justify-center ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8">
          {arraytest.map((item, index) => (
            <div key={index} className="mt-3 w-[330px]">
              <div className="rounded-xl py-3 mx-3 bg-[#0F2434] font-poppins">
                <div className="flex justify-between px-4 text-poppins">
                  <p className="text-[#15BFFD] font-medium text-[16px] ">
                    <img src={tick} className="inline-block px-2" />{item.no}
                  </p>
                  <p className=" text-white font-semibold text-[16px]">
                    {item.time}
                  </p>
                </div>
                <div className="pl-8 pt-3 text-[16px] font-bold">
                  <p className="text-white">
                    <span className="pr-6 text-[#C6C8CC]">Amount</span> {item.amount}
                  </p>
                  <p className="text-white">
                    <span className="pr-[3rem] text-[#C6C8CC]">From</span> {item.text}
                  </p>
                  <p className="text-white">
                    <span className="pr-[4.3rem] text-[#C6C8CC]">To</span> {item.textBig}
                  </p>
                  <p className="text-white">
                    <span className="pr-[3rem] text-[#C6C8CC]">Hash </span> {item.diffData}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardresult;
