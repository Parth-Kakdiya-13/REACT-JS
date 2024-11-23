import React, { useState } from 'react';

export const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        // setIsEditing(isEditing ? false : true);
        //--1. both are separeate 
        // setIsEditing(!isEditing);// => it will be true
        // setIsEditing(!isEditing);// => it will be false

        //--2. both are separeate 
        //setIsEditing((editing) => !editing) //schedule a state update to true
        setIsEditing((editing) => !editing);  //schedule a state update to true //right way and best practice
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const changeNameHandler = (val) => {
        setPlayerName(val.target.value);
    }

    let content;
    // let btnChange;
    if (isEditing) {
        content = <input type="text" placeholder='Name' value={playerName} onChange={changeNameHandler} />;
        //btnChange = "Save";
    } else {
        content = <span className="player-name">{playerName}</span>;
        //btnChange = "Edit";
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className='player'>
                {content}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
