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
      <div className="ml-2 md:ml-12">
        <img src={logo} alt="logo" className="w-52" />
        {/* <img src={logo1} alt="logo1" className="pl-3" /> */}
      </div>
      <div  className='mr-3 md:mr-16'> {<SideBar />}</div>
    </div>
  );
};

export default Navbar;
