import { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import { StudentsDatas } from './components/StudentsDatas';
import data from './components/data';
import { DisplayData } from './components/DisplayData';


function App() {


  const [name, setName] = useState("");
  const [display, setDisplay] = useState([]);
  const [card, setCard] = useState(false);

  const stdData = data;

  const getData = (val) => {
    setName(val);
  }


  const filteredItems = stdData.filter(item =>
    item["name"].toLowerCase().includes(name.toLowerCase()) || item["id"] == name || item["enrolment"] == name
  );

  const displayData = (data) => {
    // console.log(data);?
    setDisplay(data);
    setCard(true);
  }

  const closeCardHandler = () => {
    setCard(false);
  }




  return (
    <div className="App px-5">
      <InputForm onGetInput={getData} />
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5 mt-5'>
        {filteredItems.map((item) => {
          return (
            <StudentsDatas
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              enrolment={item.enrolment}
              gitlink={item.gitlink}
              onGetData={displayData}
            />
          )
        })}
      </div>
      {card && <DisplayData onSendData={display} onClick={closeCardHandler} />}
    </div>
  );
}

export default App;
