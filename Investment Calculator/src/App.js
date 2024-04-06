import { useState } from 'react';
import { DataResult } from './Components/DataResult';
import { Header } from './Components/Header';
import { InputForm } from './Components/InputForm';


function App() {

  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput['current-savings'];
    const yearlyContribution = userInput['yearly-contribution'];
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }





  return (
    <div>
      <Header />
      <InputForm onCalculate={calculateHandler} />
      {!userInput && <p style={{ textAlign: 'center' }}>No Investment Calculate yet.</p>}
      {userInput && <DataResult data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
