import React, { useEffect, useState } from "react";
import Charts1 from "./Charts1";
import { UserData } from "./Data1";

const Hero = () => {
  const [chartData, setChartData] = useState();
  // const [userData , setUserData]= useState()
  // const test = async() =>{
  //   try { 
  //     const response = await fetch(`https://gnosis.blockscout.com/api/v2/stats/charts/transactions`)
  //     const req = await response.json();
  //     setChartData(req);
  //     console.log('test',req)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // test();



  useEffect(() => {
    const test = async () => {
      const res = await fetch(`https://gnosis.blockscout.com/api/v2/stats/charts/transactions`);
      const req = await res.json();
      setChartData(req);
    };
    test();
  }, []);

  const data = chartData?.chart_data;
  console.log("datataaaa")
  var label = data?.map((item) => item.date)
  console.log(label);

  const [userData, setUserData] = useState({
    labels: label,
    datasets: [
      {
        label: "Users Gained",
        data: data?.map(b => b.tx_count),
        borderWidth: 2,
        textColor: "white",
      },
    ],
  });
  return (
    <div className="">
      {" "}
      <Charts1 userData={userData} />{" "}
    </div>
  );
};

export default Hero;
