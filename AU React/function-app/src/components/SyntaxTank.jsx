import { useState } from 'react';
import classes from './SyntaxTank.module.css';


export const SyntaxTank = ({ onSend }) => {
    const [persons, setPersons] = useState(0)

    //If water dimemcity in Meter


    // let at100p = 100 + "%";
    // at100p = Number.parseInt(at100p);
    let _1Mcube = 1000;
    let pi = 3.14;
    let r = onSend[0];
    let h = onSend[1];
    let wH = onSend[2];
    let tankw = r * 100 + "px";
    let tankh = h * 100 + "px";

    // formulas
    // volume_of_tank = area * height
    //we know that 1mcube(3) = 1000 liters
    //so quantity of water = volume_of_tank * 1000

    const volume_of_tank = pi * r ** r * h; // mcube(3)
    let quantityOfWater = Math.floor(volume_of_tank * _1Mcube)

    const totalWater = Math.floor(pi * r ** r * wH * _1Mcube);

    let capacity = 100 * totalWater / quantityOfWater;
    // capacity = Number.parseInt(capacity) + "%";


    const getPersons = (val) => {
        setPersons(val);
    }

    let perpersonswater;
    if (totalWater < 0) {
        perpersonswater = 0
    } else {
        perpersonswater = totalWater / persons
    }

    return (
        <div className='my-12'>
            <div className=' relative border-2 border-black rounded-b-full overflow-hidden' id={classes.sintex} style={{ width: tankw, height: tankh, transform: 'rotate(180deg)' }}>

                <div className={classes.water} style={{ height: capacity }}></div>
            </div>


            <div className='mt-5'>
                <div className='flex flex-col items-start'>
                    <span className='  text-xl text-center'><span className='text-2xl font-semibold'>Capacity : </span>{quantityOfWater} Ltrs</span>
                    <span className=' top-20 left-20 text-xl  text-center'><span className='text-2xl font-semibold'>Volune of water : </span>{totalWater} Ltrs</span>
                </div>
                <div className='flex items-start py-5'>
                    <span className='text-xl'><span className='text-xl font-bold'>{perpersonswater}</span> liters per Person</span>
                </div>
                <form className='flex flex-col items-start mt-5'>
                    <label className='text-3xl'>Enter no. of persons in PG</label>
                    <input type='text' className='border-2 mt-2' onChange={(e) => getPersons(e.target.value)} />
                </form>
            </div>
        </div >
    )
}
