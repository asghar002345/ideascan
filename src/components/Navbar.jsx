import React from "react";
import logo from "../assests/pngs/logo.png";
import logo1 from "../assests/pngs/logo1.png";
import meta from "../assests/svgs/metamask-icon.svg";
import { slide as menu } from "react-burger-menu";
import SideBar from "./SideBar";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#181919] w-full text-white items-center h-[80px] font-poppins">
      <div className="flex ml-8 items-center">
        <img src={logo} alt="logo" />
        <img src={logo1} alt="logo1" className="pl-3" />
      </div>
      <div>
        <h1 className="font-semibold text-2xl  hidden md:block lg:block">
          {" "}
          IDEASCAN - TESTNET EXPLORER
        </h1>
      </div>
      <div className="mr-8"> {<SideBar />}</div>
    </div>
  );
};

export default Navbar;
