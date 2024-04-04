import React from 'react'
import { useState,useEffect } from 'react';

function Carddetailscarousel(props) {
  const { stats }= props;
  return (
    <div>
            <div className="mt-3">
              <div className="w-[300px] xl:w-[300px] h-[150px] p-2 rounded-xl opacity-[100] bg-[#0F2434] text-white">
                <div className="flex justify-between items-center mx-4 py-2">
                  <p className="text-blue-400 font-medium text-[16px]">
                    Number
                  </p>
                  <p className="mr-3 text-blue-200 font-semi-bold text-[16px]">Time</p>
                </div>
                <div className="font-semibold text-[16px] leading-[30px] mx-4">
                  <p className="text-[#C6C8CC]">
                    Tx Count<span className="pl-4 text-white">{stats?.blob_tx_count}</span>
                  </p>
                  <p className="text-[#C6C8CC]">
                    Hash<span className="pl-11 text-white">{stats?.hash?.slice(0,14)}...</span>{" "}
                  </p>
                  <p className="text-[#C6C8CC]">
                    Validator <span className="pl-3 text-white">{stats?.parent_hash?.slice(0,14)}...</span>{" "}
                  </p>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Carddetailscarousel