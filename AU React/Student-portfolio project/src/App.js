import { useState } from 'react';
import { CurricularActivities } from './components/Pages/CurricularActivities';
import { DisplayData } from './components/Pages/DisplayData';
import { StudentObjective } from './components/Pages/StudentObjective';

const App = () => {

  // const [send, setSend] = useState([]);

  // const getData = (val) => {
  //   // console.log(val);
  //   setSend(val);
  // }

  return (
    <div>
      <CurricularActivities />
      <StudentObjective />
      {/* <DisplayData onSendData={send} /> */}
    </div>
  );
};

export default App;