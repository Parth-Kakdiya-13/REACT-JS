import React from 'react'
import { Button } from '../components/Button'
import cvtemplate from '../assets/CV-Template.jpg'
import { Services } from '../components/Services'

export const Home = () => {
    return (
        <>
            <div className='py-10 flex items-center max-md:flex-col max-md:mt-20'>
                <div className='w-full flex flex-col items-start justify-center max-md:items-center'>
                    <h1 className='text-6xl font-black max-md:text-center max-md:text-5xl max-sm:text-4xl'>BioData Builder (Fast,<br /> Easy & Free to Use)</h1>
                    <p className='py-10 text-2xl text-gray-500 max-md:text-center max-md:text-xl max-sm:text-lg'>Create your BioData with one of the best Bio Data Builder.<br /> With eazy and scalable approach, make with mobile or desktop</p>
                    <div className='flex gap-5 max-sm:flex-col'>
                        <Button classes="bg-yellow-500/50 hover:bg-yellow-500 text-xl font-semibold">Create Bio</Button>
                        <Button classes="bg-blue-500/50 hover:bg-blue-500 text-xl font-semibold">Explore Designs</Button>
                    </div>
                </div>
                <div className='flex justify-center shadow-2xl shadow-gray-500 w-1/2 max-md:mt-10 rounded-md'>
                    <img className='max-w-max h-[30rem]' src={cvtemplate} />
                </div>
            </div>
            <Services />
        </>
    )
}
