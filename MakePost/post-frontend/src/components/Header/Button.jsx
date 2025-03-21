import React from 'react'

export const Button = ({ onClick, classes, type, children, verify }) => {
    return (
        <button className={`px-5 py-2 bg-gradient-to-br rounded-md from-cyan-500  to-blue-950 text-white cursor-pointer  ${classes}`} type={`${type ? type : "button"}`} onClick={onClick} disabled={verify} >
            {children}
        </button>
    )
}
