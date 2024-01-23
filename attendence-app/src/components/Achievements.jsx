import { useState } from 'react';
import React from 'react'
import { Bar } from 'react-chartjs-2';
import chartsDats from './chartsDats';
import { Chart as ChartJS } from 'chart.js/auto';

export const Achievements = () => {

    const [chartData, setChartData] = useState({
        labels: chartsDats.map((datas) => datas.months),
        datasets: [{
            label: "Achievement Chart",
            data: chartsDats.map((datas) => datas.prestnts),
        }]
    })

    return (
        <div>
            <AchievementsChart data={chartData} />
        </div>
    )
}

const AchievementsChart = (props) => {
    return (
        <>
            <Bar data={props.data} />
        </>
    );
}
