import { motion, useAnimation } from "framer-motion";

import project from '../assets/project.png'
import eAdmin from '../assets/eAdmin.png'
import eUser from '../assets/eUser.png'



const Work = ({ workClasses, theme }) => {
    const admin = useAnimation();
    const user = useAnimation();
    const projectmanagement = useAnimation();


    // const ecommerceAdmin = () => {
    //     // Redirect to the desired link
    //     window.location.href = "https://ecommerce-v36f.vercel.app/";
    // };
    const ecommerceUsers = () => {
        // Redirect to the desired link
        window.location.href = "https://ecommerce-ql8y.vercel.app/";
    };
    const projectManagement = () => {
        // Redirect to the desired link
        window.location.href = "https://react-js-six-rose.vercel.app/";
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
            {/* <motion.div className='border p-5 shadow-inne shadow-2xl relative overflow-hidden' onHoverStart={() => {
                // Trigger the animation when hovering starts
                admin.start({ y: 0 });
            }}
                onHoverEnd={() => {
                    // Reset the animation when hover ends
                    admin.start({ y: 380 });
                }}>
                <motion.div initial={{ y: 0 }} animate={admin} className='w-full h-full bg-black bg-opacity-70 flex justify-center items-center absolute cursor-pointer' onClick={ecommerceAdmin}>
                    <h1 className="text-white text-xl">Admin Panel</h1>
                </motion.div>
                <img
                    src={eAdmin} // Replace with your image URL
                    alt="Example"
                    className='w-full cursor-pointer'
                    onClick={ecommerceAdmin} // Handle click
                />
            </motion.div> */}
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
                projectmanagement.start({ y: 0 });
            }}
                onHoverEnd={() => {
                    // Reset the animation when hover ends
                    projectmanagement.start({ y: 380 });
                }}>
                <motion.div initial={{ y: 0 }} animate={projectmanagement} className='w-full h-full bg-black bg-opacity-70 flex justify-center items-center absolute cursor-pointer' onClick={projectManagement} >
                    <h1 className="text-white text-xl">Project Management</h1>
                </motion.div>
                <img
                    src={project} // Replace with your image URL
                    alt="Example"
                    className='w-full cursor-pointer'
                    onClick={projectManagement} // Handle click
                />
            </motion.div>
        </div>
    )
}

export default Work;
