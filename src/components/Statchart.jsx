import React, { useEffect, useState } from "react";
import Charts1 from "./Charts1";

const Hero = () => {
  const [chartData, setChartData] = useState();
  const [arr, setArr]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_GNOSIS_STATS_GRAPHS}`
        );
        const req = await res.json();
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
      // chartData.map((item)=> arr.push(item.date?.substring(8)));
      // let test= arr?.slice(0,10);
      // const labels = test;
      // const txCounts = chartData.map((item) => (item.tx_count/1000));
      setUserData((prevUserData) => ({
        ...prevUserData,
        labels: [],
        datasets: [
          {
            ...prevUserData.datasets[0],
            data: ['40','6','4'],
            backgroundColor: [
              "#0C71BC" , "#5DAFEB" , "#A2D3E4"
            ],
            borderWidth:0,
          },
        ],
      }));
    }
  }, [chartData]);

  return (
    <div className="">
      <Charts1 userData={userData} />
    </div>
  );
};

export default Hero;
