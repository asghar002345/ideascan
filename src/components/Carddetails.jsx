import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/array3";
import ModalComponent from "./ModalComponent";
const Carddetails = () => {
  const [statsData, setStatsData] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const test = async () => {
    const res = await fetch(
      `https://gnosis.blockscout.com/api/v2/main-page/blocks`
    );
    const response = await res.json();
    setStatsData(response);
    console.log("blocks");
    console.log(response);
  };

  useEffect(() => {
    test();
  }, []);
  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-4 font-poppins">
      <div className="flex justify-between items-center px-1 md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto my-3">
        <h1 className="font-bold text-[24px] text-white uppercase">Recent Blocks</h1>
        <button
          onClick={toggleModal}
          className=" rounded-xl px-3 py-2 text-white bg-blue-600"
        >
          View all
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7">
          {statsData?.map((item, index) => (
            <div key={index} className="mt-3">
              <div className="w-[300px] h-[150px] p-2 rounded-xl opacity-[100] bg-[#0F2434] text-white">
                <div className="flex justify-between items-center mx-4 py-2">
                  <p className="text-blue-400 font-medium text-[16px]">
                    Number
                  </p>
                  <p className="mr-3 text-blue-200 font-semi-bold text-[16px]">Time</p>
                </div>
                <div className="font-semibold text-[16px] leading-[30px] mx-4">
                  <p className="text-[#C6C8CC]">
                    Tx Count<span className="pl-4 text-white">{item.tx_count}</span>
                  </p>
                  <p className="text-[#C6C8CC]">
                    Hash<span className="pl-11 text-white">{item.hash.slice(0,16)}...</span>{" "}
                  </p>
                  <p className="text-[#C6C8CC]">
                    Validator <span className="pl-3 text-white"> 012x125454545512... </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the modal conditionally */}
      {isModalOpen && (
        <ModalComponent onClose={toggleModal} /> // Pass onClose prop to handle modal close
      )}
    </div>
  );
};

export default Carddetails;
