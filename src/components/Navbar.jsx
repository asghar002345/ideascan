import React from "react";
import logo from "../assests/pngs/logo.png";
import logo2 from "../assests/pngs/logo2.png";
import meta from "../assests/svgs/metamask-icon.svg";
import { slide as menu } from "react-burger-menu";
import SideBar from "./SideBar";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#181919] w-full text-white items-center h-[80px] font-poppins">
      <div className="ml-2 md:ml-12">
        <img src={logo2} alt="logo" className="w-44 h-16 lg:ml-14" />
        {/* <img src={logo1} alt="logo1" className="pl-3" /> */}
      </div>
      <div  className='mr-3 md:mr-16'> {<SideBar />}</div>
    </div>
  );
};

export default Navbar;
