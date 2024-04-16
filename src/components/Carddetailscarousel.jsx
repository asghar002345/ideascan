import React from "react";
import { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Carddetailscarousel(props) {
  const { stats } = props;
  return (
    <div>
      <div className="mt-3">
        <div className="w-[300px] xl:w-[300px] h-[150px] p-2 rounded-xl opacity-[100] bg-[#0F2434] text-white">
          <div className="flex justify-between items-center mx-4 py-2">
            <p className="text-blue-400 font-medium text-[16px]">Number</p>
            <p className="mr-3 text-blue-200 font-semi-bold text-[16px]">
              Time
            </p>
          </div>
          <div className="font-semibold text-[16px] leading-[30px] mx-4">
            <p className="text-[#C6C8CC]">
              Tx Count
              <span className="pl-4 text-white">{stats?.blob_tx_count}</span>
            </p>
            <p className="text-[#C6C8CC]">
              Hash
              <span className="pl-11 text-white" data-tooltip-id={stats?.hash}>
                {stats?.hash?.slice(0, 14)}...
              </span>{" "}
              <ReactTooltip
                id={stats?.hash}
                place="default"
                className=""
                // variant="danger"
                style={{ backgroundColor: "#040F1C", color: "white" }}
                content={stats?.hash}
              />
            </p>
            <p className="text-[#C6C8CC]">
              Validator{" "}
              <span
                className="pl-3 text-white"
                data-tooltip-id={stats?.parent_hash}
              >
                {stats?.parent_hash?.slice(0, 14)}...
              </span>{" "}
              <ReactTooltip
                id={stats?.parent_hash}
                place="default"
                className="max-w-[100%]"
                // variant="danger"
                style={{ backgroundColor: "#040F1C", color: "white", }}
                content={stats?.parent_hash}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carddetailscarousel;
