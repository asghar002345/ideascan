import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { arraytest } from '../utils/arrary2'
import { useEffect } from 'react'
import img1 from '../assests/pngs/icon1.png'


const Charts = ({ chartData, options }) => {
    const [data , setData] = useState([])
    useEffect(() => {
        const test = async () => {
          const res = await fetch("https://eth.blockscout.com/api/v2/stats");
          const des = await res.json();
          setData(des);
          console.log(des);
        };
        test();
      }, []);
    return (
        <div className='flex flex-col md:flex-col items-center md:items-center lg:flex-row mt-14 justify-center lg-w-[60rem] xl:w-[75rem] mx-auto'>
            <div className='rounded-lg w-[18rem] h-[23rem] sm:w-[40rem] md:w-[35rem] bg-[#2A82C4] bg-opacity-[0.18] lg:w-[34rem] xl:w-[58.4rem]  md:mx-7 mb-3 md:h-[34rem]'>
                <Line data={chartData} options={{ maintainAspectRatio: false }} className='' />
            </div>
            <div>
                <div className='flex flex-col font-poppins ml-10 sm:ml-0'>
                    <h1 className='text-[32px]  font-bold text-white text-center mr-9 mb-4'> Analytics </h1>
                            <div className='flex flex-col mb-3 w-60 md:w-72 rounded-xl mr-12 bg-[#2A82C4] bg-opacity-[0.18] font-semibold'>
                                <img src={img1} className='h-11 w-11 my-3 mx-auto' alt="" />
                                <p className='text-center font-bold  text-[#9CA0A7] text-[18px]'>Total Accounts</p>
                                <p className='text-center text-white text-xl mb-3 text-[24px]'>{data?.total_blocks} K</p>
                            </div>
                            <div className='flex flex-col mb-3 w-60 md:w-72 rounded-xl mr-12 bg-[#2A82C4] bg-opacity-[0.18] font-semibold'>
                                <img src={img1} className='h-11 w-11 my-3 mx-auto' alt="" />
                                <p className='text-center font-bold  text-[#9CA0A7] text-[18px]'>Latest Block</p>
                                <p className='text-center text-white text-xl mb-3 text-[24px]'>{data?.total_transactions}</p>
                            </div>
                            <div className='flex flex-col mb-3 w-60 md:w-72 rounded-xl mr-12 bg-[#2A82C4] bg-opacity-[0.18] font-semibold'>
                                <img src={img1} className='h-11 w-11 my-3 mx-auto' alt="" />
                                <p className='text-center font-bold  text-[#9CA0A7] text-[18px]'>TX Per block</p>
                                <p className='text-center text-white text-xl mb-3 text-[24px]'>{data?.transactions_today}</p>
                            </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Charts