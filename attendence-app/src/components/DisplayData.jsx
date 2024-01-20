import React from 'react';
import classes from './displayData.module.css';

export const DisplayData = (props) => {
    console.log(props.onSendData);
    return (
        <>
            <div className={classes.card} onClick={props.onClick}>
                <div className='flex flex-col justify-center items-start'>
                    <span className='gf1'><span className='mx-2'><span className='gf2'>Roll no:</span> {props.onSendData.id}</span></span>
                    <span className='gf1'><p className='mx-2'><span className='gf2'>Enrolment:</span> {props.onSendData.enrolment}</p></span>
                    <span className='gf1'><p className='mx-2'><span className='gf2'>Name:</span> {props.onSendData.name}</p></span>
                </div>
            </div>
        </>
    )
}
