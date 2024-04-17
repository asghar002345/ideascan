import React, { useState, useEffect } from "react";
import Charts from "./Charts";

const Hero = () => {
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Transaction History",
        data: [],
        color: "white",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://gnosis.blockscout.com/api/v2/stats/charts/transactions`
        );
        const { chart_data } = await res.json();
        console.log("Requested data which we get from block chain ");
        console.log(chart_data);

        const labels = chart_data.map((item) => item.date);
        const txCounts = chart_data.map((item) => item.tx_count);

        setUserData((prevUserData) => ({
          ...prevUserData,
          labels: labels,
          datasets: [
            {
              ...prevUserData.datasets[0],
              data: txCounts,
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {" "}
      <Charts chartData={userData} />{" "}
    </div>
  );
};

export default Hero;

