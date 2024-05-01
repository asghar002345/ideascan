import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalComponent from "./ModalComponent";
import Carddetailscarousel from "./Carddetailscarousel";
// import "./CustomCarousel.css";

const Carddetails = ({ mod, setMod }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statsData, setStatsData] = useState([]);
  const test = async () => {
    const res = await fetch(
      `https://eth.blockscout.com/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg`
    );
    const response = await res.json();
    setStatsData(response.items);
  };

  useEffect(() => {
    test();
  }, []);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMod(!mod);
  };
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  largedesktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1023},
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 762},
    items: 2,
  },
  mobile: {
    breakpoint: { max: 762, min: 0 },
    items: 1,
  },
};

  return (
    <div className=" font-poppins">
      <div className="flex justify-between items-center px-3 sm:px-1 md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto my-3">
        <h1 className="font-bold text-[19px] sm:text-[24px] text-white uppercase ">
          Recent Blocks
        </h1>
        <button
          onClick={toggleModal}
          className=" rounded-xl px-3 py-2 text-white bg-blue-600"
        >
          View all
        </button>
      </div>
      <div className="w-[320px] mx-auto md:w-[700px] md:mx-6 lg:w-[970px] lg:mx-0 xl:w-[1280px] xl:mx-auto">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          arrows={!isModalOpen && !mod}
        >
          {/* Map over your data and render multiple instances of Carddetailscarousel */}
          {statsData.map((stats) => (
            <Carddetailscarousel stats={stats} isModal={isModalOpen} />
          ))}
        </Carousel>
      </div>
      {/* Render the modal conditionally */}
      {isModalOpen && (
        <ModalComponent onClose={toggleModal} statsData={statsData} /> // Pass onClose prop to handle modal close
      )}
    </div>
  );
};

export default Carddetails;
