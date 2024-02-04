import { CurricularActivities } from './components/Pages/CurricularActivities';
import { StudentObjective } from './components/Pages/StudentObjective';
import { StudetnDetails } from './components/Pages/StudetnDetails';
import { SemesterWiserecord } from './components/Pages/SemesterWiserecord';
import { SemesterWiseAcadmicRecordsOfUniversityLevel } from './components/Pages/SemesterWiseAcadmicRecordsOfUniversityLevel';
import { GeneralObservationAboutMenteeRecords } from './components/Pages/GeneralObservationAboutMenteeRecords';
import { RecordsOfStidentsMentoring } from './components/Pages/RecordsOfStidentsMentoring';
import { Login } from './components/Pages/Login';
import './App.css'
import { useState } from 'react';

const App = () => {

  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(true);
  }


  return (
    <div>
      {login ? '' : <Login onLogin={loginHandler} />}
      {login && <><StudetnDetails />
        <CurricularActivities />
        <StudentObjective />
        <SemesterWiserecord />
        <SemesterWiseAcadmicRecordsOfUniversityLevel />
        <GeneralObservationAboutMenteeRecords />
        <RecordsOfStidentsMentoring />
      </>}
    </div>
  );
};

export default App;