import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/Blockarray";
import block from "../assests/pngs/block.png";
import { arraytest1 } from "../utils/Blockarray1";
import square from "../assests/pngs/square.png";
import SearchBar from "../components/SearchBar.jsx";
import img1 from "../assests/pngs/Block1.png";
import img2 from "../assests/pngs/Block2.png";
import img3 from "../assests/pngs/Block3.png";

const Blocks = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const [statsData, setStatsData] = useState([]);
  const [error, setError] = useState(null);
  const [singleItem, setSingleItem] = useState();

  const test = async () => {
    const res = await fetch(
      `https://eth.blockscout.com/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg`
    );
    const response = await res.json();
    setStatsData(response.items);
    console.log("this is statsdata", statsData);
    setSingleItem(statsData[0]);
    console.log("this is single item", singleItem);
  };

  useEffect(() => {
    test();
  }, []);

  const recordsperpage = 11;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = statsData.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(statsData?.length / recordsperpage);
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
      <SearchBar />
      <div className="mt-3 w-[19rem] lg:w-[63rem] xl:w-[80rem] mx-auto">
        <h1 className="flex">
          <img src={block} className="w-7" alt="" />
          <span className="ml-3 text-white text-2xl font-bold">Blocks</span>
        </h1>
      </div>
      <div className="rounded-xl flex flex-col lg:flex-row my-4 md:mx-auto lg:mx-auto xl:mx-auto w-[19rem] mx-auto lg:w-[63rem] xl:w-[80rem] bg-[#0F2434]">
        {/* <div
             className="rounded-xl mx-auto flex flex-col md:flex-row w-64 md:w-72 lg:w-80 xl:w-96 items-center justify-center bg-gradient-to-l bg-[#040F1C] py-4 md:py-6 lg:py-0 my-3 lg:px-3 xl:px-0"
          > */}
        <div className="rounded-xl mx-auto flex flex-col w-64 md:w-72 lg:w-80 xl:w-96 items-center justify-center bg-gradient-to-l bg-[#040F1C] py-4 md:py-6 lg:py-0 my-3 lg:px-3 xl:px-0">
          <div>
            <img src={img1} alt="logos" className="" />
          </div>
          <div className="text-center text-white font-semibold text-xl">
            <p className="pt-2">Top Validators (Last 24H)</p>
            <p>{singleItem?.hash?.slice(0, 12)}...</p>
          </div>
        </div>
        <div className="rounded-xl mx-auto flex flex-col w-64 md:w-72 lg:w-80 xl:w-96 items-center justify-center bg-gradient-to-l bg-[#040F1C] py-4 md:py-6 lg:py-0 my-3 lg:px-3 xl:px-0">
          <div>
            <img src={img2} alt="logos" className="" />
          </div>
          <div className="text-center text-white font-semibold text-xl">
            <p className="pt-2">Latest Block</p>
            <p>{singleItem?.size}</p>
          </div>
        </div>
        <div className="rounded-xl mx-auto flex flex-row w-64 md:w-72 lg:w-80 xl:w-96 items-center justify-center bg-gradient-to-l bg-[#040F1C] py-4 md:py-6 lg:py-0 my-3 lg:px-3 xl:px-0">
          <div class="relative items-center block max-w-sm p-6 rounded-lg shadow-md">
            <p className="flex flex-col text-white items-center font-poppins font-bold text-[12px]">1 Second <span>Round Time</span></p>
            <div
              role="status"
              class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
            >
              <svg
                aria-hidden="true"
                class="w-36 h-32 text-gray-200 animate-spin  fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div className="text-center text-white font-semibold text-xl pl-12">
            <p>Block Time</p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="rounded-lg overflow-x-auto">
        <table className="items-center mt-9 mx-auto lg:w-[62.5rem] xl:w-[80rem] rounded-lg text-left sm:w-[50rem] ">
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
                <td className="pl-7 text-left py-3">{arr?.size}</td>
                <td className="pl-7 text-left  py-3">
                  {arr.timestamp}{" "}
                  <span className="block font-semibold text-[12px] text-[#9CA0A7]">
                    {arr.date}
                  </span>{" "}
                </td>
                <td className="flex items-center pl-7 text-left py-3 mt-3">
                  {arr?.hash?.slice(0,12)}{" "}
                  <span>
                    <img src={square} alt="" className="ml-2" />
                  </span>{" "}
                </td>
                <td className="pl-7 text-left py-3">{arr?.parent_hash.slice(0,12)}</td>
                <td className="pl-7 text-left py-3">{arr?.tx_count}</td>
                <td className="pl-7 text-left py-3">{arr.gas_used}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <nav>
            <ul className="text-white items-center mx-auto w-[43rem] lg:w-[62.5rem] xl:w-[80rem] sm:w-[50rem] flex flex-row h-7 py-7 mb-12 justify-center bg-[#071120] ">
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
