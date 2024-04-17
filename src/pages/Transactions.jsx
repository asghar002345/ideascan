import React, { useState } from "react";
import { arraytest1, arraytest2 } from "../utils/Blockarray1";
import DynamicChart from "../components/DynamicChart";
import { UserData } from "../components/Data";
import square from "../assests/pngs/square.png";
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
        borderWidth: 2,
        // color:"white"
      },
    ],
  });

  const [singleItem, setSingleItem] = useState();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://eth.blockscout.com/api/v2/main-page/transactions`
      );
      const response = await res.json();
      console.log("Requested data which we get from block chain ");
      console.log(response);
      setStatsData(response);
      setSingleItem(await statsData[0]);
      console.log("this is single item============>>", singleItem);
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
            borderWidth: 2,
            // color:"white"
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
  console.log("this is records", records);

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
      <div className="md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto">
        <h1 className="font-bold font-poppins text-2xl mt-3 text-left text-white">
          Transactions
        </h1>
      </div>
      <div className="bg-[#0F2434] flex flex-col lg:flex-row xl:flex-row rounded-xl shadow-lg w-full md:w-[40rem] lg:w-[60rem] xl:w-[80rem] h-[28rem] items-center mx-auto  my-5">
        <div className="justify-center ml-12 text-white flex lg:flex-col mx-3">
          <div className="px-1 text-center lg:text-left">
            <h1 className="my-3 text-[#9CA0A7]">Total Transactions</h1>
            <p className="text-2xl mb-2">{singleItem?.block}</p>
          </div>
          <div className="px-1 text-center lg:text-left">
            <h1 className="my-3 text-[#9CA0A7]">Contract Transaction</h1>
            <p className="text-2xl mb-2">{singleItem?.confirmations}</p>
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
      <div>
        <div className="rounded-lg overflow-x-auto">
          <table className="items-center mx-auto mt-9 w-[80rem] rounded-lg text-left">
            <thead className="bg-[#0F2434] rounded-lg text-white font-bold font-poppins ">
              <tr className="text-white rounded-xl">
                <th className="text-left pl-7 py-4 "> TxHash </th>
                <th className="text-left pl-7 py-4">Block</th>
                <th className="text-left pl-7 py-4">Method</th>
                <th className="text-left pl-7 py-4">From</th>
                <th className="text-left pl-7 py-4">To</th>
                <th className="text-left pl-7 py-4">Timestamp</th>
                <th className="text-left pl-7 py-4">Value</th>
                <th className="text-left pl-7 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="">
              {records.map((arr) => (
                <tr
                  key={arr.id}
                  className="text-white bg-[#040F1C] border-b-[1px] border-0 border-[#0F2434] font-poppins font-bold text-[14px] "
                >
                  <td className="pl-7 text-left py-3">
                    <span data-tooltip-id={arr.hash}>
                      {arr.hash.slice(0, 14)}...
                    </span>
                    <ReactTooltip
                      id={arr.hash}
                      place="top"
                      className=""
                      // variant="danger"
                      style={{ backgroundColor: "#040F1C", color: "white" }}
                      content={arr.from.hash}
                    />
                  </td>
                  <td className="pl-7 text-left py-3 text-[#0E83DB]">
                    {arr.block}
                  </td>
                  <td className="pl-7 text-left py-3">{arr.method}</td>
                  <td className="pl-7 text-left py-3 flex items-center mt-2 text-[#0E83DB]">
                    <ReactTooltip
                      id={arr.from.hash}
                      place="top"
                      className=""
                      // variant="danger"
                      style={{ backgroundColor: "#040F1C", color: "#0E83DB" }}
                      content={arr.from.hash}
                    />
                    <span data-tooltip-id={arr.from.hash}>
                      {arr.from.hash.slice(0, 14)}...{" "}
                    </span>
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
          <div>
            <nav>
              <ul className="text-white mx-auto w-[80rem] flex flex-row py-7 mb-12  justify-center  bg-[#071120]">
                <li className="mr-3">
                  <a
                    href="#"
                    onClick={prePage}
                    className="bg-[#0C71BC] rounded-full py-2 px-3 "
                  >
                    Prev{" "}
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li
                    key={i}
                    className={`mr-3 ${
                      currentpage === n ? "active" : ""
                    } hover:outline-blue-700 hover:outline hover:outline-2 hover:outline-offset-2 px-2`}
                  >
                    <a href="#" onClick={(e) => changeCPage(n, e)}>
                      {n}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    onClick={nextPage}
                    className="bg-[#0C71BC] rounded-full py-2 px-3"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
