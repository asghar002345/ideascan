import React from "react";
import { slide as menu } from "react-burger-menu";
import { Link, Route } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import meta from "../assests/svgs/metamask-icon.svg";

export const menuItem = [
  {
    id: "1",
    path: "/",
    name: "Dashboard",
  },
  {
    id: "2",
    path: "/stats",
    name: "Stats & Graphs",
  },
  {
    id: "3",
    path: "/blocks",
    name: "Blocks",
  },
  {
    id: "4",
    path: "/transactions",
    name: "Transactions",
  },
  {
    id: "5",
    path: "/contracts",
    name: "Contracts",
  },
  {
    id: "6",
    path: "/assests",
    name: "Assests",
  },
  {
    id: "7",
    path: "/validators",
    name: "Validators",
  },
  {
    id: "8",
    path: "/nodes",
    name: "Nodes",
  },
  {
    id: "9",
    path: "/faucet",
    name: "Faucet",
  },
];

const SideBar = () => {
  //     //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    setMenuCollapse(!menuCollapse);
    // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className=" ">
      <button onClick={menuIconClick}>{<FaBars className="w-6 h-6" />}</button>
      <div
        className={`bg-[#040507] w-[300px] z-[1000] h-screen fixed opacity-100 top-0 right-0 ${menuCollapse ? <FaXmark /> : "hidden"
          }`}
      >
        <button onClick={menuIconClick}>
          {<FaXmark className="w-6 h-6 mt-4 ml-5" />}
        </button>
        <div className="overflow-y-scroll h-screen sticky pb-16">
          {menuItem.map((item, index) => (
            <div key={index} className="flex">
              {/* <p className='my-5 cursor-pointer ml-9'>{item.name}</p> */}
              {/* <a href={item.path}>{item.name}</a> */}
              <Link
                to={item.path}
                className="my-4 cursor-pointer ml-7"
                // check this
                onClick={() => menuIconClick()}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="mx-[1.5rem]">
            <button className="border-transparent rounded px-3 py-2 bg-[#37373C] flex">
              <img src={meta} style={{ width: "20px" }} alt="meta" />
              <span className="ml-2">Add Idea Network</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
