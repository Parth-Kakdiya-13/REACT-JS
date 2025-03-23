import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Pad_01 from '../../src/assets/Pad_01.png'
import API from '../API/api'


export const Slider = () => {

    const [isMoved, setIsMoved] = useState(false);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.get('/feed/getAll');
                if (response.status === 200) {
                    setPosts(response.data.data);
                    setLoading(false)
                } else {
                    console.log("Data not fetched");
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false)
            }
        }
        fetchData();
    }, []);


    return (
        <div className='relative mt-0 max-lg:mt-5 max-md:ml-5'>
            <div className='group absolute w-80 max-lg:w-full shadow-inner shadow-gray-500 flex flex-col gap-2 justify-between h-[30rem] max-md:h-[20rem] bg-white p-3  rounded-md overflow-hidden'>
                <div className='w-full '>
                    {posts.length === 0 ? (
                        <p className='text-center font-semibold'>No Post found.</p>
                    ) : posts.map((data) => {
                        const formattedDate = new Date(data.createdAt).toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        });
                        return <div key={data._id}>
                            <div className='w-full h-fit flex gap-5 items-center px-5'>
                                <img src={`data:image/jpeg;base64,${data.image}`} className='w-28 h-28 rounded-md object-cover' />
                                <div className='flex flex-col gap-2 text-gray-500'>
                                    <div className='flex gap-5'>
                                        <h2 className='capitalize'>{data.creator.name}</h2>
                                        <h2>{formattedDate}</h2>
                                    </div>
                                    <h2>{data.title}</h2>
                                </div>
                            </div>
                            <img src={Pad_01} className='w-full h-fit max-md:max-w-max' />
                        </div>
                    })
                    }
                </div>
                <div className='group-hover:top-0 flex items-center justify-start absolute cursor-pointer  w-full h-full top-full left-0 bg-gradient-to-br from-green-500/50 to bg-yellow-500/50 transition-all duration-500 ease-in-out'>
                    <h2 className='text-white text-3xl text-center px-5'>Show More <br /> Posts</h2>
                </div>
            </div>
            <motion.div
                animate={{ x: isMoved ? 200 : 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100, // Adjusts force
                    damping: 20, // Controls smoothness
                    duration: 1 // Controls speed
                }}
                onTap={() => setIsMoved(!isMoved)}
                className='relative w-80 max-lg:w-full flex flex-col gap-2 justify-between h-[30rem] max-md:h-[20rem] bg-white p-3 shadow-2xl rounded-md'
            >

                <div className='absolute flex items-center w-12 h-28 top-[11rem] max-lg:top-[10rem] max-md:top-[6rem] left-0 rounded-2xl bg-white shadow-2xl p-2'>
                    <div className='rounded-full w-full h-full bg-amber-600/50 shadow-inner shadow-gray-700'></div>
                </div>
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
                <hr className='w-full border border-gray-300' />
            </motion.div>
        </div>
    )
}
