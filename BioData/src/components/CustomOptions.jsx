import React from 'react'
import { useDispatch } from 'react-redux'
import { customeAction } from '../store/custome-slice'

export const CustomOptions = ({ background, heading, text, value }) => {

    const dispatch = useDispatch()

    return (
        <div className='p-5 flex flex-wrap items-center gap-5'>
            {/* background */}
            <div>
                <h2>Background</h2>
                <div className='flex gap-1 mt-2'>
                    {background.map((color) => {
                        return <>
                            <button className='w-10 h-10 rounded-md border-2 border-black cursor-pointer' onClick={() => dispatch(customeAction.getBackground(color))} style={{ background: color }}></button>
                        </>
                    })}
                </div>
            </div>
            {/* heading */}
            <div>
                <h2>Heading</h2>
                <div className='flex gap-1 mt-2'>
                    {heading.map((color) => {
                        return <>
                            <button className='w-10 h-10 rounded-md border-2 border-black cursor-pointer' onClick={() => dispatch(customeAction.getHeading(color))} style={{ background: color }}></button>
                        </>
                    })}
                </div>
            </div>
            {/* text */}
            <div>
                <h2>Text</h2>
                <div className='flex gap-1 mt-2'>
                    {text.map((color) => {
                        return <>
                            <button className='w-10 h-10 rounded-md border-2 border-black cursor-pointer' onClick={() => dispatch(customeAction.getText(color))} style={{ background: color }}></button>
                        </>
                    })}
                </div>
            </div>
            {/* value */}
            <div>
                <h2>Value</h2>
                <div className='flex gap-1 mt-2'>
                    {value.map((color) => {
                        return <>
                            <button className='w-10 h-10 rounded-md border-2 border-black cursor-pointer' onClick={() => dispatch(customeAction.getValue(color))} style={{ background: color }}></button>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}
