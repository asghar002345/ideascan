import React, { useState, useEffect } from "react";
import Charts from "./Charts";

const Hero = () => {
  const [arr, setArr] = useState([]);
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
          `${process.env.REACT_APP_GNOSIS_STATS_GRAPHS}`
        );
        const { chart_data } = await res.json();
        chart_data.map((item)=> arr.push(item.date?.substring(8)));
        let test= arr?.slice(0,12)
        

        const labels = test;
        const txCounts = chart_data.map((item) => (item.tx_count/1000));

        setUserData((prevUserData) => ({
          ...prevUserData,
          labels: labels,
          datasets: [
            {
              ...prevUserData.datasets[0],
              data: txCounts,
              backgroundColor:['#0C71BC','#5DAFEB']
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

