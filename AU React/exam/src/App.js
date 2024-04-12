import './App.css';
import Card from './Card';
import FetchData from './FetchData';
import Students from './Students';

function App() {
  return (
    <div className="App">
      <Card title='Card Component' />
      <Students />
      <FetchData />
    </div>
  );
}

export default App;
