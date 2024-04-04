import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/array4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardresultcarousel from "./Cardresultcarousel";

const Cardresult = () => {

  const [statsData, setStatsData] = useState([]);
  const [error, setError] = useState(null);

  const test = async () => {
    const res = await fetch(
      `https://eth.blockscout.com/api/v2/blocks?type=block%20%7C%20uncle%20%7C%20reorg`
    );
    const response = await res.json();
    setStatsData(response.items);
    console.log("recent transactions")
    console.log("This is Testing",statsData);
  };

  useEffect(() => {
    test();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    largedesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 900},
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mb-28 ">
      <div className="flex justify-between items-center px-3 sm:px-1 md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto my-3">
        <h1 className="font-bold text-[24px] text-white w-12 sm:w-[18rem]  uppercase">
          Recent Transactions
        </h1>
        <button className="rounded-xl px-3 py-2 text-white bg-blue-600">
          View All
        </button>
      </div>
      <div className="w-[320px] mx-auto md:w-[700px] lg:w-[1000px] xl:w-[1280px] md:mx-12 lg:mx-6 xl:mx-auto">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}

      >
        {/* Map over your data and render multiple instances of Carddetailscarousel */}
        {statsData.map((stats) => (
          <Cardresultcarousel stats={stats} />
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default Cardresult;
