import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export const BarChart = (props) => {
    const options = {
        options: {
            responsive: true,
            // plugins: {
            //     legend: {
            //         position: 'top',
            //     },
            //     title: {
            //         display: true,
            //         text: 'Chart.js Bar Chart'
            //     }
            // }
        },
    }

    return (
        <div className='w-auto'>
            <Line data={props.data} config={options} />
        </div>
    )
}
