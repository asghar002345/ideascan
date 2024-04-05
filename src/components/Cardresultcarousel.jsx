import React from 'react'
import { useState,useEffect } from 'react';
import tick from '../assests/pngs/tick.png'


const Cardresultcarousel = (props) => {
    const { stats }= props;
    const [statsData, setStatsData] = useState(null);
    const [error, setError] = useState(null);
  
  return (
    <div className=''>
        <div className="">
            <div className="mt-3 w-[340px] sm:w-[320px]">
              <div className="rounded-xl py-3 mr-5 bg-[#0F2434] font-poppins">
                <div className="flex justify-between px-4 text-poppins">
                  <p className="text-[#15BFFD] font-medium text-[16px] ">
                    <img src={tick} className="inline-block px-2" />{stats?.result?.slice(0,7)}
                  </p>
                  <p className=" text-white font-semibold text-[16px]">
                    {stats?.type}d ago
                  </p>
                </div>
                <div className="pl-8 pt-3 text-[16px] font-bold">
                  <p className="text-white">
                    <span className="pr-6 text-[#C6C8CC]">Amount</span> {stats?.block} SHIDO
                  </p>
                  <p className="text-white">
                    <span className="pr-[2.8rem] text-[#C6C8CC]">From</span> {stats?.from?.hash?.slice(0,13)}...
                  </p>
                  <p className="text-white">
                    <span className="pr-[4.2rem] text-[#C6C8CC]">To</span> {stats?.to?.hash?.slice(0,13)}...
                  </p>
                  <p className="text-white">
                    <span className="pr-[3rem] text-[#C6C8CC]">Hash </span> {stats?.hash?.slice(0,13)}...
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
  )
}

export default Cardresultcarousel