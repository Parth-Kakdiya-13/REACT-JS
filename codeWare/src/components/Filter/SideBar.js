import React, { useState } from 'react'
import './sidebar.module.css'

export const SideBar = (props) => {

    const [gender, setGender] = useState(false);
    const [size, setSize] = useState(false);
    const [color, setColor] = useState(false);


    const genderDropDownHandler = () => {
        if (gender === false) {
            setGender(true);
        } else {
            setGender(false);
        }
    }

    const sizeDropDownHandler = () => {
        if (size === false) {
            setSize(true);
        } else {
            setSize(false);
        }
    }
    const colorDropDownHandler = () => {
        if (color === false) {
            setColor(true);
        } else {
            setColor(false);
        }
    }


    const onchangeSizeFilter = (event) => {
        props.onfilter(event.target.value)
    }




    return (
        <div className='w-1/6 h-96 p-5 gfont1' >
            <h1 className='text-4xl font-mono flex items-start py-12 gfont2'>T-Sirts</h1>
            <div className='flex flex-col items-start'>
                <h3 className='text-2xl font-semibold'>Filter:</h3>
                <div className='none flex flex-col items-start w-full'>
                    <div className='w-full py-3 mt-5' >
                        <button className='flex items-center justify-between w-full' onClick={genderDropDownHandler}>
                            <h2 className='text-xl'>Gender</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
                        </button>
                        {gender && <div className='  flex flex-col items-start text-black pl-3'>
                            <span>Male</span>
                            <span>Female</span>
                        </div>}
                    </div>
                    <div className=' w-full py-3'>
                        <button className='flex items-center justify-between w-full' onClick={sizeDropDownHandler}>
                            <h2 className='text-xl'>Sizes</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
                        </button>
                        {size && <select selected={props.onSelected} className='  flex flex-col items-start pl-3' onChange={onchangeSizeFilter}>
                            <option>S</option>
                            <option>M</option>
                            <option>LG</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>}
                    </div>
                    <div className=' w-full py-3'>
                        <button className='flex items-center justify-between w-full' onClick={colorDropDownHandler}>
                            <h2 className='text-xl'>Colors</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
                        </button>
                        {color && <div className='  flex flex-col items-start text-black pl-3'>
                            <span>Red</span>
                            <span>Black</span>
                            <span>White</span>
                            <span>Gray</span>
                            <span>yellow</span>
                        </div>}
                    </div>
                    <div className=' w-full py-3'>
                        <button className='flex items-center justify-between w-full'>
                            <h2 className='text-xl'>Designs</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
