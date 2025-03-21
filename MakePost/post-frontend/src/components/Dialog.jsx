import React from 'react'
import { Button } from './Header/Button'

export const Dialog = ({ text, onClick, logo }) => {
    return (
        <>
            <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40' onClick={onClick}>
                <div className='w-1/2 relative bg-white rounded-2xl p-5 flex flex-col items-center  z-50'>
                    <p className='text-center text-3xl font-mono'>{text}</p>
                    {logo && <p className='text-center p-5 rounded-full text-3xl bg-fuchsia-950 text-white my-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCheckAll0"><g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0" /></path><path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0" /></path><path d="M7.5 13.5l4 4l10.75 -10.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdCheckAll0)" /></svg>
                    </p>}
                    <Button classes="bg-gray-500" onClick={onClick}>Close</Button>
                </div>
            </div>
        </>
    )
}
