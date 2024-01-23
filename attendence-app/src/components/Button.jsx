import React from 'react'

export const Button = ({ className, children, onclick }) => {
    return (
        <button className={className} onClick={onclick}>
            {children}
        </button >
    )
}
