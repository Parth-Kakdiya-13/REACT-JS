import './App.css';
import { useState } from 'react';
import { Collections } from './Components/Collections';
import { SideBar } from './Components/Filter/SideBar';
import { Navbar } from './Components/Navbar';
import items from './data';

const item = items;

function App() {
  const [size, setSize] = useState("S");
  const [cart, setCart] = useState([]);


  const filteredBar = (size) => {
    setSize(size);
    // console.log(size);
  }

  const filterItems = item.filter((s) => {
    return s.size === size;
  });

  const addToCartHandler = (item) => {
    setCart((preItems) => {
      return [item, ...preItems];
    });

  }






  return (
    <div>
      <Navbar updateCart={cart} />

      <div className='flex'>
        <SideBar onfilter={filteredBar} onSelected={size} />
        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {filterItems.map((item) => {
            return <Collections
              key={item.id}
              id={item.id}
              heading={item.heading}
              line={item.line}
              price={item.price}
              image={item.image}
              size={item.size}
              onGetItem={() => addToCartHandler(item)}
            />
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
