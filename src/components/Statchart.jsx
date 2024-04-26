import React, { useEffect, useState } from "react";
import Charts1 from "./Charts1";

const Hero = () => {
  const [chartData, setChartData] = useState();
  const [arr, setArr]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://gnosis.blockscout.com/api/v2/stats/charts/transactions`
        );
        const req = await res.json();
        console.log("Requested data which we get from block chain ");
        console.log(req.chart_data);
        setChartData(req.chart_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        borderWidth: 2,
        textColor: "white",
      },
    ],
  });

  useEffect(() => {
    if (chartData) {
      chartData.map((item)=> arr.push(item.date?.substring(8)));
      let test= arr?.slice(0,10);
      const labels = test;
      const txCounts = chartData.map((item) => (item.tx_count/1000));
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
    }
  }, [chartData]);

  console.log(chartData);

  return (
    <div className="">
      <Charts1 userData={userData} />
    </div>
  );
};

export default Hero;
