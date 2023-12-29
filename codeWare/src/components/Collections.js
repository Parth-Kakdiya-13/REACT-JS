import React from 'react'


export const Collections = (props) => {

    return (
        <div className='p-5 flex flex-col items-start shadow-2xl gfont1 mx-2'>
            <img src={props.image} alt='img_01' className='w-96 h-96' />
            <h2 className='mt-5'>{props.heading}</h2>
            <p>{props.line}</p>
            <span>{props.price}</span>
            <button type='button' onClick={props.onGetItem} className='bg-yellow-500 rounded-lg px-5 py-2 mt-2'>Add to cart</button>
        </div>
    )
}
