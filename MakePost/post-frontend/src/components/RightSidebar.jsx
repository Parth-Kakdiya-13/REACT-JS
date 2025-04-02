import { motion } from "framer-motion";
import profileimage from '../assets/pk_01.jpg';


const RightSidebar = () => {




    return <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-white">Suggestions</h2>
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className='w-full flex flex-col items-start gap-5  bg-blue-950 rounded-xl p-2 cursor-pointer'>
            <img src={profileimage} className='w-full h-24 object-cover rounded-xl' alt="profileimage" />
            <div className='flex flex-col justify-center items-start text-white text-xs'>
                <h2>Parth  Patel</h2>
                <p className='text-gray-500'>Creator and learner</p>
            </div>
        </motion.div>
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className='w-full flex flex-col items-start gap-5  bg-blue-950 rounded-xl p-2 cursor-pointer'>
            <img src={profileimage} className='w-full h-24 object-cover rounded-xl' alt="profileimage" />
            <div className='flex flex-col justify-center items-start text-white text-xs'>
                <h2>Parth  Patel</h2>
                <p className='text-gray-500'>Creator and learner</p>
            </div>
        </motion.div>
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className='w-full flex flex-col items-start gap-5  bg-blue-950 rounded-xl p-2 cursor-pointer'>
            <img src={profileimage} className='w-full h-24 object-cover rounded-xl' alt="profileimage" />
            <div className='flex flex-col justify-center items-start text-white text-xs'>
                <h2>Parth  Patel</h2>
                <p className='text-gray-500'>Creator and learner</p>
            </div>
        </motion.div>


    </div>;
};

export default RightSidebar;
