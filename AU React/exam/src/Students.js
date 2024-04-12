//4

import React, { useState } from 'react';

export default function Students() {

    const initialdata = {
        name: "mihir",
        age: '23'
    }

    const [list, setlist] = useState([initialdata]);

    function changeHandler() {
        setlist([{
            name: "parth",
            age: '22'
        }]);
    }

    return (
        <div style={{ backgroundColor: "black", color: "white" }}>
            <h1>{list.map((data, index) => {
                return (
                    <div key={index}>
                        <h2>{data.name}</h2>
                        <h4>{data.age}</h4>
                    </div>
                )
            })}</h1>
            <button onClick={changeHandler}>Change</button>
        </div>
    )
}
