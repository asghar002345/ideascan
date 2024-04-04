import React, { useState } from "react";
import Charts from "./Charts";
import { UserData } from "./Data";

const Hero = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Transaction History 148.6K",
        data: UserData.map((data) => data.userGain),
        color:"white"
      },
    ],
  });
  return (
    <div className="">
      {" "}
      <Charts chartData={userData} />{" "}
    </div>
  );
};

export default Hero;
