import React, { useEffect, useState } from "react";
import StatChart from "../components/Statchart";
import SearchBar from '../components/SearchBar.jsx';


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
      <SearchBar />
      <StatChart />
    </div>
  );
};

export default Stats_Graphs;
