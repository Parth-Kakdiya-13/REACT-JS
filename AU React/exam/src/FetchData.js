import React, { useState } from 'react'

export default function FetchData() {

    const [list, setList] = useState([]);


    function fetchFDataHandler() {
        fetch('https://swapi.py4e.com/api/films').then((response) => {
            return response.json();
        }).then((response) => {
            const data = response;
            setList(data.results);
            console.log(data.results);
        });
    }

    return (
        <div style={{ backgroundColor: "gray" }}>
            {list.map((data, index) => {
                return <div key={index}>
                    <h1>{data.title}</h1>
                    <h3>{data.opening_crawl}</h3>
                    <h4>{data.producer}</h4>
                </div>
            })}
            <button onClick={fetchFDataHandler}>FetchData</button>
        </div>
    )
}
