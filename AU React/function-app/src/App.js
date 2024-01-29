import { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import { SyntaxTank } from './components/SyntaxTank';

function App() {

  const [sendData, setSendData] = useState([]);

  const [r, h, gh] = sendData;



  const getInptHandler = (val) => {
    setSendData(val);
  }

  return (
    <div className="App flex justify-evenly items-center">
      <InputForm onGetdata={getInptHandler} />
      <SyntaxTank onSend={[r, h, gh]} />
    </div>
  );
}

export default App;
