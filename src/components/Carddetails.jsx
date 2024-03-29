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
      <div className="flex justify-between px-1 md:mx-[3rem] lg:mx-[2rem] xl:mx-[7rem] my-6">
        <h1 className="font-semibold text-xl text-white">Recent Blocks</h1>
        <button
          onClick={toggleModal}
          className=" rounded-xl px-5 py-2 text-white bg-blue-600"
        >
          View all
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7">
          {statsData?.map((item, index) => (
            <div key={index} className="mt-3">
              <div className="border w-72 p-2 rounded-xl opacity-[100] bg-[#0F2434] text-white">
                <div className="flex justify-between items-center mx-5">
                  <p className="text-blue-400 font-medium text-[12px]">
                    Number
                  </p>
                  <p className="mr-3 text-blue-200 font-semibold">Time</p>
                </div>
                <div className="font-semibold text-[16px]  leading-[30px] mx-5">
                  <p className="text-[#737B82]">
                    Tx Count :<span className="pl-3">{item.tx_count}</span>
                  </p>
                  <p className="text-[#737B82]">
                    Hash:<span className="pl-11">{item.hash.slice(0,13)}...</span>{" "}
                  </p>
                  <p className="text-[#737B82]">
                    Validator: <span className="pl-1"> {item.validator} </span>{" "}
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
