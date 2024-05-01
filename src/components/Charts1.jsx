import React from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import Footer from "./Footer";
import { FaRegCircle } from "react-icons/fa";

const Charts = ({ userData }) => {
  console.log("this is userdata in new  page", userData);
  return (
    <div className="font-poppins">
      <div className="mt-10 mb-20">
        <div className="my-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="bg-[#2A82C4] bg-opacity-[0.18] h-[30rem] sm:h-[30rem] md:h-[37rem] lg:h-[30rem] rounded-lg mb-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <div className="">
            <p className="poppins-bold text-white py-3 pl-3 text-[24px]  bg-[#252527]">Idea Network</p>
          </div>
          <div className="flex flex-col-reverse pt-6 lg:pt-0 lg:flex-row items-center justify-between lg:w-[50rem] xl:w-[60rem] mx-auto">
            <div className="h-[17rem] md:h-[24rem] pt-3">
              <Doughnut
                data={userData}
                options={{responsive:true, maintainAspectRatio: false }}
                className="h-48"
              />
            </div>
            <div className="flex flex-col text-white text-[12px] sm:text-[18px] leading-[30px]">
              <p className="flex items-center">
              <FaRegCircle className="bg-[#0C71BC] rounded-full mr-3"/> IDE-20 <span className="ml-28">$70,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#5DAFEB] rounded-full mr-3"/> IDE-721 <span className="ml-[6.8rem]">$40,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#A2D3E4] rounded-full mr-3"/> IDE-1155 <span className="ml-[6.3rem]">$30,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="my-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="bg-[#2A82C4] bg-opacity-[0.18] h-[30rem] sm:h-[30rem] md:h-[37rem] lg:h-[30rem] rounded-lg mb-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <div className="">
            <p className="poppins-bold text-white py-3 pl-3 text-[24px]  bg-[#252527]">Idea Network</p>
          </div>
          <div className="flex flex-col-reverse pt-6 lg:pt-0 lg:flex-row items-center justify-between lg:w-[50rem] xl:w-[60rem] mx-auto">
            <div className="h-[17rem] md:h-[24rem] pt-3">
              <Doughnut
                data={userData}
                options={{responsive:true, maintainAspectRatio: false }}
                className="h-48"
              />
            </div>
            <div className="flex flex-col text-white text-[12px] sm:text-[18px] leading-[30px]">
              <p className="flex items-center">
              <FaRegCircle className="bg-[#0C71BC] rounded-full mr-3"/> IDE-20 <span className="ml-28">$70,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#5DAFEB] rounded-full mr-3"/> IDE-721 <span className="ml-[6.8rem]">$40,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#A2D3E4] rounded-full mr-3"/> IDE-1155 <span className="ml-[6.3rem]">$30,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="my-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="bg-[#2A82C4] bg-opacity-[0.18] h-[30rem] sm:h-[30rem] md:h-[37rem] lg:h-[30rem] rounded-lg mb-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <div className="">
            <p className="poppins-bold text-white py-3 pl-3 text-[24px]  bg-[#252527]">Idea Network</p>
          </div>
          <div className="flex flex-col-reverse pt-6 lg:pt-0 lg:flex-row items-center justify-between lg:w-[50rem] xl:w-[60rem] mx-auto">
            <div className="h-[17rem] md:h-[24rem] pt-3">
              <Doughnut
                data={userData}
                options={{responsive:true, maintainAspectRatio: false }}
                className="h-48"
              />
            </div>
            <div className="flex flex-col text-white text-[12px] sm:text-[18px] leading-[30px]">
              <p className="flex items-center">
              <FaRegCircle className="bg-[#0C71BC] rounded-full mr-3"/> IDE-20 <span className="ml-28">$70,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#5DAFEB] rounded-full mr-3"/> IDE-721 <span className="ml-[6.8rem]">$40,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#A2D3E4] rounded-full mr-3"/> IDE-1155 <span className="ml-[6.3rem]">$30,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="my-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <h1 className="font-semibold text-2xl text-white">Tokens</h1>
          <p className="font-semibold text-lg text-white">
            It is a graphical representation of changes in token price.
          </p>
        </div>
        <div className="bg-[#2A82C4] bg-opacity-[0.18] h-[30rem] sm:h-[30rem] md:h-[37rem] lg:h-[30rem] rounded-lg mb-3 w-[23rem] sm:w-[38rem] md:w-[44rem] lg:w-[60rem] xl:w-[1200px] mx-auto">
          <div className="">
            <p className="poppins-bold text-white py-3 pl-3 text-[24px]  bg-[#252527]">Idea Network</p>
          </div>
          <div className="flex flex-col-reverse pt-6 lg:pt-0 lg:flex-row items-center justify-between lg:w-[50rem] xl:w-[60rem] mx-auto">
            <div className="h-[17rem] md:h-[24rem] pt-3">
              <Doughnut
                data={userData}
                options={{responsive:true, maintainAspectRatio: false }}
                className="h-48"
              />
            </div>
            <div className="flex flex-col text-white text-[12px] sm:text-[18px] leading-[30px]">
              <p className="flex items-center">
              <FaRegCircle className="bg-[#0C71BC] rounded-full mr-3"/> IDE-20 <span className="ml-28">$70,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#5DAFEB] rounded-full mr-3"/> IDE-721 <span className="ml-[6.8rem]">$40,000</span>
              </p>
              <p className="flex items-center">
              <FaRegCircle className="bg-[#A2D3E4] rounded-full mr-3"/> IDE-1155 <span className="ml-[6.3rem]">$30,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Charts;
