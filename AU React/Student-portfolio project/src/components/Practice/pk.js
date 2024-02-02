import React, { useState } from 'react';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    };

    const handleAddClick = () => {
        if (newItem.trim() !== '') {
            // Create a new array with the previous items and the new item
            const updatedItems = [...items, newItem];

            // Update the state with the new array and reset the input field
            setItems(updatedItems);
            setNewItem('');
        }
    };

    return (
        <div>
            <h2>Item List:</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <label>
                New Item:
                <input
                    type="text"
                    value={newItem}
                    onChange={handleInputChange}
                />
            </label>

            <button onClick={handleAddClick}>Add Item</button>
        </div>
    );
};

export default ItemList;
