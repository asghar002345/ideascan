import React, { useEffect, useState } from "react";
import StatChart from "../components/Statchart";

const Stats_Graphs = () => {
  const [statsData, setStatsData] = useState(null);
  const [error, setError] = useState(null);

  const test = async () => {
    const res = await fetch(`https://gnosis.blockscout.com/api/v2/stats`);
    const response = await res.json();
    setStatsData(response);
    console.log(response);
  };

  useEffect(() => {
    test();
  }, []);



  const StatCard = ({ title, value }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 m-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-xl">{value}</p>
      </div>
    );
  };
  return (
    <div>
      {/* <div className="flex flex-wrap justify-center">
        <StatCard
          title="Average Block Time"
          value={`${statsData?.average_block_time} ms`}
        />
        <StatCard title="Coin Price" value={`$${statsData?.coin_price}`} />
        <StatCard
          title="Coin Price Change Percentage"
          value={`${statsData?.coin_price_change_percentage}%`}
        />
        <StatCard
          title="Average Gas Price"
          value={`${statsData?.gas_prices.average} gwei`}
        />
        <StatCard
          title="Total Transactions"
          value={statsData?.total_transactions}
        />
      </div> */}
      <StatChart />
    </div>
  );
};

export default Stats_Graphs;
