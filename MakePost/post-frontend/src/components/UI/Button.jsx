import { motion } from 'framer-motion'
import React from 'react'

export const Button = ({ onClick, classes, type, children, verify }) => {
    return (
        <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className={`px-5 rounded-md py-2 bg-blue-900/50 text-white cursor-pointer  ${classes}`} type={`${type ? type : "button"}`} onClick={onClick} disabled={verify} >
            {children}
        </motion.button>
    )
}