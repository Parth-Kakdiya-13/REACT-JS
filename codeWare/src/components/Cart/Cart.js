import React, { useState } from 'react'
import { CartItems } from './CartItems'

export const Cart = (props) => {

    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    return (
        <>
            <button onClick={showCartHandler}>
                <div className='flex items-center bg-white px-5 py-2 rounded-xl'>
                    <h2 className='mr-2 text-black gfont1 font-semibold text-xl'>Your Cart</h2>
                    <span className='px-2 py-1 rounded-full bg-yellow-500 text-black font-bold gfont2'>0</span>
                </div>
            </button>
            {showCart && <CartItems addItem={props.addItemToCart} onHideCart={hideCartHandler}></CartItems>}
        </>
    )
}
