import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/array4";

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
      <div className="flex justify-between items-center  md:mx-[3rem] lg:mx-[3rem] xl:mx-[2rem] my-6">
        <h1 className="font-semibold text-xl text-white">
          Recent Transactions
        </h1>
        <button className="rounded-xl px-5 py-2 text-white bg-blue-600">
          View All
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {arraytest.map((item, index) => (
            <div key={index} className="mt-3 w-80">
              <div className="border border-[#737B82] rounded-xl py-3 mx-3  bg-[#040B17] font-poppins">
                <div className="flex justify-between px-4 text-poppins">
                  <p className="text-green-500 font-medium text-[16px] ">
                    {item.no}
                  </p>
                  <p className=" text-white font-semibold text-[16px]">
                    {item.time}
                  </p>
                </div>
                <div className="pl-8 pt-3  h-40 text-[16px] font-semibold">
                  <p className="text-white py-1">
                    <span className="pr-6">Amount</span> {item.amount}
                  </p>
                  <p className="text-white py-1">
                    <span className="pr-[3rem]">From</span> {item.text}
                  </p>
                  <p className="text-white py-1">
                    <span className="pr-[4.3rem]">To</span> {item.textBig}
                  </p>
                  <p className="text-white py-1">
                    <span className="pr-[3rem]">Hash </span> {item.diffData}
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
