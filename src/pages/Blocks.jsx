import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/Blockarray";
import block from "../assests/pngs/block.png";
import { arraytest1 } from "../utils/Blockarray1";
import square from "../assests/pngs/square.png";

const Blocks = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const [statsData, setStatsData] = useState(null);
  const [error, setError] = useState(null);

  const test = async () => {
    const res = await fetch(
      `https://gnosis.blockscout.com/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg`
    );
    const response = await res.json();
    setStatsData(response);
    console.log(response);
  };

  useEffect(() => {
    test();
  }, []);

  const recordsperpage = 11;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = arraytest1.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(arraytest1.length / recordsperpage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);
  // console.log(records);

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
  function changeCPage(e, id) {
    e.preventDefault();
    setCurrentpage(id);
  }

  // const handlepagechange = (pagenumber) => {
  //   setCurrentpage(pagenumber)
  // }
  // const handlecategorychange = (category) => {
  //   setselectedcategory(category)
  //   setCurrentpage(1);
  //   setactivecategory(category);
  // }

  return (
    <div>
      <div className="mt-3">
        <h1 className="flex ml-9">
          <img src={block} className="w-7" alt="" />
          <span className="ml-3 text-white text-2xl font-bold">Blocks</span>
        </h1>
      </div>
      <div className="rounded-xl flex flex-col lg:flex-row my-4 md:mx-auto lg:mx-auto xl:mx-auto w-[19rem] mx-auto lg:w-[63rem] xl:w-[80rem] bg-[#0F2434]">
        {arraytest.map((item, index) => (
          <div
            key={index}
            className="rounded-xl mx-auto flex flex-col w-64 md:w-72 lg:w-80 xl:w-96 items-center justify-center bg-gradient-to-l bg-[#040F1C] py-4 md:py-6 lg:py-0 my-3 lg:px-3 xl:px-0"
          >
            <div>
              <img src={item.logo} alt="logos" className="" />
            </div>
            <div className="text-center text-white font-semibold text-xl">
              <p className="pt-2">{item.textBig}</p>
              <p>{item.diffData}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-x-auto">
        <table className="items-center mt-9 mx-auto md:w-[80rem] rounded-lg text-left sm:w-[50rem] ">
          <thead className="bg-[#0F2434] rounded-lg text-white text-lg ">
            <tr className="text-white rounded-xl">
              <th className="text-left pl-7 py-4 "> Block </th>
              <th className="text-left pl-7 py-4">Time stamp</th>
              <th className="text-left pl-7 py-4">Block Hash</th>
              <th className="text-left pl-7 py-4">Validator</th>
              <th className="text-left pl-7 py-4">Transaction Count</th>
              <th className="text-left pl-7 py-4">Gas Used</th>
            </tr>
          </thead>
          <tbody className="">
            {records.map((arr) => (
              <tr
                key={arr.id}
                className="text-white bg-[#040F1C] border-b-[1px] border-0 border-[#0F2434] font-poppins font-[700]"
              >
                <td className="pl-7 text-left py-3">{arr.id}</td>
                <td className="pl-7 text-left  py-3">
                  {arr.timestamp}{" "}
                  <span className="block font-semibold text-[12px] text-[#9CA0A7]">
                    {arr.date}
                  </span>{" "}
                </td>
                <td className="flex items-center pl-7 text-left py-3 mt-3">
                  {arr.blockhash}{" "}
                  <span>
                    <img src={square} alt="" className="ml-2" />
                  </span>{" "}
                </td>
                <td className="pl-7 text-left py-3">{arr.validator}</td>
                <td className="pl-7 text-left py-3">{arr.transactioncount}</td>
                <td className="pl-7 text-left py-3">{arr.gasused}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <nav>
            <ul className="text-white items-center mx-auto md:w-[80rem] w-[43rem] sm:w-full flex flex-row h-7 py-7 mb-12 justify-center bg-[#071120] ">
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
                  <a href="#" onClick={(e) => changeCPage(e, n)} className="">
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

export default Blocks;
