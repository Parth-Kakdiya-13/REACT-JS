import { CurricularActivities } from './components/Pages/CurricularActivities';
// import { DisplayData } from './components/Pages/DisplayData';
import { StudentObjective } from './components/Pages/StudentObjective';
import { StudetnDetails } from './components/Pages/StudetnDetails';
import { SemesterWiserecord } from './components/Pages/SemesterWiserecord';
import { SemesterWiseAcadmicRecordsOfUniversityLevel } from './components/Pages/SemesterWiseAcadmicRecordsOfUniversityLevel';
import { GeneralObservationAboutMenteeRecords } from './components/Pages/GeneralObservationAboutMenteeRecords';

const App = () => {

  // const [send, setSend] = useState([]);

  // const getData = (val) => {
  //   // console.log(val);
  //   setSend(val);
  // }

  return (
    <div>
      <StudetnDetails />
      <CurricularActivities />
      <StudentObjective />
      {/* <DisplayData onSendData={send} /> */}
      <SemesterWiserecord />
      <SemesterWiseAcadmicRecordsOfUniversityLevel />
      <GeneralObservationAboutMenteeRecords />
    </div>
  );
};

export default App;