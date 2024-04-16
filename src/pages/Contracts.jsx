import React from "react";
import { arraytest3 } from "../utils/Blockarray1";
import { useState } from "react";
import square from "../assests/pngs/square.png";
import SearchBar from '../components/SearchBar.jsx';
import SideBar from "../components/SideBar.jsx";
import { useEffect } from "react";
const Contracts = () => {
  const [statsData, setStatsData] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 11;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = arraytest3.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(arraytest3.length / recordsperpage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);
  console.log(records);
  const test = async () => {
    const res = await fetch(
      `https://eth.blockscout.com/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg`
    );
    const response = await res.json();
    setStatsData(response.items);
    console.log("this is statsdata", statsData);
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
      <div className="lg:w-[60rem] xl:w-[80rem] mx-auto">
      <h1 className="font-bold font-poppins text-[32px] mt-3 text-white text-left">
        Contracts
      </h1>
      </div>
      <div className="rounded-lg overflow-x-auto">
        <table className="items-center lg:mx-auto mt-7 w-[50rem] lg:w-[60rem] xl:w-[80rem] rounded-lg text-left">
          <thead className="bg-[#0F2434] rounded-lg text-white text-lg ">
            <tr className="text-white rounded-xl">
              <th className="text-left pl-7 py-4 "> Name </th>
              <th className="text-left pl-7 py-4">Type</th>
              <th className="text-left pl-7 py-4">Contract_Adress</th>
              <th className="text-left pl-7 py-4">TxHash</th>
              <th className="text-left pl-7 py-4">Last_Executed_At</th>
              {/* <th className="text-left pl-7 py-4">Deployed_At</th> */}
            </tr>
          </thead>
          <tbody className="">
            {records.map((arr) => (
              <tr
                key={arr.id}
                className="text-white bg-[#040F1C] border-b-[1px] border-[#0F2434] border-0 "
              >
                <td className="pl-7 text-left py-3">{arr.Name}</td>
                <td className="pl-7 text-left py-3">{arr.Type}</td>
                <td className="pl-7 text-left py-3 text-[#0E83DB]">
                  {arr.Contract_Adress}
                  <span className="inline-flex pl-2">
                    <img src={square} />
                  </span>
                </td>
                <td className="pl-7 text-left py-3 text-[#0E83DB]">
                  {arr.TxHash}{" "}
                  <span className="inline-flex pl-1">
                    <img src={square} />
                  </span>
                </td>
                <td className="pl-7 text-left py-3 ">{arr.Last_Executed_At}</td>
                {/* <td className="pl-7 text-left py-3">{arr.Deployed_At}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <nav className="">
            <ul className="text-white mx-auto w-[50rem] lg:w-[60rem] xl:w-[80rem] items-center py-7 mb-10 flex flex-row justify-center bg-[#071120]">
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
  );
};

export default Contracts;
