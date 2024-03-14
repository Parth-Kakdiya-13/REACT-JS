import { Highlight } from "./components/Highlight";
import { TopNavbar } from "./components/TopNavbar";


function App() {
  return (
    <div className="App flex justify-between items-center px-5 py-2">
      <Highlight />
      <TopNavbar />
    </div>
  );
}

export default App;
