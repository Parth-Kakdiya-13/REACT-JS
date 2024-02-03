import { useState } from 'react';
import { CurricularActivities } from './components/Pages/CurricularActivities';
import { DisplayData } from './components/Pages/DisplayData';
import { StudentObjective } from './components/Pages/StudentObjective';
import { StudetnDetails } from './components/Pages/StudetnDetails';

const App = () => {

  // const [send, setSend] = useState([]);

  // const getData = (val) => {
  //   // console.log(val);
  //   setSend(val);
  // }

  return (
    <div>
      <StudetnDetails/>
      <CurricularActivities />
      <StudentObjective />
      {/* <DisplayData onSendData={send} /> */}
    </div>
  );
};

export default App;