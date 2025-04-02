import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../components/UI/DarkModeToggle";
import { motion } from "framer-motion";
import { AuthContext } from "../store/AuthContext";
import { Profile } from "./Profile";

export const Navbar = () => {
    const authCtx = useContext(AuthContext);

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [showBar, setShowBar] = useState(false)


    const handleLogout = () => {
        authCtx.logout();
        setToken(null);
    };

    return (
        <>
            {!showBar && <span className="absolute top-5 right-5 z-50 text-white min-[920px]:hidden" onClick={() => setShowBar(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 24"><path fill="currentColor" d="M0 0h5.219v5.219H0zm9.39 0h5.219v5.219H9.39zm8.608 0h5.219v5.219h-5.219zM0 9.39h5.219v5.219H0zm9.39 0h5.219v5.219H9.39zm8.608 0h5.219v5.219h-5.219zM0 18.781h5.219V24H0zm9.39 0h5.219V24H9.39zm8.608 0h5.219V24h-5.219z" /></svg>
            </span>}
            <ul className={`w-full text-white flex justify-between items-center gap-2 lg:gap-5 bg-blue-950 px-5 lg:px-10 py-5 max-[920px]:bg-blue-950 max-[920px]:z-40 max-[920px]:rounded-xl max-[920px]:flex-col max-[920px]:items-start max-[920px]:absolute transition-all duration-300 ease-in-out ${showBar ? "max-[920px]:top-0" : " "} max-[920px]:-top-full max-[920px]:left-0`}>
                {/* Left Section (Login/Signup/Logout) */}
                {showBar && <span className="absolute top-4 right-4 text-white min-[920px]:hidden z-50" onClick={() => setShowBar(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" /></svg>
                </span>}
                <div className="flex items-center gap-5">
                    {!token && (
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="cursor-pointer">
                            <Link to="/login">Login</Link>
                        </motion.li>
                    )}
                    {!token && (
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="cursor-pointer">
                            <Link to="/signup">Signup</Link>
                        </motion.li>
                    )}
                    {token && (
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="cursor-pointer">
                            <button className="cursor-pointer p-2" onClick={handleLogout}>
                                Logout
                            </button>
                        </motion.li>
                    )}
                </div>
                <div className="w-full md:hidden" onClick={() => setShowBar(false)}>
                    <Profile />
                </div>

                {/* Search Bar */}
                <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="w-fit max-md:w-full relative">
                    <input type="search" className="w-full  lg:w-72 xl:w-96 p-3 border-0 bg-blue-900/60 rounded-xl" placeholder="Search..." />
                    <button className="absolute top-2 right-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                            />
                        </svg>
                    </button>
                </motion.li>

                {/* Right Section (Dark Mode & Home) */}
                <div className="flex gap-5 items-center max-sm:flex-wrap">
                    <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="bg-blue-900/60 p-3 rounded-2xl hover:bg-gray-500 cursor-pointer">
                        <DarkModeToggle />
                    </motion.li>
                    <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="bg-blue-900/60 p-3 rounded-2xl hover:bg-gray-500 cursor-pointer" onClick={() => setShowBar(false)}>
                        <Link to="/notifications">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path
                                            fill="currentColor"
                                            d="M12 2a7 7 0 0 0-7 7v3.528a1 1 0 0 1-.105.447l-1.717 3.433A1.1 1.1 0 0 0 4.162 18h15.676a1.1 1.1 0 0 0 .984-1.592l-1.716-3.433a1 1 0 0 1-.106-.447V9a7 7 0 0 0-7-7m0 19a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 12 21"
                                        />
                                    </g>
                                </svg>
                            </span>
                        </Link>
                    </motion.li>
                    <div className="flex items-center gap-5 md:hidden max-sm:flex-wrap">
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="bg-blue-900/60 p-3 rounded-2xl hover:bg-gray-500 cursor-pointer" onClick={() => setShowBar(false)}>
                            <Link to="/">
                                <span className="group-hover:rotate-360 transition-all duration-700 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z" /><path fill="currentColor" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97" /></svg>
                                </span>
                            </Link>
                        </motion.li>
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="bg-blue-900/60 p-3 rounded-2xl hover:bg-gray-500 cursor-pointer" onClick={() => setShowBar(false)}>
                            <Link to="/messages">
                                <span className="group-hover:rotate-360 transition-all duration-700 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM7 10v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z" /></svg>
                                </span>
                            </Link>
                        </motion.li>
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="bg-blue-900/60 p-3 rounded-2xl hover:bg-gray-500 cursor-pointer" onClick={() => setShowBar(false)}>
                            <Link to="/badges">
                                <span className="group-hover:rotate-360 transition-all duration-700 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"><path fill="currentColor" d="M82.066 62.012c-.861 0-1.663.222-2.385.583l-6.813-11.801l6.755-11.701c.438.115.89.196 1.364.196a5.39 5.39 0 0 0 5.382-5.388a5.38 5.38 0 0 0-5.382-5.374a5.37 5.37 0 0 0-4.449 2.349h-15.17l-7.042-12.197a5.35 5.35 0 0 0 .873-2.92a5.39 5.39 0 0 0-5.389-5.385a5.387 5.387 0 0 0-5.382 5.387a5.35 5.35 0 0 0 .835 2.848L38.18 30.876H22.65c-.909-1.686-2.668-2.845-4.716-2.842a5.38 5.38 0 0 0-5.389 5.376a5.39 5.39 0 0 0 5.389 5.386c.861 0 1.663-.223 2.385-.583l6.814 11.802l-6.756 11.702a5.3 5.3 0 0 0-1.364-.196a5.38 5.38 0 1 0 0 10.762a5.38 5.38 0 0 0 4.451-2.35h15.169l6.815 11.805a5.3 5.3 0 0 0-.647 2.505a5.387 5.387 0 0 0 5.389 5.386a5.39 5.39 0 0 0 5.382-5.388a5.34 5.34 0 0 0-.61-2.432l6.857-11.876h15.532c.909 1.685 2.668 2.844 4.717 2.844a5.383 5.383 0 0 0 5.389-5.378a5.393 5.393 0 0 0-5.391-5.387" /></svg>
                                </span>
                            </Link>
                        </motion.li>
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="bg-blue-900/60 p-3 rounded-2xl hover:bg-gray-500 cursor-pointer" onClick={() => setShowBar(false)}>
                            <Link to="/settings">
                                <span className="group-hover:rotate-360 transition-all duration-700 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" /></svg>
                                </span>
                            </Link>
                        </motion.li>
                        <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="bg-blue-900/60 p-3 rounded-2xl hover:bg-gray-500 cursor-pointer" onClick={() => setShowBar(false)}>
                            <Link to="/topics">
                                <span className="group-hover:rotate-360 transition-all duration-700 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M17.504 7.501H7.5v10.003h10.003z" /><path fill="currentColor" d="M21.505 5.5v-2h-2v-2h-2.001v2h-2v-2h-2.001v2h-2v-2H9.501v2h-2v-2H5.5v2h-2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h-2v2.001h2v2h2v2.001h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v2h2.001v-2h2v-2h2.001v-2.001h-2v-2h2v-2.001h-2v-2h2V9.501h-2v-2h2V5.5zm-2 14.004H5.5V5.501h14.003z" /></svg>
                                </span>
                            </Link>
                        </motion.li>

                    </div>
                </div>
            </ul>
        </>
    );
};
