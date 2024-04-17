import React, { useEffect, useState } from "react";
import { arraytest } from "../utils/array4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardresultcarousel from "./Cardresultcarousel";
import Cardresultcomponent from "./Cardresultcomponent";

const Cardresult = () => {

  const [statsData, setStatsData] = useState([]);
  const [error, setError] = useState(null);
  const [modelopen,setModelopen] = useState(false)

  const test = async () => {
    const res = await fetch(
      `https://eth.blockscout.com/api/v2/main-page/transactions`
    );
    const response = await res.json();
    setStatsData(response);
    console.log("recent transactions")
    console.log("This is Testing",statsData);
  };

  useEffect(() => {
    test();
  }, []);

  const toggleModal = () =>{
    setModelopen(!modelopen)
  }

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
    <div className="mb-28 ">
      <div className="flex justify-between items-center px-3 sm:px-1 md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto my-3">
        <h1 className="font-bold text-[24px] text-white w-12 sm:w-[18rem]  uppercase">
          Recent Transactions
        </h1>
        <button className="rounded-xl px-3 py-2 text-white bg-blue-600" onClick={toggleModal}>
          View All
        </button>
      </div>
      <div className="w-[320px] mx-auto md:w-[700px] lg:w-[965px] xl:w-[1280px] md:mx-12 lg:mx-6 xl:mx-auto">
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
      {modelopen && (
        <Cardresultcomponent onClose={toggleModal} statsData={statsData} /> // Pass onClose prop to handle modal close
      )}
    </div>
  );
};

export default Cardresult;
