import React from "react";
import { motion } from "framer-motion";
import Bee from '../assets/Bee.png'
import { useNavigate } from "react-router-dom";

const FloatingDiv = () => {

    const navigate = useNavigate()

    function clickHandler() {
        if (localStorage.getItem("token")) {
            navigate('/singlepost')
        } else {
            navigate('/login')
        }
    }


    return (
        <motion.img
            src={Bee}
            className="fixed top-0 left-0 w-20 h-20  flex items-center justify-center text-white text-lg font-bold z-100 cursor-pointer"
            animate={{
                x: ["0vw", "80vw", "50vw", "10vw", "90vw", "0vw"],
                y: ["0vh", "80vh", "20vh", "70vh", "30vh", "0vh"],
                rotate: [0, 360] // Continuous rotation
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
            }}
            onClick={clickHandler}
        />
    );
};

export default FloatingDiv;
