import React, { useState } from "react";
import DynamicChart from "../components/DynamicChart";
import SearchBar from "../components/SearchBar.jsx";
import { useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Transactions = () => {
  const [statsData, setStatsData] = useState([]);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        borderWidth: 2
      },
    ],
  });

  const [singleItem, setSingleItem] = useState();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_GNOSIS_TRANSACTIONS}`
      );
      const response = await res.json();
      setStatsData(response);
      setSingleItem(await statsData[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [statsData]);

  useEffect(() => {
    if (statsData.length > 0) {
      const labels = statsData.map((arr) => arr.hash.slice(0, 14) + "...");
      const data = statsData.map((arr) => arr.value.slice(0, 4));
      setUserData({
        labels: labels,
        datasets: [
          {
            label: "Users Gained",
            data: data,
            borderWidth: 2
          },
        ],
      });
    }
  }, [statsData]);

  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 11;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = statsData.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(statsData.length / recordsperpage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  function prePage(e) {
    e.preventDefault();
    if (currentpage !== 1) {
      setCurrentpage(currentpage - 1);
    }
  }
  function nextPage(e) {
    e.preventDefault();
    if (currentpage !== nPages) {
      setCurrentpage(currentpage + 1);
    }
  }
  function changeCPage(id, e) {
    e.preventDefault();
    setCurrentpage(id);
  }
  function copyText(arr) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(arr?.to?.hash);
  }
  function copyText1(arr) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(arr?.from?.hash);
  }

  return (
    <div>
      <SearchBar />
      <div className="md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto pl-8 sm:pl-0">
        <h1 className="font-bold font-poppins text-2xl mt-3 text-left text-white">
          Transactions
        </h1>
      </div>
      <div className="bg-[#0F2434] flex flex-col lg:flex-row xl:flex-row rounded-xl shadow-lg w-[23rem] sm:w-full md:w-[47rem] lg:w-[60rem] xl:w-[80rem] h-[28rem] items-center mx-auto  my-5">
        <div className="justify-center  text-white flex lg:flex-col mx-8">
          <div className="px-4 text-center lg:text-left">
            <h1 className="my-3 text-[#9CA0A7] text-[12px]">Total Transactions</h1>
            <p className="text-2xl mb-2">{singleItem && ((singleItem?.block)/10000000).toFixed(2) || 0}</p>
          </div>
          <div className="px-1 text-center lg:text-left">
            <h1 className="my-3 text-[#9CA0A7] text-[12px]">Contract Transaction</h1>
            <p className="text-2xl mb-2">{singleItem && singleItem?.confirmations || 0}</p>
          </div>
          {/* <div className="px-1 text-center lg:text-left">
            <h1 className="my-3 text-[#9CA0A7]">Gas Fee Paid</h1>
            <p className="text-2xl mb-2">{(singleItem?.gas_price/100000000000).toFixed(3)}</p>
          </div> */}
        </div>
        <div>
          <DynamicChart chartData={userData} className="" />
        </div>
      </div>
      <div className="rounded-3xl mb-20">
        <div className="rounded-lg overflow-x-auto mx-2">
          <table className="items-center mx-auto mt-9 w-[80rem] rounded-lg text-left">
            <thead className="bg-[#0F2434] rounded-lg text-white font-bold font-poppins ">
              <tr className="text-white rounded-xl">
                <th className="text-left pl-7 py-4 rounded-tl-3xl"> TxHash </th>
                <th className="text-left pl-7 py-4">Block</th>
                <th className='text-left pl-7 py-4'>Method</th>
                <th className="text-left pl-7 py-4">From</th>
                <th className="text-left pl-7 py-4">To</th>
                <th className="text-left pl-7 py-4">Timestamp</th>
                <th className="text-left pl-7 py-4">Value</th>
                <th className="text-left pl-7 py-4 rounded-tr-3xl">Status</th>
              </tr>
            </thead>
            <tbody className="">
              {records.map((arr) => (
                <tr
                  key={arr.hash}
                  className="text-white bg-[#071120] border-b-[1px] border-0 border-[#0F2434] font-poppins font-bold text-[14px] "
                >
                  <td className="pl-7 text-left py-3">
                    <span data-tooltip-id={arr.hash}>
                      {arr?.hash.slice(0, 14)}...
                    </span>
                    <ReactTooltip
                      id={arr?.hash}
                      place="top"
                      className=""
                      // variant="danger"
                      style={{ backgroundColor: "#040F1C", color: "white" }}
                      content={arr.hash}
                    />
                  </td>
                  <td className="pl-7 text-left py-3 text-[#0E83DB] ">
                    {arr.block}
                  </td>
                  <td className="pl-7 text-left py-3 ">Coin_Transfer</td>
                  {/* {String(arr.method).slice(0,8)} */}
                  <td className="pl-7 text-left py-3 flex items-center mt-2 text-[#0E83DB]">
                    <span data-tooltip-id={arr.from.hash}>
                      {arr.from.hash.slice(0, 14)}...{" "}
                    </span>
                    <ReactTooltip
                      id={arr.from.hash}
                      place="top"
                      className=""
                      // variant="danger"
                      style={{ backgroundColor: "#040F1C", color: "#0E83DB" }}
                      content={arr.from.hash}
                    />
                    <span className="inline-block pl-2">
                      <IoCopyOutline
                        className="hover:cursor-pointer"
                        onClick={() => copyText1(arr)}
                      />
                    </span>{" "}
                  </td>
                  <td className="pl-7 text-left py-3  text-[#0E83DB]">
                    <span data-tooltip-id={arr.to.hash}>
                      {arr.to.hash.slice(0, 14)}...
                    </span>
                    <span className="inline-block pl-2 ">
                      <IoCopyOutline
                        className="hover:cursor-pointer"
                        onClick={() => copyText(arr)}
                      />
                    </span>{" "}
                    <ReactTooltip
                      id={arr.to.hash}
                      place="top"
                      className=""
                      // variant="danger"
                      style={{ backgroundColor: "#040F1C", color: "#0E83DB" }}
                      content={arr.to.hash}
                    />
                  </td>
                  <td className="pl-7 text-left py-3">
                    {arr.timestamp.slice(11, 13)}m ago
                    <span className="block font-semibold text-[14px] text-[#9CA0A7]">
                      {arr.timestamp.slice(0, 10)} {arr.timestamp.slice(11, 15)}
                    </span>
                  </td>
                  <td className="pl-7 text-left py-3">
                    {arr.value.slice(0, 4)}
                  </td>
                  <td className="pl-7 text-left py-3">
                    <button className="text-green-500">
                      {arr.result.slice(0, 8)}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
