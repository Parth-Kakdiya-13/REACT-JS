import React from 'react';
import user from '../happy-young-cute-illustration-face-profile-png.webp';

export const StudentsDatas = (props) => {

    const sendDataHandler = (val) => {
        props.onGetData(val);
    }


    return (
        <div className='border-2 border-gray-300 rounded-xl p-5 my-2'>
            <div className='flex items-center'>
                <div className=''>
                    <img src={props.image} alt="user" className='h-32' />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <span className='gf1'><span className='mx-2'><span className='gf2'>Roll no:</span> {props.id}</span></span>
                    <span className='gf1'><p className='mx-2'><span className='gf2'>Enrolment:</span> {props.enrolment}</p></span>
                    <span className='gf1'><p className='mx-2'><span className='gf2'>Name:</span> {props.name}</p></span>
                </div>
            </div>
            <button className='gf1 bg-gray-500 px-5 py-1 rounded-lg text-white ml-auto' onClick={() => { sendDataHandler({ ...props }) }}>Read more</button>
        </div>
    )
}
