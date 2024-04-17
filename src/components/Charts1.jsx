import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { arraytest } from "../utils/arrary2";
import Footer from "./Footer";

const Charts = ({ userData }) => {
  console.log('this is userdata in new  pagE', userData);
  return (
    <div>
      <div className="mt-10 mb-20">
        <div className="ml-7 my-3">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="mx-8  rounded-lg bg-[#252527] h-[30rem] mb-3">
          <div>
            <p className="text-white py-4 pl-3">Token Price 0.00838 ⓘ</p>
          </div>
          <Line
            data={userData}
            options={{ maintainAspectRatio: false }}
            className="bg-[#252527] pb-5 px-16"
          />
        </div>
      </div>
      <div className="mb-20">
        <div className="ml-7 my-3">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="mx-8 border rounded-lg border-[#212327] bg-[#252527] h-[30rem] mb-3">
          <div>
            <p className="text-white py-4 pl-3">Token Price 0.00838 ⓘ</p>
          </div>
          <Line
            data={userData}
            options={{ maintainAspectRatio: false }}
            className="bg-[#252527] pb-5 px-16"
          />
        </div>
      </div>
      <div className="mb-20">
        <div className="ml-7 my-3">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="mx-8 border rounded-lg border-[#212327] bg-[#252527] h-[30rem] mb-3">
          <div>
            <p className="text-white py-4 pl-3">Token Price 0.00838 ⓘ</p>
          </div>
          <Line
            data={userData}
            options={{ maintainAspectRatio: false }}
            className="bg-[#252527] pb-5 px-16"
          />
        </div>
      </div>
      <div className="mb-20">
        <div className="ml-7 my-3">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="mx-8 border rounded-lg border-[#212327] bg-[#252527] h-[30rem] mb-3">
          <div>
            <p className="text-white py-4 pl-3">Token Price 0.00838 ⓘ</p>
          </div>
          <Line
            data={userData}
            options={{ maintainAspectRatio: false }}
            className="bg-[#252527] pb-5 px-16"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Charts;
