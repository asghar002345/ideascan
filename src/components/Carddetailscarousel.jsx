import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Carddetailscarousel(props) {
  const { stats } = props;
  function copyText1(stats) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(stats?.hash);
  }
  function copyText2(stats) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(stats?.parent_hash);
  }
  return (
    <div>
      <div className="mt-3">
        <div className="w-[295px] xl:w-[305px] h-[150px] py-2 px-2 rounded-xl bg-[#0F2434] text-white mx-auto md:mx-auto">
          <div className="flex justify-between items-center mx-4 py-2">
            <p className="text-blue-400 font-medium text-[16px]">{stats?.size}</p>
            <p className="mr-3 text-blue-200 font-semi-bold text-[16px]">
              {stats?.timestamp.slice(11,13)}sec ago
            </p>
          </div>
          <div className="font-semibold text-[16px] leading-[30px] mx-4">
            <p className="text-[#C6C8CC]">
              Tx Count
              <span className="pl-4 text-white overflow-hidden">{stats?.tx_count}</span>
            </p>
            <div className="text-[#C6C8CC] flex">
              Hash
              <div className="pl-11 text-white" data-tooltip-id={stats?.hash} onClick={() => copyText1(stats)}>
                {stats?.hash?.slice(0, 14)}...
              </div>{" "}
              <ReactTooltip
                id={stats?.hash}
                place="top"
                className=""
                // variant="danger"
                style={{ backgroundColor: "#040F1C", color: "white" }}
                content='Copy Text'
              />
            </div>
            <div className="text-[#C6C8CC] flex">
              Validator{" "}
              <div
                className="pl-3 text-white"
                data-tooltip-id={stats?.parent_hash}
                onClick={() => copyText2(stats)}
              >
                {stats?.parent_hash?.slice(0, 14)}...
              </div>{" "}
              {/* <ReactTooltip
                id={stats?.parent_hash}
                place="top"
                className=""
                // variant="danger"
                style={{ backgroundColor: "#040F1C", color: "white", overflow: 'visible'}}
                content={stats?.parent_hash}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carddetailscarousel;
