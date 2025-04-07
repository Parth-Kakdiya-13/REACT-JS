import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { Notification } from './Notification'
import { notificationAction } from '../store/notification'

export const RootLayout = () => {

    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification.status);
    const token = useSelector(state => state.auth.token);

    const [bar, setBar] = useState(false)

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                dispatch(notificationAction.hideNotification());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification, dispatch]);

    function showBar() {
        setBar(!bar)
    }

    return (
        <div className='w-full flex h-screen'>
            {notification && <Notification />}



            {token && (
                <div className={`w-[20rem] max-md:w-full h-full bg-teal-500 shadow-2xl pt-10 relative max-md:absolute max-md:-left-full ${bar ? "max-md:left-0" : " "} transition-all duration-300 ease-in-out`}>
                    {!bar && <span className='md:hidden absolute top-0 -right-[3rem] text-white bg-cyan-900 px-3 py-2 rounded-r-md' onClick={() => setBar(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" /></svg>
                    </span>}
                    {bar && <span className='md:hidden absolute top-3 right-3' onClick={() => setBar(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
                    </span>}
                    <Sidebar onchangeBar={showBar} />
                </div>
            )}

            <div className='w-full h-full'>
                <Outlet />
            </div>
        </div>
    );
}
