import { motion, useAnimation } from "framer-motion";

import post from '../assets/createpost.png'
import bioData from '../assets/biodata.png'
import eUser from '../assets/eUser.png'



const Work = ({ workClasses, theme }) => {
    const biodata = useAnimation();
    const user = useAnimation();
    const createpost = useAnimation();


    const ecommerceUsers = () => {
        window.location.href = "https://ecommerce-ql8y.vercel.app/";
    };
    const createPost = () => {
        window.location.href = "https://my-post-plum.vercel.app/";
    };

    const bioDataBuilder = () => {
        window.location.href = "https://bio-data-indol.vercel.app/";
    };


    let classes = ''

    if (workClasses.work) {
        classes = theme === 'light' ? 'w-[41rem] max-md:w-full h-full z-10 bg-white  absolute left-[29rem] max-md:-left-0 max-md:top-[35rem]  transition-all duration-1000 ease-in-out overflow-y-scroll'
            : 'w-[41rem] max-md:w-full h-full z-10 bg-black  absolute left-[29rem] max-md:-left-0 max-md:top-[35rem]  transition-all duration-1000 ease-in-out overflow-y-scroll'
    } else {
        classes = theme === 'light' ? 'w-[41rem] max-md:w-full h-full z-10 bg-white  absolute -left-[12rem] max-md:left-0 max-md:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll'
            : 'w-[41rem] max-md:w-full h-full z-10 bg-black  absolute -left-[12rem] max-md:left-0 max-md:top-0  transition-all duration-1000 ease-in-out overflow-y-scroll'
    }




    return (
        <div className={classes}>
            <motion.div className='border p-5 shadow-inne shadow-2xl relative overflow-hidden' onHoverStart={() => {
                // Trigger the animation when hovering starts
                biodata.start({ y: 0 });
            }}
                onHoverEnd={() => {
                    // Reset the animation when hover ends
                    biodata.start({ y: 380 });
                }}>
                <motion.div initial={{ y: 0 }} animate={biodata} className='w-full h-full bg-black bg-opacity-70 flex justify-center items-center absolute cursor-pointer' onClick={bioDataBuilder}>
                    <h1 className="text-white text-xl">BioData Builder</h1>
                </motion.div>
                <img
                    src={bioData} // Replace with your image URL
                    alt="Example"
                    className='w-full cursor-pointer'
                    onClick={bioDataBuilder} // Handle click
                />
            </motion.div>
            <motion.div className='border p-5 shadow-inne shadow-2xl relative overflow-hidden' onHoverStart={() => {
                // Trigger the animation when hovering starts
                user.start({ y: 0 });
            }}
                onHoverEnd={() => {
                    // Reset the animation when hover ends
                    user.start({ y: 380 });
                }}>
                <motion.div initial={{ y: 0 }} animate={user} className='w-full h-full bg-black bg-opacity-70 flex justify-center items-center absolute cursor-pointer' onClick={ecommerceUsers} >
                    <h1 className="text-white text-xl">E-Commerce With Admin Panel</h1>
                </motion.div>
                <img
                    src={eUser} // Replace with your image URL
                    alt="Example"
                    className='w-full cursor-pointer'
                    onClick={ecommerceUsers} // Handle click
                />
            </motion.div>
            <motion.div className='border p-5 shadow-inne shadow-2xl relative overflow-hidden' onHoverStart={() => {
                // Trigger the animation when hovering starts
                createpost.start({ y: 0 });
            }}
                onHoverEnd={() => {
                    // Reset the animation when hover ends
                    createpost.start({ y: 380 });
                }}>
                <motion.div initial={{ y: 0 }} animate={createpost} className='w-full h-full bg-black bg-opacity-70 flex justify-center items-center absolute cursor-pointer' onClick={createPost} >
                    <h1 className="text-white text-xl">Create Post</h1>
                </motion.div>
                <img
                    src={post} // Replace with your image URL
                    alt="Example"
                    className='w-full cursor-pointer'
                    onClick={createPost} // Handle click
                />
            </motion.div>
        </div>
    )
}

export default Work;
