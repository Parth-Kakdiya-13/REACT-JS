import React from 'react'

export const Button = ({ onClick, classes, type, children, verify }) => {
    return (
        <button className={`px-5 py-2 bg-fuchsia-900 text-white mt-5 cursor-pointer  ${classes}`} type={`${type ? type : "button"}`} onClick={onClick} disabled={verify} >
            {children}
        </button>
    )
}
