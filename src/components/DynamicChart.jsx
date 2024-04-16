import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { color } from 'chart.js/helpers'

const DynamicChart = ({ chartData,options }) => {
    return (
        <div className='lg:ml-20 rounded-lg w-[20rem] h-72 md:w-[30rem] bg-[#2A82C4] bg-opacity-[0.18] md:h-80 lg:w-[40rem] xl:w-[60rem] lg:h-96 mb-3'>
        <Line data={chartData} options={{ maintainAspectRatio: false }}  className='rounded-lg shadow-lg'/>
    </div>
    )
}

export default DynamicChart