import React from "react";
import Cards from "../components/Cards";
import Hero from "../components/Hero.jsx";
import Carddetails from "../components/Carddetails.jsx";
import Cardresult from "../components/Cardresult.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useState } from "react";
import mainpage from "../assests/videos/mainpage.mp4";
import { useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import block from "../assests/pngs/block.png";
import { IoCopyOutline } from "react-icons/io5";


const Home = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const [statsData, setStatsData] = useState([]);

  const test = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_GNOSIS_BLOCK}`);
    const response = await res.json();
    setStatsData(response.items);
  };

  useEffect(() => {
    test();
  }, []);
  const [mod, setMod] = useState(false);
  const recordsperpage = 11;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = statsData.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(statsData?.length / recordsperpage);
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
  function changeCPage(e, id) {
    e.preventDefault();
    setCurrentpage(id);
  }
  function copyText(arr) {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(arr?.hash);
  }

  return (
    <div>
      {/* <div className='bg-center bg-cover' style={{backgroundImage: url(${bg1})}}>
        <SearchBar />
        <Cards />
      </div> */}
      <div>
        <video
          src={mainpage}
          autoPlay
          loop
          muted
          className="w-[100%] h-[100vh] object-cover"
        ></video>
        <div className="absolute top-16 sm:top-32 w-[100%] h-[100%]">
          <SearchBar />
          <Cards />
        </div>
      </div>
      <div>
        <Hero />
        {/* <Carddetails mod={mod} setMod={setMod} /> */}
        <Cardresult mod={mod} setMod={setMod} />
        <div>
        <div className=" w-[19rem] sm:w-[44rem] lg:w-[60rem] xl:w-[80rem] mx-auto mb-4">
        <h1 className="flex">
          <img src={block} className="w-7" alt="" />
          <span className="ml-3 text-white text-[21px] sm:text-2xl font-bold">Blocks</span>
        </h1>
      </div>
        <div className="overflow-x-auto mx-2 sm:mx-4 rounded-3xl">
        <div className="max-h-[400px] md:max-h-[70rem] overflow-y-auto mb-12">
        <table className="items-center mx-auto lg:w-[60rem] xl:w-[80rem] rounded-lg text-left sm:w-[50rem] w-[43rem] ">
          <thead className="bg-[#0F2434] rounded-lg text-white text-lg sticky top-0">
            <tr className="text-white rounded-xl text-[14px] md:text-[16px] ">
              <th className="sm:text-left pl-7 py-4 rounded-tl-3xl"> Block </th>
              <th className="sm:text-left pl-7 py-4">Time stamp</th>
              <th className="sm:text-left pl-7 py-4">Block Hash</th>
              <th className="sm:text-left pl-7 py-4">Validator</th>
              <th className="sm:text-left pl-7 py-4">Transaction Count</th>
              <th className="sm:text-left pl-7 py-4 rounded-tr-3xl">Gas Used</th>
            </tr>
          </thead>
          <tbody className="">
            {records.map((arr) => (
              <tr
                key={arr.hash}
                className="text-white bg-[#071120] border-b-[1px] border-0 border-[#0F2434] font-poppins font-semibold text-[8px] sm:text-[16px]"
              >
                <td className="pl-7 text-left py-3 text-[#1283D7]">{arr?.size}</td>
                <td className="pl-7 text-left  py-3">
                  {arr.timestamp.slice(12, 13)}m ago
                  <span className="block font-semibold text-[8px] sm:text-[12px] text-[#9CA0A7]">
                    {arr.timestamp.slice(0, 10)} {arr.timestamp.slice(11, 15)}
                  </span>{" "}
                </td>
                <td data-tooltip-id={arr.hash} className="flex items-center pl-7 text-left py-3 mt-2">
                  {arr?.hash?.slice(0, 12)}{" "}
                  <span className="inline-block pl-2">
                      <IoCopyOutline
                        className="hover:cursor-pointer"
                        onClick={() => copyText(arr)}
                      />
                    </span>{" "}
                  <ReactTooltip
                      id={arr?.hash}
                      place="top"
                      className=""
                      // variant="danger"
                      style={{ backgroundColor: "#040F1C", color: "white" }}
                      content={arr.hash}
                    />
                </td>
                <td data-tooltip-id={arr.parent_hash} className="pl-7 text-left py-3">
                  {arr?.parent_hash.slice(0, 12)}
                  <ReactTooltip
                      id={arr?.parent_hash}
                      place="top"
                      className=""
                      // variant="danger"
                      style={{ backgroundColor: "#040F1C", color: "white" }}
                      content={arr.parent_hash}
                    />
                </td>
                <td className="pl-7 text-left py-3">{arr?.tx_count}</td>
                <td className="pl-7 text-left py-3">{arr.gas_used}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="sticky bottom-0">
          <nav>
            <ul className="text-white items-center mx-auto w-[43rem] lg:w-[62.5rem] xl:w-[80rem] sm:w-[50rem] flex flex-row h-7 py-7 justify-center bg-[#071120] ">
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
                  <a href="#" onClick={(e) => changeCPage(e, n)} className="">
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
        
        <Footer />
      </div>
    </div>
  );
};

export default Home;