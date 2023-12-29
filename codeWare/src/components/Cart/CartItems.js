import React, { useState } from 'react';


export const CartItems = (props) => {

    const [cart, setCart] = useState(props.addItem);
    const removeItemHandler = (action) => {
        console.log(action.id);
    }



    return (
        <div className='fixed top-0 left-0 z-100  w-screen h-screen' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={props.onHideCart}>
            <div className='bg-white text-black w-1/2 mx-auto rounded-xl p-3 mt-10' >
                {cart.map((item) => {
                    return (
                        <div className='flex justify-between items-center'>
                            <div className='' key={item.price}>
                                <h2 className='mt-5'>{item.heading}</h2>
                                <p>{item.line}</p>
                                <span>{item.price}</span>
                            </div>
                            <div className=''>
                                <button onClick={() => { removeItemHandler(item) }} className='px-5 py-1 bg-yellow-500 text-black rounded-xl text-2xl'>-</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
