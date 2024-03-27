import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { arraytest } from '../utils/arrary2'


const Charts = ({ chartData, options }) => {
    return (
        <div className='flex flex-col md:flex-col items-center md:items-center lg:flex-row mt-9 justify-center'>
            <div className=' border rounded-lg border-[#212327] w-[18rem] h-[23rem] sm:w-[40rem] md:w-[35rem] lg:w-[34rem] xl:w-full md:mx-12 mb-3 md:h-[34rem]'>
                <Line data={chartData} options={{ maintainAspectRatio: false }} className='bg-[#252527]' />
            </div>
            <div>
                <div className='flex flex-col font-poppins ml-10 sm:ml-0'>
                    <h1 className='text-[32px]  font-bold text-white text-center mr-9 mb-2'> Analytics </h1>
                    {
                        arraytest.map((items, index) => (
                            <div key={index} className='flex flex-col border border-[#212327] mb-3 w-60 md:w-72 rounded-lg mr-12 bg-[#2A82C4] bg-opacity-[0.18] font-semibold'>
                                <img src={items.logo} className='h-11 w-11 my-4 mx-auto' alt="" />
                                <p className='text-center font-bold  text-[#9CA0A7] text-[18px]'>{items.textBig}</p>
                                <p className='text-center text-white text-xl mb-1 text-[]24px'>{items.diffData}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Charts