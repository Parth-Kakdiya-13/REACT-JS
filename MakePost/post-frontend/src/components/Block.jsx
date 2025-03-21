import React, { useEffect, useState } from 'react'
import API from '../API/api';
import Pad_01 from '../../src/assets/Pad_01.png'
import Pad_02 from '../../src/assets/Pad_02.png'
import Pad_03 from '../../src/assets/Pad_03.png'



export const Block = () => {

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

    if (loading) {
        return <div className='w-full h-fit flex flex-col gap-5 items-center px-5'>
            <div>
                <div className='w-full flex gap-2 px-5'>
                    <div className='w-28 h-28 bg-gray-500/50 rounded-md'></div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                    </div>
                    <h2></h2>
                </div>
                <img src={Pad_01} className='w-full h-fit max-md:max-w-max' loading="lazy" />
            </div>
            <div>
                <div className='w-full flex gap-2 px-5'>
                    <div className='w-28 h-28 bg-gray-500/50 rounded-md'></div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                    </div>
                    <h2></h2>
                </div>
                <img src={Pad_01} className='w-full h-fit max-md:max-w-max' loading="lazy" />
            </div>
            <div>
                <div className='w-full flex gap-2 px-5'>
                    <div className='w-28 h-28 bg-gray-500/50 rounded-md'></div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                    </div>
                    <h2></h2>
                </div>
                <img src={Pad_01} className='w-full h-fit max-md:max-w-max' loading="lazy" />
            </div>
            <div>
                <div className='w-full flex gap-2 px-5'>
                    <div className='w-28 h-28 bg-gray-500/50 rounded-md'></div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                        <h2 className='w-44 h-10 rounded-md bg-gray-500/50'></h2>
                    </div>
                    <h2></h2>
                </div>
                <img src={Pad_01} className='w-full h-fit max-md:max-w-max' loading="lazy" />
            </div>
        </div>
    }

    return (
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
    )
}
