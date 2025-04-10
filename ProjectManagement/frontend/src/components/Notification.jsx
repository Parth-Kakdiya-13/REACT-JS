import React from 'react';
import { useSelector } from 'react-redux';

export const Notification = () => {


    const message = useSelector(state => state.notification.message)

    return (
        <div className='w-full h-fit absolute top-0 left-0 p-5 z-50 shadow-2xl bg-white'>{message || "message"}</div>
    )
}
