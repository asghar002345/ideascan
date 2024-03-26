import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const DynamicChart = ({ chartData,options }) => {
    return (
        <div className='ml-28 border rounded-lg border-[#212327] w-[60rem] h-96 mb-3'>
        <Line data={chartData} options={{ maintainAspectRatio: false }}  className='bg-[#2C2C2E] rounded-lg shadow-lg'/>
    </div>
    )
}

export default DynamicChart