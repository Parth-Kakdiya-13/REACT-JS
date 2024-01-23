import React, { useState } from 'react';
import classes from './displayData.module.css';
import { BarChart } from './BarChart';
import chartsDats from './chartsDats';
import { Button } from './Button';
import { Achievements } from './Achievements';

export const DisplayData = (props) => {

    const [display, setDisplay] = useState(true);
    const [displayAchieve, setDisplayAchieve] = useState(false);
    const [chartData, setChartData] = useState({
        labels: chartsDats.map((datas) => datas.months),
        datasets: [{
            label: "Attendence Chart",
            data: chartsDats.map((datas) => datas.prestnts),
        }]
    })

    const displayAchivement = () => {
        setDisplay(false);
        setDisplayAchieve(true);
    }

    const displayAtendence = () => {
        setDisplay(true);
        setDisplayAchieve(false);
    }

    // console.log(props.onSendData);
    const links = props.onSendData.gitlink
    console.log(links);
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
                <div className='my-5'>
                    <Button className='px-5 py-1 gf1 bg-black text-white rounded-lg cursor-pointer' onclick={(e) => {
                        e.preventDefault();
                        window.location.href = links;
                    }}>GitHub</Button>
                    <Button className='px-5 py-1 gf1 bg-blue-500 text-white rounded-lg cursor-pointer mx-5' onclick={displayAtendence}>Attendence</Button>
                    <Button className='px-5 py-1 gf1 bg-orange-600 text-white rounded-lg cursor-pointer' onclick={displayAchivement}>Achievement</Button>
                </div>
                <div>
                    {display && <BarChart data={chartData} />}
                    {displayAchieve && <Achievements />}
                </div>
            </div>
        </>
    )
}
