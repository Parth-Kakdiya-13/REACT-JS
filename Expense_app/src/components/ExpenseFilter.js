import React from 'react'

export default function ExpenseFilter(props) {


  const dropDownChangeHandler = (event) =>{

    props.onChangeFilter(event.target.value);
}


  return (
  <>
    <div className='flex justify-between'>
        <div className='text-white mx-5 font-bold text-2xl'>
            <h2>Filter Year</h2>
        </div>
        <div className=' mx-5 '>
            <select value={props.selected} onChange={dropDownChangeHandler} className='font-bold text-2xl'>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>
  </>
  )
}
