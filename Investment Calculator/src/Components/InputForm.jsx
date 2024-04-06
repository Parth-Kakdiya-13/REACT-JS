import React, { useState } from 'react';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
}

export const InputForm = (props) => {

  const [userInput, setUserInput] = useState(initialUserInput)

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput)
  }

  const resetHandler = () => {
    setUserInput(initialUserInput)
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((preInput) => {
      return {
        ...preInput,
        [input]: +value
      }
    })
  }


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={userInput['current-savings']} id="current-savings" onChange={(event) => { inputChangeHandler('current-savings', event.target.value) }} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={userInput['yearly-contribution']} id="yearly-contribution" onChange={(event) => { inputChangeHandler('yearly-contribution', event.target.value) }} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={userInput['expected-return']} id="expected-return" onChange={(event) => { inputChangeHandler('expected-return', event.target.value) }} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value={userInput['duration']} id="duration" onChange={(event) => { inputChangeHandler('duration', event.target.value) }} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}
