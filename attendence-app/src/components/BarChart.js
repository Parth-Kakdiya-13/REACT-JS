import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export const BarChart = (props) => {


    return (
        <div style={{ "width": "600px" }}>
            <Bar data={props.data} />
        </div>
    )
}
