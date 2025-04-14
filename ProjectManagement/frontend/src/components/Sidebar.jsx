import React from 'react'
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { logoutHandler } from '../store/auth';
import { useLocation, useNavigate } from 'react-router-dom';
export const Sidebar = ({ onchangeBar }) => {

    const auth = useSelector(state => state.auth.role);

    const location = useLocation();

    const isActive = (path) => location.pathname === path;


    const dispatch = useDispatch();

    const navigate = useNavigate()

    function logout() {
        dispatch(logoutHandler());
        navigate('/login');
        onchangeBar()
    }


    return (
        <aside className='w-full h-full'>
            <ul className='flex flex-col gap-3 items-start p-5'>
                {auth === "admin" ?
                    <>
                        {/* admin bar */}
                        <motion.li
                            initial={{ y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => { navigate('/admin-dashboard'); onchangeBar() }}
                            className={`bg-cyan-700  hover:bg-cyan-950 p-3 flex justify-between cursor-pointer text-xl text-white rounded-md capitalize font-semibold w-full ${isActive('/admin-dashboard') ? 'bg-cyan-950' : ' '}`}>
                            select developer
                            <span>{" >"}</span>
                        </motion.li>

                        <motion.li
                            initial={{ y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => { navigate('/admin-dashboard/assigntask'); onchangeBar() }}
                            className={`bg-cyan-700  hover:bg-cyan-950 p-3 flex justify-between cursor-pointer text-xl text-white rounded-md capitalize font-semibold w-full ${isActive('/admin-dashboard/assigntask') ? 'bg-cyan-950' : ' '}`}>
                            assign task
                            <span>{" >"}</span>

                        </motion.li>
                        <motion.li
                            initial={{ y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => { navigate('/admin-dashboard/taskslist'); onchangeBar() }}
                            className={`bg-cyan-700  hover:bg-cyan-950 p-3 flex justify-between cursor-pointer text-xl text-white rounded-md capitalize font-semibold w-full ${isActive('/admin-dashboard/taskslist') ? 'bg-cyan-950' : ' '}`}>
                            tasks list
                            <span>{" >"}</span>
                        </motion.li>


                    </>
                    :
                    <>
                        {/* Developer bar */}
                        <motion.li
                            initial={{ y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => { navigate('/developer-dashboard'); onchangeBar() }}
                            className={`bg-cyan-800  hover:bg-cyan-950 p-3 flex justify-between cursor-pointer text-xl text-white rounded-md capitalize font-semibold w-full ${isActive('/developer-dashboard') ? 'bg-cyan-950' : ' '}`}>pending task <span>{" >"}</span>
                        </motion.li>
                        <motion.li
                            initial={{ y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => { navigate('/developer-dashboard/complete'); onchangeBar() }}
                            className={`bg-cyan-800  hover:bg-cyan-950 p-3 flex justify-between cursor-pointer text-xl text-white rounded-md capitalize font-semibold w-full ${isActive('/developer-dashboard/complete') ? 'bg-cyan-950' : ' '}`}>completed task <span>{" >"}</span>
                        </motion.li>
                        <motion.li
                            initial={{ y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => { navigate('/developer-dashboard/fail'); onchangeBar() }}
                            className={`bg-cyan-800  hover:bg-cyan-950 p-3 flex justify-between cursor-pointer text-xl text-white rounded-md capitalize font-semibold w-full ${isActive('/developer-dashboard/fail') ? 'bg-cyan-950' : ' '}`}>failed task <span>{" >"}</span>

                        </motion.li>
                    </>
                }
                <button className='bg-cyan-950 w-fit px-8 py-1 rounded-full text-white text-xl cursor-pointer hover:bg-blue-900' type='button' onClick={logout}>Logout</button>
            </ul>
        </aside >
    )
}
