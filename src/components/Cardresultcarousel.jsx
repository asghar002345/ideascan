import React from "react";
import { useState, useEffect } from "react";
import tick from "../assests/pngs/tick.png";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Cardresultcarousel = (props) => {
  const { stats } = props;
  const [statsData, setStatsData] = useState(null);
  const [error, setError] = useState(null);
  function copyText1(stats) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(stats?.from?.hash);
  }
  function copyText2(stats) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(stats?.to?.hash);
  }
  function copyText3(stats) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(stats?.hash);
  }

  return (
    <div className="">
      <div className="">
        <div className="mt-3 md:mx-auto w-[300px] sm:w-[300px] mx-auto lg:w-[320px]">
          <div className="rounded-xl py-3 mx-2 bg-[#0F2434] font-poppins">
            <div className="flex justify-between px-4 text-poppins">
              <p className="text-[#15BFFD] font-medium text-[16px] ">
                <img src={tick} className="inline-block px-2" />
                {stats?.result?.slice(0, 7)}
              </p>
              <p className=" text-white font-semibold text-[16px]">
                {stats?.type}d ago
              </p>
            </div>
            <div className="pl-8 pt-3 text-[16px] font-semibold">
              <p className="text-white">
                <span className="pr-[19px] text-[#C6C8CC]">Amount</span>{" "}
                {stats?.block} SHIDO
              </p>
              <p className="text-white flex">
                <span className="pr-[2.8rem] text-[#C6C8CC]">From</span>{" "}
                <div
                  data-tooltip-id={stats?.from?.hash}
                  onClick={() => copyText1(stats)}
                >
                  {stats?.from?.hash?.slice(0, 12)}...
                </div>
                <ReactTooltip
                  id={stats?.from?.hash}
                  place="top"
                  className=""
                  // variant="danger"
                  style={{ backgroundColor: "#040F1C", color: "white" }}
                  content="Copy Text"
                />
              </p>
              <p className="text-white flex">
                <span className="pr-[4.2rem] text-[#C6C8CC]">To</span>{" "}
                <div
                  data-tooltip-id={stats?.to?.hash}
                  onClick={() => copyText2(stats)}
                >
                  {stats?.to?.hash?.slice(0, 12)}...
                </div>
                <ReactTooltip
                  id={stats?.to?.hash}
                  place="top"
                  className=""
                  // variant="danger"
                  style={{ backgroundColor: "#040F1C", color: "white" }}
                  content="Copy Text"
                />
              </p>
              <p className="text-white flex">
                <span className="pr-[3rem] text-[#C6C8CC]">Hash </span>{" "}
                <div
                  data-tooltip-id={stats?.hash}
                  onClick={() => copyText3(stats)}
                >
                  {stats?.hash?.slice(0, 12)}...
                </div>
                <ReactTooltip
                  id={stats?.hash}
                  place="top"
                  className=""
                  // variant="danger"
                  style={{ backgroundColor: "#040F1C", color: "white" }}
                  content="Copy Text"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardresultcarousel;
