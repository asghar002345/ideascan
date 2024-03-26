import React, { useState } from "react";
import Charts from "./Charts";
import { UserData } from "./Data";

const Hero = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        borderWidth: 2,
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
