import React from 'react'

export const Button = ({ children, type, onClick, classes }) => {
    return (
        <button type={type ? type : "button"} className={`${classes} rounded-full px-8 py-2 cursor-pointer hover:text-white transition-all duration-200 ease-in-out`} onClick={onClick}>{children}</button>
    )
}
