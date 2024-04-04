import React from 'react'
import { useState,useEffect } from 'react';
import tick from '../assests/pngs/tick.png'


const Cardresultcarousel = (props) => {
    const { stats }= props;
    const [statsData, setStatsData] = useState(null);
    const [error, setError] = useState(null);
  
    const test = async () => {
      const res = await fetch(
        `https://eth.blockscout.com/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg`
      );
      const response = await res.json();
      setStatsData(response);
      console.log(response);
    };
  
    useEffect(() => {
      test();
    }, []);
  return (
    <div className=''>
        <div className="">
            <div className="mt-3 w-[340px] sm:w-[320px]">
              <div className="rounded-xl py-3 mr-5 bg-[#0F2434] font-poppins">
                <div className="flex justify-between px-4 text-poppins">
                  <p className="text-[#15BFFD] font-medium text-[16px] ">
                    <img src={tick} className="inline-block px-2" />{stats?.no}
                  </p>
                  <p className=" text-white font-semibold text-[16px]">
                    {stats?.base_fee_per_gas.slice(0,2)}
                  </p>
                </div>
                <div className="pl-8 pt-3 text-[16px] font-bold">
                  <p className="text-white">
                    <span className="pr-6 text-[#C6C8CC]">Amount</span> {stats?.blob_tx_count}
                  </p>
                  <p className="text-white">
                    <span className="pr-[2.8rem] text-[#C6C8CC]">From</span> {stats?.hash.slice(0,13)}...
                  </p>
                  <p className="text-white">
                    <span className="pr-[4.2rem] text-[#C6C8CC]">To</span> {stats.miner?.hash.slice(0,13)}...
                  </p>
                  <p className="text-white">
                    <span className="pr-[3rem] text-[#C6C8CC]">Hash </span> {stats?.parent_hash.slice(0,13)}...
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
  )
}

export default Cardresultcarousel