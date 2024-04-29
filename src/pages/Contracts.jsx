import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import { useEffect } from "react";
import { CiImageOff } from "react-icons/ci";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { GiBrokenBone } from "react-icons/gi";


const Contracts = () => {
  const [statsData, setStatsData] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 11;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = statsData.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(statsData.length / recordsperpage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);
  console.log(records);
  const test = async () => {
    const res = await fetch(
      `https://eth.blockscout.com/api/v2/tokens?q=USDT&type=ERC-20%2CERC-721%2CERC-1155`
    );
    const response = await res.json();
    setStatsData(response.items);
    console.log("this is contracts", statsData);
  };

  useEffect(() => {
    test();
  }, []);

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

  return (
    <div>
      <SearchBar />
      <div className="lg:w-[60rem] xl:w-[80rem] w-[10rem] mx-auto pl-7 sm:pl-0 mb-4">
        <h1 className="font-bold font-poppins text-[20px] sm:text-[32px] mt-3 text-white text-left">
          Contracts
        </h1>
      </div>
      <div className="overflow-x-auto mx-2 sm:mx-4 rounded-3xl">
        <div className="max-h-[400px] md:max-h-[70rem] overflow-y-auto mb-12">
          <table className="items-center mx-auto lg:mx-auto w-[50rem] lg:w-[60rem] xl:w-[80rem] rounded-lg text-left ">
            <thead className="bg-[#0F2434] rounded-lg text-white text-lg sticky top-0 z-10">
              <tr className="text-white rounded-xl">
                <th className="text-left pl-7 py-4 rounded-tl-3xl w-[20rem]"> Name </th>
                <th className="text-left pl-7 py-4">Type</th>
                <th className="text-left pl-7 py-4">Contract Adress</th>
                <th className="text-left pl-7 py-4 rounded-tr-3xl">Exchange Rate</th>
                {/* <th className="text-left pl-7 py-4 rounded-tr-3xl">Symbol</th> */}
                {/* <th className="text-left pl-7 py-4 rounded-tr-3xl">Last Executed At</th> */}
                {/* <th className="text-left pl-7 py-4">Deployed_At</th> */}
              </tr>
            </thead>
            <tbody className="">
              {records.map((arr) => (
                <tr
                  key={arr.id}
                  className="text-white bg-[#071120] border-b-[1px] border-[#0F2434] border-0 text-[10px] sm:text-[16px]"
                >
                  <td className="pl-7 text-left py-3 flex items-center w-[20rem]">{arr.icon_url && <img className="w-12" src={arr.icon_url}/> || <GiBrokenBone size={34} color="white" />}
                  <span className="pl-6">
                  {arr.name}
                    </span>
                  </td>
                  <td className="pl-7 text-left py-3">IDE-20</td>
                  <td className="pl-7 text-left py-3 text-[#0E83DB]">
                    {arr.address.slice(0, 13)}...
                    {/* <span className="inline-flex pl-2">
                    <img src={square} />
                  </span> */}
                  </td>
                  <td className="pl-7 text-left py-3 text-[#0E83DB]">
                    {arr.exchange_rate && (arr.exchange_rate) || 0}
                  </td>
                  {/* <td className="pl-7 text-left py-3 text-[#0E83DB]">
                    {}{" "}
                    <span className="inline-flex pl-1">
                      {arr.icon_url && <img className="w-12" src={arr.icon_url}/> || <CiImageOff size={34} color="white" />}
                    </span>
                  </td> */}
                  {/* <td className="pl-7 text-left py-3 ">
                    {arr.Last_Executed_At}
                  </td> */}
                  {/* <td className="pl-7 text-left py-3">{arr.Deployed_At}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sticky bottom-0">
            <nav className="">
              <ul className="text-white mx-auto w-[50rem] lg:w-[60rem] xl:w-[80rem] items-center py-7 flex flex-row justify-center bg-[#071120]">
                <li className="mr-3">
                  <a
                    href="#"
                    onClick={prePage}
                    className="bg-[#0C71BC] rounded-full py-1 px-2 sm:py-2 sm:px-3 text-[12px] sm:text-lg "
                  >
                    Prev{" "}
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li
                    key={i}
                    className={`mr-3 ${
                      currentpage === n ? "active" : ""
                    } hover:outline-blue-700 hover:outline hover:outline-2 hover:outline-offset-2 px-2 text-[8px] sm:text-lg`}
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
                    className="bg-[#0C71BC] rounded-full py-1 px-2 sm:py-2 sm:px-3 text-[12px] sm:text-lg"
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

export default Contracts;
