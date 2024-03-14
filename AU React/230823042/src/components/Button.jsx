import React from 'react'

export const Button = ({ title, className }) => {
    return (
        <button className={className}>
            {title}
        </button>
    )
}
