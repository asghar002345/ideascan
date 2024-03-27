import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const DynamicChart = ({ chartData,options }) => {
    return (
        <div className='lg:ml-20 border rounded-lg border-[#212327] w-[20rem] h-72 md:w-[30rem] md:h-80 lg:w-[40rem]  xl:w-[60rem] lg:h-96 mb-3'>
        <Line data={chartData} options={{ maintainAspectRatio: false }}  className='bg-[#2C2C2E] rounded-lg shadow-lg'/>
    </div>
    )
}

export default DynamicChart