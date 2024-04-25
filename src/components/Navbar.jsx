
import React from "react";
import logo from "../assests/pngs/logo.png";
import meta from "../assests/svgs/metamask-icon.svg";
import SideBar from "./SideBar";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [show, setShow]= useState(false);
  const [userAddress, setUserAddress]= useState('');
  const [errorMessage, setErrorMessage]=useState('');

  const handleEthers= ()=>{
    try {
      if(window.ethereum){
        window.ethereum.request({
          method: 'eth_requestAccounts'
        }).then(res=>{
          accountChanged([res[0]])
        }).catch(err=>{
          setShow(false)
        })
        setShow(true);
      }
      else{
        setErrorMessage('Install MetaMask!!!');
        setShow(false);
      }
    } catch (error) {
      console.log('this is error',error)
      setShow(false);
    }
  }

  const accountChanged=(accountName)=>{
    setUserAddress(accountName);
  }
  function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText(userAddress);
  }

  const notify = () => toast("Address Copied",{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
    <div className="flex justify-between bg-[#181919] w-full text-white items-center h-[80px] font-poppins">
      <div className="ml-2 md:ml-12">
        <img src={logo} alt="logo" className="w-44 sm:w-52" />
        {/* <img src={logo1} alt="logo1" className="pl-3" /> */}
      </div>
        <div className="flex items-center">
        <div className="mx-[1.5rem]">
          {
            show ? 
            <div  onClick={() => {copyText();notify()}} className=" bg-[#37373C] h-[40px] text-[8px] text-base rounded-lg p-2 cursor-pointer hover:bg-[#0F2434] ease-in-out duration-200 flex items-center">
            {String(userAddress)?.substring(0,10)}...<span className="hidden sm:block">{String(userAddress)?.substring(22,30)}</span>
            <span className="pl-2">
                      <IoCopyOutline
                        className="hover:cursor-pointer"
                      />
                    </span>
            </div> 
            :
            <button className="border-transparent rounded px-3 py-2 bg-[#37373C] flex items-center" onClick={handleEthers}>
              <img src={meta} style={{ width: "20px" }} alt="meta" />
              <span className="ml-2 hidden sm:block">Add Idea Network</span>
            </button>
          }
          {errorMessage && <div> {errorMessage} </div>}
          <ToastContainer />
        </div>
      <div  className='mr-3 md:mr-16 leading-3'> {<SideBar />}</div>
        </div>
    </div>
  );
};

export default Navbar;

