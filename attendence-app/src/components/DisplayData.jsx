import React, { useState } from 'react';
import classes from './displayData.module.css';
import { BarChart } from './BarChart';
import chartsDats from './chartsDats';

export const DisplayData = (props) => {


    const [chartData, setChartData] = useState({
        labels: chartsDats.map((datas) => datas.year),
        datasets: [{
            label: "User Gained",
            data: chartsDats.map((datas) => datas.userGain),
        }]
    })

    console.log(props.onSendData);
    return (
        <>
            <div className='w-screen h-screen bg-gray-500 opacity-50 fixed top-0 left-0 z-40' onClick={props.onClick}></div>
            <div className='w-1/2 fixed top-0 bg-white text-black rounded-xl mt-10 p-5 z-50 max-sm:w-fit' id={classes.card}>
                <div className=' flex justify-center items-center gap-5 max-sm:flex-col'>
                    <div>
                        <img src={props.onSendData.image} alt="boyimg" className='h-32' />
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <span className='gf1'><span className='mx-2'><span className='gf2'>Roll no:</span> {props.onSendData.id}</span></span>
                        <span className='gf1'><p className='mx-2'><span className='gf2'>Enrolment:</span> {props.onSendData.enrolment}</p></span>
                        <span className='gf1'><p className='mx-2'><span className='gf2'>Name:</span> {props.onSendData.name}</p></span>
                    </div>
                </div>
                <hr />
                <div>
                    <BarChart data={chartData} />
                </div>
            </div>
        </>
    )
}
