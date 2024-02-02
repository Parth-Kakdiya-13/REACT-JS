import React, { useState } from 'react'

export const Demo2 = () => {

    const [add, setAdd] = useState([{
        value0: "",
        value1: "",
    }]);

    const addItemHandler = () => {
        setAdd([...add, {
            value0: "",
            value1: ""
        }])
    }
    console.log(add);

    const changeHandler = (event, index) => {
        console.log(event.target.vakue);
        let values = [...add];
        values[index].value0 = event.target.value;
        values[index].value1 = event.target.value;
        console.log(values);
        setAdd(values);
    }

    // console.log(add); 

    return (
        <div>
            {add.map((text, index) => {
                return <li key={index}>
                    <input className='border block' value={text.value0} type='text' onChange={(e) => changeHandler(e, index)} />
                    <input className='border block' value={text.value1} type='text' onChange={(e) => changeHandler(e, index)} />
                </li>
            })}

            <button type='' onClick={addItemHandler}>Add</button>
        </div >
    )
}
