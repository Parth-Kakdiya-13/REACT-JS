import React from 'react'
import { Cart } from './Cart/Cart'


export const Navbar = (props) => {
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-between items-center px-10 py-5'>
                <h2 className='text-2xl gfont2 font-semibold'>Code <span className='text-black bg-yellow-500 px-4 py-1 rounded-xl'>Ware</span></h2>
                <Cart addItemToCart={props.updateCart} />
            </div>
        </div>
    )
}
